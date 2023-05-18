import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import logger from '../utilities/logger.js';

const sequelize = new Sequelize(
	process.env.DATABASE_NAME,
	process.env.DATABASE_USERNAME,
	process.env.DATABASE_PASSWORD,
	{
		host: 'localhost' | process.env.DATABASE_HOST,
		dialect: 'mysql',
		logging: false,
	}
);

const databaseConnect = async () => {
	try {
		await sequelize.authenticate();
		logger.info('Connection has been established successfully.');
	} catch (error) {
		logger.error('Unable to connect to the database: ' + error);
	}
};

export { sequelize, databaseConnect };
