export type Locale = "ko" | "en";

export function getLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

export function withoutLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname || "/";
}

export function localizedPath(pathname: string, locale: Locale): string {
  const normalizedPath = withoutLocale(pathname);
  return locale === "en" ? (normalizedPath === "/" ? "/en" : `/en${normalizedPath}`) : normalizedPath;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  return localizedPath(pathname, targetLocale);
}
