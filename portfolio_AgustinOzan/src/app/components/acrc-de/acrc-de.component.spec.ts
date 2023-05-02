import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrcDeComponent } from './acrc-de.component';

describe('AcrcDeComponent', () => {
  let component: AcrcDeComponent;
  let fixture: ComponentFixture<AcrcDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrcDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcrcDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
