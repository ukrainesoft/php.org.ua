- [« apache_get_modules](function.apache-get-modules.md)
- [apache_getenv »](function.apache-getenv.md)

- [PHP Manual](index.md)
- [Функції Apache](ref.apache.md)
- Повертає версію Apache

#apache_get_version

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

apache_get_version — Повертає версію Apache

### Опис

**apache_get_version**(): string\|false

Повертає версію Apache.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає версію Apache або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **apache_get_version()****

` <?php$version u003d apache_get_version();echo "$version
";?> `

Результатом виконання цього прикладу буде щось подібне:

Apache/1.3.29 (Unix) PHP/4.3.4

### Дивіться також

- [phpinfo()](function.phpinfo.md) - Виводить інформацію про поточну
конфігурації PHP
