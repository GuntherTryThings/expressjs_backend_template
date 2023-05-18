import formatDate from './format-date.js';
import { createLogger, format, transports } from 'winston';
const { combine, printf } = format;

const myFormat = printf(({ level, message }) => {
    return `${formatDate(new Date())} [${level}]: ${message}`;
});

const logger = createLogger({
    format: combine(myFormat),
    transports: [
        new transports.File({
            name: 'info-file',
            filename: './logs/combined.log',
            level: 'info',
        }),
        new transports.File({
            name: 'error-file',
            filename: './logs/error.log',
            level: 'error',
        }),
    ],
});

export default logger;