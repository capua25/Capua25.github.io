import { createClient } from '@supabase/supabase-js';

const supabaseURL = import.meta.env.SUPABASE_URL;
const supabaseKEY = import.meta.env.SUPABASE_KEY;

export const supabase = createClient(supabaseURL, supabaseKEY);