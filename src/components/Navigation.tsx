import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">Долгосрок</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Главная
            </Link>
            <Link 
              to="/experience" 
              className={`text-sm font-medium transition-colors ${isActive('/experience') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Опыт
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Услуги
            </Link>
            <Link 
              to="/analytics" 
              className={`text-sm font-medium transition-colors ${isActive('/analytics') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Аналитика
            </Link>
            <Link 
              to="/education" 
              className={`text-sm font-medium transition-colors ${isActive('/education') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Образование
            </Link>
            <Button size="sm" asChild>
              <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
