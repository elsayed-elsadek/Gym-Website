import React, { useState } from 'react';

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'عن الجيم' },
  { href: '#services', label: 'الخدمات' },
  { href: '#contact', label: 'تواصل' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-90 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <span className="text-2xl font-extrabold text-yellow-400 tracking-widest">PowerHouse</span>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="فتح القائمة"
        >
          <span className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-yellow-400 rounded my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        <ul className={`md:flex gap-6 text-lg font-semibold transition-all duration-300 ${open ? 'flex flex-col absolute top-16 left-0 w-full bg-gray-900 bg-opacity-95 py-6 px-4 shadow-xl' : 'hidden md:flex'} md:static md:bg-transparent md:shadow-none md:py-0 md:px-0`}> 
          {navLinks.map(link => (
            <li key={link.href} className="my-2 md:my-0">
              <a href={link.href} className="text-gray-100 hover:text-yellow-400 transition-colors duration-200 block py-2 px-3 rounded" onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
