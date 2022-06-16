- [« ssh2_auth_hostbased_file](function.ssh2-auth-hostbased-file.md)
- [ssh2_auth_password »](function.ssh2-auth-password.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Аутентифікація як "none"

# ssh2_auth_none

(PECL ssh2 \>u003d 0.9.0)

ssh2_auth_none - Аутентифікація як "none"

### Опис

**ssh2_auth_none**(resource `$session`, string `$username`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Спроба пройти автентифікацію як "none" зазвичай терпітиме невдачу (і
повинна). Разом з помилкою ця функція поверне список доступних методів
автентифікації.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`username`
Ім'я користувача на віддаленому сервері.

### Значення, що повертаються

Повертає **`true`**, якщо сервер приймає аутентифікацію "none", або
масив доступних методів аутентифікації.

### Приклади

**Приклад #1 Вилучення списку доступних методів аутентифікації**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);$auth_methods u003d ssh2_auth_none($connection, 'user');if (in_array('password', $auth_methods))   | аутентифікацію на основі паролю
";}?> `
