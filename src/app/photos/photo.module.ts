import { PhotoComponent } from './photo/photo.component';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent, PhotoFormComponent ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotoModule {}