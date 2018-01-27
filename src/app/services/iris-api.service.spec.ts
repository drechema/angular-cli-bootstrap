import { TestBed, inject } from '@angular/core/testing';

import { IrisApiService } from './iris-api.service';

describe('IrisApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IrisApiService]
    });
  });

  it('should be created', inject([IrisApiService], (service: IrisApiService) => {
    expect(service).toBeTruthy();
  }));
});
