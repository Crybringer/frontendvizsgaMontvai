import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlushieComponent } from './new-plushie.component';

describe('NewPlushieComponent', () => {
  let component: NewPlushieComponent;
  let fixture: ComponentFixture<NewPlushieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlushieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPlushieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
