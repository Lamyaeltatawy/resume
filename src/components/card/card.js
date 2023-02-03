import React, { Fragment } from 'react'
import classes from './card.css';
import pic from '../../assets/pic.jpg';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Card = () => {
    return (
        <Fragment>
            <div className={"card"}>
                <img src={pic} alt="Avatar" style={{ width: "100%" }} />
                <h4 className={'name'}>Lamya Ashraf Eltatawy</h4>
                <p className={'links'}>links</p>
                <p className={'link'}>
                    <a href="https://www.linkedin.com/in/lamya-eltatawy-493206227/" target="_blank" rel="noopener noreferrer"> < AiFillLinkedin/> LinkedIn</a>
                </p>
                <p className={'link'}>
                    <a href="https://github.com/Lamyaeltatawy" target="_blank" rel="noopener noreferrer">  <AiFillGithub/> Github</a>
                </p>

            </div>
        </Fragment>
    )
}

export default Card;