import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../../_service/results.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public results = [];

  constructor(private _resultsService: ResultsService) { }

  ngOnInit() {
    // this._resultsService.getResults()
    //   .subscribe(data => this.results = data);
  }

  public logResults(): void {
    console.log(this.results);
  }
  

}
