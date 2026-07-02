import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

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

    // 记录点击
    await supabase.from('link_clicks').insert({
      link_id: link.id,
      click_id: clickId,
      ip_address: ip,
      user_agent: userAgent,
      referrer,
      device_type: deviceType
    });

    // 更新链接的点击统计
    await supabase
      .from('affiliate_links')
      .update({
        clicks: link.clicks + 1,
        last_clicked_at: new Date()
      })
      .eq('id', link.id);

    // 重定向到目标链接
    return NextResponse.redirect(link.destination_url, 302);
  } catch (error) {
    console.error('Error processing redirect:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
