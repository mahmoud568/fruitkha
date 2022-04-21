export interface News {
    id: number;
    title: string;
    createdBy: string;
    img: string;
    date: Date;
    text: string;
}

export interface Comment {
    id: number;
    createdBy: string;
    img: string;
    date: Date;
    text: string;
    reply: Reply[]
}

export interface Reply {
    id: number;
    createdBy: string;
    img: string;
    date: Date;
    text: string;
}