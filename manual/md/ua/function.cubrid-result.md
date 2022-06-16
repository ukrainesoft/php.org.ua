- [«
cubrid_real_escape_string](function.cubrid-real-escape-string.md)
- [cubrid_unbuffered_query »](function.cubrid-unbuffered-query.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримати значення із заданого стовпця заданого рядка

#cubrid_result

(PECL CUBRID u003d 8.3.0)

cubrid_result — Отримати значення із заданого стовпця заданого рядка

### Опис

**cubrid_result**(resource `$result`, int `$row`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$field` u003d 0): string

Функція повертає значення із заданого стовпця заданого рядка
результуючого набору.

### Список параметрів

`result`
`result` отриманий з [cubrid_execute()](function.cubrid-execute.md)

`row`
Номер рядка, починаючи з 0.

`field`
Ім'я або індекс стовпця `field`. Це може бути індекс, ім'я стовпця, ім'я
таблиці з ім'ям шпальти, розділених точкою (tablename.fieldname). Якщо
ім'я стовпця є псевдонімом ('select foo as bar from...'),
використовуйте цей псевдонім замість реального імені стовпця. Якщо не
задано, то буде використано перший стовпець.

### Значення, що повертаються

Значення заданого стовпця у разі успішного виконання (NULL, якщо
значення дорівнює null).

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_result()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$req u003d cubrid_execute($conn, "SELECT * FROM code");$result u003d cubrid_result($q; result);$result u003d cubrid_result($req, 0, 1);var_dump($result);$result u003d cubrid_result($req, 5, "f_name");var_dump($result);cubrid_close_request($req);cubrid_disc ($conn);?> `

Результат виконання цього прикладу:

string(1) "X"
string(5) "Mixed"
string(4) "Gold"
