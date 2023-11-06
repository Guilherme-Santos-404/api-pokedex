import express from 'express';
import { Request, Response, Router } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.end(JSON.stringify({
        message:'API REST utilizada para gerenciar as requisições para a MultiPokedex'}));
});

export default router;