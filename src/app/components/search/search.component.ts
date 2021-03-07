import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { movie } from '../../models/movie';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  history_key = 'search_history';
  Movies : movie[];
  title : string = "";
  first = 1;
  isUpdate : boolean = false;
  constructor(private data : MovieService) { }

  ngOnInit(): void {


  }
  getMovies()
  {
    this.data.getMovies(this.title).subscribe( data => {
      this.isUpdate = true;

      setTimeout(() =>
      {
        this.Movies = data.Search;
        this.isUpdate = false;
        this.first = 0;
      }, 1000);
    });

  }



}
