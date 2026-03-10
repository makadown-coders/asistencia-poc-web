import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceGeneratorPage } from './attendance-generator-page';

describe('AttendanceGeneratorPage', () => {
  let component: AttendanceGeneratorPage;
  let fixture: ComponentFixture<AttendanceGeneratorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceGeneratorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceGeneratorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
