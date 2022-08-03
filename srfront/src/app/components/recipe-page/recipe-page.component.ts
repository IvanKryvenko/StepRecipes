import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent {

  constructor(private router: Router) { }

  closeCard(): void {
    const navigationDetails: string[] = ['/home'];
    this.router.navigate(navigationDetails);
  }
}
