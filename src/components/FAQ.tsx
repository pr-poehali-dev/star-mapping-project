import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начать покупку квартиры?",
    answer:
      "Начните с бесплатной консультации — позвоните или оставьте заявку. Мы обсудим ваши пожелания, бюджет и район. После этого подберём подходящие варианты и организуем показы в удобное для вас время.",
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer:
      "Для покупателей консультация и подбор объектов — бесплатно. Комиссия агентства составляет 2–3% от стоимости сделки и включает полное юридическое сопровождение. Точные условия обсуждаем индивидуально.",
  },
  {
    question: "Помогаете ли вы с ипотекой?",
    answer:
      "Да. Мы сотрудничаем с ведущими банками и помогаем получить одобрение на выгодных условиях. Наши специалисты помогут собрать документы, подать заявку и выбрать оптимальную программу кредитования.",
  },
  {
    question: "Как проверяется юридическая чистота объекта?",
    answer:
      "Мы проводим полную проверку: история собственности, обременения, долги по ЖКУ, наличие прав третьих лиц. Используем официальные выписки из ЕГРН и работаем с юристами, специализирующимися на недвижимости.",
  },
  {
    question: "Работаете ли вы с новостройками?",
    answer:
      "Да, мы работаем как с первичным, так и со вторичным рынком. Для новостроек проверяем надёжность застройщика, условия договора долевого участия и актуальные акции от девелоперов.",
  },
  {
    question: "Как быстро можно продать квартиру?",
    answer:
      "В среднем — от 2 до 6 недель при правильной цене и хорошей подаче. Мы делаем профессиональные фотографии, размещаем объявления на всех ключевых площадках и активно работаем с базой покупателей.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}