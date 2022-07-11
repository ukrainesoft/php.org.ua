- [«cli_set_process_title](function.cli-set-process-title.md)
- [extension_loaded »](function.extension-loaded.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Завантажує модуль PHP під час виконання

#dl

(PHP 4, PHP 5, PHP 7, PHP 8)

dl — Завантажує модуль PHP під час виконання

### Опис

**dl**(string `$extension_filename`): bool

Завантажує модуль PHP, заданий аргументом `extension_filename`.

Щоб перевірити, чи заданий модуль вже завантажений, використовуйте функцію
[extension_loaded()](function.extension-loaded.md). Функція працює
як вбудованих модулів, так динамічно завантажених (тобто.
завантажених як через `php.ini`, так і через **dl()**).

**Увага**

Функція видалена з деяких SAPI у PHP 5.3.0 та видалена з PHP-FPM у PHP
7.0.0.

### Список параметрів

`extension_filename`
Аргумент містить *лише* ім'я файлу модуля, який потрібно
завантажити. Це ім'я залежить від платформи. Наприклад, модуль
[sockets](ref.sockets.md) (якщо скомпільований, як модуль, що завантажується,
а не модуль за замовчуванням!) називатиметься `sockets.so` на
Unix-платформах, і `php_sockets.dll` серед Windows.

Директорія, з якої модуль має бути завантажений, також залежить від
платформи:

Windows - Якщо явно не задано в `php.ini`, модуль вантажитиметься з
`C:\php5\` за замовчуванням.

Unix - Якщо явно не встановлено в `php.ini`, директорія за замовчуванням залежить
від

- PHP зібраний з налаштуванням `--enable-debug` або без неї
- PHP зібраний з (експериментальною) підтримкою ZTS (Zend Thread)
Safety) чи ні
- поточний внутрішній номер `ZEND_MODULE_API_NO` (номер внутрішнього
модуля Zend API, який, як правило, є датою основного
зміни API модуля, наприклад `20010901`)

Зважаючи на вищесказане, отримуємо наступні значення по
замовчуванням для директорії модуля
`<install-dir>/lib/php/extensions/ <debug-or-not>-<zts-or-not>-ZEND_MODULE_API_NO`,
наприклад, `/usr/local/php/lib/php/extensions/debug-non-zts-20010901` або
`/usr/local/php/lib/php/extensions/no-debug-zts-20010901`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Якщо механізм завантаження модулів недоступний
або вимкнено (значення off налаштування
[enable_dl](info.configuration.md#ini.enable-dl) в `php.ini`), буде
видана помилка **`E_ERROR`** та виконання припиняється. Якщо **dl()** не
зможе завантажити задану бібліотеку, то на додаток до **`false`**
буде видано повідомлення **`E_WARNING`**.

### Приклади

**Приклад #1 Приклади використання **dl()****

` <?php// Приклад завантаження модуля, основуючись на ОСif (!extension_loaded('sqlite')) {    if (strtoupper(substr(PHP_OS, 0, 3))                '); } else {       dl('sqlite.so'); }}// Або на константі PHP_SHLIB_SUFFIXif (!extension_loaded('sqlite')) {    $prefix u003d (PHP_SHLIB_SUFFIX u003du003du003d'dll') ? 'php_' : ''; dl($prefix . 'sqlite.' . PHP_SHLIB_SUFFIX);}?> `

### Примітки

> **Примітка**:
>
> **dl()** чутлива до регістру на Unix-платформах.

### Дивіться також

- [Директиви завантаження модулів](ini.core.md#ini.extension)
- [extension_loaded()](function.extension-loaded.md) - Визначає,
чи завантажений модуль
