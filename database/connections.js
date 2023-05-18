import { sequelize } from './sequelize.js';
import logger from '../utilities/logger.js';

// Define connections
export default async () => {
	try {
		await sequelize.sync({ alter: true }); // Alter on model change
	} catch (error) {
		logger.error(error);
	}
};
