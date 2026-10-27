import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GoJsLibModule } from '@myworkspace/go-js-lib';
import type { Diagram } from 'gojs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [GoJsLibModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`should have as title 'some-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toEqual('some-app');
  });

  it('should initialize the library diagram in its canvas container', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const diagramElement = fixture.debugElement.query(By.css('myworkspace-my-component'));
    const diagram: Diagram = diagramElement.componentInstance.diagram;
    const container = diagramElement.nativeElement.querySelector('#diagramDiv');

    expect(container).toBeTruthy();
    expect(diagram.div).toBe(container);
    expect(diagram.model.nodeDataArray).toEqual([
      expect.objectContaining({ id: 'asdf', name: 'asdfasdf' })
    ]);
    expect(container.querySelector('canvas')).toBeTruthy();
  });
});
