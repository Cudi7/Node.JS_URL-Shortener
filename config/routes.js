import express from 'express';
import indexPostController from '../controllers/indexPostController.js';
import indexGetController from '../controllers/indexGetController.js';
import idGetController from '../controllers/idGetController.js';

const router = express.Router();

router.get('/', indexGetController, (req, res) => {
  const urlList = res.allUrl;

  res.render('index', urlList ? { urlList } : null);
});

router.post('/', indexPostController, (req, res) => {
  res.redirect('/');
});

router.get('/:shortUrl', idGetController, (req, res) => {
  res.redirect(res.fullUrl);
});

export default router;
