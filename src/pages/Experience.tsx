import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Experience = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Начало инвестиционного пути',
      description: 'Первые вложения в облигации с изучением фундаментального анализа'
    },
    {
      year: '2021',
      title: 'Формирование стратегии',
      description: 'Разработка долгосрочной инвестиционной стратегии на основе макроэкономического анализа'
    },
    {
      year: '2022',
      title: 'Запуск Telegram-канала',
      description: 'Создание образовательного проекта для обмена опытом и знаниями'
    },
    {
      year: '2023',
      title: 'Рост сообщества',
      description: '1000+ подписчиков, регулярные аналитические публикации'
    },
    {
      year: '2024',
      title: 'Масштабирование',
      description: '5000+ читателей, расширение аналитики и обучающих материалов'
    },
    {
      year: '2025',
      title: 'Доходность >40%',
      description: 'Стабильная положительная доходность с момента старта проекта'
    }
  ];

  const achievements = [
    {
      icon: 'TrendingUp',
      value: '>40%',
      label: 'Доходность портфеля с старта'
    },
    {
      icon: 'Users',
      value: '5000+',
      label: 'Читателей в сообществе'
    },
    {
      icon: 'FileText',
      value: '200+',
      label: 'Аналитических публикаций'
    },
    {
      icon: 'Award',
      value: '5 лет',
      label: 'Опыт инвестирования'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Наш опыт
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              5 лет практического инвестирования с фокусом на долгосрочные облигации и фундаментальный анализ
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {achievements.map((item, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{item.value}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Путь развития проекта
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-32">
                    <div className="inline-block px-4 py-2 bg-primary text-white rounded-full font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 border-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-primary text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Присоединяйтесь к сообществу
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Следите за нашим опытом и получайте актуальную аналитику в Telegram-канале
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Подписаться на канал
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;
