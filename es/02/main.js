/*
 * Author: 1901 (kaixuan1901@gmail.com)
 * Date: 2022/1/14 17:10
 */

import { add } from "./fm.js";
import * as fm from "./fm.js";
import fmDefault from "./fm.js"

console.log(add(1, 2) === fm.add(1, 2));
console.log(fm.Hello, fmDefault.value);
