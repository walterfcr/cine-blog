export function getImageUrl(path: string | null) {
  if (!path) {
    return '/placeholder.jpg'
  }

  return `https://image.tmdb.org/t/p/w780${path}`
}
