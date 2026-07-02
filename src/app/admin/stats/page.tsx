'use client';

import AdminAuth from '@/components/AdminAuth';
import { useState, useEffect } from 'react';

interface Stats {
  overview: {
    totalLinks: number;
    totalClicks: number;
    todayClicks: number;
  };
  topLinks: Array<{
    slug: string;
    title: string;
    clicks: number;
    merchant?: string;
    category?: string;
  }>;
  dailyStats: Array<{
    date: string;
    count: number;
  }>;
}

export default function StatsDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8">加载中...</div>;
  }

  if (!stats) {
    return <div className="p-8">加载失败</div>;
  }

  return (
    <AdminAuth>
      <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-xl font-bold text-gray-900">UUHT</a>
              <div className="hidden md:flex space-x-4">
                <a href="/admin/links" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                  链接管理
                </a>
                <a href="/admin/stats" className="px-3 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                  数据统计
                </a>
                <a href="/admin/tracking-template" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                  追踪模板
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">数据统计看板</h1>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-sm text-gray-600 mb-2">总链接数</div>
            <div className="text-4xl font-bold text-primary-600">{stats.overview.totalLinks}</div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-sm text-gray-600 mb-2">总点击数</div>
            <div className="text-4xl font-bold text-green-600">{stats.overview.totalClicks}</div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-sm text-gray-600 mb-2">今日点击</div>
            <div className="text-4xl font-bold text-blue-600">{stats.overview.todayClicks}</div>
          </div>
        </div>

        {/* Top Links */}
        <div className="bg-white rounded-xl shadow mb-8">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">Top 5 热门链接</h2>
          </div>
          <div className="p-6">
            {stats.topLinks.length === 0 ? (
              <p className="text-gray-500 text-center">暂无数据</p>
            ) : (
              <div className="space-y-4">
                {stats.topLinks.map((link, index) => (
                  <div key={link.slug} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{link.title}</div>
                        <div className="text-sm text-gray-600">
                          /go/{link.slug} • {link.merchant || '未分类'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{link.clicks}</div>
                      <div className="text-sm text-gray-600">点击</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Daily Stats Chart */}
        <div className="bg-white rounded-xl shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">最近7天趋势</h2>
          </div>
          <div className="p-6">
            {stats.dailyStats.length === 0 ? (
              <p className="text-gray-500 text-center">暂无数据</p>
            ) : (
              <div className="space-y-3">
                {stats.dailyStats.map((day) => (
                  <div key={day.date} className="flex items-center space-x-4">
                    <div className="w-24 text-sm text-gray-600">{day.date}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                      <div
                        className="bg-primary-600 h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(100, (day.count / Math.max(...stats.dailyStats.map(d => d.count))) * 100)}%`
                        }}
                      />
                    </div>
                    <div className="w-16 text-right font-semibold text-gray-900">{day.count}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </AdminAuth>
  );
}
