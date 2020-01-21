import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import * as go from 'gojs';

const Make = go.GraphObject.make;

@Component({
  selector: 'myworkspace-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit, AfterViewInit {
  diagram: go.Diagram;

  constructor() {}

  @ViewChild('diagramDiv') diagramRef: ElementRef;

  ngOnInit() {
    (go as any).licenseKey = 'LicenseKeyGoesHere'; //Not Being Applied
  }

  ngAfterViewInit() {
    this.initDiagram();
  }

  private initDiagram() {
    if (this.diagram) {
      this.diagram.reset();
      this.diagram.clear();
    }

    if (!this.diagram) {
      this.diagram = Make(go.Diagram, this.diagramRef.nativeElement, {
        initialDocumentSpot: go.Spot.Center,
        initialViewportSpot: go.Spot.Center,
        maxSelectionCount: 1,
        allowCopy: false
      });
    }

    this.diagram.model.nodeDataArray = [{ id: 'asdf', name: 'asdfasdf' }];
  }
}
