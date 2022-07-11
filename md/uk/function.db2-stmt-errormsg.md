- [«db2_stmt_error](function.db2-stmt-error.md)
- [db2_table_privileges »](function.db2-table-privileges.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає рядок, який містить останнє повідомлення про помилку
SQL-вирази

#db2_stmt_errormsg

(PECL ibm_db2 \>u003d 1.0.0)

db2_stmt_errormsg — Повертає рядок, який містить останнє повідомлення про
помилці SQL-вирази

### Опис

**db2_stmt_errormsg**(resource `$stmt` u003d ?): string

Повертає рядок, що містить останнє повідомлення про помилку
SQL-вирази.

Якщо ви не передаєте ресурс виразу як аргумент у
**db2_stmt_errormsg()**, драйвер повертає повідомлення про помилку,
пов'язане з останньою спробою повернути ресурс оператора, наприклад,
[db2_prepare()](function.db2-prepare.md) або
[db2_exec()](function.db2-exec.md).

### Список параметрів

`stmt`
Допустимий ресурс висловлювання.

### Значення, що повертаються

Повертає рядок, що містить повідомлення про помилку та значення SQLCODE
останньої помилки, що виникла під час видачі SQL-вираження.

### Дивіться також

- [db2_conn_error()](function.db2-conn-error.md) - Повертає
рядок, що містить значення SQLSTATE, повернутий останній
спробою підключення
- [db2_conn_errormsg()](function.db2-conn-errormsg.md) - Повертає
останнє повідомлення про помилку підключення та значення SQLCODE
- [db2_stmt_error()](function.db2-stmt-error.md) - Повертає
рядок, що містить SQLSTATE, повернутий SQL-оператором
