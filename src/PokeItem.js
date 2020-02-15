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

        console.log(pokedex)
        return (
            <div>
                <p><img alt='' src={ url_image } /></p>
                <p>Pokemon: { pokemon }</p>
                <p>Attack: { attack }</p>
                <p>Defense: { defense }</p>
            </div>
        )
    }
}