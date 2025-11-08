import React from 'react';

function Header() {
	return (
		 <header className="flex items-center justify-between h-16 px-8 border-b border-gray-200 bg-white">
  {/* Search bar */}
  <div className="flex-1 max-w-lg">
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>

      <input
        type="text"
        placeholder="Search coins or transactions"
        className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>

  {/*  Notifications & Profile */}
  <div className="flex items-center gap-5">
    {/* Notifications */}
    <button
      className="relative p-2 rounded-lg hover:bg-gray-100 transition"
      aria-label="Notifications"
    >
      <svg
        className="w-5 h-5 text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
    </button>

    {/* Profile */}
    <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">Joshua</p>
        <p className="text-xs text-gray-500">@joshua19</p>
      </div>

      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
        </svg> 
      </div>
    </div>
  </div>
</header>
	)
}

export default Header;