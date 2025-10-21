var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_main = __commonJS({
  "js/main.js"(exports, module) {
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    var jquery$1 = { exports: {} };
    /*!
     * jQuery JavaScript Library v3.7.1
     * https://jquery.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2023-08-28T13:37Z
     */
    var jquery = jquery$1.exports;
    var hasRequiredJquery;
    function requireJquery() {
      if (hasRequiredJquery) return jquery$1.exports;
      hasRequiredJquery = 1;
      (function(module2) {
        (function(global, factory) {
          {
            module2.exports = global.document ? factory(global, true) : function(w2) {
              if (!w2.document) {
                throw new Error("jQuery requires a window with a document");
              }
              return factory(w2);
            };
          }
        })(typeof window !== "undefined" ? window : jquery, function(window2, noGlobal) {
          var arr = [];
          var getProto = Object.getPrototypeOf;
          var slice = arr.slice;
          var flat = arr.flat ? function(array) {
            return arr.flat.call(array);
          } : function(array) {
            return arr.concat.apply([], array);
          };
          var push = arr.push;
          var indexOf = arr.indexOf;
          var class2type = {};
          var toString = class2type.toString;
          var hasOwn = class2type.hasOwnProperty;
          var fnToString = hasOwn.toString;
          var ObjectFunctionString = fnToString.call(Object);
          var support = {};
          var isFunction = function isFunction2(obj) {
            return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
          };
          var isWindow = function isWindow2(obj) {
            return obj != null && obj === obj.window;
          };
          var document2 = window2.document;
          var preservedScriptAttributes = {
            type: true,
            src: true,
            nonce: true,
            noModule: true
          };
          function DOMEval(code, node, doc) {
            doc = doc || document2;
            var i2, val, script = doc.createElement("script");
            script.text = code;
            if (node) {
              for (i2 in preservedScriptAttributes) {
                val = node[i2] || node.getAttribute && node.getAttribute(i2);
                if (val) {
                  script.setAttribute(i2, val);
                }
              }
            }
            doc.head.appendChild(script).parentNode.removeChild(script);
          }
          function toType(obj) {
            if (obj == null) {
              return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
          }
          var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context);
          };
          jQuery.fn = jQuery.prototype = {
            // The current version of jQuery being used
            jquery: version,
            constructor: jQuery,
            // The default length of a jQuery object is 0
            length: 0,
            toArray: function() {
              return slice.call(this);
            },
            // Get the Nth element in the matched element set OR
            // Get the whole matched element set as a clean array
            get: function(num) {
              if (num == null) {
                return slice.call(this);
              }
              return num < 0 ? this[num + this.length] : this[num];
            },
            // Take an array of elements and push it onto the stack
            // (returning the new matched element set)
            pushStack: function(elems) {
              var ret = jQuery.merge(this.constructor(), elems);
              ret.prevObject = this;
              return ret;
            },
            // Execute a callback for every element in the matched set.
            each: function(callback) {
              return jQuery.each(this, callback);
            },
            map: function(callback) {
              return this.pushStack(jQuery.map(this, function(elem, i2) {
                return callback.call(elem, i2, elem);
              }));
            },
            slice: function() {
              return this.pushStack(slice.apply(this, arguments));
            },
            first: function() {
              return this.eq(0);
            },
            last: function() {
              return this.eq(-1);
            },
            even: function() {
              return this.pushStack(jQuery.grep(this, function(_elem, i2) {
                return (i2 + 1) % 2;
              }));
            },
            odd: function() {
              return this.pushStack(jQuery.grep(this, function(_elem, i2) {
                return i2 % 2;
              }));
            },
            eq: function(i2) {
              var len = this.length, j2 = +i2 + (i2 < 0 ? len : 0);
              return this.pushStack(j2 >= 0 && j2 < len ? [this[j2]] : []);
            },
            end: function() {
              return this.prevObject || this.constructor();
            },
            // For internal use only.
            // Behaves like an Array's method, not like a jQuery method.
            push,
            sort: arr.sort,
            splice: arr.splice
          };
          jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
            if (typeof target === "boolean") {
              deep = target;
              target = arguments[i2] || {};
              i2++;
            }
            if (typeof target !== "object" && !isFunction(target)) {
              target = {};
            }
            if (i2 === length) {
              target = this;
              i2--;
            }
            for (; i2 < length; i2++) {
              if ((options = arguments[i2]) != null) {
                for (name in options) {
                  copy = options[name];
                  if (name === "__proto__" || target === copy) {
                    continue;
                  }
                  if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    if (copyIsArray && !Array.isArray(src)) {
                      clone = [];
                    } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                      clone = {};
                    } else {
                      clone = src;
                    }
                    copyIsArray = false;
                    target[name] = jQuery.extend(deep, clone, copy);
                  } else if (copy !== void 0) {
                    target[name] = copy;
                  }
                }
              }
            }
            return target;
          };
          jQuery.extend({
            // Unique for each copy of jQuery on the page
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            // Assume jQuery is ready without the ready module
            isReady: true,
            error: function(msg) {
              throw new Error(msg);
            },
            noop: function() {
            },
            isPlainObject: function(obj) {
              var proto, Ctor;
              if (!obj || toString.call(obj) !== "[object Object]") {
                return false;
              }
              proto = getProto(obj);
              if (!proto) {
                return true;
              }
              Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
              return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
            },
            isEmptyObject: function(obj) {
              var name;
              for (name in obj) {
                return false;
              }
              return true;
            },
            // Evaluates a script in a provided context; falls back to the global one
            // if not specified.
            globalEval: function(code, options, doc) {
              DOMEval(code, { nonce: options && options.nonce }, doc);
            },
            each: function(obj, callback) {
              var length, i2 = 0;
              if (isArrayLike(obj)) {
                length = obj.length;
                for (; i2 < length; i2++) {
                  if (callback.call(obj[i2], i2, obj[i2]) === false) {
                    break;
                  }
                }
              } else {
                for (i2 in obj) {
                  if (callback.call(obj[i2], i2, obj[i2]) === false) {
                    break;
                  }
                }
              }
              return obj;
            },
            // Retrieve the text value of an array of DOM nodes
            text: function(elem) {
              var node, ret = "", i2 = 0, nodeType = elem.nodeType;
              if (!nodeType) {
                while (node = elem[i2++]) {
                  ret += jQuery.text(node);
                }
              }
              if (nodeType === 1 || nodeType === 11) {
                return elem.textContent;
              }
              if (nodeType === 9) {
                return elem.documentElement.textContent;
              }
              if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
              }
              return ret;
            },
            // results is for internal usage only
            makeArray: function(arr2, results) {
              var ret = results || [];
              if (arr2 != null) {
                if (isArrayLike(Object(arr2))) {
                  jQuery.merge(
                    ret,
                    typeof arr2 === "string" ? [arr2] : arr2
                  );
                } else {
                  push.call(ret, arr2);
                }
              }
              return ret;
            },
            inArray: function(elem, arr2, i2) {
              return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
            },
            isXMLDoc: function(elem) {
              var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
              return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
            },
            // Support: Android <=4.0 only, PhantomJS 1 only
            // push.apply(_, arraylike) throws on ancient WebKit
            merge: function(first, second) {
              var len = +second.length, j2 = 0, i2 = first.length;
              for (; j2 < len; j2++) {
                first[i2++] = second[j2];
              }
              first.length = i2;
              return first;
            },
            grep: function(elems, callback, invert) {
              var callbackInverse, matches = [], i2 = 0, length = elems.length, callbackExpect = !invert;
              for (; i2 < length; i2++) {
                callbackInverse = !callback(elems[i2], i2);
                if (callbackInverse !== callbackExpect) {
                  matches.push(elems[i2]);
                }
              }
              return matches;
            },
            // arg is for internal usage only
            map: function(elems, callback, arg) {
              var length, value, i2 = 0, ret = [];
              if (isArrayLike(elems)) {
                length = elems.length;
                for (; i2 < length; i2++) {
                  value = callback(elems[i2], i2, arg);
                  if (value != null) {
                    ret.push(value);
                  }
                }
              } else {
                for (i2 in elems) {
                  value = callback(elems[i2], i2, arg);
                  if (value != null) {
                    ret.push(value);
                  }
                }
              }
              return flat(ret);
            },
            // A global GUID counter for objects
            guid: 1,
            // jQuery.support is not used in Core but other projects attach their
            // properties to it so it needs to exist.
            support
          });
          if (typeof Symbol === "function") {
            jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
          }
          jQuery.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
            function(_i, name) {
              class2type["[object " + name + "]"] = name.toLowerCase();
            }
          );
          function isArrayLike(obj) {
            var length = !!obj && "length" in obj && obj.length, type = toType(obj);
            if (isFunction(obj) || isWindow(obj)) {
              return false;
            }
            return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
          }
          function nodeName(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
          }
          var pop = arr.pop;
          var sort = arr.sort;
          var splice = arr.splice;
          var whitespace = "[\\x20\\t\\r\\n\\f]";
          var rtrimCSS = new RegExp(
            "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
            "g"
          );
          jQuery.contains = function(a2, b2) {
            var bup = b2 && b2.parentNode;
            return a2 === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
            // IE doesn't have `contains` on SVG.
            (a2.contains ? a2.contains(bup) : a2.compareDocumentPosition && a2.compareDocumentPosition(bup) & 16));
          };
          var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function fcssescape(ch, asCodePoint) {
            if (asCodePoint) {
              if (ch === "\0") {
                return "�";
              }
              return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            return "\\" + ch;
          }
          jQuery.escapeSelector = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };
          var preferredDoc = document2, pushNative = push;
          (function() {
            var i2, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a2, b2) {
              if (a2 === b2) {
                hasDuplicate = true;
              }
              return 0;
            }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
              ID: new RegExp("^#(" + identifier + ")"),
              CLASS: new RegExp("^\\.(" + identifier + ")"),
              TAG: new RegExp("^(" + identifier + "|[*])"),
              ATTR: new RegExp("^" + attributes),
              PSEUDO: new RegExp("^" + pseudos),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + booleans + ")$", "i"),
              // For use in libraries implementing .is()
              // We use this for POS matching in `select`
              needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
              var high = "0x" + escape.slice(1) - 65536;
              if (nonHex) {
                return nonHex;
              }
              return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
            }, unloadHandler = function() {
              setDocument();
            }, inDisabledFieldset = addCombinator(
              function(elem) {
                return elem.disabled === true && nodeName(elem, "fieldset");
              },
              { dir: "parentNode", next: "legend" }
            );
            function safeActiveElement() {
              try {
                return document3.activeElement;
              } catch (err) {
              }
            }
            try {
              push2.apply(
                arr = slice.call(preferredDoc.childNodes),
                preferredDoc.childNodes
              );
              arr[preferredDoc.childNodes.length].nodeType;
            } catch (e2) {
              push2 = {
                apply: function(target, els) {
                  pushNative.apply(target, slice.call(els));
                },
                call: function(target) {
                  pushNative.apply(target, slice.call(arguments, 1));
                }
              };
            }
            function find(selector, context, results, seed) {
              var m2, i3, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
              results = results || [];
              if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                return results;
              }
              if (!seed) {
                setDocument(context);
                context = context || document3;
                if (documentIsHTML) {
                  if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                    if (m2 = match[1]) {
                      if (nodeType === 9) {
                        if (elem = context.getElementById(m2)) {
                          if (elem.id === m2) {
                            push2.call(results, elem);
                            return results;
                          }
                        } else {
                          return results;
                        }
                      } else {
                        if (newContext && (elem = newContext.getElementById(m2)) && find.contains(context, elem) && elem.id === m2) {
                          push2.call(results, elem);
                          return results;
                        }
                      }
                    } else if (match[2]) {
                      push2.apply(results, context.getElementsByTagName(selector));
                      return results;
                    } else if ((m2 = match[3]) && context.getElementsByClassName) {
                      push2.apply(results, context.getElementsByClassName(m2));
                      return results;
                    }
                  }
                  if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    newSelector = selector;
                    newContext = context;
                    if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                      newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                      if (newContext != context || !support.scope) {
                        if (nid = context.getAttribute("id")) {
                          nid = jQuery.escapeSelector(nid);
                        } else {
                          context.setAttribute("id", nid = expando);
                        }
                      }
                      groups = tokenize(selector);
                      i3 = groups.length;
                      while (i3--) {
                        groups[i3] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i3]);
                      }
                      newSelector = groups.join(",");
                    }
                    try {
                      push2.apply(
                        results,
                        newContext.querySelectorAll(newSelector)
                      );
                      return results;
                    } catch (qsaError) {
                      nonnativeSelectorCache(selector, true);
                    } finally {
                      if (nid === expando) {
                        context.removeAttribute("id");
                      }
                    }
                  }
                }
              }
              return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
            }
            function createCache() {
              var keys = [];
              function cache(key, value) {
                if (keys.push(key + " ") > Expr.cacheLength) {
                  delete cache[keys.shift()];
                }
                return cache[key + " "] = value;
              }
              return cache;
            }
            function markFunction(fn) {
              fn[expando] = true;
              return fn;
            }
            function assert(fn) {
              var el = document3.createElement("fieldset");
              try {
                return !!fn(el);
              } catch (e2) {
                return false;
              } finally {
                if (el.parentNode) {
                  el.parentNode.removeChild(el);
                }
                el = null;
              }
            }
            function createInputPseudo(type) {
              return function(elem) {
                return nodeName(elem, "input") && elem.type === type;
              };
            }
            function createButtonPseudo(type) {
              return function(elem) {
                return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
              };
            }
            function createDisabledPseudo(disabled) {
              return function(elem) {
                if ("form" in elem) {
                  if (elem.parentNode && elem.disabled === false) {
                    if ("label" in elem) {
                      if ("label" in elem.parentNode) {
                        return elem.parentNode.disabled === disabled;
                      } else {
                        return elem.disabled === disabled;
                      }
                    }
                    return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                    elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                  }
                  return elem.disabled === disabled;
                } else if ("label" in elem) {
                  return elem.disabled === disabled;
                }
                return false;
              };
            }
            function createPositionalPseudo(fn) {
              return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches2) {
                  var j2, matchIndexes = fn([], seed.length, argument), i3 = matchIndexes.length;
                  while (i3--) {
                    if (seed[j2 = matchIndexes[i3]]) {
                      seed[j2] = !(matches2[j2] = seed[j2]);
                    }
                  }
                });
              });
            }
            function testContext(context) {
              return context && typeof context.getElementsByTagName !== "undefined" && context;
            }
            function setDocument(node) {
              var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
              if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
                return document3;
              }
              document3 = doc;
              documentElement2 = document3.documentElement;
              documentIsHTML = !jQuery.isXMLDoc(document3);
              matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
              if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.
              // eslint-disable-next-line eqeqeq
              preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
                subWindow.addEventListener("unload", unloadHandler);
              }
              support.getById = assert(function(el) {
                documentElement2.appendChild(el).id = jQuery.expando;
                return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
              });
              support.disconnectedMatch = assert(function(el) {
                return matches.call(el, "*");
              });
              support.scope = assert(function() {
                return document3.querySelectorAll(":scope");
              });
              support.cssHas = assert(function() {
                try {
                  document3.querySelector(":has(*,:jqfake)");
                  return false;
                } catch (e2) {
                  return true;
                }
              });
              if (support.getById) {
                Expr.filter.ID = function(id) {
                  var attrId = id.replace(runescape, funescape);
                  return function(elem) {
                    return elem.getAttribute("id") === attrId;
                  };
                };
                Expr.find.ID = function(id, context) {
                  if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                    var elem = context.getElementById(id);
                    return elem ? [elem] : [];
                  }
                };
              } else {
                Expr.filter.ID = function(id) {
                  var attrId = id.replace(runescape, funescape);
                  return function(elem) {
                    var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                    return node2 && node2.value === attrId;
                  };
                };
                Expr.find.ID = function(id, context) {
                  if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                    var node2, i3, elems, elem = context.getElementById(id);
                    if (elem) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                      elems = context.getElementsByName(id);
                      i3 = 0;
                      while (elem = elems[i3++]) {
                        node2 = elem.getAttributeNode("id");
                        if (node2 && node2.value === id) {
                          return [elem];
                        }
                      }
                    }
                    return [];
                  }
                };
              }
              Expr.find.TAG = function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                  return context.getElementsByTagName(tag);
                } else {
                  return context.querySelectorAll(tag);
                }
              };
              Expr.find.CLASS = function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                  return context.getElementsByClassName(className);
                }
              };
              rbuggyQSA = [];
              assert(function(el) {
                var input;
                documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                input = document3.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                documentElement2.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                input = document3.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
                }
              });
              if (!support.cssHas) {
                rbuggyQSA.push(":has");
              }
              rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
              sortOrder = function(a2, b2) {
                if (a2 === b2) {
                  hasDuplicate = true;
                  return 0;
                }
                var compare = !a2.compareDocumentPosition - !b2.compareDocumentPosition;
                if (compare) {
                  return compare;
                }
                compare = (a2.ownerDocument || a2) == (b2.ownerDocument || b2) ? a2.compareDocumentPosition(b2) : (
                  // Otherwise we know they are disconnected
                  1
                );
                if (compare & 1 || !support.sortDetached && b2.compareDocumentPosition(a2) === compare) {
                  if (a2 === document3 || a2.ownerDocument == preferredDoc && find.contains(preferredDoc, a2)) {
                    return -1;
                  }
                  if (b2 === document3 || b2.ownerDocument == preferredDoc && find.contains(preferredDoc, b2)) {
                    return 1;
                  }
                  return sortInput ? indexOf.call(sortInput, a2) - indexOf.call(sortInput, b2) : 0;
                }
                return compare & 4 ? -1 : 1;
              };
              return document3;
            }
            find.matches = function(expr, elements) {
              return find(expr, null, null, elements);
            };
            find.matchesSelector = function(elem, expr) {
              setDocument(elem);
              if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                  var ret = matches.call(elem, expr);
                  if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                  // fragment in IE 9
                  elem.document && elem.document.nodeType !== 11) {
                    return ret;
                  }
                } catch (e2) {
                  nonnativeSelectorCache(expr, true);
                }
              }
              return find(expr, document3, null, [elem]).length > 0;
            };
            find.contains = function(context, elem) {
              if ((context.ownerDocument || context) != document3) {
                setDocument(context);
              }
              return jQuery.contains(context, elem);
            };
            find.attr = function(elem, name) {
              if ((elem.ownerDocument || elem) != document3) {
                setDocument(elem);
              }
              var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
              if (val !== void 0) {
                return val;
              }
              return elem.getAttribute(name);
            };
            find.error = function(msg) {
              throw new Error("Syntax error, unrecognized expression: " + msg);
            };
            jQuery.uniqueSort = function(results) {
              var elem, duplicates = [], j2 = 0, i3 = 0;
              hasDuplicate = !support.sortStable;
              sortInput = !support.sortStable && slice.call(results, 0);
              sort.call(results, sortOrder);
              if (hasDuplicate) {
                while (elem = results[i3++]) {
                  if (elem === results[i3]) {
                    j2 = duplicates.push(i3);
                  }
                }
                while (j2--) {
                  splice.call(results, duplicates[j2], 1);
                }
              }
              sortInput = null;
              return results;
            };
            jQuery.fn.uniqueSort = function() {
              return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
            };
            Expr = jQuery.expr = {
              // Can be adjusted by the user
              cacheLength: 50,
              createPseudo: markFunction,
              match: matchExpr,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: true },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: true },
                "~": { dir: "previousSibling" }
              },
              preFilter: {
                ATTR: function(match) {
                  match[1] = match[1].replace(runescape, funescape);
                  match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                  if (match[2] === "~=") {
                    match[3] = " " + match[3] + " ";
                  }
                  return match.slice(0, 4);
                },
                CHILD: function(match) {
                  match[1] = match[1].toLowerCase();
                  if (match[1].slice(0, 3) === "nth") {
                    if (!match[3]) {
                      find.error(match[0]);
                    }
                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                    match[5] = +(match[7] + match[8] || match[3] === "odd");
                  } else if (match[3]) {
                    find.error(match[0]);
                  }
                  return match;
                },
                PSEUDO: function(match) {
                  var excess, unquoted = !match[6] && match[2];
                  if (matchExpr.CHILD.test(match[0])) {
                    return null;
                  }
                  if (match[3]) {
                    match[2] = match[4] || match[5] || "";
                  } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                  (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                  (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                    match[0] = match[0].slice(0, excess);
                    match[2] = unquoted.slice(0, excess);
                  }
                  return match.slice(0, 3);
                }
              },
              filter: {
                TAG: function(nodeNameSelector) {
                  var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                  return nodeNameSelector === "*" ? function() {
                    return true;
                  } : function(elem) {
                    return nodeName(elem, expectedNodeName);
                  };
                },
                CLASS: function(className) {
                  var pattern = classCache[className + " "];
                  return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                    return pattern.test(
                      typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                    );
                  });
                },
                ATTR: function(name, operator, check) {
                  return function(elem) {
                    var result = find.attr(elem, name);
                    if (result == null) {
                      return operator === "!=";
                    }
                    if (!operator) {
                      return true;
                    }
                    result += "";
                    if (operator === "=") {
                      return result === check;
                    }
                    if (operator === "!=") {
                      return result !== check;
                    }
                    if (operator === "^=") {
                      return check && result.indexOf(check) === 0;
                    }
                    if (operator === "*=") {
                      return check && result.indexOf(check) > -1;
                    }
                    if (operator === "$=") {
                      return check && result.slice(-check.length) === check;
                    }
                    if (operator === "~=") {
                      return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                    }
                    if (operator === "|=") {
                      return result === check || result.slice(0, check.length + 1) === check + "-";
                    }
                    return false;
                  };
                },
                CHILD: function(type, what, _argument, first, last) {
                  var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                  return first === 1 && last === 0 ? (
                    // Shortcut for :nth-*(n)
                    function(elem) {
                      return !!elem.parentNode;
                    }
                  ) : function(elem, _context, xml) {
                    var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                    if (parent) {
                      if (simple) {
                        while (dir2) {
                          node = elem;
                          while (node = node[dir2]) {
                            if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                              return false;
                            }
                          }
                          start = dir2 = type === "only" && !start && "nextSibling";
                        }
                        return true;
                      }
                      start = [forward ? parent.firstChild : parent.lastChild];
                      if (forward && useCache) {
                        outerCache = parent[expando] || (parent[expando] = {});
                        cache = outerCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex && cache[2];
                        node = nodeIndex && parent.childNodes[nodeIndex];
                        while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                        (diff = nodeIndex = 0) || start.pop()) {
                          if (node.nodeType === 1 && ++diff && node === elem) {
                            outerCache[type] = [dirruns, nodeIndex, diff];
                            break;
                          }
                        }
                      } else {
                        if (useCache) {
                          outerCache = elem[expando] || (elem[expando] = {});
                          cache = outerCache[type] || [];
                          nodeIndex = cache[0] === dirruns && cache[1];
                          diff = nodeIndex;
                        }
                        if (diff === false) {
                          while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                            if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                              if (useCache) {
                                outerCache = node[expando] || (node[expando] = {});
                                outerCache[type] = [dirruns, diff];
                              }
                              if (node === elem) {
                                break;
                              }
                            }
                          }
                        }
                      }
                      diff -= last;
                      return diff === first || diff % first === 0 && diff / first >= 0;
                    }
                  };
                },
                PSEUDO: function(pseudo, argument) {
                  var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                  if (fn[expando]) {
                    return fn(argument);
                  }
                  if (fn.length > 1) {
                    args = [pseudo, pseudo, "", argument];
                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                      var idx, matched = fn(seed, argument), i3 = matched.length;
                      while (i3--) {
                        idx = indexOf.call(seed, matched[i3]);
                        seed[idx] = !(matches2[idx] = matched[i3]);
                      }
                    }) : function(elem) {
                      return fn(elem, 0, args);
                    };
                  }
                  return fn;
                }
              },
              pseudos: {
                // Potentially complex pseudos
                not: markFunction(function(selector) {
                  var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                  return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                    var elem, unmatched = matcher(seed, null, xml, []), i3 = seed.length;
                    while (i3--) {
                      if (elem = unmatched[i3]) {
                        seed[i3] = !(matches2[i3] = elem);
                      }
                    }
                  }) : function(elem, _context, xml) {
                    input[0] = elem;
                    matcher(input, null, xml, results);
                    input[0] = null;
                    return !results.pop();
                  };
                }),
                has: markFunction(function(selector) {
                  return function(elem) {
                    return find(selector, elem).length > 0;
                  };
                }),
                contains: markFunction(function(text) {
                  text = text.replace(runescape, funescape);
                  return function(elem) {
                    return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                  };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // https://www.w3.org/TR/selectors/#lang-pseudo
                lang: markFunction(function(lang) {
                  if (!ridentifier.test(lang || "")) {
                    find.error("unsupported lang: " + lang);
                  }
                  lang = lang.replace(runescape, funescape).toLowerCase();
                  return function(elem) {
                    var elemLang;
                    do {
                      if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                        elemLang = elemLang.toLowerCase();
                        return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                      }
                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                    return false;
                  };
                }),
                // Miscellaneous
                target: function(elem) {
                  var hash = window2.location && window2.location.hash;
                  return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                  return elem === documentElement2;
                },
                focus: function(elem) {
                  return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                enabled: createDisabledPseudo(false),
                disabled: createDisabledPseudo(true),
                checked: function(elem) {
                  return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
                },
                selected: function(elem) {
                  if (elem.parentNode) {
                    elem.parentNode.selectedIndex;
                  }
                  return elem.selected === true;
                },
                // Contents
                empty: function(elem) {
                  for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                    if (elem.nodeType < 6) {
                      return false;
                    }
                  }
                  return true;
                },
                parent: function(elem) {
                  return !Expr.pseudos.empty(elem);
                },
                // Element/input types
                header: function(elem) {
                  return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                  return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                  return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
                },
                text: function(elem) {
                  var attr;
                  return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                  // New HTML5 attribute values (e.g., "search") appear
                  // with elem.type === "text"
                  ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                first: createPositionalPseudo(function() {
                  return [0];
                }),
                last: createPositionalPseudo(function(_matchIndexes, length) {
                  return [length - 1];
                }),
                eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                  return [argument < 0 ? argument + length : argument];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                  var i3 = 0;
                  for (; i3 < length; i3 += 2) {
                    matchIndexes.push(i3);
                  }
                  return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                  var i3 = 1;
                  for (; i3 < length; i3 += 2) {
                    matchIndexes.push(i3);
                  }
                  return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                  var i3;
                  if (argument < 0) {
                    i3 = argument + length;
                  } else if (argument > length) {
                    i3 = length;
                  } else {
                    i3 = argument;
                  }
                  for (; --i3 >= 0; ) {
                    matchIndexes.push(i3);
                  }
                  return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                  var i3 = argument < 0 ? argument + length : argument;
                  for (; ++i3 < length; ) {
                    matchIndexes.push(i3);
                  }
                  return matchIndexes;
                })
              }
            };
            Expr.pseudos.nth = Expr.pseudos.eq;
            for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
              Expr.pseudos[i2] = createInputPseudo(i2);
            }
            for (i2 in { submit: true, reset: true }) {
              Expr.pseudos[i2] = createButtonPseudo(i2);
            }
            function setFilters() {
            }
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            function tokenize(selector, parseOnly) {
              var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
              if (cached) {
                return parseOnly ? 0 : cached.slice(0);
              }
              soFar = selector;
              groups = [];
              preFilters = Expr.preFilter;
              while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                  if (match) {
                    soFar = soFar.slice(match[0].length) || soFar;
                  }
                  groups.push(tokens = []);
                }
                matched = false;
                if (match = rleadingCombinator.exec(soFar)) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    // Cast descendant combinators to space
                    type: match[0].replace(rtrimCSS, " ")
                  });
                  soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                  if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                      value: matched,
                      type,
                      matches: match
                    });
                    soFar = soFar.slice(matched.length);
                  }
                }
                if (!matched) {
                  break;
                }
              }
              if (parseOnly) {
                return soFar.length;
              }
              return soFar ? find.error(selector) : (
                // Cache the tokens
                tokenCache(selector, groups).slice(0)
              );
            }
            function toSelector(tokens) {
              var i3 = 0, len = tokens.length, selector = "";
              for (; i3 < len; i3++) {
                selector += tokens[i3].value;
              }
              return selector;
            }
            function addCombinator(matcher, combinator, base) {
              var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
              return combinator.first ? (
                // Check against closest ancestor/preceding element
                function(elem, context, xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      return matcher(elem, context, xml);
                    }
                  }
                  return false;
                }
              ) : (
                // Check against all ancestor/preceding elements
                function(elem, context, xml) {
                  var oldCache, outerCache, newCache = [dirruns, doneName];
                  if (xml) {
                    while (elem = elem[dir2]) {
                      if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  } else {
                    while (elem = elem[dir2]) {
                      if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        if (skip && nodeName(elem, skip)) {
                          elem = elem[dir2] || elem;
                        } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                          return newCache[2] = oldCache[2];
                        } else {
                          outerCache[key] = newCache;
                          if (newCache[2] = matcher(elem, context, xml)) {
                            return true;
                          }
                        }
                      }
                    }
                  }
                  return false;
                }
              );
            }
            function elementMatcher(matchers) {
              return matchers.length > 1 ? function(elem, context, xml) {
                var i3 = matchers.length;
                while (i3--) {
                  if (!matchers[i3](elem, context, xml)) {
                    return false;
                  }
                }
                return true;
              } : matchers[0];
            }
            function multipleContexts(selector, contexts, results) {
              var i3 = 0, len = contexts.length;
              for (; i3 < len; i3++) {
                find(selector, contexts[i3], results);
              }
              return results;
            }
            function condense(unmatched, map, filter, context, xml) {
              var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map != null;
              for (; i3 < len; i3++) {
                if (elem = unmatched[i3]) {
                  if (!filter || filter(elem, context, xml)) {
                    newUnmatched.push(elem);
                    if (mapped) {
                      map.push(i3);
                    }
                  }
                }
              }
              return newUnmatched;
            }
            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
              if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
              }
              if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
              }
              return markFunction(function(seed, results, context, xml) {
                var temp, i3, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                  selector || "*",
                  context.nodeType ? [context] : context,
                  []
                ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
                if (matcher) {
                  matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                    // ...intermediate processing is necessary
                    []
                  ) : (
                    // ...otherwise use results directly
                    results
                  );
                  matcher(matcherIn, matcherOut, context, xml);
                } else {
                  matcherOut = matcherIn;
                }
                if (postFilter) {
                  temp = condense(matcherOut, postMap);
                  postFilter(temp, [], context, xml);
                  i3 = temp.length;
                  while (i3--) {
                    if (elem = temp[i3]) {
                      matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
                    }
                  }
                }
                if (seed) {
                  if (postFinder || preFilter) {
                    if (postFinder) {
                      temp = [];
                      i3 = matcherOut.length;
                      while (i3--) {
                        if (elem = matcherOut[i3]) {
                          temp.push(matcherIn[i3] = elem);
                        }
                      }
                      postFinder(null, matcherOut = [], temp, xml);
                    }
                    i3 = matcherOut.length;
                    while (i3--) {
                      if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i3]) > -1) {
                        seed[temp] = !(results[temp] = elem);
                      }
                    }
                  }
                } else {
                  matcherOut = condense(
                    matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                  );
                  if (postFinder) {
                    postFinder(null, results, matcherOut, xml);
                  } else {
                    push2.apply(results, matcherOut);
                  }
                }
              });
            }
            function matcherFromTokens(tokens) {
              var checkContext, matcher, j2, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
              }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
              }, implicitRelative, true), matchers = [function(elem, context, xml) {
                var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                checkContext = null;
                return ret;
              }];
              for (; i3 < len; i3++) {
                if (matcher = Expr.relative[tokens[i3].type]) {
                  matchers = [addCombinator(elementMatcher(matchers), matcher)];
                } else {
                  matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
                  if (matcher[expando]) {
                    j2 = ++i3;
                    for (; j2 < len; j2++) {
                      if (Expr.relative[tokens[j2].type]) {
                        break;
                      }
                    }
                    return setMatcher(
                      i3 > 1 && elementMatcher(matchers),
                      i3 > 1 && toSelector(
                        // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })
                      ).replace(rtrimCSS, "$1"),
                      matcher,
                      i3 < j2 && matcherFromTokens(tokens.slice(i3, j2)),
                      j2 < len && matcherFromTokens(tokens = tokens.slice(j2)),
                      j2 < len && toSelector(tokens)
                    );
                  }
                  matchers.push(matcher);
                }
              }
              return elementMatcher(matchers);
            }
            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
              var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j2, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) {
                  outermostContext = context == document3 || context || outermost;
                }
                for (; i3 !== len && (elem = elems[i3]) != null; i3++) {
                  if (byElement && elem) {
                    j2 = 0;
                    if (!context && elem.ownerDocument != document3) {
                      setDocument(elem);
                      xml = !documentIsHTML;
                    }
                    while (matcher = elementMatchers[j2++]) {
                      if (matcher(elem, context || document3, xml)) {
                        push2.call(results, elem);
                        break;
                      }
                    }
                    if (outermost) {
                      dirruns = dirrunsUnique;
                    }
                  }
                  if (bySet) {
                    if (elem = !matcher && elem) {
                      matchedCount--;
                    }
                    if (seed) {
                      unmatched.push(elem);
                    }
                  }
                }
                matchedCount += i3;
                if (bySet && i3 !== matchedCount) {
                  j2 = 0;
                  while (matcher = setMatchers[j2++]) {
                    matcher(unmatched, setMatched, context, xml);
                  }
                  if (seed) {
                    if (matchedCount > 0) {
                      while (i3--) {
                        if (!(unmatched[i3] || setMatched[i3])) {
                          setMatched[i3] = pop.call(results);
                        }
                      }
                    }
                    setMatched = condense(setMatched);
                  }
                  push2.apply(results, setMatched);
                  if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                    jQuery.uniqueSort(results);
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                  outermostContext = contextBackup;
                }
                return unmatched;
              };
              return bySet ? markFunction(superMatcher) : superMatcher;
            }
            function compile(selector, match) {
              var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
              if (!cached) {
                if (!match) {
                  match = tokenize(selector);
                }
                i3 = match.length;
                while (i3--) {
                  cached = matcherFromTokens(match[i3]);
                  if (cached[expando]) {
                    setMatchers.push(cached);
                  } else {
                    elementMatchers.push(cached);
                  }
                }
                cached = compilerCache(
                  selector,
                  matcherFromGroupMatchers(elementMatchers, setMatchers)
                );
                cached.selector = selector;
              }
              return cached;
            }
            function select(selector, context, results, seed) {
              var i3, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
              results = results || [];
              if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                  context = (Expr.find.ID(
                    token.matches[0].replace(runescape, funescape),
                    context
                  ) || [])[0];
                  if (!context) {
                    return results;
                  } else if (compiled) {
                    context = context.parentNode;
                  }
                  selector = selector.slice(tokens.shift().value.length);
                }
                i3 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                while (i3--) {
                  token = tokens[i3];
                  if (Expr.relative[type = token.type]) {
                    break;
                  }
                  if (find2 = Expr.find[type]) {
                    if (seed = find2(
                      token.matches[0].replace(runescape, funescape),
                      rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                    )) {
                      tokens.splice(i3, 1);
                      selector = seed.length && toSelector(tokens);
                      if (!selector) {
                        push2.apply(results, seed);
                        return results;
                      }
                      break;
                    }
                  }
                }
              }
              (compiled || compile(selector, match))(
                seed,
                context,
                !documentIsHTML,
                results,
                !context || rsibling.test(selector) && testContext(context.parentNode) || context
              );
              return results;
            }
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            setDocument();
            support.sortDetached = assert(function(el) {
              return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
            });
            jQuery.find = find;
            jQuery.expr[":"] = jQuery.expr.pseudos;
            jQuery.unique = jQuery.uniqueSort;
            find.compile = compile;
            find.select = select;
            find.setDocument = setDocument;
            find.tokenize = tokenize;
            find.escape = jQuery.escapeSelector;
            find.getText = jQuery.text;
            find.isXML = jQuery.isXMLDoc;
            find.selectors = jQuery.expr;
            find.support = jQuery.support;
            find.uniqueSort = jQuery.uniqueSort;
          })();
          var dir = function(elem, dir2, until) {
            var matched = [], truncate = until !== void 0;
            while ((elem = elem[dir2]) && elem.nodeType !== 9) {
              if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                  break;
                }
                matched.push(elem);
              }
            }
            return matched;
          };
          var siblings = function(n2, elem) {
            var matched = [];
            for (; n2; n2 = n2.nextSibling) {
              if (n2.nodeType === 1 && n2 !== elem) {
                matched.push(n2);
              }
            }
            return matched;
          };
          var rneedsContext = jQuery.expr.match.needsContext;
          var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function winnow(elements, qualifier, not) {
            if (isFunction(qualifier)) {
              return jQuery.grep(elements, function(elem, i2) {
                return !!qualifier.call(elem, i2, elem) !== not;
              });
            }
            if (qualifier.nodeType) {
              return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not;
              });
            }
            if (typeof qualifier !== "string") {
              return jQuery.grep(elements, function(elem) {
                return indexOf.call(qualifier, elem) > -1 !== not;
              });
            }
            return jQuery.filter(qualifier, elements, not);
          }
          jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
              expr = ":not(" + expr + ")";
            }
            if (elems.length === 1 && elem.nodeType === 1) {
              return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
            }
            return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
              return elem2.nodeType === 1;
            }));
          };
          jQuery.fn.extend({
            find: function(selector) {
              var i2, ret, len = this.length, self = this;
              if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                  for (i2 = 0; i2 < len; i2++) {
                    if (jQuery.contains(self[i2], this)) {
                      return true;
                    }
                  }
                }));
              }
              ret = this.pushStack([]);
              for (i2 = 0; i2 < len; i2++) {
                jQuery.find(selector, self[i2], ret);
              }
              return len > 1 ? jQuery.uniqueSort(ret) : ret;
            },
            filter: function(selector) {
              return this.pushStack(winnow(this, selector || [], false));
            },
            not: function(selector) {
              return this.pushStack(winnow(this, selector || [], true));
            },
            is: function(selector) {
              return !!winnow(
                this,
                // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
                false
              ).length;
            }
          });
          var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
            var match, elem;
            if (!selector) {
              return this;
            }
            root = root || rootjQuery;
            if (typeof selector === "string") {
              if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                match = [null, selector, null];
              } else {
                match = rquickExpr.exec(selector);
              }
              if (match && (match[1] || !context)) {
                if (match[1]) {
                  context = context instanceof jQuery ? context[0] : context;
                  jQuery.merge(this, jQuery.parseHTML(
                    match[1],
                    context && context.nodeType ? context.ownerDocument || context : document2,
                    true
                  ));
                  if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                    for (match in context) {
                      if (isFunction(this[match])) {
                        this[match](context[match]);
                      } else {
                        this.attr(match, context[match]);
                      }
                    }
                  }
                  return this;
                } else {
                  elem = document2.getElementById(match[2]);
                  if (elem) {
                    this[0] = elem;
                    this.length = 1;
                  }
                  return this;
                }
              } else if (!context || context.jquery) {
                return (context || root).find(selector);
              } else {
                return this.constructor(context).find(selector);
              }
            } else if (selector.nodeType) {
              this[0] = selector;
              this.length = 1;
              return this;
            } else if (isFunction(selector)) {
              return root.ready !== void 0 ? root.ready(selector) : (
                // Execute immediately if ready is not present
                selector(jQuery)
              );
            }
            return jQuery.makeArray(selector, this);
          };
          init.prototype = jQuery.fn;
          rootjQuery = jQuery(document2);
          var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
          };
          jQuery.fn.extend({
            has: function(target) {
              var targets = jQuery(target, this), l2 = targets.length;
              return this.filter(function() {
                var i2 = 0;
                for (; i2 < l2; i2++) {
                  if (jQuery.contains(this, targets[i2])) {
                    return true;
                  }
                }
              });
            },
            closest: function(selectors, context) {
              var cur, i2 = 0, l2 = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
              if (!rneedsContext.test(selectors)) {
                for (; i2 < l2; i2++) {
                  for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                      // Don't pass non-elements to jQuery#find
                      cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                    ))) {
                      matched.push(cur);
                      break;
                    }
                  }
                }
              }
              return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
            },
            // Determine the position of an element within the set
            index: function(elem) {
              if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
              }
              if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
              }
              return indexOf.call(
                this,
                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem
              );
            },
            add: function(selector, context) {
              return this.pushStack(
                jQuery.uniqueSort(
                  jQuery.merge(this.get(), jQuery(selector, context))
                )
              );
            },
            addBack: function(selector) {
              return this.add(
                selector == null ? this.prevObject : this.prevObject.filter(selector)
              );
            }
          });
          function sibling(cur, dir2) {
            while ((cur = cur[dir2]) && cur.nodeType !== 1) {
            }
            return cur;
          }
          jQuery.each({
            parent: function(elem) {
              var parent = elem.parentNode;
              return parent && parent.nodeType !== 11 ? parent : null;
            },
            parents: function(elem) {
              return dir(elem, "parentNode");
            },
            parentsUntil: function(elem, _i, until) {
              return dir(elem, "parentNode", until);
            },
            next: function(elem) {
              return sibling(elem, "nextSibling");
            },
            prev: function(elem) {
              return sibling(elem, "previousSibling");
            },
            nextAll: function(elem) {
              return dir(elem, "nextSibling");
            },
            prevAll: function(elem) {
              return dir(elem, "previousSibling");
            },
            nextUntil: function(elem, _i, until) {
              return dir(elem, "nextSibling", until);
            },
            prevUntil: function(elem, _i, until) {
              return dir(elem, "previousSibling", until);
            },
            siblings: function(elem) {
              return siblings((elem.parentNode || {}).firstChild, elem);
            },
            children: function(elem) {
              return siblings(elem.firstChild);
            },
            contents: function(elem) {
              if (elem.contentDocument != null && // Support: IE 11+
              // <object> elements with no `data` attribute has an object
              // `contentDocument` with a `null` prototype.
              getProto(elem.contentDocument)) {
                return elem.contentDocument;
              }
              if (nodeName(elem, "template")) {
                elem = elem.content || elem;
              }
              return jQuery.merge([], elem.childNodes);
            }
          }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
              var matched = jQuery.map(this, fn, until);
              if (name.slice(-5) !== "Until") {
                selector = until;
              }
              if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
              }
              if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                  jQuery.uniqueSort(matched);
                }
                if (rparentsprev.test(name)) {
                  matched.reverse();
                }
              }
              return this.pushStack(matched);
            };
          });
          var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
          function createOptions(options) {
            var object = {};
            jQuery.each(options.match(rnothtmlwhite) || [], function(_2, flag) {
              object[flag] = true;
            });
            return object;
          }
          jQuery.Callbacks = function(options) {
            options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
            var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
              locked = locked || options.once;
              fired = firing = true;
              for (; queue.length; firingIndex = -1) {
                memory = queue.shift();
                while (++firingIndex < list.length) {
                  if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    firingIndex = list.length;
                    memory = false;
                  }
                }
              }
              if (!options.memory) {
                memory = false;
              }
              firing = false;
              if (locked) {
                if (memory) {
                  list = [];
                } else {
                  list = "";
                }
              }
            }, self = {
              // Add a callback or a collection of callbacks to the list
              add: function() {
                if (list) {
                  if (memory && !firing) {
                    firingIndex = list.length - 1;
                    queue.push(memory);
                  }
                  (function add(args) {
                    jQuery.each(args, function(_2, arg) {
                      if (isFunction(arg)) {
                        if (!options.unique || !self.has(arg)) {
                          list.push(arg);
                        }
                      } else if (arg && arg.length && toType(arg) !== "string") {
                        add(arg);
                      }
                    });
                  })(arguments);
                  if (memory && !firing) {
                    fire();
                  }
                }
                return this;
              },
              // Remove a callback from the list
              remove: function() {
                jQuery.each(arguments, function(_2, arg) {
                  var index;
                  while ((index = jQuery.inArray(arg, list, index)) > -1) {
                    list.splice(index, 1);
                    if (index <= firingIndex) {
                      firingIndex--;
                    }
                  }
                });
                return this;
              },
              // Check if a given callback is in the list.
              // If no argument is given, return whether or not list has callbacks attached.
              has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
              },
              // Remove all callbacks from the list
              empty: function() {
                if (list) {
                  list = [];
                }
                return this;
              },
              // Disable .fire and .add
              // Abort any current/pending executions
              // Clear all callbacks and values
              disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
              },
              disabled: function() {
                return !list;
              },
              // Disable .fire
              // Also disable .add unless we have memory (since it would have no effect)
              // Abort any pending executions
              lock: function() {
                locked = queue = [];
                if (!memory && !firing) {
                  list = memory = "";
                }
                return this;
              },
              locked: function() {
                return !!locked;
              },
              // Call all callbacks with the given context and arguments
              fireWith: function(context, args) {
                if (!locked) {
                  args = args || [];
                  args = [context, args.slice ? args.slice() : args];
                  queue.push(args);
                  if (!firing) {
                    fire();
                  }
                }
                return this;
              },
              // Call all the callbacks with the given arguments
              fire: function() {
                self.fireWith(this, arguments);
                return this;
              },
              // To know if the callbacks have already been called at least once
              fired: function() {
                return !!fired;
              }
            };
            return self;
          };
          function Identity(v2) {
            return v2;
          }
          function Thrower(ex) {
            throw ex;
          }
          function adoptValue(value, resolve, reject, noValue) {
            var method;
            try {
              if (value && isFunction(method = value.promise)) {
                method.call(value).done(resolve).fail(reject);
              } else if (value && isFunction(method = value.then)) {
                method.call(value, resolve, reject);
              } else {
                resolve.apply(void 0, [value].slice(noValue));
              }
            } catch (value2) {
              reject.apply(void 0, [value2]);
            }
          }
          jQuery.extend({
            Deferred: function(func) {
              var tuples = [
                // action, add listener, callbacks,
                // ... .then handlers, argument index, [final state]
                [
                  "notify",
                  "progress",
                  jQuery.Callbacks("memory"),
                  jQuery.Callbacks("memory"),
                  2
                ],
                [
                  "resolve",
                  "done",
                  jQuery.Callbacks("once memory"),
                  jQuery.Callbacks("once memory"),
                  0,
                  "resolved"
                ],
                [
                  "reject",
                  "fail",
                  jQuery.Callbacks("once memory"),
                  jQuery.Callbacks("once memory"),
                  1,
                  "rejected"
                ]
              ], state = "pending", promise = {
                state: function() {
                  return state;
                },
                always: function() {
                  deferred.done(arguments).fail(arguments);
                  return this;
                },
                "catch": function(fn) {
                  return promise.then(null, fn);
                },
                // Keep pipe for back-compat
                pipe: function() {
                  var fns = arguments;
                  return jQuery.Deferred(function(newDefer) {
                    jQuery.each(tuples, function(_i, tuple) {
                      var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                      deferred[tuple[1]](function() {
                        var returned = fn && fn.apply(this, arguments);
                        if (returned && isFunction(returned.promise)) {
                          returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                        } else {
                          newDefer[tuple[0] + "With"](
                            this,
                            fn ? [returned] : arguments
                          );
                        }
                      });
                    });
                    fns = null;
                  }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                  var maxDepth = 0;
                  function resolve(depth, deferred2, handler, special) {
                    return function() {
                      var that = this, args = arguments, mightThrow = function() {
                        var returned, then;
                        if (depth < maxDepth) {
                          return;
                        }
                        returned = handler.apply(that, args);
                        if (returned === deferred2.promise()) {
                          throw new TypeError("Thenable self-resolution");
                        }
                        then = returned && // Support: Promises/A+ section 2.3.4
                        // https://promisesaplus.com/#point-64
                        // Only check objects and functions for thenability
                        (typeof returned === "object" || typeof returned === "function") && returned.then;
                        if (isFunction(then)) {
                          if (special) {
                            then.call(
                              returned,
                              resolve(maxDepth, deferred2, Identity, special),
                              resolve(maxDepth, deferred2, Thrower, special)
                            );
                          } else {
                            maxDepth++;
                            then.call(
                              returned,
                              resolve(maxDepth, deferred2, Identity, special),
                              resolve(maxDepth, deferred2, Thrower, special),
                              resolve(
                                maxDepth,
                                deferred2,
                                Identity,
                                deferred2.notifyWith
                              )
                            );
                          }
                        } else {
                          if (handler !== Identity) {
                            that = void 0;
                            args = [returned];
                          }
                          (special || deferred2.resolveWith)(that, args);
                        }
                      }, process = special ? mightThrow : function() {
                        try {
                          mightThrow();
                        } catch (e2) {
                          if (jQuery.Deferred.exceptionHook) {
                            jQuery.Deferred.exceptionHook(
                              e2,
                              process.error
                            );
                          }
                          if (depth + 1 >= maxDepth) {
                            if (handler !== Thrower) {
                              that = void 0;
                              args = [e2];
                            }
                            deferred2.rejectWith(that, args);
                          }
                        }
                      };
                      if (depth) {
                        process();
                      } else {
                        if (jQuery.Deferred.getErrorHook) {
                          process.error = jQuery.Deferred.getErrorHook();
                        } else if (jQuery.Deferred.getStackHook) {
                          process.error = jQuery.Deferred.getStackHook();
                        }
                        window2.setTimeout(process);
                      }
                    };
                  }
                  return jQuery.Deferred(function(newDefer) {
                    tuples[0][3].add(
                      resolve(
                        0,
                        newDefer,
                        isFunction(onProgress) ? onProgress : Identity,
                        newDefer.notifyWith
                      )
                    );
                    tuples[1][3].add(
                      resolve(
                        0,
                        newDefer,
                        isFunction(onFulfilled) ? onFulfilled : Identity
                      )
                    );
                    tuples[2][3].add(
                      resolve(
                        0,
                        newDefer,
                        isFunction(onRejected) ? onRejected : Thrower
                      )
                    );
                  }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                  return obj != null ? jQuery.extend(obj, promise) : promise;
                }
              }, deferred = {};
              jQuery.each(tuples, function(i2, tuple) {
                var list = tuple[2], stateString = tuple[5];
                promise[tuple[1]] = list.add;
                if (stateString) {
                  list.add(
                    function() {
                      state = stateString;
                    },
                    // rejected_callbacks.disable
                    // fulfilled_callbacks.disable
                    tuples[3 - i2][2].disable,
                    // rejected_handlers.disable
                    // fulfilled_handlers.disable
                    tuples[3 - i2][3].disable,
                    // progress_callbacks.lock
                    tuples[0][2].lock,
                    // progress_handlers.lock
                    tuples[0][3].lock
                  );
                }
                list.add(tuple[3].fire);
                deferred[tuple[0]] = function() {
                  deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                  return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
              });
              promise.promise(deferred);
              if (func) {
                func.call(deferred, deferred);
              }
              return deferred;
            },
            // Deferred helper
            when: function(singleValue) {
              var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i3) {
                return function(value) {
                  resolveContexts[i3] = this;
                  resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
                  if (!--remaining) {
                    primary.resolveWith(resolveContexts, resolveValues);
                  }
                };
              };
              if (remaining <= 1) {
                adoptValue(
                  singleValue,
                  primary.done(updateFunc(i2)).resolve,
                  primary.reject,
                  !remaining
                );
                if (primary.state() === "pending" || isFunction(resolveValues[i2] && resolveValues[i2].then)) {
                  return primary.then();
                }
              }
              while (i2--) {
                adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
              }
              return primary.promise();
            }
          });
          var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          jQuery.Deferred.exceptionHook = function(error, asyncError) {
            if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
              window2.console.warn(
                "jQuery.Deferred exception: " + error.message,
                error.stack,
                asyncError
              );
            }
          };
          jQuery.readyException = function(error) {
            window2.setTimeout(function() {
              throw error;
            });
          };
          var readyList = jQuery.Deferred();
          jQuery.fn.ready = function(fn) {
            readyList.then(fn).catch(function(error) {
              jQuery.readyException(error);
            });
            return this;
          };
          jQuery.extend({
            // Is the DOM ready to be used? Set to true once it occurs.
            isReady: false,
            // A counter to track how many items to wait for before
            // the ready event fires. See trac-6781
            readyWait: 1,
            // Handle when the DOM is ready
            ready: function(wait) {
              if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
              }
              jQuery.isReady = true;
              if (wait !== true && --jQuery.readyWait > 0) {
                return;
              }
              readyList.resolveWith(document2, [jQuery]);
            }
          });
          jQuery.ready.then = readyList.then;
          function completed() {
            document2.removeEventListener("DOMContentLoaded", completed);
            window2.removeEventListener("load", completed);
            jQuery.ready();
          }
          if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
            window2.setTimeout(jQuery.ready);
          } else {
            document2.addEventListener("DOMContentLoaded", completed);
            window2.addEventListener("load", completed);
          }
          var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i2 = 0, len = elems.length, bulk = key == null;
            if (toType(key) === "object") {
              chainable = true;
              for (i2 in key) {
                access(elems, fn, i2, key[i2], true, emptyGet, raw);
              }
            } else if (value !== void 0) {
              chainable = true;
              if (!isFunction(value)) {
                raw = true;
              }
              if (bulk) {
                if (raw) {
                  fn.call(elems, value);
                  fn = null;
                } else {
                  bulk = fn;
                  fn = function(elem, _key, value2) {
                    return bulk.call(jQuery(elem), value2);
                  };
                }
              }
              if (fn) {
                for (; i2 < len; i2++) {
                  fn(
                    elems[i2],
                    key,
                    raw ? value : value.call(elems[i2], i2, fn(elems[i2], key))
                  );
                }
              }
            }
            if (chainable) {
              return elems;
            }
            if (bulk) {
              return fn.call(elems);
            }
            return len ? fn(elems[0], key) : emptyGet;
          };
          var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
          function fcamelCase(_all, letter) {
            return letter.toUpperCase();
          }
          function camelCase(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
          }
          var acceptData = function(owner) {
            return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
          };
          function Data() {
            this.expando = jQuery.expando + Data.uid++;
          }
          Data.uid = 1;
          Data.prototype = {
            cache: function(owner) {
              var value = owner[this.expando];
              if (!value) {
                value = {};
                if (acceptData(owner)) {
                  if (owner.nodeType) {
                    owner[this.expando] = value;
                  } else {
                    Object.defineProperty(owner, this.expando, {
                      value,
                      configurable: true
                    });
                  }
                }
              }
              return value;
            },
            set: function(owner, data, value) {
              var prop, cache = this.cache(owner);
              if (typeof data === "string") {
                cache[camelCase(data)] = value;
              } else {
                for (prop in data) {
                  cache[camelCase(prop)] = data[prop];
                }
              }
              return cache;
            },
            get: function(owner, key) {
              return key === void 0 ? this.cache(owner) : (
                // Always use camelCase key (gh-2257)
                owner[this.expando] && owner[this.expando][camelCase(key)]
              );
            },
            access: function(owner, key, value) {
              if (key === void 0 || key && typeof key === "string" && value === void 0) {
                return this.get(owner, key);
              }
              this.set(owner, key, value);
              return value !== void 0 ? value : key;
            },
            remove: function(owner, key) {
              var i2, cache = owner[this.expando];
              if (cache === void 0) {
                return;
              }
              if (key !== void 0) {
                if (Array.isArray(key)) {
                  key = key.map(camelCase);
                } else {
                  key = camelCase(key);
                  key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
                }
                i2 = key.length;
                while (i2--) {
                  delete cache[key[i2]];
                }
              }
              if (key === void 0 || jQuery.isEmptyObject(cache)) {
                if (owner.nodeType) {
                  owner[this.expando] = void 0;
                } else {
                  delete owner[this.expando];
                }
              }
            },
            hasData: function(owner) {
              var cache = owner[this.expando];
              return cache !== void 0 && !jQuery.isEmptyObject(cache);
            }
          };
          var dataPriv = new Data();
          var dataUser = new Data();
          var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
          function getData(data) {
            if (data === "true") {
              return true;
            }
            if (data === "false") {
              return false;
            }
            if (data === "null") {
              return null;
            }
            if (data === +data + "") {
              return +data;
            }
            if (rbrace.test(data)) {
              return JSON.parse(data);
            }
            return data;
          }
          function dataAttr(elem, key, data) {
            var name;
            if (data === void 0 && elem.nodeType === 1) {
              name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
              data = elem.getAttribute(name);
              if (typeof data === "string") {
                try {
                  data = getData(data);
                } catch (e2) {
                }
                dataUser.set(elem, key, data);
              } else {
                data = void 0;
              }
            }
            return data;
          }
          jQuery.extend({
            hasData: function(elem) {
              return dataUser.hasData(elem) || dataPriv.hasData(elem);
            },
            data: function(elem, name, data) {
              return dataUser.access(elem, name, data);
            },
            removeData: function(elem, name) {
              dataUser.remove(elem, name);
            },
            // TODO: Now that all calls to _data and _removeData have been replaced
            // with direct calls to dataPriv methods, these can be deprecated.
            _data: function(elem, name, data) {
              return dataPriv.access(elem, name, data);
            },
            _removeData: function(elem, name) {
              dataPriv.remove(elem, name);
            }
          });
          jQuery.fn.extend({
            data: function(key, value) {
              var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
              if (key === void 0) {
                if (this.length) {
                  data = dataUser.get(elem);
                  if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                    i2 = attrs.length;
                    while (i2--) {
                      if (attrs[i2]) {
                        name = attrs[i2].name;
                        if (name.indexOf("data-") === 0) {
                          name = camelCase(name.slice(5));
                          dataAttr(elem, name, data[name]);
                        }
                      }
                    }
                    dataPriv.set(elem, "hasDataAttrs", true);
                  }
                }
                return data;
              }
              if (typeof key === "object") {
                return this.each(function() {
                  dataUser.set(this, key);
                });
              }
              return access(this, function(value2) {
                var data2;
                if (elem && value2 === void 0) {
                  data2 = dataUser.get(elem, key);
                  if (data2 !== void 0) {
                    return data2;
                  }
                  data2 = dataAttr(elem, key);
                  if (data2 !== void 0) {
                    return data2;
                  }
                  return;
                }
                this.each(function() {
                  dataUser.set(this, key, value2);
                });
              }, null, value, arguments.length > 1, null, true);
            },
            removeData: function(key) {
              return this.each(function() {
                dataUser.remove(this, key);
              });
            }
          });
          jQuery.extend({
            queue: function(elem, type, data) {
              var queue;
              if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                if (data) {
                  if (!queue || Array.isArray(data)) {
                    queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                  } else {
                    queue.push(data);
                  }
                }
                return queue || [];
              }
            },
            dequeue: function(elem, type) {
              type = type || "fx";
              var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
              };
              if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
              }
              if (fn) {
                if (type === "fx") {
                  queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
              }
              if (!startLength && hooks) {
                hooks.empty.fire();
              }
            },
            // Not public - generate a queueHooks object, or return the current one
            _queueHooks: function(elem, type) {
              var key = type + "queueHooks";
              return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                  dataPriv.remove(elem, [type + "queue", key]);
                })
              });
            }
          });
          jQuery.fn.extend({
            queue: function(type, data) {
              var setter = 2;
              if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
              }
              if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
              }
              return data === void 0 ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                  jQuery.dequeue(this, type);
                }
              });
            },
            dequeue: function(type) {
              return this.each(function() {
                jQuery.dequeue(this, type);
              });
            },
            clearQueue: function(type) {
              return this.queue(type || "fx", []);
            },
            // Get a promise resolved when queues of a certain type
            // are emptied (fx is the type by default)
            promise: function(type, obj) {
              var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i2 = this.length, resolve = function() {
                if (!--count) {
                  defer.resolveWith(elements, [elements]);
                }
              };
              if (typeof type !== "string") {
                obj = type;
                type = void 0;
              }
              type = type || "fx";
              while (i2--) {
                tmp = dataPriv.get(elements[i2], type + "queueHooks");
                if (tmp && tmp.empty) {
                  count++;
                  tmp.empty.add(resolve);
                }
              }
              resolve();
              return defer.promise(obj);
            }
          });
          var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
          var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
          var cssExpand = ["Top", "Right", "Bottom", "Left"];
          var documentElement = document2.documentElement;
          var isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem);
          }, composed = { composed: true };
          if (documentElement.getRootNode) {
            isAttached = function(elem) {
              return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
            };
          }
          var isHiddenWithinTree = function(elem, el) {
            elem = el || elem;
            return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
            // Support: Firefox <=43 - 45
            // Disconnected elements can have computed display: none, so first confirm that elem is
            // in the document.
            isAttached(elem) && jQuery.css(elem, "display") === "none";
          };
          function adjustCSS(elem, prop, valueParts, tween) {
            var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
              return tween.cur();
            } : function() {
              return jQuery.css(elem, prop, "");
            }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
            if (initialInUnit && initialInUnit[3] !== unit) {
              initial = initial / 2;
              unit = unit || initialInUnit[3];
              initialInUnit = +initial || 1;
              while (maxIterations--) {
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                  maxIterations = 0;
                }
                initialInUnit = initialInUnit / scale;
              }
              initialInUnit = initialInUnit * 2;
              jQuery.style(elem, prop, initialInUnit + unit);
              valueParts = valueParts || [];
            }
            if (valueParts) {
              initialInUnit = +initialInUnit || +initial || 0;
              adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
              if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
              }
            }
            return adjusted;
          }
          var defaultDisplayMap = {};
          function getDefaultDisplay(elem) {
            var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
            if (display) {
              return display;
            }
            temp = doc.body.appendChild(doc.createElement(nodeName2));
            display = jQuery.css(temp, "display");
            temp.parentNode.removeChild(temp);
            if (display === "none") {
              display = "block";
            }
            defaultDisplayMap[nodeName2] = display;
            return display;
          }
          function showHide(elements, show) {
            var display, elem, values = [], index = 0, length = elements.length;
            for (; index < length; index++) {
              elem = elements[index];
              if (!elem.style) {
                continue;
              }
              display = elem.style.display;
              if (show) {
                if (display === "none") {
                  values[index] = dataPriv.get(elem, "display") || null;
                  if (!values[index]) {
                    elem.style.display = "";
                  }
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                  values[index] = getDefaultDisplay(elem);
                }
              } else {
                if (display !== "none") {
                  values[index] = "none";
                  dataPriv.set(elem, "display", display);
                }
              }
            }
            for (index = 0; index < length; index++) {
              if (values[index] != null) {
                elements[index].style.display = values[index];
              }
            }
            return elements;
          }
          jQuery.fn.extend({
            show: function() {
              return showHide(this, true);
            },
            hide: function() {
              return showHide(this);
            },
            toggle: function(state) {
              if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
              }
              return this.each(function() {
                if (isHiddenWithinTree(this)) {
                  jQuery(this).show();
                } else {
                  jQuery(this).hide();
                }
              });
            }
          });
          var rcheckableType = /^(?:checkbox|radio)$/i;
          var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
          var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
          (function() {
            var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("checked", "checked");
            input.setAttribute("name", "t");
            div.appendChild(input);
            support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
            div.innerHTML = "<textarea>x</textarea>";
            support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
            div.innerHTML = "<option></option>";
            support.option = !!div.lastChild;
          })();
          var wrapMap = {
            // XHTML parsers do not magically insert elements in the
            // same way that tag soup parsers do. So we cannot shorten
            // this by omitting <tbody> or other required elements.
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
          wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
          wrapMap.th = wrapMap.td;
          if (!support.option) {
            wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
          }
          function getAll(context, tag) {
            var ret;
            if (typeof context.getElementsByTagName !== "undefined") {
              ret = context.getElementsByTagName(tag || "*");
            } else if (typeof context.querySelectorAll !== "undefined") {
              ret = context.querySelectorAll(tag || "*");
            } else {
              ret = [];
            }
            if (tag === void 0 || tag && nodeName(context, tag)) {
              return jQuery.merge([context], ret);
            }
            return ret;
          }
          function setGlobalEval(elems, refElements) {
            var i2 = 0, l2 = elems.length;
            for (; i2 < l2; i2++) {
              dataPriv.set(
                elems[i2],
                "globalEval",
                !refElements || dataPriv.get(refElements[i2], "globalEval")
              );
            }
          }
          var rhtml = /<|&#?\w+;/;
          function buildFragment(elems, context, scripts, selection, ignored) {
            var elem, tmp, tag, wrap, attached, j2, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l2 = elems.length;
            for (; i2 < l2; i2++) {
              elem = elems[i2];
              if (elem || elem === 0) {
                if (toType(elem) === "object") {
                  jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                } else if (!rhtml.test(elem)) {
                  nodes.push(context.createTextNode(elem));
                } else {
                  tmp = tmp || fragment.appendChild(context.createElement("div"));
                  tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                  wrap = wrapMap[tag] || wrapMap._default;
                  tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                  j2 = wrap[0];
                  while (j2--) {
                    tmp = tmp.lastChild;
                  }
                  jQuery.merge(nodes, tmp.childNodes);
                  tmp = fragment.firstChild;
                  tmp.textContent = "";
                }
              }
            }
            fragment.textContent = "";
            i2 = 0;
            while (elem = nodes[i2++]) {
              if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                  ignored.push(elem);
                }
                continue;
              }
              attached = isAttached(elem);
              tmp = getAll(fragment.appendChild(elem), "script");
              if (attached) {
                setGlobalEval(tmp);
              }
              if (scripts) {
                j2 = 0;
                while (elem = tmp[j2++]) {
                  if (rscriptType.test(elem.type || "")) {
                    scripts.push(elem);
                  }
                }
              }
            }
            return fragment;
          }
          var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
          function returnTrue() {
            return true;
          }
          function returnFalse() {
            return false;
          }
          function on(elem, types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
              if (typeof selector !== "string") {
                data = data || selector;
                selector = void 0;
              }
              for (type in types) {
                on(elem, type, selector, data, types[type], one);
              }
              return elem;
            }
            if (data == null && fn == null) {
              fn = selector;
              data = selector = void 0;
            } else if (fn == null) {
              if (typeof selector === "string") {
                fn = data;
                data = void 0;
              } else {
                fn = data;
                data = selector;
                selector = void 0;
              }
            }
            if (fn === false) {
              fn = returnFalse;
            } else if (!fn) {
              return elem;
            }
            if (one === 1) {
              origFn = fn;
              fn = function(event) {
                jQuery().off(event);
                return origFn.apply(this, arguments);
              };
              fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return elem.each(function() {
              jQuery.event.add(this, types, fn, data, selector);
            });
          }
          jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
              var handleObjIn, eventHandle, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
              if (!acceptData(elem)) {
                return;
              }
              if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
              }
              if (selector) {
                jQuery.find.matchesSelector(documentElement, selector);
              }
              if (!handler.guid) {
                handler.guid = jQuery.guid++;
              }
              if (!(events = elemData.events)) {
                events = elemData.events = /* @__PURE__ */ Object.create(null);
              }
              if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e2) {
                  return typeof jQuery !== "undefined" && jQuery.event.triggered !== e2.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                };
              }
              types = (types || "").match(rnothtmlwhite) || [""];
              t2 = types.length;
              while (t2--) {
                tmp = rtypenamespace.exec(types[t2]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                  continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                  type,
                  origType,
                  data,
                  handler,
                  guid: handler.guid,
                  selector,
                  needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                  namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                  handlers = events[type] = [];
                  handlers.delegateCount = 0;
                  if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                    if (elem.addEventListener) {
                      elem.addEventListener(type, eventHandle);
                    }
                  }
                }
                if (special.add) {
                  special.add.call(elem, handleObj);
                  if (!handleObj.handler.guid) {
                    handleObj.handler.guid = handler.guid;
                  }
                }
                if (selector) {
                  handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                  handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
              }
            },
            // Detach an event or set of events from an element
            remove: function(elem, types, handler, selector, mappedTypes) {
              var j2, origCount, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
              if (!elemData || !(events = elemData.events)) {
                return;
              }
              types = (types || "").match(rnothtmlwhite) || [""];
              t2 = types.length;
              while (t2--) {
                tmp = rtypenamespace.exec(types[t2]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                  for (type in events) {
                    jQuery.event.remove(elem, type + types[t2], handler, selector, true);
                  }
                  continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j2 = handlers.length;
                while (j2--) {
                  handleObj = handlers[j2];
                  if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                    handlers.splice(j2, 1);
                    if (handleObj.selector) {
                      handlers.delegateCount--;
                    }
                    if (special.remove) {
                      special.remove.call(elem, handleObj);
                    }
                  }
                }
                if (origCount && !handlers.length) {
                  if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                    jQuery.removeEvent(elem, type, elemData.handle);
                  }
                  delete events[type];
                }
              }
              if (jQuery.isEmptyObject(events)) {
                dataPriv.remove(elem, "handle events");
              }
            },
            dispatch: function(nativeEvent) {
              var i2, j2, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
              args[0] = event;
              for (i2 = 1; i2 < arguments.length; i2++) {
                args[i2] = arguments[i2];
              }
              event.delegateTarget = this;
              if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
              }
              handlerQueue = jQuery.event.handlers.call(this, event, handlers);
              i2 = 0;
              while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j2 = 0;
                while ((handleObj = matched.handlers[j2++]) && !event.isImmediatePropagationStopped()) {
                  if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;
                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                    if (ret !== void 0) {
                      if ((event.result = ret) === false) {
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    }
                  }
                }
              }
              if (special.postDispatch) {
                special.postDispatch.call(this, event);
              }
              return event.result;
            },
            handlers: function(event, handlers) {
              var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
              if (delegateCount && // Support: IE <=9
              // Black-hole SVG <use> instance trees (trac-13180)
              cur.nodeType && // Support: Firefox <=42
              // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
              // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
              // Support: IE 11 only
              // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
              !(event.type === "click" && event.button >= 1)) {
                for (; cur !== this; cur = cur.parentNode || this) {
                  if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for (i2 = 0; i2 < delegateCount; i2++) {
                      handleObj = handlers[i2];
                      sel = handleObj.selector + " ";
                      if (matchedSelectors[sel] === void 0) {
                        matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                      }
                      if (matchedSelectors[sel]) {
                        matchedHandlers.push(handleObj);
                      }
                    }
                    if (matchedHandlers.length) {
                      handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                    }
                  }
                }
              }
              cur = this;
              if (delegateCount < handlers.length) {
                handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
              }
              return handlerQueue;
            },
            addProp: function(name, hook) {
              Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                  if (this.originalEvent) {
                    return hook(this.originalEvent);
                  }
                } : function() {
                  if (this.originalEvent) {
                    return this.originalEvent[name];
                  }
                },
                set: function(value) {
                  Object.defineProperty(this, name, {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value
                  });
                }
              });
            },
            fix: function(originalEvent) {
              return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
            },
            special: {
              load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
              },
              click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function(data) {
                  var el = this || data;
                  if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                    leverageNative(el, "click", true);
                  }
                  return false;
                },
                trigger: function(data) {
                  var el = this || data;
                  if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                    leverageNative(el, "click");
                  }
                  return true;
                },
                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function(event) {
                  var target = event.target;
                  return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                }
              },
              beforeunload: {
                postDispatch: function(event) {
                  if (event.result !== void 0 && event.originalEvent) {
                    event.originalEvent.returnValue = event.result;
                  }
                }
              }
            }
          };
          function leverageNative(el, type, isSetup) {
            if (!isSetup) {
              if (dataPriv.get(el, type) === void 0) {
                jQuery.event.add(el, type, returnTrue);
              }
              return;
            }
            dataPriv.set(el, type, false);
            jQuery.event.add(el, type, {
              namespace: false,
              handler: function(event) {
                var result, saved = dataPriv.get(this, type);
                if (event.isTrigger & 1 && this[type]) {
                  if (!saved) {
                    saved = slice.call(arguments);
                    dataPriv.set(this, type, saved);
                    this[type]();
                    result = dataPriv.get(this, type);
                    dataPriv.set(this, type, false);
                    if (saved !== result) {
                      event.stopImmediatePropagation();
                      event.preventDefault();
                      return result;
                    }
                  } else if ((jQuery.event.special[type] || {}).delegateType) {
                    event.stopPropagation();
                  }
                } else if (saved) {
                  dataPriv.set(this, type, jQuery.event.trigger(
                    saved[0],
                    saved.slice(1),
                    this
                  ));
                  event.stopPropagation();
                  event.isImmediatePropagationStopped = returnTrue;
                }
              }
            });
          }
          jQuery.removeEvent = function(elem, type, handle) {
            if (elem.removeEventListener) {
              elem.removeEventListener(type, handle);
            }
          };
          jQuery.Event = function(src, props) {
            if (!(this instanceof jQuery.Event)) {
              return new jQuery.Event(src, props);
            }
            if (src && src.type) {
              this.originalEvent = src;
              this.type = src.type;
              this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
              src.returnValue === false ? returnTrue : returnFalse;
              this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
              this.currentTarget = src.currentTarget;
              this.relatedTarget = src.relatedTarget;
            } else {
              this.type = src;
            }
            if (props) {
              jQuery.extend(this, props);
            }
            this.timeStamp = src && src.timeStamp || Date.now();
            this[jQuery.expando] = true;
          };
          jQuery.Event.prototype = {
            constructor: jQuery.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: false,
            preventDefault: function() {
              var e2 = this.originalEvent;
              this.isDefaultPrevented = returnTrue;
              if (e2 && !this.isSimulated) {
                e2.preventDefault();
              }
            },
            stopPropagation: function() {
              var e2 = this.originalEvent;
              this.isPropagationStopped = returnTrue;
              if (e2 && !this.isSimulated) {
                e2.stopPropagation();
              }
            },
            stopImmediatePropagation: function() {
              var e2 = this.originalEvent;
              this.isImmediatePropagationStopped = returnTrue;
              if (e2 && !this.isSimulated) {
                e2.stopImmediatePropagation();
              }
              this.stopPropagation();
            }
          };
          jQuery.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            "char": true,
            code: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: true
          }, jQuery.event.addProp);
          jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
            function focusMappedHandler(nativeEvent) {
              if (document2.documentMode) {
                var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
                event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
                event.isSimulated = true;
                handle(nativeEvent);
                if (event.target === event.currentTarget) {
                  handle(event);
                }
              } else {
                jQuery.event.simulate(
                  delegateType,
                  nativeEvent.target,
                  jQuery.event.fix(nativeEvent)
                );
              }
            }
            jQuery.event.special[type] = {
              // Utilize native event if possible so blur/focus sequence is correct
              setup: function() {
                var attaches;
                leverageNative(this, type, true);
                if (document2.documentMode) {
                  attaches = dataPriv.get(this, delegateType);
                  if (!attaches) {
                    this.addEventListener(delegateType, focusMappedHandler);
                  }
                  dataPriv.set(this, delegateType, (attaches || 0) + 1);
                } else {
                  return false;
                }
              },
              trigger: function() {
                leverageNative(this, type);
                return true;
              },
              teardown: function() {
                var attaches;
                if (document2.documentMode) {
                  attaches = dataPriv.get(this, delegateType) - 1;
                  if (!attaches) {
                    this.removeEventListener(delegateType, focusMappedHandler);
                    dataPriv.remove(this, delegateType);
                  } else {
                    dataPriv.set(this, delegateType, attaches);
                  }
                } else {
                  return false;
                }
              },
              // Suppress native focus or blur if we're currently inside
              // a leveraged native-event stack
              _default: function(event) {
                return dataPriv.get(event.target, type);
              },
              delegateType
            };
            jQuery.event.special[delegateType] = {
              setup: function() {
                var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
                if (!attaches) {
                  if (document2.documentMode) {
                    this.addEventListener(delegateType, focusMappedHandler);
                  } else {
                    doc.addEventListener(type, focusMappedHandler, true);
                  }
                }
                dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
                if (!attaches) {
                  if (document2.documentMode) {
                    this.removeEventListener(delegateType, focusMappedHandler);
                  } else {
                    doc.removeEventListener(type, focusMappedHandler, true);
                  }
                  dataPriv.remove(dataHolder, delegateType);
                } else {
                  dataPriv.set(dataHolder, delegateType, attaches);
                }
              }
            };
          });
          jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          }, function(orig, fix) {
            jQuery.event.special[orig] = {
              delegateType: fix,
              bindType: fix,
              handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                  event.type = handleObj.origType;
                  ret = handleObj.handler.apply(this, arguments);
                  event.type = fix;
                }
                return ret;
              }
            };
          });
          jQuery.fn.extend({
            on: function(types, selector, data, fn) {
              return on(this, types, selector, data, fn);
            },
            one: function(types, selector, data, fn) {
              return on(this, types, selector, data, fn, 1);
            },
            off: function(types, selector, fn) {
              var handleObj, type;
              if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(
                  handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                  handleObj.selector,
                  handleObj.handler
                );
                return this;
              }
              if (typeof types === "object") {
                for (type in types) {
                  this.off(type, selector, types[type]);
                }
                return this;
              }
              if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = void 0;
              }
              if (fn === false) {
                fn = returnFalse;
              }
              return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
              });
            }
          });
          var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function manipulationTarget(elem, content) {
            if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
              return jQuery(elem).children("tbody")[0] || elem;
            }
            return elem;
          }
          function disableScript(elem) {
            elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
            return elem;
          }
          function restoreScript(elem) {
            if ((elem.type || "").slice(0, 5) === "true/") {
              elem.type = elem.type.slice(5);
            } else {
              elem.removeAttribute("type");
            }
            return elem;
          }
          function cloneCopyEvent(src, dest) {
            var i2, l2, type, pdataOld, udataOld, udataCur, events;
            if (dest.nodeType !== 1) {
              return;
            }
            if (dataPriv.hasData(src)) {
              pdataOld = dataPriv.get(src);
              events = pdataOld.events;
              if (events) {
                dataPriv.remove(dest, "handle events");
                for (type in events) {
                  for (i2 = 0, l2 = events[type].length; i2 < l2; i2++) {
                    jQuery.event.add(dest, type, events[type][i2]);
                  }
                }
              }
            }
            if (dataUser.hasData(src)) {
              udataOld = dataUser.access(src);
              udataCur = jQuery.extend({}, udataOld);
              dataUser.set(dest, udataCur);
            }
          }
          function fixInput(src, dest) {
            var nodeName2 = dest.nodeName.toLowerCase();
            if (nodeName2 === "input" && rcheckableType.test(src.type)) {
              dest.checked = src.checked;
            } else if (nodeName2 === "input" || nodeName2 === "textarea") {
              dest.defaultValue = src.defaultValue;
            }
          }
          function domManip(collection, args, callback, ignored) {
            args = flat(args);
            var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l2 = collection.length, iNoClone = l2 - 1, value = args[0], valueIsFunction = isFunction(value);
            if (valueIsFunction || l2 > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
              return collection.each(function(index) {
                var self = collection.eq(index);
                if (valueIsFunction) {
                  args[0] = value.call(this, index, self.html());
                }
                domManip(self, args, callback, ignored);
              });
            }
            if (l2) {
              fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
              first = fragment.firstChild;
              if (fragment.childNodes.length === 1) {
                fragment = first;
              }
              if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                for (; i2 < l2; i2++) {
                  node = fragment;
                  if (i2 !== iNoClone) {
                    node = jQuery.clone(node, true, true);
                    if (hasScripts) {
                      jQuery.merge(scripts, getAll(node, "script"));
                    }
                  }
                  callback.call(collection[i2], node, i2);
                }
                if (hasScripts) {
                  doc = scripts[scripts.length - 1].ownerDocument;
                  jQuery.map(scripts, restoreScript);
                  for (i2 = 0; i2 < hasScripts; i2++) {
                    node = scripts[i2];
                    if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                      if (node.src && (node.type || "").toLowerCase() !== "module") {
                        if (jQuery._evalUrl && !node.noModule) {
                          jQuery._evalUrl(node.src, {
                            nonce: node.nonce || node.getAttribute("nonce")
                          }, doc);
                        }
                      } else {
                        DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                      }
                    }
                  }
                }
              }
            }
            return collection;
          }
          function remove(elem, selector, keepData) {
            var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i2 = 0;
            for (; (node = nodes[i2]) != null; i2++) {
              if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node));
              }
              if (node.parentNode) {
                if (keepData && isAttached(node)) {
                  setGlobalEval(getAll(node, "script"));
                }
                node.parentNode.removeChild(node);
              }
            }
            return elem;
          }
          jQuery.extend({
            htmlPrefilter: function(html) {
              return html;
            },
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
              var i2, l2, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
              if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
                  fixInput(srcElements[i2], destElements[i2]);
                }
              }
              if (dataAndEvents) {
                if (deepDataAndEvents) {
                  srcElements = srcElements || getAll(elem);
                  destElements = destElements || getAll(clone);
                  for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
                    cloneCopyEvent(srcElements[i2], destElements[i2]);
                  }
                } else {
                  cloneCopyEvent(elem, clone);
                }
              }
              destElements = getAll(clone, "script");
              if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
              }
              return clone;
            },
            cleanData: function(elems) {
              var data, elem, type, special = jQuery.event.special, i2 = 0;
              for (; (elem = elems[i2]) !== void 0; i2++) {
                if (acceptData(elem)) {
                  if (data = elem[dataPriv.expando]) {
                    if (data.events) {
                      for (type in data.events) {
                        if (special[type]) {
                          jQuery.event.remove(elem, type);
                        } else {
                          jQuery.removeEvent(elem, type, data.handle);
                        }
                      }
                    }
                    elem[dataPriv.expando] = void 0;
                  }
                  if (elem[dataUser.expando]) {
                    elem[dataUser.expando] = void 0;
                  }
                }
              }
            }
          });
          jQuery.fn.extend({
            detach: function(selector) {
              return remove(this, selector, true);
            },
            remove: function(selector) {
              return remove(this, selector);
            },
            text: function(value) {
              return access(this, function(value2) {
                return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                  if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    this.textContent = value2;
                  }
                });
              }, null, value, arguments.length);
            },
            append: function() {
              return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  var target = manipulationTarget(this, elem);
                  target.appendChild(elem);
                }
              });
            },
            prepend: function() {
              return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  var target = manipulationTarget(this, elem);
                  target.insertBefore(elem, target.firstChild);
                }
              });
            },
            before: function() {
              return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                  this.parentNode.insertBefore(elem, this);
                }
              });
            },
            after: function() {
              return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                  this.parentNode.insertBefore(elem, this.nextSibling);
                }
              });
            },
            empty: function() {
              var elem, i2 = 0;
              for (; (elem = this[i2]) != null; i2++) {
                if (elem.nodeType === 1) {
                  jQuery.cleanData(getAll(elem, false));
                  elem.textContent = "";
                }
              }
              return this;
            },
            clone: function(dataAndEvents, deepDataAndEvents) {
              dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
              deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
              return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
              });
            },
            html: function(value) {
              return access(this, function(value2) {
                var elem = this[0] || {}, i2 = 0, l2 = this.length;
                if (value2 === void 0 && elem.nodeType === 1) {
                  return elem.innerHTML;
                }
                if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                  value2 = jQuery.htmlPrefilter(value2);
                  try {
                    for (; i2 < l2; i2++) {
                      elem = this[i2] || {};
                      if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, false));
                        elem.innerHTML = value2;
                      }
                    }
                    elem = 0;
                  } catch (e2) {
                  }
                }
                if (elem) {
                  this.empty().append(value2);
                }
              }, null, value, arguments.length);
            },
            replaceWith: function() {
              var ignored = [];
              return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                  jQuery.cleanData(getAll(this));
                  if (parent) {
                    parent.replaceChild(elem, this);
                  }
                }
              }, ignored);
            }
          });
          jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          }, function(name, original) {
            jQuery.fn[name] = function(selector) {
              var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i2 = 0;
              for (; i2 <= last; i2++) {
                elems = i2 === last ? this : this.clone(true);
                jQuery(insert[i2])[original](elems);
                push.apply(ret, elems.get());
              }
              return this.pushStack(ret);
            };
          });
          var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
          var rcustomProp = /^--/;
          var getStyles = function(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
              view = window2;
            }
            return view.getComputedStyle(elem);
          };
          var swap = function(elem, options, callback) {
            var ret, name, old = {};
            for (name in options) {
              old[name] = elem.style[name];
              elem.style[name] = options[name];
            }
            ret = callback.call(elem);
            for (name in options) {
              elem.style[name] = old[name];
            }
            return ret;
          };
          var rboxStyle = new RegExp(cssExpand.join("|"), "i");
          (function() {
            function computeStyleTests() {
              if (!div) {
                return;
              }
              container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
              div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
              documentElement.appendChild(container).appendChild(div);
              var divStyle = window2.getComputedStyle(div);
              pixelPositionVal = divStyle.top !== "1%";
              reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
              div.style.right = "60%";
              pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
              boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
              div.style.position = "absolute";
              scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
              documentElement.removeChild(container);
              div = null;
            }
            function roundPixelMeasures(measure) {
              return Math.round(parseFloat(measure));
            }
            var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
            if (!div.style) {
              return;
            }
            div.style.backgroundClip = "content-box";
            div.cloneNode(true).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            jQuery.extend(support, {
              boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
              },
              pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
              },
              pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
              },
              reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
              },
              scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
              },
              // Support: IE 9 - 11+, Edge 15 - 18+
              // IE/Edge misreport `getComputedStyle` of table rows with width/height
              // set in CSS while `offset*` properties report correct values.
              // Behavior in IE 9 is more subtle than in newer versions & it passes
              // some versions of this test; make sure not to make it pass there!
              //
              // Support: Firefox 70+
              // Only Firefox includes border widths
              // in computed dimensions. (gh-4529)
              reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                  table = document2.createElement("table");
                  tr = document2.createElement("tr");
                  trChild = document2.createElement("div");
                  table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                  tr.style.cssText = "box-sizing:content-box;border:1px solid";
                  tr.style.height = "1px";
                  trChild.style.height = "9px";
                  trChild.style.display = "block";
                  documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                  trStyle = window2.getComputedStyle(tr);
                  reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                  documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
              }
            });
          })();
          function curCSS(elem, name, computed) {
            var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
            computed = computed || getStyles(elem);
            if (computed) {
              ret = computed.getPropertyValue(name) || computed[name];
              if (isCustomProp && ret) {
                ret = ret.replace(rtrimCSS, "$1") || void 0;
              }
              if (ret === "" && !isAttached(elem)) {
                ret = jQuery.style(elem, name);
              }
              if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
              }
            }
            return ret !== void 0 ? (
              // Support: IE <=9 - 11 only
              // IE returns zIndex value as an integer.
              ret + ""
            ) : ret;
          }
          function addGetHookIf(conditionFn, hookFn) {
            return {
              get: function() {
                if (conditionFn()) {
                  delete this.get;
                  return;
                }
                return (this.get = hookFn).apply(this, arguments);
              }
            };
          }
          var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
          function vendorPropName(name) {
            var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
            while (i2--) {
              name = cssPrefixes[i2] + capName;
              if (name in emptyStyle) {
                return name;
              }
            }
          }
          function finalPropName(name) {
            var final = jQuery.cssProps[name] || vendorProps[name];
            if (final) {
              return final;
            }
            if (name in emptyStyle) {
              return name;
            }
            return vendorProps[name] = vendorPropName(name) || name;
          }
          var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
          };
          function setPositiveNumber(_elem, value, subtract) {
            var matches = rcssNum.exec(value);
            return matches ? (
              // Guard against undefined "subtract", e.g., when used as in cssHooks
              Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
            ) : value;
          }
          function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
            var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
            if (box === (isBorderBox ? "border" : "content")) {
              return 0;
            }
            for (; i2 < 4; i2 += 2) {
              if (box === "margin") {
                marginDelta += jQuery.css(elem, box + cssExpand[i2], true, styles);
              }
              if (!isBorderBox) {
                delta += jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
                if (box !== "padding") {
                  delta += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
                } else {
                  extra += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
                }
              } else {
                if (box === "content") {
                  delta -= jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
                }
                if (box !== "margin") {
                  delta -= jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
                }
              }
            }
            if (!isBorderBox && computedVal >= 0) {
              delta += Math.max(0, Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
                // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
                // Use an explicit zero to avoid NaN (gh-3964)
              )) || 0;
            }
            return delta + marginDelta;
          }
          function getWidthOrHeight(elem, dimension, extra) {
            var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
            if (rnumnonpx.test(val)) {
              if (!extra) {
                return val;
              }
              val = "auto";
            }
            if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Interestingly, in some cases IE 9 doesn't suffer from this issue.
            !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
            // This happens for inline elements with no explicit setting (gh-3571)
            val === "auto" || // Support: Android <=4.1 - 4.3 only
            // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
            !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
            elem.getClientRects().length) {
              isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
              valueIsBorderBox = offsetProp in elem;
              if (valueIsBorderBox) {
                val = elem[offsetProp];
              }
            }
            val = parseFloat(val) || 0;
            return val + boxModelAdjustment(
              elem,
              dimension,
              extra || (isBorderBox ? "border" : "content"),
              valueIsBorderBox,
              styles,
              // Provide the current computed size to request scroll gutter calculation (gh-3589)
              val
            ) + "px";
          }
          jQuery.extend({
            // Add in style property hooks for overriding the default
            // behavior of getting and setting a style property
            cssHooks: {
              opacity: {
                get: function(elem, computed) {
                  if (computed) {
                    var ret = curCSS(elem, "opacity");
                    return ret === "" ? "1" : ret;
                  }
                }
              }
            },
            // Don't automatically add "px" to these possibly-unitless properties
            cssNumber: {
              animationIterationCount: true,
              aspectRatio: true,
              borderImageSlice: true,
              columnCount: true,
              flexGrow: true,
              flexShrink: true,
              fontWeight: true,
              gridArea: true,
              gridColumn: true,
              gridColumnEnd: true,
              gridColumnStart: true,
              gridRow: true,
              gridRowEnd: true,
              gridRowStart: true,
              lineHeight: true,
              opacity: true,
              order: true,
              orphans: true,
              scale: true,
              widows: true,
              zIndex: true,
              zoom: true,
              // SVG-related
              fillOpacity: true,
              floodOpacity: true,
              stopOpacity: true,
              strokeMiterlimit: true,
              strokeOpacity: true
            },
            // Add in properties whose names you wish to fix before
            // setting or getting the value
            cssProps: {},
            // Get and set the style property on a DOM Node
            style: function(elem, name, value, extra) {
              if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
              }
              var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
              if (!isCustomProp) {
                name = finalPropName(origName);
              }
              hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
              if (value !== void 0) {
                type = typeof value;
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                  value = adjustCSS(elem, name, ret);
                  type = "number";
                }
                if (value == null || value !== value) {
                  return;
                }
                if (type === "number" && !isCustomProp) {
                  value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                }
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                  style[name] = "inherit";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                  if (isCustomProp) {
                    style.setProperty(name, value);
                  } else {
                    style[name] = value;
                  }
                }
              } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                  return ret;
                }
                return style[name];
              }
            },
            css: function(elem, name, extra, styles) {
              var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
              if (!isCustomProp) {
                name = finalPropName(origName);
              }
              hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
              if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
              }
              if (val === void 0) {
                val = curCSS(elem, name, styles);
              }
              if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
              }
              if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
              }
              return val;
            }
          });
          jQuery.each(["height", "width"], function(_i, dimension) {
            jQuery.cssHooks[dimension] = {
              get: function(elem, computed, extra) {
                if (computed) {
                  return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                  // Table columns in Safari have non-zero offsetWidth & zero
                  // getBoundingClientRect().width unless display is changed.
                  // Support: IE <=11 only
                  // Running getBoundingClientRect on a disconnected node
                  // in IE throws an error.
                  (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                  }) : getWidthOrHeight(elem, dimension, extra);
                }
              },
              set: function(elem, value, extra) {
                var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                  elem,
                  dimension,
                  extra,
                  isBorderBox,
                  styles
                ) : 0;
                if (isBorderBox && scrollboxSizeBuggy) {
                  subtract -= Math.ceil(
                    elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                  );
                }
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                  elem.style[dimension] = value;
                  value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
              }
            };
          });
          jQuery.cssHooks.marginLeft = addGetHookIf(
            support.reliableMarginLeft,
            function(elem, computed) {
              if (computed) {
                return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                  return elem.getBoundingClientRect().left;
                })) + "px";
              }
            }
          );
          jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
          }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
              expand: function(value) {
                var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
                for (; i2 < 4; i2++) {
                  expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
                }
                return expanded;
              }
            };
            if (prefix !== "margin") {
              jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
            }
          });
          jQuery.fn.extend({
            css: function(name, value) {
              return access(this, function(elem, name2, value2) {
                var styles, len, map = {}, i2 = 0;
                if (Array.isArray(name2)) {
                  styles = getStyles(elem);
                  len = name2.length;
                  for (; i2 < len; i2++) {
                    map[name2[i2]] = jQuery.css(elem, name2[i2], false, styles);
                  }
                  return map;
                }
                return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
              }, name, value, arguments.length > 1);
            }
          });
          function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing);
          }
          jQuery.Tween = Tween;
          Tween.prototype = {
            constructor: Tween,
            init: function(elem, options, prop, end, easing, unit) {
              this.elem = elem;
              this.prop = prop;
              this.easing = easing || jQuery.easing._default;
              this.options = options;
              this.start = this.now = this.cur();
              this.end = end;
              this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
            },
            cur: function() {
              var hooks = Tween.propHooks[this.prop];
              return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
            },
            run: function(percent) {
              var eased, hooks = Tween.propHooks[this.prop];
              if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](
                  percent,
                  this.options.duration * percent,
                  0,
                  1,
                  this.options.duration
                );
              } else {
                this.pos = eased = percent;
              }
              this.now = (this.end - this.start) * eased + this.start;
              if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
              }
              if (hooks && hooks.set) {
                hooks.set(this);
              } else {
                Tween.propHooks._default.set(this);
              }
              return this;
            }
          };
          Tween.prototype.init.prototype = Tween.prototype;
          Tween.propHooks = {
            _default: {
              get: function(tween) {
                var result;
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                  return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result;
              },
              set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                  jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                  jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                  tween.elem[tween.prop] = tween.now;
                }
              }
            }
          };
          Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(tween) {
              if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
              }
            }
          };
          jQuery.easing = {
            linear: function(p2) {
              return p2;
            },
            swing: function(p2) {
              return 0.5 - Math.cos(p2 * Math.PI) / 2;
            },
            _default: "swing"
          };
          jQuery.fx = Tween.prototype.init;
          jQuery.fx.step = {};
          var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
          function schedule() {
            if (inProgress) {
              if (document2.hidden === false && window2.requestAnimationFrame) {
                window2.requestAnimationFrame(schedule);
              } else {
                window2.setTimeout(schedule, jQuery.fx.interval);
              }
              jQuery.fx.tick();
            }
          }
          function createFxNow() {
            window2.setTimeout(function() {
              fxNow = void 0;
            });
            return fxNow = Date.now();
          }
          function genFx(type, includeWidth) {
            var which, i2 = 0, attrs = { height: type };
            includeWidth = includeWidth ? 1 : 0;
            for (; i2 < 4; i2 += 2 - includeWidth) {
              which = cssExpand[i2];
              attrs["margin" + which] = attrs["padding" + which] = type;
            }
            if (includeWidth) {
              attrs.opacity = attrs.width = type;
            }
            return attrs;
          }
          function createTween(value, prop, animation) {
            var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
            for (; index < length; index++) {
              if (tween = collection[index].call(animation, prop, value)) {
                return tween;
              }
            }
          }
          function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
            if (!opts.queue) {
              hooks = jQuery._queueHooks(elem, "fx");
              if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                  if (!hooks.unqueued) {
                    oldfire();
                  }
                };
              }
              hooks.unqueued++;
              anim.always(function() {
                anim.always(function() {
                  hooks.unqueued--;
                  if (!jQuery.queue(elem, "fx").length) {
                    hooks.empty.fire();
                  }
                });
              });
            }
            for (prop in props) {
              value = props[prop];
              if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                  if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                    hidden = true;
                  } else {
                    continue;
                  }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
              }
            }
            propTween = !jQuery.isEmptyObject(props);
            if (!propTween && jQuery.isEmptyObject(orig)) {
              return;
            }
            if (isBox && elem.nodeType === 1) {
              opts.overflow = [style.overflow, style.overflowX, style.overflowY];
              restoreDisplay = dataShow && dataShow.display;
              if (restoreDisplay == null) {
                restoreDisplay = dataPriv.get(elem, "display");
              }
              display = jQuery.css(elem, "display");
              if (display === "none") {
                if (restoreDisplay) {
                  display = restoreDisplay;
                } else {
                  showHide([elem], true);
                  restoreDisplay = elem.style.display || restoreDisplay;
                  display = jQuery.css(elem, "display");
                  showHide([elem]);
                }
              }
              if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                  if (!propTween) {
                    anim.done(function() {
                      style.display = restoreDisplay;
                    });
                    if (restoreDisplay == null) {
                      display = style.display;
                      restoreDisplay = display === "none" ? "" : display;
                    }
                  }
                  style.display = "inline-block";
                }
              }
            }
            if (opts.overflow) {
              style.overflow = "hidden";
              anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
              });
            }
            propTween = false;
            for (prop in orig) {
              if (!propTween) {
                if (dataShow) {
                  if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                  }
                } else {
                  dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
                }
                if (toggle) {
                  dataShow.hidden = !hidden;
                }
                if (hidden) {
                  showHide([elem], true);
                }
                anim.done(function() {
                  if (!hidden) {
                    showHide([elem]);
                  }
                  dataPriv.remove(elem, "fxshow");
                  for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                  }
                });
              }
              propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
              if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                  propTween.end = propTween.start;
                  propTween.start = 0;
                }
              }
            }
          }
          function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) {
              name = camelCase(index);
              easing = specialEasing[name];
              value = props[index];
              if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
              }
              if (index !== name) {
                props[name] = value;
                delete props[index];
              }
              hooks = jQuery.cssHooks[name];
              if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                  if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                  }
                }
              } else {
                specialEasing[name] = easing;
              }
            }
          }
          function Animation(elem, properties, options) {
            var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
              delete tick.elem;
            }), tick = function() {
              if (stopped) {
                return false;
              }
              var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(percent);
              }
              deferred.notifyWith(elem, [animation, percent, remaining]);
              if (percent < 1 && length2) {
                return remaining;
              }
              if (!length2) {
                deferred.notifyWith(elem, [animation, 1, 0]);
              }
              deferred.resolveWith(elem, [animation]);
              return false;
            }, animation = deferred.promise({
              elem,
              props: jQuery.extend({}, properties),
              opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
              }, options),
              originalProperties: properties,
              originalOptions: options,
              startTime: fxNow || createFxNow(),
              duration: options.duration,
              tweens: [],
              createTween: function(prop, end) {
                var tween = jQuery.Tween(
                  elem,
                  animation.opts,
                  prop,
                  end,
                  animation.opts.specialEasing[prop] || animation.opts.easing
                );
                animation.tweens.push(tween);
                return tween;
              },
              stop: function(gotoEnd) {
                var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                  return this;
                }
                stopped = true;
                for (; index2 < length2; index2++) {
                  animation.tweens[index2].run(1);
                }
                if (gotoEnd) {
                  deferred.notifyWith(elem, [animation, 1, 0]);
                  deferred.resolveWith(elem, [animation, gotoEnd]);
                } else {
                  deferred.rejectWith(elem, [animation, gotoEnd]);
                }
                return this;
              }
            }), props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (; index < length; index++) {
              result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
              if (result) {
                if (isFunction(result.stop)) {
                  jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                }
                return result;
              }
            }
            jQuery.map(props, createTween, animation);
            if (isFunction(animation.opts.start)) {
              animation.opts.start.call(elem, animation);
            }
            animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
            jQuery.fx.timer(
              jQuery.extend(tick, {
                elem,
                anim: animation,
                queue: animation.opts.queue
              })
            );
            return animation;
          }
          jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
              "*": [function(prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween;
              }]
            },
            tweener: function(props, callback) {
              if (isFunction(props)) {
                callback = props;
                props = ["*"];
              } else {
                props = props.match(rnothtmlwhite);
              }
              var prop, index = 0, length = props.length;
              for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
              }
            },
            prefilters: [defaultPrefilter],
            prefilter: function(callback, prepend) {
              if (prepend) {
                Animation.prefilters.unshift(callback);
              } else {
                Animation.prefilters.push(callback);
              }
            }
          });
          jQuery.speed = function(speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
              complete: fn || !fn && easing || isFunction(speed) && speed,
              duration: speed,
              easing: fn && easing || easing && !isFunction(easing) && easing
            };
            if (jQuery.fx.off) {
              opt.duration = 0;
            } else {
              if (typeof opt.duration !== "number") {
                if (opt.duration in jQuery.fx.speeds) {
                  opt.duration = jQuery.fx.speeds[opt.duration];
                } else {
                  opt.duration = jQuery.fx.speeds._default;
                }
              }
            }
            if (opt.queue == null || opt.queue === true) {
              opt.queue = "fx";
            }
            opt.old = opt.complete;
            opt.complete = function() {
              if (isFunction(opt.old)) {
                opt.old.call(this);
              }
              if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
              }
            };
            return opt;
          };
          jQuery.fn.extend({
            fadeTo: function(speed, to, easing, callback) {
              return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
            },
            animate: function(prop, speed, easing, callback) {
              var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || dataPriv.get(this, "finish")) {
                  anim.stop(true);
                }
              };
              doAnimation.finish = doAnimation;
              return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
            },
            stop: function(type, clearQueue, gotoEnd) {
              var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
              };
              if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = void 0;
              }
              if (clearQueue) {
                this.queue(type || "fx", []);
              }
              return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                  if (data[index] && data[index].stop) {
                    stopQueue(data[index]);
                  }
                } else {
                  for (index in data) {
                    if (data[index] && data[index].stop && rrun.test(index)) {
                      stopQueue(data[index]);
                    }
                  }
                }
                for (index = timers.length; index--; ) {
                  if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                  }
                }
                if (dequeue || !gotoEnd) {
                  jQuery.dequeue(this, type);
                }
              });
            },
            finish: function(type) {
              if (type !== false) {
                type = type || "fx";
              }
              return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                  hooks.stop.call(this, true);
                }
                for (index = timers.length; index--; ) {
                  if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                  }
                }
                for (index = 0; index < length; index++) {
                  if (queue[index] && queue[index].finish) {
                    queue[index].finish.call(this);
                  }
                }
                delete data.finish;
              });
            }
          });
          jQuery.each(["toggle", "show", "hide"], function(_i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) {
              return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
            };
          });
          jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" }
          }, function(name, props) {
            jQuery.fn[name] = function(speed, easing, callback) {
              return this.animate(props, speed, easing, callback);
            };
          });
          jQuery.timers = [];
          jQuery.fx.tick = function() {
            var timer, i2 = 0, timers = jQuery.timers;
            fxNow = Date.now();
            for (; i2 < timers.length; i2++) {
              timer = timers[i2];
              if (!timer() && timers[i2] === timer) {
                timers.splice(i2--, 1);
              }
            }
            if (!timers.length) {
              jQuery.fx.stop();
            }
            fxNow = void 0;
          };
          jQuery.fx.timer = function(timer) {
            jQuery.timers.push(timer);
            jQuery.fx.start();
          };
          jQuery.fx.interval = 13;
          jQuery.fx.start = function() {
            if (inProgress) {
              return;
            }
            inProgress = true;
            schedule();
          };
          jQuery.fx.stop = function() {
            inProgress = null;
          };
          jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            // Default speed
            _default: 400
          };
          jQuery.fn.delay = function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
              var timeout = window2.setTimeout(next, time);
              hooks.stop = function() {
                window2.clearTimeout(timeout);
              };
            });
          };
          (function() {
            var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
            input.type = "checkbox";
            support.checkOn = input.value !== "";
            support.optSelected = opt.selected;
            input = document2.createElement("input");
            input.value = "t";
            input.type = "radio";
            support.radioValue = input.value === "t";
          })();
          var boolHook, attrHandle = jQuery.expr.attrHandle;
          jQuery.fn.extend({
            attr: function(name, value) {
              return access(this, jQuery.attr, name, value, arguments.length > 1);
            },
            removeAttr: function(name) {
              return this.each(function() {
                jQuery.removeAttr(this, name);
              });
            }
          });
          jQuery.extend({
            attr: function(elem, name, value) {
              var ret, hooks, nType = elem.nodeType;
              if (nType === 3 || nType === 8 || nType === 2) {
                return;
              }
              if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
              }
              if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
              }
              if (value !== void 0) {
                if (value === null) {
                  jQuery.removeAttr(elem, name);
                  return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                  return ret;
                }
                elem.setAttribute(name, value + "");
                return value;
              }
              if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
              }
              ret = jQuery.find.attr(elem, name);
              return ret == null ? void 0 : ret;
            },
            attrHooks: {
              type: {
                set: function(elem, value) {
                  if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                    var val = elem.value;
                    elem.setAttribute("type", value);
                    if (val) {
                      elem.value = val;
                    }
                    return value;
                  }
                }
              }
            },
            removeAttr: function(elem, value) {
              var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
              if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i2++]) {
                  elem.removeAttribute(name);
                }
              }
            }
          });
          boolHook = {
            set: function(elem, value, name) {
              if (value === false) {
                jQuery.removeAttr(elem, name);
              } else {
                elem.setAttribute(name, name);
              }
              return name;
            }
          };
          jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = function(elem, name2, isXML) {
              var ret, handle, lowercaseName = name2.toLowerCase();
              if (!isXML) {
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
              }
              return ret;
            };
          });
          var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
          jQuery.fn.extend({
            prop: function(name, value) {
              return access(this, jQuery.prop, name, value, arguments.length > 1);
            },
            removeProp: function(name) {
              return this.each(function() {
                delete this[jQuery.propFix[name] || name];
              });
            }
          });
          jQuery.extend({
            prop: function(elem, name, value) {
              var ret, hooks, nType = elem.nodeType;
              if (nType === 3 || nType === 8 || nType === 2) {
                return;
              }
              if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
              }
              if (value !== void 0) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                  return ret;
                }
                return elem[name] = value;
              }
              if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
              }
              return elem[name];
            },
            propHooks: {
              tabIndex: {
                get: function(elem) {
                  var tabindex = jQuery.find.attr(elem, "tabindex");
                  if (tabindex) {
                    return parseInt(tabindex, 10);
                  }
                  if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                    return 0;
                  }
                  return -1;
                }
              }
            },
            propFix: {
              "for": "htmlFor",
              "class": "className"
            }
          });
          if (!support.optSelected) {
            jQuery.propHooks.selected = {
              get: function(elem) {
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
                return null;
              },
              set: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                  parent.selectedIndex;
                  if (parent.parentNode) {
                    parent.parentNode.selectedIndex;
                  }
                }
              }
            };
          }
          jQuery.each([
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable"
          ], function() {
            jQuery.propFix[this.toLowerCase()] = this;
          });
          function stripAndCollapse(value) {
            var tokens = value.match(rnothtmlwhite) || [];
            return tokens.join(" ");
          }
          function getClass(elem) {
            return elem.getAttribute && elem.getAttribute("class") || "";
          }
          function classesToArray(value) {
            if (Array.isArray(value)) {
              return value;
            }
            if (typeof value === "string") {
              return value.match(rnothtmlwhite) || [];
            }
            return [];
          }
          jQuery.fn.extend({
            addClass: function(value) {
              var classNames, cur, curValue, className, i2, finalValue;
              if (isFunction(value)) {
                return this.each(function(j2) {
                  jQuery(this).addClass(value.call(this, j2, getClass(this)));
                });
              }
              classNames = classesToArray(value);
              if (classNames.length) {
                return this.each(function() {
                  curValue = getClass(this);
                  cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                  if (cur) {
                    for (i2 = 0; i2 < classNames.length; i2++) {
                      className = classNames[i2];
                      if (cur.indexOf(" " + className + " ") < 0) {
                        cur += className + " ";
                      }
                    }
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) {
                      this.setAttribute("class", finalValue);
                    }
                  }
                });
              }
              return this;
            },
            removeClass: function(value) {
              var classNames, cur, curValue, className, i2, finalValue;
              if (isFunction(value)) {
                return this.each(function(j2) {
                  jQuery(this).removeClass(value.call(this, j2, getClass(this)));
                });
              }
              if (!arguments.length) {
                return this.attr("class", "");
              }
              classNames = classesToArray(value);
              if (classNames.length) {
                return this.each(function() {
                  curValue = getClass(this);
                  cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                  if (cur) {
                    for (i2 = 0; i2 < classNames.length; i2++) {
                      className = classNames[i2];
                      while (cur.indexOf(" " + className + " ") > -1) {
                        cur = cur.replace(" " + className + " ", " ");
                      }
                    }
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) {
                      this.setAttribute("class", finalValue);
                    }
                  }
                });
              }
              return this;
            },
            toggleClass: function(value, stateVal) {
              var classNames, className, i2, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
              if (isFunction(value)) {
                return this.each(function(i3) {
                  jQuery(this).toggleClass(
                    value.call(this, i3, getClass(this), stateVal),
                    stateVal
                  );
                });
              }
              if (typeof stateVal === "boolean" && isValidValue) {
                return stateVal ? this.addClass(value) : this.removeClass(value);
              }
              classNames = classesToArray(value);
              return this.each(function() {
                if (isValidValue) {
                  self = jQuery(this);
                  for (i2 = 0; i2 < classNames.length; i2++) {
                    className = classNames[i2];
                    if (self.hasClass(className)) {
                      self.removeClass(className);
                    } else {
                      self.addClass(className);
                    }
                  }
                } else if (value === void 0 || type === "boolean") {
                  className = getClass(this);
                  if (className) {
                    dataPriv.set(this, "__className__", className);
                  }
                  if (this.setAttribute) {
                    this.setAttribute(
                      "class",
                      className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                    );
                  }
                }
              });
            },
            hasClass: function(selector) {
              var className, elem, i2 = 0;
              className = " " + selector + " ";
              while (elem = this[i2++]) {
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                  return true;
                }
              }
              return false;
            }
          });
          var rreturn = /\r/g;
          jQuery.fn.extend({
            val: function(value) {
              var hooks, ret, valueIsFunction, elem = this[0];
              if (!arguments.length) {
                if (elem) {
                  hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                  if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                    return ret;
                  }
                  ret = elem.value;
                  if (typeof ret === "string") {
                    return ret.replace(rreturn, "");
                  }
                  return ret == null ? "" : ret;
                }
                return;
              }
              valueIsFunction = isFunction(value);
              return this.each(function(i2) {
                var val;
                if (this.nodeType !== 1) {
                  return;
                }
                if (valueIsFunction) {
                  val = value.call(this, i2, jQuery(this).val());
                } else {
                  val = value;
                }
                if (val == null) {
                  val = "";
                } else if (typeof val === "number") {
                  val += "";
                } else if (Array.isArray(val)) {
                  val = jQuery.map(val, function(value2) {
                    return value2 == null ? "" : value2 + "";
                  });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                  this.value = val;
                }
              });
            }
          });
          jQuery.extend({
            valHooks: {
              option: {
                get: function(elem) {
                  var val = jQuery.find.attr(elem, "value");
                  return val != null ? val : (
                    // Support: IE <=10 - 11 only
                    // option.text throws exceptions (trac-14686, trac-14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem))
                  );
                }
              },
              select: {
                get: function(elem) {
                  var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                  if (index < 0) {
                    i2 = max;
                  } else {
                    i2 = one ? index : 0;
                  }
                  for (; i2 < max; i2++) {
                    option = options[i2];
                    if ((option.selected || i2 === index) && // Don't return options that are disabled or in a disabled optgroup
                    !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                      value = jQuery(option).val();
                      if (one) {
                        return value;
                      }
                      values.push(value);
                    }
                  }
                  return values;
                },
                set: function(elem, value) {
                  var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i2 = options.length;
                  while (i2--) {
                    option = options[i2];
                    if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                      optionSet = true;
                    }
                  }
                  if (!optionSet) {
                    elem.selectedIndex = -1;
                  }
                  return values;
                }
              }
            }
          });
          jQuery.each(["radio", "checkbox"], function() {
            jQuery.valHooks[this] = {
              set: function(elem, value) {
                if (Array.isArray(value)) {
                  return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                }
              }
            };
            if (!support.checkOn) {
              jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
              };
            }
          });
          var location2 = window2.location;
          var nonce = { guid: Date.now() };
          var rquery = /\?/;
          jQuery.parseXML = function(data) {
            var xml, parserErrorElem;
            if (!data || typeof data !== "string") {
              return null;
            }
            try {
              xml = new window2.DOMParser().parseFromString(data, "text/xml");
            } catch (e2) {
            }
            parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
            if (!xml || parserErrorElem) {
              jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
                return el.textContent;
              }).join("\n") : data));
            }
            return xml;
          };
          var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e2) {
            e2.stopPropagation();
          };
          jQuery.extend(jQuery.event, {
            trigger: function(event, data, elem, onlyHandlers) {
              var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
              cur = lastElement = tmp = elem = elem || document2;
              if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
              }
              if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
              }
              if (type.indexOf(".") > -1) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
              }
              ontype = type.indexOf(":") < 0 && "on" + type;
              event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
              event.isTrigger = onlyHandlers ? 2 : 3;
              event.namespace = namespaces.join(".");
              event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
              event.result = void 0;
              if (!event.target) {
                event.target = elem;
              }
              data = data == null ? [event] : jQuery.makeArray(data, [event]);
              special = jQuery.event.special[type] || {};
              if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
              }
              if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                  cur = cur.parentNode;
                }
                for (; cur; cur = cur.parentNode) {
                  eventPath.push(cur);
                  tmp = cur;
                }
                if (tmp === (elem.ownerDocument || document2)) {
                  eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
                }
              }
              i2 = 0;
              while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
                lastElement = cur;
                event.type = i2 > 1 ? bubbleType : special.bindType || type;
                handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) {
                  handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                  event.result = handle.apply(cur, data);
                  if (event.result === false) {
                    event.preventDefault();
                  }
                }
              }
              event.type = type;
              if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                  if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                    tmp = elem[ontype];
                    if (tmp) {
                      elem[ontype] = null;
                    }
                    jQuery.event.triggered = type;
                    if (event.isPropagationStopped()) {
                      lastElement.addEventListener(type, stopPropagationCallback);
                    }
                    elem[type]();
                    if (event.isPropagationStopped()) {
                      lastElement.removeEventListener(type, stopPropagationCallback);
                    }
                    jQuery.event.triggered = void 0;
                    if (tmp) {
                      elem[ontype] = tmp;
                    }
                  }
                }
              }
              return event.result;
            },
            // Piggyback on a donor event to simulate a different one
            // Used only for `focus(in | out)` events
            simulate: function(type, elem, event) {
              var e2 = jQuery.extend(
                new jQuery.Event(),
                event,
                {
                  type,
                  isSimulated: true
                }
              );
              jQuery.event.trigger(e2, null, elem);
            }
          });
          jQuery.fn.extend({
            trigger: function(type, data) {
              return this.each(function() {
                jQuery.event.trigger(type, data, this);
              });
            },
            triggerHandler: function(type, data) {
              var elem = this[0];
              if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
              }
            }
          });
          var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
          function buildParams(prefix, obj, traditional, add) {
            var name;
            if (Array.isArray(obj)) {
              jQuery.each(obj, function(i2, v2) {
                if (traditional || rbracket.test(prefix)) {
                  add(prefix, v2);
                } else {
                  buildParams(
                    prefix + "[" + (typeof v2 === "object" && v2 != null ? i2 : "") + "]",
                    v2,
                    traditional,
                    add
                  );
                }
              });
            } else if (!traditional && toType(obj) === "object") {
              for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
              }
            } else {
              add(prefix, obj);
            }
          }
          jQuery.param = function(a2, traditional) {
            var prefix, s2 = [], add = function(key, valueOrFunction) {
              var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
              s2[s2.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
            };
            if (a2 == null) {
              return "";
            }
            if (Array.isArray(a2) || a2.jquery && !jQuery.isPlainObject(a2)) {
              jQuery.each(a2, function() {
                add(this.name, this.value);
              });
            } else {
              for (prefix in a2) {
                buildParams(prefix, a2[prefix], traditional, add);
              }
            }
            return s2.join("&");
          };
          jQuery.fn.extend({
            serialize: function() {
              return jQuery.param(this.serializeArray());
            },
            serializeArray: function() {
              return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
              }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
              }).map(function(_i, elem) {
                var val = jQuery(this).val();
                if (val == null) {
                  return null;
                }
                if (Array.isArray(val)) {
                  return jQuery.map(val, function(val2) {
                    return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                  });
                }
                return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
              }).get();
            }
          });
          var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
          originAnchor.href = location2.href;
          function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
              if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
              }
              var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
              if (isFunction(func)) {
                while (dataType = dataTypes[i2++]) {
                  if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);
                  } else {
                    (structure[dataType] = structure[dataType] || []).push(func);
                  }
                }
              }
            };
          }
          function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {}, seekingTransport = structure === transports;
            function inspect(dataType) {
              var selected;
              inspected[dataType] = true;
              jQuery.each(structure[dataType] || [], function(_2, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                  options.dataTypes.unshift(dataTypeOrTransport);
                  inspect(dataTypeOrTransport);
                  return false;
                } else if (seekingTransport) {
                  return !(selected = dataTypeOrTransport);
                }
              });
              return selected;
            }
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
          }
          function ajaxExtend(target, src) {
            var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
              if (src[key] !== void 0) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
              }
            }
            if (deep) {
              jQuery.extend(true, target, deep);
            }
            return target;
          }
          function ajaxHandleResponses(s2, jqXHR, responses) {
            var ct, type, finalDataType, firstDataType, contents = s2.contents, dataTypes = s2.dataTypes;
            while (dataTypes[0] === "*") {
              dataTypes.shift();
              if (ct === void 0) {
                ct = s2.mimeType || jqXHR.getResponseHeader("Content-Type");
              }
            }
            if (ct) {
              for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                  dataTypes.unshift(type);
                  break;
                }
              }
            }
            if (dataTypes[0] in responses) {
              finalDataType = dataTypes[0];
            } else {
              for (type in responses) {
                if (!dataTypes[0] || s2.converters[type + " " + dataTypes[0]]) {
                  finalDataType = type;
                  break;
                }
                if (!firstDataType) {
                  firstDataType = type;
                }
              }
              finalDataType = finalDataType || firstDataType;
            }
            if (finalDataType) {
              if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
              }
              return responses[finalDataType];
            }
          }
          function ajaxConvert(s2, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s2.dataTypes.slice();
            if (dataTypes[1]) {
              for (conv in s2.converters) {
                converters[conv.toLowerCase()] = s2.converters[conv];
              }
            }
            current = dataTypes.shift();
            while (current) {
              if (s2.responseFields[current]) {
                jqXHR[s2.responseFields[current]] = response;
              }
              if (!prev && isSuccess && s2.dataFilter) {
                response = s2.dataFilter(response, s2.dataType);
              }
              prev = current;
              current = dataTypes.shift();
              if (current) {
                if (current === "*") {
                  current = prev;
                } else if (prev !== "*" && prev !== current) {
                  conv = converters[prev + " " + current] || converters["* " + current];
                  if (!conv) {
                    for (conv2 in converters) {
                      tmp = conv2.split(" ");
                      if (tmp[1] === current) {
                        conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                        if (conv) {
                          if (conv === true) {
                            conv = converters[conv2];
                          } else if (converters[conv2] !== true) {
                            current = tmp[0];
                            dataTypes.unshift(tmp[1]);
                          }
                          break;
                        }
                      }
                    }
                  }
                  if (conv !== true) {
                    if (conv && s2.throws) {
                      response = conv(response);
                    } else {
                      try {
                        response = conv(response);
                      } catch (e2) {
                        return {
                          state: "parsererror",
                          error: conv ? e2 : "No conversion from " + prev + " to " + current
                        };
                      }
                    }
                  }
                }
              }
            }
            return { state: "success", data: response };
          }
          jQuery.extend({
            // Counter for holding the number of active queries
            active: 0,
            // Last-Modified header cache for next request
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: location2.href,
              type: "GET",
              isLocal: rlocalProtocol.test(location2.protocol),
              global: true,
              processData: true,
              async: true,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              /*
              timeout: 0,
              data: null,
              dataType: null,
              username: null,
              password: null,
              cache: null,
              throws: false,
              traditional: false,
              headers: {},
              */
              accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
              },
              contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
              },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
              },
              // Data converters
              // Keys separate source (or catchall "*") and destination types with a single space
              converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": JSON.parse,
                // Parse text as xml
                "text xml": jQuery.parseXML
              },
              // For options that shouldn't be deep extended:
              // you can add your own custom options here if
              // and when you create one that shouldn't be
              // deep extended (see ajaxExtend)
              flatOptions: {
                url: true,
                context: true
              }
            },
            // Creates a full fledged settings object into target
            // with both ajaxSettings and settings fields.
            // If target is omitted, writes into ajaxSettings.
            ajaxSetup: function(target, settings) {
              return settings ? (
                // Building a settings object
                ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
              ) : (
                // Extending ajaxSettings
                ajaxExtend(jQuery.ajaxSettings, target)
              );
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            // Main method
            ajax: function(url, options) {
              if (typeof url === "object") {
                options = url;
                url = void 0;
              }
              options = options || {};
              var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s2 = jQuery.ajaxSetup({}, options), callbackContext = s2.context || s2, globalEventContext = s2.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s2.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                  var match;
                  if (completed2) {
                    if (!responseHeaders) {
                      responseHeaders = {};
                      while (match = rheaders.exec(responseHeadersString)) {
                        responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                      }
                    }
                    match = responseHeaders[key.toLowerCase() + " "];
                  }
                  return match == null ? null : match.join(", ");
                },
                // Raw string
                getAllResponseHeaders: function() {
                  return completed2 ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                  if (completed2 == null) {
                    name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                    requestHeaders[name] = value;
                  }
                  return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                  if (completed2 == null) {
                    s2.mimeType = type;
                  }
                  return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                  var code;
                  if (map) {
                    if (completed2) {
                      jqXHR.always(map[jqXHR.status]);
                    } else {
                      for (code in map) {
                        statusCode[code] = [statusCode[code], map[code]];
                      }
                    }
                  }
                  return this;
                },
                // Cancel the request
                abort: function(statusText) {
                  var finalText = statusText || strAbort;
                  if (transport) {
                    transport.abort(finalText);
                  }
                  done(0, finalText);
                  return this;
                }
              };
              deferred.promise(jqXHR);
              s2.url = ((url || s2.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
              s2.type = options.method || options.type || s2.method || s2.type;
              s2.dataTypes = (s2.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
              if (s2.crossDomain == null) {
                urlAnchor = document2.createElement("a");
                try {
                  urlAnchor.href = s2.url;
                  urlAnchor.href = urlAnchor.href;
                  s2.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e2) {
                  s2.crossDomain = true;
                }
              }
              if (s2.data && s2.processData && typeof s2.data !== "string") {
                s2.data = jQuery.param(s2.data, s2.traditional);
              }
              inspectPrefiltersOrTransports(prefilters, s2, options, jqXHR);
              if (completed2) {
                return jqXHR;
              }
              fireGlobals = jQuery.event && s2.global;
              if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
              }
              s2.type = s2.type.toUpperCase();
              s2.hasContent = !rnoContent.test(s2.type);
              cacheURL = s2.url.replace(rhash, "");
              if (!s2.hasContent) {
                uncached = s2.url.slice(cacheURL.length);
                if (s2.data && (s2.processData || typeof s2.data === "string")) {
                  cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s2.data;
                  delete s2.data;
                }
                if (s2.cache === false) {
                  cacheURL = cacheURL.replace(rantiCache, "$1");
                  uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                }
                s2.url = cacheURL + uncached;
              } else if (s2.data && s2.processData && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                s2.data = s2.data.replace(r20, "+");
              }
              if (s2.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                  jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                  jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
              }
              if (s2.data && s2.hasContent && s2.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s2.contentType);
              }
              jqXHR.setRequestHeader(
                "Accept",
                s2.dataTypes[0] && s2.accepts[s2.dataTypes[0]] ? s2.accepts[s2.dataTypes[0]] + (s2.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s2.accepts["*"]
              );
              for (i2 in s2.headers) {
                jqXHR.setRequestHeader(i2, s2.headers[i2]);
              }
              if (s2.beforeSend && (s2.beforeSend.call(callbackContext, jqXHR, s2) === false || completed2)) {
                return jqXHR.abort();
              }
              strAbort = "abort";
              completeDeferred.add(s2.complete);
              jqXHR.done(s2.success);
              jqXHR.fail(s2.error);
              transport = inspectPrefiltersOrTransports(transports, s2, options, jqXHR);
              if (!transport) {
                done(-1, "No Transport");
              } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                  globalEventContext.trigger("ajaxSend", [jqXHR, s2]);
                }
                if (completed2) {
                  return jqXHR;
                }
                if (s2.async && s2.timeout > 0) {
                  timeoutTimer = window2.setTimeout(function() {
                    jqXHR.abort("timeout");
                  }, s2.timeout);
                }
                try {
                  completed2 = false;
                  transport.send(requestHeaders, done);
                } catch (e2) {
                  if (completed2) {
                    throw e2;
                  }
                  done(-1, e2);
                }
              }
              function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (completed2) {
                  return;
                }
                completed2 = true;
                if (timeoutTimer) {
                  window2.clearTimeout(timeoutTimer);
                }
                transport = void 0;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                  response = ajaxHandleResponses(s2, jqXHR, responses);
                }
                if (!isSuccess && jQuery.inArray("script", s2.dataTypes) > -1 && jQuery.inArray("json", s2.dataTypes) < 0) {
                  s2.converters["text script"] = function() {
                  };
                }
                response = ajaxConvert(s2, response, jqXHR, isSuccess);
                if (isSuccess) {
                  if (s2.ifModified) {
                    modified = jqXHR.getResponseHeader("Last-Modified");
                    if (modified) {
                      jQuery.lastModified[cacheURL] = modified;
                    }
                    modified = jqXHR.getResponseHeader("etag");
                    if (modified) {
                      jQuery.etag[cacheURL] = modified;
                    }
                  }
                  if (status === 204 || s2.type === "HEAD") {
                    statusText = "nocontent";
                  } else if (status === 304) {
                    statusText = "notmodified";
                  } else {
                    statusText = response.state;
                    success = response.data;
                    error = response.error;
                    isSuccess = !error;
                  }
                } else {
                  error = statusText;
                  if (status || !statusText) {
                    statusText = "error";
                    if (status < 0) {
                      status = 0;
                    }
                  }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                  deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                  deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = void 0;
                if (fireGlobals) {
                  globalEventContext.trigger(
                    isSuccess ? "ajaxSuccess" : "ajaxError",
                    [jqXHR, s2, isSuccess ? success : error]
                  );
                }
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                if (fireGlobals) {
                  globalEventContext.trigger("ajaxComplete", [jqXHR, s2]);
                  if (!--jQuery.active) {
                    jQuery.event.trigger("ajaxStop");
                  }
                }
              }
              return jqXHR;
            },
            getJSON: function(url, data, callback) {
              return jQuery.get(url, data, callback, "json");
            },
            getScript: function(url, callback) {
              return jQuery.get(url, void 0, callback, "script");
            }
          });
          jQuery.each(["get", "post"], function(_i, method) {
            jQuery[method] = function(url, data, callback, type) {
              if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = void 0;
              }
              return jQuery.ajax(jQuery.extend({
                url,
                type: method,
                dataType: type,
                data,
                success: callback
              }, jQuery.isPlainObject(url) && url));
            };
          });
          jQuery.ajaxPrefilter(function(s2) {
            var i2;
            for (i2 in s2.headers) {
              if (i2.toLowerCase() === "content-type") {
                s2.contentType = s2.headers[i2] || "";
              }
            }
          });
          jQuery._evalUrl = function(url, options, doc) {
            return jQuery.ajax({
              url,
              // Make this explicit, since user can override this through ajaxSetup (trac-11264)
              type: "GET",
              dataType: "script",
              cache: true,
              async: false,
              global: false,
              // Only evaluate the response if it is successful (gh-4126)
              // dataFilter is not invoked for failure responses, so using it instead
              // of the default converter is kludgy but it works.
              converters: {
                "text script": function() {
                }
              },
              dataFilter: function(response) {
                jQuery.globalEval(response, options, doc);
              }
            });
          };
          jQuery.fn.extend({
            wrapAll: function(html) {
              var wrap;
              if (this[0]) {
                if (isFunction(html)) {
                  html = html.call(this[0]);
                }
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                  wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                  var elem = this;
                  while (elem.firstElementChild) {
                    elem = elem.firstElementChild;
                  }
                  return elem;
                }).append(this);
              }
              return this;
            },
            wrapInner: function(html) {
              if (isFunction(html)) {
                return this.each(function(i2) {
                  jQuery(this).wrapInner(html.call(this, i2));
                });
              }
              return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                  contents.wrapAll(html);
                } else {
                  self.append(html);
                }
              });
            },
            wrap: function(html) {
              var htmlIsFunction = isFunction(html);
              return this.each(function(i2) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
              });
            },
            unwrap: function(selector) {
              this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
              });
              return this;
            }
          });
          jQuery.expr.pseudos.hidden = function(elem) {
            return !jQuery.expr.pseudos.visible(elem);
          };
          jQuery.expr.pseudos.visible = function(elem) {
            return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
          };
          jQuery.ajaxSettings.xhr = function() {
            try {
              return new window2.XMLHttpRequest();
            } catch (e2) {
            }
          };
          var xhrSuccessStatus = {
            // File protocol always yields status code 0, assume 200
            0: 200,
            // Support: IE <=9 only
            // trac-1450: sometimes IE returns 1223 when it should be 204
            1223: 204
          }, xhrSupported = jQuery.ajaxSettings.xhr();
          support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
          support.ajax = xhrSupported = !!xhrSupported;
          jQuery.ajaxTransport(function(options) {
            var callback, errorCallback;
            if (support.cors || xhrSupported && !options.crossDomain) {
              return {
                send: function(headers, complete) {
                  var i2, xhr = options.xhr();
                  xhr.open(
                    options.type,
                    options.url,
                    options.async,
                    options.username,
                    options.password
                  );
                  if (options.xhrFields) {
                    for (i2 in options.xhrFields) {
                      xhr[i2] = options.xhrFields[i2];
                    }
                  }
                  if (options.mimeType && xhr.overrideMimeType) {
                    xhr.overrideMimeType(options.mimeType);
                  }
                  if (!options.crossDomain && !headers["X-Requested-With"]) {
                    headers["X-Requested-With"] = "XMLHttpRequest";
                  }
                  for (i2 in headers) {
                    xhr.setRequestHeader(i2, headers[i2]);
                  }
                  callback = function(type) {
                    return function() {
                      if (callback) {
                        callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                        if (type === "abort") {
                          xhr.abort();
                        } else if (type === "error") {
                          if (typeof xhr.status !== "number") {
                            complete(0, "error");
                          } else {
                            complete(
                              // File: protocol always yields status 0; see trac-8605, trac-14207
                              xhr.status,
                              xhr.statusText
                            );
                          }
                        } else {
                          complete(
                            xhrSuccessStatus[xhr.status] || xhr.status,
                            xhr.statusText,
                            // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                            xhr.getAllResponseHeaders()
                          );
                        }
                      }
                    };
                  };
                  xhr.onload = callback();
                  errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                  if (xhr.onabort !== void 0) {
                    xhr.onabort = errorCallback;
                  } else {
                    xhr.onreadystatechange = function() {
                      if (xhr.readyState === 4) {
                        window2.setTimeout(function() {
                          if (callback) {
                            errorCallback();
                          }
                        });
                      }
                    };
                  }
                  callback = callback("abort");
                  try {
                    xhr.send(options.hasContent && options.data || null);
                  } catch (e2) {
                    if (callback) {
                      throw e2;
                    }
                  }
                },
                abort: function() {
                  if (callback) {
                    callback();
                  }
                }
              };
            }
          });
          jQuery.ajaxPrefilter(function(s2) {
            if (s2.crossDomain) {
              s2.contents.script = false;
            }
          });
          jQuery.ajaxSetup({
            accepts: {
              script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
              script: /\b(?:java|ecma)script\b/
            },
            converters: {
              "text script": function(text) {
                jQuery.globalEval(text);
                return text;
              }
            }
          });
          jQuery.ajaxPrefilter("script", function(s2) {
            if (s2.cache === void 0) {
              s2.cache = false;
            }
            if (s2.crossDomain) {
              s2.type = "GET";
            }
          });
          jQuery.ajaxTransport("script", function(s2) {
            if (s2.crossDomain || s2.scriptAttrs) {
              var script, callback;
              return {
                send: function(_2, complete) {
                  script = jQuery("<script>").attr(s2.scriptAttrs || {}).prop({ charset: s2.scriptCharset, src: s2.url }).on("load error", callback = function(evt) {
                    script.remove();
                    callback = null;
                    if (evt) {
                      complete(evt.type === "error" ? 404 : 200, evt.type);
                    }
                  });
                  document2.head.appendChild(script[0]);
                },
                abort: function() {
                  if (callback) {
                    callback();
                  }
                }
              };
            }
          });
          var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
          jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
              var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
              this[callback] = true;
              return callback;
            }
          });
          jQuery.ajaxPrefilter("json jsonp", function(s2, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s2.jsonp !== false && (rjsonp.test(s2.url) ? "url" : typeof s2.data === "string" && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s2.data) && "data");
            if (jsonProp || s2.dataTypes[0] === "jsonp") {
              callbackName = s2.jsonpCallback = isFunction(s2.jsonpCallback) ? s2.jsonpCallback() : s2.jsonpCallback;
              if (jsonProp) {
                s2[jsonProp] = s2[jsonProp].replace(rjsonp, "$1" + callbackName);
              } else if (s2.jsonp !== false) {
                s2.url += (rquery.test(s2.url) ? "&" : "?") + s2.jsonp + "=" + callbackName;
              }
              s2.converters["script json"] = function() {
                if (!responseContainer) {
                  jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
              };
              s2.dataTypes[0] = "json";
              overwritten = window2[callbackName];
              window2[callbackName] = function() {
                responseContainer = arguments;
              };
              jqXHR.always(function() {
                if (overwritten === void 0) {
                  jQuery(window2).removeProp(callbackName);
                } else {
                  window2[callbackName] = overwritten;
                }
                if (s2[callbackName]) {
                  s2.jsonpCallback = originalSettings.jsonpCallback;
                  oldCallbacks.push(callbackName);
                }
                if (responseContainer && isFunction(overwritten)) {
                  overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = void 0;
              });
              return "script";
            }
          });
          support.createHTMLDocument = (function() {
            var body = document2.implementation.createHTMLDocument("").body;
            body.innerHTML = "<form></form><form></form>";
            return body.childNodes.length === 2;
          })();
          jQuery.parseHTML = function(data, context, keepScripts) {
            if (typeof data !== "string") {
              return [];
            }
            if (typeof context === "boolean") {
              keepScripts = context;
              context = false;
            }
            var base, parsed, scripts;
            if (!context) {
              if (support.createHTMLDocument) {
                context = document2.implementation.createHTMLDocument("");
                base = context.createElement("base");
                base.href = document2.location.href;
                context.head.appendChild(base);
              } else {
                context = document2;
              }
            }
            parsed = rsingleTag.exec(data);
            scripts = !keepScripts && [];
            if (parsed) {
              return [context.createElement(parsed[1])];
            }
            parsed = buildFragment([data], context, scripts);
            if (scripts && scripts.length) {
              jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
          };
          jQuery.fn.load = function(url, params, callback) {
            var selector, type, response, self = this, off = url.indexOf(" ");
            if (off > -1) {
              selector = stripAndCollapse(url.slice(off));
              url = url.slice(0, off);
            }
            if (isFunction(params)) {
              callback = params;
              params = void 0;
            } else if (params && typeof params === "object") {
              type = "POST";
            }
            if (self.length > 0) {
              jQuery.ajax({
                url,
                // If "type" variable is undefined, then "GET" method will be used.
                // Make value of this field explicit since
                // user can override it through ajaxSetup method
                type: type || "GET",
                dataType: "html",
                data: params
              }).done(function(responseText) {
                response = arguments;
                self.html(selector ? (
                  // If a selector was specified, locate the right elements in a dummy div
                  // Exclude scripts to avoid IE 'Permission Denied' errors
                  jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
                ) : (
                  // Otherwise use the full result
                  responseText
                ));
              }).always(callback && function(jqXHR, status) {
                self.each(function() {
                  callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                });
              });
            }
            return this;
          };
          jQuery.expr.pseudos.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
              return elem === fn.elem;
            }).length;
          };
          jQuery.offset = {
            setOffset: function(elem, options, i2) {
              var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
              if (position === "static") {
                elem.style.position = "relative";
              }
              curOffset = curElem.offset();
              curCSSTop = jQuery.css(elem, "top");
              curCSSLeft = jQuery.css(elem, "left");
              calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
              if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
              } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
              }
              if (isFunction(options)) {
                options = options.call(elem, i2, jQuery.extend({}, curOffset));
              }
              if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
              }
              if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
              }
              if ("using" in options) {
                options.using.call(elem, props);
              } else {
                curElem.css(props);
              }
            }
          };
          jQuery.fn.extend({
            // offset() relates an element's border box to the document origin
            offset: function(options) {
              if (arguments.length) {
                return options === void 0 ? this : this.each(function(i2) {
                  jQuery.offset.setOffset(this, options, i2);
                });
              }
              var rect, win, elem = this[0];
              if (!elem) {
                return;
              }
              if (!elem.getClientRects().length) {
                return { top: 0, left: 0 };
              }
              rect = elem.getBoundingClientRect();
              win = elem.ownerDocument.defaultView;
              return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
              };
            },
            // position() relates an element's margin box to its offset parent's padding box
            // This corresponds to the behavior of CSS absolute positioning
            position: function() {
              if (!this[0]) {
                return;
              }
              var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
              if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
              } else {
                offset = this.offset();
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                  offsetParent = offsetParent.parentNode;
                }
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                  parentOffset = jQuery(offsetParent).offset();
                  parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                  parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
              }
              return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
              };
            },
            // This method will return documentElement in the following cases:
            // 1) For the element inside the iframe without offsetParent, this method will return
            //    documentElement of the parent window
            // 2) For the hidden or detached element
            // 3) For body or html element, i.e. in case of the html node - it will return itself
            //
            // but those exceptions were never presented as a real life use-cases
            // and might be considered as more preferable results.
            //
            // This logic, however, is not guaranteed and can change at any point in the future
            offsetParent: function() {
              return this.map(function() {
                var offsetParent = this.offsetParent;
                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                  offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || documentElement;
              });
            }
          });
          jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function(val) {
              return access(this, function(elem, method2, val2) {
                var win;
                if (isWindow(elem)) {
                  win = elem;
                } else if (elem.nodeType === 9) {
                  win = elem.defaultView;
                }
                if (val2 === void 0) {
                  return win ? win[prop] : elem[method2];
                }
                if (win) {
                  win.scrollTo(
                    !top ? val2 : win.pageXOffset,
                    top ? val2 : win.pageYOffset
                  );
                } else {
                  elem[method2] = val2;
                }
              }, method, val, arguments.length);
            };
          });
          jQuery.each(["top", "left"], function(_i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(
              support.pixelPosition,
              function(elem, computed) {
                if (computed) {
                  computed = curCSS(elem, prop);
                  return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                }
              }
            );
          });
          jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
            jQuery.each({
              padding: "inner" + name,
              content: type,
              "": "outer" + name
            }, function(defaultExtra, funcName) {
              jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type2, value2) {
                  var doc;
                  if (isWindow(elem)) {
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                  }
                  if (elem.nodeType === 9) {
                    doc = elem.documentElement;
                    return Math.max(
                      elem.body["scroll" + name],
                      doc["scroll" + name],
                      elem.body["offset" + name],
                      doc["offset" + name],
                      doc["client" + name]
                    );
                  }
                  return value2 === void 0 ? (
                    // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type2, extra)
                  ) : (
                    // Set width or height on the element
                    jQuery.style(elem, type2, value2, extra)
                  );
                }, type, chainable ? margin : void 0, chainable);
              };
            });
          });
          jQuery.each([
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend"
          ], function(_i, type) {
            jQuery.fn[type] = function(fn) {
              return this.on(type, fn);
            };
          });
          jQuery.fn.extend({
            bind: function(types, data, fn) {
              return this.on(types, null, data, fn);
            },
            unbind: function(types, fn) {
              return this.off(types, null, fn);
            },
            delegate: function(selector, types, data, fn) {
              return this.on(types, selector, data, fn);
            },
            undelegate: function(selector, types, fn) {
              return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
            },
            hover: function(fnOver, fnOut) {
              return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
            }
          });
          jQuery.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
            function(_i, name) {
              jQuery.fn[name] = function(data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
              };
            }
          );
          var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          jQuery.proxy = function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
              tmp = fn[context];
              context = fn;
              fn = tmp;
            }
            if (!isFunction(fn)) {
              return void 0;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
              return fn.apply(context || this, args.concat(slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
          };
          jQuery.holdReady = function(hold) {
            if (hold) {
              jQuery.readyWait++;
            } else {
              jQuery.ready(true);
            }
          };
          jQuery.isArray = Array.isArray;
          jQuery.parseJSON = JSON.parse;
          jQuery.nodeName = nodeName;
          jQuery.isFunction = isFunction;
          jQuery.isWindow = isWindow;
          jQuery.camelCase = camelCase;
          jQuery.type = toType;
          jQuery.now = Date.now;
          jQuery.isNumeric = function(obj) {
            var type = jQuery.type(obj);
            return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            !isNaN(obj - parseFloat(obj));
          };
          jQuery.trim = function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "$1");
          };
          var _jQuery = window2.jQuery, _$ = window2.$;
          jQuery.noConflict = function(deep) {
            if (window2.$ === jQuery) {
              window2.$ = _$;
            }
            if (deep && window2.jQuery === jQuery) {
              window2.jQuery = _jQuery;
            }
            return jQuery;
          };
          if (typeof noGlobal === "undefined") {
            window2.jQuery = window2.$ = jQuery;
          }
          return jQuery;
        });
      })(jquery$1);
      return jquery$1.exports;
    }
    var jqueryExports = requireJquery();
    const $ = /* @__PURE__ */ getDefaultExportFromCjs(jqueryExports);
    /*!
     * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
     * Copyright (c) 2016 Edson Hilios
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy of
     * this software and associated documentation files (the "Software"), to deal in
     * the Software without restriction, including without limitation the rights to
     * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
     * the Software, and to permit persons to whom the Software is furnished to do so,
     * subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
      } else {
        factory($);
      }
    })(function($2) {
      var instances = [], matchers = [], defaultOptions = {
        precision: 100,
        elapse: false,
        defer: false
      };
      matchers.push(/^[0-9]*$/.source);
      matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
      matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
      matchers = new RegExp(matchers.join("|"));
      function parseDateString(dateString) {
        if (dateString instanceof Date) {
          return dateString;
        }
        if (String(dateString).match(matchers)) {
          if (String(dateString).match(/^[0-9]*$/)) {
            dateString = Number(dateString);
          }
          if (String(dateString).match(/\-/)) {
            dateString = String(dateString).replace(/\-/g, "/");
          }
          return new Date(dateString);
        } else {
          throw new Error("Couldn't cast `" + dateString + "` to a date object.");
        }
      }
      var DIRECTIVE_KEY_MAP = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
      };
      function escapedRegExp(str) {
        var sanitize = str.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(sanitize);
      }
      function strftime(offsetObject) {
        return function(format) {
          var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
          if (directives) {
            for (var i2 = 0, len = directives.length; i2 < len; ++i2) {
              var directive = directives[i2].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), regexp = escapedRegExp(directive[0]), modifier = directive[1] || "", plural = directive[3] || "", value = null;
              directive = directive[2];
              if (DIRECTIVE_KEY_MAP.hasOwnProperty(directive)) {
                value = DIRECTIVE_KEY_MAP[directive];
                value = Number(offsetObject[value]);
              }
              if (value !== null) {
                if (modifier === "!") {
                  value = pluralize(plural, value);
                }
                if (modifier === "") {
                  if (value < 10) {
                    value = "0" + value.toString();
                  }
                }
                format = format.replace(regexp, value.toString());
              }
            }
          }
          format = format.replace(/%%/, "%");
          return format;
        };
      }
      function pluralize(format, count) {
        var plural = "s", singular = "";
        if (format) {
          format = format.replace(/(:|;|\s)/gi, "").split(/\,/);
          if (format.length === 1) {
            plural = format[0];
          } else {
            singular = format[0];
            plural = format[1];
          }
        }
        if (Math.abs(count) > 1) {
          return plural;
        } else {
          return singular;
        }
      }
      var Countdown = function(el, finalDate, options) {
        this.el = el;
        this.$el = $2(el);
        this.interval = null;
        this.offset = {};
        this.options = $2.extend({}, defaultOptions);
        this.instanceNumber = instances.length;
        instances.push(this);
        this.$el.data("countdown-instance", this.instanceNumber);
        if (options) {
          if (typeof options === "function") {
            this.$el.on("update.countdown", options);
            this.$el.on("stoped.countdown", options);
            this.$el.on("finish.countdown", options);
          } else {
            this.options = $2.extend({}, defaultOptions, options);
          }
        }
        this.setFinalDate(finalDate);
        if (this.options.defer === false) {
          this.start();
        }
      };
      $2.extend(Countdown.prototype, {
        start: function() {
          if (this.interval !== null) {
            clearInterval(this.interval);
          }
          var self = this;
          this.update();
          this.interval = setInterval(function() {
            self.update.call(self);
          }, this.options.precision);
        },
        stop: function() {
          clearInterval(this.interval);
          this.interval = null;
          this.dispatchEvent("stoped");
        },
        toggle: function() {
          if (this.interval) {
            this.stop();
          } else {
            this.start();
          }
        },
        pause: function() {
          this.stop();
        },
        resume: function() {
          this.start();
        },
        remove: function() {
          this.stop.call(this);
          instances[this.instanceNumber] = null;
          delete this.$el.data().countdownInstance;
        },
        setFinalDate: function(value) {
          this.finalDate = parseDateString(value);
        },
        update: function() {
          if (this.$el.closest("html").length === 0) {
            this.remove();
            return;
          }
          var hasEventsAttached = $2._data(this.el, "events") !== void 0, now = /* @__PURE__ */ new Date(), newTotalSecsLeft;
          newTotalSecsLeft = this.finalDate.getTime() - now.getTime();
          newTotalSecsLeft = Math.ceil(newTotalSecsLeft / 1e3);
          newTotalSecsLeft = !this.options.elapse && newTotalSecsLeft < 0 ? 0 : Math.abs(newTotalSecsLeft);
          if (this.totalSecsLeft === newTotalSecsLeft || !hasEventsAttached) {
            return;
          } else {
            this.totalSecsLeft = newTotalSecsLeft;
          }
          this.elapsed = now >= this.finalDate;
          this.offset = {
            seconds: this.totalSecsLeft % 60,
            minutes: Math.floor(this.totalSecsLeft / 60) % 60,
            hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
            days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
            weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
            weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
            months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
            years: Math.abs(this.finalDate.getFullYear() - now.getFullYear()),
            totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
            totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
            totalMinutes: Math.floor(this.totalSecsLeft / 60),
            totalSeconds: this.totalSecsLeft
          };
          if (!this.options.elapse && this.totalSecsLeft === 0) {
            this.stop();
            this.dispatchEvent("finish");
          } else {
            this.dispatchEvent("update");
          }
        },
        dispatchEvent: function(eventName) {
          var event = $2.Event(eventName + ".countdown");
          event.finalDate = this.finalDate;
          event.elapsed = this.elapsed;
          event.offset = $2.extend({}, this.offset);
          event.strftime = strftime(this.offset);
          this.$el.trigger(event);
        }
      });
      $2.fn.countdown = function() {
        var argumentsArray = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
          var instanceNumber = $2(this).data("countdown-instance");
          if (instanceNumber !== void 0) {
            var instance = instances[instanceNumber], method = argumentsArray[0];
            if (Countdown.prototype.hasOwnProperty(method)) {
              instance[method].apply(instance, argumentsArray.slice(1));
            } else if (String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i) === null) {
              instance.setFinalDate.call(instance, method);
              instance.start();
            } else {
              $2.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, method));
            }
          } else {
            new Countdown(this, argumentsArray[0], argumentsArray[1]);
          }
        });
      };
    });
    /*!
     * jQuery Validation Plugin v1.21.0
     *
     * https://jqueryvalidation.org/
     *
     * Copyright (c) 2024 Jörn Zaefferer
     * Released under the MIT license
     */
    (function(factory) {
      if (typeof module === "object" && module.exports) {
        module.exports = factory(requireJquery());
      } else {
        factory($);
      }
    })(function($2) {
      $2.extend($2.fn, {
        // https://jqueryvalidation.org/validate/
        validate: function(options) {
          if (!this.length) {
            if (options && options.debug && window.console) {
              console.warn("Nothing selected, can't validate, returning nothing.");
            }
            return;
          }
          var validator = $2.data(this[0], "validator");
          if (validator) {
            return validator;
          }
          this.attr("novalidate", "novalidate");
          validator = new $2.validator(options, this[0]);
          $2.data(this[0], "validator", validator);
          if (validator.settings.onsubmit) {
            this.on("click.validate", ":submit", function(event) {
              validator.submitButton = event.currentTarget;
              if ($2(this).hasClass("cancel")) {
                validator.cancelSubmit = true;
              }
              if ($2(this).attr("formnovalidate") !== void 0) {
                validator.cancelSubmit = true;
              }
            });
            this.on("submit.validate", function(event) {
              if (validator.settings.debug) {
                event.preventDefault();
              }
              function handle() {
                var hidden, result;
                if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
                  hidden = $2("<input type='hidden'/>").attr("name", validator.submitButton.name).val($2(validator.submitButton).val()).appendTo(validator.currentForm);
                }
                if (validator.settings.submitHandler && !validator.settings.debug) {
                  result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                  if (hidden) {
                    hidden.remove();
                  }
                  if (result !== void 0) {
                    return result;
                  }
                  return false;
                }
                return true;
              }
              if (validator.cancelSubmit) {
                validator.cancelSubmit = false;
                return handle();
              }
              if (validator.form()) {
                if (validator.pendingRequest) {
                  validator.formSubmitted = true;
                  return false;
                }
                return handle();
              } else {
                validator.focusInvalid();
                return false;
              }
            });
          }
          return validator;
        },
        // https://jqueryvalidation.org/valid/
        valid: function() {
          var valid, validator, errorList;
          if ($2(this[0]).is("form")) {
            valid = this.validate().form();
          } else {
            errorList = [];
            valid = true;
            validator = $2(this[0].form).validate();
            this.each(function() {
              valid = validator.element(this) && valid;
              if (!valid) {
                errorList = errorList.concat(validator.errorList);
              }
            });
            validator.errorList = errorList;
          }
          return valid;
        },
        // https://jqueryvalidation.org/rules/
        rules: function(command, argument) {
          var element = this[0], isContentEditable = typeof this.attr("contenteditable") !== "undefined" && this.attr("contenteditable") !== "false", settings, staticRules, existingRules, data, param, filtered;
          if (element == null) {
            return;
          }
          if (!element.form && isContentEditable) {
            element.form = this.closest("form")[0];
            element.name = this.attr("name");
          }
          if (element.form == null) {
            return;
          }
          if (command) {
            settings = $2.data(element.form, "validator").settings;
            staticRules = settings.rules;
            existingRules = $2.validator.staticRules(element);
            switch (command) {
              case "add":
                $2.extend(existingRules, $2.validator.normalizeRule(argument));
                delete existingRules.messages;
                staticRules[element.name] = existingRules;
                if (argument.messages) {
                  settings.messages[element.name] = $2.extend(settings.messages[element.name], argument.messages);
                }
                break;
              case "remove":
                if (!argument) {
                  delete staticRules[element.name];
                  return existingRules;
                }
                filtered = {};
                $2.each(argument.split(/\s/), function(index, method) {
                  filtered[method] = existingRules[method];
                  delete existingRules[method];
                });
                return filtered;
            }
          }
          data = $2.validator.normalizeRules(
            $2.extend(
              {},
              $2.validator.classRules(element),
              $2.validator.attributeRules(element),
              $2.validator.dataRules(element),
              $2.validator.staticRules(element)
            ),
            element
          );
          if (data.required) {
            param = data.required;
            delete data.required;
            data = $2.extend({ required: param }, data);
          }
          if (data.remote) {
            param = data.remote;
            delete data.remote;
            data = $2.extend(data, { remote: param });
          }
          return data;
        }
      });
      var trim = function(str) {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      };
      $2.extend($2.expr.pseudos || $2.expr[":"], {
        // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support
        // https://jqueryvalidation.org/blank-selector/
        blank: function(a2) {
          return !trim("" + $2(a2).val());
        },
        // https://jqueryvalidation.org/filled-selector/
        filled: function(a2) {
          var val = $2(a2).val();
          return val !== null && !!trim("" + val);
        },
        // https://jqueryvalidation.org/unchecked-selector/
        unchecked: function(a2) {
          return !$2(a2).prop("checked");
        }
      });
      $2.validator = function(options, form) {
        this.settings = $2.extend(true, {}, $2.validator.defaults, options);
        this.currentForm = form;
        this.init();
      };
      $2.validator.format = function(source, params) {
        if (arguments.length === 1) {
          return function() {
            var args = $2.makeArray(arguments);
            args.unshift(source);
            return $2.validator.format.apply(this, args);
          };
        }
        if (params === void 0) {
          return source;
        }
        if (arguments.length > 2 && params.constructor !== Array) {
          params = $2.makeArray(arguments).slice(1);
        }
        if (params.constructor !== Array) {
          params = [params];
        }
        $2.each(params, function(i2, n2) {
          source = source.replace(new RegExp("\\{" + i2 + "\\}", "g"), function() {
            return n2;
          });
        });
        return source;
      };
      $2.extend($2.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          pendingClass: "pending",
          validClass: "valid",
          errorElement: "label",
          focusCleanup: false,
          focusInvalid: true,
          errorContainer: $2([]),
          errorLabelContainer: $2([]),
          onsubmit: true,
          ignore: ":hidden",
          ignoreTitle: false,
          customElements: [],
          onfocusin: function(element) {
            this.lastActive = element;
            if (this.settings.focusCleanup) {
              if (this.settings.unhighlight) {
                this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
              }
              this.hideThese(this.errorsFor(element));
            }
          },
          onfocusout: function(element) {
            if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
              this.element(element);
            }
          },
          onkeyup: function(element, event) {
            var excludedKeys = [
              16,
              17,
              18,
              20,
              35,
              36,
              37,
              38,
              39,
              40,
              45,
              144,
              225
            ];
            if (event.which === 9 && this.elementValue(element) === "" || $2.inArray(event.keyCode, excludedKeys) !== -1) {
              return;
            } else if (element.name in this.submitted || element.name in this.invalid) {
              this.element(element);
            }
          },
          onclick: function(element) {
            if (element.name in this.submitted) {
              this.element(element);
            } else if (element.parentNode.name in this.submitted) {
              this.element(element.parentNode);
            }
          },
          highlight: function(element, errorClass, validClass) {
            if (element.type === "radio") {
              this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
              $2(element).addClass(errorClass).removeClass(validClass);
            }
          },
          unhighlight: function(element, errorClass, validClass) {
            if (element.type === "radio") {
              this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            } else {
              $2(element).removeClass(errorClass).addClass(validClass);
            }
          }
        },
        // https://jqueryvalidation.org/jQuery.validator.setDefaults/
        setDefaults: function(settings) {
          $2.extend($2.validator.defaults, settings);
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $2.validator.format("Please enter no more than {0} characters."),
          minlength: $2.validator.format("Please enter at least {0} characters."),
          rangelength: $2.validator.format("Please enter a value between {0} and {1} characters long."),
          range: $2.validator.format("Please enter a value between {0} and {1}."),
          max: $2.validator.format("Please enter a value less than or equal to {0}."),
          min: $2.validator.format("Please enter a value greater than or equal to {0}."),
          step: $2.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
          init: function() {
            this.labelContainer = $2(this.settings.errorLabelContainer);
            this.errorContext = this.labelContainer.length && this.labelContainer || $2(this.currentForm);
            this.containers = $2(this.settings.errorContainer).add(this.settings.errorLabelContainer);
            this.submitted = {};
            this.valueCache = {};
            this.pendingRequest = 0;
            this.pending = {};
            this.invalid = {};
            this.reset();
            var currentForm = this.currentForm, groups = this.groups = {}, rules;
            $2.each(this.settings.groups, function(key, value) {
              if (typeof value === "string") {
                value = value.split(/\s/);
              }
              $2.each(value, function(index, name) {
                groups[name] = key;
              });
            });
            rules = this.settings.rules;
            $2.each(rules, function(key, value) {
              rules[key] = $2.validator.normalizeRule(value);
            });
            function delegate(event) {
              var isContentEditable = typeof $2(this).attr("contenteditable") !== "undefined" && $2(this).attr("contenteditable") !== "false";
              if (!this.form && isContentEditable) {
                this.form = $2(this).closest("form")[0];
                this.name = $2(this).attr("name");
              }
              if (currentForm !== this.form) {
                return;
              }
              var validator = $2.data(this.form, "validator"), eventType = "on" + event.type.replace(/^validate/, ""), settings = validator.settings;
              if (settings[eventType] && !$2(this).is(settings.ignore)) {
                settings[eventType].call(validator, this, event);
              }
            }
            var focusListeners = [
              ":text",
              "[type='password']",
              "[type='file']",
              "select",
              "textarea",
              "[type='number']",
              "[type='search']",
              "[type='tel']",
              "[type='url']",
              "[type='email']",
              "[type='datetime']",
              "[type='date']",
              "[type='month']",
              "[type='week']",
              "[type='time']",
              "[type='datetime-local']",
              "[type='range']",
              "[type='color']",
              "[type='radio']",
              "[type='checkbox']",
              "[contenteditable]",
              "[type='button']"
            ];
            var clickListeners = ["select", "option", "[type='radio']", "[type='checkbox']"];
            $2(this.currentForm).on("focusin.validate focusout.validate keyup.validate", focusListeners.concat(this.settings.customElements).join(", "), delegate).on("click.validate", clickListeners.concat(this.settings.customElements).join(", "), delegate);
            if (this.settings.invalidHandler) {
              $2(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
            }
          },
          // https://jqueryvalidation.org/Validator.form/
          form: function() {
            this.checkForm();
            $2.extend(this.submitted, this.errorMap);
            this.invalid = $2.extend({}, this.errorMap);
            if (!this.valid()) {
              $2(this.currentForm).triggerHandler("invalid-form", [this]);
            }
            this.showErrors();
            return this.valid();
          },
          checkForm: function() {
            this.prepareForm();
            for (var i2 = 0, elements = this.currentElements = this.elements(); elements[i2]; i2++) {
              this.check(elements[i2]);
            }
            return this.valid();
          },
          // https://jqueryvalidation.org/Validator.element/
          element: function(element) {
            var cleanElement = this.clean(element), checkElement = this.validationTargetFor(cleanElement), v2 = this, result = true, rs, group;
            if (checkElement === void 0) {
              delete this.invalid[cleanElement.name];
            } else {
              this.prepareElement(checkElement);
              this.currentElements = $2(checkElement);
              group = this.groups[checkElement.name];
              if (group) {
                $2.each(this.groups, function(name, testgroup) {
                  if (testgroup === group && name !== checkElement.name) {
                    cleanElement = v2.validationTargetFor(v2.clean(v2.findByName(name)));
                    if (cleanElement && cleanElement.name in v2.invalid) {
                      v2.currentElements.push(cleanElement);
                      result = v2.check(cleanElement) && result;
                    }
                  }
                });
              }
              rs = this.check(checkElement) !== false;
              result = result && rs;
              if (rs) {
                this.invalid[checkElement.name] = false;
              } else {
                this.invalid[checkElement.name] = true;
              }
              if (!this.numberOfInvalids()) {
                this.toHide = this.toHide.add(this.containers);
              }
              this.showErrors();
              $2(element).attr("aria-invalid", !rs);
            }
            return result;
          },
          // https://jqueryvalidation.org/Validator.showErrors/
          showErrors: function(errors) {
            if (errors) {
              var validator = this;
              $2.extend(this.errorMap, errors);
              this.errorList = $2.map(this.errorMap, function(message, name) {
                return {
                  message,
                  element: validator.findByName(name)[0]
                };
              });
              this.successList = $2.grep(this.successList, function(element) {
                return !(element.name in errors);
              });
            }
            if (this.settings.showErrors) {
              this.settings.showErrors.call(this, this.errorMap, this.errorList);
            } else {
              this.defaultShowErrors();
            }
          },
          // https://jqueryvalidation.org/Validator.resetForm/
          resetForm: function() {
            if ($2.fn.resetForm) {
              $2(this.currentForm).resetForm();
            }
            this.invalid = {};
            this.submitted = {};
            this.prepareForm();
            this.hideErrors();
            var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
            this.resetElements(elements);
          },
          resetElements: function(elements) {
            var i2;
            if (this.settings.unhighlight) {
              for (i2 = 0; elements[i2]; i2++) {
                this.settings.unhighlight.call(
                  this,
                  elements[i2],
                  this.settings.errorClass,
                  ""
                );
                this.findByName(elements[i2].name).removeClass(this.settings.validClass);
              }
            } else {
              elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
            }
          },
          numberOfInvalids: function() {
            return this.objectLength(this.invalid);
          },
          objectLength: function(obj) {
            var count = 0, i2;
            for (i2 in obj) {
              if (obj[i2] !== void 0 && obj[i2] !== null && obj[i2] !== false) {
                count++;
              }
            }
            return count;
          },
          hideErrors: function() {
            this.hideThese(this.toHide);
          },
          hideThese: function(errors) {
            errors.not(this.containers).text("");
            this.addWrapper(errors).hide();
          },
          valid: function() {
            return this.size() === 0;
          },
          size: function() {
            return this.errorList.length;
          },
          focusInvalid: function() {
            if (this.settings.focusInvalid) {
              try {
                $2(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
              } catch (e2) {
              }
            }
          },
          findLastActive: function() {
            var lastActive = this.lastActive;
            return lastActive && $2.grep(this.errorList, function(n2) {
              return n2.element.name === lastActive.name;
            }).length === 1 && lastActive;
          },
          elements: function() {
            var validator = this, rulesCache = {}, selectors = ["input", "select", "textarea", "[contenteditable]"];
            return $2(this.currentForm).find(selectors.concat(this.settings.customElements).join(", ")).not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
              var name = this.name || $2(this).attr("name");
              var isContentEditable = typeof $2(this).attr("contenteditable") !== "undefined" && $2(this).attr("contenteditable") !== "false";
              if (!name && validator.settings.debug && window.console) {
                console.error("%o has no name assigned", this);
              }
              if (isContentEditable) {
                this.form = $2(this).closest("form")[0];
                this.name = name;
              }
              if (this.form !== validator.currentForm) {
                return false;
              }
              if (name in rulesCache || !validator.objectLength($2(this).rules())) {
                return false;
              }
              rulesCache[name] = true;
              return true;
            });
          },
          clean: function(selector) {
            return $2(selector)[0];
          },
          errors: function() {
            var errorClass = this.settings.errorClass.split(" ").join(".");
            return $2(this.settings.errorElement + "." + errorClass, this.errorContext);
          },
          resetInternals: function() {
            this.successList = [];
            this.errorList = [];
            this.errorMap = {};
            this.toShow = $2([]);
            this.toHide = $2([]);
          },
          reset: function() {
            this.resetInternals();
            this.currentElements = $2([]);
          },
          prepareForm: function() {
            this.reset();
            this.toHide = this.errors().add(this.containers);
          },
          prepareElement: function(element) {
            this.reset();
            this.toHide = this.errorsFor(element);
          },
          elementValue: function(element) {
            var $element = $2(element), type = element.type, isContentEditable = typeof $element.attr("contenteditable") !== "undefined" && $element.attr("contenteditable") !== "false", val, idx;
            if (type === "radio" || type === "checkbox") {
              return this.findByName(element.name).filter(":checked").val();
            } else if (type === "number" && typeof element.validity !== "undefined") {
              return element.validity.badInput ? "NaN" : $element.val();
            }
            if (isContentEditable) {
              val = $element.text();
            } else {
              val = $element.val();
            }
            if (type === "file") {
              if (val.substr(0, 12) === "C:\\fakepath\\") {
                return val.substr(12);
              }
              idx = val.lastIndexOf("/");
              if (idx >= 0) {
                return val.substr(idx + 1);
              }
              idx = val.lastIndexOf("\\");
              if (idx >= 0) {
                return val.substr(idx + 1);
              }
              return val;
            }
            if (typeof val === "string") {
              return val.replace(/\r/g, "");
            }
            return val;
          },
          check: function(element) {
            element = this.validationTargetFor(this.clean(element));
            var rules = $2(element).rules(), rulesCount = $2.map(rules, function(n2, i2) {
              return i2;
            }).length, dependencyMismatch = false, val = this.elementValue(element), result, method, rule, normalizer;
            this.abortRequest(element);
            if (typeof rules.normalizer === "function") {
              normalizer = rules.normalizer;
            } else if (typeof this.settings.normalizer === "function") {
              normalizer = this.settings.normalizer;
            }
            if (normalizer) {
              val = normalizer.call(element, val);
              delete rules.normalizer;
            }
            for (method in rules) {
              rule = { method, parameters: rules[method] };
              try {
                result = $2.validator.methods[method].call(this, val, element, rule.parameters);
                if (result === "dependency-mismatch" && rulesCount === 1) {
                  dependencyMismatch = true;
                  continue;
                }
                dependencyMismatch = false;
                if (result === "pending") {
                  this.toHide = this.toHide.not(this.errorsFor(element));
                  return;
                }
                if (!result) {
                  this.formatAndAdd(element, rule);
                  return false;
                }
              } catch (e2) {
                if (this.settings.debug && window.console) {
                  console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e2);
                }
                if (e2 instanceof TypeError) {
                  e2.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                }
                throw e2;
              }
            }
            if (dependencyMismatch) {
              return;
            }
            if (this.objectLength(rules)) {
              this.successList.push(element);
            }
            return true;
          },
          // Return the custom message for the given element and validation method
          // specified in the element's HTML5 data attribute
          // return the generic message if present and no method specific message is present
          customDataMessage: function(element, method) {
            return $2(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $2(element).data("msg");
          },
          // Return the custom message for the given element name and validation method
          customMessage: function(name, method) {
            var m2 = this.settings.messages[name];
            return m2 && (m2.constructor === String ? m2 : m2[method]);
          },
          // Return the first defined argument, allowing empty strings
          findDefined: function() {
            for (var i2 = 0; i2 < arguments.length; i2++) {
              if (arguments[i2] !== void 0) {
                return arguments[i2];
              }
            }
            return void 0;
          },
          // The second parameter 'rule' used to be a string, and extended to an object literal
          // of the following form:
          // rule = {
          //     method: "method name",
          //     parameters: "the given method parameters"
          // }
          //
          // The old behavior still supported, kept to maintain backward compatibility with
          // old code, and will be removed in the next major release.
          defaultMessage: function(element, rule) {
            if (typeof rule === "string") {
              rule = { method: rule };
            }
            var message = this.findDefined(
              this.customMessage(element.name, rule.method),
              this.customDataMessage(element, rule.method),
              // 'title' is never undefined, so handle empty string as undefined
              !this.settings.ignoreTitle && element.title || void 0,
              $2.validator.messages[rule.method],
              "<strong>Warning: No message defined for " + element.name + "</strong>"
            ), theregex = /\$?\{(\d+)\}/g;
            if (typeof message === "function") {
              message = message.call(this, rule.parameters, element);
            } else if (theregex.test(message)) {
              message = $2.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
            }
            return message;
          },
          formatAndAdd: function(element, rule) {
            var message = this.defaultMessage(element, rule);
            this.errorList.push({
              message,
              element,
              method: rule.method
            });
            this.errorMap[element.name] = message;
            this.submitted[element.name] = message;
          },
          addWrapper: function(toToggle) {
            if (this.settings.wrapper) {
              toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
            }
            return toToggle;
          },
          defaultShowErrors: function() {
            var i2, elements, error;
            for (i2 = 0; this.errorList[i2]; i2++) {
              error = this.errorList[i2];
              if (this.settings.highlight) {
                this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
              }
              this.showLabel(error.element, error.message);
            }
            if (this.errorList.length) {
              this.toShow = this.toShow.add(this.containers);
            }
            if (this.settings.success) {
              for (i2 = 0; this.successList[i2]; i2++) {
                this.showLabel(this.successList[i2]);
              }
            }
            if (this.settings.unhighlight) {
              for (i2 = 0, elements = this.validElements(); elements[i2]; i2++) {
                this.settings.unhighlight.call(this, elements[i2], this.settings.errorClass, this.settings.validClass);
              }
            }
            this.toHide = this.toHide.not(this.toShow);
            this.hideErrors();
            this.addWrapper(this.toShow).show();
          },
          validElements: function() {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function() {
            return $2(this.errorList).map(function() {
              return this.element;
            });
          },
          showLabel: function(element, message) {
            var place, group, errorID, v2, error = this.errorsFor(element), elementID = this.idOrName(element), describedBy = $2(element).attr("aria-describedby");
            if (error.length) {
              error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
              if (this.settings && this.settings.escapeHtml) {
                error.text(message || "");
              } else {
                error.html(message || "");
              }
            } else {
              error = $2("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass);
              if (this.settings && this.settings.escapeHtml) {
                error.text(message || "");
              } else {
                error.html(message || "");
              }
              place = error;
              if (this.settings.wrapper) {
                place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
              }
              if (this.labelContainer.length) {
                this.labelContainer.append(place);
              } else if (this.settings.errorPlacement) {
                this.settings.errorPlacement.call(this, place, $2(element));
              } else {
                place.insertAfter(element);
              }
              if (error.is("label")) {
                error.attr("for", elementID);
              } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
                errorID = error.attr("id");
                if (!describedBy) {
                  describedBy = errorID;
                } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
                  describedBy += " " + errorID;
                }
                $2(element).attr("aria-describedby", describedBy);
                group = this.groups[element.name];
                if (group) {
                  v2 = this;
                  $2.each(v2.groups, function(name, testgroup) {
                    if (testgroup === group) {
                      $2("[name='" + v2.escapeCssMeta(name) + "']", v2.currentForm).attr("aria-describedby", error.attr("id"));
                    }
                  });
                }
              }
            }
            if (!message && this.settings.success) {
              error.text("");
              if (typeof this.settings.success === "string") {
                error.addClass(this.settings.success);
              } else {
                this.settings.success(error, element);
              }
            }
            this.toShow = this.toShow.add(error);
          },
          errorsFor: function(element) {
            var name = this.escapeCssMeta(this.idOrName(element)), describer = $2(element).attr("aria-describedby"), selector = "label[for='" + name + "'], label[for='" + name + "'] *";
            if (describer) {
              selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
            }
            return this.errors().filter(selector);
          },
          // See https://api.jquery.com/category/selectors/, for CSS
          // meta-characters that should be escaped in order to be used with JQuery
          // as a literal part of a name/id or any selector.
          escapeCssMeta: function(string) {
            if (string === void 0) {
              return "";
            }
            return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
          },
          idOrName: function(element) {
            return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
          },
          validationTargetFor: function(element) {
            if (this.checkable(element)) {
              element = this.findByName(element.name);
            }
            return $2(element).not(this.settings.ignore)[0];
          },
          checkable: function(element) {
            return /radio|checkbox/i.test(element.type);
          },
          findByName: function(name) {
            return $2(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
          },
          getLength: function(value, element) {
            switch (element.nodeName.toLowerCase()) {
              case "select":
                return $2("option:selected", element).length;
              case "input":
                if (this.checkable(element)) {
                  return this.findByName(element.name).filter(":checked").length;
                }
            }
            return value.length;
          },
          depend: function(param, element) {
            return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
          },
          dependTypes: {
            "boolean": function(param) {
              return param;
            },
            "string": function(param, element) {
              return !!$2(param, element.form).length;
            },
            "function": function(param, element) {
              return param(element);
            }
          },
          optional: function(element) {
            var val = this.elementValue(element);
            return !$2.validator.methods.required.call(this, val, element) && "dependency-mismatch";
          },
          elementAjaxPort: function(element) {
            return "validate" + element.name;
          },
          startRequest: function(element) {
            if (!this.pending[element.name]) {
              this.pendingRequest++;
              $2(element).addClass(this.settings.pendingClass);
              this.pending[element.name] = true;
            }
          },
          stopRequest: function(element, valid) {
            this.pendingRequest--;
            if (this.pendingRequest < 0) {
              this.pendingRequest = 0;
            }
            delete this.pending[element.name];
            $2(element).removeClass(this.settings.pendingClass);
            if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form() && this.pendingRequest === 0) {
              $2(this.currentForm).trigger("submit");
              if (this.submitButton) {
                $2("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
              }
              this.formSubmitted = false;
            } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
              $2(this.currentForm).triggerHandler("invalid-form", [this]);
              this.formSubmitted = false;
            }
          },
          abortRequest: function(element) {
            var port;
            if (this.pending[element.name]) {
              port = this.elementAjaxPort(element);
              $2.ajaxAbort(port);
              this.pendingRequest--;
              if (this.pendingRequest < 0) {
                this.pendingRequest = 0;
              }
              delete this.pending[element.name];
              $2(element).removeClass(this.settings.pendingClass);
            }
          },
          previousValue: function(element, method) {
            method = typeof method === "string" && method || "remote";
            return $2.data(element, "previousValue") || $2.data(element, "previousValue", {
              old: null,
              valid: true,
              message: this.defaultMessage(element, { method })
            });
          },
          // Cleans up all forms and elements, removes validator-specific events
          destroy: function() {
            this.resetForm();
            $2(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
          }
        },
        classRuleSettings: {
          required: { required: true },
          email: { email: true },
          url: { url: true },
          date: { date: true },
          dateISO: { dateISO: true },
          number: { number: true },
          digits: { digits: true },
          creditcard: { creditcard: true }
        },
        addClassRules: function(className, rules) {
          if (className.constructor === String) {
            this.classRuleSettings[className] = rules;
          } else {
            $2.extend(this.classRuleSettings, className);
          }
        },
        classRules: function(element) {
          var rules = {}, classes = $2(element).attr("class");
          if (classes) {
            $2.each(classes.split(" "), function() {
              if (this in $2.validator.classRuleSettings) {
                $2.extend(rules, $2.validator.classRuleSettings[this]);
              }
            });
          }
          return rules;
        },
        normalizeAttributeRule: function(rules, type, method, value) {
          if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
            value = Number(value);
            if (isNaN(value)) {
              value = void 0;
            }
          }
          if (value || value === 0) {
            rules[method] = value;
          } else if (type === method && type !== "range") {
            rules[type === "date" ? "dateISO" : method] = true;
          }
        },
        attributeRules: function(element) {
          var rules = {}, $element = $2(element), type = element.getAttribute("type"), method, value;
          for (method in $2.validator.methods) {
            if (method === "required") {
              value = element.getAttribute(method);
              if (value === "") {
                value = true;
              }
              value = !!value;
            } else {
              value = $element.attr(method);
            }
            this.normalizeAttributeRule(rules, type, method, value);
          }
          if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
            delete rules.maxlength;
          }
          return rules;
        },
        dataRules: function(element) {
          var rules = {}, $element = $2(element), type = element.getAttribute("type"), method, value;
          for (method in $2.validator.methods) {
            value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
            if (value === "") {
              value = true;
            }
            this.normalizeAttributeRule(rules, type, method, value);
          }
          return rules;
        },
        staticRules: function(element) {
          var rules = {}, validator = $2.data(element.form, "validator");
          if (validator.settings.rules) {
            rules = $2.validator.normalizeRule(validator.settings.rules[element.name]) || {};
          }
          return rules;
        },
        normalizeRules: function(rules, element) {
          $2.each(rules, function(prop, val) {
            if (val === false) {
              delete rules[prop];
              return;
            }
            if (val.param || val.depends) {
              var keepRule = true;
              switch (typeof val.depends) {
                case "string":
                  keepRule = !!$2(val.depends, element.form).length;
                  break;
                case "function":
                  keepRule = val.depends.call(element, element);
                  break;
              }
              if (keepRule) {
                rules[prop] = val.param !== void 0 ? val.param : true;
              } else {
                $2.data(element.form, "validator").resetElements($2(element));
                delete rules[prop];
              }
            }
          });
          $2.each(rules, function(rule, parameter) {
            rules[rule] = typeof parameter === "function" && rule !== "normalizer" ? parameter(element) : parameter;
          });
          $2.each(["minlength", "maxlength"], function() {
            if (rules[this]) {
              rules[this] = Number(rules[this]);
            }
          });
          $2.each(["rangelength", "range"], function() {
            var parts;
            if (rules[this]) {
              if (Array.isArray(rules[this])) {
                rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
              } else if (typeof rules[this] === "string") {
                parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                rules[this] = [Number(parts[0]), Number(parts[1])];
              }
            }
          });
          if ($2.validator.autoCreateRanges) {
            if (rules.min != null && rules.max != null) {
              rules.range = [rules.min, rules.max];
              delete rules.min;
              delete rules.max;
            }
            if (rules.minlength != null && rules.maxlength != null) {
              rules.rangelength = [rules.minlength, rules.maxlength];
              delete rules.minlength;
              delete rules.maxlength;
            }
          }
          return rules;
        },
        // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
        normalizeRule: function(data) {
          if (typeof data === "string") {
            var transformed = {};
            $2.each(data.split(/\s/), function() {
              transformed[this] = true;
            });
            data = transformed;
          }
          return data;
        },
        // https://jqueryvalidation.org/jQuery.validator.addMethod/
        addMethod: function(name, method, message) {
          $2.validator.methods[name] = method;
          $2.validator.messages[name] = message !== void 0 ? message : $2.validator.messages[name];
          if (method.length < 3) {
            $2.validator.addClassRules(name, $2.validator.normalizeRule(name));
          }
        },
        // https://jqueryvalidation.org/jQuery.validator.methods/
        methods: {
          // https://jqueryvalidation.org/required-method/
          required: function(value, element, param) {
            if (!this.depend(param, element)) {
              return "dependency-mismatch";
            }
            if (element.nodeName.toLowerCase() === "select") {
              var val = $2(element).val();
              return val && val.length > 0;
            }
            if (this.checkable(element)) {
              return this.getLength(value, element) > 0;
            }
            return value !== void 0 && value !== null && value.length > 0;
          },
          // https://jqueryvalidation.org/email-method/
          email: function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
          },
          // https://jqueryvalidation.org/url-method/
          url: function(value, element) {
            return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
          },
          // https://jqueryvalidation.org/date-method/
          date: /* @__PURE__ */ (function() {
            var called = false;
            return function(value, element) {
              if (!called) {
                called = true;
                if (this.settings.debug && window.console) {
                  console.warn(
                    "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                  );
                }
              }
              return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
            };
          })(),
          // https://jqueryvalidation.org/dateISO-method/
          dateISO: function(value, element) {
            return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
          },
          // https://jqueryvalidation.org/number-method/
          number: function(value, element) {
            return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:-?\.\d+)?$/.test(value);
          },
          // https://jqueryvalidation.org/digits-method/
          digits: function(value, element) {
            return this.optional(element) || /^\d+$/.test(value);
          },
          // https://jqueryvalidation.org/minlength-method/
          minlength: function(value, element, param) {
            var length = Array.isArray(value) ? value.length : this.getLength(value, element);
            return this.optional(element) || length >= param;
          },
          // https://jqueryvalidation.org/maxlength-method/
          maxlength: function(value, element, param) {
            var length = Array.isArray(value) ? value.length : this.getLength(value, element);
            return this.optional(element) || length <= param;
          },
          // https://jqueryvalidation.org/rangelength-method/
          rangelength: function(value, element, param) {
            var length = Array.isArray(value) ? value.length : this.getLength(value, element);
            return this.optional(element) || length >= param[0] && length <= param[1];
          },
          // https://jqueryvalidation.org/min-method/
          min: function(value, element, param) {
            return this.optional(element) || value >= param;
          },
          // https://jqueryvalidation.org/max-method/
          max: function(value, element, param) {
            return this.optional(element) || value <= param;
          },
          // https://jqueryvalidation.org/range-method/
          range: function(value, element, param) {
            return this.optional(element) || value >= param[0] && value <= param[1];
          },
          // https://jqueryvalidation.org/step-method/
          step: function(value, element, param) {
            var type = $2(element).attr("type"), errorMessage = "Step attribute on input type " + type + " is not supported.", supportedTypes = ["text", "number", "range"], re = new RegExp("\\b" + type + "\\b"), notSupported = type && !re.test(supportedTypes.join()), decimalPlaces = function(num) {
              var match = ("" + num).match(/(?:\.(\d+))?$/);
              if (!match) {
                return 0;
              }
              return match[1] ? match[1].length : 0;
            }, toInt = function(num) {
              return Math.round(num * Math.pow(10, decimals));
            }, valid = true, decimals;
            if (notSupported) {
              throw new Error(errorMessage);
            }
            decimals = decimalPlaces(param);
            if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
              valid = false;
            }
            return this.optional(element) || valid;
          },
          // https://jqueryvalidation.org/equalTo-method/
          equalTo: function(value, element, param) {
            var target = $2(param);
            if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
              target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                $2(element).valid();
              });
            }
            return value === target.val();
          },
          // https://jqueryvalidation.org/remote-method/
          remote: function(value, element, param, method) {
            if (this.optional(element)) {
              return "dependency-mismatch";
            }
            method = typeof method === "string" && method || "remote";
            var previous = this.previousValue(element, method), validator, data, optionDataString;
            if (!this.settings.messages[element.name]) {
              this.settings.messages[element.name] = {};
            }
            previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
            this.settings.messages[element.name][method] = previous.message;
            param = typeof param === "string" && { url: param } || param;
            optionDataString = $2.param($2.extend({ data: value }, param.data));
            if (previous.valid !== null && previous.old === optionDataString) {
              return previous.valid;
            }
            previous.old = optionDataString;
            previous.valid = null;
            validator = this;
            this.startRequest(element);
            data = {};
            data[element.name] = value;
            $2.ajax($2.extend(true, {
              mode: "abort",
              port: this.elementAjaxPort(element),
              dataType: "json",
              data,
              context: validator.currentForm,
              success: function(response) {
                var valid = response === true || response === "true", errors, message, submitted;
                validator.settings.messages[element.name][method] = previous.originalMessage;
                if (valid) {
                  submitted = validator.formSubmitted;
                  validator.toHide = validator.errorsFor(element);
                  validator.formSubmitted = submitted;
                  validator.successList.push(element);
                  validator.invalid[element.name] = false;
                  validator.showErrors();
                } else {
                  errors = {};
                  message = response || validator.defaultMessage(element, { method, parameters: value });
                  errors[element.name] = previous.message = message;
                  validator.invalid[element.name] = true;
                  validator.showErrors(errors);
                }
                previous.valid = valid;
                validator.stopRequest(element, valid);
              }
            }, param));
            return "pending";
          }
        }
      });
      var pendingRequests = {}, ajax;
      if ($2.ajaxPrefilter) {
        $2.ajaxPrefilter(function(settings, _2, xhr) {
          var port = settings.port;
          if (settings.mode === "abort") {
            $2.ajaxAbort(port);
            pendingRequests[port] = xhr;
          }
        });
      } else {
        ajax = $2.ajax;
        $2.ajax = function(settings) {
          var mode = ("mode" in settings ? settings : $2.ajaxSettings).mode, port = ("port" in settings ? settings : $2.ajaxSettings).port;
          if (mode === "abort") {
            $2.ajaxAbort(port);
            pendingRequests[port] = ajax.apply(this, arguments);
            return pendingRequests[port];
          }
          return ajax.apply(this, arguments);
        };
      }
      $2.ajaxAbort = function(port) {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
          delete pendingRequests[port];
        }
      };
      return $2;
    });
    (function(factory) {
      if (typeof module !== "undefined" && module.exports) {
        module.exports = factory(requireJquery());
      } else {
        factory($);
      }
    })(function($2) {
      var _previousResizeWidth = -1, _updateTimeout = -1;
      var _parse = function(value) {
        return parseFloat(value) || 0;
      };
      var _rows = function(elements) {
        var tolerance = 1, $elements = $2(elements), lastTop = null, rows = [];
        $elements.each(function() {
          var $that = $2(this), top = $that.offset().top - _parse($that.css("margin-top")), lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
          if (lastRow === null) {
            rows.push($that);
          } else {
            if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
              rows[rows.length - 1] = lastRow.add($that);
            } else {
              rows.push($that);
            }
          }
          lastTop = top;
        });
        return rows;
      };
      var _parseOptions = function(options) {
        var opts = {
          byRow: true,
          property: "height",
          target: null,
          remove: false
        };
        if (typeof options === "object") {
          return $2.extend(opts, options);
        }
        if (typeof options === "boolean") {
          opts.byRow = options;
        } else if (options === "remove") {
          opts.remove = true;
        }
        return opts;
      };
      var matchHeight = $2.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);
        if (opts.remove) {
          var that = this;
          this.css(opts.property, "");
          $2.each(matchHeight._groups, function(key, group) {
            group.elements = group.elements.not(that);
          });
          return this;
        }
        if (this.length <= 1 && !opts.target) {
          return this;
        }
        matchHeight._groups.push({
          elements: this,
          options: opts
        });
        matchHeight._apply(this, opts);
        return this;
      };
      matchHeight.version = "0.7.2";
      matchHeight._groups = [];
      matchHeight._throttle = 80;
      matchHeight._maintainScroll = false;
      matchHeight._beforeUpdate = null;
      matchHeight._afterUpdate = null;
      matchHeight._rows = _rows;
      matchHeight._parse = _parse;
      matchHeight._parseOptions = _parseOptions;
      matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options), $elements = $2(elements), rows = [$elements];
        var scrollTop = $2(window).scrollTop(), htmlHeight = $2("html").outerHeight(true);
        var $hiddenParents = $elements.parents().filter(":hidden");
        $hiddenParents.each(function() {
          var $that = $2(this);
          $that.data("style-cache", $that.attr("style"));
        });
        $hiddenParents.css("display", "block");
        if (opts.byRow && !opts.target) {
          $elements.each(function() {
            var $that = $2(this), display = $that.css("display");
            if (display !== "inline-block" && display !== "flex" && display !== "inline-flex") {
              display = "block";
            }
            $that.data("style-cache", $that.attr("style"));
            $that.css({
              "display": display,
              "padding-top": "0",
              "padding-bottom": "0",
              "margin-top": "0",
              "margin-bottom": "0",
              "border-top-width": "0",
              "border-bottom-width": "0",
              "height": "100px",
              "overflow": "hidden"
            });
          });
          rows = _rows($elements);
          $elements.each(function() {
            var $that = $2(this);
            $that.attr("style", $that.data("style-cache") || "");
          });
        }
        $2.each(rows, function(key, row) {
          var $row = $2(row), targetHeight = 0;
          if (!opts.target) {
            if (opts.byRow && $row.length <= 1) {
              $row.css(opts.property, "");
              return;
            }
            $row.each(function() {
              var $that = $2(this), style = $that.attr("style"), display = $that.css("display");
              if (display !== "inline-block" && display !== "flex" && display !== "inline-flex") {
                display = "block";
              }
              var css = { "display": display };
              css[opts.property] = "";
              $that.css(css);
              if ($that.outerHeight(false) > targetHeight) {
                targetHeight = $that.outerHeight(false);
              }
              if (style) {
                $that.attr("style", style);
              } else {
                $that.css("display", "");
              }
            });
          } else {
            targetHeight = opts.target.outerHeight(false);
          }
          $row.each(function() {
            var $that = $2(this), verticalPadding = 0;
            if (opts.target && $that.is(opts.target)) {
              return;
            }
            if ($that.css("box-sizing") !== "border-box") {
              verticalPadding += _parse($that.css("border-top-width")) + _parse($that.css("border-bottom-width"));
              verticalPadding += _parse($that.css("padding-top")) + _parse($that.css("padding-bottom"));
            }
            $that.css(opts.property, targetHeight - verticalPadding + "px");
          });
        });
        $hiddenParents.each(function() {
          var $that = $2(this);
          $that.attr("style", $that.data("style-cache") || null);
        });
        if (matchHeight._maintainScroll) {
          $2(window).scrollTop(scrollTop / htmlHeight * $2("html").outerHeight(true));
        }
        return this;
      };
      matchHeight._applyDataApi = function() {
        var groups = {};
        $2("[data-match-height], [data-mh]").each(function() {
          var $this = $2(this), groupId = $this.attr("data-mh") || $this.attr("data-match-height");
          if (groupId in groups) {
            groups[groupId] = groups[groupId].add($this);
          } else {
            groups[groupId] = $this;
          }
        });
        $2.each(groups, function() {
          this.matchHeight(true);
        });
      };
      var _update = function(event) {
        if (matchHeight._beforeUpdate) {
          matchHeight._beforeUpdate(event, matchHeight._groups);
        }
        $2.each(matchHeight._groups, function() {
          matchHeight._apply(this.elements, this.options);
        });
        if (matchHeight._afterUpdate) {
          matchHeight._afterUpdate(event, matchHeight._groups);
        }
      };
      matchHeight._update = function(throttle, event) {
        if (event && event.type === "resize") {
          var windowWidth = $2(window).width();
          if (windowWidth === _previousResizeWidth) {
            return;
          }
          _previousResizeWidth = windowWidth;
        }
        if (!throttle) {
          _update(event);
        } else if (_updateTimeout === -1) {
          _updateTimeout = setTimeout(function() {
            _update(event);
            _updateTimeout = -1;
          }, matchHeight._throttle);
        }
      };
      $2(matchHeight._applyDataApi);
      var on = $2.fn.on ? "on" : "bind";
      $2(window)[on]("load", function(event) {
        matchHeight._update(false, event);
      });
      $2(window)[on]("resize orientationchange", function(event) {
        matchHeight._update(true, event);
      });
    });
    (function($$1, window2, document2, undefined$1) {
      function Owl(element, options) {
        this.settings = null;
        this.options = $$1.extend({}, Owl.Defaults, options);
        this.$element = $$1(element);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {
            start: null,
            current: null
          },
          direction: null
        };
        this._states = {
          current: {},
          tags: {
            "initializing": ["busy"],
            "animating": ["busy"],
            "dragging": ["interacting"]
          }
        };
        $$1.each(["onResize", "onThrottledResize"], $$1.proxy(function(i2, handler) {
          this._handlers[handler] = $$1.proxy(this[handler], this);
        }, this));
        $$1.each(Owl.Plugins, $$1.proxy(function(key, plugin) {
          this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
        }, this));
        $$1.each(Owl.Workers, $$1.proxy(function(priority, worker) {
          this._pipe.push({
            "filter": worker.filter,
            "run": $$1.proxy(worker.run, this)
          });
        }, this));
        this.setup();
        this.initialize();
      }
      Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        checkVisibility: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window2,
        fallbackEasing: "swing",
        slideTransition: "",
        info: false,
        nestedItemSelector: false,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
      };
      Owl.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
      };
      Owl.Type = {
        Event: "event",
        State: "state"
      };
      Owl.Plugins = {};
      Owl.Workers = [{
        filter: ["width", "settings"],
        run: function() {
          this._width = this.$element.width();
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
          cache.current = this._items && this._items[this.relative(this._current)];
        }
      }, {
        filter: ["items", "settings"],
        run: function() {
          this.$stage.children(".cloned").remove();
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
          var margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl, css = {
            "width": "auto",
            "margin-left": rtl ? margin : "",
            "margin-right": rtl ? "" : margin
          };
          !grid && this.$stage.children().css(css);
          cache.css = css;
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
          var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, merge = null, iterator = this._items.length, grid = !this.settings.autoWidth, widths = [];
          cache.items = {
            merge: false,
            width
          };
          while (iterator--) {
            merge = this._mergers[iterator];
            merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
            cache.items.merge = merge > 1 || cache.items.merge;
            widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
          }
          this._widths = widths;
        }
      }, {
        filter: ["items", "settings"],
        run: function() {
          var clones = [], items = this._items, settings = this.settings, view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2, repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0, append = "", prepend = "";
          repeat /= 2;
          while (repeat > 0) {
            clones.push(this.normalize(clones.length / 2, true));
            append = append + items[clones[clones.length - 1]][0].outerHTML;
            clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
            prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
            repeat -= 1;
          }
          this._clones = clones;
          $$1(append).addClass("cloned").appendTo(this.$stage);
          $$1(prepend).addClass("cloned").prependTo(this.$stage);
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function() {
          var rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, iterator = -1, previous = 0, current = 0, coordinates = [];
          while (++iterator < size) {
            previous = coordinates[iterator - 1] || 0;
            current = this._widths[this.relative(iterator)] + this.settings.margin;
            coordinates.push(previous + current * rtl);
          }
          this._coordinates = coordinates;
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function() {
          var padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
            "width": Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
            "padding-left": padding || "",
            "padding-right": padding || ""
          };
          this.$stage.css(css);
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
          var iterator = this._coordinates.length, grid = !this.settings.autoWidth, items = this.$stage.children();
          if (grid && cache.items.merge) {
            while (iterator--) {
              cache.css.width = this._widths[this.relative(iterator)];
              items.eq(iterator).css(cache.css);
            }
          } else if (grid) {
            cache.css.width = cache.items.width;
            items.css(cache.css);
          }
        }
      }, {
        filter: ["items"],
        run: function() {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
          cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
          cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
          this.reset(cache.current);
        }
      }, {
        filter: ["position"],
        run: function() {
          this.animate(this.coordinates(this._current));
        }
      }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
          var rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2, begin = this.coordinates(this.current()) + padding, end = begin + this.width() * rtl, inner, outer, matches = [], i2, n2;
          for (i2 = 0, n2 = this._coordinates.length; i2 < n2; i2++) {
            inner = this._coordinates[i2 - 1] || 0;
            outer = Math.abs(this._coordinates[i2]) + padding * rtl;
            if (this.op(inner, "<=", begin) && this.op(inner, ">", end) || this.op(outer, "<", begin) && this.op(outer, ">", end)) {
              matches.push(i2);
            }
          }
          this.$stage.children(".active").removeClass("active");
          this.$stage.children(":eq(" + matches.join("), :eq(") + ")").addClass("active");
          this.$stage.children(".center").removeClass("center");
          if (this.settings.center) {
            this.$stage.children().eq(this.current()).addClass("center");
          }
        }
      }];
      Owl.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass);
        if (this.$stage.length) {
          return;
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = $$1("<" + this.settings.stageElement + ">", {
          "class": this.settings.stageClass
        }).wrap($$1("<div/>", {
          "class": this.settings.stageOuterClass
        }));
        this.$element.append(this.$stage.parent());
      };
      Owl.prototype.initializeItems = function() {
        var $items = this.$element.find(".owl-item");
        if ($items.length) {
          this._items = $items.get().map(function(item) {
            return $$1(item);
          });
          this._mergers = this._items.map(function() {
            return 1;
          });
          this.refresh();
          return;
        }
        this.replace(this.$element.children().not(this.$stage.parent()));
        if (this.isVisible()) {
          this.refresh();
        } else {
          this.invalidate("width");
        }
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
      };
      Owl.prototype.initialize = function() {
        this.enter("initializing");
        this.trigger("initialize");
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
        if (this.settings.autoWidth && !this.is("pre-loading")) {
          var imgs, nestedSelector, width;
          imgs = this.$element.find("img");
          nestedSelector = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : undefined$1;
          width = this.$element.children(nestedSelector).width();
          if (imgs.length && width <= 0) {
            this.preloadAutoWidthImages(imgs);
          }
        }
        this.initializeStage();
        this.initializeItems();
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized");
      };
      Owl.prototype.isVisible = function() {
        return this.settings.checkVisibility ? this.$element.is(":visible") : true;
      };
      Owl.prototype.setup = function() {
        var viewport = this.viewport(), overwrites = this.options.responsive, match = -1, settings = null;
        if (!overwrites) {
          settings = $$1.extend({}, this.options);
        } else {
          $$1.each(overwrites, function(breakpoint) {
            if (breakpoint <= viewport && breakpoint > match) {
              match = Number(breakpoint);
            }
          });
          settings = $$1.extend({}, this.options, overwrites[match]);
          if (typeof settings.stagePadding === "function") {
            settings.stagePadding = settings.stagePadding();
          }
          delete settings.responsive;
          if (settings.responsiveClass) {
            this.$element.attr(
              "class",
              this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + match)
            );
          }
        }
        this.trigger("change", { property: { name: "settings", value: settings } });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate("settings");
        this.trigger("changed", { property: { name: "settings", value: this.settings } });
      };
      Owl.prototype.optionsLogic = function() {
        if (this.settings.autoWidth) {
          this.settings.stagePadding = false;
          this.settings.merge = false;
        }
      };
      Owl.prototype.prepare = function(item) {
        var event = this.trigger("prepare", { content: item });
        if (!event.data) {
          event.data = $$1("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(item);
        }
        this.trigger("prepared", { content: event.data });
        return event.data;
      };
      Owl.prototype.update = function() {
        var i2 = 0, n2 = this._pipe.length, filter = $$1.proxy(function(p2) {
          return this[p2];
        }, this._invalidated), cache = {};
        while (i2 < n2) {
          if (this._invalidated.all || $$1.grep(this._pipe[i2].filter, filter).length > 0) {
            this._pipe[i2].run(cache);
          }
          i2++;
        }
        this._invalidated = {};
        !this.is("valid") && this.enter("valid");
      };
      Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
          case Owl.Width.Inner:
          case Owl.Width.Outer:
            return this._width;
          default:
            return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
      };
      Owl.prototype.refresh = function() {
        this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed");
      };
      Owl.prototype.onThrottledResize = function() {
        window2.clearTimeout(this.resizeTimer);
        this.resizeTimer = window2.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
      };
      Owl.prototype.onResize = function() {
        if (!this._items.length) {
          return false;
        }
        if (this._width === this.$element.width()) {
          return false;
        }
        if (!this.isVisible()) {
          return false;
        }
        this.enter("resizing");
        if (this.trigger("resize").isDefaultPrevented()) {
          this.leave("resizing");
          return false;
        }
        this.invalidate("width");
        this.refresh();
        this.leave("resizing");
        this.trigger("resized");
      };
      Owl.prototype.registerEventHandlers = function() {
        if ($$1.support.transition) {
          this.$stage.on($$1.support.transition.end + ".owl.core", $$1.proxy(this.onTransitionEnd, this));
        }
        if (this.settings.responsive !== false) {
          this.on(window2, "resize", this._handlers.onThrottledResize);
        }
        if (this.settings.mouseDrag) {
          this.$element.addClass(this.options.dragClass);
          this.$stage.on("mousedown.owl.core", $$1.proxy(this.onDragStart, this));
          this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return false;
          });
        }
        if (this.settings.touchDrag) {
          this.$stage.on("touchstart.owl.core", $$1.proxy(this.onDragStart, this));
          this.$stage.on("touchcancel.owl.core", $$1.proxy(this.onDragEnd, this));
        }
      };
      Owl.prototype.onDragStart = function(event) {
        var stage = null;
        if (event.which === 3) {
          return;
        }
        if ($$1.support.transform) {
          stage = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(",");
          stage = {
            x: stage[stage.length === 16 ? 12 : 4],
            y: stage[stage.length === 16 ? 13 : 5]
          };
        } else {
          stage = this.$stage.position();
          stage = {
            x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
            y: stage.top
          };
        }
        if (this.is("animating")) {
          $$1.support.transform ? this.animate(stage.x) : this.$stage.stop();
          this.invalidate("position");
        }
        this.$element.toggleClass(this.options.grabClass, event.type === "mousedown");
        this.speed(0);
        this._drag.time = (/* @__PURE__ */ new Date()).getTime();
        this._drag.target = $$1(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);
        $$1(document2).on("mouseup.owl.core touchend.owl.core", $$1.proxy(this.onDragEnd, this));
        $$1(document2).one("mousemove.owl.core touchmove.owl.core", $$1.proxy(function(event2) {
          var delta = this.difference(this._drag.pointer, this.pointer(event2));
          $$1(document2).on("mousemove.owl.core touchmove.owl.core", $$1.proxy(this.onDragMove, this));
          if (Math.abs(delta.x) < Math.abs(delta.y) && this.is("valid")) {
            return;
          }
          event2.preventDefault();
          this.enter("dragging");
          this.trigger("drag");
        }, this));
      };
      Owl.prototype.onDragMove = function(event) {
        var minimum = null, maximum = null, pull = null, delta = this.difference(this._drag.pointer, this.pointer(event)), stage = this.difference(this._drag.stage.start, delta);
        if (!this.is("dragging")) {
          return;
        }
        event.preventDefault();
        if (this.settings.loop) {
          minimum = this.coordinates(this.minimum());
          maximum = this.coordinates(this.maximum() + 1) - minimum;
          stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
        } else {
          minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
          maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
          pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
          stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }
        this._drag.stage.current = stage;
        this.animate(stage.x);
      };
      Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)), stage = this._drag.stage.current, direction = delta.x > 0 ^ this.settings.rtl ? "left" : "right";
        $$1(document2).off(".owl.core");
        this.$element.removeClass(this.options.grabClass);
        if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
          this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
          this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
          this.invalidate("position");
          this.update();
          this._drag.direction = direction;
          if (Math.abs(delta.x) > 3 || (/* @__PURE__ */ new Date()).getTime() - this._drag.time > 300) {
            this._drag.target.one("click.owl.core", function() {
              return false;
            });
          }
        }
        if (!this.is("dragging")) {
          return;
        }
        this.leave("dragging");
        this.trigger("dragged");
      };
      Owl.prototype.closest = function(coordinate, direction) {
        var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
        if (!this.settings.freeDrag) {
          $$1.each(coordinates, $$1.proxy(function(index, value) {
            if (direction === "left" && coordinate > value - pull && coordinate < value + pull) {
              position = index;
            } else if (direction === "right" && coordinate > value - width - pull && coordinate < value - width + pull) {
              position = index + 1;
            } else if (this.op(coordinate, "<", value) && this.op(coordinate, ">", coordinates[index + 1] !== undefined$1 ? coordinates[index + 1] : value - width)) {
              position = direction === "left" ? index + 1 : index;
            }
            return position === -1;
          }, this));
        }
        if (!this.settings.loop) {
          if (this.op(coordinate, ">", coordinates[this.minimum()])) {
            position = coordinate = this.minimum();
          } else if (this.op(coordinate, "<", coordinates[this.maximum()])) {
            position = coordinate = this.maximum();
          }
        }
        return position;
      };
      Owl.prototype.animate = function(coordinate) {
        var animate = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        if (animate) {
          this.enter("animating");
          this.trigger("translate");
        }
        if ($$1.support.transform3d && $$1.support.transition) {
          this.$stage.css({
            transform: "translate3d(" + coordinate + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
          });
        } else if (animate) {
          this.$stage.animate({
            left: coordinate + "px"
          }, this.speed(), this.settings.fallbackEasing, $$1.proxy(this.onTransitionEnd, this));
        } else {
          this.$stage.css({
            left: coordinate + "px"
          });
        }
      };
      Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0;
      };
      Owl.prototype.current = function(position) {
        if (position === undefined$1) {
          return this._current;
        }
        if (this._items.length === 0) {
          return undefined$1;
        }
        position = this.normalize(position);
        if (this._current !== position) {
          var event = this.trigger("change", { property: { name: "position", value: position } });
          if (event.data !== undefined$1) {
            position = this.normalize(event.data);
          }
          this._current = position;
          this.invalidate("position");
          this.trigger("changed", { property: { name: "position", value: this._current } });
        }
        return this._current;
      };
      Owl.prototype.invalidate = function(part) {
        if ($$1.type(part) === "string") {
          this._invalidated[part] = true;
          this.is("valid") && this.leave("valid");
        }
        return $$1.map(this._invalidated, function(v2, i2) {
          return i2;
        });
      };
      Owl.prototype.reset = function(position) {
        position = this.normalize(position);
        if (position === undefined$1) {
          return;
        }
        this._speed = 0;
        this._current = position;
        this.suppress(["translate", "translated"]);
        this.animate(this.coordinates(position));
        this.release(["translate", "translated"]);
      };
      Owl.prototype.normalize = function(position, relative) {
        var n2 = this._items.length, m2 = relative ? 0 : this._clones.length;
        if (!this.isNumeric(position) || n2 < 1) {
          position = undefined$1;
        } else if (position < 0 || position >= n2 + m2) {
          position = ((position - m2 / 2) % n2 + n2) % n2 + m2 / 2;
        }
        return position;
      };
      Owl.prototype.relative = function(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
      };
      Owl.prototype.maximum = function(relative) {
        var settings = this.settings, maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
        if (settings.loop) {
          maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
          iterator = this._items.length;
          if (iterator) {
            reciprocalItemsWidth = this._items[--iterator].width();
            elementWidth = this.$element.width();
            while (iterator--) {
              reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
              if (reciprocalItemsWidth > elementWidth) {
                break;
              }
            }
          }
          maximum = iterator + 1;
        } else if (settings.center) {
          maximum = this._items.length - 1;
        } else {
          maximum = this._items.length - settings.items;
        }
        if (relative) {
          maximum -= this._clones.length / 2;
        }
        return Math.max(maximum, 0);
      };
      Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2;
      };
      Owl.prototype.items = function(position) {
        if (position === undefined$1) {
          return this._items.slice();
        }
        position = this.normalize(position, true);
        return this._items[position];
      };
      Owl.prototype.mergers = function(position) {
        if (position === undefined$1) {
          return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
      };
      Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2, even = odd + this._items.length, map = function(index) {
          return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
        };
        if (position === undefined$1) {
          return $$1.map(this._clones, function(v2, i2) {
            return map(i2);
          });
        }
        return $$1.map(this._clones, function(v2, i2) {
          return v2 === position ? map(i2) : null;
        });
      };
      Owl.prototype.speed = function(speed) {
        if (speed !== undefined$1) {
          this._speed = speed;
        }
        return this._speed;
      };
      Owl.prototype.coordinates = function(position) {
        var multiplier = 1, newPosition = position - 1, coordinate;
        if (position === undefined$1) {
          return $$1.map(this._coordinates, $$1.proxy(function(coordinate2, index) {
            return this.coordinates(index);
          }, this));
        }
        if (this.settings.center) {
          if (this.settings.rtl) {
            multiplier = -1;
            newPosition = position + 1;
          }
          coordinate = this._coordinates[position];
          coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
          coordinate = this._coordinates[newPosition] || 0;
        }
        coordinate = Math.ceil(coordinate);
        return coordinate;
      };
      Owl.prototype.duration = function(from, to, factor) {
        if (factor === 0) {
          return 0;
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
      };
      Owl.prototype.to = function(position, speed) {
        var current = this.current(), revert = null, distance = position - this.relative(current), direction = (distance > 0) - (distance < 0), items = this._items.length, minimum = this.minimum(), maximum = this.maximum();
        if (this.settings.loop) {
          if (!this.settings.rewind && Math.abs(distance) > items / 2) {
            distance += direction * -1 * items;
          }
          position = current + distance;
          revert = ((position - minimum) % items + items) % items + minimum;
          if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
            current = revert - distance;
            position = revert;
            this.reset(current);
          }
        } else if (this.settings.rewind) {
          maximum += 1;
          position = (position % maximum + maximum) % maximum;
        } else {
          position = Math.max(minimum, Math.min(maximum, position));
        }
        this.speed(this.duration(current, position, speed));
        this.current(position);
        if (this.isVisible()) {
          this.update();
        }
      };
      Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
      };
      Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
      };
      Owl.prototype.onTransitionEnd = function(event) {
        if (event !== undefined$1) {
          event.stopPropagation();
          if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
            return false;
          }
        }
        this.leave("animating");
        this.trigger("translated");
      };
      Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window2) {
          width = $$1(this.options.responsiveBaseElement).width();
        } else if (window2.innerWidth) {
          width = window2.innerWidth;
        } else if (document2.documentElement && document2.documentElement.clientWidth) {
          width = document2.documentElement.clientWidth;
        } else {
          console.warn("Can not detect viewport width.");
        }
        return width;
      };
      Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
          content = content instanceof $ ? content : $$1(content);
        }
        if (this.settings.nestedItemSelector) {
          content = content.find("." + this.settings.nestedItemSelector);
        }
        content.filter(function() {
          return this.nodeType === 1;
        }).each($$1.proxy(function(index, item) {
          item = this.prepare(item);
          this.$stage.append(item);
          this._items.push(item);
          this._mergers.push(item.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items");
      };
      Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);
        position = position === undefined$1 ? this._items.length : this.normalize(position, true);
        content = content instanceof $ ? content : $$1(content);
        this.trigger("add", { content, position });
        content = this.prepare(content);
        if (this._items.length === 0 || position === this._items.length) {
          this._items.length === 0 && this.$stage.append(content);
          this._items.length !== 0 && this._items[position - 1].after(content);
          this._items.push(content);
          this._mergers.push(content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
        } else {
          this._items[position].before(content);
          this._items.splice(position, 0, content);
          this._mergers.splice(position, 0, content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
        }
        this._items[current] && this.reset(this._items[current].index());
        this.invalidate("items");
        this.trigger("added", { content, position });
      };
      Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);
        if (position === undefined$1) {
          return;
        }
        this.trigger("remove", { content: this._items[position], position });
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate("items");
        this.trigger("removed", { content: null, position });
      };
      Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each($$1.proxy(function(i2, element) {
          this.enter("pre-loading");
          element = $$1(element);
          $$1(new Image()).one("load", $$1.proxy(function(e2) {
            element.attr("src", e2.target.src);
            element.css("opacity", 1);
            this.leave("pre-loading");
            !this.is("pre-loading") && !this.is("initializing") && this.refresh();
          }, this)).attr("src", element.attr("src") || element.attr("data-src") || element.attr("data-src-retina"));
        }, this));
      };
      Owl.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        $$1(document2).off(".owl.core");
        if (this.settings.responsive !== false) {
          window2.clearTimeout(this.resizeTimer);
          this.off(window2, "resize", this._handlers.onThrottledResize);
        }
        for (var i2 in this._plugins) {
          this._plugins[i2].destroy();
        }
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
      };
      Owl.prototype.op = function(a2, o2, b2) {
        var rtl = this.settings.rtl;
        switch (o2) {
          case "<":
            return rtl ? a2 > b2 : a2 < b2;
          case ">":
            return rtl ? a2 < b2 : a2 > b2;
          case ">=":
            return rtl ? a2 <= b2 : a2 >= b2;
          case "<=":
            return rtl ? a2 >= b2 : a2 <= b2;
        }
      };
      Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
          element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
          element.attachEvent("on" + event, listener);
        }
      };
      Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
          element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
          element.detachEvent("on" + event, listener);
        }
      };
      Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
          item: { count: this._items.length, index: this.current() }
        }, handler = $$1.camelCase(
          $$1.grep(["on", name, namespace], function(v2) {
            return v2;
          }).join("-").toLowerCase()
        ), event = $$1.Event(
          [name, "owl", namespace || "carousel"].join(".").toLowerCase(),
          $$1.extend({ relatedTarget: this }, status, data)
        );
        if (!this._supress[name]) {
          $$1.each(this._plugins, function(name2, plugin) {
            if (plugin.onTrigger) {
              plugin.onTrigger(event);
            }
          });
          this.register({ type: Owl.Type.Event, name });
          this.$element.trigger(event);
          if (this.settings && typeof this.settings[handler] === "function") {
            this.settings[handler].call(this, event);
          }
        }
        return event;
      };
      Owl.prototype.enter = function(name) {
        $$1.each([name].concat(this._states.tags[name] || []), $$1.proxy(function(i2, name2) {
          if (this._states.current[name2] === undefined$1) {
            this._states.current[name2] = 0;
          }
          this._states.current[name2]++;
        }, this));
      };
      Owl.prototype.leave = function(name) {
        $$1.each([name].concat(this._states.tags[name] || []), $$1.proxy(function(i2, name2) {
          this._states.current[name2]--;
        }, this));
      };
      Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
          if (!$$1.event.special[object.name]) {
            $$1.event.special[object.name] = {};
          }
          if (!$$1.event.special[object.name].owl) {
            var _default = $$1.event.special[object.name]._default;
            $$1.event.special[object.name]._default = function(e2) {
              if (_default && _default.apply && (!e2.namespace || e2.namespace.indexOf("owl") === -1)) {
                return _default.apply(this, arguments);
              }
              return e2.namespace && e2.namespace.indexOf("owl") > -1;
            };
            $$1.event.special[object.name].owl = true;
          }
        } else if (object.type === Owl.Type.State) {
          if (!this._states.tags[object.name]) {
            this._states.tags[object.name] = object.tags;
          } else {
            this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
          }
          this._states.tags[object.name] = $$1.grep(this._states.tags[object.name], $$1.proxy(function(tag, i2) {
            return $$1.inArray(tag, this._states.tags[object.name]) === i2;
          }, this));
        }
      };
      Owl.prototype.suppress = function(events) {
        $$1.each(events, $$1.proxy(function(index, event) {
          this._supress[event] = true;
        }, this));
      };
      Owl.prototype.release = function(events) {
        $$1.each(events, $$1.proxy(function(index, event) {
          delete this._supress[event];
        }, this));
      };
      Owl.prototype.pointer = function(event) {
        var result = { x: null, y: null };
        event = event.originalEvent || event || window2.event;
        event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
        if (event.pageX) {
          result.x = event.pageX;
          result.y = event.pageY;
        } else {
          result.x = event.clientX;
          result.y = event.clientY;
        }
        return result;
      };
      Owl.prototype.isNumeric = function(number) {
        return !isNaN(parseFloat(number));
      };
      Owl.prototype.difference = function(first, second) {
        return {
          x: first.x - second.x,
          y: first.y - second.y
        };
      };
      $$1.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
          var $this = $$1(this), data = $this.data("owl.carousel");
          if (!data) {
            data = new Owl(this, typeof option == "object" && option);
            $this.data("owl.carousel", data);
            $$1.each([
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove"
            ], function(i2, event) {
              data.register({ type: Owl.Type.Event, name: event });
              data.$element.on(event + ".owl.carousel.core", $$1.proxy(function(e2) {
                if (e2.namespace && e2.relatedTarget !== this) {
                  this.suppress([event]);
                  data[event].apply(this, [].slice.call(arguments, 1));
                  this.release([event]);
                }
              }, data));
            });
          }
          if (typeof option == "string" && option.charAt(0) !== "_") {
            data[option].apply(data, args);
          }
        });
      };
      $$1.fn.owlCarousel.Constructor = Owl;
    })(window.Zepto || $, window, document);
    (function($2, window2, document2, undefined$1) {
      var AutoRefresh = function(carousel) {
        this._core = carousel;
        this._interval = null;
        this._visible = null;
        this._handlers = {
          "initialized.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.autoRefresh) {
              this.watch();
            }
          }, this)
        };
        this._core.options = $2.extend({}, AutoRefresh.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
      };
      AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
      };
      AutoRefresh.prototype.watch = function() {
        if (this._interval) {
          return;
        }
        this._visible = this._core.isVisible();
        this._interval = window2.setInterval($2.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
      };
      AutoRefresh.prototype.refresh = function() {
        if (this._core.isVisible() === this._visible) {
          return;
        }
        this._visible = !this._visible;
        this._core.$element.toggleClass("owl-hidden", !this._visible);
        this._visible && (this._core.invalidate("width") && this._core.refresh());
      };
      AutoRefresh.prototype.destroy = function() {
        var handler, property;
        window2.clearInterval(this._interval);
        for (handler in this._handlers) {
          this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
          typeof this[property] != "function" && (this[property] = null);
        }
      };
      $2.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
    })(window.Zepto || $, window);
    (function($2, window2, document2, undefined$1) {
      var Lazy = function(carousel) {
        this._core = carousel;
        this._loaded = [];
        this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": $2.proxy(function(e2) {
            if (!e2.namespace) {
              return;
            }
            if (!this._core.settings || !this._core.settings.lazyLoad) {
              return;
            }
            if (e2.property && e2.property.name == "position" || e2.type == "initialized") {
              var settings = this._core.settings, n2 = settings.center && Math.ceil(settings.items / 2) || settings.items, i2 = settings.center && n2 * -1 || 0, position = (e2.property && e2.property.value !== undefined$1 ? e2.property.value : this._core.current()) + i2, clones = this._core.clones().length, load = $2.proxy(function(i3, v2) {
                this.load(v2);
              }, this);
              if (settings.lazyLoadEager > 0) {
                n2 += settings.lazyLoadEager;
                if (settings.loop) {
                  position -= settings.lazyLoadEager;
                  n2++;
                }
              }
              while (i2++ < n2) {
                this.load(clones / 2 + this._core.relative(position));
                clones && $2.each(this._core.clones(this._core.relative(position)), load);
                position++;
              }
            }
          }, this)
        };
        this._core.options = $2.extend({}, Lazy.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
      };
      Lazy.Defaults = {
        lazyLoad: false,
        lazyLoadEager: 0
      };
      Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position), $elements = $item && $item.find(".owl-lazy");
        if (!$elements || $2.inArray($item.get(0), this._loaded) > -1) {
          return;
        }
        $elements.each($2.proxy(function(index, element) {
          var $element = $2(element), image, url = window2.devicePixelRatio > 1 && $element.attr("data-src-retina") || $element.attr("data-src") || $element.attr("data-srcset");
          this._core.trigger("load", { element: $element, url }, "lazy");
          if ($element.is("img")) {
            $element.one("load.owl.lazy", $2.proxy(function() {
              $element.css("opacity", 1);
              this._core.trigger("loaded", { element: $element, url }, "lazy");
            }, this)).attr("src", url);
          } else if ($element.is("source")) {
            $element.one("load.owl.lazy", $2.proxy(function() {
              this._core.trigger("loaded", { element: $element, url }, "lazy");
            }, this)).attr("srcset", url);
          } else {
            image = new Image();
            image.onload = $2.proxy(function() {
              $element.css({
                "background-image": 'url("' + url + '")',
                "opacity": "1"
              });
              this._core.trigger("loaded", { element: $element, url }, "lazy");
            }, this);
            image.src = url;
          }
        }, this));
        this._loaded.push($item.get(0));
      };
      Lazy.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
          this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
          typeof this[property] != "function" && (this[property] = null);
        }
      };
      $2.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
    })(window.Zepto || $, window);
    (function($2, window2, document2, undefined$1) {
      var AutoHeight = function(carousel) {
        this._core = carousel;
        this._previousHeight = null;
        this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.autoHeight) {
              this.update();
            }
          }, this),
          "changed.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.autoHeight && e2.property.name === "position") {
              this.update();
            }
          }, this),
          "loaded.owl.lazy": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.autoHeight && e2.element.closest("." + this._core.settings.itemClass).index() === this._core.current()) {
              this.update();
            }
          }, this)
        };
        this._core.options = $2.extend({}, AutoHeight.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._intervalId = null;
        var refThis = this;
        $2(window2).on("load", function() {
          if (refThis._core.settings.autoHeight) {
            refThis.update();
          }
        });
        $2(window2).resize(function() {
          if (refThis._core.settings.autoHeight) {
            if (refThis._intervalId != null) {
              clearTimeout(refThis._intervalId);
            }
            refThis._intervalId = setTimeout(function() {
              refThis.update();
            }, 250);
          }
        });
      };
      AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: "owl-height"
      };
      AutoHeight.prototype.update = function() {
        var start = this._core._current, end = start + this._core.settings.items, lazyLoadEnabled = this._core.settings.lazyLoad, visible = this._core.$stage.children().toArray().slice(start, end), heights = [], maxheight = 0;
        $2.each(visible, function(index, item) {
          heights.push($2(item).height());
        });
        maxheight = Math.max.apply(null, heights);
        if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
          maxheight = this._previousHeight;
        }
        this._previousHeight = maxheight;
        this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
      };
      AutoHeight.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
          this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
          typeof this[property] !== "function" && (this[property] = null);
        }
      };
      $2.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
    })(window.Zepto || $, window);
    (function($2, window2, document2, undefined$1) {
      var Video = function(carousel) {
        this._core = carousel;
        this._videos = {};
        this._playing = null;
        this._handlers = {
          "initialized.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace) {
              this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
            }
          }, this),
          "resize.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.video && this.isInFullScreen()) {
              e2.preventDefault();
            }
          }, this),
          "refreshed.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.is("resizing")) {
              this._core.$stage.find(".cloned .owl-video-frame").remove();
            }
          }, this),
          "changed.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && e2.property.name === "position" && this._playing) {
              this.stop();
            }
          }, this),
          "prepared.owl.carousel": $2.proxy(function(e2) {
            if (!e2.namespace) {
              return;
            }
            var $element = $2(e2.content).find(".owl-video");
            if ($element.length) {
              $element.css("display", "none");
              this.fetch($element, $2(e2.content));
            }
          }, this)
        };
        this._core.options = $2.extend({}, Video.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", $2.proxy(function(e2) {
          this.play(e2);
        }, this));
      };
      Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
      };
      Video.prototype.fetch = function(target, item) {
        var type = (function() {
          if (target.attr("data-vimeo-id")) {
            return "vimeo";
          } else if (target.attr("data-vzaar-id")) {
            return "vzaar";
          } else {
            return "youtube";
          }
        })(), id = target.attr("data-vimeo-id") || target.attr("data-youtube-id") || target.attr("data-vzaar-id"), width = target.attr("data-width") || this._core.settings.videoWidth, height = target.attr("data-height") || this._core.settings.videoHeight, url = target.attr("href");
        if (url) {
          id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
          if (id[3].indexOf("youtu") > -1) {
            type = "youtube";
          } else if (id[3].indexOf("vimeo") > -1) {
            type = "vimeo";
          } else if (id[3].indexOf("vzaar") > -1) {
            type = "vzaar";
          } else {
            throw new Error("Video URL not supported.");
          }
          id = id[6];
        } else {
          throw new Error("Missing video URL.");
        }
        this._videos[url] = {
          type,
          id,
          width,
          height
        };
        item.attr("data-video", url);
        this.thumbnail(target, this._videos[url]);
      };
      Video.prototype.thumbnail = function(target, video) {
        var tnLink, icon, path, dimensions = video.width && video.height ? "width:" + video.width + "px;height:" + video.height + "px;" : "", customTn = target.find("img"), srcType = "src", lazyClass = "", settings = this._core.settings, create = function(path2) {
          icon = '<div class="owl-video-play-icon"></div>';
          if (settings.lazyLoad) {
            tnLink = $2("<div/>", {
              "class": "owl-video-tn " + lazyClass,
              "srcType": path2
            });
          } else {
            tnLink = $2("<div/>", {
              "class": "owl-video-tn",
              "style": "opacity:1;background-image:url(" + path2 + ")"
            });
          }
          target.after(tnLink);
          target.after(icon);
        };
        target.wrap($2("<div/>", {
          "class": "owl-video-wrapper",
          "style": dimensions
        }));
        if (this._core.settings.lazyLoad) {
          srcType = "data-src";
          lazyClass = "owl-lazy";
        }
        if (customTn.length) {
          create(customTn.attr(srcType));
          customTn.remove();
          return false;
        }
        if (video.type === "youtube") {
          path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
          create(path);
        } else if (video.type === "vimeo") {
          $2.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + video.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(data) {
              path = data[0].thumbnail_large;
              create(path);
            }
          });
        } else if (video.type === "vzaar") {
          $2.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + video.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(data) {
              path = data.framegrab_url;
              create(path);
            }
          });
        }
      };
      Video.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video");
      };
      Video.prototype.play = function(event) {
        var target = $2(event.target), item = target.closest("." + this._core.settings.itemClass), video = this._videos[item.attr("data-video")], width = video.width || "100%", height = video.height || this._core.$stage.height(), html;
        if (this._playing) {
          return;
        }
        this._core.enter("playing");
        this._core.trigger("play", null, "video");
        item = this._core.items(this._core.relative(item.index()));
        this._core.reset(item.index());
        html = $2('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
        html.attr("height", height);
        html.attr("width", width);
        if (video.type === "youtube") {
          html.attr("src", "//www.youtube.com/embed/" + video.id + "?autoplay=1&rel=0&v=" + video.id);
        } else if (video.type === "vimeo") {
          html.attr("src", "//player.vimeo.com/video/" + video.id + "?autoplay=1");
        } else if (video.type === "vzaar") {
          html.attr("src", "//view.vzaar.com/" + video.id + "/player?autoplay=true");
        }
        $2(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find(".owl-video"));
        this._playing = item.addClass("owl-video-playing");
      };
      Video.prototype.isInFullScreen = function() {
        var element = document2.fullscreenElement || document2.mozFullScreenElement || document2.webkitFullscreenElement;
        return element && $2(element).parent().hasClass("owl-video-frame");
      };
      Video.prototype.destroy = function() {
        var handler, property;
        this._core.$element.off("click.owl.video");
        for (handler in this._handlers) {
          this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
          typeof this[property] != "function" && (this[property] = null);
        }
      };
      $2.fn.owlCarousel.Constructor.Plugins.Video = Video;
    })(window.Zepto || $, window, document);
    (function($2, window2, document2, undefined$1) {
      var Animate = function(scope) {
        this.core = scope;
        this.core.options = $2.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined$1;
        this.next = undefined$1;
        this.handlers = {
          "change.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && e2.property.name == "position") {
              this.previous = this.core.current();
              this.next = e2.property.value;
            }
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace) {
              this.swapping = e2.type == "translated";
            }
          }, this),
          "translate.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
              this.swap();
            }
          }, this)
        };
        this.core.$element.on(this.handlers);
      };
      Animate.Defaults = {
        animateOut: false,
        animateIn: false
      };
      Animate.prototype.swap = function() {
        if (this.core.settings.items !== 1) {
          return;
        }
        if (!$2.support.animation || !$2.support.transition) {
          return;
        }
        this.core.speed(0);
        var left, clear = $2.proxy(this.clear, this), previous = this.core.$stage.children().eq(this.previous), next = this.core.$stage.children().eq(this.next), incoming = this.core.settings.animateIn, outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
          return;
        }
        if (outgoing) {
          left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
          previous.one($2.support.animation.end, clear).css({ "left": left + "px" }).addClass("animated owl-animated-out").addClass(outgoing);
        }
        if (incoming) {
          next.one($2.support.animation.end, clear).addClass("animated owl-animated-in").addClass(incoming);
        }
      };
      Animate.prototype.clear = function(e2) {
        $2(e2.target).css({ "left": "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
      };
      Animate.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
          this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
          typeof this[property] != "function" && (this[property] = null);
        }
      };
      $2.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
    })(window.Zepto || $);
    (function($2, window2, document2, undefined$1) {
      var Autoplay = function(carousel) {
        this._core = carousel;
        this._call = null;
        this._time = 0;
        this._timeout = 0;
        this._paused = true;
        this._handlers = {
          "changed.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && e2.property.name === "settings") {
              if (this._core.settings.autoplay) {
                this.play();
              } else {
                this.stop();
              }
            } else if (e2.namespace && e2.property.name === "position" && this._paused) {
              this._time = 0;
            }
          }, this),
          "initialized.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.autoplay) {
              this.play();
            }
          }, this),
          "play.owl.autoplay": $2.proxy(function(e2, t2, s2) {
            if (e2.namespace) {
              this.play(t2, s2);
            }
          }, this),
          "stop.owl.autoplay": $2.proxy(function(e2) {
            if (e2.namespace) {
              this.stop();
            }
          }, this),
          "mouseover.owl.autoplay": $2.proxy(function() {
            if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
              this.pause();
            }
          }, this),
          "mouseleave.owl.autoplay": $2.proxy(function() {
            if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
              this.play();
            }
          }, this),
          "touchstart.owl.core": $2.proxy(function() {
            if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
              this.pause();
            }
          }, this),
          "touchend.owl.core": $2.proxy(function() {
            if (this._core.settings.autoplayHoverPause) {
              this.play();
            }
          }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = $2.extend({}, Autoplay.Defaults, this._core.options);
      };
      Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5e3,
        autoplayHoverPause: false,
        autoplaySpeed: false
      };
      Autoplay.prototype._next = function(speed) {
        this._call = window2.setTimeout(
          $2.proxy(this._next, this, speed),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
        );
        if (this._core.is("interacting") || document2.hidden) {
          return;
        }
        this._core.next(speed || this._core.settings.autoplaySpeed);
      };
      Autoplay.prototype.read = function() {
        return (/* @__PURE__ */ new Date()).getTime() - this._time;
      };
      Autoplay.prototype.play = function(timeout, speed) {
        var elapsed;
        if (!this._core.is("rotating")) {
          this._core.enter("rotating");
        }
        timeout = timeout || this._core.settings.autoplayTimeout;
        elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
        if (this._paused) {
          this._time = this.read();
          this._paused = false;
        } else {
          window2.clearTimeout(this._call);
        }
        this._time += this.read() % timeout - elapsed;
        this._timeout = timeout;
        this._call = window2.setTimeout($2.proxy(this._next, this, speed), timeout - elapsed);
      };
      Autoplay.prototype.stop = function() {
        if (this._core.is("rotating")) {
          this._time = 0;
          this._paused = true;
          window2.clearTimeout(this._call);
          this._core.leave("rotating");
        }
      };
      Autoplay.prototype.pause = function() {
        if (this._core.is("rotating") && !this._paused) {
          this._time = this.read();
          this._paused = true;
          window2.clearTimeout(this._call);
        }
      };
      Autoplay.prototype.destroy = function() {
        var handler, property;
        this.stop();
        for (handler in this._handlers) {
          this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
          typeof this[property] != "function" && (this[property] = null);
        }
      };
      $2.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
    })(window.Zepto || $, window, document);
    (function($2, window2, document2, undefined$1) {
      var Navigation = function(carousel) {
        this._core = carousel;
        this._initialized = false;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        };
        this._handlers = {
          "prepared.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.dotsData) {
              this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $2(e2.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
            }
          }, this),
          "added.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.dotsData) {
              this._templates.splice(e2.position, 0, this._templates.pop());
            }
          }, this),
          "remove.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.dotsData) {
              this._templates.splice(e2.position, 1);
            }
          }, this),
          "changed.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && e2.property.name == "position") {
              this.draw();
            }
          }, this),
          "initialized.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && !this._initialized) {
              this._core.trigger("initialize", null, "navigation");
              this.initialize();
              this.update();
              this.draw();
              this._initialized = true;
              this._core.trigger("initialized", null, "navigation");
            }
          }, this),
          "refreshed.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._initialized) {
              this._core.trigger("refresh", null, "navigation");
              this.update();
              this.draw();
              this._core.trigger("refreshed", null, "navigation");
            }
          }, this)
        };
        this._core.options = $2.extend({}, Navigation.Defaults, this._core.options);
        this.$element.on(this._handlers);
      };
      Navigation.Defaults = {
        nav: false,
        navText: [
          '<span aria-label="Previous">&#x2039;</span>',
          '<span aria-label="Next">&#x203a;</span>'
        ],
        navSpeed: false,
        navElement: 'button type="button" role="presentation"',
        navContainer: false,
        navContainerClass: "owl-nav",
        navClass: [
          "owl-prev",
          "owl-next"
        ],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
      };
      Navigation.prototype.initialize = function() {
        var override, settings = this._core.settings;
        this._controls.$relative = (settings.navContainer ? $2(settings.navContainer) : $2("<div>").addClass(settings.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = $2("<" + settings.navElement + ">").addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on("click", $2.proxy(function(e2) {
          this.prev(settings.navSpeed);
        }, this));
        this._controls.$next = $2("<" + settings.navElement + ">").addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on("click", $2.proxy(function(e2) {
          this.next(settings.navSpeed);
        }, this));
        if (!settings.dotsData) {
          this._templates = [$2('<button role="button">').addClass(settings.dotClass).append($2("<span>")).prop("outerHTML")];
        }
        this._controls.$absolute = (settings.dotsContainer ? $2(settings.dotsContainer) : $2("<div>").addClass(settings.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "button", $2.proxy(function(e2) {
          var index = $2(e2.target).parent().is(this._controls.$absolute) ? $2(e2.target).index() : $2(e2.target).parent().index();
          e2.preventDefault();
          this.to(index, settings.dotsSpeed);
        }, this));
        for (override in this._overrides) {
          this._core[override] = $2.proxy(this[override], this);
        }
      };
      Navigation.prototype.destroy = function() {
        var handler, control, property, override, settings;
        settings = this._core.settings;
        for (handler in this._handlers) {
          this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
          if (control === "$relative" && settings.navContainer) {
            this._controls[control].html("");
          } else {
            this._controls[control].remove();
          }
        }
        for (override in this.overides) {
          this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
          typeof this[property] != "function" && (this[property] = null);
        }
      };
      Navigation.prototype.update = function() {
        var i2, j2, lower = this._core.clones().length / 2, upper = lower + this._core.items().length, maximum = this._core.maximum(true), settings = this._core.settings, size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
        if (settings.slideBy !== "page") {
          settings.slideBy = Math.min(settings.slideBy, settings.items);
        }
        if (settings.dots || settings.slideBy == "page") {
          this._pages = [];
          for (i2 = lower, j2 = 0, 0; i2 < upper; i2++) {
            if (j2 >= size || j2 === 0) {
              this._pages.push({
                start: Math.min(maximum, i2 - lower),
                end: i2 - lower + size - 1
              });
              if (Math.min(maximum, i2 - lower) === maximum) {
                break;
              }
              j2 = 0;
            }
            j2 += this._core.mergers(this._core.relative(i2));
          }
        }
      };
      Navigation.prototype.draw = function() {
        var difference, settings = this._core.settings, disabled = this._core.items().length <= settings.items, index = this._core.relative(this._core.current()), loop = settings.loop || settings.rewind;
        this._controls.$relative.toggleClass("disabled", !settings.nav || disabled);
        if (settings.nav) {
          this._controls.$previous.toggleClass("disabled", !loop && index <= this._core.minimum(true));
          this._controls.$next.toggleClass("disabled", !loop && index >= this._core.maximum(true));
        }
        this._controls.$absolute.toggleClass("disabled", !settings.dots || disabled);
        if (settings.dots) {
          difference = this._pages.length - this._controls.$absolute.children().length;
          if (settings.dotsData && difference !== 0) {
            this._controls.$absolute.html(this._templates.join(""));
          } else if (difference > 0) {
            this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
          } else if (difference < 0) {
            this._controls.$absolute.children().slice(difference).remove();
          }
          this._controls.$absolute.find(".active").removeClass("active");
          this._controls.$absolute.children().eq($2.inArray(this.current(), this._pages)).addClass("active");
        }
      };
      Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;
        event.page = {
          index: $2.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
        };
      };
      Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $2.grep(this._pages, $2.proxy(function(page, index) {
          return page.start <= current && page.end >= current;
        }, this)).pop();
      };
      Navigation.prototype.getPosition = function(successor) {
        var position, length, settings = this._core.settings;
        if (settings.slideBy == "page") {
          position = $2.inArray(this.current(), this._pages);
          length = this._pages.length;
          successor ? ++position : --position;
          position = this._pages[(position % length + length) % length].start;
        } else {
          position = this._core.relative(this._core.current());
          length = this._core.items().length;
          successor ? position += settings.slideBy : position -= settings.slideBy;
        }
        return position;
      };
      Navigation.prototype.next = function(speed) {
        $2.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
      };
      Navigation.prototype.prev = function(speed) {
        $2.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
      };
      Navigation.prototype.to = function(position, speed, standard) {
        var length;
        if (!standard && this._pages.length) {
          length = this._pages.length;
          $2.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
        } else {
          $2.proxy(this._overrides.to, this._core)(position, speed);
        }
      };
      $2.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
    })(window.Zepto || $);
    (function($2, window2, document2, undefined$1) {
      var Hash = function(carousel) {
        this._core = carousel;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
          "initialized.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && this._core.settings.startPosition === "URLHash") {
              $2(window2).trigger("hashchange.owl.navigation");
            }
          }, this),
          "prepared.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace) {
              var hash = $2(e2.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
              if (!hash) {
                return;
              }
              this._hashes[hash] = e2.content;
            }
          }, this),
          "changed.owl.carousel": $2.proxy(function(e2) {
            if (e2.namespace && e2.property.name === "position") {
              var current = this._core.items(this._core.relative(this._core.current())), hash = $2.map(this._hashes, function(item, hash2) {
                return item === current ? hash2 : null;
              }).join();
              if (!hash || window2.location.hash.slice(1) === hash) {
                return;
              }
              window2.location.hash = hash;
            }
          }, this)
        };
        this._core.options = $2.extend({}, Hash.Defaults, this._core.options);
        this.$element.on(this._handlers);
        $2(window2).on("hashchange.owl.navigation", $2.proxy(function(e2) {
          var hash = window2.location.hash.substring(1), items = this._core.$stage.children(), position = this._hashes[hash] && items.index(this._hashes[hash]);
          if (position === undefined$1 || position === this._core.current()) {
            return;
          }
          this._core.to(this._core.relative(position), false, true);
        }, this));
      };
      Hash.Defaults = {
        URLhashListener: false
      };
      Hash.prototype.destroy = function() {
        var handler, property;
        $2(window2).off("hashchange.owl.navigation");
        for (handler in this._handlers) {
          this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
          typeof this[property] != "function" && (this[property] = null);
        }
      };
      $2.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
    })(window.Zepto || $, window);
    (function($2, window2, document2, undefined$1) {
      var style = $2("<support>").get(0).style, prefixes = "Webkit Moz O ms".split(" "), events = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
          }
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend"
          }
        }
      }, tests = {
        csstransforms: function() {
          return !!test("transform");
        },
        csstransforms3d: function() {
          return !!test("perspective");
        },
        csstransitions: function() {
          return !!test("transition");
        },
        cssanimations: function() {
          return !!test("animation");
        }
      };
      function test(property, prefixed2) {
        var result = false, upper = property.charAt(0).toUpperCase() + property.slice(1);
        $2.each((property + " " + prefixes.join(upper + " ") + upper).split(" "), function(i2, property2) {
          if (style[property2] !== undefined$1) {
            result = prefixed2 ? property2 : true;
            return false;
          }
        });
        return result;
      }
      function prefixed(property) {
        return test(property, true);
      }
      if (tests.csstransitions()) {
        $2.support.transition = new String(prefixed("transition"));
        $2.support.transition.end = events.transition.end[$2.support.transition];
      }
      if (tests.cssanimations()) {
        $2.support.animation = new String(prefixed("animation"));
        $2.support.animation.end = events.animation.end[$2.support.animation];
      }
      if (tests.csstransforms()) {
        $2.support.transform = new String(prefixed("transform"));
        $2.support.transform3d = tests.csstransforms3d();
      }
    })(window.Zepto || $);
    /*! License details at fancyapps.com/license */
    const t$8 = (t2) => "string" == typeof t2;
    /*! License details at fancyapps.com/license */
    const n$8 = (n2) => n2 && null !== n2 && n2 instanceof Element && "nodeType" in n2;
    /*! License details at fancyapps.com/license */
    const e$a = function(e2) {
      if (!(e2 && e2 instanceof Element && e2.offsetParent)) return false;
      const n2 = e2.scrollHeight > e2.clientHeight, t2 = window.getComputedStyle(e2).overflowY, o2 = -1 !== t2.indexOf("hidden"), i2 = -1 !== t2.indexOf("visible");
      return n2 && !o2 && !i2;
    }, n$7 = function(t2, o2 = void 0) {
      return !t2 || t2 === document.body || o2 && t2 === o2 ? null : e$a(t2) ? t2 : n$7(t2.parentElement, o2);
    };
    /*! License details at fancyapps.com/license */
    const e$9 = function(e2) {
      var t2 = new DOMParser().parseFromString(e2, "text/html").body;
      if (t2.childElementCount > 1) {
        for (var n2 = document.createElement("div"); t2.firstChild; ) n2.appendChild(t2.firstChild);
        return n2;
      }
      let r2 = t2.firstChild;
      return !r2 || r2 instanceof HTMLElement ? r2 : ((n2 = document.createElement("div")).appendChild(r2), n2);
    };
    /*! License details at fancyapps.com/license */
    const t$7 = function(t2 = 0, n2 = 0, a2 = 0) {
      return Math.max(Math.min(n2, a2), t2);
    };
    /*! License details at fancyapps.com/license */
    const t$6 = (t2) => "object" == typeof t2 && null !== t2 && t2.constructor === Object && "[object Object]" === Object.prototype.toString.call(t2);
    /*! License details at fancyapps.com/license */
    function e$8(e2) {
      return t$6(e2) || Array.isArray(e2);
    }
    function n$6(t2, r2) {
      const o2 = Object.keys(t2), c2 = Object.keys(r2);
      return o2.length === c2.length && o2.every(((o3) => {
        const c3 = t2[o3], i2 = r2[o3];
        return "function" == typeof c3 ? `${c3}` == `${i2}` : e$8(c3) && e$8(i2) ? n$6(c3, i2) : c3 === i2;
      }));
    }
    /*! License details at fancyapps.com/license */
    const e$7 = function(n2) {
      for (const t2 of s$9) t2.getState() === i$5.Running && t2.tick(a$7 ? n2 - a$7 : 0);
      a$7 = n2, u$3 = window.requestAnimationFrame(e$7);
    };
    var i$5, o$5, r$6;
    !(function(n2) {
      n2[n2.Initializing = 0] = "Initializing", n2[n2.Running = 1] = "Running", n2[n2.Paused = 2] = "Paused", n2[n2.Completed = 3] = "Completed", n2[n2.Destroyed = 4] = "Destroyed";
    })(i$5 || (i$5 = {})), (function(n2) {
      n2[n2.Spring = 0] = "Spring", n2[n2.Ease = 1] = "Ease";
    })(o$5 || (o$5 = {})), (function(n2) {
      n2[n2.Loop = 0] = "Loop", n2[n2.Reverse = 1] = "Reverse";
    })(r$6 || (r$6 = {}));
    const s$9 = /* @__PURE__ */ new Set();
    let u$3 = null, a$7 = 0;
    function c$2() {
      let a2 = i$5.Initializing, f2 = o$5.Ease, l2 = 0, g = 0, p2 = c$2.Easings.Linear, m2 = 500, d2 = 0, b2 = 0, S = 0, h2 = 0, y2 = 1 / 0, E2 = 0.01, R2 = 0.01, M2 = false, j2 = {}, w2 = null, v2 = {}, O2 = {}, C = {}, L = 0, I2 = 0, D2 = r$6.Loop, z2 = c$2.Easings.Linear;
      const N2 = /* @__PURE__ */ new Map();
      function V(n2, ...t2) {
        for (const e2 of N2.get(n2) || []) e2(...t2);
      }
      function q(n2) {
        return g = 0, n2 ? w2 = setTimeout((() => {
          x2();
        }), n2) : x2(), F;
      }
      function x2() {
        a2 = i$5.Running, V("start", v2, O2);
      }
      function A() {
        if (a2 = i$5.Completed, C = {}, V("end", v2), a2 === i$5.Completed) if (l2 < L) {
          if (l2++, D2 === r$6.Reverse) {
            const n2 = Object.assign({}, j2);
            j2 = Object.assign({}, O2), O2 = n2;
          }
          q(I2);
        } else l2 = 0;
        return F;
      }
      const F = { getState: function() {
        return a2;
      }, easing: function(n2) {
        return p2 = n2, f2 = o$5.Ease, C = {}, F;
      }, duration: function(n2) {
        return m2 = n2, F;
      }, spring: function(n2 = {}) {
        f2 = o$5.Spring;
        const t2 = { velocity: 0, mass: 1, tension: 170, friction: 26, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0, clamp: true }, { velocity: e2, mass: i2, tension: r2, friction: s2, restDelta: u2, restSpeed: a3, maxSpeed: c2, clamp: l3 } = Object.assign(Object.assign({}, t2), n2);
        return d2 = e2, b2 = i2, S = r2, h2 = s2, R2 = u2, E2 = a3, y2 = c2, M2 = l3, C = {}, F;
      }, isRunning: function() {
        return a2 === i$5.Running;
      }, isSpring: function() {
        return f2 === o$5.Spring;
      }, from: function(n2) {
        return v2 = Object.assign({}, n2), F;
      }, to: function(n2) {
        return O2 = n2, F;
      }, repeat: function(n2, t2 = 0, e2 = r$6.Loop, i2) {
        return L = n2, I2 = t2, D2 = e2, z2 = i2 || p2, F;
      }, on: function(n2, t2) {
        var e2, i2;
        return e2 = n2, i2 = t2, N2.set(e2, [...N2.get(e2) || [], i2]), F;
      }, off: function(n2, t2) {
        var e2, i2;
        return e2 = n2, i2 = t2, N2.has(e2) && N2.set(e2, N2.get(e2).filter(((n3) => n3 !== i2))), F;
      }, start: function(n2) {
        return n$6(v2, O2) || (a2 = i$5.Initializing, j2 = Object.assign({}, v2), s$9.add(this), u$3 || (u$3 = window.requestAnimationFrame(e$7)), q(n2)), F;
      }, pause: function() {
        return w2 && (clearTimeout(w2), w2 = null), a2 === i$5.Running && (a2 = i$5.Paused, V("pause", v2)), F;
      }, end: A, tick: function(e2) {
        e2 > 50 && (e2 = 50), g += e2;
        let s2 = 0, u2 = false;
        if (a2 !== i$5.Running) return F;
        if (f2 === o$5.Ease) {
          s2 = t$7(0, g / m2, 1), u2 = 1 === s2;
          const t2 = D2 === r$6.Reverse ? z2 : p2;
          for (const n2 in v2) v2[n2] = j2[n2] + (O2[n2] - j2[n2]) * t2(s2);
        }
        if (f2 === o$5.Spring) {
          const t2 = 1e-3 * e2;
          let i2 = 0;
          for (const e3 in v2) {
            const o2 = O2[e3];
            let r2 = v2[e3];
            if ("number" != typeof o2 || isNaN(o2) || "number" != typeof r2 || isNaN(r2)) continue;
            if (Math.abs(o2 - r2) <= R2) {
              v2[e3] = o2, C[e3] = 0;
              continue;
            }
            C[e3] || ("object" == typeof d2 && "number" == typeof d2[e3] ? C[e3] = d2[e3] : C[e3] = "number" == typeof d2 ? d2 : 0);
            let s3 = C[e3];
            s3 = t$7(-1 * Math.abs(y2), s3, Math.abs(y2));
            const u3 = s3 * b2 * h2;
            s3 += ((r2 > o2 ? -1 : 1) * (Math.abs(o2 - r2) * S) - u3) / b2 * t2, r2 += s3 * t2;
            const a3 = v2[e3] > o2 ? r2 < o2 : r2 > o2;
            let c3 = Math.abs(s3) < E2 && Math.abs(o2 - r2) <= R2;
            M2 && a3 && (c3 = true), c3 ? (r2 = o2, s3 = 0) : i2++, v2[e3] = r2, C[e3] = s3;
          }
          u2 = !i2;
        }
        const c2 = Object.assign({}, O2);
        return V("step", v2, j2, O2, s2), u2 && a2 === i$5.Running && n$6(O2, c2) && (a2 = i$5.Completed, A()), F;
      }, getStartValues: function() {
        return j2;
      }, getCurrentValues: function() {
        return v2;
      }, getCurrentVelocities: function() {
        return C;
      }, getEndValues: function() {
        return O2;
      }, destroy: function() {
        a2 = i$5.Destroyed, w2 && (clearTimeout(w2), w2 = null), j2 = v2 = O2 = {}, s$9.delete(this);
      } };
      return F;
    }
    c$2.destroy = () => {
      for (const n2 of s$9) n2.destroy();
      u$3 && (cancelAnimationFrame(u$3), u$3 = null);
    }, c$2.Easings = { Linear: function(n2) {
      return n2;
    }, EaseIn: function(n2) {
      return 0 === n2 ? 0 : Math.pow(2, 10 * n2 - 10);
    }, EaseOut: function(n2) {
      return 1 === n2 ? 1 : 1 - Math.pow(2, -10 * n2);
    }, EaseInOut: function(n2) {
      return 0 === n2 ? 0 : 1 === n2 ? 1 : n2 < 0.5 ? Math.pow(2, 20 * n2 - 10) / 2 : (2 - Math.pow(2, -20 * n2 + 10)) / 2;
    } };
    /*! License details at fancyapps.com/license */
    function e$6(e2) {
      return "undefined" != typeof TouchEvent && e2 instanceof TouchEvent;
    }
    function t$5(t2, n2) {
      const o2 = [], s2 = e$6(t2) ? t2[n2] : t2 instanceof MouseEvent && ("changedTouches" === n2 || "mouseup" !== t2.type) ? [t2] : [];
      for (const e2 of s2) o2.push({ x: e2.clientX, y: e2.clientY, ts: Date.now() });
      return o2;
    }
    function n$5(e2) {
      return t$5(e2, "touches");
    }
    function o$4(e2) {
      return t$5(e2, "targetTouches");
    }
    function s$8(e2) {
      return t$5(e2, "changedTouches");
    }
    function i$4(e2) {
      const t2 = e2[0], n2 = e2[1] || t2;
      return { x: (t2.x + n2.x) / 2, y: (t2.y + n2.y) / 2, ts: n2.ts };
    }
    function c$1(e2) {
      const t2 = e2[0], n2 = e2[1] || e2[0];
      return t2 && n2 ? -1 * Math.sqrt((n2.x - t2.x) * (n2.x - t2.x) + (n2.y - t2.y) * (n2.y - t2.y)) : 0;
    }
    const r$5 = (e2) => {
      e2.cancelable && e2.preventDefault();
    }, a$6 = { passive: false }, u$2 = { panThreshold: 5, swipeThreshold: 3, ignore: ["textarea", "input", "select", "[contenteditable]", "[data-selectable]", "[data-draggable]"] };
    let l$5 = false, d = true;
    const f = (e2, t2) => {
      let f2, h2, v2, p2 = Object.assign(Object.assign({}, u$2), t2), g = [], m2 = [], E2 = [], w2 = false, y2 = false, T = false, b2 = false, M2 = 0, x2 = 0, L = 0, P = 0, D2 = 0, X = 0, Y = 0, j2 = 0, k2 = 0, R2 = [], z2 = 0, A = 0;
      const O2 = /* @__PURE__ */ new Map();
      function S(e3) {
        const t3 = c$1(m2), n2 = c$1(E2), o2 = t3 && n2 ? t3 / n2 : 0, s2 = Math.abs(Y) > Math.abs(j2) ? Y : j2, i2 = { srcEvent: f2, isPanRecognized: w2, isSwipeRecognized: y2, firstTouch: g, previousTouch: E2, currentTouch: m2, deltaX: L, deltaY: P, offsetX: D2, offsetY: X, velocityX: Y, velocityY: j2, velocity: s2, angle: k2, axis: v2, scale: o2, center: h2 };
        for (const t4 of O2.get(e3) || []) t4(i2);
      }
      function q(e3) {
        const t3 = Date.now();
        if (R2 = R2.filter(((e4) => !e4.ts || e4.ts > t3 - 100)), e3 && R2.push(e3), Y = 0, j2 = 0, R2.length > 3) {
          const e4 = R2[0], t4 = R2[R2.length - 1];
          if (e4 && t4) {
            const n2 = t4.x - e4.x, o2 = t4.y - e4.y, s2 = e4.ts && t4.ts ? t4.ts - e4.ts : 0;
            s2 > 0 && (Y = Math.abs(n2) > 3 ? n2 / (s2 / 30) : 0, j2 = Math.abs(o2) > 3 ? o2 / (s2 / 30) : 0);
          }
        }
      }
      function C(e3) {
        if ("undefined" != typeof MouseEvent && e3 instanceof MouseEvent) {
          if (l$5) return;
        } else l$5 = true;
        const t3 = e3.composedPath()[0], n2 = p2.ignore.join(",");
        if (t3.matches(n2) || t3.closest(n2)) return;
        if ("undefined" != typeof MouseEvent && e3 instanceof MouseEvent) {
          if (!e3.buttons || 0 !== e3.button) return;
          r$5(e3);
        }
        e3 instanceof MouseEvent && (window.addEventListener("mousemove", I2), window.addEventListener("mouseup", B2)), window.addEventListener("blur", F), f2 = e3, m2 = o$4(e3), g = [...m2], E2 = [], x2 = m2.length, h2 = i$4(m2), 1 === x2 && (w2 = false, y2 = false, T = false), x2 && q(i$4(m2));
        const s2 = Date.now(), c2 = s2 - (M2 || s2);
        b2 = c2 > 0 && c2 <= 250 && 1 === x2, M2 = s2, clearTimeout(z2), S("start");
      }
      function I2(e3) {
        var t3;
        if (!g.length) return;
        if (e3.defaultPrevented) return;
        f2 = e3, E2 = [...m2], m2 = n$5(e3);
        const o2 = i$4(E2), s2 = i$4(n$5(e3));
        if (q(s2), x2 = m2.length, h2 = s2, E2.length === m2.length ? (L = s2.x - o2.x, P = s2.y - o2.y) : (L = 0, P = 0), g.length) {
          const e4 = i$4(g);
          D2 = s2.x - e4.x, X = s2.y - e4.y;
        }
        if (m2.length > 1) {
          const e4 = c$1(m2), t4 = c$1(E2);
          Math.abs(e4 - t4) >= 0.1 && (T = true, S("pinch"));
        }
        w2 || (w2 = Math.abs(D2) > p2.panThreshold || Math.abs(X) > p2.panThreshold, w2 && (d = false, clearTimeout(A), A = 0, k2 = Math.abs(180 * Math.atan2(X, D2) / Math.PI), v2 = k2 > 45 && k2 < 135 ? "y" : "x", g = [...m2], E2 = [...m2], D2 = 0, X = 0, L = 0, P = 0, null === (t3 = window.getSelection()) || void 0 === t3 || t3.removeAllRanges(), S("panstart"))), w2 && (L || P) && S("pan"), S("move");
      }
      function B2(e3) {
        if (f2 = e3, !g.length) return;
        const t3 = o$4(e3), n2 = s$8(e3);
        if (x2 = t3.length, h2 = i$4(n2), n2.length && q(i$4(n2)), E2 = [...m2], m2 = [...t3], g = [...t3], x2 > 0) S("end"), w2 = false, y2 = false, R2 = [];
        else {
          const e4 = p2.swipeThreshold;
          (Math.abs(Y) > e4 || Math.abs(j2) > e4) && (y2 = true), w2 && S("panend"), y2 && S("swipe"), w2 || y2 || T || (S("tap"), b2 ? S("doubleTap") : z2 = setTimeout((function() {
            S("singleTap");
          }), 250)), S("end"), G();
        }
      }
      function F() {
        clearTimeout(z2), G(), w2 && S("panend"), S("end");
      }
      function G() {
        l$5 = false, w2 = false, y2 = false, b2 = false, x2 = 0, R2 = [], m2 = [], E2 = [], g = [], L = 0, P = 0, D2 = 0, X = 0, Y = 0, j2 = 0, k2 = 0, v2 = void 0, window.removeEventListener("mousemove", I2), window.removeEventListener("mouseup", B2), window.removeEventListener("blur", F), d || A || (A = setTimeout((() => {
          d = true, A = 0;
        }), 100));
      }
      function H2(e3) {
        const t3 = e3.target;
        l$5 = false, t3 && !e3.defaultPrevented && (d || (r$5(e3), e3.stopPropagation()));
      }
      const J = { init: function() {
        if (e2) return e2.addEventListener("click", H2, a$6), e2.addEventListener("mousedown", C, a$6), e2.addEventListener("touchstart", C, a$6), e2.addEventListener("touchmove", I2, a$6), e2.addEventListener("touchend", B2), e2.addEventListener("touchcancel", B2), J;
      }, on: function(e3, t3) {
        return (function(e4, t4) {
          O2.set(e4, [...O2.get(e4) || [], t4]);
        })(e3, t3), J;
      }, off: function(e3, t3) {
        return O2.has(e3) && O2.set(e3, O2.get(e3).filter(((e4) => e4 !== t3))), J;
      }, isPointerDown: () => x2 > 0, destroy: function() {
        clearTimeout(z2), clearTimeout(A), A = 0, e2 && (e2.removeEventListener("click", H2, a$6), e2.removeEventListener("mousedown", C, a$6), e2.removeEventListener("touchstart", C, a$6), e2.removeEventListener("touchmove", I2, a$6), e2.removeEventListener("touchend", B2), e2.removeEventListener("touchcancel", B2)), e2 = null, G();
      } };
      return J;
    };
    f.isClickAllowed = () => d;
    /*! License details at fancyapps.com/license */
    const e$5 = { IMAGE_ERROR: "This image couldn't be loaded. <br /> Please try again later.", MOVE_UP: "Move up", MOVE_DOWN: "Move down", MOVE_LEFT: "Move left", MOVE_RIGHT: "Move right", ZOOM_IN: "Zoom in", ZOOM_OUT: "Zoom out", TOGGLE_FULL: "Toggle zoom level", TOGGLE_1TO1: "Toggle zoom level", ITERATE_ZOOM: "Toggle zoom level", ROTATE_CCW: "Rotate counterclockwise", ROTATE_CW: "Rotate clockwise", FLIP_X: "Flip horizontally", FLIP_Y: "Flip vertically", RESET: "Reset", TOGGLE_FS: "Toggle fullscreen" };
    /*! License details at fancyapps.com/license */
    const s$7 = (s2, t2 = "") => {
      s2 && s2.classList && t2.split(" ").forEach(((t3) => {
        t3 && s2.classList.add(t3);
      }));
    };
    /*! License details at fancyapps.com/license */
    const s$6 = (s2, t2 = "") => {
      s2 && s2.classList && t2.split(" ").forEach(((t3) => {
        t3 && s2.classList.remove(t3);
      }));
    };
    /*! License details at fancyapps.com/license */
    const s$5 = (s2, t2 = "", c2) => {
      s2 && s2.classList && t2.split(" ").forEach(((t3) => {
        t3 && s2.classList.toggle(t3, c2 || false);
      }));
    };
    /*! License details at fancyapps.com/license */
    const h$1 = (e2) => {
      e2.cancelable && e2.preventDefault();
    }, m$1 = (e2, t2 = 1e4) => (e2 = parseFloat(e2 + "") || 0, Math.round((e2 + Number.EPSILON) * t2) / t2), p = (e2) => e2 instanceof HTMLImageElement;
    var v$1, b$1;
    !(function(e2) {
      e2.Reset = "reset", e2.Zoom = "zoom", e2.ZoomIn = "zoomIn", e2.ZoomOut = "zoomOut", e2.ZoomTo = "zoomTo", e2.ToggleCover = "toggleCover", e2.ToggleFull = "toggleFull", e2.ToggleMax = "toggleMax", e2.IterateZoom = "iterateZoom", e2.Pan = "pan", e2.Swipe = "swipe", e2.Move = "move", e2.MoveLeft = "moveLeft", e2.MoveRight = "moveRight", e2.MoveUp = "moveUp", e2.MoveDown = "moveDown", e2.RotateCCW = "rotateCCW", e2.RotateCW = "rotateCW", e2.FlipX = "flipX", e2.FlipY = "flipY", e2.ToggleFS = "toggleFS";
    })(v$1 || (v$1 = {})), (function(e2) {
      e2.Cover = "cover", e2.Full = "full", e2.Max = "max";
    })(b$1 || (b$1 = {}));
    const y$1 = { x: 0, y: 0, scale: 1, angle: 0, flipX: 1, flipY: 1 }, x = { bounds: true, classes: { container: "f-panzoom", wrapper: "f-panzoom__wrapper", content: "f-panzoom__content", viewport: "f-panzoom__viewport" }, clickAction: v$1.ToggleFull, dblClickAction: false, gestures: {}, height: "auto", l10n: e$5, maxScale: 4, minScale: 1, mouseMoveFactor: 1, panMode: "drag", protected: false, singleClickAction: false, spinnerTpl: '<div class="f-spinner"></div>', wheelAction: v$1.Zoom, width: "auto" };
    let w, M$2 = 0, k$1 = 0, j = 0;
    const E$1 = (c2, b2 = {}, E2 = {}) => {
      let S, O2, C, T, A, F, Z, L, P = 0, X = Object.assign(Object.assign({}, x), b2), Y = {}, R2 = Object.assign({}, y$1), z2 = Object.assign({}, y$1);
      const D2 = [];
      function I2(e2) {
        let t2 = X[e2];
        return t2 && "function" == typeof t2 ? t2(je) : t2;
      }
      function W() {
        return c2 && c2.parentElement && S && 3 === P;
      }
      const q = /* @__PURE__ */ new Map();
      function H2(e2, ...t2) {
        const n2 = [...q.get(e2) || []];
        X.on && n2.push(X.on[e2]);
        for (const e3 of n2) e3 && e3 instanceof Function && e3(je, ...t2);
        "*" !== e2 && H2("*", e2, ...t2);
      }
      function $2(e2) {
        if (!W()) return;
        const t2 = e2.target;
        if (n$7(t2)) return;
        const o2 = Date.now(), a2 = [-e2.deltaX || 0, -e2.deltaY || 0, -e2.detail || 0].reduce((function(e3, t3) {
          return Math.abs(t3) > Math.abs(e3) ? t3 : e3;
        })), s2 = t$7(-1, a2, 1);
        H2("wheel", e2, s2);
        const r2 = I2("wheelAction");
        if (!r2) return;
        if (e2.defaultPrevented) return;
        const l2 = z2.scale;
        let c3 = l2 * (s2 > 0 ? 1.5 : 0.5);
        if (r2 === v$1.Zoom) {
          const t3 = Math.abs(e2.deltaY) < 100 && Math.abs(e2.deltaX) < 100;
          if (o2 - k$1 < (t3 ? 200 : 45)) return void h$1(e2);
          k$1 = o2;
          const n2 = ne(), a3 = se();
          if (m$1(c3) < m$1(n2) && m$1(l2) <= m$1(n2) ? (j += Math.abs(s2), c3 = n2) : m$1(c3) > m$1(a3) && m$1(l2) >= m$1(a3) ? (j += Math.abs(s2), c3 = a3) : (j = 0, c3 = t$7(n2, c3, a3)), j > 7) return;
        }
        switch (h$1(e2), r2) {
          case v$1.Pan:
            ue(r2, { srcEvent: e2, deltaX: 2 * -e2.deltaX, deltaY: 2 * -e2.deltaY });
            break;
          case v$1.Zoom:
            ue(v$1.ZoomTo, { srcEvent: e2, scale: c3, center: { x: e2.clientX, y: e2.clientY } });
            break;
          default:
            ue(r2, { srcEvent: e2 });
        }
      }
      function _2(e2) {
        var n2, o2;
        const i2 = e2.composedPath()[0];
        if (!f.isClickAllowed()) return;
        if (!n$8(i2) || e2.defaultPrevented) return;
        if (!(null == c2 ? void 0 : c2.contains(i2))) return;
        if (i2.hasAttribute("disabled") || i2.hasAttribute("aria-disabled")) return;
        const a2 = i2.closest("[data-panzoom-action]"), s2 = null === (n2 = null == a2 ? void 0 : a2.dataset) || void 0 === n2 ? void 0 : n2.panzoomAction, r2 = (null === (o2 = null == a2 ? void 0 : a2.dataset) || void 0 === o2 ? void 0 : o2.panzoomValue) || "";
        if (s2) {
          switch (h$1(e2), s2) {
            case v$1.ZoomTo:
            case v$1.ZoomIn:
            case v$1.ZoomOut:
              ue(s2, { scale: parseFloat(r2 || "") || void 0 });
              break;
            case v$1.MoveLeft:
            case v$1.MoveRight:
              ue(s2, { deltaX: parseFloat(r2 || "") || void 0 });
              break;
            case v$1.MoveUp:
            case v$1.MoveDown:
              ue(s2, { deltaY: parseFloat(r2 || "") || void 0 });
              break;
            case v$1.ToggleFS:
              Me();
              break;
            default:
              ue(s2);
          }
          return;
        }
        if (!(null == S ? void 0 : S.contains(i2))) return;
        const u2 = { srcEvent: e2 };
        if (ue(I2("clickAction"), u2), I2("dblClickAction")) {
          const e3 = Date.now(), t2 = e3 - (M$2 || e3);
          M$2 = e3, t2 > 0 && t2 <= 250 ? (w && (clearTimeout(w), w = void 0), ue(I2("dblClickAction"), u2)) : w = setTimeout((() => {
            ue(I2("singleClickAction"), u2);
          }), 250);
        }
      }
      function B2(e2) {
        if (L = e2, !W() || !Q()) return;
        if (R2.scale <= 1 || z2.scale <= 1) return;
        if (((null == S ? void 0 : S.dataset.animationName) || "").indexOf("zoom") > -1) return;
        const t2 = ee(z2.scale);
        if (!t2) return;
        const { x: n2, y: o2 } = t2;
        ue(v$1.Pan, { deltaX: n2 - z2.x, deltaY: o2 - z2.y });
      }
      function N2() {
        var e2;
        c2 && (s$6(c2, "is-loading"), null === (e2 = c2.querySelector(".f-spinner")) || void 0 === e2 || e2.remove());
      }
      function V() {
        if (!c2 || !O2) return;
        if (N2(), p(O2) && (!O2.complete || !O2.naturalWidth)) return P = 2, null == S || S.classList.add("has-error"), void H2("error");
        H2("loaded");
        const { width: e2, height: t2 } = J();
        p(O2) && (O2.setAttribute("width", e2 + ""), O2.setAttribute("height", t2 + "")), S && (s$6(S, "has-error"), p(O2) && (S.setAttribute("width", e2 + ""), S.setAttribute("height", t2 + ""), S.style.aspectRatio = `${e2 / t2 || ""}`)), F = c$2().on("start", ((e3, t3) => {
          void 0 !== t3.angle && (t3.angle = 90 * Math.round(t3.angle / 90)), void 0 !== t3.flipX && (t3.flipX = t3.flipX > 0 ? 1 : -1), void 0 !== t3.flipY && (t3.flipY = t3.flipY > 0 ? 1 : -1), z2 = Object.assign(Object.assign({}, y$1), t3), ce(), H2("animationStart");
        })).on("pause", ((e3) => {
          z2 = Object.assign(Object.assign({}, y$1), e3);
        })).on("step", ((e3) => {
          if (!W()) return void (null == F || F.end());
          if (R2 = Object.assign(Object.assign({}, y$1), e3), Q() || !I2("bounds") || ye() || z2.scale > R2.scale || z2.scale < oe()) return void de();
          const t3 = re(z2.scale);
          let n3 = false, o2 = false, a2 = false, s2 = false;
          R2.x < t3.x[0] && (n3 = true), R2.x > t3.x[1] && (o2 = true), R2.y < t3.y[0] && (s2 = true), R2.y > t3.y[1] && (a2 = true);
          let r2 = false, l2 = false, c3 = false, u2 = false;
          z2.x < t3.x[0] && (r2 = true), z2.x > t3.x[1] && (l2 = true), z2.y < t3.y[0] && (u2 = true), z2.y > t3.y[1] && (c3 = true);
          let d2 = false;
          (o2 && l2 || n3 && r2) && (z2.x = t$7(t3.x[0], z2.x, t3.x[1]), d2 = true), (a2 && c3 || s2 && u2) && (z2.y = t$7(t3.y[0], z2.y, t3.y[1]), d2 = true), d2 && F && F.spring({ tension: 94, friction: 17, maxSpeed: 555 * z2.scale, restDelta: 0.1, restSpeed: 0.1, velocity: F.getCurrentVelocities() }).from(R2).to(z2).start(), de();
        })).on("end", (() => {
          (null == A ? void 0 : A.isPointerDown()) || le(), (null == F ? void 0 : F.isRunning()) || (ce(), H2("animationEnd"));
        })), (function() {
          const e3 = I2("gestures");
          if (!e3) return;
          if (!T || !O2) return;
          let t3 = false;
          A = f(T, e3).on("start", ((e4) => {
            if (!I2("gestures")) return;
            if (!F) return;
            if (!W() || Q()) return;
            const n3 = e4.srcEvent;
            (R2.scale > 1 || e4.currentTouch.length > 1) && (null == n3 || n3.stopPropagation(), F.pause(), t3 = true), 1 === e4.currentTouch.length && H2("touchStart");
          })).on("move", ((e4) => {
            var n3;
            t3 && (1 !== z2.scale || e4.currentTouch.length > 1) && (h$1(e4.srcEvent), null === (n3 = e4.srcEvent) || void 0 === n3 || n3.stopPropagation());
          })).on("pan", ((e4) => {
            if (!t3) return;
            const n3 = e4.srcEvent;
            (1 !== z2.scale || e4.currentTouch.length > 1) && (h$1(n3), ue(v$1.Pan, e4));
          })).on("swipe", ((e4) => {
            t3 && z2.scale > 1 && ue(v$1.Swipe, e4);
          })).on("tap", ((e4) => {
            H2("click", e4);
          })).on("singleTap", ((e4) => {
            H2("singleClick", e4);
          })).on("doubleTap", ((e4) => {
            H2("dblClick", e4);
          })).on("pinch", ((e4) => {
            t3 && (e4.scale > oe() ? ue(v$1.ZoomIn, e4) : e4.scale < oe() ? ue(v$1.ZoomOut, e4) : ue(v$1.Pan, e4));
          })).on("end", ((e4) => {
            t3 && (e4.currentTouch.length ? (e4.srcEvent.stopPropagation(), h$1(e4.srcEvent), null == F || F.end()) : (t3 = false, ce(), le(), H2("touchEnd")));
          })).init();
        })(), T && (T.addEventListener("wheel", $2, { passive: false }), D2.push((() => {
          null == T || T.removeEventListener("wheel", $2, { passive: false });
        }))), null == c2 || c2.addEventListener("click", _2), null === document || void 0 === document || document.addEventListener("mousemove", B2), D2.push((() => {
          null == c2 || c2.removeEventListener("click", _2), null === document || void 0 === document || document.removeEventListener("mousemove", B2);
        }));
        const n2 = U();
        R2 = Object.assign({}, n2), z2 = Object.assign({}, n2), P = 3, de(), ce(), H2("ready"), requestAnimationFrame((() => {
          N2(), T && (T.style.visibility = "");
        }));
      }
      function U() {
        const e2 = Object.assign({}, I2("startPos") || {});
        let t2 = e2.scale, n2 = 1;
        n2 = "string" == typeof t2 ? te(t2) : "number" == typeof t2 ? t2 : oe();
        const o2 = Object.assign(Object.assign(Object.assign({}, y$1), e2), { scale: n2 }), i2 = Q() ? ee(n2) : void 0;
        if (i2) {
          const { x: e3, y: t3 } = i2;
          o2.x = e3, o2.y = t3;
        }
        return o2;
      }
      function G() {
        const e2 = { top: 0, left: 0, width: 0, height: 0 };
        if (S) {
          const t2 = S.getBoundingClientRect();
          z2.angle % 180 == 90 ? (e2.top = t2.top + 0.5 * t2.height - 0.5 * t2.width, e2.left = t2.left + 0.5 * t2.width - 0.5 * t2.height, e2.width = t2.height, e2.height = t2.width) : (e2.top = t2.top, e2.left = t2.left, e2.width = t2.width, e2.height = t2.height);
        }
        return e2;
      }
      function J() {
        let t2 = I2("width"), n2 = I2("height");
        if (O2 && "auto" === t2) {
          const e2 = O2.getAttribute("width");
          t2 = e2 ? parseFloat(e2 + "") : void 0 !== O2.dataset.width ? parseFloat(O2.dataset.width + "") : p(T) ? T.naturalWidth : p(O2) ? O2.naturalWidth : O2.getBoundingClientRect().width;
        } else t2 = t$8(t2) ? parseFloat(t2) : t2;
        if (O2 && "auto" === n2) {
          const e2 = O2.getAttribute("height");
          n2 = e2 ? parseFloat(e2 + "") : void 0 !== O2.dataset.height ? parseFloat(O2.dataset.height + "") : p(T) ? T.naturalHeight : p(O2) ? O2.naturalHeight : O2.getBoundingClientRect().height;
        } else n2 = t$8(n2) ? parseFloat(n2) : n2;
        return { width: t2, height: n2 };
      }
      function K() {
        const e2 = G();
        return { width: e2.width, height: e2.height };
      }
      function Q() {
        return "mousemove" === I2("panMode") && matchMedia("(hover: hover)").matches;
      }
      function ee(e2) {
        const t2 = L || I2("event"), n2 = null == S ? void 0 : S.getBoundingClientRect();
        if (!t2 || !n2 || e2 <= 1) return { x: 0, y: 0 };
        const o2 = (t2.clientX || 0) - n2.left, a2 = (t2.clientY || 0) - n2.top, { width: s2, height: r2 } = K(), l2 = re(e2);
        if (e2 > 1) {
          const t3 = I2("mouseMoveFactor");
          t3 > 1 && (e2 *= t3);
        }
        let c3 = s2 * e2, u2 = r2 * e2, d2 = 0.5 * (c3 - s2) - o2 / s2 * 100 / 100 * (c3 - s2), f2 = 0.5 * (u2 - r2) - a2 / r2 * 100 / 100 * (u2 - r2);
        return d2 = t$7(l2.x[0], d2, l2.x[1]), f2 = t$7(l2.y[0], f2, l2.y[1]), { x: d2, y: f2 };
      }
      function te(e2 = "base") {
        if (!c2) return 1;
        const t2 = c2.getBoundingClientRect(), n2 = G(), { width: o2, height: a2 } = J(), s2 = (e3) => {
          if ("number" == typeof e3) return e3;
          switch (e3) {
            case "min":
            case "base":
              return 1;
            case "cover":
              return Math.max(t2.height / n2.height, t2.width / n2.width) || 1;
            case "full":
            case "max": {
              const e4 = z2.angle % 180 == 90 ? a2 : o2;
              return e4 && n2.width ? e4 / n2.width : 1;
            }
          }
        }, r2 = I2("minScale"), l2 = I2("maxScale"), u2 = Math.min(s2("full"), s2(r2)), d2 = "number" == typeof l2 ? s2("full") * l2 : Math.min(s2("full"), s2(l2));
        switch (e2) {
          case "min":
            return u2;
          case "base":
            return t$7(u2, 1, d2);
          case "cover":
            return s2("cover");
          case "full":
            return Math.min(d2, s2("full"));
          case "max":
            return d2;
        }
      }
      function ne() {
        return te("min");
      }
      function oe() {
        return te("base");
      }
      function ie() {
        return te("cover");
      }
      function ae() {
        return te("full");
      }
      function se() {
        return te("max");
      }
      function re(e2) {
        const t2 = { x: [0, 0], y: [0, 0] }, n2 = null == c2 ? void 0 : c2.getBoundingClientRect();
        if (!n2) return t2;
        const o2 = G(), i2 = n2.width, a2 = n2.height;
        let s2 = o2.width, r2 = o2.height, l2 = e2 = void 0 === e2 ? z2.scale : e2, u2 = e2;
        if (Q() && e2 > 1) {
          const t3 = I2("mouseMoveFactor");
          t3 > 1 && (s2 * e2 > i2 + 0.01 && (l2 *= t3), r2 * e2 > a2 + 0.01 && (u2 *= t3));
        }
        return s2 *= l2, r2 *= u2, e2 > 1 && (s2 > i2 && (t2.x[0] = 0.5 * (i2 - s2), t2.x[1] = 0.5 * (s2 - i2)), t2.x[0] -= 0.5 * (o2.left - n2.left), t2.x[1] -= 0.5 * (o2.left - n2.left), t2.x[0] -= 0.5 * (o2.left + o2.width - n2.right), t2.x[1] -= 0.5 * (o2.left + o2.width - n2.right), r2 > a2 && (t2.y[0] = 0.5 * (a2 - r2), t2.y[1] = 0.5 * (r2 - a2)), t2.y[0] -= 0.5 * (o2.top - n2.top), t2.y[1] -= 0.5 * (o2.top - n2.top), t2.y[0] -= 0.5 * (o2.top + o2.height - n2.bottom), t2.y[1] -= 0.5 * (o2.top + o2.height - n2.bottom)), t2;
      }
      function le() {
        if (!W()) return;
        if (!I2("bounds")) return;
        if (!F) return;
        const e2 = ne(), t2 = se(), n2 = t$7(e2, z2.scale, t2);
        if (z2.scale < e2 - 0.01 || z2.scale > t2 + 0.01) return void ue(v$1.ZoomTo, { scale: n2 });
        if (F.isRunning()) return;
        if (ye()) return;
        const o2 = re(n2);
        z2.x < o2.x[0] || z2.x > o2.x[1] || z2.y < o2.y[0] || z2.y > o2.y[1] ? (z2.x = t$7(o2.x[0], z2.x, o2.x[1]), z2.y = t$7(o2.y[0], z2.y, o2.y[1]), F.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: F.getCurrentVelocities() }), F.from(R2).to(z2).start()) : de();
      }
      function ce(e2) {
        var t2;
        if (!W()) return;
        const n2 = be(), o2 = ye(), i2 = xe(), a2 = we(), s2 = ge(), r2 = he();
        s$5(S, "is-fullsize", a2), s$5(S, "is-expanded", i2), s$5(S, "is-dragging", o2), s$5(S, "can-drag", n2), s$5(S, "will-zoom-in", s2), s$5(S, "will-zoom-out", r2);
        const l2 = pe(), u2 = ve(), d2 = me(), g = !W();
        for (const n3 of (null === (t2 = e2 || c2) || void 0 === t2 ? void 0 : t2.querySelectorAll("[data-panzoom-action]")) || []) {
          const e3 = n3.dataset.panzoomAction;
          let t3 = false;
          if (g) t3 = true;
          else switch (e3) {
            case v$1.ZoomIn:
              l2 || (t3 = true);
              break;
            case v$1.ZoomOut:
              d2 || (t3 = true);
              break;
            case v$1.ToggleFull: {
              u2 || d2 || (t3 = true);
              const e4 = n3.querySelector("g");
              e4 && (e4.style.display = a2 && !t3 ? "none" : "");
              break;
            }
            case v$1.IterateZoom: {
              l2 || d2 || (t3 = true);
              const e4 = n3.querySelector("g");
              e4 && (e4.style.display = l2 || t3 ? "" : "none");
              break;
            }
            case v$1.ToggleCover:
            case v$1.ToggleMax:
              l2 || d2 || (t3 = true);
          }
          t3 ? (n3.setAttribute("aria-disabled", ""), n3.setAttribute("tabindex", "-1")) : (n3.removeAttribute("aria-disabled"), n3.removeAttribute("tabindex"));
        }
      }
      function ue(e2, t2) {
        var n2;
        if (!(e2 && c2 && O2 && F && W())) return;
        if (e2 === v$1.Swipe && Math.abs(F.getCurrentVelocities().scale) > 0.01) return;
        const o2 = Object.assign({}, z2);
        let a2 = Object.assign({}, z2), l2 = re(Q() ? o2.scale : R2.scale);
        const u2 = F.getCurrentVelocities(), d2 = G(), f2 = ((null === (n2 = (t2 = t2 || {}).currentTouch) || void 0 === n2 ? void 0 : n2.length) || 0) > 1, h2 = t2.velocityX || 0, m2 = t2.velocityY || 0;
        let p2 = t2.center;
        t2.srcEvent && (p2 = i$4(s$8(t2.srcEvent)));
        let b3 = t2.deltaX || 0, x2 = t2.deltaY || 0;
        switch (e2) {
          case v$1.MoveRight:
            b3 = t2.deltaX || 100;
            break;
          case v$1.MoveLeft:
            b3 = t2.deltaX || -100;
            break;
          case v$1.MoveUp:
            x2 = t2.deltaY || -100;
            break;
          case v$1.MoveDown:
            x2 = t2.deltaY || 100;
        }
        let w2 = [];
        switch (e2) {
          case v$1.Reset:
            a2 = Object.assign({}, y$1), a2.scale = oe();
            break;
          case v$1.Pan:
          case v$1.Move:
          case v$1.MoveLeft:
          case v$1.MoveRight:
          case v$1.MoveUp:
          case v$1.MoveDown:
            if (ye()) {
              let e4 = 1, t3 = 1;
              a2.x <= l2.x[0] && h2 <= 0 && (e4 = Math.max(0.01, 1 - Math.abs(1 / d2.width * Math.abs(a2.x - l2.x[0]))), e4 *= 0.2), a2.x >= l2.x[1] && h2 >= 0 && (e4 = Math.max(0.01, 1 - Math.abs(1 / d2.width * Math.abs(a2.x - l2.x[1]))), e4 *= 0.2), a2.y <= l2.y[0] && m2 <= 0 && (t3 = Math.max(0.01, 1 - Math.abs(1 / d2.height * Math.abs(a2.y - l2.y[0]))), t3 *= 0.2), a2.y >= l2.y[1] && m2 >= 0 && (t3 = Math.max(0.01, 1 - Math.abs(1 / d2.height * Math.abs(a2.y - l2.y[1]))), t3 *= 0.2), a2.x += b3 * e4, a2.y += x2 * t3;
            } else a2.x = t$7(l2.x[0], a2.x + b3, l2.x[1]), a2.y = t$7(l2.y[0], a2.y + x2, l2.y[1]);
            break;
          case v$1.Swipe:
            const e3 = (e4 = 0) => Math.sign(e4) * Math.pow(Math.abs(e4), 1.5);
            a2.x += t$7(-1e3, e3(h2), 1e3), a2.y += t$7(-1e3, e3(m2), 1e3), m2 && !h2 && (a2.x = t$7(l2.x[0], a2.x, l2.x[1])), !m2 && h2 && (a2.y = t$7(l2.y[0], a2.y, l2.y[1])), u2.x = h2, u2.y = m2;
            break;
          case v$1.ZoomTo:
            a2.scale = t2.scale || 1;
            break;
          case v$1.ZoomIn:
            a2.scale = a2.scale * (t2.scale || 2), f2 || (a2.scale = Math.min(a2.scale, se()));
            break;
          case v$1.ZoomOut:
            a2.scale = a2.scale * (t2.scale || 0.5), f2 || (a2.scale = Math.max(a2.scale, ne()));
            break;
          case v$1.ToggleCover:
            w2 = [oe(), ie()];
            break;
          case v$1.ToggleFull:
            w2 = [oe(), ae()];
            break;
          case v$1.ToggleMax:
            w2 = [oe(), se()];
            break;
          case v$1.IterateZoom:
            w2 = [oe(), ae(), se()];
            break;
          case v$1.Zoom:
            const n3 = ae();
            a2.scale >= n3 - 0.05 ? a2.scale = oe() : a2.scale = Math.min(n3, a2.scale * (t2.scale || 2));
            break;
          case v$1.RotateCW:
            a2.angle += 90;
            break;
          case v$1.RotateCCW:
            a2.angle -= 90;
            break;
          case v$1.FlipX:
            a2.flipX *= -1;
            break;
          case v$1.FlipY:
            a2.flipY *= -1;
        }
        if (void 0 !== R2.angle && Math.abs(R2.angle) >= 360 && (a2.angle -= 360 * Math.floor(R2.angle / 360), R2.angle -= 360 * Math.floor(R2.angle / 360)), w2.length) {
          const e3 = w2.findIndex(((e4) => e4 > a2.scale + 1e-4));
          a2.scale = w2[e3] || w2[0];
        }
        if (f2 && (a2.scale = t$7(ne() * (f2 ? 0.8 : 1), a2.scale, se() * (f2 ? 1.6 : 1))), Q()) {
          const e3 = ee(a2.scale);
          if (e3) {
            const { x: t3, y: n3 } = e3;
            a2.x = t3, a2.y = n3;
          }
        } else if (Math.abs(a2.scale - o2.scale) > 1e-4) {
          let e3 = 0, t3 = 0;
          if (p2) e3 = p2.x, t3 = p2.y;
          else {
            const n4 = c2.getBoundingClientRect();
            e3 = n4.x + 0.5 * n4.width, t3 = n4.y + 0.5 * n4.height;
          }
          let n3 = e3 - d2.left, s2 = t3 - d2.top;
          n3 -= 0.5 * d2.width, s2 -= 0.5 * d2.height;
          const r2 = (n3 - o2.x) / o2.scale, u3 = (s2 - o2.y) / o2.scale;
          a2.x = n3 - r2 * a2.scale, a2.y = s2 - u3 * a2.scale, !f2 && I2("bounds") && (l2 = re(a2.scale), a2.x = t$7(l2.x[0], a2.x, l2.x[1]), a2.y = t$7(l2.y[0], a2.y, l2.y[1]));
        }
        if (e2 === v$1.Swipe) {
          let e3 = 94, t3 = 17, n3 = 500 * a2.scale, o3 = u2;
          F.spring({ tension: e3, friction: t3, maxSpeed: n3, restDelta: 0.1, restSpeed: 0.1, velocity: o3 });
        } else e2 === v$1.Pan || f2 ? F.spring({ tension: 900, friction: 17, restDelta: 0.01, restSpeed: 0.01, maxSpeed: 1 }) : F.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: u2 });
        if (0 === t2.velocity || n$6(R2, a2)) R2 = Object.assign({}, a2), z2 = Object.assign({}, a2), F.end(), de(), ce();
        else {
          if (n$6(z2, a2)) return;
          F.from(R2).to(a2).start();
        }
        H2("action", e2);
      }
      function de() {
        if (!O2 || !S || !T) return;
        const { width: e2, height: t2 } = J();
        Object.assign(S.style, { maxWidth: `min(${e2}px, 100%)`, maxHeight: `min(${t2}px, 100%)` });
        const n2 = (function() {
          const { width: e3, height: t3 } = J(), { width: n3, height: o3 } = K();
          if (!c2) return { x: 0, y: 0, width: 0, height: 0, scale: 0, flipX: 0, flipY: 0, angle: 0, fitWidth: n3, fitHeight: o3, fullWidth: e3, fullHeight: t3 };
          let { x: i3, y: a3, scale: s3, angle: r3, flipX: l3, flipY: u3 } = R2, d3 = 1 / ae(), f3 = e3, g = t3, h2 = R2.scale * d3, m2 = z2.scale * d3;
          const p2 = Math.max(n3, o3), v2 = Math.min(n3, o3);
          e3 > t3 ? (f3 = p2, g = v2) : (f3 = v2, g = p2);
          h2 = e3 > t3 ? p2 * s3 / e3 || 1 : p2 * s3 / t3 || 1;
          let b3 = f3 ? e3 * m2 : 0, y2 = g ? t3 * m2 : 0, x2 = f3 && g ? e3 * h2 / b3 : 0;
          return i3 = i3 + 0.5 * f3 - 0.5 * b3, a3 = a3 + 0.5 * g - 0.5 * y2, { x: i3, y: a3, width: b3, height: y2, scale: x2, flipX: l3, flipY: u3, angle: r3, fitWidth: n3, fitHeight: o3, fullWidth: e3, fullHeight: t3 };
        })(), { x: o2, y: i2, width: a2, height: s2, scale: r2, angle: l2, flipX: u2, flipY: d2 } = n2;
        let f2 = `translate(${m$1(o2)}px, ${m$1(i2)}px)`;
        f2 += 1 !== u2 || 1 !== d2 ? ` scaleX(${m$1(r2 * u2)}) scaleY(${m$1(r2 * d2)})` : ` scale(${m$1(r2)})`, 0 !== l2 && (f2 += ` rotate(${l2}deg)`), T.style.width = `${m$1(a2)}px`, T.style.height = `${m$1(s2)}px`, T.style.transform = `${f2}`, H2("render");
      }
      function fe() {
        let e2 = z2.scale;
        const t2 = I2("clickAction");
        let n2 = oe();
        if (t2) {
          let o2 = [];
          switch (t2) {
            case v$1.ZoomIn:
              n2 = 2 * e2;
              break;
            case v$1.ZoomOut:
              n2 = 0.5 * e2;
              break;
            case v$1.ToggleCover:
              o2 = [oe(), ie()];
              break;
            case v$1.ToggleFull:
              o2 = [oe(), ae()];
              break;
            case v$1.ToggleMax:
              o2 = [oe(), se()];
              break;
            case v$1.IterateZoom:
              o2 = [oe(), ae(), se()];
              break;
            case v$1.Zoom:
              const t3 = ae();
              n2 = e2 >= t3 - 0.05 ? oe() : Math.min(t3, 2 * e2);
          }
          if (o2.length) {
            const t3 = o2.findIndex(((t4) => t4 > e2 + 1e-4));
            n2 = o2[t3] || oe();
          }
        }
        return n2 = t$7(ne(), n2, se()), n2;
      }
      function ge() {
        return !!(W() && fe() > z2.scale);
      }
      function he() {
        return !!(W() && fe() < z2.scale);
      }
      function me() {
        return !!(W() && z2.scale > ne());
      }
      function pe() {
        return !!(W() && z2.scale < se());
      }
      function ve() {
        return !!(W() && z2.scale < ae());
      }
      function be() {
        return !(!(W() && xe() && A) || Q());
      }
      function ye() {
        return !(!W() || !(null == A ? void 0 : A.isPointerDown()) || Q());
      }
      function xe() {
        return !!(W() && z2.scale > oe());
      }
      function we() {
        return !!(W() && z2.scale >= ae());
      }
      function Me() {
        const e2 = "in-fullscreen", t2 = "with-panzoom-in-fullscreen";
        null == c2 || c2.classList.toggle(e2);
        const n2 = null == c2 ? void 0 : c2.classList.contains(e2);
        n2 ? (document.documentElement.classList.add(t2), document.addEventListener("keydown", ke, true)) : (document.documentElement.classList.remove(t2), document.removeEventListener("keydown", ke, true)), de(), H2(n2 ? "enterFS" : "exitFS");
      }
      function ke(e2) {
        "Escape" !== e2.key || e2.defaultPrevented || Me();
      }
      const je = { canDrag: be, canZoomIn: pe, canZoomOut: me, canZoomToFull: ve, destroy: function() {
        H2("destroy");
        for (const e2 of Object.values(Y)) null == e2 || e2.destroy(je);
        for (const e2 of D2) e2();
        return S && (S.style.aspectRatio = "", S.style.maxWidth = "", S.style.maxHeight = ""), T && (T.style.width = "", T.style.height = "", T.style.transform = ""), S = void 0, O2 = void 0, T = void 0, R2 = Object.assign({}, y$1), z2 = Object.assign({}, y$1), null == F || F.destroy(), F = void 0, null == A || A.destroy(), A = void 0, P = 4, je;
      }, emit: H2, execute: ue, getBoundaries: re, getContainer: function() {
        return c2;
      }, getContent: function() {
        return O2;
      }, getFullDim: J, getGestures: function() {
        return A;
      }, getMousemovePos: ee, getOptions: function() {
        return X;
      }, getPlugins: function() {
        return Y;
      }, getScale: te, getStartPosition: U, getState: function() {
        return P;
      }, getTransform: function(e2) {
        return true === e2 ? z2 : R2;
      }, getTween: function() {
        return F;
      }, getViewport: function() {
        return T;
      }, getWrapper: function() {
        return S;
      }, init: function() {
        return P = 0, H2("init"), (function() {
          for (const [e2, t2] of Object.entries(Object.assign(Object.assign({}, E2), X.plugins || {}))) if (e2 && !Y[e2] && t2 instanceof Function) {
            const n2 = t2();
            n2.init(je), Y[e2] = n2;
          }
          H2("initPlugins");
        })(), (function() {
          const e2 = Object.assign(Object.assign({}, x.classes), I2("classes"));
          if (!c2) return;
          if (s$7(c2, e2.container), O2 = c2.querySelector("." + e2.content), !O2) return;
          O2.setAttribute("draggable", "false"), S = c2.querySelector("." + e2.wrapper), S || (S = document.createElement("div"), s$7(S, e2.wrapper), O2.insertAdjacentElement("beforebegin", S), S.insertAdjacentElement("afterbegin", O2));
          T = c2.querySelector("." + e2.viewport), T || (T = document.createElement("div"), s$7(T, e2.viewport), T.insertAdjacentElement("afterbegin", O2), S.insertAdjacentElement("beforeend", T));
          C = O2.cloneNode(true), C.removeAttribute("id"), S.insertAdjacentElement("afterbegin", C), O2 instanceof HTMLPictureElement && (O2 = O2.querySelector("img"));
          C instanceof HTMLPictureElement && (C = C.querySelector("img"));
          T instanceof HTMLPictureElement && (T = T.querySelector("img"));
          if (T && (T.style.visibility = "hidden", I2("protected"))) {
            T.addEventListener("contextmenu", ((e4) => {
              h$1(e4);
            }));
            const e3 = document.createElement("div");
            s$7(e3, "f-panzoom__protected"), T.appendChild(e3);
          }
          H2("initLayout");
        })(), (function() {
          if (c2 && S && !Z) {
            let e2 = null;
            Z = new ResizeObserver((() => {
              W() && (e2 = e2 || requestAnimationFrame((() => {
                W() && (ce(), le(), H2("refresh")), e2 = null;
              })));
            })), Z.observe(S), D2.push((() => {
              null == Z || Z.disconnect(), Z = void 0, e2 && (cancelAnimationFrame(e2), e2 = null);
            }));
          }
        })(), (function() {
          if (!c2 || !O2) return;
          if (!p(O2) || !p(C)) return void V();
          const e2 = () => {
            O2 && p(O2) && O2.decode().then((() => {
              V();
            })).catch((() => {
              V();
            }));
          };
          if (P = 1, c2.classList.add("is-loading"), H2("loading"), C.src && C.complete) return void e2();
          (function() {
            if (!c2) return;
            if (null == c2 ? void 0 : c2.querySelector(".f-spinner")) return;
            const e3 = I2("spinnerTpl"), t2 = e$9(e3);
            t2 && (t2.classList.add("f-spinner"), c2.classList.add("is-loading"), null == S || S.insertAdjacentElement("afterbegin", t2));
          })(), C.addEventListener("load", e2, false), C.addEventListener("error", e2, false), D2.push((() => {
            null == C || C.removeEventListener("load", e2, false), null == C || C.removeEventListener("error", e2, false);
          }));
        })(), je;
      }, isDragging: ye, isExpanded: xe, isFullsize: we, isMousemoveMode: Q, localize: function(e2, t2 = []) {
        const n2 = I2("l10n") || {};
        e2 = String(e2).replace(/\{\{(\w+)\}\}/g, ((e3, t3) => n2[t3] || e3));
        for (let n3 = 0; n3 < t2.length; n3++) e2 = e2.split(t2[n3][0]).join(t2[n3][1]);
        return e2 = e2.replace(/\{\{(.*?)\}\}/g, ((e3, t3) => t3));
      }, off: function(e2, t2) {
        for (const n2 of e2 instanceof Array ? e2 : [e2]) q.has(n2) && q.set(n2, q.get(n2).filter(((e3) => e3 !== t2)));
        return je;
      }, on: function(e2, t2) {
        for (const n2 of e2 instanceof Array ? e2 : [e2]) q.set(n2, [...q.get(n2) || [], t2]);
        return je;
      }, toggleFS: Me, updateControls: ce, version: "6.0.34", willZoomIn: ge, willZoomOut: he };
      return je;
    };
    E$1.l10n = { en_EN: e$5 }, E$1.getDefaults = () => x;
    /*! License details at fancyapps.com/license */
    const e$4 = (e2, o2) => {
      let t2 = [];
      return e2.childNodes.forEach(((e3) => {
        e3.nodeType !== Node.ELEMENT_NODE || o2 && !e3.matches(o2) || t2.push(e3);
      })), t2;
    };
    /*! License details at fancyapps.com/license */
    const r$4 = (t2, ...e2) => {
      const n2 = e2.length;
      for (let c2 = 0; c2 < n2; c2++) {
        const n3 = e2[c2] || {};
        Object.entries(n3).forEach((([e3, n4]) => {
          const c3 = Array.isArray(n4) ? [] : {};
          t2[e3] || Object.assign(t2, { [e3]: c3 }), t$6(n4) ? Object.assign(t2[e3], r$4(t2[e3], n4)) : Array.isArray(n4) ? Object.assign(t2, { [e3]: [...n4] }) : Object.assign(t2, { [e3]: n4 });
        }));
      }
      return t2;
    };
    /*! License details at fancyapps.com/license */
    const t$4 = function(t2 = 0, n2 = 0, r2 = 0, c2 = 0, m2 = 0, p2 = false) {
      const s2 = (t2 - n2) / (r2 - n2) * (m2 - c2) + c2;
      return p2 ? c2 < m2 ? t$7(c2, s2, m2) : t$7(m2, s2, c2) : s2;
    };
    /*! License details at fancyapps.com/license */
    const o$3 = Object.assign(Object.assign({}, e$5), { ERROR: "Something went wrong. <br /> Please try again later.", NEXT: "Next page", PREV: "Previous page", GOTO: "Go to page #%d", DOWNLOAD: "Download", TOGGLE_FULLSCREEN: "Toggle full-screen mode", TOGGLE_EXPAND: "Toggle full-size mode", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_AUTOPLAY: "Toggle slideshow" });
    /*! License details at fancyapps.com/license */
    const m = (e2) => {
      e2.cancelable && e2.preventDefault();
    }, h = { adaptiveHeight: false, center: true, classes: { container: "f-carousel", isEnabled: "is-enabled", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", hasAdaptiveHeight: "has-adaptive-height", viewport: "f-carousel__viewport", slide: "f-carousel__slide", isSelected: "is-selected" }, dragFree: false, enabled: true, errorTpl: '<div class="f-html">{{ERROR}}</div>', fill: false, infinite: true, initialPage: 0, l10n: o$3, rtl: false, slides: [], slidesPerPage: "auto", spinnerTpl: '<div class="f-spinner"></div>', transition: "fade", tween: { clamp: true, mass: 1, tension: 160, friction: 25, restDelta: 1, restSpeed: 1, velocity: 0 }, vertical: false };
    let b, E = 0;
    const y = (g, x2 = {}, M2 = {}) => {
      E++;
      let w2, S, j2, P, L, A = 0, O2 = Object.assign({}, h), T = Object.assign({}, h), R2 = {}, V = null, C = null, H2 = false, D2 = false, $2 = false, z2 = false, q = "height", k2 = 0, F = true, I2 = 0, B2 = 0, N2 = 0, _2 = 0, G = "*", X = [], Y = [];
      const W = /* @__PURE__ */ new Set();
      let J = [], K = [], Q = 0, U = 0, Z = 0;
      function ee(e2, ...t2) {
        let n2 = T[e2];
        return n2 && n2 instanceof Function ? n2(De, ...t2) : n2;
      }
      function te(e2, t2 = []) {
        const n2 = ee("l10n") || {};
        e2 = String(e2).replace(/\{\{(\w+)\}\}/g, ((e3, t3) => n2[t3] || e3));
        for (let n3 = 0; n3 < t2.length; n3++) e2 = e2.split(t2[n3][0]).join(t2[n3][1]);
        return e2 = e2.replace(/\{\{(.*?)\}\}/g, ((e3, t3) => t3));
      }
      const ne = /* @__PURE__ */ new Map();
      function ie(e2, ...t2) {
        const n2 = [...ne.get(e2) || []];
        T.on && n2.push(T.on[e2]);
        for (const e3 of n2) e3 && e3 instanceof Function && e3(De, ...t2);
        "*" !== e2 && ie("*", e2, ...t2);
      }
      function oe() {
        var t2, n2;
        const i2 = r$4({}, h, O2);
        r$4(i2, h, O2);
        let r2 = "";
        const l2 = O2.breakpoints || {};
        if (l2) for (const [e2, t3] of Object.entries(l2)) window.matchMedia(e2).matches && (r2 += e2, r$4(i2, t3));
        if (void 0 === L || r2 !== L) {
          if (L = r2, 0 !== A) {
            let e2 = null === (n2 = null === (t2 = K[I2]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === n2 ? void 0 : n2.index;
            void 0 === e2 && (e2 = T.initialSlide), i2.initialSlide = e2, i2.slides = [];
            for (const e3 of X) e3.isVirtual && i2.slides.push(e3);
          }
          Ve(), T = i2, false !== T.enabled && (A = 0, ie("init"), (function() {
            for (const [e2, t3] of Object.entries(Object.assign(Object.assign({}, M2), T.plugins || {}))) if (e2 && !R2[e2] && t3 instanceof Function) {
              const n3 = t3();
              n3.init(De, y), R2[e2] = n3;
            }
            ie("initPlugins");
          })(), (function() {
            if (!V) return;
            const t3 = ee("classes") || {};
            s$7(V, t3.container);
            const n3 = ee("style");
            if (n3 && t$6(n3)) for (const [e2, t4] of Object.entries(n3)) V.style.setProperty(e2, t4);
            C = V.querySelector(`.${t3.viewport}`), C || (C = document.createElement("div"), s$7(C, t3.viewport), C.append(...e$4(V, `.${t3.slide}`)), V.insertAdjacentElement("afterbegin", C)), V.carousel = De, ie("initLayout");
          })(), (function() {
            if (!C) return;
            const e2 = ee("classes") || {};
            X = [], [...e$4(C, `.${e2.slide}`)].forEach(((e3) => {
              if (e3.parentElement) {
                const t3 = he(Object.assign({ el: e3, isVirtual: false }, e3.dataset || {}));
                ie("createSlide", t3), X.push(t3);
              }
            })), xe();
            for (const e3 of X) ie("addSlide", e3);
            me(ee("slides"));
            for (const e3 of X) {
              const t3 = e3.el;
              (null == t3 ? void 0 : t3.parentElement) === C && (s$7(t3, T.classes.slide), s$7(t3, e3.class), Oe(e3), ie("attachSlideEl", e3));
            }
            ie("initSlides");
          })(), Me(), (function() {
            if (V && C && (V.addEventListener("click", Pe, { passive: false }), document.addEventListener("mousemove", se), !j2)) {
              let e2 = null;
              j2 = new ResizeObserver(((t3) => {
                e2 || (e2 = requestAnimationFrame((() => {
                  !(function(e3) {
                    var t4;
                    if (!C) return;
                    if (0 === A) {
                      const n4 = null === (t4 = e3[0]) || void 0 === t4 ? void 0 : t4.contentBoxSize[0], i4 = (null == n4 ? void 0 : n4.blockSize) || 0, o3 = (null == n4 ? void 0 : n4.inlineSize) || 0;
                      return Q = i4, U = o3, A = 1, s$7(V, (ee("classes") || {}).isEnabled), Re(), S = c$2().on("start", (() => {
                        w2 && w2.isPointerDown() || (ae(), Re());
                      })).on("step", ((e4) => {
                        const t5 = k2;
                        k2 = e4.pos, k2 !== t5 && (F = false, Re());
                      })).on("end", ((e4) => {
                        (null == w2 ? void 0 : w2.isPointerDown()) || (k2 = e4.pos, S && !D2 && (k2 < N2 || k2 > _2) ? S.spring({ clamp: true, mass: 1, tension: 200, friction: 25, velocity: 0, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: t$7(N2, k2, _2) }).start() : F || (F = true, ie("settle")));
                      })), re(), ce(), void ie("ready");
                    }
                    if (1 !== A) return;
                    const n3 = K.length;
                    Me(), re();
                    const i3 = C.getBoundingClientRect(), o2 = i3.height, s2 = i3.width;
                    n3 > 1 && (z2 && Math.abs(o2 - Q) < 0.5 || !z2 && Math.abs(s2 - U) < 0.5) || (Q = o2, U = s2, z2 && !o2 || !z2 && !s2 || V && C && (n3 === K.length && (null == w2 ? void 0 : w2.isPointerDown()) || (ee("dragFree") && (D2 || k2 > N2 && k2 < _2) ? (ae(), Re()) : Te(I2, { transition: false }))));
                  })(t3), e2 = null;
                })));
              })), j2.observe(C);
            }
          })());
        }
      }
      function se(e2) {
        b = e2;
      }
      function re() {
        if (!C) return;
        const e2 = ee("gestures");
        false !== e2 ? w2 || (w2 = f(C, e2).on("start", ((e3) => {
          var t2, n2;
          if (!S) return;
          const { srcEvent: o2 } = e3;
          z2 && e$6(o2) && !n$7(o2.target) && m(o2), S.pause(), S.getCurrentVelocities().pos = 0;
          const s2 = null === (t2 = K[I2]) || void 0 === t2 ? void 0 : t2.slides[0];
          if (s2 && W.has(s2.index) && s2.el && (k2 = s2.offset || 0, k2 += ((function(e4) {
            const t3 = window.getComputedStyle(e4), n3 = new DOMMatrixReadOnly(t3.transform);
            return { width: n3.m41 || 0, height: n3.m42 || 0 };
          })(s2.el)[q] || 0) * ($2 && !z2 ? 1 : -1)), Se(), !D2) {
            (k2 < N2 || k2 > _2) && S.spring({ clamp: true, mass: 1, tension: 500, friction: 25, velocity: (null === (n2 = S.getCurrentVelocities()) || void 0 === n2 ? void 0 : n2.pos) || 0, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: t$7(N2, k2, _2) }).start();
          }
        })).on("move", ((e3) => {
          var t2, n2;
          const { srcEvent: o2, axis: s2 } = e3, r2 = o2.target;
          if (s2 || (m(o2), o2.stopPropagation(), o2.stopImmediatePropagation()), ("y" === s2 && z2 || "x" === s2 && !z2) && (m(o2), o2.stopPropagation()), !s2) return;
          const { deltaX: l2, deltaY: a2 } = e3;
          if (!S) return;
          if (e$6(o2) && (null === (t2 = o2.touches) || void 0 === t2 ? void 0 : t2.length) > 1) return;
          if ("y" === s2 && !z2 || "x" === s2 && z2) return;
          if (r2 && n$7(r2) && ("x" !== s2 || z2)) return;
          const c2 = $2 && !z2 ? 1 : -1;
          let d2 = z2 ? a2 : l2, u2 = (null == S ? void 0 : S.isRunning()) ? S.getEndValues().pos : k2, f2 = 1;
          D2 || (u2 <= N2 && d2 * c2 < 0 ? (f2 = Math.max(0.01, 1 - Math.abs(1 / ve() * Math.abs(u2 - N2))), f2 *= 0.2) : u2 >= _2 && d2 * c2 > 0 && (f2 = Math.max(0.01, 1 - Math.abs(1 / ve() * Math.abs(u2 - _2))), f2 *= 0.2)), u2 += d2 * f2 * c2, S.spring({ clamp: true, mass: 1, tension: 700, friction: 25, velocity: (null === (n2 = S.getCurrentVelocities()) || void 0 === n2 ? void 0 : n2.pos) || 0, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: u2 }).start();
        })).on("panstart", ((e3) => {
          (null == e3 ? void 0 : e3.axis) === (z2 ? "y" : "x") && s$7(C, "is-dragging");
        })).on("panend", (() => {
          s$6(C, "is-dragging");
        })).on("end", ((e3) => {
          var t2, n2;
          const { srcEvent: o2, axis: s2, velocityX: r2, velocityY: l2, currentTouch: c2 } = e3;
          if (c2.length > 0 || !S) return;
          const d2 = o2.target, u2 = d2 && n$7(d2) && !("x" === s2 && !z2);
          z2 && e$6(o2) && !e3.axis && Pe(o2);
          const f2 = K.length, v2 = ee("dragFree");
          if (!f2) return;
          const g2 = ee("vertical") ? l2 : r2;
          let m2 = (null == S ? void 0 : S.isRunning()) ? S.getEndValues().pos : k2;
          const h2 = $2 && !z2 ? 1 : -1;
          if (u2 || (m2 += g2 * (v2 ? 5 : 1) * h2), !D2 && (g2 * h2 <= 0 && m2 < N2 || g2 * h2 >= 0 && m2 > _2)) {
            let e4 = 0;
            return Math.abs(g2) > 0 && (e4 = 2 * Math.abs(g2), e4 = Math.min(0.3 * ve(), e4)), m2 = t$7(N2 + -1 * e4, m2, _2 + e4), void S.spring({ clamp: true, mass: 1, tension: 380, friction: 25, velocity: -1 * g2, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: m2 }).start();
          }
          if (v2 || (null === (t2 = R2.Autoscroll) || void 0 === t2 ? void 0 : t2.isEnabled())) return void (Math.abs(g2) > 10 ? S.spring({ clamp: true, mass: 1, tension: 150, friction: 25, velocity: -1 * g2, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: m2 }).start() : S.isRunning() || F || (F = true, ie("settle")));
          if (!v2 && !(null === (n2 = R2.Autoscroll) || void 0 === n2 ? void 0 : n2.isEnabled()) && (!e3.offsetX && !e3.offsetY || "y" === s2 && !z2 || "x" === s2 && z2)) return void Te(I2, { transition: "tween" });
          let b2 = ue(m2);
          Math.abs(g2) > 10 && b2 === I2 && (b2 += g2 > 0 ? $2 && !z2 ? 1 : -1 : $2 && !z2 ? -1 : 1), Te(b2, { transition: "tween", tween: { velocity: -1 * g2 } });
        })).init()) : w2 && (w2.destroy(), w2 = void 0);
      }
      function le(e2 = "*") {
        var t2;
        const n2 = [];
        for (const i2 of X) ("*" === e2 || i2.class && i2.class.includes(e2) || i2.el && (null === (t2 = i2.el) || void 0 === t2 ? void 0 : t2.classList.contains(e2))) && n2.push(i2);
        P = void 0, G = e2, Y = [...n2];
      }
      function ae() {
        if (!S) return;
        const e2 = ue((null == S ? void 0 : S.isRunning()) ? S.getEndValues().pos : k2);
        e2 !== I2 && (P = I2, I2 = e2, Oe(), ce(), de(), ie("change", I2, P));
      }
      function ce() {
        var e2;
        if (!V) return;
        s$5(C, "is-draggable", !!w2 && K.length > 0);
        for (const e3 of V.querySelectorAll("[data-carousel-index]")) e3.innerHTML = I2 + "";
        for (const e3 of V.querySelectorAll("[data-carousel-page]")) e3.innerHTML = I2 + 1 + "";
        for (const e3 of V.querySelectorAll("[data-carousel-pages]")) e3.innerHTML = K.length + "";
        for (const e3 of V.querySelectorAll("[data-carousel-go-prev]")) e3.toggleAttribute("aria-disabled", !Ce()), Ce() ? e3.removeAttribute("tabindex") : e3.setAttribute("tabindex", "-1");
        for (const e3 of V.querySelectorAll("[data-carousel-go-next]")) e3.toggleAttribute("aria-disabled", !He()), He() ? e3.removeAttribute("tabindex") : e3.setAttribute("tabindex", "-1");
        let t2 = false;
        const n2 = null === (e2 = K[I2]) || void 0 === e2 ? void 0 : e2.slides[0];
        n2 && (n2.downloadSrc || "image" === n2.type && n2.src) && (t2 = true);
        for (const e3 of V.querySelectorAll("[data-carousel-download]")) e3.toggleAttribute("aria-disabled", !t2);
      }
      function de(e2) {
        var t2;
        e2 || (e2 = null === (t2 = K[I2]) || void 0 === t2 ? void 0 : t2.slides[0]);
        const n2 = e2.el;
        if (n2) for (const t3 of n2.querySelectorAll("[data-slide-index]")) t3.innerHTML = e2.index + 1 + "";
      }
      function ue(e2) {
        var t2, n2, i2;
        if (!K.length || !S) return 0;
        const o2 = pe();
        let s2 = e2;
        D2 ? s2 -= Math.floor((e2 - (null === (t2 = K[0]) || void 0 === t2 ? void 0 : t2.pos)) / o2) * o2 : s2 = t$7(null === (n2 = K[0]) || void 0 === n2 ? void 0 : n2.pos, e2, null === (i2 = K[K.length - 1]) || void 0 === i2 ? void 0 : i2.pos);
        const r2 = /* @__PURE__ */ new Map();
        let l2 = 0;
        for (const e3 of K) {
          const t3 = Math.abs(e3.pos - s2), n3 = Math.abs(e3.pos - s2 - o2), i3 = Math.abs(e3.pos - s2 + o2), a2 = Math.min(t3, n3, i3);
          r2.set(l2, a2), l2++;
        }
        const c2 = r2.size > 0 ? [...r2.entries()].reduce(((e3, t3) => t3[1] < e3[1] ? t3 : e3)) : [I2, 0];
        return parseInt(c2[0]);
      }
      function fe() {
        return Z;
      }
      function ve() {
        let e2 = 0;
        return C && (C.childElementCount || (C.style.display = "block"), e2 = C.getBoundingClientRect()[q] || 0, C.style.display = ""), e2;
      }
      function pe(e2 = true) {
        return Y.reduce(((e3, t2) => e3 + t2.dim), 0) + (Y.length - (D2 && e2 ? 0 : 1)) * Z;
      }
      function ge(e2) {
        const t2 = pe();
        let n2 = ve();
        if (!C) return [];
        const i2 = [];
        if (!t2 || !n2) return [];
        e2 = void 0 === e2 ? k2 : e2, D2 && (e2 -= Math.floor(e2 / t2) * t2);
        let o2 = 0, s2 = 0;
        if (H2) {
          const e3 = C.getBoundingClientRect();
          o2 = Math.abs(e3.left), s2 = Math.abs(window.innerWidth - e3.right);
        }
        let r2 = 0;
        for (let l2 of Y) {
          const a2 = (t3 = 0) => {
            i2.indexOf(l2) > -1 || (l2.pos = r2 - e2 + t3 || 0, l2.offset + t3 > e2 - l2.dim - o2 + 0.51 && l2.offset + t3 < e2 + n2 + s2 - 0.51 && i2.push(l2));
          };
          l2.offset = r2, D2 && (a2(t2), a2(-1 * t2)), a2(), r2 += l2.dim + Z;
        }
        return i2;
      }
      function me(e2, t2) {
        const n2 = [];
        for (const t3 of Array.isArray(e2) ? e2 : [e2]) {
          const e3 = he(Object.assign(Object.assign({}, t3), { isVirtual: true }));
          e3.el || (e3.el = document.createElement("div")), ie("createSlide", e3), n2.push(e3);
        }
        X.splice(void 0 === t2 ? X.length : t2, 0, ...n2), xe();
        for (const e3 of n2) ie("addSlide", e3), be(e3);
        return le(G), n2;
      }
      function he(e2) {
        return (t$8(e2) || e2 instanceof HTMLElement) && (e2 = { html: e2 }), Object.assign({ index: -1, el: void 0, class: "", isVirtual: true, dim: 0, pos: 0, offset: 0, html: "", src: "" }, e2);
      }
      function be(e2) {
        let t2 = e2.el;
        if (!e2 || !t2) return;
        const n2 = e2.html ? e2.html instanceof HTMLElement ? e2.html : e$9(e2.html) : void 0;
        n2 && (s$7(n2, "f-html"), e2.htmlEl = n2, s$7(t2, "has-html"), t2.append(n2), ie("contentReady", e2));
      }
      function Ee(e2) {
        if (!C || !e2) return;
        let t2 = e2.el;
        if (t2) {
          if (t2.setAttribute("index", e2.index + ""), t2.parentElement !== C) {
            let n2;
            s$7(t2, T.classes.slide), s$7(t2, e2.class), Oe(e2);
            for (const t3 of X) if (t3.index > e2.index) {
              n2 = t3.el;
              break;
            }
            C.insertBefore(t2, n2 && C.contains(n2) ? n2 : null), ie("attachSlideEl", e2);
          }
          return de(e2), t2;
        }
      }
      function ye(e2) {
        const t2 = null == e2 ? void 0 : e2.el;
        t2 && (t2.remove(), we(t2), ie("detachSlideEl", e2));
      }
      function xe() {
        for (let e2 = 0; e2 < X.length; e2++) {
          const t2 = X[e2], n2 = t2.el;
          n2 && (t2.index !== e2 && we(n2), n2.setAttribute("index", `${e2}`)), t2.index = e2;
        }
      }
      function Me() {
        var e2, n2, i2, o2, s2;
        if (!V || !C) return;
        $2 = ee("rtl"), z2 = ee("vertical"), q = z2 ? "height" : "width";
        const r2 = ee("classes");
        if (s$5(V, r2.isLTR, !$2), s$5(V, r2.isRTL, $2), s$5(V, r2.isHorizontal, !z2), s$5(V, r2.isVertical, z2), s$5(V, r2.hasAdaptiveHeight, ee("adaptiveHeight")), !ve()) return;
        const l2 = window.getComputedStyle(C);
        H2 = "visible" === l2.getPropertyValue("overflow-" + (z2 ? "y" : "x")), Z = C && parseFloat(l2.getPropertyValue("--f-carousel-gap")) || 0;
        const d2 = (function() {
          let e3 = 0;
          if (C) {
            let t2 = document.createElement("div");
            t2.style.display = "block", s$7(t2, T.classes.slide), C.appendChild(t2), e3 = t2.getBoundingClientRect()[q], t2.remove(), t2 = void 0;
          }
          return e3;
        })();
        for (const n3 of Y) {
          const i3 = n3.el;
          let o3 = 0;
          if (!n3.isVirtual && i3 && n$8(i3)) {
            let t2 = false;
            i3.parentElement && i3.parentElement === C || (C.appendChild(i3), t2 = true), o3 = i3.getBoundingClientRect()[q], t2 && (null === (e2 = i3.parentElement) || void 0 === e2 || e2.removeChild(i3));
          } else o3 = d2;
          n3.dim = o3;
        }
        if (D2 = false, ee("infinite")) {
          D2 = true;
          const e3 = pe();
          let t2 = ve();
          if (H2) {
            const e4 = C.getBoundingClientRect();
            t2 += e4.left, t2 += e4.right - e4.width;
          }
          for (let i3 = 0; i3 < Y.length; i3++) {
            const o3 = (null === (n2 = Y[i3]) || void 0 === n2 ? void 0 : n2.dim) + Z;
            if (e3 - o3 < t2 && e3 - o3 - t2 < o3) {
              D2 = false;
              break;
            }
          }
        }
        if ((function() {
          var e3;
          if (!V) return;
          const t2 = ve(), n3 = pe(false);
          let i3 = ee("slidesPerPage");
          i3 = "auto" === i3 ? 1 / 0 : parseFloat(i3 + ""), K = [];
          let o3 = 0, s3 = 0;
          for (const n4 of Y) (!K.length || o3 + n4.dim - t2 > 0.05 || s3 >= i3) && (K.push({ index: K.length, slides: [], dim: 0, offset: 0, pos: 0 }), o3 = 0, s3 = 0), null === (e3 = K[K.length - 1]) || void 0 === e3 || e3.slides.push(n4), o3 += n4.dim + Z, s3++;
          const r3 = ee("center"), l3 = ee("fill");
          let c2 = 0;
          for (const e4 of K) {
            e4.dim = (e4.slides.length - 1) * Z;
            for (const t3 of e4.slides) e4.dim += t3.dim;
            e4.offset = c2, e4.pos = c2, false !== r3 && (e4.pos -= 0.5 * (t2 - e4.dim)), l3 && !D2 && n3 > t2 && (e4.pos = t$7(0, e4.pos, n3 - t2)), c2 += e4.dim + Z;
          }
          const d3 = [];
          let u2;
          for (const e4 of K) {
            const t3 = Object.assign({}, e4);
            u2 && Math.abs(t3.pos - u2.pos) < 0.1 ? (u2.dim += t3.dim, u2.slides = [...u2.slides, ...t3.slides]) : (u2 = t3, t3.index = d3.length, d3.push(t3));
          }
          K = d3, ce();
        })(), N2 = (null === (i2 = K[0]) || void 0 === i2 ? void 0 : i2.pos) || 0, _2 = (null === (o2 = K[K.length - 1]) || void 0 === o2 ? void 0 : o2.pos) || 0, 0 === A) !(function() {
          var e3;
          P = void 0, I2 = ee("initialPage");
          const t2 = ee("initialSlide") || void 0;
          void 0 !== t2 && (I2 = De.getPageIndex(t2) || 0), I2 = t$7(0, I2, K.length - 1), k2 = (null === (e3 = K[I2]) || void 0 === e3 ? void 0 : e3.pos) || 0, B2 = k2;
        })();
        else {
          const e3 = (null == S ? void 0 : S.isRunning()) ? S.getEndValues().pos : k2;
          (e3 < N2 || e3 > _2) && (I2 = t$7(0, I2, K.length - 1), B2 = (null === (s2 = K[I2 || 0]) || void 0 === s2 ? void 0 : s2.pos) || 0);
        }
        ie("refresh");
      }
      function we(e2) {
        if (!e2 || !n$8(e2)) return;
        const n2 = parseInt(e2.getAttribute("index") || "-1");
        let i2 = "";
        for (const t2 of Array.from(e2.classList)) {
          const e3 = t2.match(/^f-(\w+)(Out|In)$/);
          e3 && e3[1] && (i2 = e3[1] + "");
        }
        if (!e2 || !i2) return;
        const o2 = [`f-${i2}Out`, `f-${i2}In`, "to-prev", "to-next", "from-prev", "from-next"];
        e2.removeEventListener("animationend", je), s$6(e2, o2.join(" ")), W.delete(n2);
      }
      function Se() {
        if (!C) return;
        const e2 = W.size > 0;
        for (const e3 of Y) we(e3.el);
        W.clear(), e2 && Re();
      }
      function je(e2) {
        "f-" === e2.animationName.substring(0, 2) && (we(e2.target), W.size || (s$6(V, "in-transition"), !F && Math.abs(De.getPosition(true) - B2) < 0.5 && (F = true, ie("settle"))), Re());
      }
      function Pe(e2) {
        var t2;
        if (e2.defaultPrevented) return;
        const n2 = e2.composedPath()[0];
        if (n2.closest("[data-carousel-go-prev]")) return m(e2), void De.prev();
        if (n2.closest("[data-carousel-go-next]")) return m(e2), void De.next();
        const i2 = n2.closest("[data-carousel-go-to]");
        if (i2) return m(e2), void De.goTo(parseFloat(i2.dataset.carouselGoTo || "") || 0);
        if (n2.closest("[data-carousel-download]")) {
          m(e2);
          const n3 = null === (t2 = K[I2]) || void 0 === t2 ? void 0 : t2.slides[0];
          if (n3 && (n3.downloadSrc || "image" === n3.type && n3.src)) {
            const e3 = n3.downloadFilename, t3 = document.createElement("a"), i3 = n3.downloadSrc || n3.src || "";
            t3.href = i3, t3.target = "_blank", t3.download = e3 || i3, t3.click();
          }
        } else ie("click", e2);
      }
      function Le(e2) {
        var t2;
        const n2 = e2.el;
        n2 && (null === (t2 = n2.querySelector(".f-spinner")) || void 0 === t2 || t2.remove());
      }
      function Ae(e2) {
        var t2;
        const n2 = e2.el;
        n2 && (null === (t2 = n2.querySelector(".f-html.is-error")) || void 0 === t2 || t2.remove(), s$6(n2, "has-error"));
      }
      function Oe(e2) {
        var t2;
        e2 || (e2 = null === (t2 = K[I2]) || void 0 === t2 ? void 0 : t2.slides[0]);
        const i2 = null == e2 ? void 0 : e2.el;
        if (!i2) return;
        let o2 = ee("formatCaption", e2);
        void 0 === o2 && (o2 = e2.caption), o2 = o2 || "";
        const s2 = ee("captionEl");
        if (s2 && s2 instanceof HTMLElement) {
          if (e2.index !== I2) return;
          if (t$8(o2) && (s2.innerHTML = te(o2 + "")), o2 instanceof HTMLElement) {
            if (o2.parentElement === s2) return;
            s2.innerHTML = "", o2.parentElement && (o2 = o2.cloneNode(true)), s2.append(o2);
          }
          return;
        }
        if (!o2) return;
        let r2 = e2.captionEl || i2.querySelector(".f-caption");
        !r2 && o2 instanceof HTMLElement && o2.classList.contains("f-caption") && (r2 = o2), r2 || (r2 = document.createElement("div"), s$7(r2, "f-caption"), t$8(o2) ? r2.innerHTML = te(o2 + "") : o2 instanceof HTMLElement && (o2.parentElement && (o2 = o2.cloneNode(true)), r2.append(o2)));
        const l2 = `f-caption-${E}_${e2.index}`;
        r2.setAttribute("id", l2), r2.dataset.selectable = "true", s$7(i2, "has-caption"), i2.setAttribute("aria-labelledby", l2), e2.captionEl = r2, i2.insertAdjacentElement("beforeend", r2);
      }
      function Te(t2, i2 = {}) {
        var o2, r2;
        let { transition: l2, tween: u2 } = Object.assign({ transition: T.transition, tween: T.tween }, i2 || {});
        if (!V || !S) return;
        const f2 = K.length;
        if (!f2) return;
        if ((function(e2, t3) {
          var i3, o3, s2, r3;
          if (!(V && S && t3 && t$8(t3) && "tween" !== t3)) return false;
          if ((null === (i3 = K[I2]) || void 0 === i3 ? void 0 : i3.slides.length) > 1) return false;
          const l3 = K.length;
          let u3 = e2 > I2 ? 1 : -1;
          e2 = D2 ? (e2 % l3 + l3) % l3 : t$7(0, e2, l3 - 1), $2 && (u3 *= -1);
          const f3 = null === (o3 = K[I2]) || void 0 === o3 ? void 0 : o3.slides[0], v3 = null == f3 ? void 0 : f3.index, p2 = null === (s2 = K[e2]) || void 0 === s2 ? void 0 : s2.slides[0], g2 = null == p2 ? void 0 : p2.index, m2 = null === (r3 = K[e2]) || void 0 === r3 ? void 0 : r3.pos;
          if (void 0 === g2 || void 0 === v3 || v3 === g2 || k2 === m2 || Math.abs(ve() - ((null == p2 ? void 0 : p2.dim) || 0)) > 1) return false;
          F = false, S.pause(), Se(), s$7(V, "in-transition"), k2 = B2 = m2;
          const h2 = Ee(f3), b2 = Ee(p2);
          return ae(), h2 && (W.add(v3), h2.style.transform = "", h2.addEventListener("animationend", je), s$6(h2, T.classes.isSelected), h2.inert = false, s$7(h2, `f-${t3}Out to-${u3 > 0 ? "next" : "prev"}`)), b2 && (W.add(g2), b2.style.transform = "", b2.addEventListener("animationend", je), s$7(b2, T.classes.isSelected), b2.inert = false, s$7(b2, `f-${t3}In from-${u3 > 0 ? "prev" : "next"}`)), Re(), true;
        })(t2, l2)) return;
        t2 = D2 ? (t2 % f2 + f2) % f2 : t$7(0, t2, f2 - 1), B2 = (null === (o2 = K[t2 || 0]) || void 0 === o2 ? void 0 : o2.pos) || 0;
        const v2 = S.isRunning() ? S.getEndValues().pos : k2;
        if (Math.abs(B2 - v2) < 1) return k2 = B2, I2 !== t2 && (Oe(), ce(), de(), P = I2, I2 = t2, ie("change", I2, P)), Re(), void (F || (F = true, ie("settle")));
        if (S.pause(), Se(), D2) {
          const e2 = pe(), t3 = Math.floor((v2 - (null === (r2 = K[0]) || void 0 === r2 ? void 0 : r2.pos)) / e2), n2 = B2 + t3 * e2;
          B2 = [n2 + e2, n2, n2 - e2].reduce((function(e3, t4) {
            return Math.abs(t4 - v2) < Math.abs(e3 - v2) ? t4 : e3;
          }));
        }
        false !== l2 && t$6(u2) ? S.spring(r$4({}, T.tween, u2)).from({ pos: k2 }).to({ pos: B2 }).start() : (k2 = B2, ae(), Re(), F || (F = true, ie("settle")));
      }
      function Re() {
        var e2;
        if (!V || !C) return;
        J = ge();
        const t2 = /* @__PURE__ */ new Set(), n2 = [], i2 = K[I2], s2 = T.setTransform || void 0;
        let l2;
        for (const o2 of Y) {
          const s3 = W.has(o2.index), r2 = J.indexOf(o2) > -1, a2 = (null === (e2 = null == i2 ? void 0 : i2.slides) || void 0 === e2 ? void 0 : e2.indexOf(o2)) > -1;
          if (o2.isVirtual && !s3 && !r2) continue;
          let c2 = Ee(o2);
          if (c2 && (n2.push(o2), a2 && t2.add(c2), ee("adaptiveHeight") && a2)) {
            const e3 = (c2.firstElementChild || c2).getBoundingClientRect().height;
            l2 = null == l2 ? e3 : Math.max(l2, e3);
          }
        }
        C && l2 && (C.style.height = `${l2}px`), [...e$4(C, `.${T.classes.slide}`)].forEach(((e3) => {
          s$5(e3, T.classes.isSelected, t2.has(e3));
          const n3 = X[parseInt(e3.getAttribute("index") || "-1")];
          if (!n3) return e3.remove(), void we(e3);
          const i3 = W.has(n3.index), o2 = J.indexOf(n3) > -1;
          if (n3.isVirtual && !i3 && !o2) return void ye(n3);
          e3.inert = !o2;
          let l3 = n3.pos ? Math.round(1e4 * n3.pos) / 1e4 : 0, a2 = 0, c2 = 0, d2 = 0, f2 = 0;
          i3 || (a2 = z2 ? 0 : $2 ? -1 * l3 : l3, c2 = z2 ? l3 : 0, d2 = t$4(a2, 0, n3.dim, 0, 100), f2 = t$4(c2, 0, n3.dim, 0, 100)), s2 instanceof Function && !i3 ? s2(De, n3, { x: a2, y: c2, xPercent: d2, yPercent: f2 }) : e3.style.transform = a2 || c2 ? `translate3d(${d2}%, ${f2}%,0)` : "";
        })), ie("render", n2);
      }
      function Ve() {
        var e2;
        null == V || V.removeEventListener("click", Pe), Se(), document.removeEventListener("mousemove", se), null == j2 || j2.disconnect(), j2 = void 0;
        for (const n2 of X) n2.el && n$8(n2.el) && (n2.state = void 0, Le(n2), Ae(n2), ye(n2), n2.isVirtual ? (null === (e2 = n2.el) || void 0 === e2 || e2.remove(), n2.el = void 0) : (n2.el.style.transform = "", null == C || C.appendChild(n2.el)));
        for (const e3 of Object.values(R2)) null == e3 || e3.destroy();
        R2 = {}, null == w2 || w2.destroy(), w2 = void 0, null == S || S.destroy(), S = void 0;
        for (const [e3, t2] of Object.entries(T.classes || {})) "container" !== e3 && s$6(V, t2);
        s$6(C, "is-draggable");
      }
      function Ce() {
        return D2 || I2 > 0;
      }
      function He() {
        return D2 || I2 < K.length - 1;
      }
      const De = { add: function(e2, t2) {
        var n2, i2;
        let o2 = k2;
        const s2 = I2, r2 = pe(), l2 = (null == S ? void 0 : S.isRunning()) ? S.getEndValues().pos : k2, a2 = Math.floor((l2 - (null === (n2 = K[0]) || void 0 === n2 ? void 0 : n2.pos)) / r2);
        return me(e2, t2), le(G), Me(), S && (s2 === I2 && (o2 -= a2 * r2), B2 = (null === (i2 = K[I2 || 0]) || void 0 === i2 ? void 0 : i2.pos) || 0, o2 === B2 ? k2 = B2 : S.spring({ clamp: true, mass: 1, tension: 300, friction: 25, restDelta: 1, restSpeed: 1 }).from({ pos: o2 }).to({ pos: B2 }).start()), Re(), De;
      }, canGoPrev: Ce, canGoNext: He, destroy: function() {
        return ie("destroy"), window.removeEventListener("resize", oe), Ve(), ne.clear(), V = null, K = [], X = [], T = Object.assign({}, h), R2 = {}, Y = [], L = "", G = "*", A = 2, De;
      }, emit: ie, filter: function(e2 = "*") {
        return le(e2), Me(), Re(), ie("filter", e2), De;
      }, getContainer: function() {
        return V;
      }, getGapDim: fe, getGestures: function() {
        return w2;
      }, getLastMouseMove: function() {
        return b;
      }, getOption: function(e2) {
        return ee(e2);
      }, getOptions: function() {
        return T;
      }, getPage: function() {
        return K[I2];
      }, getPageIndex: function(e2) {
        if (void 0 !== e2) {
          for (const t2 of K || []) for (const n2 of t2.slides) if (n2.index === e2) return t2.index;
          return -1;
        }
        return I2;
      }, getPageProgress: function(e2, t2) {
        var n2;
        void 0 === e2 && (e2 = I2);
        const i2 = K[e2];
        if (!i2) return e2 > I2 ? -1 : 1;
        const o2 = pe(), s2 = fe();
        let r2 = i2.pos, l2 = De.getPosition();
        if (D2 && true !== t2) {
          const e3 = Math.floor((l2 - (null === (n2 = K[0]) || void 0 === n2 ? void 0 : n2.pos)) / o2);
          l2 -= e3 * o2, r2 = [r2 + o2, r2, r2 - o2].reduce((function(e4, t3) {
            return Math.abs(t3 - l2) < Math.abs(e4 - l2) ? t3 : e4;
          }));
        }
        return (l2 - r2) / (i2.dim + s2);
      }, getPageVisibility: function(e2) {
        var t2;
        void 0 === e2 && (e2 = I2);
        const n2 = K[e2];
        if (!n2) return e2 > I2 ? -1 : 1;
        const i2 = De.getPosition(), o2 = ve();
        let s2 = n2.pos;
        if (D2) {
          const e3 = De.getPosition(), n3 = pe(), i3 = s2 + Math.floor((e3 - (null === (t2 = K[0]) || void 0 === t2 ? void 0 : t2.pos)) / n3) * n3;
          s2 = [i3 + n3, i3, i3 - n3].reduce((function(t3, n4) {
            return Math.abs(n4 - e3) < Math.abs(t3 - e3) ? n4 : t3;
          }));
        }
        return s2 > i2 && s2 + n2.dim < i2 + o2 ? 1 : s2 < i2 ? (s2 + n2.dim - i2) / n2.dim : s2 + n2.dim > i2 + o2 ? (i2 + o2 - s2) / n2.dim : 0;
      }, getPages: function() {
        return K;
      }, getPlugins: function() {
        return R2;
      }, getPosition: function(e2) {
        var t2;
        let n2 = k2;
        if (D2 && true !== e2) {
          const e3 = pe();
          n2 -= Math.floor((k2 - (null === (t2 = K[0]) || void 0 === t2 ? void 0 : t2.pos) || 0) / e3) * e3;
        }
        return n2;
      }, getSlides: function() {
        return X;
      }, getState: function() {
        return A;
      }, getTotalSlideDim: pe, getTween: function() {
        return S;
      }, getViewport: function() {
        return C;
      }, getViewportDim: ve, getVisibleSlides: function(e2) {
        return void 0 === e2 ? J : ge(e2);
      }, goTo: Te, hasNavigated: function() {
        return void 0 !== P;
      }, hideError: Ae, hideLoading: Le, init: function() {
        if (!g || !n$8(g)) throw new Error("No Element found");
        return 0 !== A && (Ve(), A = 0), V = g, O2 = x2, window.removeEventListener("resize", oe), O2.breakpoints && window.addEventListener("resize", oe), oe(), De;
      }, isInfinite: function() {
        return D2;
      }, isInTransition: function() {
        return W.size > 0;
      }, isRTL: function() {
        return $2;
      }, isSettled: function() {
        return F;
      }, isVertical: function() {
        return z2;
      }, localize: function(e2, t2 = []) {
        return te(e2, t2);
      }, next: function(e2 = {}) {
        return Te(I2 + 1, e2), De;
      }, off: function(e2, t2) {
        for (const n2 of e2 instanceof Array ? e2 : [e2]) ne.has(n2) && ne.set(n2, ne.get(n2).filter(((e3) => e3 !== t2)));
        return De;
      }, on: function(e2, t2) {
        for (const n2 of e2 instanceof Array ? e2 : [e2]) ne.set(n2, [...ne.get(n2) || [], t2]);
        return De;
      }, prev: function(e2 = {}) {
        return Te(I2 - 1, e2), De;
      }, remove: function(e2) {
        void 0 === e2 && (e2 = X.length - 1);
        const t2 = X[e2];
        return t2 && (ie("removeSlide", t2), t2.el && (we(t2.el), t2.el.remove(), t2.el = void 0), X.splice(e2, 1), le(G), Me(), Re()), De;
      }, setPosition: function(e2) {
        k2 = e2, ae(), Re();
      }, showError: function(e2, t2) {
        Le(e2), Ae(e2);
        const n2 = e2.el;
        if (n2) {
          const i2 = document.createElement("div");
          s$7(i2, "f-html"), s$7(i2, "is-error"), i2.innerHTML = te(t2 || "<p>{{ERROR}}</p>"), e2.htmlEl = i2, s$7(n2, "has-html"), s$7(n2, "has-error"), n2.insertAdjacentElement("afterbegin", i2), ie("contentReady", e2);
        }
        return De;
      }, showLoading: function(e2) {
        const t2 = e2.el, n2 = null == t2 ? void 0 : t2.querySelector(".f-spinner");
        if (!t2 || n2) return De;
        const i2 = ee("spinnerTpl"), o2 = e$9(i2);
        return o2 && (s$7(o2, "f-spinner"), t2.insertAdjacentElement("beforeend", o2)), De;
      }, version: "6.0.34" };
      return De;
    };
    y.l10n = { en_EN: o$3 }, y.getDefaults = () => h;
    /*! License details at fancyapps.com/license */
    const t$3 = (t2 = true, e2 = "--f-scrollbar-compensate", s2 = "--f-body-margin", o2 = "hide-scrollbar") => {
      const n2 = document, r2 = n2.body, l2 = n2.documentElement;
      if (t2) {
        if (r2.classList.contains(o2)) return;
        let t3 = window.innerWidth - l2.getBoundingClientRect().width;
        t3 < 0 && (t3 = 0), l2.style.setProperty(e2, `${t3}px`);
        const n3 = parseFloat(window.getComputedStyle(r2).marginRight);
        n3 && r2.style.setProperty(s2, `${n3}px`), r2.classList.add(o2);
      } else r2.classList.remove(o2), r2.style.setProperty(s2, ""), n2.documentElement.style.setProperty(e2, "");
    };
    /*! License details at fancyapps.com/license */
    function e$3() {
      return !("undefined" == typeof window || !window.document || !window.document.createElement);
    }
    /*! License details at fancyapps.com/license */
    const n$4 = function(n2 = "", t2 = "", o2 = "") {
      return n2.split(t2).join(o2);
    };
    /*! License details at fancyapps.com/license */
    const a$5 = { tpl: (t2) => `<img class="f-panzoom__content" 
    ${t2.srcset ? 'data-lazy-srcset="{{srcset}}"' : ""} 
    ${t2.sizes ? 'data-lazy-sizes="{{sizes}}"' : ""} 
    data-lazy-src="{{src}}" alt="{{alt}}" />` }, s$4 = () => {
      let s2;
      function l2(e2, o2) {
        const n2 = null == s2 ? void 0 : s2.getOptions().Zoomable;
        let i2 = (t$6(n2) ? Object.assign(Object.assign({}, a$5), n2) : a$5)[e2];
        return i2 && "function" == typeof i2 && o2 ? i2(o2) : i2;
      }
      function c2() {
        s2 && false !== s2.getOptions().Zoomable && (s2.on("addSlide", f2), s2.on("removeSlide", u2), s2.on("attachSlideEl", g), s2.on("click", d2), s2.on("change", r2), s2.on("ready", r2));
      }
      function r2() {
        m2();
        const t2 = (null == s2 ? void 0 : s2.getVisibleSlides()) || [];
        if (t2.length > 1 || "slide" === (null == s2 ? void 0 : s2.getOption("transition"))) for (const e2 of t2) {
          const t3 = e2.panzoomRef;
          t3 && ((null == s2 ? void 0 : s2.getPage().slides) || []).indexOf(e2) < 0 && t3.execute(v$1.ZoomTo, Object.assign({}, t3.getStartPosition()));
        }
      }
      function d2(t2, e2) {
        const o2 = e2.target;
        o2 && !e2.defaultPrevented && o2.dataset.panzoomAction && p2(o2.dataset.panzoomAction);
      }
      function f2(t2, i2) {
        const a2 = i2.el;
        if (!s2 || !a2 || i2.panzoomRef) return;
        const c3 = i2.src || i2.lazySrc || "", r3 = i2.alt || i2.caption || `Image #${i2.index}`, d3 = i2.srcset || i2.lazySrcset || "", f3 = i2.sizes || i2.lazySizes || "";
        if (c3 && t$8(c3) && !i2.html && (!i2.type || "image" === i2.type)) {
          i2.type = "image", i2.thumbSrc = i2.thumbSrc || c3;
          let t3 = l2("tpl", i2);
          t3 = n$4(t3, "{{src}}", c3 + ""), t3 = n$4(t3, "{{srcset}}", d3 + ""), t3 = n$4(t3, "{{sizes}}", f3 + ""), a2.insertAdjacentHTML("afterbegin", t3);
        }
        const u3 = a2.querySelector(".f-panzoom__content");
        if (!u3) return;
        u3.setAttribute("alt", r3 + "");
        const g2 = i2.width && "auto" !== i2.width ? parseFloat(i2.width + "") : "auto", p3 = i2.height && "auto" !== i2.height ? parseFloat(i2.height + "") : "auto", z2 = E$1(a2, Object.assign({ width: g2, height: p3, classes: { container: "f-zoomable" }, event: () => null == s2 ? void 0 : s2.getLastMouseMove(), spinnerTpl: () => (null == s2 ? void 0 : s2.getOption("spinnerTpl")) || "" }, l2("Panzoom")));
        z2.on("*", ((t3, e2, ...o2) => {
          s2 && ("loading" === e2 && (i2.state = 0), "loaded" === e2 && (i2.state = 1), "error" === e2 && (i2.state = 2, null == s2 || s2.showError(i2, "{{IMAGE_ERROR}}")), s2.emit(`panzoom:${e2}`, i2, ...o2), "ready" === e2 && s2.emit("contentReady", i2), i2.index === (null == s2 ? void 0 : s2.getPageIndex()) && m2());
        })), i2.panzoomRef = z2;
      }
      function u2(t2, e2) {
        e2.panzoomRef && (e2.panzoomRef.destroy(), e2.panzoomRef = void 0);
      }
      function g(t2, e2) {
        const o2 = e2.panzoomRef;
        if (o2) switch (o2.getState()) {
          case 0:
            o2.init();
            break;
          case 3:
            o2.execute(v$1.ZoomTo, Object.assign(Object.assign({}, o2.getStartPosition()), { velocity: 0 }));
        }
      }
      function m2() {
        var t2, e2;
        const o2 = (null == s2 ? void 0 : s2.getContainer()) || void 0, n2 = null === (e2 = null === (t2 = null == s2 ? void 0 : s2.getPage()) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === e2 ? void 0 : e2.panzoomRef;
        if (o2) if (n2) n2.updateControls(o2);
        else for (const t3 of o2.querySelectorAll("[data-panzoom-action]") || []) t3.setAttribute("aria-disabled", ""), t3.setAttribute("tabindex", "-1");
      }
      function p2(t2, ...e2) {
        var o2;
        null === (o2 = null == s2 ? void 0 : s2.getPage().slides[0].panzoomRef) || void 0 === o2 || o2.execute(t2, ...e2);
      }
      return { init: function(t2) {
        s2 = t2, s2.on("initPlugins", c2);
      }, destroy: function() {
        if (s2) {
          s2.off("initPlugins", c2), s2.off("addSlide", f2), s2.off("removeSlide", u2), s2.off("attachSlideEl", g), s2.off("click", d2), s2.off("change", r2), s2.off("ready", r2);
          for (const t2 of s2.getSlides()) u2(0, t2);
        }
        s2 = void 0;
      }, execute: p2 };
    };
    /*! License details at fancyapps.com/license */
    const e$2 = { syncOnChange: false, syncOnClick: true, syncOnHover: false }, i$3 = () => {
      let i2, t2;
      function o2() {
        const t3 = null == i2 ? void 0 : i2.getOptions().Sync;
        return t$6(t3) ? Object.assign(Object.assign({}, e$2), t3) : e$2;
      }
      function s2(n2) {
        var e2, s3, l3;
        i2 && n2 && (t2 = n2, i2.getOptions().classes = Object.assign(Object.assign({}, i2.getOptions().classes), { isSelected: "" }), i2.getOptions().initialSlide = (null === (s3 = null === (e2 = t2.getPage()) || void 0 === e2 ? void 0 : e2.slides[0]) || void 0 === s3 ? void 0 : s3.index) || 0, o2().syncOnChange && i2.on("change", c2), o2().syncOnClick && i2.on("click", g), o2().syncOnHover && (null === (l3 = i2.getViewport()) || void 0 === l3 || l3.addEventListener("mouseover", u2)), (function() {
          if (!i2 || !t2) return;
          i2.on("ready", d2), i2.on("refresh", a2), t2.on("change", r2), t2.on("filter", f2);
        })());
      }
      function l2() {
        const n2 = o2().target;
        i2 && n2 && s2(n2);
      }
      function d2() {
        v2();
      }
      function c2() {
        var n2;
        if (i2 && t2) {
          const e2 = (null === (n2 = i2.getPage()) || void 0 === n2 ? void 0 : n2.slides) || [], o3 = t2.getPageIndex(e2[0].index || 0);
          o3 > -1 && t2.goTo(o3, i2.hasNavigated() ? void 0 : { tween: false, transition: false }), v2();
        }
      }
      function r2() {
        var n2;
        if (i2 && t2) {
          const e2 = i2.getPageIndex((null === (n2 = t2.getPage()) || void 0 === n2 ? void 0 : n2.slides[0].index) || 0);
          e2 > -1 && i2.goTo(e2, t2.hasNavigated() ? void 0 : { tween: false, transition: false }), v2();
        }
      }
      function g(n2, e2) {
        var o3;
        if (!i2 || !t2) return;
        if (null === (o3 = i2.getTween()) || void 0 === o3 ? void 0 : o3.isRunning()) return;
        const s3 = null == i2 ? void 0 : i2.getOptions().classes.slide;
        if (!s3) return;
        const l3 = s3 ? e2.target.closest(`.${s3}`) : null;
        if (l3) {
          const n3 = parseInt(l3.getAttribute("index") || "") || 0, e3 = t2.getPageIndex(n3);
          t2.goTo(e3);
        }
      }
      function u2(n2) {
        i2 && g(0, n2);
      }
      function a2() {
        var n2;
        if (i2 && t2) {
          const e2 = i2.getPageIndex((null === (n2 = t2.getPage()) || void 0 === n2 ? void 0 : n2.slides[0].index) || 0);
          e2 > -1 && i2.goTo(e2, { tween: false, transition: false }), v2();
        }
      }
      function f2(n2, e2) {
        i2 && t2 && (i2.filter(e2), r2());
      }
      function v2() {
        var n2, e2, o3;
        if (!t2) return;
        const s3 = (null === (e2 = null === (n2 = t2.getPage()) || void 0 === n2 ? void 0 : n2.slides[0]) || void 0 === e2 ? void 0 : e2.index) || 0;
        for (const n3 of (null == i2 ? void 0 : i2.getSlides()) || []) null === (o3 = n3.el) || void 0 === o3 || o3.classList.toggle("is-selected", n3.index === s3);
      }
      return { init: function(n2) {
        i2 = n2, i2.on("initSlides", l2);
      }, destroy: function() {
        var n2;
        null == i2 || i2.off("ready", d2), null == i2 || i2.off("refresh", a2), null == i2 || i2.off("change", c2), null == i2 || i2.off("click", g), null === (n2 = null == i2 ? void 0 : i2.getViewport()) || void 0 === n2 || n2.removeEventListener("mouseover", u2), null == t2 || t2.off("change", r2), null == t2 || t2.off("filter", f2), t2 = void 0, null == i2 || i2.off("initSlides", l2), i2 = void 0;
      }, getTarget: function() {
        return t2;
      } };
    };
    /*! License details at fancyapps.com/license */
    const t$2 = { showLoading: true, preload: 1 }, a$4 = "is-lazyloading", s$3 = "is-lazyloaded", l$4 = () => {
      let l2;
      function n2() {
        const a2 = null == l2 ? void 0 : l2.getOptions().Lazyload;
        return t$6(a2) ? Object.assign(Object.assign({}, t$2), a2) : t$2;
      }
      function o2(e2) {
        var t2;
        const o3 = e2.el;
        if (!o3) return;
        const i3 = "[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]", d2 = Array.from(o3.querySelectorAll(i3));
        o3.matches(i3) && d2.push(o3);
        for (const o4 of d2) {
          const i4 = o4.dataset.lazySrc, d3 = o4.dataset.lazySrcset, r2 = o4.dataset.lazySizes, c2 = o4.dataset.lazyBg, u2 = (o4 instanceof HTMLImageElement || o4 instanceof HTMLSourceElement) && (i4 || d3), f2 = o4 instanceof HTMLElement && c2;
          if (!u2 && !f2) continue;
          const m2 = i4 || d3 || c2;
          if (m2) {
            if (u2 && m2) {
              const c3 = null === (t2 = o4.parentElement) || void 0 === t2 ? void 0 : t2.classList.contains("f-panzoom__wrapper");
              n2().showLoading && (null == l2 || l2.showLoading(e2)), o4.addEventListener("load", (() => {
                null == l2 || l2.hideLoading(e2), o4 instanceof HTMLImageElement ? o4.decode().then((() => {
                  o4.classList.remove(a$4), o4.classList.add(s$3);
                })) : (o4.classList.remove(a$4), o4.classList.add(s$3)), c3 || null == l2 || l2.emit("lazyLoad:loaded", e2, o4, m2);
              })), o4.addEventListener("error", (() => {
                null == l2 || l2.hideLoading(e2), o4.classList.remove(a$4), o4.classList.add("has-lazyerror"), c3 || null == l2 || l2.emit("lazyLoad:error", e2, o4, m2);
              })), o4.classList.add("f-lazyload"), o4.classList.add(a$4), c3 || null == l2 || l2.emit("lazyLoad:load", e2, o4, m2), i4 && (o4.src = i4), d3 && (o4.srcset = d3), r2 && (o4.sizes = r2);
            } else if (f2) {
              if (!document.body.contains(o4)) {
                document.createElement("img").src = c2;
              }
              o4.style.backgroundImage = `url('${c2}')`;
            }
            delete o4.dataset.lazySrc, delete o4.dataset.lazySrcset, delete o4.dataset.lazySizes, delete o4.dataset.lazyBg;
          }
        }
      }
      function i2() {
        if (!l2) return;
        const e2 = [...l2.getVisibleSlides()], t2 = n2().preload;
        if (t2 > 0) {
          const a2 = l2.getPosition(), s2 = l2.getViewportDim();
          e2.push(...l2.getVisibleSlides(a2 + s2 * t2), ...l2.getVisibleSlides(a2 - s2 * t2));
        }
        for (const t3 of e2) o2(t3);
      }
      return { init: function(e2) {
        l2 = e2, l2.on("render", i2);
      }, destroy: function() {
        null == l2 || l2.off("render", i2), l2 = void 0;
      } };
    };
    /*! License details at fancyapps.com/license */
    const r$3 = { prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"></path></svg>', nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"></path></svg>' }, s$2 = () => {
      let s2, i2, l2;
      function a2() {
        const t2 = null == s2 ? void 0 : s2.getOptions().Arrows;
        return t$6(t2) ? Object.assign(Object.assign({}, r$3), t2) : r$3;
      }
      function u2(e2) {
        if (!s2) return;
        const o2 = `<button data-carousel-go-${e2} tabindex="0" class="f-button is-arrow is-${e2}" title="{{${e2.toUpperCase()}}}">` + a2()[`${e2}Tpl`] + "</button", r2 = e$9(s2.localize(o2)) || void 0;
        return r2 && s$7(r2, a2()[`${e2}Class`]), r2;
      }
      function g() {
        var t2;
        null == i2 || i2.remove(), i2 = void 0, null == l2 || l2.remove(), l2 = void 0, null === (t2 = null == s2 ? void 0 : s2.getContainer()) || void 0 === t2 || t2.classList.remove("has-arrows");
      }
      function c2() {
        s2 && false !== s2.getOptions().Arrows && s2.getPages().length > 1 ? (!(function() {
          if (!s2) return;
          const t2 = s2.getViewport();
          t2 && (i2 || (i2 = u2("prev"), i2 && t2.insertAdjacentElement("beforebegin", i2)), l2 || (l2 = u2("next"), l2 && t2.insertAdjacentElement("afterend", l2)), s$5(s2.getContainer(), "has-arrows", !(!i2 && !l2)));
        })(), s2 && (null == i2 || i2.toggleAttribute("aria-disabled", !s2.canGoPrev()), null == l2 || l2.toggleAttribute("aria-disabled", !s2.canGoNext()))) : g();
      }
      return { init: function(t2) {
        s2 = t2.on(["change", "refresh"], c2);
      }, destroy: function() {
        g(), null == s2 || s2.off(["change", "refresh"], c2), s2 = void 0;
      } };
    };
    /*! License details at fancyapps.com/license */
    const t$1 = '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/>', M$1 = '<g><line x1="11" y1="8" x2="11" y2="14"></line></g>' + t$1, o$2 = { moveLeft: ["moveLeft", "MOVE_LEFT", '<path d="M5 12h14M5 12l6 6M5 12l6-6"/>'], moveRight: ["moveRight", "MOVE_RIGHT", '<path d="M5 12h14M13 18l6-6M13 6l6 6"/>'], moveUp: ["moveUp", "MOVE_UP", '<path d="M12 5v14M18 11l-6-6M6 11l6-6"/>'], moveDown: ["moveDown", "MOVE_DOWN", '<path d="M12 5v14M18 13l-6 6M6 13l6 6"/>'], zoomOut: ["zoomOut", "ZOOM_OUT", t$1], zoomIn: ["zoomIn", "ZOOM_IN", M$1], toggleFull: ["toggleFull", "TOGGLE_FULL", M$1], iterateZoom: ["iterateZoom", "ITERATE_ZOOM", M$1], toggle1to1: ["toggleFull", "TOGGLE_FULL", '<path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/>'], rotateCCW: ["rotateCCW", "ROTATE_CCW", '<path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/>'], rotateCW: ["rotateCW", "ROTATE_CW", '<path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/>'], flipX: ["flipX", "FLIP_X", '<path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/>'], flipY: ["flipY", "FLIP_Y", '<path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/>'], reset: ["reset", "RESET", '<path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>'], toggleFS: ["toggleFS", "TOGGLE_FS", '<g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g>'] }, v = {};
    for (const [t2, M2] of Object.entries(o$2)) v[t2] = { tpl: `<button data-panzoom-action="${M2[0]}" class="f-button" title="{{${M2[1]}}}"><svg>${M2[2]}</svg></button>` };
    /*! License details at fancyapps.com/license */
    var l$3;
    !(function(t2) {
      t2.Left = "left", t2.middle = "middle", t2.right = "right";
    })(l$3 || (l$3 = {}));
    const s$1 = Object.assign({ counter: { tpl: '<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>' }, download: { tpl: '<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>' }, autoplay: { tpl: '<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, thumbs: { tpl: '<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>' } }, v), a$3 = { absolute: false, display: { left: [], middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY", "reset"], right: [] }, enabled: "auto", items: {} }, r$2 = () => {
      let l2, r2;
      function u2(e2) {
        const o2 = null == l2 ? void 0 : l2.getOptions().Toolbar;
        let n2 = (t$6(o2) ? Object.assign(Object.assign({}, a$3), o2) : a$3)[e2];
        return n2 && "function" == typeof n2 && l2 ? n2(l2) : n2;
      }
      function c2() {
        var a2, c3;
        if (!(null == l2 ? void 0 : l2.getOptions().Toolbar)) return;
        if (!l2 || r2) return;
        const d2 = l2.getContainer();
        if (!d2) return;
        let f2 = u2("enabled");
        if (!f2) return;
        const g = u2("absolute"), p2 = l2.getSlides().length > 1;
        let b2 = false, m2 = false;
        for (const t2 of l2.getSlides()) t2.panzoomRef && (b2 = true), (t2.downloadSrc || "image" === t2.type && t2.src) && (m2 = true);
        const v$12 = (null === (a2 = l2.getPlugins().Thumbs) || void 0 === a2 ? void 0 : a2.isEnabled()) || false, h2 = p2 && l2.getPlugins().Autoplay || false, E2 = l2.getPlugins().Fullscreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled);
        if ("auto" === f2 && (f2 = b2), !f2) return;
        r2 = d2.querySelector(".f-carousel__toolbar") || void 0, r2 || (r2 = document.createElement("div"), r2.classList.add("f-carousel__toolbar"));
        const y2 = u2("display"), j2 = r$4({}, s$1, u2("items"));
        for (const i2 of ["left", "middle", "right"]) {
          const s2 = y2[i2] || [], a3 = document.createElement("div");
          a3.classList.add("f-carousel__toolbar__column"), a3.classList.add(`is-${i2}`);
          for (const i3 of s2) {
            let s3;
            if (t$8(i3)) {
              if ("counter" === i3 && !p2) continue;
              if ("autoplay" === i3 && !h2) continue;
              if (v[i3] && !b2) continue;
              if ("fullscreen" === i3 && !E2) continue;
              if ("thumbs" === i3 && !v$12) continue;
              if ("download" === i3 && !m2) continue;
              s3 = j2[i3];
            }
            if (t$6(i3) && (s3 = i3), s3 && s3.tpl) {
              let t2 = l2.localize(s3.tpl);
              t2 = t2.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');
              const e2 = e$9(t2);
              e2 && ("function" == typeof s3.click && l2 && e2.addEventListener("click", ((t3) => {
                t3.preventDefault(), t3.stopPropagation(), "function" == typeof s3.click && l2 && s3.click(l2, t3);
              })), a3.append(e2));
            }
          }
          r2.append(a3);
        }
        if (r2.childElementCount) {
          if (g && r2.classList.add("is-absolute"), !r2.parentElement) {
            const t2 = u2("parentEl");
            t2 ? t2.insertAdjacentElement("afterbegin", r2) : null === (c3 = l2.getViewport()) || void 0 === c3 || c3.insertAdjacentElement("beforebegin", r2);
          }
          d2.contains(r2) && d2.classList.add("has-toolbar");
        }
      }
      return { init: function(t2) {
        l2 = t2, null == l2 || l2.on("initSlides", c2);
      }, destroy: function() {
        var t2;
        null == l2 || l2.off("initSlides", c2), null === (t2 = null == l2 ? void 0 : l2.getContainer()) || void 0 === t2 || t2.classList.remove("has-toolbar"), null == r2 || r2.remove(), r2 = void 0;
      }, add: function(t2, e2) {
        s$1[t2] = e2;
      }, isEnabled: function() {
        return !!r2;
      } };
    };
    /*! License details at fancyapps.com/license */
    const e$1 = { autoStart: true, pauseOnHover: true, showProgressbar: true, timeout: 2e3 }, n$3 = () => {
      let n2, o2, i2 = false, l2 = false, r2 = false, a2 = null;
      function s2(o3) {
        const i3 = null == n2 ? void 0 : n2.getOptions().Autoplay;
        let l3 = (t$6(i3) ? Object.assign(Object.assign({}, e$1), i3) : e$1)[o3];
        return l3 && "function" == typeof l3 && n2 ? l3(n2) : l3;
      }
      function u2() {
        clearTimeout(o2), o2 = void 0;
      }
      function f2() {
        if (!i2) return;
        if (r2) return;
        if (l2) return;
        if (o2) return;
        if (!(null == n2 ? void 0 : n2.isSettled())) return;
        if ((function() {
          var t3;
          const e2 = (null === (t3 = null == n2 ? void 0 : n2.getPage()) || void 0 === t3 ? void 0 : t3.slides) || [];
          for (const t4 of e2) if (0 === t4.state) return true;
          return false;
        })()) return;
        !(function() {
          var t3, e2, o3, i3;
          if (!n2) return;
          if (g(), !s2("showProgressbar")) return;
          let l3 = s2("progressbarParentEl");
          !l3 && (null === (t3 = n2.getPlugins().Toolbar) || void 0 === t3 ? void 0 : t3.isEnabled()) && (l3 = n2.getContainer());
          if (!l3 && true !== (null === (e2 = n2.getPlugins().Toolbar) || void 0 === e2 ? void 0 : e2.isEnabled())) {
            const t4 = (null === (o3 = n2.getPages()[0]) || void 0 === o3 ? void 0 : o3.slides) || [], e3 = (null === (i3 = n2.getPage()) || void 0 === i3 ? void 0 : i3.slides) || [];
            1 === t4.length && 1 === e3.length && (l3 = e3[0].el);
          }
          l3 || (l3 = n2.getViewport());
          if (!l3) return;
          a2 = document.createElement("div"), a2.classList.add("f-progressbar"), l3.prepend(a2);
          const r3 = s2("timeout") || 1e3;
          a2.style.animationDuration = `${r3}ms`;
        })();
        const t2 = s2("timeout");
        o2 = setTimeout((() => {
          n2 && i2 && !l2 && (n2.isInfinite() || n2.getPageIndex() !== n2.getPages().length - 1 ? n2.next() : n2.goTo(0));
        }), t2);
      }
      function d2() {
        var t2, e2;
        if (!n2 || n2.getPages().length < 2 || false === n2.getOptions().Autoplay) return;
        if (i2) return;
        i2 = true, n2.emit("autoplay:start", s2("timeout")), null === (t2 = n2.getContainer()) || void 0 === t2 || t2.classList.add("has-autoplay"), null === (e2 = n2.getTween()) || void 0 === e2 || e2.on("start", y2);
        const o3 = null == n2 ? void 0 : n2.getContainer();
        o3 && s2("pauseOnHover") && matchMedia("(hover: hover)").matches && (o3.addEventListener("mouseenter", b2, false), o3.addEventListener("mouseleave", E2, false)), n2.on("change", h2), n2.on("settle", P), n2.on("contentReady", m2), n2.on("panzoom:touchStart", c2), n2.on("panzoom:wheel", c2), n2.isSettled() && f2();
      }
      function c2() {
        var t2, e2;
        if (u2(), g(), i2 && n2) {
          n2.emit("autoplay:end"), null === (t2 = n2.getContainer()) || void 0 === t2 || t2.classList.remove("has-autoplay"), null === (e2 = n2.getTween()) || void 0 === e2 || e2.off("start", y2);
          const o3 = null == n2 ? void 0 : n2.getContainer();
          o3 && (o3.removeEventListener("mouseenter", b2, false), o3.removeEventListener("mouseleave", E2, false));
        }
        n2 && (n2.off("change", h2), n2.off("settle", P), n2.off("contentReady", m2), n2.off("panzoom:touchStart", c2), n2.off("panzoom:wheel", c2)), i2 = false, l2 = false;
      }
      function g() {
        a2 && (a2.remove(), a2 = null);
      }
      function v2() {
        n2 && n2.getPages().length > 1 && s2("autoStart") && d2();
      }
      function m2() {
        n2 && f2();
      }
      function p2(t2, e2) {
        const n3 = e2.target;
        n3 && !e2.defaultPrevented && "toggle" === n3.dataset.autoplayAction && w2.toggle();
      }
      function h2() {
        !n2 || !(null == n2 ? void 0 : n2.isInfinite()) && n2.getPageIndex() === n2.getPages().length - 1 ? c2() : (g(), u2());
      }
      function P() {
        f2();
      }
      function y2() {
        u2(), g();
      }
      function b2() {
        r2 = true, i2 && (g(), u2());
      }
      function E2() {
        r2 = false, i2 && !l2 && (null == n2 ? void 0 : n2.isSettled()) && f2();
      }
      const w2 = { init: function(t2) {
        n2 = t2, n2.on("ready", v2), n2.on("click", p2);
      }, destroy: function() {
        c2(), null == n2 || n2.off("ready", v2), null == n2 || n2.off("click", p2), n2 = void 0;
      }, isEnabled: () => i2, pause: function() {
        l2 = true, u2();
      }, resume: function() {
        l2 = false, i2 && !r2 && f2();
      }, start() {
        d2();
      }, stop() {
        c2();
      }, toggle() {
        i2 ? c2() : d2();
      } };
      return w2;
    };
    /*! License details at fancyapps.com/license */
    const r$1 = { Carousel: { Lazyload: { showLoading: false } }, minCount: 2, showOnStart: true, thumbTpl: '<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>', type: "modern" };
    let u$1;
    const a$2 = () => {
      let a2, d2, c2, f2 = 0, m2 = 0, g = true;
      function h2(n2) {
        const e2 = null == a2 ? void 0 : a2.getOptions().Thumbs;
        let o2 = (t$6(e2) ? Object.assign(Object.assign({}, r$1), e2) : r$1)[n2];
        return o2 && "function" == typeof o2 && a2 ? o2(a2) : o2;
      }
      function v2() {
        if (!a2) return false;
        if (false === (null == a2 ? void 0 : a2.getOptions().Thumbs)) return false;
        let t2 = 0;
        for (const n2 of a2.getSlides()) n2.thumbSrc && t2++;
        return t2 >= h2("minCount");
      }
      function p2() {
        return "modern" === h2("type");
      }
      function b2(t2 = false) {
        var n2;
        const e2 = null == a2 ? void 0 : a2.getContainer();
        if (!a2 || !e2 || c2) return;
        if (!v2()) return;
        const o2 = (null === (n2 = h2("Carousel")) || void 0 === n2 ? void 0 : n2.classes) || {};
        if (o2.container = o2.container || "f-thumbs", !c2) {
          const t3 = e2.nextElementSibling;
          (null == t3 ? void 0 : t3.classList.contains(o2.container)) && (c2 = t3);
        }
        if (!c2) {
          c2 = document.createElement("div");
          const t3 = h2("parentEl");
          t3 ? t3.insertAdjacentElement("beforeend", c2) : e2.insertAdjacentElement("afterend", c2);
        }
        s$7(c2, o2.container), s$7(c2, "f-thumbs"), s$7(c2, `is-${h2("type")}`), s$7(c2, "is-syncing"), t2 && (c2.style.maxHeight = "0px");
      }
      function y2(t2) {
        const n2 = t2.thumb ? t2.thumb instanceof HTMLImageElement ? t2.thumb.src : t2.thumb : t2.thumbSrc || void 0, o2 = void 0 === t2.thumbAlt ? `Thumbnail #${t2.index}` : t2.thumbAlt + "";
        let i2 = h2("thumbTpl");
        return i2 = n$4(i2, "{{alt}}", o2), i2 = n$4(i2, "{{src}}", n2 + ""), i2 = n$4(i2, "{{index}}", `${t2.index}`), i2 = n$4(i2, "{{page}}", `${t2.index || 1}`), { html: i2, class: t2.thumbClass };
      }
      function S() {
        var t2;
        if (!u$1) return;
        if (!a2 || !c2 || d2) return;
        const e2 = [];
        for (const t3 of a2.getSlides()) e2.push(y2(t3));
        e2.length && (d2 = u$1(c2, r$4({}, { Sync: { target: a2 }, Lazyload: { preload: 1 }, slides: e2, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", slide: "f-thumbs__slide" }, center: true, fill: !p2(), infinite: false, dragFree: true, rtl: a2.getOptions().rtl || false, slidesPerPage: (t3) => {
          let n2 = 0;
          return p2() && (!(function() {
            if (!p2()) return;
            if (!c2) return;
            const t4 = (t5) => c2 && parseFloat(getComputedStyle(c2).getPropertyValue("--f-thumb-" + t5)) || 0;
            f2 = t4("width"), m2 = t4("clip-width");
          })(), n2 = 4 * (f2 - m2)), t3 && t3.getTotalSlideDim() <= t3.getViewportDim() - n2 ? 1 / 0 : 1;
        } }, r$1.Carousel || {}, h2("Carousel") || {}), { Sync: i$3, Lazyload: l$4 }), d2.on("ready", (() => {
          null == a2 || a2.emit("thumbs:ready"), p2() && (null == a2 || a2.on("change", w2), null == a2 || a2.on("render", j2));
        })), d2.on("destroy", (() => {
          null == a2 || a2.emit("thumbs:destroy");
        })), d2.init(), null === (t2 = d2.getGestures()) || void 0 === t2 || t2.on("start", (() => {
          g = false;
        })), d2.on("click", ((t3, n2) => {
          const e3 = n2.target;
          if (e3) {
            const t4 = e3.matches("button") ? e3 : e3.firstElementChild;
            t4 && t4.matches("button") && (n2.preventDefault(), t4.focus({ preventScroll: true }));
          }
        })), s$7(a2.getContainer(), "has-thumbs"), L());
      }
      function x2() {
        v2() && h2("showOnStart") && (b2(), S());
      }
      function C() {
        var t2;
        v2() && (null == a2 || a2.on("addSlide", E2), null == a2 || a2.on("click", T), null === (t2 = null == a2 ? void 0 : a2.getGestures()) || void 0 === t2 || t2.on("start", P));
      }
      function P() {
        var t2, n2;
        g = true;
        (null === (t2 = document.activeElement) || void 0 === t2 ? void 0 : t2.closest(".f-thumbs")) && (null === (n2 = document.activeElement) || void 0 === n2 || n2.blur());
      }
      function j2() {
        var t2, n2;
        null == c2 || c2.classList.toggle("is-syncing", false === (null == a2 ? void 0 : a2.hasNavigated()) || (null === (t2 = null == a2 ? void 0 : a2.getTween()) || void 0 === t2 ? void 0 : t2.isRunning())), L(), (null === (n2 = null == a2 ? void 0 : a2.getGestures()) || void 0 === n2 ? void 0 : n2.isPointerDown()) && (function() {
          if (!p2()) return;
          if (!a2 || !d2) return;
          if (!g) return;
          const t3 = d2.getTween(), n3 = d2.getPages(), e2 = a2.getPageIndex() || 0, i2 = a2.getPageProgress() || 0;
          if (!(a2 && n3 && n3[e2] && t3)) return;
          const l2 = t3.isRunning() ? t3.getCurrentValues().pos : d2.getPosition();
          if (void 0 === l2) return;
          let s2 = n3[e2].pos + i2 * (f2 - m2);
          s2 = t$7(n3[0].pos, s2, n3[n3.length - 1].pos), t3.from({ pos: l2 }).to({ pos: s2 }).start();
        })();
      }
      function w2() {
        g = true;
      }
      function E2(t2, n2) {
        null == d2 || d2.add(y2(n2), n2.index);
      }
      function T(t2, n2) {
        const e2 = n2.target;
        e2 && !n2.defaultPrevented && "toggle" === e2.dataset.thumbsAction && (function() {
          if (c2 || (b2(true), S()), !c2) return;
          const t3 = (null == d2 ? void 0 : d2.isVertical()) ? "maxWidth" : "maxHeight", n3 = c2.style[t3];
          c2.style[t3] = n3 ? "" : "0px";
        })();
      }
      function L() {
        if (!p2()) return;
        if (!a2 || !d2) return;
        const t2 = (null == d2 ? void 0 : d2.getSlides()) || [];
        let n2 = -0.5 * f2;
        for (const e2 of t2) {
          const t3 = e2.el;
          if (!t3) continue;
          let o2 = a2.getPageProgress(e2.index) || 0;
          o2 = Math.max(-1, Math.min(1, o2)), o2 > -1 && o2 < 1 && (n2 += 0.5 * f2 * (1 - Math.abs(o2))), o2 = Math.round(1e4 * o2) / 1e4, n2 = Math.round(1e4 * n2) / 1e4, t3.style.setProperty("--progress", `${Math.abs(o2)}`), t3.style.setProperty("--shift", `${(null == a2 ? void 0 : a2.isRTL()) ? -1 * n2 : n2}px`), o2 > -1 && o2 < 1 && (n2 += 0.5 * f2 * (1 - Math.abs(o2)));
        }
      }
      return { init: function(t2, n2) {
        u$1 = n2, a2 = t2, a2.on("ready", C), a2.on("initSlides", x2);
      }, destroy: function() {
        var t2, n2;
        null == a2 || a2.off("ready", C), null == a2 || a2.off("initSlides", x2), null == a2 || a2.off("change", w2), null == a2 || a2.off("render", j2), null == a2 || a2.off("addSlide", E2), null == a2 || a2.off("click", T), null === (t2 = null == a2 ? void 0 : a2.getGestures()) || void 0 === t2 || t2.off("start", P), null === (n2 = null == a2 ? void 0 : a2.getContainer()) || void 0 === n2 || n2.classList.remove("has-thumbs"), a2 = void 0, null == d2 || d2.destroy(), d2 = void 0, null == c2 || c2.remove(), c2 = void 0;
      }, getCarousel: function() {
        return d2;
      }, getContainer: function() {
        return c2;
      }, isEnabled: function() {
        return v2();
      } };
    };
    /*! License details at fancyapps.com/license */
    const a$1 = { iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" } }, i$2 = () => {
      let i2;
      function l2(t2, a2) {
        let i3 = a2.src;
        if (!t$8(i3)) return;
        let l3 = a2.type;
        if (!l3) {
          if (l3 || ("#" === i3.charAt(0) ? l3 = "inline" : i3.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i) ? l3 = "image" : i3.match(/\.(pdf)((\?|#).*)?$/i) ? l3 = "pdf" : i3.match(/\.(html|php)((\?|#).*)?$/i) && (l3 = "iframe")), !l3) {
            const t3 = i3.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i);
            t3 && (i3 = `https://maps.google.${t3[1]}/?ll=${(t3[2] ? t3[2] + "&z=" + Math.floor(parseFloat(t3[3])) + (t3[4] ? t3[4].replace(/^\//, "&") : "") : t3[4] + "").replace(/\?/, "&")}&output=${t3[4] && t3[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, l3 = "gmap");
          }
          if (!l3) {
            const t3 = i3.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);
            t3 && (i3 = `https://maps.google.${t3[1]}/maps?q=${t3[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, l3 = "gmap");
          }
          a2.src = i3, a2.type = l3;
        }
      }
      function o2(e2, l3) {
        "iframe" !== l3.type && "pdf" !== l3.type && "gmap" !== l3.type || (function(e3) {
          if (!i2 || !e3.el || !e3.src) return;
          const l4 = document.createElement("iframe");
          l4.classList.add("f-iframe");
          for (const [e4, o4] of Object.entries((function() {
            const e5 = null == i2 ? void 0 : i2.getOptions().Html;
            return t$6(e5) ? Object.assign(Object.assign({}, a$1), e5) : a$1;
          })().iframeAttr || {})) l4.setAttribute(e4, o4);
          l4.onerror = () => {
            i2 && 1 === i2.getState() && i2.showError(e3, "{{IFRAME_ERROR}}");
          }, l4.src = e3.src;
          const o3 = document.createElement("div");
          if (o3.classList.add("f-html"), o3.append(l4), e3.width) {
            let t2 = `${e3.width}`;
            t2.match(/^\d+$/) && (t2 += "px"), o3.style.maxWidth = `${t2}`;
          }
          if (e3.height) {
            let t2 = `${e3.height}`;
            t2.match(/^\d+$/) && (t2 += "px"), o3.style.maxHeight = `${t2}`;
          }
          if (e3.aspectRatio) {
            const t2 = e3.el.getBoundingClientRect();
            o3.style.aspectRatio = `${e3.aspectRatio}`, o3.style[t2.width > t2.height ? "width" : "height"] = "auto", o3.style[t2.width > t2.height ? "maxWidth" : "maxHeight"] = "none";
          }
          e3.contentEl = l4, e3.htmlEl = o3, e3.el.classList.add("has-html"), e3.el.classList.add("has-iframe"), e3.el.classList.add(`has-${e3.type}`), e3.el.prepend(o3), i2.emit("contentReady", e3);
        })(l3);
      }
      function n2(t2, e2) {
        var a2, l3;
        "iframe" !== e2.type && "pdf" !== e2.type && "gmap" !== e2.type || (null == i2 || i2.hideError(e2), null === (a2 = e2.contentEl) || void 0 === a2 || a2.remove(), e2.contentEl = void 0, null === (l3 = e2.htmlEl) || void 0 === l3 || l3.remove(), e2.htmlEl = void 0);
      }
      return { init: function(t2) {
        i2 = t2, i2.on("addSlide", l2), i2.on("attachSlideEl", o2), i2.on("detachSlideEl", n2);
      }, destroy: function() {
        null == i2 || i2.off("addSlide", l2), null == i2 || i2.off("attachSlideEl", o2), null == i2 || i2.off("detachSlideEl", n2), i2 = void 0;
      } };
    };
    /*! License details at fancyapps.com/license */
    const n$2 = (t2, e2 = {}) => {
      const o2 = new URL(t2), n2 = new URLSearchParams(o2.search), i2 = new URLSearchParams();
      for (const [t3, o3] of [...n2, ...Object.entries(e2)]) {
        let e3 = o3 + "";
        if ("t" === t3) {
          let t4 = e3.match(/((\d*)m)?(\d*)s?/);
          t4 && i2.set("start", 60 * parseInt(t4[2] || "0") + parseInt(t4[3] || "0") + "");
        } else i2.set(t3, e3);
      }
      let l2 = i2 + "", s2 = t2.match(/#t=((.*)?\d+s)/);
      return s2 && (l2 += `#t=${s2[1]}`), l2;
    }, i$1 = { autoplay: false, html5videoTpl: `<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto", credentialless: "" }, vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } }, l$2 = () => {
      let l2, s2 = false;
      function a2() {
        const e2 = null == l2 ? void 0 : l2.getOptions().Video;
        return t$6(e2) ? Object.assign(Object.assign({}, i$1), e2) : i$1;
      }
      function r2() {
        var t2;
        return null === (t2 = null == l2 ? void 0 : l2.getPage()) || void 0 === t2 ? void 0 : t2.slides[0];
      }
      const c2 = (t2) => {
        var e2;
        try {
          let o2 = JSON.parse(t2.data);
          if ("https://player.vimeo.com" === t2.origin) {
            if ("ready" === o2.event) for (let o3 of Array.from((null === (e2 = null == l2 ? void 0 : l2.getContainer()) || void 0 === e2 ? void 0 : e2.getElementsByClassName("f-iframe")) || [])) o3 instanceof HTMLIFrameElement && o3.contentWindow === t2.source && (o3.dataset.ready = "true");
          } else if (t2.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === o2.event) {
            const t3 = document.getElementById(o2.id);
            t3 && (t3.dataset.ready = "true");
          }
        } catch (t3) {
        }
      };
      function d2(t2, o2) {
        const i2 = o2.src;
        if (!t$8(i2)) return;
        let l3 = o2.type;
        if (!l3 || "html5video" === l3) {
          const t3 = i2.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);
          t3 && (l3 = "html5video", o2.html5videoFormat = o2.html5videoFormat || "video/" + ("ogv" === t3[1] ? "ogg" : t3[1]));
        }
        if (!l3 || "youtube" === l3) {
          const t3 = i2.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);
          if (t3) {
            const e2 = Object.assign(Object.assign({}, a2().youtube), o2.youtube || {}), s3 = `www.youtube${e2.nocookie ? "-nocookie" : ""}.com`, r3 = n$2(i2, e2), c3 = encodeURIComponent(t3[2]);
            o2.videoId = c3, o2.src = `https://${s3}/embed/${c3}?${r3}`, o2.thumb = o2.thumb || `https://i.ytimg.com/vi/${c3}/mqdefault.jpg`, l3 = "youtube";
          }
        }
        if (!l3 || "vimeo" === l3) {
          const t3 = i2.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);
          if (t3) {
            const e2 = Object.assign(Object.assign({}, a2().vimeo), o2.vimeo || {}), s3 = n$2(i2, e2), r3 = encodeURIComponent(t3[2]), c3 = t3[5] || "";
            o2.videoId = r3, o2.src = `https://player.vimeo.com/video/${r3}?${c3 ? `h=${c3}${s3 ? "&" : ""}` : ""}${s3}`, l3 = "vimeo";
          }
        }
        o2.type = l3;
      }
      function u2(t2, n2) {
        "html5video" === n2.type && (function(t3) {
          if (!l2 || !t3.el || !t3.src) return;
          const { el: n3, src: i2 } = t3;
          if (!n3 || !i2) return;
          const s3 = t3.html5videoTpl || a2().html5videoTpl, r3 = t3.html5videoFormat || a2().html5videoFormat;
          if (!s3) return;
          const c3 = t3.poster || (t3.thumb && t$8(t3.thumb) ? t3.thumb : ""), d3 = e$9(s3.replace(/\{\{src\}\}/gi, i2 + "").replace(/\{\{format\}\}/gi, r3 || "").replace(/\{\{poster\}\}/gi, c3 + ""));
          if (!d3) return;
          const u3 = document.createElement("div");
          u3.classList.add("f-html"), u3.append(d3), t3.contentEl = d3, t3.htmlEl = u3, n3.classList.add(`has-${t3.type}`), n3.prepend(u3), h2(t3), l2.emit("contentReady", t3);
        })(n2), "youtube" !== n2.type && "vimeo" !== n2.type || (function(t3) {
          if (!l2 || !t3.el || !t3.src) return;
          const e2 = document.createElement("iframe");
          e2.classList.add("f-iframe"), e2.setAttribute("id", `f-iframe_${t3.videoId}`);
          for (const [t4, o3] of Object.entries(a2().iframeAttr || {})) e2.setAttribute(t4, o3);
          e2.onload = () => {
            var o3;
            l2 && 1 === l2.getState() && "youtube" === t3.type && (null === (o3 = e2.contentWindow) || void 0 === o3 || o3.postMessage(JSON.stringify({ event: "listening", id: e2.getAttribute("id") }), "*"));
          }, e2.onerror = () => {
            l2 && 1 === l2.getState() && (null == l2 || l2.showError(t3, "{{IFRAME_ERROR}}"));
          }, e2.src = t3.src;
          const o2 = document.createElement("div");
          o2.classList.add("f-html"), o2.append(e2), t3.contentEl = e2, t3.htmlEl = o2, t3.el.classList.add("has-html"), t3.el.classList.add("has-iframe"), t3.el.classList.add(`has-${t3.type}`), t3.el.prepend(o2), h2(t3), l2.emit("contentReady", t3);
        })(n2);
      }
      function m2(t2, e2) {
        var o2, n2;
        "html5video" !== e2.type && "youtube" !== e2.type && "vimeo" !== e2.type || (null === (o2 = e2.contentEl) || void 0 === o2 || o2.remove(), e2.contentEl = void 0, null === (n2 = e2.htmlEl) || void 0 === n2 || n2.remove(), e2.htmlEl = void 0), e2.poller && clearTimeout(e2.poller);
      }
      function f2() {
        s2 = false;
      }
      function p2() {
        if (s2) return;
        s2 = true;
        const t2 = r2();
        (t2 && void 0 !== t2.autoplay ? t2.autoplay : a2().autoplay) && ((function() {
          var t3;
          const e2 = r2(), o2 = null == e2 ? void 0 : e2.el;
          if (o2 && "html5video" === (null == e2 ? void 0 : e2.type)) try {
            const t4 = o2.querySelector("video");
            if (t4) {
              const e3 = t4.play();
              void 0 !== e3 && e3.then((() => {
              })).catch(((e4) => {
                t4.muted = true, t4.play();
              }));
            }
          } catch (t4) {
          }
          const n2 = null == e2 ? void 0 : e2.htmlEl;
          n2 instanceof HTMLIFrameElement && (null === (t3 = n2.contentWindow) || void 0 === t3 || t3.postMessage('{"event":"command","func":"stopVideo","args":""}', "*"));
        })(), (function() {
          const t3 = r2(), e2 = null == t3 ? void 0 : t3.type;
          if (!(null == t3 ? void 0 : t3.el) || "youtube" !== e2 && "vimeo" !== e2) return;
          const o2 = () => {
            if (t3.contentEl && t3.contentEl instanceof HTMLIFrameElement && t3.contentEl.contentWindow) {
              let e3;
              if ("true" === t3.contentEl.dataset.ready) return e3 = "youtube" === t3.type ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, e3 && t3.contentEl.contentWindow.postMessage(JSON.stringify(e3), "*"), void (t3.poller = void 0);
              "youtube" === t3.type && (e3 = { event: "listening", id: t3.contentEl.getAttribute("id") }, t3.contentEl.contentWindow.postMessage(JSON.stringify(e3), "*"));
            }
            t3.poller = setTimeout(o2, 250);
          };
          o2();
        })());
      }
      function h2(t2) {
        const e2 = null == t2 ? void 0 : t2.htmlEl;
        if (t2 && e2 && ("html5video" === t2.type || "youtube" === t2.type || "vimeo" === t2.type)) {
          if (e2.style.aspectRatio = "", e2.style.width = "", e2.style.height = "", e2.style.maxWidth = "", e2.style.maxHeight = "", t2.width) {
            let o2 = `${t2.width}`;
            o2.match(/^\d+$/) && (o2 += "px"), e2.style.maxWidth = `${o2}`;
          }
          if (t2.height) {
            let o2 = `${t2.height}`;
            o2.match(/^\d+$/) && (o2 += "px"), e2.style.maxHeight = `${o2}`;
          }
          if (t2.aspectRatio) {
            const o2 = t2.aspectRatio.split("/"), n2 = parseFloat(o2[0].trim()), i2 = o2[1] ? parseFloat(o2[1].trim()) : 0, l3 = n2 && i2 ? n2 / i2 : n2;
            e2.offsetHeight;
            const s3 = e2.getBoundingClientRect(), a3 = l3 < (s3.width || 1) / (s3.height || 1);
            e2.style.aspectRatio = `${t2.aspectRatio}`, e2.style.width = a3 ? "auto" : "", e2.style.height = a3 ? "" : "auto";
          }
        }
      }
      function v2() {
        h2(r2());
      }
      return { init: function(t2) {
        l2 = t2, l2.on("addSlide", d2), l2.on("attachSlideEl", u2), l2.on("detachSlideEl", m2), l2.on("ready", p2), l2.on("change", f2), l2.on("settle", p2), l2.on("refresh", v2), window.addEventListener("message", c2);
      }, destroy: function() {
        null == l2 || l2.off("addSlide", d2), null == l2 || l2.off("attachSlideEl", u2), null == l2 || l2.off("detachSlideEl", m2), null == l2 || l2.off("ready", p2), null == l2 || l2.off("change", f2), null == l2 || l2.off("settle", p2), null == l2 || l2.off("refresh", v2), window.removeEventListener("message", c2), l2 = void 0;
      } };
    };
    /*! License details at fancyapps.com/license */
    const n$1 = { autoStart: false, btnTpl: '<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' }, t = "in-fullscreen-mode", l$1 = () => {
      let l2;
      function u2(t2) {
        const u3 = null == l2 ? void 0 : l2.getOptions().Fullscreen;
        let o3 = (t$6(u3) ? Object.assign(Object.assign({}, n$1), u3) : n$1)[t2];
        return o3 && "function" == typeof o3 && l2 ? o3(l2) : o3;
      }
      function o2() {
        var e2;
        null === (e2 = null == l2 ? void 0 : l2.getPlugins().Toolbar) || void 0 === e2 || e2.add("fullscreen", { tpl: u2("btnTpl") });
      }
      function c2() {
        if (u2("autoStart")) {
          const e2 = s2();
          e2 && a2(e2);
        }
      }
      function i2(e2, n2) {
        const t2 = n2.target;
        t2 && !n2.defaultPrevented && "toggle" === t2.dataset.fullscreenAction && d2();
      }
      function s2() {
        return u2("el") || (null == l2 ? void 0 : l2.getContainer()) || void 0;
      }
      function r2() {
        const e2 = document;
        return e2.fullscreenEnabled ? !!e2.fullscreenElement : !!e2.webkitFullscreenEnabled && !!e2.webkitFullscreenElement;
      }
      function a2(e2) {
        const n2 = document;
        let l3;
        return e2 || (e2 = n2.documentElement), n2.fullscreenEnabled ? l3 = e2.requestFullscreen() : n2.webkitFullscreenEnabled && (l3 = e2.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)), l3 && l3.then((() => {
          e2.classList.add(t);
        })), l3;
      }
      function f2() {
        const e2 = document;
        let n2;
        return e2.fullscreenEnabled ? n2 = e2.fullscreenElement && e2.exitFullscreen() : e2.webkitFullscreenEnabled && (n2 = e2.webkitFullscreenElement && e2.webkitExitFullscreen()), n2 && n2.then((() => {
          var e3;
          null === (e3 = s2()) || void 0 === e3 || e3.classList.remove(t);
        })), n2;
      }
      function d2() {
        const e2 = s2();
        e2 && (r2() ? f2() : a2(e2));
      }
      return { init: function(e2) {
        l2 = e2, l2.on("initPlugins", o2), l2.on("ready", c2), l2.on("click", i2);
      }, destroy: function() {
        null == l2 || l2.off("initPlugins", o2), null == l2 || l2.off("ready", c2), null == l2 || l2.off("click", i2);
      }, exit: f2, inFullscreen: r2, request: a2, toggle: d2 };
    };
    /*! License details at fancyapps.com/license */
    let n, e = false, o$1 = false, i = false, r = false;
    const a = () => {
      const t2 = new URL(document.URL).hash, n2 = t2.slice(1).split("-"), e2 = n2[n2.length - 1], o2 = e2 && /^\+?\d+$/.test(e2) && parseInt(n2.pop() || "1", 10) || 1;
      return { hash: t2, slug: n2.join("-"), index: o2 };
    }, s = () => {
      if (!n || n.getInstance()) return;
      const { slug: t2, index: e2 } = a();
      if (!t2) return;
      if (!n || n.getInstance()) return;
      const o2 = document.querySelectorAll(`[data-fancybox="${t2}"]`);
      if (!o2.length) return;
      const i2 = o2[e2 - 1];
      i2 && i2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true }));
    }, l = () => {
      var t2, e2;
      if (!n) return;
      if (i) return;
      const o2 = null == n ? void 0 : n.getInstance();
      if (false === (null == o2 ? void 0 : o2.getOptions().Hash)) return;
      const { slug: l2, index: c2 } = a(), u2 = (null === (t2 = null == o2 ? void 0 : o2.getSlide()) || void 0 === t2 ? void 0 : t2.fancybox) || void 0;
      o2 && u2 && (l2 === u2 ? null === (e2 = o2.getCarousel()) || void 0 === e2 || e2.goTo(c2 - 1) : (r = true, o2.close(), r = false)), s();
    }, c = () => {
      n && setTimeout((() => {
        e = true, s(), e = false, window.addEventListener("hashchange", l, false);
      }), 300);
    }, u = () => {
      let t2, n2 = "auto", s2 = "";
      function l2() {
        var i2, r2;
        if (!t2 || !t2.isTopMost()) return;
        if (false === t2.getOptions().Hash) return;
        const l3 = t2.getCarousel();
        if (!l3) return;
        const { hash: u3, slug: d2 } = a(), f2 = t2.getSlide();
        if (!f2) return;
        let h2 = f2.fancybox || "", w2 = parseInt(f2.index + "", 10) + 1;
        if (!h2) return;
        let g = `#${h2}-${w2}`;
        if (((null === (r2 = null === (i2 = t2.getCarousel()) || void 0 === i2 ? void 0 : i2.getPages()) || void 0 === r2 ? void 0 : r2.length) || 0) < 2 && (g = `#${h2}`), u3 !== g && (s2 = u3), history.scrollRestoration && (n2 = history.scrollRestoration, history.scrollRestoration = "manual"), l3.on("change", c2), !e) if (h2 === d2) try {
          window.history.replaceState({}, document.title, window.location.pathname + window.location.search + g);
        } catch (t3) {
        }
        else try {
          window.history.pushState({}, document.title, window.location.pathname + window.location.search + g), o$1 = true;
        } catch (t3) {
        }
      }
      function c2() {
        if (!t2 || !t2.isTopMost()) return;
        if (false === t2.getOptions().Hash) return;
        const { slug: n3 } = a(), e2 = t2.getSlide();
        if (!e2) return;
        let o2 = e2.fancybox || "", r2 = `#${o2}-${e2.index + 1}`;
        if (o2 === n3) {
          i = true;
          try {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + r2);
          } catch (t3) {
          }
          i = false;
        }
      }
      function u2() {
        if (r) return;
        if (!t2 || !t2.isTopMost()) return;
        if (false === t2.getOptions().Hash) return;
        const n3 = t2.getSlide();
        if (!n3) return;
        if (n3.fancybox || "") {
          i = true;
          try {
            !o$1 || e || (function() {
              if (window.parent === window) return false;
              try {
                var t3 = window.frameElement;
              } catch (n4) {
                t3 = null;
              }
              return null === t3 ? "data:" === location.protocol : t3.hasAttribute("sandbox");
            })() ? window.history.replaceState({}, document.title, window.location.pathname + window.location.search + s2) : window.history.back();
          } catch (t3) {
          }
          i = false;
        }
      }
      return { init: function(n3) {
        t2 = n3, t2.on("ready", l2), t2.on("close", u2);
      }, destroy: function() {
        null == t2 || t2.off("ready", l2), null == t2 || t2.off("close", u2);
        const e2 = null == t2 ? void 0 : t2.getCarousel();
        e2 && e2.off("change", c2), t2 = void 0, history.scrollRestoration && n2 && (history.scrollRestoration = n2);
      } };
    };
    u.startFromUrl = s, u.setup = function(e2) {
      n || (n = e2, e$3() && (/complete|interactive|loaded/.test(document.readyState) ? c() : document.addEventListener("DOMContentLoaded", c)));
    };
    /*! License details at fancyapps.com/license */
    const o = Object.assign(Object.assign({}, o$3), { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ELEMENT_NOT_FOUND: "HTML Element Not Found", IFRAME_ERROR: "Error Loading Page" });
    /*! License details at fancyapps.com/license */
    const M = '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';
    r$2().add("close", { tpl: M });
    const k = (e2) => {
      e2.cancelable && e2.preventDefault();
    }, O = (e2) => {
      e2 && e2.dispatchEvent(new CustomEvent("animationend", { bubbles: false, cancelable: true, currentTarget: e2 }));
    }, R = (e2 = null, t2 = "", n2) => {
      if (!e2 || !e2.parentElement || !t2) return void (n2 && n2());
      O(e2);
      const o2 = (i2) => {
        i2.target === e2 && e2.dataset.animationName && (e2.removeEventListener("animationend", o2), delete e2.dataset.animationName, n2 && n2(), e2.classList.remove(t2));
      };
      e2.dataset.animationName = t2, e2.addEventListener("animationend", o2), s$7(e2, t2);
    };
    var _;
    !(function(e2) {
      e2[e2.Init = 0] = "Init", e2[e2.Ready = 1] = "Ready", e2[e2.Closing = 2] = "Closing", e2[e2.Destroyed = 3] = "Destroyed";
    })(_ || (_ = {}));
    const I = { ajax: null, backdropClick: "close", Carousel: {}, closeButton: "auto", closeExisting: false, delegateEl: void 0, dragToClose: true, fadeEffect: true, groupAll: false, groupAttr: "data-fancybox", hideClass: "f-fadeOut", hideScrollbar: true, id: void 0, idle: false, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, l10n: o, mainClass: "", mainStyle: {}, mainTpl: '<dialog class="fancybox__dialog">\n    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">\n      <div class="fancybox__backdrop"></div>\n      <div class="fancybox__carousel"></div>\n    </div>\n  </dialog>', on: {}, parentEl: void 0, placeFocusBack: true, showClass: "f-zoomInUp", startIndex: 0, sync: void 0, theme: "dark", triggerEl: void 0, triggerEvent: void 0, zoomEffect: true }, H = /* @__PURE__ */ new Map();
    let z = 0;
    const D = "with-fancybox", B = () => {
      let r2, T, A, B2, q, V, F, W = _.Init, $2 = Object.assign({}, I), K = -1, U = {}, X = [], G = false, Y = true, Z = 0;
      function J(e2, ...t2) {
        let n2 = $2[e2];
        return n2 && "function" == typeof n2 ? n2(Oe, ...t2) : n2;
      }
      function Q(e2, t2 = []) {
        const n2 = J("l10n") || {};
        e2 = String(e2).replace(/\{\{(\w+)\}\}/g, ((e3, t3) => n2[t3] || e3));
        for (let n3 = 0; n3 < t2.length; n3++) e2 = e2.split(t2[n3][0]).join(t2[n3][1]);
        return e2 = e2.replace(/\{\{(.*?)\}\}/g, ((e3, t3) => t3));
      }
      const ee = /* @__PURE__ */ new Map();
      function te(e2, ...t2) {
        const n2 = [...ee.get(e2) || []];
        for (const [t3, o2] of Object.entries($2.on || {})) (t3 === e2 || t3.split(" ").indexOf(e2) > -1) && n2.push(o2);
        for (const e3 of n2) e3 && "function" == typeof e3 && e3(Oe, ...t2);
        "*" !== e2 && te("*", e2, ...t2);
      }
      function ne(t2 = [], n2 = {}) {
        W !== _.Init && (Oe.destroy(), W = _.Init), $2 = r$4({}, I, n2), K = J("id") || "fancybox-" + ++z;
        const a2 = H.get(K);
        if (a2 && a2.destroy(), H.set(K, Oe), te("init"), (function() {
          for (const [e2, t3] of Object.entries(Object.assign(Object.assign({}, N.Plugins), $2.plugins || {}))) if (e2 && !U[e2] && t3 instanceof Function) {
            const n3 = t3();
            n3.init(Oe), U[e2] = n3;
          }
          te("initPlugins");
        })(), (function(e2 = []) {
          te("initSlides", e2), X = [...e2];
        })(t2), (function() {
          const t3 = J("parentEl") || document.body;
          if (!(t3 && t3 instanceof HTMLElement)) return;
          const n3 = Q(J("mainTpl") || "");
          if (r2 = e$9(n3) || void 0, !r2) return;
          if (T = r2.querySelector(".fancybox__container"), !(T && T instanceof HTMLElement)) return;
          const l2 = J("mainClass");
          l2 && s$7(T, l2);
          const a3 = J("mainStyle");
          if (a3 && t$6(a3)) for (const [e2, t4] of Object.entries(a3)) T.style.setProperty(e2, t4);
          const u2 = J("theme"), d2 = "auto" === u2 ? window.matchMedia("(prefers-color-scheme:light)").matches : "light" === u2;
          T.setAttribute("theme", d2 ? "light" : "dark"), r2.setAttribute("id", `${K}`), r2.addEventListener("keydown", ((e2) => {
            "Escape" === e2.key && k(e2);
          })), r2.addEventListener("wheel", ((e2) => {
            const t4 = e2.target;
            let n4 = J("wheel", e2);
            t4.closest(".f-thumbs") && (n4 = "slide");
            const o2 = "slide" === n4, s2 = [-e2.deltaX || 0, -e2.deltaY || 0, -e2.detail || 0].reduce((function(e3, t5) {
              return Math.abs(t5) > Math.abs(e3) ? t5 : e3;
            })), l3 = Math.max(-1, Math.min(1, s2)), r3 = Date.now();
            Z && r3 - Z < 300 ? o2 && k(e2) : (Z = r3, te("wheel", e2, l3), e2.defaultPrevented || ("close" === n4 ? Ae(e2) : "slide" === n4 && B2 && !n$7(t4) && (k(e2), B2[l3 > 0 ? "prev" : "next"]())));
          }), { capture: true, passive: false }), r2.addEventListener("cancel", ((e2) => {
            Ae(e2);
          })), t3.append(r2), 1 === H.size && (J("hideScrollbar") && t$3(true), document.documentElement.classList.add(D));
          r2 instanceof HTMLDialogElement && r2.showModal();
          te("initLayout");
        })(), (function() {
          if (A = (null == r2 ? void 0 : r2.querySelector(".fancybox__carousel")) || void 0, !A) return;
          A.fancybox = Oe;
          const e2 = r$4({}, { Autoplay: { autoStart: false, pauseOnHover: false, progressbarParentEl: (e3) => {
            const t3 = e3.getContainer();
            return (null == t3 ? void 0 : t3.querySelector(".f-carousel__toolbar [data-autoplay-action]")) || t3;
          } }, Fullscreen: { el: T }, Toolbar: { absolute: true, items: { counter: { tpl: '<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>' } }, display: { left: ["counter"], right: ["toggleFull", "autoplay", "fullscreen", "thumbs", "close"] } }, Video: { autoplay: true }, Thumbs: { minCount: 2, Carousel: { classes: { container: "fancybox__thumbs" } } }, classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", slide: "fancybox__slide" }, spinnerTpl: '<div class="f-spinner" data-fancybox-close></div>', dragFree: false, slidesPerPage: 1, plugins: { Sync: i$3, Arrows: s$2, Lazyload: l$4, Zoomable: s$4, Html: i$2, Video: l$2, Autoplay: n$3, Fullscreen: l$1, Thumbs: a$2, Toolbar: r$2 } }, J("Carousel") || {}, { slides: X, enabled: true, initialPage: J("startIndex") || 0, l10n: J("l10n") });
          B2 = y(A, e2), te("initCarousel", B2), B2.on("*", ((e3, t3, ...n3) => {
            te(`Carousel.${t3}`, e3, ...n3);
          })), B2.on("attachSlideEl", ie), B2.on("detachSlideEl", se), B2.on("contentReady", ue), B2.on("ready", ae), B2.on("change", re), B2.on("settle", ce), B2.on("thumbs:ready", de), B2.on("thumbs:destroy", de), B2.init();
        })(), r2 && T) {
          if (J("closeExisting")) for (const [e2, t3] of H.entries()) e2 !== K && t3.close();
          J("fadeEffect") ? (setTimeout((() => {
            oe();
          }), 500), s$7(T, "is-revealing")) : oe(), T.classList.add("is-ready"), W = _.Ready, te("ready");
        }
      }
      function oe() {
        s$6(T, "is-revealing");
        try {
          if (document.activeElement === r2) {
            ((null == T ? void 0 : T.querySelector("[autofocus]")) || T).focus();
          }
        } catch (e2) {
        }
      }
      function ie(e2, n2) {
        var o2;
        ye(n2), fe(), null === (o2 = n2.el) || void 0 === o2 || o2.addEventListener("click", le), "inline" !== n2.type && "clone" !== n2.type || (function(e3) {
          if (!B2 || !e3 || !e3.el) return;
          let n3 = null;
          if (t$8(e3.src)) {
            const t2 = e3.src.split("#", 2).pop();
            n3 = t2 ? document.getElementById(t2) : null;
          }
          if (n3) {
            if (s$7(n3, "f-html"), "clone" === e3.type || n3.closest(".fancybox__carousel")) {
              n3 = n3.cloneNode(true);
              const t2 = n3.dataset.animationName;
              t2 && (n3.classList.remove(t2), delete n3.dataset.animationName);
              let o3 = n3.getAttribute("id");
              o3 = o3 ? `${o3}--clone` : `clone-${K}-${e3.index}`, n3.setAttribute("id", o3);
            } else if (n3.parentNode) {
              const t2 = document.createElement("div");
              t2.inert = true, n3.parentNode.insertBefore(t2, n3), e3.placeholderEl = t2;
            }
            e3.htmlEl = n3, s$7(e3.el, "has-html"), e3.el.prepend(n3), n3.classList.remove("hidden"), "none" === n3.style.display && (n3.style.display = ""), "none" === getComputedStyle(n3).getPropertyValue("display") && (n3.style.display = n3.dataset.display || "flex"), null == B2 || B2.emit("contentReady", e3);
          } else null == B2 || B2.showError(e3, "{{ELEMENT_NOT_FOUND}}");
        })(n2), "ajax" === n2.type && (function(e3) {
          const t2 = e3.el;
          if (!t2) return;
          if (e3.htmlEl || e3.xhr) return;
          null == B2 || B2.showLoading(e3), e3.state = 0;
          const n3 = new XMLHttpRequest();
          n3.onreadystatechange = function() {
            if (n3.readyState === XMLHttpRequest.DONE && W === _.Ready) if (null == B2 || B2.hideLoading(e3), e3.state = 1, 200 === n3.status) {
              let o4 = n3.responseText + "", i2 = null, s2 = null;
              if (e3.filter) {
                const t3 = document.createElement("div");
                t3.innerHTML = o4, s2 = t3.querySelector(e3.filter + "");
              }
              s2 && s2 instanceof HTMLElement ? i2 = s2 : (i2 = document.createElement("div"), i2.innerHTML = o4), i2.classList.add("f-html"), e3.htmlEl = i2, t2.classList.add("has-html"), t2.classList.add("has-ajax"), t2.prepend(i2), null == B2 || B2.emit("contentReady", e3);
            } else null == B2 || B2.showError(e3);
          };
          const o3 = J("ajax") || null;
          n3.open(o3 ? "POST" : "GET", e3.src + ""), n3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n3.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n3.send(o3), e3.xhr = n3;
        })(n2);
      }
      function se(e2, t2) {
        var n2;
        !(function(e3) {
          e3.closeButtonEl && (e3.closeButtonEl.remove(), e3.closeButtonEl = void 0);
        })(t2), null === (n2 = t2.el) || void 0 === n2 || n2.removeEventListener("click", le), "inline" !== t2.type && "clone" !== t2.type || (function(e3) {
          const t3 = e3.htmlEl, n3 = e3.placeholderEl;
          t3 && ("none" !== getComputedStyle(t3).getPropertyValue("display") && (t3.style.display = "none"), t3.offsetHeight);
          n3 && (t3 && n3.parentNode && n3.parentNode.insertBefore(t3, n3), n3.remove());
          e3.htmlEl = void 0, e3.placeholderEl = void 0;
        })(t2), t2.xhr && (t2.xhr.abort(), t2.xhr = void 0);
      }
      function le(e2) {
        if (!be()) return;
        if (W !== _.Ready) return k(e2), void e2.stopPropagation();
        if (e2.defaultPrevented) return;
        if (!f.isClickAllowed()) return;
        const t2 = e2.composedPath()[0];
        t2.closest(".fancybox__carousel") && t2.classList.contains("fancybox__slide") && me(e2);
      }
      function re() {
        Y = false, T && B2 && T.classList.remove("is-revealing"), fe();
        const e2 = J("sync");
        if (B2 && e2) {
          const t2 = e2.getPageIndex(B2.getPageIndex()) || 0;
          e2.goTo(t2, { transition: false });
        }
      }
      function ae() {
        var e2;
        if (W !== _.Ready) return;
        he(Ee()), (function() {
          if (!J("dragToClose")) return;
          if (!B2) return;
          const e3 = B2.getViewport();
          if (!e3) return;
          if (q = f(e3).init(), !q) return;
          let t3 = false, n2 = 0, o2 = 0, s2 = {}, l2 = 1;
          function r3() {
            var e4, t4;
            null == V || V.spring({ clamp: true, mass: 1, tension: 0 === o2 ? 140 : 800, friction: 17, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0 }).from({ y: n2 }).to({ y: o2 }).start();
            const i2 = (null === (e4 = null == B2 ? void 0 : B2.getViewport()) || void 0 === e4 ? void 0 : e4.getBoundingClientRect().height) || 0, s3 = null === (t4 = Ee()) || void 0 === t4 ? void 0 : t4.panzoomRef;
            if (i2 && s3) if (0 === o2) s3.execute(v$1.Reset);
            else {
              const e5 = t$4(Math.abs(n2), 0, 0.33 * i2, l2, 0.75 * l2, false);
              s3.execute(v$1.ZoomTo, { scale: e5 });
            }
          }
          const c2 = (e4) => {
            var t4;
            const n3 = e4.srcEvent, o3 = n3.target;
            return B2 && !(e$6(n3) && (null === (t4 = n3.touches) || void 0 === t4 ? void 0 : t4.length) > 1) && o3 && !n$7(o3);
          };
          V = c$2().on("step", ((t4) => {
            if (T && e3 && W === _.Ready) {
              const o3 = e3.getBoundingClientRect().height;
              n2 = Math.min(o3, Math.max(-1 * o3, t4.y));
              const i2 = t$4(Math.abs(n2), 0, 0.5 * o3, 1, 0, true);
              T.style.setProperty("--f-drag-opacity", i2 + ""), T.style.setProperty("--f-drag-offset", n2 + "px");
            }
          })), q.on("start", (function() {
            t3 || (null == V || V.pause(), o2 = n2);
          })).on("panstart", ((e4) => {
            var n3, o3;
            if (!t3 && c2(e4) && "y" === e4.axis) {
              k(e4.srcEvent), t3 = true, Te(), null === (n3 = null == B2 ? void 0 : B2.getViewport()) || void 0 === n3 || n3.classList.add("is-dragging");
              const i2 = null === (o3 = Ee()) || void 0 === o3 ? void 0 : o3.panzoomRef;
              if (i2) {
                l2 = i2.getTransform().scale || 1;
                const e5 = i2.getOptions();
                s2 = Object.assign({}, e5), e5.bounds = false, e5.gestures = false;
              }
            } else t3 = false;
          })).on("pan", (function(e4) {
            t3 && c2(e4) && (k(e4.srcEvent), e4.srcEvent.stopPropagation(), "y" === e4.axis && (o2 += e4.deltaY, r3()));
          })).on("end", ((e4) => {
            var i2, l3, a2;
            if (null === (i2 = null == B2 ? void 0 : B2.getViewport()) || void 0 === i2 || i2.classList.remove("is-dragging"), t3) {
              const t4 = null === (l3 = Ee()) || void 0 === l3 ? void 0 : l3.panzoomRef;
              if (t4) {
                null === (a2 = t4.getTween()) || void 0 === a2 || a2.end();
                const e5 = t4.getOptions();
                e5.bounds = s2.bounds || false, e5.gestures = s2.gestures || false;
              }
              c2(e4) && "y" === e4.axis && (Math.abs(e4.velocityY) > 5 || Math.abs(n2) > 50) && Ae(e4.srcEvent, "f-throwOut" + (e4.velocityY > 0 ? "Down" : "Up"));
            }
            t3 = false, W === _.Ready && 0 !== n2 && (o2 = 0, r3());
          }));
        })(), document.body.addEventListener("click", pe), document.body.addEventListener("keydown", ve, { passive: false, capture: true }), fe(), je();
        const t2 = J("sync");
        t2 && (null === (e2 = t2.getTween()) || void 0 === e2 || e2.start());
      }
      function ce() {
        (null == B2 ? void 0 : B2.canGoNext()) ? je() : Ce();
      }
      function ue(e2, t2) {
        ye(t2), he(t2);
      }
      function de() {
        var e2;
        const t2 = null == B2 ? void 0 : B2.getPlugins().Thumbs;
        s$5(T, "has-thumbs", (null == t2 ? void 0 : t2.isEnabled()) || false), s$5(T, "has-vertical-thumbs", (null === (e2 = null == t2 ? void 0 : t2.getCarousel()) || void 0 === e2 ? void 0 : e2.isVertical()) || false);
      }
      function fe() {
        if (T) {
          const e2 = (null == B2 ? void 0 : B2.getPages()) || [], t2 = (null == B2 ? void 0 : B2.getPageIndex()) || 0;
          for (const e3 of T.querySelectorAll("[data-fancybox-index]")) e3.innerHTML = t2 + "";
          for (const e3 of T.querySelectorAll("[data-fancybox-page]")) e3.innerHTML = t2 + 1 + "";
          for (const t3 of T.querySelectorAll("[data-fancybox-pages]")) t3.innerHTML = e2.length + "";
        }
      }
      function me(e2) {
        if (!!e2.composedPath()[0].closest("[data-fancybox-close]")) return void Ae(e2);
        if (te("backdropClick", e2), e2.defaultPrevented) return;
        J("backdropClick") && Ae(e2);
      }
      function ge() {
        Se();
      }
      function ve(e2) {
        if (!be()) return;
        if (W !== _.Ready) return;
        const t2 = e2.key, o2 = J("keyboard");
        if (!o2) return;
        if (e2.ctrlKey || e2.altKey || e2.shiftKey) return;
        const i2 = e2.composedPath()[0];
        if (!n$8(i2)) return;
        if ("Escape" !== t2 && ((e3) => {
          const t3 = ["input", "textarea", "select", "option", "video", "iframe", "[contenteditable]", "[data-selectable]", "[data-draggable]"].join(",");
          return e3.matches(t3) || e3.closest(t3);
        })(i2)) return;
        if (te("keydown", e2), e2.defaultPrevented) return;
        const s2 = o2[t2];
        if (s2) switch (s2) {
          case "close":
            Ae(e2);
            break;
          case "next":
            k(e2), null == B2 || B2.next();
            break;
          case "prev":
            k(e2), null == B2 || B2.prev();
        }
      }
      function pe(e2) {
        if (!be()) return;
        if (W !== _.Ready) return;
        if (Se(), e2.defaultPrevented) return;
        const t2 = e2.composedPath()[0], n2 = !!t2.closest("[data-fancybox-close]"), o2 = t2.classList.contains("fancybox__backdrop");
        (n2 || o2) && me(e2);
      }
      function ye(e2) {
        var t2;
        const { el: n2, htmlEl: i2, closeButtonEl: s2 } = e2;
        if (!n2 || !i2 || s2) return;
        let l2 = J("closeButton");
        if ("auto" === l2 && (l2 = true !== (null === (t2 = null == B2 ? void 0 : B2.getPlugins().Toolbar) || void 0 === t2 ? void 0 : t2.isEnabled())), l2) {
          const t3 = e$9(Q(M));
          t3 && (s$7(t3, "is-close-button"), e2.closeButtonEl = i2.insertAdjacentElement("afterbegin", t3), n2.classList.add("has-close-btn"));
        }
      }
      function he(e2) {
        if (!(Y && B2 && 1 === B2.getState() && e2 && e2.index === B2.getOptions().initialPage && e2.el && e2.el.parentElement)) return;
        if (void 0 !== e2.state && 1 !== e2.state) return;
        Y = false;
        const t2 = e2.panzoomRef, n2 = null == t2 ? void 0 : t2.getTween(), o2 = J("zoomEffect") && n2 ? we(e2) : void 0;
        if (t2 && n2 && o2) {
          const { x: e3, y: i3, scale: s2 } = t2.getStartPosition();
          return void n2.spring({ tension: 215, friction: 25, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0 }).from(o2).to({ x: e3, y: i3, scale: s2 }).start();
        }
        const i2 = (null == t2 ? void 0 : t2.getContent()) || e2.htmlEl;
        i2 && R(i2, J("showClass", e2));
      }
      function be() {
        var e2;
        return (null === (e2 = N.getInstance()) || void 0 === e2 ? void 0 : e2.getId()) === K;
      }
      function Ee() {
        var e2;
        return null === (e2 = null == B2 ? void 0 : B2.getPage()) || void 0 === e2 ? void 0 : e2.slides[0];
      }
      function xe() {
        const e2 = Ee();
        return e2 ? e2.triggerEl || J("triggerEl") : void 0;
      }
      function we(e2) {
        var t2, n2;
        const o2 = e2.thumbEl;
        if (!o2 || !((e3) => {
          const t3 = e3.getBoundingClientRect(), n3 = e3.closest("[style]"), o3 = null == n3 ? void 0 : n3.parentElement;
          if (n3 && n3.style.transform && o3) {
            const e4 = o3.getBoundingClientRect();
            if (t3.left < e4.left || t3.left > e4.left + e4.width - t3.width) return false;
            if (t3.top < e4.top || t3.top > e4.top + e4.height - t3.height) return false;
          }
          const i3 = Math.max(document.documentElement.clientHeight, window.innerHeight), s3 = Math.max(document.documentElement.clientWidth, window.innerWidth);
          return !(t3.bottom < 0 || t3.top - i3 >= 0 || t3.right < 0 || t3.left - s3 >= 0);
        })(o2)) return;
        const i2 = null === (n2 = null === (t2 = e2.panzoomRef) || void 0 === t2 ? void 0 : t2.getWrapper()) || void 0 === n2 ? void 0 : n2.getBoundingClientRect(), s2 = null == i2 ? void 0 : i2.width, l2 = null == i2 ? void 0 : i2.height;
        if (!s2 || !l2) return;
        const r3 = o2.getBoundingClientRect();
        let a2 = r3.width, c2 = r3.height, u2 = r3.left, d2 = r3.top;
        if (!r3 || !a2 || !c2) return;
        if (o2 instanceof HTMLImageElement) {
          const e3 = window.getComputedStyle(o2).getPropertyValue("object-fit");
          if ("contain" === e3 || "scale-down" === e3) {
            const { width: t3, height: n3 } = ((e4, t4, n4, o3, i3 = "contain") => {
              if ("contain" === i3 || e4 > n4 || t4 > o3) {
                const i4 = n4 / e4, s3 = o3 / t4, l3 = Math.min(i4, s3);
                e4 *= l3, t4 *= l3;
              }
              return { width: e4, height: t4 };
            })(o2.naturalWidth, o2.naturalHeight, a2, c2, e3);
            u2 += 0.5 * (a2 - t3), d2 += 0.5 * (c2 - n3), a2 = t3, c2 = n3;
          }
        }
        if (Math.abs(s2 / l2 - a2 / c2) > 0.1) return;
        return { x: u2 + 0.5 * a2 - (i2.left + 0.5 * s2), y: d2 + 0.5 * c2 - (i2.top + 0.5 * l2), scale: a2 / s2 };
      }
      function Le() {
        F && clearTimeout(F), F = void 0, document.removeEventListener("mousemove", ge);
      }
      function je() {
        if (G) return;
        if (F) return;
        const e2 = J("idle");
        e2 && (F = setTimeout(Pe, e2));
      }
      function Pe() {
        T && (Le(), s$7(T, "is-idle"), document.addEventListener("mousemove", ge), G = true);
      }
      function Se() {
        G && (Ce(), je());
      }
      function Ce() {
        Le(), null == T || T.classList.remove("is-idle"), G = false;
      }
      function Te() {
        if (J("placeFocusBack")) {
          const t2 = xe();
          !t2 || (e2 = t2.getBoundingClientRect()).bottom > 0 && e2.right > 0 && e2.left < (window.innerWidth || document.documentElement.clientWidth) && e2.top < (window.innerHeight || document.documentElement.clientHeight) || t2.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
        }
        var e2;
      }
      function Ae(e2, t2) {
        var n2, o2, i2, s2, r3;
        if (W === _.Closing || W === _.Destroyed) return;
        const a2 = new Event("shouldClose", { bubbles: true, cancelable: true });
        if (te("shouldClose", a2, e2), a2.defaultPrevented) return;
        if (Le(), e2) {
          if (e2.defaultPrevented) return;
          k(e2), e2.stopPropagation(), e2.stopImmediatePropagation();
        }
        if (W = _.Closing, null == V || V.pause(), null == q || q.destroy(), B2) {
          null === (n2 = B2.getGestures()) || void 0 === n2 || n2.destroy(), null === (o2 = B2.getTween()) || void 0 === o2 || o2.pause();
          for (const e3 of B2.getSlides()) {
            const t3 = e3.panzoomRef;
            t3 && (r$4(t3.getOptions(), { clickAction: false, dblClickAction: false, wheelAction: false, bounds: false, minScale: 0, maxScale: 1 / 0 }), null === (i2 = t3.getGestures()) || void 0 === i2 || i2.destroy(), null === (s2 = t3.getTween()) || void 0 === s2 || s2.pause());
          }
        }
        const c2 = null == B2 ? void 0 : B2.getPlugins();
        null === (r3 = null == c2 ? void 0 : c2.Autoplay) || void 0 === r3 || r3.stop();
        const u2 = null == c2 ? void 0 : c2.Fullscreen;
        u2 && u2.inFullscreen() ? Promise.resolve(u2.exit()).then((() => {
          setTimeout((() => {
            Me(e2, t2);
          }), 150);
        })) : Me(e2, t2);
      }
      function Me(e2, t2) {
        var n2, o2, i2, s2;
        if (W !== _.Closing) return;
        te("close", e2), document.body.removeEventListener("click", pe), document.body.removeEventListener("keydown", ve, { passive: false, capture: true }), Te(), J("fadeEffect") && (null == T || T.classList.remove("is-ready"), null == T || T.classList.add("is-hiding")), null == T || T.classList.add("is-closing");
        const l2 = Ee(), r3 = null == l2 ? void 0 : l2.panzoomRef, a2 = null === (n2 = null == l2 ? void 0 : l2.panzoomRef) || void 0 === n2 ? void 0 : n2.getTween(), c2 = t2 || J("hideClass");
        let u2 = false, d2 = false;
        if (B2 && l2 && r3 && a2) {
          let e3;
          J("zoomEffect") && ((null === (i2 = null === (o2 = B2.getTween()) || void 0 === o2 ? void 0 : o2.getCurrentVelocities()) || void 0 === i2 ? void 0 : i2.pos) || 0) < 700 && 1 === l2.state && (e3 = we(l2)), e3 && (u2 = true, B2.on("refresh", (() => {
            const e4 = we(l2);
            e4 && a2.to(Object.assign(Object.assign({}, y$1), e4));
          })), a2.easing(c$2.Easings.EaseOut).duration(350).from(Object.assign({}, r3.getTransform())).to(Object.assign(Object.assign({}, y$1), e3)).start());
        }
        const m2 = (null == l2 ? void 0 : l2.htmlEl) || (null === (s2 = null == l2 ? void 0 : l2.panzoomRef) || void 0 === s2 ? void 0 : s2.getWrapper());
        m2 && O(m2), !u2 && c2 && m2 && (d2 = true, R(m2, c2, (() => {
          ke();
        }))), u2 || d2 ? setTimeout((() => {
          ke();
        }), 350) : ke();
      }
      function ke() {
        var e2, t2, n2, o2, i2;
        if (W === _.Destroyed) return;
        W = _.Destroyed;
        const l2 = xe();
        te("destroy"), null === (t2 = null === (e2 = J("sync")) || void 0 === e2 ? void 0 : e2.getPlugins().Autoplay) || void 0 === t2 || t2.resume(), null === (o2 = null === (n2 = J("sync")) || void 0 === n2 ? void 0 : n2.getPlugins().Autoscroll) || void 0 === o2 || o2.resume(), r2 instanceof HTMLDialogElement && r2.close(), null === (i2 = null == B2 ? void 0 : B2.getContainer()) || void 0 === i2 || i2.classList.remove("is-idle"), null == B2 || B2.destroy();
        for (const e3 of Object.values(U)) null == e3 || e3.destroy();
        if (U = {}, null == r2 || r2.remove(), r2 = void 0, T = void 0, B2 = void 0, H.delete(K), !H.size && (t$3(false), document.documentElement.classList.remove(D), J("placeFocusBack"))) try {
          null == l2 || l2.focus({ preventScroll: true });
        } catch (e3) {
        }
      }
      const Oe = { close: Ae, destroy: ke, getCarousel: function() {
        return B2;
      }, getContainer: function() {
        return T;
      }, getId: function() {
        return K;
      }, getOptions: function() {
        return $2;
      }, getPlugins: function() {
        return U;
      }, getSlide: function() {
        return Ee();
      }, getState: function() {
        return W;
      }, init: function(e2 = [], t2 = {}) {
        return ne(e2, t2), Oe;
      }, isCurrentSlide: function(e2) {
        const t2 = Ee();
        return !(!e2 || !t2) && t2.index === e2.index;
      }, isTopMost: function() {
        return be();
      }, off: function(e2, t2) {
        return ee.has(e2) && ee.set(e2, ee.get(e2).filter(((e3) => e3 !== t2))), Oe;
      }, on: function(e2, t2) {
        return ee.set(e2, [...ee.get(e2) || [], t2]), Oe;
      }, toggleIdle(e2) {
        (G || true === e2) && Pe(), G && false !== e2 || Ce();
      } };
      return Oe;
    };
    const N = { Plugins: { Hash: u }, version: "6.0.34", openers: /* @__PURE__ */ new Map(), bind: function(e2, n2, o2) {
      if (!e$3()) return;
      let i2 = document.body, s2 = "[data-fancybox]", l2 = {};
      if (t$8(e2) ? (i2 = document.body, s2 = e2, "object" == typeof n2 && (l2 = n2 || {})) : e2 instanceof Element && (i2 = e2, t$8(n2) && (s2 = n2), "object" == typeof o2 && (l2 = o2 || {})), !(i2 && i2 instanceof Element && s2)) return false;
      const a2 = N.openers.get(i2) || /* @__PURE__ */ new Map();
      if (a2.set(s2, l2), N.openers.set(i2, a2), 1 === a2.size) {
        i2.addEventListener("click", N.fromEvent);
        for (const e3 of Object.values(N.Plugins)) {
          const t2 = e3.setup;
          "function" == typeof t2 && t2(N);
        }
      }
      return true;
    }, close: function(e2 = true, ...t2) {
      if (e2) for (const e3 of H.values()) e3.close(...t2);
      else {
        const e3 = N.getInstance();
        e3 && e3.close(...t2);
      }
    }, destroy: function() {
      let e2;
      for (; e2 = N.getInstance(); ) e2.destroy();
      for (const e3 of N.openers.keys()) e3.removeEventListener("click", N.fromEvent);
      N.openers.clear();
    }, fromEvent: function(e2) {
      var t2, n2, o2;
      if (e2.defaultPrevented) return;
      if (e2.button && 0 !== e2.button) return;
      if (e2.ctrlKey || e2.metaKey || e2.shiftKey) return;
      let i2 = e2.composedPath()[0];
      if (i2.closest(".fancybox__container.is-hiding")) return k(e2), void e2.stopPropagation();
      const s2 = i2.closest("[data-fancybox-delegate]") || void 0;
      if (s2) {
        const e3 = s2.dataset.fancyboxDelegate || "", t3 = document.querySelectorAll(`[data-fancybox="${e3}"]`);
        i2 = t3[parseInt(s2.dataset.fancyboxIndex || "", 10) || 0] || t3[0];
      }
      if (!(i2 && i2 instanceof Element)) return;
      let r2, a2, c2 = {};
      for (const [e3, t3] of N.openers) if (t3 && e3.contains(i2)) for (const [n3, o3] of t3) {
        let t4 = null;
        try {
          t4 = i2.closest(n3);
        } catch (e4) {
        }
        t4 && (i2 = t4, r2 = e3, a2 = n3, r$4(c2, o3 || {}));
      }
      if (!r2 || !a2) return;
      k(e2);
      const u2 = r$4({}, I, { triggerEvent: e2, triggerEl: i2, delegateEl: s2 }, c2), d2 = u2.groupAll, f2 = u2.groupAttr, m2 = f2 && i2 ? i2.getAttribute(`${f2}`) : "";
      let g = [];
      const v2 = null === (t2 = i2.closest(".f-carousel")) || void 0 === t2 ? void 0 : t2.carousel;
      if (v2) {
        const e3 = [];
        for (const t3 of null == v2 ? void 0 : v2.getSlides()) {
          const n3 = t3.el;
          n3 && (n3.matches(a2) ? e3.push(n3) : e3.push(...[].slice.call(n3.querySelectorAll(a2))));
        }
        e3.length && (g = [...e3], null === (n2 = v2.getPlugins().Autoplay) || void 0 === n2 || n2.pause(), null === (o2 = v2.getPlugins().Autoscroll) || void 0 === o2 || o2.pause(), u2.sync = v2);
      } else (!i2 || m2 || d2) && (g = [].slice.call(r2.querySelectorAll(a2)));
      if (i2 && !d2 && (g = f2 && m2 ? g.filter(((e3) => e3.getAttribute(`${f2}`) === m2)) : [i2]), !g.length) return;
      const p2 = N.getInstance();
      if (p2) {
        const e3 = p2.getOptions().triggerEl;
        if (e3 && g.indexOf(e3) > -1) return;
      }
      return Object.assign({}, u2.Carousel || {}).rtl && (g = g.reverse()), i2 && (u2.startIndex = g.indexOf(i2)), N.fromNodes(g, u2);
    }, fromNodes: function(e2, t2) {
      t2 = r$4({}, I, t2 || {});
      const n2 = [], o2 = (e3) => e3 instanceof HTMLImageElement ? e3 : e3 instanceof HTMLElement ? e3.querySelector("img:not([aria-hidden])") : void 0;
      for (const i2 of e2) {
        const s2 = i2.dataset || {}, l2 = t2.delegateEl && e2.indexOf(i2) === t2.startIndex ? t2.delegateEl : void 0, r2 = o2(l2) || o2(i2) || void 0, a2 = s2.src || i2.getAttribute("href") || i2.getAttribute("currentSrc") || i2.getAttribute("src") || void 0, c2 = s2.thumb || s2.thumbSrc || (null == r2 ? void 0 : r2.getAttribute("currentSrc")) || (null == r2 ? void 0 : r2.getAttribute("src")) || (null == r2 ? void 0 : r2.dataset.lazySrc) || void 0, u2 = { src: a2, alt: s2.alt || (null == r2 ? void 0 : r2.getAttribute("alt")) || void 0, thumbSrc: c2, thumbEl: r2, triggerEl: i2, delegateEl: l2 };
        for (const e3 in s2) {
          let t3 = s2[e3] + "";
          t3 = "false" !== t3 && ("true" === t3 || t3), u2[e3] = t3;
        }
        n2.push(u2);
      }
      return N.show(n2, t2);
    }, fromSelector: function(e2, n2, o2) {
      let i2 = document.body, s2 = "", r2 = {};
      if (t$8(e2) ? s2 = e2 : e2 instanceof Element && (i2 = e2, t$8(n2) && (s2 = n2), "object" == typeof o2 && (r2 = o2 || {})), !(i2 && i2 instanceof Element && s2)) return;
      const a2 = N.openers.get(i2);
      return a2 ? (r2 = r$4({}, a2.get(s2) || {}, r2), r2 ? N.fromNodes(Array.from(i2.querySelectorAll(s2)), r2) : void 0) : void 0;
    }, getCarousel: function() {
      var e2;
      return (null === (e2 = N.getInstance()) || void 0 === e2 ? void 0 : e2.getCarousel()) || void 0;
    }, getDefaults: function() {
      return I;
    }, getInstance: function(e2) {
      if (e2) {
        const t2 = H.get(e2);
        return t2 && t2.getState() !== _.Destroyed ? t2 : void 0;
      }
      return Array.from(H.values()).reverse().find(((e3) => {
        if (e3.getState() !== _.Destroyed) return e3;
      })) || void 0;
    }, getSlide: function() {
      var e2;
      return (null === (e2 = N.getInstance()) || void 0 === e2 ? void 0 : e2.getSlide()) || void 0;
    }, show: function(e2 = [], t2 = {}) {
      return B().init(e2, t2);
    }, unbind: function(e2, n2) {
      let o2 = document.body, i2 = "";
      if (t$8(e2) ? i2 = e2 : e2 instanceof Element && (o2 = e2, t$8(n2) && (i2 = n2)), o2) {
        const e3 = N.openers.get(o2);
        e3 && i2 && e3.delete(i2), (null == e3 ? void 0 : e3.size) && i2 || N.openers.delete(o2), o2.removeEventListener("click", N.fromEvent);
      }
    } };
    const owlCarousel = function() {
      const $owlCarousel = $("[data-carousel]"), defaults = {
        items: 3,
        loop: false,
        center: false,
        margin: 20,
        autoWidth: false,
        rtl: false,
        responsive: {},
        responsiveBaseElement: window,
        lazyLoad: false,
        autoHeight: false,
        autoplay: false,
        autoplayTimeout: 5e3,
        autoplayHoverPause: false,
        nav: false,
        navText: "",
        navElement: "button",
        navClass: ["owl-prev fa fa-angle-left", "owl-next fa fa-angle-right"],
        dots: true
      };
      if ($owlCarousel.length > 0) {
        $owlCarousel.each(function() {
          const configs = $(this).data("carousel"), opts = $.extend({}, defaults, configs), $scope = $("." + $(this).data("scope")), $prev = $scope.find("." + $(this).data("prev")), $next = $scope.find("." + $(this).data("next"));
          const owl = $(this).owlCarousel(opts);
          $next.on("click", function() {
            owl.trigger("next.owl.carousel");
          });
          $prev.on("click", function() {
            owl.trigger("prev.owl.carousel");
          });
        });
      }
    };
    const scrollTo = function() {
      const $scrollItem = $('[data-action="scroll"]');
      $scrollItem.on("click", function(e2) {
        e2.preventDefault();
        const $target = $($(this).attr("href")) || $("#" + $(this).data("target")), offset = parseInt($(this).data("offset")) || 0;
        $("html, body").animate({
          scrollTop: $target.offset().top - offset
        }, 800);
      });
    };
    const scrollToHash = function() {
      const $target = $(window.location.hash), offset = $target.data("offset") || 0;
      if ($target.length > 0) {
        $("html, body").animate({
          scrollTop: $target.offset().top - offset
        }, 800);
      }
    };
    const countDownTimer = function() {
      const $countDown = $("[data-countdown]"), countDownHtml = '<div class="countdown"><div class="countdown__time">%-D</div><div class="countdown__unit">Ngày</div></div><div class="countdown"><div class="countdown__time">%H</div><div class="countdown__unit">Giờ</div></div><div class="countdown"><div class="countdown__time">%M</div><div class="countdown__unit">Phút</div></div><div class="countdown"><div class="countdown__time">%S</div><div class="countdown__unit">Giây</div></div>';
      if ($countDown.length > 0) {
        $countDown.each(function() {
          const datetime = $(this).data("countdown");
          datetime.setDate(datetime.getDate() + 10);
          $(this).countdown(datetime).on("update.countdown", function(event) {
            $(this).html(event.strftime(countDownHtml));
          });
        });
      }
    };
    const modalShow = function() {
      const $modal = $('[data-modal="show"]');
      $modal.each(function() {
        const id = $(this).data("id");
        N.bind('[data-modal="' + $(this).data("modal") + '"]', {
          id
        });
      });
    };
    const validateForm = function() {
      const $registerForm = $("#register-form"), $rechargeForm = $("#recharge-form"), $deliveryForm = $("#delivery-form");
      if ($registerForm.length > 0) {
        $registerForm.validate({
          submitHandler: function(form) {
            N.show([{
              src: "#modal--payment",
              type: "inline"
            }], {
              on: {
                init: () => {
                  const registerModal = N.getInstance("register-form");
                  if (registerModal) {
                    registerModal.close();
                  }
                }
              }
            });
          },
          ignore: [],
          errorClass: "modal__control--error",
          rules: {
            reg_phone: {
              required: true,
              number: true,
              minlength: 8,
              maxlength: 11
            },
            reg_name: {
              required: true,
              minlength: 6,
              maxlength: 40
            },
            reg_pass: {
              required: true,
              minlength: 6,
              maxlength: 32
            },
            reg_pass_confirm: {
              required: true,
              minlength: 6,
              maxlength: 32,
              equalTo: "#reg_pass"
            },
            "g-recaptcha-response": {
              required: true
            }
          },
          messages: {
            reg_phone: {
              required: "Vui lòng nhập số điện thoại",
              number: "Vui lòng chỉ nhập chữ số",
              minlength: "Số điện thoại tối thiểu 8 chữ số",
              maxlength: "Số điện thoại tối đa 11 chữ số"
            },
            reg_name: {
              required: "Vui lòng nhập họ và tên",
              minlength: "Họ và tên thiểu 6 ký tự",
              maxlength: "Họ và tên tối đa 40 ký tự"
            },
            reg_pass: {
              required: "Vui lòng nhập mật khẩu",
              minlength: "Mật khẩu tối thiểu 6 chứ số",
              maxlength: "Mật khẩu tối đa 32 chứ số"
            },
            reg_pass_confirm: {
              required: "Vui lòng nhập mật khẩu",
              minlength: "Mật khẩu tối thiểu 6 chứ số",
              maxlength: "Mật khẩu tối đa 32 chứ số",
              equalTo: "Xác nhận mật khẩu không đúng"
            },
            "g-recaptcha-response": {
              required: "Vui lòng xác nhận mã bảo vệ"
            }
          }
        });
      }
      if ($rechargeForm.length > 0) {
        $rechargeForm.validate({
          submitHandler: function(form) {
            N.show([{
              src: "#modal--refill",
              type: "inline"
            }], {
              id: "refill-form",
              on: {
                init: () => {
                  const paymentModal = N.getInstance("modal--payment-form");
                  if (paymentModal) {
                    paymentModal.close();
                  }
                }
              }
            });
          },
          ignore: [],
          errorClass: "modal__control--error",
          rules: {
            card_series: {
              required: true,
              number: true
            },
            card_pin: {
              required: true,
              number: true
            }
          },
          messages: {
            card_series: {
              required: "Vui lòng nhập series của thẻ điện thoại",
              number: "Mã thẻ không hợp lệ, vui lòng nhập lại"
            },
            card_pin: {
              required: "Vui lòng nhập pin của thẻ điện thoại",
              number: "Mã thẻ không hợp lệ, vui lòng nhập lại"
            }
          }
        });
      }
      if ($deliveryForm.length > 0) {
        $deliveryForm.validate({
          submitHandler: function(form) {
            N.show([{
              src: "#modal-success",
              type: "inline"
            }], {
              on: {
                init: () => {
                  const deliveryModal = N.getInstance("modal--payment-form");
                  if (deliveryModal) {
                    deliveryModal.close();
                  }
                }
              }
            });
          },
          ignore: [],
          errorClass: "modal__control--error",
          rules: {
            delivery_name: {
              required: true,
              minlength: 6,
              maxlength: 40
            },
            delivery_phone: {
              required: true,
              number: true,
              minlength: 8,
              maxlength: 11
            },
            delivery_address: {
              required: true,
              minlength: 6,
              maxlength: 200
            },
            delivery_note: {
              minlength: 6,
              maxlength: 200
            }
          },
          messages: {
            delivery_name: {
              required: "Vui lòng nhập họ và tên",
              minlength: "Họ và tên thiểu 6 ký tự",
              maxlength: "Họ và tên tối đa 40 ký tự"
            },
            delivery_phone: {
              required: "Vui lòng nhập số điện thoại",
              number: "Vui lòng chỉ nhập chữ số",
              minlength: "Số điện thoại tối thiểu 8 chữ số",
              maxlength: "Số điện thoại tối đa 11 chữ số"
            },
            delivery_address: {
              required: "Vui lòng nhập địa chỉ giao hàng",
              minlength: "Địa chỉ giao hàng tối thiểu 6 ký tự",
              maxlength: "Địa chỉ giao hàng tối đa 200 ký tự"
            },
            delivery_note: {
              minlength: "Địa chỉ giao hàng tối thiểu 6 ký tự",
              maxlength: "Địa chỉ giao hàng tối đa 200 ký tự"
            }
          }
        });
      }
    };
    const modalRegister = function() {
      const $registerBtn = $("#register__btn", ".register");
      $registerBtn.on("click", function(e2) {
        e2.preventDefault();
        const $this = $(this), target = $this.attr("href"), yourName = $.trim($("#your_name", ".register").val()), yourPhone = $.trim($("#your_phone", ".register").val());
        $(target).find("#reg_name").val(yourName).end().find("#reg_phone").val(yourPhone);
        N.show(
          [
            {
              src: target,
              type: "inline"
            }
          ],
          {
            id: "register-form"
          }
        );
      });
    };
    $(window).on("load", function() {
      scrollToHash();
    });
    $(function() {
      validateForm();
      owlCarousel();
      scrollTo();
      modalRegister();
      modalShow();
      countDownTimer();
    });
  }
});
export default require_main();
