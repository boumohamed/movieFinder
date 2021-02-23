import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { movie } from '../../models/movie'


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
  constructor(private data : MovieService) { }

  ngOnInit(): void {
 

  }
  getMovies()
  {
    this.data.getMovies(this.title).subscribe( data => {
      this.Movies = data.Search;
    
    });
    this.first = 0;
  }
 

  
}
