- [« Функціонал, оголошений застарілим у PHP
7.1.x](migration71.deprecated.md)
- [Інші зміни »](migration71.other-changes.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.0.x на PHP 7.1.x](migration71.md)
- Змінені функції

## Змінені функції

### Ядро PHP

- [getopt()](function.getopt.md) має третій, необов'язковий,
параметр, у який записується індекс, на якому зупинилася
обробка. Змінна в цю опцію передається за посиланням.
- У [getenv()](function.getenv.md) більше не обов'язково передавати
параметр. Якщо параметр не заданий, повертаються всі поточні
змінні оточення як асоціативного масиву.
- [get_headers()](function.get-headers.md) тепер має
додатковий параметр для дозволу передачі певного
користувачем потокового контексту.
-
[output_reset_rewrite_vars()](function.output-reset-rewrite-vars.md)
більше не скидає сесійні перемінні перезаписи URL-адреси.
- [parse_url()](function.parse-url.md) тепер більш вимоглива та
підтримує RFC3986.
- [unpack()](function.unpack.md) тепер має третій необов'язковий
параметр для визначення зміщення з якого розпочинати розпаковування.

### Файлова система

- [file_get_contents()](function.file-get-contents.md) тепер
приймає негативні значення усунення початку пошуку, якщо потік
підтримує усунення.
- [tempnam()](function.tempnam.md) тепер видає повідомлення при
поверніть до системного тимчасового каталогу.

### JSON

- [json_encode()](function.json-encode.md) тепер приймає нову
опцію, **`JSON_UNESCAPED_LINE_TERMINATORS`**, для заборони
екранування символів U+2028 та U+2029 коли передається
**`JSON_UNESCAPED_UNICODE`**.

### Багатобайтові рядки

- [mb_ereg()](function.mb-ereg.md) тепер відхиляє некоректні
послідовність байтів.
- [mb_ereg_replace()](function.mb-ereg-replace.md) тепер відхиляє
некоректні послідовності байтів.

### PDO

- [PDO::lastInsertId()](pdo.lastinsertid.md) для PostgreSQL тепер
породжує помилку, якщо у поточній сесії (з'єднанні) не викликано
`nextval`.

### PostgreSQL

- [pg_last_notice()](function.pg-last-notice.md) тепер приймає
необов'язковий параметр, який визначає операцію. Використовується одна з
наступних констант: **`PGSQL_NOTICE_LAST`**, **`PGSQL_NOTICE_ALL`**
або **`PGSQL_NOTICE_CLEAR`**.
- [pg_fetch_all()](function.pg-fetch-all.md) тепер приймає
другий, необов'язковий параметр для завдання типу результату
(аналогічно до третього параметра
[pg_fetch_array()](function.pg-fetch-array.md)).
- [pg_select()](function.pg-select.md) тепер приймає четверте,
необов'язковий параметр для завдання типу результату (аналогічно
третьому параметру
[pg_fetch_array()](function.pg-fetch-array.md)).

### Сесії

- [session_start()](function.session-start.md) тепер повертає
**`false`** і більше не ініціалізує `$_SESSION`, коли вона не
змогла запустити сесію.
