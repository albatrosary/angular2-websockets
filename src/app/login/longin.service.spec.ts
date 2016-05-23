import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LonginService } from './longin.service';

describe('Longin Service', () => {
  beforeEachProviders(() => [LonginService]);

  it('should ...',
      inject([LonginService], (service: LonginService) => {
    expect(service).toBeTruthy();
  }));
});
