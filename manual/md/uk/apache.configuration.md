- [« Установка](apache.installation.md)
- [Типи ресурсів»] (apache.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](apache.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка модуля Apache PHP залежить від налаштувань в `php.ini`. Налаштування
конфігурації з `php.ini` можуть бути перевизначені через налаштування
прапор
[php_flag](configuration.changes.md#configuration.changes.apache) в
конфігураційному файлі сервера або локальному файлі `.htaccess`.

**Приклад #1 Відключення парсера PHP для директорії за допомогою
`.htaccess`**

php_flag engine off

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -----------------|--------------|----------------- |------------------|
PHP_INI_ALL | || [engine](apache.configuration.md#ini.engine) | "1" | 
| [child_terminate](apache.configuration.md#ini.child-terminate) | "0" | PHP_INI_ALL | |
| [last_modified](apache.configuration.md#ini.last-modified) | "0" | PHP_INI_ALL | |
PHP_INI_ALL | || [xbithack](apache.configuration.md#ini.xbithack) | "0" | 

**Налаштування конфігурації Apache**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`engine` bool
Вмикає або вимикає інтерпретатор PHP. Ця директива в
Насправді дуже корисна в модулі Apache PHP. Вона використовується
сайтами, яким необхідно дозволити або заборонити інтерпретатор PHP
основі директорій або віртуальних хостів. Встановлюючи **`engine off`**
за необхідності у файлі `httpd.conf` можна дозволити або заборонити
Інтерпретатор PHP.

`child_terminate` bool
Ця установка керує тим, чи можуть скрипти PHP вимагати закінчення
дочірніх процесів після завершення запиту. Дивіться також
[apache_child_terminate()](function.apache-child-terminate.md).

`last_modified` bool
Посилає скриптам PHP дату модифікації як заголовок Last-Modified для
цього запиту.

`xbithack` bool
Виконання файлів з бітом, що запускається як PHP, незалежно від
розширення.
