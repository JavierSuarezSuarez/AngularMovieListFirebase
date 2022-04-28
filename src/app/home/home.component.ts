import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeText="¡Bienvenido a la app de lista de películas! Ahora, haciendo uso de Firebase";
  homeExplainText = "Haz uso de la navegación para interactuar con la app";

  constructor() { }

  ngOnInit(): void {
  }

}
