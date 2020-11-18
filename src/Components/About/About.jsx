import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return(
            <div className='about'>
                <p className='about__text'>{this.props.text}</p>
            </div>
        )
    }
}

export default About;