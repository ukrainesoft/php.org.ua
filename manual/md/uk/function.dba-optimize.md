- [«dba_open](function.dba-open.md)
- [dba_popen »](function.dba-popen.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Оптимізує базу даних

#dba_optimize

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_optimize — Оптимізує базу даних

### Опис

**dba_optimize**(resource `$dba`): bool

**dba_optimize()** оптимізує основну базу даних.

### Список параметрів

`dba`
Обробник бази даних, повернутий
[dba_open()](function.dba-open.md) або
[dba_popen()](function.dba-popen.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [dba_sync()](function.dba-sync.md) - Синхронізує базу даних
