import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPaintsComponent } from './best-paints.component';

describe('BestPaintsComponent', () => {
  let component: BestPaintsComponent;
  let fixture: ComponentFixture<BestPaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestPaintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestPaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
