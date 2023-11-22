import './floatingpanel.css'
import likeIcon from '../assets/icons/like.svg'
import likeFilledIcon from '../assets/icons/like-filled.svg'
import addIcon from '../assets/icons/add.svg'
import deleteIcon from '../assets/icons/delete.svg'
import { useState } from 'react';


export default function FloatingPanel(props){
    const data = props.props
    const [like, setLike] = useState(false)
    return (
        <div className='floating-panel-bg'>
            <div className='floating-panel'>
                <img src={data.src} alt="datainserted"/>
                <div className='panel-details'>
                    <span><h2>{data.title}</h2><h3>({data.year})</h3></span><br />
                    {data.description}
                    <div className='panel-options'>
                        <button onClick={(e) => { e.stopPropagation() }}>
                            <img src={addIcon} alt="add Icon" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); setLike(!like); }}>
                            <img src={like ? likeFilledIcon : likeIcon} alt="like Icon" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation() }}>
                            <img src={deleteIcon} alt="delete Icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}