- [« IntlChar::charFromName](intlchar.charfromname.md)
- [IntlChar::charName »](intlchar.charname.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати "дзеркальний" символ за кодом

# IntlChar::charMirror

(PHP 7, PHP 8)

IntlChar::charMirror — Отримати "дзеркальний" символ за кодом

### Опис

public static **IntlChar::charMirror**(int\|string `$codepoint`):
int\|string\|null

Зв'язує вказаний символ із дзеркальним відображенням.

Для символів з властивістю *Bidi_Mirrored* іноді необхідно отримати
зв'язок з іншим символом Unicode який можна використовувати як
дзеркальне відображення гліфа заданого символу. Такий собі спосіб
перетворення тексту на та з кодувань з візуального порядку "для
бідних". Також корисно для дисплеїв без можливості вибору гліфу.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає інший код символу Unicode, який можна використовувати як
дзеркальне відображення заданого, або `codepoint`, якщо відповідного
символу не знайшлося або якщо 'codepoint' не має властивості
*Bidi_Mirrored*.

Тип, що повертається, повинен бути int, якщо тільки символ не був переданий як
рядок UTF-8 (string), у разі повернеться рядок (string). В разі
виникнення помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::charMirror("A"));var_dump(IntlChar::charMirror("<"));var_dump(IntlChar::charMirror("("));?> `

Результат виконання цього прикладу:

string(1) "A"
string(1) ">"
string(2) ")"

### Дивіться також

- [IntlChar::isMirrored()](intlchar.ismirrored.md) - Перевірити, якщо
у символу властивість Bidi_Mirrored
- **`IntlChar::PROPERTY_BIDI_MIRRORED`**
