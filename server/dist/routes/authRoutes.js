import { Router } from 'express';
import { registerSchema } from '../validation/authValidations.js';
import { ZodError } from 'zod';
import { formatZodError } from '../helper.js';
const router = Router();
router.post('/register', (req, res) => {
    try {
        const body = req.body;
        const payload = registerSchema.parse(body);
        res.json(payload);
    }
    catch (error) {
        if (error instanceof ZodError) {
            const errors = formatZodError(error);
            return res.status(400).json({ message: "Validation failed", errors });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
});
export default router;
//# sourceMappingURL=authRoutes.js.map