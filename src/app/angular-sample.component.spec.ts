import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularSampleAppComponent } from '../app/angular-sample.component';

beforeEachProviders(() => [AngularSampleAppComponent]);

describe('App: AngularSample', () => {
  it('should create the app',
      inject([AngularSampleAppComponent], (app: AngularSampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-sample works!\'',
      inject([AngularSampleAppComponent], (app: AngularSampleAppComponent) => {
    expect(app.title).toEqual('angular-sample works!');
  }));
});
