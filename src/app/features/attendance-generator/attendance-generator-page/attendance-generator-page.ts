import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AttendanceApiService } from '../../../core/services/attendance-api.service';
import { AttendancePreview } from '../../../core/models/attendance-preview.model';

@Component({
  selector: 'app-attendance-generator-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance-generator-page.html',
  styleUrl: './attendance-generator-page.css',
})
export class AttendanceGeneratorPage {
  private readonly attendanceApi = inject(AttendanceApiService);

  employeeName = '';
  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;

  readonly loading = signal(false);
  readonly errorMessage = signal('');
  readonly preview = signal<AttendancePreview>(new AttendancePreview());

  generatePreview(): void {
    this.errorMessage.set('');
    this.preview.set(new AttendancePreview());
    this.loading.set(true);

    this.attendanceApi
      .preview({
        employeeName: this.employeeName,
        year: this.year,
        month: this.month,
      })
      .subscribe({
        next: (response) => {
          if (!response || !response.employee) {
            this.errorMessage.set('No se encontró información para el empleado');
            this.loading.set(false);
            return;
          }
          console.log('Respuesta de vista previa:', response);
          this.preview.set(response);
          this.loading.set(false);
        },
        error: (error) => {
          const message =
            error?.error?.message ?? 'No fue posible generar la vista previa';
          this.errorMessage.set(message);
          this.loading.set(false);
        },
      });
  }
}
