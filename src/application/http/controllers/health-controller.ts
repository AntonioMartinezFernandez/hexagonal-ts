import { Request, Response } from 'express';

export class HealthController {
  async execute(req: Request, res: Response) {
    res.status(200).send({ status: 'OK' });
  }
}
