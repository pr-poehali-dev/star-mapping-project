export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img src="https://cdn.poehali.dev/projects/0310d3c5-5cfa-44fd-bdb9-25f13d127fc6/bucket/25b9e61c-572e-4e26-adff-72040eec0f4a.png" alt="Фемида" className="w-auto h-16 object-contain" />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Риэлторское агентство полного цикла. Помогаем купить, продать и арендовать недвижимость безопасно и выгодно.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Агентство</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Объекты
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="text-muted-foreground">
                ИП Садаков Дмитрий Владимирович
              </li>
              <li className="text-muted-foreground">
                г. Киров, ул. Преображенская, д. 84, корп. 1
              </li>
              <li>
                <a href="tel:+79642565000" className="hover:text-foreground transition-colors">
                  +7 (964) 256-50-00
                </a>
              </li>
              <li>
                <a href="mailto:femidakirov@mail.ru" className="hover:text-foreground transition-colors">
                  femidakirov@mail.ru
                </a>
              </li>
              <li>
                <a href="https://vk.com/femida43an" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 ИП Садаков Дмитрий Владимирович. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}