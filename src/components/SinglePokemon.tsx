import UpdatePokemonList from "@/components/PokeForm";
import { removePokemon } from "@/features/pokemon/pokedexSlice";
import { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { GoHomeFill } from "react-icons/go";

const Updater = () => {
  const [updatePokemon, setUpdatePokemon] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const state = useSelector((state: any) => state.pokemons);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleRemove = () => {
    setIsRemoved(true);
    dispatch(removePokemon(id));
    window.history.back();
  };

  const handleUpdate = () => {
    setUpdatePokemon(true);
  };

  const { name, image, desc, type, height, weight } = state[id!] || {};
  return (
    <div className='w-screen h-screen flex items-center justify-center '>
      {!isRemoved && (
        <div className='hero-bg flex flex-col md:flex-row lg:w-7/12  items-center justify-between text-lg'>
          <button
            className='absolute top-5 left-5'
            onClick={() => window.history.back()}
          >
            <MdOutlineArrowBack />
          </button>
          <button
            className='absolute top-5 right-5'
            onClick={() => (window.location.href = "/")}
          >
            <GoHomeFill />
          </button>
          <>
            <img src={image} width={500} alt='' />
          </>

          {updatePokemon ? (
            <UpdatePokemonList
              id={id}
              setAddPokemon={setUpdatePokemon}
              type='update'
            />
          ) : (
            <div className='flex flex-col lg:w-8/12 gap-5'>
              <h2>Pokemon Name : {name}</h2>

              <p>Type : {type}</p>
              <div className='flex gap-5 items-center'>
                <p>Height : {height}cms</p>
                <p>Weight : {weight}kg</p>
              </div>
              <p className=''>{desc}</p>

              <div className='flex my-5 gap-5 w-full'>
                <Button onClick={handleUpdate}>Update</Button>
                <Button onClick={handleRemove}>Remove</Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Updater;
