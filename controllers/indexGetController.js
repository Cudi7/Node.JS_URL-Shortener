import urlModel from '../Models/urlModel.js';

const getIndexController = async (req, res, next) => {
  try {
    const allUrl = await urlModel.find({});

    res.allUrl = allUrl;
    next();
  } catch (error) {
    console.log(error.message);
  }
};

export default getIndexController;
