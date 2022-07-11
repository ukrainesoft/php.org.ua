- [«dba_fetch](function.dba-fetch.md)
- [dba_handlers »](function.dba-handlers.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Витягує перший ключ

#dba_firstkey

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_firstkey — Витягує перший ключ

### Опис

**dba_firstkey**(resource `$dba`): string\|false

**dba_firstkey()** повертає перший ключ із бази даних та скидає
внутрішній покажчик. Це дозволяє проводити прямий пошук по всій
базі.

### Список параметрів

`dba`
Обробник бази даних, повернутий
[dba_open()](function.dba-open.md) або
[dba_popen()](function.dba-popen.md).

### Значення, що повертаються

Повертає ключ у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Дивіться також

- [dba_nextkey()](function.dba-nextkey.md) - Витягує наступний
ключ
- [dba_key_split()](function.dba-key-split.md) - розділяє ключ,
заданий у вигляді рядка та створює масив з отриманих частин
- Другий приклад у [прикладах DBA](dba.examples.md)
