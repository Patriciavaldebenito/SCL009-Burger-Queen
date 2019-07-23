import { TestBed } from '@angular/core/testing';

import { MenuGeneralServiceService } from './menu-general-service.service';

describe('MenuGeneralServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuGeneralServiceService = TestBed.get(MenuGeneralServiceService);
    expect(service).toBeTruthy();
  });
});
