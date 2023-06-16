import type { APIRoute } from "astro";
import { supabase } from "@utils/supabase";

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = "anonymous";
  const email = data.get("email");
  const message = data.get("message");


    let { data:subscriber, error } = await supabase
    .rpc('add_new_subscriber', {
    _attribs: {},
    _email: email,
    _lists: ['2'],
    _name: name
    })

    if (error) console.error(error)
    else console.log(subscriber)

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validate the data - you'll probably want to do more than this
  if (!isValidEmail) {
    return new Response(
      JSON.stringify({
        message: "Please enter a correct email address",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  
  return new Response(
    JSON.stringify({
      message: "Success!",
      status: 200,
    })
  );
};