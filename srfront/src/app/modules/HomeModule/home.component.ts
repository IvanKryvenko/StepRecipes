import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  recipeList: Recipe[] = [
    {imgSrc: '../../../assets/image-assets/pumkin.png', time: 15, likes: 15, title: 'pumkin soup' },
    {imgSrc: '../../../assets/image-assets/tosts.png', time: 5, likes: 125, title: 'banana toast' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
