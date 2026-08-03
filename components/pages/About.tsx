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
    bg-gradient-to-b
    from-accent/15
    via-surface
    to-surface
    px-8
    py-24
    text-center
  "
      >
        <span
          className="
      pointer-events-none
      absolute
      left-1/2
      top-8
      -translate-x-1/2
      select-none
      text-[5rem]
      font-black
      uppercase
      tracking-[0.25em]
      text-white/5

      md:text-[8rem]

      lg:text-[10rem]
    "
        >
          CINE
        </span>

        <div className="relative z-10 mx-auto max-w-3xl space-y-8">
          <p className="text-sm uppercase tracking-[0.45em] text-accent">
            CINE BLOG
          </p>

          <h1
            className="
        text-4xl
        font-bold
        leading-tight

        md:text-5xl

        lg:text-6xl
      "
          >
            El cine desde
            <span className="block text-accent">otra perspectiva</span>
          </h1>

          <p
            className="
        mx-auto
        max-w-2xl
        text-lg
        leading-8
        text-text-secondary
      "
          >
            Un espacio donde las películas se viven más allá de una simple
            calificación. Aquí encontrarás reseñas personales, recomendaciones y
            conversaciones sobre historias que merecen ser recordadas.
          </p>
        </div>
      </section>
      {/* Qué encontrarás */}
      <section className="space-y-8">
        <SectionTitle>¿Qué encontrarás aquí?</SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="space-y-4 p-6">
            <div className="text-3xl">🎬</div>

            <h3 className="text-xl font-semibold">Reseñas personales</h3>

            <p className="leading-7 text-text-secondary">
              Opiniones honestas sobre películas que considero memorables,
              interesantes o simplemente dignas de conversación.
            </p>
          </Card>

          <Card className="space-y-4 p-6">
            <div className="text-3xl">🍿</div>

            <h3 className="text-xl font-semibold">Recomendaciones</h3>

            <p className="leading-7 text-text-secondary">
              Desde grandes clásicos hasta producciones recientes, cine
              independiente y joyas que merecen mucha más atención.
            </p>
          </Card>

          <Card className="space-y-4 p-6">
            <div className="text-3xl">🎞️</div>

            <h3 className="text-xl font-semibold">Próximamente</h3>

            <p className="leading-7 text-text-secondary">
              Una lista de películas que quiero descubrir y que probablemente
              terminarán convirtiéndose en futuras reseñas.
            </p>
          </Card>
        </div>
      </section>

      {/* Géneros */}
      <section className="space-y-6">
        <SectionTitle>Géneros favoritos</SectionTitle>

        <div className="flex flex-wrap gap-3">
          <Badge>Drama</Badge>
          <Badge>Ciencia ficción</Badge>
          <Badge>Thriller</Badge>
          <Badge>Suspenso</Badge>
          <Badge>Animación</Badge>
          <Badge>Terror psicológico</Badge>
        </div>
      </section>

      {/* Directores */}
      <section className="space-y-6">
        <SectionTitle>Directores que siempre llaman mi atención</SectionTitle>

        <div className="flex flex-wrap gap-3">
          <Badge>Denis Villeneuve</Badge>
          <Badge>Christopher Nolan</Badge>
          <Badge>David Fincher</Badge>
          <Badge>Bong Joon-ho</Badge>
          <Badge>Hayao Miyazaki</Badge>
          <Badge>Park Chan-wook</Badge>
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

      {/* Sistema de calificación */}
      <section>
        <SectionTitle>¿Cómo califico las películas?</SectionTitle>

        <div className="space-y-5">
          <div>
            <strong>10/10</strong>
            <p className="text-text-secondary">
              Una obra que considero extraordinaria y que volvería a recomendar
              sin dudar.
            </p>
          </div>

          <div>
            <strong>9/10</strong>
            <p className="text-text-secondary">
              Excelente. Muy pocos aspectos negativos.
            </p>
          </div>

          <div>
            <strong>8/10</strong>
            <p className="text-text-secondary">
              Muy buena y fácil de recomendar.
            </p>
          </div>

          <div>
            <strong>7/10</strong>
            <p className="text-text-secondary">
              Buena película con algunos detalles que pudieron ser mejores.
            </p>
          </div>

          <div>
            <strong>6/10 o menos</strong>
            <p className="text-text-secondary">
              No logró conectar conmigo, aunque siempre intento valorar sus
              aspectos positivos.
            </p>
          </div>
        </div>
      </section>

      {/* Cierre */}
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
