- [« Інші зміни](migration74.other-changes.md)
- [Міграція з PHP 7.2.x на PHP 7.3.x »](migration73.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.3.x на PHP 7.4.x](migration74.md)
- Підтримка Windows

## Підтримка Windows

### Прапори **configure**

**configure** тепер враховує додаткові змінні оточення
`CFLAGS` та `LDFLAGS`.

### Обробка CTRL

Комбінації клавіш CTRL+C та CTRL+BREAK у командному рядку можна
перехопити, встановивши функцію-обробник за допомогою
[sapi_windows_set_ctrl_handler()](function.sapi-windows-set-ctrl-handler.md).

Функції [proc_open()](function.proc-open.md) на Windows може бути
передана опція "create_process_group". Це потрібно, якщо дочірній процес
має обробляти події CTRL.

### OPcache

OPcache тепер підтримує довільну кількість окремих кешів на
кожного користувача за допомогою INI-директиви `opcache.cache_id`. всі
процеси з однаковим ідентифікатором кеша та користувачем використовують
один і той самий екземпляр OPcache.

### stat

Поліпшено реалізацію stat.

- Передається номер індексного дескриптора (inode), що спирається
на індекс файлу у NTFS.
- Номер пристрою тепер виходить із серійного номера тома.

Зверніть увагу, що на 64-бітних системах обидва значення витягуються з
системи у вихідному вигляді. У 32-розрядних системах ці значення фіктивні,
тому що можуть перевищувати максимальне 32-розрядне ціле число,
дозволене в PHP.

### libsqlite3

libsqlite3 більше не компілюється статично в `php_sqlite3.dll` та
`php_pdo_sqlite.dll`, але доступний як `libsqlite3.dll`. Зверніться до
інструкції з установки для [SQLite3](sqlite3.installation.md) та
[PDO_SQLITE](ref.pdo-sqlite.md#ref.pdo-sqlite.installation)
відповідно.
