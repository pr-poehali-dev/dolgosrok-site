import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: 'FileText',
      title: 'Аналитические обзоры',
      description: 'Регулярные разборы облигаций с детальным фундаментальным анализом эмитентов',
      features: [
        'Анализ финансовой отчетности',
        'Оценка кредитного качества',
        'Расчет справедливой доходности',
        'Инвестиционные рекомендации'
      ]
    },
    {
      icon: 'TrendingUp',
      title: 'Макроэкономический анализ',
      description: 'Отслеживание ключевых макропоказателей и их влияния на облигационный рынок',
      features: [
        'Анализ ставки ЦБ и инфляции',
        'Оценка кредитных циклов',
        'Прогнозы по рынку облигаций',
        'Секторальный анализ'
      ]
    },
    {
      icon: 'BookOpen',
      title: 'Образовательный контент',
      description: 'Обучающие материалы по инвестированию в облигации для начинающих и опытных инвесторов',
      features: [
        'Основы инвестирования',
        'Стратегии управления портфелем',
        'Управление рисками',
        'Налоговая оптимизация'
      ]
    },
    {
      icon: 'Users',
      title: 'Комьюнити инвесторов',
      description: 'Активное сообщество единомышленников для обмена опытом и идеями',
      features: [
        'Обсуждение инвестиционных идей',
        'Обмен опытом',
        'Поддержка новичков',
        'Закрытый чат для подписчиков'
      ]
    }
  ];

  const pricing = [
    {
      title: 'Бесплатно',
      price: '0 ₽',
      period: 'навсегда',
      features: [
        'Доступ к публичным материалам',
        'Основные обзоры рынка',
        'Участие в открытом сообществе'
      ],
      cta: 'Подписаться',
      link: 'https://t.me/DolgosrokInvest',
      popular: false
    },
    {
      title: 'Премиум',
      price: 'Скоро',
      period: '',
      features: [
        'Эксклюзивные аналитические материалы',
        'Детальные разборы компаний',
        'Инвестиционные идеи',
        'Закрытое комьюнити',
        'Прямая связь с автором'
      ],
      cta: 'Узнать больше',
      link: 'https://t.me/dolgosrok_admin',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Комплексные решения для долгосрочных инвесторов в облигации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Тарифы
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricing.map((plan, index) => (
                <Card key={index} className={`border-2 ${plan.popular ? 'border-primary' : 'border-border'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Популярный
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground ml-2">/ {plan.period}</span>}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <a href={plan.link} target="_blank" rel="noopener noreferrer">
                        {plan.cta}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-muted/50 border-border">
            <CardContent className="p-12 text-center">
              <Icon name="MessageCircle" size={48} className="mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Остались вопросы?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Напишите нам в Telegram, и мы ответим на все ваши вопросы
              </p>
              <Button size="lg" asChild>
                <a href="https://t.me/dolgosrok_admin" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Связаться с нами
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

export default Services;
