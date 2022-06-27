- [«mb_list_encodings](function.mb-list-encodings.md)
- [mb_output_handler »](function.mb-output-handler.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Отримує кодову точку символу Unicode

#mb_ord

(PHP 7 \>u003d 7.2.0, PHP 8)

mb_ord — Отримує кодову точку символу Unicode

### Опис

**mb_ord**(string `$string`, ?string `$encoding` u003d **`null`**):
int\|false

Повертає значення кодової точки Unicode для цього символу.

Функція доповнює [mb_chr()](function.mb-chr.md).

### Список параметрів

`string`
Рядок

`encoding`
Параметр 'encoding' є символьним кодуванням. Якщо він
опущений або дорівнює **`null`**, замість нього буде використано значення
внутрішнього кодування.

### Значення, що повертаються

Кодова точка Unicode для першого символу `string` або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------|
| 8.0.0 | Тепер параметр `encoding` може набувати значення **`null`**. |

### Приклади

` <?phpvar_dump(mb_ord("A", "UTF-8"));var_dump(mb_ord("🐘", "UTF-8"));var_dump(mb_ord("\x80", "ISO-8859-1 "));var_dump(mb_ord("\x80", "Windows-1252"));?> `

Результат виконання цього прикладу:


int(65)
int(128024)
int(128)
int(8364)

### Дивіться також

- [mb_internal_encoding()](function.mb-internal-encoding.md) -
Встановлення/отримання внутрішнього кодування скрипту
- [mb_chr()](function.mb-chr.md) - Повертає символ за значенням
кодової точки Unicode
- [IntlChar::ord()](intlchar.ord.md) - Отримати код символ Unicode
- [ord()](function.ord.md) - Конвертує перший байт рядка в число
від 0 до 255
