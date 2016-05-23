import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LoginService } from './login.service';

describe('Longin Service', () => {
  beforeEachProviders(() => [LoginService]);

  it('should ...',
      inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
