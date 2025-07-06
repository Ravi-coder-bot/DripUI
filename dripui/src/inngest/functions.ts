import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //imagine this is 1st step
    await step.sleep("wait-a-moment", "30s");
    //this is second step
    await step.sleep("wait-a-moment", "10s");
    //imagine this is second step
    await step.sleep("wait-a-moment", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);
