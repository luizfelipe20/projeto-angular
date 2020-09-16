import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [ 
        SignupComponent,
        SigninComponent 
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class HomeModule { }