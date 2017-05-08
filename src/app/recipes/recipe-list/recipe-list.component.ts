import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]= [
  new Recipe ("marcelus", "the bes men recipe", "http://www.seriouseats.com/images/2016/12/20161226-staff-picks-best-recipes-2016-chicken-with-cabbage.jpg"),
    new Recipe ("marcelus", "the bes men recipe", "http://www.seriouseats.com/images/2016/12/20161226-staff-picks-best-recipes-2016-chicken-with-cabbage.jpg"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
