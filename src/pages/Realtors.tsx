import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const realtors = [
  {
    name: "Садакова Елена Геннадьевна",
    photo: "https://cdn.poehali.dev/projects/0310d3c5-5cfa-44fd-bdb9-25f13d127fc6/bucket/901bfa1e-f722-4e20-8abb-1936f58f27a6.png",
    certificate: "№ РОСС RU РГР ТОС 43.01 АН 0976",
    validUntil: "17.02.2029",
    phone: "+7 (964) 256-50-00",
  },
]

export default function Realtors() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Агентство недвижимости «Фемида»</p>
            <h1 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight mb-4">
              Аттестованные риэлторы
            </h1>
            <p className="text-muted-foreground mb-12">Квалификация: Брокер по недвижимости</p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {realtors.map((r) => (
                <div key={r.name} className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={r.photo}
                      alt={r.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-medium text-base leading-snug">{r.name}</h3>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Сертификат</p>
                      <p className="text-sm">{r.certificate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Срок действия</p>
                      <p className="text-sm">до {r.validUntil}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Телефон</p>
                      <a href={`tel:${r.phone.replace(/\D/g, "")}`} className="text-sm hover:text-primary transition-colors">
                        {r.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
