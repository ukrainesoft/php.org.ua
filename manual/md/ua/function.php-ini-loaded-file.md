- [«memory_get_usage](function.memory-get-usage.md)
- [php_ini_scanned_files »](function.php-ini-scanned-files.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримати шлях до завантаженого файлу php.ini

# php_ini_loaded_file

(PHP 5 \>u003d 5.2.4, PHP 7, PHP 8)

php_ini_loaded_file — Отримати шлях до завантаженого файлу php.ini

### Опис

**php_ini_loaded_file**(): string\|false

Перевіряє, чи завантажено файл `php.ini`, і повертає його шлях.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Шлях до завантаженого файлу `php.ini` або **`false`**, якщо файл не
завантажений.

### Приклади

**Приклад #1 Приклад використання **php_ini_loaded_file()****

` <?php$inipath u003d php_ini_loaded_file();if ($inipath) {   echo 'Завантажений php.ini: ' . $inipath;} else {   echo 'Файл php.ini не завантажений';}?> `

Результатом виконання цього прикладу буде щось подібне:

Loaded php.ini: /usr/local/php/php.ini

### Дивіться також

- [php_ini_scanned_files()](function.php-ini-scanned-files.md) -
Повертає список .ini-файлів, знайдених у додатковій
ini-директорії
- [phpinfo()](function.phpinfo.md) - Виводить інформацію про поточну
конфігурації PHP
- [Файл конфігурації](configuration.file.md)
