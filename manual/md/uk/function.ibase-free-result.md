- [« ibase_free_query](function.ibase-free-query.md)
- [ibase_gen_id »](function.ibase-gen-id.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Звільняє набір результатів

# ibase_free_result

(PHP 5, PHP 7 \< 7.4.0)

ibase_free_result — Звільняє набір результатів

### Опис

**ibase_free_result**(resource `$result_identifier`): bool

Звільняє набір результатів.

### Список параметрів

`result_identifier`
Набір результатів, створених за допомогою
[ibase_query()](function.ibase-query.md) або
[ibase_execute()](function.ibase-execute.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
