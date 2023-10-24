import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const supabaseAnonoKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""

const supabase = createClient(supabaseUrl, supabaseAnonoKey)

export default supabase
