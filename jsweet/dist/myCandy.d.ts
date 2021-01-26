export declare namespace myCandy {
    /**
     * Tibetan EWTS from/to DTS or ALA-LC romanization conversion methods
     *
     * @author Buddhist Digital Resource Center (BDRC)
     * @version 1.4.0
     * @class
     */
    class TransConverter {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        static baseDts: string[];
        static baseDts_$LI$(): string[];
        static baseAlalc: string[];
        static baseAlalc_$LI$(): string[];
        static replAlalcToEwts: string[];
        static replAlalcToEwts_$LI$(): string[];
        static replDtsToEwts: string[];
        static replDtsToEwts_$LI$(): string[];
        static baseEwts: string[];
        static baseEwts_$LI$(): string[];
        static replEwtsToAlalc: string[];
        static replEwtsToAlalc_$LI$(): string[];
        static DTS: number;
        static ALALC: number;
        static BOTH: number;
        static replMapAlalcToEwts: java.util.Map<string, string>;
        static replMapAlalcToEwts_$LI$(): java.util.Map<string, string>;
        static replMapDtsToEwts: java.util.Map<string, string>;
        static replMapDtsToEwts_$LI$(): java.util.Map<string, string>;
        static replMapEwtsToAlalc: java.util.Map<string, string>;
        static replMapEwtsToAlalc_$LI$(): java.util.Map<string, string>;
        static NFD: number;
        static NFC: number;
        static ALWAYS_ALALC: number;
        static NEVER_ALALC: number;
        static __static_initializer_0(): void;
        static addMapping(target: string, ewts: string, targetType: number, toAlalc: number): void;
        static init(): void;
        /**
         * Converts a string from DTS to EWTS
         *
         * @param {string} dtsString
         * the DTS encoded string
         * @return {string} EWTS string
         */
        static dtsToEwts(dtsString: string): string;
        /**
         * Converts a string from ALA-LC to EWTS
         *
         * @param {string} alalcStr
         * the ALA-LC encoded string
         * @return {string} EWTS string
         */
        static alalcToEwts(alalcStr: string): string;
        /**
         * Converts a string from EWTS to ALA-LC (NFKD, lower case)
         *
         * @param {string} ewtsStr
         * the EWTS encoded string
         * @param {boolean} sloppy
         * if common EWTS should be fixed before conversion
         * @return {string} ALA-LC encoded string
         */
        static ewtsToAlalc(ewtsStr: string, sloppy: boolean): string;
    }
}
export declare namespace myCandy {
    class StringUtils {
        static replaceEach(str: string, base: string[], repl: string[]): string;
        static strip(str1: string, str2: string): string;
    }
}
export declare namespace myCandy {
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
    class EwtsConverter {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        check: boolean;
        check_strict: boolean;
        print_warnings: boolean;
        fix_spacing: boolean;
        static m_consonant: java.util.HashMap<string, string>;
        static m_consonant_$LI$(): java.util.HashMap<string, string>;
        static m_subjoined: java.util.HashMap<string, string>;
        static m_subjoined_$LI$(): java.util.HashMap<string, string>;
        static m_vowel: java.util.HashMap<string, string>;
        static m_vowel_$LI$(): java.util.HashMap<string, string>;
        static m_final_uni: java.util.HashMap<string, string>;
        static m_final_uni_$LI$(): java.util.HashMap<string, string>;
        static m_final_class: java.util.HashMap<string, string>;
        static m_final_class_$LI$(): java.util.HashMap<string, string>;
        static m_other: java.util.HashMap<string, string>;
        static m_other_$LI$(): java.util.HashMap<string, string>;
        static m_ambiguous_wylie: java.util.HashMap<string, string>;
        static m_ambiguous_wylie_$LI$(): java.util.HashMap<string, string>;
        static m_tib_vowel_long: java.util.HashMap<string, string>;
        static m_tib_vowel_long_$LI$(): java.util.HashMap<string, string>;
        static m_tib_caret: java.util.HashMap<string, string>;
        static m_tib_caret_$LI$(): java.util.HashMap<string, string>;
        static m_tib_top: java.util.HashMap<string, string>;
        static m_tib_top_$LI$(): java.util.HashMap<string, string>;
        static m_tib_subjoined: java.util.HashMap<string, string>;
        static m_tib_subjoined_$LI$(): java.util.HashMap<string, string>;
        static m_tib_vowel: java.util.HashMap<string, string>;
        static m_tib_vowel_$LI$(): java.util.HashMap<string, string>;
        static m_tib_final_wylie: java.util.HashMap<string, string>;
        static m_tib_final_wylie_$LI$(): java.util.HashMap<string, string>;
        static m_tib_final_class: java.util.HashMap<string, string>;
        static m_tib_final_class_$LI$(): java.util.HashMap<string, string>;
        static m_tib_other: java.util.HashMap<string, string>;
        static m_tib_other_$LI$(): java.util.HashMap<string, string>;
        static m_ambiguous_key: java.util.HashMap<string, number>;
        static m_ambiguous_key_$LI$(): java.util.HashMap<string, number>;
        static m_tokens_start: java.util.HashMap<string, number>;
        static m_tokens_start_$LI$(): java.util.HashMap<string, number>;
        static m_special: java.util.HashSet<string>;
        static m_special_$LI$(): java.util.HashSet<string>;
        static m_suffixes: java.util.HashSet<string>;
        static m_suffixes_$LI$(): java.util.HashSet<string>;
        static m_tib_stacks: java.util.HashSet<string>;
        static m_tib_stacks_$LI$(): java.util.HashSet<string>;
        static m_tokens: java.util.HashSet<string>;
        static m_tokens_$LI$(): java.util.HashSet<string>;
        static m_affixedsuff2: java.util.HashSet<string>;
        static m_affixedsuff2_$LI$(): java.util.HashSet<string>;
        static m_superscripts: java.util.HashMap<string, java.util.HashSet<string>>;
        static m_superscripts_$LI$(): java.util.HashMap<string, java.util.HashSet<string>>;
        static m_subscripts: java.util.HashMap<string, java.util.HashSet<string>>;
        static m_subscripts_$LI$(): java.util.HashMap<string, java.util.HashSet<string>>;
        static m_prefixes: java.util.HashMap<string, java.util.HashSet<string>>;
        static m_prefixes_$LI$(): java.util.HashMap<string, java.util.HashSet<string>>;
        static m_suff2: java.util.HashMap<string, java.util.HashSet<string>>;
        static m_suff2_$LI$(): java.util.HashMap<string, java.util.HashSet<string>>;
        static base: string[];
        static base_$LI$(): string[];
        static repl: string[];
        static repl_$LI$(): string[];
        mode: EwtsConverter.Mode;
        static initHashes(): void;
        static initSloppyRepl(): void;
        static __static_initializer_0(): void;
        initWylie(check: boolean, check_strict: boolean, print_warnings: boolean, fix_spacing: boolean, mode: EwtsConverter.Mode): void;
        constructor(check?: any, check_strict?: any, print_warnings?: any, fix_spacing?: any, mode?: any);
        consonant(s: string): string;
        subjoined(s: string): string;
        vowel(s: string): string;
        final_uni(s: string): string;
        final_class(s: string): string;
        other(s: string): string;
        isSpecial(s: string): boolean;
        isSuperscript(s: string): boolean;
        superscript(sup: string, below: string): boolean;
        isSubscript(s: string): boolean;
        subscript(sub: string, above: string): boolean;
        isPrefix(s: string): boolean;
        prefix(pref: string, after: string): boolean;
        isSuffix(s: string): boolean;
        isSuff2(s: string): boolean;
        suff2(suff: string, before: string): boolean;
        ambiguous_key(syll: string): number;
        ambiguous_wylie(syll: string): string;
        tib_top(c: string): string;
        tib_subjoined(c: string): string;
        tib_vowel(c: string): string;
        tib_vowel_long(s: string): string;
        tib_final_wylie(c: string): string;
        tib_final_class(c: string): string;
        tib_caret(s: string): string;
        tib_other(c: string): string;
        tib_stack(s: string): boolean;
        splitIntoTokens(str: string): string[];
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
        static normalizeSloppyWylie(str: string): string;
        /**
         * Checks if a character is a Tibetan Unicode combining character.
         *
         * @param {string} x
         * the character to check
         * @return {boolean} true if x is a Tibetan Unicode combining character
         */
        static isCombining(x: string): boolean;
        toUnicode$java_lang_String(str: string): string;
        toUnicode$java_lang_String$java_util_List$boolean(str: string, warns: java.util.List<string>, sloppy: boolean): string;
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
        toUnicode(str?: any, warns?: any, sloppy?: any): any;
        validHex(t: string): boolean;
        unicodeEscape(warns: java.util.List<string>, line: number, t: string): string;
        warn(warns: java.util.List<string>, str: string): void;
        warnl(warns: java.util.List<string>, line: number, str: string): void;
        debug(str: string): void;
        debugvar(o: any, name: string): void;
        joinStrings(a: java.util.List<string>, sep: string): string;
        toUnicodeOneStack(tokens: string[], i: number): EwtsConverter.WylieStack;
        toUnicodeOneTsekbar(tokens: string[], i: number): EwtsConverter.WylieTsekbar;
        consonantString(tokens: string[], i: number): string;
        consonantStringBackwards(tokens: string[], i: number, orig_i: number): string;
        toWylie$java_lang_String(str: string): string;
        toWylie$java_lang_String$java_util_List$boolean(str: string, warns: java.util.List<string>, escape: boolean): string;
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
        toWylie(str?: any, warns?: any, escape?: any): any;
        formatHex(t: string): string;
        handleSpaces(str: string, i: number, out: java.lang.StringBuilder): number;
        followedByNonTibetan(str: string, i: number): boolean;
        toWylieOneTsekbar(str: string, len: number, i: number): EwtsConverter.ToWylieTsekbar;
        toWylieOneStack(str: string, len: number, i: number): EwtsConverter.ToWylieStack;
        putStackTogether(st: EwtsConverter.ToWylieStack): string;
    }
    namespace EwtsConverter {
        enum Mode {
            WYLIE = 0,
            EWTS = 1,
            DWTS = 2,
            DTS = 3,
            ALALC = 4,
            ACIP = 5
        }
        enum State {
            PREFIX = 0,
            MAIN = 1,
            SUFF1 = 2,
            SUFF2 = 3,
            NONE = 4
        }
        class WylieStack {
            uni_string: string;
            tokens_used: number;
            single_consonant: string;
            single_cons_a: string;
            warns: java.util.ArrayList<string>;
            visarga: boolean;
            constructor();
        }
        class WylieTsekbar {
            uni_string: string;
            tokens_used: number;
            warns: java.util.ArrayList<string>;
            constructor();
        }
        class ToWylieStack {
            top: string;
            stack: java.util.LinkedList<string>;
            caret: boolean;
            vowels: java.util.LinkedList<string>;
            finals: java.util.ArrayList<string>;
            finals_found: java.util.HashMap<string, string>;
            visarga: boolean;
            cons_str: string;
            single_cons: string;
            prefix: boolean;
            suffix: boolean;
            suff2: boolean;
            dot: boolean;
            tokens_used: number;
            warns: java.util.ArrayList<string>;
            constructor();
        }
        class ToWylieTsekbar {
            wylie: string;
            tokens_used: number;
            warns: java.util.ArrayList<string>;
            constructor();
        }
    }
}
