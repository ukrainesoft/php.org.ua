- [«dba_insert](function.dba-insert.md)
- [dba_list »](function.dba-list.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- розділяє ключ, заданий у вигляді рядка і створює масив з
отриманих частин

#dba_key_split

(PHP 5, PHP 7, PHP 8)

dba_key_split — розділяє ключ, заданий у вигляді рядка і створює масив
з отриманих частин

### Опис

**dba_key_split**(string\|false\|null `$key`): array\|false

**dba_key_split()** поділяє ключ, заданий у вигляді рядка та створює
масив із отриманих частин.

### Список параметрів

`key`
Ключ у вигляді рядка.

### Значення, що повертаються

Повертає масив такого виду
`array(0 u003d> group, 1 u003d> value_name)`. Ця функція повертає
**`false`**, якщо `key` дорівнює **`null`** або **`false`**.

### Дивіться також

- [dba_firstkey()](function.dba-firstkey.md) - Витягує перший ключ
- [dba_nextkey()](function.dba-nextkey.md) - Витягує наступний
ключ
- [dba_fetch()](function.dba-fetch.md) - Виймає дані з
вказаним ключем
