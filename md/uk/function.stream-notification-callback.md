- [«stream_isatty](function.stream-isatty.md)
- [stream_register_wrapper »](function.stream-register-wrapper.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Callback-функція для параметра контексту notification

#stream_notification_callback

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

stream_notification_callback - Callback-функція для параметра контексту
`notification`

### Опис

stream_notification_callback(
int `$notification_code`,
int `$severity`,
string `$message`,
int `$message_code`,
int `$bytes_transferred`,
int `$bytes_max`
): void

Callback-функція типу [callable](language.types.callable.md),
використовувана [параметром контексту
notification](context.params.md#context.params.notification),
викликана під час події.

> **Примітка**:
>
> Це *не* справжня функція, лише прототип того, як має бути
> реалізована функція.

### Список параметрів

`notification_code`
Одна із констант оповіщення **`STREAM_NOTIFY_*`**.

`severity`
Одна із констант оповіщення **`STREAM_NOTIFY_SEVERITY_*`**.

`message`
Передається, якщо для події є повідомлення, що описує.

`message_code`
Передається, якщо для події доступний код опису повідомлення.

Значення даної величини залежить від використовуваної обгортки.

`bytes_transferred`
Якщо доступно, параметр "bytes_transferred" буде заповнений.

`bytes_max`
Якщо доступно, параметр "bytes_max" буде заповнений.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **stream_notification_callback()****

` <?phpfunction stream_notification_callback($notification_code, $severity, $message, $message_code, $bytes_transferred, $bytes_max) {    switch($notification_code) {        case STREAM_NOTIFY_RESOLVE:        case STREAM_NOTIFY_AUTH_REQUIRED:        case STREAM_NOTIFY_COMPLETED:        case STREAM_NOTIFY_FAILURE:        case STREAM_NOTIFY_AUTH_RESULT:            var_dump($notification_code , $severity, $message, $message_code, $bytes_transferred, $bytes_max); /* Ігноруємо */             break; case STREAM_NOTIFY_REDIRECTED:            echo "Переспрямовані на: ", $message; break; case STREAM_NOTIFY_CONNECT:            echo "Приєдналися..."; break; case STREAM_NOTIFY_FILE_SIZE_IS:            echo "Отримали розмір файлу: ", $bytes_max; break; case STREAM_NOTIFY_MIME_TYPE_IS:            echo "Отримали mime-тип файлу: ", $message; break; case STREAM_NOTIFY_PROGRESS:             echo "Пішов прогрес, поки завантажено ", $bytes_transferred, " байт"; break; }    echo "
";}$ctx u003dstream_context_create();stream_context_set_params($ctx, array("notification" u003d> "stream_notification_callback"));file_get_contents("http://php.net/contact", false, $ct `

Результатом виконання цього прикладу буде щось подібне:

Приєдналися...
Отримали mime-тип файлу: text/html; charsetu003dutf-8
Перенаправлені на: http://no.php.net/contact
Приєдналися...
Отримали розмір файлу: 0
Отримали mime-тип файлу: text/html; charsetu003dutf-8
Перенаправлені на: http://no.php.net/contact.php
Приєдналися...
Розмір файлу: 4589
Отримали mime-тип файлу: text/html;charsetu003dutf-8
Пройшов прогрес, поки завантажено 0 байт
Пройшов прогрес, поки завантажено 0 байт
Пройшов прогрес, поки завантажено 0 байт
Пройшов прогрес, поки завантажено 1440 байт
Пройшов прогрес, поки завантажено 2880 байт
Пройшов прогрес, поки завантажено 4320 байт
Пройшов прогрес, поки завантажено 5760 байт
Пройшов прогрес, поки завантажено 6381 байт
Пройшов прогрес, поки завантажено 7002 байт

**Приклад #2 Простий індикатор для завантажувача файлів із командної
рядки**

` <?phpfunction usage($argv) {    echo "Використання:
";   printf(" php %s <http://example.com/file> <localfile>
", $argv[0]);    exit(1);}function stream_notification_callback($notification_code, $severity, $message, $message_code, $bytes_transferred, $bytes_max) {    static $filesize u003d null;    switch($notification_code) {    case STREAM_NOTIFY_RESOLVE:    case STREAM_NOTIFY_AUTH_REQUIRED:    case STREAM_NOTIFY_COMPLETED:    case STREAM_NOTIFY_FAILURE:    case STREAM_NOTIFY_AUTH_RESULT:        /* Игнорируем */        break;    case STREAM_NOTIFY_REDIRECTED:        echo "Перенаправлены на: ", $message, "
";        break;    case STREAM_NOTIFY_CONNECT:        echo "Приєдналися...
";  ¦                                                                                               ¦
";        break;    case STREAM_NOTIFY_MIME_TYPE_IS:        echo "Mime-тип файлу: ", $message, "
";        break;    case STREAM_NOTIFY_PROGRESS:        if ($bytes_transferred > 0) {            if (!isset($filesize)) {                printf("Неизвестный размер файла.. Закачано %2d Кб..", $bytes_transferred/1024);            } else {                $length u003d (int)(($bytes_transferred/$filesize)*100);                printf("[%-100s] %d%% (%2d/%2d kb)", str_repeat("u003d", $length). ">", $length, ($bytes_transferred/1024), $filesize/1024)              }      break;   }}isset($argv[1], $argv[2]) or usage($argv);$ctx u003dstream_context_create();stream_context_set_params("t" ;$fp u003d fopen($argv[1], "r", false, $ctx);if (is_resource($fp) && file_put_contents($argv[2], $fp)) {    echo "
Готово!
";   exit(0);}$err u003d error_get_last();echo "
Ошшшшибкка.
", $err["message"], "
";exit(1);?> `

Виконання вищенаведеного прикладу з наступними опціями:
`php -n fetch.php http://no2.php.net/get/php-5-LATEST.tar.bz2/from/this/mirror php-latest.tar.bz2`
виведе щось схоже на це:

Приєдналися...
Mime-тип файлу: text/html; charsetu003dutf-8
Перенаправлені на: http://no2.php.net/distributions/php-5.2.5.tar.bz2
Приєдналися...
Розмір файлу: 7773024
Mime-тип файлу: application/octet-stream
[u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d] 40% (3076/7590 kb )

### Дивіться також

- [Параметри контексту](context.params.md)
