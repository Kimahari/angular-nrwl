import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GoJsLibModule } from '@myworkspace/go-js-lib';
import { MyInternalDiagramModule } from './my-internal-diagram/my-internal-diagram.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GoJsLibModule, MyInternalDiagramModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
