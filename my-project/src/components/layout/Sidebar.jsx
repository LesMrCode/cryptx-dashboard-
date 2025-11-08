import React, { useState } from 'react'; 
import { LayoutGrid, ChartPie, WalletIcon, WalletCardsIcon, Mail, Settings, LogOut, WalletCards } from 'lucide-react'; 
import Logo from "../../assets/Logo.png";


 function Sidebar() {
    const [active, setActive] = useState('overview');
    {/* sidebar items */}
  const navItems = [
    { id: "overview", icon: LayoutGrid, label: "Overview" },
    { id: "chart", icon: ChartPie, label: "Chart" },
    { id: "transactions", icon: WalletIcon, label: "Transactions" },
    { id: "wallet", icon: WalletCards, label: "Wallet" },
    { id: "mail", icon: Mail, label: "Mailbox" },
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "logout", icon: LogOut, label: "Logout" },
  ];
    
    return (
        <aside className="flex flex-col w-72 h-screen bg-gray-50 border-r border-gray-200">
        {/* Logo Section */}
        <div className="flex items-center gap-2 px-6 py-8 border-b border-gray-200">
        <img 
        src={Logo} 
        alt="Cryptx Logo"
        className="w-10 h-auto object-contain"
        />
        <h1 className="text-xl font-semibold text-gray-800">Cryptx</h1>
        </div>

      {/*Sidebar list */}
      <nav className="flex-1 px-4 py-6">
        {navItems.map((item) => {
        const isActive = active === item.id;
        const Icon = item.icon;

    return(
        <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center w-full gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              {Icon ? <Icon className="w-5 h-5 flex-shrink-0" /> : null}
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
        </nav>
       </aside>

    );
}

export default Sidebar;