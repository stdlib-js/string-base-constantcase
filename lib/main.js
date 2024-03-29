/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var uppercase = require( '@stdlib/string-base-uppercase' );
var replace = require( '@stdlib/string-base-replace' );
var trim = require( '@stdlib/string-base-trim' );


// VARIABLES //

var RE_WHITESPACE = /\s+/g;
var RE_SPECIAL = /[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g; // eslint-disable-line no-useless-escape
var RE_CAMEL = /([a-z0-9])([A-Z])/g;


// MAIN //

/**
* Converts a string to constant case.
*
* @param {string} str - string to convert
* @returns {string} constant-cased string
*
* @example
* var str = constantcase( 'beep' );
* // returns 'BEEP'
*
* @example
* var str = constantcase( 'beep boop' );
* // returns 'BEEP_BOOP'
*
* @example
* var str = constantcase( 'isMobile' );
* // returns 'IS_MOBILE'
*
* @example
* var str = constantcase( 'Hello World!' );
* // returns 'HELLO_WORLD'
*/
function constantcase( str ) {
	str = replace( str, RE_SPECIAL, ' ' );
	str = replace( str, RE_CAMEL, '$1 $2' );
	str = trim( str );
	str = replace( str, RE_WHITESPACE, '_' );
	return uppercase( str );
}


// EXPORTS //

module.exports = constantcase;
