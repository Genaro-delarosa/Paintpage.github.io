import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipDesingesComponent } from './tip-desinges.component';

describe('TipDesingesComponent', () => {
  let component: TipDesingesComponent;
  let fixture: ComponentFixture<TipDesingesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipDesingesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipDesingesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
