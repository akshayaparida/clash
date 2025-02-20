var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Worker } from "bullmq";
import { redisConnection, emailQueueName } from "../config/queue.js";
import { sendMail } from "../config/mail.js";
export const queueWorker = new Worker(emailQueueName, (job) => __awaiter(void 0, void 0, void 0, function* () {
    const data = job.data;
    yield sendMail(data.to, data.subject, data.body);
}), {
    connection: redisConnection,
});
//# sourceMappingURL=EmailJob.js.map