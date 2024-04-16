import Ash from "@/assets/Ash.png";
import AddPokemonForm from "@/components/PokeForm";
import Ball from "@/assets/pokeball.png";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { GoHomeFill } from "react-icons/go";
const PokeFinder = () => {
  const store = useSelector((state: any) => state.pokemons);
  const [search, setSearch] = useState("");
  const [showAddPokemon, setShowAddPokemon] = useState(false);
  return (
    <div className='align-component lg:!p-20'>
      <div className='flex flex-col gap-5 w-full hero-bg'>
        {showAddPokemon ? (
          <div className='flex gap-20'>
            <AddPokemonForm type='add' setAddPokemon={setShowAddPokemon} />
            <img src={Ash} alt='ash' width={400} />
          </div>
        ) : (
          <div className='p-5 w-full h-full'>
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
            <h2 className='lg:text-xl font-bold my-5'>Find Your Pokemon</h2>

            <div className='flex px-4 gap-5 items-center justify-center'>
              {/* Search Button */}
              <Input
                onChange={(e) => setSearch(e.target.value)}
                type='text'
                placeholder='Pokemon Name'
                className='bg-transparent text-white placeholder:text-white'
              />
            </div>

            {Object.keys(store).length > 0 ? (
              <div className='grid grid-cols-2  lg:grid-cols-4 place-content-center place-items-center w-full gap-14 lg:gap-5 mt-10'>
                {Object.keys(store)
                  .filter((uid: any) => store[uid].name.includes(search))
                  .map((uid: any) => {
                    const { id, name, image } = store[uid];
                    return (
                      <a
                        href={`/pokemon/${id}`}
                        key={id}
                        className='flex flex-col justify-center items-center gap-5 bg-primary p-5 cursor-pointer transition-all hover:scale-105 ease-linear'
                      >
                        <img
                          src={image ?? Ball}
                          alt='pokemon'
                          className=''
                          width={200}
                        />
                        <h3 className='text-white font-bold  text-md'>
                          {name}
                        </h3>
                      </a>
                    );
                  })}
              </div>
            ) : (
              <div className='w-full text-center flex flex-col lg:gap-5 gap-10 items-center justify-center p-5 '>
                <h2 className='text-lg font-bold'>No Pokemon Found</h2>
                <div className=''>
                  <p className='lg:my-2 my-10'>
                    Dont Worry! You can always add some
                  </p>
                  <Button onClick={() => setShowAddPokemon(true)}>
                    {" "}
                    Click here{" "}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokeFinder;
