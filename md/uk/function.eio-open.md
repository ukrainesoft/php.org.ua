- [«eio_nthreads](function.eio-nthreads.md)
- [eio_poll »] (function.eio-poll.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Відкриває файл

#eio_open

(PECL eio \>u003d 0.0.1dev)

eio_open — Відкриває файл

### Опис

**eio_open**(
string `$path`,
int `$flags`,
int `$mode`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_open()** відкриває файл по заданому шляху `path` у режимі доступу
`mode`.

### Список параметрів

`path`
Шлях до файлу, що відкривається.

**Увага**
У деяких SAPI (наприклад, *PHP-FPM*) необхідно вказувати повний
шлях. А якщо ні, то відмова в роботі функції.

`flags`
Комбінація з однієї або кількох констант *EIO_O\_\**. Сенс констант
*EIO_O\_\** той самий, що й у відповідних їм констант *O\_\**,
визначених у заголовному файлі З `fnctl.h`. За замовчуванням приймається
константа **`EIO_O_RDWR`**.

`mode`
Комбінація з однієї або кількох констант *EIO_S\_I\** (через
побітове АБО). Сенс констант той самий, що й у відповідних їм
констант *S_I\**, визначених у заголовному файлі С
[» sys/stat.h](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/sys_stat.h.md).
Параметр обов'язковий, якщо створюється новий файл. В іншому випадку,
параметр ігнорується.

`pri`
Пріоритет запитів: **`EIO_PRI_DEFAULT`**, **`EIO_PRI_MIN`**,
**`EIO_PRI_MAX`**, або **`null`**. Якщо переданий **`null`**, то `pri`
встановлюється у **`EIO_PRI_DEFAULT`**.

`callback`
Функція callback викликається при завершенні запиту. Вона повинна
задовольняти наступний прототип:

` void callback(mixed $data, int $result[, resource $req]);'

`data`
є даними користувача, переданими в запиті.

`result`
містить результуюче значення, що залежить від запиту; зазвичай це
значення, яке повертається відповідним системним викликом.

`req`
є опціональним запитуваним ресурсом, який може
використовуватися з такими функціями як
[eio_get_last_error()](function.eio-get-last-error.md)

`data`
Дані, які будуть передаватися в callback-функцію.

### Значення, що повертаються

**eio_open()** повертає дескриптор файлу через аргумент `result`
callback-функції `callback`. У разі виникнення помилки `result`
дорівнюватиме **`-1`**.

### Приклади

**Приклад #1 Приклад використання **eio_open()****

`<?php$temp_filename u003d "eio-temp-file.tmp";/* Буде викликатися після завершення роботи eio_close() */function my_close_cb($data, $result) у     u003du003d 0); @unlink($data);}/* Буде викликатися після завершення роботи eio_open() */function my_file_opened_callback($data, $result) { // $result повинен        if ($result > 0) {  // закриваємо файл         eio_close($result, EIO_PRI_DEFAULT, "my_close_cb", $data); eio_event_loop(); }}// создаём файл для чтения и записи// запрещаем группе и другим пользователям делать что-либо с файломeio_open($temp_filename, EIO_O_CREAT | EIO_O_RDWR, EIO_S_IRUSR | EIO_S_IWUSR,  EIO_PRI_DEFAULT, "my_file_opened_callback", $temp_filename);eio_event_loop();? > `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)

### Дивіться також

- [eio_mknod()](function.eio-mknod.md) - Створює спеціальний або
звичайний файл
