export default defineNuxtPlugin(() => {
  const { $supabase } = useNuxtApp();

  $supabase.auth.onAuthStateChange((event, session) => {
    switch(event){
      case "INITIAL_SESSION":
      case "SIGNED_IN":
      case "USER_UPDATED":

        break;

      case "SIGNED_OUT":

        break;

      default:
        break;
    }
  });  
});