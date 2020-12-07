'use strict';

const aa = 'hello world';

// export default aa = 'hello world!';
var index = () => {
  let aa = new Promise(reslove => reslove('1212'))
  console.log('demo', aa);
};
module.exports = index;
