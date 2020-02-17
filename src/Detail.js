import React, { Component } from 'react';
import { getPokemon } from './api.js'
import PokeItem from './PokeItem.js';

export default class Detail extends Component {
    state = { pokemon: {} }

    async componentDidMount() {
        const data = await getPokemon(this.props.match.params.pokeId);

        if (data.body.results) {

        this.setState({ pokemon: data.body.results[0] })
            
        }
    }

    render() {
        const { pokemon } = this.state;

        return (
            <PokeItem pokedex={ pokemon } />
      );
    }
}
