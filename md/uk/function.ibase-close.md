- [« ibase_blob_open](function.ibase-blob-open.md)
- [ibase_commit_ret »](function.ibase-commit-ret.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Закриває з'єднання з базою даних InterBase

# ibase_close

(PHP 5, PHP 7 \< 7.4.0)

ibase_close — Закриває з'єднання з базою даних InterBase

### Опис

**ibase_close**(resource `$connection_id` u003d **`null`**): bool

Закриває посилання на базу даних InterBase, пов'язану з ідентифікатором
з'єднання, отриманим за допомогою
[ibase_connect()](function.ibase-connect.md). Транзакція за замовчуванням
для посилання зафіксовано, решту транзакцій скасовано.

### Список параметрів

`connection_id`
Ідентифікатор посилання InterBase, отриманий за допомогою
[ibase_connect()](function.ibase-connect.md). Якщо не вказано,
передбачається останнє відкрите посилання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ibase_connect()](function.ibase-connect.md) - Відкриває
з'єднання з базою даних
- [ibase_pconnect()](function.ibase-pconnect.md) - Відкриває
постійне з'єднання з базою даних InterBase
