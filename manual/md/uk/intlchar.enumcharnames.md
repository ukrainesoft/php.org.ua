- [« IntlChar::digit](intlchar.digit.md)
- [IntlChar::enumCharTypes »](intlchar.enumchartypes.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перераховує всі присвоєні символи Unicode у заданому діапазоні

# IntlChar::enumCharNames

(PHP 7, PHP 8)

IntlChar::enumCharNames — Перераховує всі присвоєні символи Unicode
заданому діапазоні

### Опис

public static **IntlChar::enumCharNames**(
int\|string `$start`,
int\|string `$end`,
[callable](language.types.callable.md) `$callback`,
int `$type` u003d IntlChar::UNICODE_CHAR_NAME
): ?bool

Перелічує всі присвоєні символи Unicode у заданому діапазоні
(включаючи початок діапазону та виключаючи кінець) та для кожного з них
функцію, передаючи код символу та його ім'я.

Для імен Unicode 1.0 перераховуються ті символи, імена яких
відмінні від своїх "сучасних" імен.

### Список параметрів

`start`
Код символу, з якого починається діапазон.

`end`
Код символу, з якого починається діапазон. Сам цей символ у діапазоні
не потрапить.

`callback`
Функція, яка буде викликана для кожного символу. В неї
будуть передані такі три аргументи:

- int `$codepoint` - код символу
- int `$nameChoice` - значення з `type`, дивіться опис нижче
- string `$name` - Ім'я символу

`type`
Категорія символів для перерахунку. Одна з констант:

- **`IntlChar::UNICODE_CHAR_NAME`** (за замовчуванням)
- **`IntlChar::UNICODE_10_CHAR_NAME`**
- **`IntlChar::EXTENDED_CHAR_NAME`**
- **`IntlChar::CHAR_NAME_ALIAS`**
- **`IntlChar::CHAR_NAME_CHOICE_COUNT`**

### Значення, що повертаються

Повертає **`null`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Перелік діапазону символів**

` <?phpIntlChar::enumCharNames(0x2600, 0x2610, function($codepoint, $nameChoice, $name) {    printf("U+%04x %s
", $codepoint, $name);});?> `

Результат виконання цього прикладу:

U+2600 BLACK SUN WITH RAYS
U+2601 CLOUD
U+2602 UMBRELLA
U+2603 SNOWMAN
U+2604 COMET
U+2605 BLACK STAR
U+2606 WHITE STAR
U+2607 LIGHTNING
U+2608 THUNDERSTORM
U+2609 SUN
U+260a ASCENDING NODE
U+260b DESCENDING NODE
U+260c CONJUNCTION
U+260d OPPOSITION
U+260e BLACK TELEPHONE
U+260f WHITE TELEPHONE

### Дивіться також

- [IntlChar::charName()](intlchar.charname.md) - Отримати ім'я
символ Unicode
- [IntlChar::charFromName()](intlchar.charfromname.md) - Знайти
символ Unicode на ім'я та повернути його код
