import { supabase } from "./supabase";

export const saveComment = async (name: string, text: string) => {
    const { data, error } = await supabase.from('comments').insert({ name, text });

    console.log(data);
    console.log('---------');
    if(error){
        console.log(error.message);
        return {
            success: false,
            error: "Ha ocurrido un error"
        };
    }

    return {
        success: true,
        error: ""
    };
}