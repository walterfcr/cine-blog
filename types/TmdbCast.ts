export interface TmdbCast {
  id: number
  name: string
  character: string
  profile_path: string | null
}

export interface TmdbCrew {
  id: number
  name: string
  job: string
  department: string
  profile_path: string | null
}

export interface TmdbCredits {
  cast: TmdbCast[]
  crew: TmdbCrew[]
}
