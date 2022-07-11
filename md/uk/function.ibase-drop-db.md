- [« ibase_delete_user](function.ibase-delete-user.md)
- [ibase_errcode »](function.ibase-errcode.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Видаляє базу даних

# ibase_drop_db

(PHP 5, PHP 7 \< 7.4.0)

ibase_drop_db — Видаляє базу даних

### Опис

**ibase_drop_db**(resource `$connection` u003d **`null`**): bool

Функція видаляє базу даних, яка була відкрита або за допомогою
[ibase_connect()](function.ibase-connect.md), або
[ibase_pconnect()](function.ibase-pconnect.md). База даних
закривається та видаляється з сервера.

### Список параметрів

`connection`
Ідентифікатор посилання на InterBase. Якщо не вказано, передбачається остання
відкрите посилання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ibase_connect()](function.ibase-connect.md) - Відкриває
з'єднання з базою даних
- [ibase_pconnect()](function.ibase-pconnect.md) - Відкриває
постійне з'єднання з базою даних InterBase
