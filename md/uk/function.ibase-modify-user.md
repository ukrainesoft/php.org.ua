- [« ibase_maintain_db](function.ibase-maintain-db.md)
- [ibase_name_result »](function.ibase-name-result.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Змінює користувача у безпечній базі даних

# ibase_modify_user

(PHP 5, PHP 7 \< 7.4.0)

ibase_modify_user — Змінює користувача у безпечній базі даних

### Опис

**ibase_modify_user**(
resource `$service_handle`,
string `$user_name`,
string `$password`,
string `$first_name` u003d ?,
string `$middle_name` u003d ?,
string `$last_name` u003d ?
): bool

### Список параметрів

`service_handle`
Дескриптор служби сервера бази даних.

`user_name`
Ім'я користувача бази даних для зміни.

`password`
Новий пароль користувача

`first_name`
Нове ім'я користувача.

`middle_name`
Нове по батькові користувача.

`last_name`
Нове прізвище користувача.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ibase_add_user()](function.ibase-add-user.md) - Додає
користувача в безпечну базу даних
- [ibase_delete_user()](function.ibase-delete-user.md) - Видаляє
користувача з безпечної бази даних
