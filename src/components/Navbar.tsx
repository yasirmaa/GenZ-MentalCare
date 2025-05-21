import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  menuItems: Array<{
    id: string;
    name: string;
    icon: React.ReactNode;
  }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  menuItems,
  activeSection,
  setActiveSection,
  mobileMenuOpen,
  toggleMobileMenu
}) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span 
              className="text-xl font-bold text-purple-600 cursor-pointer"
              onClick={() => setActiveSection('home')}
            >
              GenZ-Mental Care
            </span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`${
                  activeSection === item.id
                    ? 'bg-purple-100 text-purple-800'
                    : 'text-purple-600 hover:bg-purple-50'
                } px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200`}
                onClick={() => setActiveSection(item.id)}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:text-purple-800 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`${
                  activeSection === item.id
                    ? 'bg-purple-100 text-purple-800'
                    : 'text-purple-600 hover:bg-purple-50'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center transition-colors duration-200`}
                onClick={() => {
                  setActiveSection(item.id);
                  toggleMobileMenu();
                }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;