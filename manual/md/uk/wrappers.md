- [« Опції контексту Zip](context.zip.md)
- [file://»](wrappers.file.md)

- [PHP Manual](index.md)
- [Довідник мови](langref.md)
- Підтримувані протоколи та обгортки

# Підтримувані протоколи та обгортки

PHP поставляється з безліччю вбудованих обгорток для різних
URL-протоколи для використання з функціями файлової системи, таких як
[fopen()](function.fopen.md), [copy()](function.copy.md),
[file_exists()](function.file-exists.md) та
[filesize()](function.filesize.md). Крім цих обгорток,
можна реєструвати власні обгортки, використовуючи функцію
[stream_wrapper_register()](function.stream-wrapper-register.md).

> **Примітка**: URL синтаксис, який використовується для опису обгортки, може
> бути тільки виду `scheme://...`. Варіанти синтаксису `scheme:/` та
> `scheme:` не підтримуються.

## Зміст

- [file://](wrappers.file.md) — Доступ до локальної файлової системи
- [http://](wrappers.http.md) — Доступ до URL-адрес за протоколом
HTTP(s)
- [ftp://](wrappers.ftp.md) — Доступ до URL-адрес за протоколом
FTP(s)
- [php://](wrappers.php.md) - Доступ до різних потоків
введення-виводу
- [zlib://](wrappers.compression.md) — Стислі потоки
- [data://](wrappers.data.md) - Схема Data (RFC 2397)
- [glob://](wrappers.glob.md) - Знаходження шляхів, що відповідають
шаблоном
- [phar://](wrappers.phar.md) - PHP-архів
- [ssh2://](wrappers.ssh2.md) - Secure Shell 2
- [rar://](wrappers.rar.md) - RAR
- [ogg://](wrappers.audio.md) - Аудіопотоки
- [expect://](wrappers.expect.md) — Потоки для взаємодії з
процесами
