- [«cubrid_result](function.cubrid-result.md)
- [Застарілі псевдоніми та функції CUBRID »](oldaliases.cubrid.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Виконання запиту без завантаження результату на згадку

#cubrid_unbuffered_query

(PECL CUBRID u003d 8.3.0)

cubrid_unbuffered_query — Виконання запиту без завантаження результату
пам'ять

### Опис

**cubrid_unbuffered_query**(string `$query`, resource `$conn_identifier`
u003d?): Resource

Функція виконує запит без очікування на виконання. Вона повертає
значення у процесі створення результуючого набору.

### Список параметрів

`query`
SQL-запит

`conn_identifier`
Ідентифікатор з'єднання CUBRID. Якщо не задано, то буде використано
останнє з'єднання, повернене
[cubrid_connect()](function.cubrid-connect.md).

### Значення, що повертаються

Для SELECT, SHOW, DESCRIBE, EXPLAIN та інших запитів, що повертають
результуючий набір, [cubrid_query()](function.cubrid-query.md)
повертає ресурс у разі успішного виконання.

Для операторів SQL іншого типу UPDATE, DELETE, DROP і т.д. повертає
**`true`** у разі успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_unbuffered_query()****

`<?php   $link u003d cubrid_connect("localhost", 30000, "demodb", "dba", ""); if (!$link)    {         die('Не удалося з'єднатися.'); }   $queryu003du003d"select * from code"; $result u003d cubrid_unbuffered_query($query, $link); while($row u003d cubrid_fetch($result))    {        var_dump($row); }   cubrid_close_request($result); cubrid_disconnect($link);?> `

### Примітки

> **Примітка**:
>
> Переваги **cubrid_unbuffered_query()** мають свою ціну: ви не
> зможете використовувати
> [cubrid_num_rows()](function.cubrid-num-rows.md) та
> [cubrid_data_seek()](function.cubrid-data-seek.md) для
> результуючого набору, поверненого **cubrid_unbuffered_query()**.
