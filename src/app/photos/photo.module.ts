import { PhotoComponent } from './photo/photo.component';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent ],
    exports: [ PhotoComponent ]
})
export class PhotoModule {}