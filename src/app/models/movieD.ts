export interface movieD 
{
    Actors : string,
    Awards : string,
    BoxOffice : string,
    Country : string,
    Director : string,
    Genre : string,
    Language : string,
    Metascore : string,
    Plot : string,
    Poster : string,
    Production : string,
    Rated : string,
    Ratings : Rating[],
    Released : string,
    Runtime : string,
    Title : string,
    Type : string,
    Website : string,
    Writer : string,
    Year : string,
    imdbRating : string
    
    

}
export interface Rating
{
    source : string,
    value : string,
}
