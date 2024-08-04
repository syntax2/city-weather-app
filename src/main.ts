import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CitySearchComponent } from './app/city-search/city-search.component';
import 'zone.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/src/app/app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CitySearchComponent],
  template: `
  
    <app-city-search></app-city-search>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule)
  ]
});
