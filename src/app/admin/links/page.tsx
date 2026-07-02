'use client';

import { useState, useEffect } from 'react';
import AdminAuth from '@/components/AdminAuth';

interface AffiliateLink {
  id: string;
  slug: string;
  title: string;
  destination_url: string;
  landing_page_url?: string;
  merchant?: string;
  category?: string;
  clicks: number;
  is_active: boolean;
  created_at: string;
}

export default function LinksManager() {
  const [links, setLinks] = useState<AffiliateLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingLink, setEditingLink] = useState<AffiliateLink | null>(null);
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    destination_url: '',
    landing_page_url: '',
    merchant: '',
    category: '',
    notes: ''
  });

  // 加载链接列表
  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const res = await fetch('/api/links');
      const data = await res.json();
      setLinks(data.links || []);
    } catch (error) {
      console.error('Error fetching links:', error);
    } finally {
      setLoading(false);
    }
  };

  // 创建或更新链接
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingLink) {
        // 更新
        await fetch('/api/links', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingLink.id, ...formData })
        });
      } else {
        // 创建
        await fetch('/api/links', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }

      // 重置表单并关闭模态框
      setFormData({
        slug: '',
        title: '',
        destination_url: '',
        landing_page_url: '',
        merchant: '',
        category: '',
        notes: ''
      });
      setEditingLink(null);
      setShowModal(false);
      
      // 重新加载列表
      fetchLinks();
    } catch (error) {
      console.error('Error saving link:', error);
      alert('保存失败，请重试');
    }
  };

  // 编辑链接
  const handleEdit = (link: AffiliateLink) => {
    setEditingLink(link);
    setFormData({
      slug: link.slug,
      title: link.title,
      destination_url: link.destination_url,
      landing_page_url: link.landing_page_url || '',
      merchant: link.merchant || '',
      category: link.category || '',
      notes: ''
    });
    setShowModal(true);
  };

  // 删除链接
  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个链接吗？')) return;

    try {
      await fetch(`/api/links?id=${id}`, {
        method: 'DELETE'
      });
      fetchLinks();
    } catch (error) {
      console.error('Error deleting link:', error);
      alert('删除失败，请重试');
    }
  };

  // 复制链接
  const copyLink = (slug: string) => {
    const fullUrl = `${window.location.origin}/go/${slug}`;
    navigator.clipboard.writeText(fullUrl);
    alert(`已复制: ${fullUrl}`);
  };

  if (loading) {
    return <div className="p-8">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-xl font-bold text-gray-900">UUHT</a>
              <div className="hidden md:flex space-x-4">
                <a href="/admin/links" className="px-3 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                  链接管理
                </a>
                <a href="/admin/stats" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
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
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">联盟链接管理</h1>
          <button
            onClick={() => {
              setEditingLink(null);
              setFormData({
                slug: '',
                title: '',
                destination_url: '',
                merchant: '',
                category: '',
                notes: ''
              });
              setShowModal(true);
            }}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + 添加新链接
          </button>
        </div>

        {/* Links Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">短链接</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">标题</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">商家</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">点击数</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {links.map((link) => (
                <tr key={link.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      /go/{link.slug}
                    </code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{link.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{link.merchant || '-'}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {link.clicks}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => copyLink(link.slug)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        复制
                      </button>
                      <button
                        onClick={() => handleEdit(link)}
                        className="text-green-600 hover:text-green-800 text-sm"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => handleDelete(link.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        删除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {links.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              暂无链接，点击右上角按钮添加
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6">
              {editingLink ? '编辑链接' : '添加新链接'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  短链接后缀 *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="例如: air-fryer"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  required
                  disabled={!!editingLink}
                />
                <p className="text-xs text-gray-500 mt-1">
                  完整链接: {window.location.origin}/go/{formData.slug || 'your-slug'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  标题 *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="例如: Best Air Fryer 2026"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  最终落地页 URL *
                </label>
                <input
                  type="url"
                  value={formData.landing_page_url || ''}
                  onChange={(e) => setFormData({ ...formData, landing_page_url: e.target.value })}
                  placeholder="https://www.amazon.com/dp/B08N5WRWNW"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  💡 不带追踪参数的干净 URL，用于 Google Ads 最终到达网址
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  完整联盟链接（带追踪参数）*
                </label>
                <textarea
                  value={formData.destination_url}
                  onChange={(e) => setFormData({ ...formData, destination_url: e.target.value })}
                  placeholder="https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20&ref=xxx"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  rows={3}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  包含 affiliate ID 和其他追踪参数的完整链接
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  商家
                </label>
                <input
                  type="text"
                  value={formData.merchant}
                  onChange={(e) => setFormData({ ...formData, merchant: e.target.value })}
                  placeholder="例如: Amazon"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  分类
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="例如: Kitchen Appliances"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {editingLink ? '更新' : '创建'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  取消
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </AdminAuth>
  );
}
