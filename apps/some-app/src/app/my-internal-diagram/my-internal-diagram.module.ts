import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInternalDiagramComponent } from './my-internal-diagram.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MyInternalDiagramComponent],
  exports: [MyInternalDiagramComponent]
})
export class MyInternalDiagramModule {}
