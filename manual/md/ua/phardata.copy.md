- [« PharData::convertToExecutable](phardata.converttoexecutable.md)
- [PharData::decompress »](phardata.decompress.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Скопіювати файл з tar/zip-архіву в новий файл усередині нього ж

# PharData::copy

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::copy — Скопіювати файл із tar/zip-архіву в новий файл усередині
нього ж

### Опис

public **PharData::copy**(string `$from`, string `$to`): bool

Копіює файл з tar/zip-архіву в новий файл усередині нього. Це
об'єктно-орієнтована альтернатива для [copy()](function.copy.md) з
потоковою обгорткою phar.

### Список параметрів

`from`

`to`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання. Але краще
використовувати механізм перехоплення винятків контролю успішності.

### Помилки

Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
копійований файл відсутній, новий файл вже існує, запис
заборонено або виникли проблеми з відкриттям читання вихідного файлу. В
у разі проблем із записом на диск кидається виняток
[PharException](class.pharexception.md).

### Приклади

**Приклад #1 Приклад використання **PharData::copy()****

У прикладі показано використання **PharData::copy()** та аналог з
використанням потокової обгортки. Головна різниця між цими
підходами – обробка помилок. Усі методи PharData викидають
винятки, тоді як потокові обгортки використовують функцію
[trigger_error()](function.trigger-error.md).

`<?phptry {   $phar u003d new PharData('myphar.tar'); $phar['a'] u003d 'hi'; $phar->copy('a', 'b'); echo $phar['b']; // виводить "phar://myphar.tar/b"} catch (Exception $e) {    // Обробка помилок}// Аналог з використанням потокових обгорток.// В з| //myphar.tar/a', 'phar//myphar.tar/c');echo file_get_contents('phar://myphar.tar/c'); // виводить "hi"?> `
