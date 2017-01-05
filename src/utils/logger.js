import {applyMiddleware} from 'redux';
import logger from './logger.middleware'
import errorHandler from './error.middleware';
import thunk from 'redux-thunk';

const middleWare = applyMiddleware(logger, errorHandler, thunk);

export default middleWare;


