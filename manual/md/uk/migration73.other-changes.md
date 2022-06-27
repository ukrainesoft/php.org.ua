- [« Функціонал, оголошений застарілим у PHP
7.3.x](migration73.deprecated.md)
- [Підтримка Windows»](migration73.windows-support.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.2.x на PHP 7.3.x](migration73.md)
- Інші зміни

## Інші зміни

### Ядро PHP

#### Функція set(raw)cookie приймає аргумент $option

Функції [setcookie()](function.setcookie.md) та
[setrawcookie()](function.setrawcookie.md) тепер також підтримують
наступне оголошення (сигнатуру):

[setcookie](function.setcookie.md)(string `$name`, string `$value` u003d
"", array `$options` u003d \[\]): bool

де `$options` - асоціативний масив, який може мати будь-який з
ключів ``expires'`, ``path'', ``domain'', ``secure'', ``httponly'' і
``samesite'`.

#### Нові ini-директиви syslog

Наступні ini-директиви додані для налаштування логування, якщо для
опції [error_log](errorfunc.configuration.md#ini.error-log)
встановлено значення `syslog`:

[syslog.facility](errorfunc.configuration.md#ini.syslog.facility)
Вказує тип програми, яка реєструє повідомлення.

[syslog.filter](errorfunc.configuration.md#ini.syslog.filter)
Задає тип фільтра для фільтрації повідомлень із підтримуваними типами
фільтрів - `all`, `no-ctrl` та `ascii`. Починаючи з PHP 7.3.8, також
доступний тип `raw`, що відновлює поведінку системного журналу
попередніх версіях PHP. Цей фільтр також вплине на дзвінки
[syslog()](function.syslog.md).

[syslog.ident](errorfunc.configuration.md#ini.syslog.ident)
Задає рядок ident, який додається перед кожним повідомленням.

#### Складальник сміття

Покращено [збір циклічних посилань](features.gc.collecting-cycles.md),
що може призвести до значних покращень продуктивності.

#### Різне

Функція [var_export()](function.var-export.md) тепер експортує
об'єкти **stdClass** як масив, приведений до об'єкта
(`(object) array( ... )`), замість використання неіснуючого методу
**stdClass::\_\_setState()**.

Функція [debug_zval_dump()](function.debug-zval-dump.md) змінена для
відображення рекурсивних масивів та об'єктів так само, як і
[var_dump()](function.var-dump.md). Тепер вона не відображає їх
двічі.

Функції [array_push()](function.array-push.md) та
[array_unshift()](function.array-unshift.md) тепер також можуть бути
викликані з одним аргументом, що особливо зручно у поєднанні з оператором
поширення.

### Інтерактивний відладчик PHP

Видалені константи, що не використовуються **`PHPDBG_FILE`**, **`PHPDBG_METHOD`**,
**`PHPDBG_LINENO`** та **`PHPDBG_FUNC`**.

### Менеджер процесів FastCGI

Тепер також доступна функція
[getallheaders()](function.getallheaders.md).

### Бібліотека Client URL (cURL)

Тепер потрібна бібліотека libcurl версії ≥ 7.15.5.

### Фільтрування даних

**`FILTER_VALIDATE_FLOAT`** тепер також підтримує параметр
`thousand`, який визначає набір дозволених символів-розділювачів
для тисяч. Значення за умовчанням (``',.'`) повністю об'єднане
із попередніми версіями PHP.

**`FILTER_SANITIZE_ADD_SLASHES`** був доданий як псевдонім
фільтра `magic_quotes` (**`FILTER_SANITIZE_MAGIC_QUOTES`**). Фільтр
`magic_quotes` підлягає видаленню у майбутніх версіях PHP.

### FTP

Режим за замовчуванням змінено на binary.

### Функції інтернаціоналізації

Константа **`Normalizer::NONE`** оголошена застарілою, коли PHP
скомпілюваний з ICU версії ≥ 56.

Введена константа **`Normalizer::FORM_KC_CF`** як аргумент
[Normalizer::normalize()](normalizer.normalize.md) для нормалізації
`NFKC_Casefold`; доступна, коли є ICU ≥56.

### Об'єктна нотація JavaScript (JSON)

Доданий новий прапор **`JSON_THROW_ON_ERROR`**, який можна
використовувати з [json_decode()](function.json-decode.md) або
[json_encode()](function.json-encode.md) і змушує ці функції
викидати новий виняток [JsonException](class.jsonexception.md) в
у разі виникнення помилки, замість того, щоб встановлювати глобальне
стан помилки, що вилучається за допомогою
[json_last_error()](function.json-last-error.md) та
[json_last_error_msg()](function.json-last-error-msg.md).
**`JSON_PARTIAL_OUTPUT_ON_ERROR`** має пріоритет над
**`JSON_THROW_ON_ERROR`**.

### Мультибайтові рядки

Конфігураційна опція **-with-libmbfl** більше недоступна.

### ODBC (Unified)

Підтримка `ODBCRouter` та `Birdstep`, включаючи ini-директиву
`birdstep.max_links` була видалена.

### OPcache

Видалена ini-директива `opcache.inherited_hack`. Це значення вже
ігнорувалося з PHP 5.3.0.

### OpenSSL

Додані опції потоку ssl `min_proto_version` та `max_proto_version`, а
також відповідні з ними константи для можливих значень протоколу
TLS.

### Регулярні вирази (сумісні з Perl)

[Модуль PCRE](book.pcre.md) було оновлено до PCRE2, що може призвести
до незначних змін у поведінці (наприклад, діапазони символів у
класах тепер інтерпретуються більш суворо) і доповнює існуючий
синтаксис регулярних виразів.

Функція [preg_quote()](function.preg-quote.md) тепер також екранує
символ ``#'`.

### Microsoft SQL Server та функції Sybase (PDO_DBLIB)

Доданий атрибут **`PDO::DBLIB_ATTR_SKIP_EMPTY_ROWSETS`** для
автоматичного пропуску порожніх наборів рядків.

Доданий атрибут **`PDO::DBLIB_ATTR_TDS_VERSION`** який представляє
версія TDS.

Стовпці DATETIME2 тепер обробляються як стовпці DATETIME.

### Функції SQLite (PDO_SQLITE)

Бази даних SQLite3 тепер можна відкрити в режимі лише для читання,
установивши новий атрибут **`PDO::SQLITE_ATTR_OPEN_FLAGS`** на значення
**`PDO::SQLITE_OPEN_READONLY`**.

### Обробка сесій

Функція
[session_set_cookie_params()](function.session-set-cookie-params.md)
тепер також підтримує таке оголошення (сигнатуру):

[session_set_cookie_params](function.session-set-cookie-params.md)(array
`$options`): bool

де `$options` - асоціативний масив, який може мати будь-який з
ключів ``lifetime'`, ``path'', ``domain'', ``secure'', ``httponly'' і
``samesite'`. Відповідно, значення, що повертається
[session_get_cookie_params()](function.session-get-cookie-params.md)
тепер також має елемент із ключем ``samesite'`. Крім того, нова
ini-опція `session.cookie_samesite` для установки за умовчанням директиви
SameSite для cookies. За замовчуванням використовується значення ````` (порожня
(рядок), тому директива SameSite не задано. Може бути встановлена на
значення ``Lax'` або ``Strict'', яке встановлює відповідне
значення директиви SameSite.

### Tidy

Складання разом [» tidyp](https://github.com/petdance/tidyp) тепер також
підтримується прозоро. Оскільки tidyp не пропонує API для
отримання дати релізу, [tidy_get_release()](tidy.getrelease.md) та
[tidy::getRelease()](tidy.getrelease.md) повертає значення
``unknown'` у цьому випадку.

### XML-парсер

Значення callback-функції, що повертається
[xml_set_external_entity_ref_handler()](function.xml-set-external-entity-ref-handler.md)
більше не ігнорується, якщо модуль був зібраний із бібліотекою libxml.
Раніше значення, що повертається, ігнорувалося, а парсинг ніколи не
припинявся.

### Zip

Складання з використанням libzip, що входить до PHP, не рекомендується, але
все ж таки можлива шляхом додавання **--without-libzip** в конфігурацію.

### Стиснення Zlib

Додано параметр контексту zlib/level для [обгортки
compress.zlib](wrappers.compression.md), щоб полегшити встановлення
бажаного рівня стиснення.
