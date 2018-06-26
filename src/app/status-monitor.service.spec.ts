import { TestBed, inject } from '@angular/core/testing';

import { StatusMonitorService } from './status-monitor.service';

describe('StatusMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusMonitorService]
    });
  });

  it('should be created', inject([StatusMonitorService], (service: StatusMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
