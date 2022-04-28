import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { DatabaseServices } from '../services/database.service';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  movie: Movie = {id: -1, title : "", genre: "", year: ""}; //Dummy instantation
  movieList: Movie [] = [];

  //Requires Services to get the movieList and add a movie to the database
  constructor( private _databaseService: DatabaseServices) { }

  //############################################################## Methods ########################################################################//
  ngOnInit(): void {
    
    let aux;
    let j = 0;
    //Get the movies from database avoiding the possible nulls and refreshing the table
    this._databaseService.getMovies().subscribe(movies=>{
      if(movies == null) return;
      aux=Object.values(movies);

      if(aux.length == 1) {

        this.movieList = aux;
        
      } else {

        for(var i = 0; i < aux.length; i++) {
          if(aux[i] != null) {
            this.movieList[j]= aux[i];
            this.movieList[j].id = i;
            j++;
          }
        }

      }
    });
  }


  //ADD a Movie: Calculates the new Movie id and saves it in the database along with the new movieList
  addMovie() {
    var idvec = -1;

    if(this.movieList != null) {
      for(var i = 0; i < this.movieList.length; i++) {
        if(this.movieList[i] == null) {
          continue;
        }else if(this.movieList[i].id > idvec) {
            idvec = this.movieList[i].id;
        }
      }
    }
    idvec++;
    this.movie.id = idvec;
    let newMovie = new Movie(this.movie.id, this.movie.title, this.movie.genre, this.movie.year);
    this.movieList.push(newMovie);
    this._databaseService.saveMovies(this.movieList, '/general');
  }

}
