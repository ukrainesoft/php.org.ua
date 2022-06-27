- [«dba_list](function.dba-list.md)
- [dba_open »](function.dba-open.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Витягує наступний ключ

#dba_nextkey

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_nextkey — Витягує наступний ключ

### Опис

**dba_nextkey**(resource `$dba`): string\|false

**dba_nextkey()** повертає наступний ключ із бази даних та переміщає
внутрішній покажчик.

### Список параметрів

`dba`
Обробник бази даних, повернутий
[dba_open()](function.dba-open.md) або
[dba_popen()](function.dba-popen.md).

### Значення, що повертаються

Повертає ключ у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Дивіться також

- [dba_firstkey()](function.dba-firstkey.md) - Витягує перший ключ
- [dba_key_split()](function.dba-key-split.md) - розділяє ключ,
заданий у вигляді рядка та створює масив з отриманих частин
- Другий приклад у [прикладах DBA](dba.examples.md)
