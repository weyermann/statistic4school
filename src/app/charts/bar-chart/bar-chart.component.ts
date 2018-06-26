import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { PartialObserver } from 'rxjs';
import { DiagramService } from '../../diagram.service';
import { DataPoint } from '../../model/models';
import { QuestionDataService } from '../../question-data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

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
        case 'bar': this.loadData();
          break;

        // case 'pie': this.loadData(2);
        //   break;

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
    this.loadData();
  }

  loadData() {

    this.dataLoaded = false;

    this._data.getPopulationZurich2017PerQuarter().subscribe((data: DataPoint[]) => {
      const svg = d3.select('svg'),
      margin = { top: 40, right: 50, bottom: 40, left: 50 },
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom;

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.4),
      y = d3.scaleLinear().rangeRound([height, 0]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    x.domain(data.map(function (d) { return d.cat; }));

    const minVal = d3.min(data, function (d) { return d.val; });
    const maxVal = d3.max(data, function (d) { return d.val; });

    // apply extra margin of 30% for lower value
    // minVal = minVal - 0.3 * (maxVal - minVal);

    y.domain([minVal, maxVal]);


    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10))
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
      .attr('x', function (d) { return x(d.cat); })
      .attr('y', function (d) { return y(d.val); })
      .attr('width', x.bandwidth())
      .attr('height', function (d) { return height - y(d.val); });

      this.dataLoaded = true;
    });


  }
}
