import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiInputBoxComponent } from './multi-input-box.component';

describe('MultiInputBoxComponent', () => {
  let component: MultiInputBoxComponent;
  let fixture: ComponentFixture<MultiInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiInputBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
