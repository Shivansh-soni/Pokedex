import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  pokemons: any;
}

const initialState: CounterState = {
  pokemons: {},
};

export const pokeSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<any>) => {
      const newPokemon = {
        id: nanoid(),
        ...action.payload,
      };
      state.pokemons[newPokemon.id] = newPokemon;
    },
    removePokemon: (state, action: PayloadAction<any>) => {
      delete state.pokemons[action.payload];
    },

    updatePokemon: (state, action: PayloadAction<any>) => {
      state.pokemons[action.payload.id] = action.payload;
    },
  },
});

export const { addPokemon, updatePokemon, removePokemon } = pokeSlice.actions;

export default pokeSlice.reducer;
