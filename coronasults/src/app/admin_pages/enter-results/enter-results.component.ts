import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-results',
  templateUrl: './enter-results.component.html',
  styleUrls: ['./enter-results.component.css']
})
export class EnterResultsComponent implements OnInit {

  public locations: string[] = ["(Select Location)", "New Location", "Location 1", "Location 2", "Location 3"];
  public location: string = this.locations[0];

  constructor() { }

  ngOnInit() {
  }

  public logValue(): void {
    console.log(this.location);
  }

}
