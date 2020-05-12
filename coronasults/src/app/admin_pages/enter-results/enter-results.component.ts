import { Component, OnInit } from '@angular/core';
import { EnterResultService } from 'src/app/_service/enter-result.service';

@Component({
  selector: 'app-enter-results',
  templateUrl: './enter-results.component.html',
  styleUrls: ['./enter-results.component.css']
})
export class EnterResultsComponent implements OnInit {

  public locations: string[] = ["(Select Location)", "New Location", "Location 1", "Location 2", "Location 3"];
  
  public firstName: string;
  public lastName: string;
  public birthdate: string;
  public location: string = this.locations[0];
  public currentResult: number = 0;

  constructor(private enterResultService:EnterResultService) { }

  ngOnInit() {
  }

  public enterResult() {
    this.enterResultService.enterResult({
      "firstName": this.firstName,
      "lastName": this.lastName,
      "birthdate": this.birthdate,
      "locationTested": this.location,
      "currentResult": this.currentResult
    });
  }



}
