import { Job, Queue, Worker } from "bullmq";
import { redisConnection, defaultQueueOptions } from "../config/queue";

export const emailQueueName = "emailQueue"

export const emailQueue = new Queue(emailQueueName, {

    connection: redisConnection,
    defaultJobOptions: defaultQueueOptions
    
});

export const queueWorker = new Worker(emailQueueName, async (job: Job) =>
{
    const data = job.data;
    console.log("the queue worker data is", data)
},
    {
    connection: redisConnection,
})