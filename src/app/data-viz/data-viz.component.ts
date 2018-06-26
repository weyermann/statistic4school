import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterViewChecked } from '@angular/core';
import * as d3 from 'd3';
import { PartialObserver } from 'rxjs';
import { DiagramService } from '../diagram.service';
import { EDiagramTypes } from '../model/models';

@Component({
  selector: 'app-data-viz',
  templateUrl: './data-viz.component.html',
  styleUrls: ['./data-viz.component.css']
})
export class DataVizComponent implements OnInit {

  public diagramSelectionObserver: PartialObserver<any>;

  @Input() topicID = 0;
  @Input() topicQuestion = '';

  public diagramType: number;
  public diagramTypeDesc: string;
  public dataLoaded = true;

  constructor(private _diagram: DiagramService) {
    // Handle changes of diagram selection
    this._diagram.diagramSelectionChanged$.subscribe((value) => {
      switch (value) {
        case 'bar': this.loadData(1);
          break;

        case 'pie': this.loadData(2);
          break;

        case 'bubble': this.loadData(3);
          break;

        case 'map': this.loadData(4);
          break;

          case 'spider': this.loadData(5);
          break;
      }
    });
  }

  ngOnInit() {
    this.loadData(this.diagramType);
  }

  loadData(diagramType: number) {

    this.dataLoaded = false;

    this.diagramType = diagramType;
    this.diagramTypeDesc = EDiagramTypes[diagramType];

    const data = [
      { letter: 'A', frequency: .08167 },
      { letter: 'B', frequency: .01492 },
      { letter: 'C', frequency: .02782 },
      { letter: 'D', frequency: .04253 },
      { letter: 'E', frequency: .12702 },
      { letter: 'F', frequency: .02288 },
      { letter: 'G', frequency: .02015 },
      { letter: 'H', frequency: .06094 }
    ];


    // A	.08167
    // B	.01492
    // C	.02782
    // D	.04253
    // E	.12702
    // F	.02288
    // G	.02015
    // H	.06094
    // I	.06966
    // J	.00153
    // K	.00772
    // L	.04025
    // M	.02406
    // N	.06749
    // O	.07507
    // P	.01929
    // Q	.00095
    // R	.05987
    // S	.06327
    // T	.09056
    // U	.02758
    // V	.00978
    // W	.02360
    // X	.00150
    // Y	.01974
    // Z	.00074


    const svg = d3.select('svg'),
      margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom;

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().rangeRound([height, 0]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    x.domain(data.map(function (d) { return d.letter; }));
    y.domain([0, d3.max(data, function (d) { return d.frequency; })]);

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', function (d) { return x(d.letter); })
      .attr('y', function (d) { return y(d.frequency); })
      .attr('width', x.bandwidth())
      .attr('height', function (d) { return height - y(d.frequency); });

      this.dataLoaded = true;
  }

}
