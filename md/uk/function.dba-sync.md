- [«dba_replace](function.dba-replace.md)
- [ODBC »](book.uodbc.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Синхронізує базу даних

#dba_sync

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_sync — Синхронізує базу даних

### Опис

**dba_sync**(resource `$dba`): bool

**dba_sync()** синхронізує базу даних. Швидше за все ця функція,
якщо підтримується, викличе запис на диск.

### Список параметрів

`dba`
Обробник бази даних, повернутий
[dba_open()](function.dba-open.md) або
[dba_popen()](function.dba-popen.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [dba_optimize()](function.dba-optimize.md) - Оптимізує базу
даних
