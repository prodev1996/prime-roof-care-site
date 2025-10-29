export function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}
export function isPhone(v: string) {
  return /[\d()+\-\s]{7,}/.test(v.trim());
}
