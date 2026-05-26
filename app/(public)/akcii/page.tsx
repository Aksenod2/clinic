import Link from "next/link"

export default function PromotionsPage() {
  const promotions = [
    {
      slug: "vedenie-beremennosti-so-skidkoy",
      title: "Ведение беременности со скидкой",
      description: "Скидка на программу ведения беременности при записи до конца месяца.",
      oldPrice: "от 14 000 ₽",
      newPrice: "от 12 000 ₽",
      validTo: "31.01.2026",
      tag: "Беременность",
    },
    {
      slug: "uzi-beremennosti-po-spetcenam",
      title: "УЗИ беременности по спеццене",
      description: "Специальная цена на УЗИ беременности в будние дни.",
      oldPrice: "от 3 500 ₽",
      newPrice: "от 3 000 ₽",
      validTo: "28.02.2026",
      tag: "Беременность",
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
                Акции
              </li>
            </ol>
          </nav>

          <section aria-label="Акции клиники" className="mb-10">
            <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">Акции</h1>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              Специальные предложения Mesedclinic. Акции по ведению беременности, УЗИ и другим услугам помогают спланировать
              обследования с удобным бюджетом.
            </p>
          </section>

          <section aria-label="Список акций">
            <div className="grid gap-4 md:grid-cols-2">
              {promotions.map((promo) => (
                <article
                  key={promo.slug}
                  className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <header className="mb-3">
                    <p className="mb-1 text-xs text-neutral-500">{promo.tag}</p>
                    <h2 className="text-lg font-semibold">{promo.title}</h2>
                  </header>
                  <p className="mb-3 text-sm text-neutral-700">{promo.description}</p>
                  <div className="mb-4 flex items-baseline gap-3 text-sm">
                    <span className="text-neutral-500 line-through">{promo.oldPrice}</span>
                    <span className="text-base font-semibold text-neutral-900">{promo.newPrice}</span>
                  </div>
                  <p className="mb-4 text-xs text-neutral-500">Акция действует до {promo.validTo}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <Link
                      href={`/akcii/${promo.slug}`}
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-xs font-medium transition-colors hover:bg-neutral-50"
                    >
                      Подробные условия
                    </Link>
                    <Link
                      href={`/zapis?promotion=${promo.slug}`}
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                    >
                      Записаться по акции
                    </Link>
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
