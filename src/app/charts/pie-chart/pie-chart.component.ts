import { Component, OnInit, Input } from '@angular/core';
import { PartialObserver } from 'rxjs';
import { DiagramService } from '../../diagram.service';
import { QuestionDataService } from '../../question-data.service';
import * as d3 from 'd3';
import { DataPoint } from '../../model/models';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

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

        case 'pie': this.loadDataJS();
          break;

        // case 'bubble': this.loadData(3);
        //   break;

        // case 'map': this.loadData(4);
        //   break;

        //   case 'spider': this.loadData(5);
        //   break;
      }
    });
  }

  ngOnInit() {
    this.loadDataJS();
  }

  loadDataJS() {
    const width = 540;
    const height = 540;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select('#chart-area')
        .append('svg')
            .attr('width', width)
            .attr('height', height)
        .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(['#66c2a5', '#fc8d62', '#8da0cb',
      '#e78ac3', '#a6d854', '#ffd92f']);

    const pie = d3.pie()
        .value(function(d: any) { return d.count; })
        .sort(null);

    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    function type(d) {
        d.apples = Number(d.apples);
        d.oranges = Number(d.oranges);
        return d;
    }

    function arcTween(a) {
        const i = d3.interpolate(this._current, a);
        this._current = i(1);
        return (t) => arc(i(t));
    }

    d3.json('assets/data/fruits.json', type).then(data => {
        d3.selectAll('input')
            .on('change', update);

        function update(val = this.value) {
            // Join new data
            const path = svg.selectAll('path')
                .data(pie(data[val]));

            // Update existing arcs
            path.transition().duration(200).attrTween('d', arcTween);

            // Enter new arcs
            path.enter().append('path')
                .attr('fill', (d, i) => color(i.toString()))
                .attr('d', <any>arc)
                .attr('stroke', 'white')
                .attr('stroke-width', '6px')
                .each(function(d) { this._current = d; });
        }

        update('apples');
    });
  }

  loadData() {

    // this.dataLoaded = false;

    // const width = 960;
    // const height = 500;
    // const radius = Math.min(width, height) / 2;

    // const svg = d3.select('#chart-area')
    //   .append('svg')
    //   .attr('width', width)
    //   .attr('height', height)
    //   .append('g')
    //   .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // const color = d3.scaleOrdinal(['#66c2a5', '#fc8d62', '#8da0cb',
    //   '#e78ac3', '#a6d854', '#ffd92f']);


    // const pie = d3.pie()
    //   .value(function(d: any) { return d.val; })
    //   .sort(null);

    // const arc = d3.arc()
    //   .innerRadius(0)
    //   .outerRadius(radius);

    // function type(d) {
    //   d.apples = Number(d.apples);
    //   d.oranges = Number(d.oranges);
    //   return d;
    // }

    // function arcTween(a) {
    //   const i = d3.interpolate(this._current, a);
    //   this._current = i(1);
    //   return (t) => arc(i(t));
    // }

    // this._data.getPopulationZurichPerYear().subscribe((data: any) => {

    //   const path = svg.selectAll('path')
    //     .data(pie(data));

    //   // Update existing arcs
    //   path.transition().duration(200).attrTween('d', arcTween);

    //   // Enter new arcs
    //   path.enter().append('path')
    //     .attr('fill', (d, i) => color(i.toString()))
    //     .attr('d', arc)
    //     .attr('stroke', 'white')
    //     .attr('stroke-width', '6px');
    //     // .each(function (d) { this._current = d; });


    //   this.dataLoaded = true;
    // });
  }

}
