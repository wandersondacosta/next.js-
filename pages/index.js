import React, { useState, useEffect } from "react";

export async function getStaticProps(context) {
  const pokemons = await fetch("http://pokeapi.co/api/v2/pokedex/2/")
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    })
    .then((respostaEmObjeto) => {
      return respostaEmObjeto.pokemon_entries;
    });

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home(props) {
  const { pokemons } = props;

  return (
    <div>
      pokedéx - DevSoutinho
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>{pokemon.pokemon_species.name}</li>
        ))}
      </ul>
    </div>
  );
}
