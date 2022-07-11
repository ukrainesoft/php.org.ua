- [« idn_to_utf8](function.idn-to-utf8.md)
- [IntlChar::charAge »](intlchar.charage.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- IntlChar

# IntlChar

(PHP 7, PHP 8)

## Вступ

**IntlChar** надає доступ до деякої кількості утилітарних
методи, які можна використовувати для доступу до інформації про символи
Unicode.

Імена методів та констант, представлені тут, близькі до імен та
методів бібліотеки ICU, що лежить нижче.

## Огляд класів

class **IntlChar** {

/\* Constants \*/

const string `UNICODE_VERSION` u003d 6.3;

const int `CODEPOINT_MIN` u003d 0;

const int `CODEPOINT_MAX` u003d 1114111;

const float `NO_NUMERIC_VALUE` u003d -123456789;

const int `PROPERTY_ALPHABETIC` u003d 0;

const int `PROPERTY_BINARY_START` u003d 0;

const int `PROPERTY_ASCII_HEX_DIGIT` u003d 1;

const int `PROPERTY_BIDI_CONTROL` u003d 2;

const int `PROPERTY_BIDI_MIRRORED` u003d 3;

const int `PROPERTY_DASH` u003d 4;

const int `PROPERTY_DEFAULT_IGNORABLE_CODE_POINT` u003d 5;

const int `PROPERTY_DEPRECATED` u003d 6;

const int `PROPERTY_DIACRITIC` u003d 7;

const int `PROPERTY_EXTENDER` u003d 8;

const int `PROPERTY_FULL_COMPOSITION_EXCLUSION` u003d 9;

const int `PROPERTY_GRAPHEME_BASE` u003d 10;

const int `PROPERTY_GRAPHEME_EXTEND` u003d 11;

const int `PROPERTY_GRAPHEME_LINK` u003d 12;

const int `PROPERTY_HEX_DIGIT` u003d 13;

const int `PROPERTY_HYPHEN` u003d 14;

const int `PROPERTY_ID_CONTINUE` u003d 15;

const int `PROPERTY_ID_START` u003d 16;

const int `PROPERTY_IDEOGRAPHIC` u003d 17;

const int `PROPERTY_IDS_BINARY_OPERATOR` u003d 18;

const int `PROPERTY_IDS_TRINARY_OPERATOR` u003d 19;

const int `PROPERTY_JOIN_CONTROL` u003d 20;

const int `PROPERTY_LOGICAL_ORDER_EXCEPTION` u003d 21;

const int `PROPERTY_LOWERCASE` u003d 22;

const int `PROPERTY_MATH` u003d 23;

const int `PROPERTY_NONCHARACTER_CODE_POINT` u003d 24;

const int `PROPERTY_QUOTATION_MARK` u003d 25;

const int `PROPERTY_RADICAL` u003d 26;

const int `PROPERTY_SOFT_DOTTED` u003d 27;

const int `PROPERTY_TERMINAL_PUNCTUATION` u003d 28;

const int `PROPERTY_UNIFIED_IDEOGRAPH` u003d 29;

const int `PROPERTY_UPPERCASE` u003d 30;

const int `PROPERTY_WHITE_SPACE` u003d 31;

const int `PROPERTY_XID_CONTINUE` u003d 32;

const int `PROPERTY_XID_START` u003d 33;

const int `PROPERTY_CASE_SENSITIVE` u003d 34;

const int `PROPERTY_S_TERM` u003d 35;

const int `PROPERTY_VARIATION_SELECTOR` u003d 36;

const int `PROPERTY_NFD_INERT` u003d 37;

const int `PROPERTY_NFKD_INERT` u003d 38;

const int `PROPERTY_NFC_INERT` u003d 39;

const int `PROPERTY_NFKC_INERT` u003d 40;

const int `PROPERTY_SEGMENT_STARTER` u003d 41;

const int `PROPERTY_PATTERN_SYNTAX` u003d 42;

const int `PROPERTY_PATTERN_WHITE_SPACE` u003d 43;

const int `PROPERTY_POSIX_ALNUM` u003d 44;

const int `PROPERTY_POSIX_BLANK` u003d 45;

const int `PROPERTY_POSIX_GRAPH` u003d 46;

const int `PROPERTY_POSIX_PRINT` u003d 47;

const int `PROPERTY_POSIX_XDIGIT` u003d 48;

const int `PROPERTY_CASED` u003d 49;

const int `PROPERTY_CASE_IGNORABLE` u003d 50;

const int `PROPERTY_CHANGES_WHEN_LOWERCASED` u003d 51;

const int `PROPERTY_CHANGES_WHEN_UPPERCASED` u003d 52;

const int `PROPERTY_CHANGES_WHEN_TITLECASED` u003d 53;

const int `PROPERTY_CHANGES_WHEN_CASEFOLDED` u003d 54;

const int `PROPERTY_CHANGES_WHEN_CASEMAPPED` u003d 55;

const int `PROPERTY_CHANGES_WHEN_NFKC_CASEFOLDED` u003d 56;

const int `PROPERTY_BINARY_LIMIT` u003d 57;

const int `PROPERTY_BIDI_CLASS` u003d 4096;

const int `PROPERTY_INT_START` u003d 4096;

const int `PROPERTY_BLOCK` u003d 4097;

const int `PROPERTY_CANONICAL_COMBINING_CLASS` u003d 4098;

const int `PROPERTY_DECOMPOSITION_TYPE` u003d 4099;

const int `PROPERTY_EAST_ASIAN_WIDTH` u003d 4100;

const int `PROPERTY_GENERAL_CATEGORY` u003d 4101;

const int `PROPERTY_JOINING_GROUP` u003d 4102;

const int `PROPERTY_JOINING_TYPE` u003d 4103;

const int `PROPERTY_LINE_BREAK` u003d 4104;

const int `PROPERTY_NUMERIC_TYPE` u003d 4105;

const int `PROPERTY_SCRIPT` u003d 4106;

const int `PROPERTY_HANGUL_SYLLABLE_TYPE` u003d 4107;

const int `PROPERTY_NFD_QUICK_CHECK` u003d 4108;

const int `PROPERTY_NFKD_QUICK_CHECK` u003d 4109;

const int `PROPERTY_NFC_QUICK_CHECK` u003d 4110;

const int `PROPERTY_NFKC_QUICK_CHECK` u003d 4111;

const int `PROPERTY_LEAD_CANONICAL_COMBINING_CLASS` u003d 4112;

const int `PROPERTY_TRAIL_CANONICAL_COMBINING_CLASS` u003d 4113;

const int `PROPERTY_GRAPHEME_CLUSTER_BREAK` u003d 4114;

const int `PROPERTY_SENTENCE_BREAK` u003d 4115;

const int `PROPERTY_WORD_BREAK` u003d 4116;

const int `PROPERTY_BIDI_PAIRED_BRACKET_TYPE` u003d 4117;

const int `PROPERTY_INT_LIMIT` u003d 4118;

const int `PROPERTY_GENERAL_CATEGORY_MASK` u003d 8192;

const int `PROPERTY_MASK_START` u003d 8192;

const int `PROPERTY_MASK_LIMIT` u003d 8193;

const int `PROPERTY_NUMERIC_VALUE` u003d 12288;

const int `PROPERTY_DOUBLE_START` u003d 12288;

const int `PROPERTY_DOUBLE_LIMIT` u003d 12289;

const int `PROPERTY_AGE` u003d 16384;

const int `PROPERTY_STRING_START` u003d 16384;

const int `PROPERTY_BIDI_MIRRORING_GLYPH` u003d 16385;

const int `PROPERTY_CASE_FOLDING` u003d 16386;

const int `PROPERTY_ISO_COMMENT` u003d 16387;

const int `PROPERTY_LOWERCASE_MAPPING` u003d 16388;

const int `PROPERTY_NAME` u003d 16389;

const int `PROPERTY_SIMPLE_CASE_FOLDING` u003d 16390;

const int `PROPERTY_SIMPLE_LOWERCASE_MAPPING` u003d 16391;

const int `PROPERTY_SIMPLE_TITLECASE_MAPPING` u003d 16392;

const int `PROPERTY_SIMPLE_UPPERCASE_MAPPING` u003d 16393;

const int `PROPERTY_TITLECASE_MAPPING` u003d 16394;

const int `PROPERTY_UNICODE_1_NAME` u003d 16395;

const int `PROPERTY_UPPERCASE_MAPPING` u003d 16396;

const int `PROPERTY_BIDI_PAIRED_BRACKET` u003d 16397;

const int `PROPERTY_STRING_LIMIT` u003d 16398;

const int `PROPERTY_SCRIPT_EXTENSIONS` u003d 28672;

const int `PROPERTY_OTHER_PROPERTY_START` u003d 28672;

const int `PROPERTY_OTHER_PROPERTY_LIMIT` u003d 28673;

const int `PROPERTY_INVALID_CODE` u003d -1;

const int `CHAR_CATEGORY_UNASSIGNED` u003d 0;

const int `CHAR_CATEGORY_GENERAL_OTHER_TYPES` u003d 0;

const int `CHAR_CATEGORY_UPPERCASE_LETTER` u003d 1;

const int `CHAR_CATEGORY_LOWERCASE_LETTER` u003d 2;

const int `CHAR_CATEGORY_TITLECASE_LETTER` u003d 3;

const int `CHAR_CATEGORY_MODIFIER_LETTER` u003d 4;

const int `CHAR_CATEGORY_OTHER_LETTER` u003d 5;

const int `CHAR_CATEGORY_NON_SPACING_MARK` u003d 6;

const int `CHAR_CATEGORY_ENCLOSING_MARK` u003d 7;

const int `CHAR_CATEGORY_COMBINING_SPACING_MARK` u003d 8;

const int `CHAR_CATEGORY_DECIMAL_DIGIT_NUMBER` u003d 9;

const int `CHAR_CATEGORY_LETTER_NUMBER` u003d 10;

const int `CHAR_CATEGORY_OTHER_NUMBER` u003d 11;

const int `CHAR_CATEGORY_SPACE_SEPARATOR` u003d 12;

const int `CHAR_CATEGORY_LINE_SEPARATOR` u003d 13;

const int `CHAR_CATEGORY_PARAGRAPH_SEPARATOR` u003d 14;

const int `CHAR_CATEGORY_CONTROL_CHAR` u003d 15;

const int `CHAR_CATEGORY_FORMAT_CHAR` u003d 16;

const int `CHAR_CATEGORY_PRIVATE_USE_CHAR` u003d 17;

const int `CHAR_CATEGORY_SURROGATE` u003d 18;

const int `CHAR_CATEGORY_DASH_PUNCTUATION` u003d 19;

const int `CHAR_CATEGORY_START_PUNCTUATION` u003d 20;

const int `CHAR_CATEGORY_END_PUNCTUATION` u003d 21;

const int `CHAR_CATEGORY_CONNECTOR_PUNCTUATION` u003d 22;

const int `CHAR_CATEGORY_OTHER_PUNCTUATION` u003d 23;

const int `CHAR_CATEGORY_MATH_SYMBOL` u003d 24;

const int `CHAR_CATEGORY_CURRENCY_SYMBOL` u003d 25;

const int `CHAR_CATEGORY_MODIFIER_SYMBOL` u003d 26;

const int `CHAR_CATEGORY_OTHER_SYMBOL` u003d 27;

const int `CHAR_CATEGORY_INITIAL_PUNCTUATION` u003d 28;

const int `CHAR_CATEGORY_FINAL_PUNCTUATION` u003d 29;

const int `CHAR_CATEGORY_CHAR_CATEGORY_COUNT` u003d 30;

const int `CHAR_DIRECTION_LEFT_TO_RIGHT` u003d 0;

const int `CHAR_DIRECTION_RIGHT_TO_LEFT` u003d 1;

const int `CHAR_DIRECTION_EUROPEAN_NUMBER` u003d 2;

const int `CHAR_DIRECTION_EUROPEAN_NUMBER_SEPARATOR` u003d 3;

const int `CHAR_DIRECTION_EUROPEAN_NUMBER_TERMINATOR` u003d 4;

const int `CHAR_DIRECTION_ARABIC_NUMBER` u003d 5;

const int `CHAR_DIRECTION_COMMON_NUMBER_SEPARATOR` u003d 6;

const int `CHAR_DIRECTION_BLOCK_SEPARATOR` u003d 7;

const int `CHAR_DIRECTION_SEGMENT_SEPARATOR` u003d 8;

const int `CHAR_DIRECTION_WHITE_SPACE_NEUTRAL` u003d 9;

const int `CHAR_DIRECTION_OTHER_NEUTRAL` u003d 10;

const int `CHAR_DIRECTION_LEFT_TO_RIGHT_EMBEDDING` u003d 11;

const int `CHAR_DIRECTION_LEFT_TO_RIGHT_OVERRIDE` u003d 12;

const int `CHAR_DIRECTION_RIGHT_TO_LEFT_ARABIC` u003d 13;

const int `CHAR_DIRECTION_RIGHT_TO_LEFT_EMBEDDING` u003d 14;

const int `CHAR_DIRECTION_RIGHT_TO_LEFT_OVERRIDE` u003d 15;

const int `CHAR_DIRECTION_POP_DIRECTIONAL_FORMAT` u003d 16;

const int `CHAR_DIRECTION_DIR_NON_SPACING_MARK` u003d 17;

const int `CHAR_DIRECTION_BOUNDARY_NEUTRAL` u003d 18;

const int `CHAR_DIRECTION_FIRST_STRONG_ISOLATE` u003d 19;

const int `CHAR_DIRECTION_LEFT_TO_RIGHT_ISOLATE` u003d 20;

const int `CHAR_DIRECTION_RIGHT_TO_LEFT_ISOLATE` u003d 21;

const int `CHAR_DIRECTION_POP_DIRECTIONAL_ISOLATE` u003d 22;

const int `CHAR_DIRECTION_CHAR_DIRECTION_COUNT` u003d 23;

const int `BLOCK_CODE_NO_BLOCK` u003d 0;

const int `BLOCK_CODE_BASIC_LATIN` u003d 1;

const int `BLOCK_CODE_LATIN_1_SUPPLEMENT` u003d 2;

const int `BLOCK_CODE_LATIN_EXTENDED_A` u003d 3;

const int `BLOCK_CODE_LATIN_EXTENDED_B` u003d 4;

const int `BLOCK_CODE_IPA_EXTENSIONS` u003d 5;

const int `BLOCK_CODE_SPACING_MODIFIER_LETTERS` u003d 6;

const int `BLOCK_CODE_COMBINING_DIACRITICAL_MARKS` u003d 7;

const int `BLOCK_CODE_GREEK` u003d 8;

const int `BLOCK_CODE_CYRILLIC` u003d 9;

const int `BLOCK_CODE_ARMENIAN` u003d 10;

const int `BLOCK_CODE_HEBREW` u003d 11;

const int `BLOCK_CODE_ARABIC` u003d 12;

const int `BLOCK_CODE_SYRIAC` u003d 13;

const int `BLOCK_CODE_THAANA` u003d 14;

const int `BLOCK_CODE_DEVANAGARI` u003d 15;

const int `BLOCK_CODE_BENGALI` u003d 16;

const int `BLOCK_CODE_GURMUKHI` u003d 17;

const int `BLOCK_CODE_GUJARATI` u003d 18;

const int `BLOCK_CODE_ORIYA` u003d 19;

const int `BLOCK_CODE_TAMIL` u003d 20;

const int `BLOCK_CODE_TELUGU` u003d 21;

const int `BLOCK_CODE_KANNADA` u003d 22;

const int `BLOCK_CODE_MALAYALAM` u003d 23;

const int `BLOCK_CODE_SINHALA` u003d 24;

const int `BLOCK_CODE_THAI` u003d 25;

const int `BLOCK_CODE_LAO` u003d 26;

const int `BLOCK_CODE_TIBETAN` u003d 27;

const int `BLOCK_CODE_MYANMAR` u003d 28;

const int `BLOCK_CODE_GEORGIAN` u003d 29;

const int `BLOCK_CODE_HANGUL_JAMO` u003d 30;

const int `BLOCK_CODE_ETHIOPIC` u003d 31;

const int `BLOCK_CODE_CHEROKEE` u003d 32;

const int `BLOCK_CODE_UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS` u003d 33;

const int `BLOCK_CODE_OGHAM` u003d 34;

const int `BLOCK_CODE_RUNIC` u003d 35;

const int `BLOCK_CODE_KHMER` u003d 36;

const int `BLOCK_CODE_MONGOLIAN` u003d 37;

const int `BLOCK_CODE_LATIN_EXTENDED_ADDITIONAL` u003d 38;

const int `BLOCK_CODE_GREEK_EXTENDED` u003d 39;

const int `BLOCK_CODE_GENERAL_PUNCTUATION` u003d 40;

const int `BLOCK_CODE_SUPERSCRIPTS_AND_SUBSCRIPTS` u003d 41;

const int `BLOCK_CODE_CURRENCY_SYMBOLS` u003d 42;

const int `BLOCK_CODE_COMBINING_MARKS_FOR_SYMBOLS` u003d 43;

const int `BLOCK_CODE_LETTERLIKE_SYMBOLS` u003d 44;

const int `BLOCK_CODE_NUMBER_FORMS` u003d 45;

const int `BLOCK_CODE_ARROWS` u003d 46;

const int `BLOCK_CODE_MATHEMATICAL_OPERATORS` u003d 47;

const int `BLOCK_CODE_MISCELLANEOUS_TECHNICAL` u003d 48;

const int `BLOCK_CODE_CONTROL_PICTURES` u003d 49;

const int `BLOCK_CODE_OPTICAL_CHARACTER_RECOGNITION` u003d 50;

const int `BLOCK_CODE_ENCLOSED_ALPHANUMERICS` u003d 51;

const int `BLOCK_CODE_BOX_DRAWING` u003d 52;

const int `BLOCK_CODE_BLOCK_ELEMENTS` u003d 53;

const int `BLOCK_CODE_GEOMETRIC_SHAPES` u003d 54;

const int `BLOCK_CODE_MISCELLANEOUS_SYMBOLS` u003d 55;

const int `BLOCK_CODE_DINGBATS` u003d 56;

const int `BLOCK_CODE_BRAILLE_PATTERNS` u003d 57;

const int `BLOCK_CODE_CJK_RADICALS_SUPPLEMENT` u003d 58;

const int `BLOCK_CODE_KANGXI_RADICALS` u003d 59;

const int `BLOCK_CODE_IDEOGRAPHIC_DESCRIPTION_CHARACTERS` u003d 60;

const int `BLOCK_CODE_CJK_SYMBOLS_AND_PUNCTUATION` u003d 61;

const int `BLOCK_CODE_HIRAGANA` u003d 62;

const int `BLOCK_CODE_KATAKANA` u003d 63;

const int `BLOCK_CODE_BOPOMOFO` u003d 64;

const int `BLOCK_CODE_HANGUL_COMPATIBILITY_JAMO` u003d 65;

const int `BLOCK_CODE_KANBUN` u003d 66;

const int `BLOCK_CODE_BOPOMOFO_EXTENDED` u003d 67;

const int `BLOCK_CODE_ENCLOSED_CJK_LETTERS_AND_MONTHS` u003d 68;

const int `BLOCK_CODE_CJK_COMPATIBILITY` u003d 69;

const int `BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A` u003d 70;

const int `BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS` u003d 71;

const int `BLOCK_CODE_YI_SYLLABLES` u003d 72;

const int `BLOCK_CODE_YI_RADICALS` u003d 73;

const int `BLOCK_CODE_HANGUL_SYLLABLES` u003d 74;

const int `BLOCK_CODE_HIGH_SURROGATES` u003d 75;

const int `BLOCK_CODE_HIGH_PRIVATE_USE_SURROGATES` u003d 76;

const int `BLOCK_CODE_LOW_SURROGATES` u003d 77;

const int `BLOCK_CODE_PRIVATE_USE_AREA` u003d 78;

const int `BLOCK_CODE_PRIVATE_USE` u003d 78;

const int `BLOCK_CODE_CJK_COMPATIBILITY_IDEOGRAPHS` u003d 79;

const int `BLOCK_CODE_ALPHABETIC_PRESENTATION_FORMS` u003d 80;

const int `BLOCK_CODE_ARABIC_PRESENTATION_FORMS_A` u003d 81;

const int `BLOCK_CODE_COMBINING_HALF_MARKS` u003d 82;

const int `BLOCK_CODE_CJK_COMPATIBILITY_FORMS` u003d 83;

const int `BLOCK_CODE_SMALL_FORM_VARIANTS` u003d 84;

const int `BLOCK_CODE_ARABIC_PRESENTATION_FORMS_B` u003d 85;

const int `BLOCK_CODE_SPECIALS` u003d 86;

const int `BLOCK_CODE_HALFWIDTH_AND_FULLWIDTH_FORMS` u003d 87;

const int `BLOCK_CODE_OLD_ITALIC` u003d 88;

const int `BLOCK_CODE_GOTHIC` u003d 89;

const int `BLOCK_CODE_DESERET` u003d 90;

const int `BLOCK_CODE_BYZANTINE_MUSICAL_SYMBOLS` u003d 91;

const int `BLOCK_CODE_MUSICAL_SYMBOLS` u003d 92;

const int `BLOCK_CODE_MATHEMATICAL_ALPHANUMERIC_SYMBOLS` u003d 93;

const int `BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B` u003d 94;

const int `BLOCK_CODE_CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT` u003d 95;

const int `BLOCK_CODE_TAGS` u003d 96;

const int `BLOCK_CODE_CYRILLIC_SUPPLEMENT` u003d 97;

const int `BLOCK_CODE_CYRILLIC_SUPPLEMENTARY` u003d 97;

const int `BLOCK_CODE_TAGALOG` u003d 98;

const int `BLOCK_CODE_HANUNOO` u003d 99;

const int `BLOCK_CODE_BUHID` u003d 100;

const int `BLOCK_CODE_TAGBANWA` u003d 101;

const int `BLOCK_CODE_MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A` u003d 102;

const int `BLOCK_CODE_SUPPLEMENTAL_ARROWS_A` u003d 103;

const int `BLOCK_CODE_SUPPLEMENTAL_ARROWS_B` u003d 104;

const int `BLOCK_CODE_MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B` u003d 105;

const int `BLOCK_CODE_SUPPLEMENTAL_MATHEMATICAL_OPERATORS` u003d 106;

const int `BLOCK_CODE_KATAKANA_PHONETIC_EXTENSIONS` u003d 107;

const int `BLOCK_CODE_VARIATION_SELECTORS` u003d 108;

const int `BLOCK_CODE_SUPPLEMENTARY_PRIVATE_USE_AREA_A` u003d 109;

const int `BLOCK_CODE_SUPPLEMENTARY_PRIVATE_USE_AREA_B` u003d 110;

const int `BLOCK_CODE_LIMBU` u003d 111;

const int `BLOCK_CODE_TAI_LE` u003d 112;

const int `BLOCK_CODE_KHMER_SYMBOLS` u003d 113;

const int `BLOCK_CODE_PHONETIC_EXTENSIONS` u003d 114;

const int `BLOCK_CODE_MISCELLANEOUS_SYMBOLS_AND_ARROWS` u003d 115;

const int `BLOCK_CODE_YIJING_HEXAGRAM_SYMBOLS` u003d 116;

const int `BLOCK_CODE_LINEAR_B_SYLLABARY` u003d 117;

const int `BLOCK_CODE_LINEAR_B_IDEOGRAMS` u003d 118;

const int `BLOCK_CODE_AEGEAN_NUMBERS` u003d 119;

const int `BLOCK_CODE_UGARITIC` u003d 120;

const int `BLOCK_CODE_SHAVIAN` u003d 121;

const int `BLOCK_CODE_OSMANYA` u003d 122;

const int `BLOCK_CODE_CYPRIOT_SYLLABARY` u003d 123;

const int `BLOCK_CODE_TAI_XUAN_JING_SYMBOLS` u003d 124;

const int `BLOCK_CODE_VARIATION_SELECTORS_SUPPLEMENT` u003d 125;

const int `BLOCK_CODE_ANCIENT_GREEK_MUSICAL_NOTATION` u003d 126;

const int `BLOCK_CODE_ANCIENT_GREEK_NUMBERS` u003d 127;

const int `BLOCK_CODE_ARABIC_SUPPLEMENT` u003d 128;

const int `BLOCK_CODE_BUGINESE` u003d 129;

const int `BLOCK_CODE_CJK_STROKES` u003d 130;

const int `BLOCK_CODE_COMBINING_DIACRITICAL_MARKS_SUPPLEMENT` u003d 131;

const int `BLOCK_CODE_COPTIC` u003d 132;

const int `BLOCK_CODE_ETHIOPIC_EXTENDED` u003d 133;

const int `BLOCK_CODE_ETHIOPIC_SUPPLEMENT` u003d 134;

const int `BLOCK_CODE_GEORGIAN_SUPPLEMENT` u003d 135;

const int `BLOCK_CODE_GLAGOLITIC` u003d 136;

const int `BLOCK_CODE_KHAROSHTHI` u003d 137;

const int `BLOCK_CODE_MODIFIER_TONE_LETTERS` u003d 138;

const int `BLOCK_CODE_NEW_TAI_LUE` u003d 139;

const int `BLOCK_CODE_OLD_PERSIAN` u003d 140;

const int `BLOCK_CODE_PHONETIC_EXTENSIONS_SUPPLEMENT` u003d 141;

const int `BLOCK_CODE_SUPPLEMENTAL_PUNCTUATION` u003d 142;

const int `BLOCK_CODE_SYLOTI_NAGRI` u003d 143;

const int `BLOCK_CODE_TIFINAGH` u003d 144;

const int `BLOCK_CODE_VERTICAL_FORMS` u003d 145;

const int `BLOCK_CODE_NKO` u003d 146;

const int `BLOCK_CODE_BALINESE` u003d 147;

const int `BLOCK_CODE_LATIN_EXTENDED_C` u003d 148;

const int `BLOCK_CODE_LATIN_EXTENDED_D` u003d 149;

const int `BLOCK_CODE_PHAGS_PA` u003d 150;

const int `BLOCK_CODE_PHOENICIAN` u003d 151;

const int `BLOCK_CODE_CUNEIFORM` u003d 152;

const int `BLOCK_CODE_CUNEIFORM_NUMBERS_AND_PUNCTUATION` u003d 153;

const int `BLOCK_CODE_COUNTING_ROD_NUMERALS` u003d 154;

const int `BLOCK_CODE_SUNDANESE` u003d 155;

const int `BLOCK_CODE_LEPCHA` u003d 156;

const int `BLOCK_CODE_OL_CHIKI` u003d 157;

const int `BLOCK_CODE_CYRILLIC_EXTENDED_A` u003d 158;

const int `BLOCK_CODE_VAI` u003d 159;

const int `BLOCK_CODE_CYRILLIC_EXTENDED_B` u003d 160;

const int `BLOCK_CODE_SAURASHTRA` u003d 161;

const int `BLOCK_CODE_KAYAH_LI` u003d 162;

const int `BLOCK_CODE_REJANG` u003d 163;

const int `BLOCK_CODE_CHAM` u003d 164;

const int `BLOCK_CODE_ANCIENT_SYMBOLS` u003d 165;

const int `BLOCK_CODE_PHAISTOS_DISC` u003d 166;

const int `BLOCK_CODE_LYCIAN` u003d 167;

const int `BLOCK_CODE_CARIAN` u003d 168;

const int `BLOCK_CODE_LYDIAN` u003d 169;

const int `BLOCK_CODE_MAHJONG_TILES` u003d 170;

const int `BLOCK_CODE_DOMINO_TILES` u003d 171;

const int `BLOCK_CODE_SAMARITAN` u003d 172;

const int `BLOCK_CODE_UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED` u003d
173;

const int `BLOCK_CODE_TAI_THAM` u003d 174;

const int `BLOCK_CODE_VEDIC_EXTENSIONS` u003d 175;

const int `BLOCK_CODE_LISU` u003d 176;

const int `BLOCK_CODE_BAMUM` u003d 177;

const int `BLOCK_CODE_COMMON_INDIC_NUMBER_FORMS` u003d 178;

const int `BLOCK_CODE_DEVANAGARI_EXTENDED` u003d 179;

const int `BLOCK_CODE_HANGUL_JAMO_EXTENDED_A` u003d 180;

const int `BLOCK_CODE_JAVANESE` u003d 181;

const int `BLOCK_CODE_MYANMAR_EXTENDED_A` u003d 182;

const int `BLOCK_CODE_TAI_VIET` u003d 183;

const int `BLOCK_CODE_MEETEI_MAYEK` u003d 184;

const int `BLOCK_CODE_HANGUL_JAMO_EXTENDED_B` u003d 185;

const int `BLOCK_CODE_IMPERIAL_ARAMAIC` u003d 186;

const int `BLOCK_CODE_OLD_SOUTH_ARABIAN` u003d 187;

const int `BLOCK_CODE_AVESTAN` u003d 188;

const int `BLOCK_CODE_INSCRIPTIONAL_PARTHIAN` u003d 189;

const int `BLOCK_CODE_INSCRIPTIONAL_PAHLAVI` u003d 190;

const int `BLOCK_CODE_OLD_TURKIC` u003d 191;

const int `BLOCK_CODE_RUMI_NUMERAL_SYMBOLS` u003d 192;

const int `BLOCK_CODE_KAITHI` u003d 193;

const int `BLOCK_CODE_EGYPTIAN_HIEROGLYPHS` u003d 194;

const int `BLOCK_CODE_ENCLOSED_ALPHANUMERIC_SUPPLEMENT` u003d 195;

const int `BLOCK_CODE_ENCLOSED_IDEOGRAPHIC_SUPPLEMENT` u003d 196;

const int `BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C` u003d 197;

const int `BLOCK_CODE_MANDAIC` u003d 198;

const int `BLOCK_CODE_BATAK` u003d 199;

const int `BLOCK_CODE_ETHIOPIC_EXTENDED_A` u003d 200;

const int `BLOCK_CODE_BRAHMI` u003d 201;

const int `BLOCK_CODE_BAMUM_SUPPLEMENT` u003d 202;

const int `BLOCK_CODE_KANA_SUPPLEMENT` u003d 203;

const int `BLOCK_CODE_PLAYING_CARDS` u003d 204;

const int `BLOCK_CODE_MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS` u003d 205;

const int `BLOCK_CODE_EMOTICONS` u003d 206;

const int `BLOCK_CODE_TRANSPORT_AND_MAP_SYMBOLS` u003d 207;

const int `BLOCK_CODE_ALCHEMICAL_SYMBOLS` u003d 208;

const int `BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D` u003d 209;

const int `BLOCK_CODE_ARABIC_EXTENDED_A` u003d 210;

const int `BLOCK_CODE_ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS` u003d 211;

const int `BLOCK_CODE_CHAKMA` u003d 212;

const int `BLOCK_CODE_MEETEI_MAYEK_EXTENSIONS` u003d 213;

const int `BLOCK_CODE_MEROITIC_CURSIVE` u003d 214;

const int `BLOCK_CODE_MEROITIC_HIEROGLYPHS` u003d 215;

const int `BLOCK_CODE_MIAO` u003d 216;

const int `BLOCK_CODE_SHARADA` u003d 217;

const int `BLOCK_CODE_SORA_SOMPENG` u003d 218;

const int `BLOCK_CODE_SUNDANESE_SUPPLEMENT` u003d 219;

const int `BLOCK_CODE_TAKRI` u003d 220;

const int `BLOCK_CODE_COUNT` u003d 221;

const int `BLOCK_CODE_INVALID_CODE` u003d -1;

const int `BPT_NONE` u003d 0;

const int `BPT_OPEN` u003d 1;

const int `BPT_CLOSE` u003d 2;

const int `BPT_COUNT` u003d 3;

const int `EA_NEUTRAL` u003d 0;

const int `EA_AMBIGUOUS` u003d 1;

const int `EA_HALFWIDTH` u003d 2;

const int `EA_FULLWIDTH` u003d 3;

const int `EA_NARROW` u003d 4;

const int `EA_WIDE` u003d 5;

const int `EA_COUNT` u003d 6;

const int `UNICODE_CHAR_NAME` u003d 0;

const int `UNICODE_10_CHAR_NAME` u003d 1;

const int `EXTENDED_CHAR_NAME` u003d 2;

const int `CHAR_NAME_ALIAS` u003d 3;

const int `CHAR_NAME_CHOICE_COUNT` u003d 4;

const int `SHORT_PROPERTY_NAME` u003d 0;

const int `LONG_PROPERTY_NAME` u003d 1;

const int `PROPERTY_NAME_CHOICE_COUNT` u003d 2;

const int `DT_NONE` u003d 0;

const int `DT_CANONICAL` u003d 1;

const int `DT_COMPAT` u003d 2;

const int `DT_CIRCLE` u003d 3;

const int `DT_FINAL` u003d 4;

const int `DT_FONT` u003d 5;

const int `DT_FRACTION` u003d 6;

const int `DT_INITIAL` u003d 7;

const int `DT_ISOLATED` u003d 8;

const int `DT_MEDIAL` u003d 9;

const int `DT_NARROW` u003d 10;

const int `DT_NOBREAK` u003d 11;

const int `DT_SMALL` u003d 12;

const int `DT_SQUARE` u003d 13;

const int `DT_SUB` u003d 14;

const int `DT_SUPER` u003d 15;

const int `DT_VERTICAL` u003d 16;

const int `DT_WIDE` u003d 17;

const int `DT_COUNT` u003d 18;

const int `JT_NON_JOINING` u003d 0;

const int `JT_JOIN_CAUSING` u003d 1;

const int `JT_DUAL_JOINING` u003d 2;

const int `JT_LEFT_JOINING` u003d 3;

const int `JT_RIGHT_JOINING` u003d 4;

const int `JT_TRANSPARENT` u003d 5;

const int `JT_COUNT` u003d 6;

const int `JG_NO_JOINING_GROUP` u003d 0;

const int `JG_AIN` u003d 1;

const int `JG_ALAPH` u003d 2;

const int `JG_ALEF` u003d 3;

const int `JG_BEH` u003d 4;

const int `JG_BETH` u003d 5;

const int `JG_DAL` u003d 6;

const int `JG_DALATH_RISH` u003d 7;

const int `JG_E` u003d 8;

const int `JG_FEH` u003d 9;

const int `JG_FINAL_SEMKATH` u003d 10;

const int `JG_GAF` u003d 11;

const int `JG_GAMAL` u003d 12;

const int `JG_HAH` u003d 13;

const int `JG_TEH_MARBUTA_GOAL` u003d 14;

const int `JG_HAMZA_ON_HEH_GOAL` u003d 14;

const int `JG_HE` u003d 15;

const int `JG_HEH` u003d 16;

const int `JG_HEH_GOAL` u003d 17;

const int `JG_HETH` u003d 18;

const int `JG_KAF` u003d 19;

const int `JG_KAPH` u003d 20;

const int `JG_KNOTTED_HEH` u003d 21;

const int `JG_LAM` u003d 22;

const int `JG_LAMADH` u003d 23;

const int `JG_MEEM` u003d 24;

const int `JG_MIM` u003d 25;

const int `JG_NOON` u003d 26;

const int `JG_NUN` u003d 27;

const int `JG_PE` u003d 28;

const int `JG_QAF` u003d 29;

const int `JG_QAPH` u003d 30;

const int `JG_REH` u003d 31;

const int `JG_REVERSED_PE` u003d 32;

const int `JG_SAD` u003d 33;

const int `JG_SADHE` u003d 34;

const int `JG_SEEN` u003d 35;

const int `JG_SEMKATH` u003d 36;

const int `JG_SHIN` u003d 37;

const int `JG_SWASH_KAF` u003d 38;

const int `JG_SYRIAC_WAW` u003d 39;

const int `JG_TAH` u003d 40;

const int `JG_TAW` u003d 41;

const int `JG_TEH_MARBUTA` u003d 42;

const int `JG_TETH` u003d 43;

const int `JG_WAW` u003d 44;

const int `JG_YEH` u003d 45;

const int `JG_YEH_BARREE` u003d 46;

const int `JG_YEH_WITH_TAIL` u003d 47;

const int `JG_YUDH` u003d 48;

const int `JG_YUDH_HE` u003d 49;

const int `JG_ZAIN` u003d 50;

const int `JG_FE` u003d 51;

const int `JG_KHAPH` u003d 52;

const int `JG_ZHAIN` u003d 53;

const int `JG_BURUSHASKI_YEH_BARREE` u003d 54;

const int `JG_FARSI_YEH` u003d 55;

const int `JG_NYA` u003d 56;

const int `JG_ROHINGYA_YEH` u003d 57;

const int `JG_COUNT` u003d 58;

const int `GCB_OTHER` u003d 0;

const int `GCB_CONTROL` u003d 1;

const int `GCB_CR` u003d 2;

const int `GCB_EXTEND` u003d 3;

const int `GCB_L` u003d 4;

const int `GCB_LF` u003d 5;

const int `GCB_LV` u003d 6;

const int `GCB_LVT` u003d 7;

const int `GCB_T` u003d 8;

const int `GCB_V` u003d 9;

const int `GCB_SPACING_MARK` u003d 10;

const int `GCB_PREPEND` u003d 11;

const int `GCB_REGIONAL_INDICATOR` u003d 12;

const int `GCB_COUNT` u003d 13;

const int `WB_OTHER` u003d 0;

const int `WB_ALETTER` u003d 1;

const int `WB_FORMAT` u003d 2;

const int `WB_KATAKANA` u003d 3;

const int `WB_MIDLETTER` u003d 4;

const int `WB_MIDNUM` u003d 5;

const int `WB_NUMERIC` u003d 6;

const int `WB_EXTENDNUMLET` u003d 7;

const int `WB_CR` u003d 8;

const int `WB_EXTEND` u003d 9;

const int `WB_LF` u003d 10;

const int `WB_MIDNUMLET` u003d 11;

const int `WB_NEWLINE` u003d 12;

const int `WB_REGIONAL_INDICATOR` u003d 13;

const int `WB_HEBREW_LETTER` u003d 14;

const int `WB_SINGLE_QUOTE` u003d 15;

const int `WB_DOUBLE_QUOTE` u003d 16;

const int `WB_COUNT` u003d 17;

const int `SB_OTHER` u003d 0;

const int `SB_ATERM` u003d 1;

const int `SB_CLOSE` u003d 2;

const int `SB_FORMAT` u003d 3;

const int `SB_LOWER` u003d 4;

const int `SB_NUMERIC` u003d 5;

const int `SB_OLETTER` u003d 6;

const int `SB_SEP` u003d 7;

const int `SB_SP` u003d 8;

const int `SB_STERM` u003d 9;

const int `SB_UPPER` u003d 10;

const int `SB_CR` u003d 11;

const int `SB_EXTEND` u003d 12;

const int `SB_LF` u003d 13;

const int `SB_SCONTINUE` u003d 14;

const int `SB_COUNT` u003d 15;

const int `LB_UNKNOWN` u003d 0;

const int `LB_AMBIGUOUS` u003d 1;

const int `LB_ALPHABETIC` u003d 2;

const int `LB_BREAK_BOTH` u003d 3;

const int `LB_BREAK_AFTER` u003d 4;

const int `LB_BREAK_BEFORE` u003d 5;

const int `LB_MANDATORY_BREAK` u003d 6;

const int `LB_CONTINGENT_BREAK` u003d 7;

const int `LB_CLOSE_PUNCTUATION` u003d 8;

const int `LB_COMBINING_MARK` u003d 9;

const int `LB_CARRIAGE_RETURN` u003d 10;

const int `LB_EXCLAMATION` u003d 11;

const int `LB_GLUE` u003d 12;

const int `LB_HYPHEN` u003d 13;

const int `LB_IDEOGRAPHIC` u003d 14;

const int `LB_INSEPARABLE` u003d 15;

const int `LB_INSEPERABLE` u003d 15;

const int `LB_INFIX_NUMERIC` u003d 16;

const int `LB_LINE_FEED` u003d 17;

const int `LB_NONSTARTER` u003d 18;

const int `LB_NUMERIC` u003d 19;

const int `LB_OPEN_PUNCTUATION` u003d 20;

const int `LB_POSTFIX_NUMERIC` u003d 21;

const int `LB_PREFIX_NUMERIC` u003d 22;

const int `LB_QUOTATION` u003d 23;

const int `LB_COMPLEX_CONTEXT` u003d 24;

const int `LB_SURROGATE` u003d 25;

const int `LB_SPACE` u003d 26;

const int `LB_BREAK_SYMBOLS` u003d 27;

const int `LB_ZWSPACE` u003d 28;

const int `LB_NEXT_LINE` u003d 29;

const int `LB_WORD_JOINER` u003d 30;

const int `LB_H2` u003d 31;

const int `LB_H3` u003d 32;

const int `LB_JL` u003d 33;

const int `LB_JT` u003d 34;

const int `LB_JV` u003d 35;

const int `LB_CLOSE_PARENTHESIS` u003d 36;

const int `LB_CONDITIONAL_JAPANESE_STARTER` u003d 37;

const int `LB_HEBREW_LETTER` u003d 38;

const int `LB_REGIONAL_INDICATOR` u003d 39;

const int `LB_COUNT` u003d 40;

const int `NT_NONE` u003d 0;

const int `NT_DECIMAL` u003d 1;

const int `NT_DIGIT` u003d 2;

const int `NT_NUMERIC` u003d 3;

const int `NT_COUNT` u003d 4;

const int `HST_NOT_APPLICABLE` u003d 0;

const int `HST_LEADING_JAMO` u003d 1;

const int `HST_VOWEL_JAMO` u003d 2;

const int `HST_TRAILING_JAMO` u003d 3;

const int `HST_LV_SYLLABLE` u003d 4;

const int `HST_LVT_SYLLABLE` u003d 5;

const int `HST_COUNT` u003d 6;

/\* Методи \*/

public static [charAge](intlchar.charage.md)(int\|string
`$codepoint`): ?array

public static [charDigitValue](intlchar.chardigitvalue.md)(int\|string
`$codepoint`): ?int

public static [charDirection](intlchar.chardirection.md)(int\|string
`$codepoint`): ?int

public static [charFromName](intlchar.charfromname.md)(string `$name`,
int `$type` u003d IntlChar::UNICODE_CHAR_NAME): ?int

public static [charMirror](intlchar.charmirror.md)(int\|string
`$codepoint`): int\|string\|null

public static [charName](intlchar.charname.md)(int\|string
`$codepoint`, int `$type` u003d IntlChar::UNICODE_CHAR_NAME): ?string

public static [charType](intlchar.chartype.md)(int\|string
`$codepoint`): ?int

public static [chr](intlchar.chr.md)(int\|string `$codepoint`):
?string

public static [digit](intlchar.digit.md)(int\|string `$codepoint`, int
`$base` u003d 10): int\|false\|null

public static [enumCharNames](intlchar.enumcharnames.md)(
int\|string `$start`,
int\|string `$end`,
[callable](language.types.callable.md) `$callback`,
int `$type` u003d IntlChar::UNICODE_CHAR_NAME
): ?bool

public static
[enumCharTypes](intlchar.enumchartypes.md)([callable](language.types.callable.md)
`$callback`): void

public static [foldCase](intlchar.foldcase.md)(int\|string
`$codepoint`, int `$options` u003d IntlChar::FOLD_CASE_DEFAULT):
int\|string\|null

public static [forDigit](intlchar.fordigit.md)(int `$digit`, int
`$base` u003d 10): int

public static
[getBidiPairedBracket](intlchar.getbidipairedbracket.md)(int\|string
`$codepoint`): int\|string\|null

public static [getBlockCode](intlchar.getblockcode.md)(int\|string
`$codepoint`): ?int

public static
[getCombiningClass](intlchar.getcombiningclass.md)(int\|string
`$codepoint`): ?int

public static
[getFC_NFKC_Closure](intlchar.getfc-nfkc-closure.md)(int\|string
`$codepoint`): string\|false\|null

public static
[getIntPropertyMaxValue](intlchar.getintpropertymaxvalue.md)(int
`$property`): int

public static
[getIntPropertyMinValue](intlchar.getintpropertyminvalue.md)(int
`$property`): int

public static
[getIntPropertyValue](intlchar.getintpropertyvalue.md)(int\|string
`$codepoint`, int `$property`): ?int

public static
[getNumericValue](intlchar.getnumericvalue.md)(int\|string
`$codepoint`): ?float

public static [getPropertyEnum](intlchar.getpropertyenum.md)(string
`$alias`): int

public static [getPropertyName](intlchar.getpropertyname.md)(int
`$property`, int `$type` u003d IntlChar::LONG_PROPERTY_NAME): string\|false

public static
[getPropertyValueEnum](intlchar.getpropertyvalueenum.md)(int
`$property`, string `$name`): int

public static
[getPropertyValueName](intlchar.getpropertyvaluename.md)(int
`$property`, int `$value`, int `$type` u003d IntlChar::LONG_PROPERTY_NAME):
string\|false

public static [getUnicodeVersion](intlchar.getunicodeversion.md)():
array

public static
[hasBinaryProperty](intlchar.hasbinaryproperty.md)(int\|string
`$codepoint`, int `$property`): ?bool

public static [isalnum](intlchar.isalnum.md)(int\|string
`$codepoint`): ?bool

public static [isalpha](intlchar.isalpha.md)(int\|string
`$codepoint`): ?bool

public static [isbase](intlchar.isbase.md)(int\|string `$codepoint`):
?bool

public static [isblank](intlchar.isblank.md)(int\|string
`$codepoint`): ?bool

public static [iscntrl](intlchar.iscntrl.md)(int\|string
`$codepoint`): ?bool

public static [isdefined](intlchar.isdefined.md)(int\|string
`$codepoint`): ?bool

public static [isdigit](intlchar.isdigit.md)(int\|string
`$codepoint`): ?bool

public static [isgraph](intlchar.isgraph.md)(int\|string
`$codepoint`): ?bool

public static [isIDIgnorable](intlchar.isidignorable.md)(int\|string
`$codepoint`): ?bool

public static [isIDPart](intlchar.isidpart.md)(int\|string
`$codepoint`): ?bool

public static [isIDStart](intlchar.isidstart.md)(int\|string
`$codepoint`): ?bool

public static [isISOControl](intlchar.isisocontrol.md)(int\|string
`$codepoint`): ?bool

public static [isJavaIDPart](intlchar.isjavaidpart.md)(int\|string
`$codepoint`): ?bool

public static [isJavaIDStart](intlchar.isjavaidstart.md)(int\|string
`$codepoint`): ?bool

public static
[isJavaSpaceChar](intlchar.isjavaspacechar.md)(int\|string
`$codepoint`): ?bool

public static [islower](intlchar.islower.md)(int\|string
`$codepoint`): ?bool

public static [isMirrored](intlchar.ismirrored.md)(int\|string
`$codepoint`): ?bool

public static [isprint](intlchar.isprint.md)(int\|string
`$codepoint`): ?bool

public static [ispunct](intlchar.ispunct.md)(int\|string
`$codepoint`): ?bool

public static [isspace](intlchar.isspace.md)(int\|string
`$codepoint`): ?bool

public static [istitle](intlchar.istitle.md)(int\|string
`$codepoint`): ?bool

public static [isUAlphabetic](intlchar.isualphabetic.md)(int\|string
`$codepoint`): ?bool

public static [isULowercase](intlchar.isulowercase.md)(int\|string
`$codepoint`): ?bool

public static [isupper](intlchar.isupper.md)(int\|string
`$codepoint`): ?bool

public static [isUUppercase](intlchar.isuuppercase.md)(int\|string
`$codepoint`): ?bool

public static [isUWhiteSpace](intlchar.isuwhitespace.md)(int\|string
`$codepoint`): ?bool

public static [isWhitespace](intlchar.iswhitespace.md)(int\|string
`$codepoint`): ?bool

public static [isxdigit](intlchar.isxdigit.md)(int\|string
`$codepoint`): ?bool

public static [ord](intlchar.ord.md)(int\|string `$character`): ?int

public static [tolower](intlchar.tolower.md)(int\|string
`$codepoint`): int\|string\|null

public static [totitle](intlchar.totitle.md)(int\|string
`$codepoint`): int\|string\|null

public static [toupper](intlchar.toupper.md)(int\|string
`$codepoint`): int\|string\|null

}

## Зумовлені константи

**`IntlChar::UNICODE_VERSION`**

**`IntlChar::CODEPOINT_MIN`**

**`IntlChar::CODEPOINT_MAX`**

**`IntlChar::NO_NUMERIC_VALUE`**
Special value that is returned by
[IntlChar::getNumericValue()](intlchar.getnumericvalue.md) when no
numeric value is defined for a code point.

**`IntlChar::PROPERTY_ALPHABETIC`**

**`IntlChar::PROPERTY_BINARY_START`**

**`IntlChar::PROPERTY_ASCII_HEX_DIGIT`**

**`IntlChar::PROPERTY_BIDI_CONTROL`**

**`IntlChar::PROPERTY_BIDI_MIRRORED`**

**`IntlChar::PROPERTY_DASH`**

**`IntlChar::PROPERTY_DEFAULT_IGNORABLE_CODE_POINT`**

**`IntlChar::PROPERTY_DEPRECATED`**

**`IntlChar::PROPERTY_DIACRITIC`**

**`IntlChar::PROPERTY_EXTENDER`**

**`IntlChar::PROPERTY_FULL_COMPOSITION_EXCLUSION`**

**`IntlChar::PROPERTY_GRAPHEME_BASE`**

**`IntlChar::PROPERTY_GRAPHEME_EXTEND`**

**`IntlChar::PROPERTY_GRAPHEME_LINK`**

**`IntlChar::PROPERTY_HEX_DIGIT`**

**`IntlChar::PROPERTY_HYPHEN`**

**`IntlChar::PROPERTY_ID_CONTINUE`**

**`IntlChar::PROPERTY_ID_START`**

**`IntlChar::PROPERTY_IDEOGRAPHIC`**

**`IntlChar::PROPERTY_IDS_BINARY_OPERATOR`**

**`IntlChar::PROPERTY_IDS_TRINARY_OPERATOR`**

**`IntlChar::PROPERTY_JOIN_CONTROL`**

**`IntlChar::PROPERTY_LOGICAL_ORDER_EXCEPTION`**

**`IntlChar::PROPERTY_LOWERCASE`**

**`IntlChar::PROPERTY_MATH`**

**`IntlChar::PROPERTY_NONCHARACTER_CODE_POINT`**

**`IntlChar::PROPERTY_QUOTATION_MARK`**

**`IntlChar::PROPERTY_RADICAL`**

**`IntlChar::PROPERTY_SOFT_DOTTED`**

**`IntlChar::PROPERTY_TERMINAL_PUNCTUATION`**

**`IntlChar::PROPERTY_UNIFIED_IDEOGRAPH`**

**`IntlChar::PROPERTY_UPPERCASE`**

**`IntlChar::PROPERTY_WHITE_SPACE`**

**`IntlChar::PROPERTY_XID_CONTINUE`**

**`IntlChar::PROPERTY_XID_START`**

**`IntlChar::PROPERTY_CASE_SENSITIVE`**

**`IntlChar::PROPERTY_S_TERM`**

**`IntlChar::PROPERTY_VARIATION_SELECTOR`**

**`IntlChar::PROPERTY_NFD_INERT`**

**`IntlChar::PROPERTY_NFKD_INERT`**

**`IntlChar::PROPERTY_NFC_INERT`**

**`IntlChar::PROPERTY_NFKC_INERT`**

**`IntlChar::PROPERTY_SEGMENT_STARTER`**

**`IntlChar::PROPERTY_PATTERN_SYNTAX`**

**`IntlChar::PROPERTY_PATTERN_WHITE_SPACE`**

**`IntlChar::PROPERTY_POSIX_ALNUM`**

**`IntlChar::PROPERTY_POSIX_BLANK`**

**`IntlChar::PROPERTY_POSIX_GRAPH`**

**`IntlChar::PROPERTY_POSIX_PRINT`**

**`IntlChar::PROPERTY_POSIX_XDIGIT`**

**`IntlChar::PROPERTY_CASED`**

**`IntlChar::PROPERTY_CASE_IGNORABLE`**

**`IntlChar::PROPERTY_CHANGES_WHEN_LOWERCASED`**

**`IntlChar::PROPERTY_CHANGES_WHEN_UPPERCASED`**

**`IntlChar::PROPERTY_CHANGES_WHEN_TITLECASED`**

**`IntlChar::PROPERTY_CHANGES_WHEN_CASEFOLDED`**

**`IntlChar::PROPERTY_CHANGES_WHEN_CASEMAPPED`**

**`IntlChar::PROPERTY_CHANGES_WHEN_NFKC_CASEFOLDED`**

**`IntlChar::PROPERTY_BINARY_LIMIT`**

**`IntlChar::PROPERTY_BIDI_CLASS`**

**`IntlChar::PROPERTY_INT_START`**

**`IntlChar::PROPERTY_BLOCK`**

**`IntlChar::PROPERTY_CANONICAL_COMBINING_CLASS`**

**`IntlChar::PROPERTY_DECOMPOSITION_TYPE`**

**`IntlChar::PROPERTY_EAST_ASIAN_WIDTH`**

**`IntlChar::PROPERTY_GENERAL_CATEGORY`**

**`IntlChar::PROPERTY_JOINING_GROUP`**

**`IntlChar::PROPERTY_JOINING_TYPE`**

**`IntlChar::PROPERTY_LINE_BREAK`**

**`IntlChar::PROPERTY_NUMERIC_TYPE`**

**`IntlChar::PROPERTY_SCRIPT`**

**`IntlChar::PROPERTY_HANGUL_SYLLABLE_TYPE`**

**`IntlChar::PROPERTY_NFD_QUICK_CHECK`**

**`IntlChar::PROPERTY_NFKD_QUICK_CHECK`**

**`IntlChar::PROPERTY_NFC_QUICK_CHECK`**

**`IntlChar::PROPERTY_NFKC_QUICK_CHECK`**

**`IntlChar::PROPERTY_LEAD_CANONICAL_COMBINING_CLASS`**

**`IntlChar::PROPERTY_TRAIL_CANONICAL_COMBINING_CLASS`**

**`IntlChar::PROPERTY_GRAPHEME_CLUSTER_BREAK`**

**`IntlChar::PROPERTY_SENTENCE_BREAK`**

**`IntlChar::PROPERTY_WORD_BREAK`**

**`IntlChar::PROPERTY_BIDI_PAIRED_BRACKET_TYPE`**

**`IntlChar::PROPERTY_INT_LIMIT`**

**`IntlChar::PROPERTY_GENERAL_CATEGORY_MASK`**

**`IntlChar::PROPERTY_MASK_START`**

**`IntlChar::PROPERTY_MASK_LIMIT`**

**`IntlChar::PROPERTY_NUMERIC_VALUE`**

**`IntlChar::PROPERTY_DOUBLE_START`**

**`IntlChar::PROPERTY_DOUBLE_LIMIT`**

**`IntlChar::PROPERTY_AGE`**

**`IntlChar::PROPERTY_STRING_START`**

**`IntlChar::PROPERTY_BIDI_MIRRORING_GLYPH`**

**`IntlChar::PROPERTY_CASE_FOLDING`**

**`IntlChar::PROPERTY_ISO_COMMENT`**

**`IntlChar::PROPERTY_LOWERCASE_MAPPING`**

**`IntlChar::PROPERTY_NAME`**

**`IntlChar::PROPERTY_SIMPLE_CASE_FOLDING`**

**`IntlChar::PROPERTY_SIMPLE_LOWERCASE_MAPPING`**

**`IntlChar::PROPERTY_SIMPLE_TITLECASE_MAPPING`**

**`IntlChar::PROPERTY_SIMPLE_UPPERCASE_MAPPING`**

**`IntlChar::PROPERTY_TITLECASE_MAPPING`**

**`IntlChar::PROPERTY_UNICODE_1_NAME`**

**`IntlChar::PROPERTY_UPPERCASE_MAPPING`**

**`IntlChar::PROPERTY_BIDI_PAIRED_BRACKET`**

**`IntlChar::PROPERTY_STRING_LIMIT`**

**`IntlChar::PROPERTY_SCRIPT_EXTENSIONS`**

**`IntlChar::PROPERTY_OTHER_PROPERTY_START`**

**`IntlChar::PROPERTY_OTHER_PROPERTY_LIMIT`**

**`IntlChar::PROPERTY_INVALID_CODE`**

**`IntlChar::CHAR_CATEGORY_UNASSIGNED`**

**`IntlChar::CHAR_CATEGORY_GENERAL_OTHER_TYPES`**

**`IntlChar::CHAR_CATEGORY_UPPERCASE_LETTER`**

**`IntlChar::CHAR_CATEGORY_LOWERCASE_LETTER`**

**`IntlChar::CHAR_CATEGORY_TITLECASE_LETTER`**

**`IntlChar::CHAR_CATEGORY_MODIFIER_LETTER`**

**`IntlChar::CHAR_CATEGORY_OTHER_LETTER`**

**`IntlChar::CHAR_CATEGORY_NON_SPACING_MARK`**

**`IntlChar::CHAR_CATEGORY_ENCLOSING_MARK`**

**`IntlChar::CHAR_CATEGORY_COMBINING_SPACING_MARK`**

**`IntlChar::CHAR_CATEGORY_DECIMAL_DIGIT_NUMBER`**

**`IntlChar::CHAR_CATEGORY_LETTER_NUMBER`**

**`IntlChar::CHAR_CATEGORY_OTHER_NUMBER`**

**`IntlChar::CHAR_CATEGORY_SPACE_SEPARATOR`**

**`IntlChar::CHAR_CATEGORY_LINE_SEPARATOR`**

**`IntlChar::CHAR_CATEGORY_PARAGRAPH_SEPARATOR`**

**`IntlChar::CHAR_CATEGORY_CONTROL_CHAR`**

**`IntlChar::CHAR_CATEGORY_FORMAT_CHAR`**

**`IntlChar::CHAR_CATEGORY_PRIVATE_USE_CHAR`**

**`IntlChar::CHAR_CATEGORY_SURROGATE`**

**`IntlChar::CHAR_CATEGORY_DASH_PUNCTUATION`**

**`IntlChar::CHAR_CATEGORY_START_PUNCTUATION`**

**`IntlChar::CHAR_CATEGORY_END_PUNCTUATION`**

**`IntlChar::CHAR_CATEGORY_CONNECTOR_PUNCTUATION`**

**`IntlChar::CHAR_CATEGORY_OTHER_PUNCTUATION`**

**`IntlChar::CHAR_CATEGORY_MATH_SYMBOL`**

**`IntlChar::CHAR_CATEGORY_CURRENCY_SYMBOL`**

**`IntlChar::CHAR_CATEGORY_MODIFIER_SYMBOL`**

**`IntlChar::CHAR_CATEGORY_OTHER_SYMBOL`**

**`IntlChar::CHAR_CATEGORY_INITIAL_PUNCTUATION`**

**`IntlChar::CHAR_CATEGORY_FINAL_PUNCTUATION`**

**`IntlChar::CHAR_CATEGORY_CHAR_CATEGORY_COUNT`**

**`IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT`**

**`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT`**

**`IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER`**

**`IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_SEPARATOR`**

**`IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_TERMINATOR`**

**`IntlChar::CHAR_DIRECTION_ARABIC_NUMBER`**

**`IntlChar::CHAR_DIRECTION_COMMON_NUMBER_SEPARATOR`**

**`IntlChar::CHAR_DIRECTION_BLOCK_SEPARATOR`**

**`IntlChar::CHAR_DIRECTION_SEGMENT_SEPARATOR`**

**`IntlChar::CHAR_DIRECTION_WHITE_SPACE_NEUTRAL`**

**`IntlChar::CHAR_DIRECTION_OTHER_NEUTRAL`**

**`IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_EMBEDDING`**

**`IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_OVERRIDE`**

**`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_ARABIC`**

**`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_EMBEDDING`**

**`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_OVERRIDE`**

**`IntlChar::CHAR_DIRECTION_POP_DIRECTIONAL_FORMAT`**

**`IntlChar::CHAR_DIRECTION_DIR_NON_SPACING_MARK`**

**`IntlChar::CHAR_DIRECTION_BOUNDARY_NEUTRAL`**

**`IntlChar::CHAR_DIRECTION_FIRST_STRONG_ISOLATE`**

**`IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_ISOLATE`**

**`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_ISOLATE`**

**`IntlChar::CHAR_DIRECTION_POP_DIRECTIONAL_ISOLATE`**

**`IntlChar::CHAR_DIRECTION_CHAR_DIRECTION_COUNT`**

**`IntlChar::BLOCK_CODE_NO_BLOCK`**

**`IntlChar::BLOCK_CODE_BASIC_LATIN`**

**`IntlChar::BLOCK_CODE_LATIN_1_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_LATIN_EXTENDED_A`**

**`IntlChar::BLOCK_CODE_LATIN_EXTENDED_B`**

**`IntlChar::BLOCK_CODE_IPA_EXTENSIONS`**

**`IntlChar::BLOCK_CODE_SPACING_MODIFIER_LETTERS`**

**`IntlChar::BLOCK_CODE_COMBINING_DIACRITICAL_MARKS`**

**`IntlChar::BLOCK_CODE_GREEK`**

**`IntlChar::BLOCK_CODE_CYRILLIC`**

**`IntlChar::BLOCK_CODE_ARMENIAN`**

**`IntlChar::BLOCK_CODE_HEBREW`**

**`IntlChar::BLOCK_CODE_ARABIC`**

**`IntlChar::BLOCK_CODE_SYRIAC`**

**`IntlChar::BLOCK_CODE_THAANA`**

**`IntlChar::BLOCK_CODE_DEVANAGARI`**

**`IntlChar::BLOCK_CODE_BENGALI`**

**`IntlChar::BLOCK_CODE_GURMUKHI`**

**`IntlChar::BLOCK_CODE_GUJARATI`**

**`IntlChar::BLOCK_CODE_ORIYA`**

**`IntlChar::BLOCK_CODE_TAMIL`**

**`IntlChar::BLOCK_CODE_TELUGU`**

**`IntlChar::BLOCK_CODE_KANNADA`**

**`IntlChar::BLOCK_CODE_MALAYALAM`**

**`IntlChar::BLOCK_CODE_SINHALA`**

**`IntlChar::BLOCK_CODE_THAI`**

**`IntlChar::BLOCK_CODE_LAO`**

**`IntlChar::BLOCK_CODE_TIBETAN`**

**`IntlChar::BLOCK_CODE_MYANMAR`**

**`IntlChar::BLOCK_CODE_GEORGIAN`**

**`IntlChar::BLOCK_CODE_HANGUL_JAMO`**

**`IntlChar::BLOCK_CODE_ETHIOPIC`**

**`IntlChar::BLOCK_CODE_CHEROKEE`**

**`IntlChar::BLOCK_CODE_UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS`**

**`IntlChar::BLOCK_CODE_OGHAM`**

**`IntlChar::BLOCK_CODE_RUNIC`**

**`IntlChar::BLOCK_CODE_KHMER`**

**`IntlChar::BLOCK_CODE_MONGOLIAN`**

**`IntlChar::BLOCK_CODE_LATIN_EXTENDED_ADDITIONAL`**

**`IntlChar::BLOCK_CODE_GREEK_EXTENDED`**

**`IntlChar::BLOCK_CODE_GENERAL_PUNCTUATION`**

**`IntlChar::BLOCK_CODE_SUPERSCRIPTS_AND_SUBSCRIPTS`**

**`IntlChar::BLOCK_CODE_CURRENCY_SYMBOLS`**

**`IntlChar::BLOCK_CODE_COMBINING_MARKS_FOR_SYMBOLS`**

**`IntlChar::BLOCK_CODE_LETTERLIKE_SYMBOLS`**

**`IntlChar::BLOCK_CODE_NUMBER_FORMS`**

**`IntlChar::BLOCK_CODE_ARROWS`**

**`IntlChar::BLOCK_CODE_MATHEMATICAL_OPERATORS`**

**`IntlChar::BLOCK_CODE_MISCELLANEOUS_TECHNICAL`**

**`IntlChar::BLOCK_CODE_CONTROL_PICTURES`**

**`IntlChar::BLOCK_CODE_OPTICAL_CHARACTER_RECOGNITION`**

**`IntlChar::BLOCK_CODE_ENCLOSED_ALPHANUMERICS`**

**`IntlChar::BLOCK_CODE_BOX_DRAWING`**

**`IntlChar::BLOCK_CODE_BLOCK_ELEMENTS`**

**`IntlChar::BLOCK_CODE_GEOMETRIC_SHAPES`**

**`IntlChar::BLOCK_CODE_MISCELLANEOUS_SYMBOLS`**

**`IntlChar::BLOCK_CODE_DINGBATS`**

**`IntlChar::BLOCK_CODE_BRAILLE_PATTERNS`**

**`IntlChar::BLOCK_CODE_CJK_RADICALS_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_KANGXI_RADICALS`**

**`IntlChar::BLOCK_CODE_IDEOGRAPHIC_DESCRIPTION_CHARACTERS`**

**`IntlChar::BLOCK_CODE_CJK_SYMBOLS_AND_PUNCTUATION`**

**`IntlChar::BLOCK_CODE_HIRAGANA`**

**`IntlChar::BLOCK_CODE_KATAKANA`**

**`IntlChar::BLOCK_CODE_BOPOMOFO`**

**`IntlChar::BLOCK_CODE_HANGUL_COMPATIBILITY_JAMO`**

**`IntlChar::BLOCK_CODE_KANBUN`**

**`IntlChar::BLOCK_CODE_BOPOMOFO_EXTENDED`**

**`IntlChar::BLOCK_CODE_ENCLOSED_CJK_LETTERS_AND_MONTHS`**

**`IntlChar::BLOCK_CODE_CJK_COMPATIBILITY`**

**`IntlChar::BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A`**

**`IntlChar::BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS`**

**`IntlChar::BLOCK_CODE_YI_SYLLABLES`**

**`IntlChar::BLOCK_CODE_YI_RADICALS`**

**`IntlChar::BLOCK_CODE_HANGUL_SYLLABLES`**

**`IntlChar::BLOCK_CODE_HIGH_SURROGATES`**

**`IntlChar::BLOCK_CODE_HIGH_PRIVATE_USE_SURROGATES`**

**`IntlChar::BLOCK_CODE_LOW_SURROGATES`**

**`IntlChar::BLOCK_CODE_PRIVATE_USE_AREA`**

**`IntlChar::BLOCK_CODE_PRIVATE_USE`**

**`IntlChar::BLOCK_CODE_CJK_COMPATIBILITY_IDEOGRAPHS`**

**`IntlChar::BLOCK_CODE_ALPHABETIC_PRESENTATION_FORMS`**

**`IntlChar::BLOCK_CODE_ARABIC_PRESENTATION_FORMS_A`**

**`IntlChar::BLOCK_CODE_COMBINING_HALF_MARKS`**

**`IntlChar::BLOCK_CODE_CJK_COMPATIBILITY_FORMS`**

**`IntlChar::BLOCK_CODE_SMALL_FORM_VARIANTS`**

**`IntlChar::BLOCK_CODE_ARABIC_PRESENTATION_FORMS_B`**

**`IntlChar::BLOCK_CODE_SPECIALS`**

**`IntlChar::BLOCK_CODE_HALFWIDTH_AND_FULLWIDTH_FORMS`**

**`IntlChar::BLOCK_CODE_OLD_ITALIC`**

**`IntlChar::BLOCK_CODE_GOTHIC`**

**`IntlChar::BLOCK_CODE_DESERET`**

**`IntlChar::BLOCK_CODE_BYZANTINE_MUSICAL_SYMBOLS`**

**`IntlChar::BLOCK_CODE_MUSICAL_SYMBOLS`**

**`IntlChar::BLOCK_CODE_MATHEMATICAL_ALPHANUMERIC_SYMBOLS`**

**`IntlChar::BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B`**

**`IntlChar::BLOCK_CODE_CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_TAGS`**

**`IntlChar::BLOCK_CODE_CYRILLIC_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_CYRILLIC_SUPPLEMENTARY`**

**`IntlChar::BLOCK_CODE_TAGALOG`**

**`IntlChar::BLOCK_CODE_HANUNOO`**

**`IntlChar::BLOCK_CODE_BUHID`**

**`IntlChar::BLOCK_CODE_TAGBANWA`**

**`IntlChar::BLOCK_CODE_MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A`**

**`IntlChar::BLOCK_CODE_SUPPLEMENTAL_ARROWS_A`**

**`IntlChar::BLOCK_CODE_SUPPLEMENTAL_ARROWS_B`**

**`IntlChar::BLOCK_CODE_MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B`**

**`IntlChar::BLOCK_CODE_SUPPLEMENTAL_MATHEMATICAL_OPERATORS`**

**`IntlChar::BLOCK_CODE_KATAKANA_PHONETIC_EXTENSIONS`**

**`IntlChar::BLOCK_CODE_VARIATION_SELECTORS`**

**`IntlChar::BLOCK_CODE_SUPPLEMENTARY_PRIVATE_USE_AREA_A`**

**`IntlChar::BLOCK_CODE_SUPPLEMENTARY_PRIVATE_USE_AREA_B`**

**`IntlChar::BLOCK_CODE_LIMBU`**

**`IntlChar::BLOCK_CODE_TAI_LE`**

**`IntlChar::BLOCK_CODE_KHMER_SYMBOLS`**

**`IntlChar::BLOCK_CODE_PHONETIC_EXTENSIONS`**

**`IntlChar::BLOCK_CODE_MISCELLANEOUS_SYMBOLS_AND_ARROWS`**

**`IntlChar::BLOCK_CODE_YIJING_HEXAGRAM_SYMBOLS`**

**`IntlChar::BLOCK_CODE_LINEAR_B_SYLLABARY`**

**`IntlChar::BLOCK_CODE_LINEAR_B_IDEOGRAMS`**

**`IntlChar::BLOCK_CODE_AEGEAN_NUMBERS`**

**`IntlChar::BLOCK_CODE_UGARITIC`**

**`IntlChar::BLOCK_CODE_SHAVIAN`**

**`IntlChar::BLOCK_CODE_OSMANYA`**

**`IntlChar::BLOCK_CODE_CYPRIOT_SYLLABARY`**

**`IntlChar::BLOCK_CODE_TAI_XUAN_JING_SYMBOLS`**

**`IntlChar::BLOCK_CODE_VARIATION_SELECTORS_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_ANCIENT_GREEK_MUSICAL_NOTATION`**

**`IntlChar::BLOCK_CODE_ANCIENT_GREEK_NUMBERS`**

**`IntlChar::BLOCK_CODE_ARABIC_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_BUGINESE`**

**`IntlChar::BLOCK_CODE_CJK_STROKES`**

**`IntlChar::BLOCK_CODE_COMBINING_DIACRITICAL_MARKS_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_COPTIC`**

**`IntlChar::BLOCK_CODE_ETHIOPIC_EXTENDED`**

**`IntlChar::BLOCK_CODE_ETHIOPIC_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_GEORGIAN_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_GLAGOLITIC`**

**`IntlChar::BLOCK_CODE_KHAROSHTHI`**

**`IntlChar::BLOCK_CODE_MODIFIER_TONE_LETTERS`**

**`IntlChar::BLOCK_CODE_NEW_TAI_LUE`**

**`IntlChar::BLOCK_CODE_OLD_PERSIAN`**

**`IntlChar::BLOCK_CODE_PHONETIC_EXTENSIONS_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_SUPPLEMENTAL_PUNCTUATION`**

**`IntlChar::BLOCK_CODE_SYLOTI_NAGRI`**

**`IntlChar::BLOCK_CODE_TIFINAGH`**

**`IntlChar::BLOCK_CODE_VERTICAL_FORMS`**

**`IntlChar::BLOCK_CODE_NKO`**

**`IntlChar::BLOCK_CODE_BALINESE`**

**`IntlChar::BLOCK_CODE_LATIN_EXTENDED_C`**

**`IntlChar::BLOCK_CODE_LATIN_EXTENDED_D`**

**`IntlChar::BLOCK_CODE_PHAGS_PA`**

**`IntlChar::BLOCK_CODE_PHOENICIAN`**

**`IntlChar::BLOCK_CODE_CUNEIFORM`**

**`IntlChar::BLOCK_CODE_CUNEIFORM_NUMBERS_AND_PUNCTUATION`**

**`IntlChar::BLOCK_CODE_COUNTING_ROD_NUMERALS`**

**`IntlChar::BLOCK_CODE_SUNDANESE`**

**`IntlChar::BLOCK_CODE_LEPCHA`**

**`IntlChar::BLOCK_CODE_OL_CHIKI`**

**`IntlChar::BLOCK_CODE_CYRILLIC_EXTENDED_A`**

**`IntlChar::BLOCK_CODE_VAI`**

**`IntlChar::BLOCK_CODE_CYRILLIC_EXTENDED_B`**

**`IntlChar::BLOCK_CODE_SAURASHTRA`**

**`IntlChar::BLOCK_CODE_KAYAH_LI`**

**`IntlChar::BLOCK_CODE_REJANG`**

**`IntlChar::BLOCK_CODE_CHAM`**

**`IntlChar::BLOCK_CODE_ANCIENT_SYMBOLS`**

**`IntlChar::BLOCK_CODE_PHAISTOS_DISC`**

**`IntlChar::BLOCK_CODE_LYCIAN`**

**`IntlChar::BLOCK_CODE_CARIAN`**

**`IntlChar::BLOCK_CODE_LYDIAN`**

**`IntlChar::BLOCK_CODE_MAHJONG_TILES`**

**`IntlChar::BLOCK_CODE_DOMINO_TILES`**

**`IntlChar::BLOCK_CODE_SAMARITAN`**

**`IntlChar::BLOCK_CODE_UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED`**

**`IntlChar::BLOCK_CODE_TAI_THAM`**

**`IntlChar::BLOCK_CODE_VEDIC_EXTENSIONS`**

**`IntlChar::BLOCK_CODE_LISU`**

**`IntlChar::BLOCK_CODE_BAMUM`**

**`IntlChar::BLOCK_CODE_COMMON_INDIC_NUMBER_FORMS`**

**`IntlChar::BLOCK_CODE_DEVANAGARI_EXTENDED`**

**`IntlChar::BLOCK_CODE_HANGUL_JAMO_EXTENDED_A`**

**`IntlChar::BLOCK_CODE_JAVANESE`**

**`IntlChar::BLOCK_CODE_MYANMAR_EXTENDED_A`**

**`IntlChar::BLOCK_CODE_TAI_VIET`**

**`IntlChar::BLOCK_CODE_MEETEI_MAYEK`**

**`IntlChar::BLOCK_CODE_HANGUL_JAMO_EXTENDED_B`**

**`IntlChar::BLOCK_CODE_IMPERIAL_ARAMAIC`**

**`IntlChar::BLOCK_CODE_OLD_SOUTH_ARABIAN`**

**`IntlChar::BLOCK_CODE_AVESTAN`**

**`IntlChar::BLOCK_CODE_INSCRIPTIONAL_PARTHIAN`**

**`IntlChar::BLOCK_CODE_INSCRIPTIONAL_PAHLAVI`**

**`IntlChar::BLOCK_CODE_OLD_TURKIC`**

**`IntlChar::BLOCK_CODE_RUMI_NUMERAL_SYMBOLS`**

**`IntlChar::BLOCK_CODE_KAITHI`**

**`IntlChar::BLOCK_CODE_EGYPTIAN_HIEROGLYPHS`**

**`IntlChar::BLOCK_CODE_ENCLOSED_ALPHANUMERIC_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_ENCLOSED_IDEOGRAPHIC_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C`**

**`IntlChar::BLOCK_CODE_MANDAIC`**

**`IntlChar::BLOCK_CODE_BATAK`**

**`IntlChar::BLOCK_CODE_ETHIOPIC_EXTENDED_A`**

**`IntlChar::BLOCK_CODE_BRAHMI`**

**`IntlChar::BLOCK_CODE_BAMUM_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_KANA_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_PLAYING_CARDS`**

**`IntlChar::BLOCK_CODE_MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS`**

**`IntlChar::BLOCK_CODE_EMOTICONS`**

**`IntlChar::BLOCK_CODE_TRANSPORT_AND_MAP_SYMBOLS`**

**`IntlChar::BLOCK_CODE_ALCHEMICAL_SYMBOLS`**

**`IntlChar::BLOCK_CODE_CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D`**

**`IntlChar::BLOCK_CODE_ARABIC_EXTENDED_A`**

**`IntlChar::BLOCK_CODE_ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS`**

**`IntlChar::BLOCK_CODE_CHAKMA`**

**`IntlChar::BLOCK_CODE_MEETEI_MAYEK_EXTENSIONS`**

**`IntlChar::BLOCK_CODE_MEROITIC_CURSIVE`**

**`IntlChar::BLOCK_CODE_MEROITIC_HIEROGLYPHS`**

**`IntlChar::BLOCK_CODE_MIAO`**

**`IntlChar::BLOCK_CODE_SHARADA`**

**`IntlChar::BLOCK_CODE_SORA_SOMPENG`**

**`IntlChar::BLOCK_CODE_SUNDANESE_SUPPLEMENT`**

**`IntlChar::BLOCK_CODE_TAKRI`**

**`IntlChar::BLOCK_CODE_COUNT`**

**`IntlChar::BLOCK_CODE_INVALID_CODE`**

**`IntlChar::BPT_NONE`**

**`IntlChar::BPT_OPEN`**

**`IntlChar::BPT_CLOSE`**

**`IntlChar::BPT_COUNT`**

**`IntlChar::EA_NEUTRAL`**

**`IntlChar::EA_AMBIGUOUS`**

**`IntlChar::EA_HALFWIDTH`**

**`IntlChar::EA_FULLWIDTH`**

**`IntlChar::EA_NARROW`**

**`IntlChar::EA_WIDE`**

**`IntlChar::EA_COUNT`**

**`IntlChar::UNICODE_CHAR_NAME`**

**`IntlChar::UNICODE_10_CHAR_NAME`**

**`IntlChar::EXTENDED_CHAR_NAME`**

**`IntlChar::CHAR_NAME_ALIAS`**

**`IntlChar::CHAR_NAME_CHOICE_COUNT`**

**`IntlChar::SHORT_PROPERTY_NAME`**

**`IntlChar::LONG_PROPERTY_NAME`**

**`IntlChar::PROPERTY_NAME_CHOICE_COUNT`**

**`IntlChar::DT_NONE`**

**`IntlChar::DT_CANONICAL`**

**`IntlChar::DT_COMPAT`**

**`IntlChar::DT_CIRCLE`**

**`IntlChar::DT_FINAL`**

**`IntlChar::DT_FONT`**

**`IntlChar::DT_FRACTION`**

**`IntlChar::DT_INITIAL`**

**`IntlChar::DT_ISOLATED`**

**`IntlChar::DT_MEDIAL`**

**`IntlChar::DT_NARROW`**

**`IntlChar::DT_NOBREAK`**

**`IntlChar::DT_SMALL`**

**`IntlChar::DT_SQUARE`**

**`IntlChar::DT_SUB`**

**`IntlChar::DT_SUPER`**

**`IntlChar::DT_VERTICAL`**

**`IntlChar::DT_WIDE`**

**`IntlChar::DT_COUNT`**

**`IntlChar::JT_NON_JOINING`**

**`IntlChar::JT_JOIN_CAUSING`**

**`IntlChar::JT_DUAL_JOINING`**

**`IntlChar::JT_LEFT_JOINING`**

**`IntlChar::JT_RIGHT_JOINING`**

**`IntlChar::JT_TRANSPARENT`**

**`IntlChar::JT_COUNT`**

**`IntlChar::JG_NO_JOINING_GROUP`**

**`IntlChar::JG_AIN`**

**`IntlChar::JG_ALAPH`**

**`IntlChar::JG_ALEF`**

**`IntlChar::JG_BEH`**

**`IntlChar::JG_BETH`**

**`IntlChar::JG_DAL`**

**`IntlChar::JG_DALATH_RISH`**

**`IntlChar::JG_E`**

**`IntlChar::JG_FEH`**

**`IntlChar::JG_FINAL_SEMKATH`**

**`IntlChar::JG_GAF`**

**`IntlChar::JG_GAMAL`**

**`IntlChar::JG_HAH`**

**`IntlChar::JG_TEH_MARBUTA_GOAL`**

**`IntlChar::JG_HAMZA_ON_HEH_GOAL`**

**`IntlChar::JG_HE`**

**`IntlChar::JG_HEH`**

**`IntlChar::JG_HEH_GOAL`**

**`IntlChar::JG_HETH`**

**`IntlChar::JG_KAF`**

**`IntlChar::JG_KAPH`**

**`IntlChar::JG_KNOTTED_HEH`**

**`IntlChar::JG_LAM`**

**`IntlChar::JG_LAMADH`**

**`IntlChar::JG_MEEM`**

**`IntlChar::JG_MIM`**

**`IntlChar::JG_NOON`**

**`IntlChar::JG_NUN`**

**`IntlChar::JG_PE`**

**`IntlChar::JG_QAF`**

**`IntlChar::JG_QAPH`**

**`IntlChar::JG_REH`**

**`IntlChar::JG_REVERSED_PE`**

**`IntlChar::JG_SAD`**

**`IntlChar::JG_SADHE`**

**`IntlChar::JG_SEEN`**

**`IntlChar::JG_SEMKATH`**

**`IntlChar::JG_SHIN`**

**`IntlChar::JG_SWASH_KAF`**

**`IntlChar::JG_SYRIAC_WAW`**

**`IntlChar::JG_TAH`**

**`IntlChar::JG_TAW`**

**`IntlChar::JG_TEH_MARBUTA`**

**`IntlChar::JG_TETH`**

**`IntlChar::JG_WAW`**

**`IntlChar::JG_YEH`**

**`IntlChar::JG_YEH_BARREE`**

**`IntlChar::JG_YEH_WITH_TAIL`**

**`IntlChar::JG_YUDH`**

**`IntlChar::JG_YUDH_HE`**

**`IntlChar::JG_ZAIN`**

**`IntlChar::JG_FE`**

**`IntlChar::JG_KHAPH`**

**`IntlChar::JG_ZHAIN`**

**`IntlChar::JG_BURUSHASKI_YEH_BARREE`**

**`IntlChar::JG_FARSI_YEH`**

**`IntlChar::JG_NYA`**

**`IntlChar::JG_ROHINGYA_YEH`**

**`IntlChar::JG_COUNT`**

**`IntlChar::GCB_OTHER`**

**`IntlChar::GCB_CONTROL`**

**`IntlChar::GCB_CR`**

**`IntlChar::GCB_EXTEND`**

**`IntlChar::GCB_L`**

**`IntlChar::GCB_LF`**

**`IntlChar::GCB_LV`**

**`IntlChar::GCB_LVT`**

**`IntlChar::GCB_T`**

**`IntlChar::GCB_V`**

**`IntlChar::GCB_SPACING_MARK`**

**`IntlChar::GCB_PREPEND`**

**`IntlChar::GCB_REGIONAL_INDICATOR`**

**`IntlChar::GCB_COUNT`**

**`IntlChar::WB_OTHER`**

**`IntlChar::WB_ALETTER`**

**`IntlChar::WB_FORMAT`**

**`IntlChar::WB_KATAKANA`**

**`IntlChar::WB_MIDLETTER`**

**`IntlChar::WB_MIDNUM`**

**`IntlChar::WB_NUMERIC`**

**`IntlChar::WB_EXTENDNUMLET`**

**`IntlChar::WB_CR`**

**`IntlChar::WB_EXTEND`**

**`IntlChar::WB_LF`**

**`IntlChar::WB_MIDNUMLET`**

**`IntlChar::WB_NEWLINE`**

**`IntlChar::WB_REGIONAL_INDICATOR`**

**`IntlChar::WB_HEBREW_LETTER`**

**`IntlChar::WB_SINGLE_QUOTE`**

**`IntlChar::WB_DOUBLE_QUOTE`**

**`IntlChar::WB_COUNT`**

**`IntlChar::SB_OTHER`**

**`IntlChar::SB_ATERM`**

**`IntlChar::SB_CLOSE`**

**`IntlChar::SB_FORMAT`**

**`IntlChar::SB_LOWER`**

**`IntlChar::SB_NUMERIC`**

**`IntlChar::SB_OLETTER`**

**`IntlChar::SB_SEP`**

**`IntlChar::SB_SP`**

**`IntlChar::SB_STERM`**

**`IntlChar::SB_UPPER`**

**`IntlChar::SB_CR`**

**`IntlChar::SB_EXTEND`**

**`IntlChar::SB_LF`**

**`IntlChar::SB_SCONTINUE`**

**`IntlChar::SB_COUNT`**

**`IntlChar::LB_UNKNOWN`**

**`IntlChar::LB_AMBIGUOUS`**

**`IntlChar::LB_ALPHABETIC`**

**`IntlChar::LB_BREAK_BOTH`**

**`IntlChar::LB_BREAK_AFTER`**

**`IntlChar::LB_BREAK_BEFORE`**

**`IntlChar::LB_MANDATORY_BREAK`**

**`IntlChar::LB_CONTINGENT_BREAK`**

**`IntlChar::LB_CLOSE_PUNCTUATION`**

**`IntlChar::LB_COMBINING_MARK`**

**`IntlChar::LB_CARRIAGE_RETURN`**

**`IntlChar::LB_EXCLAMATION`**

**`IntlChar::LB_GLUE`**

**`IntlChar::LB_HYPHEN`**

**`IntlChar::LB_IDEOGRAPHIC`**

**`IntlChar::LB_INSEPARABLE`**

**`IntlChar::LB_INSEPERABLE`**

**`IntlChar::LB_INFIX_NUMERIC`**

**`IntlChar::LB_LINE_FEED`**

**`IntlChar::LB_NONSTARTER`**

**`IntlChar::LB_NUMERIC`**

**`IntlChar::LB_OPEN_PUNCTUATION`**

**`IntlChar::LB_POSTFIX_NUMERIC`**

**`IntlChar::LB_PREFIX_NUMERIC`**

**`IntlChar::LB_QUOTATION`**

**`IntlChar::LB_COMPLEX_CONTEXT`**

**`IntlChar::LB_SURROGATE`**

**`IntlChar::LB_SPACE`**

**`IntlChar::LB_BREAK_SYMBOLS`**

**`IntlChar::LB_ZWSPACE`**

**`IntlChar::LB_NEXT_LINE`**

**`IntlChar::LB_WORD_JOINER`**

**`IntlChar::LB_H2`**

**`IntlChar::LB_H3`**

**`IntlChar::LB_JL`**

**`IntlChar::LB_JT`**

**`IntlChar::LB_JV`**

**`IntlChar::LB_CLOSE_PARENTHESIS`**

**`IntlChar::LB_CONDITIONAL_JAPANESE_STARTER`**

**`IntlChar::LB_HEBREW_LETTER`**

**`IntlChar::LB_REGIONAL_INDICATOR`**

**`IntlChar::LB_COUNT`**

**`IntlChar::NT_NONE`**

**`IntlChar::NT_DECIMAL`**

**`IntlChar::NT_DIGIT`**

**`IntlChar::NT_NUMERIC`**

**`IntlChar::NT_COUNT`**

**`IntlChar::HST_NOT_APPLICABLE`**

**`IntlChar::HST_LEADING_JAMO`**

**`IntlChar::HST_VOWEL_JAMO`**

**`IntlChar::HST_TRAILING_JAMO`**

**`IntlChar::HST_LV_SYLLABLE`**

**`IntlChar::HST_LVT_SYLLABLE`**

**`IntlChar::HST_COUNT`**

**`IntlChar::FOLD_CASE_DEFAULT`**

**`IntlChar::FOLD_CASE_EXCLUDE_SPECIAL_I`**

## Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------|
| 7.0.6 | Додано константу **`IntlChar::NO_NUMERIC_VALUE`**. |

## Зміст

- [IntlChar::charAge](intlchar.charage.md) - Отримати "вік"
символьного коду
- [IntlChar::charDigitValue](intlchar.chardigitvalue.md) — Отримати
десяткову цифру із символу десяткової цифри
- [IntlChar::charDirection](intlchar.chardirection.md) — Отримати
категорію направлення листа для символу
- [IntlChar::charFromName](intlchar.charfromname.md) — Знайти символ
Unicode по його імені та повернути його код
- [IntlChar::charMirror](intlchar.charmirror.md) — Отримати
"дзеркальний" символ за кодом
- [IntlChar::charName](intlchar.charname.md) — Отримати назву символу
Unicode
- [IntlChar::charType](intlchar.chartype.md) — Отримати головну
категорію, до якої входить символ
- [IntlChar::chr](intlchar.chr.md) — Отримати символ Unicode на його
коду
- [IntlChar::digit](intlchar.digit.md) — Отримати десяткове число
із символу Unicode із заданою основою
- [IntlChar::enumCharNames](intlchar.enumcharnames.md) - Перераховує
усі присвоєні символи Unicode у заданому діапазоні
- [IntlChar::enumCharTypes](intlchar.enumchartypes.md) -
Перелік послідовностей символів Unicode згрупованих за
їм категоріям
- [IntlChar::foldCase](intlchar.foldcase.md) - Виробляє
перетворення регістру заданого символу
- [IntlChar::forDigit](intlchar.fordigit.md) — Отримати символ
що представляє задане число у заданій підставі
- [IntlChar::getBidiPairedBracket](intlchar.getbidipairedbracket.md)
— Отримати парну дужку для символу
- [IntlChar::getBlockCode](intlchar.getblockcode.md) — Отримати блок
розміщення символу Unicode
- [IntlChar::getCombiningClass](intlchar.getcombiningclass.md) -
Отримати комбінуючий клас для символу
- [IntlChar::getFC_NFKC_Closure](intlchar.getfc-nfkc-closure.md) -
Отримати властивість FC_NFKC_Closure для символу
- [IntlChar::getIntPropertyMaxValue](intlchar.getintpropertymaxvalue.md)
— Отримати мінімальне значення для якості Unicode
- [IntlChar::getIntPropertyMinValue](intlchar.getintpropertyminvalue.md)
— Отримати мінімальне значення для якості Unicode
- [IntlChar::getIntPropertyValue](intlchar.getintpropertyvalue.md) -
Отримати значення властивості Unicode для символу
- [IntlChar::getNumericValue](intlchar.getnumericvalue.md) -
Отримати числову виставу для символу Unicode
- [IntlChar::getPropertyEnum](intlchar.getpropertyenum.md) -
Отримати значення константи властивості на його ім'я
- [IntlChar::getPropertyName](intlchar.getpropertyname.md) -
Отримати Unicode ім'я властивості
- [IntlChar::getPropertyValueEnum](intlchar.getpropertyvalueenum.md)
— Повернути числовий ідентифікатор властивості на його ім'я
- [IntlChar::getPropertyValueName](intlchar.getpropertyvaluename.md)
— Отримати ім'я Unicode для значення властивості
- [IntlChar::getUnicodeVersion](intlchar.getunicodeversion.md) -
Отримати версію Unicode
- [IntlChar::hasBinaryProperty](intlchar.hasbinaryproperty.md) -
Перевірити бінарну властивість Unicode для символу
- [IntlChar::isalnum](intlchar.isalnum.md) — Перевірити, чи є
символ буквою чи цифрою
- [IntlChar::isalpha](intlchar.isalpha.md) — Перевірити, чи є
символ буквою
- [IntlChar::isbase](intlchar.isbase.md) — Перевірити, чи є
символ базовим
- [IntlChar::isblank](intlchar.isblank.md) — Перевірити, чи є
знак "порожнім" або "горизонтальним пропуском"
- [IntlChar::iscntrl](intlchar.iscntrl.md) — Перевірити, чи є
символ керуючим
- [IntlChar::isdefined](intlchar.isdefined.md) — Перевірити,
чи визначено символ
- [IntlChar::isdigit](intlchar.isdigit.md) — Перевірити, чи є
символ цифрою
- [IntlChar::isgraph](intlchar.isgraph.md) — Перевірити, чи є
символ графічний символ
- [IntlChar::isIDIgnorable](intlchar.isidignorable.md) — Перевірити,
чи є символ ігнорованим
- [IntlChar::isIDPart](intlchar.isidpart.md) — Перевірити, допустимо
чи використовувати символ в ідентифікаторі
- [IntlChar::isIDStart](intlchar.isidstart.md) — Перевірити,
чи можна використовувати символ на початку ідентифікатора
- [IntlChar::isISOControl](intlchar.isisocontrol.md) — Перевірити,
чи є символ керуючим відповідно до ISO
- [IntlChar::isJavaIDPart](intlchar.isjavaidpart.md) — Перевірити,
чи є символ допустимим в ідентифікаторі Java
- [IntlChar::isJavaIDStart](intlchar.isjavaidstart.md) — Перевірити,
чи може символ бути першим в ідентифікаторі Java
- [IntlChar::isJavaSpaceChar](intlchar.isjavaspacechar.md)
Перевірити, чи є символ пробельним з точки зору Java
- [IntlChar::islower](intlchar.islower.md) — Перевірити, чи в нижньому
регістрі символ
- [IntlChar::isMirrored](intlchar.ismirrored.md) — Перевірити, якщо у
символу властивість Bidi_Mirrored
- [IntlChar::isprint](intlchar.isprint.md) — Перевіряє, чи є
символ відображається
- [IntlChar::ispunct](intlchar.ispunct.md) — Перевіряє, чи є
символ пунктуації символ
- [IntlChar::isspace](intlchar.isspace.md) — Перевіряє, чи є
символ пробільний
- [IntlChar::istitle](intlchar.istitle.md) — Перевірити, чи є
символ титульним (Titlecase)
- [IntlChar::isUAlphabetic](intlchar.isualphabetic.md) — Перевірити,
чи встановлено у символу властивість Alphabetic
- [IntlChar::isULowercase](intlchar.isulowercase.md) — Перевірити,
чи є символ символом у нижньому регістрі
- [IntlChar::isupper](intlchar.isupper.md) — Перевірити, чи входить
символ у категорію "Lu" (літера у верхньому регістрі)
- [IntlChar::isUUppercase](intlchar.isuuppercase.md) — Перевірити,
чи є символ символом у верхньому регістрі
- [IntlChar::isUWhiteSpace](intlchar.isuwhitespace.md) — Перевірити,
чи має символ властивість White_Space (пробельний символ)
- [IntlChar::isWhitespace](intlchar.iswhitespace.md) — Перевірити,
чи є символ пробельним з точки зору ICU
- [IntlChar::isxdigit](intlchar.isxdigit.md) — Перевірити, чи є
чи символ шістнадцятковою цифрою
- [IntlChar::ord](intlchar.ord.md) — Отримати код Unicode
- [IntlChar::tolower](intlchar.tolower.md) — Перетворення символу
Unicode в нижній регістр
- [IntlChar::totitle](intlchar.totitle.md) — Перетворює символ
Unicode у titlecase
- [IntlChar::toupper](intlchar.toupper.md) — Перетворення символу
Unicode у верхній регістр
