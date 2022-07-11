- [« ibase_rollback_ret](function.ibase-rollback-ret.md)
- [ibase_server_info »](function.ibase-server-info.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Відкочує транзакцію

# ibase_rollback

(PHP 5, PHP 7 \< 7.4.0)

ibase_rollback - Відкочує транзакцію

### Опис

**ibase_rollback**(resource `$link_or_trans_identifier` u003d **`null`**):
bool

Відкочує транзакцію.

### Список параметрів

`link_or_trans_identifier`
Якщо викликається без аргументу, ця функція відкочує транзакцію по
за промовчанням для посилання за промовчанням. Якщо аргумент є
ідентифікатором з'єднання, транзакція за замовчуванням для відповідного
з'єднання буде скасовано. Якщо аргумент є ідентифікатором
транзакції, відповідну транзакцію буде скасовано.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
