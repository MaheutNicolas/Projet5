import { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        const { id, name, img } = this.props;
        return (
            <Link to={"/logement/"+id} className='card'>
                <img src={img} alt="" />
                <div className='card-shadow'>
                    <p className='card-name'>{name}</p>
                </div>
            </Link>
        );
    }
}

export default Card;