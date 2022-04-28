import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatabaseServices } from '../services/database.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.css']
})
export class ModifyFormComponent implements OnInit {

  public id!: number;
  movie!: Movie; 
  movieList: Movie [] = [];

  //Requires an ActivatedRoute to get the id from the movie to modify and the service to operate with the database
  constructor(private actRoute: ActivatedRoute, private router: Router, private _databaseService: DatabaseServices) { }


  //############################################################## Methods ########################################################################//
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id']; //Gets the id from route
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

      for(var i = 0; i < this.movieList.length; i++) {
        if(this.movieList[i].id == this.id) {
          this.movie = this.movieList[i];
        }
      }
    });
  }

  //MODIFY a movie: Calls the database service method passing the movie and the route to navigate to after the modification 
  modifyMovie() {
    this._databaseService.updateMovie(this.movie, '/general');
  }

}