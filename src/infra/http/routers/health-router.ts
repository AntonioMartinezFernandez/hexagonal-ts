import express from 'express';

import { HealthController } from '../../../application/http/controllers/health-controller';

const healthRouter = express.Router();

const healthController = new HealthController();

healthRouter.get('/', healthController.execute.bind(healthController));

export { healthRouter };
