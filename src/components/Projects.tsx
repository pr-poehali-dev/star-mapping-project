import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Орловская ул., 4",
    category: "2-комнатная квартира · 63.8 м² · 6/10 эт.",
    location: "Киров, р-н Первомайский",
    year: "11 000 000 ₽",
    image: "https://cdn.poehali.dev/projects/0310d3c5-5cfa-44fd-bdb9-25f13d127fc6/bucket/40272952-7bd8-4980-ae1a-1ffc0a9eb1d2.png",
  },
  {
    id: 2,
    title: "ул. Левитана, 2",
    category: "1-комнатная квартира · 31.5 м² · 3/5 эт.",
    location: "Киров, р-н Ленинский",
    year: "4 795 000 ₽",
    image: "https://cdn.poehali.dev/projects/0310d3c5-5cfa-44fd-bdb9-25f13d127fc6/bucket/b8b7b412-d205-41ed-a6c1-dd1c14b038d4.png",
  },
  {
    id: 3,
    title: "Комсомольская ул., 113",
    category: "2-комнатная квартира · 51.5 м² · 2/10 эт.",
    location: "Киров, р-н Ленинский",
    year: "6 200 000 ₽",
    image: "https://cdn.poehali.dev/projects/0310d3c5-5cfa-44fd-bdb9-25f13d127fc6/bucket/fe6adc1b-0305-4334-a094-961a334567b8.png",
  },
  {
    id: 4,
    title: "ул. Ивана Попова, 58",
    category: "1-комнатная квартира · 42.6 м² · 6/16 эт.",
    location: "Киров, р-н Ленинский",
    year: "7 000 000 ₽",
    image: "https://cdn.poehali.dev/projects/0310d3c5-5cfa-44fd-bdb9-25f13d127fc6/bucket/9b2af835-f468-49fc-b32d-8a7c00e5847c.png",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Актуальные предложения</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши объекты</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все объекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category}
                  </p>
                  <p className="text-muted-foreground text-sm">{project.location}</p>
                </div>
                <span className="text-foreground font-medium text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}