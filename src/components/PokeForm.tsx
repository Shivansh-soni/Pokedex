import React, { useRef, useState } from "react";
import { pokemonTypes } from "@/lib/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, updatePokemon } from "../features/pokemon/pokedexSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import Loader from "./Loader";

const AddPokemonForm = ({ type = "add", id }: addPokemonForm) => {
  //* Redux
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.pokemons);
  //* Form States
  const imageRef = useRef(state[id!]?.image || null);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<pokemonData>(
    type === "update" && state[id!]
      ? state[id!]
      : {
          name: "",
          image: "",
          desc: "",
          type: "",
          height: 0,
          weight: 0,
        }
  );

  //* Handlers
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPokemonData({ ...pokemonData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", imageRef.current || "");
    formData.append("upload_preset", "qnuh2zsu");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dwfyy467p/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    const newData = { ...pokemonData, image: res.secure_url };

    const action = type === "add" ? addPokemon : updatePokemon;
    dispatch(action(newData));
    setPokemonData({
      name: "",
      image: "",
      desc: "",
      type: "",
      height: 0,
      weight: 0,
    });
    setIsLoading(false);
    window.location.href = "/all";
  };

  return (
    <>
      <div className='w-[95%] p-2'>
        {isLoading && <Loader />}
        <h2 className='text-xl font-bold my-5'>Add Pokemon</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <Input
            required
            value={pokemonData.name}
            name='name'
            onChange={onChangeHandler}
            type='text'
            placeholder='Pokemon Name'
            className='input-box  placeholder:text-white'
          />
          <Textarea
            value={pokemonData.desc}
            required
            name='desc'
            onChange={(e: any) =>
              setPokemonData({ ...pokemonData, desc: e.target.value })
            }
            placeholder='Description'
            className='input-box  placeholder:text-white'
          />
          <Select
            value={pokemonData.type}
            onValueChange={(type: any) =>
              setPokemonData({ ...pokemonData, type: type })
            }
            defaultValue={pokemonTypes[0]}
          >
            <SelectTrigger className='w-[180px] input-box'>
              <SelectValue placeholder='Type' />
            </SelectTrigger>
            <SelectContent className='bg-black text-white'>
              {pokemonTypes.map((type) => (
                <SelectItem value={type} key={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            value={pokemonData.height}
            required
            name='height'
            onChange={onChangeHandler}
            type='number'
            placeholder='Height  (in cms)'
            className='input-box  placeholder:text-white'
          />
          <Input
            value={pokemonData.weight}
            required
            name='weight'
            onChange={onChangeHandler}
            type='number'
            placeholder='Weight (in lbs)'
            className='input-box  placeholder:text-white'
          />
          <div className=''>
            <label htmlFor='picture'>Upload Picture</label>
            <Input
              id='picture'
              onChange={(event: any) => {
                imageRef.current = event.target.files[0];
              }}
              type='file'
              itemType='image/jpeg'
              placeholder='Pokemon Image'
              className='input-box  placeholder:text-white'
            />
          </div>
          <div className='flex w-full gap-5'>
            <Button
              onClick={() => (window.location.href = "/")}
              className='w-full'
            >
              Go Back
            </Button>
            <Button type='submit' className='w-full'>
              {" "}
              Submit{" "}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPokemonForm;

interface addPokemonForm {
  id?: string;
  type: "add" | "update";
  setAddPokemon: any;
}
