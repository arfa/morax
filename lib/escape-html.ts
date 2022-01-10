export default function escapeHtml(str: string): string {
  return str.replace(/<[^>]*>?/gm, '')
}
