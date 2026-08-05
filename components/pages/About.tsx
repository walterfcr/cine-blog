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
    rounded-3xl
    border
    border-border
    bg-surface
    px-6
    py-20
    md:px-12
    md:py-24
    lg:px-16
    lg:py-28
  "
      >
        <div
          className="
      pointer-events-none
      absolute
      -right-24
      -top-24
      h-72
      w-72
      rounded-full
      bg-accent/15
      blur-3xl
    "
        />

        <div
          className="
      pointer-events-none
      absolute
      -bottom-32
      -left-24
      h-72
      w-72
      rounded-full
      bg-rating/5
      blur-3xl
    "
        />

        <div className="relative z-10 max-w-4xl">
          <p
            className="
        text-sm
        font-semibold
        uppercase
        tracking-[0.35em]
        text-accent
      "
          >
            Sobre Cine Blog
          </p>

          <h1
            className="
        mt-6
        max-w-3xl
        text-4xl
        leading-[1.05]
        tracking-tight
        md:text-6xl
        lg:text-7xl
        font-bold
      "
          >
            El cine desde
            <span className="block text-accent">otra perspectiva.</span>
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
            Un espacio para hablar de películas más allá de una simple
            calificación. Reseñas personales, recomendaciones y conversaciones
            sobre historias que merecen ser recordadas.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-accent" />

            <span
              className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-text-muted
        "
            >
              Películas · Historias · Opiniones
            </span>
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
            <Badge>Denis Villeneuve</Badge>
            <Badge>Christopher Nolan</Badge>
            <Badge>David Fincher</Badge>
            <Badge>Bong Joon-ho</Badge>
            <Badge>Hayao Miyazaki</Badge>
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
