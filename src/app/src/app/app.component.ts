import { Component } from '@angular/core';
import { CitySearchComponent } from '../../city-search/city-search.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CitySearchComponent,
    FlexLayoutModule  // If you're using Angular Flex Layout
    // Add any other components or modules you're using
  ]
})
export class AppComponent {

}
