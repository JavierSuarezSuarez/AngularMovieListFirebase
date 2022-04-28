import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { GeneralViewComponent } from './general-view/general-view.component';
import { HomeComponent } from './home/home.component';
import { ModifyFormComponent } from './modify-form/modify-form.component';
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'general', component: GeneralViewComponent},
  { path: 'create', component: CreateFormComponent},
  { path: 'modify/:id', component: ModifyFormComponent},
  { path: 'deleteMessage', component: DeleteMessageComponent},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
