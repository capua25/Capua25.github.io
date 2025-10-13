import { supabase } from "./supabase";

export const listComments = async () => {
    let { data, error } = await supabase.from('comments').select(`created_at,name,text`);

    if(error){
        return {
            success: false,
            error: "Ha ocurrido un error",
            data: null
        };
    }

    return {
        success: true,
        error: "",
        data: data
    };
}