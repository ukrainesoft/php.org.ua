- [«wordwrap](function.wordwrap.md)
- [Модулі, що стосуються змінних та типів
»](refs.basic.vartype.md)

- [PHP Manual](index.md)
- [Рядки](book.strings.md)
-   Список змін

# Список змін

Наступні зміни були зроблені з класами/функціями/методами
даного модуля.

| Version | Function | Description |
|---------------|--------------------------------- ---------------------------------------|---------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------|
| 8.1.0 | [get_html_translation_table](function.get-html-translation-table.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| | [html_entity_decode](function.md-entity-decode.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| | [htmlentities](function.mdentities.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| | [htmlspecialchars](function.mdspecialchars.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| | [htmlspecialchars_decode](function.mdspecialchars-decode.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| 8.0.0 | [convert_uuencode](function.convert-uuencode.md) | До цієї версії при спробі перетворити порожній рядок поверталося false без особливих причин. |
| | [count_chars](function.count-chars.md) | До цієї версії функція повертала false у разі виникнення помилки. |
| | [crypt](function.crypt.md) | salt більше не є необов'язковим. |
| | [explode](function.explode.md) | explode тепер викидає TypeError, якщо параметр separator є порожнім рядком (""). Раніше замість виключення explode повертала false. |
| | [html_entity_decode](function.md-entity-decode.md) | encoding тепер допускає значення null. |
| | [htmlentities](function.mdentities.md) | encoding тепер допускає значення null. |
| | [implode](function.implode.md) | Передача separator після array більше не підтримується. |
| | [Levenshtein](function.levenshtein.md) | До цієї версії levenshtein потрібно було викликати з двома чи п'ятьма аргументами. |
| | [metaphone](function.metaphone.md) | Функція повертала false у разі виникнення помилки. |
| | [number_format](function.number-format.md) | До цієї версії функція number_format приймала один, два або чотири параметри (але не три). |
| | [parse_str](function.parse-str.md) | result більше не є необов'язковим. |
| | [soundex](function.soundex.md) | До цієї версії при виклику функції з порожнім рядком поверталося false без особливих причин. |
| | [sprintf](function.sprintf.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [str_word_count](function.str-word-count.md) | characters тепер допускає значення null. |
| | [strcspn](function.strcspn.md) | length тепер допускає значення null. |
| | [strip_tags](function.strip-tags.md) | allowed_tags тепер припускає значення null. |
| | [Stripos](function.stripos.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [Stristr](function.stristr.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strpos](function.strpos.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strrchr](function.strrchr.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strripos](function.strripos.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strrpos](function.strrpos.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strspn](function.strspn.md) | length тепер допускає значення null. |
| | [strstr](function.strstr.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [substr](function.substr.md) | Параметр length тепер припускає значення null. Якщо значення параметра length явно встановлено як null, функція повертає підрядок, що закінчується в кінці рядка; раніше повертався порожній рядок. |
| | [substr](function.substr.md) | Функція повертає порожній рядок, де раніше повертала false. |
| | [substr_compare](function.substr-compare.md) | length тепер допускає значення null. |
| | [substr_count](function.substr-count.md) | length тепер допускає значення null. |
| | [substr_replace](function.substr-replace.md) | length тепер допускає значення null. |
| | [vsprintf](function.vsprintf.md) | Функція більше не повертає false у разі виникнення помилки. |
| 7.4.0 | [chr](function.chr.md) | Функція більше не набуває непідтримуваних значень codepoint і перетворює їх на 0. |
| | [implode](function.implode.md) | Передача separator після array (тобто використання недокументованого порядку параметрів) застаріла. |
| | [money_format](function.money-format.md) | Функція застаріла. Замість неї використовуйте NumberFormatter::formatCurrency. |
| | [str_getcsv](function.str-getcsv.md) | Тепер порожній параметр escape інтерпретуватиметься як вимога відключення пропрієтарного механізму екранування. Раніше порожній рядок позначав використання символу екранування за промовчанням. |
| | [strip_tags](function.strip-tags.md) | allowed_tags тепер альтернативно сприймає масив (array). |
| 7.3.0 | [Stripos](function.stripos.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [Stristr](function.stristr.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strpos](function.strpos.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strrchr](function.strrchr.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strripos](function.strripos.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strrpos](function.strrpos.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strstr](function.strstr.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| 7.2.18, 7.3.5 | [substr_compare](function.substr-compare.md) | offset тепер може бути рівним haystack. |
| 7.2.0 | [number_format](function.number-format.md) | number_format була змінена, щоб не повертати -0, раніше -0 могло бути повернено у випадках, коли num -0.01. |
| | [parse_str](function.parse-str.md) | Використання parse_str без другого параметра викликатиме помилку рівня E_DEPRECATED. |
| | [utf8_decode](function.utf8-decode.md) | Функцію було перенесено з модуля XML в ядро PHP. У попередніх версіях вона була доступна лише за встановленого модуля XML. |
| | [utf8_encode](function.utf8-encode.md) | Функцію було перенесено з модуля XML в ядро PHP. У попередніх версіях вона була доступна лише за встановленого модуля XML. |
| 7.1.0 | [str_shuffle](function.str-shuffle.md) | Внутрішній алгоритм отримання випадкових чисел змінено з функції rand бібліотеки libc на генератор з урахуванням Вихря Мерсена. |
| | [Stripos](function.stripos.md) | Додано підтримку негативних значень offset. |
| | [strpos](function.strpos.md) | Додано підтримку негативних значень offset. |
| | [substr_count](function.substr-count.md) | Додано підтримку негативних значень offset і length. length тепер також може бути 0. |
