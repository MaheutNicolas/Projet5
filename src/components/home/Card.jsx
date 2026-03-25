import { Component } from 'react';

class Card extends Component {
    render() {
        const { name, img } = this.props;
        return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-shadow'>
                <p className='card-name'>{name}</p>
            </div>
        </div>
        );
    }
}

export default Card;