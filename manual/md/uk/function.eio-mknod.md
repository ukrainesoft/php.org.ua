- [«eio_mkdir](function.eio-mkdir.md)
- [eio_nop »] (function.eio-nop.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Створює спеціальний чи звичайний файл

#eio_mknod

(PECL eio \>u003d 0.0.1dev)

eio_mknod — Створює спеціальний або звичайний файл

### Опис

**eio_mknod**(
string `$path`,
int `$mode`,
int `$dev`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_mknod()** створює звичайний або спеціальний (що частіше) файл.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`path`
Шлях до нового файлу.

`mode`
Задає роздільну здатність файлу та його тип. Значенням аргументу є
комбінація (використовуючи побітове АБО) однієї або декількох констант,
відповідають за тип файлу, та числа, що відповідає за дозволи для файлу
(наприклад, 0640). Константи типів файлів: **`EIO_S_IFREG`**(звичайний
файл), **`EIO_S_IFCHR`**(символьний файл), **`EIO_S_IFBLK`**(спеціальний
блоковий файл), **`EIO_S_IFIFO`**(FIFO - іменований пайп) та
**`EIO_S_IFSOCK`**(UNIX сокет домену). Для завдання дозволів необхідно
використовувати константи *EIO_S\_I\**.

`dev`
При створенні файлу типу **`EIO_S_IFCHR`** або **`EIO_S_IFBLK`**,
параметр dev задає верхню та нижню межі нумерації спеціальних
файлів пристроїв. При створенні інших типів файлів `dev` ігнорується. За
додатковими поясненнями звертайтесь до сторінки документації
mknod(2)*.

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
Дані, які необхідно передати в callback-функцію.

### Значення, що повертаються

**eio_mknod()** повертає ресурс запиту у разі успішного виконання
операції або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **eio_mknod()****

`<?php//ім'я FIFO$temp_filename u003d "/tmp/eio-temp-fifo";/* викликатиметься по завершенні роботи функції eio_mknod() */function my_mknod_ $    $ data); var_dump($s); if ($result u003du003du003d0) {        echo "eio_mknod_ok"; }   @unlink($data);}eio_mknod($temp_filename, EIO_S_IFIFO, 0,   EIO_PRI_DEFAULT, "my_mknod_callback", $temp_filename);eio_e;

Результатом виконання цього прикладу буде щось подібне:

array(26) {
[0]u003d>
int(17)
[1]u003d>
int(2337608)
[2]u003d>
int(4096)
[3]u003d>
int(1)
[4]u003d>
int(1000)
[5]u003d>
int(100)
[6]u003d>
int(0)
[7]u003d>
int(0)
[8]u003d>
int(1318241261)
[9] u003d>
int(1318241261)
[10] u003d>
int(1318241261)
[11] u003d>
int(4096)
[12] u003d>
int(0)
["dev"]u003d>
int(17)
["ino"]u003d>
int(2337608)
["mode"]u003d>
int(4096)
["nlink"]u003d>
int(1)
["uid"]u003d>
int(1000)
["gid"]u003d>
int(100)
["rdev"]u003d>
int(0)
["size"]u003d>
int(0)
["atime"]u003d>
int(1318241261)
["mtime"]u003d>
int(1318241261)
["ctime"]u003d>
int(1318241261)
["blksize"]u003d>
int(4096)
["blocks"]u003d>
int(0)
}
eio_mknod_ok

### Дивіться також

- [eio_open()](function.eio-open.md) - Відкриває файл
