import React, { Component } from 'react';
import { getPokemon } from './api.js'
import PokeItem from './PokeItem.js';

export default class Detail extends Component {
    state = { pokedex: {} }

    async componentDidMount() {
        const data = await getPokemon(this.props.match.params.pokemon);
        
        if (data.body.results) {


        this.setState({ pokedex: data.body.results[0] })
            
        }
    }

    render() {
        const { pokedex } = this.state;

        return (
            <PokeItem pokedex={ pokedex } />
      );
    }
}
