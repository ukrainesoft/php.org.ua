- [«dba_close](function.dba-close.md)
- [dba_exists »](function.dba-exists.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Видаляє запис бази даних, визначену ключем

#dba_delete

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_delete — Видалення запису бази даних, визначеної ключем

### Опис

**dba_delete**(string\|array `$key`, resource `$dba`): bool

**dba_delete()** видаляє зазначений запис у базі даних.

### Список параметрів

`key`
Ключ запису, який треба видалити.

`dba`
Обробник бази даних, повернутий
[dba_open()](function.dba-open.md) або
[dba_popen()](function.dba-popen.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [dba_exists()](function.dba-exists.md) - Перевіряє, чи існує
ключ
- [dba_fetch()](function.dba-fetch.md) - Виймає дані з
вказаним ключем
- [dba_insert()](function.dba-insert.md) - Вставляє запис
- [dba_replace()](function.dba-replace.md) - Перезаписати або
вставити запис
