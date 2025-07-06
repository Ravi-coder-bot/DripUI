import {  gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
     const codeAgent = createAgent({
      name: "code-agent",
      system: `You are an expert Next.js developer. 
Your job is to generate clean, production-ready React component code using modern best practices.

- You always respond ONLY with a complete and valid code block.
- You use functional components and Tailwind CSS for styling if asked.
- You NEVER add explanations, markdown, or extra commentary.
- If the user does not specify styling, keep it minimal and semantic.
- If a component needs interaction (like a button), use basic React hooks.
- You support server and client components and follow Next.js 14 standards.

Return only the code as plain text.`,
      model: gemini({ model: "gemini-2.0-flash"}),
    });

    const { output } = await codeAgent.run(
  `Write a React component for a ${event.data.value}`,
);


    return { output };
  },
);
