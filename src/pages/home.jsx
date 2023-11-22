import './home.css'

export default function Home(){
    return (
        <section id='home'>
            <div className='movie-search'>
                <label htmlFor="search">SEARCH MOVIES</label>
                <input type="search" name="search" id="search" placeholder='Kineme The Movie'/>
                <button>Search</button>
            </div>
            <div className='banner'>
                <img src="https://www.proglobalbusinesssolutions.com/wp-content/uploads/2019/03/Photography-Web-Banner.jpg" alt="" />
            </div>
        </section>
    )
}