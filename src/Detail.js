import React, { Component } from 'react';
import { getPokemon } from './api.js'
import PokeItem from './PokeItem.js';

export default class Detail extends Component {
    state = { pokemon: {} }

    // asynce means we will do some fetching in here
    // componentDidMount means this will happen ONCE after the initial 'mount' of the component
    async componentDidMount() {
         // lets make a fetch using `this.props.match.params.pokeid`, which comes from the URL (thanks to react router and our detail/:pokeid? route. The colon in the route definition means it will be passed as a prop to the this component) 
        const data = await getPokemon(this.props.match.params.pokeId);

        if (data.body.results) {
        
        // set the pokemonChosen state to the value of the fetch
        this.setState({ pokemon: data.body.results[0] })
            
        }
    }

    render() {
        const { pokemon } = this.state;

        return (
            // render a pokeitem, passing the poemonChosen state as a prop
            <PokeItem pokedex={ pokemon } />
      );
    }
}
