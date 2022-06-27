- [«stream_set_timeout](function.stream-set-timeout.md)
- [stream_socket_accept »](function.stream-socket-accept.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Встановлює буферизацію файлу під час запису у вказаний потік

#stream_set_write_buffer

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

stream_set_write_buffer — Встановлює буферизацію файлу під час запису в
вказаний потік

### Опис

**stream_set_write_buffer**(resource `$stream`, int `$size`): int

Встановлює буферизацію для операцій запису на заданому потоці
`stream` у число `size` байт.

### Список параметрів

`stream`
Вказівник файлу.

`size`
Число байт для буферизації. Якщо аргумент `size` дорівнює 0, то операції
записи не буферизуються. Це гарантує, що всі операції запису з
використанням функції [fwrite()](function.fwrite.md) буде завершено
перед тим, як іншим процесам буде дозволено записувати в потік
виведення.

### Значення, що повертаються

Повертає 0 у разі успішного виконання, або інше значення в
у випадку, якщо запит не може бути виконаний.

### Приклади

**Приклад #1 Приклад використання **stream_set_write_buffer()****

Наступний приклад демонструє використання функції
**stream_set_write_buffer()** для створення потоку, що не буферизується.

`<?php$fp u003d fopen($file, "w");if ($fp) {   if (stream_set_write_buffer($fp, 0) !u003du003d 0) {    f f/   $ output); fclose($fp);}?> `

### Дивіться також

- [fopen()](function.fopen.md) - Відкриває файл або URL
- [fwrite()](function.fwrite.md) - Бінарно-безпечний запис у файл
