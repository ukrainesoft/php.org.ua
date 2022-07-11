- [«dba_popen](function.dba-popen.md)
- [dba_sync »](function.dba-sync.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Перезаписати або вставити запис

#dba_replace

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_replace — Перезаписати або вставити запис

### Опис

**dba_replace**(string\|array `$key`, string `$value`, resource `$dba`):
bool

**dba_replace()** перезаписує або вставляє запис, заданий ключем
`key` та значенням `value` в базу даних визначену обробником `dba`.

### Список параметрів

`key`
Ключ запису, який треба замінити.

`value`
Нове значення.

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
- [dba_delete()](function.dba-delete.md) - Видаляє запис бази
даних, визначену ключем
- [dba_fetch()](function.dba-fetch.md) - Виймає дані з
вказаним ключем
- [dba_insert()](function.dba-insert.md) - Вставляє запис
