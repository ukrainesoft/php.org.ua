- [« Типи ресурсів] (ftp.resources.md)
- [Приклади »](ftp.examples.md)

- [PHP Manual](index.md)
- [FTP](book.ftp.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`FTP_ASCII`** (int)

**`FTP_AUTOSEEK`** (int)
Дивіться опис функції
[ftp_set_option()](function.ftp-set-option.md).

**`FTP_AUTORESUME`** (int)
Автоматичне визначення позиції старту та відновлення запитів PUT та
GET (працює лише якщо дозволено FTP_AUTOSEEK)

**`FTP_FAILED`** (int)
Асинхронна передача не вдалося.

**`FTP_FINISHED`** (int)
Асинхронна передача завершена.



**`FTP_MOREDATA`** (int)
Асинхронна передача ще активна.

**`FTP_TEXT`** (int)
Синонім для **`FTP_ASCII`**

**`FTP_BINARY`** (int)

**`FTP_IMAGE`** (int)
Синонім для **`FTP_BINARY`**.

**`FTP_TIMEOUT_SEC`** (int)
Дивіться опис функції
[ftp_set_option()](function.ftp-set-option.md).

**`FTP_USEPASVADDRESS`** (bool)
Дивіться опис функції
[ftp_set_option()](function.ftp-set-option.md) для отримання
інформації.
