import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'

function About() {
  return (
    <Container className="space-y-20 py-16">
      <section
        className="
    relative
    overflow-hidden
    border-y
    border-border
    py-20
    md:py-28
    lg:py-32
  "
      >
        <div className="absolute right-0 top-0 h-full w-px bg-border" />

        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Butaca 24 / Sobre el blog
              </p>
            </div>

            <h1
              className="
          max-w-4xl
          text-5xl
          leading-[1.05]
          tracking-tight
          md:text-6xl
          lg:text-8xl
        "
            >
              El cine desde
              <span className="block text-accent">otra perspectiva</span>
            </h1>

            <p
              className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-text-secondary
          md:text-xl
          md:leading-9
        "
            >
              Un espacio donde las películas se viven más allá de una simple
              calificación. Aquí encontrarás reseñas personales, recomendaciones
              y conversaciones sobre historias que merecen ser recordadas.
            </p>
          </div>

          <div className="hidden border-l border-border pl-8 lg:block">
            <p className="text-7xl font-light leading-none text-text-muted/20">
              01
            </p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
              Miradas
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-text-muted">
              Historias · Cine · Opiniones
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionTitle>¿Qué encontrarás aquí?</SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            className="
            group
            space-y-5
            border-border
            p-7
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-accent
            hover:shadow-lg
          "
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">🎬</span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                01
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
                Reseñas personales
              </h3>

              <p className="leading-7 text-text-secondary">
                Opiniones honestas sobre películas que considero memorables,
                interesantes o simplemente dignas de conversación.
              </p>
            </div>
          </Card>

          <Card
            className="
            group
            space-y-5
            border-border
            p-7
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-accent
            hover:shadow-lg
          "
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">🍿</span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                02
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
                Recomendaciones
              </h3>

              <p className="leading-7 text-text-secondary">
                Desde grandes clásicos hasta producciones recientes, cine
                independiente y joyas que merecen mucha más atención.
              </p>
            </div>
          </Card>

          <Card
            className="
            group
            space-y-5
            border-border
            p-7
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-accent
            hover:shadow-lg
          "
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">🎞️</span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                03
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
                Próximamente
              </h3>

              <p className="leading-7 text-text-secondary">
                Una lista de películas que quiero descubrir y que probablemente
                terminarán convirtiéndose en futuras reseñas.
              </p>
            </div>
          </Card>
        </div>
      </section>
      <section className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <SectionTitle>Géneros favoritos</SectionTitle>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge>Drama</Badge>
            <Badge>Ciencia ficción</Badge>
            <Badge>Thriller</Badge>
            <Badge>Suspenso</Badge>
            <Badge>Animación</Badge>
            <Badge>Terror psicológico</Badge>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <SectionTitle>
              Directores que siempre llaman mi atención
            </SectionTitle>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge>Yorgos Lanthimos</Badge>
            <Badge>Christopher Nolan</Badge>
            <Badge>David Fincher</Badge>
            <Badge>Bong Joon-ho</Badge>
            <Badge>Quentin Tarantino</Badge>
            <Badge>Park Chan-wook</Badge>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle>¿Por qué existe este blog?</SectionTitle>

        <p className="leading-8 text-text-secondary">
          Siempre he disfrutado hablar de películas mucho más que simplemente
          ponerles una nota. Algunas permanecen conmigo durante semanas, otras
          cambian por completo mi forma de ver una historia y algunas terminan
          siendo esas recomendaciones que inevitablemente comparto con amigos.
        </p>

        <p className="leading-8 text-text-secondary">
          Este blog nació para reunir todas esas experiencias en un solo lugar.
          No pretende decir qué película es buena o mala; simplemente compartir
          cómo las viví y por qué creo que vale la pena descubrirlas.
        </p>
      </section>
      <section className="space-y-10">
        <div>
          <SectionTitle>¿Cómo califico las películas?</SectionTitle>

          <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
            La puntuación refleja principalmente cuánto logró conectar conmigo
            una película. No busca ser una medida absoluta de su calidad.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:items-center">
            <span className="text-3xl font-semibold text-rating">10</span>

            <div>
              <h3 className="text-lg font-semibold">Extraordinaria</h3>

              <p className="mt-1 leading-7 text-text-secondary">
                Una obra que considero extraordinaria y que volvería a
                recomendar sin dudar.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:items-center">
            <span className="text-3xl font-semibold text-rating">9</span>

            <div>
              <h3 className="text-lg font-semibold">Excelente</h3>

              <p className="mt-1 leading-7 text-text-secondary">
                Excelente. Muy pocos aspectos negativos y una experiencia que
                recomendaría fácilmente.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:items-center">
            <span className="text-3xl font-semibold text-rating">8</span>

            <div>
              <h3 className="text-lg font-semibold">Muy buena</h3>

              <p className="mt-1 leading-7 text-text-secondary">
                Una película muy buena, con suficientes elementos para
                recomendarla.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:items-center">
            <span className="text-3xl font-semibold text-rating">7</span>

            <div>
              <h3 className="text-lg font-semibold">Buena</h3>

              <p className="mt-1 leading-7 text-text-secondary">
                Una buena película con algunos detalles que pudieron ser
                mejores.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:items-center">
            <span className="text-3xl font-semibold text-text-muted">6↓</span>

            <div>
              <h3 className="text-lg font-semibold">No logró conectar</h3>

              <p className="mt-1 leading-7 text-text-secondary">
                No logró conectar conmigo, aunque siempre intento valorar sus
                aspectos positivos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-2xl border-t border-border pt-12 text-center">
        <p className="text-lg italic text-text-secondary">
          "Si una reseña consigue despertar tu curiosidad y hacerte descubrir
          una película que aún no habías visto, entonces este blog ya habrá
          cumplido su propósito."
        </p>
      </section>
    </Container>
  )
}

export default About
