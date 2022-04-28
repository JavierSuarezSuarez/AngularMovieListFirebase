import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Movie } from '../movie.model';
import { Router } from '@angular/router';
import { DatabaseServices } from '../services/database.service';

@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.css']
})
export class GeneralViewComponent implements OnInit {

  //-------------------------------------------------------------- Section texts ---------------------------------------------//

  //Texts to help the user
  addbtnText = "Para añadir una película, haz click en el siguiente botón ";
  tableText = "En la siguiente tabla puedes observar, modificar y eliminar las películas añadidas";

  //-------------------------------------------------------------- Table config ----------------------------------------------//
  @ViewChild(MatTable) table!: MatTable<Element>; //This makes the table to look for modifications and enables the renderRows() method
  columnasTabla: string[] = ['id','title', 'genre', 'year', 'ver','editar', 'eliminar'];//Table columns

  //-------------------------------------------------------------- Movie parameters ----------------------------------------//
  movie!: Movie; //With the ! we omit the initialization errors
  idToSee = -1; //Id of the component that will be shown in DetailViewComponent

  movieList : Movie[] = []; 

  //Requires the Router and database service
  constructor(private router: Router, private _databaseService: DatabaseServices) { }


//############################################################## Methods ########################################################################//

  ngOnInit(): void {
    
    let aux;
    let j = 0;
    //Get the movies from database avoiding the possible nulls and refreshing the table
    this.loadMovies().subscribe(movies=>{
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
      this.table.renderRows();
    });
    
  }

  //READ
  loadMovies() {
    return this._databaseService.getMovies();
  }


  //READ in detail
  //Redirects the user to see in detail a movie passing the id to DetailViewComponent
  redirectToSee(idrecogida: number){
    this.idToSee = idrecogida;
  }

  //Closes DetailViewComponent
  closeDetails(flag: string) {
    if(flag == "true") {
      this.idToSee = -1;
    }
  }

  //CREATE
  //Redirects the user to the CreateFormComponent
  redirectToCreate(){
    this.router.navigate(['/create']);
  }


  //UPDATE
  //Redirects the user to the ModifyFormComponent passing the movie id and indicating where to navigate to after modification
  redirectToUpdate(idrecogida: number){
    this.router.navigate(['/modify', idrecogida]);
  }
  
  //DELETE
  //Deletes the movie passing the movie and indicating where to navigate to after deletion
  redirectToDelete(idrecogida: number) {

    for(var i = 0; i < this.movieList.length; i++) {
      if(this.movieList[i].id == idrecogida) {
        this.movie = this.movieList[i];
      }
    }

    this._databaseService.deleteMovie(this.movie, '/deleteMessage');
  }
    
}