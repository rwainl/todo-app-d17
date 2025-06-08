import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { useToast } from "./ToastContext";

const Layout = () => {
  const { isDarkMode, toogleTheme } = useTheme();
  const { showToast } = useToast();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <nav className="border rounded-lg px-4 py-2 flex justify-between">
        <div className="space-x-4">
          <Link to="/">Beranda</Link>
          <Link to="/tentang">Tentang</Link>
          <Link to="/pengaturan">Pengaturan</Link>
        </div>
        <button onClick={toogleTheme} className="px-2 py-1 bg-gray-400 rounded">
          Toggle Mode
        </button>
      </nav>
      <main className="p-4">
        <Outlet context={showToast} />
      </main>
    </div>
  );
};

export default Layout;
