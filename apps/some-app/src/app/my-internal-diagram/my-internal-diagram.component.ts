import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';

import * as go from 'gojs';

const Make = go.GraphObject.make;

@Component({
  standalone: false,
  selector: 'myworkspace-my-internal-diagram',
  templateUrl: './my-internal-diagram.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./my-internal-diagram.component.css']
})
export class MyInternalDiagramComponent implements OnInit, AfterViewInit {
  // Initialized after Angular resolves the view query in ngAfterViewInit.
  diagram!: go.Diagram;

  @ViewChild('diagramDiv') diagramRef!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    (go as unknown as { licenseKey: string }).licenseKey = 'LicenseKeyGoesHere'; //Not Being Applied
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
