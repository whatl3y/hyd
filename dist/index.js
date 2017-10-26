#!/usr/bin/env node

!function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){e.exports=require("fs")},function(e,t,r){"use strict";function n(){return process.env["win32"==process.platform?"USERPROFILE":"HOME"]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={filepath:process.env.NODE_HIDE_FILEPATH||n(),filename:process.env.NODE_HIDE_FILENAME||"__node-hide-accounts",cryptography:{algorithm:process.env.CRYPT_ALGORITHM||"aes-256-ctr",password:process.env.CRYPT_SECRET}}},function(e,t){e.exports=require("path")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,a){try{var i=t[u](a),o=i.value}catch(c){return void r(c)}return i.done?void e(o):Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),i=n(a),o=r(2),c=n(o),s=r(4),f=n(s),l=r(5),d=n(l),p=r(1),h=n(p),m=(0,f["default"])(i["default"].mkdir),v=(0,f["default"])(i["default"].writeFile),x=(0,f["default"])(i["default"].readFile),b=(0,d["default"])();t["default"]={filepath:c["default"].join(h["default"].filepath,h["default"].filename),getAndDecryptFlatFile:function(){function e(){return t.apply(this,arguments)}var t=u(regeneratorRuntime.mark(function r(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!this.doesDirectoryExist(h["default"].filepath)){r.next=25;break}if(!this.doesFileExist(this.filepath)){r.next=22;break}return r.next=4,x(this.filepath);case 4:if(e=r.sent,0!==e.length){r.next=9;break}return r.abrupt("return",null);case 9:return r.next=11,b.parseData(e.toString("utf8"),!1);case 11:return t=r.sent,r.prev=12,n=JSON.parse(b.decrypt(t.toString("utf8"))),r.abrupt("return",n);case 17:throw r.prev=17,r.t0=r["catch"](12),("We're having a problem parsing your flat file at '"+this.filepath+"'.\n              This is likely due to a different master password, environment variable CRYPT_SECRET,\n              being used that previously was set. Make sure you have the correct\n              secret you used before and try again.").replace(/\n\s+/g,"\n");case 20:r.next=25;break;case 22:return r.next=24,v(this.filepath,"");case 24:return r.abrupt("return",null);case 25:return r.next=27,m(h["default"].filepath);case 27:return r.next=29,v(this.filepath,"");case 29:return r.abrupt("return","");case 30:case"end":return r.stop()}},r,this,[[12,17]])}));return e}(),writeObjToFile:function(){function e(e){return t.apply(this,arguments)}var t=u(regeneratorRuntime.mark(function r(e){var t,n,u,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object.assign(a,e),n=b.encrypt(JSON.stringify(t)),r.next=4,b.parseData(n);case 4:return u=r.sent,r.next=7,v(this.filepath,u);case 7:return r.abrupt("return",r.sent);case 8:case"end":return r.stop()}},r,this)}));return e}(),doesDirectoryExist:function(e){try{var t=i["default"].statSync(e).isDirectory();return t}catch(r){return!1}},doesFileExist:function(e){try{var t=i["default"].statSync(e).isFile();return t}catch(r){return!1}}}},function(e,t){e.exports=require("es6-promisify")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,a){try{var i=t[u](a),o=i.value}catch(c){return void r(c)}return i.done?void e(o):Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{_algorithm:e.algorithm||m["default"].cryptography.algorithm,_secret:e.secret||m["default"].cryptography.password,encrypt:function(e){var t=o["default"].createCipher(this._algorithm,this._secret),r=t.update(e,"utf8","hex");return r+=t["final"]("hex")},encryptFileUtf8:function(){function e(e){return t.apply(this,arguments)}var t=u(regeneratorRuntime.mark(function r(e){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("filePath",e),r.next=3,v(e,{encoding:"utf8"});case 3:return t=r.sent,r.abrupt("return",this.encrypt(t));case 5:case"end":return r.stop()}},r,this)}));return e}(),decrypt:function(e){var t=o["default"].createDecipher(this._algorithm,this._secret),r=t.update(e,"hex","utf8");return r+=t["final"]("utf8")},decryptFileUtf8:function(){function e(e){return t.apply(this,arguments)}var t=u(regeneratorRuntime.mark(function r(e){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(e,{encoding:"utf8"});case 2:return t=r.sent,r.abrupt("return",this.decrypt(t));case 4:case"end":return r.stop()}},r,this)}));return e}(),stringToHash:function(e){var t=o["default"].createHash("md5");return t.update(e),t.digest("hex")},fileToHash:function(e){return new Promise(function(t,r){var n=o["default"].createHash("md5"),u=s["default"].ReadStream(e);u.on("data",function(e){return n.update(e)}),u.on("error",r),u.on("end",function(){return t(n.digest("hex"))})})},parseData:function(){function e(e){return t.apply(this,arguments)}var t=u(regeneratorRuntime.mark(function r(e){var t,n,u=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t=void 0,r.t0=u,r.next=r.t0===!1?4:7;break;case 4:return r.next=6,x(new Buffer(e,"base64"));case 6:return r.abrupt("return",r.sent);case 7:return r.next=9,b(e);case 9:return n=r.sent,r.abrupt("return",new Buffer(n).toString("base64"));case 11:case"end":return r.stop()}},r,this)}));return e}()}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var i=r(12),o=n(i),c=r(0),s=n(c),f=r(13),l=n(f),d=r(4),p=n(d),h=r(1),m=n(h),v=(0,p["default"])(s["default"].readFile),x=(0,p["default"])(l["default"].inflate),b=(0,p["default"])(l["default"].deflate)},function(e,t,r){r(7),e.exports=r(8)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,a){try{var i=t[u](a),o=i.value}catch(c){return void r(c)}return i.done?void e(o):Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}var a=function(){function e(e,t){var r=[],n=!0,u=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){u=!0,a=c}finally{try{!n&&o["return"]&&o["return"]()}finally{if(u)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(9),o=n(i),c=r(2),s=n(c),f=r(10),l=n(f),d=r(5),p=n(d),h=r(3),m=n(h),v=r(14),x=n(v),b=r(16),g=n(b),y=r(1),w=n(y),k=(0,o["default"])(process.argv.slice(2)),F=a(k._,3),R=F[0],_=F[1];F[2];w["default"].cryptography.password||(g["default"].noCryptSecret(),process.exit()),u(regeneratorRuntime.mark(function A(){var e,t,r,n,u,a,i,o,c,f,d,h,v,b,y,F,E,P,O,S,D,T,j,C,N,B,I,M,q,U,L,H,W;return regeneratorRuntime.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:A.prev=0,e=k.e||k.extra,t=k.n||k.name,r=k.p||k.password,n=k.i||k.id||k.uuid,u=k.u||k.username,a=k.t||k.text,i=k.f||k.file,o=(0,p["default"])(),A.t0=R,A.next="add"===A.t0?12:"delete"===A.t0?19:"search"===A.t0?28:"show"===A.t0?41:"update"===A.t0?62:"file"===A.t0?84:"import"===A.t0?87:"encrypt"===A.t0?112:"decrypt"===A.t0?128:144;break;case 12:if(c=t||_){A.next=15;break}return A.abrupt("return",g["default"].error("An account name (-n or --name) parameter is a required at a minimum to add a new account."));case 15:return A.next=17,l["default"].addAccount(c,u,r,e);case 17:return g["default"].success("Successfully added account '"+c+"'!"),A.abrupt("break",145);case 19:if(n){A.next=21;break}return A.abrupt("return",g["default"].error("A uuid (-i or --id or --uuid) is a required to delete an account."));case 21:return A.next=23,l["default"].deleteAccountByUuid(n);case 23:if(f=A.sent,!f){A.next=26;break}return A.abrupt("return",g["default"].success("Successfully deleted account with uuid: '"+n+"'"));case 26:return g["default"].error("We didn't find an account with uuid: '"+n+"'"),A.abrupt("break",145);case 28:return d=k.s||k.search||_,A.next=31,m["default"].getAndDecryptFlatFile();case 31:return h=A.sent,A.next=34,l["default"].searchForAccountsByName(d,h);case 34:return v=A.sent,A.next=37,l["default"].searchForAccountsByUsername(d,h);case 37:return b=A.sent,y={matches:[].concat(v.matches).concat(b.matches).sort(l["default"].sortByName),total:v.total+b.total},g["default"].listAccounts(y.matches,y.total),A.abrupt("break",145);case 41:if(!n){A.next=51;break}return A.next=44,l["default"].findAccountByUuid(n);case 44:if(F=A.sent,!F){A.next=48;break}return r||delete F.password,A.abrupt("return",g["default"].listSingleAccount(F));case 48:return A.abrupt("return",g["default"].error("We didn't find an account with uuid: "+n));case 51:if(!t&&!_){A.next=60;break}return E=t||_,A.next=55,l["default"].findAccountByName(E);case 55:if(P=A.sent,!P){A.next=59;break}return r||delete P.password,A.abrupt("return",g["default"].listSingleAccount(P));case 59:return A.abrupt("return",g["default"].error("We didn't find an account with name: "+E));case 60:return g["default"].error("Either a name (-n or --name) or uuid (-i or --id or --uuid) parameter is a required at a minimum to show the details for an account."),A.abrupt("break",145);case 62:if(!n){A.next=73;break}return A.next=65,l["default"].findAccountByUuid(n);case 65:if(O=A.sent,!O){A.next=70;break}return A.next=69,l["default"].updateAccount(n,{name:t,username:u,password:r,extra:e},O);case 69:return A.abrupt("return",g["default"].success("Successfully updated account with uuid: '"+n+"'!"));case 70:return A.abrupt("return",g["default"].error("We didn't find an account with uuid: "+n));case 73:if(!t){A.next=82;break}return A.next=76,l["default"].findAccountByName(t);case 76:if(S=A.sent,!S){A.next=81;break}return A.next=80,l["default"].updateAccount(S.uuid,{name:t,username:u,password:r,extra:e},S);case 80:return A.abrupt("return",g["default"].success("Successfully updated account with name: '"+t+"'!"));case 81:return A.abrupt("return",g["default"].error("We didn't find an account with name: "+t));case 82:return g["default"].error("Either a name (-n or --name) or uuid (-i or --id or --uuid) parameter is a required at a minimum to show the details for an account."),A.abrupt("break",145);case 84:return D=s["default"].join(w["default"].filepath,w["default"].filename),g["default"].twoLinesDifferentColors("Your encrypted file is in the following location:",D,"blue","green"),A.abrupt("break",145);case 87:if(T=k.f||k.filepath||_,!T||!m["default"].doesFileExist(T)){A.next=110;break}return A.next=91,x["default"].csv(T);case 91:j=A.sent,C=0,N=0,B=j.length;case 95:if(!(j.length>0)){A.next=106;break}if(I=j.shift(),!I.name){A.next=103;break}return C++,A.next=101,l["default"].addAccount(I.name,I.username,I.password,I.extra);case 101:A.next=104;break;case 103:N++;case 104:A.next=95;break;case 106:return M="Successfully added "+C+" accounts from CSV: "+T+"!",q=N>0?"Did not add "+N+" accounts because we didn't see an account name ('name' CSV header).":"",g["default"].twoLinesDifferentColors(M,q,"green","red"),A.abrupt("return",g["default"].singleLine("Total number of rows in spreadsheet: "+B+"\n","blue",0));case 110:return g["default"].error("We can't find filepath provided: "+(T||"NO FILE PROVIDED")),A.abrupt("break",145);case 112:if(U=a||_,L=void 0,!U){A.next=119;break}L=o.encrypt(U),g["default"].success(L),A.next=127;break;case 119:if(!i){A.next=126;break}return A.next=122,o.encryptFileUtf8(i);case 122:L=A.sent,g["default"].success(L),A.next=127;break;case 126:g["default"].error("Please enter text (-t or --text) or a file path (-f or --file) to encrypt text.");case 127:return A.abrupt("break",145);case 128:if(H=a||_,W=void 0,!H){A.next=135;break}W=o.decrypt(H),g["default"].success(W),A.next=143;break;case 135:if(!i){A.next=142;break}return A.next=138,o.decryptFileUtf8(i);case 138:W=A.sent,g["default"].success(W),A.next=143;break;case 142:g["default"].error("Please enter text (-t or --text) or a file path (-f or --file) to encrypt text.");case 143:return A.abrupt("break",145);case 144:g["default"].error("I don't recognize what you are trying to do.\nPlease refer to the documentation for what commands I support.");case 145:process.exit(),A.next=152;break;case 148:A.prev=148,A.t1=A["catch"](0),"string"==typeof A.t1?g["default"].error(A.t1):"TypeError: Bad input string"==A.t1.toString()?(g["default"].error("Uh oh, The error we got is '"+A.t1.toString()+"'\n\nThis usually means the CRYPT_SECRET is different for the info you're trying to decrypt than was used to encrypt it. Full stack trace below."),console.log(A.t1)):console.log(A.t1),process.exit();case 152:case"end":return A.stop()}},A,void 0,[[0,148]])}))()},function(e,t){e.exports=require("minimist")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,a){try{var i=t[u](a),o=i.value}catch(c){return void r(c)}return i.done?void e(o):Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(11),o=n(i),c=r(3),s=n(c);t["default"]={createUuid:function(){return(0,o["default"])()},addAccount:function(){function e(e,r,n){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark(function r(e,t,n){var a,i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=u({},this.createUuid(),{name:e,username:t||"",password:n||"",extra:o||""}),r.next=3,s["default"].getAndDecryptFlatFile();case 3:return i=r.sent,r.next=6,s["default"].writeObjToFile(a,i||{});case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}},r,this)}));return e}(),updateAccount:function(){function e(e){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark(function r(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=u({},e,{name:a.name||i.name||"",username:a.username||i.username||"",password:a.password||i.password||"",extra:a.extra||i.extra||""}),r.next=3,s["default"].getAndDecryptFlatFile();case 3:return n=r.sent,r.next=6,s["default"].writeObjToFile(t,n||{});case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}},r,this)}));return e}(),deleteAccountByUuid:function(){function e(e){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark(function r(e){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s["default"].getAndDecryptFlatFile();case 2:if(t=r.sent,t&&t[e]){r.next=5;break}return r.abrupt("return",!1);case 5:return delete t[e],r.next=8,s["default"].writeObjToFile({},t);case 8:return r.abrupt("return",!0);case 9:case"end":return r.stop()}},r,this)}));return e}(),findAccountByUuid:function(){function e(e){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark(function r(e){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s["default"].getAndDecryptFlatFile();case 2:if(t=r.sent,t&&t[e]){r.next=5;break}return r.abrupt("return",!1);case 5:return r.abrupt("return",Object.assign(t[e],{uuid:e}));case 6:case"end":return r.stop()}},r,this)}));return e}(),findAccountByName:function(){function e(e){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark(function r(e){var t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s["default"].getAndDecryptFlatFile();case 2:if(t=r.sent){r.next=5;break}return r.abrupt("return",!1);case 5:if(n=Object.keys(t).filter(function(r){return t[r].name.toLowerCase()==e.toLowerCase()})[0]){r.next=8;break}return r.abrupt("return",!1);case 8:return r.abrupt("return",Object.assign(t[n],{uuid:n}));case 9:case"end":return r.stop()}},r,this)}));return e}(),searchForAccountsByName:function(){function e(){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark(function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.searchForAccountsByField("name",e,t);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},r,this)}));return e}(),searchForAccountsByUsername:function(){function e(e){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark(function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.searchForAccountsByField("username",e,t);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},r,this)}));return e}(),searchForAccountsByField:function(){function e(e){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark(function r(e){var t,n,u,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.t0=i,r.t0){r.next=5;break}return r.next=4,s["default"].getAndDecryptFlatFile();case 4:r.t0=r.sent;case 5:if(i=r.t0){r.next=8;break}return r.abrupt("return",{matches:[],total:0});case 8:return t=Object.keys(i),n=t.length,u=t.map(function(t){var r=i[t];if(!r)return null;if(a){var n=new RegExp(a,"i"),u=r[e]&&n.test(r[e]);return u?Object.assign(r,{uuid:t}):null}return Object.assign(r,{uuid:t})}).filter(function(e){return!!e}),r.abrupt("return",{matches:u,total:n});case 12:case"end":return r.stop()}},r,this)}));return e}(),sortByName:function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:1}}},function(e,t){e.exports=require("uuid/v4")},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("zlib")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(0),a=n(u),i=r(15),o=n(i);t["default"]={csv:function(e){return new Promise(function(t,r){var n=o["default"].parse({columns:!0},function(e,n){return e?r(e):void t(n)});a["default"].createReadStream(e).pipe(n)})}}},function(e,t){e.exports=require("csv")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(17),a=(n(u),r(18)),i=n(a),o=function(){};t["default"]={noCryptSecret:function(){this.wrapInNewlines(function(){console.log("You don't have environment variable CRYPT_SECRET set.".red),console.log(">export CRYPT_SECRET=[your all time master secret value]".green)})},listSingleAccount:function(e){var t=this;this.wrapInNewlines(function(){return console.log(t.columnify([e]).green)})},listAccounts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.map(function(e){return"string"==typeof e?{name:e}:(delete e.password,e)});this.wrapInNewlines(function(){console.log("I found the following accounts:".blue),console.log(e.columnify(n).green),console.log((t.length+" of "+r+" total accounts returned").blue)})},twoLinesDifferentColors:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"blue",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"green";this.wrapInNewlines(function(){e.length>0&&console.log(e[r]),t.length>0&&console.log(t[n])})},singleLine:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blue",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.wrapInNewlines(function(){return console.log(e[t])},r)},success:function(e){this.wrapInNewlines(function(){return console.log(e.green)})},error:function(e){this.wrapInNewlines(function(){return console.log(e.red)})},wrapInNewlines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=t-1>0?new Array(t-1).fill("\n").join(""):"";t>0&&console.log(r),e(),t>0&&console.log(r)},columnify:function(e){return(0,i["default"])(e,{minWidth:15})}}},function(e,t){e.exports=require("colors")},function(e,t){e.exports=require("columnify")}]);