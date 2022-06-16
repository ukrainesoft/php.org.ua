- [«odbc_field_type](function.odbc-field-type.md)
- [odbc_free_result »](function.odbc-free-result.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає список зовнішніх ключів

#odbc_foreignkeys

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_foreignkeys — Повертає список зовнішніх ключів

### Опис

**odbc_foreignkeys**(
resource `$odbc`,
?string `$pk_catalog`,
string `$pk_schema`,
string `$pk_table`,
string `$fk_catalog`,
string `$fk_schema`,
string `$fk_table`
): resource \ | false

Повертає список зовнішніх ключів у таблиці або список зовнішніх ключів
ключів в інших таблицях, які посилаються на первинний ключ у
вказаної таблиці.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

`fk_catalog`
Каталог ('кваліфікатор' мовою ODBC 2) таблиці з первинним ключем.

`pk_schema`
Схема ('власник' мовою ODBC 2) таблиці з первинним ключем.

`pk_table`
Таблиця із первинним ключем.

`pk_catalog`
Каталог ('кваліфікатор' мовою ODBC 2) таблиці із зовнішнім ключем.

`fk_schema`
Схема ('власник' мовою ODBC 2) таблиці із зовнішнім ключем.

`fk_table`
Таблиця із зовнішнім ключем.

### Значення, що повертаються

Повертає ідентифікатор результату ODBC або **`false`** у разі
виникнення помилки.

У результуючому наборі є такі стовпці:

- `PKTABLE_CAT`
- `PKTABLE_SCHEM`
- `PKTABLE_NAME`
- `PKCOLUMN_NAME`
- `FKTABLE_CAT`
- `FKTABLE_SCHEM`
- `FKTABLE_NAME`
- `FKCOLUMN_NAME`
- `KEY_SEQ`
- `UPDATE_RULE`
- `DELETE_RULE`
- `FK_NAME`
- `PK_NAME`
- `DEFERRABILITY`

Драйвери можуть повідомляти додаткові стовпці.

Якщо запитуються зовнішні ключі, пов'язані з первинним ключем,
результуючий набір впорядковується за `FKTABLE_CAT`, `FKTABLE_SCHEM`,
`FKTABLE_NAME` та `KEY_SEQ`. Якщо запитуються первинні ключі,
пов'язані з зовнішнім ключем, результуючий набір впорядковується
`PKTABLE_CAT`, `PKTABLE_SCHEM`, `PKTABLE_NAME` та `KEY_SEQ`.

Якщо `pk_table` містить ім'я таблиці, **odbc_foreignkeys()** повертає
результуючий набір, що містить первинний ключ вказаної таблиці та все
зовнішні ключі, що посилаються на нього.

Якщо `fk_table` містить ім'я таблиці, **odbc_foreignkeys()** повертає
результуючий набір, що містить усі зовнішні ключі у зазначеній таблиці та
первинні ключі (у інших таблицях), куди вони посилаються.

Якщо і pk_table і fk_table містять імена таблиць,
**odbc_foreignkeys()** повертає зовнішні ключі в таблиці, вказаній у
`fk_table`, які посилаються на первинний ключ таблиці, вказаної в
`pk_table`. Ключ має бути один, не більше.

### Дивіться також

- [odbc_tables()](function.odbc-tables.md) - Отримує список імен
таблиць, що зберігаються у певному джерелі даних
- [odbc_primarykeys()](function.odbc-primarykeys.md) - Отримує
первинні ключі таблиці
