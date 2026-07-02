'use client';

import AdminAuth from '@/components/AdminAuth';
import { useState, useEffect } from 'react';

interface AffiliateLink {
  id: string;
  slug: string;
  title: string;
  destination_url: string;
  merchant: string;
  category: string;
}

export default function TrackingTemplatePage() {
  const [links, setLinks] = useState<AffiliateLink[]>([]);
  const [selectedSlug, setSelectedSlug] = useState('');
  const [customParams, setCustomParams] = useState<Array<{ key: string; value: string }>>([
    { key: '', value: '' }
  ]);
  const [generatedTemplate, setGeneratedTemplate] = useState('');
  const [loading, setLoading] = useState(true);

  // 加载所有链接
  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await fetch('/api/links');
      const data = await response.json();
      if (data.links) {
        setLinks(data.links);
      }
    } catch (error) {
      console.error('Error fetching links:', error);
    } finally {
      setLoading(false);
    }
  };

  // 生成追踪模板
  const generateTemplate = () => {
    if (!selectedSlug) {
      alert('请先选择一个链接');
      return;
    }

    // 构建基础模板
    let template = `{lpurl}`;

    // 添加自定义参数
    const params = customParams
      .filter(p => p.key && p.value)
      .map(p => `${p.key}=${p.value}`)
      .join('&');

    if (params) {
      template += `?${params}`;
    }

    setGeneratedTemplate(template);
  };

  // 添加参数行
  const addParamRow = () => {
    setCustomParams([...customParams, { key: '', value: '' }]);
  };

  // 删除参数行
  const removeParamRow = (index: number) => {
    setCustomParams(customParams.filter((_, i) => i !== index));
  };

  // 更新参数
  const updateParam = (index: number, field: 'key' | 'value', value: string) => {
    const newParams = [...customParams];
    newParams[index][field] = value;
    setCustomParams(newParams);
  };

  // 复制到剪贴板
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('已复制到剪贴板!');
    });
  };

  // 获取选中的链接信息
  const selectedLink = links.find(link => link.slug === selectedSlug);

  // 常用参数模板
  const commonTemplates = [
    {
      name: 'Google Ads 基础追踪',
      params: [
        { key: 'utm_source', value: 'google' },
        { key: 'utm_medium', value: 'cpc' },
        { key: 'utm_campaign', value: '{campaignid}' },
        { key: 'utm_term', value: '{keyword}' },
        { key: 'utm_content', value: '{adgroupid}' }
      ]
    },
    {
      name: '联盟计划追踪',
      params: [
        { key: 'affiliate_id', value: 'YOUR_ID' },
        { key: 'campaign', value: '{campaignid}' },
        { key: 'source', value: 'google_ads' }
      ]
    },
    {
      name: '完整电商追踪',
      params: [
        { key: 'utm_source', value: 'google' },
        { key: 'utm_medium', value: 'cpc' },
        { key: 'utm_campaign', value: '{campaignid}' },
        { key: 'utm_term', value: '{keyword}' },
        { key: 'utm_content', value: '{creative}' },
        { key: 'gclid', value: '{gclid}' }
      ]
    }
  ];

  // 应用模板
  const applyTemplate = (template: typeof commonTemplates[0]) => {
    setCustomParams(template.params.map(p => ({ ...p })));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Google Ads 追踪模板生成器</h1>
          <p className="mt-2 text-gray-600">
            生成类似 LinkHaiTao 的 {`{lpurl}`} 追踪模板，用于 Google Ads 广告系列
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Configuration */}
          <div className="space-y-6">
            {/* Select Link */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">1. 选择短链接</h2>
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">-- 选择一个链接 --</option>
                {links.map((link) => (
                  <option key={link.id} value={link.slug}>
                    {link.title} ({link.slug})
                  </option>
                ))}
              </select>

              {selectedLink && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="text-sm text-blue-800">
                    <strong>短链接:</strong>{' '}
                    <code className="bg-white px-2 py-1 rounded">
                      https://www.uuht.shop/go/{selectedLink.slug}
                    </code>
                  </p>
                  <p className="text-sm text-blue-800 mt-2">
                    <strong>目标网址:</strong><br />
                    <span className="break-all">{selectedLink.destination_url}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Quick Templates */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">2. 快速模板（可选）</h2>
              <div className="space-y-2">
                {commonTemplates.map((template, index) => (
                  <button
                    key={index}
                    onClick={() => applyTemplate(template)}
                    className="w-full text-left px-4 py-3 border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{template.name}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {template.params.map(p => p.key).join(', ')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Parameters */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">3. 自定义参数</h2>
                <button
                  onClick={addParamRow}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  + 添加参数
                </button>
              </div>

              <div className="space-y-3">
                {customParams.map((param, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <input
                      type="text"
                      placeholder="参数名 (如 utm_source)"
                      value={param.key}
                      onChange={(e) => updateParam(index, 'key', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <span className="text-gray-400 pt-2">=</span>
                    <input
                      type="text"
                      placeholder="值 (如 google)"
                      value={param.value}
                      onChange={(e) => updateParam(index, 'value', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    {customParams.length > 1 && (
                      <button
                        onClick={() => removeParamRow(index)}
                        className="text-red-500 hover:text-red-700 px-2"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-yellow-50 rounded-md text-sm text-yellow-800">
                <strong>💡 提示:</strong> 使用 Google Ads 动态参数如 {'{campaignid}'}, {'{keyword}'}, {'{adgroupid}'} 等
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateTemplate}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              生成追踪模板
            </button>
          </div>

          {/* Right Column - Result */}
          <div className="space-y-6">
            {/* Generated Template */}
            {generatedTemplate && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">生成的追踪模板</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    追踪模板 (Tracking Template)
                  </label>
                  <div className="relative">
                    <textarea
                      readOnly
                      value={generatedTemplate}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md font-mono text-sm"
                      rows={3}
                    />
                    <button
                      onClick={() => copyToClipboard(generatedTemplate)}
                      className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                    >
                      复制
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    最终到达网址 (Final URL)
                  </label>
                  <div className="relative">
                    <input
                      readOnly
                      type="text"
                      value={`https://www.uuht.shop/go/${selectedSlug}`}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md font-mono text-sm"
                    />
                    <button
                      onClick={() => copyToClipboard(`https://www.uuht.shop/go/${selectedSlug}`)}
                      className="absolute top-1 right-2 bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                    >
                      复制
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-md">
                  <h3 className="font-semibold text-green-900 mb-2">✅ 实际效果预览</h3>
                  <p className="text-sm text-green-800 mb-2">当用户点击广告时:</p>
                  <ol className="text-sm text-green-800 space-y-1 list-decimal list-inside">
                    <li>Google Ads 将 {'{lpurl}'} 替换为: <code>https://www.uuht.shop/go/{selectedSlug}</code></li>
                    <li>附加参数后跳转: <code className="break-all">https://www.uuht.shop/go/{selectedSlug}{generatedTemplate.replace('{lpurl}', '')}</code></li>
                    <li>系统记录点击并传递参数到目标网站</li>
                    <li>用户到达: <span className="break-all">{selectedLink?.destination_url}</span></li>
                  </ol>
                </div>
              </div>
            )}

            {/* How to Use */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4"> 如何在 Google Ads 中使用</h2>
              
              <ol className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">1</span>
                  <div>
                    <strong>打开广告系列设置</strong>
                    <p className="text-gray-600 mt-1">进入您的 Google Ads 广告系列或广告组</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">2</span>
                  <div>
                    <strong>找到"跟踪模板"字段</strong>
                    <p className="text-gray-600 mt-1">在"广告系列网址选项"或"广告组网址选项"中</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">3</span>
                  <div>
                    <strong>粘贴追踪模板</strong>
                    <p className="text-gray-600 mt-1">将上面生成的模板粘贴到"跟踪模板"框中</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">4</span>
                  <div>
                    <strong>设置最终到达网址</strong>
                    <p className="text-gray-600 mt-1">在广告的"最终到达网址"字段中输入: <code>https://www.uuht.shop/go/{selectedSlug || 'your-slug'}</code></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">5</span>
                  <div>
                    <strong>保存并发布</strong>
                    <p className="text-gray-600 mt-1">保存设置，Google Ads 会自动处理参数替换</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Common Parameters Reference */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">📚 Google Ads 动态参数参考</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3 font-semibold">参数</th>
                      <th className="text-left py-2 px-3 font-semibold">说明</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2 px-3 font-mono text-blue-600">{'{campaignid}'}</td>
                      <td className="py-2 px-3">广告系列 ID</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-blue-600">{'{adgroupid}'}</td>
                      <td className="py-2 px-3">广告组 ID</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-blue-600">{'{keyword}'}</td>
                      <td className="py-2 px-3">触发广告的关键词</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-blue-600">{'{matchtype}'}</td>
                      <td className="py-2 px-3">匹配类型 (exact/phrase/broad)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-blue-600">{'{creative}'}</td>
                      <td className="py-2 px-3">广告创意 ID</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-blue-600">{'{device}'}</td>
                      <td className="py-2 px-3">设备类型 (mobile/desktop/tablet)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-blue-600">{'{gclid}'}</td>
                      <td className="py-2 px-3">Google Click ID (用于转化追踪)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
