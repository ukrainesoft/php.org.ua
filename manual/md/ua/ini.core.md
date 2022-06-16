- [« Список розділів php.ini](ini.sections.md)
- [Список/класифікація модулів »](extensions.md)

- [PHP Manual](index.md)
- [Директиви php.ini](ini.md)
- Опис вбудованих директив php.ini

## Опис вбудованих директив `php.ini`

Цей список включає вбудовані директиви `php.ini`, які ви можете
використовувати для налаштування PHP. Директиви, що обробляються
модулями, перераховані та докладно описані на сторінках документацій
відповідних модулів. Наприклад, інформація про директиви сесій може
бути знайдена на [сторінці документації
сесій](session.configuration.md).

> **Примітка**:
>
> Зазначені тут значення за замовчуванням використовуються у випадку, якщо
> не було підключено `php.ini`; значення для бойового `php.ini` та для
> Розробки можуть відрізнятися.

## Мовні опції

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------------------------------------------| ----------|-----------------------------|--------- -------------------------------------------------|
| [short_open_tag](ini.core.md#ini.short-open-tag) | "1" | PHP_INI_PERDIR | |
| [precision](ini.core.md#ini.precision) | "14" | PHP_INI_ALL | |
| [serialize_precision](ini.core.md#ini.serialize-precision) | "-1" | PHP_INI_ALL | До версії PHP 7.1.0 значення за промовчанням дорівнювало 17. |
| [disable_functions](ini.core.md#ini.disable-functions) | "" | Тільки PHP_INI_SYSTEM | |
| [disable_classes](ini.core.md#ini.disable-classes) | "" | Тільки `php.ini` |
| [exit_on_timeout](ini.core.md#ini.exit-on-timeout) | "" | PHP_INI_ALL | |
| [expose_php](ini.core.md#ini.expose-php) | "1" | Тільки `php.ini` |
| [hard_timeout](ini.core.md#ini.hard-timeout) | "2" | PHP_INI_SYSTEM | Доступна з версії PHP 7.1.0. |
| [zend.exception_ignore_args](ini.core.md#ini.zend.exception-ignore-args) | "0" | PHP_INI_ALL | Доступна з версії PHP 7.4.0
| [zend.multibyte](ini.core.md#ini.zend.multibyte) | "0" | PHP_INI_ALL | |
| [zend.script_encoding](ini.core.md#ini.zend.script-encoding) | NULL | PHP_INI_ALL | |
| [zend.detect_unicode](ini.core.md#ini.zend.detect-unicode) | NULL | PHP_INI_ALL | |
| [zend.signal_check](ini.core.md#ini.zend.signal-check) | "0" | PHP_INI_SYSTEM | |
| [zend.assertions](ini.core.md#ini.zend.assertions) | "1" | PHP_INI_ALL з обмеженнями |
| [zend.exception_string_param_max_len](ini.core.md#ini.zend.exception-string-param-max-len) | "15" | PHP_INI_ALL | Доступно з PHP 8.0.0. |

**Опції мови та інших налаштувань**

Коротке пояснення конфігураційних директив.

`short_open_tag` bool
Визначає, чи дозволяється коротка форма запису (**`<? ?>`**) тегів
PHP. Якщо ви хочете використовувати PHP спільно з XML, ви можете
відключити цю опцію, щоб безперешкодно використовувати **`<?xml?>`**.
В іншому випадку, ви можете відобразити це за допомогою PHP, наприклад:
**`<?php echo '<?xml versionu003d"1.0"?>'; ?>`**. Якщо ж ця опція
вимкнено, ви повинні використовувати довгу форму відкриває тега PHP
(**`<?php?>`**).

> **Примітка**:
>
> Ця директива не впливає на скорочення **`<?u003d`**, яке завжди
> Доступно.

`precision` int
Кількість цифр, що відображаються для чисел з плаваючою точкою.
`-1` означає, що буде використано вдосконалений алгоритм для
округлення таких чисел.

`serialize_precision` int
Кількість значущих цифр, що зберігаються, при серіалізації чисел з плаваючою
точкою. `-1` означає, що буде використано вдосконалений
алгоритм округлення таких чисел.

`expose_php` bool
Видає факт присутності PHP на сервері, включаючи передачу версії PHP
HTTP-заголовку (наприклад, X-Powered-By: PHP/5.3.7).

`disable_functions` string
Ця директива дозволяє вимкнути деякі функції. Вона приймає
список імен функцій, розділений комами.

Тільки [внутрішні функції](functions.internal.md) можуть бути
вимкнено за допомогою цієї директиви. [Користувальницькі
функції](functions.user-defined.md) їй не схильні.

Ця директива має бути встановлена в `php.ini`. Наприклад, її не можна
використовувати в `httpd.conf`.

`disable_classes` string
Ця директива дозволяє вимкнути деякі класи. Вона приймає список
імен класів, розділених комами. Ця директива має бути
встановлена в `php.ini`. Наприклад, її не можна використовувати в
`httpd.conf`.

`zend.assertions` int
Якщо встановлено значення `1`, код перевірки буде виконуватися (режим
розробки). Якщо заданий `0`, код перевірок буде згенеровано, проте
виконуватися нічого очікувати. Якщо задано `-1`, код перевірки не буде
генеруватись (продуктивний режим).

> **Примітка**:
>
> Якщо процес стартований у режимі релізу,
> [zend.assertions](ini.core.md#ini.zend.assertions) не може бути
> змінено під час виконання, оскільки код тверджень не генерується.
>
> Якщо процес розпочато в режимі розробки,
> [zend.assertions](ini.core.md#ini.zend.assertions) не може бути
> виставлений в `-1` під час виконання.

`zend.exception_string_param_max_len` int
Максимальна довжина аргументів рядкової функції у рядкових трасуваннях
стеку. Значення має бути в діапазоні від ``0'` до ``1000000''.

`hard_timeout` int
Коли закінчиться час очікування, встановлений у
[max_execution_time](info.configuration.md#ini.max-execution-time),
середовище виконання PHP акуратно відключить ресурси. Якщо під час цього
щось застрягне, час очікування буде встановлений на вказаний
кількість секунд. Коли закінчиться жорсткий час очікування, PHP завершить
роботу з помилкою. Якщо встановлено значення 0, жорсткий час очікування
ніколи не активується.

Коли PHP зупиняється після жорсткого очікування, це буде
виглядати приблизно так:

Незначна помилка: Максимальна продуктивність часу з 30+2 секунди завершена (terminated) in Unknown on line 0

`zend.exception_ignore_args` bool
Виключає аргументи трасування стека, згенерованих з винятків.

`zend.multibyte` bool
Дозволяє парсинг вихідних файлів у багатобайтніх кодуваннях. Увімкнення
zend.multibyte потрібно для використання кодувань подібних символів
SJIS, BIG5 і т.д., що містять спеціальні символи в багатобайтних
строкових даних Сумісні з ISO-8859-1 кодування, наприклад UTF-8,
EUC і т.д., не вимагають цієї опції.

Модуль zend.multibyte вимагає модуля "mbstring".

`zend.script_encoding` string
Це значення буде використано лише за відсутності директиви
[declare(encodingu003d...)](control-structures.declare.md#control-structures.declare.encoding)
на початку скрипту. При використанні кодувань несумісних з
ISO-8859-1, потрібно використовувати опції та zend.multibyte та
zend.script_encoding.

Літеральні рядки мають бути транслітеровані з zend.script_encoding
в mbstring.internal_encoding, якби викликали
[mb_convert_encoding()](function.mb-convert-encoding.md).

`zend.detect_unicode` bool
Визначає, чи потрібно перевіряти BOM (Byte Order Mark, мітка порядку байт)
та коректність багатобайтних символів у файлі. Ця перевірка проводиться
до виклику [\_\_halt_compiler()](function.halt-compiler.md). Доступна
лише у режимі Zend Multibyte.

`zend.signal_check` bool
Визначає, чи потрібно перевіряти замінені обробники сигналів при
завершення сценарію.

`exit_on_timeout` bool
Ця директива є тільки для Apache1 mod_php, яка змушує нащадка
Apache завершиться, якщо перевищено час очікування виконання скрипту
PHP. Перевищення часу очікування призводить до внутрішнього виклику longjmp()
в Apache1, який залишає деякі модулі в неузгодженому
стані. Після завершення процесу всі незняті блокування або пам'ять
будуть очищені.

## Обмеження ресурсів

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------| --------------|-----------------|----------------- -|
| [memory_limit](ini.core.md#ini.memory-limit) | "128M" | PHP_INI_ALL | |

**Обмеження ресурсів**

Коротке пояснення конфігураційних директив.

`memory_limit` int
Ця директива визначає максимальний обсяг пам'яті в байтах, який
дозволяється використовувати скрипту. Це допомагає запобігти ситуації,
при якій погано написаний скрипт з'їдає всю доступну пам'ять
сервера. Для того, щоб усунути обмеження, встановіть значення цієї
директиви в `-1`.

Якщо використовується int значення вимірюється байтами. ви також можете
використовувати скорочений запис, який описано в [цьому розділі
FAQ](faq.using.md#faq.using.shorthandbytes).

Дивіться також:
[max_execution_time](info.configuration.md#ini.max-execution-time).

## Налаштування продуктивності

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------|--------------|-----------------|--- -----------------------------------------------|
| [realpath_cache_size](ini.core.md#ini.realpath-cache-size) | "4M" | PHP_INI_SYSTEM | До PHP 7.0.16 та 7.1.2, за замовчуванням було `"16K"` |
| [realpath_cache_ttl](ini.core.md#ini.realpath-cache-ttl) | "120" | PHP_INI_SYSTEM | |

**Налаштування продуктивності**

> **Примітка**:
>
> Використання [open_basedir](ini.core.md#ini.open-basedir)
> *відключить * кеш realpath.

Коротке пояснення конфігураційних директив.

`realpath_cache_size` int
Визначає розмір кеша realpath, що використовується в PHP. Це значення
має бути збільшено на системах, у яких PHP відкриває велике
кількість файлів відповідно до кількості виконуваних файлових
операцій.

Розмір дорівнює загальному числу байт, що зберігається в рядках колій, плюс розмір
даних пов'язаних з елементом, що кешується. Це означає, що для зберігання
довгих шляхів у кеші, розмір цього кешу має бути більшим. Це значення
не визначає безпосередньо кількість різних шляхів, які можуть бути
закешовані.

Розмір, необхідний кешування, залежить від системи.

`realpath_cache_ttl` int
Час (у секундах) протягом якого буде використаний кеш realpath для
вказаного файлу або директорії. Для систем з файлами, що рідко змінюються
це значення можна збільшити.

## Обробка даних

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -----------------------|--------------|----------- ------|------------------|
| [arg_separator.output](ini.core.md#ini.arg-separator.output) | "&" | PHP_INI_ALL | |
| [arg_separator.input](ini.core.md#ini.arg-separator.input) | "&" | PHP_INI_PERDIR | |
| [variables_order](ini.core.md#ini.variables-order) | "EGPCS" | PHP_INI_PERDIR | |
| [request_order](ini.core.md#ini.request-order) | "" | PHP_INI_PERDIR | |
| [auto_globals_jit](ini.core.md#ini.auto-globals-jit) | "1" | PHP_INI_PERDIR | |
| [register_argc_argv](ini.core.md#ini.register-argc-argv) | "1" | PHP_INI_PERDIR | |
| [enable_post_data_reading](ini.core.md#ini.enable-post-data-reading) | "1" | PHP_INI_PERDIR | |
| [post_max_size](ini.core.md#ini.post-max-size) | "8M" | PHP_INI_PERDIR | |
| [auto_prepend_file](ini.core.md#ini.auto-prepend-file) | NULL | PHP_INI_PERDIR | |
| [auto_append_file](ini.core.md#ini.auto-append-file) | NULL | PHP_INI_PERDIR | |
| [default_mimetype](ini.core.md#ini.default-mimetype) | "text/html" | PHP_INI_ALL | |
| [default_charset](ini.core.md#ini.default-charset) | "UTF-8" | PHP_INI_ALL | |
| [input_encoding](ini.core.md#ini.input-encoding) | "" | PHP_INI_ALL | |
| [output_encoding](ini.core.md#ini.output-encoding) | "" | PHP_INI_ALL | |
| [internal_encoding](ini.core.md#ini.internal-encoding) | "" | PHP_INI_ALL | |

**Конфігураційні опції обробки даних**

Коротке пояснення конфігураційних директив.

`arg_separator.output` string
Цей роздільник використовується в генерованих PHP URL як
роздільника аргументів.

`arg_separator.input` string
Список роздільників, які використовуються PHP для отримання змінних із URL.

> **Примітка**:
>
> Кожен символ у цій директиві вважається роздільником!

`variables_order` string
Встановлює порядок обробки змінних EGPCS (`E`nvironment, `G`et,
`P`ost, `C`ookie, та `S`erver). Наприклад, якщо variables_order
встановлена в ``SP'`, то PHP створить
[superglobals](language.variables.predefined.md) `$_SERVER` та
`$_POST`, але не буде створювати `$_ENV`, `$_GET` та `$_COOKIE`. Встановлення
в "" означає, що жодна
[superglobals](language.variables.predefined.md) не буде встановлено.

**Увага**
У CGI і FastCGI SAPI, в `$_SERVER` також додаються значення змінних
оточення; `S` завжди еквівалентна `ES` незалежно від самого
положення `E` у цій директиві.

> **Примітка**:
>
> Ця директива також впливає на вміст та порядок змінної
> `$_REQUEST`.

`request_order` string
Ця директива регулює порядок, у якому PHP додає змінні
GET, POST та Cookie в масив \_REQUEST. Додавання проводиться зліва
праворуч, нові значення перезаписують старі.

Якщо значення цієї директиви не встановлено, використовується значення
директиви [variables_order](ini.core.md#ini.variables-order) для
вмісту змінної `$_REQUEST`.

Врахуйте, що файли `php.ini`, що поставляються з дистрибутивом,
міркувань безпеки не містять значення ``C`` (cookies).

`auto_globals_jit` bool
Коли увімкнено, змінні SERVER, REQUEST та ENV створюються на той момент,
коли вони вперше використовуються (Just In Time), а не на початку виконання
скрипт. Якщо ці змінні у скрипті не використовуються, включення цієї
директиви призведе до зростання продуктивності.

**Увага**
Використання змінних SERVER, REQUEST та ENV перевіряється на стадії
компіляції, тому їх використання за допомогою, наприклад, [змінних
змінних](language.variables.variable.md) не запустить їх
ініціалізацію.

`register_argc_argv` bool
Повідомляє PHP, чи слід оголошувати змінні argv та argc (які будуть
містити GET-інформацію). Дивіться також [Використання PHP у командній
рядку](features.commandline.md).

`enable_post_data_reading` bool
При відключенні цієї опції суперглобальні змінні `$_POST` та
`$_FILES` *не заповнюватимуться. Єдиним способом прочитати
POST-дані буде читання обгортки потоку
[php://input](wrappers.php.md). Це може виявитися корисним при
проксування запитів або обробки POST-даних способом, більше
ефективно використовує пам'ять.

`post_max_size` int
Встановлює максимально допустимий розмір даних, що надсилаються методом
POST. Це також впливає на завантаження файлів. Для завантаження великих
файлів це значення має бути більше значення директиви
[upload_max_filesize](ini.core.md#ini.upload-max-filesize). В
сутності, [memory_limit](ini.core.md#ini.memory-limit) має бути
більше, ніж `post_max_size`. Якщо використовується int, значення вимірюється
байтами. Ви також можете використовувати скорочений запис, який
описано в цьому розділі FAQ(faq.using.md#faq.using.shorthandbytes).
Якщо розмір POST даних більше ніж post_max_size, [суперглобальні
змінні](language.variables.superglobals.md) `$_POST` та `$_FILES`
будуть порожніми. Це можна відстежити різними способами, наприклад
передавши `$_GET` змінну скрипт, обробляє дані, тобто.
`<form actionu003d"edit.php?processedu003d1">`, а потім перевірити, чи встановлено
чи змінна `$_GET['processed']`.

> **Примітка**:
>
> PHP дозволяє скорочення значень байт, включаючи K (кіло), M (мега) та G
> (Гіга). PHP автоматично перетворює всі ці скорочення. Будьте
> обережні з перевищенням діапазону 32-бітних цілих значень (якщо ви
> використовуєте 32-бітну версію), так як це призведе до помилки вашого
> Скрипт.

| Версія | Опис |
|----------------|-------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 5.3.4 | Установка `post_max_size` u003d 0 не знімає обмеження, якщо контент має тип application/x-www-form-urlencoded або не зареєстрований у PHP. |
| 5.3.2, 5.2.12 | Стало можливим зняти обмеження розмір пост-запроса установкою `post_max_size` в 0. |

**Список змін `post_max_size`**

`auto_prepend_file` string
Визначає ім'я файлу, який автоматично оброблятиметься перед
основним файлом. Файл викликається так, ніби він був підключений за допомогою
функції [require](function.require.md), так що
[include_path](ini.core.md#ini.include-path) також використовується.

Спеціальне значення `none` відключає цю директиву.

`auto_append_file` string
Визначає ім'я файлу, який автоматично оброблятиметься після
основний файл. Файл викликається так, ніби він був підключений за допомогою
функції [require](function.require.md), так що
[include_path](ini.core.md#ini.include-path) також використовується.

Спеціальне значення `none` відключає цю директиву.

> **Примітка**: Якщо скрипт завершує роботу за допомогою
> [exit()](function.exit.md), auto-append *НЕ* виконується.

`default_mimetype` string
За промовчанням PHP відображає назву кодування в заголовку Content-Type.
Якщо не потрібно передавати кодування, просто залиште цю опцію
порожній.

"media type" за замовчуванням встановлено як "text/html".

`default_charset` string
"UTF-8" є значенням за замовчуванням і використовується як кодування за
замовчуванням для функцій [htmlentities()](function.mdentities.md),
[html_entity_decode()](function.md-entity-decode.md) та
[htmlspecialchars()](function.mdspecialchars.md), якщо параметр
'encoding' не вказано. Значення `default_charset` також використовується для
вказівки кодування за промовчанням для функцій [iconv](book.iconv.md),
якщо конфігураційні опції
[`iconv.input_encoding`](iconv.configuration.md#ini.iconv.input-encoding),
[`iconv.output_encoding`](iconv.configuration.md#ini.iconv.output-encoding)
і
[` iconv.internal_encoding`](iconv.configuration.md#ini.iconv.internal-encoding)
не встановлено, і для функцій [mbstring](book.mbstring.md), якщо не
встановлені
[`mbstring.http_input`](mbstring.configuration.md#ini.mbstring.http-input)
[`mbstring.http_output`](mbstring.configuration.md#ini.mbstring.http-output)
[`mbstring.internal_encoding`](mbstring.configuration.md#ini.mbstring.internal-encoding).

Усі версії PHP використовують це значення як кодування для стандартного
заголовка Content-Type, що надсилається PHP, якщо цей заголовок не
перевизначено викликом функції [header()](function.header.md).

Не рекомендується встановлювати `default_charset` у пусте значення.

`input_encoding` string
Ця опція використовується для багатобайтних модулів, таких як mbstring та
iconv. За промовчанням порожньо.

`output_encoding` string
Ця опція використовується для багатобайтних модулів, таких як mbstring та
iconv. За промовчанням порожньо.

`internal_encoding` string
Ця опція використовується для багатобайтних модулів, таких як mbstring та
iconv. За промовчанням порожньо. У цьому випадку використовується
[default_charset](ini.core.md#ini.default-charset).

## Шляхи та Директорії

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------------------|-----------------------|---- --------------|------------------|
| [include_path](ini.core.md#ini.include-path) | ".;/path/to/php/pear" | PHP_INI_ALL | |
| [open_basedir](ini.core.md#ini.open-basedir) | NULL | PHP_INI_ALL | |
| [doc_root](ini.core.md#ini.doc-root) NULL | PHP_INI_SYSTEM | |
| [user_dir](ini.core.md#ini.user-dir) | NULL | PHP_INI_SYSTEM | |
| [user_ini.cache_ttl](ini.core.md#ini.user-ini.cache-ttl) | "300" | PHP_INI_SYSTEM | |
| [user_ini.filename](ini.core.md#ini.user-ini.filename) | ".user.ini" | PHP_INI_SYSTEM | |
| [extension_dir](ini.core.md#ini.extension-dir) | "/path/to/php" | PHP_INI_SYSTEM | |
| [extension](ini.core.md#ini.extension) | NULL | Тільки `php.ini` |
| [zend_extension](ini.core.md#ini.zend-extension) | NULL | Тільки `php.ini` |
| [cgi.check_shebang_line](ini.core.md#ini.cgi.check-shebang-line) | "1" | PHP_INI_SYSTEM | |
| [cgi.discard_path](ini.core.md#ini.cgi.discard-path) | "0" | PHP_INI_SYSTEM | |
| [cgi.fix_pathinfo](ini.core.md#ini.cgi.fix-pathinfo) | "1" | PHP_INI_SYSTEM | |
| [cgi.force_redirect](ini.core.md#ini.cgi.force-redirect) | "1" | PHP_INI_SYSTEM | |
| [cgi.nph](ini.core.md#ini.cgi.nph) | "0" | PHP_INI_SYSTEM | |
| [cgi.redirect_status_env](ini.core.md#ini.cgi.redirect-status-env) | NULL | PHP_INI_SYSTEM | |
| [cgi.rfc2616_headers](ini.core.md#ini.cgi.rfc2616-headers) | "0" | PHP_INI_ALL | |
| [fastcgi.impersonate](ini.core.md#ini.fastcgi.impersonate) | "0" | PHP_INI_SYSTEM | |
| [fastcgi.logging](ini.core.md#ini.fastcgi.logging) | "1" | PHP_INI_SYSTEM | |

**Конфігураційні Опції Шляхів та Директорій**

Коротке пояснення конфігураційних директив.

`include_path` string
Вказує список директорій, у яких функції
[require](function.require.md), [include](function.include.md),
[fopen()](function.fopen.md), [file()](function.file.md),
[readfile()](function.readfile.md) та
[file_get_contents()](function.file-get-contents.md) шукають файли.
Формат відповідає формату системної змінної оточення `PATH`:
список директорій, розділених двокрапкою в Unix або крапкою з комою в
Windows.

При пошуку файлів, що підключаються, PHP окремо розглядає кожне
значення include_path. Він перевіряє перший шлях, якщо файл у ньому не
знайдений, то він переходить до наступного, і так доти, доки не знайде
файл, що підключається, або поверне **`E_WARNING`** або **`E_ERROR`**. Ви
можете змінити ваш include_path під час виконання скрипту за допомогою
функції [set_include_path()](function.set-include-path.md).

**Приклад #1 include_path у Unix**

``` php.inicode
include_pathu003d".:/php/includes"
````

**Приклад #2 include_path у Windows**

``` php.inicode
include_pathu003d".;c:\php\includes"
````

Використання `.` в include_path дозволяє задавати відносні шляхи
для підключення файлів, оскільки точка означає поточну директорію.
Проте, ефективніше використовувати `include './file'`, ніж змушувати
PHP щоразу перевіряти поточну директорію при підключенні кожного
файлу.

> **Примітка**:
>
> Змінні оточення (`ENV`) також доступні у файлах .ini. Таким
> Таким чином, можна посилатися на домашню директорію за допомогою директив
> `${LOGIN}` та `${USER}`.
>
> Змінні оточення можуть відрізнятися між різними серверними API,
> оскільки ці оточення відрізняються друг від друга.

**Приклад #3 Налаштування include_path за допомогою змінного оточення
${USER} у Unix**

``` php.inicode
include_path u003d ".:${USER}/pear/php"
````

`open_basedir` string
Обмежує вказаним деревом каталогів файли, які можуть бути
доступні для PHP, включаючи файл. Ця директива *НЕ* піддається
вплив безпечного режиму.

Коли скрипт намагається отримати доступ до файлу, наприклад, за допомогою
функції [fopen()](function.fopen.md) або
[gzopen()](function.gzopen.md), перевіряється місцезнаходження файлу.
Якщо файл знаходиться поза вказаним деревом каталогів, PHP відмовиться його
відкривати. Всі символічні посилання будуть розкриті, так що за їх допомогою
не вдасться оминути це обмеження. Якщо файл не існує, то
символічне посилання не зможе бути прочитане та ім'я файлу (прочитане)
буде розглядатися **open_basedir**.

Опція **open_basedir** може поширюватися не тільки на функції для
роботи з файловою системою; наприклад, якщо `MySQL` налаштований використовувати
драйвер `mysqlnd`, то `LOAD DATA INFILE` підпадає під опцію
**open_basedir**. Багато функцій PHP також використовує `open_basedir`.

Спеціальне значення `.` означає, що робоча директорія скрипту
буде використано як базову директорію. Однак, це небагато
небезпечно, так як поточна директорія скрипта може бути легко змінена з
[chdir()](function.chdir.md).

В `httpd.conf`, **open_basedir** може бути вимкнена (наприклад, для
деяких віртуальних хостів) [тим же
способом](configuration.changes.md#configuration.changes.apache), що
та будь-яка інша конфігураційна директива:
"php_admin_value open_basedir none`".

У Windows розділяйте каталоги крапкою з комою. На решті
системах, розділяйте директорії двокрапкою. При роботі як модуль
Apache, шляхи **open_basedir** автоматично успадковуються від батьківських
директорій.

Обмеження, що визначається **open_basedir** є ім'ям директорії, а
не префіксом.

За замовчуванням, всі файли можуть бути відкриті.

> **Примітка**:
>
> Значення open_basedir можна зробити суворішим під час виконання
> Скрипт. Це означає, що якщо open_basedir була встановлена в
> `/www/` в `php.ini`, то скрипт може зменшити конфігурацію до `/www/tmp/`
> під час виконання за допомогою [ini_set()](function.ini-set.md). При
> Вказівки кількох директорій можна використовувати константу
> **`PATH_SEPARATOR`** як роздільник шляхів, що не залежить від
> ОС.

> **Примітка**:
>
> Використання опції open_basedir встановить
> [realpath_cache_size](ini.core.md#ini.realpath-cache-size) на
> значення `0` і таким чином відключить кеш realpath.

**Застереження**
`open_basedir` - це просто додаткове підстрахування, яке ніким
чином не є всеосяжною і тому на неї не можна покладатися,
коли йдеться про безпеку.

`doc_root` string
"Корнева директорія" PHP на цьому сервері. Використовується лише у випадку,
якщо не пуста. Якщо PHP не був скомпілюваний з FORCE_REDIRECT, вам
* слід * встановити doc_root, якщо ви використовуєте PHP як CGI
під будь-яким веб-сервером (крім IIS). Альтернативою є використання
конфігураційної директиви
[cgi.force_redirect](ini.core.md#ini.cgi.force-redirect), мова про
якою йде нижче.

`user_ini.cache_ttl` int

`user_ini.filename` string

`user_dir` string
Базове ім'я директорії, яка використовується в домашньому каталозі користувача
для PHP файлів, наприклад, `public_html`.

`extension_dir` string
У якій директорії PHP повинен шукати модулі, що динамічно завантажуються.
Рекомендується вказувати абсолютний шлях. Дивіться також:
[enable_dl](info.configuration.md#ini.enable-dl) та
[dl()](function.dl.md).

`extension` string
Які модулі, що динамічно завантажуються, повинні бути завантажені при старті
PHP.

`zend_extension` string
Ім'я динамічно завантажуваного модуля Zend (наприклад, XDebug), який
повинен бути завантажений під час старту PHP.

`cgi.check_shebang_line` bool
Контролює, чи потрібно перевіряти перший рядок CGI PHP-скрипту на
зміст `#!` (shebang). Цей рядок може бути необхідний, якщо скрипт
повинен підтримувати як окремий запуск так і за допомогою PHP CGI. PHP у
режимі CGI пропускає цей рядок і ігнорує його вміст, якщо даний
директива увімкнена.

`cgi.discard_path` bool
Якщо дозволено, бінарний файл PHP CGI може безпечно розташовуватися поза
веб-дерева та люди не зможуть обійти безпеку .htaccess.

`cgi.fix_pathinfo` bool
Забезпечує підтримку *правильних* `PATH_INFO`/`PATH_TRANSLATED` у CGI.
Раніше PHP просто встановлював `PATH_TRANSLATED` у `SCRIPT_FILENAME` та
не звертав уваги на `PATH_INFO`. Для отримання додаткової
інформацію про `PATH_INFO`, зверніться до специфікації CGI. Встановлення цього
значення в `1` змусить PHP CGI виправляти свій шлях відповідно до
специфікацією. Значення 0 відповідає попередньому поведінці. за
замовчуванням опція включена. Ви повинні виправити свої скрипти так, щоб
вони використовували `SCRIPT_FILENAME` замість `PATH_TRANSLATED`.

`cgi.force_redirect` bool
Директива cgi.force_redirect необхідна для забезпечення безпеки
час роботи PHP як CGI під більшістю веб-серверів. Якщо
залишити її невизначеною, за замовчуванням PHP включає цю директиву. Ви
можете вимкнути її на свій страх і ризик.

> **Примітка**:
>
> Користувачам Windows: При використанні IIS ця опція *повинна* бути
> вимкнено. Те саме необхідно для OmniHTTPD та Xitami.

`cgi.nph` bool
Якщо cgi.nph дозволена, cgi буде примусово повертати код 200
кожен запит.

`cgi.redirect_status_env` string
Якщо cgi.force_redirect увімкнено і ви працюєте не під веб-сервером
Apache або Netscape (iPlanet), вам може знадобитися встановити
змінну оточення, яку шукатиме PHP щоб переконатися, що він
може продовжувати виконання.

> **Примітка**:
>
> Установка цієї змінної *може* спричинити проблеми з
> безпекою, так що ви повинні знати, що ви робите.

`cgi.rfc2616_headers` int
Повідомляє PHP, який тип заголовків використовувати при надсиланні коду відповіді
HTTP. Якщо встановлено 0, PHP відправляє [» RFC
3875](http://www.faqs.org/rfcs/rfc3875) заголовок "Status:", який
підтримується Apache та іншими веб-серверами. Якщо встановлено в 1, PHP
надсилає заголовки, відповідні [»RFC
2616](http://www.faqs.org/rfcs/rfc2616).

Якщо ця опція увімкнена і ви використовуєте PHP в оточенні CGI (наприклад,
PHP-FPM), то замість використання HTTP-заголовків відповіді у стилі RFC
2616, потрібно використовувати їхній еквівалент зі стандарту RFC 3875, наприклад,
замість header("HTTP/1.0 404 Not found"); потрібно використовувати
header("Status: 404 Not Found");

Залиште значення 0, якщо ви не впевнені в тому, що це означає.

`fastcgi.impersonate` string
FastCGI під IIS (в ОС на базі WINNT) підтримує можливість
імперсонації прав безпеки клієнта, що викликає. Це дозволяє IIS
визначити контекст безпеки, у якому виконується запит.
mod_fastcgi під Apache на даний момент не підтримує цю можливість
(03/17/2002). Встановіть 1 під час роботи під IIS. Значення за замовчуванням -
нуль.

`fastcgi.logging` bool
Включає логування SAPI під час використання FastCGI. Логування
увімкнено за замовчуванням.

## Закачування файлів

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------|--------------|--- --------------|------------------|
| [file_uploads](ini.core.md#ini.file-uploads) | "1" | PHP_INI_SYSTEM | |
| [upload_tmp_dir](ini.core.md#ini.upload-tmp-dir) | NULL | PHP_INI_SYSTEM | |
| [max_input_nesting_level](info.configuration.md#ini.max-input-nesting-level) | 64 | PHP_INI_PERDIR | |
| [max_input_vars](info.configuration.md#ini.max-input-vars) | 1000 | PHP_INI_PERDIR | |
| [upload_max_filesize](ini.core.md#ini.upload-max-filesize) | "2M" | PHP_INI_PERDIR | |
| [max_file_uploads](ini.core.md#ini.max-file-uploads) | 20 | PHP_INI_PERDIR | |

**Конфігураційні Опції Закачування Файлів**

Коротке пояснення конфігураційних директив.

`file_uploads` bool
Дозволяти або не дозволяти [закачування
файлів] (features.file-upload.md). Дивіться також директиви
[upload_max_filesize](ini.core.md#ini.upload-max-filesize),
[upload_tmp_dir](ini.core.md#ini.upload-tmp-dir) та
[post_max_size](ini.core.md#ini.post-max-size).

`upload_tmp_dir` string
Тимчасова директорія, що використовується для зберігання файлів під час
закачування. Повинна бути доступна для запису користувачеві від імені
якого запущено PHP. Якщо не вказано, використовується директорія з
замовчуванням для вашої системи.

Якщо до зазначеної директорії немає прав на запис, PHP відкотиться назад
системної тимчасової директорії, яка використовується за замовчуванням. Якщо увімкнено
директива [open_basedir](ini.core.md#ini.open-basedir), то для
успішного завантаження файлів системна директорія за умовчанням має бути
дозволено.

`upload_max_filesize` int
Максимальний розмір файлу, що закачується.

[post_max_size](ini.core.md#ini.post-max-size) має бути більше, ніж
це значення.

Якщо використовується int значення вимірюється байтами. ви також можете
використовувати скорочений запис, який описано в [цьому розділі
FAQ](faq.using.md#faq.using.shorthandbytes).

`max_file_uploads` int
Максимально дозволена кількість файлів, що одночасно закачуються.
Порожні поля завантаження не розглядаються цим обмеженням.

## Загальний SQL

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -|--------------|-----------------|--------------- -----|
| [sql.safe_mode](ini.core.md#ini.sql.safe-mode) | "0" | PHP_INI_SYSTEM | Видалено в PHP 7.2.0 |

**Конфігураційні Опції Загального SQL**

Коротке пояснення конфігураційних директив.

`sql.safe_mode` bool
Якщо увімкнено, функції з'єднання з базою даних, що використовують значення
за замовчуванням, будуть використовувати ці значення замість будь-яких переданих
аргументів. Для значень за замовчуванням дивіться документацію за функціями
підключення відповідної бази даних.

**Увага**
Ця опція *Видалена* в PHP 7.2.0.

## Особливі налаштування для Windows

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -----------------------|--------------|----------- ------|------------------|
| [windows.show_crt_warning](ini.core.md#ini.windows-show-crt-warning) | "0" | PHP_INI_ALL | |

**Особливі опції конфігурації для Windows**

Коротке пояснення конфігураційних директив.

`windows.show_crt_warning` bool
При ввімкненні цієї директиви буде відображено попередження Windows
CRT.
