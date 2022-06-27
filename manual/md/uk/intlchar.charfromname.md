- [« IntlChar::charDirection](intlchar.chardirection.md)
- [IntlChar::charMirror »](intlchar.charmirror.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Знайти символ Unicode по його імені та повернути його код

# IntlChar::charFromName

(PHP 7, PHP 8)

IntlChar::charFromName — Знайти символ Unicode на ім'я та повернути його
код

### Опис

public static **IntlChar::charFromName**(string `$name`, int `$type` u003d
IntlChar::UNICODE_CHAR_NAME): ?int

Знаходить символ Unicode по його імені та повертає його код.

Ім'я порівнюється точно та повністю. Якщо ім'я не відповідає
будь-якому символу, то поверне **`false`**.

Ім'я Unicode 1.0 вважається таким, що збіглося тільки якщо воно відрізняється від
сучасне ім'я. Усі імена Unicode повинні витись у верхньому регістрі.
Розширені імена в нижньому регістрі та містять шістнадцяткове
значення у фігурних дужках.

### Список параметрів

`name`
Повне ім'я Unicode символ.

`type`
Які типи символів шукати. Одна з констант:

- **`IntlChar::UNICODE_CHAR_NAME`** (за замовчуванням)
- **`IntlChar::UNICODE_10_CHAR_NAME`**
- **`IntlChar::EXTENDED_CHAR_NAME`**
- **`IntlChar::CHAR_NAME_ALIAS`**
- **`IntlChar::CHAR_NAME_CHOICE_COUNT`**

### Значення, що повертаються

Значення коду символу Unicode по заданому імені (у вигляді цілого числа
(int)), або **`null`**, якщо такого символу немає.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::charFromName("LATIN CAPITAL LETTER A"));var_dump(IntlChar::charFromName("SNOWMAN"));var_dump(IntlChar::charFromName("RECYCLING SYMBOLICS FOR | ;var_dump(IntlChar::charFromName("A RANDOM STRING WHICH DOESN'T CORRESPOND TO ANY UNICODE CHARACTER"));?> `

Результат виконання цього прикладу:

int(65)
int(9731)
int(9843)
NULL

### Дивіться також

- [IntlChar::charName()](intlchar.charname.md) - Отримати ім'я
символ Unicode
- [IntlChar::enumCharNames()](intlchar.enumcharnames.md) -
Перелічує всі присвоєні символи Unicode у заданому діапазоні
