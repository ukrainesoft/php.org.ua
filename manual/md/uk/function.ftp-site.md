- [«ftp_set_option](function.ftp-set-option.md)
- [ftp_size »](function.ftp-size.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Надсилає серверу команду SITE

#ftp_site

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_site — Надсилає серверу команду SITE

### Опис

**ftp_site**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$command`): bool

**ftp_site()** відправляє вказану команду `SITE` FTP-серверу.

Команди `SITE` не стандартизовані та залежать від FTP-сервера. Вони можуть
бути корисними для зміни прав доступу до файлів або зміни власника або
групи.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`command`
Команда "SITE". Зверніть увагу, що цей параметр не проходить
екранування спецсимволів, так що можуть виникнути проблеми з іменами,
містять прогалини та інші подібні символи.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Надсилання команди SITE FTP-серверу**

` <?php// З'єднання з FTP-сервером$ftp u003d ftp_connect('ftp.example.com');if (!$conn) die('Не удалося підключитися до ftp.example.com');// Вхід під іменем "user" з паролем "pass"if (!ftp_login($ftp, 'user', 'pass')) die('Не удалося увійти на ftp.example.com');// Відправка "SITE CHMOD /user/privatefile" FTP-серверуif (ftp_site($ftp, 'CHMOD 0600 /home/user/privatefile')) {  echo "Команда виконана.
";} else {  die('Команда не виконана.');}?> `

### Дивіться також

- [ftp_raw()](function.ftp-raw.md) - Надсилає довільну команду
FTP-серверу
