- [«ftp_mlsd](function.ftp-mlsd.md)
- [ftp_nb_fget »](function.ftp-nb-fget.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- продовжує асинхронну операцію

#ftp_nb_continue

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_continue — Продовжує асинхронну операцію

### Опис

**ftp_nb_continue**([FTP\Connection](class.ftp-connection.md) `$ftp`):
int

Продовжує надсилання або отримання файлу в асинхронному режимі.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

### Значення, що повертаються

Повертає **`FTP_FAILED`**, **`FTP_FINISHED`** або **`FTP_MOREDATA`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_nb_continue()****

`<?php//Початок скачування$ret u003d ftp_nb_get($ftp, "test", "README", FTP_BINARY);while ($ret u003du003d FTP_MOREDATA) { f f| );}if ($ret !u003dFTP_FINISHED) {   echo "При завантаженні файлу відбулася помилка..."; exit(1);}?> `
