import { useState } from "react";
import Ash from "./assets/Ash.png";
import { Button } from "./components/ui/button";

import { heroInfo } from "@/lib/constants";
import UpdatePokemon from "./components/PokeForm";

function App() {
  const [addPokemon, setAddPokemon] = useState(false);
  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen overflow-hidden'>
        <div className='hero-bg flex flex-col lg:flex-row items-center justify-between text-white  rounded-xl gap-5 scale-90 sm:scale-100 lg:p-8 lg:w-7/12 transition-all'>
          {/* Info and Search */}
          {addPokemon ? (
            <UpdatePokemon type='add' setAddPokemon={setAddPokemon} />
          ) : (
            <div className='flex flex-col gap-5 lg:w-11/12 max-w-lg p-5 sm:p-0'>
              <h2 className='text-xl font-bold'>{heroInfo.heading}</h2>
              <p className='lg:text-lg '>{heroInfo.p1}</p>
              <p className='lg:text-lg '>{heroInfo.p2}</p>
              <div className='flex gap-5 mt-5'>
                <Button
                  variant='outline'
                  size='lg'
                  onClick={() => (window.location.href = "/all")}
                  className='bg-transparent'
                >
                  {" "}
                  Search a Pokemon{" "}
                </Button>
                <Button
                  variant='outline'
                  onClick={() => setAddPokemon(true)}
                  size='lg'
                  className='bg-transparent'
                >
                  {" "}
                  Add a Pokemon{" "}
                </Button>
              </div>
            </div>
          )}

          <div className='sm:flex hidden'>
            <img src={Ash} alt='Ash' width={600} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
