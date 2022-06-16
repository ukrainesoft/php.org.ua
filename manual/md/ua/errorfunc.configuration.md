- [« Установка](errorfunc.installation.md)
- [Типи ресурсів»] (errorfunc.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](errorfunc.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ----------------------------------|--------------| -----------------|-------------------------------- ------------------------|
| [error_reporting](errorfunc.configuration.md#ini.error-reporting) | NULL | PHP_INI_ALL | |
| [display_errors](errorfunc.configuration.md#ini.display-errors) | "1" | PHP_INI_ALL | |
| [display_startup_errors](errorfunc.configuration.md#ini.display-startup-errors) | "1" | PHP_INI_ALL | До PHP 8.0.0 значення за промовчанням було "0". |
| [log_errors](errorfunc.configuration.md#ini.log-errors) | "0" | PHP_INI_ALL | |
| [log_errors_max_len](errorfunc.configuration.md#ini.log-errors-max-len) | "1024" | PHP_INI_ALL | |
| [ignore_repeated_errors](errorfunc.configuration.md#ini.ignore-repeated-errors) | "0" | PHP_INI_ALL | |
| [ignore_repeated_source](errorfunc.configuration.md#ini.ignore-repeated-source) | "0" | PHP_INI_ALL | |
| [report_memleaks](errorfunc.configuration.md#ini.report-memleaks) | "1" | PHP_INI_ALL | |
| [track_errors](errorfunc.configuration.md#ini.track-errors) | "0" | PHP_INI_ALL | Оголошено застарілим у PHP 7.2.0, видалено у PHP 8.0.0. |
| [html_errors](errorfunc.configuration.md#ini.md-errors) | "1" | PHP_INI_ALL | |
| [xmlrpc_errors](errorfunc.configuration.md#ini.xmlrpc-errors) | "0" | PHP_INI_SYSTEM | |
| [xmlrpc_error_number](errorfunc.configuration.md#ini.xmlrpc-error-number) | "0" | PHP_INI_ALL | |
| [docref_root](errorfunc.configuration.md#ini.docref-root) | "" | PHP_INI_ALL | |
| [docref_ext](errorfunc.configuration.md#ini.docref-ext) | "" | PHP_INI_ALL | |
| [error_prepend_string](errorfunc.configuration.md#ini.error-prepend-string) | NULL | PHP_INI_ALL | |
| [error_append_string](errorfunc.configuration.md#ini.error-append-string) | NULL | PHP_INI_ALL | |
| [error_log](errorfunc.configuration.md#ini.error-log) | NULL | PHP_INI_ALL | |
| [syslog.facility](errorfunc.configuration.md#ini.syslog.facility) | "LOG_USER" | PHP_INI_SYSTEM | Доступно з PHP 7.3.0. |
| [syslog.filter](errorfunc.configuration.md#ini.syslog.filter) | "no-ctrl" | PHP_INI_ALL | Доступно з PHP 7.3.0. |
| [syslog.ident](errorfunc.configuration.md#ini.syslog.ident) | "php" | PHP_INI_SYSTEM | Доступно з PHP 7.3.0. |

**Налаштування конфігурації протоколювання подій та помилок**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`error_reporting` int
Визначає рівень протоколювання помилки. Параметр може бути чи числом,
що представляють бітове поле, або іменованою константою.
Відповідні рівні та константи наведено в розділі [Предвизначені
константи] (errorfunc.constants.md), а також в `php.ini`. Для установки
налаштування під час виконання використовуйте функцію
[error_reporting()](function.error-reporting.md). Дивіться також
опис директиви
[display_errors](errorfunc.configuration.md#ini.display-errors).

Значення за промовчанням дорівнює **`E_ALL`**.

До PHP 8.0.0 значення за промовчанням було: **`E_ALL`** & \~**`E_NOTICE`**
& \~**`E_STRICT`** & \~**`E_DEPRECATED`**. При цьому налаштуванні не
відображаються рівні помилок **`E_NOTICE`**, **`E_STRICT`** та
**`E_DEPRECATED`**.

> **Примітка**: **PHP-константи за межами PHP**
>
> Використання PHP-констант за межами PHP, наприклад у файлі
> `httpd.conf`, немає сенсу, оскільки у разі потрібні
> Цілочисленні значення (int). Більше того, з часом будуть
> додаватися нові рівні помилок, а максимальне значення константи
> **`E_ALL`** відповідно зростатиме. Тому в місці, де
> передбачається вказати **`E_ALL`**, краще задати велике ціле число,
> щоб перекрити всі можливі поля. Таким числом може бути,
> наприклад, `2147483647` (воно включить усі можливі помилки, не тільки
> **`E_ALL`**).

`display_errors` string
Ця установка визначає, чи потрібно виводити помилки на екран разом з
іншим висновком або помилки повинні бути приховані від користувача.

Значення ``stderr`` посилає помилки в потік `stderr` замість `stdout`.

> **Примітка**:
>
> Ця функціональність призначена тільки для розробки і не повинна
> використовуватися у готових виробничих системах (наприклад,
> системах, що мають доступ до інтернету).

> **Примітка**:
>
> Незважаючи на те, що display_errors може бути встановлена під час
> виконання (функцією [ini_set()](function.ini-set.md)), це ні на
що не вплине, якщо в скрипті є фатальні помилки. Це обумовлено
> тим, що очікувані дії програми під час виконання не отримають
> керування (не виконуватимуться).

`display_startup_errors` bool
Навіть якщо display_errors увімкнено, помилки, що виникають під час запуску
PHP не відображаються. Наполегливо рекомендуємо включати директиву
display_startup_errors лише для налагодження.

`log_errors` bool
Відповідає за вибір журналу, де зберігатимуться повідомлення про
помилки. Це може бути журнал сервера або
[error_log](errorfunc.configuration.md#ini.error-log). Застосовність
Ця установка залежить від конкретного сервера.

> **Примітка**:
>
> Настійно рекомендуємо під час роботи на готових працюючих web сайтах
> протоколювати помилки, де вони відображаються.

`log_errors_max_len` int
Завдання максимальної довжини log_errors у байтах. В
[error_log](errorfunc.configuration.md#ini.error-log) додається
інформація про джерело. Стандартне значення 1024. Встановлення значення
0 дозволяє зняти обмеження на довжину log_errors. Це обмеження
поширюється на помилки, що записуються в журнал, на відображувані
помилки, а також на `$php_errormsg`, але не на функції, що явно викликаються,
такі як [error_log()](function.error-log.md).

Якщо використовується int значення вимірюється байтами. ви також можете
використовувати скорочений запис, який описано в [цьому розділі
FAQ](faq.using.md#faq.using.shorthandbytes).

`ignore_repeated_errors` bool
Не заносити в журнал помилки, що повторюються. Помилка вважається
повторюється, якщо відбувається в тому ж файлі і в тому ж рядку, і якщо
налаштування
[ignore_repeated_source](errorfunc.configuration.md#ini.ignore-repeated-source)
вимкнено.

`ignore_repeated_source` bool
Ігнорувати джерело помилок при пропуску повідомлень, що повторюються. Коли
ця установка увімкнена, повторювані повідомлення про помилки не будуть
заноситись до журналу незалежно від того, в яких файлах та рядках
вони відбуваються.

`report_memleaks` bool
Якщо налаштування увімкнено (за замовчуванням), буде формуватися звіт про
витоків пам'яті, зафіксованих менеджером пам'яті Zend. На POSIX
На платформах цей звіт буде надсилатися в потік stderr. На Windows
платформах він буде надсилатися в налагоджувач функцією OutputDebugString(),
переглянути звіт у цьому випадку можна за допомогою утиліт, як
[» DbgView](http://technet.microsoft.com/en-us/sysinternals/bb896647).
Ця установка має сенс у збірках, призначених для налагодження. При
цьому **`E_WARNING`** повинна бути включена до списку error_reporting.

`track_errors` bool
Якщо включена, остання помилка буде першою в змінній
`$php_errormsg`.

`html_errors` bool
Якщо дозволено, повідомлення про помилки включатимуть теги HTML. Формат
для HTML-помилок натискає посилання, що ведуть на опис
помилки, або функції, де вона відбулася. За такі посилання
відповідальні [docref_root](errorfunc.configuration.md#ini.docref-root)
та [docref_ext](errorfunc.configuration.md#ini.docref-ext).

Якщо заборонена, то помилки видаватимуться простим текстом, без
форматування.

`xmlrpc_errors` bool
Якщо увімкнено, то нормальне сповіщення про помилки відключається і, замість
Помилки виводяться у форматі XML-RPC.

`xmlrpc_error_number` int
Використовується як значення XML-RPC елемента faultCode.

`docref_root` string
Новий формат помилок містить посилання на сторінку з описом помилки або
функції, що спричинила цю помилку. Можна розмістити копію описів помилок та
функцій локально і задати ini директиві значення URL цієї копії. Якщо,
наприклад, локальна копія описів доступна за адресою ``/manual/'',
достатньо прописати **`docref_rootu003d/manual/`**. Додатково
необхідно задати значення директиві docref_ext, що відповідає за
відповідність розширень файлів файлам описів вашої локальної копії,
**`docref_extu003d.md`**. Також можливе використання зовнішніх посилань.
Наприклад, **`docref_rootu003dhttp://manual/en/`** або
**`docref_rootu003d"http://landonize.it/?howu003durl&themeu003dclassic&filteru003dLandon &urlu003dhttp%3A%2F%2Fwww.php.net%2F"`**

У більшості випадків вам знадобиться значення docref_root
закінчувалося слідом ``//``. Тим не менш, трапляються випадки, коли це не
потрібно (дивіться вище, другий приклад).

> **Примітка**:
>
> Ця функціональність призначена лише розробки, оскільки він
> полегшує пошук описів функцій та помилок. Не використовуйте його в
> готових виробничих системах (наприклад, які мають доступ до
> Інтернет).

`docref_ext` string
Дивіться [docref_root](errorfunc.configuration.md#ini.docref-root).

> **Примітка**:
>
> Значення docref_ext має починатися з точки ``.'`.

`error_prepend_string` string
Рядок, який буде виводитися безпосередньо перед повідомленням про
помилки. Використовується лише тоді, коли на екрані з'являється
повідомлення про помилку. Основна мета – додати додаткову
HTML-розмітку до повідомлення про помилку.

`error_append_string` string
Рядок, який буде виводитися після повідомлення про помилку. Використовується
тільки тоді, коли на екрані з'являється повідомлення про помилку. Основна
ціль - додати додаткову HTML-розмітку до повідомлення про помилку.

`error_log` string
Ім'я файлу, до якого буде додано повідомлення про помилки. Файл повинен
бути відкритим для запису користувачем веб-сервера. Якщо використовується
спеціальне значення `syslog`, то повідомлення будуть надсилатися до системного
журнал. На Unix-системах це syslog(3), Windows NT - журнал подій.
Також дивіться: [syslog()](function.syslog.md). Якщо директива не
Задано, помилки будуть надсилатися до журналів SAPI. Наприклад, це можуть
бути журнали помилок Apache або потік `stderr` командного рядка CLI.
Також дивіться функцію [error_log()](function.error-log.md).

`syslog.facility` string
Вказує, який тип програми реєструє повідомлення. Діє тільки
у тому випадку, якщо опція
[error_log](errorfunc.configuration.md#ini.error-log) встановлена в
"Syslog".

`syslog.filter` string
Вказує тип фільтра для фільтрації повідомлень, що реєструються.
Дозволені символи передаються без змін; всі інші записуються
у шістнадцятковому поданні з префіксом `\x`.

- `all` – рядок буде поділено на символи нового рядка та всі символи
будуть передані без змін
- `ascii` – рядок буде поділено на символи нового рядка, а будь-які
недруковані 7-бітові символи ASCII будуть екрановані
- `no-ctrl` – рядок буде поділено на символи нового рядка, а будь-які
недруковані символи будуть екрановані
- `raw` – всі символи передаються до системного журналу без змін, без
поділу на нові рядки (ідентично PHP до 7.3)

Параметр впливає на ведення журналу через
[error_log](errorfunc.configuration.md#ini.error-log) встановленого в
"syslog" та виклики [syslog()](function.syslog.md).

> **Примітка**:
>
> Тип фільтра `raw` доступний починаючи з PHP 7.3.8 та PHP 7.4.0.

Директива не підтримується у Windows.

`syslog.ident` string
Визначає рядок ідентифікатора, який додається до кожного
повідомленню. Діє лише у тому випадку, якщо опція
[error_log](errorfunc.configuration.md#ini.error-log) встановлена в
"Syslog".
