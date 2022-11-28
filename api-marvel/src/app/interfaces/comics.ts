export interface Comics {
    code: number
    data: {
        results: [{
            id: number
            title: string
            pageCount: number
            description: string
        }]
    }
}

export interface Characters {
    code: number
    data: {
        results: [{
            id: number
            name: string
            comics: {
                available: number
            }
            description: string
        }]
    }
}
