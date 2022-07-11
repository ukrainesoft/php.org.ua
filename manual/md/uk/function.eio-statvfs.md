- [«eio_stat](function.eio-stat.md)
- [eio_symlink »] (function.eio-symlink.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Повертає статистику файлової системи

#eio_statvfs

(PECL eio \>u003d 0.0.1dev)

eio_statvfs — Повертає статистику файлової системи

### Опис

**eio_statvfs**(
string `$path`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$ data` u003d ?
): resource

**eio_statvfs()** повертає статистику файлової системи до параметра
'result' функції 'callback'.

### Список параметрів

`path`
Ім'я будь-якого файлу у вмонтованій файловій системі.

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

[eio_stat()](function.eio-stat.md) повертає покажчик на запит у
у разі успішного виконання або **`false`** у разі виникнення
помилки. У разі успішного виконання параметр 'result' функції
callback є масивом.

### Приклади

**Приклад #1 Приклад використання **eio_statvfs()****

` <?php$tmp_filename u003d '/tmp/eio-file.tmp';touch($tmp_filename);function my_statvfs_callback($data, $result) {    var_dump($data); var_dump($result); @unlink($data);}eio_statvfs($tmp_filename, EIO_PRI_DEFAULT, "my_statvfs_callback", $tmp_filename);eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

string(17) "/tmp/eio-file.tmp"
array(11) {
["f_bsize"]u003d>
int(4096)
["f_frsize"]u003d>
int(4096)
["f_blocks"]u003d>
int(262144)
["f_bfree"]u003d>
int(262111)
["f_bavail"]u003d>
int(262111)
["f_files"]u003d>
int(1540815)
["f_ffree"]u003d>
int(1540743)
["f_favail"]u003d>
int(1540743)
["f_fsid"]u003d>
int(0)
["f_flag"]u003d>
int(4102)
["f_namemax"]u003d>
int(255)
}
