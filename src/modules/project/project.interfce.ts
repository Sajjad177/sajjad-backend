

export interface IProject {
    title: string;
    description: string;
    image: string;
    link: string;
    year: number;
    category: string;
    role: string;
    stack:{
        frontend: string[];
        backend: string[];
        database: string[];
    }
    challenge: string;
    solution: string;
    impact: string[];
    features: string[];
}
