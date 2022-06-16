- [«mb_check_encoding](function.mb-check-encoding.md)
- [mb_convert_case »] (function.mb-convert-case.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Повертає символ за значенням кодової точки Unicode

#mb_chr

(PHP 7 \>u003d 7.2.0, PHP 8)

mb_chr — Повертає символ за значенням кодової точки Unicode

### Опис

**mb_chr**(int `$codepoint`, ?string `$encoding` u003d **`null`**):
string\|false

Повертає рядок, що містить символ, вказаний значенням кодової точки
Unicode, закодований у зазначеному кодуванні.

Функція доповнює [mb_ord()](function.mb-ord.md).

### Список параметрів

`codepoint`
Значення кодової точки Unicode, наприклад `128024` для *U+1F418 ELEPHANT*

`encoding`
Параметр 'encoding' є символьним кодуванням. Якщо він
опущений або дорівнює **`null`**, замість нього буде використано значення
внутрішнього кодування.

### Значення, що повертаються

Рядок, що містить запитаний символ, якщо він може бути представлений
у зазначеному кодуванні або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------|
| 8.0.0 | Тепер параметр `encoding` може набувати значення **`null`**. |

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?php$values u003d [65, 63, 0x20AC, 128024];foreach ($values as $value) {   var_dump(mb_chr($value, 'UTF-8')); var_dump(mb_chr($value, 'ISO-8859-1'));}?> `

Результат виконання цього прикладу:

string(1) "A"
string(1) "A"
string(1) "?"
string(1) "?"
string(3) "€"
bool(false)
string(4) "🐘"
bool(false)

### Дивіться також

- [mb_internal_encoding()](function.mb-internal-encoding.md) -
Встановлення/отримання внутрішнього кодування скрипту
- [mb_ord()](function.mb-ord.md) - Отримує кодову точку символу
Unicode
- [IntlChar::ord()](intlchar.ord.md) - Отримати код символ Unicode
- [chr()](function.chr.md) - Генерує односимвольний рядок по
заданому числу
