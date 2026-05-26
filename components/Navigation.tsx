"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { MegaMenu, type MegaMenuConfig } from "@/components/MegaMenu"
import { isValidRoute } from "@/lib/valid-routes"

type NavItemBase = {
  id: string
  label: string
}

type NavLinkItem = NavItemBase & {
  type: "link"
  href: string
}

type NavMegaItem = NavItemBase & {
  type: "mega"
  config: MegaMenuConfig
}

type NavItem = NavLinkItem | NavMegaItem

const navItems: NavItem[] = [
  {
    id: "directions",
    type: "mega",
    label: "Направления",
    config: {
      id: "directions",
      sections: [
        {
          title: "Ключевые направления",
          items: [
            {
              label: "Беременность и роды",
              href: "/napravleniya/beremennost",
              description:
                "Полный цикл ведения беременности: от планирования до родов.",
            },
            {
              label: "Гинекология",
              href: "/napravleniya/ginekologiya",
              description: "Женское здоровье, диагностика и лечение.",
            },
            {
              label: "Педиатрия",
              href: "/napravleniya/pediatriya",
              description: "Здоровье детей, осмотры и вакцинация.",
            },
          ],
        },
        {
          title: "Дополнительные направления",
          items: [
            {
              label: "Урология",
              href: "/napravleniya/urologiya",
              description: "Диагностика и лечение заболеваний мочеполовой системы.",
            },
            {
              label: "Стоматология",
              href: "/napravleniya/stomatologiya",
              description: "Лечение зубов, имплантация, гигиена.",
            },
            {
              label: "УЗИ-диагностика",
              href: "/napravleniya/uzi",
              description: "Современное ультразвуковое исследование.",
            },
          ],
        },
        {
          title: "Как выбрать направление",
          items: [
            {
              label: "Онлайн-консультация",
              href: "/online",
              description:
                "Поможем определить подходящее направление и врача.",
            },
            {
              label: "Записаться на приём",
              href: "/zapis",
              description: "Быстрая запись с выбором филиала и врача.",
            },
          ],
        },
      ],
      footerLink: {
        label: "Все направления →",
        href: "/napravleniya",
      },
    },
  },
  {
    id: "services",
    type: "mega",
    label: "Услуги",
    config: {
      id: "services",
      sections: [
        {
          title: "Популярные услуги",
          items: [
            {
              label: "Ведение беременности",
              href: "/uslugi/vedenie-beremennosti",
              description: "Пакетные программы наблюдения беременности.",
            },
            {
              label: "Диагностика беременности",
              href: "/uslugi/diagnostika-beremennosti",
              description: "УЗИ и анализы на ранних сроках.",
            },
            {
              label: "Приём гинеколога",
              href: "/uslugi/priem-ginekologa",
              description: "Консультация, диагностика, план лечения.",
            },
          ],
        },
        {
          title: "Чекапы",
          items: [
            {
              label: "Женское здоровье",
              href: "/uslugi/chekap-zhenskoe-zdorovie",
              description: "Комплексные программы обследований.",
            },
            {
              label: "Мужское здоровье",
              href: "/uslugi/chekap-muzhskoe-zdorovie",
              description: "Диагностика и профилактика.",
            },
          ],
        },
        {
          title: "Как записаться",
          items: [
            {
              label: "Запись онлайн",
              href: "/zapis",
              description: "Выбор направления, клиники и врача.",
            },
            {
              label: "Консультация по телефону",
              href: "tel:+79991234567",
              description: "Администратор поможет подобрать услугу.",
            },
          ],
        },
      ],
      footerLink: {
        label: "Все услуги и цены →",
        href: "/uslugi",
      },
    },
  },
  {
    id: "symptoms",
    type: "link",
    label: "Что мы лечим",
    href: "/chto-my-lechim",
  },
  {
    id: "doctors",
    type: "link",
    label: "Врачи",
    href: "/vrachi",
  },
  {
    id: "clinics",
    type: "mega",
    label: "Клиники",
    config: {
      id: "clinics",
      sections: [
        {
          title: "Филиалы",
          items: [
            {
              label: "Бутово",
              href: "/kliniki/butovo",
              description: "Адрес, как добраться, специалисты филиала.",
            },
            {
              label: "Арбатская",
              href: "/kliniki/arbatskaya",
              description: "Клиника в центре, рядом с метро.",
            },
            {
              label: "Балашиха",
              href: "/kliniki/balashiha",
              description: "Клиника для жителей области.",
            },
          ],
        },
        {
          title: "Как выбрать клинику",
          items: [
            {
              label: "Сравнение филиалов",
              href: "/kliniki",
              description: "Удобный выбор по адресу и услугам.",
            },
            {
              label: "Онлайн-консультация",
              href: "/online",
              description: "Подберём филиал под вашу задачу.",
            },
          ],
        },
      ],
      footerLink: {
        label: "Все клиники →",
        href: "/kliniki",
      },
    },
  },
  {
    id: "promotions",
    type: "mega",
    label: "Акции и статьи",
    config: {
      id: "promotions",
      sections: [
        {
          title: "Акции",
          items: [
            {
              label: "Текущие акции",
              href: "/akcii",
              description: "Специальные предложения и скидки.",
            },
            {
              label: "Беременность",
              href: "/akcii?category=beremennost",
              description: "Пакеты и скидки по ведению беременности.",
            },
          ],
        },
        {
          title: "Статьи и новости",
          items: [
            {
              label: "Все статьи",
              href: "/stati",
              description: "Объясняем сложное простым языком.",
            },
            {
              label: "Беременность и роды",
              href: "/stati?topic=beremennost",
              description: "Материалы для будущих родителей.",
            },
          ],
        },
        {
          title: "Пациентам",
          items: [
            {
              label: "Документы и лицензии",
              href: "/licenzii",
              description: "Лицензии, реквизиты и политика конфиденциальности.",
            },
            {
              label: "Контакты",
              href: "/kontakty",
              description: "Единый контактный центр и форма обратной связи.",
            },
          ],
        },
      ],
      footerLink: {
        label: "Все акции и новости →",
        href: "/akcii",
      },
    },
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [openMegaId, setOpenMegaId] = useState<string | null>(null)
  const navRef = useRef<HTMLElement | null>(null)

  const handleOpenMega = (id: string) => {
    setOpenMegaId((current) => (current === id ? null : id))
  }

  const handleCloseMega = () => {
    setOpenMegaId(null)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      handleCloseMega()
    }
  }

  useEffect(() => {
    if (!openMegaId) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null
      if (!navRef.current || !target) return
      if (!navRef.current.contains(target)) {
        handleCloseMega()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openMegaId])

  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <nav
      ref={navRef}
      className="relative hidden items-center gap-3 lg:flex"
      aria-label="Основная навигация по сайту"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      {navItems.map((item) => {
        if (item.type === "link") {
          if (!isValidRoute(item.href)) {
            return (
              <span
                key={item.id}
                className="cursor-not-allowed opacity-60 rounded-full px-3 py-2 text-sm font-medium text-neutral-400"
              >
                {item.label}
              </span>
            )
          }
          return (
            <Link
              key={item.id}
              href={item.href}
              className={[
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-700 hover:bg-neutral-100",
              ].join(" ")}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          )
        }

        const isOpen = openMegaId === item.id

        return (
          <div
            key={item.id}
            className="relative"
            onMouseLeave={handleCloseMega}
          >
            <button
              type="button"
              className={[
                "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                isOpen || isActiveFromMega(item.config, pathname || "")
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-700 hover:bg-neutral-100",
              ].join(" ")}
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={() => handleOpenMega(item.id)}
              onMouseEnter={() => handleOpenMega(item.id)}
            >
              <span>{item.label}</span>
              <span
                aria-hidden="true"
                className="text-[10px] leading-none opacity-70"
              >
                ▾
              </span>
            </button>
            <MegaMenu
              config={item.config}
              isOpen={isOpen}
              onClose={handleCloseMega}
            />
          </div>
        )
      })}
    </nav>
  )
}

function isActiveFromMega(config: MegaMenuConfig, pathname: string) {
  for (const section of config.sections) {
    for (const item of section.items) {
      if (!item.href.startsWith("/")) continue
      if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
        return true
      }
    }
  }
  if (config.footerLink?.href && config.footerLink.href.startsWith("/")) {
    const href = config.footerLink.href
    if (pathname === href || pathname.startsWith(`${href}/`)) {
      return true
    }
  }
  return false
}

