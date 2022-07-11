- [« Функції SSH2](ref.ssh2.md)
- [ssh2_auth_hostbased_file »](function.ssh2-auth-hostbased-file.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Аутентифікація через SSH за допомогою агента ssh

# ssh2_auth_agent

(PECL ssh2 \>u003d 0.12)

ssh2_auth_agent — Аутентифікація через SSH за допомогою агента ssh

### Опис

**ssh2_auth_agent**(resource `$session`, string `$username`): bool

Аутентифікація через SSH за допомогою ssh.

> **Примітка**: Функція **ssh2_auth_agent()** доступна, лише якщо
> модуль зібраний із бібліотекою libssh \>u003d 1.2.3.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`username`
Ім'я користувача на віддаленому сервері.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Аутентифікація за допомогою агента ssh**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);if (ssh2_auth_agent($connection, 'username')) { echo "Успішна аутентифікація !
";} else {  die('Невдала аутентифікація...');}?> `
