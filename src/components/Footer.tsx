import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Долгосрок</h3>
            <p className="text-white/80 leading-relaxed">
              Долгосрочные фундаментальные инвестиции, макростатистика и образование
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-3 text-white/80">
              <p>Telegram: @DolgosrokInvest</p>
              <p>Админ: @dolgosrok_admin</p>
              <p>5 000+ подписчиков</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Присоединяйтесь</h4>
            <div className="space-y-3">
              <Button size="lg" variant="secondary" className="w-full justify-center bg-green-500 hover:bg-green-600 text-white border-0" asChild>
                <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram канал
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full justify-center border-white bg-white text-primary hover:bg-white/90" asChild>
                <a href="https://t.me/+exhEOCpKOXc0ZDI6" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Чат
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2025 Долгосрок. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="/user-agreement" className="hover:text-white transition-colors">Пользовательское соглашение</a>
              <a href="https://telegra.ph/Zayavlenie-ob-ogranichenii-otvetstvennosti-01-15" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ограничение ответственности</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;