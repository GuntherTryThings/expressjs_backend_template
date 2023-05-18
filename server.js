import logger from './utilities/logger.js';
import app from './server/app.js';

const port = process.env.PORT || 5000;
const server = app();

server.listen(port, () => logger.info(`Server started on port ${port}`));
