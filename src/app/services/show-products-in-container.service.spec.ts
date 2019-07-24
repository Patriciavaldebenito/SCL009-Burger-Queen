import { TestBed } from '@angular/core/testing';

import { ShowProductsInContainerService } from './show-products-in-container.service';

describe('ShowProductsInContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowProductsInContainerService = TestBed.get(ShowProductsInContainerService);
    expect(service).toBeTruthy();
  });
});
