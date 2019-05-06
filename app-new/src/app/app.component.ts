import { Component } from '@angular/core';
import { BandsService} from "./bands.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BandsService]
})
export class AppComponent {
  title = 'app-new';
}
