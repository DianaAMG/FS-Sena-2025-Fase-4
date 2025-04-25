

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';

declare var M: any;

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService],
})
export class EmpleadosComponent implements OnInit {
  constructor(public empleadoService: EmpleadoService) {}

  ngOnInit(): void {}

  agregarEmpleado(form?: NgForm) {
    console.log(form?.value);
    this.empleadoService
      .PostEmpleado(form?.value)
      .subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Guardado satisfactoriamente' });
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}
