import Link from "next/link"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return [
    { slug: "vedenie-beremennosti-so-skidkoy" },
    { slug: "uzi-beremennosti-po-spetcenam" },
  ]
}

export default async function PromotionPage({ params }: PageProps) {
  const promo = getPromotionData(params.slug)

  if (!promo) {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <div className="px-5">
          <div className="mx-auto max-w-6xl py-8 lg:py-12">
            <h1 className="mb-4 text-3xl font-semibold">Акция: {params.slug}</h1>
            <p className="text-sm text-neutral-600">
              Подробная страница акции будет добавлена позже. Вы можете вернуться в раздел{" "}
              <Link href="/akcii" className="underline underline-offset-2">
                «Акции»
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
        <div className="mx-auto max-w-6xl py-8 lg:py-12">
          <nav className="mb-6 text-sm text-neutral-500" aria-label="Хлебные крошки">
            <ol className="flex flex-wrap gap-2">
              <li className="flex items-center gap-2">
                <Link href="/" className="underline underline-offset-2">
                  Главная
                </Link>
                <span>/</span>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/akcii" className="underline underline-offset-2">
                  Акции
                </Link>
                <span>/</span>
              </li>
              <li aria-current="page" className="text-neutral-800">
                {promo.title}
              </li>
            </ol>
          </nav>

          <section aria-label="Информация об акции" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div>
                <h1 className="mb-3 text-3xl font-semibold leading-tight sm:text-4xl">{promo.title}</h1>
                <p className="mb-3 text-sm text-neutral-700">{promo.description}</p>
                <p className="mb-4 text-xs text-neutral-500">Акция действует до {promo.validTo}</p>

                <div className="mb-4 flex items-baseline gap-3 text-lg">
                  <span className="text-neutral-400 line-through">{promo.oldPrice}</span>
                  <span className="font-semibold text-neutral-900">{promo.newPrice}</span>
                </div>

                <div className="mb-4 text-xs text-neutral-600">
                  Условия акции действуют при записи через сайт или по телефону с упоминанием предложения.
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/zapis?promotion=${params.slug}`}
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Записаться по акции
                  </Link>
                  <Link
                    href="/zapis"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-base font-medium transition-colors hover:bg-neutral-50"
                  >
                    Записаться без акции
                  </Link>
                </div>
              </div>

              <aside className="space-y-4">
                <section className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                  <h2 className="mb-2 text-base font-semibold">Что входит</h2>
                  <ul className="list-disc pl-5 text-xs text-neutral-700">
                    {promo.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                  <h2 className="mb-2 text-base font-semibold">Кому подойдёт</h2>
                  <p className="text-xs text-neutral-700">{promo.forWhom}</p>
                </section>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function getPromotionData(slug: string) {
  const promotions: Record<
    string,
    {
      title: string
      description: string
      oldPrice: string
      newPrice: string
      validTo: string
      forWhom: string
      includes: string[]
    }
  > = {
    "vedenie-beremennosti-so-skidkoy": {
      title: "Ведение беременности со скидкой",
      description:
        "Скидка на программу ведения беременности при записи до конца месяца. Программа включает наблюдение по триместрам и базовые обследования.",
      oldPrice: "от 14 000 ₽",
      newPrice: "от 12 000 ₽",
      validTo: "31.01.2026",
      forWhom: "Пациентки с подтверждённой беременностью, которые планируют наблюдаться в Mesedclinic.",
      includes: [
        "Первичный приём акушера‑гинеколога",
        "Промежуточные консультации по программе",
        "Базовый набор анализов по сроку",
      ],
    },
    "uzi-beremennosti-po-spetcenam": {
      title: "УЗИ беременности по спеццене",
      description: "Специальная цена на УЗИ беременности при записи в будние дни до 14:00.",
      oldPrice: "от 3 500 ₽",
      newPrice: "от 3 000 ₽",
      validTo: "28.02.2026",
      forWhom: "Пациентки на любом сроке беременности, по направлению врача или самостоятельно.",
      includes: [
        "УЗИ беременности в одном из филиалов Mesedclinic",
        "Описание исследования",
        "Краткий комментарий врача по результатам",
      ],
    },
  }

  return promotions[slug]
}
