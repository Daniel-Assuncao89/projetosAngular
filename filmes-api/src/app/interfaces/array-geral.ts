export interface ArrayGeral {
    page: number
    results: [{
    title: String
    backdrop_path: string
    release_date: Date
    overview: String
    popularity: Number
    adult: boolean
    }]
    total_pages:number
}
