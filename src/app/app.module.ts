import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorDirective } from './color.directive';
import { CheckNumDirective } from './check-num.directive';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,ColorDirective,CheckNumDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
}