import { Job, Worker } from "bullmq";
import { redisConnection, emailQueueName } from "../config/queue.js";

export const queueWorker = new Worker(emailQueueName, async (job: Job) => {
  const data = job.data;
  console.log("The queue worker data is", data);
}, {
  connection: redisConnection,
});