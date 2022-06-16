- [«eio_fdatasync](function.eio-fdatasync.md)
- [eio_fstatvfs »](function.eio-fstatvfs.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Повертає статус файлу

#eio_fstat

(PECL eio \>u003d 0.0.1dev)

eio_fstat — Повертає статус файлу

### Опис

**eio_fstat**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$ data` u003d ?
): resource

**eio_fstat()** повертає інформацію про стан файлу в `result`
аргументі `callback`

### Список параметрів

`fd`
Потік, покажчик на сокет або числовий дескриптор файлу.

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
Довільна змінна, що передається в `callback`-функцію.

### Значення, що повертаються

[eio_busy()](function.eio-busy.md) повертає покажчик на запит у
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання
[eio_lstat()](function.eio-lstat.md)**

` <?php// Створення тимчасового файлу$tmp_filename u003d dirname(__FILE__) ."/eio-file.tmp";touch($tmp_filename);/* Викликається після завершення eio_fstat() $/$ ) { // Виводить масив з інформацією про стан файла var_dump($result); if ($data['fd']) {  // Закриває тимчасовий файл eio_close($data['fd']); eio_event_loop(); } // Видаляє тимчасовий файл @unlink($data['file']);}/* Викликається після завершення eio_open() */function my_open_cb($data, $result) { / | 'fd' u003d>>$result, 'file'u003d> $data ); // Отримання інформації про файл eio_fstat($result, EIO_PRI_DEFAULT, "my_res_cb", $d); // Виконання запитів eio_event_loop();}// Відкриття тимчасового файлуeio_open($tmp_filename, EIO_O_RDONLY, NULL, EIO_PRI_DEFAULT,  "my_open_cb""_|

Результатом виконання цього прикладу буде щось подібне:

array(12) {
["st_dev"]u003d>
int(2050)
["st_ino"]u003d>
int(2489159)
["st_mode"]u003d>
int(33188)
["st_nlink"]u003d>
int(1)
["st_uid"]u003d>
int(1000)
["st_gid"]u003d>
int(100)
["st_rdev"]u003d>
int(0)
["st_blksize"]u003d>
int(4096)
["st_blocks"]u003d>
int(0)
["st_atime"]u003d>
int(1318239506)
["st_mtime"]u003d>
int(1318239506)
["st_ctime"]u003d>
int(1318239506)
}

### Дивіться також

- [eio_lstat()](function.eio-lstat.md) - Повертає статус файлу
- [eio_stat()](function.eio-stat.md) - Повертає статус файлу
