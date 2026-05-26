import Link from "next/link"

import { generateSEOMetadata } from "@/lib/seo"
import { getSymptomBySlug, getAllSymptoms, type SymptomPageData } from "@/lib/symptoms-config"
import { isValidRoute } from "@/lib/valid-routes"
import { MediaPlaceholder } from "@/components/MediaPlaceholder"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getAllSymptoms().map((symptom) => ({
    slug: symptom.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const symptom = getSymptomBySlug(params.slug)

  if (!symptom) {
    return generateSEOMetadata({
      title: `Что мы лечим: ${params.slug}`,
      description:
        "Подробные разборы распространённых жалоб и симптомов с понятным маршрутом к диагнозу, услугам и врачам Mesedclinic.",
    })
  }

  return generateSEOMetadata({
    title: symptom.seoTitle ?? `${symptom.title} — диагностика и лечение в Mesedclinic`,
    description: symptom.seoDescription,
  })
}

export default async function SymptomPage({ params }: PageProps) {
  const symptom = getSymptomBySlug(params.slug) as SymptomPageData | undefined
  const isFrozenPregnancy =
    symptom?.slug === "zamershaya-beremennost-nerazvivayushchayasya-beremennost"

  if (!symptom) {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <div className="px-5">
          <div className="mx-auto max-w-6xl py-8 lg:py-12">
            <h1 className="mb-4 text-3xl font-semibold">Что мы лечим: {params.slug}</h1>
            <p className="text-sm text-neutral-600">
              Страница будет заполнена подробной информацией о проблеме и способах, как мы помогаем пациентам.
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
                <Link href="/chto-my-lechim" className="underline underline-offset-2">
                  Что мы лечим
                </Link>
                <span>/</span>
              </li>
              <li aria-current="page" className="text-neutral-800">
                {symptom.title}
              </li>
            </ol>
          </nav>

          <section aria-label="Основная информация о проблеме" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div>
                <h1 className="mb-4 text-3xl font-semibold leading-tight sm:text-4xl">{symptom.title}</h1>
                <p className="mb-4 text-sm text-neutral-700">{symptom.intro}</p>
                <p className="text-xs text-neutral-500">
                  Важно: окончательный диагноз и план ведения определяет врач на очной консультации.
                </p>
              </div>

              <aside className="space-y-4">
                <MediaPlaceholder
                  variant="hero"
                  ariaLabel={symptom.heroImageAlt || "Иллюстрация по теме"}
                  className="h-40"
                />

                <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                  <h2 className="mb-2 text-base font-semibold">Кратко</h2>
                  <dl className="space-y-1 text-xs text-neutral-700">
                    <div>
                      <dt className="text-neutral-500">Для кого</dt>
                      <dd>{symptom.forWhom}</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-500">Типичная ситуация</dt>
                      <dd>{symptom.typicalCase}</dd>
                    </div>
                  </dl>
                </div>
              </aside>
            </div>
          </section>

          <section id="when" aria-label="Когда важно обратиться" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">Когда важно обратиться к врачу</h2>
              <p className="text-sm text-neutral-600">
                Общие ситуации, когда консультация специалиста помогает снизить тревожность и получить план действий.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
              <ul className="space-y-2 text-sm text-neutral-700">
                {symptom.whenToSeeDoctor.map((item) => (
                  <li
                    key={item}
                    className="relative rounded-xl border border-neutral-200 bg-white px-4 py-3 pl-10"
                  >
                    <span className="absolute left-4 top-3 h-4 w-4 rounded-[6px] border-2 border-neutral-900 bg-gradient-to-b from-white to-neutral-50" />
                    {item}
                  </li>
                ))}
              </ul>

              <aside className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
                <h3 className="mb-2 text-base font-semibold">Когда нужна срочная помощь</h3>
                <p className="mb-2 text-xs text-neutral-600">
                  Перечень «красных флагов» носит ориентировочный характер. При их появлении важно срочно обратиться к врачу
                  или вызвать скорую помощь.
                </p>
                <ul className="list-disc pl-5 text-xs text-neutral-700">
                  {symptom.redFlags.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>

          <section id="how-we-help" aria-label="Как мы помогаем" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">Как мы помогаем</h2>
              <p className="text-sm text-neutral-600">
                Общая логика маршрута: от первичной консультации до наблюдения и контроля.
              </p>
            </header>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {symptom.howWeHelp.map((step) => (
                <article
                  key={step.title}
                  className="rounded-xl border border-neutral-200 bg-white p-4 text-sm"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <MediaPlaceholder variant="icon" ariaLabel={step.title} />
                    <div className="font-semibold">{step.title}</div>
                  </div>
                  <p className="text-xs text-neutral-600">{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="services" aria-label="Связанные услуги" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">Какие услуги подойдут</h2>
              <p className="text-sm text-neutral-600">Примеры услуг Mesedclinic, которые чаще всего подходят под этот запрос.</p>
            </header>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {symptom.services.map((service) => (
                <article
                  key={service.slug}
                  className="rounded-xl border border-neutral-200 bg-white p-5 text-sm"
                >
                  <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                  <p className="mb-3 text-sm text-neutral-600">{service.description}</p>
                  <div className="mb-3 text-xs text-neutral-700">
                    <span className="text-neutral-500">Цена: </span>
                    <span className="font-semibold">{service.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {isValidRoute(`/uslugi/${service.slug}`) ? (
                      <Link
                        href={`/uslugi/${service.slug}`}
                        className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-xs font-medium transition-colors hover:bg-neutral-50"
                      >
                        Подробнее
                      </Link>
                    ) : (
                      <span className="inline-flex cursor-not-allowed opacity-60 items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-400">
                        Подробнее
                      </span>
                    )}
                    <Link
                      href={`/zapis?service=${service.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                    >
                      Записаться
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="doctors" aria-label="К кому обратиться" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">К кому обратиться</h2>
              <p className="text-sm text-neutral-600">
                Врачи Mesedclinic, которые работают с такими запросами и ведут беременность.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {symptom.doctors.map((doctor) => (
                <article
                  key={doctor.slug}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <div className="h-24 border-b border-neutral-200 bg-neutral-50" aria-hidden="true" />
                  <div className="grid gap-2 p-4 text-sm">
                    <div className="font-semibold">{doctor.name}</div>
                    <div className="text-xs text-neutral-600">{doctor.specialty}</div>
                    {isValidRoute(`/vrachi/${doctor.slug}`) ? (
                      <Link
                        href={`/vrachi/${doctor.slug}`}
                        className="mt-1 inline-flex w-fit items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs transition-colors hover:bg-neutral-100"
                      >
                        Профиль врача
                      </Link>
                    ) : (
                      <span className="mt-1 inline-flex w-fit cursor-not-allowed opacity-60 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-400">
                        Профиль врача
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="cta"
            aria-label="Записаться на приём"
            className="rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div>
                <h2 className="mb-3 text-2xl font-semibold">Записаться на приём</h2>
                <p className="mb-4 text-sm text-neutral-700">
                  Если вы узнали себя в описании, оставьте заявку — вместе с врачом вы составите понятный план действий.
                </p>
                <Link
                  href={`/zapis?direction=${symptom.directionSlug}`}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Оставить заявку
                </Link>
              </div>
            </div>
          </section>
          <SymptomAdditionalInfo symptom={symptom} isFrozenPregnancy={isFrozenPregnancy} />
        </div>
      </div>
    </main>
  )
}

function SymptomAdditionalInfo({
  symptom,
  isFrozenPregnancy,
}: {
  symptom: SymptomPageData
  isFrozenPregnancy: boolean
}) {
  const content = getAdditionalInfoContent(symptom.slug)

  if (!content) {
    return null
  }

  return (
    <section
      id="additional-info"
      aria-label="Дополнительная информация"
      className="mt-10 border-t border-neutral-200 pt-10"
    >
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6 lg:p-8">
        <header className="mb-4 lg:mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Дополнительная информация</h2>
          <p className="text-xs text-neutral-600 sm:text-sm">
            Текст ниже носит информационный характер и не заменяет очную консультацию. Окончательное решение о
            диагностике и тактике ведения принимает врач.
          </p>
        </header>

        <nav
          aria-label="Оглавление по теме"
          className="mb-5 flex flex-wrap gap-2 text-xs sm:text-[13px]"
        >
          {content.toc.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="space-y-6 text-sm leading-relaxed text-neutral-800">
          <section id="add-overview" aria-label="Общие сведения">
            <h3 className="mb-1 text-base font-semibold">Общие сведения</h3>
            {content.overview.map((paragraph, index) => (
              <p
                key={index}
                className={`${index > 0 ? "mt-2" : ""} text-sm text-neutral-700`}
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section id="add-causes" aria-label="Почему это происходит">
            <h3 className="mb-1 text-base font-semibold">Почему это происходит</h3>
            {content.causes.map((paragraph, index) => (
              <p
                key={index}
                className={`${index > 0 ? "mt-2" : ""} text-sm text-neutral-700`}
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section id="add-symptoms" aria-label="Как проявляется">
            <h3 className="mb-1 text-base font-semibold">Как проявляется</h3>
            {content.symptoms.map((paragraph, index) => (
              <p
                key={index}
                className={`${index > 0 ? "mt-2" : ""} text-sm text-neutral-700`}
              >
                {paragraph}
              </p>
            ))}
          </section>

          <figure className="my-4 rounded-xl border border-neutral-200 bg-white p-4">
            <MediaPlaceholder
              variant="card"
              ariaLabel={symptom.inlineImageAlt || "Иллюстрация поддержки при сложной беременности"}
            />
            <figcaption className="mt-2 text-xs text-neutral-500">
              {symptom.inlineImageCaption ||
                "Иллюстрация носит условный характер. Конкретные решения принимаются только после очной консультации."}
            </figcaption>
          </figure>

          <section id="add-diagnosis" aria-label="Как подтверждается диагноз">
            <h3 className="mb-1 text-base font-semibold">Как подтверждается диагноз</h3>
            {content.diagnosis.map((paragraph, index) => (
              <p
                key={index}
                className={`${index > 0 ? "mt-2" : ""} text-sm text-neutral-700`}
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section id="add-treatment" aria-label="Как проходит лечение и восстановление">
            <h3 className="mb-1 text-base font-semibold">Как проходит лечение и восстановление</h3>
            {content.treatment.map((paragraph, index) => (
              <p
                key={index}
                className={`${index > 0 ? "mt-2" : ""} text-sm text-neutral-700`}
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section id="add-planning" aria-label="Планирование следующей беременности">
            <h3 className="mb-1 text-base font-semibold">Планирование следующей беременности</h3>
            {content.planning.map((paragraph, index) => (
              <p
                key={index}
                className={`${index > 0 ? "mt-2" : ""} text-sm text-neutral-700`}
              >
                {paragraph}
              </p>
            ))}
          </section>
        </div>
      </div>
    </section>
  )
}

type AdditionalInfoContent = {
  toc: [string, string][]
  overview: string[]
  causes: string[]
  symptoms: string[]
  diagnosis: string[]
  treatment: string[]
  planning: string[]
}

function getAdditionalInfoContent(slug: string): AdditionalInfoContent | null {
  if (slug === "planirovanie-beremennosti") {
    return {
      toc: [
        ["#add-overview", "Общие сведения"],
        ["#add-causes", "Почему важно планирование"],
        ["#add-symptoms", "Типичные запросы"],
        ["#add-diagnosis", "Что обычно входит в диагностику"],
        ["#add-treatment", "Как строится подготовка"],
        ["#add-planning", "Когда начинать и что учесть"],
      ],
      overview: [
        "Планирование беременности — это этап до зачатия, когда пара заранее оценивает состояние здоровья, обсуждает будущую беременность с врачом и при необходимости корректирует образ жизни и лечение хронических заболеваний. Такой подход помогает снизить риски осложнений и сделать период ожидания более спокойным и предсказуемым.",
        "Даже если серьёзных заболеваний нет, подготовительный визит к акушеру‑гинекологу часто отвечает на десятки вопросов: какие витамины действительно нужны, что делать с текущими лекарствами, когда лучше планировать зачатие с учётом работы, путешествий и других факторов.",
      ],
      causes: [
        "Частая причина обращения к врачу на этапе планирования — желание «сделать всё правильно» после непростого опыта: перенесённых операций, выкидышей, замершей беременности или длительных попыток забеременеть. В этих ситуациях особенно важно не поддаваться тревоге, а выстроить понятный план вместе со специалистом.",
        "Даже одна консультация до беременности может помочь учесть возраст, особенности менструального цикла, наследственность, перенесённые инфекции, состояние щитовидной железы и другие факторы, которые играют роль в вынашивании ребёнка.",
      ],
      symptoms: [
        "На этапе планирования нет «симптомов» в привычном медицинском смысле, но есть типичные запросы: «мы готовы, но не знаем, с чего начать», «боюсь повторения предыдущего опыта», «хотим проверить, всё ли в порядке перед зачатием».",
        "Иногда к планированию подталкивают хронические заболевания — например, эндокринные, аутоиммунные или гинекологические, — при которых важно заранее согласовать план ведения с профильными специалистами.",
      ],
      diagnosis: [
        "В базовую диагностику перед беременностью обычно входят общий и биохимический анализы крови, оценка свёртывающей системы, инфекции по показаниям, УЗИ органов малого таза, мазки и другие исследования, если их давно не выполняли.",
        "Конкретный объём обследований всегда подбирается индивидуально: врачу важно не «перегружать» пациента лишними анализами, а сосредоточиться на том, что действительно влияет на безопасность будущей беременности.",
      ],
      treatment: [
        "По результатам обследования врач может рекомендовать курс коррекции дефицитов (например, витамина D, железа, фолиевой кислоты), настройку терапии хронических заболеваний, смену некоторых препаратов на более безопасные при планируемой беременности.",
        "Иногда этап подготовки включает в себя консультации смежных специалистов — эндокринолога, терапевта, генетика. Всё это помогает зайти в беременность в более стабильном состоянии и с заранее продуманным планом наблюдения.",
      ],
      planning: [
        "Часто пары задают вопрос: «когда мы можем начинать пробовать?» Ответ зависит от исходного состояния здоровья и особенностей лечения, которое проводилось до этого. Врач помогает определить комфортный горизонт планирования и объясняет, что считать нормальным сроком ожидания беременности.",
        "Важно, чтобы планирование не превращалось в источник постоянного стресса. Обсуждение ожиданий, границ и возможных шагов заранее помогает сохранить опору на факты, а не только на эмоции и истории знакомых из интернета.",
      ],
    }
  }

  if (slug === "pervyy-trimestr") {
    return {
      toc: [
        ["#add-overview", "Общие сведения"],
        ["#add-causes", "Что особенно важно в первом триместре"],
        ["#add-symptoms", "Какие ощущения бывают нормальными"],
        ["#add-diagnosis", "Обследования в начале беременности"],
        ["#add-treatment", "Как строится наблюдение"],
        ["#add-planning", "О чём договориться с врачом"],
      ],
      overview: [
        "Первый триместр — примерно первые 12 недель беременности. Это время, когда закладываются основные органы и системы будущего ребёнка, формируется плацента и определяются многие параметры дальнейшего течения беременности.",
        "Для будущей мамы этот период часто связан с сильными эмоциями: от радости до тревоги и множества вопросов. Задача врача — помочь пройти этот этап спокойно, с понятным планом и без избыточного количества визитов и анализов.",
      ],
      causes: [
        "В первом триместре важно особенно аккуратно относиться к приёму лекарств, перенесённым инфекциям, режиму работы и отдыха. Не все факторы можно полностью контролировать, но многие риски реально снизить за счёт своевременной консультации и корректировки образа жизни.",
        "При наличии хронических заболеваний (например, щитовидной железы, диабета, гипертонии) врач ещё на старте беременности уточняет схемы терапии, чтобы они были безопасны и для мамы, и для ребёнка.",
      ],
      symptoms: [
        "Типичные ощущения первого триместра — усталость, сонливость, изменение вкусов и запахов, умеренная тошнота, перепады настроения. Важно, что у части женщин эти проявления минимальны или вообще отсутствуют — это тоже может быть вариантом нормы.",
        "Тревогу обычно вызывают боли внизу живота и выделения. Не всегда это признак серьёзной проблемы, но такие симптомы требуют очной оценки у врача, чтобы не пропустить осложнения и при необходимости скорректировать тактику.",
      ],
      diagnosis: [
        "В начале беременности врач подтверждает факт беременности и её локализацию, уточняет срок и оценивает общее состояние. Для этого используются УЗИ и анализы крови, иногда — динамическое наблюдение в течение нескольких дней.",
        "Далее обсуждаются обязательные и рекомендованные обследования: скрининги по срокам, базовые анализы, консультации смежных специалистов при наличии показаний. Важно понимать, зачем назначено каждое исследование, и не стесняться задавать вопросы.",
      ],
      treatment: [
        "Наблюдение в первом триместре включает регулярные визиты к акушеру‑гинекологу, контроль самочувствия, работу с жалобами и планирование дальнейших шагов. При необходимости врач может назначать поддерживающую терапию, направленную на снижение рисков осложнений.",
        "Отдельное внимание уделяется образу жизни: режиму сна, питанию, уровню активности, работе со стрессом. Часто именно простые бытовые изменения дают заметный эффект в качестве самочувствия.",
      ],
      planning: [
        "На старте беременности полезно договориться с врачом о частоте визитов, примерном плане анализов и скринингов, формате связи между приёмами. Это снижает тревожность и помогает не «гуглить» каждый новый симптом в одиночестве.",
        "Важно заранее проговорить, в каких ситуациях нужно обращаться за срочной помощью, а какие изменения самочувствия могут быть ожидаемыми. Такой «договор» помогает чувствовать себя увереннее и понимать, что делать в разных сценариях.",
      ],
    }
  }

  if (slug === "zamershaya-beremennost-nerazvivayushchayasya-beremennost") {
    return {
      toc: [
        ["#add-overview", "Общие сведения"],
        ["#add-causes", "Почему это происходит"],
        ["#add-symptoms", "Как проявляется"],
        ["#add-diagnosis", "Как подтверждается диагноз"],
        ["#add-treatment", "Как проходит лечение и восстановление"],
        ["#add-planning", "Планирование следующей беременности"],
      ],
      overview: [
        "Замершая (неразвивающаяся) беременность — это ситуация, когда развитие эмбриона или плода в матке останавливается, и беременность больше не прогрессирует. Чаще всего это происходит в первом триместре, на сроках, когда формируются ключевые структуры будущего ребёнка и организм особенно чувствителен к неблагоприятным факторам.",
        "Для женщины это всегда тяжёлое и часто неожиданное событие. Важно помнить, что в большинстве случаев речь идёт не о «вине» матери, а о сочетании медицинских причин, которые невозможно было контролировать или предсказать заранее.",
      ],
      causes: [
        "Наиболее частая причина замершей беременности — серьёзные хромосомные нарушения у эмбриона, которые несовместимы с дальнейшим развитием. Организм как бы «останавливает» беременность на раннем этапе, чтобы не допустить рождения ребёнка с тяжёлой патологией.",
        "Также роль могут играть гормональные нарушения, тяжёлые инфекции, нарушения свёртываемости крови, выраженный дефицит важных веществ, возрастные факторы и сопутствующие заболевания. Задача врача — аккуратно оценить возможные причины именно в вашей ситуации и при необходимости предложить дообследование уже после завершения текущей беременности.",
      ],
      symptoms: [
        "Клиническая картина может существенно отличаться у разных женщин. Иногда первые сигналы — субъективные: исчезновение ранее выраженного токсикоза, ощущение «стало как до беременности», изменение чувствительности молочных желёз. В дальнейшем могут появиться тянущие боли внизу живота и мажущие или кровянистые выделения.",
        "На более поздних сроках заподозрить проблему помогает отсутствие шевелений плода. Но важно понимать: ни один из перечисленных признаков сам по себе не ставит диагноз. Они лишь повод как можно скорее обратиться к акушеру‑гинекологу и пройти очную диагностику, чтобы получить ясность и план дальнейших действий.",
      ],
      diagnosis: [
        "Подтверждение или опровержение замершей беременности всегда опирается на комбинацию данных: осмотр врача, ультразвуковое исследование и, при необходимости, динамику уровня хорионического гонадотропина (ХГЧ) в крови. На УЗИ оценивают, есть ли сердцебиение, соответствует ли размер эмбриона ожидаемому сроку, нет ли признаков отслойки и других осложнений.",
        "В ряде случаев врачу может понадобиться повторить УЗИ через небольшой интервал, чтобы убедиться в корректности выводов. Это помогает избежать поспешных решений и опирается на действующие клинические рекомендации.",
      ],
      treatment: [
        "Если диагноз замершей беременности подтверждён, задача врача — безопасно завершить беременность и снизить риски для здоровья женщины. Возможные варианты тактики зависят от срока, общего состояния, сопутствующих заболеваний и всегда обсуждаются индивидуально на приёме с объяснением плюсов и ограничений каждого пути.",
        "После завершения беременности важно дать организму восстановиться: контролировать состояние матки и эндометрия, при необходимости пролечить инфекции, скорректировать гормональный фон и другие выявленные факторы. В этот период полезна не только медицинская, но и психологическая поддержка — в том числе работа с психологом или психотерапевтом, если вы чувствуете, что так будет комфортнее.",
      ],
      planning: [
        "После замершей беременности большинство женщин в дальнейшем успешно вынашивают ребёнка. Врачи обычно рекомендуют выдержать паузу перед следующим зачатием, чтобы организм успел восстановиться и при необходимости пройти дообследование.",
        "На приёме можно обсудить, какие анализы и консультации будут полезны именно в вашем случае, имеет ли смысл встреча с генетиком, как скорректировать образ жизни и лечение хронических заболеваний. Важно планировать следующую беременность совместно с врачом — это помогает снизить риски и чувствовать себя увереннее на каждом этапе пути.",
      ],
    }
  }

  return null
}


