import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    const prompt = await Prompt.findById(params.id);
    if (!prompt) {
      return new Response("Prompt not found", { status: 404 });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response("Intervel server error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    const res = await Prompt.findByIdAndUpdate(params.id, {
      prompt,
      tag,
    });
    if (!res) {
      return new Response("Prompt not found", { status: 404 });
    }
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (err) {
    return new Response("Intervel server error", { status: 500 });
  }
};
