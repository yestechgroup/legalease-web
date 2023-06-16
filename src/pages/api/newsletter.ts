import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  let res;
  const data = await request.formData();
  const email = data.get("email");
  const role = data.get("sub-role");
  if (!email || !role) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-API-KEY": import.meta.env.OMNISEND_KEY,
    },
    body: JSON.stringify({
      identifiers: [
        {
          channels: { email: { status: "subscribed" } },
          id: email,
          type: "email",
        },
      ],
      customProperties: { role },
    }),
  };

  fetch("https://api.omnisend.com/v3/contacts", options)
    .then((response) => (res = response))
    .then(async (response) => console.log(await response.json()))
    .catch((err) => console.error(err));

  return new Response(
    JSON.stringify({
      message: "Email added to list!",
    }),
    { status: 200 }
  );
};
