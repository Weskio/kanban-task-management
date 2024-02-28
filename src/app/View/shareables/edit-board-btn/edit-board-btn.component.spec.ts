import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoardBtnComponent } from './edit-board-btn.component';

describe('EditBoardBtnComponent', () => {
  let component: EditBoardBtnComponent;
  let fixture: ComponentFixture<EditBoardBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBoardBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBoardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
