import { waitForAsync, TestBed } from '@angular/core/testing';
import { GoJsLibModule } from './go-js-lib.module';

describe('GoJsLibModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoJsLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoJsLibModule).toBeDefined();
  });
});
