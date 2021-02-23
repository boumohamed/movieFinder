import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { movieD } from '../../models/movieD'

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  Movie : movieD;
  id: string;
  history_key = 'search_history';
  constructor(private data : MovieService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.data.getDetails(this.id).subscribe(data => {
      this.Movie = data;
    });

    
  }

  
}
