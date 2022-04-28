import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Movie } from "../movie.model";


@Injectable()
export class DatabaseServices{

  //The interaction with the Realtime Database is done using a HTTPClient instead of the angular utilities for firebase

  dbURL = "https://movielistfirebasedb-default-rtdb.europe-west1.firebasedatabase.app/datos.json";  //URL for CREATE and READ

  dbURLAlternative = "https://movielistfirebasedb-default-rtdb.europe-west1.firebasedatabase.app/datos/"; // URL for UPDATE and DELETE


  //Router to navigate to after creating or modifying and HTTPClient
  constructor(private router: Router, private httpClient: HttpClient){}


  //CREATE (using put to avoid duplicates)
  saveMovies(movies:Movie[], route: string){
    this.httpClient.put(this.dbURL, movies).subscribe({
      next: (v) => this.router.navigate([route]),
      error: (e) => console.log('Error' + e),
    });
  }


  //READ
  getMovies(){
    return this.httpClient.get(this.dbURL);
  }

  //UPDATE
  updateMovie(movie: Movie, route: string){
    let dbURLEndPoint =  this.dbURLAlternative  + movie.id + ".json";// URL of the movie to update
    this.httpClient.put(dbURLEndPoint, movie).subscribe({
      next: (v) => this.router.navigate([route]),
      error: (e) => console.log('Error' + e),
    });
  }

  //DELETE
  deleteMovie(movie: Movie, route: string){

    let movieList;
    let dbURLEndPoint;

    //We get the movies to avoid a bug deleting all if only one remains or one specifically if more than one remains
    this.getMovies().subscribe(movies=>{
      if(movies == null) return;
      movieList=Object.values(movies);

      if(movieList.length == 1) {
        dbURLEndPoint =  this.dbURL; //Forces the deletion of all the movies if one remains (avoids a id bug)
      } else {
        dbURLEndPoint =  this.dbURLAlternative  + movie.id + ".json"; // URL of the movie to delete
      }

      this.httpClient.delete(dbURLEndPoint).subscribe({
        next: (v) => this.router.navigate([route]),
        error: (e) => console.log('Error' + e),
      });

    });
  }
}