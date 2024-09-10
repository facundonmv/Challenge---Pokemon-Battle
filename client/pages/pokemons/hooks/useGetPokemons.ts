import { Pokemon } from "@/models/Pokemon.model";
import { PokemonsService } from "@/Services/PokemonService/Pokemon.service";
import { useRef, useState } from "react";

export default function useGetPokemons() {

    const [data, setData] = useState<Pokemon[] | null>(null);

    const [isLoading, setisLoading] = useState<boolean>(false)

    const [error, setError] = useState<any>(null)

    const service = new PokemonsService();

    const abortControllerRef = useRef<AbortController | null>(null);

    const get = async ()=>{

        try{

            cancel();

            abortControllerRef.current = new AbortController();
            setisLoading(true)
            setError(null);

            const data = await service.getPokemons({
                signal: abortControllerRef.current.signal
            })

            setData(data.pokemons);
        }catch(err:any){
            setError(err)
        }finally{
            setisLoading(false)
        }

    }

    const cancel =()=>{
        if(abortControllerRef.current){
            abortControllerRef.current.abort();
            abortControllerRef.current = null
        }
    }

    return { data, isLoading, error, get }

}
   