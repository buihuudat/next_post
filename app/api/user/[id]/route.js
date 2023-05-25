import User from "@models/user";

export const GET = async (req, { params }) => {
  try {
    const user = await User.findById(params.id);
    if (!user) return new Response("User not found", { status: 404 });
    return new Response(JSON.stringify(user), { Status: 200 });
  } catch (err) {
    return new Response("Intervel server error" + err, { status: 500 });
  }
};
