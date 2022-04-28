import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css']
})
export class DeleteMessageComponent implements OnInit {

  deleteText="¡Operación de borrado satisfactoria!";

  constructor() { }

  ngOnInit(): void {
  }

}
