- [«ftp_delete](function.ftp-delete.md)
- [ftp_fget »](function.ftp-fget.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Запитує виконання команди на FTP-сервері

#ftp_exec

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

ftp_exec — Вимагає виконання команди на FTP-сервері

### Опис

**ftp_exec**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$command`): bool

Надсилає команду SITE EXEC `command` на FTP-сервер.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`command`
Команда для виконання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання команди (сервер
відправляє код відповіді: `200`); інакше повертає
**`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_exec()****

` <?php// ініціалізація змінних$command u003d 'ls -al >files.txt';// встановлюємо з'єднання$ftp u003d ftp_connect($ftp_server);// вхід з іменем користувача і$ $ftp_user_name, $ftp_user_pass);// виконуємо командуif (ftp_exec($ftp, $command)) {    echo "Команда $command виконана успішно
";} else {   echo "Не удалося виконати $command
";}// закриваємо з'єднанняftp_close($ftp);?> `

### Дивіться також

- [ftp_raw()](function.ftp-raw.md) - Надсилає довільну команду
FTP-серверу
