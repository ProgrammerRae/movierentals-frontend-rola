import './rental.css'
import Card from '../components/card';

const sampleData = [
    {
        id: 0,
        title: 'Avatar',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 1,
        title: 'Scary Movie',
        image: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 2,
        title: 'The Little Mermaid',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_dplus_796_6213577c.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 3,
        title: '65 Million Years Ago',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c4/65_film_teaser_poster.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 4,
        title: 'After Death',
        image: 'https://resizing.flixster.com/y1KpcHfi1Zfwkq-ZdIyeiESwwI8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYyODU3MTIxLTljODItNDNlYS05OWY1LTlmYTdkMzQ0MGQ5OC5qcGc=',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 5,
        title: 'Shotgun Wedding',
        image: 'https://vader-prod.s3.amazonaws.com/1674240697-51jk5Nnn3PL._SL500_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 6,
        title: 'Avatar',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 7,
        title: 'Scary Movie',
        image: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 8,
        title: 'The Little Mermaid',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_dplus_796_6213577c.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 9,
        title: '65 Million Years Ago',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c4/65_film_teaser_poster.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 10,
        title: 'After Death',
        image: 'https://resizing.flixster.com/y1KpcHfi1Zfwkq-ZdIyeiESwwI8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYyODU3MTIxLTljODItNDNlYS05OWY1LTlmYTdkMzQ0MGQ5OC5qcGc=',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 11,
        title: 'Shotgun Wedding',
        image: 'https://vader-prod.s3.amazonaws.com/1674240697-51jk5Nnn3PL._SL500_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 12,
        title: 'Avatar',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 13,
        title: 'Scary Movie',
        image: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 14,
        title: 'Avatar',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 15,
        title: 'Scary Movie',
        image: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 16,
        title: 'The Little Mermaid',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_dplus_796_6213577c.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 17,
        title: '65 Million Years Ago',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c4/65_film_teaser_poster.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 18,
        title: 'After Death',
        image: 'https://resizing.flixster.com/y1KpcHfi1Zfwkq-ZdIyeiESwwI8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYyODU3MTIxLTljODItNDNlYS05OWY1LTlmYTdkMzQ0MGQ5OC5qcGc=',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 19,
        title: 'Shotgun Wedding',
        image: 'https://vader-prod.s3.amazonaws.com/1674240697-51jk5Nnn3PL._SL500_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 20,
        title: 'Avatar',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 21,
        title: 'Scary Movie',
        image: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 22,
        title: 'The Little Mermaid',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_dplus_796_6213577c.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 23,
        title: '65 Million Years Ago',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c4/65_film_teaser_poster.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 24,
        title: 'After Death',
        image: 'https://resizing.flixster.com/y1KpcHfi1Zfwkq-ZdIyeiESwwI8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYyODU3MTIxLTljODItNDNlYS05OWY1LTlmYTdkMzQ0MGQ5OC5qcGc=',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 25,
        title: 'Shotgun Wedding',
        image: 'https://vader-prod.s3.amazonaws.com/1674240697-51jk5Nnn3PL._SL500_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 26,
        title: 'Avatar',
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg',
        description: 'Testing',
        price: 100,
        year: 2009
    },
    {
        id: 27,
        title: 'Scary Movie',
        image: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        description: 'Testing',
        price: 100,
        year: 2009
    }
]

export default function Rentals(){
    const isFromOtherSource = true;
    const movies = ()=>{
        const movieCards = [];
        sampleData.forEach(movie =>  movieCards.push(<Card props={movie} key={movie.id}/>))
        return movieCards
    }
    return (
        <section id='rentals'>
            <h1>WATCH NOW</h1>
            <div className="watch-now">
                <div className="watch">
                    { 
                        isFromOtherSource ? 
                        <iframe src="https://www.youtube.com/embed/yp9EnN7Z6EA" frameBorder="0" allowFullScreen></iframe> : 
                        <video controls>
                            <source src="source" type="video/mp4"/>
                        </video>
                    }
                </div>
                <div className='watch-details'>
                    <header><h2>{sampleData[1].title}</h2><h3><i>({sampleData[1].year})</i></h3></header><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab quibusdam sint consectetur autem ullam, maxime corrupti rerum delectus eius velit laborum distinctio? Eos doloribus ad nihil voluptas obcaecati fugit?

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum corrupti sit, nihil reprehenderit laboriosam facilis in doloribus voluptatem eius ipsa? Eligendi obcaecati dolor sapiente, totam rerum error qui in id.
                </div>
            </div>
            <h1>MY RENTALS</h1>
            <div className='movie-container'>
                {sampleData && movies()}
            </div>
        </section>
    )
}