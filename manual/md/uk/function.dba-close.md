- [« Функції DBA](ref.dba.md)
- [dba_delete »](function.dba-delete.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Закриває базу даних DBA

#dba_close

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_close — Закриває базу даних DBA

### Опис

**dba_close**(resource `$dba`): void

**dba_close()** закриває встановлену базу даних та звільняє все
пов'язані із нею ресурси.

### Список параметрів

`dba`
Обробник бази даних, повернутий
[dba_open()](function.dba-open.md) або
[dba_popen()](function.dba-popen.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [dba_open()](function.dba-open.md) - Відкриває базу даних
- [dba_popen()](function.dba-popen.md) - Встановити постійний
екземпляр бази даних
