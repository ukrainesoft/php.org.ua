- [«eio_link](function.eio-link.md)
- [eio_mkdir »] (function.eio-mkdir.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Повертає статус файлу

#eio_lstat

(PECL eio \>u003d 0.0.1dev)

eio_lstat — Повертає статус файлу

### Опис

**eio_lstat**(
string `$path`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_lstat()** повертає інформацію про стан файлу в `result`
аргументі `callback`

### Список параметрів

`path`
Шлях до файлу

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

**eio_lstat()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **eio_lstat()****

` <?php$tmp_filenameu003du003ddirname(__FILE__). "/eio-file.tmp"; touch ($ tmp_filename); var_dump($result);}function my_open_cb($data, $result) {   eio_close($result); eio_event_loop(); @unlink($data);}eio_lstat($tmp_filename, EIO_PRI_DEFAULT, "my_res_cb", "eio_lstat");eio_open($tmp_filename, EIO_O_RDONLY,|NULL, EIO_PRI_DEFA

Результатом виконання цього прикладу буде щось подібне:

string(9) "eio_lstat"
array(12) {
["st_dev"]u003d>
int(2050)
["st_ino"]u003d>
int(2099197)
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
int(1318235777)
["st_mtime"]u003d>
int(1318235777)
["st_ctime"]u003d>
int(1318235777)
}

### Дивіться також

- [eio_stat()](function.eio-stat.md) - Повертає статус файлу
- [eio_fstat()](function.eio-fstat.md) - Повертає статус файлу
