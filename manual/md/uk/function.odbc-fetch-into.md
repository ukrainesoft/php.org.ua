- [«odbc_fetch_array](function.odbc-fetch-array.md)
- [odbc_fetch_object »](function.odbc-fetch-object.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає один рядок результату до масиву

#odbc_fetch_into

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_fetch_into — Повертає один рядок результату до масиву

### Опис

**odbc_fetch_into**(resource `$statement`, array `&$array`, int `$row` u003d
0): int\|false

Повертає один рядок результату масив (array).

### Список параметрів

`statement`
Ресурс результату.

`array`
Масив результатів (array) може бути будь-якого типу, оскільки він буде
перетворений на масив типів. Він міститиме значення стовпців,
починаючи з індексу 0.

`row`
Номер рядка.

### Значення, що повертаються

Повертає кількість стовпців у результаті; **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклади використання **odbc_fetch_into()****

` <?php$rc u003d odbc_fetch_into($res_id, $my_array);?> `

або

` <?php$rc u003d odbc_fetch_into($res_id, $my_array, 2);?> `
