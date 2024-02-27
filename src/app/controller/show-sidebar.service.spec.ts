import { TestBed } from '@angular/core/testing';

import { ShowSidebarService } from './show-sidebar.service';

describe('ShowSidebarService', () => {
  let service: ShowSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
