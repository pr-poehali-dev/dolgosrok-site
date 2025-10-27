import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Education = () => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  const educationBook = [
    {
      chapter: 'Глава 1',
      title: 'Основы облигаций',
      icon: 'BookOpen',
      topics: [
        { title: 'Что такое облигации и чем они отличаются от вкладов?', link: 'https://t.me/DolgosrokInvest/35' },
        { title: 'Облигации vs вклады. Что выбрать?', link: 'https://t.me/DolgosrokInvest/38' },
        { title: 'Какие облигации выбрать начинающему инвестору?', link: 'https://t.me/DolgosrokInvest/41' },
        { title: 'Облигации vs вклады. Статистика', link: 'https://t.me/DolgosrokInvest/47' }
      ]
    },
    {
      chapter: 'Глава 2',
      title: 'Виды и механизмы облигаций',
      icon: 'Layers',
      topics: [
        { title: 'Спреды', link: 'https://t.me/DolgosrokInvest/50' },
        { title: 'Классификация облигаций по видам купонного дохода', link: 'https://t.me/DolgosrokInvest/63' },
        { title: 'Линкеры', link: 'https://t.me/DolgosrokInvest/80' },
        { title: 'Флоутеры. Часть I', link: 'https://t.me/DolgosrokInvest/88' },
        { title: 'Флоутеры. Часть II', link: 'https://t.me/DolgosrokInvest/91' }
      ]
    },
    {
      chapter: 'Глава 3',
      title: 'Инвестиционная стратегия',
      icon: 'Target',
      topics: [
        { title: 'Зачем вообще нужно инвестировать?', link: 'https://t.me/DolgosrokInvest/56' },
        { title: 'Сложный процент и долгосрочное инвестирование', link: 'https://t.me/DolgosrokInvest/122' },
        { title: 'Инверсия кривой доходности', link: 'https://t.me/DolgosrokInvest/72' },
        { title: 'ИИС', link: 'https://t.me/DolgosrokInvest/99' }
      ]
    },
    {
      chapter: 'Глава 4',
      title: 'Индикаторы и индексы',
      icon: 'LineChart',
      topics: [
        { title: 'Индикаторы денежного рынка: RUSFAR и RUONIA', link: 'https://t.me/DolgosrokInvest/84' },
        { title: 'Индекс доллара DXY', link: 'https://t.me/DolgosrokInvest/108' },
        { title: 'Индексы корпоративных и государственных облигаций', link: 'https://t.me/DolgosrokInvest/116' }
      ]
    },
    {
      chapter: 'Глава 5',
      title: 'Альтернативные инвестиции',
      icon: 'Coins',
      topics: [
        { title: 'Инвестирование в золото', link: 'https://t.me/DolgosrokInvest/95' },
        { title: 'Инвестирование в золото. Часть II', link: 'https://t.me/DolgosrokInvest/105' }
      ]
    },
    {
      chapter: 'Глава 6',
      title: 'Анализ и оценка',
      icon: 'TrendingUp',
      topics: [
        { title: 'Как оценить финансовое положение компании?', link: 'https://t.me/DolgosrokInvest/127' },
        { title: 'Рыночная капитализация компании', link: 'https://t.me/DolgosrokInvest/130' },
        { title: 'Долговая нагрузка. Часть I', link: 'https://t.me/DolgosrokInvest/134' },
        { title: 'Долговая нагрузка. Часть II', link: 'https://t.me/DolgosrokInvest/137' },
        { title: 'Коэффициент покрытия процентов (ICR)', link: 'https://t.me/DolgosrokInvest/140' },
        { title: 'EBITDA, OIBDA и т.д.', link: 'https://t.me/DolgosrokInvest/143' },
        { title: 'ROE, ROA, ROIC', link: 'https://t.me/DolgosrokInvest/146' }
      ]
    },
    {
      chapter: 'Глава 7',
      title: 'Риски и защита',
      icon: 'Shield',
      topics: [
        { title: 'Рейтинги. Зачем они нужны?', link: 'https://t.me/DolgosrokInvest/150' },
        { title: 'Дефолт. Что это и почему происходит?', link: 'https://t.me/DolgosrokInvest/153' },
        { title: 'Банкротство. Виды и стадии', link: 'https://t.me/DolgosrokInvest/156' },
        { title: 'Оферта. Для чего нужна?', link: 'https://t.me/DolgosrokInvest/159' }
      ]
    },
    {
      chapter: 'Глава 8',
      title: 'Практические инструменты',
      icon: 'Wrench',
      topics: [
        { title: 'Календарь выплат. Зачем нужен?', link: 'https://t.me/DolgosrokInvest/162' },
        { title: 'Методы отбора облигаций. Часть I', link: 'https://t.me/DolgosrokInvest/165' },
        { title: 'Методы отбора облигаций. Часть II', link: 'https://t.me/DolgosrokInvest/168' },
        { title: 'Информационная база', link: 'https://t.me/DolgosrokInvest/171' }
      ]
    }
  ];

  const resources = [
    {
      icon: 'FileText',
      title: 'Статьи и гайды',
      description: 'Практические материалы по инвестированию',
      count: '500+'
    },
    {
      icon: 'BookOpen',
      title: 'Образовательные темы',
      description: 'Структурированные уроки от основ до продвинутых тем',
      count: '50+'
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Образование
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полная структурированная книга об инвестировании в облигации — от базовых понятий до профессионального анализа
            </p>
          </div>

          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold text-foreground">
                Образовательная книга
              </h2>
              <Button variant="outline" asChild>
                <a href="https://t.me/DolgosrokInvest/221" target="_blank" rel="noopener noreferrer">
                  <Icon name="ExternalLink" size={18} className="mr-2" />
                  Открыть в Telegram
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              {educationBook.map((chapter, index) => (
                <Card key={index} className="border-border overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setExpandedChapter(expandedChapter === index ? null : index)}
                      className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name={chapter.icon} size={24} className="text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium text-primary mb-1">{chapter.chapter}</div>
                          <h3 className="text-xl font-bold text-foreground">{chapter.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{chapter.topics.length} тем</p>
                        </div>
                      </div>
                      <Icon 
                        name={expandedChapter === index ? "ChevronUp" : "ChevronDown"} 
                        size={24} 
                        className="text-muted-foreground"
                      />
                    </button>

                    {expandedChapter === index && (
                      <div className="px-6 pb-6 space-y-2 bg-muted/20">
                        {chapter.topics.map((topic, topicIndex) => (
                          <a
                            key={topicIndex}
                            href={topic.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-muted/50 transition-all group"
                          >
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-bold text-primary">{topicIndex + 1}</span>
                            </div>
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors flex-1">
                              {topic.title}
                            </span>
                            <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                          </a>
                        ))}
                      </div>
                    )}
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

          <Card className="bg-primary text-white border-0">
            <CardContent className="p-12 text-center">
              <Icon name="Rocket" size={64} className="mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Начните обучение прямо сейчас
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Все материалы доступны бесплатно в нашем Telegram-канале. Присоединяйтесь к сообществу из 5000+ инвесторов и развивайте свои навыки.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Присоединиться к каналу
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

export default Education;
