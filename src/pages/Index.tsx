import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [area, setArea] = useState('');
  const [installType, setInstallType] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Серия Comfort',
      model: 'C-2000',
      power: '2.0 кВт',
      area: '20 м²',
      price: 25000,
      features: ['Охлаждение', 'Обогрев', 'Осушение'],
      energyClass: 'A+'
    },
    {
      id: 2,
      name: 'Серия Premium',
      model: 'P-2500',
      power: '2.5 кВт',
      area: '25 м²',
      price: 35000,
      features: ['Охлаждение', 'Обогрев', 'Осушение', 'Wi-Fi'],
      energyClass: 'A++'
    },
    {
      id: 3,
      name: 'Серия Inverter',
      model: 'I-3500',
      power: '3.5 кВт',
      area: '35 м²',
      price: 48000,
      features: ['Охлаждение', 'Обогрев', 'Осушение', 'Wi-Fi', 'Инвертор'],
      energyClass: 'A+++'
    },
    {
      id: 4,
      name: 'Серия Smart',
      model: 'S-5000',
      power: '5.0 кВт',
      area: '50 м²',
      price: 65000,
      features: ['Охлаждение', 'Обогрев', 'Осушение', 'Wi-Fi', 'Инвертор', 'Очистка воздуха'],
      energyClass: 'A+++'
    }
  ];

  const services = [
    {
      icon: 'Snowflake',
      title: 'Монтаж сплит-систем',
      description: 'Профессиональная установка любой сложности'
    },
    {
      icon: 'Wrench',
      title: 'Техобслуживание',
      description: 'Регулярное обслуживание и диагностика'
    },
    {
      icon: 'Settings',
      title: 'Ремонт кондиционеров',
      description: 'Быстрый и качественный ремонт'
    },
    {
      icon: 'Thermometer',
      title: 'Заправка фреоном',
      description: 'Заправка и проверка системы охлаждения'
    }
  ];

  const calculateInstallation = () => {
    if (!area || !installType) return;
    
    const areaNum = parseInt(area);
    let basePrice = 0;
    
    if (installType === 'standard') {
      basePrice = 5000 + (areaNum * 50);
    } else if (installType === 'complex') {
      basePrice = 8000 + (areaNum * 80);
    } else if (installType === 'premium') {
      basePrice = 12000 + (areaNum * 120);
    }
    
    setCalculatedPrice(basePrice);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wind" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">ClimatePro</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors font-medium">Калькулятор</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex">Заказать звонок</Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Инновационные решения</Badge>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Современные системы климат-контроля
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Продажа, монтаж и обслуживание кондиционеров премиум-класса. 
                Гарантия качества и профессиональный подход.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://v3b.fal.media/files/b/lion/ubmLrT9eUIYW62Nb25ZSC_output.png" 
                alt="Современный кондиционер" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2000+', label: 'Установок' },
              { number: '15', label: 'Лет опыта' },
              { number: '98%', label: 'Довольных клиентов' },
              { number: '24/7', label: 'Поддержка' }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Каталог продукции</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши кондиционеры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор моделей для любых помещений и задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{product.energyClass}</Badge>
                    <Icon name="Heart" size={20} className="text-muted-foreground hover:text-destructive cursor-pointer transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.model}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4 flex items-center justify-center h-40">
                    <Icon name="Wind" size={64} className="text-primary/30" />
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Zap" size={16} className="text-primary" />
                      <span>Мощность: {product.power}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Home" size={16} className="text-primary" />
                      <span>Площадь: {product.area}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">Купить</Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Info" size={20} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Полный спектр услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От консультации до установки и обслуживания
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Калькулятор</Badge>
              <h2 className="text-4xl font-bold mb-4">Рассчитайте стоимость монтажа</h2>
              <p className="text-xl text-muted-foreground">
                Узнайте примерную стоимость установки за минуту
              </p>
            </div>
            
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Параметры установки</CardTitle>
                <CardDescription>Заполните данные для расчета</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="area">Площадь помещения (м²)</Label>
                  <Input 
                    id="area" 
                    type="number" 
                    placeholder="Например: 25"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="installType">Тип монтажа</Label>
                  <Select value={installType} onValueChange={setInstallType}>
                    <SelectTrigger id="installType">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Стандартный монтаж</SelectItem>
                      <SelectItem value="complex">Сложный монтаж</SelectItem>
                      <SelectItem value="premium">Премиум монтаж</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateInstallation} className="w-full" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>

                {calculatedPrice !== null && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center animate-scale-in">
                    <div className="text-sm text-muted-foreground mb-2">Примерная стоимость монтажа:</div>
                    <div className="text-4xl font-bold text-primary">{calculatedPrice.toLocaleString('ru-RU')} ₽</div>
                    <div className="text-sm text-muted-foreground mt-2">* Точная стоимость определяется после выезда специалиста</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Свяжитесь с нами</Badge>
              <h2 className="text-4xl font-bold mb-6">Остались вопросы?</h2>
              <p className="text-xl mb-8 text-white/90">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-sm text-white/80">Звоните круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">info@climatepro.ru</div>
                    <div className="text-sm text-white/80">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Москва, ул. Примерная, 123</div>
                    <div className="text-sm text-white/80">Пн-Вс: 9:00 - 21:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Заказать обратный звонок</CardTitle>
                <CardDescription>Мы перезвоним вам в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий (необязательно)</Label>
                  <Textarea id="message" placeholder="Расскажите, что вас интересует..." rows={3} />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wind" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">ClimatePro</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные решения для вашего комфорта с 2009 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Бытовые кондиционеры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Промышленные системы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мультизональные системы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Монтаж</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обслуживание</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ремонт</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Консультация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ClimatePro. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
