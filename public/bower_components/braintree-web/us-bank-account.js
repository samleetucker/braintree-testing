!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).usBankAccount=e()}}(function(){return function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){var n=t[a][1][e];return r(n?n:e)},d,d.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){"use strict";function o(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=o},{}],2:[function(e,t,n){"use strict";function o(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=o},{}],3:[function(e,t,n){"use strict";function o(e,t){return t?void e.then(function(e){t(null,e)})["catch"](function(e){t(e)}):e}t.exports=o},{}],4:[function(e,t,n){"use strict";function o(e){return function(){var t,n=Array.prototype.slice.call(arguments),o=n[n.length-1];return"function"==typeof o&&(t=n.pop(),t=i(r(t))),a(e.apply(this,n),t)}}var r=e("./lib/deferred"),i=e("./lib/once"),a=e("./lib/promise-or-callback");o.wrapPrototype=function(e,t){var n,r,i;return t=t||{},r=t.ignoreMethods||[],i=t.transformPrivateMethods===!0,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,o="constructor"!==t&&"function"==typeof e.prototype[t],a=-1===r.indexOf(t);return n=i?!0:"_"!==t.charAt(0),o&&n&&a}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=o(n)}),e},t.exports=o},{"./lib/deferred":1,"./lib/once":2,"./lib/promise-or-callback":3}],5:[function(e,t,n){!function(e){function n(){}function o(e,t){return function(){e.apply(t,arguments)}}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function i(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?a:s)(t.promise,e._value);var o;try{o=n(e._value)}catch(r){return void s(t.promise,r)}a(t.promise,o)}))}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void d(o(n,t),e)}e._state=1,e._value=t,c(e)}catch(i){s(e,i)}}function s(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,s(t,e))})}catch(o){if(n)return;n=!0,s(t,o)}}var l=setTimeout;r.prototype["catch"]=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new u(e,t,o)),o},r.all=function(e){var t=Array.prototype.slice.call(e);return new r(function(e,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){o(i,e)},n)}t[i]=a,0===--r&&e(t)}catch(c){n(c)}}if(0===t.length)return e([]);for(var r=t.length,i=0;i<t.length;i++)o(i,t[i])})},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,n){for(var o=0,r=e.length;r>o;o++)e[o].then(t,n)})},r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){l(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},r._setImmediateFn=function(e){r._immediateFn=e},r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e},"undefined"!=typeof t&&t.exports?t.exports=r:e.Promise||(e.Promise=r)}(this)},{}],6:[function(e,t,n){"use strict";function o(e,t){var n,o=t?i(t):{},s=r(e.authorization).attrs,c=i(e.analyticsMetadata);o.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in o._meta)o._meta.hasOwnProperty(n)&&(c[n]=o._meta[n]);return o._meta=c,s.tokenizationKey?o.tokenizationKey=s.tokenizationKey:o.authorizationFingerprint=s.authorizationFingerprint,o}var r=e("./create-authorization-data"),i=e("./json-clone"),a=e("./constants");t.exports=o},{"./constants":10,"./create-authorization-data":12,"./json-clone":15}],7:[function(e,t,n){"use strict";function o(e){return Math.floor(e/1e3)}function r(e,t,n){var r=e.getConfiguration(),s=e._request,c=o(Date.now()),u=r.gatewayConfiguration.analytics.url,d={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};s({url:u,method:"post",data:a(r,d),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),a=e("./add-metadata");t.exports={sendEvent:r}},{"./add-metadata":6,"./constants":10}],8:[function(e,t,n){"use strict";function o(e){if(!o.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var r=e("./enumerate");o.prototype=Object.create(Error.prototype),o.prototype.constructor=o,o.types=r(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),o.findRootError=function(e){return e instanceof o&&e.details&&e.details.originalError?o.findRootError(e.details.originalError):e},t.exports=o},{"./enumerate":13}],9:[function(e,t,n){"use strict";function o(e){return e.replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1_$2").toLowerCase()}t.exports=function(e){return Object.keys(e).reduce(function(t,n){var r=o(n);return t[r]=e[n],t},{})}},{}],10:[function(e,t,n){"use strict";var o="3.22.2",r="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:o,INTEGRATION:"custom",SOURCE:"client",PLATFORM:r,BRAINTREE_LIBRARY_VERSION:"braintree/"+r+"/"+o}},{}],11:[function(e,t,n){"use strict";var o=e("./braintree-error"),r=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new o({type:r.METHOD_CALLED_AFTER_TEARDOWN.type,code:r.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":8,"./errors":14}],12:[function(e,t,n){"use strict";function o(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function r(e){var t=e.split("_"),n=t[0],o=t.slice(2).join("_");return{merchantId:o,environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return o(e)?(n=r(e),i.attrs.tokenizationKey=e,i.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var a=e("../lib/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/polyfill":18}],13:[function(e,t,n){"use strict";function o(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=o},{}],14:[function(e,t,n){"use strict";var o=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:o.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:o.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:o.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:o.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:o.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:o.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":8}],15:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],16:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],17:[function(e,t,n){arguments[4][2][0].apply(n,arguments)},{dup:2}],18:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,o,r,i,a,s,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do r=d.indexOf(e.charAt(c++)),i=d.indexOf(e.charAt(c++)),a=d.indexOf(e.charAt(c++)),s=d.indexOf(e.charAt(c++)),t=(63&r)<<2|i>>4&3,n=(15&i)<<4|a>>2&15,o=(3&a)<<6|63&s,l+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(o?String.fromCharCode(o):"");while(c<e.length);return l}var o="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return o.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],19:[function(e,t,n){(function(n){"use strict";var o=n.Promise||e("promise-polyfill");t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":5}],20:[function(e,t,n){"use strict";t.exports={PLAID_LINK_JS:"https://cdn.plaid.com/link/v2/stable/link-initialize.js"}},{}],21:[function(e,t,n){"use strict";var o=e("../lib/braintree-error");t.exports={US_BANK_ACCOUNT_OPTION_REQUIRED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_OPTION_REQUIRED"},US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS"},US_BANK_ACCOUNT_LOGIN_LOAD_FAILED:{type:o.types.NETWORK,code:"US_BANK_ACCOUNT_LOGIN_LOAD_FAILED",message:"Bank login flow failed to load."},US_BANK_ACCOUNT_LOGIN_CLOSED:{type:o.types.CUSTOMER,code:"US_BANK_ACCOUNT_LOGIN_CLOSED",message:"Customer closed bank login flow before authorizing."},US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE",message:"Another bank login tokenization request is active."},US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR:{type:o.types.NETWORK,code:"US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR",message:"A tokenization network error occurred."},US_BANK_ACCOUNT_FAILED_TOKENIZATION:{type:o.types.CUSTOMER,code:"US_BANK_ACCOUNT_FAILED_TOKENIZATION",message:"The supplied data failed tokenization."},US_BANK_ACCOUNT_NOT_ENABLED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_NOT_ENABLED",message:"US bank account is not enabled."},US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED",message:"Bank login is not enabled."}}},{"../lib/braintree-error":8}],22:[function(e,t,n){"use strict";function o(e){var t,n,o;return null==e.client?u.reject(new r({type:c.INSTANTIATION_OPTION_REQUIRED.type,code:c.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating US Bank Account."})):(t=e.client.getVersion(),t!==s?u.reject(new r({type:c.INCOMPATIBLE_VERSIONS.type,code:c.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+t+") and US Bank Account (version "+s+") components must be from the same SDK version."})):(n=e.client.getConfiguration().gatewayConfiguration.braintreeApi)?(o=e.client.getConfiguration().gatewayConfiguration.usBankAccount,o?u.resolve(new a(e)):u.reject(new r(i.US_BANK_ACCOUNT_NOT_ENABLED))):u.reject(new r(c.BRAINTREE_API_ACCESS_RESTRICTED)))}var r=e("../lib/braintree-error"),i=e("./errors"),a=e("./us-bank-account"),s="3.22.2",c=e("../lib/errors"),u=e("../lib/promise"),d=e("@braintree/wrap-promise");t.exports={create:d(o),VERSION:s}},{"../lib/braintree-error":8,"../lib/errors":14,"../lib/promise":19,"./errors":21,"./us-bank-account":23,"@braintree/wrap-promise":4}],23:[function(e,t,n){(function(n){"use strict";function o(e){this._client=e.client,this._isTokenizingBankLogin=!1,l.sendEvent(this._client,"usbankaccount.initialized")}function r(e){var t,n=e.details&&e.details.httpStatus;return t=new s(401===n?d.BRAINTREE_API_ACCESS_RESTRICTED:500>n?u.US_BANK_ACCOUNT_FAILED_TOKENIZATION:u.US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR),t.details={originalError:e},t}function i(e){return{nonce:e.data.id,details:{},description:e.data.description,type:e.data.type}}function a(e,t){function o(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(i(),t(null,n.Plaid))}function r(){e.parentNode.removeChild(e),t(new s(u.US_BANK_ACCOUNT_LOGIN_LOAD_FAILED))}function i(){e.removeEventListener("error",r),e.removeEventListener("load",o),e.removeEventListener("readystatechange",o)}e.addEventListener("error",r),e.addEventListener("load",o),e.addEventListener("readystatechange",o)}var s=e("../lib/braintree-error"),c=e("./constants"),u=e("./errors"),d=e("../lib/errors"),l=e("../lib/analytics"),_=e("../lib/once"),f=e("../lib/convert-methods-to-error"),p=e("../lib/methods"),N=e("../lib/camel-case-to-snake-case"),A=e("../lib/promise"),E=e("@braintree/wrap-promise");o.prototype.tokenize=function(e){return e=e||{},e.mandateText?e.bankDetails&&e.bankLogin?A.reject(new s({type:u.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.type,code:u.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.code,message:"tokenize must be called with bankDetails or bankLogin, not both."})):e.bankDetails?this._tokenizeBankDetails(e):e.bankLogin?this._tokenizeBankLogin(e):A.reject(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"tokenize must be called with bankDetails or bankLogin."})):A.reject(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"mandateText property is required."}))},o.prototype._tokenizeBankDetails=function(e){var t=this._client,n=e.bankDetails;return t.request({method:"POST",endpoint:"tokens",api:"braintreeApi",data:N({type:"us_bank_account",routingNumber:n.routingNumber,accountNumber:n.accountNumber,firstName:n.firstName,lastName:n.lastName,businessName:n.businessName,accountType:n.accountType,ownershipType:n.ownershipType,billingAddress:N(n.billingAddress||{}),achMandate:{text:e.mandateText}})}).then(function(e){return l.sendEvent(t,"usbankaccount.bankdetails.tokenization.succeeded"),A.resolve(i(e))})["catch"](function(e){var n=r(e);return l.sendEvent(t,"usbankaccount.bankdetails.tokenization.failed"),A.reject(n)})},o.prototype._tokenizeBankLogin=function(e){var t=this,n=this._client,o=n.getConfiguration().gatewayConfiguration,a="production"===o.environment,c=o.usBankAccount.plaid;return e.bankLogin.displayName?c?this._isTokenizingBankLogin?A.reject(new s(u.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE)):(this._isTokenizingBankLogin=!0,new A(function(o,d){t._loadPlaid(function(_,f){return _?void d(_):(f.create({clientName:e.bankLogin.displayName,apiVersion:"v2",env:a?"production":"sandbox",key:c.publicKey,product:"auth",selectAccount:!0,onExit:function(){t._isTokenizingBankLogin=!1,l.sendEvent(n,"usbankaccount.banklogin.tokenization.closed.by-user"),d(new s(u.US_BANK_ACCOUNT_LOGIN_CLOSED))},onSuccess:function(s,c){n.request({method:"POST",endpoint:"tokens",api:"braintreeApi",data:N({type:"plaid_public_token",publicToken:s,accountId:a?c.account_id:"plaid_account_id",achMandate:{text:e.mandateText},ownershipType:e.bankLogin.ownershipType,firstName:e.bankLogin.firstName,lastName:e.bankLogin.lastName,businessName:e.bankLogin.businessName,billingAddress:N(e.bankLogin.billingAddress||{})})}).then(function(e){t._isTokenizingBankLogin=!1,l.sendEvent(n,"usbankaccount.banklogin.tokenization.succeeded"),o(i(e))})["catch"](function(e){var o;t._isTokenizingBankLogin=!1,o=r(e),l.sendEvent(n,"usbankaccount.banklogin.tokenization.failed"),d(o)})}}).open(),void l.sendEvent(n,"usbankaccount.banklogin.tokenization.started"))})})):A.reject(new s(u.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED)):A.reject(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"displayName property is required when using bankLogin."}))},o.prototype._loadPlaid=function(e){var t,o;return e=_(e),n.Plaid?void e(null,n.Plaid):(t=document.querySelector('script[src="'+c.PLAID_LINK_JS+'"]'),void(t?a(t,e):(o=document.createElement("script"),o.src=c.PLAID_LINK_JS,o.async=!0,a(o,e),document.body.appendChild(o),this._plaidScript=o)))},o.prototype.teardown=function(){return this._plaidScript&&document.body.removeChild(this._plaidScript),f(this,p(o.prototype)),A.resolve()},t.exports=E.wrapPrototype(o)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/analytics":7,"../lib/braintree-error":8,"../lib/camel-case-to-snake-case":9,"../lib/convert-methods-to-error":11,"../lib/errors":14,"../lib/methods":16,"../lib/once":17,"../lib/promise":19,"./constants":20,"./errors":21,"@braintree/wrap-promise":4}]},{},[22])(22)});