import React from 'react'
import { getImageUrl } from './imgs.js';

function Tile(props) {
    let isEx 
    isEx = props.isExclusive;
    return(
        <section class="img-tile">
            <section className="img-tile--sec">
                {
                    (isEx) && <div className="img-tile--sec-banner">Exclusive</div>
                }
                <img src={getImageUrl(props.img)} class="img-tile--main-img" alt={props.alt} />
            </section>
            <div class="img-tile--caption">
                <p>{props.desc}</p>
                <button className='caption-btn'>Book</button>
            </div>
        </section> 
    )
}

export default Tile