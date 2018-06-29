import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { PartialObserver } from 'rxjs';
import { DiagramService } from '../../diagram.service';
import { DataPoint } from '../../model/models';
import { QuestionDataService } from '../../question-data.service';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  public diagramSelectionObserver: PartialObserver<any>;

  @Input() topicID = 0;
  @Input() topicQuestion = '';

  public diagramType: number;
  public diagramTypeDesc: string;
  public dataLoaded = true;

  constructor(private _diagram: DiagramService, private _data: QuestionDataService) {
    // Handle changes of diagram selection
    this._diagram.diagramSelectionChanged$.subscribe((value) => {
      switch (value) {
        // case 'bar': this.loadData();
        //   break;

        // case 'pie': this.loadData(2);
        //   break;

        case 'bubble': this.loadData();
          break;

        // case 'map': this.loadData(4);
        //   break;

        //   case 'spider': this.loadData(5);
        //   break;
      }
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.dataLoaded = false;

    const svg = d3.select('svg'),
      width = +svg.attr('width'),
      height = +svg.attr('height');

    const format = d3.format(',d');

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pack = d3.pack()
      .size([width, height])
      .padding(1.5);

    function type(d) {
      d.value = +d.value;
      if (d.value) { return d; }
    }

   // todo versuchen doch ein csv zu lesen, von lokal.

    d3.csv('assets/data/flares.csv', function (d) {
      d.value = +d.value;
      if (d.value) { return d; }
    }, function (error, classes) {
      if (error) { throw error; }

      // const root = d3.hierarchy({ children: classes })
      //   .sum(function (d) { return d.value; })
      //   .each(function (d) {
      //     if (id = d.data.id) {
      //       let id, i = id.lastIndexOf('.');
      //       d.id = id;
      //       d.package = id.slice(0, i);
      //       d.class = id.slice(i + 1);
      //     }
      //   });

      // const node = svg.selectAll('.node')
      //   .data(pack(root).leaves())
      //   .enter().append('g')
      //   .attr('class', 'node')
      //   .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')'; });

      node.append('circle')
        .attr('id', function (d) { return d.id; })
        .attr('r', function (d) { return d.r; })
        .style('fill', function (d: any) { return color(d.package); });

      node.append('clipPath')
        .attr('id', function (d) { return 'clip-' + d.id; })
        .append('use')
        .attr('xlink:href', function (d) { return '#' + d.id; });

      node.append('text')
        .attr('clip-path', function (d) { return 'url(#clip-' + d.id + ')'; })
        .selectAll('tspan')
        .data(function (d: any) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
        .enter().append('tspan')
        .attr('x', 0)
        .attr('y', function (d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
        .text(function (d: any) { return d; });

      node.append('title')
        .text(function (d) { return d.id + '\n' + format(d.value); });
    });

    this.dataLoaded = true;

  }

}
