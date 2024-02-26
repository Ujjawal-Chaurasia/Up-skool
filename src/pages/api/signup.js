
export const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const childname = data.get("childname");
  const mobile = data.get("mobile");
console.log(name,email,childname,mobile);
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success",
    }),
    { status: 200 }
  );
};
