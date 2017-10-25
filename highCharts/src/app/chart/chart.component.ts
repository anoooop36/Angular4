import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  template: `
  <button (click)="add()">Add Point!</button>
  <div [chart]="chart"></div>
  <div [chart]="chart1"></div>
  <div [chart]="chart3"></div>
`
})
export class ChartComponent {

  constructor() { }


  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [[0, 5],
      [1, 10],
      [2, 3]]
    },
    {
      type: 'scatter',
      name: "Scat",
      data: [2,3]
    }],
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          symbol: 'square'
        }
      }
    }
  });

  chart1 = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Piechart'
    },
    credits: {
      enabled: false
    },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  plotOptions: {
      series: {
          allowPointSelect: true
      }
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          }]
  });



  chart3 = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'BarChart'
    },
    credits: {
      enabled: false
    },
    series: [
    {
      
      name: "2008-13",
      data: [2,3,5,1,9]
    }],
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          symbol: 'square'
        }
      }
    }
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
