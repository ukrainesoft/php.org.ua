- [«dba_delete](function.dba-delete.md)
- [dba_fetch »](function.dba-fetch.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Перевіряє, чи існує ключ

# dba_exists

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_exists — Перевіряє, чи існує ключ

### Опис

**dba_exists**(string\|array `$key`, resource `$dba`): bool

**dba_exists()** перевіряє, якщо у базі даних заданий ключ `key`.

### Список параметрів

`key`
Ключ, що перевіряється.

`dba`
Обробник бази даних, повернутий
[dba_open()](function.dba-open.md) або
[dba_popen()](function.dba-popen.md).

### Значення, що повертаються

Повертає **`true`** якщо ключ існує і **`false`** у зворотному
випадку.

### Дивіться також

- [dba_delete()](function.dba-delete.md) - Видаляє запис бази
даних, визначену ключем
- [dba_fetch()](function.dba-fetch.md) - Виймає дані з
вказаним ключем
- [dba_insert()](function.dba-insert.md) - Вставляє запис
- [dba_replace()](function.dba-replace.md) - Перезаписати або
вставити запис
