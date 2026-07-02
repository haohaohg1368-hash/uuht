import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    // 获取 URL 查询参数 (支持 Google Ads 追踪模板传递的参数)
    const searchParams = request.nextUrl.searchParams;
    const queryParams: Record<string, string> = {};
    
    // 收集所有查询参数
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    // 查找追踪链接
    const { data: link, error } = await supabase
      .from('affiliate_links')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error || !link) {
      return new NextResponse('Link not found', { status: 404 });
    }

    // 生成唯一点击ID（用于后续转化追踪）
    const clickId = crypto.randomUUID();

    // 获取请求信息
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referrer = request.headers.get('referer') || 'direct';

    // 检测设备类型
    let deviceType = 'desktop';
    if (userAgent.toLowerCase().includes('mobile')) {
      deviceType = 'mobile';
    } else if (userAgent.toLowerCase().includes('tablet')) {
      deviceType = 'tablet';
    }

    // 构建最终跳转 URL
    let finalUrl = link.destination_url;
    
    // 如果有查询参数，附加到目标 URL
    if (Object.keys(queryParams).length > 0) {
      const urlObj = new URL(finalUrl);
      
      // 将查询参数添加到目标 URL
      Object.entries(queryParams).forEach(([key, value]) => {
        urlObj.searchParams.append(key, value);
      });
      
      finalUrl = urlObj.toString();
    }

    // 记录点击（包含查询参数）
    await supabase.from('link_clicks').insert({
      link_id: link.id,
      click_id: clickId,
      ip_address: ip,
      user_agent: userAgent,
      referrer,
      device_type: deviceType,
      // 存储查询参数为 JSON 字符串（如果需要）
      country: Object.keys(queryParams).length > 0 ? JSON.stringify(queryParams) : null
    });

    // 更新链接的点击统计
    await supabase
      .from('affiliate_links')
      .update({
        clicks: link.clicks + 1,
        last_clicked_at: new Date()
      })
      .eq('id', link.id);

    // 重定向到最终目标链接（带参数）
    return NextResponse.redirect(finalUrl, 302);
  } catch (error) {
    console.error('Error processing redirect:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
