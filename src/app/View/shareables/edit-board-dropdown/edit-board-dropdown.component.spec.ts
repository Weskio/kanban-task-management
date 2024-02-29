import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoardDropdownComponent } from './edit-board-dropdown.component';

describe('EditBoardDropdownComponent', () => {
  let component: EditBoardDropdownComponent;
  let fixture: ComponentFixture<EditBoardDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBoardDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditBoardDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
