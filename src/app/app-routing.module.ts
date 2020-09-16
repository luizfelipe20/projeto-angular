import { NotfoundComponent } from './erros/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';

const routes: Routes = [
    
    // Exemplo de seguementos de rota
    // { path: 'user/:userName', component: PhotoListComponent },
    
    { path: 'photos', component: PhotoListComponent },
    // { path: 'photo/add', component: PhotoFormComponent },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
