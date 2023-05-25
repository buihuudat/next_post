import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const res = await Prompt.find({ creator: params.id }).populate("creator");
    if (!res) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (err) {
    return new Response("Interval server error" + err, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id);
    if (!prompt) return new Response("Prompt not found", { status: 404 });

    await Prompt.findByIdAndRemove(prompt._id);
    return new Response("Deleted successfully", { status: 200 });
  } catch (err) {
    return new Response("Deleted failure in sv", { status: 500 });
  }
};
