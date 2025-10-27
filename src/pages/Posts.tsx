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

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>('Все');

  const tags = ['Все', 'Облигации', 'Макроэкономика', 'Чтиво', 'Образование', 'Портфель'];

  const fetchPosts = (refresh = false) => {
    if (refresh) setRefreshing(true);
    else setLoading(true);
    
    const url = refresh 
      ? 'https://functions.poehali.dev/98fb22fa-2e09-4aa7-a4c5-c212b46514f8?limit=50&refresh=true'
      : 'https://functions.poehali.dev/98fb22fa-2e09-4aa7-a4c5-c212b46514f8?limit=50';
    
    fetch(url, { method: refresh ? 'POST' : 'GET' })
      .then(res => res.json())
      .then(data => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
        setLoading(false);
        setRefreshing(false);
      })
      .catch(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = selectedTag === 'Все' 
    ? posts 
    : posts.filter(post => post.tag === selectedTag);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Все публикации</h1>
            <p className="text-xl text-muted-foreground">
              Архив материалов из Telegram-канала Долгосрок
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>

            <Button 
              variant="outline"
              onClick={() => fetchPosts(true)}
              disabled={refreshing}
            >
              <Icon name={refreshing ? "Loader2" : "RefreshCw"} size={18} className={`mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Обновление...' : 'Обновить'}
            </Button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="text-muted-foreground">Загрузка публикаций...</p>
              </div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="FileText" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Публикаций не найдено</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
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

              <div className="mt-8 text-center text-muted-foreground">
                Показано публикаций: {filteredPosts.length}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Posts;
