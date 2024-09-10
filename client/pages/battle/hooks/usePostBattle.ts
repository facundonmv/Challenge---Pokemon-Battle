import { useRef, useState } from "react";
import { PostBattleBody } from "./types";
import { Battle } from "@/models/Battle.model";
import { BattlesService } from "@/Services/BattleService/Battle.service";

export default function usePostBattle() {

    const [data, setData] = useState<Battle | null>(null);

    const [isLoading, setisLoading] = useState<boolean>(false)

    const [error, setError] = useState<any>(null);

    const [success, setSuccess] = useState<boolean>(false);

    const service = new BattlesService();

    const abortControllerRef = useRef<AbortController | null>(null);

    const post = async (props: PostBattleBody)=>{

        const { pokemon1Id, pokemon2Id } = props;

        try{

            cancel();

            abortControllerRef.current = new AbortController();

            const data = await service.postBattle({
                signal: abortControllerRef.current.signal,
                information: {
                    pokemon1Id,
                    pokemon2Id
                }
            })

            await new Promise(resolve => setTimeout(resolve, 4000));

            setData(data.battle);
            setSuccess(true)
        }catch(err:any){
            setError(err)
            setSuccess(false)
        }finally{
            setisLoading(false)
        }

    }

    const cancel =()=>{
        setisLoading(true)
        setError(null);
        setSuccess(false);
        if(abortControllerRef.current){
            abortControllerRef.current.abort();
            abortControllerRef.current = null
        }
    }

    return { data, isLoading, error, success, post }

}
   