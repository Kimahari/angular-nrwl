import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  imports: [CommonModule],
  exports: [MyComponentComponent],
  declarations: [MyComponentComponent]
})
export class GoJsLibModule {}
