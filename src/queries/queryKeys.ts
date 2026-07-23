export const reviewKeys = {
  all: ['reviews'] as const,

  admin: ['admin-reviews'] as const,

  detail: (id: string) => ['review', id] as const,
}
