import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">UU</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">HT</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
