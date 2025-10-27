import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Главная' },
    { path: '/posts', label: 'Публикации' },
    { path: '/experience', label: 'Опыт' },
    { path: '/services', label: 'Услуги' },
    { path: '/analytics', label: 'Аналитика' },
    { path: '/education', label: 'Образование' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <span className="text-xl font-bold text-foreground">Долгосрок</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`text-sm font-medium transition-colors ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" asChild>
              <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </a>
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-foreground" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {menuItems.map(item => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`block text-base font-medium transition-colors py-2 ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full" asChild>
              <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram канал
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;