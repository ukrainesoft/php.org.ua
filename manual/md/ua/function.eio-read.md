- [«eio_poll](function.eio-poll.md)
- [eio_readahead »](function.eio-readahead.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Читає дані з файлу, починаючи із заданого усунення

#eio_read

(PECL eio \>u003d 0.0.1dev)

eio_read — Читає дані з файлу, починаючи із заданого усунення

### Опис

**eio_read**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$length`,
int `$offset`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_read()** зчитує `length` байт із файлу з описувачем `fd`,
починаючи з байта `offset`. Прочитані дані передаються через параметр
`result` у функцію `callback`.

### Список параметрів

`fd`
Потік, ресурс сокету чи числовий файловий описувач.

`length`
Максимальне число байт, що зчитується.

`offset`
Зміщення у файлі.

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
Дані, які необхідно передати у функцію callback.

### Значення, що повертаються

**eio_read()** передає лічені дані через параметр `result`
функцію `callback`.

### Приклади

**Приклад #1 Приклад використання **eio_read()****

` <?php// Відкриваємо тимчасовий файл і пишем в нього будь-які дані$temp_filename u003d "eio-temp-file.tmp";$fp u003dfopen($temp_filename, "w")8 ");fclose($fp);/* Викликається, коли eio_read() завершує роботу */function my_read_cb($data, $result) {    global $temp_filename; // Виводимо прочитані дані    var_dump($result); // закриваємо файл    eio_close($data); eio_event_loop(); // Удаляем временный файл    @unlink($temp_filename);}/* Вызывается, когда eio_open() завершает работу */function my_file_opened_callback($data, $result) { // $result должен содержать файловый описатель    if ($result > 0) {  // Прочитаємо 5 байт, починаючи з третього         eio_read($result, 5, 2, EIO_PRI_DEFAULT, "my_read_cb", $result); eio_event_loop(); } else {  // eio_open() завершила роботу відмовою       unlink($data); }}// відкриваємо файл для читання і записуeio_open($temp_filename, EIO_O_RDWR, NULL,    EIO_PRI_DEFAULT, "my_file_opened_callback",|$;

Результатом виконання цього прикладу буде щось подібне:

string(5) "34567"

### Дивіться також

- [eio_open()](function.eio-open.md) - Відкриває файл
- [eio_write()](function.eio-write.md) - Запис у файл
- [eio_close()](function.eio-close.md) - Закрити файл
- [eio_event_loop()](function.eio-event-loop.md) - Взаємодіє з
libeio доти, доки всі запити не будуть виконані
