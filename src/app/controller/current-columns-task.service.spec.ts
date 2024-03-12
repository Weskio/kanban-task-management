import { TestBed } from '@angular/core/testing';

import { CurrentColumnsTaskService } from './current-columns-task.service';

describe('CurrentColumnsTaskService', () => {
  let service: CurrentColumnsTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentColumnsTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
