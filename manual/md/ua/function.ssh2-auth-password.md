- [« ssh2_auth_none](function.ssh2-auth-none.md)
- [ssh2_auth_pubkey_file »](function.ssh2-auth-pubkey-file.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Аутентифікація через SSH за допомогою звичайного пароля

# ssh2_auth_password

(PECL ssh2 \>u003d 0.9.0)

ssh2_auth_password — Аутентифікація через SSH за допомогою звичайного
пароля

### Опис

**ssh2_auth_password**(resource `$session`, string `$username`, string
`$password`): bool

Аутентифікація через SSH за допомогою звичайного пароля. Починаючи з
версії 0.12 ця функція підтримує запит пароля з клавіатури.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`username`
Ім'я користувача на віддаленому сервері.

`password`
Пароль для `username`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Аутентифікація з паролем**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);if (ssh2_auth_password($connection, 'username', 'secret')) { echo "Успішна аутентифікація!
";} else {  die('Невдала аутентифікація...');}?> `
