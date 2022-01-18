export interface ICast {
    unix: Number,
    content: String,
    'content:encoded': String,
    'content:encodedSnippet': String,
    contentSnippet: String,
    cutTime: number,
    episodeNumber: number,
    guid: String,
    isoDate: String,
    laDescription: String,
    laDuration: number,
    pubDate: String,
    s3: String,
    title: String,
    tags: any[],
    enclosure: IEnclosure
}

export interface IEnclosure {
    length: String,
    type: String,
    url: String
}