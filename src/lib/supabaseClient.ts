import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://draotemnsqyvpavbifxd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyYW90ZW1uc3F5dnBhdmJpZnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NzE0OTQsImV4cCI6MjA4MjE0NzQ5NH0.iXRy0qkxSfewY6wVToJrYxHFfWqtDndQNisBRqrOFd8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
