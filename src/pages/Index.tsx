import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const teamMembers = [
    {
      name: 'Иван Петров',
      role: 'Основатель и CEO',
      description: 'Эксперт по долгосрочным инвестициям с опытом более 15 лет'
    },
    {
      name: 'Мария Сидорова',
      role: 'Главный аналитик',
      description: 'Специалист по фундаментальному анализу и финансовому моделированию'
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Портфельный управляющий',
      description: 'Управление активами и оптимизация инвестиционных стратегий'
    }
  ];

  const newsItems = [
    {
      id: 1,
      date: '15 октября 2025',
      title: 'Ребалансировка портфеля: новые возможности',
      preview: 'Провели полный анализ рынка и внесли коррективы в инвестиционную стратегию.'
    },
    {
      id: 2,
      date: '10 октября 2025',
      title: 'Итоги третьего квартала 2025',
      preview: 'Наш портфель показал рост на 12.5% за последний квартал, опередив индекс МосБиржи.'
    },
    {
      id: 3,
      date: '5 октября 2025',
      title: 'Новые акции в портфеле',
      preview: 'Добавили в портфель акции технологического сектора с высоким потенциалом роста.'
    }
  ];

  const marketData = [
    { month: 'Янв', value: 100, index: 100 },
    { month: 'Фев', value: 105, index: 102 },
    { month: 'Мар', value: 108, index: 104 },
    { month: 'Апр', value: 112, index: 106 },
    { month: 'Май', value: 115, index: 107 },
    { month: 'Июн', value: 118, index: 108 },
    { month: 'Июл', value: 122, index: 109 },
    { month: 'Авг', value: 128, index: 111 },
    { month: 'Сен', value: 125, index: 110 },
    { month: 'Окт', value: 132, index: 112 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={32} className="text-accent" />
              <h1 className="text-2xl font-bold text-primary">Долгосрок</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                О проекте
              </button>
              <button
                onClick={() => setActiveSection('team')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'team' ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                Команда
              </button>
              <button
                onClick={() => setActiveSection('news')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'news' ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                Новости
              </button>
              <button
                onClick={() => setActiveSection('charts')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'charts' ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                Аналитика
              </button>
            </nav>
            <Button className="hidden md:block">Связаться</Button>
          </div>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Инвестируйте в будущее с уверенностью
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Долгосрочная инвестиционная стратегия, основанная на глубоком анализе и профессиональном подходе
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать презентацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram канал
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary">О проекте Долгосрок</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Target" size={40} className="text-accent mb-4" />
                  <CardTitle>Наша цель</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Формирование диверсифицированного инвестиционного портфеля с горизонтом от 5 лет
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="BarChart3" size={40} className="text-accent mb-4" />
                  <CardTitle>Наш подход</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Фундаментальный анализ компаний и макроэкономических трендов для выбора активов
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Shield" size={40} className="text-accent mb-4" />
                  <CardTitle>Наша философия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Консервативное управление рисками и прозрачность всех операций для инвесторов
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">Наша команда</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="User" size={48} className="text-accent" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-accent font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Последние новости</h3>
            <div className="space-y-6">
              {newsItems.map((news) => (
                <Card key={news.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Calendar" size={16} />
                      <span>{news.date}</span>
                    </div>
                    <CardTitle className="text-xl">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{news.preview}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                <Icon name="ExternalLink" size={20} className="mr-2" />
                Смотреть все в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="charts" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Динамика портфеля</h3>
            <Card className="p-6">
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Сравнение с индексом МосБиржи</h4>
                <p className="text-muted-foreground">Доходность за 10 месяцев 2025 года</p>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="month" stroke="#8E9196" />
                  <YAxis stroke="#8E9196" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0EA5E9" strokeWidth={3} name="Долгосрок" />
                  <Line type="monotone" dataKey="index" stroke="#8E9196" strokeWidth={2} strokeDasharray="5 5" name="Индекс МосБиржи" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-accent/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Доходность портфеля</p>
                  <p className="text-2xl font-bold text-accent">+32%</p>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Доходность индекса</p>
                  <p className="text-2xl font-bold text-secondary">+12%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={28} className="text-accent" />
              <span className="text-xl font-bold">Долгосрок</span>
            </div>
            <p className="text-primary-foreground/80">© 2025 Долгосрок. Инвестиционный проект</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
