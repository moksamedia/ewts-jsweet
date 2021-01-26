var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
let java, javaemul;

(function (java) {
    var lang;
    (function (lang) {
        /**
         * General-purpose low-level utility methods. GWT only supports a limited subset
         * of these methods due to browser limitations. Only the documented methods are
         * available.
         * @class
         */
        var System = (function () {
            function System() {
            }
            System.err_$LI$ = function () { if (System.err == null)
                System.err = new java.io.PrintStream(null); return System.err; };
            ;
            System.out_$LI$ = function () { if (System.out == null)
                System.out = new java.io.PrintStream(null); return System.out; };
            ;
            System.arraycopy = function (src, srcOfs, dest, destOfs, len) {
                javaemul.internal.InternalPreconditions.checkNotNull(src, "src");
                javaemul.internal.InternalPreconditions.checkNotNull(dest, "dest");
                var srclen = javaemul.internal.ArrayHelper.getLength(src);
                var destlen = javaemul.internal.ArrayHelper.getLength(dest);
                if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
                    throw new java.lang.IndexOutOfBoundsException();
                }
                if (len > 0) {
                    javaemul.internal.ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int(src, srcOfs, dest, destOfs, len);
                }
            };
            System.currentTimeMillis = function () {
                return Math.floor(javaemul.internal.DateUtil.now());
            };
            /**
             * Has no effect; just here for source compatibility.
             *
             * @skip
             */
            System.gc = function () {
            };
            System.getProperty$java_lang_String = function (key) {
                switch ((key)) {
                    case "user.dir":
                        return "";
                    case "user.home":
                        return "";
                    case "user.name":
                        return "jsweet";
                    case "file.separator":
                        return "/";
                    case "java.home":
                        return null;
                    case "java.vendor":
                        return "JSweet";
                    case "java.vendor.url":
                        return "http://www.jsweet.org";
                    case "java.version":
                        return "jsweet";
                    case "os.arch":
                        return "generic";
                    case "os.name":
                        return "generic";
                    case "os.version":
                        return "unknown";
                    case "java.io.tmpdir":
                        return "";
                    default:
                        return null;
                }
            };
            System.getProperty$java_lang_String$java_lang_String = function (key, def) {
                var prop = System.getProperty$java_lang_String(key);
                return prop == null ? def : prop;
            };
            /**
             * The compiler replaces getProperty by the actual value of the property.
             * @param {string} key
             * @param {string} def
             * @return {string}
             */
            System.getProperty = function (key, def) {
                if (((typeof key === 'string') || key === null) && ((typeof def === 'string') || def === null)) {
                    return java.lang.System.getProperty$java_lang_String$java_lang_String(key, def);
                }
                else if (((typeof key === 'string') || key === null) && def === undefined) {
                    return java.lang.System.getProperty$java_lang_String(key);
                }
                else
                    throw new Error('invalid overload');
            };
            System.identityHashCode = function (o) {
                return javaemul.internal.HashCodes.getIdentityHashCode(o);
            };
            System.setErr = function (err) {
                java.lang.System.err = err;
            };
            System.setOut = function (out) {
                java.lang.System.out = out;
            };
            return System;
        }());
        lang.System = System;
        System["__class"] = "java.lang.System";
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));

(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * A utility class that provides utility functions to do precondition checks inside GWT-SDK.
         * @class
         */
        var InternalPreconditions = (function () {
            function InternalPreconditions() {
            }
            InternalPreconditions.CHECKED_MODE_$LI$ = function () { if (InternalPreconditions.CHECKED_MODE == null)
                InternalPreconditions.CHECKED_MODE = (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(java.lang.System.getProperty("jre.checkedMode", "ENABLED"), "ENABLED"); return InternalPreconditions.CHECKED_MODE; };
            ;
            InternalPreconditions.TYPE_CHECK_$LI$ = function () { if (InternalPreconditions.TYPE_CHECK == null)
                InternalPreconditions.TYPE_CHECK = (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(java.lang.System.getProperty("jre.checks.type", "ENABLED"), "ENABLED"); return InternalPreconditions.TYPE_CHECK; };
            ;
            InternalPreconditions.API_CHECK_$LI$ = function () { if (InternalPreconditions.API_CHECK == null)
                InternalPreconditions.API_CHECK = (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(java.lang.System.getProperty("jre.checks.api", "ENABLED"), "ENABLED"); return InternalPreconditions.API_CHECK; };
            ;
            InternalPreconditions.BOUND_CHECK_$LI$ = function () { if (InternalPreconditions.BOUND_CHECK == null)
                InternalPreconditions.BOUND_CHECK = (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(java.lang.System.getProperty("jre.checks.bounds", "ENABLED"), "ENABLED"); return InternalPreconditions.BOUND_CHECK; };
            ;
            InternalPreconditions.checkType = function (expression) {
                if (InternalPreconditions.TYPE_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalType(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalType(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalType = function (expression) {
                if (!expression) {
                    throw new java.lang.ClassCastException();
                }
            };
            InternalPreconditions.checkArrayType$boolean = function (expression) {
                if (InternalPreconditions.TYPE_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArrayType$boolean(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArrayType$boolean(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalArrayType$boolean = function (expression) {
                if (!expression) {
                    throw new java.lang.ArrayStoreException();
                }
            };
            InternalPreconditions.checkArrayType$boolean$java_lang_Object = function (expression, errorMessage) {
                if (InternalPreconditions.TYPE_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArrayType$boolean$java_lang_Object(expression, errorMessage);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArrayType$boolean$java_lang_Object(expression, errorMessage);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures the truth of an expression that verifies array type.
             * @param {boolean} expression
             * @param {*} errorMessage
             */
            InternalPreconditions.checkArrayType = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return javaemul.internal.InternalPreconditions.checkArrayType$boolean$java_lang_Object(expression, errorMessage);
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkArrayType$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalPreconditions.checkCriticalArrayType$boolean$java_lang_Object = function (expression, errorMessage) {
                if (!expression) {
                    throw new java.lang.ArrayStoreException(/* valueOf */ new String(errorMessage).toString());
                }
            };
            InternalPreconditions.checkCriticalArrayType = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return javaemul.internal.InternalPreconditions.checkCriticalArrayType$boolean$java_lang_Object(expression, errorMessage);
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalArrayType$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalPreconditions.checkElement$boolean = function (expression) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalElement$boolean(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalElement$boolean(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalElement$boolean = function (expression) {
                if (!expression) {
                    throw new java.util.NoSuchElementException();
                }
            };
            InternalPreconditions.checkElement$boolean$java_lang_Object = function (expression, errorMessage) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalElement$boolean$java_lang_Object(expression, errorMessage);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalElement$boolean$java_lang_Object(expression, errorMessage);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures the truth of an expression involving existence of an element.
             * @param {boolean} expression
             * @param {*} errorMessage
             */
            InternalPreconditions.checkElement = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return javaemul.internal.InternalPreconditions.checkElement$boolean$java_lang_Object(expression, errorMessage);
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkElement$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalPreconditions.checkCriticalElement$boolean$java_lang_Object = function (expression, errorMessage) {
                if (!expression) {
                    throw new java.util.NoSuchElementException(/* valueOf */ new String(errorMessage).toString());
                }
            };
            /**
             * Ensures the truth of an expression involving existence of an element.
             * <p>
             * For cases where failing fast is pretty important and not failing early could cause bugs that
             * are much harder to debug.
             * @param {boolean} expression
             * @param {*} errorMessage
             */
            InternalPreconditions.checkCriticalElement = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return javaemul.internal.InternalPreconditions.checkCriticalElement$boolean$java_lang_Object(expression, errorMessage);
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalElement$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalPreconditions.checkArgument$boolean = function (expression) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArgument$boolean(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArgument$boolean(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalArgument$boolean = function (expression) {
                if (!expression) {
                    throw new java.lang.IllegalArgumentException();
                }
            };
            InternalPreconditions.checkArgument$boolean$java_lang_Object = function (expression, errorMessage) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArgument$boolean$java_lang_Object(expression, errorMessage);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArgument$boolean$java_lang_Object(expression, errorMessage);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalArgument$boolean$java_lang_Object = function (expression, errorMessage) {
                if (!expression) {
                    throw new java.lang.IllegalArgumentException(/* valueOf */ new String(errorMessage).toString());
                }
            };
            InternalPreconditions.checkArgument$boolean$java_lang_String$java_lang_Object_A = function (expression, errorMessageTemplate) {
                var errorMessageArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    errorMessageArgs[_i - 2] = arguments[_i];
                }
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArgument.apply(this, [expression, errorMessageTemplate].concat(errorMessageArgs));
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArgument.apply(this, [expression, errorMessageTemplate].concat(errorMessageArgs));
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures the truth of an expression involving one or more parameters to the calling method.
             * @param {boolean} expression
             * @param {string} errorMessageTemplate
             * @param {Array} errorMessageArgs
             */
            InternalPreconditions.checkArgument = function (expression, errorMessageTemplate) {
                var errorMessageArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    errorMessageArgs[_i - 2] = arguments[_i];
                }
                if (((typeof expression === 'boolean') || expression === null) && ((typeof errorMessageTemplate === 'string') || errorMessageTemplate === null) && ((errorMessageArgs != null && errorMessageArgs instanceof Array && (errorMessageArgs.length == 0 || errorMessageArgs[0] == null || (errorMessageArgs[0] != null))) || errorMessageArgs === null)) {
                    return javaemul.internal.InternalPreconditions.checkArgument$boolean$java_lang_String$java_lang_Object_A(expression, errorMessageTemplate, errorMessageArgs);
                }
                else if (((typeof expression === 'boolean') || expression === null) && ((errorMessageTemplate != null) || errorMessageTemplate === null) && errorMessageArgs === undefined) {
                    return javaemul.internal.InternalPreconditions.checkArgument$boolean$java_lang_Object(expression, errorMessageTemplate);
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessageTemplate === undefined && errorMessageArgs === undefined) {
                    return javaemul.internal.InternalPreconditions.checkArgument$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalPreconditions.checkCriticalArgument$boolean$java_lang_String$java_lang_Object_A = function (expression, errorMessageTemplate) {
                var errorMessageArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    errorMessageArgs[_i - 2] = arguments[_i];
                }
                if (!expression) {
                    throw new java.lang.IllegalArgumentException(InternalPreconditions.format.apply(this, [errorMessageTemplate].concat(errorMessageArgs)));
                }
            };
            /**
             * Ensures the truth of an expression involving one or more parameters to the calling method.
             * <p>
             * For cases where failing fast is pretty important and not failing early could cause bugs that
             * are much harder to debug.
             * @param {boolean} expression
             * @param {string} errorMessageTemplate
             * @param {Array} errorMessageArgs
             */
            InternalPreconditions.checkCriticalArgument = function (expression, errorMessageTemplate) {
                var errorMessageArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    errorMessageArgs[_i - 2] = arguments[_i];
                }
                if (((typeof expression === 'boolean') || expression === null) && ((typeof errorMessageTemplate === 'string') || errorMessageTemplate === null) && ((errorMessageArgs != null && errorMessageArgs instanceof Array && (errorMessageArgs.length == 0 || errorMessageArgs[0] == null || (errorMessageArgs[0] != null))) || errorMessageArgs === null)) {
                    return javaemul.internal.InternalPreconditions.checkCriticalArgument$boolean$java_lang_String$java_lang_Object_A(expression, errorMessageTemplate, errorMessageArgs);
                }
                else if (((typeof expression === 'boolean') || expression === null) && ((errorMessageTemplate != null) || errorMessageTemplate === null) && errorMessageArgs === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalArgument$boolean$java_lang_Object(expression, errorMessageTemplate);
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessageTemplate === undefined && errorMessageArgs === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalArgument$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalPreconditions.checkState$boolean = function (expression) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCritcalState(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCritcalState(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures the truth of an expression involving the state of the calling instance, but not
             * involving any parameters to the calling method.
             * <p>
             * For cases where failing fast is pretty important and not failing early could cause bugs that
             * are much harder to debug.
             * @param {boolean} expression
             */
            InternalPreconditions.checkCritcalState = function (expression) {
                if (!expression) {
                    throw new java.lang.IllegalStateException();
                }
            };
            InternalPreconditions.checkState$boolean$java_lang_Object = function (expression, errorMessage) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalState(expression, errorMessage);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalState(expression, errorMessage);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures the truth of an expression involving the state of the calling instance, but not
             * involving any parameters to the calling method.
             * @param {boolean} expression
             * @param {*} errorMessage
             */
            InternalPreconditions.checkState = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return javaemul.internal.InternalPreconditions.checkState$boolean$java_lang_Object(expression, errorMessage);
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkState$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Ensures the truth of an expression involving the state of the calling instance, but not
             * involving any parameters to the calling method.
             * @param {boolean} expression
             * @param {*} errorMessage
             */
            InternalPreconditions.checkCriticalState = function (expression, errorMessage) {
                if (!expression) {
                    throw new java.lang.IllegalStateException(/* valueOf */ new String(errorMessage).toString());
                }
            };
            InternalPreconditions.checkNotNull$java_lang_Object = function (reference) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalNotNull(reference);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalNotNull(reference);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
                return reference;
            };
            InternalPreconditions.checkCriticalNotNull$java_lang_Object = function (reference) {
                if (reference == null) {
                    throw new java.lang.NullPointerException();
                }
                return reference;
            };
            InternalPreconditions.checkNotNull$java_lang_Object$java_lang_Object = function (reference, errorMessage) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalNotNull$java_lang_Object$java_lang_Object(reference, errorMessage);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalNotNull$java_lang_Object$java_lang_Object(reference, errorMessage);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures that an object reference passed as a parameter to the calling method is not null.
             * @param {*} reference
             * @param {*} errorMessage
             */
            InternalPreconditions.checkNotNull = function (reference, errorMessage) {
                if (((reference != null) || reference === null) && ((errorMessage != null) || errorMessage === null)) {
                    return javaemul.internal.InternalPreconditions.checkNotNull$java_lang_Object$java_lang_Object(reference, errorMessage);
                }
                else if (((reference != null) || reference === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkNotNull$java_lang_Object(reference);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalPreconditions.checkCriticalNotNull$java_lang_Object$java_lang_Object = function (reference, errorMessage) {
                if (reference == null) {
                    throw new java.lang.NullPointerException(/* valueOf */ new String(errorMessage).toString());
                }
            };
            InternalPreconditions.checkCriticalNotNull = function (reference, errorMessage) {
                if (((reference != null) || reference === null) && ((errorMessage != null) || errorMessage === null)) {
                    return javaemul.internal.InternalPreconditions.checkCriticalNotNull$java_lang_Object$java_lang_Object(reference, errorMessage);
                }
                else if (((reference != null) || reference === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalNotNull$java_lang_Object(reference);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Ensures that {@code size} specifies a valid array size (i.e. non-negative).
             * @param {number} size
             */
            InternalPreconditions.checkArraySize = function (size) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArraySize(size);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArraySize(size);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalArraySize = function (size) {
                if (size < 0) {
                    throw new java.lang.NegativeArraySizeException("Negative array size: " + size);
                }
            };
            /**
             * Ensures that {@code index} specifies a valid <i>element</i> in an array, list or string of size
             * {@code size}. An element index may range from zero, inclusive, to {@code size}, exclusive.
             * @param {number} index
             * @param {number} size
             */
            InternalPreconditions.checkElementIndex = function (index, size) {
                if (InternalPreconditions.BOUND_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalElementIndex(index, size);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalElementIndex(index, size);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalElementIndex = function (index, size) {
                if (index < 0 || index >= size) {
                    throw new java.lang.IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
                }
            };
            /**
             * Ensures that {@code index} specifies a valid <i>position</i> in an array, list or string of
             * size {@code size}. A position index may range from zero to {@code size}, inclusive.
             * @param {number} index
             * @param {number} size
             */
            InternalPreconditions.checkPositionIndex = function (index, size) {
                if (InternalPreconditions.BOUND_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalPositionIndex(index, size);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalPositionIndex(index, size);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalPositionIndex = function (index, size) {
                if (index < 0 || index > size) {
                    throw new java.lang.IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
                }
            };
            /**
             * Ensures that {@code start} and {@code end} specify a valid <i>positions</i> in an array, list
             * or string of size {@code size}, and are in order. A position index may range from zero to
             * {@code size}, inclusive.
             * @param {number} start
             * @param {number} end
             * @param {number} size
             */
            InternalPreconditions.checkPositionIndexes = function (start, end, size) {
                if (InternalPreconditions.BOUND_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalPositionIndexes(start, end, size);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalPositionIndexes(start, end, size);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures that {@code start} and {@code end} specify a valid <i>positions</i> in an array, list
             * or string of size {@code size}, and are in order. A position index may range from zero to
             * {@code size}, inclusive.
             * @param {number} start
             * @param {number} end
             * @param {number} size
             */
            InternalPreconditions.checkCriticalPositionIndexes = function (start, end, size) {
                if (start < 0) {
                    throw new java.lang.IndexOutOfBoundsException("fromIndex: " + start + " < 0");
                }
                if (end > size) {
                    throw new java.lang.IndexOutOfBoundsException("toIndex: " + end + " > size " + size);
                }
                if (start > end) {
                    throw new java.lang.IllegalArgumentException("fromIndex: " + start + " > toIndex: " + end);
                }
            };
            /**
             * Checks that bounds are correct.
             *
             * @throw StringIndexOutOfBoundsException if the range is not legal
             * @param {number} start
             * @param {number} end
             * @param {number} size
             */
            InternalPreconditions.checkStringBounds = function (start, end, size) {
                if (start < 0) {
                    throw new java.lang.StringIndexOutOfBoundsException("fromIndex: " + start + " < 0");
                }
                if (end > size) {
                    throw new java.lang.StringIndexOutOfBoundsException("toIndex: " + end + " > size " + size);
                }
                if (end < start) {
                    throw new java.lang.StringIndexOutOfBoundsException("fromIndex: " + start + " > toIndex: " + end);
                }
            };
            /**
             * Substitutes each {@code %s} in {@code template} with an argument. These are matched by
             * position: the first {@code %s} gets {@code args[0]}, etc.  If there are more arguments than
             * placeholders, the unmatched arguments will be appended to the end of the formatted message in
             * square braces.
             * @param {string} template
             * @param {Array} args
             * @return {string}
             * @private
             */
            /*private*/ InternalPreconditions.format = function (template) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                template = new String(template).toString();
                var builder = new java.lang.StringBuilder(template.length + 16 * args.length);
                var templateStart = 0;
                var i = 0;
                while ((i < args.length)) {
                    var placeholderStart = template.indexOf("%s", templateStart);
                    if (placeholderStart === -1) {
                        break;
                    }
                    builder.append$java_lang_CharSequence(template.substring(templateStart, placeholderStart));
                    builder.append$java_lang_Object(args[i++]);
                    templateStart = placeholderStart + 2;
                }
                ;
                builder.append$java_lang_CharSequence(template.substring(templateStart));
                if (i < args.length) {
                    builder.append$java_lang_CharSequence(" [");
                    builder.append$java_lang_Object(args[i++]);
                    while ((i < args.length)) {
                        builder.append$java_lang_CharSequence(", ");
                        builder.append$java_lang_Object(args[i++]);
                    }
                    ;
                    builder.append$char(']');
                }
                return builder.toString();
            };
            return InternalPreconditions;
        }());
        internal.InternalPreconditions = InternalPreconditions;
        InternalPreconditions["__class"] = "javaemul.internal.InternalPreconditions";
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));

(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Provides an interface for simple JavaScript idioms that can not be expressed in Java.
         * @class
         */
        var JsUtils = (function () {
            function JsUtils() {
            }
            JsUtils.getInfinity = function () {
                return Infinity;
            };
            JsUtils.isUndefined = function (value) {
                return value == null;
            };
            JsUtils.unsafeCastToString = function (string) {
                return string;
            };
            JsUtils.setPropertySafe = function (map, key, value) {
                try {
                    (map)[key] = value;
                }
                catch (e) {
                }
                ;
            };
            JsUtils.getIntProperty = function (map, key) {
                return ((map)[key]);
            };
            JsUtils.setIntProperty = function (map, key, value) {
                (map)[key] = value;
            };
            JsUtils.typeOf = function (o) {
                return typeof o;
            };
            return JsUtils;
        }());
        internal.JsUtils = JsUtils;
        JsUtils["__class"] = "javaemul.internal.JsUtils";
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));

(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Provides utilities to perform operations on Arrays.
         * @class
         */
        var ArrayHelper = (function () {
            function ArrayHelper() {
            }
            ArrayHelper.clone = function (array, fromIndex, toIndex) {
                var result = ArrayHelper.unsafeClone(array, fromIndex, toIndex);
                return javaemul.internal.ArrayStamper.stampJavaTypeInfo(result, array);
            };
            /**
             * Unlike clone, this method returns a copy of the array that is not type
             * marked. This is only safe for temp arrays as returned array will not do
             * any type checks.
             * @param {*} array
             * @param {number} fromIndex
             * @param {number} toIndex
             * @return {Array}
             */
            ArrayHelper.unsafeClone = function (array, fromIndex, toIndex) {
                return array.slice(fromIndex, toIndex);
            };
            ArrayHelper.createFrom = function (array, length) {
                var result = ArrayHelper.createNativeArray(length);
                return javaemul.internal.ArrayStamper.stampJavaTypeInfo(result, array);
            };
            /*private*/ ArrayHelper.createNativeArray = function (length) {
                return (new Array(length));
            };
            ArrayHelper.getLength = function (array) {
                return (array.length | 0);
            };
            ArrayHelper.setLength = function (array, length) {
                array.length = length;
            };
            ArrayHelper.removeFrom = function (array, index, deleteCount) {
                array.splice(index, deleteCount);
            };
            ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object = function (array, index, value) {
                array.splice(index, 0, value);
            };
            ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object_A = function (array, index, values) {
                ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int$boolean(values, 0, array, index, values.length, false);
            };
            ArrayHelper.insertTo = function (array, index, values) {
                if (((array != null) || array === null) && ((typeof index === 'number') || index === null) && ((values != null && values instanceof Array && (values.length == 0 || values[0] == null || (values[0] != null))) || values === null)) {
                    return javaemul.internal.ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object_A(array, index, values);
                }
                else if (((array != null) || array === null) && ((typeof index === 'number') || index === null) && ((values != null) || values === null)) {
                    return javaemul.internal.ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object(array, index, values);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int = function (array, srcOfs, dest, destOfs, len) {
                ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int$boolean(array, srcOfs, dest, destOfs, len, true);
            };
            ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int$boolean = function (src, srcOfs, dest, destOfs, len, overwrite) {
                if (src === dest) {
                    src = ArrayHelper.unsafeClone(src, srcOfs, srcOfs + len);
                    srcOfs = 0;
                }
                for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
                    var batchEnd = Math.min(batchStart + ArrayHelper.ARRAY_PROCESS_BATCH_SIZE, end);
                    len = batchEnd - batchStart;
                    ArrayHelper.applySplice(dest, destOfs, overwrite ? len : 0, ArrayHelper.unsafeClone(src, batchStart, batchEnd));
                    batchStart = batchEnd;
                    destOfs += len;
                }
                ;
            };
            ArrayHelper.copy = function (src, srcOfs, dest, destOfs, len, overwrite) {
                if (((src != null) || src === null) && ((typeof srcOfs === 'number') || srcOfs === null) && ((dest != null) || dest === null) && ((typeof destOfs === 'number') || destOfs === null) && ((typeof len === 'number') || len === null) && ((typeof overwrite === 'boolean') || overwrite === null)) {
                    return javaemul.internal.ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int$boolean(src, srcOfs, dest, destOfs, len, overwrite);
                }
                else if (((src != null) || src === null) && ((typeof srcOfs === 'number') || srcOfs === null) && ((dest != null) || dest === null) && ((typeof destOfs === 'number') || destOfs === null) && ((typeof len === 'number') || len === null) && overwrite === undefined) {
                    return javaemul.internal.ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int(src, srcOfs, dest, destOfs, len);
                }
                else
                    throw new Error('invalid overload');
            };
            /*private*/ ArrayHelper.applySplice = function (arrayObject, index, deleteCount, arrayToAdd) {
                Array.prototype.splice.apply(arrayObject, [index, deleteCount].concat(arrayToAdd));
            };
            return ArrayHelper;
        }());
        ArrayHelper.ARRAY_PROCESS_BATCH_SIZE = 10000;
        internal.ArrayHelper = ArrayHelper;
        ArrayHelper["__class"] = "javaemul.internal.ArrayHelper";
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));

(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * A utility to provide array stamping. Provided as a separate class to simplify
         * super-source.
         * @class
         */
        var ArrayStamper = (function () {
            function ArrayStamper() {
            }
            ArrayStamper.stampJavaTypeInfo = function (array, referenceType) {
                return (array);
            };
            return ArrayStamper;
        }());
        internal.ArrayStamper = ArrayStamper;
        ArrayStamper["__class"] = "javaemul.internal.ArrayStamper";
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));

(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Abstract base class for numeric wrapper classes.
         * @class
         */
        var NumberHelper = (function () {
            function NumberHelper() {
            }
            /**
             * @skip
             *
             * This function will determine the radix that the string is expressed
             * in based on the parsing rules defined in the Javadocs for
             * Integer.decode() and invoke __parseAndValidateInt.
             * @param {string} s
             * @param {number} lowerBound
             * @param {number} upperBound
             * @return {number}
             */
            NumberHelper.__decodeAndValidateInt = function (s, lowerBound, upperBound) {
                var decode = NumberHelper.__decodeNumberString(s);
                return NumberHelper.__parseAndValidateInt(decode.payload, decode.radix, lowerBound, upperBound);
            };
            NumberHelper.__decodeNumberString = function (s) {
                var negative;
                if ((function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "-")) {
                    negative = true;
                    s = s.substring(1);
                }
                else {
                    negative = false;
                    if ((function (str, searchString, position) {
                        if (position === void 0) { position = 0; }
                        return str.substr(position, searchString.length) === searchString;
                    })(s, "+")) {
                        s = s.substring(1);
                    }
                }
                var radix;
                if ((function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "0x") || (function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "0X")) {
                    s = s.substring(2);
                    radix = 16;
                }
                else if ((function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "#")) {
                    s = s.substring(1);
                    radix = 16;
                }
                else if ((function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "0")) {
                    radix = 8;
                }
                else {
                    radix = 10;
                }
                if (negative) {
                    s = "-" + s;
                }
                return new NumberHelper.__Decode(radix, s);
            };
            /**
             * @skip
             *
             * This function contains common logic for parsing a String as a
             * floating- point number and validating the range.
             * @param {string} s
             * @return {number}
             */
            NumberHelper.__parseAndValidateDouble = function (s) {
                if (!NumberHelper.__isValidDouble(s)) {
                    throw java.lang.NumberFormatException.forInputString(s);
                }
                return parseFloat(s);
            };
            /**
             * @skip
             *
             * This function contains common logic for parsing a String in a given
             * radix and validating the result.
             * @param {string} s
             * @param {number} radix
             * @param {number} lowerBound
             * @param {number} upperBound
             * @return {number}
             */
            NumberHelper.__parseAndValidateInt = function (s, radix, lowerBound, upperBound) {
                if (s == null) {
                    throw java.lang.NumberFormatException.forNullInputString();
                }
                if (radix < javaemul.internal.CharacterHelper.MIN_RADIX || radix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                    throw java.lang.NumberFormatException.forRadix(radix);
                }
                var length = s.length;
                var startIndex = (length > 0) && ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(0)) == '-'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(0)) == '+'.charCodeAt(0)) ? 1 : 0;
                for (var i = startIndex; i < length; i++) {
                    if (javaemul.internal.CharacterHelper.digit(s.charAt(i), radix) === -1) {
                        throw java.lang.NumberFormatException.forInputString(s);
                    }
                }
                ;
                var toReturn = (parseInt(s, radix) | 0);
                var isTooLow = toReturn < lowerBound;
                if (javaemul.internal.DoubleHelper.isNaN(toReturn)) {
                    throw java.lang.NumberFormatException.forInputString(s);
                }
                else if (isTooLow || toReturn > upperBound) {
                    throw java.lang.NumberFormatException.forInputString(s);
                }
                return toReturn;
            };
            /**
             * @skip
             *
             * This function contains common logic for parsing a String in a given
             * radix and validating the result.
             * @param {string} s
             * @param {number} radix
             * @return {number}
             */
            NumberHelper.__parseAndValidateLong = function (s, radix) {
                if (s == null) {
                    throw java.lang.NumberFormatException.forNullInputString();
                }
                if (radix < javaemul.internal.CharacterHelper.MIN_RADIX || radix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                    throw java.lang.NumberFormatException.forRadix(radix);
                }
                var orig = s;
                var length = s.length;
                var negative = false;
                if (length > 0) {
                    var c = s.charAt(0);
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) == '-'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) == '+'.charCodeAt(0)) {
                        s = s.substring(1);
                        length--;
                        negative = ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) == '-'.charCodeAt(0));
                    }
                }
                if (length === 0) {
                    throw java.lang.NumberFormatException.forInputString(orig);
                }
                while ((s.length > 0 && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(0)) == '0'.charCodeAt(0))) {
                    s = s.substring(1);
                    length--;
                }
                ;
                if (length > NumberHelper.__ParseLong.maxLengthForRadix_$LI$()[radix]) {
                    throw java.lang.NumberFormatException.forInputString(orig);
                }
                for (var i = 0; i < length; i++) {
                    if (javaemul.internal.CharacterHelper.digit(s.charAt(i), radix) === -1) {
                        throw java.lang.NumberFormatException.forInputString(orig);
                    }
                }
                ;
                var toReturn = 0;
                var maxDigits = NumberHelper.__ParseLong.maxDigitsForRadix_$LI$()[radix];
                var radixPower = NumberHelper.__ParseLong.maxDigitsRadixPower_$LI$()[radix];
                var minValue = -NumberHelper.__ParseLong.maxValueForRadix_$LI$()[radix];
                var firstTime = true;
                var head = length % maxDigits;
                if (head > 0) {
                    toReturn = -(parseInt(s.substring(0, head), radix) | 0);
                    s = s.substring(head);
                    length -= head;
                    firstTime = false;
                }
                while ((length >= maxDigits)) {
                    head = (parseInt(s.substring(0, maxDigits), radix) | 0);
                    s = s.substring(maxDigits);
                    length -= maxDigits;
                    if (!firstTime) {
                        if (toReturn < minValue) {
                            throw java.lang.NumberFormatException.forInputString(orig);
                        }
                        toReturn *= radixPower;
                    }
                    else {
                        firstTime = false;
                    }
                    toReturn -= head;
                }
                ;
                if (toReturn > 0) {
                    throw java.lang.NumberFormatException.forInputString(orig);
                }
                if (!negative) {
                    toReturn = -toReturn;
                    if (toReturn < 0) {
                        throw java.lang.NumberFormatException.forInputString(orig);
                    }
                }
                return toReturn;
            };
            /**
             * @skip
             *
             * @param {string} str
             * @return {boolean} {@code true} if the string matches the float format,
             * {@code false} otherwise
             * @private
             */
            NumberHelper.__isValidDouble = function (str) {
                if (NumberHelper.floatRegex == null) {
                    NumberHelper.floatRegex = NumberHelper.createFloatRegex();
                }
                return NumberHelper.floatRegex.test(str);
            };
            NumberHelper.createFloatRegex = function () {
                return (/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);
            };
            NumberHelper.prototype.byteValue = function () {
                return (this.intValue() | 0);
            };
            NumberHelper.prototype.shortValue = function () {
                return (this.intValue() | 0);
            };
            return NumberHelper;
        }());
        /**
         * Stores a regular expression object to verify the format of float values.
         */
        NumberHelper.floatRegex = null;
        internal.NumberHelper = NumberHelper;
        NumberHelper["__class"] = "javaemul.internal.NumberHelper";
        NumberHelper["__interfaces"] = ["java.io.Serializable"];
        (function (NumberHelper) {
            var __Decode = (function () {
                function __Decode(radix, payload) {
                    this.payload = null;
                    this.radix = 0;
                    this.radix = radix;
                    this.payload = payload;
                }
                return __Decode;
            }());
            NumberHelper.__Decode = __Decode;
            __Decode["__class"] = "javaemul.internal.NumberHelper.__Decode";
            /**
             * Use nested class to avoid clinit on outer.
             * @class
             */
            var __ParseLong = (function () {
                function __ParseLong() {
                }
                __ParseLong.__static_initialize = function () { if (!__ParseLong.__static_initialized) {
                    __ParseLong.__static_initialized = true;
                    __ParseLong.__static_initializer_0();
                } };
                __ParseLong.maxDigitsForRadix_$LI$ = function () { __ParseLong.__static_initialize(); if (__ParseLong.maxDigitsForRadix == null)
                    __ParseLong.maxDigitsForRadix = [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]; return __ParseLong.maxDigitsForRadix; };
                ;
                __ParseLong.maxDigitsRadixPower_$LI$ = function () { __ParseLong.__static_initialize(); if (__ParseLong.maxDigitsRadixPower == null)
                    __ParseLong.maxDigitsRadixPower = (function (s) { var a = []; while (s-- > 0)
                        a.push(0); return a; })(37); return __ParseLong.maxDigitsRadixPower; };
                ;
                __ParseLong.maxLengthForRadix_$LI$ = function () { __ParseLong.__static_initialize(); if (__ParseLong.maxLengthForRadix == null)
                    __ParseLong.maxLengthForRadix = [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]; return __ParseLong.maxLengthForRadix; };
                ;
                __ParseLong.maxValueForRadix_$LI$ = function () { __ParseLong.__static_initialize(); if (__ParseLong.maxValueForRadix == null)
                    __ParseLong.maxValueForRadix = (function (s) { var a = []; while (s-- > 0)
                        a.push(0); return a; })(37); return __ParseLong.maxValueForRadix; };
                ;
                __ParseLong.__static_initializer_0 = function () {
                    for (var i = 2; i <= 36; i++) {
                        __ParseLong.maxDigitsRadixPower_$LI$()[i] = (Math.pow(i, __ParseLong.maxDigitsForRadix_$LI$()[i]) | 0);
                        __ParseLong.maxValueForRadix_$LI$()[i] = Math.floor(9223372036854775807 / __ParseLong.maxDigitsRadixPower_$LI$()[i]);
                    }
                    ;
                };
                return __ParseLong;
            }());
            __ParseLong.__static_initialized = false;
            NumberHelper.__ParseLong = __ParseLong;
            __ParseLong["__class"] = "javaemul.internal.NumberHelper.__ParseLong";
        })(NumberHelper = internal.NumberHelper || (internal.NumberHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));

(function (javaemul) {
    var internal;
    (function (internal) {
        var ObjectHelper = (function () {
            function ObjectHelper() {
            }
            ObjectHelper.clone = function (obj) {
                var copy;
                if (null == obj || "object" != typeof obj)
                    return obj;
                if (obj instanceof Date) {
                    copy = new Date();
                    copy.setTime(obj.getTime());
                    return copy;
                }
                ;
                if (obj instanceof Array) {
                    copy = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        copy[i] = javaemul.internal.ObjectHelper.clone(obj[i]);
                    }
                    return copy;
                }
                ;
                if (obj instanceof Object) {
                    copy = {};
                    for (var attr in obj) {
                        if (obj.hasOwnProperty(attr))
                            copy[attr] = javaemul.internal.ObjectHelper.clone(obj[attr]);
                    }
                    return copy;
                }
                ;
                throw new Error("Unable to copy obj! Its type isn\'t supported.");
            };
            return ObjectHelper;
        }());
        internal.ObjectHelper = ObjectHelper;
        ObjectHelper["__class"] = "javaemul.internal.ObjectHelper";
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));


(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the Collection interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractCollection.html">[Sun
         * docs]</a>
         *
         * @param <E> the element type.
         * @class
         */
        var AbstractCollection = (function () {
            function AbstractCollection() {
            }
            AbstractCollection.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_1 = function (index122) {
                    var t = index122.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index122 = this.iterator(); index122.hasNext();) {
                    _loop_1(index122);
                }
            };
            /**
             *
             * @param {number} index
             * @param {*} element
             */
            AbstractCollection.prototype.add = function (index, element) {
                if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractCollection.prototype.add$java_lang_Object = function (o) {
                throw new java.lang.UnsupportedOperationException("Add not supported on this collection");
            };
            /**
             *
             * @param {number} index
             * @param {*} c
             * @return {boolean}
             */
            AbstractCollection.prototype.addAll = function (index, c) {
                if (((index != null && (index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0 || index.constructor != null && index.constructor["__interfaces"] != null && index.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractCollection.prototype.addAll$java_util_Collection = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var changed = false;
                for (var index123 = c.iterator(); index123.hasNext();) {
                    var e = index123.next();
                    {
                        changed = this.add(e) || changed;
                    }
                }
                return changed;
            };
            /**
             *
             */
            AbstractCollection.prototype.clear = function () {
                for (var iter = this.iterator(); iter.hasNext();) {
                    iter.next();
                    iter.remove();
                }
                ;
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            AbstractCollection.prototype.contains = function (o) {
                return this.advanceToFind(o, false);
            };
            /**
             *
             * @param {*} c
             * @return {boolean}
             */
            AbstractCollection.prototype.containsAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                for (var index124 = c.iterator(); index124.hasNext();) {
                    var e = index124.next();
                    {
                        if (!this.contains(e)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            /**
             *
             * @return {boolean}
             */
            AbstractCollection.prototype.isEmpty = function () {
                return this.size() === 0;
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            AbstractCollection.prototype.remove = function (index) {
                if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractCollection.prototype.remove$java_lang_Object = function (o) {
                return this.advanceToFind(o, true);
            };
            /**
             *
             * @param {*} c
             * @return {boolean}
             */
            AbstractCollection.prototype.removeAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var changed = false;
                for (var iter = this.iterator(); iter.hasNext();) {
                    var o = iter.next();
                    if (c.contains(o)) {
                        iter.remove();
                        changed = true;
                    }
                }
                ;
                return changed;
            };
            /**
             *
             * @param {*} c
             * @return {boolean}
             */
            AbstractCollection.prototype.retainAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var changed = false;
                for (var iter = this.iterator(); iter.hasNext();) {
                    var o = iter.next();
                    if (!c.contains(o)) {
                        iter.remove();
                        changed = true;
                    }
                }
                ;
                return changed;
            };
            AbstractCollection.prototype.toArray$ = function () {
                return this.toArray$java_lang_Object_A(new Array(this.size()));
            };
            AbstractCollection.prototype.toArray$java_lang_Object_A = function (a) {
                var size = this.size();
                if (a.length < size) {
                    a = javaemul.internal.ArrayHelper.createFrom(a, size);
                }
                var result = a;
                var it = this.iterator();
                for (var i = 0; i < size; ++i) {
                    result[i] = it.next();
                }
                ;
                if (a.length > size) {
                    a[size] = null;
                }
                return a;
            };
            /**
             *
             * @param {Array} a
             * @return {Array}
             */
            AbstractCollection.prototype.toArray = function (a) {
                if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (a[0] != null))) || a === null)) {
                    return this.toArray$java_lang_Object_A(a);
                }
                else if (a === undefined) {
                    return this.toArray$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @return {string}
             */
            AbstractCollection.prototype.toString = function () {
                var joiner = new java.util.StringJoiner(", ", "[", "]");
                for (var index125 = this.iterator(); index125.hasNext();) {
                    var e = index125.next();
                    {
                        joiner.add(e === this ? "(this Collection)" : new String(e).toString());
                    }
                }
                return joiner.toString();
            };
            /*private*/ AbstractCollection.prototype.advanceToFind = function (o, remove) {
                for (var iter = this.iterator(); iter.hasNext();) {
                    var e = iter.next();
                    if (java.util.Objects.equals(o, e)) {
                        if (remove) {
                            iter.remove();
                        }
                        return true;
                    }
                }
                ;
                return false;
            };
            return AbstractCollection;
        }());
        util.AbstractCollection = AbstractCollection;
        AbstractCollection["__class"] = "java.util.AbstractCollection";
        AbstractCollection["__interfaces"] = ["java.util.Collection", "java.lang.Iterable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));


(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the List interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html">[Sun
         * docs]</a>
         *
         * @param <E> the element type.
         * @extends java.util.AbstractCollection
         * @class
         */
        var AbstractList = (function (_super) {
            __extends(AbstractList, _super);
            function AbstractList() {
                var _this = _super.call(this) || this;
                _this.modCount = 0;
                return _this;
            }
            AbstractList.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_3 = function (index129) {
                    var t = index129.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index129 = this.iterator(); index129.hasNext();) {
                    _loop_3(index129);
                }
            };
            AbstractList.prototype.add$java_lang_Object = function (obj) {
                this.add(this.size(), obj);
                return true;
            };
            AbstractList.prototype.add$int$java_lang_Object = function (index, element) {
                throw new java.lang.UnsupportedOperationException("Add not supported on this list");
            };
            /**
             *
             * @param {number} index
             * @param {*} element
             */
            AbstractList.prototype.add = function (index, element) {
                if (((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                    return this.add$int$java_lang_Object(index, element);
                }
                else if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.addAll$int$java_util_Collection = function (index, c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var changed = false;
                for (var index130 = c.iterator(); index130.hasNext();) {
                    var e = index130.next();
                    {
                        this.add(index++, e);
                        changed = true;
                    }
                }
                return changed;
            };
            /**
             *
             * @param {number} index
             * @param {*} c
             * @return {boolean}
             */
            AbstractList.prototype.addAll = function (index, c) {
                if (((typeof index === 'number') || index === null) && ((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || c === null)) {
                    return this.addAll$int$java_util_Collection(index, c);
                }
                else if (((index != null && (index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0 || index.constructor != null && index.constructor["__interfaces"] != null && index.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             */
            AbstractList.prototype.clear = function () {
                this.removeRange(0, this.size());
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            AbstractList.prototype.equals = function (o) {
                if (o === this) {
                    return true;
                }
                if (!(o != null && (o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.List") >= 0 || o.constructor != null && o.constructor["__interfaces"] != null && o.constructor["__interfaces"].indexOf("java.util.List") >= 0))) {
                    return false;
                }
                var other = o;
                if (this.size() !== other.size()) {
                    return false;
                }
                var iterOther = other.iterator();
                for (var index131 = this.iterator(); index131.hasNext();) {
                    var elem = index131.next();
                    {
                        var elemOther = iterOther.next();
                        if (!java.util.Objects.equals(elem, elemOther)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            /**
             *
             * @return {number}
             */
            AbstractList.prototype.hashCode = function () {
                return (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(java.util.Collections);
            };
            AbstractList.prototype.indexOf = function (o, index) {
                if (((o != null) || o === null) && index === undefined) {
                    return this.indexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.indexOf$java_lang_Object = function (toFind) {
                for (var i = 0, n = this.size(); i < n; ++i) {
                    if (java.util.Objects.equals(toFind, this.get(i))) {
                        return i;
                    }
                }
                ;
                return -1;
            };
            /**
             *
             * @return {*}
             */
            AbstractList.prototype.iterator = function () {
                return new AbstractList.IteratorImpl(this);
            };
            AbstractList.prototype.lastIndexOf = function (o, index) {
                if (((o != null) || o === null) && index === undefined) {
                    return this.lastIndexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.lastIndexOf$java_lang_Object = function (toFind) {
                for (var i = this.size() - 1; i > -1; --i) {
                    if (java.util.Objects.equals(toFind, this.get(i))) {
                        return i;
                    }
                }
                ;
                return -1;
            };
            AbstractList.prototype.listIterator$ = function () {
                return this.listIterator$int(0);
            };
            AbstractList.prototype.listIterator$int = function (from) {
                return new AbstractList.ListIteratorImpl(this, from);
            };
            /**
             *
             * @param {number} from
             * @return {*}
             */
            AbstractList.prototype.listIterator = function (from) {
                if (((typeof from === 'number') || from === null)) {
                    return this.listIterator$int(from);
                }
                else if (from === undefined) {
                    return this.listIterator$();
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.remove$int = function (index) {
                throw new java.lang.UnsupportedOperationException("Remove not supported on this list");
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            AbstractList.prototype.remove = function (index) {
                if (((typeof index === 'number') || index === null)) {
                    return this.remove$int(index);
                }
                else if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @param {number} index
             * @param {*} o
             * @return {*}
             */
            AbstractList.prototype.set = function (index, o) {
                throw new java.lang.UnsupportedOperationException("Set not supported on this list");
            };
            /**
             *
             * @param {number} fromIndex
             * @param {number} toIndex
             * @return {*}
             */
            AbstractList.prototype.subList = function (fromIndex, toIndex) {
                return (new AbstractList.SubList(this, fromIndex, toIndex));
            };
            AbstractList.prototype.removeRange = function (fromIndex, endIndex) {
                var iter = this.listIterator$int(fromIndex);
                for (var i = fromIndex; i < endIndex; ++i) {
                    iter.next();
                    iter.remove();
                }
                ;
            };
            return AbstractList;
        }(java.util.AbstractCollection));
        util.AbstractList = AbstractList;
        AbstractList["__class"] = "java.util.AbstractList";
        AbstractList["__interfaces"] = ["java.util.List", "java.util.Collection", "java.lang.Iterable"];
        (function (AbstractList) {
            var IteratorImpl = (function () {
                function IteratorImpl(__parent) {
                    this.__parent = __parent;
                    this.i = 0;
                    this.last = 0;
                    this.i = 0;
                    this.last = -1;
                }
                IteratorImpl.prototype.forEachRemaining = function (consumer) {
                    var _this = this;
                    javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                    while ((this.hasNext())) {
                        (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                    }
                    ;
                };
                /**
                 *
                 * @return {boolean}
                 */
                IteratorImpl.prototype.hasNext = function () {
                    return this.i < this.__parent.size();
                };
                /**
                 *
                 * @return {*}
                 */
                IteratorImpl.prototype.next = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                    return this.__parent.get(this.last = this.i++);
                };
                /**
                 *
                 */
                IteratorImpl.prototype.remove = function () {
                    javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                    this.__parent.remove$int(this.last);
                    this.i = this.last;
                    this.last = -1;
                };
                return IteratorImpl;
            }());
            AbstractList.IteratorImpl = IteratorImpl;
            IteratorImpl["__class"] = "java.util.AbstractList.IteratorImpl";
            IteratorImpl["__interfaces"] = ["java.util.Iterator"];
            var SubList = (function (_super) {
                __extends(SubList, _super);
                function SubList(wrapped, fromIndex, toIndex) {
                    var _this = _super.call(this) || this;
                    _this.wrapped = null;
                    _this.fromIndex = 0;
                    _this.__size = 0;
                    javaemul.internal.InternalPreconditions.checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size());
                    _this.wrapped = wrapped;
                    _this.fromIndex = fromIndex;
                    _this.__size = toIndex - fromIndex;
                    return _this;
                }
                SubList.prototype.add$int$java_lang_Object = function (index, element) {
                    javaemul.internal.InternalPreconditions.checkPositionIndex(index, this.__size);
                    this.wrapped.add(this.fromIndex + index, element);
                    this.__size++;
                };
                /**
                 *
                 * @param {number} index
                 * @param {*} element
                 */
                SubList.prototype.add = function (index, element) {
                    if (((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                        return this.add$int$java_lang_Object(index, element);
                    }
                    else if (((index != null) || index === null) && element === undefined) {
                        return this.add$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                /**
                 *
                 * @param {number} index
                 * @return {*}
                 */
                SubList.prototype.get = function (index) {
                    javaemul.internal.InternalPreconditions.checkElementIndex(index, this.__size);
                    return this.wrapped.get(this.fromIndex + index);
                };
                SubList.prototype.remove$int = function (index) {
                    javaemul.internal.InternalPreconditions.checkElementIndex(index, this.__size);
                    var result = this.wrapped['remove$int'](this.fromIndex + index);
                    this.__size--;
                    return result;
                };
                /**
                 *
                 * @param {number} index
                 * @return {*}
                 */
                SubList.prototype.remove = function (index) {
                    if (((typeof index === 'number') || index === null)) {
                        return this.remove$int(index);
                    }
                    else if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                /**
                 *
                 * @param {number} index
                 * @param {*} element
                 * @return {*}
                 */
                SubList.prototype.set = function (index, element) {
                    javaemul.internal.InternalPreconditions.checkElementIndex(index, this.__size);
                    return this.wrapped.set(this.fromIndex + index, element);
                };
                /**
                 *
                 * @return {number}
                 */
                SubList.prototype.size = function () {
                    return this.__size;
                };
                return SubList;
            }(java.util.AbstractList));
            AbstractList.SubList = SubList;
            SubList["__class"] = "java.util.AbstractList.SubList";
            SubList["__interfaces"] = ["java.util.List", "java.util.Collection", "java.lang.Iterable"];
            /**
             * Implementation of <code>ListIterator</code> for abstract lists.
             * @extends java.util.AbstractList.IteratorImpl
             * @class
             */
            var ListIteratorImpl = (function (_super) {
                __extends(ListIteratorImpl, _super);
                function ListIteratorImpl(__parent, start) {
                    var _this = this;
                    if (((typeof start === 'number') || start === null)) {
                        var __args = Array.prototype.slice.call(arguments, [1]);
                        _this = _super.call(this, __parent) || this;
                        _this.__parent = __parent;
                        (function () {
                            javaemul.internal.InternalPreconditions.checkPositionIndex(start, __parent.size());
                            _this.i = start;
                        })();
                    }
                    else if (start === undefined) {
                        var __args = Array.prototype.slice.call(arguments, [1]);
                        _this = _super.call(this, __parent) || this;
                        _this.__parent = __parent;
                    }
                    else
                        throw new Error('invalid overload');
                    return _this;
                }
                ListIteratorImpl.prototype.forEachRemaining = function (consumer) {
                    var _this = this;
                    javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                    while ((this.hasNext())) {
                        (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                    }
                    ;
                };
                /**
                 *
                 * @param {*} o
                 */
                ListIteratorImpl.prototype.add = function (o) {
                    this.__parent.add(this.i, o);
                    this.i++;
                    this.last = -1;
                };
                /**
                 *
                 * @return {boolean}
                 */
                ListIteratorImpl.prototype.hasPrevious = function () {
                    return this.i > 0;
                };
                /**
                 *
                 * @return {number}
                 */
                ListIteratorImpl.prototype.nextIndex = function () {
                    return this.i;
                };
                /**
                 *
                 * @return {*}
                 */
                ListIteratorImpl.prototype.previous = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasPrevious());
                    return this.__parent.get(this.last = --this.i);
                };
                /**
                 *
                 * @return {number}
                 */
                ListIteratorImpl.prototype.previousIndex = function () {
                    return this.i - 1;
                };
                /**
                 *
                 * @param {*} o
                 */
                ListIteratorImpl.prototype.set = function (o) {
                    javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                    this.__parent.set(this.last, o);
                };
                return ListIteratorImpl;
            }(AbstractList.IteratorImpl));
            AbstractList.ListIteratorImpl = ListIteratorImpl;
            ListIteratorImpl["__class"] = "java.util.AbstractList.ListIteratorImpl";
            ListIteratorImpl["__interfaces"] = ["java.util.Iterator", "java.util.ListIterator"];
        })(AbstractList = util.AbstractList || (util.AbstractList = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * A helper to detect concurrent modifications to collections. This is implemented as a helper
         * utility so that we could remove the checks easily by a flag.
         * @class
         */
        var ConcurrentModificationDetector = (function () {
            function ConcurrentModificationDetector() {
            }
            ConcurrentModificationDetector.API_CHECK_$LI$ = function () { if (ConcurrentModificationDetector.API_CHECK == null)
                ConcurrentModificationDetector.API_CHECK = (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(java.lang.System.getProperty("jre.checks.api", "ENABLED"), "ENABLED"); return ConcurrentModificationDetector.API_CHECK; };
            ;
            ConcurrentModificationDetector.structureChanged = function (map) {
                if (!ConcurrentModificationDetector.API_CHECK_$LI$()) {
                    return;
                }
                var modCount = javaemul.internal.JsUtils.getIntProperty(map, ConcurrentModificationDetector.MOD_COUNT_PROPERTY) | 0;
                javaemul.internal.JsUtils.setIntProperty(map, ConcurrentModificationDetector.MOD_COUNT_PROPERTY, modCount + 1);
            };
            ConcurrentModificationDetector.recordLastKnownStructure = function (host, iterator) {
                if (!ConcurrentModificationDetector.API_CHECK_$LI$()) {
                    return;
                }
                var modCount = javaemul.internal.JsUtils.getIntProperty(host, ConcurrentModificationDetector.MOD_COUNT_PROPERTY);
                javaemul.internal.JsUtils.setIntProperty(iterator, ConcurrentModificationDetector.MOD_COUNT_PROPERTY, modCount);
            };
            ConcurrentModificationDetector.checkStructuralChange = function (host, iterator) {
                if (!ConcurrentModificationDetector.API_CHECK_$LI$()) {
                    return;
                }
                if (javaemul.internal.JsUtils.getIntProperty(iterator, ConcurrentModificationDetector.MOD_COUNT_PROPERTY) !== javaemul.internal.JsUtils.getIntProperty(host, ConcurrentModificationDetector.MOD_COUNT_PROPERTY)) {
                    throw new java.util.ConcurrentModificationException();
                }
            };
            return ConcurrentModificationDetector;
        }());
        ConcurrentModificationDetector.MOD_COUNT_PROPERTY = "_gwt_modCount";
        util.ConcurrentModificationDetector = ConcurrentModificationDetector;
        ConcurrentModificationDetector["__class"] = "java.util.ConcurrentModificationDetector";
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * Basic {@link Map.Entry} implementation that implements hashCode, equals, and
         * toString.
         * @class
         */
        var AbstractMapEntry = (function () {
            function AbstractMapEntry() {
            }
            /**
             *
             * @param {*} other
             * @return {boolean}
             */
            AbstractMapEntry.prototype.equals = function (other) {
                if (!(other != null && (other["__interfaces"] != null && other["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || other.constructor != null && other.constructor["__interfaces"] != null && other.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0))) {
                    return false;
                }
                var entry = other;
                return java.util.Objects.equals(this.getKey(), entry.getKey()) && java.util.Objects.equals(this.getValue(), entry.getValue());
            };
            /**
             * Calculate the hash code using Sun's specified algorithm.
             * @return {number}
             */
            AbstractMapEntry.prototype.hashCode = function () {
                return (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(java.util.Objects) ^ (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(java.util.Objects);
            };
            /**
             *
             * @return {string}
             */
            AbstractMapEntry.prototype.toString = function () {
                return this.getKey() + "=" + this.getValue();
            };
            return AbstractMapEntry;
        }());
        util.AbstractMapEntry = AbstractMapEntry;
        AbstractMapEntry["__class"] = "java.util.AbstractMapEntry";
        AbstractMapEntry["__interfaces"] = ["java.util.Map.Entry"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));


(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the List interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractSequentialList.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         * @extends java.util.AbstractList
         * @class
         */
        var AbstractSequentialList = (function (_super) {
            __extends(AbstractSequentialList, _super);
            function AbstractSequentialList() {
                return _super.call(this) || this;
            }
            AbstractSequentialList.prototype.add$int$java_lang_Object = function (index, element) {
                var iter = this.listIterator$int(index);
                iter.add(element);
            };
            /**
             *
             * @param {number} index
             * @param {*} element
             */
            AbstractSequentialList.prototype.add = function (index, element) {
                if (((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                    return this.add$int$java_lang_Object(index, element);
                }
                else if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractSequentialList.prototype.addAll$int$java_util_Collection = function (index, c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var modified = false;
                var iter = this.listIterator$int(index);
                for (var index136 = c.iterator(); index136.hasNext();) {
                    var e = index136.next();
                    {
                        iter.add(e);
                        modified = true;
                    }
                }
                return modified;
            };
            /**
             *
             * @param {number} index
             * @param {*} c
             * @return {boolean}
             */
            AbstractSequentialList.prototype.addAll = function (index, c) {
                if (((typeof index === 'number') || index === null) && ((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || c === null)) {
                    return this.addAll$int$java_util_Collection(index, c);
                }
                else if (((index != null && (index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0 || index.constructor != null && index.constructor["__interfaces"] != null && index.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            AbstractSequentialList.prototype.get = function (index) {
                var iter = this.listIterator$int(index);
                try {
                    return iter.next();
                }
                catch (e) {
                    throw new java.lang.IndexOutOfBoundsException("Can\'t get element " + index);
                }
                ;
            };
            /**
             *
             * @return {*}
             */
            AbstractSequentialList.prototype.iterator = function () {
                return this.listIterator();
            };
            AbstractSequentialList.prototype.listIterator$int = function (index) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            AbstractSequentialList.prototype.listIterator = function (index) {
                if (((typeof index === 'number') || index === null)) {
                    return this.listIterator$int(index);
                }
                else if (index === undefined) {
                    return this.listIterator$();
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractSequentialList.prototype.remove$int = function (index) {
                var iter = this.listIterator$int(index);
                try {
                    var old = iter.next();
                    iter.remove();
                    return old;
                }
                catch (e) {
                    throw new java.lang.IndexOutOfBoundsException("Can\'t remove element " + index);
                }
                ;
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            AbstractSequentialList.prototype.remove = function (index) {
                if (((typeof index === 'number') || index === null)) {
                    return this.remove$int(index);
                }
                else if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @param {number} index
             * @param {*} element
             * @return {*}
             */
            AbstractSequentialList.prototype.set = function (index, element) {
                var iter = this.listIterator$int(index);
                try {
                    var old = iter.next();
                    iter.set(element);
                    return old;
                }
                catch (e) {
                    throw new java.lang.IndexOutOfBoundsException("Can\'t set element " + index);
                }
                ;
            };
            return AbstractSequentialList;
        }(java.util.AbstractList));
        util.AbstractSequentialList = AbstractSequentialList;
        AbstractSequentialList["__class"] = "java.util.AbstractSequentialList";
        AbstractSequentialList["__interfaces"] = ["java.util.List", "java.util.Collection", "java.lang.Iterable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the Set interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractSet.html">[Sun
         * docs]</a>
         *
         * @param <E> the element type.
         * @class
         * @extends java.util.AbstractCollection
         */
        var AbstractSet = (function (_super) {
            __extends(AbstractSet, _super);
            function AbstractSet() {
                return _super.call(this) || this;
            }
            AbstractSet.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_5 = function (index133) {
                    var t = index133.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index133 = this.iterator(); index133.hasNext();) {
                    _loop_5(index133);
                }
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            AbstractSet.prototype.equals = function (o) {
                if (o === this) {
                    return true;
                }
                if (!(o != null && (o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Set") >= 0 || o.constructor != null && o.constructor["__interfaces"] != null && o.constructor["__interfaces"].indexOf("java.util.Set") >= 0))) {
                    return false;
                }
                var other = o;
                if (other.size() !== this.size()) {
                    return false;
                }
                return this.containsAll(other);
            };
            /**
             *
             * @return {number}
             */
            AbstractSet.prototype.hashCode = function () {
                return (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(java.util.Collections);
            };
            /**
             *
             * @param {*} c
             * @return {boolean}
             */
            AbstractSet.prototype.removeAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var size = this.size();
                if (size < c.size()) {
                    for (var iter = this.iterator(); iter.hasNext();) {
                        var o = iter.next();
                        if (c.contains(o)) {
                            iter.remove();
                        }
                    }
                    ;
                }
                else {
                    for (var index134 = c.iterator(); index134.hasNext();) {
                        var o1 = index134.next();
                        {
                            this.remove$java_lang_Object(o1);
                        }
                    }
                }
                return (size !== this.size());
            };
            return AbstractSet;
        }(java.util.AbstractCollection));
        util.AbstractSet = AbstractSet;
        AbstractSet["__class"] = "java.util.AbstractSet";
        AbstractSet["__interfaces"] = ["java.util.Collection", "java.util.Set", "java.lang.Iterable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the Map interface.
         * <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractMap.html">
         * [Sun docs]</a>
         *
         * @param <K>
         * the key type.
         * @param <V>
         * the value type.
         * @class
         */
        var AbstractMap = (function () {
            function AbstractMap() {
            }
            /**
             *
             */
            AbstractMap.prototype.clear = function () {
                this.entrySet().clear();
            };
            /**
             *
             * @param {*} key
             * @return {boolean}
             */
            AbstractMap.prototype.containsKey = function (key) {
                return this.implFindEntry(key, false) != null;
            };
            /**
             *
             * @param {*} value
             * @return {boolean}
             */
            AbstractMap.prototype.containsValue = function (value) {
                for (var index158 = this.entrySet().iterator(); index158.hasNext();) {
                    var entry = index158.next();
                    {
                        var v = entry.getValue();
                        if (java.util.Objects.equals(value, v)) {
                            return true;
                        }
                    }
                }
                return false;
            };
            AbstractMap.prototype.containsEntry = function (entry) {
                var key = entry.getKey();
                var value = entry.getValue();
                var ourValue = this.get(key);
                if (!java.util.Objects.equals(value, ourValue)) {
                    return false;
                }
                if (ourValue == null && !this.containsKey(key)) {
                    return false;
                }
                return true;
            };
            /**
             *
             * @param {*} obj
             * @return {boolean}
             */
            AbstractMap.prototype.equals = function (obj) {
                if (obj === this) {
                    return true;
                }
                if (!(obj != null && (obj["__interfaces"] != null && obj["__interfaces"].indexOf("java.util.Map") >= 0 || obj.constructor != null && obj.constructor["__interfaces"] != null && obj.constructor["__interfaces"].indexOf("java.util.Map") >= 0))) {
                    return false;
                }
                var otherMap = obj;
                if (this.size() !== otherMap.size()) {
                    return false;
                }
                for (var index159 = otherMap.entrySet().iterator(); index159.hasNext();) {
                    var entry = index159.next();
                    {
                        if (!this.containsEntry(entry)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            /**
             *
             * @param {*} key
             * @return {*}
             */
            AbstractMap.prototype.get = function (key) {
                return (AbstractMap.getEntryValueOrNull(this.implFindEntry(key, false)));
            };
            /**
             *
             * @return {number}
             */
            AbstractMap.prototype.hashCode = function () {
                return (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(java.util.Collections);
            };
            /**
             *
             * @return {boolean}
             */
            AbstractMap.prototype.isEmpty = function () {
                return this.size() === 0;
            };
            /**
             *
             * @return {*}
             */
            AbstractMap.prototype.keySet = function () {
                return new AbstractMap.AbstractMap$0(this);
            };
            /**
             *
             * @param {java.lang.Enum} key
             * @param {*} value
             * @return {*}
             */
            AbstractMap.prototype.put = function (key, value) {
                if (((key != null) || key === null) && ((value != null) || value === null)) {
                    return this.put$java_lang_Object$java_lang_Object(key, value);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractMap.prototype.put$java_lang_Object$java_lang_Object = function (key, value) {
                throw new java.lang.UnsupportedOperationException("Put not supported on this map");
            };
            /**
             *
             * @param {*} map
             */
            AbstractMap.prototype.putAll = function (map) {
                javaemul.internal.InternalPreconditions.checkNotNull(map);
                for (var index160 = map.entrySet().iterator(); index160.hasNext();) {
                    var e = index160.next();
                    {
                        this.put(e.getKey(), e.getValue());
                    }
                }
            };
            /**
             *
             * @param {*} key
             * @return {*}
             */
            AbstractMap.prototype.remove = function (key) {
                return (AbstractMap.getEntryValueOrNull(this.implFindEntry(key, true)));
            };
            /**
             *
             * @return {number}
             */
            AbstractMap.prototype.size = function () {
                return this.entrySet().size();
            };
            AbstractMap.prototype.toString$ = function () {
                var joiner = new java.util.StringJoiner(", ", "{", "}");
                for (var index161 = this.entrySet().iterator(); index161.hasNext();) {
                    var entry = index161.next();
                    {
                        joiner.add(this.toString$java_util_Map_Entry(entry));
                    }
                }
                return joiner.toString();
            };
            AbstractMap.prototype.toString$java_util_Map_Entry = function (entry) {
                return this.toString$java_lang_Object(entry.getKey()) + "=" + this.toString$java_lang_Object(entry.getValue());
            };
            AbstractMap.prototype.toString = function (entry) {
                if (((entry != null && (entry["__interfaces"] != null && entry["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || entry.constructor != null && entry.constructor["__interfaces"] != null && entry.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0)) || entry === null)) {
                    return this.toString$java_util_Map_Entry(entry);
                }
                else if (((entry != null) || entry === null)) {
                    return this.toString$java_lang_Object(entry);
                }
                else if (entry === undefined) {
                    return this.toString$();
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractMap.prototype.toString$java_lang_Object = function (o) {
                return o === this ? "(this Map)" : new String(o).toString();
            };
            /**
             *
             * @return {*}
             */
            AbstractMap.prototype.values = function () {
                return new AbstractMap.AbstractMap$1(this);
            };
            AbstractMap.getEntryKeyOrNull = function (entry) {
                return entry == null ? null : entry.getKey();
            };
            AbstractMap.getEntryValueOrNull = function (entry) {
                return entry == null ? null : entry.getValue();
            };
            AbstractMap.prototype.implFindEntry = function (key, remove) {
                for (var iter = this.entrySet().iterator(); iter.hasNext();) {
                    var entry = iter.next();
                    var k = entry.getKey();
                    if (java.util.Objects.equals(key, k)) {
                        if (remove) {
                            entry = (new AbstractMap.SimpleEntry(entry.getKey(), entry.getValue()));
                            iter.remove();
                        }
                        return entry;
                    }
                }
                ;
                return null;
            };
            return AbstractMap;
        }());
        util.AbstractMap = AbstractMap;
        AbstractMap["__class"] = "java.util.AbstractMap";
        AbstractMap["__interfaces"] = ["java.util.Map"];
        (function (AbstractMap) {
            /**
             * Basic {@link Map.Entry} implementation used by {@link SimpleEntry} and
             * {@link SimpleImmutableEntry}.
             * @class
             */
            var AbstractEntry = (function () {
                function AbstractEntry(key, value) {
                    this.key = null;
                    this.value = null;
                    this.key = key;
                    this.value = value;
                }
                /**
                 *
                 * @return {*}
                 */
                AbstractEntry.prototype.getKey = function () {
                    return this.key;
                };
                /**
                 *
                 * @return {*}
                 */
                AbstractEntry.prototype.getValue = function () {
                    return this.value;
                };
                /**
                 *
                 * @param {*} value
                 * @return {*}
                 */
                AbstractEntry.prototype.setValue = function (value) {
                    var oldValue = this.value;
                    this.value = value;
                    return oldValue;
                };
                /**
                 *
                 * @param {*} other
                 * @return {boolean}
                 */
                AbstractEntry.prototype.equals = function (other) {
                    if (!(other != null && (other["__interfaces"] != null && other["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || other.constructor != null && other.constructor["__interfaces"] != null && other.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0))) {
                        return false;
                    }
                    var entry = other;
                    return java.util.Objects.equals(this.key, entry.getKey()) && java.util.Objects.equals(this.value, entry.getValue());
                };
                /**
                 * Calculate the hash code using Sun's specified algorithm.
                 * @return {number}
                 */
                AbstractEntry.prototype.hashCode = function () {
                    return (function (o) { if (o.hashCode) {
                        return o.hashCode();
                    }
                    else {
                        return o.toString();
                    } })(java.util.Objects) ^ (function (o) { if (o.hashCode) {
                        return o.hashCode();
                    }
                    else {
                        return o.toString();
                    } })(java.util.Objects);
                };
                /**
                 *
                 * @return {string}
                 */
                AbstractEntry.prototype.toString = function () {
                    return this.key + "=" + this.value;
                };
                return AbstractEntry;
            }());
            AbstractMap.AbstractEntry = AbstractEntry;
            AbstractEntry["__class"] = "java.util.AbstractMap.AbstractEntry";
            AbstractEntry["__interfaces"] = ["java.util.Map.Entry"];
            /**
             * A mutable {@link Map.Entry} shared by several {@link Map}
             * implementations.
             * @param {*} key
             * @param {*} value
             * @class
             * @extends java.util.AbstractMap.AbstractEntry
             */
            var SimpleEntry = (function (_super) {
                __extends(SimpleEntry, _super);
                function SimpleEntry(key, value) {
                    var _this = this;
                    if (((key != null) || key === null) && ((value != null) || value === null)) {
                        var __args = Array.prototype.slice.call(arguments);
                        _this = _super.call(this, key, value) || this;
                    }
                    else if (((key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0)) || key === null) && value === undefined) {
                        var __args = Array.prototype.slice.call(arguments);
                        var entry = __args[0];
                        _this = _super.call(this, entry.getKey(), entry.getValue()) || this;
                    }
                    else
                        throw new Error('invalid overload');
                    return _this;
                }
                return SimpleEntry;
            }(AbstractMap.AbstractEntry));
            AbstractMap.SimpleEntry = SimpleEntry;
            SimpleEntry["__class"] = "java.util.AbstractMap.SimpleEntry";
            SimpleEntry["__interfaces"] = ["java.util.Map.Entry"];
            /**
             * An immutable {@link Map.Entry} shared by several {@link Map}
             * implementations.
             * @param {*} key
             * @param {*} value
             * @class
             * @extends java.util.AbstractMap.AbstractEntry
             */
            var SimpleImmutableEntry = (function (_super) {
                __extends(SimpleImmutableEntry, _super);
                function SimpleImmutableEntry(key, value) {
                    var _this = this;
                    if (((key != null) || key === null) && ((value != null) || value === null)) {
                        var __args = Array.prototype.slice.call(arguments);
                        _this = _super.call(this, key, value) || this;
                    }
                    else if (((key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0)) || key === null) && value === undefined) {
                        var __args = Array.prototype.slice.call(arguments);
                        var entry = __args[0];
                        _this = _super.call(this, entry.getKey(), entry.getValue()) || this;
                    }
                    else
                        throw new Error('invalid overload');
                    return _this;
                }
                /**
                 *
                 * @param {*} value
                 * @return {*}
                 */
                SimpleImmutableEntry.prototype.setValue = function (value) {
                    throw new java.lang.UnsupportedOperationException();
                };
                return SimpleImmutableEntry;
            }(AbstractMap.AbstractEntry));
            AbstractMap.SimpleImmutableEntry = SimpleImmutableEntry;
            SimpleImmutableEntry["__class"] = "java.util.AbstractMap.SimpleImmutableEntry";
            SimpleImmutableEntry["__interfaces"] = ["java.util.Map.Entry"];
            var AbstractMap$0 = (function (_super) {
                __extends(AbstractMap$0, _super);
                function AbstractMap$0(__parent) {
                    var _this = _super.call(this) || this;
                    _this.__parent = __parent;
                    return _this;
                }
                /**
                 *
                 */
                AbstractMap$0.prototype.clear = function () {
                    this.__parent.clear();
                };
                /**
                 *
                 * @param {*} key
                 * @return {boolean}
                 */
                AbstractMap$0.prototype.contains = function (key) {
                    return this.__parent.containsKey(key);
                };
                /**
                 *
                 * @return {*}
                 */
                AbstractMap$0.prototype.iterator = function () {
                    var outerIter = this.__parent.entrySet().iterator();
                    return new AbstractMap$0.AbstractMap$0$0(this, outerIter);
                };
                /**
                 *
                 * @param {number} index
                 * @return {*}
                 */
                AbstractMap$0.prototype.remove = function (index) {
                    if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                AbstractMap$0.prototype.remove$java_lang_Object = function (key) {
                    if (this.__parent.containsKey(key)) {
                        this.__parent.remove(key);
                        return true;
                    }
                    return false;
                };
                /**
                 *
                 * @return {number}
                 */
                AbstractMap$0.prototype.size = function () {
                    return this.__parent.size();
                };
                return AbstractMap$0;
            }(java.util.AbstractSet));
            AbstractMap.AbstractMap$0 = AbstractMap$0;
            AbstractMap$0["__interfaces"] = ["java.util.Collection", "java.util.Set", "java.lang.Iterable"];
            (function (AbstractMap$0) {
                var AbstractMap$0$0 = (function () {
                    function AbstractMap$0$0(__parent, outerIter) {
                        this.outerIter = outerIter;
                        this.__parent = __parent;
                    }
                    AbstractMap$0$0.prototype.forEachRemaining = function (consumer) {
                        var _this = this;
                        javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                        while ((this.hasNext())) {
                            (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                        }
                        ;
                    };
                    /**
                     *
                     * @return {boolean}
                     */
                    AbstractMap$0$0.prototype.hasNext = function () {
                        return this.outerIter.hasNext();
                    };
                    /**
                     *
                     * @return {*}
                     */
                    AbstractMap$0$0.prototype.next = function () {
                        var entry = this.outerIter.next();
                        return entry.getKey();
                    };
                    /**
                     *
                     */
                    AbstractMap$0$0.prototype.remove = function () {
                        this.outerIter.remove();
                    };
                    return AbstractMap$0$0;
                }());
                AbstractMap$0.AbstractMap$0$0 = AbstractMap$0$0;
                AbstractMap$0$0["__interfaces"] = ["java.util.Iterator"];
            })(AbstractMap$0 = AbstractMap.AbstractMap$0 || (AbstractMap.AbstractMap$0 = {}));
            var AbstractMap$1 = (function (_super) {
                __extends(AbstractMap$1, _super);
                function AbstractMap$1(__parent) {
                    var _this = _super.call(this) || this;
                    _this.__parent = __parent;
                    return _this;
                }
                /**
                 *
                 */
                AbstractMap$1.prototype.clear = function () {
                    this.__parent.clear();
                };
                /**
                 *
                 * @param {*} value
                 * @return {boolean}
                 */
                AbstractMap$1.prototype.contains = function (value) {
                    return this.__parent.containsValue(value);
                };
                /**
                 *
                 * @return {*}
                 */
                AbstractMap$1.prototype.iterator = function () {
                    var outerIter = this.__parent.entrySet().iterator();
                    return new AbstractMap$1.AbstractMap$1$0(this, outerIter);
                };
                /**
                 *
                 * @return {number}
                 */
                AbstractMap$1.prototype.size = function () {
                    return this.__parent.size();
                };
                return AbstractMap$1;
            }(java.util.AbstractCollection));
            AbstractMap.AbstractMap$1 = AbstractMap$1;
            AbstractMap$1["__interfaces"] = ["java.util.Collection", "java.lang.Iterable"];
            (function (AbstractMap$1) {
                var AbstractMap$1$0 = (function () {
                    function AbstractMap$1$0(__parent, outerIter) {
                        this.outerIter = outerIter;
                        this.__parent = __parent;
                    }
                    AbstractMap$1$0.prototype.forEachRemaining = function (consumer) {
                        var _this = this;
                        javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                        while ((this.hasNext())) {
                            (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                        }
                        ;
                    };
                    /**
                     *
                     * @return {boolean}
                     */
                    AbstractMap$1$0.prototype.hasNext = function () {
                        return this.outerIter.hasNext();
                    };
                    /**
                     *
                     * @return {*}
                     */
                    AbstractMap$1$0.prototype.next = function () {
                        var entry = this.outerIter.next();
                        return entry.getValue();
                    };
                    /**
                     *
                     */
                    AbstractMap$1$0.prototype.remove = function () {
                        this.outerIter.remove();
                    };
                    return AbstractMap$1$0;
                }());
                AbstractMap$1.AbstractMap$1$0 = AbstractMap$1$0;
                AbstractMap$1$0["__interfaces"] = ["java.util.Iterator"];
            })(AbstractMap$1 = AbstractMap.AbstractMap$1 || (AbstractMap.AbstractMap$1 = {}));
        })(AbstractMap = util.AbstractMap || (util.AbstractMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * Implementation of Map interface based on a hash table.
         * <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/HashMap.html">[Sun
         * docs]</a>
         *
         * @param <K>
         * key type
         * @param <V>
         * value type
         * @param {number} ignored
         * @param {number} alsoIgnored
         * @class
         * @extends java.util.AbstractMap
         */
        var AbstractHashMap = (function (_super) {
            __extends(AbstractHashMap, _super);
            function AbstractHashMap(ignored, alsoIgnored) {
                var _this = this;
                if (((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.hashCodeMap = null;
                    _this.stringMap = null;
                    _this.hashCodeMap = null;
                    _this.stringMap = null;
                    (function () {
                        javaemul.internal.InternalPreconditions.checkArgument(ignored >= 0, "Negative initial capacity");
                        javaemul.internal.InternalPreconditions.checkArgument(alsoIgnored >= 0, "Non-positive load factor");
                        _this.reset();
                    })();
                }
                else if (((ignored != null && (ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Map") >= 0 || ignored.constructor != null && ignored.constructor["__interfaces"] != null && ignored.constructor["__interfaces"].indexOf("java.util.Map") >= 0)) || ignored === null) && alsoIgnored === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    var toBeCopied_1 = __args[0];
                    _this = _super.call(this) || this;
                    _this.hashCodeMap = null;
                    _this.stringMap = null;
                    _this.hashCodeMap = null;
                    _this.stringMap = null;
                    (function () {
                        _this.reset();
                        _this.putAll(toBeCopied_1);
                    })();
                }
                else if (((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    {
                        var __args_23 = Array.prototype.slice.call(arguments);
                        var alsoIgnored_1 = 0;
                        _this = _super.call(this) || this;
                        _this.hashCodeMap = null;
                        _this.stringMap = null;
                        _this.hashCodeMap = null;
                        _this.stringMap = null;
                        (function () {
                            javaemul.internal.InternalPreconditions.checkArgument(ignored >= 0, "Negative initial capacity");
                            javaemul.internal.InternalPreconditions.checkArgument(alsoIgnored_1 >= 0, "Non-positive load factor");
                            _this.reset();
                        })();
                    }
                }
                else if (ignored === undefined && alsoIgnored === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.hashCodeMap = null;
                    _this.stringMap = null;
                    _this.hashCodeMap = null;
                    _this.stringMap = null;
                    (function () {
                        _this.reset();
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            /**
             *
             */
            AbstractHashMap.prototype.clear = function () {
                this.reset();
            };
            AbstractHashMap.prototype.reset = function () {
                this.hashCodeMap = (new java.util.InternalHashCodeMap(this));
                this.stringMap = (new java.util.InternalStringMap(this));
                java.util.ConcurrentModificationDetector.structureChanged(this);
            };
            /**
             *
             * @param {*} key
             * @return {boolean}
             */
            AbstractHashMap.prototype.containsKey = function (key) {
                return (typeof key === 'string') ? this.hasStringValue(javaemul.internal.JsUtils.unsafeCastToString(key)) : this.hasHashValue(key);
            };
            /**
             *
             * @param {*} value
             * @return {boolean}
             */
            AbstractHashMap.prototype.containsValue = function (value) {
                return this._containsValue(value, this.stringMap) || this._containsValue(value, this.hashCodeMap);
            };
            AbstractHashMap.prototype._containsValue = function (value, entries) {
                for (var index165 = entries.iterator(); index165.hasNext();) {
                    var entry = index165.next();
                    {
                        if (this._equals(value, entry.getValue())) {
                            return true;
                        }
                    }
                }
                return false;
            };
            /**
             *
             * @return {*}
             */
            AbstractHashMap.prototype.entrySet = function () {
                return new AbstractHashMap.EntrySet(this);
            };
            /**
             *
             * @param {*} key
             * @return {*}
             */
            AbstractHashMap.prototype.get = function (key) {
                var v = (typeof key === 'string') ? this.getStringValue(javaemul.internal.JsUtils.unsafeCastToString(key)) : this.getHashValue(key);
                return v === undefined ? null : v;
            };
            /**
             *
             * @param {*} key
             * @param {*} value
             * @return {*}
             */
            AbstractHashMap.prototype.put = function (key, value) {
                return (typeof key === 'string') ? this.putStringValue(javaemul.internal.JsUtils.unsafeCastToString(key), value) : this.putHashValue(key, value);
            };
            /**
             *
             * @param {*} key
             * @return {*}
             */
            AbstractHashMap.prototype.remove = function (key) {
                return (typeof key === 'string') ? this.removeStringValue(javaemul.internal.JsUtils.unsafeCastToString(key)) : this.removeHashValue(key);
            };
            /**
             *
             * @return {number}
             */
            AbstractHashMap.prototype.size = function () {
                return this.hashCodeMap.size() + this.stringMap.getSize();
            };
            /**
             * Returns the Map.Entry whose key is Object equal to <code>key</code>,
             * provided that <code>key</code>'s hash code is <code>hashCode</code>; or
             * <code>null</code> if no such Map.Entry exists at the specified hashCode.
             * @param {*} key
             * @return {*}
             * @private
             */
            AbstractHashMap.prototype.getHashValue = function (key) {
                return (util.AbstractMap.getEntryValueOrNull(this.hashCodeMap.getEntry(key)));
            };
            /**
             * Returns the value for the given key in the stringMap. Returns
             * <code>null</code> if the specified key does not exist.
             * @param {string} key
             * @return {*}
             * @private
             */
            AbstractHashMap.prototype.getStringValue = function (key) {
                return key == null ? this.getHashValue(null) : this.stringMap.get(key);
            };
            /**
             * Returns true if the a key exists in the hashCodeMap that is Object equal
             * to <code>key</code>, provided that <code>key</code>'s hash code is
             * <code>hashCode</code>.
             * @param {*} key
             * @return {boolean}
             * @private
             */
            AbstractHashMap.prototype.hasHashValue = function (key) {
                return this.hashCodeMap.getEntry(key) != null;
            };
            /**
             * Returns true if the given key exists in the stringMap.
             * @param {string} key
             * @return {boolean}
             * @private
             */
            AbstractHashMap.prototype.hasStringValue = function (key) {
                return key == null ? this.hasHashValue(null) : this.stringMap.contains(key);
            };
            /**
             * Sets the specified key to the specified value in the hashCodeMap. Returns
             * the value previously at that key. Returns <code>null</code> if the
             * specified key did not exist.
             * @param {*} key
             * @param {*} value
             * @return {*}
             * @private
             */
            AbstractHashMap.prototype.putHashValue = function (key, value) {
                return this.hashCodeMap.put(key, value);
            };
            /**
             * Sets the specified key to the specified value in the stringMap. Returns
             * the value previously at that key. Returns <code>null</code> if the
             * specified key did not exist.
             * @param {string} key
             * @param {*} value
             * @return {*}
             * @private
             */
            AbstractHashMap.prototype.putStringValue = function (key, value) {
                return key == null ? this.putHashValue(null, value) : this.stringMap.put(key, value);
            };
            /**
             * Removes the pair whose key is Object equal to <code>key</code> from
             * <code>hashCodeMap</code>, provided that <code>key</code>'s hash code is
             * <code>hashCode</code>. Returns the value that was associated with the
             * removed key, or null if no such key existed.
             * @param {*} key
             * @return {*}
             * @private
             */
            AbstractHashMap.prototype.removeHashValue = function (key) {
                return this.hashCodeMap.remove(key);
            };
            /**
             * Removes the specified key from the stringMap and returns the value that
             * was previously there. Returns <code>null</code> if the specified key does
             * not exist.
             * @param {string} key
             * @return {*}
             * @private
             */
            AbstractHashMap.prototype.removeStringValue = function (key) {
                return key == null ? this.removeHashValue(null) : this.stringMap.remove(key);
            };
            return AbstractHashMap;
        }(java.util.AbstractMap));
        util.AbstractHashMap = AbstractHashMap;
        AbstractHashMap["__class"] = "java.util.AbstractHashMap";
        AbstractHashMap["__interfaces"] = ["java.util.Map"];
        (function (AbstractHashMap) {
            var EntrySet = (function (_super) {
                __extends(EntrySet, _super);
                function EntrySet(__parent) {
                    var _this = _super.call(this) || this;
                    _this.__parent = __parent;
                    return _this;
                }
                /**
                 *
                 */
                EntrySet.prototype.clear = function () {
                    this.__parent.clear();
                };
                /**
                 *
                 * @param {*} o
                 * @return {boolean}
                 */
                EntrySet.prototype.contains = function (o) {
                    if (o != null && (o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || o.constructor != null && o.constructor["__interfaces"] != null && o.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0)) {
                        return this.__parent.containsEntry(o);
                    }
                    return false;
                };
                /**
                 *
                 * @return {*}
                 */
                EntrySet.prototype.iterator = function () {
                    return new AbstractHashMap.EntrySetIterator(this.__parent);
                };
                /**
                 *
                 * @param {number} index
                 * @return {*}
                 */
                EntrySet.prototype.remove = function (index) {
                    if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                EntrySet.prototype.remove$java_lang_Object = function (entry) {
                    if (this.contains(entry)) {
                        var key = entry.getKey();
                        this.__parent.remove(key);
                        return true;
                    }
                    return false;
                };
                /**
                 *
                 * @return {number}
                 */
                EntrySet.prototype.size = function () {
                    return this.__parent.size();
                };
                return EntrySet;
            }(java.util.AbstractSet));
            AbstractHashMap.EntrySet = EntrySet;
            EntrySet["__class"] = "java.util.AbstractHashMap.EntrySet";
            EntrySet["__interfaces"] = ["java.util.Collection", "java.util.Set", "java.lang.Iterable"];
            /**
             * Iterator for <code>EntrySet</code>.
             * @class
             */
            var EntrySetIterator = (function () {
                function EntrySetIterator(__parent) {
                    this.__parent = __parent;
                    this.stringMapEntries = null;
                    this.current = null;
                    this.last = null;
                    this.__hasNext = false;
                    this.stringMapEntries = __parent.stringMap.iterator();
                    this.current = this.stringMapEntries;
                    this.__hasNext = this.computeHasNext();
                    java.util.ConcurrentModificationDetector.recordLastKnownStructure(__parent, this);
                }
                EntrySetIterator.prototype.forEachRemaining = function (consumer) {
                    var _this = this;
                    javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                    while ((this.hasNext())) {
                        (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                    }
                    ;
                };
                /**
                 *
                 * @return {boolean}
                 */
                EntrySetIterator.prototype.hasNext = function () {
                    return this.__hasNext;
                };
                EntrySetIterator.prototype.computeHasNext = function () {
                    if (this.current.hasNext()) {
                        return true;
                    }
                    if (this.current !== this.stringMapEntries) {
                        return false;
                    }
                    this.current = this.__parent.hashCodeMap.iterator();
                    return this.current.hasNext();
                };
                /**
                 *
                 * @return {*}
                 */
                EntrySetIterator.prototype.next = function () {
                    java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent, this);
                    javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                    this.last = this.current;
                    var rv = this.current.next();
                    this.__hasNext = this.computeHasNext();
                    return rv;
                };
                /**
                 *
                 */
                EntrySetIterator.prototype.remove = function () {
                    javaemul.internal.InternalPreconditions.checkState(this.last != null);
                    java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent, this);
                    this.last.remove();
                    this.last = null;
                    this.__hasNext = this.computeHasNext();
                    java.util.ConcurrentModificationDetector.recordLastKnownStructure(this.__parent, this);
                };
                return EntrySetIterator;
            }());
            AbstractHashMap.EntrySetIterator = EntrySetIterator;
            EntrySetIterator["__class"] = "java.util.AbstractHashMap.EntrySetIterator";
            EntrySetIterator["__interfaces"] = ["java.util.Iterator"];
        })(AbstractHashMap = util.AbstractHashMap || (util.AbstractHashMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * A simple wrapper around JavaScriptObject to provide {@link java.util.Map}-like semantics for any
         * key type.
         * <p>
         * Implementation notes:
         * <p>
         * A key's hashCode is the index in backingMap which should contain that key. Since several keys may
         * have the same hash, each value in hashCodeMap is actually an array containing all entries whose
         * keys share the same hash.
         * @param {java.util.AbstractHashMap} host
         * @class
         */
        var InternalHashCodeMap = (function () {
            function InternalHashCodeMap(host) {
                /*private*/ this.backingMap = java.util.InternalJsMapFactory.newJsMap();
                this.host = null;
                this.__size = 0;
                this.host = host;
            }
            InternalHashCodeMap.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_2 = function (index126) {
                    var t = index126.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index126 = this.iterator(); index126.hasNext();) {
                    _loop_2(index126);
                }
            };
            InternalHashCodeMap.prototype.put = function (key, value) {
                var hashCode = this.hash(key);
                var chain = this.getChainOrEmpty(hashCode);
                if (chain.length === 0) {
                    this.backingMap.set(hashCode, chain);
                }
                else {
                    var entry = this.findEntryInChain(key, chain);
                    if (entry != null) {
                        return entry.setValue(value);
                    }
                }
                chain[chain.length] = (new java.util.AbstractMap.SimpleEntry(key, value));
                this.__size++;
                java.util.ConcurrentModificationDetector.structureChanged(this.host);
                return null;
            };
            InternalHashCodeMap.prototype.remove = function (key) {
                var hashCode = this.hash(key);
                var chain = this.getChainOrEmpty(hashCode);
                for (var i = 0; i < chain.length; i++) {
                    var entry = chain[i];
                    if (this.host._equals(key, entry.getKey())) {
                        if (chain.length === 1) {
                            javaemul.internal.ArrayHelper.setLength(chain, 0);
                            this.backingMap["delete"](hashCode);
                        }
                        else {
                            javaemul.internal.ArrayHelper.removeFrom(chain, i, 1);
                        }
                        this.__size--;
                        java.util.ConcurrentModificationDetector.structureChanged(this.host);
                        return entry.getValue();
                    }
                }
                ;
                return null;
            };
            InternalHashCodeMap.prototype.getEntry = function (key) {
                return this.findEntryInChain(key, this.getChainOrEmpty(this.hash(key)));
            };
            /*private*/ InternalHashCodeMap.prototype.findEntryInChain = function (key, chain) {
                for (var index127 = 0; index127 < chain.length; index127++) {
                    var entry = chain[index127];
                    {
                        if (this.host._equals(key, entry.getKey())) {
                            return entry;
                        }
                    }
                }
                return null;
            };
            InternalHashCodeMap.prototype.size = function () {
                return this.__size;
            };
            /**
             *
             * @return {*}
             */
            InternalHashCodeMap.prototype.iterator = function () {
                return new InternalHashCodeMap.InternalHashCodeMap$0(this);
            };
            /*private*/ InternalHashCodeMap.prototype.getChainOrEmpty = function (hashCode) {
                var chain = this.unsafeCastToArray(this.backingMap.get(hashCode));
                return chain == null ? this.newEntryChain() : chain;
            };
            /*private*/ InternalHashCodeMap.prototype.newEntryChain = function () {
                return ([]);
            };
            /*private*/ InternalHashCodeMap.prototype.unsafeCastToArray = function (arr) {
                return (arr);
            };
            /**
             * Returns hash code of the key as calculated by {@link AbstractHashMap#getHashCode(Object)} but
             * also handles null keys as well.
             * @param {*} key
             * @return {number}
             * @private
             */
            /*private*/ InternalHashCodeMap.prototype.hash = function (key) {
                return key == null ? 0 : this.host.getHashCode(key);
            };
            return InternalHashCodeMap;
        }());
        util.InternalHashCodeMap = InternalHashCodeMap;
        InternalHashCodeMap["__class"] = "java.util.InternalHashCodeMap";
        InternalHashCodeMap["__interfaces"] = ["java.lang.Iterable"];
        (function (InternalHashCodeMap) {
            var InternalHashCodeMap$0 = (function () {
                function InternalHashCodeMap$0(__parent) {
                    this.__parent = __parent;
                    this.chains = this.__parent.backingMap.entries();
                    this.itemIndex = 0;
                    this.chain = this.__parent.newEntryChain();
                    this.lastEntry = null;
                }
                InternalHashCodeMap$0.prototype.forEachRemaining = function (consumer) {
                    var _this = this;
                    javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                    while ((this.hasNext())) {
                        (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                    }
                    ;
                };
                /**
                 *
                 * @return {boolean}
                 */
                InternalHashCodeMap$0.prototype.hasNext = function () {
                    if (this.itemIndex < this.chain.length) {
                        return true;
                    }
                    var current = this.chains.next();
                    if (!current.done) {
                        this.chain = this.__parent.unsafeCastToArray(current.value[1]);
                        this.itemIndex = 0;
                        return true;
                    }
                    return false;
                };
                /**
                 *
                 * @return {*}
                 */
                InternalHashCodeMap$0.prototype.next = function () {
                    this.lastEntry = this.chain[this.itemIndex++];
                    return this.lastEntry;
                };
                /**
                 *
                 */
                InternalHashCodeMap$0.prototype.remove = function () {
                    this.__parent.remove(this.lastEntry.getKey());
                    if (this.itemIndex !== 0) {
                        this.itemIndex--;
                    }
                };
                return InternalHashCodeMap$0;
            }());
            InternalHashCodeMap.InternalHashCodeMap$0 = InternalHashCodeMap$0;
            InternalHashCodeMap$0["__interfaces"] = ["java.util.Iterator"];
        })(InternalHashCodeMap = util.InternalHashCodeMap || (util.InternalHashCodeMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        var InternalJsMap;
        (function (InternalJsMap) {
        })(InternalJsMap = util.InternalJsMap || (util.InternalJsMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        /**
         * A factory to create JavaScript Map instances.
         * @class
         */
        var InternalJsMapFactory = (function () {
            function InternalJsMapFactory() {
            }
            InternalJsMapFactory.jsMapCtor_$LI$ = function () { if (InternalJsMapFactory.jsMapCtor == null)
                InternalJsMapFactory.jsMapCtor = InternalJsMapFactory.getJsMapConstructor(); return InternalJsMapFactory.jsMapCtor; };
            ;
            /*private*/ InternalJsMapFactory.getJsMapConstructor = function () {
                return Map;
            };
            InternalJsMapFactory.newJsMap = function () {
                return (new (InternalJsMapFactory.jsMapCtor_$LI$())());
            };
            return InternalJsMapFactory;
        }());
        util.InternalJsMapFactory = InternalJsMapFactory;
        InternalJsMapFactory["__class"] = "java.util.InternalJsMapFactory";
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * Implementation of Map interface based on a hash table. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/HashMap.html">[Sun
         * docs]</a>
         *
         * @param <K> key type
         * @param <V> value type
         * @param {number} ignored
         * @param {number} alsoIgnored
         * @class
         * @extends java.util.AbstractHashMap
         */
        var HashMap = (function (_super) {
            __extends(HashMap, _super);
            function HashMap(ignored, alsoIgnored) {
                var _this = this;
                if (((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, ignored, alsoIgnored) || this;
                    _this.exposeKey = null;
                    _this.exposeValue = null;
                    _this.exposeKey = null;
                    _this.exposeValue = null;
                }
                else if (((ignored != null && (ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Map") >= 0 || ignored.constructor != null && ignored.constructor["__interfaces"] != null && ignored.constructor["__interfaces"].indexOf("java.util.Map") >= 0)) || ignored === null) && alsoIgnored === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    var toBeCopied = __args[0];
                    _this = _super.call(this, toBeCopied) || this;
                    _this.exposeKey = null;
                    _this.exposeValue = null;
                    _this.exposeKey = null;
                    _this.exposeValue = null;
                }
                else if (((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, ignored) || this;
                    _this.exposeKey = null;
                    _this.exposeValue = null;
                    _this.exposeKey = null;
                    _this.exposeValue = null;
                }
                else if (ignored === undefined && alsoIgnored === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.exposeKey = null;
                    _this.exposeValue = null;
                    _this.exposeKey = null;
                    _this.exposeValue = null;
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            HashMap.prototype.clone = function () {
                return (new HashMap(this));
            };
            /**
             *
             * @param {*} value1
             * @param {*} value2
             * @return {boolean}
             */
            HashMap.prototype._equals = function (value1, value2) {
                return java.util.Objects.equals(value1, value2);
            };
            /**
             *
             * @param {*} key
             * @return {number}
             */
            HashMap.prototype.getHashCode = function (key) {
                var hashCode = (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(key);
                return javaemul.internal.Coercions.ensureInt(hashCode);
            };
            return HashMap;
        }(java.util.AbstractHashMap));
        util.HashMap = HashMap;
        HashMap["__class"] = "java.util.HashMap";
        HashMap["__interfaces"] = ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the Set interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractSet.html">[Sun
         * docs]</a>
         *
         * @param <E> the element type.
         * @class
         * @extends java.util.AbstractCollection
         */
        var AbstractSet = (function (_super) {
            __extends(AbstractSet, _super);
            function AbstractSet() {
                return _super.call(this) || this;
            }
            AbstractSet.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_5 = function (index133) {
                    var t = index133.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index133 = this.iterator(); index133.hasNext();) {
                    _loop_5(index133);
                }
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            AbstractSet.prototype.equals = function (o) {
                if (o === this) {
                    return true;
                }
                if (!(o != null && (o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Set") >= 0 || o.constructor != null && o.constructor["__interfaces"] != null && o.constructor["__interfaces"].indexOf("java.util.Set") >= 0))) {
                    return false;
                }
                var other = o;
                if (other.size() !== this.size()) {
                    return false;
                }
                return this.containsAll(other);
            };
            /**
             *
             * @return {number}
             */
            AbstractSet.prototype.hashCode = function () {
                return (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(java.util.Collections);
            };
            /**
             *
             * @param {*} c
             * @return {boolean}
             */
            AbstractSet.prototype.removeAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var size = this.size();
                if (size < c.size()) {
                    for (var iter = this.iterator(); iter.hasNext();) {
                        var o = iter.next();
                        if (c.contains(o)) {
                            iter.remove();
                        }
                    }
                    ;
                }
                else {
                    for (var index134 = c.iterator(); index134.hasNext();) {
                        var o1 = index134.next();
                        {
                            this.remove$java_lang_Object(o1);
                        }
                    }
                }
                return (size !== this.size());
            };
            return AbstractSet;
        }(java.util.AbstractCollection));
        util.AbstractSet = AbstractSet;
        AbstractSet["__class"] = "java.util.AbstractSet";
        AbstractSet["__interfaces"] = ["java.util.Collection", "java.util.Set", "java.lang.Iterable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * A simple wrapper around JavaScript Map for key type is string.
         * @param {java.util.AbstractHashMap} host
         * @class
         */
        var InternalStringMap = (function () {
            function InternalStringMap(host) {
                /*private*/ this.backingMap = java.util.InternalJsMapFactory.newJsMap();
                this.host = null;
                this.size = 0;
                this.valueMod = 0;
                this.host = host;
            }
            InternalStringMap.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_6 = function (index135) {
                    var t = index135.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index135 = this.iterator(); index135.hasNext();) {
                    _loop_6(index135);
                }
            };
            InternalStringMap.prototype.contains = function (key) {
                return !javaemul.internal.JsUtils.isUndefined(this.backingMap.get(key));
            };
            InternalStringMap.prototype.get = function (key) {
                return this.backingMap.get(key);
            };
            InternalStringMap.prototype.put = function (key, value) {
                var oldValue = this.backingMap.get(key);
                this.backingMap.set(key, (InternalStringMap.toNullIfUndefined(value)));
                if (javaemul.internal.JsUtils.isUndefined(oldValue)) {
                    this.size++;
                    java.util.ConcurrentModificationDetector.structureChanged(this.host);
                }
                else {
                    this.valueMod++;
                }
                return oldValue;
            };
            InternalStringMap.prototype.remove = function (key) {
                var value = this.backingMap.get(key);
                if (!javaemul.internal.JsUtils.isUndefined(value)) {
                    this.backingMap["delete"](key);
                    this.size--;
                    java.util.ConcurrentModificationDetector.structureChanged(this.host);
                }
                else {
                    this.valueMod++;
                }
                return value;
            };
            InternalStringMap.prototype.getSize = function () {
                return this.size;
            };
            /**
             *
             * @return {*}
             */
            InternalStringMap.prototype.iterator = function () {
                return new InternalStringMap.InternalStringMap$0(this);
            };
            /*private*/ InternalStringMap.prototype.newMapEntry = function (entry, lastValueMod) {
                return new InternalStringMap.InternalStringMap$1(this, entry, lastValueMod);
            };
            /*private*/ InternalStringMap.toNullIfUndefined = function (value) {
                return javaemul.internal.JsUtils.isUndefined(value) ? null : value;
            };
            return InternalStringMap;
        }());
        util.InternalStringMap = InternalStringMap;
        InternalStringMap["__class"] = "java.util.InternalStringMap";
        InternalStringMap["__interfaces"] = ["java.lang.Iterable"];
        (function (InternalStringMap) {
            var InternalStringMap$0 = (function () {
                function InternalStringMap$0(__parent) {
                    this.__parent = __parent;
                    this.entries = this.__parent.backingMap.entries();
                    this.current = this.entries.next();
                    this.last = null;
                }
                InternalStringMap$0.prototype.forEachRemaining = function (consumer) {
                    var _this = this;
                    javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                    while ((this.hasNext())) {
                        (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                    }
                    ;
                };
                /**
                 *
                 * @return {boolean}
                 */
                InternalStringMap$0.prototype.hasNext = function () {
                    return !this.current.done;
                };
                /**
                 *
                 * @return {*}
                 */
                InternalStringMap$0.prototype.next = function () {
                    this.last = this.current;
                    this.current = this.entries.next();
                    return this.__parent.newMapEntry(this.last, this.__parent.valueMod);
                };
                /**
                 *
                 */
                InternalStringMap$0.prototype.remove = function () {
                    this.__parent.remove(this.last.value[0]);
                };
                return InternalStringMap$0;
            }());
            InternalStringMap.InternalStringMap$0 = InternalStringMap$0;
            InternalStringMap$0["__interfaces"] = ["java.util.Iterator"];
            var InternalStringMap$1 = (function (_super) {
                __extends(InternalStringMap$1, _super);
                function InternalStringMap$1(__parent, entry, lastValueMod) {
                    var _this = _super.call(this) || this;
                    _this.entry = entry;
                    _this.lastValueMod = lastValueMod;
                    _this.__parent = __parent;
                    return _this;
                }
                /**
                 *
                 * @return {*}
                 */
                InternalStringMap$1.prototype.getKey = function () {
                    return this.entry.value[0];
                };
                /**
                 *
                 * @return {*}
                 */
                InternalStringMap$1.prototype.getValue = function () {
                    if (this.__parent.valueMod !== this.lastValueMod) {
                        return this.__parent.get(this.entry.value[0]);
                    }
                    return this.entry.value[1];
                };
                /**
                 *
                 * @param {*} object
                 * @return {*}
                 */
                InternalStringMap$1.prototype.setValue = function (object) {
                    return this.__parent.put(this.entry.value[0], object);
                };
                return InternalStringMap$1;
            }(java.util.AbstractMapEntry));
            InternalStringMap.InternalStringMap$1 = InternalStringMap$1;
            InternalStringMap$1["__interfaces"] = ["java.util.Map.Entry"];
        })(InternalStringMap = util.InternalStringMap || (util.InternalStringMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * Implements a set in terms of a hash table. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/HashSet.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         * @param {number} initialCapacity
         * @param {number} loadFactor
         * @class
         * @extends java.util.AbstractSet
         */
        var HashSet = (function (_super) {
            __extends(HashSet, _super);
            function HashSet(initialCapacity, loadFactor) {
                var _this = this;
                if (((typeof initialCapacity === 'number') || initialCapacity === null) && ((typeof loadFactor === 'number') || loadFactor === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.map = null;
                    _this.exposeElement = null;
                    _this.map = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.map = (new java.util.HashMap(initialCapacity, loadFactor));
                    })();
                }
                else if (((initialCapacity != null && (initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.Collection") >= 0 || initialCapacity.constructor != null && initialCapacity.constructor["__interfaces"] != null && initialCapacity.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || initialCapacity === null) && loadFactor === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    var c_5 = __args[0];
                    _this = _super.call(this) || this;
                    _this.map = null;
                    _this.exposeElement = null;
                    _this.map = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.map = (new java.util.HashMap(c_5.size()));
                        _this.addAll$java_util_Collection(c_5);
                    })();
                }
                else if (((initialCapacity != null && initialCapacity instanceof java.util.HashMap) || initialCapacity === null) && loadFactor === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    var map_1 = __args[0];
                    _this = _super.call(this) || this;
                    _this.map = null;
                    _this.exposeElement = null;
                    _this.map = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.map = map_1;
                    })();
                }
                else if (((typeof initialCapacity === 'number') || initialCapacity === null) && loadFactor === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.map = null;
                    _this.exposeElement = null;
                    _this.map = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.map = (new java.util.HashMap(initialCapacity));
                    })();
                }
                else if (initialCapacity === undefined && loadFactor === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.map = null;
                    _this.exposeElement = null;
                    _this.map = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.map = (new java.util.HashMap());
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            HashSet.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_9 = function (index162) {
                    var t = index162.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index162 = this.iterator(); index162.hasNext();) {
                    _loop_9(index162);
                }
            };
            /**
             *
             * @param {number} index
             * @param {*} element
             */
            HashSet.prototype.add = function (index, element) {
                if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            HashSet.prototype.add$java_lang_Object = function (o) {
                var old = this.map.put(o, this);
                return (old == null);
            };
            /**
             *
             */
            HashSet.prototype.clear = function () {
                this.map.clear();
            };
            HashSet.prototype.clone = function () {
                return (new HashSet(this));
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            HashSet.prototype.contains = function (o) {
                return this.map.containsKey(o);
            };
            /**
             *
             * @return {boolean}
             */
            HashSet.prototype.isEmpty = function () {
                return this.map.isEmpty();
            };
            /**
             *
             * @return {*}
             */
            HashSet.prototype.iterator = function () {
                return this.map.keySet().iterator();
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            HashSet.prototype.remove = function (index) {
                if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            HashSet.prototype.remove$java_lang_Object = function (o) {
                return (this.map.remove(o) != null);
            };
            /**
             *
             * @return {number}
             */
            HashSet.prototype.size = function () {
                return this.map.size();
            };
            /**
             *
             * @return {string}
             */
            HashSet.prototype.toString = function () {
                return this.map.keySet().toString();
            };
            return HashSet;
        }(java.util.AbstractSet));
        util.HashSet = HashSet;
        HashSet["__class"] = "java.util.HashSet";
        HashSet["__interfaces"] = ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        /**
         * Implements a set using a TreeMap. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/TreeSet.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         * @param {*} c
         * @class
         * @extends java.util.AbstractSet
         */
        var TreeSet = (function (_super) {
            __extends(TreeSet, _super);
            function TreeSet(c) {
                var _this = this;
                if (((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || c === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    {
                        var __args_21 = Array.prototype.slice.call(arguments);
                        _this = _super.call(this) || this;
                        _this.map = null;
                        _this.map = null;
                        (function () {
                            _this.map = (new java.util.TreeMap());
                        })();
                    }
                    (function () {
                        _this.addAll$java_util_Collection(c);
                    })();
                }
                else if (((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Comparator") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.Comparator") >= 0)) || c === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.map = null;
                    _this.map = null;
                    (function () {
                        _this.map = (new java.util.TreeMap(c));
                    })();
                }
                else if (((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.SortedSet") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.SortedSet") >= 0)) || c === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    var s_1 = __args[0];
                    {
                        var __args_22 = Array.prototype.slice.call(arguments);
                        var c_6 = javaemul.internal.InternalPreconditions.checkNotNull(s_1).comparator();
                        _this = _super.call(this) || this;
                        _this.map = null;
                        _this.map = null;
                        (function () {
                            _this.map = (new java.util.TreeMap(c_6));
                        })();
                    }
                    (function () {
                        _this.addAll$java_util_Collection(s_1);
                    })();
                }
                else if (((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.NavigableMap") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.NavigableMap") >= 0)) || c === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    var map_2 = __args[0];
                    _this = _super.call(this) || this;
                    _this.map = null;
                    _this.map = null;
                    (function () {
                        _this.map = map_2;
                    })();
                }
                else if (c === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.map = null;
                    _this.map = null;
                    (function () {
                        _this.map = (new java.util.TreeMap());
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            TreeSet.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_10 = function (index163) {
                    var t = index163.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index163 = this.iterator(); index163.hasNext();) {
                    _loop_10(index163);
                }
            };
            /**
             *
             * @param {number} index
             * @param {*} element
             */
            TreeSet.prototype.add = function (index, element) {
                if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeSet.prototype.add$java_lang_Object = function (o) {
                return this.map.put(o, javaemul.internal.BooleanHelper.FALSE) == null;
            };
            /**
             *
             * @param {*} e
             * @return {*}
             */
            TreeSet.prototype.ceiling = function (e) {
                return this.map.ceilingKey(e);
            };
            /**
             *
             */
            TreeSet.prototype.clear = function () {
                this.map.clear();
            };
            /**
             *
             * @return {*}
             */
            TreeSet.prototype.comparator = function () {
                return this.map.comparator();
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            TreeSet.prototype.contains = function (o) {
                return this.map.containsKey(o);
            };
            /**
             *
             * @return {*}
             */
            TreeSet.prototype.descendingIterator = function () {
                return this.descendingSet().iterator();
            };
            /**
             *
             * @return {*}
             */
            TreeSet.prototype.descendingSet = function () {
                return (new TreeSet(this.map.descendingMap()));
            };
            /**
             *
             * @return {*}
             */
            TreeSet.prototype.first = function () {
                return this.map.firstKey();
            };
            /**
             *
             * @param {*} e
             * @return {*}
             */
            TreeSet.prototype.floor = function (e) {
                return this.map.floorKey(e);
            };
            TreeSet.prototype.headSet$java_lang_Object = function (toElement) {
                return this.headSet(toElement, false);
            };
            TreeSet.prototype.headSet$java_lang_Object$boolean = function (toElement, inclusive) {
                return (new TreeSet(this.map.headMap(toElement, inclusive)));
            };
            /**
             *
             * @param {*} toElement
             * @param {boolean} inclusive
             * @return {*}
             */
            TreeSet.prototype.headSet = function (toElement, inclusive) {
                if (((toElement != null) || toElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return this.headSet$java_lang_Object$boolean(toElement, inclusive);
                }
                else if (((toElement != null) || toElement === null) && inclusive === undefined) {
                    return this.headSet$java_lang_Object(toElement);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @param {*} e
             * @return {*}
             */
            TreeSet.prototype.higher = function (e) {
                return this.map.higherKey(e);
            };
            /**
             *
             * @return {*}
             */
            TreeSet.prototype.iterator = function () {
                return this.map.keySet().iterator();
            };
            /**
             *
             * @return {*}
             */
            TreeSet.prototype.last = function () {
                return this.map.lastKey();
            };
            /**
             *
             * @param {*} e
             * @return {*}
             */
            TreeSet.prototype.lower = function (e) {
                return this.map.lowerKey(e);
            };
            /**
             *
             * @return {*}
             */
            TreeSet.prototype.pollFirst = function () {
                return (java.util.AbstractMap.getEntryKeyOrNull(this.map.pollFirstEntry()));
            };
            /**
             *
             * @return {*}
             */
            TreeSet.prototype.pollLast = function () {
                return (java.util.AbstractMap.getEntryKeyOrNull(this.map.pollLastEntry()));
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            TreeSet.prototype.remove = function (index) {
                if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeSet.prototype.remove$java_lang_Object = function (o) {
                return this.map.remove(o) != null;
            };
            /**
             *
             * @return {number}
             */
            TreeSet.prototype.size = function () {
                return this.map.size();
            };
            TreeSet.prototype.subSet$java_lang_Object$boolean$java_lang_Object$boolean = function (fromElement, fromInclusive, toElement, toInclusive) {
                return (new TreeSet(this.map.subMap(fromElement, fromInclusive, toElement, toInclusive)));
            };
            /**
             *
             * @param {*} fromElement
             * @param {boolean} fromInclusive
             * @param {*} toElement
             * @param {boolean} toInclusive
             * @return {*}
             */
            TreeSet.prototype.subSet = function (fromElement, fromInclusive, toElement, toInclusive) {
                if (((fromElement != null) || fromElement === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null) && ((toElement != null) || toElement === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                    return this.subSet$java_lang_Object$boolean$java_lang_Object$boolean(fromElement, fromInclusive, toElement, toInclusive);
                }
                else if (((fromElement != null) || fromElement === null) && ((fromInclusive != null) || fromInclusive === null) && toElement === undefined && toInclusive === undefined) {
                    return this.subSet$java_lang_Object$java_lang_Object(fromElement, fromInclusive);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeSet.prototype.subSet$java_lang_Object$java_lang_Object = function (fromElement, toElement) {
                return this.subSet(fromElement, true, toElement, false);
            };
            TreeSet.prototype.tailSet$java_lang_Object = function (fromElement) {
                return this.tailSet(fromElement, true);
            };
            TreeSet.prototype.tailSet$java_lang_Object$boolean = function (fromElement, inclusive) {
                return (new TreeSet(this.map.tailMap(fromElement, inclusive)));
            };
            /**
             *
             * @param {*} fromElement
             * @param {boolean} inclusive
             * @return {*}
             */
            TreeSet.prototype.tailSet = function (fromElement, inclusive) {
                if (((fromElement != null) || fromElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return this.tailSet$java_lang_Object$boolean(fromElement, inclusive);
                }
                else if (((fromElement != null) || fromElement === null) && inclusive === undefined) {
                    return this.tailSet$java_lang_Object(fromElement);
                }
                else
                    throw new Error('invalid overload');
            };
            return TreeSet;
        }(java.util.AbstractSet));
        util.TreeSet = TreeSet;
        TreeSet["__class"] = "java.util.TreeSet";
        TreeSet["__interfaces"] = ["java.util.SortedSet", "java.util.Collection", "java.util.Set", "java.util.NavigableSet", "java.lang.Iterable", "java.io.Serializable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps a native <code>char</code> as an object.
         *
         * TODO(jat): many of the classification methods implemented here are not
         * correct in that they only handle ASCII characters, and many other methods are
         * not currently implemented. I think the proper approach is to introduce * a
         * deferred binding parameter which substitutes an implementation using a
         * fully-correct Unicode character database, at the expense of additional data
         * being downloaded. That way developers that need the functionality can get it
         * without those who don't need it paying for it.
         *
         * <pre>
         * The following methods are still not implemented -- most would require Unicode
         * character db to be useful:
         * - digit / is* / to*(int codePoint)
         * - isDefined(char)
         * - isIdentifierIgnorable(char)
         * - isJavaIdentifierPart(char)
         * - isJavaIdentifierStart(char)
         * - isJavaLetter(char) -- deprecated, so probably not
         * - isJavaLetterOrDigit(char) -- deprecated, so probably not
         * - isISOControl(char)
         * - isMirrored(char)
         * - isSpaceChar(char)
         * - isTitleCase(char)
         * - isUnicodeIdentifierPart(char)
         * - isUnicodeIdentifierStart(char)
         * - getDirectionality(*)
         * - getNumericValue(*)
         * - getType(*)
         * - reverseBytes(char) -- any use for this at all in the browser?
         * - toTitleCase(*)
         * - all the category constants for classification
         *
         * The following do not properly handle characters outside of ASCII:
         * - digit(char c, int radix)
         * - isDigit(char c)
         * - isLetter(char c)
         * - isLetterOrDigit(char c)
         * - isLowerCase(char c)
         * - isUpperCase(char c)
         * </pre>
         * @param {string} value
         * @class
         */
        var CharacterHelper = (function () {
            function CharacterHelper(value) {
                this.value = null;
                this.value = value;
            }
            CharacterHelper.TYPE_$LI$ = function () { if (CharacterHelper.TYPE == null)
                CharacterHelper.TYPE = String; return CharacterHelper.TYPE; };
            ;
            CharacterHelper.charCount = function (codePoint) {
                return codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT ? 2 : 1;
            };
            CharacterHelper.codePointAt$char_A$int = function (a, index) {
                return CharacterHelper.codePointAt$java_lang_CharSequence$int$int(new String(a), index, a.length);
            };
            CharacterHelper.codePointAt$char_A$int$int = function (a, index, limit) {
                return CharacterHelper.codePointAt$java_lang_CharSequence$int$int(new String(a), index, limit);
            };
            CharacterHelper.codePointAt = function (a, index, limit) {
                if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof index === 'number') || index === null) && ((typeof limit === 'number') || limit === null)) {
                    return javaemul.internal.CharacterHelper.codePointAt$char_A$int$int(a, index, limit);
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && ((typeof limit === 'number') || limit === null)) {
                    return javaemul.internal.CharacterHelper.codePointAt$java_lang_CharSequence$int$int(a, index, limit);
                }
                else if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof index === 'number') || index === null) && limit === undefined) {
                    return javaemul.internal.CharacterHelper.codePointAt$char_A$int(a, index);
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && limit === undefined) {
                    return javaemul.internal.CharacterHelper.codePointAt$java_lang_CharSequence$int(a, index);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.codePointAt$java_lang_CharSequence$int = function (seq, index) {
                return CharacterHelper.codePointAt$java_lang_CharSequence$int$int(seq, index, seq.length);
            };
            CharacterHelper.codePointBefore$char_A$int = function (a, index) {
                return CharacterHelper.codePointBefore$java_lang_CharSequence$int$int(new String(a), index, 0);
            };
            CharacterHelper.codePointBefore$char_A$int$int = function (a, index, start) {
                return CharacterHelper.codePointBefore$java_lang_CharSequence$int$int(new String(a), index, start);
            };
            CharacterHelper.codePointBefore = function (a, index, start) {
                if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof index === 'number') || index === null) && ((typeof start === 'number') || start === null)) {
                    return javaemul.internal.CharacterHelper.codePointBefore$char_A$int$int(a, index, start);
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && ((typeof start === 'number') || start === null)) {
                    return javaemul.internal.CharacterHelper.codePointBefore$java_lang_CharSequence$int$int(a, index, start);
                }
                else if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof index === 'number') || index === null) && start === undefined) {
                    return javaemul.internal.CharacterHelper.codePointBefore$char_A$int(a, index);
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && start === undefined) {
                    return javaemul.internal.CharacterHelper.codePointBefore$java_lang_CharSequence$int(a, index);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.codePointBefore$java_lang_CharSequence$int = function (cs, index) {
                return CharacterHelper.codePointBefore$java_lang_CharSequence$int$int(cs, index, 0);
            };
            CharacterHelper.codePointCount$char_A$int$int = function (a, offset, count) {
                return CharacterHelper.codePointCount$java_lang_CharSequence$int$int(new String(a), offset, offset + count);
            };
            CharacterHelper.codePointCount = function (a, offset, count) {
                if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
                    return javaemul.internal.CharacterHelper.codePointCount$char_A$int$int(a, offset, count);
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
                    return javaemul.internal.CharacterHelper.codePointCount$java_lang_CharSequence$int$int(a, offset, count);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.codePointCount$java_lang_CharSequence$int$int = function (seq, beginIndex, endIndex) {
                var count = 0;
                for (var idx = beginIndex; idx < endIndex;) {
                    var ch = seq.charAt(idx++);
                    if (CharacterHelper.isHighSurrogate(ch) && idx < endIndex && (CharacterHelper.isLowSurrogate(seq.charAt(idx)))) {
                        ++idx;
                    }
                    ++count;
                }
                ;
                return count;
            };
            CharacterHelper.compare = function (x, y) {
                return (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(x) - (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(y);
            };
            CharacterHelper.digit = function (c, radix) {
                if (radix < CharacterHelper.MIN_RADIX || radix > CharacterHelper.MAX_RADIX) {
                    return -1;
                }
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) >= '0'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) < '0'.charCodeAt(0) + Math.min(radix, 10)) {
                    return (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) - '0'.charCodeAt(0);
                }
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) >= 'a'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) < (radix + 'a'.charCodeAt(0) - 10)) {
                    return (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) - 'a'.charCodeAt(0) + 10;
                }
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) >= 'A'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) < (radix + 'A'.charCodeAt(0) - 10)) {
                    return (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) - 'A'.charCodeAt(0) + 10;
                }
                return -1;
            };
            CharacterHelper.getNumericValue = function (ch) {
                return ((ch).charCodeAt(0) | 0);
            };
            CharacterHelper.forDigit$int$int = function (digit, radix) {
                if (radix < CharacterHelper.MIN_RADIX || radix > CharacterHelper.MAX_RADIX) {
                    return String.fromCharCode(0);
                }
                if (digit < 0 || digit >= radix) {
                    return String.fromCharCode(0);
                }
                return CharacterHelper.forDigit$int(digit);
            };
            CharacterHelper.forDigit = function (digit, radix) {
                if (((typeof digit === 'number') || digit === null) && ((typeof radix === 'number') || radix === null)) {
                    return javaemul.internal.CharacterHelper.forDigit$int$int(digit, radix);
                }
                else if (((typeof digit === 'number') || digit === null) && radix === undefined) {
                    return javaemul.internal.CharacterHelper.forDigit$int(digit);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * @skip
             *
             * public for shared implementation with Arrays.hashCode
             * @param {string} c
             * @return {number}
             */
            CharacterHelper.hashCode = function (c) {
                return (c).charCodeAt(0);
            };
            CharacterHelper.isDigit = function (c) {
                var result = (new String(c).toString()).match(CharacterHelper.digitRegex());
                return result != null && result.length > 0;
            };
            CharacterHelper.digitRegex = function () {
                return new RegExp("\\d");
            };
            CharacterHelper.isHighSurrogate = function (ch) {
                return (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) >= (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(CharacterHelper.MIN_HIGH_SURROGATE) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) <= (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(CharacterHelper.MAX_HIGH_SURROGATE);
            };
            CharacterHelper.isLetter = function (c) {
                return (new String(c).toString()).match(CharacterHelper.leterRegex()).length > 0;
            };
            CharacterHelper.leterRegex = function () {
                return new RegExp("[A-Z]", "i");
            };
            CharacterHelper.isLetterOrDigit = function (c) {
                return (new String(c).toString()).match(CharacterHelper.leterOrDigitRegex()).length > 0;
            };
            CharacterHelper.leterOrDigitRegex = function () {
                return new RegExp("[A-Z\\d]", "i");
            };
            CharacterHelper.isLowerCase = function (c) {
                return (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(CharacterHelper.toLowerCase$char(c)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) && CharacterHelper.isLetter(c);
            };
            CharacterHelper.isLowSurrogate = function (ch) {
                return (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) >= (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(CharacterHelper.MIN_LOW_SURROGATE) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) <= (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(CharacterHelper.MAX_LOW_SURROGATE);
            };
            /**
             * Deprecated - see isWhitespace(char).
             * @param {string} c
             * @return {boolean}
             */
            CharacterHelper.isSpace = function (c) {
                switch ((c).charCodeAt(0)) {
                    case 32 /* ' ' */:
                        return true;
                    case 10 /* '\n' */:
                        return true;
                    case 9 /* '\t' */:
                        return true;
                    case 12 /* '\f' */:
                        return true;
                    case 13 /* '\r' */:
                        return true;
                    default:
                        return false;
                }
            };
            CharacterHelper.isWhitespace$char = function (ch) {
                return (new String(ch).toString()).match(CharacterHelper.whitespaceRegex()).length > 0;
            };
            CharacterHelper.isWhitespace = function (ch) {
                if (((typeof ch === 'string') || ch === null)) {
                    return javaemul.internal.CharacterHelper.isWhitespace$char(ch);
                }
                else if (((typeof ch === 'number') || ch === null)) {
                    return javaemul.internal.CharacterHelper.isWhitespace$int(ch);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.isWhitespace$int = function (codePoint) {
                return String.fromCharCode(codePoint).match(CharacterHelper.whitespaceRegex()).length > 0;
            };
            CharacterHelper.whitespaceRegex = function () {
                return new RegExp("[\\t-\\r \\u1680\\u180E\\u2000-\\u2006\\u2008-\\u200A\\u2028\\u2029\\u205F\\u3000\\uFEFF]|[\\x1C-\\x1F]");
            };
            CharacterHelper.isSupplementaryCodePoint = function (codePoint) {
                return codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT && codePoint <= CharacterHelper.MAX_CODE_POINT;
            };
            CharacterHelper.isSurrogatePair = function (highSurrogate, lowSurrogate) {
                return CharacterHelper.isHighSurrogate(highSurrogate) && CharacterHelper.isLowSurrogate(lowSurrogate);
            };
            CharacterHelper.isUpperCase = function (c) {
                return (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(CharacterHelper.toUpperCase$char(c)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) && CharacterHelper.isLetter(c);
            };
            CharacterHelper.isValidCodePoint = function (codePoint) {
                return codePoint >= CharacterHelper.MIN_CODE_POINT && codePoint <= CharacterHelper.MAX_CODE_POINT;
            };
            CharacterHelper.offsetByCodePoints$char_A$int$int$int$int = function (a, start, count, index, codePointOffset) {
                return CharacterHelper.offsetByCodePoints$java_lang_CharSequence$int$int((function (str, index, len) { return str.substring(index, index + len); })((a).join(''), start, count), index, codePointOffset);
            };
            CharacterHelper.offsetByCodePoints = function (a, start, count, index, codePointOffset) {
                if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof start === 'number') || start === null) && ((typeof count === 'number') || count === null) && ((typeof index === 'number') || index === null) && ((typeof codePointOffset === 'number') || codePointOffset === null)) {
                    return javaemul.internal.CharacterHelper.offsetByCodePoints$char_A$int$int$int$int(a, start, count, index, codePointOffset);
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof start === 'number') || start === null) && ((typeof count === 'number') || count === null) && index === undefined && codePointOffset === undefined) {
                    return javaemul.internal.CharacterHelper.offsetByCodePoints$java_lang_CharSequence$int$int(a, start, count);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.offsetByCodePoints$java_lang_CharSequence$int$int = function (seq, index, codePointOffset) {
                if (codePointOffset < 0) {
                    while ((codePointOffset < 0)) {
                        --index;
                        if (CharacterHelper.isLowSurrogate(seq.charAt(index)) && CharacterHelper.isHighSurrogate(seq.charAt(index - 1))) {
                            --index;
                        }
                        ++codePointOffset;
                    }
                    ;
                }
                else {
                    while ((codePointOffset > 0)) {
                        if (CharacterHelper.isHighSurrogate(seq.charAt(index)) && CharacterHelper.isLowSurrogate(seq.charAt(index + 1))) {
                            ++index;
                        }
                        ++index;
                        --codePointOffset;
                    }
                    ;
                }
                return index;
            };
            CharacterHelper.toChars$int = function (codePoint) {
                javaemul.internal.InternalPreconditions.checkCriticalArgument(codePoint >= 0 && codePoint <= CharacterHelper.MAX_CODE_POINT);
                if (codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) {
                    return [CharacterHelper.getHighSurrogate(codePoint), CharacterHelper.getLowSurrogate(codePoint)];
                }
                else {
                    return [String.fromCharCode(codePoint)];
                }
            };
            CharacterHelper.toChars$int$char_A$int = function (codePoint, dst, dstIndex) {
                javaemul.internal.InternalPreconditions.checkCriticalArgument(codePoint >= 0 && codePoint <= CharacterHelper.MAX_CODE_POINT);
                if (codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) {
                    dst[dstIndex++] = CharacterHelper.getHighSurrogate(codePoint);
                    dst[dstIndex] = CharacterHelper.getLowSurrogate(codePoint);
                    return 2;
                }
                else {
                    dst[dstIndex] = String.fromCharCode(codePoint);
                    return 1;
                }
            };
            CharacterHelper.toChars = function (codePoint, dst, dstIndex) {
                if (((typeof codePoint === 'number') || codePoint === null) && ((dst != null && dst instanceof Array && (dst.length == 0 || dst[0] == null || (typeof dst[0] === 'string'))) || dst === null) && ((typeof dstIndex === 'number') || dstIndex === null)) {
                    return javaemul.internal.CharacterHelper.toChars$int$char_A$int(codePoint, dst, dstIndex);
                }
                else if (((typeof codePoint === 'number') || codePoint === null) && dst === undefined && dstIndex === undefined) {
                    return javaemul.internal.CharacterHelper.toChars$int(codePoint);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.toCodePoint = function (highSurrogate, lowSurrogate) {
                return CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT + (((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(highSurrogate) & 1023) << 10) + ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(lowSurrogate) & 1023);
            };
            CharacterHelper.toLowerCase$char = function (c) {
                return new String(c).toString().toLowerCase().charAt(0);
            };
            CharacterHelper.toLowerCase = function (c) {
                if (((typeof c === 'string') || c === null)) {
                    return javaemul.internal.CharacterHelper.toLowerCase$char(c);
                }
                else if (((typeof c === 'number') || c === null)) {
                    return javaemul.internal.CharacterHelper.toLowerCase$int(c);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.toLowerCase$int = function (c) {
                return (new String(String.fromCharCode(c)).toString().toLowerCase().charAt(0)).charCodeAt(0);
            };
            CharacterHelper.toString = function (x) {
                return new String(x).toString();
            };
            CharacterHelper.toUpperCase$char = function (c) {
                return new String(c).toString().toUpperCase().charAt(0);
            };
            CharacterHelper.toUpperCase = function (c) {
                if (((typeof c === 'string') || c === null)) {
                    return javaemul.internal.CharacterHelper.toUpperCase$char(c);
                }
                else if (((typeof c === 'number') || c === null)) {
                    return javaemul.internal.CharacterHelper.toUpperCase$int(c);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.toUpperCase$int = function (c) {
                return new String(String.fromCharCode(c)).toString().toUpperCase().charAt(0);
            };
            CharacterHelper.valueOf = function (c) {
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) < 128) {
                    var result = CharacterHelper.BoxedValues.boxedValues_$LI$()[(c).charCodeAt(0)];
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(result) == null) {
                        result = CharacterHelper.BoxedValues.boxedValues_$LI$()[(c).charCodeAt(0)] = new String(c);
                    }
                    return result;
                }
                return new String(c);
            };
            CharacterHelper.codePointAt$java_lang_CharSequence$int$int = function (cs, index, limit) {
                var hiSurrogate = cs.charAt(index++);
                var loSurrogate;
                if (CharacterHelper.isHighSurrogate(hiSurrogate) && index < limit && CharacterHelper.isLowSurrogate(loSurrogate = cs.charAt(index))) {
                    return CharacterHelper.toCodePoint(hiSurrogate, loSurrogate);
                }
                return (hiSurrogate).charCodeAt(0);
            };
            CharacterHelper.codePointBefore$java_lang_CharSequence$int$int = function (cs, index, start) {
                var loSurrogate = cs.charAt(--index);
                var highSurrogate;
                if (CharacterHelper.isLowSurrogate(loSurrogate) && index > start && CharacterHelper.isHighSurrogate(highSurrogate = cs.charAt(index - 1))) {
                    return CharacterHelper.toCodePoint(highSurrogate, loSurrogate);
                }
                return (loSurrogate).charCodeAt(0);
            };
            CharacterHelper.forDigit$int = function (digit) {
                var overBaseTen = digit - 10;
                return String.fromCharCode((overBaseTen < 0 ? '0'.charCodeAt(0) + digit : 'a'.charCodeAt(0) + overBaseTen));
            };
            /**
             * Computes the high surrogate character of the UTF16 representation of a
             * non-BMP code point. See {@link getLowSurrogate}.
             *
             * @param {number} codePoint
             * requested codePoint, required to be >=
             * MIN_SUPPLEMENTARY_CODE_POINT
             * @return {string} high surrogate character
             */
            CharacterHelper.getHighSurrogate = function (codePoint) {
                return String.fromCharCode(((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(CharacterHelper.MIN_HIGH_SURROGATE) + (((codePoint - CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) >> 10) & 1023)));
            };
            /**
             * Computes the low surrogate character of the UTF16 representation of a
             * non-BMP code point. See {@link getHighSurrogate}.
             *
             * @param {number} codePoint
             * requested codePoint, required to be >=
             * MIN_SUPPLEMENTARY_CODE_POINT
             * @return {string} low surrogate character
             */
            CharacterHelper.getLowSurrogate = function (codePoint) {
                return String.fromCharCode(((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(CharacterHelper.MIN_LOW_SURROGATE) + ((codePoint - CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) & 1023)));
            };
            CharacterHelper.prototype.charValue = function () {
                return this.value;
            };
            CharacterHelper.prototype.compareTo$javaemul_internal_CharacterHelper = function (c) {
                return CharacterHelper.compare(this.value, c.value);
            };
            /**
             *
             * @param {javaemul.internal.CharacterHelper} c
             * @return {number}
             */
            CharacterHelper.prototype.compareTo = function (c) {
                if (((c != null && c instanceof javaemul.internal.CharacterHelper) || c === null)) {
                    return this.compareTo$javaemul_internal_CharacterHelper(c);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            CharacterHelper.prototype.equals = function (o) {
                return (o != null && o instanceof javaemul.internal.CharacterHelper) && ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(o.value) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(this.value));
            };
            /**
             *
             * @return {number}
             */
            CharacterHelper.prototype.hashCode = function () {
                return (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(this);
            };
            /**
             *
             * @return {string}
             */
            CharacterHelper.prototype.toString = function () {
                return new String(this.value).toString();
            };
            return CharacterHelper;
        }());
        CharacterHelper.MIN_RADIX = 2;
        CharacterHelper.MAX_RADIX = 36;
        CharacterHelper.MIN_VALUE = '\u0000';
        CharacterHelper.MAX_VALUE = '\uffff';
        CharacterHelper.MIN_SURROGATE = '\ud800';
        CharacterHelper.MAX_SURROGATE = '\udfff';
        CharacterHelper.MIN_LOW_SURROGATE = '\udc00';
        CharacterHelper.MAX_LOW_SURROGATE = '\udfff';
        CharacterHelper.MIN_HIGH_SURROGATE = '\ud800';
        CharacterHelper.MAX_HIGH_SURROGATE = '\udbff';
        CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT = 65536;
        CharacterHelper.MIN_CODE_POINT = 0;
        CharacterHelper.MAX_CODE_POINT = 1114111;
        CharacterHelper.SIZE = 16;
        internal.CharacterHelper = CharacterHelper;
        CharacterHelper["__class"] = "javaemul.internal.CharacterHelper";
        CharacterHelper["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
        (function (CharacterHelper) {
            /**
             * Use nested class to avoid clinit on outer.
             * @class
             */
            var BoxedValues = (function () {
                function BoxedValues() {
                }
                BoxedValues.boxedValues_$LI$ = function () { if (BoxedValues.boxedValues == null)
                    BoxedValues.boxedValues = new Array(128); return BoxedValues.boxedValues; };
                ;
                return BoxedValues;
            }());
            CharacterHelper.BoxedValues = BoxedValues;
            BoxedValues["__class"] = "javaemul.internal.CharacterHelper.BoxedValues";
        })(CharacterHelper = internal.CharacterHelper || (internal.CharacterHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps a primitive <code>int</code> as an object.
         * @param {number} value
         * @class
         * @extends javaemul.internal.NumberHelper
         */
        var IntegerHelper = (function (_super) {
            __extends(IntegerHelper, _super);
            function IntegerHelper(s) {
                var _this = this;
                if (((typeof s === 'string') || s === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.value = 0;
                    _this.value = 0;
                    (function () {
                        _this.value = IntegerHelper.parseInt(s);
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    var value_4 = __args[0];
                    _this = _super.call(this) || this;
                    _this.value = 0;
                    _this.value = 0;
                    (function () {
                        _this.value = value_4;
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            IntegerHelper.bitCount = function (x) {
                x -= ((x >> 1) & 1431655765);
                x = (((x >> 2) & 858993459) + (x & 858993459));
                x = (((x >> 4) + x) & 252645135);
                x += (x >> 8);
                x += (x >> 16);
                return x & 63;
            };
            IntegerHelper.compare = function (x, y) {
                if (x < y) {
                    return -1;
                }
                else if (x > y) {
                    return 1;
                }
                else {
                    return 0;
                }
            };
            IntegerHelper.decode = function (s) {
                return IntegerHelper.valueOf$int(internal.NumberHelper.__decodeAndValidateInt(s, IntegerHelper.MIN_VALUE, IntegerHelper.MAX_VALUE));
            };
            /**
             * @skip
             *
             * Here for shared implementation with Arrays.hashCode
             * @param {number} i
             * @return {number}
             */
            IntegerHelper.hashCode = function (i) {
                return i;
            };
            IntegerHelper.highestOneBit = function (i) {
                if (i < 0) {
                    return IntegerHelper.MIN_VALUE;
                }
                else if (i === 0) {
                    return 0;
                }
                else {
                    var rtn = void 0;
                    for (rtn = 1073741824; (rtn & i) === 0; rtn >>= 1) {
                    }
                    ;
                    return rtn;
                }
            };
            IntegerHelper.lowestOneBit = function (i) {
                return i & -i;
            };
            IntegerHelper.numberOfLeadingZeros = function (i) {
                if (i < 0) {
                    return 0;
                }
                else if (i === 0) {
                    return IntegerHelper.SIZE;
                }
                else {
                    var y = void 0;
                    var m = void 0;
                    var n = void 0;
                    y = -(i >> 16);
                    m = (y >> 16) & 16;
                    n = 16 - m;
                    i = i >> m;
                    y = i - 256;
                    m = (y >> 16) & 8;
                    n += m;
                    i <<= m;
                    y = i - 4096;
                    m = (y >> 16) & 4;
                    n += m;
                    i <<= m;
                    y = i - 16384;
                    m = (y >> 16) & 2;
                    n += m;
                    i <<= m;
                    y = i >> 14;
                    m = y & ~(y >> 1);
                    return n + 2 - m;
                }
            };
            IntegerHelper.numberOfTrailingZeros = function (i) {
                if (i === 0) {
                    return IntegerHelper.SIZE;
                }
                else {
                    var rtn = 0;
                    for (var r = 1; (r & i) === 0; r <<= 1) {
                        rtn++;
                    }
                    ;
                    return rtn;
                }
            };
            IntegerHelper.parseInt = function (s, radix) {
                if (radix === void 0) { radix = 10; }
                return internal.NumberHelper.__parseAndValidateInt(s, radix, IntegerHelper.MIN_VALUE, IntegerHelper.MAX_VALUE);
            };
            IntegerHelper.reverse = function (i) {
                var nibbles = IntegerHelper.ReverseNibbles.reverseNibbles_$LI$();
                return (nibbles[i >>> 28]) | (nibbles[(i >> 24) & 15] << 4) | (nibbles[(i >> 20) & 15] << 8) | (nibbles[(i >> 16) & 15] << 12) | (nibbles[(i >> 12) & 15] << 16) | (nibbles[(i >> 8) & 15] << 20) | (nibbles[(i >> 4) & 15] << 24) | (nibbles[i & 15] << 28);
            };
            IntegerHelper.reverseBytes = function (i) {
                return ((i & 255) << 24) | ((i & 65280) << 8) | ((i & 16711680) >> 8) | ((i & -16777216) >>> 24);
            };
            IntegerHelper.rotateLeft = function (i, distance) {
                while ((distance-- > 0)) {
                    i = i << 1 | ((i < 0) ? 1 : 0);
                }
                ;
                return i;
            };
            IntegerHelper.rotateRight = function (i, distance) {
                var ui = i & IntegerHelper.MAX_VALUE;
                var carry = (i < 0) ? 1073741824 : 0;
                while ((distance-- > 0)) {
                    var nextcarry = ui & 1;
                    ui = carry | (ui >> 1);
                    carry = (nextcarry === 0) ? 0 : 1073741824;
                }
                ;
                if (carry !== 0) {
                    ui = ui | IntegerHelper.MIN_VALUE;
                }
                return ui;
            };
            IntegerHelper.signum = function (i) {
                if (i === 0) {
                    return 0;
                }
                else if (i < 0) {
                    return -1;
                }
                else {
                    return 1;
                }
            };
            IntegerHelper.toBinaryString = function (value) {
                return IntegerHelper.toUnsignedRadixString(value, 2);
            };
            IntegerHelper.toHexString = function (value) {
                return IntegerHelper.toUnsignedRadixString(value, 16);
            };
            IntegerHelper.toOctalString = function (value) {
                return IntegerHelper.toUnsignedRadixString(value, 8);
            };
            IntegerHelper.toString$int = function (value) {
                return new String(value).toString();
            };
            IntegerHelper.toString$int$int = function (value, radix) {
                if (radix === 10 || radix < javaemul.internal.CharacterHelper.MIN_RADIX || radix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                    return new String(value).toString();
                }
                return IntegerHelper.toRadixString(value, radix);
            };
            IntegerHelper.toString = function (value, radix) {
                if (((typeof value === 'number') || value === null) && ((typeof radix === 'number') || radix === null)) {
                    return javaemul.internal.IntegerHelper.toString$int$int(value, radix);
                }
                else if (((typeof value === 'number') || value === null) && radix === undefined) {
                    return javaemul.internal.IntegerHelper.toString$int(value);
                }
                else
                    throw new Error('invalid overload');
            };
            IntegerHelper.valueOf$int = function (i) {
                if (i > -129 && i < 128) {
                    var rebase = i + 128;
                    var result = IntegerHelper.BoxedValues.boxedValues_$LI$()[rebase];
                    if (result == null) {
                        result = IntegerHelper.BoxedValues.boxedValues_$LI$()[rebase] = new Number(i);
                    }
                    return result;
                }
                return new Number(i);
            };
            IntegerHelper.valueOf$java_lang_String = function (s) {
                return IntegerHelper.valueOf$java_lang_String$int(s, 10);
            };
            IntegerHelper.valueOf$java_lang_String$int = function (s, radix) {
                return IntegerHelper.valueOf$int(IntegerHelper.parseInt(s, radix));
            };
            IntegerHelper.valueOf = function (s, radix) {
                if (((typeof s === 'string') || s === null) && ((typeof radix === 'number') || radix === null)) {
                    return javaemul.internal.IntegerHelper.valueOf$java_lang_String$int(s, radix);
                }
                else if (((typeof s === 'string') || s === null) && radix === undefined) {
                    return javaemul.internal.IntegerHelper.valueOf$java_lang_String(s);
                }
                else if (((typeof s === 'number') || s === null) && radix === undefined) {
                    return javaemul.internal.IntegerHelper.valueOf$int(s);
                }
                else
                    throw new Error('invalid overload');
            };
            IntegerHelper.toRadixString = function (value, radix) {
                return (value.toString(radix));
            };
            IntegerHelper.toUnsignedRadixString = function (value, radix) {
                return ((value >>> 0).toString(radix));
            };
            /**
             *
             * @return {number}
             */
            IntegerHelper.prototype.byteValue = function () {
                return (this.value | 0);
            };
            IntegerHelper.prototype.compareTo$javaemul_internal_IntegerHelper = function (b) {
                return IntegerHelper.compare(this.value, b.value);
            };
            /**
             *
             * @param {javaemul.internal.IntegerHelper} b
             * @return {number}
             */
            IntegerHelper.prototype.compareTo = function (b) {
                if (((b != null && b instanceof javaemul.internal.IntegerHelper) || b === null)) {
                    return this.compareTo$javaemul_internal_IntegerHelper(b);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @return {number}
             */
            IntegerHelper.prototype.doubleValue = function () {
                return this.value;
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            IntegerHelper.prototype.equals = function (o) {
                return (o != null && o instanceof javaemul.internal.IntegerHelper) && (o.value === this.value);
            };
            /**
             *
             * @return {number}
             */
            IntegerHelper.prototype.floatValue = function () {
                return this.value;
            };
            /**
             *
             * @return {number}
             */
            IntegerHelper.prototype.hashCode = function () {
                return (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(this);
            };
            /**
             *
             * @return {number}
             */
            IntegerHelper.prototype.intValue = function () {
                return this.value;
            };
            /**
             *
             * @return {number}
             */
            IntegerHelper.prototype.longValue = function () {
                return this.value;
            };
            /**
             *
             * @return {number}
             */
            IntegerHelper.prototype.shortValue = function () {
                return (this.value | 0);
            };
            /**
             *
             * @return {string}
             */
            IntegerHelper.prototype.toString = function () {
                return IntegerHelper.toString$int(this.value);
            };
            IntegerHelper.getInteger = function (nm) {
                return IntegerHelper.decode(java.lang.System.getProperty$java_lang_String(nm));
            };
            return IntegerHelper;
        }(javaemul.internal.NumberHelper));
        IntegerHelper.MAX_VALUE = 2147483647;
        IntegerHelper.MIN_VALUE = -2147483648;
        IntegerHelper.SIZE = 32;
        internal.IntegerHelper = IntegerHelper;
        IntegerHelper["__class"] = "javaemul.internal.IntegerHelper";
        IntegerHelper["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
        (function (IntegerHelper) {
            /**
             * Use nested class to avoid clinit on outer.
             * @class
             */
            var BoxedValues = (function () {
                function BoxedValues() {
                }
                BoxedValues.boxedValues_$LI$ = function () { if (BoxedValues.boxedValues == null)
                    BoxedValues.boxedValues = new Array(256); return BoxedValues.boxedValues; };
                ;
                return BoxedValues;
            }());
            IntegerHelper.BoxedValues = BoxedValues;
            BoxedValues["__class"] = "javaemul.internal.IntegerHelper.BoxedValues";
            /**
             * Use nested class to avoid clinit on outer.
             * @class
             */
            var ReverseNibbles = (function () {
                function ReverseNibbles() {
                }
                ReverseNibbles.reverseNibbles_$LI$ = function () { if (ReverseNibbles.reverseNibbles == null)
                    ReverseNibbles.reverseNibbles = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]; return ReverseNibbles.reverseNibbles; };
                ;
                return ReverseNibbles;
            }());
            IntegerHelper.ReverseNibbles = ReverseNibbles;
            ReverseNibbles["__class"] = "javaemul.internal.IntegerHelper.ReverseNibbles";
        })(IntegerHelper = internal.IntegerHelper || (internal.IntegerHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));

javaemul.internal.CharacterHelper.BoxedValues.boxedValues_$LI$();
javaemul.internal.CharacterHelper.TYPE_$LI$();
javaemul.internal.IntegerHelper.ReverseNibbles.reverseNibbles_$LI$();
javaemul.internal.IntegerHelper.BoxedValues.boxedValues_$LI$();

(function (java) {
    var util;
    (function (util) {
        /**
         * Resizeable array implementation of the List interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/ArrayList.html">[Sun
         * docs]</a>
         *
         * <p>
         * This implementation differs from JDK 1.5 <code>ArrayList</code> in terms of
         * capacity management. There is no speed advantage to pre-allocating array
         * sizes in JavaScript, so this implementation does not include any of the
         * capacity and "growth increment" concepts in the standard ArrayList class.
         * Although <code>ArrayList(int)</code> accepts a value for the initial
         * capacity of the array, this constructor simply delegates to
         * <code>ArrayList()</code>. It is only present for compatibility with JDK
         * 1.5's API.
         * </p>
         *
         * @param <E> the element type.
         * @param {*} c
         * @class
         * @extends java.util.AbstractList
         */
        var ArrayList = (function (_super) {
            __extends(ArrayList, _super);
            function ArrayList(c) {
                var _this = this;
                if (((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || c === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.array = null;
                    _this.exposeElement = null;
                    _this.array = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.array = new Array(0);
                        javaemul.internal.ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object(_this.array, 0, c.toArray());
                    })();
                }
                else if (((typeof c === 'number') || c === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    var initialCapacity_1 = __args[0];
                    _this = _super.call(this) || this;
                    _this.array = null;
                    _this.exposeElement = null;
                    _this.array = null;
                    _this.exposeElement = null;
                    (function () {
                        javaemul.internal.InternalPreconditions.checkArgument(initialCapacity_1 >= 0, "Initial capacity must not be negative");
                        _this.array = new Array(0);
                    })();
                }
                else if (c === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.array = null;
                    _this.exposeElement = null;
                    _this.array = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.array = new Array(0);
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            ArrayList.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_7 = function (index137) {
                    var t = index137.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index137 = this.iterator(); index137.hasNext();) {
                    _loop_7(index137);
                }
            };
            ArrayList.prototype.add$java_lang_Object = function (o) {
                this.array[this.array.length] = o;
                return true;
            };
            ArrayList.prototype.add$int$java_lang_Object = function (index, o) {
                javaemul.internal.InternalPreconditions.checkPositionIndex(index, this.array.length);
                javaemul.internal.ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object(this.array, index, o);
            };
            /**
             *
             * @param {number} index
             * @param {*} o
             */
            ArrayList.prototype.add = function (index, o) {
                if (((typeof index === 'number') || index === null) && ((o != null) || o === null)) {
                    return this.add$int$java_lang_Object(index, o);
                }
                else if (((index != null) || index === null) && o === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.addAll$java_util_Collection = function (c) {
                var cArray = c.toArray();
                var len = cArray.length;
                if (len === 0) {
                    return false;
                }
                javaemul.internal.ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object(this.array, this.array.length, cArray);
                return true;
            };
            ArrayList.prototype.addAll$int$java_util_Collection = function (index, c) {
                javaemul.internal.InternalPreconditions.checkPositionIndex(index, this.array.length);
                var cArray = c.toArray();
                var len = cArray.length;
                if (len === 0) {
                    return false;
                }
                javaemul.internal.ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object(this.array, index, cArray);
                return true;
            };
            /**
             *
             * @param {number} index
             * @param {*} c
             * @return {boolean}
             */
            ArrayList.prototype.addAll = function (index, c) {
                if (((typeof index === 'number') || index === null) && ((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || c === null)) {
                    return this.addAll$int$java_util_Collection(index, c);
                }
                else if (((index != null && (index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0 || index.constructor != null && index.constructor["__interfaces"] != null && index.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             */
            ArrayList.prototype.clear = function () {
                this.array = new Array(0);
            };
            ArrayList.prototype.clone = function () {
                return (new ArrayList(this));
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            ArrayList.prototype.contains = function (o) {
                return (this.indexOf$java_lang_Object(o) !== -1);
            };
            ArrayList.prototype.ensureCapacity = function (ignored) {
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            ArrayList.prototype.get = function (index) {
                javaemul.internal.InternalPreconditions.checkElementIndex(index, this.array.length);
                return this.array[index];
            };
            ArrayList.prototype.indexOf$java_lang_Object = function (o) {
                return this.indexOf$java_lang_Object$int(o, 0);
            };
            /**
             *
             * @return {*}
             */
            ArrayList.prototype.iterator = function () {
                return new ArrayList.ArrayList$0(this);
            };
            /**
             *
             * @return {boolean}
             */
            ArrayList.prototype.isEmpty = function () {
                return this.array.length === 0;
            };
            ArrayList.prototype.lastIndexOf$java_lang_Object = function (o) {
                return this.lastIndexOf$java_lang_Object$int(o, this.size() - 1);
            };
            ArrayList.prototype.remove$int = function (index) {
                var previous = this.get(index);
                javaemul.internal.ArrayHelper.removeFrom(this.array, index, 1);
                return previous;
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            ArrayList.prototype.remove = function (index) {
                if (((typeof index === 'number') || index === null)) {
                    return this.remove$int(index);
                }
                else if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.remove$java_lang_Object = function (o) {
                var i = this.indexOf$java_lang_Object(o);
                if (i === -1) {
                    return false;
                }
                this.remove$int(i);
                return true;
            };
            /**
             *
             * @param {number} index
             * @param {*} o
             * @return {*}
             */
            ArrayList.prototype.set = function (index, o) {
                var previous = this.get(index);
                this.array[index] = o;
                return previous;
            };
            /**
             *
             * @return {number}
             */
            ArrayList.prototype.size = function () {
                return this.array.length;
            };
            ArrayList.prototype.toArray$ = function () {
                return javaemul.internal.ArrayHelper.clone(this.array, 0, this.array.length);
            };
            ArrayList.prototype.toArray$java_lang_Object_A = function (out) {
                var size = this.array.length;
                if (out.length < size) {
                    out = javaemul.internal.ArrayHelper.createFrom(out, size);
                }
                for (var i = 0; i < size; ++i) {
                    out[i] = (this.array[i]);
                }
                ;
                if (out.length > size) {
                    out[size] = null;
                }
                return out;
            };
            /**
             *
             * @param {Array} out
             * @return {Array}
             */
            ArrayList.prototype.toArray = function (out) {
                if (((out != null && out instanceof Array && (out.length == 0 || out[0] == null || (out[0] != null))) || out === null)) {
                    return this.toArray$java_lang_Object_A(out);
                }
                else if (out === undefined) {
                    return this.toArray$();
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.trimToSize = function () {
            };
            /**
             *
             * @param {number} fromIndex
             * @param {number} endIndex
             */
            ArrayList.prototype.removeRange = function (fromIndex, endIndex) {
                javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, endIndex, this.array.length);
                var count = endIndex - fromIndex;
                javaemul.internal.ArrayHelper.removeFrom(this.array, fromIndex, count);
            };
            ArrayList.prototype.indexOf$java_lang_Object$int = function (o, index) {
                for (; index < this.array.length; ++index) {
                    if (java.util.Objects.equals(o, this.array[index])) {
                        return index;
                    }
                }
                ;
                return -1;
            };
            /**
             * Used by Vector.
             * @param {*} o
             * @param {number} index
             * @return {number}
             */
            ArrayList.prototype.indexOf = function (o, index) {
                if (((o != null) || o === null) && ((typeof index === 'number') || index === null)) {
                    return this.indexOf$java_lang_Object$int(o, index);
                }
                else if (((o != null) || o === null) && index === undefined) {
                    return this.indexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.lastIndexOf$java_lang_Object$int = function (o, index) {
                for (; index >= 0; --index) {
                    if (java.util.Objects.equals(o, this.array[index])) {
                        return index;
                    }
                }
                ;
                return -1;
            };
            /**
             * Used by Vector.
             * @param {*} o
             * @param {number} index
             * @return {number}
             */
            ArrayList.prototype.lastIndexOf = function (o, index) {
                if (((o != null) || o === null) && ((typeof index === 'number') || index === null)) {
                    return this.lastIndexOf$java_lang_Object$int(o, index);
                }
                else if (((o != null) || o === null) && index === undefined) {
                    return this.lastIndexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.setSize = function (newSize) {
                javaemul.internal.ArrayHelper.setLength(this.array, newSize);
            };
            return ArrayList;
        }(java.util.AbstractList));
        util.ArrayList = ArrayList;
        ArrayList["__class"] = "java.util.ArrayList";
        ArrayList["__interfaces"] = ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"];
        (function (ArrayList) {
            var ArrayList$0 = (function () {
                function ArrayList$0(__parent) {
                    this.__parent = __parent;
                    this.i = 0;
                    this.last = -1;
                }
                ArrayList$0.prototype.forEachRemaining = function (consumer) {
                    var _this = this;
                    javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                    while ((this.hasNext())) {
                        (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                    }
                    ;
                };
                /**
                 *
                 * @return {boolean}
                 */
                ArrayList$0.prototype.hasNext = function () {
                    return this.i < this.__parent.array.length;
                };
                /**
                 *
                 * @return {*}
                 */
                ArrayList$0.prototype.next = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                    this.last = this.i++;
                    return this.__parent.array[this.last];
                };
                /**
                 *
                 */
                ArrayList$0.prototype.remove = function () {
                    javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                    this.__parent.remove$int(this.i = this.last);
                    this.last = -1;
                };
                return ArrayList$0;
            }());
            ArrayList.ArrayList$0 = ArrayList$0;
            ArrayList$0["__interfaces"] = ["java.util.Iterator"];
        })(ArrayList = util.ArrayList || (util.ArrayList = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        /**
         * Linked list implementation.
         * <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/LinkedList.html">
         * [Sun docs]</a>
         *
         * @param <E>
         * element type.
         * @param {*} c
         * @class
         * @extends java.util.AbstractSequentialList
         */
        var LinkedList = (function (_super) {
            __extends(LinkedList, _super);
            function LinkedList(c) {
                var _this = this;
                if (((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || c === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.exposeElement = null;
                    _this.header = null;
                    _this.tail = null;
                    _this.__size = 0;
                    _this.exposeElement = null;
                    _this.header = null;
                    _this.tail = null;
                    _this.__size = 0;
                    (function () {
                        _this.header = (new LinkedList.Node());
                        _this.tail = (new LinkedList.Node());
                        _this.reset();
                        _this.addAll$java_util_Collection(c);
                    })();
                }
                else if (c === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.exposeElement = null;
                    _this.header = null;
                    _this.tail = null;
                    _this.__size = 0;
                    _this.exposeElement = null;
                    _this.header = null;
                    _this.tail = null;
                    _this.__size = 0;
                    (function () {
                        _this.header = (new LinkedList.Node());
                        _this.tail = (new LinkedList.Node());
                        _this.reset();
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            LinkedList.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_11 = function (index164) {
                    var t = index164.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index164 = this.iterator(); index164.hasNext();) {
                    _loop_11(index164);
                }
            };
            /**
             *
             * @param {number} index
             * @param {*} element
             */
            LinkedList.prototype.add = function (index, element) {
                if (((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                    _super.prototype.add.call(this, index, element);
                }
                else if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            LinkedList.prototype.add$java_lang_Object = function (o) {
                this.addLast(o);
                return true;
            };
            /**
             *
             * @param {*} o
             */
            LinkedList.prototype.addFirst = function (o) {
                this.addNode(o, this.header, this.header.next);
            };
            /**
             *
             * @param {*} o
             */
            LinkedList.prototype.addLast = function (o) {
                this.addNode(o, this.tail.prev, this.tail);
            };
            /**
             *
             */
            LinkedList.prototype.clear = function () {
                this.reset();
            };
            LinkedList.prototype.reset = function () {
                this.header.next = this.tail;
                this.tail.prev = this.header;
                this.header.prev = this.tail.next = null;
                this.__size = 0;
            };
            LinkedList.prototype.clone = function () {
                return (new LinkedList(this));
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.descendingIterator = function () {
                return new LinkedList.DescendingIteratorImpl(this);
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.element = function () {
                return this.getFirst();
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.getFirst = function () {
                javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
                return this.header.next.value;
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.getLast = function () {
                javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
                return this.tail.prev.value;
            };
            LinkedList.prototype.listIterator$int = function (index) {
                javaemul.internal.InternalPreconditions.checkPositionIndex(index, this.__size);
                var node;
                if (index >= this.__size >> 1) {
                    node = this.tail;
                    for (var i = this.__size; i > index; --i) {
                        node = node.prev;
                    }
                    ;
                }
                else {
                    node = this.header.next;
                    for (var i = 0; i < index; ++i) {
                        node = node.next;
                    }
                    ;
                }
                return new LinkedList.ListIteratorImpl2(this, index, node);
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            LinkedList.prototype.listIterator = function (index) {
                if (((typeof index === 'number') || index === null)) {
                    return this.listIterator$int(index);
                }
                else if (index === undefined) {
                    return this.listIterator$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            LinkedList.prototype.offer = function (o) {
                return this.offerLast(o);
            };
            /**
             *
             * @param {*} e
             * @return {boolean}
             */
            LinkedList.prototype.offerFirst = function (e) {
                this.addFirst(e);
                return true;
            };
            /**
             *
             * @param {*} e
             * @return {boolean}
             */
            LinkedList.prototype.offerLast = function (e) {
                this.addLast(e);
                return true;
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.peek = function () {
                return this.peekFirst();
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.peekFirst = function () {
                return this.__size === 0 ? null : this.getFirst();
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.peekLast = function () {
                return this.__size === 0 ? null : this.getLast();
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.poll = function () {
                return this.pollFirst();
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.pollFirst = function () {
                return this.__size === 0 ? null : this.removeFirst();
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.pollLast = function () {
                return this.__size === 0 ? null : this.removeLast();
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.pop = function () {
                return this.removeFirst();
            };
            /**
             *
             * @param {*} e
             */
            LinkedList.prototype.push = function (e) {
                this.addFirst(e);
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            LinkedList.prototype.remove = function (index) {
                if (((typeof index === 'number') || index === null)) {
                    _super.prototype.remove.call(this, index);
                }
                else if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else if (index === undefined) {
                    return this.remove$();
                }
                else
                    throw new Error('invalid overload');
            };
            LinkedList.prototype.remove$ = function () {
                return this.removeFirst();
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.removeFirst = function () {
                javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
                return this.removeNode(this.header.next);
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            LinkedList.prototype.removeFirstOccurrence = function (o) {
                return this.remove$java_lang_Object(o);
            };
            /**
             *
             * @return {*}
             */
            LinkedList.prototype.removeLast = function () {
                javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
                return this.removeNode(this.tail.prev);
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            LinkedList.prototype.removeLastOccurrence = function (o) {
                for (var e = this.tail.prev; e !== this.header; e = e.prev) {
                    if (java.util.Objects.equals(e.value, o)) {
                        this.removeNode(e);
                        return true;
                    }
                }
                ;
                return false;
            };
            /**
             *
             * @return {number}
             */
            LinkedList.prototype.size = function () {
                return this.__size;
            };
            LinkedList.prototype.addNode = function (o, prev, next) {
                var node = (new LinkedList.Node());
                node.value = o;
                node.prev = prev;
                node.next = next;
                next.prev = prev.next = node;
                ++this.__size;
            };
            LinkedList.prototype.removeNode = function (node) {
                var oldValue = node.value;
                node.next.prev = node.prev;
                node.prev.next = node.next;
                node.next = node.prev = null;
                node.value = null;
                --this.__size;
                return oldValue;
            };
            return LinkedList;
        }(java.util.AbstractSequentialList));
        util.LinkedList = LinkedList;
        LinkedList["__class"] = "java.util.LinkedList";
        LinkedList["__interfaces"] = ["java.lang.Cloneable", "java.util.List", "java.util.Collection", "java.util.Queue", "java.util.Deque", "java.lang.Iterable", "java.io.Serializable"];
        (function (LinkedList) {
            var DescendingIteratorImpl = (function () {
                function DescendingIteratorImpl(__parent) {
                    this.__parent = __parent;
                    this.itr = new LinkedList.ListIteratorImpl2(this.__parent, this.__parent.__size, this.__parent.tail);
                }
                DescendingIteratorImpl.prototype.forEachRemaining = function (consumer) {
                    var _this = this;
                    javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                    while ((this.hasNext())) {
                        (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                    }
                    ;
                };
                /**
                 *
                 * @return {boolean}
                 */
                DescendingIteratorImpl.prototype.hasNext = function () {
                    return this.itr.hasPrevious();
                };
                /**
                 *
                 * @return {*}
                 */
                DescendingIteratorImpl.prototype.next = function () {
                    return this.itr.previous();
                };
                /**
                 *
                 */
                DescendingIteratorImpl.prototype.remove = function () {
                    this.itr.remove();
                };
                return DescendingIteratorImpl;
            }());
            LinkedList.DescendingIteratorImpl = DescendingIteratorImpl;
            DescendingIteratorImpl["__class"] = "java.util.LinkedList.DescendingIteratorImpl";
            DescendingIteratorImpl["__interfaces"] = ["java.util.Iterator"];
            /**
             * @param {number} index
             * from the beginning of the list (0 = first node)
             * @param {java.util.LinkedList.Node} startNode
             * the initial current node
             * @class
             */
            var ListIteratorImpl2 = (function () {
                function ListIteratorImpl2(__parent, index, startNode) {
                    this.__parent = __parent;
                    this.currentIndex = 0;
                    this.currentNode = null;
                    this.lastNode = null;
                    this.currentNode = startNode;
                    this.currentIndex = index;
                }
                ListIteratorImpl2.prototype.forEachRemaining = function (consumer) {
                    var _this = this;
                    javaemul.internal.InternalPreconditions.checkNotNull((consumer));
                    while ((this.hasNext())) {
                        (function (target) { return (typeof target === 'function') ? target(_this.next()) : target.accept(_this.next()); })(consumer);
                    }
                    ;
                };
                /**
                 *
                 * @param {*} o
                 */
                ListIteratorImpl2.prototype.add = function (o) {
                    this.__parent.addNode(o, this.currentNode.prev, this.currentNode);
                    ++this.currentIndex;
                    this.lastNode = null;
                };
                /**
                 *
                 * @return {boolean}
                 */
                ListIteratorImpl2.prototype.hasNext = function () {
                    return this.currentNode !== this.__parent.tail;
                };
                /**
                 *
                 * @return {boolean}
                 */
                ListIteratorImpl2.prototype.hasPrevious = function () {
                    return this.currentNode.prev !== this.__parent.header;
                };
                /**
                 *
                 * @return {*}
                 */
                ListIteratorImpl2.prototype.next = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                    this.lastNode = this.currentNode;
                    this.currentNode = this.currentNode.next;
                    ++this.currentIndex;
                    return this.lastNode.value;
                };
                /**
                 *
                 * @return {number}
                 */
                ListIteratorImpl2.prototype.nextIndex = function () {
                    return this.currentIndex;
                };
                /**
                 *
                 * @return {*}
                 */
                ListIteratorImpl2.prototype.previous = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasPrevious());
                    this.lastNode = this.currentNode = this.currentNode.prev;
                    --this.currentIndex;
                    return this.lastNode.value;
                };
                /**
                 *
                 * @return {number}
                 */
                ListIteratorImpl2.prototype.previousIndex = function () {
                    return this.currentIndex - 1;
                };
                /**
                 *
                 */
                ListIteratorImpl2.prototype.remove = function () {
                    javaemul.internal.InternalPreconditions.checkState(this.lastNode != null);
                    var nextNode = this.lastNode.next;
                    this.__parent.removeNode(this.lastNode);
                    if (this.currentNode === this.lastNode) {
                        this.currentNode = nextNode;
                    }
                    else {
                        --this.currentIndex;
                    }
                    this.lastNode = null;
                };
                /**
                 *
                 * @param {*} o
                 */
                ListIteratorImpl2.prototype.set = function (o) {
                    javaemul.internal.InternalPreconditions.checkState(this.lastNode != null);
                    this.lastNode.value = o;
                };
                return ListIteratorImpl2;
            }());
            LinkedList.ListIteratorImpl2 = ListIteratorImpl2;
            ListIteratorImpl2["__class"] = "java.util.LinkedList.ListIteratorImpl2";
            ListIteratorImpl2["__interfaces"] = ["java.util.Iterator", "java.util.ListIterator"];
            /**
             * Internal class representing a doubly-linked list node.
             *
             * @param <E>
             * element type
             * @class
             */
            var Node = (function () {
                function Node() {
                    this.next = null;
                    this.prev = null;
                    this.value = null;
                }
                return Node;
            }());
            LinkedList.Node = Node;
            Node["__class"] = "java.util.LinkedList.Node";
        })(LinkedList = util.LinkedList || (util.LinkedList = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * Capacity increment is ignored.
         * @param {number} initialCapacity
         * @param {number} ignoredCapacityIncrement
         * @class
         * @extends java.util.AbstractList
         */
        var Vector = (function (_super) {
            __extends(Vector, _super);
            function Vector(initialCapacity, ignoredCapacityIncrement) {
                var _this = this;
                if (((typeof initialCapacity === 'number') || initialCapacity === null) && ((typeof ignoredCapacityIncrement === 'number') || ignoredCapacityIncrement === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    {
                        var __args_13 = Array.prototype.slice.call(arguments);
                        _this = _super.call(this) || this;
                        _this.arrayList = null;
                        _this.exposeElement = null;
                        _this.arrayList = null;
                        _this.exposeElement = null;
                        (function () {
                            _this.arrayList = (new java.util.ArrayList(initialCapacity));
                        })();
                    }
                }
                else if (((initialCapacity != null && (initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.Collection") >= 0 || initialCapacity.constructor != null && initialCapacity.constructor["__interfaces"] != null && initialCapacity.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || initialCapacity === null) && ignoredCapacityIncrement === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    var c_1 = __args[0];
                    _this = _super.call(this) || this;
                    _this.arrayList = null;
                    _this.exposeElement = null;
                    _this.arrayList = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.arrayList = (new java.util.ArrayList());
                        _this.addAll$java_util_Collection(c_1);
                    })();
                }
                else if (((typeof initialCapacity === 'number') || initialCapacity === null) && ignoredCapacityIncrement === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.arrayList = null;
                    _this.exposeElement = null;
                    _this.arrayList = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.arrayList = (new java.util.ArrayList(initialCapacity));
                    })();
                }
                else if (initialCapacity === undefined && ignoredCapacityIncrement === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    _this.arrayList = null;
                    _this.exposeElement = null;
                    _this.arrayList = null;
                    _this.exposeElement = null;
                    (function () {
                        _this.arrayList = (new java.util.ArrayList());
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Vector.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull((action));
                var _loop_8 = function (index157) {
                    var t = index157.next();
                    {
                        (function (target) { return (typeof target === 'function') ? target(t) : target.accept(t); })(action);
                    }
                };
                for (var index157 = this.iterator(); index157.hasNext();) {
                    _loop_8(index157);
                }
            };
            Vector.prototype.add$java_lang_Object = function (o) {
                return this.arrayList.add(o);
            };
            Vector.prototype.add$int$java_lang_Object = function (index, o) {
                Vector.checkArrayElementIndex(index, this.size() + 1);
                this.arrayList.add(index, o);
            };
            /**
             *
             * @param {number} index
             * @param {*} o
             */
            Vector.prototype.add = function (index, o) {
                if (((typeof index === 'number') || index === null) && ((o != null) || o === null)) {
                    return this.add$int$java_lang_Object(index, o);
                }
                else if (((index != null) || index === null) && o === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.addAll$java_util_Collection = function (c) {
                return this.arrayList.addAll$java_util_Collection(c);
            };
            Vector.prototype.addAll$int$java_util_Collection = function (index, c) {
                return this.arrayList.addAll$int$java_util_Collection(index, c);
            };
            /**
             *
             * @param {number} index
             * @param {*} c
             * @return {boolean}
             */
            Vector.prototype.addAll = function (index, c) {
                if (((typeof index === 'number') || index === null) && ((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || c === null)) {
                    return this.addAll$int$java_util_Collection(index, c);
                }
                else if (((index != null && (index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0 || index.constructor != null && index.constructor["__interfaces"] != null && index.constructor["__interfaces"].indexOf("java.util.Collection") >= 0)) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.addElement = function (o) {
                this.add(o);
            };
            Vector.prototype.capacity = function () {
                return this.arrayList.size();
            };
            /**
             *
             */
            Vector.prototype.clear = function () {
                this.arrayList.clear();
            };
            Vector.prototype.clone = function () {
                return (new Vector(this));
            };
            /**
             *
             * @param {*} elem
             * @return {boolean}
             */
            Vector.prototype.contains = function (elem) {
                return this.arrayList.contains(elem);
            };
            /**
             *
             * @param {*} c
             * @return {boolean}
             */
            Vector.prototype.containsAll = function (c) {
                return this.arrayList.containsAll(c);
            };
            Vector.prototype.copyInto = function (objs) {
                var i = -1;
                var n = this.size();
                while ((++i < n)) {
                    objs[i] = this.get(i);
                }
                ;
            };
            Vector.prototype.elementAt = function (index) {
                return this.get(index);
            };
            Vector.prototype.elements = function () {
                return java.util.Collections.enumeration(this.arrayList);
            };
            Vector.prototype.ensureCapacity = function (capacity) {
                this.arrayList.ensureCapacity(capacity);
            };
            Vector.prototype.firstElement = function () {
                javaemul.internal.InternalPreconditions.checkElement(!this.isEmpty());
                return this.get(0);
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            Vector.prototype.get = function (index) {
                Vector.checkArrayElementIndex(index, this.size());
                return this.arrayList.get(index);
            };
            Vector.prototype.indexOf$java_lang_Object = function (elem) {
                return this.arrayList.indexOf$java_lang_Object(elem);
            };
            Vector.prototype.indexOf$java_lang_Object$int = function (elem, index) {
                Vector.checkArrayIndexOutOfBounds(index >= 0, index);
                return this.arrayList.indexOf$java_lang_Object$int(elem, index);
            };
            Vector.prototype.indexOf = function (elem, index) {
                if (((elem != null) || elem === null) && ((typeof index === 'number') || index === null)) {
                    return this.indexOf$java_lang_Object$int(elem, index);
                }
                else if (((elem != null) || elem === null) && index === undefined) {
                    return this.indexOf$java_lang_Object(elem);
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.insertElementAt = function (o, index) {
                this.add(index, o);
            };
            /**
             *
             * @return {boolean}
             */
            Vector.prototype.isEmpty = function () {
                return (this.arrayList.size() === 0);
            };
            /**
             *
             * @return {*}
             */
            Vector.prototype.iterator = function () {
                return this.arrayList.iterator();
            };
            Vector.prototype.lastElement = function () {
                javaemul.internal.InternalPreconditions.checkElement(!this.isEmpty());
                return this.get(this.size() - 1);
            };
            Vector.prototype.lastIndexOf$java_lang_Object = function (o) {
                return this.arrayList.lastIndexOf$java_lang_Object(o);
            };
            Vector.prototype.lastIndexOf$java_lang_Object$int = function (o, index) {
                Vector.checkArrayIndexOutOfBounds(index < this.size(), index);
                return this.arrayList.lastIndexOf$java_lang_Object$int(o, index);
            };
            Vector.prototype.lastIndexOf = function (o, index) {
                if (((o != null) || o === null) && ((typeof index === 'number') || index === null)) {
                    return this.lastIndexOf$java_lang_Object$int(o, index);
                }
                else if (((o != null) || o === null) && index === undefined) {
                    return this.lastIndexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.remove$int = function (index) {
                Vector.checkArrayElementIndex(index, this.size());
                return this.arrayList.remove$int(index);
            };
            /**
             *
             * @param {number} index
             * @return {*}
             */
            Vector.prototype.remove = function (index) {
                if (((typeof index === 'number') || index === null)) {
                    return this.remove$int(index);
                }
                else if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @param {*} c
             * @return {boolean}
             */
            Vector.prototype.removeAll = function (c) {
                return this.arrayList.removeAll(c);
            };
            Vector.prototype.removeAllElements = function () {
                this.clear();
            };
            Vector.prototype.removeElement = function (o) {
                return this.remove$java_lang_Object(o);
            };
            Vector.prototype.removeElementAt = function (index) {
                this.remove$int(index);
            };
            /**
             *
             * @param {number} index
             * @param {*} elem
             * @return {*}
             */
            Vector.prototype.set = function (index, elem) {
                Vector.checkArrayElementIndex(index, this.size());
                return this.arrayList.set(index, elem);
            };
            Vector.prototype.setElementAt = function (o, index) {
                this.set(index, o);
            };
            Vector.prototype.setSize = function (size) {
                Vector.checkArrayIndexOutOfBounds(size >= 0, size);
                this.arrayList.setSize(size);
            };
            /**
             *
             * @return {number}
             */
            Vector.prototype.size = function () {
                return this.arrayList.size();
            };
            /**
             *
             * @param {number} fromIndex
             * @param {number} toIndex
             * @return {*}
             */
            Vector.prototype.subList = function (fromIndex, toIndex) {
                return this.arrayList.subList(fromIndex, toIndex);
            };
            Vector.prototype.toArray$ = function () {
                return this.arrayList.toArray();
            };
            Vector.prototype.toArray$java_lang_Object_A = function (a) {
                return this.arrayList.toArray$java_lang_Object_A(a);
            };
            /**
             *
             * @param {Array} a
             * @return {Array}
             */
            Vector.prototype.toArray = function (a) {
                if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (a[0] != null))) || a === null)) {
                    return this.toArray$java_lang_Object_A(a);
                }
                else if (a === undefined) {
                    return this.toArray$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @return {string}
             */
            Vector.prototype.toString = function () {
                return this.arrayList.toString();
            };
            Vector.prototype.trimToSize = function () {
                this.arrayList.trimToSize();
            };
            /**
             *
             * @param {number} fromIndex
             * @param {number} endIndex
             */
            Vector.prototype.removeRange = function (fromIndex, endIndex) {
                this.arrayList.removeRange(fromIndex, endIndex);
            };
            /*private*/ Vector.checkArrayElementIndex = function (index, size) {
                if (index < 0 || index >= size) {
                    throw new java.lang.ArrayIndexOutOfBoundsException();
                }
            };
            /*private*/ Vector.checkArrayIndexOutOfBounds = function (expression, index) {
                if (!expression) {
                    throw new java.lang.ArrayIndexOutOfBoundsException(/* valueOf */ new String(index).toString());
                }
            };
            return Vector;
        }(java.util.AbstractList));
        util.Vector = Vector;
        Vector["__class"] = "java.util.Vector";
        Vector["__interfaces"] = ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));

(function (java) {
    var util;
    (function (util) {
        /**
         * Maintains a last-in, first-out collection of objects. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Stack.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         * @class
         * @extends java.util.Vector
         */
        var Stack = (function (_super) {
            __extends(Stack, _super);
            function Stack() {
                return _super.call(this) || this;
            }
            /**
             *
             * @return {*}
             */
            Stack.prototype.clone = function () {
                var s = (new Stack());
                s.addAll$java_util_Collection(this);
                return s;
            };
            Stack.prototype.empty = function () {
                return this.isEmpty();
            };
            Stack.prototype.peek = function () {
                var sz = this.size();
                if (sz > 0) {
                    return this.get(sz - 1);
                }
                else {
                    throw new java.util.EmptyStackException();
                }
            };
            Stack.prototype.pop = function () {
                var sz = this.size();
                if (sz > 0) {
                    return this.remove$int(sz - 1);
                }
                else {
                    throw new java.util.EmptyStackException();
                }
            };
            Stack.prototype.push = function (o) {
                this.add(o);
                return o;
            };
            Stack.prototype.search = function (o) {
                var pos = this.lastIndexOf$java_lang_Object(o);
                if (pos >= 0) {
                    return this.size() - pos;
                }
                return -1;
            };
            return Stack;
        }(java.util.Vector));
        util.Stack = Stack;
        Stack["__class"] = "java.util.Stack";
        Stack["__interfaces"] = ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));


(function (java) {
    var lang;
    (function (lang) {
        /**
         * A base class to share implementation between {@link StringBuffer} and {@link StringBuilder}.
         * <p>
         * Most methods will give expected performance results. Exception is {@link #setCharAt(int, char)},
         * which is O(n), and thus should not be used many times on the same <code>StringBuffer</code>.
         * @param {string} string
         * @class
         */
        var AbstractStringBuilder = (function () {
            function AbstractStringBuilder(string) {
                this.string = null;
                this.string = string;
            }
            AbstractStringBuilder.prototype.length = function () {
                return this.string.length;
            };
            AbstractStringBuilder.prototype.setLength = function (newLength) {
                var oldLength = this.length();
                if (newLength < oldLength) {
                    this.string = this.string.substring(0, newLength);
                }
                else if (newLength > oldLength) {
                    this.string += new String(new Array(newLength - oldLength)).toString();
                }
            };
            AbstractStringBuilder.prototype.capacity = function () {
                return javaemul.internal.IntegerHelper.MAX_VALUE;
            };
            AbstractStringBuilder.prototype.ensureCapacity = function (ignoredCapacity) {
            };
            AbstractStringBuilder.prototype.trimToSize = function () {
            };
            AbstractStringBuilder.prototype.charAt = function (index) {
                return this.string.charAt(index);
            };
            AbstractStringBuilder.prototype.getChars = function (srcStart, srcEnd, dst, dstStart) {
                javaemul.internal.InternalPreconditions.checkStringBounds(srcStart, srcEnd, this.length());
                javaemul.internal.InternalPreconditions.checkStringBounds(dstStart, dstStart + (srcEnd - srcStart), dst.length);
                while ((srcStart < srcEnd)) {
                    dst[dstStart++] = this.string.charAt(srcStart++);
                }
                ;
            };
            /**
             * Warning! This method is <b>much</b> slower than the JRE implementation. If you need to do
             * character level manipulation, you are strongly advised to use a char[] directly.
             * @param {number} index
             * @param {string} x
             */
            AbstractStringBuilder.prototype.setCharAt = function (index, x) {
                this.replace0(index, index + 1, /* valueOf */ new String(x).toString());
            };
            AbstractStringBuilder.prototype.subSequence = function (start, end) {
                return this.string.substring(start, end);
            };
            AbstractStringBuilder.prototype.substring$int = function (begin) {
                return this.string.substring(begin);
            };
            AbstractStringBuilder.prototype.substring$int$int = function (begin, end) {
                return this.string.substring(begin, end);
            };
            AbstractStringBuilder.prototype.substring = function (begin, end) {
                if (((typeof begin === 'number') || begin === null) && ((typeof end === 'number') || end === null)) {
                    return this.substring$int$int(begin, end);
                }
                else if (((typeof begin === 'number') || begin === null) && end === undefined) {
                    return this.substring$int(begin);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractStringBuilder.prototype.indexOf$java_lang_String = function (x) {
                return this.string.indexOf(x);
            };
            AbstractStringBuilder.prototype.indexOf$java_lang_String$int = function (x, start) {
                return this.string.indexOf(x, start);
            };
            AbstractStringBuilder.prototype.indexOf = function (x, start) {
                if (((typeof x === 'string') || x === null) && ((typeof start === 'number') || start === null)) {
                    return this.indexOf$java_lang_String$int(x, start);
                }
                else if (((typeof x === 'string') || x === null) && start === undefined) {
                    return this.indexOf$java_lang_String(x);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractStringBuilder.prototype.lastIndexOf$java_lang_String = function (s) {
                return this.string.lastIndexOf(s);
            };
            AbstractStringBuilder.prototype.lastIndexOf$java_lang_String$int = function (s, start) {
                return this.string.lastIndexOf(s, start);
            };
            AbstractStringBuilder.prototype.lastIndexOf = function (s, start) {
                if (((typeof s === 'string') || s === null) && ((typeof start === 'number') || start === null)) {
                    return this.lastIndexOf$java_lang_String$int(s, start);
                }
                else if (((typeof s === 'string') || s === null) && start === undefined) {
                    return this.lastIndexOf$java_lang_String(s);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @return {string}
             */
            AbstractStringBuilder.prototype.toString = function () {
                return this.string;
            };
            AbstractStringBuilder.prototype.append0 = function (x, start, end) {
                if (x == null) {
                    x = "null";
                }
                this.string += x.substring(start, end);
            };
            AbstractStringBuilder.prototype.appendCodePoint0 = function (x) {
                this.string += new String(/* toChars */ String.fromCharCode(x)).toString();
            };
            AbstractStringBuilder.prototype.replace0 = function (start, end, toInsert) {
                this.string = this.string.substring(0, start) + toInsert + this.string.substring(end);
            };
            AbstractStringBuilder.prototype.reverse0 = function () {
                var length = this.string.length;
                if (length <= 1) {
                    return;
                }
                var buffer = new Array(length);
                buffer[0] = this.string.charAt(length - 1);
                for (var i = 1; i < length; i++) {
                    buffer[i] = this.string.charAt(length - 1 - i);
                    if (javaemul.internal.CharacterHelper.isSurrogatePair(buffer[i], buffer[i - 1])) {
                        AbstractStringBuilder.swap(buffer, i - 1, i);
                    }
                }
                ;
                this.string = new String(buffer);
            };
            /*private*/ AbstractStringBuilder.swap = function (buffer, f, s) {
                var tmp = buffer[f];
                buffer[f] = buffer[s];
                buffer[s] = tmp;
            };
            return AbstractStringBuilder;
        }());
        lang.AbstractStringBuilder = AbstractStringBuilder;
        AbstractStringBuilder["__class"] = "java.lang.AbstractStringBuilder";
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));


(function (java) {
    var lang;
    (function (lang) {
        /**
         * A fast way to create strings using multiple appends.
         *
         * This class is an exact clone of {@link StringBuffer} except for the name. Any
         * change made to one should be mirrored in the other.
         * @param {*} s
         * @class
         * @extends java.lang.AbstractStringBuilder
         */
        var StringBuilder = (function (_super) {
            __extends(StringBuilder, _super);
            function StringBuilder(s) {
                var _this = this;
                if (((typeof s === 'string') || s === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, s) || this;
                }
                else if (((s != null && (s["__interfaces"] != null && s["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || s.constructor != null && s.constructor["__interfaces"] != null && s.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof s === "string")) || s === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, /* valueOf */ new String(s).toString()) || this;
                }
                else if (((typeof s === 'number') || s === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    var ignoredCapacity = __args[0];
                    _this = _super.call(this, "") || this;
                }
                else if (s === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, "") || this;
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            StringBuilder.prototype.append$boolean = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$char = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$char_A = function (x) {
                this.string += new String(x).toString();
                return this;
            };
            StringBuilder.prototype.append$char_A$int$int = function (x, start, len) {
                this.string += (function (str, index, len) { return str.join('').substring(index, index + len); })(x, start, len);
                return this;
            };
            StringBuilder.prototype.append = function (x, start, len) {
                if (((x != null && x instanceof Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                    return this.append$char_A$int$int(x, start, len);
                }
                else if (((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || x.constructor != null && x.constructor["__interfaces"] != null && x.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                    return this.append$java_lang_CharSequence$int$int(x, start, len);
                }
                else if (((x != null && x instanceof Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null) && start === undefined && len === undefined) {
                    return this.append$char_A(x);
                }
                else if (((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_String(x);
                }
                else if (((x != null && x instanceof java.lang.StringBuffer) || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_StringBuffer(x);
                }
                else if (((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || x.constructor != null && x.constructor["__interfaces"] != null && x.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_CharSequence(x);
                }
                else if (((typeof x === 'boolean') || x === null) && start === undefined && len === undefined) {
                    return this.append$boolean(x);
                }
                else if (((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                    return this.append$char(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$int(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$long(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$float(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$double(x);
                }
                else if (((x != null) || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_Object(x);
                }
                else
                    throw new Error('invalid overload');
            };
            StringBuilder.prototype.append$java_lang_CharSequence = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$java_lang_CharSequence$int$int = function (x, start, end) {
                this.append0(x, start, end);
                return this;
            };
            StringBuilder.prototype.append$double = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$float = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$int = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$long = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$java_lang_Object = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$java_lang_String = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$java_lang_StringBuffer = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.appendCodePoint = function (x) {
                this.appendCodePoint0(x);
                return this;
            };
            StringBuilder.prototype["delete"] = function (start, end) {
                this.replace0(start, end, "");
                return this;
            };
            StringBuilder.prototype.deleteCharAt = function (start) {
                this.replace0(start, start + 1, "");
                return this;
            };
            StringBuilder.prototype.insert$int$boolean = function (index, x) {
                return this.insert$int$java_lang_CharSequence(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$char = function (index, x) {
                this.replace0(index, index, /* valueOf */ new String(x).toString());
                return this;
            };
            StringBuilder.prototype.insert$int$char_A = function (index, x) {
                return this.insert$int$java_lang_CharSequence(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$char_A$int$int = function (index, x, offset, len) {
                return this.insert$int$java_lang_CharSequence(index, /* valueOf */ (function (str, index, len) { return str.join('').substring(index, index + len); })(x, offset, len));
            };
            StringBuilder.prototype.insert = function (index, x, offset, len) {
                if (((typeof index === 'number') || index === null) && ((x != null && x instanceof Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return this.insert$int$char_A$int$int(index, x, offset, len);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || x.constructor != null && x.constructor["__interfaces"] != null && x.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return this.insert$int$java_lang_CharSequence$int$int(index, x, offset, len);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null && x instanceof Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$char_A(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$java_lang_String(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || x.constructor != null && x.constructor["__interfaces"] != null && x.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$java_lang_CharSequence(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'boolean') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$boolean(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$char(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$int(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$long(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$float(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$double(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null) || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$java_lang_Object(index, x);
                }
                else
                    throw new Error('invalid overload');
            };
            StringBuilder.prototype.insert$int$java_lang_CharSequence = function (index, chars) {
                return this.insert$int$java_lang_CharSequence(index, chars.toString());
            };
            StringBuilder.prototype.insert$int$java_lang_CharSequence$int$int = function (index, chars, start, end) {
                return this.insert$int$java_lang_CharSequence(index, /* subSequence */ chars.substring(start, end).toString());
            };
            StringBuilder.prototype.insert$int$double = function (index, x) {
                return this.insert$int$java_lang_CharSequence(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$float = function (index, x) {
                return this.insert$int$java_lang_CharSequence(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$int = function (index, x) {
                return this.insert$int$java_lang_CharSequence(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$long = function (index, x) {
                return this.insert$int$java_lang_CharSequence(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$java_lang_Object = function (index, x) {
                return this.insert$int$java_lang_CharSequence(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$java_lang_String = function (index, x) {
                this.replace0(index, index, x);
                return this;
            };
            StringBuilder.prototype.replace = function (start, end, toInsert) {
                this.replace0(start, end, toInsert);
                return this;
            };
            StringBuilder.prototype.reverse = function () {
                this.reverse0();
                return this;
            };
            return StringBuilder;
        }(java.lang.AbstractStringBuilder));
        lang.StringBuilder = StringBuilder;
        StringBuilder["__class"] = "java.lang.StringBuilder";
        StringBuilder["__interfaces"] = ["java.lang.CharSequence", "java.lang.Appendable"];
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));


javaemul.internal.InternalPreconditions.BOUND_CHECK_$LI$();
javaemul.internal.InternalPreconditions.API_CHECK_$LI$();
javaemul.internal.InternalPreconditions.TYPE_CHECK_$LI$();
javaemul.internal.InternalPreconditions.CHECKED_MODE_$LI$();
java.util.ConcurrentModificationDetector.API_CHECK_$LI$();
javaemul.internal.IntegerHelper.ReverseNibbles.reverseNibbles_$LI$();
javaemul.internal.IntegerHelper.BoxedValues.boxedValues_$LI$();
javaemul.internal.NumberHelper.__ParseLong.maxValueForRadix_$LI$();
javaemul.internal.NumberHelper.__ParseLong.maxLengthForRadix_$LI$();
javaemul.internal.NumberHelper.__ParseLong.maxDigitsRadixPower_$LI$();
javaemul.internal.NumberHelper.__ParseLong.maxDigitsForRadix_$LI$();
javaemul.internal.NumberHelper.__ParseLong.__static_initialize();
javaemul.internal.CharacterHelper.BoxedValues.boxedValues_$LI$();
javaemul.internal.CharacterHelper.TYPE_$LI$();
java.util.InternalJsMapFactory.jsMapCtor_$LI$();

module.exports = {java, javaemul}
