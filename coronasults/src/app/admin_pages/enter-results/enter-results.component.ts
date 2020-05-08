import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-results',
  templateUrl: './enter-results.component.html',
  styleUrls: ['./enter-results.component.css']
})
export class EnterResultsComponent implements OnInit {

  public locations: string[] = ["Location 1", "Location 2", "Location 3"];

  constructor() { }

  ngOnInit() {
  }

}
