import { TestBed } from '@angular/core/testing';

import { InformationOrderService } from './information-order.service';

describe('InformationOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationOrderService = TestBed.get(InformationOrderService);
    expect(service).toBeTruthy();
  });
});
