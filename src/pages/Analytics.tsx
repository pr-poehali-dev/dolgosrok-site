import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

interface Post {
  date: string;
  title: string;
  excerpt: string;
  views: string;
  link: string;
  tag: string;
}

const Analytics = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://functions.poehali.dev/98fb22fa-2e09-4aa7-a4c5-c212b46514f8?limit=6')
      .then(res => res.json())
      .then(data => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = [
    {
      icon: 'PieChart',
      title: 'Облигации',
      description: 'Детальный анализ корпоративных и государственных облигаций'
    },
    {
      icon: 'TrendingUp',
      title: 'Макроэкономика',
      description: 'Обзоры макропоказателей и их влияния на рынки'
    },
    {
      icon: 'Briefcase',
      title: 'Портфель',
      description: 'Регулярные отчеты о структуре и результатах портфеля'
    },
    {
      icon: 'Building',
      title: 'Эмитенты',
      description: 'Фундаментальный анализ компаний-эмитентов'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Аналитика
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Регулярные аналитические материалы по облигациям, макроэкономике и инвестиционным стратегиям
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={category.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-2">
                  Последние публикации
                </h2>
                <p className="text-muted-foreground">
                  Свежие аналитические материалы из Telegram-канала
                </p>
              </div>
              <Button variant="outline" asChild>
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

          <Card className="bg-primary text-white border-0">
            <CardContent className="p-12 text-center">
              <Icon name="Bell" size={48} className="mx-auto mb-6 text-white" />
              <h2 className="text-3xl font-bold mb-4">
                Не пропускайте новую аналитику
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Подписывайтесь на наш Telegram-канал и получайте все материалы первыми
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

export default Analytics;
