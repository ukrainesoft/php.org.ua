- [« phar://](wrappers.phar.md)
- [rar://»](wrappers.rar.md)

- [PHP Manual](index.md)
- [Підтримувані протоколи та обгортки](wrappers.md)
- Secure Shell 2

# ssh2://

ssh2:// — Secure Shell 2

### Опис

`ssh2.shell://``ssh2.exec://``ssh2.tunnel://``ssh2.sftp://`
`ssh2.scp://` (PECL)

> **Примітка**: **Ця обгортка не включена за замовчуванням**
> Для того щоб використовувати обгортки `ssh2.*://` вам необхідно
> встановити модуль [»SSH2](https://pecl.php.net/package/ssh2),
> доступний у репозиторії [PECL](https://pecl.php.net/).

Крім отримання традиційних даних для входу до URI, обгортки ssh2 також
повторно використовувати відкриті з'єднання, передаючи ресурс
підключення до хост-частини URL.

### Використання

- `ssh2.shell://user:pass@example.com:22/xterm`
- `ssh2.exec://user:pass@example.com:22/usr/local/bin/somecmd`
- `ssh2.tunnel://user:pass@example.com:22/192.168.0.1:14`
- `ssh2.sftp://user:pass@example.com:22/path/to/filename`

### Опції

| Атрибут ssh2.shell | ssh2.exec | ssh2.tunnel | ssh2.sftp | ssh2.scp |
|------------------------------------------------- ------------------------------------|------------| -----------|-------------|------------------------ ------------|----------|
| Обмеження на [allow_url_fopen](filesystem.configuration.md#ini.allow-url-fopen) | Так | Так | Так | Так | Так |
| Читання | Так | Так | Так | Так | Так |
| Запис | Так | Так | Так | Так | Ні |
| Додавання | Ні | Ні | Ні | Так (коли підтримується сервером) Ні |
| Одночасне читання та запис | Так | Так | Так | Так | Ні |
| Підтримка [stat()](function.stat.md) | Ні | Ні | Ні | Так | Ні |
| Підтримка [unlink()](function.unlink.md) | Ні | Ні | Ні | Так | Ні |
| Підтримка [rename()](function.rename.md) | Ні | Ні | Ні | Так | Ні |
| Підтримка [mkdir()](function.mkdir.md) | Ні | Ні | Ні | Так | Ні |
| Підтримка [rmdir()](function.rmdir.md) | Ні | Ні | Ні | Так | Ні |

**Основна інформація**

| Ім'я Використання | За замовчуванням |
|----------------|-------------------------------- ---------------------------------------------| ------------------------|
| `session` | | Попередньо з'єднаний ресурс ssh2 для повторного використання | |
| `sftp` | Попередньо виділений ресурс sftp для повторного використання |
| `methods` | Обмін ключами, ключ хоста, шифр, компресія та методи MAC для використання | |
| callbacks | | |
| `username` | Ім'я користувача для підключення | |
| `password` | Пароль для аутентифікації |
| `pubkey_file` | Ім'я файлу, в якому міститься відкритий ключ для аутентифікації | |
| `privkey_file` | Ім'я файлу, в якому міститься приватний ключ для аутентифікації | |
| `env` | Асоціативний масив зі змінними оточеннями, які необхідно встановити | |
| `term` | Тип емуляції терміналу для запиту, коли виділяється pty | |
| `term_width` | Ширина терміналу, запитується, коли виділяється pty | |
| `term_height` | Висота терміналу, запитується, коли виділяється pty | |
| `term_units` | Одиниці, у яких вимірюються term_width та term_height | **`SSH2_TERM_UNIT_CHARS`** |

**Опції контексту**

### Приклади

**Приклад #1 Відкриття потоку з активного з'єднання**

` <?php$session u003d ssh2_connect('example.com', 22);ssh2_auth_pubkey_file($session, 'username', '/home/username/.ssh/id_rsa.pub',                                            '/home/username/.ssh/ id_rsa', 'secret');$stream u003dfopen("ssh2.tunnel://$session/remote.example.com:1234", 'r');?> `

**Приклад #2 Змінна `$session` має бути доступна!**

Якщо ви хочете використовувати будь-яку обгортку `ssh2.*://$session`,
необхідно зберегти доступний ресурс, що зберігається в змінній
`$session`. Наступний код не матиме бажаного ефекту:

` <?php$session u003d ssh2_connect('example.com', 22);ssh2_auth_pubkey_file($session, 'username', '/home/username/.ssh/id_rsa.pub',                                            '/home/username/.ssh/ id_rsa', 'secret');$connection_string u003d "ssh2.sftp://$session/";unset($session);$stream u003dfopen($connection_string . "path/to/file", 'r'); ?> `

unset() закриває сесію, тому що `$connection_string` не є
посиланням на змінну `$session`, лише її текстовим уявленням.
Це також відбувається і у разі неявного виклику
[unset()](function.unset.md) при виході з області видимості
(наприклад, функції).
