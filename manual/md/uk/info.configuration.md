- [« Встановлення](info.installation.md)
- [Типи ресурсів»] (info.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](info.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------|--------------|--- --------------|----------------------------------- ----------------------------------|
| [assert.active](info.configuration.md#ini.assert.active) | "1" | PHP_INI_ALL | |
| [assert.bail](info.configuration.md#ini.assert.bail) | "0" | PHP_INI_ALL | |
| [assert.warning](info.configuration.md#ini.assert.warning) | "1" | PHP_INI_ALL | |
| [assert.callback](info.configuration.md#ini.assert.callback) | NULL | PHP_INI_ALL | |
| [assert.quiet_eval](info.configuration.md#ini.assert.quiet-eval) | "0" | PHP_INI_ALL | |
| [assert.exception](info.configuration.md#ini.assert.exception) | "0" | PHP_INI_ALL | Доступна із версії PHP 7.0.0. |
| [enable_dl](info.configuration.md#ini.enable-dl) | "1" | PHP_INI_SYSTEM | Ця можливість застаріла і буде обов'язково віддалена в майбутньому. |
| [max_execution_time](info.configuration.md#ini.max-execution-time) | "30" | PHP_INI_ALL | |
| [max_input_time](info.configuration.md#ini.max-input-time) | "-1" | PHP_INI_PERDIR | |
| [max_input_nesting_level](info.configuration.md#ini.max-input-nesting-level) | "64" | PHP_INI_PERDIR | Доступна з PHP 5.2.3. |
| [max_input_vars](info.configuration.md#ini.max-input-vars) | 1000 | PHP_INI_PERDIR | Доступна з PHP 5.3.9. |
| [magic_quotes_gpc](info.configuration.md#ini.magic-quotes-gpc) | "1" | PHP_INI_PERDIR | Видалено в PHP 5.4.0. |
| [magic_quotes_runtime](info.configuration.md#ini.magic-quotes-runtime) | "0" | PHP_INI_ALL | Видалено в PHP 5.4.0. |
| [zend.enable_gc](info.configuration.md#ini.zend.enable-gc) | "1" | PHP_INI_ALL | Доступна з PHP 5.3.0. |

**Налаштування PHP/Параметри конфігурації інформації**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`assert.active` bool
Увімкнення виконання [assert()](function.assert.md).

`assert.bail` bool
Завершення роботи скрипта під час провалу перевірки тверджень.

`assert.warning` bool
Виклик попереджень PHP для кожної проваленої перевірки затвердження.

`assert.callback` string
Функція користувача, що викликається при провалі перевірки тверджень.

`assert.quiet_eval` bool
Використовуйте це налаштування функції
[error_reporting()](function.error-reporting.md) під час виконання
перевірки тверджень. При увімкненні налаштування повідомлення про помилки
час перевірки тверджень не показуватимуться (неявний виклик
error_reporting(0)). Якщо налаштування вимкнено, помилки будуть видаватися в
відповідно до налаштувань
[error_reporting()](function.error-reporting.md)

`assert.exception` bool
Генерує виняток [AssertionError](class.assertionerror.md) для
невдалої перевірки затвердження.

`enable_dl` bool
Директива дозволяє включати та вимикати динамічне підвантаження модулів
PHP за допомогою функції [dl()](function.dl.md).

Головною причиною, з якої потрібне вимкнення динамічного завантаження,
є безпека. За допомогою динамічного завантаження можна обійти все
[open_basedir](ini.core.md#ini.open-basedir) обмеження. За замовчуванням
динамічне завантаження дозволено.

`max_execution_time` int
Ця директива визначає максимальний час у секундах, протягом якого
скрипт повинен повністю завантажитись. Якщо цього не відбувається, парсер
завершує роботу скрипта. Цей механізм допомагає запобігти зависанню
сервера через погано написаний скрипт. За замовчуванням на завантаження надається
`30` секунд. Якщо PHP запущено з [командної
строки](features.commandline.md), це значення за умовчанням дорівнює `0`.

У системах, відмінних від Windows, на максимальний час виконання не
впливають системні виклики, потокові операції тощо. За додатковою
інформацією звертайтесь до документації до функції
[set_time_limit()](function.set-time-limit.md).

Веб-сервери зазвичай мають свої налаштування часу очікування по перевищенню
якого завершують виконання скрипта PHP. В Apache є директива
`Timeout`, у IIS є функція CGI timeout. В обох випадках за замовчуванням
встановлено 300 секунд. Точні значення можна дізнатися з документації до
веб-сервер.

`max_input_time` int
Ця директива визначає максимальний час у секундах, протягом якого
скрипт повинен розібрати всі вхідні дані, передані запитами на зразок
POST чи GET. Цей час вимірюється від моменту, коли PHP викликаний
сервер до моменту, коли скрипт починає виконуватися. Значення по
замовчуванням `-1`, що означає, що буде використовуватися
[max_execution_time](info.configuration.md#ini.max-execution-time).
Якщо встановити рівним `0`, то обмежень у часі не буде.

`max_input_nesting_level` int
Задає максимальну глибину вкладення [вхідних
змінних](language.variables.external.md) (тобто `$_GET`,
`$_POST`.)

`max_input_vars` int
Скільки [вхідних змінних](language.variables.external.md) може
бути прийнято в одному запиті (обмеження накладається на кожну
глобальних змінних $\_GET, $\_POST і $\_COOKIE окремо).
Використання цієї директиви знижує ймовірність збоїв у разі атак з
використанням хеш-колізій. Якщо вхідних змінних більше, ніж задано
директивою, викидається попередження **`E_WARNING`**, а все
наступні змінні у запиті ігноруються.

`magic_quotes_gpc` bool
**Увага**
Дана можливість була оголошена *УСТАРНІЙ*, починаючи з PHP 5.3.0 та
була *Видалена* в PHP 5.4.0.

Задає режим magic_quotes для операцій GPC (Get/Post/Cookie). Якщо
magic_quotes включений, всі '(одинарні лапки), '(подвійні лапки), \
(зворотний слєш) та NUL автоматично екрануються зворотним слєшем.

Дивіться також
[get_magic_quotes_gpc()](function.get-magic-quotes-gpc.md)

`magic_quotes_runtime` bool
**Увага**
Дана можливість була оголошена *УСТАРНІЙ*, починаючи з PHP 5.3.0 та
була *Видалена* в PHP 5.4.0.

Якщо включена директива `magic_quotes_runtime`, більшість функцій
повертають дані із зовнішніх джерел, таких як бази даних або
текстові файли, будуть екранувати лапки зворотним слішем.

Функції, на які поширюється дія директиви
`magic_quotes_runtime` (виключаючи функції з PECL):

- [get_meta_tags()](function.get-meta-tags.md)
- [file_get_contents()](function.file-get-contents.md)
- [file()](function.file.md)
- [fgets()](function.fgets.md)
- [fwrite()](function.fwrite.md)
- [fread()](function.fread.md)
- [fputcsv()](function.fputcsv.md)
- [stream_socket_recvfrom()](function.stream-socket-recvfrom.md)
- [exec()](function.exec.md)
- [system()](function.system.md)
- [passthru()](function.passthru.md)
- [stream_get_contents()](function.stream-get-contents.md)
- [bzread()](function.bzread.md)
- [gzfile()](function.gzfile.md)
- [gzgets()](function.gzgets.md)
- [gzwrite()](function.gzwrite.md)
- [gzread()](function.gzread.md)
- [exif_read_data()](function.exif-read-data.md)
- [dba_insert()](function.dba-insert.md)
- [dba_replace()](function.dba-replace.md)
- [dba_fetch()](function.dba-fetch.md)
- [ibase_fetch_row()](function.ibase-fetch-row.md)
- [ibase_fetch_assoc()](function.ibase-fetch-assoc.md)
- [ibase_fetch_object()](function.ibase-fetch-object.md)
- **mssql_fetch_row()**
- **mssql_fetch_object()**
- **mssql_fetch_array()**
- **mssql_fetch_assoc()**
- [mysqli_fetch_row()](mysqli-result.fetch-row.md)
- [mysqli_fetch_array()](mysqli-result.fetch-array.md)
- [mysqli_fetch_assoc()](mysqli-result.fetch-assoc.md)
- [mysqli_fetch_object()](mysqli-result.fetch-object.md)
- [pg_fetch_row()](function.pg-fetch-row.md)
- [pg_fetch_assoc()](function.pg-fetch-assoc.md)
- [pg_fetch_array()](function.pg-fetch-array.md)
- [pg_fetch_object()](function.pg-fetch-object.md)
- [pg_fetch_all()](function.pg-fetch-all.md)
- [pg_select()](function.pg-select.md)
- **sybase_fetch_object()**
- **sybase_fetch_array()**
- **sybase_fetch_assoc()**
- [SplFileObject::fgets()](splfileobject.fgets.md)
- [SplFileObject::fgetcsv()](splfileobject.fgetcsv.md)
- [SplFileObject::fwrite()](splfileobject.fwrite.md)

`zend.enable_gc` bool
Включає або відключає збирач циклічних посилань.
