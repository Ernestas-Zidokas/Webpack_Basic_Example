function timeStamp(date = '') {
  return date ? new Date(date).getTime() : Date.now();
}

export default timeStamp;
