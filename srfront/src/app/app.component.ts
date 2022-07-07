import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Step Recipes';

  ngOnInit(): void {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjQ1NjM0NjQ2LCJleHAiOjE2NjU2MzQ2NDZ9.NWswzXzYVbA7tomQDKyK8o3X3Foz3pBSY2miwKBaLzM');
  }
  //in the future it will be taken from the backend
}
