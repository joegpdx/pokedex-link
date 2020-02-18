import React from 'react'

export default class PokeItem extends React.Component {
    render() {
        const { pokedex } = this.props;
        const {
            url_image,
            pokemon,
            attack, 
            defense
        } = pokedex;

        return (
            <li>
                <div>
                    <p>Pokemon: { pokemon }</p>
                    <p><img alt='' src={ url_image } /></p>
                    <p>Attack: { attack }</p>
                    <p>Defense: { defense }</p>
                </div>
            </li>
        )
    }
}