import urlModel from '../models/urlModel.js';

async function idGetController(req, res, next) {
  const shortUrlLink = req.params.shortUrl;

  if (shortUrlLink === 'favicon.ico') return;

  try {
    const url = await urlModel.find({ idLink: shortUrlLink });

    let newClickNumber = (url[0].clicks += 1);

    await urlModel.updateOne(
      { idLink: shortUrlLink },
      { clicks: newClickNumber }
    );

    res.fullUrl = url[0].fullUrl;
    next();
  } catch (error) {
    console.log(error.message);
  }
}

export default idGetController;
