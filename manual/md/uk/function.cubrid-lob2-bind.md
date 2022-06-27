- [«cubrid_lob_size](function.cubrid-lob-size.md)
- [cubrid_lob2_close »](function.cubrid-lob2-close.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Зв'язує об'єкт LOB або рядок у вигляді об'єкта LOB із підготовленим
оператором як параметри

# cubrid_lob2_bind

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_bind — Зв'язує об'єкт LOB або рядок як об'єкт LOB з
підготовленим оператором як параметри

### Опис

**cubrid_lob2_bind**(
resource `$req_identifier`,
int `$bind_index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$bind_value`,
string `$bind_value_type` u003d ?
): bool

Функція **cubrid_lob2_bind()** використовується для прив'язування даних
BLOB/CLOB до відповідної псевдозмінної в операторі SQL, який
було передано в [cubrid_prepare()](function.cubrid-prepare.md). Якщо
параметр `bind_value_type` не вказано, за замовчуванням буде використовуватись
рядок "BLOB". Але якщо раніше використовувалась функція
[cubrid_lob2_new()](function.cubrid-lob2-new.md), `bind_value_type`
буде відповідати параметру `type` в
[cubrid_lob2_new()](function.cubrid-lob2-new.md) за промовчанням.

### Список параметрів

`req_identifier`
Ідентифікатор запиту, отриманий у результаті роботи
[cubrid_prepare()](function.cubrid-prepare.md).

`bind_index`
Розташування параметрів прив'язки. Починається з першої.

`bind_value`
Фактичне значення прив'язки.

`bind_value_type`
Значення має бути "BLOB" або "CLOB", регістр не враховується.
Якщо значення не вказано, використовується за замовчуванням "BLOB".

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_lob2_bind()****

` <?php// Таблиця: test_lob (id INT, contents CLOB)$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba", "");cubrid_execute($n ");cubrid_execute($conn,"CREATE TABLE test_lob (id INT, contents CLOB)");$req u003d cubrid_prepare($conn, INSERT INTO test_lob VALUES (?,$ 3); $lob u003d u003d cubrid_lob2_new ($ conn, 'CLOB'); cubrid_lob2_bind ($ req, 2, $ lob); 'CUBRID LOB2 TEST', 'CLOB');cubrid_execute($req);cubrid_disconnect($conn);?> `

### Дивіться також

- [cubrid_lob2_new()](function.cubrid-lob2-new.md) - Створює об'єкт
LOB
- [cubrid_lob2_close()](function.cubrid-lob2-close.md) - Закриває
об'єкт LOB
