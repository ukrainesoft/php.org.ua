- [« dba_handlers](function.dba-handlers.md)
- [dba_key_split »](function.dba-key-split.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Вставляє запис

#dba_insert

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_insert — Вставляє запис

### Опис

**dba_insert**(string\|array `$key`, string `$value`, resource `$dba`):
bool

**dba_insert()** вставляє до бази даних запис заданий параметрами
`key` та `value`.

### Список параметрів

`key`
Ключ запису для вставлення. Якщо такий ключ вже існує у базі даних,
функція завершиться помилкою. Для заміни запису використовуйте функцію
[dba_replace()](function.dba-replace.md).

`value`
Значення для вставки.

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
- [dba_replace()](function.dba-replace.md) - Перезаписати або
вставити запис
