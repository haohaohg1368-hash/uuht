import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - 获取统计数据
export async function GET() {
  try {
    // 总体统计
    const { data: totalLinks } = await supabase
      .from('affiliate_links')
      .select('id', { count: 'exact' });

    const { data: totalClicks } = await supabase
      .from('link_clicks')
      .select('id', { count: 'exact' });

    // 今日点击数
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { data: todayClicks } = await supabase
      .from('link_clicks')
      .select('id', { count: 'exact' })
      .gte('clicked_at', today.toISOString());

    // Top 5 链接
    const { data: topLinks } = await supabase
      .from('affiliate_links')
      .select('slug, title, clicks, merchant, category')
      .order('clicks', { ascending: false })
      .limit(5);

    // 最近7天趋势
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const { data: recentClicks } = await supabase
      .from('link_clicks')
      .select('clicked_at')
      .gte('clicked_at', sevenDaysAgo.toISOString());

    // 按天统计
    const dailyStats: Record<string, number> = {};
    recentClicks?.forEach((click) => {
      const date = new Date(click.clicked_at).toLocaleDateString();
      dailyStats[date] = (dailyStats[date] || 0) + 1;
    });

    return NextResponse.json({
      overview: {
        totalLinks: totalLinks?.length || 0,
        totalClicks: totalClicks?.length || 0,
        todayClicks: todayClicks?.length || 0
      },
      topLinks: topLinks || [],
      dailyStats: Object.entries(dailyStats).map(([date, count]) => ({
        date,
        count
      }))
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
