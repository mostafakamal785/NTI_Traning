import client from '../config/dbRedisConect.js';
import logger from '../middleware/logger.js';

const photoKey = 'photoData';

export const getPhoto = async (req, res, next) => {
  try {
    const api = 'https://jsonplaceholder.typicode.com/photos';
    const catchPhoto = await client.get(photoKey);
    if (catchPhoto) {
      return res.json(JSON.parse(catchPhoto));
    }
    const respone = await fetch(api);
    const photoData = await respone.json();

    await client.set(photoKey, JSON.stringify(photoData), { EX: 60 });

    res.json(photoData);
  } catch (error) {
    logger.error(`faild to get photos ${error.message}`);
  }
};

export const clearPhoto = async (req,res,) => {
  try {
    await client.del(photoKey);

    res.json('data cleared succesfuly');
  } catch (error) {
    logger.error(`faild to delet photos ${error.message}`);
    
  }
};
