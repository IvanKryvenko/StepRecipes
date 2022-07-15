import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss']
})

export class CardRecipeComponent {
  @Input() imgSrc: string = '';
  @Input() time: number = 0;
  @Input() likes: number = 0;
  @Input() title: string = '';

  constructor() { }

}
