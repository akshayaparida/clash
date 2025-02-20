import { Job, Worker } from "bullmq";
import { redisConnection, emailQueueName } from "../config/queue.js";
import { sendMail } from "../config/mail.js";

interface EmailJobData {
  to: string;
  subject: string;
  body: string;
}

export const queueWorker = new Worker(
  emailQueueName,
  async (job: Job) => {
    const data:EmailJobData = job.data;
 await sendMail(data.to, data.subject, data.body);
  },
  {
    connection: redisConnection,
  }
);
