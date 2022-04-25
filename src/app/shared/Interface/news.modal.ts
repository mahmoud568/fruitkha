export interface News {
    id: number;
    title: string;
    createdBy: string;
    img: string;
    date: Date;
    text: string;
    dateCount?: string | 0;
}

export interface Comment {
    id: number;
    createdBy: string;
    img: string;
    date: Date;
    text: string;
    reply: Reply[];
    dateCount?: string | 0;
}

export interface Reply {
    id: number;
    createdBy: string;
    img: string;
    date: Date;
    text: string;
    dateCount?: string | 0;
}