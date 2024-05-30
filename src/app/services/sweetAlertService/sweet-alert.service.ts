import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
  mostrarError$ = new Subject<string>();
  mostrarCorrectamente$ = new Subject<void>();

  mostrarError(msg: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: msg,
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        popup: 'error',
        confirmButton: 'confirm-error',
        icon: 'icon-error',
        title: 'title-error',
      }
    });
    this.mostrarError$.next(msg);
  }

  mostrarCorrectamente(msg: string) {
    Swal.fire({
      icon: 'success',
      text: msg,
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    this.mostrarCorrectamente$.next();
  }
}
