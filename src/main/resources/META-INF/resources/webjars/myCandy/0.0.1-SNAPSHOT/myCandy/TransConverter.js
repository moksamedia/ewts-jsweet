"use strict";
exports.__esModule = true;
/* Generated from Java with JSweet 2.3.7-SNAPSHOT - http://www.jsweet.org */
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
        TransConverter.replMapAlalcToEwts = (new TreeMap()); return TransConverter.replMapAlalcToEwts; };
    ;
    TransConverter.replMapDtsToEwts_$LI$ = function () { TransConverter.__static_initialize(); if (TransConverter.replMapDtsToEwts == null)
        TransConverter.replMapDtsToEwts = (new TreeMap()); return TransConverter.replMapDtsToEwts; };
    ;
    TransConverter.replMapEwtsToAlalc_$LI$ = function () { TransConverter.__static_initialize(); if (TransConverter.replMapEwtsToAlalc == null)
        TransConverter.replMapEwtsToAlalc = (new TreeMap()); return TransConverter.replMapEwtsToAlalc; };
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
        return StringUtils_1.StringUtils.replaceEach(dtsString, TransConverter.baseDts_$LI$(), TransConverter.replDtsToEwts_$LI$());
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
        return StringUtils_1.StringUtils.replaceEach(alalcStr, TransConverter.baseAlalc_$LI$(), TransConverter.replAlalcToEwts_$LI$());
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
            ewtsStr = EwtsConverter_1.EwtsConverter.normalizeSloppyWylie(ewtsStr);
        }
        ewtsStr = StringUtils_1.StringUtils.replaceEach(ewtsStr, TransConverter.baseEwts_$LI$(), TransConverter.replEwtsToAlalc_$LI$());
        ewtsStr = /* replaceAll */ ewtsStr.replace(new RegExp("([a-zA-Z])\\.([a-zA-Z])", 'g'), "$1\u02b9$2");
        ewtsStr = /* replaceAll */ ewtsStr.replace(new RegExp("[^a-zA-Z0-9 \"\u02b9\u02bc`\u0325\u0304\u0303\u0323\u0307\u0301\u0310()\\-]", 'g'), "");
        ewtsStr = StringUtils_1.StringUtils.strip(ewtsStr, " ");
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
exports.TransConverter = TransConverter;
TransConverter["__class"] = "myCandy.TransConverter";
TransConverter.__static_initialize();
var EwtsConverter_1 = require("./EwtsConverter");
var StringUtils_1 = require("./StringUtils");
//# sourceMappingURL=TransConverter.js.map