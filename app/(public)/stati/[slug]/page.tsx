import Link from "next/link"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return [
    { slug: "chek-list-pered-beremennostyu" },
  ]
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticleData(params.slug)

  if (!article) {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <div className="px-5">
          <div className="mx-auto max-w-6xl py-8 lg:py-12">
            <h1 className="mb-4 text-3xl font-semibold">Статья: {params.slug}</h1>
            <p className="text-sm text-neutral-600">
              Страница статьи будет заполнена позже. Вы можете вернуться в раздел{" "}
              <Link href="/stati" className="underline underline-offset-2">
                «Статьи»
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="px-5">
        <div className="mx-auto max-w-3xl py-8 lg:py-12">
          <nav className="mb-6 text-sm text-neutral-500" aria-label="Хлебные крошки">
            <ol className="flex flex-wrap gap-2">
              <li className="flex items-center gap-2">
                <Link href="/" className="underline underline-offset-2">
                  Главная
                </Link>
                <span>/</span>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/stati" className="underline underline-offset-2">
                  Статьи
                </Link>
                <span>/</span>
              </li>
              <li aria-current="page" className="text-neutral-800">
                {article.title}
              </li>
            </ol>
          </nav>

          <article aria-label="Статья">
            <header className="mb-6">
              <p className="mb-1 text-xs text-neutral-500">
                {article.date} • {article.tag}
              </p>
              <h1 className="mb-3 text-3xl font-semibold leading-tight sm:text-4xl">{article.title}</h1>
              <p className="text-sm text-neutral-600">{article.excerpt}</p>
            </header>

            <section aria-label="Основной текст статьи" className="prose prose-sm max-w-none text-neutral-800">
              <p>
                Плейсхолдер под основной текст статьи. Здесь будет структурированный контент с подзаголовками, списками и
                акцентами, согласованный с врачами и редакцией.
              </p>
              <p>
                Важно: информация в статье не заменяет очную консультацию специалиста. Она помогает понять общую логику
                обследования и подготовки к приёму.
              </p>
            </section>
          </article>

          <section
            aria-label="Связанные услуги и направления"
            className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-sm"
          >
            <h2 className="mb-3 text-base font-semibold">Что дальше</h2>
            <p className="mb-3 text-neutral-700">
              Если тема статьи вам откликается, можно почитать подробнее о наших услугах и направлениях или сразу записаться
              на приём.
            </p>
            <div className="flex flex-wrap gap-2">
              {article.relatedDirections.map((direction) => (
                <Link
                  key={direction.slug}
                  href={`/napravleniya/${direction.slug}`}
                  className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
                >
                  {direction.title}
                </Link>
              ))}
              {article.relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/uslugi/${service.slug}`}
                  className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href={`/zapis?direction=beremennost`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Записаться на приём
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function getArticleData(slug: string) {
  const articles: Record<
    string,
    {
      title: string
      excerpt: string
      tag: string
      date: string
      relatedDirections: { slug: string; title: string }[]
      relatedServices: { slug: string; title: string }[]
    }
  > = {
    "chek-list-pered-beremennostyu": {
      title: "Чек‑лист перед беременностью",
      excerpt: "Что проверить и какие анализы сдать до того, как планировать беременность.",
      tag: "Беременность",
      date: "10.01.2026",
      relatedDirections: [{ slug: "beremennost", title: "Беременность и роды" }],
      relatedServices: [
        { slug: "vedenie-beremennosti", title: "Ведение беременности" },
        { slug: "diagnostika-beremennosti", title: "Диагностика беременности" },
      ],
    },
    "pervyy-trimestr-na-chto-obratit-vnimanie": {
      title: "Первый триместр: на что обратить внимание",
      excerpt: "Краткий гид по самочувствию, обследованиям и тревожным симптомам в начале беременности.",
      tag: "Беременность",
      date: "15.01.2026",
      relatedDirections: [{ slug: "beremennost", title: "Беременность и роды" }],
      relatedServices: [
        { slug: "vedenie-beremennosti", title: "Ведение беременности" },
        { slug: "skriningi", title: "Скрининги беременности" },
      ],
    },
  }

  return articles[slug]
}
