import { NgModule } from '@angular/core';
import { MyAngularLibraryComponent } from './my-angular-library.component';
import { MyAngularComponentComponent } from './my-angular-component/my-angular-component.component';



@NgModule({
  declarations: [
    MyAngularLibraryComponent,
    MyAngularComponentComponent
  ],
  imports: [
  ],
  exports: [
    MyAngularLibraryComponent
  ]
})
export class MyAngularLibraryModule { }
