import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  title = 'rating-app';
  public rating1!: number;
  public rating2!: number;

  ngOnInit(): void {
  }

  submitForm(f: NgForm) {
    f.resetForm();
    console.log("Rating 1: " + this.rating1);
    console.log("Rating 1: " + this.rating2);
    this.rating1 = 0;
    this.rating2 = 0;
  }
}
