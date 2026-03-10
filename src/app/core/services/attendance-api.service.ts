import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AttendancePreview } from '../models/attendance-preview.model';
import { GenerateAttendancePreviewRequest } from '../models/generate-attendance-preview-request.model';

@Injectable({
  providedIn: 'root',
})
export class AttendanceApiService {
  private readonly http = inject(HttpClient);

  private readonly baseUrl = 'http://localhost:3000/api/attendance';

  preview(
    payload: GenerateAttendancePreviewRequest
  ): Observable<AttendancePreview> {
    return this.http.post<AttendancePreview>(`${this.baseUrl}/preview`, payload);
  }
}
