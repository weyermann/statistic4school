import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-spider-chart',
  templateUrl: './spider-chart.component.html',
  styleUrls: ['./spider-chart.component.css']
})
export class SpiderChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let RadarChart = {
    //   draw: function (id, d, options) {
    //     let initialData = d;
    //     let cfg = {
    //       radius: 0,
    //       w: 600,
    //       h: 600,
    //       factor: 1,
    //       factorLegend: .85,
    //       levels: 3,
    //       maxValue: 0,
    //       radians: 2 * Math.PI,
    //       opacityArea: 0.5,
    //       ToRight: 5,
    //       TranslateX: 150,
    //       TranslateY: 50,
    //       ExtraWidthX: 100,
    //       ExtraWidthY: 100,
    //       color: d3.scaleOrdinal().range(["#6F257F", "#CA0D59"])
    //     };

    //     if ('undefined' !== typeof options) {
    //       for (let i in options) {
    //         if ('undefined' !== typeof options[i]) {
    //           cfg[i] = options[i];
    //         }
    //       }
    //     }

    //     cfg.maxValue = 100;

    //     let allAxis = (d[0].map(function (i, j) { return i.area; }));
    //     let total = allAxis.length;
    //     let radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);
    //     let Format = d3.format('%');
    //     d3.select(id).select('svg').remove();

    //     let g = d3.select(id)
    //       .append('svg')
    //       .attr('width', cfg.w + cfg.ExtraWidthX)
    //       .attr('height', cfg.h + cfg.ExtraWidthY)
    //       .append('g')
    //       .attr('transform', 'translate(' + cfg.TranslateX + ',' + cfg.TranslateY + ')');

    //     d3.select('svg')
    //       .call(d3.zoom()
    //         .scaleExtent([1, 8])
    //         .on('zoom', zoom));

    //     function zoom() {
    //       g.attr('transform', d3.event.transform);
    //     }

    //     let tooltip;

    //     series = 0;

    //     let axis = g.selectAll(".axis")
    //       .data(allAxis)
    //       .enter()
    //       .append("g")
    //       .attr("class", "axis");

    //     axis.append("line")
    //       .attr("x1", cfg.w / 2)
    //       .attr("y1", cfg.h / 2)
    //       .attr("x2", function (d, i) { return cfg.w / 2 * (1 - cfg.factor * Math.sin(i * cfg.radians / total)); })
    //       .attr("y2", function (d, i) { return cfg.h / 2 * (1 - cfg.factor * Math.cos(i * cfg.radians / total)); })
    //       .attr("class", "line")
    //       .style("stroke", "black")
    //       .style("stroke-width", "2px");


    //     axis.append("text")
    //       .attr("class", "legend")
    //       .text(function (d) { return d })
    //       .style("font-family", "sans-serif")
    //       .style("font-size", "11px")
    //       .attr("text-anchor", "middle")
    //       .attr("dy", "1.5em")
    //       .attr("transform", function (d, i) { return 'translate(0, -10)' })
    //       .attr('x', function (d, i) { return cfg.w / 2 * (1 - cfg.factorLegend * Math.sin(i * cfg.radians / total)) - 60 * Math.sin(i * cfg.radians / total); })
    //       .attr('y', function (d, i) { return cfg.h / 2 * (1 - Math.cos(i * cfg.radians / total)) - 20 * Math.cos(i * cfg.radians / total); });


    //     d.forEach(function (y, x) {
    //       dataValues = [];
    //       g.selectAll('.nodes')
    //         .data(y, function (j, i) {
    //           console.log(j, i);
    //           let value = (j.value - j.minValue) / (j.maxValue - j.minValue) * 100;
    //           dataValues.push([
    //             cfg.w / 2 * (1 - (parseFloat(Math.max(value, 0)) / cfg.maxValue) * cfg.factor * Math.sin(i * cfg.radians / total)),
    //             cfg.h / 2 * (1 - (parseFloat(Math.max(value, 0)) / cfg.maxValue) * cfg.factor * Math.cos(i * cfg.radians / total))
    //           ]);
    //         });
    //       dataValues.push(dataValues[0]);
    //       g.selectAll('.area')
    //         .data([dataValues])
    //         .enter()
    //         .append('polygon')
    //         .attr('class', 'radar-chart-serie' + series)
    //         .style('stroke-width', '2px')
    //         .style('stroke', cfg.color(series))
    //         .attr('points', function (d) {
    //           let str = '';
    //           for (let pti = 0; pti < d.length; pti++) {
    //             str = str + d[pti][0] + ',' + d[pti][1] + ' ';
    //           }
    //           return str;
    //         })
    //         .style('fill', function (j, i) { return cfg.color(series) })
    //         .style('fill-opacity', cfg.opacityArea)
    //         .on('mouseover', function (d) {
    //           z = 'polygon.' + d3.select(this).attr('class');
    //           g.selectAll('polygon')
    //             .transition(200)
    //             .style('fill-opacity', 0.1);
    //           g.selectAll(z)
    //             .transition(200)
    //             .style('fill-opacity', .7);
    //         })
    //         .on('mouseout', function () {
    //           g.selectAll('polygon')
    //             .transition(200)
    //             .style('fill-opacity', cfg.opacityArea);
    //         });
    //       series++;
    //     });
    //     series = 0;

    //     let axis2 = g.selectAll('.axis2')
    //       .data(allAxis)
    //       .enter()
    //       .append('g')
    //       .attr('class', 'axis2');

    //     let tooltip = d3.select('body').append('div').attr('class', 'toolTip');
    //     axis2.append('line')
    //       .attr('x1', cfg.w / 2)
    //       .attr('y1', cfg.h / 2)
    //       .attr('x2', function (d, i) { return cfg.w / 2 * (1 - cfg.factor * Math.sin(i * cfg.radians / total)); })
    //       .attr('y2', function (d, i) { return cfg.h / 2 * (1 - cfg.factor * Math.cos(i * cfg.radians / total)); })
    //       .attr('class', 'line')
    //       .style('stroke', 'transparent')
    //       .style('stroke-width', '10px')
    //       .on('mouseover', function (d) {
    //         let html = '<div>';
    //         for (let i = 0; i < initialData.length; i++) {
    //           let propertyData = initialData[i];
    //           for (let j = 0; j < propertyData.length; j++) {
    //             let grade = propertyData[j];
    //             if (grade.area == d) {
    //               console.log(grade);
    //               html += '<div>' + grade.name + ': ' + grade.value + '</div>';
    //             }
    //           }
    //         }
    //         html += '</div>';
    //         tooltip
    //           .style('left', d3.event.pageX - 40 + 'px')
    //           .style('top', d3.event.pageY - 80 + 'px')
    //           .style('display', 'inline-block')
    //           .html(html);
    //       })
    //       .on('mouseout', function (d) { tooltip.style('display', 'none'); });

    //   }
    // };
  }

}
