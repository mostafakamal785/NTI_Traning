import { clearPhoto, getPhoto } from '../controllers/photo.Controller.js';
import express from 'express';

const router = express.Router();

router.get('/', getPhoto);
router.delete('/', clearPhoto);
export default router;
