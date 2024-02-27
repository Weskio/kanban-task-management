import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSidebarComponent } from './show-sidebar.component';

describe('ShowSidebarComponent', () => {
  let component: ShowSidebarComponent;
  let fixture: ComponentFixture<ShowSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
