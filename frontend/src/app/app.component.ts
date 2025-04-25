import { Component } from '@angular/core';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmpleadosComponent],
  template: '<app-empleados></app-empleados>'
})
export class AppComponent {
  title = 'frontend';
}
