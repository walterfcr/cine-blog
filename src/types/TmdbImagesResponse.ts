export interface TmdbImage {
  file_path: string
}

export interface TmdbImagesResponse {
  backdrops: TmdbImage[]
  posters: TmdbImage[]
}
