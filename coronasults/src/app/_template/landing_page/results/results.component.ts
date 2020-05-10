import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../../_service/results.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public result;

  constructor(private _resultsService: ResultsService) { }

  ngOnInit() {
	 this._resultsService.getResults()
		.subscribe(data => this.results = data[0].currentResult);
  }

  private determineResult(result: number): string {
	 switch (result) {
		 case 0:
			return 'Positive';
		 case 1:
			 return 'Negative';
		 case 2:
			 return 'Pending';
	 }
  }

  public logResults(): void {
	 console.log(this.result);
  }
  

}
