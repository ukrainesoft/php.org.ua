- [« php_ini_scanned_files](function.php-ini-scanned-files.md)
- [php_uname »](function.php-uname.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Повертає тип інтерфейсу між веб-сервером та PHP

# php_sapi_name

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

php_sapi_name — Повертає тип інтерфейсу між веб-сервером та PHP

### Опис

**php_sapi_name**(): string\|false

Повертає рядок у нижньому регістрі, що містить опис типу інтерфейсу
(Server API, SAPI), який використовує PHP. Наприклад, у CLI PHP ця
рядок буде "cli", в той час як з Apache може бути кілька різних
значень, залежно від конкретного SAPI. Можливі значення наведено
нижче.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає тип інтерфейсу у вигляді рядка в нижньому регістрі або
**`false`** у разі виникнення помилки.

Можливі значення, що повертаються (список може бути неповним): `apache`,
`apache2handler`, `cgi` (до PHP 5.3), `cgi-fcgi`, `cli`, `cli-server`,
`embed`, `fpm-fcgi`, `litespeed`, `phpdbg`.

### Приклади

**Приклад #1 Приклад використання **php_sapi_name()****

У цьому прикладі перевіряється підрядка `cgi`, так як це також може бути
`cgi-fcgi`.

` <?php$sapi_type u003d php_sapi_name();if (substr($sapi_type, 0, 3) u003du003d 'cgi') {    echo "Ви  використовуєте CGI PHP
";} else {    echo "Ви  використовуєте не CGI PHP
";}?> `

### Примітки

> **Примітка**: **Альтернативний варіант**
>
> Константа PHP **`PHP_SAPI`** зберігає те саме значення, що й
> **php_sapi_name()**.

**Підказка**

# Важливий аспект

Ім'я SAPI може визначитися неточно, тому що, наприклад, у випадку з
`apache` інтерфейс може бути визначений як `apache2handler`.

### Дивіться також

- [PHP_SAPI](reserved.constants.md#reserved.constants.core)
