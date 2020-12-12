import { aa,bb, aafun, bbfun } from './test';
import _ from 'lodash';
const _add = (aa) => {
  return aa
}
_add(aa);
console.log('我是打印', aa, aafun(10));
console.log('ladash', _.cloneDeep(aa));
