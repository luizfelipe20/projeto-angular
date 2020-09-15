import { PhotoComponent } from './photo/photo.component';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotoModule {}