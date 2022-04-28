import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';
import { DatabaseServices } from '../services/database.service';


@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  @Input() id = -1; //Id of the movie to show
  @Output() flag = new EventEmitter<string>(); //Flag to order GeneralViewComponent to close this component

  movie: Movie = {id: -1, title : "", genre: "", year: ""}; //Dummy instantation
  movieList: Movie [] = [];

  //Requires an ActivatedRoute to get the id from the movie selected and the service to get the movie attributes from the database
  constructor(private actRoute: ActivatedRoute, private _databaseService: DatabaseServices) { }

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

      for(var i = 0; i < this.movieList.length; i++) {
        if(this.movieList[i].id == this.id) {
          this.movie = this.movieList[i];
        }
      }
    });
  }
  

  //Orders GeneralViewComponent to close this component
  emitClose() {
    this.flag.emit("true");
  }
}