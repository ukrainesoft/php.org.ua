- [«cubrid_bind](function.cubrid-bind.md)
- [cubrid_close_request »](function.cubrid-close-request.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Закриває обробник запиту

#cubrid_close_prepare

(PECL CUBRID u003d 8.3.0)

cubrid_close_prepare — Закриває обробник запиту

### Опис

**cubrid_close_prepare**(resource `$req_identifier`): bool

Функція **cubrid_close_prepare()** закриває обробник запиту,
заданий в `req_identifier`, і звільняє виділену пам'ять.
Є синонімом для
[cubrid_close_request()](function.cubrid-close-request.md).

### Список параметрів

`req_identifier`
Ідентифікатор запиту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання.

### Приклади

**Приклад #1 Приклад використання **cubrid_close_prepare()****

`<?php$con u003d cubrid_connect ("localhost", 33000, "demodb", "dba", "");if ($con) {   echo "connected successfully"; $req u003d cubrid_execute| if ($req) {      while ( list ($id, $name) u003d cubrid_fetch ($req) ){         echo $id; echo $name; }    cubrid_close_prepare($req); // or you can use cubrid_close_request($req)   }   cubrid_disconnect($con);}?> `

### Дивіться також

- [cubrid_close_request()](function.cubrid-close-request.md) -
Закриває обробник запиту
