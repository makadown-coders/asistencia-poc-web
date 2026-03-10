import { Employee } from './employee.model';
import { AttendanceDay } from './attendance-day.model';

export class AttendancePreview {
  days: AttendanceDay[] = [];
  employee: Employee = new Employee();
  month: number = 0;
  monthLabel: string = '';
  year: number = 0;
}
