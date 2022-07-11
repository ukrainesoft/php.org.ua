- [« mb_decode_numericentity](function.mb-decode-numericentity.md)
- [mb_detect_order »](function.mb-detect-order.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Визначення кодування символів

#mb_detect_encoding

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

mb_detect_encoding — Визначення кодування символів

### Опис

**mb_detect_encoding**(string `$string`, array\|string\|null
`$encodings` u003d **`null`**, bool `$strict` u003d **`false`**): string\|false

Визначає найімовірніше кодування символів для рядка (string)
`string` із впорядкованого списку кандидатів.

Автоматичне визначення передбачуваного кодування символів не може
бути повністю надійним; без додаткової інформації це схоже на
розшифровка зашифрованого рядка без ключа. Завжди бажано
використовувати індикацію кодування символів, що зберігається або передається з
даними, як HTTP-заголовок "Content-Type".

Функція найбільш корисна з багатобайтовим кодуванням, коли не всі
послідовності байтів утворюють допустимий рядок. Якщо вхідна
рядок містить таку послідовність, це кодування буде відхилено,
і буде перевірено наступне кодування.

### Список параметрів

`string`
Перевірений рядок (string).

`encodings`
Впорядкований список кодувань символів. Список може бути вказаний як
масив рядків або як рядок кодувань, розділених комами.

Якщо `encodings` не заданий або є **`null`**, буде використовуватись
поточний detect_order (встановлений за допомогою параметра конфігурації
[mbstring.detect_order](mbstring.configuration.md#ini.mbstring.detect-order)
або функції [mb_detect_order()](function.mb-detect-order.md)).

`strict`
Керує поведінкою, коли `string` неприпустима в жодній з
перерахованих 'encodings'. Якщо для 'strict' встановлено значення
**`false`**, буде повернуто найбільш відповідне кодування; якщо для
`strict` встановлено значення **`true`**, буде повернено **`false`**.

Значення за замовчуванням для 'strict' можна встановити за допомогою параметра
конфігурації
[mbstring.strict_detection](mbstring.configuration.md#ini.mbstring.strict-detection).

### Значення, що повертаються

Назва кодування символів або **`false`**, якщо рядок неприпустимий
в одному з перерахованих кодувань.

### Приклади

**Приклад #1 Приклад використання **mb_detect_encoding()****

` <?php// Определение кодировки с текущим detect_orderecho mb_detect_encoding($str);// "auto" раскрывается в соответствии с mbstring.languageecho mb_detect_encoding($str, "auto");// Зададим список кодировок "encodings" в виде строкиecho mb_detect_encoding($str, "JIS, eucjp-win, sjis-win");// Використання масиву для завдання можливих кодувань "encodings"$encodings u003d [  "ASCII",| ($str, $encodings);?> `

**Приклад #2 Дія параметра `strict`**

` <?php//''áéóú' закодована в ISO-8859-1$str u003d "\xE1\xE9\xF3\xFA";// Рядок недійсна в ASCII або УТF-8, з| mb_detect_encoding($str, ['ASCII', 'UTF-8'], false));var_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8'], true));// Якщо допустима , параметр strict не змінює результатvar_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8', 'ISO-8859-1'], false));var_dump(mb_detect_encoding('str, -8', 'ISO-8859-1'], true));?> `

Результат виконання цього прикладу:

string(5) "UTF-8"
bool(false)
string(10) "ISO-8859-1"
string(10) "ISO-8859-1"

У деяких випадках одна і та ж послідовність байтів може
утворювати допустимий рядок у кількох кодуваннях символів, та
неможливо дізнатись, яка інтерпретація призначалася. Наприклад, серед
багатьох інших байтова послідовність "xC4\xA2" може бути:

- "Ä¢" (U+00C4 LATIN CAPITAL LETTER A WITH DIAERESIS з наступним
U+00A2 CENT SIGN) закодована в ISO-8859-1, ISO-8859-15 або
Windows-1252
- "ФЂ" (U+0424 CYRILLIC CAPITAL LETTER EF з наступним U+0402
CYRILLIC CAPITAL LETTER (DJE) закодована в ISO-8859-5
- """ (U+0122 LATIN CAPITAL LETTER G WITH CEDILLA) закодована в
UTF-8

**Приклад #3 Використання порядку при збігу кількох кодувань**

` <?php$str u003d "\xC4\xA2";// Рядок дійсний у всіх трьох кодуваннях, тому буде повернена перше з перелічених кодувань.var_dump(mb_dete_8' 1', 'ISO-8859-5']));var_dump(mb_detect_encoding($str, ['ISO-8859-1', 'ISO-8859-5', 'UTF-8']));var_dump(mb_detect_encoding ($str, ['ISO-8859-5', 'UTF-8', 'ISO-8859-1']));?> `

Результат виконання цього прикладу:

string(5) "UTF-8"
string(10) "ISO-8859-1"
string(10) "ISO-8859-5"

### Дивіться також

- [mb_detect_order()](function.mb-detect-order.md) -
Встановлення/отримання списку кодувань для механізмів визначення
кодування
