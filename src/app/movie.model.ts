export class Movie {
    id! : number;
    title! : string;
    genre! : string;
    year! : string;

    constructor(id : number, title : string, genre : string, year : string) {
        this.id = id,
        this.title = title,
        this.genre = genre,
        this.year = year;
    }
}