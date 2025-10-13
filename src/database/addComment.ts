import { supabase } from "./supabase";

export const saveComment = async (name: string, text: string) => {
    const { data, error } = await supabase.from('comments').insert({ name, text });
    if(error){
        throw new Error(error.message);
    }

    return data;
}