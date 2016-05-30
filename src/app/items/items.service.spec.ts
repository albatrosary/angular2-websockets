import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ItemsService } from './items.service';

describe('Items Service', () => {
  beforeEachProviders(() => [ItemsService]);

  it('should ...',
      inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
