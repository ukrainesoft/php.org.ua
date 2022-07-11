- [«odbc_fetch_into](function.odbc-fetch-into.md)
- [odbc_fetch_row »](function.odbc-fetch-row.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає рядок результату у вигляді об'єкту

#odbc_fetch_object

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

odbc_fetch_object — Повертає рядок результату як об'єкт

### Опис

**odbc_fetch_object**(resource `$statement`, int `$row` u003d -1):
stdClass\|false

Повертає об'єкт (object) із запиту ODBC.

### Список параметрів

`statement`
Ресурс результату з [odbc_exec()](function.odbc-exec.md).

`row`
Необов'язковий параметр, який вказує номер рядка для повернення.

### Значення, що повертаються

Повертає об'єкт, що відповідає рядку, що повертається, або **`false`**
якщо рядків більше немає.

### Примітки

> **Примітка**: Функція існує при компіляції з підтримкою DBMaker,
> IBM DB2 або UnixODBC.

### Дивіться також

- [odbc_fetch_row()](function.odbc-fetch-row.md) - Повертає рядок
- [odbc_fetch_array()](function.odbc-fetch-array.md) - Повертає
рядок результату у вигляді асоціативного масиву
- [odbc_num_rows()](function.odbc-num-rows.md) - Повертає
кількість рядків у результаті
