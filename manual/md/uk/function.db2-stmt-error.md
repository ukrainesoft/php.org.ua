- [«db2_statistics](function.db2-statistics.md)
- [db2_stmt_errormsg »](function.db2-stmt-errormsg.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає рядок, що містить SQLSTATE, повернутий SQL-оператором

#db2_stmt_error

(PECL ibm_db2 \>u003d 1.0.0)

db2_stmt_error — Повертає рядок, що містить SQLSTATE, повернутий
SQL-оператором

### Опис

**db2_stmt_error**(resource `$stmt` u003d ?): string

Повертає рядок, що містить SQLSTATE, повернутий SQL-оператором.

Якщо ви не передасте ресурс оператора як аргумент у
**db2_stmt_error()**, драйвер поверне значення SQLSTATE, пов'язане з
останньою спробою повернути ресурс оператора, наприклад,
[db2_prepare()](function.db2-prepare.md) або
[db2_exec()](function.db2-exec.md).

Щоб дізнатися, що означає значення SQLSTATE, можна ввести наступну
команду в командному рядку процесора DB2: **`db2'? sqlstate-value``**.
Ви також можете викликати
[db2_stmt_errormsg()](function.db2-stmt-errormsg.md), щоб отримати
явне повідомлення про помилку та відповідне значення SQLCODE.

### Список параметрів

`stmt`
Допустимий ресурс оператора.

### Значення, що повертаються

Повертає рядок, який містить значення SQLSTATE.

### Дивіться також

- [db2_conn_error()](function.db2-conn-error.md) - Повертає
рядок, що містить значення SQLSTATE, повернутий останній
спробою підключення
- [db2_conn_errormsg()](function.db2-conn-errormsg.md) - Повертає
останнє повідомлення про помилку підключення та значення SQLCODE
- [db2_stmt_errormsg()](function.db2-stmt-errormsg.md) - Повертає
рядок, що містить останнє повідомлення про помилку SQL-виразу
