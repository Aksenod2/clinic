export const VALID_ROUTES: ReadonlySet<string> = new Set([
  "/",
  "/napravleniya",
  "/napravleniya/beremennost",
  "/uslugi",
  "/uslugi/vedenie-beremennosti",
  "/vrachi",
  "/vrachi/akusher-ginekolog-1",
  "/vrachi/akusher-ginekolog-2",
  "/kliniki",
  "/kliniki/butovo",
  "/kliniki/arbatskaya",
  "/kliniki/balashiha",
  "/akcii",
  "/akcii/vedenie-beremennosti-so-skidkoy",
  "/akcii/uzi-beremennosti-po-spetcenam",
  "/stati",
  "/stati/chek-list-pered-beremennostyu",
  "/chto-my-lechim",
  "/chto-my-lechim/planirovanie-beremennosti",
  "/chto-my-lechim/pervyy-trimestr",
  "/chto-my-lechim/zamershaya-beremennost-nerazvivayushchayasya-beremennost",
  "/zapis",
  "/online",
  "/oms",
  "/strahovka",
  "/vozvrat-naloga",
  "/vakansii",
])

export function isValidRoute(href: string | undefined | null): boolean {
  if (!href) return false
  if (!href.startsWith("/")) return true
  const path = href.split(/[?#]/)[0]
  return VALID_ROUTES.has(path)
}
