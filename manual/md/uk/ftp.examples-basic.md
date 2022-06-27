- [« Приклади](ftp.examples.md)
- [Функції FTP»] (ref.ftp.md)

- [PHP Manual](index.md)
- [Приклади](ftp.examples.md)
- Просте використання

## Просте використання

**Приклад #1 Приклад використання FTP-функцій**

` <?php// установка з'єднання$ftp u003d ftp_connect($ftp_server);// вхід з іменем користувача і паролем$login_result u003d ftp_login($ftp, $ftp_user_name, $ ! ! || (!$login_result)) {    echo "Не удалося встановити з'єднання з FTP-сервером!"; echo "Спроба підключення до серверу $ftp_server була зроблена під іменем $ftp_user_name"; exit;} else {    echo "Встановлено з'єднання з FTP сервером $ftp_server під іменем $ftp_user_name";}// закачування? ) {    echo "Не удалося закачати файл!";} else {   echo "Файл$source_fileзакачан на $ftp_server під іменем $destination_$|
