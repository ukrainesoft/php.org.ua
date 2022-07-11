- [«fbird_wait_event](function.fbird-wait-event.md)
- [ibase_affected_rows »](function.ibase-affected-rows.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Додає користувача до безпечної бази даних

# ibase_add_user

(PHP 5, PHP 7 \< 7.4.0)

ibase_add_user — Додає користувача до безпечної бази даних

### Опис

**ibase_add_user**(
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
Ім'я для входу нового користувача бази даних.

`password`
Пароль нового користувача.

`first_name`
Ім'я нового користувача бази даних.

`middle_name`
По-батькові нового користувача бази даних.

`last_name`
Прізвище нового користувача бази даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ibase_modify_user()](function.ibase-modify-user.md) - Змінює
користувача в безпечній базі даних
- [ibase_delete_user()](function.ibase-delete-user.md) - Видаляє
користувача з безпечної бази даних
