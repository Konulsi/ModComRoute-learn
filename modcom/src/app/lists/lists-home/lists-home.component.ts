import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css'],
})
export class ListsHomeComponent {
  numbers: any = [
    { value: 50, label: 'Mushteri' },
    { value: 3500, label: 'Ciro' },
    { value: 65, label: 'Yorumlar' },
  ];

  images: any = [
    {
      image: 'assets/images/dresser.jpeg',
      title: 'Shifonyer',
      description: 'Her turlu eshyanizi koyabilirsiniz',
    },
    {
      image: 'assets/images/couch.jpeg',
      title: 'Kanepe',
      description: 'Oturmasi muhteshem rahat koltuk',
    },
  ];
}
