import { TestBed } from '@angular/core/testing';

import { CurrentBoardService } from './current-board.service';

describe('CurrentBoardService', () => {
  let service: CurrentBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
