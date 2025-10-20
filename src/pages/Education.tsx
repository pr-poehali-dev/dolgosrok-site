import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Education = () => {
  const courses = [
    {
      icon: 'GraduationCap',
      title: 'Основы инвестирования',
      level: 'Начинающий',
      duration: '4 недели',
      topics: [
        'Что такое облигации и как они работают',
        'Виды облигаций: ОФЗ, корпоративные, еврооблигации',
        'Доходность, дюрация, купоны',
        'Риски облигаций и как их оценивать'
      ]
    },
    {
      icon: 'Target',
      title: 'Фундаментальный анализ',
      level: 'Средний',
      duration: '6 недель',
      topics: [
        'Анализ финансовой отчетности эмитента',
        'Ключевые финансовые показатели',
        'Оценка кредитного качества',
        'Сравнительный анализ компаний'
      ]
    },
    {
      icon: 'Briefcase',
      title: 'Построение портфеля',
      level: 'Средний',
      duration: '5 недель',
      topics: [
        'Стратегии диверсификации',
        'Управление рисками портфеля',
        'Ребалансировка и оптимизация',
        'Налоговое планирование'
      ]
    },
    {
      icon: 'LineChart',
      title: 'Макроэкономика для инвестора',
      level: 'Продвинутый',
      duration: '8 недель',
      topics: [
        'Влияние ставки ЦБ на облигационный рынок',
        'Инфляция и реальная доходность',
        'Кредитные циклы',
        'Секторальный анализ экономики'
      ]
    }
  ];

  const resources = [
    {
      icon: 'FileText',
      title: 'Статьи и гайды',
      description: 'Практические материалы по инвестированию',
      count: '50+'
    },
    {
      icon: 'Video',
      title: 'Видео-разборы',
      description: 'Детальные разборы компаний и ситуаций',
      count: '20+'
    },
    {
      icon: 'MessageCircle',
      title: 'Q&A сессии',
      description: 'Ответы на вопросы подписчиков',
      count: 'Регулярно'
    },
    {
      icon: 'Users',
      title: 'Сообщество',
      description: 'Обмен опытом с единомышленниками',
      count: '5000+'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Образование
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Структурированные материалы для развития навыков долгосрочного инвестирования в облигации
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Образовательные программы
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={course.icon} size={28} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{course.title}</h3>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Icon name="Signal" size={14} />
                            {course.level}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {course.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="font-medium text-foreground mb-3">Темы курса:</p>
                      {course.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Образовательные ресурсы
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="border-border text-center hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={resource.icon} size={28} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                    <div className="text-2xl font-bold text-primary">{resource.count}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-muted/50 border-border mb-12">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Обучайтесь в своем темпе
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Все образовательные материалы публикуются в нашем Telegram-канале. Изучайте в удобное время и применяйте знания на практике.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Бесплатный доступ к базовым материалам</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Практические примеры из реального опыта</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Поддержка сообщества</span>
                    </li>
                  </ul>
                  <Button size="lg" asChild>
                    <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" size={20} className="mr-2" />
                      Начать обучение
                    </a>
                  </Button>
                </div>
                <div className="space-y-4">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="BookOpen" size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">200+</div>
                          <p className="text-sm text-muted-foreground">Обучающих материалов</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="Users" size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">5000+</div>
                          <p className="text-sm text-muted-foreground">Студентов обучаются</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="Award" size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">5 лет</div>
                          <p className="text-sm text-muted-foreground">Практического опыта</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary text-white border-0">
            <CardContent className="p-12 text-center">
              <Icon name="Lightbulb" size={48} className="mx-auto mb-6 text-white" />
              <h2 className="text-3xl font-bold mb-4">
                Инвестируйте в свои знания
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Лучшая инвестиция - это инвестиция в собственное образование. Начните свой путь к финансовой грамотности уже сегодня.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Подписаться на канал
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="https://t.me/+exhEOCpKOXc0ZDI6" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Присоединиться к чату
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
