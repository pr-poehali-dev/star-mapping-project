import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

export function CallToAction() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("https://functions.poehali.dev/7c53635f-d88f-4099-8233-5e90617c7f73", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setPhone("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8 text-center">Бесплатная консультация</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance text-center">
            Готовы найти
            <br />
            свой <HighlightedText>идеальный дом</HighlightedText>?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-12">
            {/* Контактная информация */}
            <div className="space-y-6">
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-1">Организация</p>
                <p className="text-primary-foreground font-medium">АКО «Гильдия Риэлторов Вятки»</p>
              </div>
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-1">Адрес</p>
                <p className="text-primary-foreground/80">610017, г. Киров,<br />ул. Молодой Гвардии, д. 82</p>
              </div>
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-1">Телефон</p>
                <a href="tel:+78332455402" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">(8332) 455-402</a>
              </div>
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-1">E-mail</p>
                <a href="mailto:gildiya43@yandex.ru" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">gildiya43@yandex.ru</a>
              </div>
              <div className="pt-4 border-t border-primary-foreground/10">
                <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-1">Президент гильдии</p>
                <p className="text-primary-foreground font-medium">Чешуина Светлана Ивановна</p>
              </div>
            </div>

            {/* Форма */}
            <div>
              <p className="text-primary-foreground/70 text-base leading-relaxed mb-6">
                Оставьте заявку — мы перезвоним и бесплатно проконсультируем.
              </p>
              {status === "success" ? (
                <div className="border border-primary-foreground/20 px-8 py-6 text-center">
                  <p className="text-lg font-medium mb-1">Заявка принята!</p>
                  <p className="text-primary-foreground/60 text-sm">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-transparent border border-primary-foreground/30 px-5 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/70 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Номер телефона"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-transparent border border-primary-foreground/30 px-5 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/70 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group disabled:opacity-60"
                  >
                    {status === "loading" ? "Отправляем..." : "Получить консультацию"}
                    {status !== "loading" && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  </button>
                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center">Ошибка отправки. Попробуйте ещё раз.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}