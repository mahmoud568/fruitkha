export interface News {
    id: number;
    title: string;
    createdBy: string;
    img: string;
    date: Date;
    text: string;
}

export interface Comment {
    newsID: number;
    img: string;
    date: string;
    text: string;
    replay: Replay[]
}

export interface Replay {
    createdBy: string;
    img: string;
    date: string;
    text: string;
}