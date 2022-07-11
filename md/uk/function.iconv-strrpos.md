- [« iconv_strpos](function.iconv-strpos.md)
- [iconv_substr »](function.iconv-substr.md)

- [PHP Manual](index.md)
- [Функції iconv](ref.iconv.md)
- Повертає позицію останнього входження підрядка

# iconv_strrpos

(PHP 5, PHP 7, PHP 8)

iconv_strrpos — Повертає позицію останнього входження підрядка

### Опис

**iconv_strrpos**(string `$haystack`, string `$needle`, ?string
`$encoding` u003d **`null`**): int\|false

Знаходить останню позицію підрядки `needle` у рядку `haystack`.

На відміну від [strrpos()](function.strrpos.md), **iconv_strrpos()**
повертає зміщення перед рядком у символах, а не в байтах.
Кількість символів трактується залежно від вказаної параметром
кодування кодування.

### Список параметрів

`haystack`
Рядок, в якому проводиться пошук.

`needle`
Шуканий підрядок.

`encoding`
Якщо параметр 'encoding' не вказаний, мається на увазі, що 'string'
має кодування [iconv.internal_encoding](iconv.configuration.md).

Якщо `haystack` або `needle` не є рядками, вони будуть
перетворені на рядок і застосовані як код символу.

### Значення, що повертаються

Повертає номер позиції останнього входження рядка `needle` у
`haystack`.

Якщо рядок `needle` не знайдено, **iconv_strrpos()** повертає
**`false`**.

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальну інформацію див. у розділі [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | encoding тепер допускає значення null. |

### Дивіться також

- [strrpos()](function.strrpos.md) - Повертає позицію останнього
входження підрядки у рядку
- [iconv_strpos()](function.iconv-strpos.md) - Повертає позицію
першого входження підрядка
- [mb_strrpos()](function.mb-strrpos.md) - Пошук позиції останнього
входження одного рядка в інший
