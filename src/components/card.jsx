import { useState } from 'react'
import './card.css'
import FloatingPanel from './floatingpanel'

export default function Card(props){
    const cardInfo = props.props
    const [ isClicked, setClicked] = useState(false)

    const handleOnClick = ()=> {
        setClicked(!isClicked)
    }
    const options = {
        src: 'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg',
        title: 'Avatar',
        year: 2011,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita error, provident veritatis aliquid at voluptatem quos. Assumenda inventore dolor natus amet at ab, necessitatibus, ad veritatis totam ullam corporis."
    }

    return(
        <div className='card' onClick={()=>handleOnClick()}>
            { isClicked && <FloatingPanel props={options}/>}
            <div className='image-container'>
                <img src={cardInfo.image} />
            </div>
            <div className="card-details">
                <strong>{cardInfo.title}</strong><br/>
                <i>({cardInfo.year})</i><br/><br/>
                {/* {cardInfo.description} */}
            </div>
        </div>
    )
}

