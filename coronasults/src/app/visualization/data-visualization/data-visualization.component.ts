import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../canvasjs.min';
import { ResultCountsService } from 'src/app/_service/result-counts.service';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.css']
})
export class DataVisualizationComponent implements OnInit {

  private undetermined;
  private positive;
  private negative;

  constructor(private resultCountsService: ResultCountsService) {}

  ngOnInit() {
        
    this.resultCountsService.getUndetermined()
      .subscribe(result => {
        this.undetermined = result;
        //Next call
        this.resultCountsService.getPositive()
          .subscribe((result) => {
            this.positive = result;
            //Next call
            this.resultCountsService.getNegative()
            .subscribe((result) => {
              this.negative = result;
              //Chart Code
              console.log(this.undetermined);
              console.log(this.positive);
              console.log(this.negative);

              let chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                  text: "Basic Column Chart in Angular"
                },
                data: [{
                  type: "column",
                  dataPoints: [
                    { y: this.undetermined, label: "Unconfirmed" },
                    { y: this.positive, label: "Positive" },
                    { y: this.negative, label: "Negative" }
                  ]
                }]
              });
                
              chart.render();
            });
          });
      });
    
    

    
  }



}
