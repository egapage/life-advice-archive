export interface IEpisode {
    unix: number,
    content: string,
    'content:encoded': string,
    'content:encodedSnippet': string,
    contentSnippet: string,
    cutTime: number,
    episodeNumber: number,
    guid: string,
    isoDate: string,
    laDescription: string,
    laDuration: number,
    pubDate: string,
    s3: string,
    title: string,
    tags: ITag[],
    enclosure: IEnclosure
}

export interface IEnclosure {
    length: string,
    type: string,
    url: string
}

export interface ITag {
    label: string,
    value: string
}