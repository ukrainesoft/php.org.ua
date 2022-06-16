- [«ftp_mdtm](function.ftp-mdtm.md)
- [ftp_mlsd »](function.ftp-mlsd.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- створює директорію

#ftp_mkdir

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_mkdir — Створює директорію

### Опис

**ftp_mkdir**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$directory`): string\|false

Створює директорію `directory` на FTP-сервері.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`directory`
Ім'я директорії, що створюється.

### Значення, що повертаються

Повертає ім'я щойно створеної директорії у разі успішного
виконання або **`false`** в іншому випадку.

### Помилки

Видає помилку рівня **`E_WARNING`**, якщо каталог вже існує або
відповідні права доступу перешкоджають створенню каталогу.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_mkdir()****

` <?php$dir u003d 'www';// установка з'єднання$ftp u003d ftp_connect($ftp_server);// вхід з іменем користувача і паролем$login_result u003d ftp_login($ftp, створення директорії $dirif (ftp_mkdir($ftp, $dir)) { echo "Створена директорія $dir
";} else { echo "Не удалося створити директорію $dir
";}// закриття з'єднанняftp_close($ftp);?> `

### Дивіться також

- [ftp_rmdir()](function.ftp-rmdir.md) - Видаляє директорію
