import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  @Input() items = [];
  constructor() {}
  ngOnInit(): void {
    // ngOnInit hem constructordan sonra ishe dushen methoddur
    // hemde parent componentden child componente data gonderdikde burda el chatanligi olur
    console.log(this.items);
  }
}
