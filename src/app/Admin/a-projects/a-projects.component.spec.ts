import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProjectsComponent } from './a-projects.component';

describe('AProjectsComponent', () => {
  let component: AProjectsComponent;
  let fixture: ComponentFixture<AProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
