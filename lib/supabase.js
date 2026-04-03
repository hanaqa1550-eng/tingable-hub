import { createClient } from '@supabase/supabase-js'

// 자바스크립트(.js) 파일에서는 변수 뒤에 '!'를 붙이면 안 돼요!
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)