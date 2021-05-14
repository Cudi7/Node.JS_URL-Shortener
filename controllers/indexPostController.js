import { domainConfig } from '../helpers/utils.js';
import urlModel from '../models/urlModel.js';

const indexPostController = (req, res, next) => {
  const [url, shortUrl, id] = domainConfig(req.body.fullUrl);

  try {
    const newUrl = new urlModel({
      fullUrl: url,
      shortUrl: shortUrl,
      clicks: 0,
      idLink: id,
    });

    newUrl.save();

    console.log(`Short URL for ${url} created!`);
  } catch (error) {
    console.log(error.message);
  }

  next();
};

export default indexPostController;
