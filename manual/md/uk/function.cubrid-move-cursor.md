- [«cubrid_lock_write](function.cubrid-lock-write.md)
- [cubrid_next_result »](function.cubrid-next-result.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Переміщує курсор у результаті

#cubrid_move_cursor

(PECL CUBRID u003d 8.3.0)

cubrid_move_cursor — Переміщує курсор у результаті

### Опис

**cubrid_move_cursor**(resource `$req_identifier`, int `$offset`, int
`$origin` u003d CUBRID_CURSOR_CURRENT): bool

Функція **cubrid_move_cursor()** використовується для переміщення поточного
положення курсору `req_identifier` на значення, задане в аргументі
`offset`, у напрямку, заданому в аргументі `origin`. Щоб встановити
аргумент `origin`, ви можете використовувати **`CUBRID_CURSOR_FIRST`** для
першій частині результату, **`CUBRID_CURSOR_CURRENT`** для поточного
розташування результату або **`CUBRID_CURSOR_LAST`** для останньої
частини результату. Якщо аргумент `origin` не вказано явно, тоді функція
використовує **`CUBRID_CURSOR_CURRENT`** як значення за замовчуванням.

Якщо значення діапазону переміщення курсору перевищує допустиму межу,
то курсор переміщається в наступне місце після допустимого діапазону для
курсор. Наприклад, якщо ви перемістите 20 одиниць в результаті розміру
10, то курсор переміститься на 11-е місце та поверне
**`CUBRID_NO_MORE_DATA`**.

### Список параметрів

`req_identifier`
Ідентифікатор запиту.

`offset`
Кількість одиниць, куди потрібно перемістити курсор.

`origin`
Місце, з якого ви бажаєте перемістити курсор:
**`CUBRID_CURSOR_FIRST`**, **`CUBRID_CURSOR_CURRENT`** або
**`CUBRID_CURSOR_LAST`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_move_cursor()****

` <?php$conn u003d cubrid_connect("127.0.0.1", 33000, "demodb", "dba"); );$result u003d cubrid_fetch_row($req);var_dump($result);cubrid_move_cursor($req, 1, CUBRID_CURSOR_FIRST);$result u003d cubrid_fetch_row($req);var_dump($result); );$result u003d cubrid_fetch_row($req);var_dump($result);cubrid_close_request($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(2) {
[0]u003d>
string(1) "G"
[1]u003d>
string(4) "Gold"
}
array(2) {
[0]u003d>
string(1) "X"
[1]u003d>
string(5) "Mixed"
}
array(2) {
[0]u003d>
string(1) "M"
[1]u003d>
string(3) "Man"
}

### Дивіться також

- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
