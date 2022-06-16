- [«ftp_quit](function.ftp-quit.md)
- [ftp_rawlist »](function.ftp-rawlist.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Надсилає довільну команду FTP-серверу

#ftp_raw

(PHP 5, PHP 7, PHP 8)

ftp_raw — Надсилає довільну команду FTP-серверу

### Опис

**ftp_raw**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$command`): ?array

Відправляє довільну команду command FTP-серверу.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`command`
Команда.

### Значення, що повертаються

Повертає відповідь сервера у вигляді масиву рядків або **`null`** у разі
виникнення помилки. Функція **ftp_raw()** не інтерпретує відповіді
сервера і не визначає, чи успішно виконано команду.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Використання **ftp_raw()** для входу на FTP-сервер**

` <?php$ftp u003d ftp_connect("ftp.example.com");/* То же саме, що:  ftp_login($ftp, "joeblow", "secret"); */ftp_raw($ftp, "USER joeblow");ftp_raw($ftp, "PASS secret");?> `

### Дивіться також

- [ftp_exec()](function.ftp-exec.md) - Запитує виконання
команди на FTP-сервері
