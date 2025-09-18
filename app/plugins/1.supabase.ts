import { defineNuxtPlugin } from "nuxt/app";
import { createClient } from "@supabase/supabase-js";


export default defineNuxtPlugin(() => {
  const configContentful = useRuntimeConfig();
  const projectUrl = configContentful.public.supabase_url;
  const anonKey = configContentful.public.supabase_anon;
  const supabase = createClient(projectUrl, anonKey);

  return {
    provide: {
      supabase: supabase,
    }
  }
});