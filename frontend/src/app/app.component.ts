import { Component } from '@angular/core';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  /*imports: [RouterOutlet],*/
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[EmpleadosComponent]
})
export class AppComponent {
  title = 'frontend';
}
