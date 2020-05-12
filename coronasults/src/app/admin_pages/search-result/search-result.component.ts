import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/_service/results.service';
import { ModifyResultService } from 'src/app/_service/modify-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public modify: boolean = false;
  public locations: string[] = ["(Select Location)", "New Location", "Location 1", "Location 2", "Location 3"];

  private _id;
  public firstName: string;
  public lastName: string;
  public birthdate: string;
  public locationTested: string;
  public currentResult: number;

  constructor(private resultsService: ResultsService,
              private modifyResultService: ModifyResultService) { }

  ngOnInit() {
  }

  public findUser() {
    this.resultsService.getResults({
      firstName: this.firstName,
      lastName: this.lastName,
      birthdate: this.birthdate
    }).subscribe(result => {
      this.firstName = result.firstName
      this.lastName = result.lastName
      this.birthdate = result.birthday.split("T")[0]
      this.locationTested = result.locationTested
      this.currentResult = result.currentResult
      this._id = result._id
      this.modify = true;
      console.log('Location Tested', result.locationTested);
    }, (error) => console.log('error'))
  }

  public modifyUser() {
    this.modifyResultService.modifyResult({
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: this.birthdate,
      locationTested: this.locationTested,
      currentResult: this.currentResult,
      _id: this._id
    })
  }

  

}
