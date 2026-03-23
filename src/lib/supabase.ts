import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vuebtdywnfpoihsavlxd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZWJ0ZHl3bmZwb2loc2F2bHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MTE0MzAsImV4cCI6MjA4ODk4NzQzMH0.HHmVWQPCpux3Ki8t3AaxZB3oPlnLVfAyVKiRr-DpA04';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
