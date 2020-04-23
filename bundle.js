(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 * Copyright (c) 2013 John Mayer
 * Copyright (c) 2018 Andrey Kuzmin
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// Vector2

var _MJS_v2 = F2(function(x, y) {
    return new Float64Array([x, y]);
});

var _MJS_v2getX = function(a) {
    return a[0];
};

var _MJS_v2getY = function(a) {
    return a[1];
};

var _MJS_v2setX = F2(function(x, a) {
    return new Float64Array([x, a[1]]);
});

var _MJS_v2setY = F2(function(y, a) {
    return new Float64Array([a[0], y]);
});

var _MJS_v2toRecord = function(a) {
    return { x: a[0], y: a[1] };
};

var _MJS_v2fromRecord = function(r) {
    return new Float64Array([r.x, r.y]);
};

var _MJS_v2add = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    return r;
});

var _MJS_v2sub = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    return r;
});

var _MJS_v2negate = function(a) {
    var r = new Float64Array(2);
    r[0] = -a[0];
    r[1] = -a[1];
    return r;
};

var _MJS_v2direction = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    var im = 1.0 / _MJS_v2lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    return r;
});

function _MJS_v2lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
var _MJS_v2length = _MJS_v2lengthLocal;

var _MJS_v2lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1];
};

var _MJS_v2distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
});

var _MJS_v2distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return dx * dx + dy * dy;
});

var _MJS_v2normalize = function(a) {
    var r = new Float64Array(2);
    var im = 1.0 / _MJS_v2lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    return r;
};

var _MJS_v2scale = F2(function(k, a) {
    var r = new Float64Array(2);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    return r;
});

var _MJS_v2dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1];
});

// Vector3

var _MJS_v3temp1Local = new Float64Array(3);
var _MJS_v3temp2Local = new Float64Array(3);
var _MJS_v3temp3Local = new Float64Array(3);

var _MJS_v3 = F3(function(x, y, z) {
    return new Float64Array([x, y, z]);
});

var _MJS_v3getX = function(a) {
    return a[0];
};

var _MJS_v3getY = function(a) {
    return a[1];
};

var _MJS_v3getZ = function(a) {
    return a[2];
};

var _MJS_v3setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2]]);
});

var _MJS_v3setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2]]);
});

var _MJS_v3setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z]);
});

var _MJS_v3toRecord = function(a) {
    return { x: a[0], y: a[1], z: a[2] };
};

var _MJS_v3fromRecord = function(r) {
    return new Float64Array([r.x, r.y, r.z]);
};

var _MJS_v3add = F2(function(a, b) {
    var r = new Float64Array(3);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    return r;
});

function _MJS_v3subLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    return r;
}
var _MJS_v3sub = F2(_MJS_v3subLocal);

var _MJS_v3negate = function(a) {
    var r = new Float64Array(3);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    return r;
};

function _MJS_v3directionLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    return _MJS_v3normalizeLocal(_MJS_v3subLocal(a, b, r), r);
}
var _MJS_v3direction = F2(_MJS_v3directionLocal);

function _MJS_v3lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
var _MJS_v3length = _MJS_v3lengthLocal;

var _MJS_v3lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
};

var _MJS_v3distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
});

var _MJS_v3distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return dx * dx + dy * dy + dz * dz;
});

function _MJS_v3normalizeLocal(a, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    var im = 1.0 / _MJS_v3lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    return r;
}
var _MJS_v3normalize = _MJS_v3normalizeLocal;

var _MJS_v3scale = F2(function(k, a) {
    return new Float64Array([a[0] * k, a[1] * k, a[2] * k]);
});

var _MJS_v3dotLocal = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
var _MJS_v3dot = F2(_MJS_v3dotLocal);

function _MJS_v3crossLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[1] * b[2] - a[2] * b[1];
    r[1] = a[2] * b[0] - a[0] * b[2];
    r[2] = a[0] * b[1] - a[1] * b[0];
    return r;
}
var _MJS_v3cross = F2(_MJS_v3crossLocal);

var _MJS_v3mul4x4 = F2(function(m, v) {
    var w;
    var tmp = _MJS_v3temp1Local;
    var r = new Float64Array(3);

    tmp[0] = m[3];
    tmp[1] = m[7];
    tmp[2] = m[11];
    w = _MJS_v3dotLocal(v, tmp) + m[15];
    tmp[0] = m[0];
    tmp[1] = m[4];
    tmp[2] = m[8];
    r[0] = (_MJS_v3dotLocal(v, tmp) + m[12]) / w;
    tmp[0] = m[1];
    tmp[1] = m[5];
    tmp[2] = m[9];
    r[1] = (_MJS_v3dotLocal(v, tmp) + m[13]) / w;
    tmp[0] = m[2];
    tmp[1] = m[6];
    tmp[2] = m[10];
    r[2] = (_MJS_v3dotLocal(v, tmp) + m[14]) / w;
    return r;
});

// Vector4

var _MJS_v4 = F4(function(x, y, z, w) {
    return new Float64Array([x, y, z, w]);
});

var _MJS_v4getX = function(a) {
    return a[0];
};

var _MJS_v4getY = function(a) {
    return a[1];
};

var _MJS_v4getZ = function(a) {
    return a[2];
};

var _MJS_v4getW = function(a) {
    return a[3];
};

var _MJS_v4setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2], a[3]]);
});

var _MJS_v4setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2], a[3]]);
});

var _MJS_v4setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z, a[3]]);
});

var _MJS_v4setW = F2(function(w, a) {
    return new Float64Array([a[0], a[1], a[2], w]);
});

var _MJS_v4toRecord = function(a) {
    return { x: a[0], y: a[1], z: a[2], w: a[3] };
};

var _MJS_v4fromRecord = function(r) {
    return new Float64Array([r.x, r.y, r.z, r.w]);
};

var _MJS_v4add = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    r[3] = a[3] + b[3];
    return r;
});

var _MJS_v4sub = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    return r;
});

var _MJS_v4negate = function(a) {
    var r = new Float64Array(4);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    r[3] = -a[3];
    return r;
};

var _MJS_v4direction = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    var im = 1.0 / _MJS_v4lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    r[2] = r[2] * im;
    r[3] = r[3] * im;
    return r;
});

function _MJS_v4lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
}
var _MJS_v4length = _MJS_v4lengthLocal;

var _MJS_v4lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3];
};

var _MJS_v4distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
});

var _MJS_v4distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return dx * dx + dy * dy + dz * dz + dw * dw;
});

var _MJS_v4normalize = function(a) {
    var r = new Float64Array(4);
    var im = 1.0 / _MJS_v4lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    r[3] = a[3] * im;
    return r;
};

var _MJS_v4scale = F2(function(k, a) {
    var r = new Float64Array(4);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    r[2] = a[2] * k;
    r[3] = a[3] * k;
    return r;
});

var _MJS_v4dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
});

// Matrix4

var _MJS_m4x4temp1Local = new Float64Array(16);
var _MJS_m4x4temp2Local = new Float64Array(16);

var _MJS_m4x4identity = new Float64Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
]);

var _MJS_m4x4fromRecord = function(r) {
    var m = new Float64Array(16);
    m[0] = r.m11;
    m[1] = r.m21;
    m[2] = r.m31;
    m[3] = r.m41;
    m[4] = r.m12;
    m[5] = r.m22;
    m[6] = r.m32;
    m[7] = r.m42;
    m[8] = r.m13;
    m[9] = r.m23;
    m[10] = r.m33;
    m[11] = r.m43;
    m[12] = r.m14;
    m[13] = r.m24;
    m[14] = r.m34;
    m[15] = r.m44;
    return m;
};

var _MJS_m4x4toRecord = function(m) {
    return {
        m11: m[0], m21: m[1], m31: m[2], m41: m[3],
        m12: m[4], m22: m[5], m32: m[6], m42: m[7],
        m13: m[8], m23: m[9], m33: m[10], m43: m[11],
        m14: m[12], m24: m[13], m34: m[14], m44: m[15]
    };
};

var _MJS_m4x4inverse = function(m) {
    var r = new Float64Array(16);

    r[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] +
        m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
    r[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] -
        m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
    r[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] +
        m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
    r[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] -
        m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
    r[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] -
        m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
    r[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] +
        m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
    r[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] -
        m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
    r[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] +
        m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
    r[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] +
        m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
    r[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] -
        m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
    r[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] +
        m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
    r[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] -
        m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
    r[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] -
        m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
    r[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] +
        m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
    r[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] -
        m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
    r[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] +
        m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];

    var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];

    if (det === 0) {
        return $elm$core$Maybe$Nothing;
    }

    det = 1.0 / det;

    for (var i = 0; i < 16; i = i + 1) {
        r[i] = r[i] * det;
    }

    return $elm$core$Maybe$Just(r);
};

var _MJS_m4x4inverseOrthonormal = function(m) {
    var r = _MJS_m4x4transposeLocal(m);
    var t = [m[12], m[13], m[14]];
    r[3] = r[7] = r[11] = 0;
    r[12] = -_MJS_v3dotLocal([r[0], r[4], r[8]], t);
    r[13] = -_MJS_v3dotLocal([r[1], r[5], r[9]], t);
    r[14] = -_MJS_v3dotLocal([r[2], r[6], r[10]], t);
    return r;
};

function _MJS_m4x4makeFrustumLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 * znear / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 * znear / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = (right + left) / (right - left);
    r[9] = (top + bottom) / (top - bottom);
    r[10] = -(zfar + znear) / (zfar - znear);
    r[11] = -1;
    r[12] = 0;
    r[13] = 0;
    r[14] = -2 * zfar * znear / (zfar - znear);
    r[15] = 0;

    return r;
}
var _MJS_m4x4makeFrustum = F6(_MJS_m4x4makeFrustumLocal);

var _MJS_m4x4makePerspective = F4(function(fovy, aspect, znear, zfar) {
    var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
    var ymin = -ymax;
    var xmin = ymin * aspect;
    var xmax = ymax * aspect;

    return _MJS_m4x4makeFrustumLocal(xmin, xmax, ymin, ymax, znear, zfar);
});

function _MJS_m4x4makeOrthoLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = -2 / (zfar - znear);
    r[11] = 0;
    r[12] = -(right + left) / (right - left);
    r[13] = -(top + bottom) / (top - bottom);
    r[14] = -(zfar + znear) / (zfar - znear);
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeOrtho = F6(_MJS_m4x4makeOrthoLocal);

var _MJS_m4x4makeOrtho2D = F4(function(left, right, bottom, top) {
    return _MJS_m4x4makeOrthoLocal(left, right, bottom, top, -1, 1);
});

function _MJS_m4x4mulLocal(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a41 = a[3];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a42 = a[7];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a43 = a[11];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];
    var a44 = a[15];
    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b41 = b[3];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b42 = b[7];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b43 = b[11];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];
    var b44 = b[15];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    r[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    r[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    r[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    r[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return r;
}
var _MJS_m4x4mul = F2(_MJS_m4x4mulLocal);

var _MJS_m4x4mulAffine = F2(function(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];

    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31;
    r[3] = 0;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32;
    r[7] = 0;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33;
    r[11] = 0;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34;
    r[15] = 1;

    return r;
});

var _MJS_m4x4makeRotate = F2(function(angle, axis) {
    var r = new Float64Array(16);
    axis = _MJS_v3normalizeLocal(axis, _MJS_v3temp1Local);
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);

    r[0] = x * x * c1 + c;
    r[1] = y * x * c1 + z * s;
    r[2] = z * x * c1 - y * s;
    r[3] = 0;
    r[4] = x * y * c1 - z * s;
    r[5] = y * y * c1 + c;
    r[6] = y * z * c1 + x * s;
    r[7] = 0;
    r[8] = x * z * c1 + y * s;
    r[9] = y * z * c1 - x * s;
    r[10] = z * z * c1 + c;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});

var _MJS_m4x4rotate = F3(function(angle, axis, m) {
    var r = new Float64Array(16);
    var im = 1.0 / _MJS_v3lengthLocal(axis);
    var x = axis[0] * im;
    var y = axis[1] * im;
    var z = axis[2] * im;
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);
    var xs = x * s;
    var ys = y * s;
    var zs = z * s;
    var xyc1 = x * y * c1;
    var xzc1 = x * z * c1;
    var yzc1 = y * z * c1;
    var t11 = x * x * c1 + c;
    var t21 = xyc1 + zs;
    var t31 = xzc1 - ys;
    var t12 = xyc1 - zs;
    var t22 = y * y * c1 + c;
    var t32 = yzc1 + xs;
    var t13 = xzc1 + ys;
    var t23 = yzc1 - xs;
    var t33 = z * z * c1 + c;
    var m11 = m[0], m21 = m[1], m31 = m[2], m41 = m[3];
    var m12 = m[4], m22 = m[5], m32 = m[6], m42 = m[7];
    var m13 = m[8], m23 = m[9], m33 = m[10], m43 = m[11];
    var m14 = m[12], m24 = m[13], m34 = m[14], m44 = m[15];

    r[0] = m11 * t11 + m12 * t21 + m13 * t31;
    r[1] = m21 * t11 + m22 * t21 + m23 * t31;
    r[2] = m31 * t11 + m32 * t21 + m33 * t31;
    r[3] = m41 * t11 + m42 * t21 + m43 * t31;
    r[4] = m11 * t12 + m12 * t22 + m13 * t32;
    r[5] = m21 * t12 + m22 * t22 + m23 * t32;
    r[6] = m31 * t12 + m32 * t22 + m33 * t32;
    r[7] = m41 * t12 + m42 * t22 + m43 * t32;
    r[8] = m11 * t13 + m12 * t23 + m13 * t33;
    r[9] = m21 * t13 + m22 * t23 + m23 * t33;
    r[10] = m31 * t13 + m32 * t23 + m33 * t33;
    r[11] = m41 * t13 + m42 * t23 + m43 * t33;
    r[12] = m14,
    r[13] = m24;
    r[14] = m34;
    r[15] = m44;

    return r;
});

function _MJS_m4x4makeScale3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = x;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = y;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = z;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeScale3 = F3(_MJS_m4x4makeScale3Local);

var _MJS_m4x4makeScale = function(v) {
    return _MJS_m4x4makeScale3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4scale3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

var _MJS_m4x4scale = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

function _MJS_m4x4makeTranslate3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = 1;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 1;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = 1;
    r[11] = 0;
    r[12] = x;
    r[13] = y;
    r[14] = z;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeTranslate3 = F3(_MJS_m4x4makeTranslate3Local);

var _MJS_m4x4makeTranslate = function(v) {
    return _MJS_m4x4makeTranslate3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4translate3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4translate = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4makeLookAt = F3(function(eye, center, up) {
    var z = _MJS_v3directionLocal(eye, center, _MJS_v3temp1Local);
    var x = _MJS_v3normalizeLocal(_MJS_v3crossLocal(up, z, _MJS_v3temp2Local), _MJS_v3temp2Local);
    var y = _MJS_v3normalizeLocal(_MJS_v3crossLocal(z, x, _MJS_v3temp3Local), _MJS_v3temp3Local);
    var tm1 = _MJS_m4x4temp1Local;
    var tm2 = _MJS_m4x4temp2Local;

    tm1[0] = x[0];
    tm1[1] = y[0];
    tm1[2] = z[0];
    tm1[3] = 0;
    tm1[4] = x[1];
    tm1[5] = y[1];
    tm1[6] = z[1];
    tm1[7] = 0;
    tm1[8] = x[2];
    tm1[9] = y[2];
    tm1[10] = z[2];
    tm1[11] = 0;
    tm1[12] = 0;
    tm1[13] = 0;
    tm1[14] = 0;
    tm1[15] = 1;

    tm2[0] = 1; tm2[1] = 0; tm2[2] = 0; tm2[3] = 0;
    tm2[4] = 0; tm2[5] = 1; tm2[6] = 0; tm2[7] = 0;
    tm2[8] = 0; tm2[9] = 0; tm2[10] = 1; tm2[11] = 0;
    tm2[12] = -eye[0]; tm2[13] = -eye[1]; tm2[14] = -eye[2]; tm2[15] = 1;

    return _MJS_m4x4mulLocal(tm1, tm2);
});


function _MJS_m4x4transposeLocal(m) {
    var r = new Float64Array(16);

    r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
    r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
    r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
    r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];

    return r;
}
var _MJS_m4x4transpose = _MJS_m4x4transposeLocal;

var _MJS_m4x4makeBasis = F3(function(vx, vy, vz) {
    var r = new Float64Array(16);

    r[0] = vx[0];
    r[1] = vx[1];
    r[2] = vx[2];
    r[3] = 0;
    r[4] = vy[0];
    r[5] = vy[1];
    r[6] = vy[2];
    r[7] = 0;
    r[8] = vz[0];
    r[9] = vz[1];
    r[10] = vz[2];
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});


function _WebGL_log(/* msg */) {
  // console.log(msg);
}

var _WebGL_guid = 0;

function _WebGL_listEach(fn, list) {
  for (; list.b; list = list.b) {
    fn(list.a);
  }
}

function _WebGL_listLength(list) {
  var length = 0;
  for (; list.b; list = list.b) {
    length++;
  }
  return length;
}

var _WebGL_rAF = typeof requestAnimationFrame !== 'undefined' ?
  requestAnimationFrame :
  function (cb) { setTimeout(cb, 1000 / 60); };

// eslint-disable-next-line no-unused-vars
var _WebGL_entity = F5(function (settings, vert, frag, mesh, uniforms) {
  return {
    $: 0,
    a: settings,
    b: vert,
    c: frag,
    d: mesh,
    e: uniforms
  };
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableBlend = F2(function (gl, setting) {
  gl.enable(gl.BLEND);
  // a   b   c   d   e   f   g h i j
  // eq1 f11 f12 eq2 f21 f22 r g b a
  gl.blendEquationSeparate(setting.a, setting.d);
  gl.blendFuncSeparate(setting.b, setting.c, setting.e, setting.f);
  gl.blendColor(setting.g, setting.h, setting.i, setting.j);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableDepthTest = F2(function (gl, setting) {
  gl.enable(gl.DEPTH_TEST);
  // a    b    c    d
  // func mask near far
  gl.depthFunc(setting.a);
  gl.depthMask(setting.b);
  gl.depthRange(setting.c, setting.d);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableStencilTest = F2(function (gl, setting) {
  gl.enable(gl.STENCIL_TEST);
  // a   b    c         d     e     f      g      h     i     j      k
  // ref mask writeMask test1 fail1 zfail1 zpass1 test2 fail2 zfail2 zpass2
  gl.stencilFuncSeparate(gl.FRONT, setting.d, setting.a, setting.b);
  gl.stencilOpSeparate(gl.FRONT, setting.e, setting.f, setting.g);
  gl.stencilMaskSeparate(gl.FRONT, setting.c);
  gl.stencilFuncSeparate(gl.BACK, setting.h, setting.a, setting.b);
  gl.stencilOpSeparate(gl.BACK, setting.i, setting.j, setting.k);
  gl.stencilMaskSeparate(gl.BACK, setting.c);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableScissor = F2(function (gl, setting) {
  gl.enable(gl.SCISSOR_TEST);
  gl.scissor(setting.a, setting.b, setting.c, setting.d);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableColorMask = F2(function (gl, setting) {
  gl.colorMask(setting.a, setting.b, setting.c, setting.d);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableCullFace = F2(function (gl, setting) {
  gl.enable(gl.CULL_FACE);
  gl.cullFace(setting.a);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enablePolygonOffset = F2(function (gl, setting) {
  gl.enable(gl.POLYGON_OFFSET_FILL);
  gl.polygonOffset(setting.a, setting.b);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableSampleCoverage = F2(function (gl, setting) {
  gl.enable(gl.SAMPLE_COVERAGE);
  gl.sampleCoverage(setting.a, setting.b);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableSampleAlphaToCoverage = F2(function (gl, setting) {
  gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_disableBlend = function (cache) {
  cache.gl.disable(cache.gl.BLEND);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableDepthTest = function (cache) {
  cache.gl.disable(cache.gl.DEPTH_TEST);
  cache.gl.depthMask(true);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableStencilTest = function (cache) {
  cache.gl.disable(cache.gl.STENCIL_TEST);
  cache.gl.stencilMask(cache.STENCIL_WRITEMASK);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableScissor = function (cache) {
  cache.gl.disable(cache.gl.SCISSOR_TEST);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableColorMask = function (cache) {
  cache.gl.colorMask(true, true, true, true);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableCullFace = function (cache) {
  cache.gl.disable(cache.gl.CULL_FACE);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disablePolygonOffset = function (cache) {
  cache.gl.disable(cache.gl.POLYGON_OFFSET_FILL);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableSampleCoverage = function (cache) {
  cache.gl.disable(cache.gl.SAMPLE_COVERAGE);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableSampleAlphaToCoverage = function (cache) {
  cache.gl.disable(cache.gl.SAMPLE_ALPHA_TO_COVERAGE);
};

function _WebGL_doCompile(gl, src, type) {

  var shader = gl.createShader(type);
  _WebGL_log('Created shader');

  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw gl.getShaderInfoLog(shader);
  }

  return shader;

}

function _WebGL_doLink(gl, vshader, fshader) {

  var program = gl.createProgram();
  _WebGL_log('Created program');

  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw gl.getProgramInfoLog(program);
  }

  return program;

}

function _WebGL_getAttributeInfo(gl, type) {
  switch (type) {
    case gl.FLOAT:
      return { size: 1, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC2:
      return { size: 2, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC3:
      return { size: 3, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC4:
      return { size: 4, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_MAT4:
      return { size: 4, arraySize: 4, type: Float32Array, baseType: gl.FLOAT };
    case gl.INT:
      return { size: 1, arraySize: 1, type: Int32Array, baseType: gl.INT };
  }
}

/**
 *  Form the buffer for a given attribute.
 *
 *  @param {WebGLRenderingContext} gl context
 *  @param {WebGLActiveInfo} attribute the attribute to bind to.
 *         We use its name to grab the record by name and also to know
 *         how many elements we need to grab.
 *  @param {Mesh} mesh The mesh coming in from Elm.
 *  @param {Object} attributes The mapping between the attribute names and Elm fields
 *  @return {WebGLBuffer}
 */
function _WebGL_doBindAttribute(gl, attribute, mesh, attributes) {
  // The length of the number of vertices that
  // complete one 'thing' based on the drawing mode.
  // ie, 2 for Lines, 3 for Triangles, etc.
  var elemSize = mesh.a.elemSize;

  var idxKeys = [];
  for (var i = 0; i < elemSize; i++) {
    idxKeys.push(String.fromCharCode(97 + i));
  }

  function dataFill(data, cnt, fillOffset, elem, key) {
    var i;
    if (elemSize === 1) {
      for (i = 0; i < cnt; i++) {
        data[fillOffset++] = cnt === 1 ? elem[key] : elem[key][i];
      }
    } else {
      idxKeys.forEach(function (idx) {
        for (i = 0; i < cnt; i++) {
          data[fillOffset++] = cnt === 1 ? elem[idx][key] : elem[idx][key][i];
        }
      });
    }
  }

  var attributeInfo = _WebGL_getAttributeInfo(gl, attribute.type);

  if (attributeInfo === undefined) {
    throw new Error('No info available for: ' + attribute.type);
  }

  var dataIdx = 0;
  var dataOffset = attributeInfo.size * attributeInfo.arraySize * elemSize;
  var array = new attributeInfo.type(_WebGL_listLength(mesh.b) * dataOffset);

  _WebGL_listEach(function (elem) {
    dataFill(array, attributeInfo.size * attributeInfo.arraySize, dataIdx, elem, attributes[attribute.name] || attribute.name);
    dataIdx += dataOffset;
  }, mesh.b);

  var buffer = gl.createBuffer();
  _WebGL_log('Created attribute buffer ' + attribute.name);

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
  return buffer;
}

/**
 *  This sets up the binding caching buffers.
 *
 *  We don't actually bind any buffers now except for the indices buffer.
 *  The problem with filling the buffers here is that it is possible to
 *  have a buffer shared between two webgl shaders;
 *  which could have different active attributes. If we bind it here against
 *  a particular program, we might not bind them all. That final bind is now
 *  done right before drawing.
 *
 *  @param {WebGLRenderingContext} gl context
 *  @param {Mesh} mesh a mesh object from Elm
 *  @return {Object} buffer - an object with the following properties
 *  @return {Number} buffer.numIndices
 *  @return {WebGLBuffer|null} buffer.indexBuffer - optional index buffer
 *  @return {Object} buffer.buffers - will be used to buffer attributes
 */
function _WebGL_doBindSetup(gl, mesh) {
  if (mesh.a.indexSize > 0) {
    _WebGL_log('Created index buffer');
    var indexBuffer = gl.createBuffer();
    var indices = _WebGL_makeIndexedBuffer(mesh.c, mesh.a.indexSize);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    return {
      numIndices: indices.length,
      indexBuffer: indexBuffer,
      buffers: {}
    };
  } else {
    return {
      numIndices: mesh.a.elemSize * _WebGL_listLength(mesh.b),
      indexBuffer: null,
      buffers: {}
    };
  }
}

/**
 *  Create an indices array and fill it from indices
 *  based on the size of the index
 *
 *  @param {List} indicesList the list of indices
 *  @param {Number} indexSize the size of the index
 *  @return {Uint16Array} indices
 */
function _WebGL_makeIndexedBuffer(indicesList, indexSize) {
  var indices = new Uint16Array(_WebGL_listLength(indicesList) * indexSize);
  var fillOffset = 0;
  var i;
  _WebGL_listEach(function (elem) {
    if (indexSize === 1) {
      indices[fillOffset++] = elem;
    } else {
      for (i = 0; i < indexSize; i++) {
        indices[fillOffset++] = elem[String.fromCharCode(97 + i)];
      }
    }
  }, indicesList);
  return indices;
}

function _WebGL_getProgID(vertID, fragID) {
  return vertID + '#' + fragID;
}

var _WebGL_drawGL = F2(function (model, domNode) {

  var gl = model.f.gl;

  if (!gl) {
    return domNode;
  }

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
  _WebGL_log('Drawing');

  function drawEntity(entity) {
    if (!entity.d.b.b) {
      return; // Empty list
    }

    var progid;
    var program;
    if (entity.b.id && entity.c.id) {
      progid = _WebGL_getProgID(entity.b.id, entity.c.id);
      program = model.f.programs[progid];
    }

    if (!program) {

      var vshader;
      if (entity.b.id) {
        vshader = model.f.shaders[entity.b.id];
      } else {
        entity.b.id = _WebGL_guid++;
      }

      if (!vshader) {
        vshader = _WebGL_doCompile(gl, entity.b.src, gl.VERTEX_SHADER);
        model.f.shaders[entity.b.id] = vshader;
      }

      var fshader;
      if (entity.c.id) {
        fshader = model.f.shaders[entity.c.id];
      } else {
        entity.c.id = _WebGL_guid++;
      }

      if (!fshader) {
        fshader = _WebGL_doCompile(gl, entity.c.src, gl.FRAGMENT_SHADER);
        model.f.shaders[entity.c.id] = fshader;
      }

      var glProgram = _WebGL_doLink(gl, vshader, fshader);

      program = {
        glProgram: glProgram,
        attributes: Object.assign({}, entity.b.attributes, entity.c.attributes),
        uniformSetters: _WebGL_createUniformSetters(
          gl,
          model,
          glProgram,
          Object.assign({}, entity.b.uniforms, entity.c.uniforms)
        )
      };

      progid = _WebGL_getProgID(entity.b.id, entity.c.id);
      model.f.programs[progid] = program;

    }

    gl.useProgram(program.glProgram);

    _WebGL_setUniforms(program.uniformSetters, entity.e);

    var buffer = model.f.buffers.get(entity.d);

    if (!buffer) {
      buffer = _WebGL_doBindSetup(gl, entity.d);
      model.f.buffers.set(entity.d, buffer);
    }

    var numAttributes = gl.getProgramParameter(program.glProgram, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < numAttributes; i++) {
      var attribute = gl.getActiveAttrib(program.glProgram, i);

      var attribLocation = gl.getAttribLocation(program.glProgram, attribute.name);
      gl.enableVertexAttribArray(attribLocation);

      if (buffer.buffers[attribute.name] === undefined) {
        buffer.buffers[attribute.name] = _WebGL_doBindAttribute(gl, attribute, entity.d, program.attributes);
      }
      var attributeBuffer = buffer.buffers[attribute.name];
      var attributeInfo = _WebGL_getAttributeInfo(gl, attribute.type);

      gl.bindBuffer(gl.ARRAY_BUFFER, attributeBuffer);

      if (attributeInfo.arraySize === 1) {
        gl.vertexAttribPointer(attribLocation, attributeInfo.size, attributeInfo.baseType, false, 0, 0);
      } else {
        // Point to four vec4 in case of mat4
        var offset = attributeInfo.size * 4; // float32 takes 4 bytes
        var stride = offset * attributeInfo.arraySize;
        for (var m = 0; m < attributeInfo.arraySize; m++) {
          gl.enableVertexAttribArray(attribLocation + m);
          gl.vertexAttribPointer(attribLocation + m, attributeInfo.size, attributeInfo.baseType, false, stride, offset * m);
        }
      }
    }
    _WebGL_listEach($elm_explorations$webgl$WebGL$Internal$enableSetting(gl), entity.a);

    if (buffer.indexBuffer) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer.indexBuffer);
      gl.drawElements(entity.d.a.mode, buffer.numIndices, gl.UNSIGNED_SHORT, 0);
    } else {
      gl.drawArrays(entity.d.a.mode, 0, buffer.numIndices);
    }

    _WebGL_listEach($elm_explorations$webgl$WebGL$Internal$disableSetting(model.f), entity.a);

  }

  _WebGL_listEach(drawEntity, model.g);
  return domNode;
});

function _WebGL_createUniformSetters(gl, model, program, uniformsMap) {
  var textureCounter = 0;
  function createUniformSetter(program, uniform) {
    var uniformLocation = gl.getUniformLocation(program, uniform.name);
    switch (uniform.type) {
      case gl.INT:
        return function (value) {
          gl.uniform1i(uniformLocation, value);
        };
      case gl.FLOAT:
        return function (value) {
          gl.uniform1f(uniformLocation, value);
        };
      case gl.FLOAT_VEC2:
        return function (value) {
          gl.uniform2fv(uniformLocation, new Float32Array(value));
        };
      case gl.FLOAT_VEC3:
        return function (value) {
          gl.uniform3fv(uniformLocation, new Float32Array(value));
        };
      case gl.FLOAT_VEC4:
        return function (value) {
          gl.uniform4fv(uniformLocation, new Float32Array(value));
        };
      case gl.FLOAT_MAT4:
        return function (value) {
          gl.uniformMatrix4fv(uniformLocation, false, new Float32Array(value));
        };
      case gl.SAMPLER_2D:
        var currentTexture = textureCounter++;
        return function (texture) {
          gl.activeTexture(gl.TEXTURE0 + currentTexture);
          var tex = model.f.textures.get(texture);
          if (!tex) {
            _WebGL_log('Created texture');
            tex = texture.createTexture(gl);
            model.f.textures.set(texture, tex);
          }
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.uniform1i(uniformLocation, currentTexture);
        };
      case gl.BOOL:
        return function (value) {
          gl.uniform1i(uniformLocation, value);
        };
      default:
        _WebGL_log('Unsupported uniform type: ' + uniform.type);
        return function () { };
    }
  }

  var uniformSetters = {};
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (var i = 0; i < numUniforms; i++) {
    var uniform = gl.getActiveUniform(program, i);
    uniformSetters[uniformsMap[uniform.name] || uniform.name] = createUniformSetter(program, uniform);
  }

  return uniformSetters;
}

function _WebGL_setUniforms(setters, values) {
  Object.keys(values).forEach(function (name) {
    var setter = setters[name];
    if (setter) {
      setter(values[name]);
    }
  });
}

// VIRTUAL-DOM WIDGET

// eslint-disable-next-line no-unused-vars
var _WebGL_toHtml = F3(function (options, factList, entities) {
  return _VirtualDom_custom(
    factList,
    {
      g: entities,
      f: {},
      h: options
    },
    _WebGL_render,
    _WebGL_diff
  );
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableAlpha = F2(function (options, option) {
  options.contextAttributes.alpha = true;
  options.contextAttributes.premultipliedAlpha = option.a;
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableDepth = F2(function (options, option) {
  options.contextAttributes.depth = true;
  options.sceneSettings.push(function (gl) {
    gl.clearDepth(option.a);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableStencil = F2(function (options, option) {
  options.contextAttributes.stencil = true;
  options.sceneSettings.push(function (gl) {
    gl.clearStencil(option.a);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableAntialias = F2(function (options, option) {
  options.contextAttributes.antialias = true;
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableClearColor = F2(function (options, option) {
  options.sceneSettings.push(function (gl) {
    gl.clearColor(option.a, option.b, option.c, option.d);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enablePreserveDrawingBuffer = F2(function (options, option) {
  options.contextAttributes.preserveDrawingBuffer = true;
});

/**
 *  Creates canvas and schedules initial _WebGL_drawGL
 *  @param {Object} model
 *  @param {Object} model.f that may contain the following properties:
           gl, shaders, programs, buffers, textures
 *  @param {List<Option>} model.h list of options coming from Elm
 *  @param {List<Entity>} model.g list of entities coming from Elm
 *  @return {HTMLElement} <canvas> if WebGL is supported, otherwise a <div>
 */
function _WebGL_render(model) {
  var options = {
    contextAttributes: {
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false
    },
    sceneSettings: []
  };

  _WebGL_listEach(function (option) {
    return A2($elm_explorations$webgl$WebGL$Internal$enableOption, options, option);
  }, model.h);

  _WebGL_log('Render canvas');
  var canvas = _VirtualDom_doc.createElement('canvas');
  var gl = canvas.getContext && (
    canvas.getContext('webgl', options.contextAttributes) ||
    canvas.getContext('experimental-webgl', options.contextAttributes)
  );

  if (gl && typeof WeakMap !== 'undefined') {
    options.sceneSettings.forEach(function (sceneSetting) {
      sceneSetting(gl);
    });

    model.f.gl = gl;
    model.f.shaders = [];
    model.f.programs = {};
    model.f.buffers = new WeakMap();
    model.f.textures = new WeakMap();
    // Memorize the initial stencil write mask, because
    // browsers may have different number of stencil bits
    model.f.STENCIL_WRITEMASK = gl.getParameter(gl.STENCIL_WRITEMASK);

    // Render for the first time.
    // This has to be done in animation frame,
    // because the canvas is not in the DOM yet
    _WebGL_rAF(function () {
      return A2(_WebGL_drawGL, model, canvas);
    });

  } else {
    canvas = _VirtualDom_doc.createElement('div');
    canvas.innerHTML = '<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!';
  }

  return canvas;
}

function _WebGL_diff(oldModel, newModel) {
  newModel.f = oldModel.f;
  return _WebGL_drawGL(newModel);
}


// eslint-disable-next-line no-unused-vars
var _Texture_load = F6(function (magnify, mininify, horizontalWrap, verticalWrap, flipY, url) {
  var isMipmap = mininify !== 9728 && mininify !== 9729;
  return _Scheduler_binding(function (callback) {
    var img = new Image();
    function createTexture(gl) {
      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magnify);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mininify);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, horizontalWrap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, verticalWrap);
      if (isMipmap) {
        gl.generateMipmap(gl.TEXTURE_2D);
      }
      gl.bindTexture(gl.TEXTURE_2D, null);
      return texture;
    }
    img.onload = function () {
      var width = img.width;
      var height = img.height;
      var widthPowerOfTwo = (width & (width - 1)) === 0;
      var heightPowerOfTwo = (height & (height - 1)) === 0;
      var isSizeValid = (widthPowerOfTwo && heightPowerOfTwo) || (
        !isMipmap
        && horizontalWrap === 33071 // clamp to edge
        && verticalWrap === 33071
      );
      if (isSizeValid) {
        callback(_Scheduler_succeed({
          $: 0,
          createTexture: createTexture,
          a: width,
          b: height
        }));
      } else {
        callback(_Scheduler_fail(A2(
          $elm_explorations$webgl$WebGL$Texture$SizeError,
          width,
          height
        )));
      }
    };
    img.onerror = function () {
      callback(_Scheduler_fail($elm_explorations$webgl$WebGL$Texture$LoadError));
    };
    if (url.slice(0, 5) !== 'data:') {
      img.crossOrigin = 'Anonymous';
    }
    img.src = url;
  });
});

// eslint-disable-next-line no-unused-vars
var _Texture_size = function (texture) {
  return _Utils_Tuple2(texture.a, texture.b);
};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $author$project$RPG$Game$Delta = function (a) {
	return {$: 'Delta', a: a};
};
var $author$project$RPG$Game$Resize = F2(
	function (a, b) {
		return {$: 'Resize', a: a, b: b};
	});
var $author$project$RPG$Game$Subscription = function (a) {
	return {$: 'Subscription', a: a};
};
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Main$css1 = F2(
	function (cursor, cursor2) {
		return A3(
			$elm$html$Html$node,
			'style',
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('\nhtml,body{\n   cursor:url(' + (cursor + ('), auto;\n   margin:0;\n   padding:0;\n   overflow:hidden;\n   width:100%;\n   height:100%;\n   animation: animate .4s infinite;\n   }\ncanvas{display:block}\n' + (cursor2 + '\n\n'))))
				]));
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$Main$cssGrid = function (_v0) {
	var offset = _v0.offset;
	var cellW = _v0.cellW;
	var cellH = _v0.cellH;
	return A3(
		$elm$html$Html$node,
		'style',
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(
				'\nbody::after {\n    pointer-events: none;\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: ' + ($elm$core$String$fromFloat(cellW) + ('px ' + ($elm$core$String$fromFloat(cellH) + ('px;\n    background-position: calc(' + ($elm$core$String$fromFloat(-offset.x) + ('px + 50%) calc(' + ($elm$core$String$fromFloat(offset.y) + 'px + 50%);\n    background-image: linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px);\n}\n    '))))))))
			]));
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$document = _Browser_document;
var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $author$project$RPG$Util$toScreen = F2(
	function (width, height) {
		return {bottom: (-height) / 2, height: height, left: (-width) / 2, right: width / 2, top: height / 2, width: width};
	});
var $author$project$RPG$Component$Character$Female = F3(
	function (a, b, c) {
		return {$: 'Female', a: a, b: b, c: c};
	});
var $author$project$RPG$Component$Character$FemaleDrake = {$: 'FemaleDrake'};
var $author$project$RPG$Component$Character$FemaleLizard = {$: 'FemaleLizard'};
var $author$project$RPG$Component$Character$FemaleOrc = {$: 'FemaleOrc'};
var $author$project$RPG$Component$Character$Male = F3(
	function (a, b, c) {
		return {$: 'Male', a: a, b: b, c: c};
	});
var $author$project$RPG$Component$Character$MaleDrake = {$: 'MaleDrake'};
var $author$project$RPG$Component$Character$MaleLizard = {$: 'MaleLizard'};
var $author$project$RPG$Component$Character$MaleOrc = {$: 'MaleOrc'};
var $author$project$RPG$Component$Character$Skeleton = {$: 'Skeleton'};
var $author$project$RPG$Component$Character$Zombie = function (a) {
	return {$: 'Zombie', a: a};
};
var $author$project$RPG$World$bodies = function () {
	var zombieParts = {arm: false, brain: false, eye: false, mouth: false, ribs: false};
	return _List_fromArray(
		[
			_Utils_Tuple2(
			$author$project$RPG$Component$Character$MaleDrake,
			{x: -160, y: 0}),
			_Utils_Tuple2(
			$author$project$RPG$Component$Character$MaleLizard,
			{x: -128, y: 0}),
			_Utils_Tuple2(
			$author$project$RPG$Component$Character$MaleOrc,
			{x: -96, y: 0}),
			_Utils_Tuple2(
			A3($author$project$RPG$Component$Character$Male, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
			{x: -64, y: 0}),
			_Utils_Tuple2(
			$author$project$RPG$Component$Character$Skeleton,
			{x: -32, y: 0}),
			_Utils_Tuple2(
			$author$project$RPG$Component$Character$Zombie(zombieParts),
			{x: 0, y: 0}),
			_Utils_Tuple2(
			A3($author$project$RPG$Component$Character$Female, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
			{x: 32, y: 0}),
			_Utils_Tuple2(
			$author$project$RPG$Component$Character$FemaleOrc,
			{x: 64, y: 0}),
			_Utils_Tuple2(
			$author$project$RPG$Component$Character$FemaleLizard,
			{x: 96, y: 0}),
			_Utils_Tuple2(
			$author$project$RPG$Component$Character$FemaleDrake,
			{x: 128, y: 0})
		]);
}();
var $justgook$elm_game_logic$Logic$Component$empty = $elm$core$Array$empty;
var $author$project$RPG$Component$Action$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $author$project$RPG$Component$Ai$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $author$project$RPG$Component$Animation$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $author$project$RPG$Component$Character$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $author$project$RPG$Component$Chat$empty = {active: true, input: '.add c_man', messages: _List_Nil, messages_: _List_Nil};
var $author$project$RPG$Component$Fx$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $justgook$alt_linear_algebra$AltMath$Vector2$Vec2 = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var $author$project$RPG$Component$Util$Matrix$Matrix = function (a) {
	return {$: 'Matrix', a: a};
};
var $elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			$elm$core$Array$initialize,
			n,
			function (_v0) {
				return e;
			});
	});
var $author$project$RPG$Component$Util$Matrix$repeat = F3(
	function (h, w, value) {
		return $author$project$RPG$Component$Util$Matrix$Matrix(
			{
				h: h,
				mvect: A2($elm$core$Array$repeat, h * w, value),
				w: w
			});
	});
var $author$project$RPG$Component$Grid$empty = F2(
	function (w, h) {
		return {
			cellH: 32,
			cellW: 32,
			collision: A3($author$project$RPG$Component$Util$Matrix$repeat, h, w, _Utils_Tuple0),
			offset: A2($justgook$alt_linear_algebra$AltMath$Vector2$Vec2, 0, 0)
		};
	});
var $author$project$RPG$Component$IdSource$empty = function (next) {
	return {next: next, pool: _List_Nil};
};
var $author$project$RPG$Component$Name$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $author$project$RPG$Component$Particle$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $author$project$RPG$Component$Path$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $author$project$RPG$Component$Util$Vec2$zero = A2($justgook$alt_linear_algebra$AltMath$Vector2$Vec2, 0, 0);
var $author$project$RPG$Component$Pointer$empty = {down: false, p: $author$project$RPG$Component$Util$Vec2$zero};
var $author$project$RPG$Component$Position$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $author$project$RPG$Component$Server$Script$Char$c_man = {
	anim: 0,
	body: 1,
	color: 0,
	dex: 100,
	dir: 0,
	fame: 0,
	hits: 100,
	home: {x: 0, y: 0, z: 0},
	_int: 100,
	karma: 0,
	mana: 100,
	name: 'a Man',
	oBody: 1,
	p: {x: 0, y: 0, z: 0},
	stam: 100,
	str: 100
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$String$fromList = _String_fromList;
var $elm$core$Basics$modBy = _Basics_modBy;
var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return _Utils_chr('0');
			case 1:
				return _Utils_chr('1');
			case 2:
				return _Utils_chr('2');
			case 3:
				return _Utils_chr('3');
			case 4:
				return _Utils_chr('4');
			case 5:
				return _Utils_chr('5');
			case 6:
				return _Utils_chr('6');
			case 7:
				return _Utils_chr('7');
			case 8:
				return _Utils_chr('8');
			case 9:
				return _Utils_chr('9');
			case 10:
				return _Utils_chr('a');
			case 11:
				return _Utils_chr('b');
			case 12:
				return _Utils_chr('c');
			case 13:
				return _Utils_chr('d');
			case 14:
				return _Utils_chr('e');
			case 15:
				return _Utils_chr('f');
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2($elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var $rtfeldman$elm_hex$Hex$toString = function (num) {
	return $elm$core$String$fromList(
		(num < 0) ? A2(
			$elm$core$List$cons,
			_Utils_chr('-'),
			A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var $author$project$RPG$Component$Server$spawnChar = F2(
	function (c, w) {
		return _Utils_update(
			w,
			{
				_char: A3(
					$elm$core$Dict$insert,
					$rtfeldman$elm_hex$Hex$toString(w.next),
					{anim: c.anim, body: c.body, color: c.color, dex: c.dex, dir: c.dir, fame: c.fame, hits: c.hits, home: c.home, _int: c._int, karma: c.karma, links: $elm$core$Dict$empty, mana: c.mana, name: c.name, oBody: c.oBody, p: c.p, stam: c.stam, stats: $elm$core$Dict$empty, str: c.str, tags: $elm$core$Set$empty},
					w._char),
				next: w.next + 1
			});
	});
var $author$project$RPG$Component$Server$empty = A2(
	$author$project$RPG$Component$Server$spawnChar,
	$author$project$RPG$Component$Server$Script$Char$c_man,
	{_char: $elm$core$Dict$empty, item: $elm$core$Dict$empty, next: 1});
var $author$project$RPG$Asset$Cursor$default = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAAAXNSR0IArs4c6QAAAL1JREFUKJGVkrENgzAQAI9XJOhYAdFYSokQC3gIpqDILJmC1CnSUKZD9DSIFejoSOXIgAXmm3/Jf3+29aRJvnAhBOAKJACf990bElP4QgIw1x0AVRGeQjeAqMyY6w6tAGKe5MswtsGhISozALSaDk1iG3yglcEHWhlcsYV2bzADmj5Gq2kHCUDTx3+DyVpNTkjMoW2wITuGsd0bmj525sfrCxCIPcFcwc52M0CQJvlSFaHzh7bNpjhbuNWK/ADDZWjuLvOJVwAAAABJRU5ErkJggg==';
var $author$project$RPG$Asset$Cursor$target1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAAB3RJTUUH3wUCCSMoyZintQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMA/wD/AP83WBt9AAAAW0lEQVR4nGP4jwPYGQVAEC4FQMCAR/OXbx9GNZOiefOpfWRqJgZQphmeGPCnCkxlQMTEwMCw7cgCOCqdkceADQDFkZUBEUiUEpsHMMBwSVAUz0M3bQ+cZoJlGADcU0E1eyRlIwAAAABJRU5ErkJggg==';
var $author$project$RPG$Asset$Cursor$target2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAIAAAAS8MqlAAAAB3RJTUUH3wUCBDIh60WvUgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMA/wD/AP83WBt9AAAAWElEQVR4nGP4jw3YGQVAEFZZIGDApe3Ltw+j2lC1bT61j2RtBAEDPIpwxRWmAiBiYmBg2HZkARyVzshjQAVAEWQFQAQSJc82cv2GVZTMkBwqqYS+2vDnbgAgwF4KgRldLwAAAABJRU5ErkJggg==';
var $author$project$RPG$Asset$Cursor$target = '@keyframes animate {\n  0% {cursor:url(' + ($author$project$RPG$Asset$Cursor$target1 + (') 4 4, auto; }\n  100% { cursor:url(' + ($author$project$RPG$Asset$Cursor$target2 + ') 3 3, auto; }\n}')));
var $author$project$RPG$Component$Ui$empty = {cursor: $author$project$RPG$Asset$Cursor$default, cursor2: $author$project$RPG$Asset$Cursor$target, inventoryOpen: true};
var $author$project$RPG$Component$Velocity$empty = $justgook$elm_game_logic$Logic$Component$empty;
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $justgook$elm_game_logic$Logic$Entity$remove = F2(
	function (spec, _v0) {
		var entityID = _v0.a;
		var world = _v0.b;
		return _Utils_Tuple2(
			entityID,
			A2(
				spec.set,
				A3(
					$elm$core$Array$set,
					entityID,
					$elm$core$Maybe$Nothing,
					spec.get(world)),
				world));
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $justgook$elm_game_logic$Logic$Entity$create = F2(
	function (id, world) {
		return _Utils_Tuple2(id, world);
	});
var $author$project$RPG$Component$IdSource$get = function ($) {
	return $.id;
};
var $author$project$RPG$Component$IdSource$set = F2(
	function (comps, world) {
		return _Utils_update(
			world,
			{id: comps});
	});
var $author$project$RPG$Component$IdSource$create = function (world) {
	var comp = $author$project$RPG$Component$IdSource$get(world);
	var next = comp.next;
	var pool = comp.pool;
	if (pool.b) {
		var id = pool.a;
		var rest = pool.b;
		return A2(
			$justgook$elm_game_logic$Logic$Entity$create,
			id,
			A2(
				$author$project$RPG$Component$IdSource$set,
				_Utils_update(
					comp,
					{pool: rest}),
				world));
	} else {
		return A2(
			$justgook$elm_game_logic$Logic$Entity$create,
			next,
			A2(
				$author$project$RPG$Component$IdSource$set,
				_Utils_update(
					comp,
					{next: next + 1}),
				world));
	}
};
var $author$project$RPG$Component$Ai$spawn = _Utils_Tuple0;
var $author$project$RPG$Component$Util$Direction$South = {$: 'South'};
var $author$project$RPG$Component$Animation$Walk = {$: 'Walk'};
var $author$project$RPG$Component$Animation$spawn = {dir: $author$project$RPG$Component$Util$Direction$South, frame: 0, pose: $author$project$RPG$Component$Animation$Walk, speed: 0.01, time: 0};
var $author$project$RPG$Component$Name$finals = _List_fromArray(
	['b', 'd', 'f', 'g', 'ge', 'dge', 'ck', 'x', 'ks', 'cks', 'l', 'm', 'mb', 'n', 'p', 'r', 's', 'se', 'ce', 't', 'v', 've', 'w', 'we', 'y', 'z', 'th', 'the', 'ch', 'tch', 'sh', 'sch', 'ng']);
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$andThen = F2(
	function (callback, _v0) {
		var genA = _v0.a;
		return $elm$random$Random$Generator(
			function (seed) {
				var _v1 = genA(seed);
				var result = _v1.a;
				var newSeed = _v1.b;
				var _v2 = callback(result);
				var genB = _v2.a;
				return genB(newSeed);
			});
	});
var $author$project$RPG$Component$Name$foldl2 = F3(
	function (acc, a, b) {
		foldl2:
		while (true) {
			var _v0 = _Utils_Tuple2(a, b);
			_v0$2:
			while (true) {
				if (_v0.a.b) {
					if (!_v0.a.b.b) {
						var _v1 = _v0.a;
						var a1 = _v1.a;
						return _Utils_ap(acc, a1);
					} else {
						if (_v0.b.b) {
							var _v2 = _v0.a;
							var a1 = _v2.a;
							var rest1 = _v2.b;
							var _v3 = _v0.b;
							var b1 = _v3.a;
							var rest2 = _v3.b;
							var $temp$acc = _Utils_ap(
								acc,
								_Utils_ap(a1, b1)),
								$temp$a = rest1,
								$temp$b = rest2;
							acc = $temp$acc;
							a = $temp$a;
							b = $temp$b;
							continue foldl2;
						} else {
							break _v0$2;
						}
					}
				} else {
					break _v0$2;
				}
			}
			return acc;
		}
	});
var $author$project$RPG$Component$Name$initials = _List_fromArray(
	['b', 'bl', 'br', 'bh', 'd', 'dr', 'f', 'fr', 'fl', 'ph', 'g', 'gr', 'gl', 'gh', 'h', 'j', 'c', 'k', 'ch', 'cl', 'cr', 'chr', 'l', 'm', 'n', 'kn', 'gn', 'p', 'pr', 'pl', 'r', 'wr', 's', 'ps', 'sc', 'sch', 't', 'pt', 'v', 'w', 'wh', 'y', 'z', 'th', 'ch', 'sh', 'qu']);
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $elm$random$Random$listHelp = F4(
	function (revList, n, gen, seed) {
		listHelp:
		while (true) {
			if (n < 1) {
				return _Utils_Tuple2(revList, seed);
			} else {
				var _v0 = gen(seed);
				var value = _v0.a;
				var newSeed = _v0.b;
				var $temp$revList = A2($elm$core$List$cons, value, revList),
					$temp$n = n - 1,
					$temp$gen = gen,
					$temp$seed = newSeed;
				revList = $temp$revList;
				n = $temp$n;
				gen = $temp$gen;
				seed = $temp$seed;
				continue listHelp;
			}
		}
	});
var $elm$random$Random$list = F2(
	function (n, _v0) {
		var gen = _v0.a;
		return $elm$random$Random$Generator(
			function (seed) {
				return A4($elm$random$Random$listHelp, _List_Nil, n, gen, seed);
			});
	});
var $elm$random$Random$map2 = F3(
	function (func, _v0, _v1) {
		var genA = _v0.a;
		var genB = _v1.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v2 = genA(seed0);
				var a = _v2.a;
				var seed1 = _v2.b;
				var _v3 = genB(seed1);
				var b = _v3.a;
				var seed2 = _v3.b;
				return _Utils_Tuple2(
					A2(func, a, b),
					seed2);
			});
	});
var $author$project$RPG$Component$Name$nucleii = _List_fromArray(
	['a', 'e', 'i', 'o', 'u', 'ae', 'ee', 'ie', 'oe', 'ue', 'oo', 'au', 'oi', 'ai', 'ea', 'y', 'ye', 'ou', 'oy', 'ey', 'uy', 'ay']);
var $elm$random$Random$addOne = function (value) {
	return _Utils_Tuple2(1, value);
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$random$Random$float = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var seed1 = $elm$random$Random$next(seed0);
				var range = $elm$core$Basics$abs(b - a);
				var n1 = $elm$random$Random$peel(seed1);
				var n0 = $elm$random$Random$peel(seed0);
				var lo = (134217727 & n1) * 1.0;
				var hi = (67108863 & n0) * 1.0;
				var val = ((hi * 134217728.0) + lo) / 9007199254740992.0;
				var scaled = (val * range) + a;
				return _Utils_Tuple2(
					scaled,
					$elm$random$Random$next(seed1));
			});
	});
var $elm$random$Random$getByWeight = F3(
	function (_v0, others, countdown) {
		getByWeight:
		while (true) {
			var weight = _v0.a;
			var value = _v0.b;
			if (!others.b) {
				return value;
			} else {
				var second = others.a;
				var otherOthers = others.b;
				if (_Utils_cmp(
					countdown,
					$elm$core$Basics$abs(weight)) < 1) {
					return value;
				} else {
					var $temp$_v0 = second,
						$temp$others = otherOthers,
						$temp$countdown = countdown - $elm$core$Basics$abs(weight);
					_v0 = $temp$_v0;
					others = $temp$others;
					countdown = $temp$countdown;
					continue getByWeight;
				}
			}
		}
	});
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v1 = genA(seed0);
				var a = _v1.a;
				var seed1 = _v1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $elm$random$Random$weighted = F2(
	function (first, others) {
		var normalize = function (_v0) {
			var weight = _v0.a;
			return $elm$core$Basics$abs(weight);
		};
		var total = normalize(first) + $elm$core$List$sum(
			A2($elm$core$List$map, normalize, others));
		return A2(
			$elm$random$Random$map,
			A2($elm$random$Random$getByWeight, first, others),
			A2($elm$random$Random$float, 0, total));
	});
var $elm$random$Random$uniform = F2(
	function (value, valueList) {
		return A2(
			$elm$random$Random$weighted,
			$elm$random$Random$addOne(value),
			A2($elm$core$List$map, $elm$random$Random$addOne, valueList));
	});
var $author$project$RPG$Component$Name$gen3 = function (aa) {
	return A2(
		$elm$random$Random$andThen,
		function (a) {
			return A3(
				$elm$random$Random$map2,
				$author$project$RPG$Component$Name$foldl2(''),
				A2(
					$elm$random$Random$list,
					a,
					A2($elm$random$Random$uniform, 'a', $author$project$RPG$Component$Name$nucleii)),
				A2(
					$elm$random$Random$list,
					a,
					A2($elm$random$Random$uniform, 'a', $author$project$RPG$Component$Name$initials)));
		},
		A2($elm$random$Random$int, 1, aa));
};
var $elm$random$Random$map3 = F4(
	function (func, _v0, _v1, _v2) {
		var genA = _v0.a;
		var genB = _v1.a;
		var genC = _v2.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v3 = genA(seed0);
				var a = _v3.a;
				var seed1 = _v3.b;
				var _v4 = genB(seed1);
				var b = _v4.a;
				var seed2 = _v4.b;
				var _v5 = genC(seed2);
				var c = _v5.a;
				var seed3 = _v5.b;
				return _Utils_Tuple2(
					A3(func, a, b, c),
					seed3);
			});
	});
var $elm$core$String$toUpper = _String_toUpper;
var $author$project$RPG$Component$Name$up = function (str) {
	return _Utils_ap(
		$elm$core$String$toUpper(
			A2($elm$core$String$left, 1, str)),
		A2($elm$core$String$dropLeft, 1, str));
};
var $author$project$RPG$Component$Name$gen2 = function (aa) {
	return A4(
		$elm$random$Random$map3,
		F3(
			function (a, b, c) {
				return $author$project$RPG$Component$Name$up(
					_Utils_ap(
						a,
						_Utils_ap(b, c)));
			}),
		A2($elm$random$Random$uniform, 'b', $author$project$RPG$Component$Name$initials),
		$author$project$RPG$Component$Name$gen3(aa),
		A2($elm$random$Random$uniform, 'b', $author$project$RPG$Component$Name$finals));
};
var $author$project$RPG$Component$Name$gen1 = A3(
	$elm$random$Random$map2,
	F2(
		function (a, b) {
			return a + (' ' + b);
		}),
	$author$project$RPG$Component$Name$gen2(2),
	$author$project$RPG$Component$Name$gen2(3));
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $author$project$RPG$Component$Name$spawn = function (seed) {
	return A2($elm$random$Random$step, $author$project$RPG$Component$Name$gen1, seed);
};
var $author$project$RPG$Component$Particle$Single = function (a) {
	return {$: 'Single', a: a};
};
var $author$project$RPG$Component$Particle$spawn = $author$project$RPG$Component$Particle$Single(100);
var $author$project$RPG$Component$Position$spawn = function (_v0) {
	var x = _v0.x;
	var y = _v0.y;
	return {x: x, y: y};
};
var $author$project$RPG$Component$Character$spawn1 = function (body) {
	return {body: body, layers: 0};
};
var $justgook$elm_game_logic$Logic$Component$Spec = F2(
	function (get, set) {
		return {get: get, set: set};
	});
var $author$project$RPG$Component$Ai$spec = A2(
	$justgook$elm_game_logic$Logic$Component$Spec,
	function ($) {
		return $.ai;
	},
	F2(
		function (comps, world) {
			return _Utils_update(
				world,
				{ai: comps});
		}));
var $author$project$RPG$Component$Animation$spec = A2(
	$justgook$elm_game_logic$Logic$Component$Spec,
	function ($) {
		return $.anim;
	},
	F2(
		function (comps, world) {
			return _Utils_update(
				world,
				{anim: comps});
		}));
var $author$project$RPG$Component$Character$spec = A2(
	$justgook$elm_game_logic$Logic$Component$Spec,
	function ($) {
		return $._char;
	},
	F2(
		function (comps, world) {
			return _Utils_update(
				world,
				{_char: comps});
		}));
var $author$project$RPG$Component$Name$spec = A2(
	$justgook$elm_game_logic$Logic$Component$Spec,
	function ($) {
		return $.name;
	},
	F2(
		function (comps, world) {
			return _Utils_update(
				world,
				{name: comps});
		}));
var $author$project$RPG$Component$Particle$spec = A2(
	$justgook$elm_game_logic$Logic$Component$Spec,
	function ($) {
		return $.particle;
	},
	F2(
		function (comps, world) {
			return _Utils_update(
				world,
				{particle: comps});
		}));
var $author$project$RPG$Component$Path$spec = A2(
	$justgook$elm_game_logic$Logic$Component$Spec,
	function ($) {
		return $.path;
	},
	F2(
		function (comps, world) {
			return _Utils_update(
				world,
				{path: comps});
		}));
var $author$project$RPG$Component$Position$spec = A2(
	$justgook$elm_game_logic$Logic$Component$Spec,
	function ($) {
		return $.p;
	},
	F2(
		function (comps, world) {
			return _Utils_update(
				world,
				{p: comps});
		}));
var $author$project$RPG$Component$Velocity$spec = A2(
	$justgook$elm_game_logic$Logic$Component$Spec,
	function ($) {
		return $.v;
	},
	F2(
		function (comps, world) {
			return _Utils_update(
				world,
				{v: comps});
		}));
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$appendHelpTree = F2(
	function (toAppend, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		var itemsToAppend = $elm$core$Elm$JsArray$length(toAppend);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(tail)) - itemsToAppend;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, tail, toAppend);
		var newArray = A2($elm$core$Array$unsafeReplaceTail, appended, array);
		if (notAppended < 0) {
			var nextTail = A3($elm$core$Elm$JsArray$slice, notAppended, itemsToAppend, toAppend);
			return A2($elm$core$Array$unsafeReplaceTail, nextTail, newArray);
		} else {
			return newArray;
		}
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$builderFromArray = function (_v0) {
	var len = _v0.a;
	var tree = _v0.c;
	var tail = _v0.d;
	var helper = F2(
		function (node, acc) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
			} else {
				return A2($elm$core$List$cons, node, acc);
			}
		});
	return {
		nodeList: A3($elm$core$Elm$JsArray$foldl, helper, _List_Nil, tree),
		nodeListSize: (len / $elm$core$Array$branchFactor) | 0,
		tail: tail
	};
};
var $elm$core$Array$append = F2(
	function (a, _v0) {
		var aTail = a.d;
		var bLen = _v0.a;
		var bTree = _v0.c;
		var bTail = _v0.d;
		if (_Utils_cmp(bLen, $elm$core$Array$branchFactor * 4) < 1) {
			var foldHelper = F2(
				function (node, array) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, array, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpTree, leaf, array);
					}
				});
			return A2(
				$elm$core$Array$appendHelpTree,
				bTail,
				A3($elm$core$Elm$JsArray$foldl, foldHelper, a, bTree));
		} else {
			var foldHelper = F2(
				function (node, builder) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, builder, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpBuilder, leaf, builder);
					}
				});
			return A2(
				$elm$core$Array$builderToArray,
				true,
				A2(
					$elm$core$Array$appendHelpBuilder,
					bTail,
					A3(
						$elm$core$Elm$JsArray$foldl,
						foldHelper,
						$elm$core$Array$builderFromArray(a),
						bTree)));
		}
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $justgook$elm_game_logic$Logic$Component$spawn = F3(
	function (id, value, components) {
		return ((id - $elm$core$Array$length(components)) < 0) ? A3(
			$elm$core$Array$set,
			id,
			$elm$core$Maybe$Just(value),
			components) : A2(
			$elm$core$Array$push,
			$elm$core$Maybe$Just(value),
			A2(
				$elm$core$Array$append,
				components,
				A2(
					$elm$core$Array$repeat,
					id - $elm$core$Array$length(components),
					$elm$core$Maybe$Nothing)));
	});
var $justgook$elm_game_logic$Logic$Entity$with = F2(
	function (_v0, _v1) {
		var spec = _v0.a;
		var component = _v0.b;
		var entityID = _v1.a;
		var world = _v1.b;
		var updatedComponents = A3(
			$justgook$elm_game_logic$Logic$Component$spawn,
			entityID,
			component,
			spec.get(world));
		var updatedWorld = A2(spec.set, updatedComponents, world);
		return _Utils_Tuple2(entityID, updatedWorld);
	});
var $author$project$RPG$World$spawn = function (_v0) {
	var body = _v0.a;
	var p = _v0.b;
	return A2(
		$elm$core$Basics$composeR,
		$author$project$RPG$Component$IdSource$create,
		A2(
			$elm$core$Basics$composeR,
			$justgook$elm_game_logic$Logic$Entity$with(
				_Utils_Tuple2(
					$author$project$RPG$Component$Character$spec,
					$author$project$RPG$Component$Character$spawn1(body))),
			A2(
				$elm$core$Basics$composeR,
				$justgook$elm_game_logic$Logic$Entity$with(
					_Utils_Tuple2($author$project$RPG$Component$Animation$spec, $author$project$RPG$Component$Animation$spawn)),
				A2(
					$elm$core$Basics$composeR,
					$justgook$elm_game_logic$Logic$Entity$with(
						_Utils_Tuple2(
							$author$project$RPG$Component$Position$spec,
							$author$project$RPG$Component$Position$spawn(p))),
					A2(
						$elm$core$Basics$composeR,
						$justgook$elm_game_logic$Logic$Entity$with(
							_Utils_Tuple2($author$project$RPG$Component$Velocity$spec, $author$project$RPG$Component$Util$Vec2$zero)),
						A2(
							$elm$core$Basics$composeR,
							$justgook$elm_game_logic$Logic$Entity$with(
								_Utils_Tuple2($author$project$RPG$Component$Path$spec, _List_Nil)),
							A2(
								$elm$core$Basics$composeR,
								$justgook$elm_game_logic$Logic$Entity$with(
									_Utils_Tuple2($author$project$RPG$Component$Ai$spec, $author$project$RPG$Component$Ai$spawn)),
								A2(
									$elm$core$Basics$composeR,
									$justgook$elm_game_logic$Logic$Entity$with(
										_Utils_Tuple2($author$project$RPG$Component$Particle$spec, $author$project$RPG$Component$Particle$spawn)),
									A2(
										$elm$core$Basics$composeR,
										function (_v1) {
											var id = _v1.a;
											var w = _v1.b;
											return A2(
												$justgook$elm_game_logic$Logic$Entity$with,
												_Utils_Tuple2(
													$author$project$RPG$Component$Name$spec,
													$author$project$RPG$Component$Name$spawn(
														$elm$random$Random$initialSeed(id)).a),
												_Utils_Tuple2(id, w));
										},
										$elm$core$Tuple$second)))))))));
};
var $author$project$RPG$World$world = function () {
	var you = 5;
	return A2(
		$justgook$elm_game_logic$Logic$Entity$remove,
		$author$project$RPG$Component$Ai$spec,
		A2(
			$elm$core$Tuple$pair,
			you,
			function (w) {
				return A3($elm$core$List$foldl, $author$project$RPG$World$spawn, w, $author$project$RPG$World$bodies);
			}(
				{
					action: $author$project$RPG$Component$Action$empty,
					ai: $author$project$RPG$Component$Ai$empty,
					anim: $author$project$RPG$Component$Animation$empty,
					_char: $author$project$RPG$Component$Character$empty,
					chat: $author$project$RPG$Component$Chat$empty,
					debug: false,
					fx: $author$project$RPG$Component$Fx$empty,
					grid: A2($author$project$RPG$Component$Grid$empty, 10, 10),
					id: $author$project$RPG$Component$IdSource$empty(0),
					mouse: $author$project$RPG$Component$Pointer$empty,
					name: $author$project$RPG$Component$Name$empty,
					p: $author$project$RPG$Component$Position$empty,
					particle: $author$project$RPG$Component$Particle$empty,
					path: $author$project$RPG$Component$Path$empty,
					seed: $elm$random$Random$initialSeed(42),
					server: $author$project$RPG$Component$Server$empty,
					ui: $author$project$RPG$Component$Ui$empty,
					v: $author$project$RPG$Component$Velocity$empty,
					you: you
				}))).b;
}();
var $author$project$Main$initModel = {
	entities: _List_Nil,
	screen: A2($author$project$RPG$Util$toScreen, 2, 2),
	textures: {done: $elm$core$Dict$empty, loading: $elm$core$Set$empty},
	world: $author$project$RPG$World$world
};
var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
var $elm$virtual_dom$VirtualDom$lazy2 = _VirtualDom_lazy2;
var $elm$html$Html$Lazy$lazy2 = $elm$virtual_dom$VirtualDom$lazy2;
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 'Delta', a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {oldTime: oldTime, request: request, subs: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$browser$Browser$AnimationManager$now = _Browser_now(_Utils_Tuple0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(_Utils_Tuple0);
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.request;
		var oldTime = _v0.oldTime;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 'Nothing') {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.subs;
		var oldTime = _v0.oldTime;
		var send = function (sub) {
			if (sub.$ === 'Time') {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (sub.$ === 'Time') {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrameDelta = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Delta(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrameDelta = $elm$browser$Browser$AnimationManager$onAnimationFrameDelta;
var $elm$browser$Browser$Events$Window = {$: 'Window'};
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Window,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$onKeyUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keyup');
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $elm$core$Basics$round = _Basics_round;
var $justgook$webgl_playground$Playground$colorClamp = function (n) {
	return A3(
		$elm$core$Basics$clamp,
		0,
		255,
		$elm$core$Basics$round(n));
};
var $elm_explorations$linear_algebra$Math$Vector3$vec3 = _MJS_v3;
var $justgook$webgl_playground$Playground$rgb = F3(
	function (r, g, b) {
		return A3(
			$elm_explorations$linear_algebra$Math$Vector3$vec3,
			$justgook$webgl_playground$Playground$colorClamp(r) / 255,
			$justgook$webgl_playground$Playground$colorClamp(g) / 255,
			$justgook$webgl_playground$Playground$colorClamp(b) / 255);
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $author$project$RPG$Asset$Text$letters = $elm$core$Dict$fromList(
	A2(
		$elm$core$List$indexedMap,
		F2(
			function (a, b) {
				return _Utils_Tuple2(b, a);
			}),
		$elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[
						_Utils_chr('\u00A0'),
						_Utils_chr('!'),
						_Utils_chr('\"'),
						_Utils_chr('#'),
						_Utils_chr('$'),
						_Utils_chr('%'),
						_Utils_chr('&'),
						_Utils_chr('\''),
						_Utils_chr('('),
						_Utils_chr(')'),
						_Utils_chr('*'),
						_Utils_chr('+'),
						_Utils_chr(','),
						_Utils_chr('-'),
						_Utils_chr('.'),
						_Utils_chr('/'),
						_Utils_chr('0'),
						_Utils_chr('1')
					]),
					_List_fromArray(
					[
						_Utils_chr('2'),
						_Utils_chr('3'),
						_Utils_chr('4'),
						_Utils_chr('5'),
						_Utils_chr('6'),
						_Utils_chr('7'),
						_Utils_chr('8'),
						_Utils_chr('9'),
						_Utils_chr(':'),
						_Utils_chr(';'),
						_Utils_chr('<'),
						_Utils_chr('='),
						_Utils_chr('>'),
						_Utils_chr('?'),
						_Utils_chr('@'),
						_Utils_chr('A'),
						_Utils_chr('B'),
						_Utils_chr('C'),
						_Utils_chr(' ')
					]),
					_List_fromArray(
					[
						_Utils_chr('D'),
						_Utils_chr('E'),
						_Utils_chr('F'),
						_Utils_chr('G'),
						_Utils_chr('H'),
						_Utils_chr('I'),
						_Utils_chr('J'),
						_Utils_chr('K'),
						_Utils_chr('L'),
						_Utils_chr('M'),
						_Utils_chr('N'),
						_Utils_chr('O'),
						_Utils_chr('P'),
						_Utils_chr('Q'),
						_Utils_chr('R'),
						_Utils_chr('S'),
						_Utils_chr('T'),
						_Utils_chr('U')
					]),
					_List_fromArray(
					[
						_Utils_chr('V'),
						_Utils_chr('W'),
						_Utils_chr('X'),
						_Utils_chr('Y'),
						_Utils_chr('Z'),
						_Utils_chr('['),
						_Utils_chr('\\'),
						_Utils_chr(']'),
						_Utils_chr('^'),
						_Utils_chr('_'),
						_Utils_chr('`'),
						_Utils_chr('a'),
						_Utils_chr('b'),
						_Utils_chr('c'),
						_Utils_chr('d'),
						_Utils_chr('e'),
						_Utils_chr('f'),
						_Utils_chr('g')
					]),
					_List_fromArray(
					[
						_Utils_chr('h'),
						_Utils_chr('i'),
						_Utils_chr('j'),
						_Utils_chr('k'),
						_Utils_chr('l'),
						_Utils_chr('m'),
						_Utils_chr('n'),
						_Utils_chr('o'),
						_Utils_chr('p'),
						_Utils_chr('q'),
						_Utils_chr('r'),
						_Utils_chr('s'),
						_Utils_chr('t'),
						_Utils_chr('u'),
						_Utils_chr('v'),
						_Utils_chr('w'),
						_Utils_chr('x'),
						_Utils_chr('y')
					]),
					_List_fromArray(
					[
						_Utils_chr('z'),
						_Utils_chr('{'),
						_Utils_chr('|'),
						_Utils_chr('}'),
						_Utils_chr('~')
					])
				]))));
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$RPG$Asset$Text$getIndex = function (c) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		A2($elm$core$Dict$get, c, $author$project$RPG$Asset$Text$letters));
};
var $justgook$webgl_shape$WebGL$Shape2d$Shape2d = function (a) {
	return {$: 'Shape2d', a: a};
};
var $justgook$webgl_shape$WebGL$Shape2d$Textured = F2(
	function (a, b) {
		return {$: 'Textured', a: a, b: b};
	});
var $justgook$webgl_shape$WebGL$Shape2d$Form = F3(
	function (a, b, c) {
		return {$: 'Form', a: a, b: b, c: c};
	});
var $elm_explorations$webgl$WebGL$Internal$Blend = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return {$: 'Blend', a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i, j: j};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $elm_explorations$webgl$WebGL$Settings$Blend$custom = function (_v0) {
	var r = _v0.r;
	var g = _v0.g;
	var b = _v0.b;
	var a = _v0.a;
	var color = _v0.color;
	var alpha = _v0.alpha;
	var expand = F2(
		function (_v1, _v2) {
			var eq1 = _v1.a;
			var f11 = _v1.b;
			var f12 = _v1.c;
			var eq2 = _v2.a;
			var f21 = _v2.b;
			var f22 = _v2.c;
			return $elm_explorations$webgl$WebGL$Internal$Blend(eq1)(f11)(f12)(eq2)(f21)(f22)(r)(g)(b)(a);
		});
	return A2(expand, color, alpha);
};
var $elm_explorations$webgl$WebGL$Settings$Blend$Blender = F3(
	function (a, b, c) {
		return {$: 'Blender', a: a, b: b, c: c};
	});
var $elm_explorations$webgl$WebGL$Settings$Blend$customAdd = F2(
	function (_v0, _v1) {
		var factor1 = _v0.a;
		var factor2 = _v1.a;
		return A3($elm_explorations$webgl$WebGL$Settings$Blend$Blender, 32774, factor1, factor2);
	});
var $elm_explorations$webgl$WebGL$Settings$Blend$add = F2(
	function (factor1, factor2) {
		return $elm_explorations$webgl$WebGL$Settings$Blend$custom(
			{
				a: 0,
				alpha: A2($elm_explorations$webgl$WebGL$Settings$Blend$customAdd, factor1, factor2),
				b: 0,
				color: A2($elm_explorations$webgl$WebGL$Settings$Blend$customAdd, factor1, factor2),
				g: 0,
				r: 0
			});
	});
var $elm_explorations$webgl$WebGL$Internal$ColorMask = F4(
	function (a, b, c, d) {
		return {$: 'ColorMask', a: a, b: b, c: c, d: d};
	});
var $elm_explorations$webgl$WebGL$Settings$colorMask = $elm_explorations$webgl$WebGL$Internal$ColorMask;
var $elm_explorations$webgl$WebGL$Settings$Blend$Factor = function (a) {
	return {$: 'Factor', a: a};
};
var $elm_explorations$webgl$WebGL$Settings$Blend$oneMinusSrcAlpha = $elm_explorations$webgl$WebGL$Settings$Blend$Factor(771);
var $elm_explorations$webgl$WebGL$Settings$Blend$srcAlpha = $elm_explorations$webgl$WebGL$Settings$Blend$Factor(770);
var $author$project$WebGL$Ui$Internal$defaultEntitySettings = _List_fromArray(
	[
		A2($elm_explorations$webgl$WebGL$Settings$Blend$add, $elm_explorations$webgl$WebGL$Settings$Blend$srcAlpha, $elm_explorations$webgl$WebGL$Settings$Blend$oneMinusSrcAlpha),
		A4($elm_explorations$webgl$WebGL$Settings$colorMask, true, true, true, false)
	]);
var $elm_explorations$webgl$WebGL$Internal$disableSetting = F2(
	function (cache, setting) {
		switch (setting.$) {
			case 'Blend':
				return _WebGL_disableBlend(cache);
			case 'DepthTest':
				return _WebGL_disableDepthTest(cache);
			case 'StencilTest':
				return _WebGL_disableStencilTest(cache);
			case 'Scissor':
				return _WebGL_disableScissor(cache);
			case 'ColorMask':
				return _WebGL_disableColorMask(cache);
			case 'CullFace':
				return _WebGL_disableCullFace(cache);
			case 'PolygonOffset':
				return _WebGL_disablePolygonOffset(cache);
			case 'SampleCoverage':
				return _WebGL_disableSampleCoverage(cache);
			default:
				return _WebGL_disableSampleAlphaToCoverage(cache);
		}
	});
var $elm_explorations$webgl$WebGL$Internal$enableOption = F2(
	function (ctx, option) {
		switch (option.$) {
			case 'Alpha':
				return A2(_WebGL_enableAlpha, ctx, option);
			case 'Depth':
				return A2(_WebGL_enableDepth, ctx, option);
			case 'Stencil':
				return A2(_WebGL_enableStencil, ctx, option);
			case 'Antialias':
				return A2(_WebGL_enableAntialias, ctx, option);
			case 'ClearColor':
				return A2(_WebGL_enableClearColor, ctx, option);
			default:
				return A2(_WebGL_enablePreserveDrawingBuffer, ctx, option);
		}
	});
var $elm_explorations$webgl$WebGL$Internal$enableSetting = F2(
	function (gl, setting) {
		switch (setting.$) {
			case 'Blend':
				return A2(_WebGL_enableBlend, gl, setting);
			case 'DepthTest':
				return A2(_WebGL_enableDepthTest, gl, setting);
			case 'StencilTest':
				return A2(_WebGL_enableStencilTest, gl, setting);
			case 'Scissor':
				return A2(_WebGL_enableScissor, gl, setting);
			case 'ColorMask':
				return A2(_WebGL_enableColorMask, gl, setting);
			case 'CullFace':
				return A2(_WebGL_enableCullFace, gl, setting);
			case 'PolygonOffset':
				return A2(_WebGL_enablePolygonOffset, gl, setting);
			case 'SampleCoverage':
				return A2(_WebGL_enableSampleCoverage, gl, setting);
			default:
				return A2(_WebGL_enableSampleAlphaToCoverage, gl, setting);
		}
	});
var $elm_explorations$webgl$WebGL$entityWith = _WebGL_entity;
var $author$project$WebGL$Ui$Internal$fragImageColor = {
	src: '\n        precision mediump float;\n        varying vec2 uv;\n        uniform vec2 uImgSize;\n        uniform sampler2D uImg;\n        uniform vec4 color;\n        void main () {\n            vec2 pixel = ((floor(uv * uImgSize) + 0.5) * 2.0 ) / uImgSize / 2.0;\n            gl_FragColor = texture2D(uImg, pixel) * color;\n        }\n    ',
	attributes: {},
	uniforms: {color: 'color', uImg: 'uImg', uImgSize: 'uImgSize'}
};
var $elm_explorations$webgl$WebGL$Mesh1 = F2(
	function (a, b) {
		return {$: 'Mesh1', a: a, b: b};
	});
var $elm_explorations$webgl$WebGL$triangleStrip = $elm_explorations$webgl$WebGL$Mesh1(
	{elemSize: 1, indexSize: 0, mode: 5});
var $elm_explorations$linear_algebra$Math$Vector2$vec2 = _MJS_v2;
var $author$project$WebGL$Ui$Internal$mesh = $elm_explorations$webgl$WebGL$triangleStrip(
	_List_fromArray(
		[
			{
			aP: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, -1)
		},
			{
			aP: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, 1)
		},
			{
			aP: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, -1)
		},
			{
			aP: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 1)
		}
		]));
var $elm_explorations$linear_algebra$Math$Vector3$toRecord = _MJS_v3toRecord;
var $elm_explorations$linear_algebra$Math$Vector4$vec4 = _MJS_v4;
var $author$project$WebGL$Ui$Internal$setAlpha = A2(
	$elm$core$Basics$composeR,
	$elm_explorations$linear_algebra$Math$Vector3$toRecord,
	function (a) {
		return A3($elm_explorations$linear_algebra$Math$Vector4$vec4, a.x, a.y, a.z);
	});
var $author$project$WebGL$Ui$Internal$vertTile = {
	src: '\n            precision mediump float;\n            attribute vec2 aP;\n            uniform vec4 uT;\n            uniform vec2 uP;\n            uniform float index;\n            uniform vec2 spriteSize;\n            uniform vec2 uImgSize;\n            varying vec2 uv;\n            vec2 edgeFix = vec2(0.0000001, -0.0000001);\n            void main () {\n                vec2 ratio = spriteSize / uImgSize;\n                float row = (uImgSize.y / spriteSize.y - 1.0) - floor((index + 0.5) * ratio.x);\n                float column = floor(mod((index + 0.5), uImgSize.x / spriteSize.x));\n                vec2 offset = vec2(column, row) * ratio;\n                uv = (aP * 0.5 + 0.5) * ratio + offset + edgeFix;\n                gl_Position = vec4(aP * mat2(uT) + uP, 0.0, 1.0);\n            }\n        ',
	attributes: {aP: 'aP'},
	uniforms: {index: 'index', spriteSize: 'spriteSize', uImgSize: 'uImgSize', uP: 'uP', uT: 'uT'}
};
var $author$project$WebGL$Ui$Text$tileWithColor = F8(
	function (spriteSheet, spriteSize, imageSize, color, index, translate, scaleRotateSkew, opacity) {
		return A5(
			$elm_explorations$webgl$WebGL$entityWith,
			$author$project$WebGL$Ui$Internal$defaultEntitySettings,
			$author$project$WebGL$Ui$Internal$vertTile,
			$author$project$WebGL$Ui$Internal$fragImageColor,
			$author$project$WebGL$Ui$Internal$mesh,
			{
				color: A2($author$project$WebGL$Ui$Internal$setAlpha, color, opacity),
				index: index,
				spriteSize: spriteSize,
				uA: opacity,
				uImg: spriteSheet,
				uImgSize: imageSize,
				uP: translate,
				uT: scaleRotateSkew
			});
	});
var $author$project$WebGL$Ui$Text$char = F8(
	function (spriteSheet, imageSize, w, h, color, x, y, index) {
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A3(
					$justgook$webgl_shape$WebGL$Shape2d$Form,
					w,
					h,
					A5(
						$author$project$WebGL$Ui$Text$tileWithColor,
						spriteSheet,
						A2($elm_explorations$linear_algebra$Math$Vector2$vec2, w, h),
						imageSize,
						color,
						index)),
				o: 1,
				sx: 1,
				sy: 1,
				x: x,
				y: y
			});
	});
var $justgook$webgl_shape$WebGL$Shape2d$Group = function (a) {
	return {$: 'Group', a: a};
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$WebGL$Ui$Text$drawChat = F4(
	function (fn, charW, charH, string) {
		var output = A3(
			$elm$core$List$foldl,
			fn,
			{chars: _List_Nil, width: 0, x: charW, y: charH},
			$elm$core$String$toList(string));
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: $justgook$webgl_shape$WebGL$Shape2d$Group(output.chars),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: (-output.y) + (0.5 * charH)
			});
	});
var $elm$core$Tuple$mapBoth = F3(
	function (funcA, funcB, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			funcA(x),
			funcB(y));
	});
var $author$project$WebGL$Ui$Text$outputFold = F6(
	function (toChar, getIndex, w, h, c, _v0) {
		var chars = _v0.chars;
		var x = _v0.x;
		var y = _v0.y;
		var width = _v0.width;
		return _Utils_eq(
			c,
			_Utils_chr('\n')) ? {
			chars: chars,
			width: A2($elm$core$Basics$max, width, x),
			x: w,
			y: y - h
		} : {
			chars: A2(
				$elm$core$List$cons,
				A3(
					toChar,
					x,
					y,
					getIndex(c)),
				chars),
			width: width,
			x: x + w,
			y: y
		};
	});
var $elm_explorations$webgl$WebGL$Texture$LoadError = {$: 'LoadError'};
var $elm_explorations$webgl$WebGL$Texture$SizeError = F2(
	function (a, b) {
		return {$: 'SizeError', a: a, b: b};
	});
var $elm_explorations$webgl$WebGL$Texture$size = _Texture_size;
var $author$project$WebGL$Ui$Text$tileFontLeftBottom = F3(
	function (_v0, color, string) {
		var charW = _v0.charW;
		var charH = _v0.charH;
		var src = _v0.src;
		var getIndex = _v0.getIndex;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A2(
					$justgook$webgl_shape$WebGL$Shape2d$Textured,
					src,
					function (t) {
						var _v1 = A3(
							$elm$core$Tuple$mapBoth,
							$elm$core$Basics$toFloat,
							$elm$core$Basics$toFloat,
							$elm_explorations$webgl$WebGL$Texture$size(t));
						var imgW = _v1.a;
						var imgH = _v1.b;
						var imgSize = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, imgW, imgH);
						var toChar = A5($author$project$WebGL$Ui$Text$char, t, imgSize, charW, charH, color);
						return A4(
							$author$project$WebGL$Ui$Text$drawChat,
							A4($author$project$WebGL$Ui$Text$outputFold, toChar, getIndex, charW, charH),
							charW,
							charH,
							string);
					}),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: 0
			});
	});
var $author$project$WebGL$Ui$tileFontLeftBottom = $author$project$WebGL$Ui$Text$tileFontLeftBottom;
var $author$project$RPG$Asset$Text$tileFontChat = $author$project$WebGL$Ui$tileFontLeftBottom(
	{charH: 9, charW: 7, getIndex: $author$project$RPG$Asset$Text$getIndex, src: 'assets/ui/charmap-oldschool_white.png'});
var $author$project$RPG$Asset$Text$chat = $author$project$RPG$Asset$Text$tileFontChat(
	A3($justgook$webgl_playground$Playground$rgb, 0, 0, 255));
var $author$project$RPG$Component$Chat$lineHeight = 10;
var $justgook$webgl_playground$Playground$moveY = F2(
	function (dy, _v0) {
		var shape = _v0.a;
		var x = shape.x;
		var y = shape.y;
		var a = shape.a;
		var sx = shape.sx;
		var sy = shape.sy;
		var o = shape.o;
		var form = shape.form;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			_Utils_update(
				shape,
				{y: y + dy}));
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$RPG$Component$Chat$spawn = function (chat) {
	if (chat.input === '') {
		return chat;
	} else {
		if (A2($elm$core$String$startsWith, '.add', chat.input)) {
			return chat;
		} else {
			var messages_ = A2(
				$elm$core$List$cons,
				chat.input,
				A2($elm$core$List$take, 10, chat.messages_));
			var messages = A3(
				$elm$core$List$foldl,
				F2(
					function (a, _v0) {
						var acc = _v0.a;
						var offset = _v0.b;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(
									$justgook$webgl_playground$Playground$moveY,
									offset,
									$author$project$RPG$Asset$Text$chat(a)),
								acc),
							offset + $author$project$RPG$Component$Chat$lineHeight);
					}),
				_Utils_Tuple2(_List_Nil, 10),
				messages_).a;
			return _Utils_update(
				chat,
				{input: '', messages: messages, messages_: messages_});
		}
	}
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$RPG$Component$Chat$input = function (world) {
	var chat = world.chat;
	return $elm$browser$Browser$Events$onKeyUp(
		A2(
			$elm$json$Json$Decode$andThen,
			function (key) {
				switch (key) {
					case 'Backspace':
						return $elm$json$Json$Decode$succeed(
							_Utils_update(
								world,
								{
									chat: _Utils_update(
										chat,
										{
											input: A2($elm$core$String$dropRight, 1, chat.input)
										})
								}));
					case 'Enter':
						return $elm$json$Json$Decode$succeed(
							_Utils_update(
								world,
								{
									chat: $author$project$RPG$Component$Chat$spawn(chat)
								}));
					default:
						var _v1 = $elm$core$String$toList(key);
						if (_v1.b && (!_v1.b.b)) {
							return $elm$json$Json$Decode$succeed(
								_Utils_update(
									world,
									{
										chat: _Utils_update(
											chat,
											{
												input: _Utils_ap(chat.input, key)
											})
									}));
						} else {
							return $elm$json$Json$Decode$fail('');
						}
				}
			},
			A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string)));
};
var $elm$core$Debug$log = _Debug_log;
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keydown');
var $author$project$RPG$Subscription$Keyboard$subscription = function (world) {
	var chat = world.chat;
	return chat.active ? $author$project$RPG$Component$Chat$input(world) : $elm$browser$Browser$Events$onKeyDown(
		A2(
			$elm$json$Json$Decode$map,
			function (code) {
				var _v0 = A2($elm$core$Debug$log, 'code', code);
				return world;
			},
			A2($elm$json$Json$Decode$field, 'code', $elm$json$Json$Decode$string)));
};
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$Events$onMouseDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'mousedown');
var $elm$browser$Browser$Events$onMouseMove = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'mousemove');
var $elm$browser$Browser$Events$onMouseUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'mouseup');
var $author$project$RPG$Subscription$Pointer$toMouse = F4(
	function (model, down, pageX, pageY) {
		var world = model.world;
		var y = model.screen.top - pageY;
		var x = model.screen.left + pageX;
		var mouse = world.mouse;
		return _Utils_update(
			world,
			{
				mouse: _Utils_update(
					mouse,
					{
						down: down,
						p: A2($justgook$alt_linear_algebra$AltMath$Vector2$Vec2, x, y)
					})
			});
	});
var $author$project$RPG$Subscription$Pointer$subscription = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				model.world.mouse.down ? $elm$browser$Browser$Events$onMouseMove(
				A3(
					$elm$json$Json$Decode$map2,
					A2($author$project$RPG$Subscription$Pointer$toMouse, model, true),
					A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
					A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float))) : $elm$core$Platform$Sub$none,
				$elm$browser$Browser$Events$onMouseUp(
				A3(
					$elm$json$Json$Decode$map2,
					A2($author$project$RPG$Subscription$Pointer$toMouse, model, false),
					A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
					A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float))),
				$elm$browser$Browser$Events$onMouseDown(
				A3(
					$elm$json$Json$Decode$map2,
					A2($author$project$RPG$Subscription$Pointer$toMouse, model, true),
					A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
					A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float)))
			]));
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$remove, key, dict));
	});
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$diff, dict1, dict2));
	});
var $elm$core$Set$foldl = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $author$project$RPG$Game$Texture = F2(
	function (a, b) {
		return {$: 'Texture', a: a, b: b};
	});
var $author$project$RPG$Game$TextureFail = function (a) {
	return {$: 'TextureFail', a: a};
};
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm_explorations$webgl$WebGL$Texture$loadWith = F2(
	function (_v0, url) {
		var magnify = _v0.magnify;
		var minify = _v0.minify;
		var horizontalWrap = _v0.horizontalWrap;
		var verticalWrap = _v0.verticalWrap;
		var flipY = _v0.flipY;
		var expand = F4(
			function (_v1, _v2, _v3, _v4) {
				var mag = _v1.a;
				var min = _v2.a;
				var hor = _v3.a;
				var vert = _v4.a;
				return A6(_Texture_load, mag, min, hor, vert, flipY, url);
			});
		return A4(expand, magnify, minify, horizontalWrap, verticalWrap);
	});
var $elm_explorations$webgl$WebGL$Texture$Wrap = function (a) {
	return {$: 'Wrap', a: a};
};
var $elm_explorations$webgl$WebGL$Texture$clampToEdge = $elm_explorations$webgl$WebGL$Texture$Wrap(33071);
var $elm_explorations$webgl$WebGL$Texture$Resize = function (a) {
	return {$: 'Resize', a: a};
};
var $elm_explorations$webgl$WebGL$Texture$linear = $elm_explorations$webgl$WebGL$Texture$Resize(9729);
var $author$project$RPG$System$textureOption = {flipY: true, horizontalWrap: $elm_explorations$webgl$WebGL$Texture$clampToEdge, magnify: $elm_explorations$webgl$WebGL$Texture$linear, minify: $elm_explorations$webgl$WebGL$Texture$linear, verticalWrap: $elm_explorations$webgl$WebGL$Texture$clampToEdge};
var $author$project$RPG$System$getTexture = function (url) {
	return A2(
		$elm$core$Task$attempt,
		function (r) {
			if (r.$ === 'Ok') {
				var t = r.a;
				return A2($author$project$RPG$Game$Texture, url, t);
			} else {
				var e = r.a;
				return $author$project$RPG$Game$TextureFail(e);
			}
		},
		A2($elm_explorations$webgl$WebGL$Texture$loadWith, $author$project$RPG$System$textureOption, url));
};
var $author$project$RPG$Component$Grid$fromScreen = F2(
	function (_v0, _v1) {
		var cellW = _v0.cellW;
		var cellH = _v0.cellH;
		var offset = _v0.offset;
		var x = _v1.x;
		var y = _v1.y;
		return {
			x: $elm$core$Basics$round((x + offset.x) / cellW),
			y: $elm$core$Basics$round((y + offset.y) / cellH)
		};
	});
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $justgook$elm_game_logic$Logic$Component$get = function (id) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Array$get(id),
		$elm$core$Maybe$withDefault($elm$core$Maybe$Nothing));
};
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $justgook$elm_game_logic$Logic$Internal$indexedFoldlArray = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _v0) {
				var i = _v0.a;
				var thisAcc = _v0.b;
				return _Utils_Tuple2(
					i + 1,
					A3(func, i, x, thisAcc));
			});
		return A3(
			$elm$core$Array$foldl,
			step,
			_Utils_Tuple2(0, acc),
			list).b;
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $justgook$elm_game_logic$Logic$System$indexedFoldl2 = F4(
	function (f, comp1, comp2, acc_) {
		return A3(
			$justgook$elm_game_logic$Logic$Internal$indexedFoldlArray,
			F3(
				function (n, value, acc) {
					return A2(
						$elm$core$Maybe$withDefault,
						acc,
						A3(
							$elm$core$Maybe$map2,
							F2(
								function (a, b) {
									return A4(f, n, a, b, acc);
								}),
							value,
							A2($justgook$elm_game_logic$Logic$Component$get, n, comp2)));
				}),
			acc_,
			comp1);
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $author$project$RPG$System$Ai$randPath = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	return A3(
		$elm$random$Random$map2,
		$justgook$alt_linear_algebra$AltMath$Vector2$Vec2,
		A2($elm$random$Random$float, left, right),
		A2($elm$random$Random$float, bottom, top));
};
var $justgook$elm_game_logic$Logic$Component$set = F3(
	function (id, value, components) {
		return A3(
			$elm$core$Array$set,
			id,
			$elm$core$Maybe$Just(value),
			components);
	});
var $author$project$RPG$System$Ai$step = F6(
	function (toGrid, screen, i, path, _v0, acc) {
		var comps = acc.a;
		var seed = acc.b;
		if (!path.b) {
			return A2(
				$elm$core$Tuple$mapFirst,
				function (a) {
					return A3(
						$justgook$elm_game_logic$Logic$Component$set,
						i,
						_List_fromArray(
							[
								toGrid(a)
							]),
						comps);
				},
				A2(
					$elm$random$Random$step,
					$author$project$RPG$System$Ai$randPath(screen),
					seed));
		} else {
			return acc;
		}
	});
var $author$project$RPG$System$Ai$system = F2(
	function (screen, world) {
		var toGrid = $author$project$RPG$Component$Grid$fromScreen(world.grid);
		var pathComps = $author$project$RPG$Component$Path$spec.get(world);
		var aiComps = $author$project$RPG$Component$Ai$spec.get(world);
		var _v0 = A4(
			$justgook$elm_game_logic$Logic$System$indexedFoldl2,
			A2($author$project$RPG$System$Ai$step, toGrid, screen),
			pathComps,
			aiComps,
			_Utils_Tuple2(pathComps, world.seed));
		var comps = _v0.a;
		var seed = _v0.b;
		return A2(
			$author$project$RPG$Component$Path$spec.set,
			comps,
			_Utils_update(
				world,
				{seed: seed}));
	});
var $author$project$RPG$System$Animation$next = F2(
	function (delta, action) {
		var speed = action.speed;
		var pose = action.pose;
		var dir = action.dir;
		var time = delta + action.time;
		var iTime = $elm$core$Basics$floor(time * speed);
		return _Utils_update(
			action,
			{
				frame: function () {
					switch (pose.$) {
						case 'Stand':
							return 0;
						case 'Walk':
							return iTime % 8;
						case 'Hurt':
							return iTime % 5;
						case 'Slash':
							return iTime % 5;
						case 'Cast':
							return iTime % 6;
						case 'Shoot':
							return iTime % 12;
						default:
							return iTime % 7;
					}
				}(),
				time: time
			});
	});
var $elm$core$Elm$JsArray$map = _JsArray_map;
var $elm$core$Array$map = F2(
	function (func, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = function (node) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return $elm$core$Array$SubTree(
					A2($elm$core$Elm$JsArray$map, helper, subTree));
			} else {
				var values = node.a;
				return $elm$core$Array$Leaf(
					A2($elm$core$Elm$JsArray$map, func, values));
			}
		};
		return A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A2($elm$core$Elm$JsArray$map, helper, tree),
			A2($elm$core$Elm$JsArray$map, func, tail));
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $justgook$elm_game_logic$Logic$System$step = F3(
	function (f, _v0, world) {
		var get = _v0.get;
		var set = _v0.set;
		return A2(
			set,
			A2(
				$elm$core$Array$map,
				$elm$core$Maybe$map(f),
				get(world)),
			world);
	});
var $author$project$RPG$System$Animation$system = function (delta) {
	return A2(
		$justgook$elm_game_logic$Logic$System$step,
		$author$project$RPG$System$Animation$next(delta),
		$author$project$RPG$Component$Animation$spec);
};
var $author$project$RPG$Component$Grid$fromGrid = F2(
	function (_v0, _v1) {
		var cellW = _v0.cellW;
		var cellH = _v0.cellH;
		var x = _v1.x;
		var y = _v1.y;
		return {x: x * cellW, y: y * cellH};
	});
var $author$project$RPG$Component$Fx$spawn = {life: 3000};
var $author$project$RPG$Component$Fx$spec = A2(
	$justgook$elm_game_logic$Logic$Component$Spec,
	function ($) {
		return $.fx;
	},
	F2(
		function (comps, world) {
			return _Utils_update(
				world,
				{fx: comps});
		}));
var $author$project$RPG$System$Fx$spawn = function (p) {
	return A2(
		$elm$core$Basics$composeR,
		$author$project$RPG$Component$IdSource$create,
		A2(
			$elm$core$Basics$composeR,
			$justgook$elm_game_logic$Logic$Entity$with(
				_Utils_Tuple2($author$project$RPG$Component$Fx$spec, $author$project$RPG$Component$Fx$spawn)),
			A2(
				$elm$core$Basics$composeR,
				$justgook$elm_game_logic$Logic$Entity$with(
					_Utils_Tuple2(
						$author$project$RPG$Component$Position$spec,
						$author$project$RPG$Component$Position$spawn(p))),
				$elm$core$Tuple$second)));
};
var $author$project$RPG$Component$IdSource$remove = F2(
	function (entityID, world) {
		var comp = $author$project$RPG$Component$IdSource$get(world);
		return _Utils_Tuple2(
			entityID,
			A2(
				$author$project$RPG$Component$IdSource$set,
				_Utils_update(
					comp,
					{
						pool: A2($elm$core$List$cons, entityID, comp.pool)
					}),
				world));
	});
var $author$project$RPG$System$Fx$remove = function (id) {
	return A2(
		$elm$core$Basics$composeR,
		$author$project$RPG$Component$IdSource$remove(id),
		A2(
			$elm$core$Basics$composeR,
			$justgook$elm_game_logic$Logic$Entity$remove($author$project$RPG$Component$Fx$spec),
			A2(
				$elm$core$Basics$composeR,
				$justgook$elm_game_logic$Logic$Entity$remove($author$project$RPG$Component$Position$spec),
				$elm$core$Tuple$second)));
};
var $author$project$RPG$System$Fx$indexedFoldlArray = F3(
	function (func, acc, list) {
		var inner = F2(
			function (x, _v0) {
				var i = _v0.a;
				var thisAcc = _v0.b;
				return _Utils_Tuple2(
					i + 1,
					A3(func, i, x, thisAcc));
			});
		return A3(
			$elm$core$Array$foldl,
			inner,
			_Utils_Tuple2(0, acc),
			list).b;
	});
var $author$project$RPG$System$Fx$stepWith = F3(
	function (f, _v0, world) {
		var get = _v0.get;
		var set = _v0.set;
		return function (_v2) {
			var comps = _v2.a;
			var w = _v2.b;
			return A2(set, comps, w);
		}(
			A3(
				$author$project$RPG$System$Fx$indexedFoldlArray,
				F3(
					function (i, c_, acc) {
						var comps = acc.a;
						var w = acc.b;
						if (c_.$ === 'Just') {
							var c = c_.a;
							return A2(
								$elm$core$Tuple$mapFirst,
								function (cc) {
									return A3($elm$core$Array$set, i, cc, comps);
								},
								A3(f, i, c, w));
						} else {
							return acc;
						}
					}),
				_Utils_Tuple2(
					get(world),
					world),
				get(world)));
	});
var $author$project$RPG$System$Fx$step = function (delta) {
	return A2(
		$author$project$RPG$System$Fx$stepWith,
		F3(
			function (i, fx, w) {
				var life = fx.life - delta;
				return (life < 0) ? _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A2($author$project$RPG$System$Fx$remove, i, w)) : _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							fx,
							{life: life})),
					w);
			}),
		$author$project$RPG$Component$Fx$spec);
};
var $author$project$RPG$System$Fx$system = F3(
	function (screen, delta, w) {
		var mouse = w.mouse;
		return mouse.down ? A2(
			$author$project$RPG$System$Fx$spawn,
			A2(
				$author$project$RPG$Component$Grid$fromGrid,
				w.grid,
				A2($author$project$RPG$Component$Grid$fromScreen, w.grid, mouse.p)),
			A2($author$project$RPG$System$Fx$step, delta, w)) : A2($author$project$RPG$System$Fx$step, delta, w);
	});
var $author$project$RPG$System$Grid$system = F2(
	function (delta, world) {
		var grid = world.grid;
		var _v0 = A2($justgook$elm_game_logic$Logic$Component$get, world.you, world.p);
		if (_v0.$ === 'Just') {
			var p = _v0.a;
			return _Utils_update(
				world,
				{
					grid: _Utils_update(
						grid,
						{offset: p})
				});
		} else {
			return world;
		}
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $justgook$elm_game_logic$Logic$Internal$update = F3(
	function (n, f, a) {
		var _v0 = A2($elm$core$Array$get, n, a);
		if (_v0.$ === 'Nothing') {
			return a;
		} else {
			var element_ = _v0.a;
			return A3(
				$elm$core$Array$set,
				n,
				f(element_),
				a);
		}
	});
var $justgook$elm_game_logic$Logic$Component$update = F2(
	function (i, f) {
		return A2(
			$justgook$elm_game_logic$Logic$Internal$update,
			i,
			$elm$core$Maybe$map(f));
	});
var $author$project$RPG$System$Input$system = F2(
	function (id, world) {
		var _v0 = A2($justgook$elm_game_logic$Logic$Component$get, id, world.path);
		if (_v0.$ === 'Just') {
			var p = _v0.a;
			var click = A2($author$project$RPG$Component$Grid$fromScreen, world.grid, world.mouse.p);
			return (world.mouse.down && (!_Utils_eq(
				$elm$core$Maybe$Just(click),
				$elm$core$List$head(p)))) ? A3(
				$elm$core$Basics$apR,
				A3(
					$justgook$elm_game_logic$Logic$Component$update,
					id,
					function (_v1) {
						return _List_fromArray(
							[click]);
					},
					world.path),
				$author$project$RPG$Component$Path$spec.set,
				world) : world;
		} else {
			return world;
		}
	});
var $justgook$alt_linear_algebra$AltMath$Vector2$add = F2(
	function (a, b) {
		return {x: a.x + b.x, y: a.y + b.y};
	});
var $justgook$elm_game_logic$Logic$System$applyIf = F3(
	function (bool, f, world) {
		return bool ? f(world) : world;
	});
var $justgook$elm_game_logic$Logic$System$step2 = F4(
	function (f, spec1, spec2, world) {
		var set2 = F3(
			function (i, b, acc) {
				return _Utils_update(
					acc,
					{
						b: A3(
							$elm$core$Array$set,
							i,
							$elm$core$Maybe$Just(b),
							acc.b)
					});
			});
		var set1 = F3(
			function (i, a, acc) {
				return _Utils_update(
					acc,
					{
						a: A3(
							$elm$core$Array$set,
							i,
							$elm$core$Maybe$Just(a),
							acc.a)
					});
			});
		var combined = {
			a: spec1.get(world),
			b: spec2.get(world)
		};
		var result = A3(
			$justgook$elm_game_logic$Logic$Internal$indexedFoldlArray,
			F3(
				function (n, value, acc) {
					return A2(
						$elm$core$Maybe$withDefault,
						acc,
						A3(
							$elm$core$Maybe$map2,
							F2(
								function (a, b) {
									return A3(
										f,
										_Utils_Tuple2(
											a,
											set1(n)),
										_Utils_Tuple2(
											b,
											set2(n)),
										acc);
								}),
							value,
							A2($justgook$elm_game_logic$Logic$Component$get, n, acc.b)));
				}),
			combined,
			combined.a);
		return A3(
			$justgook$elm_game_logic$Logic$System$applyIf,
			!_Utils_eq(result.b, combined.b),
			spec2.set(result.b),
			A3(
				$justgook$elm_game_logic$Logic$System$applyIf,
				!_Utils_eq(result.a, combined.a),
				spec1.set(result.a),
				world));
	});
var $author$project$RPG$System$Movement$system = function (world) {
	return A4(
		$justgook$elm_game_logic$Logic$System$step2,
		F2(
			function (_v0, _v1) {
				var v = _v0.a;
				var p = _v1.a;
				var setP = _v1.b;
				return setP(
					A2($justgook$alt_linear_algebra$AltMath$Vector2$add, v, p));
			}),
		$author$project$RPG$Component$Velocity$spec,
		$author$project$RPG$Component$Position$spec,
		world);
};
var $author$project$RPG$Component$Animation$Stand = {$: 'Stand'};
var $author$project$RPG$Component$Util$Direction$East = {$: 'East'};
var $author$project$RPG$Component$Util$Direction$North = {$: 'North'};
var $author$project$RPG$Component$Util$Direction$West = {$: 'West'};
var $author$project$RPG$Component$Util$Direction$fromRecord = function (_v0) {
	var x = _v0.x;
	var y = _v0.y;
	var ay = $elm$core$Basics$abs(y);
	var ax = $elm$core$Basics$abs(x);
	return (_Utils_cmp(ax, ay) > 0) ? ((x > 0) ? $author$project$RPG$Component$Util$Direction$East : $author$project$RPG$Component$Util$Direction$West) : ((y > 0) ? $author$project$RPG$Component$Util$Direction$North : $author$project$RPG$Component$Util$Direction$South);
};
var $justgook$alt_linear_algebra$AltMath$Vector2$scale = F2(
	function (s, v2) {
		return {x: s * v2.x, y: s * v2.y};
	});
var $author$project$RPG$System$Path$speed = 120;
var $justgook$alt_linear_algebra$AltMath$Vector2$sub = F2(
	function (a, b) {
		return {x: a.x - b.x, y: a.y - b.y};
	});
var $author$project$RPG$Component$Grid$toGrid = F2(
	function (_v0, _v1) {
		var cellW = _v0.cellW;
		var cellH = _v0.cellH;
		var offset = _v0.offset;
		var x = _v1.x;
		var y = _v1.y;
		return {
			x: $elm$core$Basics$round(x / cellW),
			y: $elm$core$Basics$round(y / cellH)
		};
	});
var $author$project$RPG$Component$Util$Direction$east = {x: 1, y: 0};
var $author$project$RPG$Component$Util$Direction$north = {x: 0, y: 1};
var $author$project$RPG$Component$Util$Direction$south = {x: 0, y: -1};
var $author$project$RPG$Component$Util$Direction$west = {x: -1, y: 0};
var $author$project$RPG$Component$Util$Direction$toRecord = function (dir) {
	switch (dir.$) {
		case 'North':
			return $author$project$RPG$Component$Util$Direction$north;
		case 'East':
			return $author$project$RPG$Component$Util$Direction$east;
		case 'South':
			return $author$project$RPG$Component$Util$Direction$south;
		default:
			return $author$project$RPG$Component$Util$Direction$west;
	}
};
var $author$project$RPG$System$Path$next = F7(
	function (delta, grid, _v0, _v1, _v2, _v3, acc) {
		var p = _v0.a;
		var setP = _v0.b;
		var path = _v1.a;
		var setPath = _v1.b;
		var v = _v2.a;
		var setV = _v2.b;
		var anim = _v3.a;
		var setAnim = _v3.b;
		if (path.b) {
			var target = path.a;
			var rest = path.b;
			var distance = A2(
				$justgook$alt_linear_algebra$AltMath$Vector2$sub,
				target,
				A2($author$project$RPG$Component$Grid$toGrid, grid, p));
			var dir = $author$project$RPG$Component$Util$Direction$fromRecord(distance);
			return _Utils_eq($author$project$RPG$Component$Util$Vec2$zero, distance) ? A2(
				setP,
				A2($author$project$RPG$Component$Grid$fromGrid, grid, target),
				A2(
					setAnim,
					_Utils_update(
						anim,
						{pose: $author$project$RPG$Component$Animation$Stand}),
					A2(
						setV,
						$author$project$RPG$Component$Util$Vec2$zero,
						A2(setPath, rest, acc)))) : A2(
				setV,
				A2(
					$justgook$alt_linear_algebra$AltMath$Vector2$scale,
					($author$project$RPG$System$Path$speed * delta) * 0.001,
					$author$project$RPG$Component$Util$Direction$toRecord(dir)),
				A2(
					setAnim,
					_Utils_update(
						anim,
						{dir: dir, pose: $author$project$RPG$Component$Animation$Walk}),
					acc));
		} else {
			return A2(
				setAnim,
				_Utils_update(
					anim,
					{pose: $author$project$RPG$Component$Animation$Stand}),
				acc);
		}
	});
var $elm$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 'Nothing') {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					if (md.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var d = md.a;
						return $elm$core$Maybe$Just(
							A4(func, a, b, c, d));
					}
				}
			}
		}
	});
var $justgook$elm_game_logic$Logic$System$step4 = F6(
	function (f, spec1, spec2, spec3, spec4, world) {
		var set4 = F3(
			function (i, d, acc) {
				return _Utils_update(
					acc,
					{
						d: A3(
							$elm$core$Array$set,
							i,
							$elm$core$Maybe$Just(d),
							acc.d)
					});
			});
		var set3 = F3(
			function (i, c, acc) {
				return _Utils_update(
					acc,
					{
						c: A3(
							$elm$core$Array$set,
							i,
							$elm$core$Maybe$Just(c),
							acc.c)
					});
			});
		var set2 = F3(
			function (i, b, acc) {
				return _Utils_update(
					acc,
					{
						b: A3(
							$elm$core$Array$set,
							i,
							$elm$core$Maybe$Just(b),
							acc.b)
					});
			});
		var set1 = F3(
			function (i, a, acc) {
				return _Utils_update(
					acc,
					{
						a: A3(
							$elm$core$Array$set,
							i,
							$elm$core$Maybe$Just(a),
							acc.a)
					});
			});
		var combined = {
			a: spec1.get(world),
			b: spec2.get(world),
			c: spec3.get(world),
			d: spec4.get(world)
		};
		var result = A3(
			$justgook$elm_game_logic$Logic$Internal$indexedFoldlArray,
			F3(
				function (n, value, acc) {
					return A2(
						$elm$core$Maybe$withDefault,
						acc,
						A5(
							$elm$core$Maybe$map4,
							F4(
								function (a, b, c, d) {
									return A5(
										f,
										_Utils_Tuple2(
											a,
											set1(n)),
										_Utils_Tuple2(
											b,
											set2(n)),
										_Utils_Tuple2(
											c,
											set3(n)),
										_Utils_Tuple2(
											d,
											set4(n)),
										acc);
								}),
							value,
							A2($justgook$elm_game_logic$Logic$Component$get, n, acc.b),
							A2($justgook$elm_game_logic$Logic$Component$get, n, acc.c),
							A2($justgook$elm_game_logic$Logic$Component$get, n, acc.d)));
				}),
			combined,
			combined.a);
		return A3(
			$justgook$elm_game_logic$Logic$System$applyIf,
			!_Utils_eq(result.d, combined.d),
			spec4.set(result.d),
			A3(
				$justgook$elm_game_logic$Logic$System$applyIf,
				!_Utils_eq(result.c, combined.c),
				spec3.set(result.c),
				A3(
					$justgook$elm_game_logic$Logic$System$applyIf,
					!_Utils_eq(result.b, combined.b),
					spec2.set(result.b),
					A3(
						$justgook$elm_game_logic$Logic$System$applyIf,
						!_Utils_eq(result.a, combined.a),
						spec1.set(result.a),
						world))));
	});
var $author$project$RPG$System$Path$system = F2(
	function (delta, world) {
		return A6(
			$justgook$elm_game_logic$Logic$System$step4,
			A2($author$project$RPG$System$Path$next, delta, world.grid),
			$author$project$RPG$Component$Position$spec,
			$author$project$RPG$Component$Path$spec,
			$author$project$RPG$Component$Velocity$spec,
			$author$project$RPG$Component$Animation$spec,
			world);
	});
var $justgook$elm_game_logic$Logic$System$applyMaybe = F3(
	function (m, f, world) {
		if (m.$ === 'Just') {
			var a = m.a;
			return A2(f, a, world);
		} else {
			return world;
		}
	});
var $justgook$webgl_playground$Playground$Extra$size = function (t) {
	return function (_v0) {
		var w = _v0.a;
		var h = _v0.b;
		return A2($elm_explorations$linear_algebra$Math$Vector2$vec2, w, h);
	}(
		$elm_explorations$webgl$WebGL$Texture$size(t));
};
var $justgook$webgl_playground$Playground$Render$defaultEntitySettings = _List_fromArray(
	[
		A2($elm_explorations$webgl$WebGL$Settings$Blend$add, $elm_explorations$webgl$WebGL$Settings$Blend$srcAlpha, $elm_explorations$webgl$WebGL$Settings$Blend$oneMinusSrcAlpha),
		A4($elm_explorations$webgl$WebGL$Settings$colorMask, true, true, true, false)
	]);
var $justgook$webgl_playground$Playground$Shader$fragImage = {
	src: '\n        precision mediump float;\n        varying vec2 uv;\n        uniform vec2 uImgSize;\n        uniform sampler2D uImg;\n        uniform float uA;\n        void main () {\n            vec2 pixel = (floor(uv * uImgSize) + 0.5) / uImgSize;\n            gl_FragColor = texture2D(uImg, pixel);\n            gl_FragColor.a *= uA;\n        }\n    ',
	attributes: {},
	uniforms: {uA: 'uA', uImg: 'uImg', uImgSize: 'uImgSize'}
};
var $justgook$webgl_playground$Playground$Shader$mesh = $elm_explorations$webgl$WebGL$triangleStrip(
	_List_fromArray(
		[
			{
			aP: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, -1)
		},
			{
			aP: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, 1)
		},
			{
			aP: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, -1)
		},
			{
			aP: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 1)
		}
		]));
var $justgook$webgl_playground$Playground$Shader$vertTile = {
	src: '\n            precision mediump float;\n            attribute vec2 aP;\n            uniform vec4 uT;\n            uniform vec2 uP;\n            uniform float index;\n            uniform vec2 spriteSize;\n            uniform vec2 uImgSize;\n            varying vec2 uv;\n            vec2 edgeFix = vec2(0.0000001, -0.0000001);\n            void main () {\n                vec2 ratio = spriteSize / uImgSize;\n                float row = (uImgSize.y / spriteSize.y - 1.0) - floor((index + 0.5) * ratio.x);\n                float column = floor(mod((index + 0.5), uImgSize.x / spriteSize.x));\n                vec2 offset = vec2(column, row) * ratio;\n                uv = (aP * 0.5 + 0.5) * ratio + offset + edgeFix;\n                gl_Position = vec4(aP * mat2(uT) + uP, 0.0, 1.0);\n            }\n        ',
	attributes: {aP: 'aP'},
	uniforms: {index: 'index', spriteSize: 'spriteSize', uImgSize: 'uImgSize', uP: 'uP', uT: 'uT'}
};
var $justgook$webgl_playground$Playground$Render$tile = F7(
	function (spriteSheet, spriteSize, imageSize, index, translate, scaleRotateSkew, opacity) {
		return A5(
			$elm_explorations$webgl$WebGL$entityWith,
			$justgook$webgl_playground$Playground$Render$defaultEntitySettings,
			$justgook$webgl_playground$Playground$Shader$vertTile,
			$justgook$webgl_playground$Playground$Shader$fragImage,
			$justgook$webgl_playground$Playground$Shader$mesh,
			{index: index, spriteSize: spriteSize, uA: opacity, uImg: spriteSheet, uImgSize: imageSize, uP: translate, uT: scaleRotateSkew});
	});
var $justgook$webgl_playground$Playground$Extra$tile = F4(
	function (tileW, tileH, tileset, index) {
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A2(
					$justgook$webgl_shape$WebGL$Shape2d$Textured,
					tileset,
					function (t) {
						return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
							{
								a: 0,
								form: A3(
									$justgook$webgl_shape$WebGL$Shape2d$Form,
									tileW,
									tileH,
									A4(
										$justgook$webgl_playground$Playground$Render$tile,
										t,
										A2($elm_explorations$linear_algebra$Math$Vector2$vec2, tileW, tileH),
										$justgook$webgl_playground$Playground$Extra$size(t),
										index)),
								o: 1,
								sx: 1,
								sy: 1,
								x: 0,
								y: 0
							});
					}),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: 0
			});
	});
var $author$project$RPG$Asset$Body$tile = function (url) {
	return A3($justgook$webgl_playground$Playground$Extra$tile, 64, 64, 'assets/lpc/body/' + url);
};
var $author$project$RPG$Asset$Body$femaleBase = $author$project$RPG$Asset$Body$tile('female/base.png');
var $author$project$RPG$Asset$Body$femaleDrake = $author$project$RPG$Asset$Body$tile('female/drake.png');
var $author$project$RPG$Asset$Body$femaleLizard = $author$project$RPG$Asset$Body$tile('female/lizard.png');
var $author$project$RPG$Asset$Body$femaleOrc = $author$project$RPG$Asset$Body$tile('female/orc.png');
var $justgook$webgl_playground$Playground$group = function (shapes) {
	return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
		{
			a: 0,
			form: $justgook$webgl_shape$WebGL$Shape2d$Group(shapes),
			o: 1,
			sx: 1,
			sy: 1,
			x: 0,
			y: 0
		});
};
var $author$project$RPG$Component$Animation$index = function (_v0) {
	var pose = _v0.pose;
	var dir = _v0.dir;
	var frame = _v0.frame;
	return frame + (function () {
		switch (dir.$) {
			case 'North':
				return 0;
			case 'East':
				return 39;
			case 'South':
				return 26;
			default:
				return 13;
		}
	}() + function () {
		switch (pose.$) {
			case 'Stand':
				return 0;
			case 'Walk':
				return 105;
			case 'Hurt':
				return 261;
			case 'Slash':
				return 157;
			case 'Cast':
				return 1;
			case 'Shoot':
				return 209;
			default:
				return 53;
		}
	}());
};
var $author$project$RPG$Asset$Body$maleBase = $author$project$RPG$Asset$Body$tile('male/base.png');
var $author$project$RPG$Asset$Body$maleDrake = $author$project$RPG$Asset$Body$tile('male/drake.png');
var $author$project$RPG$Asset$Body$maleLizard = $author$project$RPG$Asset$Body$tile('male/lizard.png');
var $author$project$RPG$Asset$Body$maleOrc = $author$project$RPG$Asset$Body$tile('male/orc.png');
var $author$project$RPG$Asset$Body$shadow = $author$project$RPG$Asset$Body$tile('shadow.png');
var $author$project$RPG$Asset$Body$skeleton = $author$project$RPG$Asset$Body$tile('skeleton.png');
var $author$project$RPG$Asset$Body$zombie = $author$project$RPG$Asset$Body$tile('zombie.png');
var $author$project$RPG$Asset$Body$get = F2(
	function (body, action) {
		var i = $author$project$RPG$Component$Animation$index(action);
		return $justgook$webgl_playground$Playground$group(
			_List_fromArray(
				[
					$author$project$RPG$Asset$Body$shadow(i),
					function () {
					switch (body.$) {
						case 'Male':
							var eyes = body.a;
							var ears = body.b;
							var nose = body.c;
							return $author$project$RPG$Asset$Body$maleBase(i);
						case 'MaleOrc':
							return $author$project$RPG$Asset$Body$maleOrc(i);
						case 'MaleDrake':
							return $author$project$RPG$Asset$Body$maleDrake(i);
						case 'MaleLizard':
							return $author$project$RPG$Asset$Body$maleLizard(i);
						case 'Skeleton':
							return $author$project$RPG$Asset$Body$skeleton(i);
						case 'Zombie':
							var blood = body.a;
							return $author$project$RPG$Asset$Body$zombie(i);
						case 'Female':
							var eyes = body.a;
							var ears = body.b;
							var nose = body.c;
							return $author$project$RPG$Asset$Body$femaleBase(i);
						case 'FemaleOrc':
							return $author$project$RPG$Asset$Body$femaleOrc(i);
						case 'FemaleDrake':
							return $author$project$RPG$Asset$Body$femaleDrake(i);
						default:
							return $author$project$RPG$Asset$Body$femaleLizard(i);
					}
				}()
				]));
	});
var $elm$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 'Nothing') {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					return $elm$core$Maybe$Just(
						A3(func, a, b, c));
				}
			}
		}
	});
var $justgook$elm_game_logic$Logic$System$indexedFoldl3 = F5(
	function (f, comp1, comp2, comp3, acc_) {
		return A3(
			$justgook$elm_game_logic$Logic$Internal$indexedFoldlArray,
			F3(
				function (n, value, acc) {
					return A2(
						$elm$core$Maybe$withDefault,
						acc,
						A4(
							$elm$core$Maybe$map3,
							F3(
								function (a, b, c) {
									return A5(f, n, a, b, c, acc);
								}),
							value,
							A2($justgook$elm_game_logic$Logic$Component$get, n, comp2),
							A2($justgook$elm_game_logic$Logic$Component$get, n, comp3)));
				}),
			acc_,
			comp1);
	});
var $justgook$webgl_playground$Playground$move = F3(
	function (dx, dy, _v0) {
		var shape = _v0.a;
		var x = shape.x;
		var y = shape.y;
		var a = shape.a;
		var sx = shape.sx;
		var sy = shape.sy;
		var o = shape.o;
		var form = shape.form;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			_Utils_update(
				shape,
				{x: x + dx, y: y + dy}));
	});
var $author$project$RPG$System$Render$px = A2($elm$core$Basics$composeR, $elm$core$Basics$round, $elm$core$Basics$toFloat);
var $justgook$webgl_playground$Playground$intFromHexChar = function (s) {
	switch (s.valueOf()) {
		case '0':
			return $elm$core$Maybe$Just(0);
		case '1':
			return $elm$core$Maybe$Just(1);
		case '2':
			return $elm$core$Maybe$Just(2);
		case '3':
			return $elm$core$Maybe$Just(3);
		case '4':
			return $elm$core$Maybe$Just(4);
		case '5':
			return $elm$core$Maybe$Just(5);
		case '6':
			return $elm$core$Maybe$Just(6);
		case '7':
			return $elm$core$Maybe$Just(7);
		case '8':
			return $elm$core$Maybe$Just(8);
		case '9':
			return $elm$core$Maybe$Just(9);
		case 'a':
			return $elm$core$Maybe$Just(10);
		case 'b':
			return $elm$core$Maybe$Just(11);
		case 'c':
			return $elm$core$Maybe$Just(12);
		case 'd':
			return $elm$core$Maybe$Just(13);
		case 'e':
			return $elm$core$Maybe$Just(14);
		case 'f':
			return $elm$core$Maybe$Just(15);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $justgook$webgl_playground$Playground$maybeMap6 = F7(
	function (func, ma, mb, mc, md, me, mf) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 'Nothing') {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					if (md.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var d = md.a;
						if (me.$ === 'Nothing') {
							return $elm$core$Maybe$Nothing;
						} else {
							var e = me.a;
							if (mf.$ === 'Nothing') {
								return $elm$core$Maybe$Nothing;
							} else {
								var f = mf.a;
								return $elm$core$Maybe$Just(
									A6(func, a, b, c, d, e, f));
							}
						}
					}
				}
			}
		}
	});
var $justgook$webgl_playground$Playground$hexColor2Vec3 = function (str) {
	var withoutHash = A2($elm$core$String$startsWith, '#', str) ? A2($elm$core$String$dropLeft, 1, str) : str;
	var _v0 = $elm$core$String$toList(withoutHash);
	if ((((((_v0.b && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && _v0.b.b.b.b.b) && _v0.b.b.b.b.b.b) && (!_v0.b.b.b.b.b.b.b)) {
		var r1 = _v0.a;
		var _v1 = _v0.b;
		var r2 = _v1.a;
		var _v2 = _v1.b;
		var g1 = _v2.a;
		var _v3 = _v2.b;
		var g2 = _v3.a;
		var _v4 = _v3.b;
		var b1 = _v4.a;
		var _v5 = _v4.b;
		var b2 = _v5.a;
		return A7(
			$justgook$webgl_playground$Playground$maybeMap6,
			F6(
				function (a, b, c, d, e, f) {
					return A3($elm_explorations$linear_algebra$Math$Vector3$vec3, ((a * 16) + b) / 255, ((c * 16) + d) / 255, ((e * 16) + f) / 255);
				}),
			$justgook$webgl_playground$Playground$intFromHexChar(r1),
			$justgook$webgl_playground$Playground$intFromHexChar(r2),
			$justgook$webgl_playground$Playground$intFromHexChar(g1),
			$justgook$webgl_playground$Playground$intFromHexChar(g2),
			$justgook$webgl_playground$Playground$intFromHexChar(b1),
			$justgook$webgl_playground$Playground$intFromHexChar(b2));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $justgook$webgl_playground$Playground$red = A2(
	$elm$core$Maybe$withDefault,
	A3($elm_explorations$linear_algebra$Math$Vector3$vec3, 0, 0, 0),
	$justgook$webgl_playground$Playground$hexColor2Vec3('#cc0000'));
var $justgook$webgl_playground$Playground$Shader$fragFill = {
	src: '\n        precision mediump float;\n        uniform vec4 color;\n        void main () {\n            gl_FragColor = color;\n        }\n    ',
	attributes: {},
	uniforms: {color: 'color'}
};
var $justgook$webgl_playground$Playground$Render$setAlpha = A2(
	$elm$core$Basics$composeR,
	$elm_explorations$linear_algebra$Math$Vector3$toRecord,
	function (a) {
		return A3($elm_explorations$linear_algebra$Math$Vector4$vec4, a.x, a.y, a.z);
	});
var $justgook$webgl_playground$Playground$Shader$vertNone = {
	src: '\n        precision mediump float;\n        attribute vec2 aP;\n        uniform vec4 uT;\n        uniform vec2 uP;\n        void main () {\n            gl_Position = vec4(aP * mat2(uT) + uP, 0., 1.0);\n        }\n    ',
	attributes: {aP: 'aP'},
	uniforms: {uP: 'uP', uT: 'uT'}
};
var $justgook$webgl_playground$Playground$Render$rect = F4(
	function (color, uP, uT, opacity) {
		return A5(
			$elm_explorations$webgl$WebGL$entityWith,
			$justgook$webgl_playground$Playground$Render$defaultEntitySettings,
			$justgook$webgl_playground$Playground$Shader$vertNone,
			$justgook$webgl_playground$Playground$Shader$fragFill,
			$justgook$webgl_playground$Playground$Shader$mesh,
			{
				color: A2($justgook$webgl_playground$Playground$Render$setAlpha, color, opacity),
				uP: uP,
				uT: uT
			});
	});
var $justgook$webgl_playground$Playground$square = F2(
	function (color, n) {
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A3(
					$justgook$webgl_shape$WebGL$Shape2d$Form,
					n,
					n,
					$justgook$webgl_playground$Playground$Render$rect(color)),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: 0
			});
	});
var $author$project$WebGL$Ui$Text$draw = F4(
	function (fn, charW, charH, string) {
		var output = A3(
			$elm$core$List$foldl,
			fn,
			{chars: _List_Nil, width: 0, x: charW, y: charH},
			$elm$core$String$toList(string));
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: $justgook$webgl_shape$WebGL$Shape2d$Group(output.chars),
				o: 1,
				sx: 1,
				sy: 1,
				x: A2($elm$core$Basics$max, output.x, output.width) * (-0.5),
				y: (output.y * (-0.5)) + (0.5 * (-charH))
			});
	});
var $author$project$WebGL$Ui$Text$tileFont = F3(
	function (_v0, color, string) {
		var charW = _v0.charW;
		var charH = _v0.charH;
		var src = _v0.src;
		var getIndex = _v0.getIndex;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A2(
					$justgook$webgl_shape$WebGL$Shape2d$Textured,
					src,
					function (t) {
						var _v1 = A3(
							$elm$core$Tuple$mapBoth,
							$elm$core$Basics$toFloat,
							$elm$core$Basics$toFloat,
							$elm_explorations$webgl$WebGL$Texture$size(t));
						var imgW = _v1.a;
						var imgH = _v1.b;
						var imgSize = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, imgW, imgH);
						var toChar = A5($author$project$WebGL$Ui$Text$char, t, imgSize, charW, charH, color);
						return A4(
							$author$project$WebGL$Ui$Text$draw,
							A4($author$project$WebGL$Ui$Text$outputFold, toChar, getIndex, charW, charH),
							charW,
							charH,
							string);
					}),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: 0
			});
	});
var $author$project$WebGL$Ui$tileFont = $author$project$WebGL$Ui$Text$tileFont;
var $author$project$RPG$Asset$Text$tileFont = $author$project$WebGL$Ui$tileFont(
	{charH: 9, charW: 7, getIndex: $author$project$RPG$Asset$Text$getIndex, src: 'assets/ui/charmap-oldschool_white.png'});
var $author$project$RPG$Asset$Text$text = $author$project$RPG$Asset$Text$tileFont(
	A3($justgook$webgl_playground$Playground$rgb, 18, 147, 216));
var $author$project$RPG$System$Render$character = function (world) {
	return $justgook$webgl_playground$Playground$group(
		A5(
			$justgook$elm_game_logic$Logic$System$indexedFoldl3,
			F4(
				function (i, _v0, _v1, action) {
					var x = _v0.x;
					var y = _v0.y;
					var body = _v1.body;
					return $elm$core$List$cons(
						A3(
							$justgook$webgl_playground$Playground$move,
							$author$project$RPG$System$Render$px(x),
							$author$project$RPG$System$Render$px(y),
							$justgook$webgl_playground$Playground$group(
								A3(
									$justgook$elm_game_logic$Logic$System$applyMaybe,
									A2($justgook$elm_game_logic$Logic$Component$get, i, world.name),
									F2(
										function (a, w) {
											return A2(
												$elm$core$List$cons,
												A2(
													$justgook$webgl_playground$Playground$moveY,
													24,
													$author$project$RPG$Asset$Text$text(a)),
												w);
										}),
									A3(
										$justgook$elm_game_logic$Logic$System$applyIf,
										world.debug,
										$elm$core$List$cons(
											A2($justgook$webgl_playground$Playground$square, $justgook$webgl_playground$Playground$red, 32)),
										_List_fromArray(
											[
												A2($author$project$RPG$Asset$Body$get, body, action)
											]))))));
				}),
			$author$project$RPG$Component$Position$spec.get(world),
			$author$project$RPG$Component$Character$spec.get(world),
			$author$project$RPG$Component$Animation$spec.get(world),
			_List_Nil));
};
var $justgook$webgl_playground$Playground$moveX = F2(
	function (dx, _v0) {
		var shape = _v0.a;
		var x = shape.x;
		var y = shape.y;
		var a = shape.a;
		var sx = shape.sx;
		var sy = shape.sy;
		var o = shape.o;
		var form = shape.form;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			_Utils_update(
				shape,
				{x: x + dx}));
	});
var $justgook$webgl_playground$Playground$rectangle = F3(
	function (color, width, height) {
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A3(
					$justgook$webgl_shape$WebGL$Shape2d$Form,
					width,
					height,
					$justgook$webgl_playground$Playground$Render$rect(color)),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: 0
			});
	});
var $author$project$RPG$System$Render$debugCenter = function (world) {
	return $justgook$webgl_playground$Playground$group(
		_List_fromArray(
			[
				A3($justgook$webgl_playground$Playground$rectangle, $justgook$webgl_playground$Playground$red, 2, 1000),
				A3($justgook$webgl_playground$Playground$rectangle, $justgook$webgl_playground$Playground$red, 1000, 2),
				A2(
				$justgook$webgl_playground$Playground$moveY,
				64,
				A3($justgook$webgl_playground$Playground$rectangle, $justgook$webgl_playground$Playground$red, 100, 2)),
				A2(
				$justgook$webgl_playground$Playground$moveY,
				-64,
				A3($justgook$webgl_playground$Playground$rectangle, $justgook$webgl_playground$Playground$red, 100, 2)),
				A2(
				$justgook$webgl_playground$Playground$moveX,
				128,
				A3($justgook$webgl_playground$Playground$rectangle, $justgook$webgl_playground$Playground$red, 2, 100)),
				A2(
				$justgook$webgl_playground$Playground$moveX,
				-128,
				A3($justgook$webgl_playground$Playground$rectangle, $justgook$webgl_playground$Playground$red, 2, 100))
			]));
};
var $author$project$RPG$Asset$Anim$tile64 = function (url) {
	return A3($justgook$webgl_playground$Playground$Extra$tile, 64, 64, 'assets/lpc/body/' + url);
};
var $author$project$RPG$Asset$Anim$anim = F2(
	function (url, i) {
		return $justgook$webgl_playground$Playground$group(
			_List_fromArray(
				[
					A2($author$project$RPG$Asset$Anim$tile64, 'shadow.png', i),
					A2($author$project$RPG$Asset$Anim$tile64, url, i)
				]));
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $author$project$RPG$Asset$Anim$all = $elm$core$Array$fromList(
	_List_fromArray(
		[
			$author$project$RPG$Asset$Anim$anim('male/base.png'),
			$author$project$RPG$Asset$Anim$anim('female/base.png')
		]));
var $author$project$RPG$System$Render$Character$system = function (_v0) {
	var server = _v0.server;
	return $justgook$webgl_playground$Playground$group(
		A3(
			$elm$core$Dict$foldl,
			F2(
				function (_v1, _v2) {
					var body = _v2.body;
					var anim = _v2.anim;
					var name = _v2.name;
					var p = _v2.p;
					return A2(
						$elm$core$Maybe$withDefault,
						$elm$core$Basics$identity,
						A2(
							$elm$core$Maybe$map,
							function (fn) {
								return $elm$core$List$cons(
									$justgook$webgl_playground$Playground$group(
										_List_fromArray(
											[
												A3(
												$justgook$webgl_playground$Playground$move,
												p.x,
												p.y,
												fn(anim)),
												A2(
												$justgook$webgl_playground$Playground$moveY,
												24,
												$author$project$RPG$Asset$Text$text(name))
											])));
							},
							A2($elm$core$Array$get, body, $author$project$RPG$Asset$Anim$all)));
				}),
			_List_Nil,
			server._char));
};
var $justgook$webgl_playground$Playground$blue = A2(
	$elm$core$Maybe$withDefault,
	A3($elm_explorations$linear_algebra$Math$Vector3$vec3, 0, 0, 0),
	$justgook$webgl_playground$Playground$hexColor2Vec3('#3465a4'));
var $justgook$elm_game_logic$Logic$System$foldl2 = F4(
	function (f, comp1, comp2, acc_) {
		return A3(
			$justgook$elm_game_logic$Logic$Internal$indexedFoldlArray,
			F3(
				function (n, value, acc) {
					return A2(
						$elm$core$Maybe$withDefault,
						acc,
						A3(
							$elm$core$Maybe$map2,
							F2(
								function (a, b) {
									return A3(f, a, b, acc);
								}),
							value,
							A2($justgook$elm_game_logic$Logic$Component$get, n, comp2)));
				}),
			acc_,
			comp1);
	});
var $author$project$RPG$System$Render$Fx$system = function (world) {
	return $justgook$webgl_playground$Playground$group(
		A4(
			$justgook$elm_game_logic$Logic$System$foldl2,
			F2(
				function (fx, p) {
					return $elm$core$List$cons(
						A3(
							$justgook$webgl_playground$Playground$move,
							p.x,
							p.y,
							A2($justgook$webgl_playground$Playground$square, $justgook$webgl_playground$Playground$blue, 32)));
				}),
			world.fx,
			world.p,
			_List_Nil));
};
var $author$project$RPG$System$Render$Ui$blue = A3($justgook$webgl_playground$Playground$rgb, 89, 125, 206);
var $author$project$RPG$System$Render$Ui$config = {height: 64, padding: 16};
var $justgook$webgl_playground$Playground$fade = F2(
	function (o, _v0) {
		var shape = _v0.a;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			_Utils_update(
				shape,
				{o: o}));
	});
var $author$project$RPG$System$Render$Ui$green = A3($justgook$webgl_playground$Playground$rgb, 109, 170, 44);
var $author$project$RPG$System$Render$Ui$blue1 = A3($justgook$webgl_playground$Playground$rgb, 109, 194, 202);
var $author$project$RPG$System$Render$Ui$green1 = A3($justgook$webgl_playground$Playground$rgb, 218, 212, 94);
var $author$project$RPG$System$Render$Ui$red = A3($justgook$webgl_playground$Playground$rgb, 208, 70, 72);
var $author$project$RPG$System$Render$Ui$red1 = A3($justgook$webgl_playground$Playground$rgb, 210, 170, 153);
var $justgook$webgl_playground$Playground$Shader$vertSprite = {
	src: '\n            precision mediump float;\n            attribute vec2 aP;\n            uniform vec4 uT;\n            uniform vec2 uP;\n            varying vec2 uv;\n            uniform vec4 uUV;\n            vec2 edgeFix = vec2(0.0000001, -0.0000001);\n            void main () {\n                vec2 aP_ = aP * .5 + 0.5;\n                uv = uUV.xy + (aP_ * uUV.zw) + edgeFix;\n                gl_Position = vec4(aP * mat2(uT) + uP, 0., 1.0);\n            }\n        ',
	attributes: {aP: 'aP'},
	uniforms: {uP: 'uP', uT: 'uT', uUV: 'uUV'}
};
var $justgook$webgl_playground$Playground$Render$sprite = F6(
	function (image_, imageSize, uv, translate, scaleRotateSkew, opacity) {
		return A5(
			$elm_explorations$webgl$WebGL$entityWith,
			$justgook$webgl_playground$Playground$Render$defaultEntitySettings,
			$justgook$webgl_playground$Playground$Shader$vertSprite,
			$justgook$webgl_playground$Playground$Shader$fragImage,
			$justgook$webgl_playground$Playground$Shader$mesh,
			{uA: opacity, uImg: image_, uImgSize: imageSize, uP: translate, uT: scaleRotateSkew, uUV: uv});
	});
var $justgook$webgl_playground$Playground$Extra$sprite = F2(
	function (atlas, _v0) {
		var xmin = _v0.xmin;
		var xmax = _v0.xmax;
		var ymin = _v0.ymin;
		var ymax = _v0.ymax;
		var w = $elm$core$Basics$abs(xmax - xmin) + 1;
		var h = $elm$core$Basics$abs(ymax - ymin) + 1;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A2(
					$justgook$webgl_shape$WebGL$Shape2d$Textured,
					atlas,
					function (t) {
						var _v1 = $elm_explorations$webgl$WebGL$Texture$size(t);
						var tW_ = _v1.a;
						var tH_ = _v1.b;
						var tH = tH_;
						var tW = tW_;
						var uv = A4($elm_explorations$linear_algebra$Math$Vector4$vec4, xmin / tW, (1 - (ymin / tH)) - (h / tH), w / tW, h / tH);
						return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
							{
								a: 0,
								form: A3(
									$justgook$webgl_shape$WebGL$Shape2d$Form,
									w,
									h,
									A3(
										$justgook$webgl_playground$Playground$Render$sprite,
										t,
										A2($elm_explorations$linear_algebra$Math$Vector2$vec2, tW, tH),
										uv)),
								o: 1,
								sx: 1,
								sy: 1,
								x: 0,
								y: 0
							});
					}),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: 0
			});
	});
var $author$project$RPG$System$Render$Ui$sprite = $justgook$webgl_playground$Playground$Extra$sprite('assets/ui/ui-sheet.png');
var $author$project$RPG$System$Render$Ui$health = F3(
	function (h, s, m) {
		return $justgook$webgl_playground$Playground$group(
			_List_fromArray(
				[
					$author$project$RPG$System$Render$Ui$sprite(
					{xmax: 100, xmin: 1, ymax: 32, ymin: 1}),
					A3(
					$justgook$webgl_playground$Playground$move,
					(25 * h) - 13.5,
					10,
					A3($justgook$webgl_playground$Playground$rectangle, $author$project$RPG$System$Render$Ui$red, (50 * h) + 1, 4)),
					A3(
					$justgook$webgl_playground$Playground$move,
					(25 * h) - 13,
					11,
					A3($justgook$webgl_playground$Playground$rectangle, $author$project$RPG$System$Render$Ui$red1, 50 * h, 2)),
					A3(
					$justgook$webgl_playground$Playground$move,
					(25 * s) - 13.5,
					0,
					A3($justgook$webgl_playground$Playground$rectangle, $author$project$RPG$System$Render$Ui$green, (50 * s) + 1, 4)),
					A3(
					$justgook$webgl_playground$Playground$move,
					(25 * s) - 13,
					1,
					A3($justgook$webgl_playground$Playground$rectangle, $author$project$RPG$System$Render$Ui$green1, 50 * s, 2)),
					A3(
					$justgook$webgl_playground$Playground$move,
					(25 * m) - 13.5,
					-10,
					A3($justgook$webgl_playground$Playground$rectangle, $author$project$RPG$System$Render$Ui$blue, (50 * m) + 1, 4)),
					A3(
					$justgook$webgl_playground$Playground$move,
					(25 * m) - 13,
					-9,
					A3($justgook$webgl_playground$Playground$rectangle, $author$project$RPG$System$Render$Ui$blue1, 50 * m, 2))
				]));
	});
var $author$project$WebGL$Ui$Slice$fragSprite = {
	src: '\n        precision mediump float;\n        varying vec2 uv;\n        uniform vec2 uImgSize;\n        uniform sampler2D uImg;\n        uniform float uA;\n        uniform vec4 uUV;\n        uniform vec2 uUV2;\n        void main () {\n            vec2 uv2 = uUV.xy + (fract(uv * uUV2) * uUV.zw);\n            vec2 pixel = (floor(uv2 * uImgSize) + 0.5) / uImgSize;\n            gl_FragColor = texture2D(uImg, pixel);\n            gl_FragColor.a *= uA;\n        }\n    ',
	attributes: {},
	uniforms: {uA: 'uA', uImg: 'uImg', uImgSize: 'uImgSize', uUV: 'uUV', uUV2: 'uUV2'}
};
var $author$project$WebGL$Ui$Slice$vertSprite = {
	src: '\n            precision mediump float;\n            attribute vec2 aP;\n            uniform vec4 uT;\n            uniform vec2 uP;\n            varying vec2 uv;\n            vec2 edgeFix = vec2(0.0000001, -0.0000001);\n            void main () {\n                uv = aP * .5 + 0.5 + edgeFix;\n                gl_Position = vec4(aP * mat2(uT) + uP, 0., 1.0);\n            }\n        ',
	attributes: {aP: 'aP'},
	uniforms: {uP: 'uP', uT: 'uT'}
};
var $author$project$WebGL$Ui$Slice$spriteRender = F7(
	function (uv2, image_, imageSize, uv, uP, uT, opacity) {
		return A5(
			$elm_explorations$webgl$WebGL$entityWith,
			$author$project$WebGL$Ui$Internal$defaultEntitySettings,
			$author$project$WebGL$Ui$Slice$vertSprite,
			$author$project$WebGL$Ui$Slice$fragSprite,
			$author$project$WebGL$Ui$Internal$mesh,
			{uA: opacity, uImg: image_, uImgSize: imageSize, uP: uP, uT: uT, uUV: uv, uUV2: uv2});
	});
var $author$project$WebGL$Ui$repeat = F4(
	function (atlas, _v0, w_, h_) {
		var xmin = _v0.xmin;
		var xmax = _v0.xmax;
		var ymin = _v0.ymin;
		var ymax = _v0.ymax;
		var w = $elm$core$Basics$abs(xmax - xmin) + 1;
		var h = $elm$core$Basics$abs(ymax - ymin) + 1;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A2(
					$justgook$webgl_shape$WebGL$Shape2d$Textured,
					atlas,
					function (t) {
						var uv2 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, w_ / w, h_ / h);
						var _v1 = $elm_explorations$webgl$WebGL$Texture$size(t);
						var tW_ = _v1.a;
						var tH_ = _v1.b;
						var tH = tH_;
						var tW = tW_;
						var uv = A4($elm_explorations$linear_algebra$Math$Vector4$vec4, xmin / tW, (1 - (ymin / tH)) - (h / tH), w / tW, h / tH);
						return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
							{
								a: 0,
								form: A3(
									$justgook$webgl_shape$WebGL$Shape2d$Form,
									w_,
									h_,
									A4(
										$author$project$WebGL$Ui$Slice$spriteRender,
										uv2,
										t,
										A2($elm_explorations$linear_algebra$Math$Vector2$vec2, tW, tH),
										uv)),
								o: 1,
								sx: 1,
								sy: 1,
								x: 0,
								y: 0
							});
					}),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: 0
			});
	});
var $author$project$RPG$System$Render$Ui$spriteRepeat = $author$project$WebGL$Ui$repeat('assets/ui/ui-sheet.png');
var $author$project$RPG$System$Render$Ui$hotkeys = function (w) {
	return $justgook$webgl_playground$Playground$group(
		_List_fromArray(
			[
				A3(
				$author$project$RPG$System$Render$Ui$spriteRepeat,
				{xmax: 133, xmin: 109, ymax: 24, ymin: 1},
				25 * w,
				24),
				A3(
				$justgook$webgl_playground$Playground$move,
				((-12.5) * w) - 3.5,
				0,
				$author$project$RPG$System$Render$Ui$sprite(
					{xmax: 108, xmin: 102, ymax: 19, ymin: 6})),
				A3(
				$justgook$webgl_playground$Playground$move,
				(12.5 * w) + 4,
				0,
				$author$project$RPG$System$Render$Ui$sprite(
					{xmax: 141, xmin: 134, ymax: 19, ymin: 6}))
			]));
};
var $author$project$WebGL$Ui$Slice$fragSlice9 = {
	src: '\n        precision mediump float;\n        varying vec2 uv;\n        varying vec4 center;\n        varying vec2 uv2;\n        varying vec2 doRepeat;\n        varying vec2 repeat;\n        uniform float uA;\n        uniform sampler2D uImg;\n        uniform vec2 uImgSize;\n        void main () {\n        gl_FragColor = vec4(0.,0.,0.,1.);\n        vec2 pixel2 = fract(fract(uv) * repeat);\n\n        if (doRepeat.x < 1.0) {\n            pixel2.x = fract(uv.x);\n        }\n        if (doRepeat.y < 1.0) {\n            pixel2.y = fract(uv.y);\n        }\n\n        vec2 repeatPart = (pixel2 * center.zw + center.xy);\n\n        if (doRepeat.x < 1.0) {\n            repeatPart.x = (uv2.x);\n        }\n        if (doRepeat.y < 1.0) {\n            repeatPart.y = (uv2.y);\n        }\n\n        gl_FragColor = texture2D(uImg, (floor(repeatPart) + 0.5) / uImgSize );\n\n        }\n    ',
	attributes: {},
	uniforms: {uA: 'uA', uImg: 'uImg', uImgSize: 'uImgSize'}
};
var $author$project$WebGL$Ui$Slice$mesh9 = function () {
	var v9 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, -1);
	var v8 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -3, -1);
	var v7 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 3, 1);
	var v6 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 1);
	var v5 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, 1);
	var v4 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -3, 1);
	var v3 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 3, 3);
	var v2 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 3);
	var v15 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 3, -3);
	var v14 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, -3);
	var v13 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, -3);
	var v12 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -3, -3);
	var v11 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 3, -1);
	var v10 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, -1);
	var v1 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, 3);
	var v0 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -3, 3);
	return $elm_explorations$webgl$WebGL$triangleStrip(
		A2(
			$elm$core$List$map,
			function (i) {
				return {aP: i};
			},
			_List_fromArray(
				[v0, v4, v1, v5, v2, v6, v3, v7, v11, v6, v10, v5, v9, v4, v8, v12, v9, v13, v10, v14, v11, v15])));
}();
var $author$project$WebGL$Ui$Slice$vertSlice9 = {
	src: '\nprecision mediump float;\nattribute vec2 aP;\nuniform vec4 uT;\nuniform vec2 uP;\nuniform vec2 uSize;\nuniform vec2 uImgSize;\nuniform vec4 uSlice;\nuniform vec4 uBounds;\nvarying vec2 uv;\nvarying vec2 uv2;\nvarying vec4 center;\nvarying vec2 doRepeat;\nvarying vec2 repeat;\nvec2 edgeFix = vec2(0.0000001, -0.0000001);\nvoid main () {\n    doRepeat = vec2(0.0,0.0);\n    center = vec4(\n        uBounds.x + uSlice.x,\n        uImgSize.y - (uBounds.y + uSlice.y + uSlice.w),\n        uSlice.z,\n        uSlice.w\n    );\n    repeat = vec2((uSize.x - (uBounds.z - uSlice.z)) / uSlice.z, (uSize.y - (uBounds.w - uSlice.w)) / uSlice.w);\n    vec2 p = aP;\n    uv2 = vec2(0.0, 0.0);\n\n    if (aP.x == -1.0) {\n        p.x = -1.0 + (uSlice.x / uSize.x * 2.0);\n        uv.x = 1.0;\n        doRepeat.x = 1.0;\n        uv2.x = (uBounds.x + uSlice.x);\n    }\n    if (aP.x == 1.0) {\n        p.x = 1.0 - (uBounds.z - uSlice.x - uSlice.z) / uSize.x * 2.0;\n        uv.x = 2.0;\n        doRepeat.x = 1.0;\n        uv2.x = (uBounds.x + uSlice.x + uSlice.z);\n    }\n    if (aP.y == 1.0) {\n        p.y = 1.0 - (uSlice.y / uSize.y * 2.0);\n        uv.y = 2.0;\n        doRepeat.y = 1.0;\n        uv2.y = uImgSize.y - (uBounds.y + uSlice.y);\n    }\n    if (aP.y == -1.0) {\n        p.y = -1.0 + (uBounds.w - uSlice.y - uSlice.w) / uSize.y * 2.0;\n        uv.y = 1.0;\n        doRepeat.y = 1.0;\n        uv2.y = uImgSize.y - (uBounds.y + uSlice.y + uSlice.w);\n    }\n    if (aP.x == -3.0) {\n        p.x = -1.0;\n        uv.x = 0.0;\n        uv2.x = uBounds.x;\n    }\n    if (aP.x == 3.0) {\n        p.x = 1.0;\n        uv.x = 3.0;\n        uv2.x = (uBounds.x + uBounds.z);\n    }\n    if (aP.y == 3.0) {\n        p.y = 1.0;\n        uv.y = 3.0;\n        uv2.y = uImgSize.y - uBounds.y;\n    }\n    if (aP.y == -3.0) {\n        p.y = -1.0;\n        uv.y = 0.0;\n        uv2.y = uImgSize.y - (uBounds.y + uBounds.w);\n    }\n\n    uv += edgeFix;\n    uv2 += edgeFix;\n\n    gl_Position = vec4(p * mat2(uT) + uP, 0., 1.0);\n\n}\n        ',
	attributes: {aP: 'aP'},
	uniforms: {uBounds: 'uBounds', uImgSize: 'uImgSize', uP: 'uP', uSize: 'uSize', uSlice: 'uSlice', uT: 'uT'}
};
var $author$project$WebGL$Ui$Slice$slice9Render = F8(
	function (img, imageSize, uSize, uBounds, uSlice, uP, uT, opacity) {
		return A5(
			$elm_explorations$webgl$WebGL$entityWith,
			$author$project$WebGL$Ui$Internal$defaultEntitySettings,
			$author$project$WebGL$Ui$Slice$vertSlice9,
			$author$project$WebGL$Ui$Slice$fragSlice9,
			$author$project$WebGL$Ui$Slice$mesh9,
			{uA: opacity, uBounds: uBounds, uImg: img, uImgSize: imageSize, uP: uP, uSize: uSize, uSlice: uSlice, uT: uT});
	});
var $author$project$WebGL$Ui$Slice$slice9 = F4(
	function (atlas, _v0, w, h) {
		var bounds = _v0.bounds;
		var slice = _v0.slice;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A2(
					$justgook$webgl_shape$WebGL$Shape2d$Textured,
					atlas,
					function (texture) {
						var _v1 = $elm_explorations$webgl$WebGL$Texture$size(texture);
						var tW_ = _v1.a;
						var tH_ = _v1.b;
						var th = tH_;
						var tw = tW_;
						return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
							{
								a: 0,
								form: A3(
									$justgook$webgl_shape$WebGL$Shape2d$Form,
									w,
									h,
									A5(
										$author$project$WebGL$Ui$Slice$slice9Render,
										texture,
										A2($elm_explorations$linear_algebra$Math$Vector2$vec2, tw, th),
										A2($elm_explorations$linear_algebra$Math$Vector2$vec2, w, h),
										A4($elm_explorations$linear_algebra$Math$Vector4$vec4, bounds.x, bounds.y, bounds.w, bounds.h),
										A4($elm_explorations$linear_algebra$Math$Vector4$vec4, slice.x, slice.y, slice.w, slice.h))),
								o: 1,
								sx: 1,
								sy: 1,
								x: 0,
								y: 0
							});
					}),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: 0
			});
	});
var $author$project$WebGL$Ui$slice9 = $author$project$WebGL$Ui$Slice$slice9;
var $author$project$RPG$System$Render$Ui$border = A2(
	$author$project$WebGL$Ui$slice9,
	'assets/ui/ui-sheet.png',
	{
		bounds: {h: 39, w: 67, x: 1, y: 34},
		slice: {h: 24, w: 50, x: 9, y: 9}
	});
var $author$project$RPG$System$Render$Ui$border2 = A2(
	$author$project$WebGL$Ui$slice9,
	'assets/ui/ui-sheet.png',
	{
		bounds: {h: 8, w: 8, x: 69, y: 34},
		slice: {h: 1, w: 1, x: 4, y: 4}
	});
var $justgook$webgl_playground$Playground$scale = F2(
	function (ns, _v0) {
		var shape = _v0.a;
		var x = shape.x;
		var y = shape.y;
		var a = shape.a;
		var sx = shape.sx;
		var sy = shape.sy;
		var o = shape.o;
		var form = shape.form;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			_Utils_update(
				shape,
				{sx: sx * ns, sy: sy * ns}));
	});
var $justgook$webgl_playground$Playground$white = A2(
	$elm$core$Maybe$withDefault,
	A3($elm_explorations$linear_algebra$Math$Vector3$vec3, 0, 0, 0),
	$justgook$webgl_playground$Playground$hexColor2Vec3('#ffffff'));
var $justgook$webgl_playground$Playground$Shader$fragImageColor = {
	src: '\n        precision mediump float;\n        varying vec2 uv;\n        uniform vec2 uImgSize;\n        uniform sampler2D uImg;\n        uniform vec4 color;\n        void main () {\n            vec2 pixel = ((floor(uv * uImgSize) + 0.5) * 2.0 ) / uImgSize / 2.0;\n            gl_FragColor = texture2D(uImg, pixel) * color;\n        }\n    ',
	attributes: {},
	uniforms: {color: 'color', uImg: 'uImg', uImgSize: 'uImgSize'}
};
var $justgook$webgl_playground$Playground$Render$tileWithColor = F8(
	function (spriteSheet, spriteSize, imageSize, color, index, translate, scaleRotateSkew, opacity) {
		return A5(
			$elm_explorations$webgl$WebGL$entityWith,
			$justgook$webgl_playground$Playground$Render$defaultEntitySettings,
			$justgook$webgl_playground$Playground$Shader$vertTile,
			$justgook$webgl_playground$Playground$Shader$fragImageColor,
			$justgook$webgl_playground$Playground$Shader$mesh,
			{
				color: A2($justgook$webgl_playground$Playground$Render$setAlpha, color, opacity),
				index: index,
				spriteSize: spriteSize,
				uA: opacity,
				uImg: spriteSheet,
				uImgSize: imageSize,
				uP: translate,
				uT: scaleRotateSkew
			});
	});
var $justgook$webgl_playground$Playground$Extra$Font$char = F8(
	function (spriteSheet, imageSize, color, w, h, x, y, index) {
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A3(
					$justgook$webgl_shape$WebGL$Shape2d$Form,
					w,
					h,
					A5(
						$justgook$webgl_playground$Playground$Render$tileWithColor,
						spriteSheet,
						A2($elm_explorations$linear_algebra$Math$Vector2$vec2, w, h),
						imageSize,
						color,
						index)),
				o: 1,
				sx: 1,
				sy: 1,
				x: x,
				y: y
			});
	});
var $justgook$webgl_playground$Playground$Extra$Font$outputFold = F6(
	function (toChar, getIndex, w, h, c, _v0) {
		var chars = _v0.chars;
		var x = _v0.x;
		var y = _v0.y;
		var width = _v0.width;
		return _Utils_eq(
			c,
			_Utils_chr('\n')) ? {
			chars: chars,
			width: A2($elm$core$Basics$max, width, x),
			x: w,
			y: y - h
		} : {
			chars: A2(
				$elm$core$List$cons,
				A3(
					toChar,
					x,
					y,
					getIndex(c)),
				chars),
			width: width,
			x: x + w,
			y: y
		};
	});
var $justgook$webgl_playground$Playground$Extra$Font$tileFont = F3(
	function (_v0, color, string) {
		var charW = _v0.charW;
		var charH = _v0.charH;
		var src = _v0.src;
		var getIndex = _v0.getIndex;
		return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
			{
				a: 0,
				form: A2(
					$justgook$webgl_shape$WebGL$Shape2d$Textured,
					src,
					function (t) {
						var _v1 = A3(
							$elm$core$Tuple$mapBoth,
							$elm$core$Basics$toFloat,
							$elm$core$Basics$toFloat,
							$elm_explorations$webgl$WebGL$Texture$size(t));
						var imgW = _v1.a;
						var imgH = _v1.b;
						var imgSize = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, imgW, imgH);
						var toChar = A5($justgook$webgl_playground$Playground$Extra$Font$char, t, imgSize, color, charW, charH);
						var output = A3(
							$elm$core$List$foldl,
							A4($justgook$webgl_playground$Playground$Extra$Font$outputFold, toChar, getIndex, charW, charH),
							{chars: _List_Nil, width: 0, x: charW, y: charH},
							$elm$core$String$toList(string));
						return $justgook$webgl_shape$WebGL$Shape2d$Shape2d(
							{
								a: 0,
								form: $justgook$webgl_shape$WebGL$Shape2d$Group(output.chars),
								o: 1,
								sx: 1,
								sy: 1,
								x: A2($elm$core$Basics$max, output.x, output.width) * (-0.5),
								y: (output.y * (-0.5)) + (0.5 * (-charH))
							});
					}),
				o: 1,
				sx: 1,
				sy: 1,
				x: 0,
				y: 0
			});
	});
var $justgook$webgl_playground$Playground$Font$SimpleMood$image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAAXNSR0IArs4c6QAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5TAP9bkSK1AAAPR0lEQVR4nO2aiZKsOg5E7f//6RfxugEpM7UYqK1veaYvyJYl5fFSRMyM8eI2oRUOzy5J2cEkipGN62wqQwnocIq7eHIqxefj/P6hBFNBMbyzAKwl5rouLN/9sw7A9geCK7sQiO/WVwM4/j2Gj67JC/erQFd0RN/+ttR6R/AKSFOPOx2GsDFQFuFYAwAbogZgcozoSACOn+LChMUKlwAwoAbAC5QcmRLANhgdCTCHeUFeHQCH2iOGM34JVwB8PmOHB0DcAQUAaRsABOwGAL9680uQDIPPLlAJwIEEh8D/SQCgZlBxBYB94wmBHAvkyQDYigFsL1p9CwBuOZbnLsEJcS5fgiUAV90AiFy/ACALJwWQkDps/oMHjGPUFgChME6PC0l3ogJgXBSAAbOLgsg/TOfPGM7040V+P+h1/OyYoKYWANiAy0ByACvjuh6KMA69xzFqlGTFJelXgQTZHgNArnTm/9xWCmzp/7aHtxX2nfXCsfwIPbbJYqFTve994s6oCOBYZV9u7lcB3lSx0EcGPgHA7hiW4xNSAQSA/RO1OqF55xdZEH3q+WDHc/9tFZ9oUTm4pyqF0X7U8aGOdAEbBS0DUJsqlKPuDDGZCzgGyNP3c/3uy1B7UJLwDmAAQtF5ABPjYQemofyhKWoI9BcADqbDFpQAgeQ/9j5vG2e9k20EoMZd/ssAqOUAqCAG4AQjkKcA8LYgkALYitAJBABO4IGE9UZHQEYPBVf6Vy9BBHC4hzsA9Zd3gnMRczG6eYhLr9JLPYsATJgAAO2oND154Bi243IO6q30BwQgfQRArAQvqbi5KX3sUBHA2PCidxzNipg3ALBgFT3Ut6iwaLZK0bkcpeNb6K8BrBf4bd/2vIaX3c+G/VubFm9J86gBbAPhrz7M3lxCcxDeWy7JJAT/Bh5FTdfGoEvPOtphzqDzkb3hhQnnVPsk2VgbgORhJG5WmEDV4gHg/7ByBwC1LXV9HQADntPEFwDUinMF4H76SyiWmI8GAOgOoEhefwgAbK4gq4eQoHM8LiuQMbxvCgDzOWseEUxXLBd6UNAdAAr9i78CnFDQmNm2vQFA7B/ku3CEEADVvAs+3OsFyXqYLgqckD0F0NBf0bMZ7MqY+HbF8og3XII5XxUu9q3iSQC2xN8XD+DKDpjlz2BHf3A+GxPkGCk+ZlguOKGZz9s/AH/+jAPO7+pp6K83rHnYEg/Ljm/piy2AAMAhra/S5PyvfkKUAL7t277trRvdyeKSFnfyMS5sN6fhv2QP/bsvVCWClRz+lnef79EEZeOz8l+x9y7U0NSvvsydRuoYinC8CtEzi9WZvwKAJboeMj4NQBVT8iEkh+FjfAKAvMn9IJiwx1HInDGAOSGit+cMbT1dAMjiLeuvnVhOBoDrKRQ2BYXjHQATF+gEAFVIBCAK2bFV/JXxUs7JIxAWkr1nBT4SgFSYyssRSSFvDEDJId/uzyDlmqYpBxxX/ijkZn8FYAwM1jwwQTzqQvdjXOsZ4fgN/jBZiE0IyNQJr3+h/ev6v8216JL6V9qcSCCylr+E/++g8OpD0j6DS3PrmeBPnhivik8AKgHFeAlA2XcDEH7Jz64N3iD46Ce+BytLAj0pAJ7mfRCASMw9AI51bwGYDwBQCaoARPM7AA55XQAz1eNmBAFS4jIgFpQAAJcegGY8Zb8DgLDAOwAMWPFlAJFjF4AaBzssqA0gOQL0fASAVUAVsAiA9jsI9OIXAOzLXQAqINcAxDvojH8GYNo2oEOMaxsAYDwn2g/LfFV91TPSUwFABWU8BWCICRkAle8KgCQ+Xzzf9m3f9jdacrpXL7nqln7Iz6guIBLHN1p2v8lb1NjV+MsBsDgCgDzY/drz+No6LZC/RxBoKFmLs50E5F4A0Xt7frTA/PkkskUEyD0mcEX4LQBohQr9VIEiwPslJDBNiwq1FaF9CsB0/3M86s31sxRB4ByAUIBcoGBN5Hw8436+FBwL1HKZyQIAZcOKJYxzAHimGQDirK45IYXqC+VyawEwGRTRFAAIJAC0IaCmlrgGpBUAtqLfJ9oLAPwWV/EnKMD3ORColJEek0x/RMAFdh1yTbVAKucQPDCuqqnKxzn0eB+A6VcAeMsGpl+QgUZySZ0CMKJ6lN4Ooz7Dj2p9AN/2bf9Oyw5D96h0rp32vKQvuP8vHed0/mUAxZ3zNgBSAt0oWX813m0q3tUL3ROABaMFjO3w298VCVuCN4hcEOefAujXC9Fpvv7yO2OzEgnAVVgAcD74vlLfPgsSEumTT8pVzVPQ2E/H3N9n/n+IiHIQws5ENW7mPwQALN+9AEDAFQBSTBW/DWDy2G0AViZ2xxWBswDQ5SUAVp/dPE0Aof/VutwWnWTmt6q41Q9HXeAEm/e4cez4d4T7BBkB5R/b6pBKAAioBLDgXwGQl8hT23IBry74277t7dvrz8ezC4Arga2inLvLffYK4J0oAKT13F7vKwD0bSrOEYKfZerJxsnfJr/zib+DSwBoP8Ry1ZddOv4iAFISSfRyx37wD11+8uozKqA1f5r/fwAUJPOw/vKM8/IkX4arT78gNYC5P7Izpeez5EUAR4ZtbLiXrnCITiVFANS3OswXRjw+DEyVP3QA3Q6ATajsIVobQHLpqHEGjPpXfwWc7PIOCy+18wCKFf55oTRQYJi7B8CPifyhQErPK0hnTI5DYMqfPXW+SLAgltQfeW/9PM71eC89PtCILj1dIASsAUT6Q6Hd/sc3BbAx5YEVfdu/1fBM+t7BW/S4K9hX+auEV+J1/NWvciRIApDu4c+Yuq9CAqfiLfirXx1XDwZUANR7UgD5VwBW4634q3wEoJp0pVUAHt5gwwRHyPu7/k6AZ9ryMyi25/QB0C4BVAGebZ8BkD1bADK/VfvqczX3LQDcCly0VT4cz+wzANJ4FaFEz+ktHQBo2S8BoILf/eyKOwMgzRut0COfV/LdDsBUFAKJ7HnCvpJP1VvZNk4ElI1egnOXwPl8p+wOAFfPE9qz833bZ7Wf/RFu4Ucm7fvimXMRIFh+A+ifpRsByPkYLA0Od9gEmwFEd1x8B64KDBDLeNGl186GAqoVU8mivjBeIogBNOoDxbQc6AAA9n9qXNdbC7jYUNZv7g/lH29R7NjM339oQsuOhFx5ckJJcLfNQwPQgM1EM0GMl/Yjn/pGM31NAK5Z0c8W1BeOCwJdoYM2VcTPBIAdqwBArzwCdz+vAFZ7GAWZhxwHouT8UABqx60AG3797rgE6Q7Y/3kIgEWwKBD1S4FzUpcYpwVxAKIVuMPGZ+aPAsQ4OyfDBEAQ9hdF4b9qk4BqfrWCoHB7xYDjbZoQeHd4+xzA79tuaPP3Go3sT2i4K1bsn+0LR3CsbLPX78mL+t1vEdr7IY/stVvJ3GWuI7wkx7Elp3s9qZdsjMh2daufAmAvtzlwCVw8J1oTeGQ7CtT2YMBFvG1KEwBIJgK0InKD7l02cTQ+cbwAsNJQrwBAdEkwAJF7lPWvfLmtASAaFA98Yb3MQwHDUdEFRaj3ledWIxIE28tl/fvKIiDqYNEeD883nVjgPQBMvIOIlzekucc6AOAO2eJl+sMTT51c8N0A8hatcGzvPPcFNA8EUB8BFHAHAHdwEYgwf196AH6nbltgM71mL4D42I6HALA1NAFE+dWYXfISgBDsgEzbggL1cArC15A0BaDpb4EkAOjIO/2ZQhyXdgGiJcgnKCe4vOIOUDto+5f1v7wt6v+229t0f/Sf6f9+pvAWSy8t5ROWs3ikOv5Zbi////+6P0DQAjBV8iaA2RG06J+fLyTg/+QGSADwgc4FoPth6Oe0bcm/J788Aw8D4OY3AcwbACzq/4MA7rgDSIAZpwIbACS4BID1h4EawMU7QCZIVhTqJ38fRD2jORqQrsfmpr+1O0ATbgKgY7IAILCr+KreS3fA5wO4eAdIABPHiwIJ4AkAU8QP63Fzr90BZQIAUF1Sx6sGgOMSKJaWLNALvgOEIAJY+V8EAPVfugM+H8DFO+CtALD+ocdcxw13QHInVADIvwDA42eazUd/1+4AthsAlvxvBtATVAYoxleBqLl3jr8EAB4f9YxusWT8zPxJvk8B8Js1BTCds5kluyle1LL5bwdgVcAXwF0AJtZbCEzGaX5YsIUVA8AgEkBCIJ1fzF2IVfnD7tjGzVAHrqS94B4HeTQALDgDsFr7NfUnBf0pAH1Fi+7NI4D3xWrpV+V3cvCltuoPK775ILB9apPqmr8eahHI7I6/AsB1rf6s3fQz+AXwQgADCvq7AGAsiuEK1sPyQ6rrf6rdAQDfOwA641fj1Q4N/xW4nflxvGoLV/1i/l0AVo+TmUI1vxBAlSABYP3b83W+jwfQn/8F8HIA8OwBMPNWAey9Sb4g80MAdAMe48ofpzpbpR1AUORr1f9OAHBWlnoVQKj/CyAU1gRzAsAQ/jjV2lF5Rb60ihsBlIK3eel8CcROhMv2gFQVjkCfD6D1pVgBsPP9sw9A1/cF8B4A8Oh+MADjDcn70/kSzJ6YL4rnhTwWAP2MYd+V+SpeFfvpAL7tn26wj7KN1RlfzbdsX80Xj9svtucBqPJrmz5GG+k80Z+X0bi0IIJ9RuPBfFcUvjef07WxySB9Lr2sx0asElNEwx4LiufDlEUAzt18cOxagnoVgIETENBwbXew9cvVjApnDcdoKVzp8QB2uxvPiVgH4AlsFUWCJADT1VkxM94GEC5IACDaci8BYA81PEsAdnc/CICLfw7ATPwh4PsB8PolAC8RAQw3KPJukk4BwPo1AFMgFlwBmEdi4y8BQAQuShU4j4DREXAZovqj57EBOQCtTghAAmRxEgBMkPEAAI/LAGE8X9c+dgCAxSEA/hFkVGIhhCpYCsAzKqrqxmcAPDmJ/CHtD0j47Kb2c7VrP7uBvALAm4FQy8P3oJgjQhgb3+iHjWZfVBDbrekJACagJNiFdQCc27C7Rf9urtTMhrC7wWIAcsFxvAvAHgj55bRSsgtLBYH3cnjskgbnGwAAFMMukACqcisAYr2SiLQD7gXg+0UMBsD1pvkIgCp+BYBOWB8BZYc6mHcCQMRHi6b374QagBRcFJgAUPvHRcgA0HKHAOL4jXbiZxCHRSBz/ovs8RH4f2RNzZkdsNgyAL7xr2Annih3sboVAKv2kFs0+hkEHCfaxwMYZ1aRCj4590HNA0Bakdcd6d6koUzBAxb97SRca/GSRADepf0HLcFaUmZNR2YAAAAASUVORK5CYII=';
var $justgook$webgl_playground$Playground$Font$SimpleMood$letters_ = $elm$core$Dict$fromList(
	A2(
		$elm$core$List$indexedMap,
		F2(
			function (a, b) {
				return _Utils_Tuple2(b, a);
			}),
		$elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[
						_Utils_chr('\u0000'),
						_Utils_chr('☺'),
						_Utils_chr('☻'),
						_Utils_chr('♥'),
						_Utils_chr('♦'),
						_Utils_chr('♣'),
						_Utils_chr('♠'),
						_Utils_chr('•'),
						_Utils_chr('◘'),
						_Utils_chr('○'),
						_Utils_chr('◙'),
						_Utils_chr('♂'),
						_Utils_chr('♀'),
						_Utils_chr('♪'),
						_Utils_chr('♫'),
						_Utils_chr('☼')
					]),
					_List_fromArray(
					[
						_Utils_chr('►'),
						_Utils_chr('◄'),
						_Utils_chr('↕'),
						_Utils_chr('‼'),
						_Utils_chr('¶'),
						_Utils_chr('§'),
						_Utils_chr('▬'),
						_Utils_chr('↨'),
						_Utils_chr('↑'),
						_Utils_chr('↓'),
						_Utils_chr('→'),
						_Utils_chr('←'),
						_Utils_chr('∟'),
						_Utils_chr('↔'),
						_Utils_chr('▲'),
						_Utils_chr('▼')
					]),
					_List_fromArray(
					[
						_Utils_chr(' '),
						_Utils_chr('!'),
						_Utils_chr('\"'),
						_Utils_chr('#'),
						_Utils_chr('$'),
						_Utils_chr('%'),
						_Utils_chr('&'),
						_Utils_chr('\''),
						_Utils_chr('('),
						_Utils_chr(')'),
						_Utils_chr('*'),
						_Utils_chr('+'),
						_Utils_chr(','),
						_Utils_chr('-'),
						_Utils_chr('.'),
						_Utils_chr('/')
					]),
					_List_fromArray(
					[
						_Utils_chr('0'),
						_Utils_chr('1'),
						_Utils_chr('2'),
						_Utils_chr('3'),
						_Utils_chr('4'),
						_Utils_chr('5'),
						_Utils_chr('6'),
						_Utils_chr('7'),
						_Utils_chr('8'),
						_Utils_chr('9'),
						_Utils_chr(':'),
						_Utils_chr(';'),
						_Utils_chr('<'),
						_Utils_chr('='),
						_Utils_chr('>'),
						_Utils_chr('?')
					]),
					_List_fromArray(
					[
						_Utils_chr('@'),
						_Utils_chr('A'),
						_Utils_chr('B'),
						_Utils_chr('C'),
						_Utils_chr('D'),
						_Utils_chr('E'),
						_Utils_chr('F'),
						_Utils_chr('G'),
						_Utils_chr('H'),
						_Utils_chr('I'),
						_Utils_chr('J'),
						_Utils_chr('K'),
						_Utils_chr('L'),
						_Utils_chr('M'),
						_Utils_chr('N'),
						_Utils_chr('O')
					]),
					_List_fromArray(
					[
						_Utils_chr('P'),
						_Utils_chr('Q'),
						_Utils_chr('R'),
						_Utils_chr('S'),
						_Utils_chr('T'),
						_Utils_chr('U'),
						_Utils_chr('V'),
						_Utils_chr('W'),
						_Utils_chr('X'),
						_Utils_chr('Y'),
						_Utils_chr('Z'),
						_Utils_chr('['),
						_Utils_chr('\\'),
						_Utils_chr(']'),
						_Utils_chr('^'),
						_Utils_chr('_')
					]),
					_List_fromArray(
					[
						_Utils_chr('`'),
						_Utils_chr('a'),
						_Utils_chr('b'),
						_Utils_chr('c'),
						_Utils_chr('d'),
						_Utils_chr('e'),
						_Utils_chr('f'),
						_Utils_chr('g'),
						_Utils_chr('h'),
						_Utils_chr('i'),
						_Utils_chr('j'),
						_Utils_chr('k'),
						_Utils_chr('l'),
						_Utils_chr('m'),
						_Utils_chr('n'),
						_Utils_chr('o')
					]),
					_List_fromArray(
					[
						_Utils_chr('p'),
						_Utils_chr('q'),
						_Utils_chr('r'),
						_Utils_chr('s'),
						_Utils_chr('t'),
						_Utils_chr('u'),
						_Utils_chr('v'),
						_Utils_chr('w'),
						_Utils_chr('x'),
						_Utils_chr('y'),
						_Utils_chr('z'),
						_Utils_chr('{'),
						_Utils_chr('|'),
						_Utils_chr('}'),
						_Utils_chr('~'),
						_Utils_chr('⌂')
					]),
					_List_fromArray(
					[
						_Utils_chr('Ç'),
						_Utils_chr('ü'),
						_Utils_chr('é'),
						_Utils_chr('â'),
						_Utils_chr('ä'),
						_Utils_chr('à'),
						_Utils_chr('å'),
						_Utils_chr('ç'),
						_Utils_chr('ê'),
						_Utils_chr('ë'),
						_Utils_chr('è'),
						_Utils_chr('ï'),
						_Utils_chr('î'),
						_Utils_chr('ì'),
						_Utils_chr('Ä'),
						_Utils_chr('Å')
					]),
					_List_fromArray(
					[
						_Utils_chr('É'),
						_Utils_chr('æ'),
						_Utils_chr('Æ'),
						_Utils_chr('ô'),
						_Utils_chr('ö'),
						_Utils_chr('ò'),
						_Utils_chr('û'),
						_Utils_chr('ù'),
						_Utils_chr('ÿ'),
						_Utils_chr('Ö'),
						_Utils_chr('Ü'),
						_Utils_chr('¢'),
						_Utils_chr('£'),
						_Utils_chr('¥'),
						_Utils_chr('₧'),
						_Utils_chr('ƒ')
					]),
					_List_fromArray(
					[
						_Utils_chr('á'),
						_Utils_chr('í'),
						_Utils_chr('ó'),
						_Utils_chr('ú'),
						_Utils_chr('ñ'),
						_Utils_chr('Ñ'),
						_Utils_chr('ª'),
						_Utils_chr('º'),
						_Utils_chr('¿'),
						_Utils_chr('⌐'),
						_Utils_chr('¬'),
						_Utils_chr('½'),
						_Utils_chr('¼'),
						_Utils_chr('¡'),
						_Utils_chr('«'),
						_Utils_chr('»')
					]),
					_List_fromArray(
					[
						_Utils_chr('░'),
						_Utils_chr('▒'),
						_Utils_chr('▓'),
						_Utils_chr('│'),
						_Utils_chr('┤'),
						_Utils_chr('╡'),
						_Utils_chr('╢'),
						_Utils_chr('╖'),
						_Utils_chr('╕'),
						_Utils_chr('╣'),
						_Utils_chr('║'),
						_Utils_chr('╗'),
						_Utils_chr('╝'),
						_Utils_chr('╜'),
						_Utils_chr('╛'),
						_Utils_chr('┐')
					]),
					_List_fromArray(
					[
						_Utils_chr('└'),
						_Utils_chr('┴'),
						_Utils_chr('┬'),
						_Utils_chr('├'),
						_Utils_chr('─'),
						_Utils_chr('┼'),
						_Utils_chr('╞'),
						_Utils_chr('╟'),
						_Utils_chr('╚'),
						_Utils_chr('╔'),
						_Utils_chr('╩'),
						_Utils_chr('╦'),
						_Utils_chr('╠'),
						_Utils_chr('═'),
						_Utils_chr('╬'),
						_Utils_chr('╧')
					]),
					_List_fromArray(
					[
						_Utils_chr('╨'),
						_Utils_chr('╤'),
						_Utils_chr('╥'),
						_Utils_chr('╙'),
						_Utils_chr('╘'),
						_Utils_chr('╒'),
						_Utils_chr('╓'),
						_Utils_chr('╫'),
						_Utils_chr('╪'),
						_Utils_chr('┘'),
						_Utils_chr('┌'),
						_Utils_chr('█'),
						_Utils_chr('▄'),
						_Utils_chr('▌'),
						_Utils_chr('▐'),
						_Utils_chr('▀')
					]),
					_List_fromArray(
					[
						_Utils_chr('α'),
						_Utils_chr('ß'),
						_Utils_chr('Γ'),
						_Utils_chr('π'),
						_Utils_chr('Σ'),
						_Utils_chr('σ'),
						_Utils_chr('µ'),
						_Utils_chr('τ'),
						_Utils_chr('Φ'),
						_Utils_chr('Θ'),
						_Utils_chr('Ω'),
						_Utils_chr('δ'),
						_Utils_chr('∞'),
						_Utils_chr('φ'),
						_Utils_chr('ε'),
						_Utils_chr('∩')
					]),
					_List_fromArray(
					[
						_Utils_chr('≡'),
						_Utils_chr('±'),
						_Utils_chr('≥'),
						_Utils_chr('≤'),
						_Utils_chr('⌠'),
						_Utils_chr('⌡'),
						_Utils_chr('÷'),
						_Utils_chr('≈'),
						_Utils_chr('°'),
						_Utils_chr('∙'),
						_Utils_chr('·'),
						_Utils_chr('√'),
						_Utils_chr('ⁿ'),
						_Utils_chr('²'),
						_Utils_chr('■'),
						_Utils_chr('\u00A0')
					])
				]))));
var $justgook$webgl_playground$Playground$Font$SimpleMood$letters = function (c) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		A2($elm$core$Dict$get, c, $justgook$webgl_playground$Playground$Font$SimpleMood$letters_));
};
var $justgook$webgl_playground$Playground$wordsConfig = {charH: 16, charW: 16, getIndex: $justgook$webgl_playground$Playground$Font$SimpleMood$letters, src: $justgook$webgl_playground$Playground$Font$SimpleMood$image};
var $justgook$webgl_playground$Playground$words = $justgook$webgl_playground$Playground$Extra$Font$tileFont($justgook$webgl_playground$Playground$wordsConfig);
var $author$project$RPG$System$Render$Ui$inventory = function () {
	var cell = A2($author$project$RPG$System$Render$Ui$border2, 16, 16);
	return $justgook$webgl_playground$Playground$group(
		A2(
			$elm$core$List$cons,
			A2(
				$justgook$webgl_playground$Playground$moveY,
				67,
				$justgook$webgl_playground$Playground$group(
					_List_fromArray(
						[
							A2($author$project$RPG$System$Render$Ui$border, 102, 30),
							A2(
							$justgook$webgl_playground$Playground$scale,
							0.5,
							A2($justgook$webgl_playground$Playground$words, $justgook$webgl_playground$Playground$white, 'INVENTORY'))
						]))),
			A2(
				$elm$core$List$cons,
				A2($author$project$RPG$System$Render$Ui$border, 102, 102),
				A2(
					$elm$core$List$map,
					function (i) {
						return A3(
							$justgook$webgl_playground$Playground$move,
							(A2($elm$core$Basics$modBy, 5, i) * 17) - 34,
							17 * $elm$core$Basics$floor(i / 5),
							cell);
					},
					A2($elm$core$List$range, 0, 14)))));
}();
var $author$project$RPG$Component$Chat$system = function (_v0) {
	var chat = _v0.chat;
	return $justgook$webgl_playground$Playground$group(
		_List_fromArray(
			[
				$justgook$webgl_playground$Playground$group(chat.messages),
				$author$project$RPG$Asset$Text$chat(chat.input)
			]));
};
var $author$project$RPG$System$Render$Ui$system = F2(
	function (_v0, world) {
		var bottom = _v0.bottom;
		var left = _v0.left;
		var right = _v0.right;
		var top = _v0.top;
		var width = _v0.width;
		var ui = world.ui;
		return $justgook$webgl_playground$Playground$group(
			(ui.inventoryOpen ? $elm$core$List$cons(
				A3(
					$justgook$webgl_playground$Playground$move,
					right - 110,
					top - 175,
					A2($justgook$webgl_playground$Playground$scale, 2, $author$project$RPG$System$Render$Ui$inventory))) : $elm$core$Basics$identity)(
				_List_fromArray(
					[
						A3(
						$justgook$webgl_playground$Playground$move,
						(left + (width * 0.25)) + ($author$project$RPG$System$Render$Ui$config.padding * 0.5),
						(top - ($author$project$RPG$System$Render$Ui$config.height * 0.5)) - $author$project$RPG$System$Render$Ui$config.padding,
						$justgook$webgl_playground$Playground$group(
							_List_fromArray(
								[
									A2(
									$justgook$webgl_playground$Playground$fade,
									0,
									A3($justgook$webgl_playground$Playground$rectangle, $author$project$RPG$System$Render$Ui$green, (width * 0.5) - $author$project$RPG$System$Render$Ui$config.padding, $author$project$RPG$System$Render$Ui$config.height)),
									A2(
									$justgook$webgl_playground$Playground$moveX,
									50,
									A2(
										$justgook$webgl_playground$Playground$scale,
										2,
										A3(
											$justgook$webgl_playground$Playground$move,
											(50 + (width * (-0.25))) + ($author$project$RPG$System$Render$Ui$config.padding * 0.5),
											0,
											A3($author$project$RPG$System$Render$Ui$health, 1, 1, 0.3))))
								]))),
						A3(
						$justgook$webgl_playground$Playground$move,
						(left + (width * 0.25)) + ($author$project$RPG$System$Render$Ui$config.padding * 0.5),
						(bottom + ($author$project$RPG$System$Render$Ui$config.height * 0.5)) + $author$project$RPG$System$Render$Ui$config.padding,
						$justgook$webgl_playground$Playground$group(
							A2(
								$elm$core$List$cons,
								A3(
									$justgook$webgl_playground$Playground$move,
									(left + (width * 0.25)) + ($author$project$RPG$System$Render$Ui$config.padding * 0.5),
									($author$project$RPG$System$Render$Ui$config.height * 0.5) + $author$project$RPG$System$Render$Ui$config.padding,
									$author$project$RPG$Component$Chat$system(world)),
								_List_fromArray(
									[
										A2(
										$justgook$webgl_playground$Playground$scale,
										2,
										$author$project$RPG$System$Render$Ui$hotkeys(
											$elm$core$Basics$floor((((width * 0.25) - $author$project$RPG$System$Render$Ui$config.padding) - 15) / 25)))
									])))),
						A3(
						$justgook$webgl_playground$Playground$move,
						(width * 0.25) - ($author$project$RPG$System$Render$Ui$config.padding * 0.5),
						(bottom + ($author$project$RPG$System$Render$Ui$config.height * 0.5)) + $author$project$RPG$System$Render$Ui$config.padding,
						$justgook$webgl_playground$Playground$group(
							_List_fromArray(
								[
									A2(
									$justgook$webgl_playground$Playground$fade,
									0,
									A3($justgook$webgl_playground$Playground$rectangle, $author$project$RPG$System$Render$Ui$blue, (width * 0.5) - $author$project$RPG$System$Render$Ui$config.padding, $author$project$RPG$System$Render$Ui$config.height))
								])))
					])));
	});
var $justgook$webgl_shape$WebGL$Shape2d$Transformation$identity = {a11: 1, a12: 0, a13: 0, a21: 0, a22: 1, a23: 0};
var $justgook$webgl_shape$WebGL$Shape2d$Transformation$apply = F2(
	function (a, b) {
		return {a11: (a.a11 * b.a11) + (a.a12 * b.a21), a12: (a.a11 * b.a12) + (a.a12 * b.a22), a13: ((a.a11 * b.a13) + (a.a12 * b.a23)) + a.a13, a21: (a.a21 * b.a11) + (a.a22 * b.a21), a22: (a.a21 * b.a12) + (a.a22 * b.a22), a23: ((a.a21 * b.a13) + (a.a22 * b.a23)) + a.a23};
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $justgook$webgl_shape$WebGL$Shape2d$Transformation$scale = F3(
	function (sx, sy, b) {
		return {a11: sx * b.a11, a12: sx * b.a12, a13: sx * b.a13, a21: sy * b.a21, a22: sy * b.a22, a23: sy * b.a23};
	});
var $elm_explorations$linear_algebra$Math$Vector2$fromRecord = _MJS_v2fromRecord;
var $elm_explorations$linear_algebra$Math$Vector4$fromRecord = _MJS_v4fromRecord;
var $justgook$webgl_shape$WebGL$Shape2d$Transformation$toGL = function (_v0) {
	var a11 = _v0.a11;
	var a12 = _v0.a12;
	var a13 = _v0.a13;
	var a21 = _v0.a21;
	var a22 = _v0.a22;
	var a23 = _v0.a23;
	return _Utils_Tuple2(
		$elm_explorations$linear_algebra$Math$Vector4$fromRecord(
			{w: a22, x: a11, y: a12, z: a21}),
		$elm_explorations$linear_algebra$Math$Vector2$fromRecord(
			{x: a13, y: a23}));
};
var $elm$core$Basics$cos = _Basics_cos;
var $elm$core$Basics$sin = _Basics_sin;
var $justgook$webgl_shape$WebGL$Shape2d$Transformation$transform = F5(
	function (tx, ty, sx, sy, angle) {
		return {
			a11: $elm$core$Basics$cos(angle) * sx,
			a12: $elm$core$Basics$sin(angle) * (-sy),
			a13: tx,
			a21: $elm$core$Basics$sin(angle) * sx,
			a22: $elm$core$Basics$cos(angle) * sy,
			a23: ty
		};
	});
var $justgook$webgl_shape$WebGL$Shape2d$renderShape = F6(
	function (screen, textures, parent, parentOpacity, _v0, acc) {
		renderShape:
		while (true) {
			var x = _v0.a.x;
			var y = _v0.a.y;
			var a = _v0.a.a;
			var sx = _v0.a.sx;
			var sy = _v0.a.sy;
			var o = _v0.a.o;
			var form = _v0.a.form;
			var entities = acc.a;
			var missing = acc.b;
			var opacity = o * parentOpacity;
			var createTrans = F5(
				function (tx, ty, sx_, sy_, a_) {
					return A2(
						$justgook$webgl_shape$WebGL$Shape2d$Transformation$apply,
						parent,
						A5($justgook$webgl_shape$WebGL$Shape2d$Transformation$transform, tx, ty, sx_, sy_, a_));
				});
			switch (form.$) {
				case 'Form':
					var width = form.a;
					var height = form.b;
					var fn = form.c;
					var _v2 = $justgook$webgl_shape$WebGL$Shape2d$Transformation$toGL(
						A3(
							$justgook$webgl_shape$WebGL$Shape2d$Transformation$scale,
							1 / screen.width,
							1 / screen.height,
							A5(createTrans, x * 2, y * 2, width * sx, height * sy, a)));
					var t1 = _v2.a;
					var t2 = _v2.b;
					return _Utils_Tuple2(
						A2(
							$elm$core$List$cons,
							A3(fn, t2, t1, opacity),
							entities),
						missing);
				case 'Textured':
					var src = form.a;
					var fn = form.b;
					var _v3 = A2($elm$core$Dict$get, src, textures);
					if (_v3.$ === 'Just') {
						var texture = _v3.a;
						var $temp$screen = screen,
							$temp$textures = textures,
							$temp$parent = A5(createTrans, x * 2, y * 2, sx, sy, a),
							$temp$parentOpacity = opacity,
							$temp$_v0 = fn(texture),
							$temp$acc = acc;
						screen = $temp$screen;
						textures = $temp$textures;
						parent = $temp$parent;
						parentOpacity = $temp$parentOpacity;
						_v0 = $temp$_v0;
						acc = $temp$acc;
						continue renderShape;
					} else {
						return A2($elm$core$Set$member, src, missing) ? acc : _Utils_Tuple2(
							entities,
							A2($elm$core$Set$insert, src, missing));
					}
				default:
					var shapes = form.a;
					return A3(
						$elm$core$List$foldr,
						A4(
							$justgook$webgl_shape$WebGL$Shape2d$renderShape,
							screen,
							textures,
							A5(createTrans, x * 2, y * 2, sx, sy, a),
							opacity),
						acc,
						shapes);
			}
		}
	});
var $justgook$webgl_shape$WebGL$Shape2d$toEntities = F3(
	function (textures, screen, shapes) {
		return A3(
			$elm$core$List$foldr,
			A4($justgook$webgl_shape$WebGL$Shape2d$renderShape, screen, textures, $justgook$webgl_shape$WebGL$Shape2d$Transformation$identity, 1),
			_Utils_Tuple2(_List_Nil, $elm$core$Set$empty),
			shapes);
	});
var $author$project$RPG$System$Render$system = function (_v0) {
	var screen = _v0.screen;
	var textures = _v0.textures;
	var world = _v0.world;
	return A3(
		$justgook$webgl_shape$WebGL$Shape2d$toEntities,
		textures.done,
		{height: screen.height, width: screen.width},
		(world.debug ? $elm$core$List$cons(
			$author$project$RPG$System$Render$debugCenter(world)) : $elm$core$Basics$identity)(
			_List_fromArray(
				[
					A3(
					$justgook$webgl_playground$Playground$move,
					-world.grid.offset.x,
					-world.grid.offset.y,
					$justgook$webgl_playground$Playground$group(
						_List_fromArray(
							[
								$author$project$RPG$System$Render$Fx$system(world),
								$author$project$RPG$System$Render$character(world),
								$author$project$RPG$System$Render$Character$system(world)
							]))),
					A2($author$project$RPG$System$Render$Ui$system, screen, world)
				])));
};
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$union, dict1, dict2));
	});
var $author$project$RPG$System$system = F2(
	function (delta, model) {
		var textures = model.textures;
		var world = A2(
			$author$project$RPG$System$Grid$system,
			delta,
			A3(
				$author$project$RPG$System$Fx$system,
				model.screen,
				delta,
				A2(
					$author$project$RPG$System$Ai$system,
					model.screen,
					A2(
						$author$project$RPG$System$Animation$system,
						delta,
						$author$project$RPG$System$Movement$system(
							A2(
								$author$project$RPG$System$Input$system,
								5,
								A2($author$project$RPG$System$Path$system, delta, model.world)))))));
		var _v0 = $author$project$RPG$System$Render$system(
			_Utils_update(
				model,
				{world: world}));
		var entities = _v0.a;
		var missing = _v0.b;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					entities: entities,
					textures: _Utils_update(
						textures,
						{
							loading: A2($elm$core$Set$union, missing, textures.loading)
						}),
					world: world
				}),
			$elm$core$Platform$Cmd$batch(
				A3(
					$elm$core$Set$foldl,
					function (url) {
						return $elm$core$List$cons(
							$author$project$RPG$System$getTexture(url));
					},
					_List_Nil,
					A2($elm$core$Set$diff, missing, textures.loading))));
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		var textures = model.textures;
		switch (msg.$) {
			case 'Delta':
				var d = msg.a;
				return A2($author$project$RPG$System$system, d, model);
			case 'Subscription':
				var world = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{world: world}),
					$elm$core$Platform$Cmd$none);
			case 'Event':
				var fn = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							world: fn(model.world)
						}),
					$elm$core$Platform$Cmd$none);
			case 'Texture':
				var url = msg.a;
				var t = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							textures: _Utils_update(
								textures,
								{
									done: A3($elm$core$Dict$insert, url, t, textures.done),
									loading: A2($elm$core$Set$remove, url, textures.loading)
								})
						}),
					$elm$core$Platform$Cmd$none);
			case 'Resize':
				var w = msg.a;
				var h = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							screen: A2($author$project$RPG$Util$toScreen, w, h)
						}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$RPG$Game$Event = function (a) {
	return {$: 'Event', a: a};
};
var $elm_explorations$webgl$WebGL$Internal$Alpha = function (a) {
	return {$: 'Alpha', a: a};
};
var $elm_explorations$webgl$WebGL$alpha = $elm_explorations$webgl$WebGL$Internal$Alpha;
var $elm_explorations$webgl$WebGL$Internal$ClearColor = F4(
	function (a, b, c, d) {
		return {$: 'ClearColor', a: a, b: b, c: c, d: d};
	});
var $elm_explorations$webgl$WebGL$clearColor = $elm_explorations$webgl$WebGL$Internal$ClearColor;
var $elm_explorations$webgl$WebGL$Internal$Depth = function (a) {
	return {$: 'Depth', a: a};
};
var $elm_explorations$webgl$WebGL$depth = $elm_explorations$webgl$WebGL$Internal$Depth;
var $elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		$elm$core$String$fromInt(n));
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm_explorations$webgl$WebGL$toHtmlWith = F3(
	function (options, attributes, entities) {
		return A3(_WebGL_toHtml, options, attributes, entities);
	});
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $author$project$Main$view = function (_v0) {
	var entities = _v0.entities;
	var screen = _v0.screen;
	return A2(
		$elm$html$Html$map,
		$author$project$RPG$Game$Event,
		A3(
			$elm_explorations$webgl$WebGL$toHtmlWith,
			_List_fromArray(
				[
					$elm_explorations$webgl$WebGL$alpha(false),
					$elm_explorations$webgl$WebGL$depth(1),
					A4($elm_explorations$webgl$WebGL$clearColor, 1, 1, 1, 1)
				]),
			_List_fromArray(
				[
					$elm$html$Html$Attributes$width(
					$elm$core$Basics$floor(screen.width)),
					$elm$html$Html$Attributes$height(
					$elm$core$Basics$floor(screen.height))
				]),
			entities));
};
var $author$project$Main$main = $elm$browser$Browser$document(
	{
		init: function (_v0) {
			return _Utils_Tuple2(
				$author$project$Main$initModel,
				$elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							A2(
							$elm$core$Task$perform,
							function (_v1) {
								var scene = _v1.scene;
								return A2($author$project$RPG$Game$Resize, scene.width, scene.height);
							},
							$elm$browser$Browser$Dom$getViewport)
						])));
		},
		subscriptions: function (model) {
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$elm$browser$Browser$Events$onResize(
						F2(
							function (w, h) {
								return A2($author$project$RPG$Game$Resize, w, h);
							})),
						$elm$browser$Browser$Events$onAnimationFrameDelta($author$project$RPG$Game$Delta),
						A2(
						$elm$core$Platform$Sub$map,
						$author$project$RPG$Game$Subscription,
						$author$project$RPG$Subscription$Keyboard$subscription(model.world)),
						A2(
						$elm$core$Platform$Sub$map,
						$author$project$RPG$Game$Subscription,
						$author$project$RPG$Subscription$Pointer$subscription(model))
					]));
		},
		update: $author$project$Main$update,
		view: function (m) {
			return {
				body: (m.world.debug ? $elm$core$List$cons(
					A2($elm$html$Html$Lazy$lazy, $author$project$Main$cssGrid, m.world.grid)) : $elm$core$Basics$identity)(
					_List_fromArray(
						[
							$author$project$Main$view(m),
							A3($elm$html$Html$Lazy$lazy2, $author$project$Main$css1, m.world.ui.cursor, m.world.ui.cursor2)
						])),
				title: 'RPG'
			};
		}
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));