- [«odbc_execute](function.odbc-execute.md)
- [odbc_fetch_into »](function.odbc-fetch-into.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає рядок результату у вигляді асоціативного масиву

#odbc_fetch_array

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

odbc_fetch_array — Повертає рядок результату у вигляді асоціативного
масиву

### Опис

**odbc_fetch_array**(resource `$statement`, int `$row` u003d -1):
array\|false

Повертає асоціативний масив (array) із запиту ODBC.

### Список параметрів

`statement`
Ресурс результату з [odbc_exec()](function.odbc-exec.md).

`row`
Необов'язковий параметр, який вказує номер рядка для повернення.

### Значення, що повертаються

Повертає масив, що відповідає рядку, що повертається, або **`false`**
якщо рядків більше немає.

### Примітки

> **Примітка**: Функція існує при компіляції з підтримкою DBMaker,
> IBM DB2 або UnixODBC.

### Дивіться також

- [odbc_fetch_row()](function.odbc-fetch-row.md) - Повертає рядок
- [odbc_fetch_object()](function.odbc-fetch-object.md) - Повертає
рядок результату як об'єкта
- [odbc_num_rows()](function.odbc-num-rows.md) - Повертає
кількість рядків у результаті
