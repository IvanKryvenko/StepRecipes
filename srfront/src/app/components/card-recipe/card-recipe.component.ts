import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(public router: Router) { }


  openCard($myParam: string = ''): void {
    const navigationDetails: string[] = ['/detail'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
