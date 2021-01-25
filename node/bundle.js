const {java, javaemul} = require('./j4ts.js');
/* Generated from Java with JSweet 2.3.7-SNAPSHOT - http://www.jsweet.org */
var myCandy;
(function (myCandy) {
    /**
     * Tibetan EWTS from/to DTS or ALA-LC romanization conversion methods
     *
     * @author Buddhist Digital Resource Center (BDRC)
     * @version 1.4.0
     * @class
     */
    var TransConverter = /** @class */ (function () {
        function TransConverter() {
        }
        TransConverter.__static_initialize = function () { if (!TransConverter.__static_initialized) {
            TransConverter.__static_initialized = true;
            TransConverter.__static_initializer_0();
        } };
        TransConverter.baseDts_$LI$ = function () { TransConverter.__static_initialize(); return TransConverter.baseDts; };
        ;
        TransConverter.baseAlalc_$LI$ = function () { TransConverter.__static_initialize(); return TransConverter.baseAlalc; };
        ;
        TransConverter.replAlalcToEwts_$LI$ = function () { TransConverter.__static_initialize(); return TransConverter.replAlalcToEwts; };
        ;
        TransConverter.replDtsToEwts_$LI$ = function () { TransConverter.__static_initialize(); return TransConverter.replDtsToEwts; };
        ;
        TransConverter.baseEwts_$LI$ = function () { TransConverter.__static_initialize(); return TransConverter.baseEwts; };
        ;
        TransConverter.replEwtsToAlalc_$LI$ = function () { TransConverter.__static_initialize(); return TransConverter.replEwtsToAlalc; };
        ;
        TransConverter.replMapAlalcToEwts_$LI$ = function () { TransConverter.__static_initialize(); if (TransConverter.replMapAlalcToEwts == null)
            TransConverter.replMapAlalcToEwts = (new java.util.TreeMap()); return TransConverter.replMapAlalcToEwts; };
        ;
        TransConverter.replMapDtsToEwts_$LI$ = function () { TransConverter.__static_initialize(); if (TransConverter.replMapDtsToEwts == null)
            TransConverter.replMapDtsToEwts = (new java.util.TreeMap()); return TransConverter.replMapDtsToEwts; };
        ;
        TransConverter.replMapEwtsToAlalc_$LI$ = function () { TransConverter.__static_initialize(); if (TransConverter.replMapEwtsToAlalc == null)
            TransConverter.replMapEwtsToAlalc = (new java.util.TreeMap()); return TransConverter.replMapEwtsToAlalc; };
        ;
        TransConverter.__static_initializer_0 = function () {
            TransConverter.init();
        };
        TransConverter.addMapping = function (target, ewts, targetType, toAlalc) {
            if (targetType === TransConverter.DTS || targetType === TransConverter.BOTH) {
                TransConverter.replMapDtsToEwts_$LI$().put(target, ewts);
            }
            if (targetType === TransConverter.ALALC || targetType === TransConverter.BOTH) {
                TransConverter.replMapAlalcToEwts_$LI$().put(target, ewts);
            }
            if (toAlalc === TransConverter.ALWAYS_ALALC || toAlalc === TransConverter.NFD) {
                TransConverter.replMapEwtsToAlalc_$LI$().put(ewts, target);
            }
        };
        TransConverter.init = function () {
            TransConverter.replMapDtsToEwts_$LI$().put("-", " ");
            TransConverter.replMapAlalcToEwts_$LI$().put("-", " ");
            TransConverter.addMapping("\u015b", "sh", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("s\u0301", "sh", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u1e63", "Sh", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("s\u0323", "Sh", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u017a", "zh", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("z\u0301", "zh", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u00f1", "ny", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("n\u0303", "ny", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u1e45", "ng", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("n\u0307", "ng", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u0101", "A", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("a\u0304", "A", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("\u012b", "I", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("i\u0304", "I", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("\u016b", "U", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("u\u0304", "U", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("\u1e43", "M", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("m\u0323", "M", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("\u1e41", "~M", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("m\u0307", "~M", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("m\u0310", "~M", TransConverter.BOTH, TransConverter.ALWAYS_ALALC);
            TransConverter.addMapping("m\u0901", "~M", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("m\u0301", "~M`", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u1e5b", "r-i", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("r\u0323", "r-i", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("r\u0325", "r-i", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("\u1e5d", "r-I", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("\u1e5b\u0304", "r-I", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("r\u0323\u0304", "r-I", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("r\u0304\u0323", "r-I", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("r\u0325\u0304", "r-I", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("r\u0304\u0325", "r-I", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u1e37", "l-i", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("l\u0323", "l-i", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("l\u0325", "l-i", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("\u1e39", "l-i", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("\u1e37\u0304", "l-i", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("l\u0323\u0304", "l-i", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("l\u0304\u0323", "l-i", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("l\u0325\u0304", "l-i", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("l\u0304\u0325", "l-i", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u1e6d", "T", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("t\u0323", "T", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("\u1e0d", "D", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("d\u0323", "D", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("\u1e47", "N", TransConverter.BOTH, TransConverter.NFC);
            TransConverter.addMapping("n\u0323", "N", TransConverter.BOTH, TransConverter.NFD);
            TransConverter.addMapping("`", "&", TransConverter.BOTH, TransConverter.ALWAYS_ALALC);
            TransConverter.addMapping("g\u02b9y", "g.y", TransConverter.BOTH, TransConverter.ALWAYS_ALALC);
            TransConverter.addMapping("\u02b9", "+", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u2019", "\'", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u2018", "\'", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u02bc", "\'", TransConverter.BOTH, TransConverter.ALWAYS_ALALC);
            TransConverter.addMapping("\u02be", "\'", TransConverter.BOTH, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("\u1e25", "H", TransConverter.ALALC, TransConverter.NFC);
            TransConverter.addMapping("h\u0323", "H", TransConverter.ALALC, TransConverter.NFD);
            TransConverter.addMapping("\u1e25", "\'", TransConverter.DTS, TransConverter.NEVER_ALALC);
            TransConverter.addMapping("h\u0323", "\'", TransConverter.DTS, TransConverter.NEVER_ALALC);
            TransConverter.replMapDtsToEwts_$LI$().put("\u0161", "sh");
            TransConverter.replMapDtsToEwts_$LI$().put("s\u030c", "sh");
            TransConverter.replMapDtsToEwts_$LI$().put("\u017e", "zh");
            TransConverter.replMapDtsToEwts_$LI$().put("z\u030c", "zh");
            TransConverter.baseDts = TransConverter.replMapDtsToEwts.keySet().toArray([]);
            TransConverter.replDtsToEwts = TransConverter.replMapDtsToEwts.values().toArray([]);
            TransConverter.baseAlalc = TransConverter.replMapAlalcToEwts.keySet().toArray([]);
            TransConverter.replAlalcToEwts = TransConverter.replMapAlalcToEwts.values().toArray([]);
            TransConverter.replMapEwtsToAlalc_$LI$().put("<<", "\"");
            TransConverter.replMapEwtsToAlalc_$LI$().put(">>", "\"");
            TransConverter.replMapEwtsToAlalc_$LI$().put("_", " ");
            TransConverter.replMapEwtsToAlalc_$LI$().put("n+y", "n\u02b9y");
            TransConverter.replMapEwtsToAlalc_$LI$().put("t+s", "t\u02b9s");
            TransConverter.replMapEwtsToAlalc_$LI$().put("s+h", "s\u02b9h");
            TransConverter.replMapEwtsToAlalc_$LI$().put("n+g", "n\u02b9g");
            TransConverter.baseEwts = TransConverter.replMapEwtsToAlalc.keySet().toArray([]);
            TransConverter.replEwtsToAlalc = TransConverter.replMapEwtsToAlalc.values().toArray([]);
        };
        /**
         * Converts a string from DTS to EWTS
         *
         * @param {string} dtsString
         * the DTS encoded string
         * @return {string} EWTS string
         */
        TransConverter.dtsToEwts = function (dtsString) {
            dtsString = dtsString.toLowerCase();
            return myCandy.StringUtils.replaceEach(dtsString, TransConverter.baseDts_$LI$(), TransConverter.replDtsToEwts_$LI$());
        };
        /**
         * Converts a string from ALA-LC to EWTS
         *
         * @param {string} alalcStr
         * the ALA-LC encoded string
         * @return {string} EWTS string
         */
        TransConverter.alalcToEwts = function (alalcStr) {
            alalcStr = alalcStr.toLowerCase();
            return myCandy.StringUtils.replaceEach(alalcStr, TransConverter.baseAlalc_$LI$(), TransConverter.replAlalcToEwts_$LI$());
        };
        /**
         * Converts a string from EWTS to ALA-LC (NFKD, lower case)
         *
         * @param {string} ewtsStr
         * the EWTS encoded string
         * @param {boolean} sloppy
         * if common EWTS should be fixed before conversion
         * @return {string} ALA-LC encoded string
         */
        TransConverter.ewtsToAlalc = function (ewtsStr, sloppy) {
            if (sloppy) {
                ewtsStr = myCandy.EwtsConverter.normalizeSloppyWylie(ewtsStr);
            }
            ewtsStr = myCandy.StringUtils.replaceEach(ewtsStr, TransConverter.baseEwts_$LI$(), TransConverter.replEwtsToAlalc_$LI$());
            ewtsStr = /* replaceAll */ ewtsStr.replace(new RegExp("([a-zA-Z])\\.([a-zA-Z])", 'g'), "$1\u02b9$2");
            ewtsStr = /* replaceAll */ ewtsStr.replace(new RegExp("[^a-zA-Z0-9 \"\u02b9\u02bc`\u0325\u0304\u0303\u0323\u0307\u0301\u0310()\\-]", 'g'), "");
            ewtsStr = myCandy.StringUtils.strip(ewtsStr, " ");
            ewtsStr = ewtsStr.toLowerCase();
            return ewtsStr;
        };
        TransConverter.__static_initialized = false;
        TransConverter.DTS = 0;
        TransConverter.ALALC = 1;
        TransConverter.BOTH = 2;
        TransConverter.NFD = 0;
        TransConverter.NFC = 1;
        TransConverter.ALWAYS_ALALC = 2;
        TransConverter.NEVER_ALALC = 3;
        return TransConverter;
    }());
    myCandy.TransConverter = TransConverter;
    TransConverter["__class"] = "myCandy.TransConverter";
})(myCandy || (myCandy = {}));
(function (myCandy) {
    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        StringUtils.replaceEach = function (str, base, repl) {
            return str;
        };
        StringUtils.strip = function (str1, str2) {
            return str1;
        };
        return StringUtils;
    }());
    myCandy.StringUtils = StringUtils;
    StringUtils["__class"] = "myCandy.StringUtils";
})(myCandy || (myCandy = {}));
(function (myCandy) {
    /**
     * Default constructor, sets the following defaults:
     *
     * @param {boolean} check
     * generate warnings for illegal consonant sequences
     * @param {boolean} check_strict
     * stricter checking, examine the whole stack
     * @param {boolean} print_warnings
     * print generated warnings to stdout
     * @param {boolean} fix_spacing
     * remove spaces after newlines, collapse multiple tseks into one,
     * etc.
     * @param {myCandy.EwtsConverter.Mode} mode
     * one of WYLIE, EWTS, ALALC, DTS and ACIP
     * @class
     * @author Roger Espel Llima
     */
    var EwtsConverter = /** @class */ (function () {
        function EwtsConverter(check, check_strict, print_warnings, fix_spacing, mode) {
            var _this = this;
            if (((typeof check === 'boolean') || check === null) && ((typeof check_strict === 'boolean') || check_strict === null) && ((typeof print_warnings === 'boolean') || print_warnings === null) && ((typeof fix_spacing === 'boolean') || fix_spacing === null) && ((typeof mode === 'number') || mode === null)) {
                var __args = arguments;
                if (this.check === undefined)
                    this.check = false;
                if (this.check_strict === undefined)
                    this.check_strict = false;
                if (this.print_warnings === undefined)
                    this.print_warnings = false;
                if (this.fix_spacing === undefined)
                    this.fix_spacing = false;
                this.mode = EwtsConverter.Mode.EWTS;
                if (this.check === undefined)
                    this.check = false;
                if (this.check_strict === undefined)
                    this.check_strict = false;
                if (this.print_warnings === undefined)
                    this.print_warnings = false;
                if (this.fix_spacing === undefined)
                    this.fix_spacing = false;
                this.mode = EwtsConverter.Mode.EWTS;
                (function () {
                    _this.initWylie(check, check_strict, print_warnings, fix_spacing, mode);
                })();
            }
            else if (((typeof check === 'boolean') || check === null) && ((typeof check_strict === 'boolean') || check_strict === null) && ((typeof print_warnings === 'boolean') || print_warnings === null) && ((typeof fix_spacing === 'boolean') || fix_spacing === null) && mode === undefined) {
                var __args = arguments;
                if (this.check === undefined)
                    this.check = false;
                if (this.check_strict === undefined)
                    this.check_strict = false;
                if (this.print_warnings === undefined)
                    this.print_warnings = false;
                if (this.fix_spacing === undefined)
                    this.fix_spacing = false;
                this.mode = EwtsConverter.Mode.EWTS;
                if (this.check === undefined)
                    this.check = false;
                if (this.check_strict === undefined)
                    this.check_strict = false;
                if (this.print_warnings === undefined)
                    this.print_warnings = false;
                if (this.fix_spacing === undefined)
                    this.fix_spacing = false;
                this.mode = EwtsConverter.Mode.EWTS;
                (function () {
                    _this.initWylie(check, check_strict, print_warnings, fix_spacing, EwtsConverter.Mode.EWTS);
                })();
            }
            else if (check === undefined && check_strict === undefined && print_warnings === undefined && fix_spacing === undefined && mode === undefined) {
                var __args = arguments;
                if (this.check === undefined)
                    this.check = false;
                if (this.check_strict === undefined)
                    this.check_strict = false;
                if (this.print_warnings === undefined)
                    this.print_warnings = false;
                if (this.fix_spacing === undefined)
                    this.fix_spacing = false;
                this.mode = EwtsConverter.Mode.EWTS;
                if (this.check === undefined)
                    this.check = false;
                if (this.check_strict === undefined)
                    this.check_strict = false;
                if (this.print_warnings === undefined)
                    this.print_warnings = false;
                if (this.fix_spacing === undefined)
                    this.fix_spacing = false;
                this.mode = EwtsConverter.Mode.EWTS;
                (function () {
                    _this.initWylie(true, true, false, true, EwtsConverter.Mode.EWTS);
                })();
            }
            else
                throw new Error('invalid overload');
        }
        EwtsConverter.__static_initialize = function () { if (!EwtsConverter.__static_initialized) {
            EwtsConverter.__static_initialized = true;
            EwtsConverter.__static_initializer_0();
        } };
        EwtsConverter.m_consonant_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_consonant; };
        ;
        EwtsConverter.m_subjoined_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_subjoined; };
        ;
        EwtsConverter.m_vowel_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_vowel; };
        ;
        EwtsConverter.m_final_uni_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_final_uni; };
        ;
        EwtsConverter.m_final_class_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_final_class; };
        ;
        EwtsConverter.m_other_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_other; };
        ;
        EwtsConverter.m_ambiguous_wylie_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_ambiguous_wylie; };
        ;
        EwtsConverter.m_tib_vowel_long_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tib_vowel_long; };
        ;
        EwtsConverter.m_tib_caret_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tib_caret; };
        ;
        EwtsConverter.m_tib_top_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tib_top; };
        ;
        EwtsConverter.m_tib_subjoined_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tib_subjoined; };
        ;
        EwtsConverter.m_tib_vowel_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tib_vowel; };
        ;
        EwtsConverter.m_tib_final_wylie_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tib_final_wylie; };
        ;
        EwtsConverter.m_tib_final_class_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tib_final_class; };
        ;
        EwtsConverter.m_tib_other_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tib_other; };
        ;
        EwtsConverter.m_ambiguous_key_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_ambiguous_key; };
        ;
        EwtsConverter.m_tokens_start_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tokens_start; };
        ;
        EwtsConverter.m_special_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_special; };
        ;
        EwtsConverter.m_suffixes_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_suffixes; };
        ;
        EwtsConverter.m_tib_stacks_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tib_stacks; };
        ;
        EwtsConverter.m_tokens_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_tokens; };
        ;
        EwtsConverter.m_affixedsuff2_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_affixedsuff2; };
        ;
        EwtsConverter.m_superscripts_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_superscripts; };
        ;
        EwtsConverter.m_subscripts_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_subscripts; };
        ;
        EwtsConverter.m_prefixes_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_prefixes; };
        ;
        EwtsConverter.m_suff2_$LI$ = function () { EwtsConverter.__static_initialize(); return EwtsConverter.m_suff2; };
        ;
        EwtsConverter.base_$LI$ = function () { EwtsConverter.__static_initialize(); if (EwtsConverter.base == null)
            EwtsConverter.base = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(47); return EwtsConverter.base; };
        ;
        EwtsConverter.repl_$LI$ = function () { EwtsConverter.__static_initialize(); if (EwtsConverter.repl == null)
            EwtsConverter.repl = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(47); return EwtsConverter.repl; };
        ;
        EwtsConverter.initHashes = function () {
            var tmpSet;
            EwtsConverter.m_consonant = (new java.util.HashMap());
            EwtsConverter.m_consonant_$LI$().put("k", "\u0f40");
            EwtsConverter.m_consonant_$LI$().put("kh", "\u0f41");
            EwtsConverter.m_consonant_$LI$().put("g", "\u0f42");
            EwtsConverter.m_consonant_$LI$().put("gh", "\u0f42\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("g+h", "\u0f42\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("ng", "\u0f44");
            EwtsConverter.m_consonant_$LI$().put("c", "\u0f45");
            EwtsConverter.m_consonant_$LI$().put("ch", "\u0f46");
            EwtsConverter.m_consonant_$LI$().put("j", "\u0f47");
            EwtsConverter.m_consonant_$LI$().put("ny", "\u0f49");
            EwtsConverter.m_consonant_$LI$().put("T", "\u0f4a");
            EwtsConverter.m_consonant_$LI$().put("-t", "\u0f4a");
            EwtsConverter.m_consonant_$LI$().put("Th", "\u0f4b");
            EwtsConverter.m_consonant_$LI$().put("-th", "\u0f4b");
            EwtsConverter.m_consonant_$LI$().put("D", "\u0f4c");
            EwtsConverter.m_consonant_$LI$().put("-d", "\u0f4c");
            EwtsConverter.m_consonant_$LI$().put("Dh", "\u0f4c\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("D+h", "\u0f4c\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("-dh", "\u0f4c\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("-d+h", "\u0f4c\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("N", "\u0f4e");
            EwtsConverter.m_consonant_$LI$().put("-n", "\u0f4e");
            EwtsConverter.m_consonant_$LI$().put("t", "\u0f4f");
            EwtsConverter.m_consonant_$LI$().put("th", "\u0f50");
            EwtsConverter.m_consonant_$LI$().put("d", "\u0f51");
            EwtsConverter.m_consonant_$LI$().put("dh", "\u0f51\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("d+h", "\u0f51\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("n", "\u0f53");
            EwtsConverter.m_consonant_$LI$().put("p", "\u0f54");
            EwtsConverter.m_consonant_$LI$().put("ph", "\u0f55");
            EwtsConverter.m_consonant_$LI$().put("b", "\u0f56");
            EwtsConverter.m_consonant_$LI$().put("bh", "\u0f56\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("b+h", "\u0f56\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("m", "\u0f58");
            EwtsConverter.m_consonant_$LI$().put("ts", "\u0f59");
            EwtsConverter.m_consonant_$LI$().put("tsh", "\u0f5a");
            EwtsConverter.m_consonant_$LI$().put("dz", "\u0f5b");
            EwtsConverter.m_consonant_$LI$().put("dzh", "\u0f5b\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("dz+h", "\u0f5b\u0fb7");
            EwtsConverter.m_consonant_$LI$().put("w", "\u0f5d");
            EwtsConverter.m_consonant_$LI$().put("zh", "\u0f5e");
            EwtsConverter.m_consonant_$LI$().put("z", "\u0f5f");
            EwtsConverter.m_consonant_$LI$().put("\'", "\u0f60");
            EwtsConverter.m_consonant_$LI$().put("y", "\u0f61");
            EwtsConverter.m_consonant_$LI$().put("r", "\u0f62");
            EwtsConverter.m_consonant_$LI$().put("l", "\u0f63");
            EwtsConverter.m_consonant_$LI$().put("sh", "\u0f64");
            EwtsConverter.m_consonant_$LI$().put("Sh", "\u0f65");
            EwtsConverter.m_consonant_$LI$().put("-sh", "\u0f65");
            EwtsConverter.m_consonant_$LI$().put("s", "\u0f66");
            EwtsConverter.m_consonant_$LI$().put("h", "\u0f67");
            EwtsConverter.m_consonant_$LI$().put("W", "\u0f5d");
            EwtsConverter.m_consonant_$LI$().put("Y", "\u0f61");
            EwtsConverter.m_consonant_$LI$().put("R", "\u0f6a");
            EwtsConverter.m_consonant_$LI$().put("f", "\u0f55\u0f39");
            EwtsConverter.m_consonant_$LI$().put("v", "\u0f56\u0f39");
            EwtsConverter.m_subjoined = (new java.util.HashMap());
            EwtsConverter.m_subjoined_$LI$().put("k", "\u0f90");
            EwtsConverter.m_subjoined_$LI$().put("kh", "\u0f91");
            EwtsConverter.m_subjoined_$LI$().put("g", "\u0f92");
            EwtsConverter.m_subjoined_$LI$().put("gh", "\u0f92\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("g+h", "\u0f92\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("ng", "\u0f94");
            EwtsConverter.m_subjoined_$LI$().put("c", "\u0f95");
            EwtsConverter.m_subjoined_$LI$().put("ch", "\u0f96");
            EwtsConverter.m_subjoined_$LI$().put("j", "\u0f97");
            EwtsConverter.m_subjoined_$LI$().put("ny", "\u0f99");
            EwtsConverter.m_subjoined_$LI$().put("T", "\u0f9a");
            EwtsConverter.m_subjoined_$LI$().put("-t", "\u0f9a");
            EwtsConverter.m_subjoined_$LI$().put("Th", "\u0f9b");
            EwtsConverter.m_subjoined_$LI$().put("-th", "\u0f9b");
            EwtsConverter.m_subjoined_$LI$().put("D", "\u0f9c");
            EwtsConverter.m_subjoined_$LI$().put("-d", "\u0f9c");
            EwtsConverter.m_subjoined_$LI$().put("Dh", "\u0f9c\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("D+h", "\u0f9c\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("-dh", "\u0f9c\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("-d+h", "\u0f9c\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("N", "\u0f9e");
            EwtsConverter.m_subjoined_$LI$().put("-n", "\u0f9e");
            EwtsConverter.m_subjoined_$LI$().put("t", "\u0f9f");
            EwtsConverter.m_subjoined_$LI$().put("th", "\u0fa0");
            EwtsConverter.m_subjoined_$LI$().put("d", "\u0fa1");
            EwtsConverter.m_subjoined_$LI$().put("dh", "\u0fa1\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("d+h", "\u0fa1\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("n", "\u0fa3");
            EwtsConverter.m_subjoined_$LI$().put("p", "\u0fa4");
            EwtsConverter.m_subjoined_$LI$().put("ph", "\u0fa5");
            EwtsConverter.m_subjoined_$LI$().put("b", "\u0fa6");
            EwtsConverter.m_subjoined_$LI$().put("bh", "\u0fa6\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("b+h", "\u0fa6\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("m", "\u0fa8");
            EwtsConverter.m_subjoined_$LI$().put("ts", "\u0fa9");
            EwtsConverter.m_subjoined_$LI$().put("tsh", "\u0faa");
            EwtsConverter.m_subjoined_$LI$().put("dz", "\u0fab");
            EwtsConverter.m_subjoined_$LI$().put("dzh", "\u0fab\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("dz+h", "\u0fab\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("w", "\u0fad");
            EwtsConverter.m_subjoined_$LI$().put("zh", "\u0fae");
            EwtsConverter.m_subjoined_$LI$().put("z", "\u0faf");
            EwtsConverter.m_subjoined_$LI$().put("\'", "\u0fb0");
            EwtsConverter.m_subjoined_$LI$().put("y", "\u0fb1");
            EwtsConverter.m_subjoined_$LI$().put("r", "\u0fb2");
            EwtsConverter.m_subjoined_$LI$().put("l", "\u0fb3");
            EwtsConverter.m_subjoined_$LI$().put("sh", "\u0fb4");
            EwtsConverter.m_subjoined_$LI$().put("Sh", "\u0fb5");
            EwtsConverter.m_subjoined_$LI$().put("-sh", "\u0fb5");
            EwtsConverter.m_subjoined_$LI$().put("s", "\u0fb6");
            EwtsConverter.m_subjoined_$LI$().put("h", "\u0fb7");
            EwtsConverter.m_subjoined_$LI$().put("a", "\u0fb8");
            EwtsConverter.m_subjoined_$LI$().put("W", "\u0fba");
            EwtsConverter.m_subjoined_$LI$().put("Y", "\u0fbb");
            EwtsConverter.m_subjoined_$LI$().put("R", "\u0fbc");
            EwtsConverter.m_vowel = (new java.util.HashMap());
            EwtsConverter.m_vowel_$LI$().put("a", "\u0f68");
            EwtsConverter.m_vowel_$LI$().put("A", "\u0f71");
            EwtsConverter.m_vowel_$LI$().put("i", "\u0f72");
            EwtsConverter.m_vowel_$LI$().put("I", "\u0f71\u0f72");
            EwtsConverter.m_vowel_$LI$().put("u", "\u0f74");
            EwtsConverter.m_vowel_$LI$().put("U", "\u0f71\u0f74");
            EwtsConverter.m_vowel_$LI$().put("e", "\u0f7a");
            EwtsConverter.m_vowel_$LI$().put("ai", "\u0f7b");
            EwtsConverter.m_vowel_$LI$().put("o", "\u0f7c");
            EwtsConverter.m_vowel_$LI$().put("au", "\u0f7d");
            EwtsConverter.m_vowel_$LI$().put("-i", "\u0f80");
            EwtsConverter.m_vowel_$LI$().put("-I", "\u0f71\u0f80");
            EwtsConverter.m_final_uni = (new java.util.HashMap());
            EwtsConverter.m_final_uni_$LI$().put("M", "\u0f7e");
            EwtsConverter.m_final_uni_$LI$().put("~M`", "\u0f82");
            EwtsConverter.m_final_uni_$LI$().put("~M", "\u0f83");
            EwtsConverter.m_final_uni_$LI$().put("X", "\u0f37");
            EwtsConverter.m_final_uni_$LI$().put("~X", "\u0f35");
            EwtsConverter.m_final_uni_$LI$().put("H", "\u0f7f");
            EwtsConverter.m_final_uni_$LI$().put("?", "\u0f84");
            EwtsConverter.m_final_uni_$LI$().put("^", "\u0f39");
            EwtsConverter.m_final_uni_$LI$().put("&", "\u0f85");
            EwtsConverter.m_final_class = (new java.util.HashMap());
            EwtsConverter.m_final_class_$LI$().put("M", "M");
            EwtsConverter.m_final_class_$LI$().put("~M`", "M");
            EwtsConverter.m_final_class_$LI$().put("~M", "M");
            EwtsConverter.m_final_class_$LI$().put("X", "X");
            EwtsConverter.m_final_class_$LI$().put("~X", "X");
            EwtsConverter.m_final_class_$LI$().put("H", "H");
            EwtsConverter.m_final_class_$LI$().put("?", "?");
            EwtsConverter.m_final_class_$LI$().put("^", "^");
            EwtsConverter.m_final_class_$LI$().put("&", "&");
            EwtsConverter.m_other = (new java.util.HashMap());
            EwtsConverter.m_other_$LI$().put("0", "\u0f20");
            EwtsConverter.m_other_$LI$().put("1", "\u0f21");
            EwtsConverter.m_other_$LI$().put("2", "\u0f22");
            EwtsConverter.m_other_$LI$().put("3", "\u0f23");
            EwtsConverter.m_other_$LI$().put("4", "\u0f24");
            EwtsConverter.m_other_$LI$().put("5", "\u0f25");
            EwtsConverter.m_other_$LI$().put("6", "\u0f26");
            EwtsConverter.m_other_$LI$().put("7", "\u0f27");
            EwtsConverter.m_other_$LI$().put("8", "\u0f28");
            EwtsConverter.m_other_$LI$().put("9", "\u0f29");
            EwtsConverter.m_other_$LI$().put(" ", "\u0f0b");
            EwtsConverter.m_other_$LI$().put("*", "\u0f0c");
            EwtsConverter.m_other_$LI$().put("/", "\u0f0d");
            EwtsConverter.m_other_$LI$().put("//", "\u0f0e");
            EwtsConverter.m_other_$LI$().put(";", "\u0f0f");
            EwtsConverter.m_other_$LI$().put("|", "\u0f11");
            EwtsConverter.m_other_$LI$().put("!", "\u0f08");
            EwtsConverter.m_other_$LI$().put(":", "\u0f14");
            EwtsConverter.m_other_$LI$().put("_", " ");
            EwtsConverter.m_other_$LI$().put("=", "\u0f34");
            EwtsConverter.m_other_$LI$().put("<", "\u0f3a");
            EwtsConverter.m_other_$LI$().put(">", "\u0f3b");
            EwtsConverter.m_other_$LI$().put("(", "\u0f3c");
            EwtsConverter.m_other_$LI$().put(")", "\u0f3d");
            EwtsConverter.m_other_$LI$().put("@", "\u0f04");
            EwtsConverter.m_other_$LI$().put("#", "\u0f05");
            EwtsConverter.m_other_$LI$().put("$", "\u0f06");
            EwtsConverter.m_other_$LI$().put("%", "\u0f07");
            EwtsConverter.m_special = (new java.util.HashSet());
            EwtsConverter.m_special_$LI$().add(".");
            EwtsConverter.m_special_$LI$().add("+");
            EwtsConverter.m_special_$LI$().add("-");
            EwtsConverter.m_special_$LI$().add("~");
            EwtsConverter.m_special_$LI$().add("^");
            EwtsConverter.m_special_$LI$().add("?");
            EwtsConverter.m_special_$LI$().add("`");
            EwtsConverter.m_special_$LI$().add("]");
            EwtsConverter.m_superscripts = (new java.util.HashMap());
            tmpSet = (new java.util.HashSet());
            tmpSet.add("k");
            tmpSet.add("g");
            tmpSet.add("ng");
            tmpSet.add("j");
            tmpSet.add("ny");
            tmpSet.add("t");
            tmpSet.add("d");
            tmpSet.add("n");
            tmpSet.add("b");
            tmpSet.add("m");
            tmpSet.add("ts");
            tmpSet.add("dz");
            tmpSet.add("k+y");
            tmpSet.add("g+y");
            tmpSet.add("m+y");
            tmpSet.add("b+w");
            tmpSet.add("ts+w");
            tmpSet.add("g+w");
            EwtsConverter.m_superscripts_$LI$().put("r", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("k");
            tmpSet.add("g");
            tmpSet.add("ng");
            tmpSet.add("c");
            tmpSet.add("j");
            tmpSet.add("t");
            tmpSet.add("d");
            tmpSet.add("p");
            tmpSet.add("b");
            tmpSet.add("h");
            EwtsConverter.m_superscripts_$LI$().put("l", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("k");
            tmpSet.add("g");
            tmpSet.add("ng");
            tmpSet.add("ny");
            tmpSet.add("t");
            tmpSet.add("d");
            tmpSet.add("n");
            tmpSet.add("p");
            tmpSet.add("b");
            tmpSet.add("m");
            tmpSet.add("ts");
            tmpSet.add("k+y");
            tmpSet.add("g+y");
            tmpSet.add("p+y");
            tmpSet.add("b+y");
            tmpSet.add("m+y");
            tmpSet.add("k+r");
            tmpSet.add("g+r");
            tmpSet.add("p+r");
            tmpSet.add("b+r");
            tmpSet.add("m+r");
            tmpSet.add("n+r");
            EwtsConverter.m_superscripts_$LI$().put("s", tmpSet);
            EwtsConverter.m_subscripts = (new java.util.HashMap());
            tmpSet = (new java.util.HashSet());
            tmpSet.add("k");
            tmpSet.add("kh");
            tmpSet.add("g");
            tmpSet.add("p");
            tmpSet.add("ph");
            tmpSet.add("b");
            tmpSet.add("m");
            tmpSet.add("r+k");
            tmpSet.add("r+g");
            tmpSet.add("r+m");
            tmpSet.add("s+k");
            tmpSet.add("s+g");
            tmpSet.add("s+p");
            tmpSet.add("s+b");
            tmpSet.add("s+m");
            EwtsConverter.m_subscripts_$LI$().put("y", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("k");
            tmpSet.add("kh");
            tmpSet.add("g");
            tmpSet.add("t");
            tmpSet.add("th");
            tmpSet.add("d");
            tmpSet.add("n");
            tmpSet.add("p");
            tmpSet.add("ph");
            tmpSet.add("b");
            tmpSet.add("m");
            tmpSet.add("sh");
            tmpSet.add("s");
            tmpSet.add("h");
            tmpSet.add("dz");
            tmpSet.add("s+k");
            tmpSet.add("s+g");
            tmpSet.add("s+p");
            tmpSet.add("s+b");
            tmpSet.add("s+m");
            tmpSet.add("s+n");
            EwtsConverter.m_subscripts_$LI$().put("r", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("k");
            tmpSet.add("g");
            tmpSet.add("b");
            tmpSet.add("r");
            tmpSet.add("s");
            tmpSet.add("z");
            EwtsConverter.m_subscripts_$LI$().put("l", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("k");
            tmpSet.add("kh");
            tmpSet.add("g");
            tmpSet.add("c");
            tmpSet.add("ny");
            tmpSet.add("t");
            tmpSet.add("d");
            tmpSet.add("ts");
            tmpSet.add("tsh");
            tmpSet.add("zh");
            tmpSet.add("z");
            tmpSet.add("r");
            tmpSet.add("l");
            tmpSet.add("sh");
            tmpSet.add("s");
            tmpSet.add("h");
            tmpSet.add("g+r");
            tmpSet.add("d+r");
            tmpSet.add("ph+y");
            tmpSet.add("r+g");
            tmpSet.add("r+ts");
            EwtsConverter.m_subscripts_$LI$().put("w", tmpSet);
            EwtsConverter.m_prefixes = (new java.util.HashMap());
            tmpSet = (new java.util.HashSet());
            tmpSet.add("c");
            tmpSet.add("ny");
            tmpSet.add("t");
            tmpSet.add("d");
            tmpSet.add("n");
            tmpSet.add("ts");
            tmpSet.add("zh");
            tmpSet.add("z");
            tmpSet.add("y");
            tmpSet.add("sh");
            tmpSet.add("s");
            EwtsConverter.m_prefixes_$LI$().put("g", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("k");
            tmpSet.add("g");
            tmpSet.add("ng");
            tmpSet.add("p");
            tmpSet.add("b");
            tmpSet.add("m");
            tmpSet.add("k+y");
            tmpSet.add("g+y");
            tmpSet.add("p+y");
            tmpSet.add("b+y");
            tmpSet.add("m+y");
            tmpSet.add("k+r");
            tmpSet.add("g+r");
            tmpSet.add("p+r");
            tmpSet.add("b+r");
            EwtsConverter.m_prefixes_$LI$().put("d", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("k");
            tmpSet.add("g");
            tmpSet.add("c");
            tmpSet.add("t");
            tmpSet.add("d");
            tmpSet.add("ts");
            tmpSet.add("zh");
            tmpSet.add("z");
            tmpSet.add("sh");
            tmpSet.add("s");
            tmpSet.add("r");
            tmpSet.add("l");
            tmpSet.add("k+y");
            tmpSet.add("g+y");
            tmpSet.add("k+r");
            tmpSet.add("g+r");
            tmpSet.add("r+l");
            tmpSet.add("s+l");
            tmpSet.add("r+k");
            tmpSet.add("r+g");
            tmpSet.add("r+ng");
            tmpSet.add("r+j");
            tmpSet.add("r+ny");
            tmpSet.add("r+t");
            tmpSet.add("r+d");
            tmpSet.add("r+n");
            tmpSet.add("r+ts");
            tmpSet.add("r+dz");
            tmpSet.add("s+k");
            tmpSet.add("s+g");
            tmpSet.add("s+ng");
            tmpSet.add("s+ny");
            tmpSet.add("s+t");
            tmpSet.add("s+d");
            tmpSet.add("s+n");
            tmpSet.add("s+ts");
            tmpSet.add("r+k+y");
            tmpSet.add("r+g+y");
            tmpSet.add("s+k+y");
            tmpSet.add("s+g+y");
            tmpSet.add("s+k+r");
            tmpSet.add("s+g+r");
            tmpSet.add("l+d");
            tmpSet.add("l+t");
            tmpSet.add("k+l");
            tmpSet.add("s+r");
            tmpSet.add("z+l");
            tmpSet.add("s+w");
            EwtsConverter.m_prefixes_$LI$().put("b", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("kh");
            tmpSet.add("g");
            tmpSet.add("ng");
            tmpSet.add("ch");
            tmpSet.add("j");
            tmpSet.add("ny");
            tmpSet.add("th");
            tmpSet.add("d");
            tmpSet.add("n");
            tmpSet.add("tsh");
            tmpSet.add("dz");
            tmpSet.add("kh+y");
            tmpSet.add("g+y");
            tmpSet.add("kh+r");
            tmpSet.add("g+r");
            EwtsConverter.m_prefixes_$LI$().put("m", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("kh");
            tmpSet.add("g");
            tmpSet.add("ch");
            tmpSet.add("j");
            tmpSet.add("th");
            tmpSet.add("d");
            tmpSet.add("ph");
            tmpSet.add("b");
            tmpSet.add("tsh");
            tmpSet.add("dz");
            tmpSet.add("kh+y");
            tmpSet.add("g+y");
            tmpSet.add("ph+y");
            tmpSet.add("b+y");
            tmpSet.add("kh+r");
            tmpSet.add("g+r");
            tmpSet.add("d+r");
            tmpSet.add("ph+r");
            tmpSet.add("b+r");
            EwtsConverter.m_prefixes_$LI$().put("\'", tmpSet);
            EwtsConverter.m_suffixes = (new java.util.HashSet());
            EwtsConverter.m_suffixes_$LI$().add("\'");
            EwtsConverter.m_suffixes_$LI$().add("g");
            EwtsConverter.m_suffixes_$LI$().add("ng");
            EwtsConverter.m_suffixes_$LI$().add("d");
            EwtsConverter.m_suffixes_$LI$().add("n");
            EwtsConverter.m_suffixes_$LI$().add("b");
            EwtsConverter.m_suffixes_$LI$().add("m");
            EwtsConverter.m_suffixes_$LI$().add("r");
            EwtsConverter.m_suffixes_$LI$().add("l");
            EwtsConverter.m_suffixes_$LI$().add("s");
            EwtsConverter.m_suffixes_$LI$().add("N");
            EwtsConverter.m_suffixes_$LI$().add("T");
            EwtsConverter.m_suffixes_$LI$().add("-n");
            EwtsConverter.m_suffixes_$LI$().add("-t");
            EwtsConverter.m_suff2 = (new java.util.HashMap());
            tmpSet = (new java.util.HashSet());
            tmpSet.add("g");
            tmpSet.add("ng");
            tmpSet.add("b");
            tmpSet.add("m");
            EwtsConverter.m_suff2_$LI$().put("s", tmpSet);
            tmpSet = (new java.util.HashSet());
            tmpSet.add("n");
            tmpSet.add("r");
            tmpSet.add("l");
            EwtsConverter.m_suff2_$LI$().put("d", tmpSet);
            EwtsConverter.m_affixedsuff2 = (new java.util.HashSet());
            EwtsConverter.m_affixedsuff2_$LI$().add("ng");
            EwtsConverter.m_affixedsuff2_$LI$().add("m");
            EwtsConverter.m_ambiguous_key = (new java.util.HashMap());
            EwtsConverter.m_ambiguous_key_$LI$().put("dgs", 1);
            EwtsConverter.m_ambiguous_key_$LI$().put("dms", 1);
            EwtsConverter.m_ambiguous_key_$LI$().put("dngs", 1);
            EwtsConverter.m_ambiguous_key_$LI$().put("\'gs", 1);
            EwtsConverter.m_ambiguous_key_$LI$().put("\'bs", 1);
            EwtsConverter.m_ambiguous_key_$LI$().put("mngs", 0);
            EwtsConverter.m_ambiguous_key_$LI$().put("mgs", 0);
            EwtsConverter.m_ambiguous_key_$LI$().put("bgs", 0);
            EwtsConverter.m_ambiguous_key_$LI$().put("dbs", 1);
            EwtsConverter.m_ambiguous_wylie = (new java.util.HashMap());
            EwtsConverter.m_ambiguous_wylie_$LI$().put("dgs", "dgas");
            EwtsConverter.m_ambiguous_wylie_$LI$().put("dngs", "dngas");
            EwtsConverter.m_ambiguous_wylie_$LI$().put("dms", "dmas");
            EwtsConverter.m_ambiguous_wylie_$LI$().put("\'gs", "\'gas");
            EwtsConverter.m_ambiguous_wylie_$LI$().put("\'bs", "\'bas");
            EwtsConverter.m_ambiguous_wylie_$LI$().put("mngs", "mangs");
            EwtsConverter.m_ambiguous_wylie_$LI$().put("mgs", "mags");
            EwtsConverter.m_ambiguous_wylie_$LI$().put("bgs", "bags");
            EwtsConverter.m_ambiguous_wylie_$LI$().put("dbs", "dbas");
            EwtsConverter.m_tib_top = (new java.util.HashMap());
            EwtsConverter.m_tib_top_$LI$().put('\u0f40', "k");
            EwtsConverter.m_tib_top_$LI$().put('\u0f41', "kh");
            EwtsConverter.m_tib_top_$LI$().put('\u0f42', "g");
            EwtsConverter.m_tib_top_$LI$().put('\u0f43', "g+h");
            EwtsConverter.m_tib_top_$LI$().put('\u0f44', "ng");
            EwtsConverter.m_tib_top_$LI$().put('\u0f45', "c");
            EwtsConverter.m_tib_top_$LI$().put('\u0f46', "ch");
            EwtsConverter.m_tib_top_$LI$().put('\u0f47', "j");
            EwtsConverter.m_tib_top_$LI$().put('\u0f49', "ny");
            EwtsConverter.m_tib_top_$LI$().put('\u0f4a', "T");
            EwtsConverter.m_tib_top_$LI$().put('\u0f4b', "Th");
            EwtsConverter.m_tib_top_$LI$().put('\u0f4c', "D");
            EwtsConverter.m_tib_top_$LI$().put('\u0f4d', "D+h");
            EwtsConverter.m_tib_top_$LI$().put('\u0f4e', "N");
            EwtsConverter.m_tib_top_$LI$().put('\u0f4f', "t");
            EwtsConverter.m_tib_top_$LI$().put('\u0f50', "th");
            EwtsConverter.m_tib_top_$LI$().put('\u0f51', "d");
            EwtsConverter.m_tib_top_$LI$().put('\u0f52', "d+h");
            EwtsConverter.m_tib_top_$LI$().put('\u0f53', "n");
            EwtsConverter.m_tib_top_$LI$().put('\u0f54', "p");
            EwtsConverter.m_tib_top_$LI$().put('\u0f55', "ph");
            EwtsConverter.m_tib_top_$LI$().put('\u0f56', "b");
            EwtsConverter.m_tib_top_$LI$().put('\u0f57', "b+h");
            EwtsConverter.m_tib_top_$LI$().put('\u0f58', "m");
            EwtsConverter.m_tib_top_$LI$().put('\u0f59', "ts");
            EwtsConverter.m_tib_top_$LI$().put('\u0f5a', "tsh");
            EwtsConverter.m_tib_top_$LI$().put('\u0f5b', "dz");
            EwtsConverter.m_tib_top_$LI$().put('\u0f5c', "dz+h");
            EwtsConverter.m_tib_top_$LI$().put('\u0f5d', "w");
            EwtsConverter.m_tib_top_$LI$().put('\u0f5e', "zh");
            EwtsConverter.m_tib_top_$LI$().put('\u0f5f', "z");
            EwtsConverter.m_tib_top_$LI$().put('\u0f60', "\'");
            EwtsConverter.m_tib_top_$LI$().put('\u0f61', "y");
            EwtsConverter.m_tib_top_$LI$().put('\u0f62', "r");
            EwtsConverter.m_tib_top_$LI$().put('\u0f63', "l");
            EwtsConverter.m_tib_top_$LI$().put('\u0f64', "sh");
            EwtsConverter.m_tib_top_$LI$().put('\u0f65', "Sh");
            EwtsConverter.m_tib_top_$LI$().put('\u0f66', "s");
            EwtsConverter.m_tib_top_$LI$().put('\u0f67', "h");
            EwtsConverter.m_tib_top_$LI$().put('\u0f68', "a");
            EwtsConverter.m_tib_top_$LI$().put('\u0f69', "k+Sh");
            EwtsConverter.m_tib_top_$LI$().put('\u0f6a', "R");
            EwtsConverter.m_tib_subjoined = (new java.util.HashMap());
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f90', "k");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f91', "kh");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f92', "g");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f93', "g+h");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f94', "ng");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f95', "c");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f96', "ch");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f97', "j");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f99', "ny");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f9a', "T");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f9b', "Th");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f9c', "D");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f9d', "D+h");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f9e', "N");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0f9f', "t");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa0', "th");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa1', "d");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa2', "d+h");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa3', "n");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa4', "p");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa5', "ph");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa6', "b");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa7', "b+h");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa8', "m");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fa9', "ts");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0faa', "tsh");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fab', "dz");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fac', "dz+h");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fad', "w");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fae', "zh");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0faf', "z");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb0', "\'");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb1', "y");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb2', "r");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb3', "l");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb4', "sh");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb5', "Sh");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb6', "s");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb7', "h");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb8', "a");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fb9', "k+Sh");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fba', "W");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fbb', "Y");
            EwtsConverter.m_tib_subjoined_$LI$().put('\u0fbc', "R");
            EwtsConverter.m_tib_vowel = (new java.util.HashMap());
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f71', "A");
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f72', "i");
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f73', "I");
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f74', "u");
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f75', "U");
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f7a', "e");
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f7b', "ai");
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f7c', "o");
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f7d', "au");
            EwtsConverter.m_tib_vowel_$LI$().put('\u0f80', "-i");
            EwtsConverter.m_tib_vowel_long = (new java.util.HashMap());
            EwtsConverter.m_tib_vowel_long_$LI$().put("i", "I");
            EwtsConverter.m_tib_vowel_long_$LI$().put("u", "U");
            EwtsConverter.m_tib_vowel_long_$LI$().put("-i", "-I");
            EwtsConverter.m_tib_final_wylie = (new java.util.HashMap());
            EwtsConverter.m_tib_final_wylie_$LI$().put('\u0f7e', "M");
            EwtsConverter.m_tib_final_wylie_$LI$().put('\u0f82', "~M`");
            EwtsConverter.m_tib_final_wylie_$LI$().put('\u0f83', "~M");
            EwtsConverter.m_tib_final_wylie_$LI$().put('\u0f37', "X");
            EwtsConverter.m_tib_final_wylie_$LI$().put('\u0f35', "~X");
            EwtsConverter.m_tib_final_wylie_$LI$().put('\u0f39', "^");
            EwtsConverter.m_tib_final_wylie_$LI$().put('\u0f7f', "H");
            EwtsConverter.m_tib_final_wylie_$LI$().put('\u0f84', "?");
            EwtsConverter.m_tib_final_wylie_$LI$().put('\u0f85', "&");
            EwtsConverter.m_tib_final_class = (new java.util.HashMap());
            EwtsConverter.m_tib_final_class_$LI$().put('\u0f7e', "M");
            EwtsConverter.m_tib_final_class_$LI$().put('\u0f82', "M");
            EwtsConverter.m_tib_final_class_$LI$().put('\u0f83', "M");
            EwtsConverter.m_tib_final_class_$LI$().put('\u0f37', "X");
            EwtsConverter.m_tib_final_class_$LI$().put('\u0f35', "X");
            EwtsConverter.m_tib_final_class_$LI$().put('\u0f39', "^");
            EwtsConverter.m_tib_final_class_$LI$().put('\u0f7f', "H");
            EwtsConverter.m_tib_final_class_$LI$().put('\u0f84', "?");
            EwtsConverter.m_tib_final_class_$LI$().put('\u0f85', "&");
            EwtsConverter.m_tib_caret = (new java.util.HashMap());
            EwtsConverter.m_tib_caret_$LI$().put("ph", "f");
            EwtsConverter.m_tib_caret_$LI$().put("b", "v");
            EwtsConverter.m_tib_other = (new java.util.HashMap());
            EwtsConverter.m_tib_other_$LI$().put(' ', "_");
            EwtsConverter.m_tib_other_$LI$().put('\u0f04', "@");
            EwtsConverter.m_tib_other_$LI$().put('\u0f05', "#");
            EwtsConverter.m_tib_other_$LI$().put('\u0f06', "$");
            EwtsConverter.m_tib_other_$LI$().put('\u0f07', "%");
            EwtsConverter.m_tib_other_$LI$().put('\u0f08', "!");
            EwtsConverter.m_tib_other_$LI$().put('\u0f0b', " ");
            EwtsConverter.m_tib_other_$LI$().put('\u0f0c', "*");
            EwtsConverter.m_tib_other_$LI$().put('\u0f0d', "/");
            EwtsConverter.m_tib_other_$LI$().put('\u0f0e', "//");
            EwtsConverter.m_tib_other_$LI$().put('\u0f0f', ";");
            EwtsConverter.m_tib_other_$LI$().put('\u0f11', "|");
            EwtsConverter.m_tib_other_$LI$().put('\u0f14', ":");
            EwtsConverter.m_tib_other_$LI$().put('\u0f20', "0");
            EwtsConverter.m_tib_other_$LI$().put('\u0f21', "1");
            EwtsConverter.m_tib_other_$LI$().put('\u0f22', "2");
            EwtsConverter.m_tib_other_$LI$().put('\u0f23', "3");
            EwtsConverter.m_tib_other_$LI$().put('\u0f24', "4");
            EwtsConverter.m_tib_other_$LI$().put('\u0f25', "5");
            EwtsConverter.m_tib_other_$LI$().put('\u0f26', "6");
            EwtsConverter.m_tib_other_$LI$().put('\u0f27', "7");
            EwtsConverter.m_tib_other_$LI$().put('\u0f28', "8");
            EwtsConverter.m_tib_other_$LI$().put('\u0f29', "9");
            EwtsConverter.m_tib_other_$LI$().put('\u0f34', "=");
            EwtsConverter.m_tib_other_$LI$().put('\u0f3a', "<");
            EwtsConverter.m_tib_other_$LI$().put('\u0f3b', ">");
            EwtsConverter.m_tib_other_$LI$().put('\u0f3c', "(");
            EwtsConverter.m_tib_other_$LI$().put('\u0f3d', ")");
            EwtsConverter.m_tib_stacks = (new java.util.HashSet());
            EwtsConverter.m_tib_stacks_$LI$().add("b+l");
            EwtsConverter.m_tib_stacks_$LI$().add("b+r");
            EwtsConverter.m_tib_stacks_$LI$().add("b+y");
            EwtsConverter.m_tib_stacks_$LI$().add("c+w");
            EwtsConverter.m_tib_stacks_$LI$().add("d+r");
            EwtsConverter.m_tib_stacks_$LI$().add("d+r+w");
            EwtsConverter.m_tib_stacks_$LI$().add("d+w");
            EwtsConverter.m_tib_stacks_$LI$().add("dz+r");
            EwtsConverter.m_tib_stacks_$LI$().add("g+l");
            EwtsConverter.m_tib_stacks_$LI$().add("g+r");
            EwtsConverter.m_tib_stacks_$LI$().add("g+r+w");
            EwtsConverter.m_tib_stacks_$LI$().add("g+w");
            EwtsConverter.m_tib_stacks_$LI$().add("g+y");
            EwtsConverter.m_tib_stacks_$LI$().add("h+r");
            EwtsConverter.m_tib_stacks_$LI$().add("h+w");
            EwtsConverter.m_tib_stacks_$LI$().add("k+l");
            EwtsConverter.m_tib_stacks_$LI$().add("k+r");
            EwtsConverter.m_tib_stacks_$LI$().add("k+w");
            EwtsConverter.m_tib_stacks_$LI$().add("k+y");
            EwtsConverter.m_tib_stacks_$LI$().add("kh+r");
            EwtsConverter.m_tib_stacks_$LI$().add("kh+w");
            EwtsConverter.m_tib_stacks_$LI$().add("kh+y");
            EwtsConverter.m_tib_stacks_$LI$().add("l+b");
            EwtsConverter.m_tib_stacks_$LI$().add("l+c");
            EwtsConverter.m_tib_stacks_$LI$().add("l+d");
            EwtsConverter.m_tib_stacks_$LI$().add("l+g");
            EwtsConverter.m_tib_stacks_$LI$().add("l+h");
            EwtsConverter.m_tib_stacks_$LI$().add("l+j");
            EwtsConverter.m_tib_stacks_$LI$().add("l+k");
            EwtsConverter.m_tib_stacks_$LI$().add("l+ng");
            EwtsConverter.m_tib_stacks_$LI$().add("l+p");
            EwtsConverter.m_tib_stacks_$LI$().add("l+t");
            EwtsConverter.m_tib_stacks_$LI$().add("l+w");
            EwtsConverter.m_tib_stacks_$LI$().add("m+r");
            EwtsConverter.m_tib_stacks_$LI$().add("m+y");
            EwtsConverter.m_tib_stacks_$LI$().add("n+r");
            EwtsConverter.m_tib_stacks_$LI$().add("ny+w");
            EwtsConverter.m_tib_stacks_$LI$().add("p+r");
            EwtsConverter.m_tib_stacks_$LI$().add("p+y");
            EwtsConverter.m_tib_stacks_$LI$().add("ph+r");
            EwtsConverter.m_tib_stacks_$LI$().add("ph+y");
            EwtsConverter.m_tib_stacks_$LI$().add("ph+y+w");
            EwtsConverter.m_tib_stacks_$LI$().add("r+b");
            EwtsConverter.m_tib_stacks_$LI$().add("r+d");
            EwtsConverter.m_tib_stacks_$LI$().add("r+dz");
            EwtsConverter.m_tib_stacks_$LI$().add("r+g");
            EwtsConverter.m_tib_stacks_$LI$().add("r+g+w");
            EwtsConverter.m_tib_stacks_$LI$().add("r+g+y");
            EwtsConverter.m_tib_stacks_$LI$().add("r+j");
            EwtsConverter.m_tib_stacks_$LI$().add("r+k");
            EwtsConverter.m_tib_stacks_$LI$().add("r+k+y");
            EwtsConverter.m_tib_stacks_$LI$().add("r+l");
            EwtsConverter.m_tib_stacks_$LI$().add("r+m");
            EwtsConverter.m_tib_stacks_$LI$().add("r+m+y");
            EwtsConverter.m_tib_stacks_$LI$().add("r+n");
            EwtsConverter.m_tib_stacks_$LI$().add("r+ng");
            EwtsConverter.m_tib_stacks_$LI$().add("r+ny");
            EwtsConverter.m_tib_stacks_$LI$().add("r+t");
            EwtsConverter.m_tib_stacks_$LI$().add("r+ts");
            EwtsConverter.m_tib_stacks_$LI$().add("r+ts+w");
            EwtsConverter.m_tib_stacks_$LI$().add("r+w");
            EwtsConverter.m_tib_stacks_$LI$().add("s+b");
            EwtsConverter.m_tib_stacks_$LI$().add("s+b+r");
            EwtsConverter.m_tib_stacks_$LI$().add("s+b+y");
            EwtsConverter.m_tib_stacks_$LI$().add("s+d");
            EwtsConverter.m_tib_stacks_$LI$().add("s+g");
            EwtsConverter.m_tib_stacks_$LI$().add("s+g+r");
            EwtsConverter.m_tib_stacks_$LI$().add("s+g+y");
            EwtsConverter.m_tib_stacks_$LI$().add("s+k");
            EwtsConverter.m_tib_stacks_$LI$().add("s+k+r");
            EwtsConverter.m_tib_stacks_$LI$().add("s+k+y");
            EwtsConverter.m_tib_stacks_$LI$().add("s+l");
            EwtsConverter.m_tib_stacks_$LI$().add("s+m");
            EwtsConverter.m_tib_stacks_$LI$().add("s+m+r");
            EwtsConverter.m_tib_stacks_$LI$().add("s+m+y");
            EwtsConverter.m_tib_stacks_$LI$().add("s+n");
            EwtsConverter.m_tib_stacks_$LI$().add("s+n+r");
            EwtsConverter.m_tib_stacks_$LI$().add("s+ng");
            EwtsConverter.m_tib_stacks_$LI$().add("s+ny");
            EwtsConverter.m_tib_stacks_$LI$().add("s+p");
            EwtsConverter.m_tib_stacks_$LI$().add("s+p+r");
            EwtsConverter.m_tib_stacks_$LI$().add("s+p+y");
            EwtsConverter.m_tib_stacks_$LI$().add("s+r");
            EwtsConverter.m_tib_stacks_$LI$().add("s+t");
            EwtsConverter.m_tib_stacks_$LI$().add("s+ts");
            EwtsConverter.m_tib_stacks_$LI$().add("s+w");
            EwtsConverter.m_tib_stacks_$LI$().add("sh+r");
            EwtsConverter.m_tib_stacks_$LI$().add("sh+w");
            EwtsConverter.m_tib_stacks_$LI$().add("t+r");
            EwtsConverter.m_tib_stacks_$LI$().add("t+w");
            EwtsConverter.m_tib_stacks_$LI$().add("th+r");
            EwtsConverter.m_tib_stacks_$LI$().add("ts+w");
            EwtsConverter.m_tib_stacks_$LI$().add("tsh+w");
            EwtsConverter.m_tib_stacks_$LI$().add("z+l");
            EwtsConverter.m_tib_stacks_$LI$().add("z+w");
            EwtsConverter.m_tib_stacks_$LI$().add("zh+w");
            EwtsConverter.m_tokens_start = (new java.util.HashMap());
            EwtsConverter.m_tokens_start_$LI$().put('S', 2);
            EwtsConverter.m_tokens_start_$LI$().put('/', 2);
            EwtsConverter.m_tokens_start_$LI$().put('d', 4);
            EwtsConverter.m_tokens_start_$LI$().put('g', 3);
            EwtsConverter.m_tokens_start_$LI$().put('b', 3);
            EwtsConverter.m_tokens_start_$LI$().put('D', 3);
            EwtsConverter.m_tokens_start_$LI$().put('z', 2);
            EwtsConverter.m_tokens_start_$LI$().put('~', 3);
            EwtsConverter.m_tokens_start_$LI$().put('-', 4);
            EwtsConverter.m_tokens_start_$LI$().put('T', 2);
            EwtsConverter.m_tokens_start_$LI$().put('a', 2);
            EwtsConverter.m_tokens_start_$LI$().put('k', 2);
            EwtsConverter.m_tokens_start_$LI$().put('t', 3);
            EwtsConverter.m_tokens_start_$LI$().put('s', 2);
            EwtsConverter.m_tokens_start_$LI$().put('c', 2);
            EwtsConverter.m_tokens_start_$LI$().put('n', 2);
            EwtsConverter.m_tokens_start_$LI$().put('p', 2);
            EwtsConverter.m_tokens_start_$LI$().put('\r', 2);
            EwtsConverter.m_tokens = (new java.util.HashSet());
            EwtsConverter.m_tokens_$LI$().add("-d+h");
            EwtsConverter.m_tokens_$LI$().add("dz+h");
            EwtsConverter.m_tokens_$LI$().add("-dh");
            EwtsConverter.m_tokens_$LI$().add("-sh");
            EwtsConverter.m_tokens_$LI$().add("-th");
            EwtsConverter.m_tokens_$LI$().add("D+h");
            EwtsConverter.m_tokens_$LI$().add("b+h");
            EwtsConverter.m_tokens_$LI$().add("d+h");
            EwtsConverter.m_tokens_$LI$().add("dzh");
            EwtsConverter.m_tokens_$LI$().add("g+h");
            EwtsConverter.m_tokens_$LI$().add("tsh");
            EwtsConverter.m_tokens_$LI$().add("~M`");
            EwtsConverter.m_tokens_$LI$().add("-I");
            EwtsConverter.m_tokens_$LI$().add("-d");
            EwtsConverter.m_tokens_$LI$().add("-i");
            EwtsConverter.m_tokens_$LI$().add("-n");
            EwtsConverter.m_tokens_$LI$().add("-t");
            EwtsConverter.m_tokens_$LI$().add("//");
            EwtsConverter.m_tokens_$LI$().add("Dh");
            EwtsConverter.m_tokens_$LI$().add("Sh");
            EwtsConverter.m_tokens_$LI$().add("Th");
            EwtsConverter.m_tokens_$LI$().add("ai");
            EwtsConverter.m_tokens_$LI$().add("au");
            EwtsConverter.m_tokens_$LI$().add("bh");
            EwtsConverter.m_tokens_$LI$().add("ch");
            EwtsConverter.m_tokens_$LI$().add("dh");
            EwtsConverter.m_tokens_$LI$().add("dz");
            EwtsConverter.m_tokens_$LI$().add("gh");
            EwtsConverter.m_tokens_$LI$().add("kh");
            EwtsConverter.m_tokens_$LI$().add("ng");
            EwtsConverter.m_tokens_$LI$().add("ny");
            EwtsConverter.m_tokens_$LI$().add("ph");
            EwtsConverter.m_tokens_$LI$().add("sh");
            EwtsConverter.m_tokens_$LI$().add("th");
            EwtsConverter.m_tokens_$LI$().add("ts");
            EwtsConverter.m_tokens_$LI$().add("zh");
            EwtsConverter.m_tokens_$LI$().add("~M");
            EwtsConverter.m_tokens_$LI$().add("~X");
            EwtsConverter.m_tokens_$LI$().add("\r\n");
        };
        EwtsConverter.initSloppyRepl = function () {
            var i = 0;
            EwtsConverter.base_$LI$()[i] = "\u02bc";
            EwtsConverter.repl_$LI$()[i] = "\'";
            i++;
            EwtsConverter.base_$LI$()[i] = "\u02b9";
            EwtsConverter.repl_$LI$()[i] = "\'";
            i++;
            EwtsConverter.base_$LI$()[i] = "\u2018";
            EwtsConverter.repl_$LI$()[i] = "\'";
            i++;
            EwtsConverter.base_$LI$()[i] = "\u2019";
            EwtsConverter.repl_$LI$()[i] = "\'";
            i++;
            EwtsConverter.base_$LI$()[i] = "\u02be";
            EwtsConverter.repl_$LI$()[i] = "\'";
            i++;
            EwtsConverter.base_$LI$()[i] = "x";
            EwtsConverter.repl_$LI$()[i] = "\\u0fbe";
            i++;
            EwtsConverter.base_$LI$()[i] = "X";
            EwtsConverter.repl_$LI$()[i] = "\\u0fbe";
            i++;
            EwtsConverter.base_$LI$()[i] = "...";
            EwtsConverter.repl_$LI$()[i] = "\\u0f0b\\u0f0b\\u0f0b";
            i++;
            EwtsConverter.base_$LI$()[i] = " (";
            EwtsConverter.repl_$LI$()[i] = "_(";
            i++;
            EwtsConverter.base_$LI$()[i] = ") ";
            EwtsConverter.repl_$LI$()[i] = ")_";
            i++;
            EwtsConverter.base_$LI$()[i] = "/ ";
            EwtsConverter.repl_$LI$()[i] = "/_";
            i++;
            EwtsConverter.base_$LI$()[i] = " 0";
            EwtsConverter.repl_$LI$()[i] = "_0";
            i++;
            EwtsConverter.base_$LI$()[i] = " 1";
            EwtsConverter.repl_$LI$()[i] = "_1";
            i++;
            EwtsConverter.base_$LI$()[i] = " 2";
            EwtsConverter.repl_$LI$()[i] = "_2";
            i++;
            EwtsConverter.base_$LI$()[i] = " 3";
            EwtsConverter.repl_$LI$()[i] = "_3";
            i++;
            EwtsConverter.base_$LI$()[i] = " 4";
            EwtsConverter.repl_$LI$()[i] = "_4";
            i++;
            EwtsConverter.base_$LI$()[i] = " 5";
            EwtsConverter.repl_$LI$()[i] = "_5";
            i++;
            EwtsConverter.base_$LI$()[i] = " 6";
            EwtsConverter.repl_$LI$()[i] = "_6";
            i++;
            EwtsConverter.base_$LI$()[i] = " 7";
            EwtsConverter.repl_$LI$()[i] = "_7";
            i++;
            EwtsConverter.base_$LI$()[i] = " 8";
            EwtsConverter.repl_$LI$()[i] = "_8";
            i++;
            EwtsConverter.base_$LI$()[i] = " 9";
            EwtsConverter.repl_$LI$()[i] = "_9";
            i++;
            EwtsConverter.base_$LI$()[i] = "_ ";
            EwtsConverter.repl_$LI$()[i] = "__";
            i++;
            EwtsConverter.base_$LI$()[i] = "G";
            EwtsConverter.repl_$LI$()[i] = "g";
            i++;
            EwtsConverter.base_$LI$()[i] = "K";
            EwtsConverter.repl_$LI$()[i] = "k";
            i++;
            EwtsConverter.base_$LI$()[i] = "C";
            EwtsConverter.repl_$LI$()[i] = "c";
            i++;
            EwtsConverter.base_$LI$()[i] = "B";
            EwtsConverter.repl_$LI$()[i] = "b";
            i++;
            EwtsConverter.base_$LI$()[i] = " b ";
            EwtsConverter.repl_$LI$()[i] = " ba ";
            i++;
            EwtsConverter.base_$LI$()[i] = "Ts";
            EwtsConverter.repl_$LI$()[i] = "ts";
            i++;
            EwtsConverter.base_$LI$()[i] = "Dz";
            EwtsConverter.repl_$LI$()[i] = "dz";
            i++;
            EwtsConverter.base_$LI$()[i] = "Ny";
            EwtsConverter.repl_$LI$()[i] = "ny";
            i++;
            EwtsConverter.base_$LI$()[i] = "Ng";
            EwtsConverter.repl_$LI$()[i] = "ng";
            i++;
            EwtsConverter.base_$LI$()[i] = " m ";
            EwtsConverter.repl_$LI$()[i] = " ma ";
            i++;
            EwtsConverter.base_$LI$()[i] = " m\'i ";
            EwtsConverter.repl_$LI$()[i] = " ma\'i ";
            i++;
            EwtsConverter.base_$LI$()[i] = " b\'i ";
            EwtsConverter.repl_$LI$()[i] = " ba\'i ";
            i++;
            EwtsConverter.base_$LI$()[i] = "P";
            EwtsConverter.repl_$LI$()[i] = "p";
            i++;
            EwtsConverter.base_$LI$()[i] = "L";
            EwtsConverter.repl_$LI$()[i] = "l";
            i++;
            EwtsConverter.base_$LI$()[i] = "Z";
            EwtsConverter.repl_$LI$()[i] = "z";
            i++;
            EwtsConverter.base_$LI$()[i] = "J";
            EwtsConverter.repl_$LI$()[i] = "j";
            i++;
            EwtsConverter.base_$LI$()[i] = "E";
            EwtsConverter.repl_$LI$()[i] = "e";
            i++;
            EwtsConverter.base_$LI$()[i] = "O";
            EwtsConverter.repl_$LI$()[i] = "o";
            i++;
            EwtsConverter.base_$LI$()[i] = "\uff08";
            EwtsConverter.repl_$LI$()[i] = "(";
            i++;
            EwtsConverter.base_$LI$()[i] = "\uff09";
            EwtsConverter.repl_$LI$()[i] = ")";
            i++;
            EwtsConverter.base_$LI$()[i] = "\u0f3c";
            EwtsConverter.repl_$LI$()[i] = "(";
            i++;
            EwtsConverter.base_$LI$()[i] = "\u0f3d";
            EwtsConverter.repl_$LI$()[i] = ")";
            i++;
            EwtsConverter.base_$LI$()[i] = "\uff1a";
            EwtsConverter.repl_$LI$()[i] = ":";
            i++;
            EwtsConverter.base_$LI$()[i] = "H ";
            EwtsConverter.repl_$LI$()[i] = "H";
            i++;
            EwtsConverter.base_$LI$()[i] = "adm";
            EwtsConverter.repl_$LI$()[i] = "ad+m";
            i++;
        };
        EwtsConverter.__static_initializer_0 = function () {
            EwtsConverter.initHashes();
            EwtsConverter.initSloppyRepl();
        };
        EwtsConverter.prototype.initWylie = function (check, check_strict, print_warnings, fix_spacing, mode) {
            if (check_strict && !check) {
                throw new java.lang.RuntimeException("check_strict requires check.");
            }
            this.check = check;
            this.check_strict = check_strict;
            this.print_warnings = print_warnings;
            this.fix_spacing = fix_spacing;
            this.mode = mode;
        };
        EwtsConverter.prototype.consonant = function (s) {
            return EwtsConverter.m_consonant_$LI$().get(s);
        };
        EwtsConverter.prototype.subjoined = function (s) {
            return EwtsConverter.m_subjoined_$LI$().get(s);
        };
        EwtsConverter.prototype.vowel = function (s) {
            return EwtsConverter.m_vowel_$LI$().get(s);
        };
        EwtsConverter.prototype.final_uni = function (s) {
            return EwtsConverter.m_final_uni_$LI$().get(s);
        };
        EwtsConverter.prototype.final_class = function (s) {
            return EwtsConverter.m_final_class_$LI$().get(s);
        };
        EwtsConverter.prototype.other = function (s) {
            return EwtsConverter.m_other_$LI$().get(s);
        };
        EwtsConverter.prototype.isSpecial = function (s) {
            return EwtsConverter.m_special_$LI$().contains(s);
        };
        EwtsConverter.prototype.isSuperscript = function (s) {
            return EwtsConverter.m_superscripts_$LI$().containsKey(s);
        };
        EwtsConverter.prototype.superscript = function (sup, below) {
            var tmpSet = EwtsConverter.m_superscripts_$LI$().get(sup);
            if (tmpSet == null)
                return false;
            return tmpSet.contains(below);
        };
        EwtsConverter.prototype.isSubscript = function (s) {
            return EwtsConverter.m_subscripts_$LI$().containsKey(s);
        };
        EwtsConverter.prototype.subscript = function (sub, above) {
            var tmpSet = EwtsConverter.m_subscripts_$LI$().get(sub);
            if (tmpSet == null)
                return false;
            return tmpSet.contains(above);
        };
        EwtsConverter.prototype.isPrefix = function (s) {
            return EwtsConverter.m_prefixes_$LI$().containsKey(s);
        };
        EwtsConverter.prototype.prefix = function (pref, after) {
            var tmpSet = EwtsConverter.m_prefixes_$LI$().get(pref);
            if (tmpSet == null)
                return false;
            return tmpSet.contains(after);
        };
        EwtsConverter.prototype.isSuffix = function (s) {
            return EwtsConverter.m_suffixes_$LI$().contains(s);
        };
        EwtsConverter.prototype.isSuff2 = function (s) {
            return EwtsConverter.m_suff2_$LI$().containsKey(s);
        };
        EwtsConverter.prototype.suff2 = function (suff, before) {
            var tmpSet = EwtsConverter.m_suff2_$LI$().get(suff);
            if (tmpSet == null)
                return false;
            return tmpSet.contains(before);
        };
        EwtsConverter.prototype.ambiguous_key = function (syll) {
            return EwtsConverter.m_ambiguous_key_$LI$().get(syll);
        };
        EwtsConverter.prototype.ambiguous_wylie = function (syll) {
            return EwtsConverter.m_ambiguous_wylie_$LI$().get(syll);
        };
        EwtsConverter.prototype.tib_top = function (c) {
            return EwtsConverter.m_tib_top_$LI$().get(c);
        };
        EwtsConverter.prototype.tib_subjoined = function (c) {
            return EwtsConverter.m_tib_subjoined_$LI$().get(c);
        };
        EwtsConverter.prototype.tib_vowel = function (c) {
            return EwtsConverter.m_tib_vowel_$LI$().get(c);
        };
        EwtsConverter.prototype.tib_vowel_long = function (s) {
            return EwtsConverter.m_tib_vowel_long_$LI$().get(s);
        };
        EwtsConverter.prototype.tib_final_wylie = function (c) {
            return EwtsConverter.m_tib_final_wylie_$LI$().get(c);
        };
        EwtsConverter.prototype.tib_final_class = function (c) {
            return EwtsConverter.m_tib_final_class_$LI$().get(c);
        };
        EwtsConverter.prototype.tib_caret = function (s) {
            return EwtsConverter.m_tib_caret_$LI$().get(s);
        };
        EwtsConverter.prototype.tib_other = function (c) {
            return EwtsConverter.m_tib_other_$LI$().get(c);
        };
        EwtsConverter.prototype.tib_stack = function (s) {
            return EwtsConverter.m_tib_stacks_$LI$().contains(s);
        };
        EwtsConverter.prototype.splitIntoTokens = function (str) {
            var tokens = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(str.length + 2);
            var o = 0;
            var i = 0;
            var maxlen = str.length;
            TOKEN: while ((i < maxlen)) {
                {
                    var c = str.charAt(i);
                    var mlo = EwtsConverter.m_tokens_start_$LI$().get(c);
                    if (mlo != null) {
                        for (var len = (mlo | 0); len > 1; len--) {
                            {
                                if (i <= maxlen - len) {
                                    var tr = str.substring(i, i + len);
                                    if (EwtsConverter.m_tokens_$LI$().contains(tr)) {
                                        tokens[o++] = tr;
                                        i += len;
                                        continue TOKEN;
                                    }
                                }
                            }
                            ;
                        }
                    }
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) == '\\'.charCodeAt(0) && i <= maxlen - 2) {
                        if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(str.charAt(i + 1)) == 'u'.charCodeAt(0) && i <= maxlen - 6) {
                            tokens[o++] = str.substring(i, i + 6);
                            i += 6;
                        }
                        else if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(str.charAt(i + 1)) == 'U'.charCodeAt(0) && i <= maxlen - 10) {
                            tokens[o++] = str.substring(i, i + 10);
                            i += 10;
                        }
                        else {
                            tokens[o++] = str.substring(i, i + 2);
                            i += 2;
                        }
                        continue TOKEN;
                    }
                    tokens[o++] = javaemul.internal.CharacterHelper.toString(c);
                    i += 1;
                }
            }
            ;
            return tokens;
        };
        /**
         * Adjusts the input string based on the idea that people often are sloppy when
         * writing Wylie and use ' ' instead of '_' when a space is actually meant in
         * the output. This is written is a really simple brute force way to avoid
         * issues of which regex's are supported in Javascript when translated via GWT.
         * This routine does not handle the case of " /" which requires more care to
         * accomodate "ng /" and "ngi /" and so on which are intentional since a tsheg
         * is required in these cases. Also it is not feasible to handle "g " for a
         * final "ga" at the end of a phrase where the '/' is usually omitted in favor
         * of the descender on the "ga". Detecting this is non-trivial.
         *
         * @param {string} str
         * String to be normalized
         * @return {string} normalized String
         */
        EwtsConverter.normalizeSloppyWylie = function (str) {
            str = myCandy.StringUtils.replaceEach(str, EwtsConverter.base_$LI$(), EwtsConverter.repl_$LI$());
            str = /* replaceAll */ str.replace(new RegExp("(^|[^aeiouAIU])H", 'g'), "$1h");
            str = /* replaceAll */ str.replace(new RegExp("(^|[^aeiouAIU~])M", 'g'), "$1m");
            str = /* replace */ str.split("Sh").join("ZZZ");
            str = /* replace */ str.split("S").join("s");
            str = /* replace */ str.split("ZZZ").join("Sh");
            return str;
        };
        /**
         * Checks if a character is a Tibetan Unicode combining character.
         *
         * @param {string} x
         * the character to check
         * @return {boolean} true if x is a Tibetan Unicode combining character
         */
        EwtsConverter.isCombining = function (x) {
            return (((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(x) > 3953 && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(x) < 3972) || ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(x) < 3981 && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(x) > 4028));
        };
        EwtsConverter.prototype.toUnicode$java_lang_String = function (str) {
            return this.toUnicode$java_lang_String$java_util_List$boolean(str, null, true);
        };
        EwtsConverter.prototype.toUnicode$java_lang_String$java_util_List$boolean = function (str, warns, sloppy) {
            if (str == null) {
                return " - no data - ";
            }
            var out = new java.lang.StringBuilder();
            var line = 1;
            var units = 0;
            if (this.mode === EwtsConverter.Mode.DWTS || this.mode === EwtsConverter.Mode.DTS) {
                str = myCandy.TransConverter.dtsToEwts(str);
            }
            else if (this.mode === EwtsConverter.Mode.ALALC) {
                str = myCandy.TransConverter.alalcToEwts(str);
            }
            if (this.fix_spacing) {
                str = /* replace */ str.split("^\\s+").join("");
            }
            if (sloppy) {
                str = EwtsConverter.normalizeSloppyWylie(str);
            }
            var tokens = this.splitIntoTokens(str);
            var i = 0;
            ITER: while ((tokens[i] != null)) {
                {
                    var t = tokens[i];
                    var o = void 0;
                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "[")) {
                        var nesting = 1;
                        i++;
                        ESC: while ((tokens[i] != null)) {
                            {
                                t = tokens[i++];
                                if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                    return o1.equals(o2);
                                }
                                else {
                                    return o1 === o2;
                                } })(t, "["))
                                    nesting++;
                                if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                    return o1.equals(o2);
                                }
                                else {
                                    return o1 === o2;
                                } })(t, "]"))
                                    nesting--;
                                if (nesting === 0)
                                    continue ITER;
                                if ( /* startsWith */(function (str, searchString, position) {
                                    if (position === void 0) { position = 0; }
                                    return str.substr(position, searchString.length) === searchString;
                                })(t, "\\u") || /* startsWith */ (function (str, searchString, position) {
                                    if (position === void 0) { position = 0; }
                                    return str.substr(position, searchString.length) === searchString;
                                })(t, "\\U")) {
                                    o = this.unicodeEscape(warns, line, t);
                                    if (o != null) {
                                        out.append(o);
                                        continue ESC;
                                    }
                                }
                                if ( /* startsWith */(function (str, searchString, position) {
                                    if (position === void 0) { position = 0; }
                                    return str.substr(position, searchString.length) === searchString;
                                })(t, "\\")) {
                                    o = t.substring(1);
                                }
                                else {
                                    o = t;
                                }
                                out.append(o);
                            }
                        }
                        ;
                        this.warnl(warns, line, "Unfinished [non-Converter stuff].");
                        break ITER;
                    }
                    o = this.other(t);
                    if (o != null) {
                        out.append(o);
                        i++;
                        units++;
                        if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(t, " ") && this.fix_spacing) {
                            while ((tokens[i] != null && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(tokens[i], " "))) {
                                i++;
                            }
                            ;
                        }
                        continue ITER;
                    }
                    if (this.vowel(t) != null || this.consonant(t) != null) {
                        var tb = this.toUnicodeOneTsekbar(tokens, i);
                        var word = new java.lang.StringBuilder();
                        for (var j = 0; j < tb.tokens_used; j++) {
                            {
                                word.append(tokens[i + j]);
                            }
                            ;
                        }
                        out.append(tb.uni_string);
                        i += tb.tokens_used;
                        units++;
                        for (var index121 = tb.warns.iterator(); index121.hasNext();) {
                            var w = index121.next();
                            {
                                this.warnl(warns, line, "\"" + word.toString() + "\": " + w);
                            }
                        }
                        continue ITER;
                    }
                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "\ufeff") || /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "\u200b")) {
                        i++;
                        continue ITER;
                    }
                    if ( /* startsWith */(function (str, searchString, position) {
                        if (position === void 0) { position = 0; }
                        return str.substr(position, searchString.length) === searchString;
                    })(t, "\\u") || /* startsWith */ (function (str, searchString, position) {
                        if (position === void 0) { position = 0; }
                        return str.substr(position, searchString.length) === searchString;
                    })(t, "\\U")) {
                        o = this.unicodeEscape(warns, line, t);
                        if (o != null) {
                            i++;
                            out.append(o);
                            continue ITER;
                        }
                    }
                    if ( /* startsWith */(function (str, searchString, position) {
                        if (position === void 0) { position = 0; }
                        return str.substr(position, searchString.length) === searchString;
                    })(t, "\\")) {
                        out.append(t.substring(1));
                        i++;
                        continue ITER;
                    }
                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "\r\n") || /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "\n") || /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "\r")) {
                        line++;
                        out.append(t);
                        i++;
                        if (this.fix_spacing) {
                            while ((tokens[i] != null && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(tokens[i], " "))) {
                                i++;
                            }
                            ;
                        }
                        continue ITER;
                    }
                    var c = t.charAt(0);
                    if (this.isSpecial(t) || ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) >= 'a'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) <= 'z'.charCodeAt(0)) || ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) >= 'A'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) <= 'Z'.charCodeAt(0))) {
                        this.warnl(warns, line, "Unexpected character \"" + t + "\".");
                    }
                    out.append(t);
                    i++;
                }
            }
            ;
            if (units === 0)
                this.warn(warns, "No Tibetan characters found!");
            if (this.check_strict) {
                if (out.length() > 0 && EwtsConverter.isCombining(out.charAt(0))) {
                    this.warn(warns, "String starts with combining character \'" + out.charAt(0) + "\'");
                }
            }
            return out.toString();
        };
        /**
         * Converts a string to Unicode.
         *
         * @param {string} str
         * the string to convert
         * @param {*} warns
         * the warning list to fill
         * @param {boolean} sloppy
         * if common EWTS errors should be fixed
         * @return {string} the converted string
         */
        EwtsConverter.prototype.toUnicode = function (str, warns, sloppy) {
            if (((typeof str === 'string') || str === null) && ((warns != null && (warns["__interfaces"] != null && warns["__interfaces"].indexOf("java.util.List") >= 0 || warns.constructor != null && warns.constructor["__interfaces"] != null && warns.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || warns === null) && ((typeof sloppy === 'boolean') || sloppy === null)) {
                return this.toUnicode$java_lang_String$java_util_List$boolean(str, warns, sloppy);
            }
            else if (((typeof str === 'string') || str === null) && warns === undefined && sloppy === undefined) {
                return this.toUnicode$java_lang_String(str);
            }
            else
                throw new Error('invalid overload');
        };
        EwtsConverter.prototype.validHex = function (t) {
            for (var i = 0; i < t.length; i++) {
                {
                    var c = t.charAt(i);
                    if (!(((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) >= 'a'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) <= 'f'.charCodeAt(0)) || ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) >= '0'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) <= '9'.charCodeAt(0))))
                        return false;
                }
                ;
            }
            return true;
        };
        EwtsConverter.prototype.unicodeEscape = function (warns, line, t) {
            var hex = t.substring(2);
            if ( /* isEmpty */(hex.length === 0))
                return null;
            if (!this.validHex(hex)) {
                this.warnl(warns, line, "\"" + t + "\": invalid hex code.");
                return "";
            }
            return javaemul.internal.CharacterHelper.valueOf(String.fromCharCode(javaemul.internal.IntegerHelper.parseInt(hex, 16))).toString();
        };
        EwtsConverter.prototype.warn = function (warns, str) {
            if (warns != null)
                warns.add(str);
            if (this.print_warnings)
                console.info(str);
        };
        EwtsConverter.prototype.warnl = function (warns, line, str) {
            this.warn(warns, "line " + line + ": " + str);
        };
        EwtsConverter.prototype.debug = function (str) {
            console.info(str);
        };
        EwtsConverter.prototype.debugvar = function (o, name) {
            console.info(">>" + name + "<< : (" + (o == null ? "NULL" : o.toString()) + ")");
        };
        EwtsConverter.prototype.joinStrings = function (a, sep) {
            var out = new java.lang.StringBuilder();
            var len = a.size();
            var i = 0;
            for (var index122 = a.iterator(); index122.hasNext();) {
                var v = index122.next();
                {
                    out.append(v);
                    if (sep != null && i < len - 1)
                        out.append(sep);
                    i++;
                }
            }
            return out.toString();
        };
        EwtsConverter.prototype.toUnicodeOneStack = function (tokens, i) {
            var orig_i = i;
            var t;
            var t2;
            var o;
            var out = new java.lang.StringBuilder();
            var warns = (new java.util.ArrayList());
            var consonants = 0;
            var vowel_found = null;
            var vowel_sign = null;
            var single_consonant = null;
            var plus = false;
            var caret = 0;
            var final_found = (new java.util.HashMap());
            t = tokens[i];
            t2 = tokens[i + 1];
            if (t2 != null && this.isSuperscript(t) && this.superscript(t, t2)) {
                if (this.check_strict) {
                    var next = this.consonantString(tokens, i + 1);
                    if (!this.superscript(t, next)) {
                        next = /* replace */ next.split("+").join("");
                        warns.add("Superscript \"" + t + "\" does not occur above combination \"" + next + "\".");
                    }
                }
                out.append(this.consonant(t));
                consonants++;
                i++;
                while ((tokens[i] != null && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(tokens[i], "^"))) {
                    {
                        caret++;
                        i++;
                    }
                }
                ;
            }
            MAIN: while ((true)) {
                {
                    t = tokens[i];
                    if (this.consonant(t) != null || (out.length() > 0 && this.subjoined(t) != null)) {
                        if (out.length() > 0) {
                            out.append(this.subjoined(t));
                        }
                        else {
                            out.append(this.consonant(t));
                        }
                        i++;
                        if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(t, "a")) {
                            vowel_found = "a";
                        }
                        else {
                            consonants++;
                            single_consonant = t;
                        }
                        while ((tokens[i] != null && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(tokens[i], "^"))) {
                            {
                                caret++;
                                i++;
                            }
                        }
                        ;
                        for (var z = 0; z < 2; z++) {
                            {
                                t2 = tokens[i];
                                if (t2 != null && this.isSubscript(t2)) {
                                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(t2, "l") && consonants > 1)
                                        break;
                                    if (this.check_strict && !plus) {
                                        var prev = this.consonantStringBackwards(tokens, i - 1, orig_i);
                                        if (!this.subscript(t2, prev)) {
                                            prev = /* replace */ prev.split("+").join("");
                                            warns.add("Subjoined \"" + t2 + "\" not expected after \"" + prev + "\".");
                                        }
                                    }
                                    else if (this.check) {
                                        if (!this.subscript(t2, t) && !(z === 1 && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                                            return o1.equals(o2);
                                        }
                                        else {
                                            return o1 === o2;
                                        } })(t2, "w") && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                                            return o1.equals(o2);
                                        }
                                        else {
                                            return o1 === o2;
                                        } })(t, "y"))) {
                                            warns.add("Subjoined \"" + t2 + "\"not expected after \"" + t + "\".");
                                        }
                                    }
                                    out.append(this.subjoined(t2));
                                    i++;
                                    consonants++;
                                    while ((tokens[i] != null && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(tokens[i], "^"))) {
                                        {
                                            caret++;
                                            i++;
                                        }
                                    }
                                    ;
                                    t = t2;
                                }
                                else {
                                    break;
                                }
                            }
                            ;
                        }
                    }
                    if (caret > 0) {
                        if (caret > 1) {
                            warns.add("Cannot have more than one \"^\" applied to the same stack.");
                        }
                        final_found.put(this.final_class("^"), "^");
                        out.append(this.final_uni("^"));
                        caret = 0;
                    }
                    t = tokens[i];
                    if (t != null && this.vowel(t) != null) {
                        if (out.length() === 0)
                            out.append(this.vowel("a"));
                        if (!(function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(t, "a"))
                            out.append(this.vowel(t));
                        i++;
                        vowel_found = t;
                        if (!(function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(t, "a"))
                            vowel_sign = t;
                    }
                    t = tokens[i];
                    if (t != null && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "+")) {
                        i++;
                        plus = true;
                        t = tokens[i];
                        if (t == null || (this.vowel(t) == null && this.subjoined(t) == null)) {
                            if (this.check)
                                warns.add("Expected vowel or consonant after \"+\".");
                            break MAIN;
                        }
                        if (this.check) {
                            if (this.vowel(t) == null && vowel_sign != null) {
                                warns.add("Cannot subjoin consonant (" + t + ") after vowel (" + vowel_sign + ") in same stack.");
                            }
                            else if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(t, "a") && vowel_sign != null) {
                                warns.add("Cannot subjoin a-chen (a) after vowel (" + vowel_sign + ") in same stack.");
                            }
                        }
                        continue MAIN;
                    }
                    break MAIN;
                }
            }
            ;
            t = tokens[i];
            while ((t != null && this.final_class(t) != null)) {
                {
                    var uni = this.final_uni(t);
                    var klass = this.final_class(t);
                    if (final_found.containsKey(klass)) {
                        if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(final_found.get(klass), t)) {
                            warns.add("Cannot have two \"" + t + "\" applied to the same stack.");
                        }
                        else {
                            warns.add("Cannot have \"" + t + "\" and \"" + final_found.get(klass) + "\" applied to the same stack.");
                        }
                    }
                    else {
                        final_found.put(klass, t);
                        out.append(uni);
                    }
                    i++;
                    single_consonant = null;
                    t = tokens[i];
                }
            }
            ;
            if (tokens[i] != null && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(tokens[i], "."))
                i++;
            if (consonants > 1 && vowel_found == null) {
                if (plus) {
                    if (this.check)
                        warns.add("Stack with multiple consonants should end with vowel.");
                }
                else {
                    i = orig_i + 1;
                    consonants = 1;
                    single_consonant = tokens[orig_i];
                    out.setLength(0);
                    out.append(this.consonant(single_consonant));
                }
            }
            if (consonants !== 1 || plus) {
                single_consonant = null;
            }
            var ret = new EwtsConverter.WylieStack();
            ret.uni_string = out.toString();
            ret.tokens_used = i - orig_i;
            if (vowel_found != null) {
                ret.single_consonant = null;
            }
            else {
                ret.single_consonant = single_consonant;
            }
            if (vowel_found != null && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(vowel_found, "a")) {
                ret.single_cons_a = single_consonant;
            }
            else {
                ret.single_cons_a = null;
            }
            ret.warns = warns;
            ret.visarga = final_found.containsKey("H");
            return ret;
        };
        EwtsConverter.prototype.toUnicodeOneTsekbar = function (tokens, i) {
            var orig_i = i;
            var t = tokens[i];
            var stack = null;
            var prev_cons = null;
            var visarga = false;
            var check_root = true;
            var consonants = (new java.util.ArrayList());
            var root_idx = -1;
            var out = new java.lang.StringBuilder();
            var warns = (new java.util.ArrayList());
            var state = EwtsConverter.State.PREFIX;
            /*STACK:*/ while ((t != null && (this.vowel(t) != null || this.consonant(t) != null) && !visarga)) {
                {
                    if (stack != null)
                        prev_cons = stack.single_consonant;
                    stack = this.toUnicodeOneStack(tokens, i);
                    i += stack.tokens_used;
                    t = tokens[i];
                    out.append(stack.uni_string);
                    warns.addAll(stack.warns);
                    visarga = stack.visarga;
                    if (!this.check)
                        continue;
                    if (state === EwtsConverter.State.PREFIX && stack.single_consonant != null) {
                        consonants.add(stack.single_consonant);
                        if (this.isPrefix(stack.single_consonant)) {
                            var next = t;
                            if (this.check_strict)
                                next = this.consonantString(tokens, i);
                            if (next != null && !this.prefix(stack.single_consonant, next)) {
                                next = /* replace */ next.split("+").join("");
                                warns.add("Prefix \"" + stack.single_consonant + "\" does not occur before \"" + next + "\".");
                            }
                        }
                        else {
                            warns.add("Invalid prefix consonant: \"" + stack.single_consonant + "\".");
                        }
                        state = EwtsConverter.State.MAIN;
                    }
                    else if (stack.single_consonant == null) {
                        state = EwtsConverter.State.SUFF1;
                        if (root_idx >= 0) {
                            check_root = false;
                        }
                        else if (stack.single_cons_a != null) {
                            consonants.add(stack.single_cons_a);
                            root_idx = consonants.size() - 1;
                        }
                    }
                    else if (state === EwtsConverter.State.MAIN) {
                        warns.add("Expected vowel after \"" + stack.single_consonant + "\".");
                    }
                    else if (state === EwtsConverter.State.SUFF1) {
                        consonants.add(stack.single_consonant);
                        if (this.check_strict) {
                            if (!this.isSuffix(stack.single_consonant)) {
                                warns.add("Invalid suffix consonant: \"" + stack.single_consonant + "\".");
                            }
                        }
                        state = EwtsConverter.State.SUFF2;
                    }
                    else if (state === EwtsConverter.State.SUFF2) {
                        consonants.add(stack.single_consonant);
                        if (this.isSuff2(stack.single_consonant)) {
                            if (!this.suff2(stack.single_consonant, prev_cons)) {
                                warns.add("Second suffix \"" + stack.single_consonant + "\" does not occur after \"" + prev_cons + "\".");
                            }
                        }
                        else {
                            if (!EwtsConverter.m_affixedsuff2_$LI$().contains(stack.single_consonant) || !(function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(prev_cons, "\'")) {
                                warns.add("Invalid 2nd suffix consonant: \"" + stack.single_consonant + "\".");
                            }
                        }
                        state = EwtsConverter.State.NONE;
                    }
                    else if (state === EwtsConverter.State.NONE) {
                        warns.add("Cannot have another consonant \"" + stack.single_consonant + "\" after 2nd suffix.");
                    }
                }
            }
            ;
            if (state === EwtsConverter.State.MAIN && stack.single_consonant != null && this.isPrefix(stack.single_consonant)) {
                warns.add("Vowel expected after \"" + stack.single_consonant + "\".");
            }
            if (this.check && warns.size() === 0 && check_root && root_idx >= 0) {
                if (consonants.size() === 2 && root_idx !== 0 && this.prefix(consonants.get(0), consonants.get(1)) && this.isSuffix(consonants.get(1))) {
                    warns.add("Syllable should probably be \"" + consonants.get(0) + "a" + consonants.get(1) + "\".");
                }
                else if (consonants.size() === 3 && this.isPrefix(consonants.get(0)) && this.suff2("s", consonants.get(1)) && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(consonants.get(2), "s")) {
                    var cc = this.joinStrings(consonants, "");
                    cc = /* replace */ cc.split('\u2018').join('\'');
                    cc = /* replace */ cc.split('\u2019').join('\'');
                    var expect_key = this.ambiguous_key(cc);
                    if (expect_key != null && /* intValue */ (expect_key | 0) !== root_idx) {
                        warns.add("Syllable should probably be \"" + this.ambiguous_wylie(cc) + "\".");
                    }
                }
            }
            var ret = new EwtsConverter.WylieTsekbar();
            ret.uni_string = out.toString();
            ret.tokens_used = i - orig_i;
            ret.warns = warns;
            return ret;
        };
        EwtsConverter.prototype.consonantString = function (tokens, i) {
            var out = (new java.util.ArrayList());
            var t;
            while ((tokens[i] != null)) {
                {
                    t = tokens[i++];
                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "+") || /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "^"))
                        continue;
                    if (this.consonant(t) == null)
                        break;
                    out.add(t);
                }
            }
            ;
            return this.joinStrings(out, "+");
        };
        EwtsConverter.prototype.consonantStringBackwards = function (tokens, i, orig_i) {
            var out = (new java.util.LinkedList());
            var t;
            while ((i >= orig_i && tokens[i] != null)) {
                {
                    t = tokens[i--];
                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "+") || /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(t, "^"))
                        continue;
                    if (this.consonant(t) == null)
                        break;
                    out.addFirst(t);
                }
            }
            ;
            return this.joinStrings(out, "+");
        };
        EwtsConverter.prototype.toWylie$java_lang_String = function (str) {
            return this.toWylie$java_lang_String$java_util_List$boolean(str, null, true);
        };
        EwtsConverter.prototype.toWylie$java_lang_String$java_util_List$boolean = function (str, warns, escape) {
            var out = new java.lang.StringBuilder();
            var line = 1;
            str = /* replace */ str.split("\u0f76").join("\u0fb2\u0f80");
            str = /* replace */ str.split("\u0f77").join("\u0fb2\u0f71\u0f80");
            str = /* replace */ str.split("\u0f78").join("\u0fb3\u0f80");
            str = /* replace */ str.split("\u0f79").join("\u0fb3\u0f71\u0f80");
            str = /* replace */ str.split("\u0f81").join("\u0f71\u0f80");
            str = /* replace */ str.split("\u0f75").join("\u0f71\u0f74");
            str = /* replace */ str.split("\u0f73").join("\u0f71\u0f72");
            var i = 0;
            var len = str.length;
            ITER: while ((i < len)) {
                {
                    var t = str.charAt(i);
                    if (this.tib_top(t) != null) {
                        var tb = this.toWylieOneTsekbar(str, len, i);
                        out.append(tb.wylie);
                        i += tb.tokens_used;
                        for (var index123 = tb.warns.iterator(); index123.hasNext();) {
                            var w = index123.next();
                            {
                                this.warnl(warns, line, w);
                            }
                        }
                        if (!escape)
                            i += this.handleSpaces(str, i, out);
                        continue ITER;
                    }
                    var o = this.tib_other(t);
                    if (o != null && ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) != ' '.charCodeAt(0) || (escape && !this.followedByNonTibetan(str, i)))) {
                        out.append(o);
                        i++;
                        if (!escape)
                            i += this.handleSpaces(str, i, out);
                        continue ITER;
                    }
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) == '\r'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) == '\n'.charCodeAt(0)) {
                        line++;
                        i++;
                        out.append(t);
                        if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) == '\r'.charCodeAt(0) && i < len && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(str.charAt(i)) == '\n'.charCodeAt(0)) {
                            i++;
                            out.append('\n');
                        }
                        continue ITER;
                    }
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) == '\ufeff'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) == '\u200b'.charCodeAt(0)) {
                        i++;
                        continue ITER;
                    }
                    if (!escape) {
                        out.append(t);
                        i++;
                        continue ITER;
                    }
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) >= '\u0f00'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) <= '\u0fff'.charCodeAt(0)) {
                        var c = this.formatHex(t);
                        out.append(c);
                        i++;
                        if (this.tib_subjoined(t) != null || this.tib_vowel(t) != null || this.tib_final_wylie(t) != null) {
                            this.warnl(warns, line, "Tibetan sign " + c + " needs a top symbol to attach to.");
                        }
                        continue ITER;
                    }
                    out.append("[");
                    while ((this.tib_top(t) == null && (this.tib_other(t) == null || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) == ' '.charCodeAt(0)) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) != '\r'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) != '\n'.charCodeAt(0))) {
                        {
                            if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) == '['.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) == ']'.charCodeAt(0)) {
                                out.append("\\");
                                out.append(t);
                            }
                            else if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) >= '\u0f00'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) <= '\u0fff'.charCodeAt(0)) {
                                out.append(this.formatHex(t));
                            }
                            else {
                                out.append(t);
                            }
                            if (++i >= len)
                                break;
                            t = str.charAt(i);
                        }
                    }
                    ;
                    out.append("]");
                }
            }
            ;
            return out.toString();
        };
        /**
         * Converts from Unicode strings to Converter (EWTS) transliteration.
         *
         * @param {string} str
         * the Unicode string to be converted
         * @param {*} warns
         * the warning list that will be filled
         * @param {boolean} escape
         * whether to escape non-tibetan characters according to Converter
         * encoding. if escape == false, anything that is not tibetan will be
         * just passed through.
         * @return {string} the corresponding EWTS string
         */
        EwtsConverter.prototype.toWylie = function (str, warns, escape) {
            if (((typeof str === 'string') || str === null) && ((warns != null && (warns["__interfaces"] != null && warns["__interfaces"].indexOf("java.util.List") >= 0 || warns.constructor != null && warns.constructor["__interfaces"] != null && warns.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || warns === null) && ((typeof escape === 'boolean') || escape === null)) {
                return this.toWylie$java_lang_String$java_util_List$boolean(str, warns, escape);
            }
            else if (((typeof str === 'string') || str === null) && warns === undefined && escape === undefined) {
                return this.toWylie$java_lang_String(str);
            }
            else
                throw new Error('invalid overload');
        };
        EwtsConverter.prototype.formatHex = function (t) {
            var sb = new java.lang.StringBuilder();
            sb.append("\\u");
            var s = javaemul.internal.IntegerHelper.toHexString((t).charCodeAt(0));
            for (var i = s.length; i < 4; i++) {
                {
                    sb.append('0');
                }
                ;
            }
            sb.append(s);
            return sb.toString();
        };
        EwtsConverter.prototype.handleSpaces = function (str, i, out) {
            var found = 0;
            var orig_i = i;
            while ((i < str.length && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(str.charAt(i)) == ' '.charCodeAt(0))) {
                {
                    i++;
                    found++;
                }
            }
            ;
            if (found === 0 || i === str.length)
                return 0;
            var t = str.charAt(i);
            if (this.tib_top(t) == null && this.tib_other(t) == null)
                return 0;
            for (i = 0; i < found; i++) {
                {
                    out.append('_');
                }
                ;
            }
            return found;
        };
        EwtsConverter.prototype.followedByNonTibetan = function (str, i) {
            var len = str.length;
            while ((i < len && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(str.charAt(i)) == ' '.charCodeAt(0))) {
                {
                    i++;
                }
            }
            ;
            if (i === len)
                return false;
            var t = str.charAt(i);
            return this.tib_top(t) == null && this.tib_other(t) == null && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) != '\r'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t) != '\n'.charCodeAt(0);
        };
        EwtsConverter.prototype.toWylieOneTsekbar = function (str, len, i) {
            var orig_i = i;
            var warns = (new java.util.ArrayList());
            var stacks = (new java.util.ArrayList());
            ITER: while ((true)) {
                {
                    var st = this.toWylieOneStack(str, len, i);
                    stacks.add(st);
                    warns.addAll(st.warns);
                    i += st.tokens_used;
                    if (st.visarga)
                        break ITER;
                    if (i >= len || this.tib_top(str.charAt(i)) == null)
                        break ITER;
                }
            }
            ;
            var last = stacks.size() - 1;
            if (stacks.size() > 1 && stacks.get(0).single_cons != null) {
                var cs = stacks.get(1).cons_str.split("+w").join("");
                if (this.prefix(stacks.get(0).single_cons, cs)) {
                    stacks.get(0).prefix = true;
                }
            }
            if (stacks.size() > 1 && stacks.get(last).single_cons != null && this.isSuffix(stacks.get(last).single_cons)) {
                stacks.get(last).suffix = true;
            }
            if (stacks.size() > 2 && stacks.get(last).single_cons != null && stacks.get(last - 1).single_cons != null && this.isSuffix(stacks.get(last - 1).single_cons) && this.suff2(stacks.get(last).single_cons, stacks.get(last - 1).single_cons)) {
                stacks.get(last).suff2 = true;
                stacks.get(last - 1).suffix = true;
            }
            if (stacks.size() === 2 && stacks.get(0).prefix && stacks.get(1).suffix) {
                stacks.get(0).prefix = false;
            }
            if (stacks.size() === 3 && stacks.get(0).prefix && stacks.get(1).suffix && stacks.get(2).suff2) {
                var strb = new java.lang.StringBuilder();
                for (var index124 = stacks.iterator(); index124.hasNext();) {
                    var st = index124.next();
                    {
                        strb.append(st.single_cons);
                    }
                }
                var ztr = strb.toString();
                var root = this.ambiguous_key(ztr);
                if (root == null) {
                    warns.add("Ambiguous syllable found: root consonant not known for \"" + ztr + "\".");
                    root = 1;
                }
                stacks.get(root).prefix = stacks.get(root).suffix = false;
                stacks.get(root + 1).suff2 = false;
            }
            if (stacks.get(0).prefix && this.tib_stack(stacks.get(0).single_cons + "+" + stacks.get(1).cons_str)) {
                stacks.get(0).dot = true;
            }
            var out = new java.lang.StringBuilder();
            for (var index125 = stacks.iterator(); index125.hasNext();) {
                var st = index125.next();
                {
                    out.append(this.putStackTogether(st));
                }
            }
            var ret = new EwtsConverter.ToWylieTsekbar();
            ret.wylie = out.toString();
            ret.tokens_used = i - orig_i;
            ret.warns = warns;
            return ret;
        };
        EwtsConverter.prototype.toWylieOneStack = function (str, len, i) {
            var orig_i = i;
            var ffinal = null;
            var vowel = null;
            var klass = null;
            var st = new EwtsConverter.ToWylieStack();
            var t = str.charAt(i++);
            st.top = this.tib_top(t);
            st.stack.add(this.tib_top(t));
            while ((i < len)) {
                {
                    t = str.charAt(i);
                    var o = void 0;
                    if ((o = this.tib_subjoined(t)) != null) {
                        i++;
                        st.stack.add(o);
                        if (!st.finals.isEmpty()) {
                            st.warns.add("Subjoined sign \"" + o + "\" found after final sign \"" + ffinal + "\".");
                        }
                        else if (!st.vowels.isEmpty()) {
                            st.warns.add("Subjoined sign \"" + o + "\" found after vowel sign \"" + vowel + "\".");
                        }
                    }
                    else if ((o = this.tib_vowel(t)) != null) {
                        i++;
                        st.vowels.add(o);
                        if (vowel == null)
                            vowel = o;
                        if (!st.finals.isEmpty()) {
                            st.warns.add("Vowel sign \"" + o + "\" found after final sign \"" + ffinal + "\".");
                        }
                    }
                    else if ((o = this.tib_final_wylie(t)) != null) {
                        i++;
                        klass = this.tib_final_class(t);
                        if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o, "^")) {
                            st.caret = true;
                        }
                        else {
                            if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(o, "H"))
                                st.visarga = true;
                            st.finals.add(o);
                            if (ffinal == null)
                                ffinal = o;
                            if (st.finals_found.containsKey(klass)) {
                                st.warns.add("Final sign \"" + o + "\" should not combine with found after final sign \"" + ffinal + "\".");
                            }
                            else {
                                st.finals_found.put(klass, o);
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            ;
            if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(st.top, "a") && st.stack.size() === 1 && !st.vowels.isEmpty()) {
                st.stack.removeFirst();
            }
            if (st.vowels.size() > 1 && /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(st.vowels.get(0), "A") && this.tib_vowel_long(st.vowels.get(1)) != null) {
                var l = this.tib_vowel_long(st.vowels.get(1));
                st.vowels.removeFirst();
                st.vowels.removeFirst();
                st.vowels.addFirst(l);
            }
            if (st.caret && st.stack.size() === 1 && this.tib_caret(st.top) != null) {
                var l = this.tib_caret(st.top);
                st.top = l;
                st.stack.removeFirst();
                st.stack.addFirst(l);
                st.caret = false;
            }
            st.cons_str = this.joinStrings(st.stack, "+");
            if (st.stack.size() === 1 && !(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(st.stack.get(0), "a") && !st.caret && st.vowels.isEmpty() && st.finals.isEmpty()) {
                st.single_cons = st.cons_str;
            }
            st.tokens_used = i - orig_i;
            return st;
        };
        EwtsConverter.prototype.putStackTogether = function (st) {
            var out = new java.lang.StringBuilder();
            if (this.tib_stack(st.cons_str)) {
                out.append(this.joinStrings(st.stack, ""));
            }
            else {
                out.append(st.cons_str);
            }
            if (st.caret) {
                out.append("^");
            }
            if (!st.vowels.isEmpty()) {
                out.append(this.joinStrings(st.vowels, "+"));
            }
            else if (!st.prefix && !st.suffix && !st.suff2 && ( /* isEmpty */(st.cons_str.length === 0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(st.cons_str.charAt(st.cons_str.length - 1)) != 'a'.charCodeAt(0))) {
                out.append("a");
            }
            out.append(this.joinStrings(st.finals, ""));
            if (st.dot)
                out.append(".");
            return out.toString();
        };
        EwtsConverter.__static_initialized = false;
        return EwtsConverter;
    }());
    myCandy.EwtsConverter = EwtsConverter;
    EwtsConverter["__class"] = "myCandy.EwtsConverter";
    (function (EwtsConverter) {
        var Mode;
        (function (Mode) {
            Mode[Mode["WYLIE"] = 0] = "WYLIE";
            Mode[Mode["EWTS"] = 1] = "EWTS";
            Mode[Mode["DWTS"] = 2] = "DWTS";
            Mode[Mode["DTS"] = 3] = "DTS";
            Mode[Mode["ALALC"] = 4] = "ALALC";
            Mode[Mode["ACIP"] = 5] = "ACIP";
        })(Mode = EwtsConverter.Mode || (EwtsConverter.Mode = {}));
        var State;
        (function (State) {
            State[State["PREFIX"] = 0] = "PREFIX";
            State[State["MAIN"] = 1] = "MAIN";
            State[State["SUFF1"] = 2] = "SUFF1";
            State[State["SUFF2"] = 3] = "SUFF2";
            State[State["NONE"] = 4] = "NONE";
        })(State = EwtsConverter.State || (EwtsConverter.State = {}));
        var WylieStack = /** @class */ (function () {
            function WylieStack() {
                if (this.uni_string === undefined)
                    this.uni_string = null;
                if (this.tokens_used === undefined)
                    this.tokens_used = 0;
                if (this.single_consonant === undefined)
                    this.single_consonant = null;
                if (this.single_cons_a === undefined)
                    this.single_cons_a = null;
                if (this.warns === undefined)
                    this.warns = null;
                if (this.visarga === undefined)
                    this.visarga = false;
            }
            return WylieStack;
        }());
        EwtsConverter.WylieStack = WylieStack;
        WylieStack["__class"] = "myCandy.EwtsConverter.WylieStack";
        var WylieTsekbar = /** @class */ (function () {
            function WylieTsekbar() {
                if (this.uni_string === undefined)
                    this.uni_string = null;
                if (this.tokens_used === undefined)
                    this.tokens_used = 0;
                if (this.warns === undefined)
                    this.warns = null;
            }
            return WylieTsekbar;
        }());
        EwtsConverter.WylieTsekbar = WylieTsekbar;
        WylieTsekbar["__class"] = "myCandy.EwtsConverter.WylieTsekbar";
        var ToWylieStack = /** @class */ (function () {
            function ToWylieStack() {
                if (this.top === undefined)
                    this.top = null;
                if (this.stack === undefined)
                    this.stack = null;
                if (this.caret === undefined)
                    this.caret = false;
                if (this.vowels === undefined)
                    this.vowels = null;
                if (this.finals === undefined)
                    this.finals = null;
                if (this.finals_found === undefined)
                    this.finals_found = null;
                if (this.visarga === undefined)
                    this.visarga = false;
                if (this.cons_str === undefined)
                    this.cons_str = null;
                if (this.single_cons === undefined)
                    this.single_cons = null;
                if (this.prefix === undefined)
                    this.prefix = false;
                if (this.suffix === undefined)
                    this.suffix = false;
                if (this.suff2 === undefined)
                    this.suff2 = false;
                if (this.dot === undefined)
                    this.dot = false;
                if (this.tokens_used === undefined)
                    this.tokens_used = 0;
                if (this.warns === undefined)
                    this.warns = null;
                this.stack = (new java.util.LinkedList());
                this.vowels = (new java.util.LinkedList());
                this.finals = (new java.util.ArrayList());
                this.finals_found = (new java.util.HashMap());
                this.warns = (new java.util.ArrayList());
            }
            return ToWylieStack;
        }());
        EwtsConverter.ToWylieStack = ToWylieStack;
        ToWylieStack["__class"] = "myCandy.EwtsConverter.ToWylieStack";
        var ToWylieTsekbar = /** @class */ (function () {
            function ToWylieTsekbar() {
                if (this.wylie === undefined)
                    this.wylie = null;
                if (this.tokens_used === undefined)
                    this.tokens_used = 0;
                if (this.warns === undefined)
                    this.warns = null;
            }
            return ToWylieTsekbar;
        }());
        EwtsConverter.ToWylieTsekbar = ToWylieTsekbar;
        ToWylieTsekbar["__class"] = "myCandy.EwtsConverter.ToWylieTsekbar";
    })(EwtsConverter = myCandy.EwtsConverter || (myCandy.EwtsConverter = {}));
})(myCandy || (myCandy = {}));
myCandy.EwtsConverter.repl_$LI$();
myCandy.EwtsConverter.base_$LI$();
myCandy.EwtsConverter.m_suff2_$LI$();
myCandy.EwtsConverter.m_prefixes_$LI$();
myCandy.EwtsConverter.m_subscripts_$LI$();
myCandy.EwtsConverter.m_superscripts_$LI$();
myCandy.EwtsConverter.m_affixedsuff2_$LI$();
myCandy.EwtsConverter.m_tokens_$LI$();
myCandy.EwtsConverter.m_tib_stacks_$LI$();
myCandy.EwtsConverter.m_suffixes_$LI$();
myCandy.EwtsConverter.m_special_$LI$();
myCandy.EwtsConverter.m_tokens_start_$LI$();
myCandy.EwtsConverter.m_ambiguous_key_$LI$();
myCandy.EwtsConverter.m_tib_other_$LI$();
myCandy.EwtsConverter.m_tib_final_class_$LI$();
myCandy.EwtsConverter.m_tib_final_wylie_$LI$();
myCandy.EwtsConverter.m_tib_vowel_$LI$();
myCandy.EwtsConverter.m_tib_subjoined_$LI$();
myCandy.EwtsConverter.m_tib_top_$LI$();
myCandy.EwtsConverter.m_tib_caret_$LI$();
myCandy.EwtsConverter.m_tib_vowel_long_$LI$();
myCandy.EwtsConverter.m_ambiguous_wylie_$LI$();
myCandy.EwtsConverter.m_other_$LI$();
myCandy.EwtsConverter.m_final_class_$LI$();
myCandy.EwtsConverter.m_final_uni_$LI$();
myCandy.EwtsConverter.m_vowel_$LI$();
myCandy.EwtsConverter.m_subjoined_$LI$();
myCandy.EwtsConverter.m_consonant_$LI$();
myCandy.EwtsConverter.__static_initialize();
myCandy.TransConverter.replMapEwtsToAlalc_$LI$();
myCandy.TransConverter.replMapDtsToEwts_$LI$();
myCandy.TransConverter.replMapAlalcToEwts_$LI$();
myCandy.TransConverter.replEwtsToAlalc_$LI$();
myCandy.TransConverter.baseEwts_$LI$();
myCandy.TransConverter.replDtsToEwts_$LI$();
myCandy.TransConverter.replAlalcToEwts_$LI$();
myCandy.TransConverter.baseAlalc_$LI$();
myCandy.TransConverter.baseDts_$LI$();
myCandy.TransConverter.__static_initialize();
module.exports = myCandy;
