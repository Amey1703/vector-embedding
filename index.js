import dotenv from 'dotenv';
dotenv.config()

// OPenAi url and headers
const openAIheaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
};

async function createEmbedding(textToEmbed) {
  let response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: openAIheaders,
    body: JSON.stringify({
      input: textToEmbed,
      model: "text-embedding-3-small",
    }),
  });

  if (response.ok) {
    response.json().then((data) => {
      console.log(data);
      return data;
    });
  }
}

createEmbedding("Hello world!")