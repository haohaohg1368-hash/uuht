'use client';

import { useState, useEffect } from 'react';

interface AdminAuthProps {
  children: React.ReactNode;
}

// 管理员密码 (建议修改为强密码)
const ADMIN_PASSWORD = 'uuht2026admin';

export default function AdminAuth({ children }: AdminAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // 检查是否已登录
  useEffect(() => {
    const authStatus = localStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // 处理登录
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      setError('');
    } else {
      setError('密码错误，请重试');
      setPassword('');
    }
  };

  // 处理登出
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
    setPassword('');
  };

  // 加载中显示
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

  // 未认证显示登录表单
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">UUHT</h1>
            <p className="text-gray-600">联盟链接管理系统</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                管理员密码
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              登录
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>💡 提示:</strong><br />
              默认密码: <code className="bg-white px-2 py-1 rounded">uuht2026admin</code><br />
              <span className="text-xs mt-2 block">
                建议在代码中修改为更安全的密码
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 已认证显示管理界面 + 登出按钮
  return (
    <div className="relative">
      {/* Logout Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium shadow-lg"
        >
          退出登录
        </button>
      </div>

      {/* Admin Content */}
      {children}
    </div>
  );
}
