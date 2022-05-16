import { Component, OnInit } from '@angular/core';
import {DropdownService} from "../../services/dropdown.service";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  mySelect = '1';
  selectedValue: any;

  data = [
    {
      id: 1,
      name: 'Movies',
    },
    {
      id: 2,
      name: 'Actors',
    },
    {
      id: 3,
      name: 'Producers',
    },
  ];

  constructor(
    private commonService: DropdownService
  ) { }

  ngOnInit() {
  }

  selectChange() {
    this.selectedValue = this.commonService.getDropDownText(this.mySelect, this.data)[0].name;
  }
}
