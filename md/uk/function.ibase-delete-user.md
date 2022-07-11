- [« ibase_db_info](function.ibase-db-info.md)
- [ibase_drop_db »](function.ibase-drop-db.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Видаляє користувача з безпечної бази даних

# ibase_delete_user

(PHP 5, PHP 7 \< 7.4.0)

ibase_delete_user — Видаляє користувача з безпечної бази даних

### Опис

**ibase_delete_user**(resource `$service_handle`, string `$user_name`):
bool

### Список параметрів

`service_handle`
Дескриптор служби сервера бази даних.

`user_name`
Ім'я користувача, якого ви бажаєте видалити з бази даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ibase_add_user()](function.ibase-add-user.md) - Додає
користувача в безпечну базу даних
- [ibase_modify_user()](function.ibase-modify-user.md) - Змінює
користувача в безпечній базі даних
