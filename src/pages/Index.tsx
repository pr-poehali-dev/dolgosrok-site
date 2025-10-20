import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Post {
  date: string;
  title: string;
  excerpt: string;
  views: string;
  link: string;
  tag: string;
}

const Index = () => {
  const stats = [
    { value: '>40%', label: 'Доходность с старта' },
    { value: '5 лет', label: 'Опыт инвестирования' },
    { value: '5000+', label: 'Читателей' }
  ];

  const advantages = [
    {
      icon: 'LineChart',
      title: 'Фундаментальный анализ',
      description: 'Глубокий анализ облигаций и макроэконоических трендов для принятия инвестиционных решений'
    },
    {
      icon: 'Target',
      title: 'Долгосрочная стратегия',
      description: 'Инвестиционный горизонт от 3-5 лет с фокусом на качественные активы'
    },
    {
      icon: 'BookOpen',
      title: 'Образовательный контент',
      description: 'Регулярные разборы облигаций, макроситуации и обучающие материалы'
    },
    {
      icon: 'TrendingUp',
      title: 'Прозрачность',
      description: 'Открытая история сделок и детальные отчеты о результатах портфеля'
    }
  ];

  const [posts, setPosts] = useState<Post[]>([
    {
      date: '14 октября 2025',
      title: 'Гельтек-Медика: 22% — много или мало для дебюта?',
      excerpt: 'Мы давно не рассматривали первичные размещения. Особенно среди дебютантов...',
      views: '2.3k',
      link: 'https://t.me/DolgosrokInvest/1233',
      tag: 'Облигации'
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://functions.poehali.dev/98fb22fa-2e09-4aa7-a4c5-c212b46514f8?limit=3')
      .then(res => res.json())
      .then(data => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Долгосрочные инвестиции</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Инвестируй с умом в долгую
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Фундаментальный анализ российского рынка облигаций, макростатистика и образовательный контент для осознанных инвестиций
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" asChild>
                  <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Подписаться на канал
                  </a>
                </Button>

              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/d6f35895-79e8-49df-b592-5d34befe39e6/files/658be538-b7c9-49d7-91a8-4e3852977d80.jpg"
                  alt="Investment analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              О проекте Долгосрок
            </h2>
            <p className="text-xl text-muted-foreground">
              Инвестиционный проект, созданный для тех, кто хочет научиться инвестировать осознанно и на долгий срок
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Долгосрок</strong> — это telegram-канал о долгосрочных фундаментальных инвестициях в российские облигации. 
                Мы делаем акцент на качественном анализе выпусков, макроэкономических трендах и обучении основам инвестирования.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                В канале вы найдете регулярные разборы облигационных выпусков, анализ доходностей, обзоры макроситуации 
                и образовательные материалы для начинающих инвесторов.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Наша философия — инвестировать в надежные облигации с хорошими фундаментальными показателями 
                и держать позиции долгосрочно, не поддаваясь краткосрочным колебаниям рынка.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Почему Долгосрок
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессиональный подход к долгосрочным инвестициям на российском рынке
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="posts" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Последние публикации
              </h2>
              <p className="text-xl text-muted-foreground">
                Свежие материалы из Telegram-канала
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex" asChild>
              <a href="https://t.me/DolgosrokInvest" target="_blank" rel="noopener noreferrer">
                <Icon name="ExternalLink" size={18} className="mr-2" />
                Все публикации
              </a>
            </Button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="text-muted-foreground">Загрузка публикаций...</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                        #{post.tag}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{post.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white border-border">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Наша миссия
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Сделать фундаментальный инвестиционный анализ доступным для каждого. Мы верим, что грамотные долгосрочные инвестиции — это ключ к финансовой независимости и устойчивому росту капитала.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;