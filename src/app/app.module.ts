import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GeneralViewComponent } from './general-view/general-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ModifyFormComponent } from './modify-form/modify-form.component';
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { DatabaseServices } from './services/database.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneralViewComponent,
    DetailViewComponent,
    CreateFormComponent,
    ModifyFormComponent,
    PageNotFoundComponent,
    DeleteMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [DatabaseServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
