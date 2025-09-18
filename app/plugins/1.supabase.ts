import { defineNuxtPlugin } from "nuxt/app";
import { createClient } from "@supabase/supabase-js";


export default defineNuxtPlugin(() => {
  const projectUrl = "https://gvbshvktuhukggslkpxx.supabase.co";
  const anonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2YnNodmt0dWh1a2dnc2xrcHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MTgzODQsImV4cCI6MjAyNzA5NDM4NH0.F0RajKKPF0gO5vncu4WpIfNO5wJFeBmfgkdaaEWnSkQ";
  const supabase = createClient(projectUrl, anonKey);

  return {
    provide: {
      supabase: supabase,
    }
  }
});