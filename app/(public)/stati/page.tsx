import Link from "next/link"

import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export default function ArticlesPage() {
  const articles = [
    {
      slug: "chek-list-pered-beremennostyu",
      title: "Чек‑лист перед беременностью",
      excerpt: "Что проверить и какие анализы сдать до того, как планировать беременность.",
      tag: "Беременность",
      date: "10.01.2026",
    },
    {
      slug: "pervyy-trimestr-na-chto-obratit-vnimanie",
      title: "Первый триместр: на что обратить внимание",
      excerpt: "Краткий гид по самочувствию, обследованиям и тревожным симптомам в начале беременности.",
      tag: "Беременность",
      date: "15.01.2026",
    },
    {
      slug: "kogda-idti-k-ginekologu",
      title: "Когда стоит записаться к гинекологу",
      excerpt: "Сигналы, при которых лучше не откладывать визит к врачу.",
      tag: "Гинекология",
      date: "05.01.2026",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="px-5">
        <div className="mx-auto max-w-6xl py-8 lg:py-12">
          <nav className="mb-6 text-sm text-neutral-500" aria-label="Хлебные крошки">
            <ol className="flex flex-wrap gap-2">
              <li className="flex items-center gap-2">
                <Link href="/" className="underline underline-offset-2">
                  Главная
                </Link>
                <span>/</span>
              </li>
              <li aria-current="page" className="text-neutral-800">
                Статьи
              </li>
            </ol>
          </nav>

          <section aria-label="Статьи Mesedclinic" className="mb-10">
            <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">Статьи</h1>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              Подборка материалов Mesedclinic о беременности, гинекологии и здоровье семьи. Статьи не заменяют очную
              консультацию, но помогают лучше подготовиться к приёму.
            </p>
          </section>

          <section aria-label="Список статей">
            <div className="grid gap-4 md:grid-cols-2">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <header className="mb-3 space-y-2">
                    <MediaPlaceholder
                      variant="card"
                      ariaLabel={`Обложка статьи: ${article.title}`}
                    />
                    <p className="mb-1 text-xs text-neutral-500">{article.date}</p>
                    <h2 className="text-lg font-semibold">{article.title}</h2>
                    <p className="mt-1 text-xs text-neutral-600">{article.tag}</p>
                  </header>
                  <p className="mb-4 text-sm text-neutral-700">{article.excerpt}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <Link
                      href={`/stati/${article.slug}`}
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-xs font-medium transition-colors hover:bg-neutral-50"
                    >
                      Читать статью
                    </Link>
                    {article.tag === "Беременность" && (
                      <Link
                        href="/zapis?direction=beremennost"
                        className="inline-flex items-center justify-center rounded-lg border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                      >
                        Записаться по теме
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
