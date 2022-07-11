- [«cubrid_close_prepare](function.cubrid-close-prepare.md)
- [cubrid_col_get »](function.cubrid-col-get.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Закриває обробник запиту

#cubrid_close_request

(PECL CUBRID u003d 8.3.0)

cubrid_close_request — Закриває обробник запиту

### Опис

**cubrid_close_request**(resource `$req_identifier`): bool

Функція **cubrid_close_request()** закриває обробник запиту,
заданий в `req_identifier`, і звільняє виділену пам'ять.
Є синонімом для
[cubrid_close_prepare()](function.cubrid-close-prepare.md).

### Список параметрів

`req_identifier`
Ідентифікатор запиту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання.

### Приклади

**Приклад #1 Приклад використання **cubrid_close_request()****

`<?php$con u003d cubrid_connect ("localhost", 33000, "demodb", "dba", "");if ($con) {   echo "connected successfully"; $req u003d cubrid_execute| if ($req) {      while ( list ($id, $name) u003d cubrid_fetch ($req) ){         echo $id; echo $name; }    cubrid_close_request($req); // or you can use cubrid_close_prepare($req)   }   cubrid_disconnect($con);}?> `

### Дивіться також

- [cubrid_close_prepare()](function.cubrid-close-prepare.md) -
Закриває обробник запиту
