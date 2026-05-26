import Link from "next/link"
import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-neutral-700">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <div className="text-base font-semibold">Mesedclinic</div>
            <p className="mt-2 text-xs text-neutral-600">
              Семейная клиника: ведём беременность, помогаем женщинам, мужчинам и детям в разных филиалах сети.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Разделы
            </div>
            <nav className="mt-3 flex flex-col gap-1.5 text-xs text-neutral-700" aria-label="Основные разделы сайта">
              <Link href="/napravleniya" className="hover:underline hover:underline-offset-2">
                Направления
              </Link>
              <Link href="/uslugi" className="hover:underline hover:underline-offset-2">
                Услуги
              </Link>
              <Link href="/vrachi" className="hover:underline hover:underline-offset-2">
                Врачи
              </Link>
              <Link href="/kliniki" className="hover:underline hover:underline-offset-2">
                Клиники
              </Link>
              <Link href="/akcii" className="hover:underline hover:underline-offset-2">
                Акции
              </Link>
              <Link href="/stati" className="hover:underline hover:underline-offset-2">
                Статьи
              </Link>
              <Link href="/online" className="hover:underline hover:underline-offset-2">
                Онлайн‑консультации
              </Link>
            </nav>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Контакты и документы
            </div>
            <div className="mt-3 space-y-1 text-xs text-neutral-700">
              <p>Телефон: +7 (999) 123-45-67</p>
              <p>Email: info@mesedclinic.ru</p>
              <Link href="/oms" className="block hover:underline hover:underline-offset-2">
                Документация ОМС
              </Link>
              <Link href="/strahovka" className="block hover:underline hover:underline-offset-2">
                Страховка
              </Link>
              <Link href="/vozvrat-naloga" className="block hover:underline hover:underline-offset-2">
                Возврат налога за лечение
              </Link>
              <span className="block text-neutral-400">
                Политика конфиденциальности
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <p>© 2026 Mesedclinic. Все права защищены.</p>
              <p>Информация на сайте не заменяет консультацию врача.</p>
            </div>
            <div className="flex items-center gap-2">
              <MediaPlaceholder variant="icon" ariaLabel="Логотип ОМС" className="h-6 w-6" />
              <MediaPlaceholder variant="icon" ariaLabel="Логотип лицензии" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

