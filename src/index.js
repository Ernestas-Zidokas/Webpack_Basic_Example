import timeStamp from './utils/timeStamp';
import './index.scss';

const now = timeStamp();
const blastFromPast = timeStamp('1992-11-29');

console.log(now, blastFromPast, process.env.NODE_ENV);
