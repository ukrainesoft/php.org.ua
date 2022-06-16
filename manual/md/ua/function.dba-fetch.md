- [«dba_exists](function.dba-exists.md)
- [dba_firstkey »](function.dba-firstkey.md)

- [PHP Manual](index.md)
- [Функції DBA](ref.dba.md)
- Виймає дані за вказаним ключем

#dba_fetch

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_fetch — Витягує дані щодо вказаного ключа

### Опис

**dba_fetch**(string `$key`, resource `$handle`): string

**dba_fetch**(string `$key`, int `$skip`, resource `$handle`): string

**dba_fetch()** витягує дані з бази даних, заданої `handle`,
визначені ключем `key`.

### Список параметрів

`key`
Ключ, для якого треба отримати дані.

> **Примітка**:
>
> Коли працює з ini-файлом, ця функція приймає масив як
> ключа, де з індексу 0 задана група, а, по індексу 1 - ім'я параметра.
> Додатково дивіться [dba_key_split()](function.dba-key-split.md).

`skip`
Число пар ключ-значення, які потрібно проігнорувати під час роботи з
базою даних CDB. Цей параметр ігнорується під час роботи з усіма
іншими базами даних, у яких не підтримуються множинні
ключі з однаковим назвою.

`handle`
Обробник бази даних, повернутий
[dba_open()](function.dba-open.md) або
[dba_popen()](function.dba-popen.md).

### Значення, що повертаються

Повертає рядок, якщо пара ключ/дані знайдена, інакше повертає
**`false`**.

### Дивіться також

- [dba_exists()](function.dba-exists.md) - Перевіряє, чи існує
ключ
- [dba_delete()](function.dba-delete.md) - Видаляє запис бази
даних, визначену ключем
- [dba_insert()](function.dba-insert.md) - Вставляє запис
- [dba_replace()](function.dba-replace.md) - Перезаписати або
вставити запис
- [dba_key_split()](function.dba-key-split.md) - розділяє ключ,
заданий у вигляді рядка та створює масив з отриманих частин
