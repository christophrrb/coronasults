import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../../_service/results.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

	public result;
	public firstName;
	public lastName;
	public date;

  constructor(private _resultsService: ResultsService) { }

  ngOnInit() {
	 
  }

  private determineResult(result: number): string {
	 switch (result) {
		 case 0:
			return 'Undetermined';
		 case 1:
			 return 'Positive';
		 case 2:
			 return 'Negative';
	 }
  }

  public logResults(): void {
	 console.log(this.result);
  }

  public getResults() {
	this._resultsService.getResults({"firstName": this.firstName, "lastName": this.lastName, "birthdate": this.date})
	.subscribe(data => this.result = this.determineResult(data.currentResult));
  }
  

}
