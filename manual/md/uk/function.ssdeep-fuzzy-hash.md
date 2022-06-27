- [«
ssdeep_fuzzy_hash_filename](function.ssdeep-fuzzy-hash-filename.md)
- [Рядки »](book.strings.md)

- [PHP Manual](index.md)
- [Функції ssdeep](ref.ssdeep.md)
- Створює нечіткий хеш із рядка

#ssdeep_fuzzy_hash

(PECL ssdeep \>u003d 1.0.0)

ssdeep_fuzzy_hash — Створює нечіткий хеш із рядка

### Опис

**ssdeep_fuzzy_hash**(string `$to_hash`): string

**ssdeep_fuzzy_hash()** обчислює хеш рядки `to_hash`, використовуючи [»
частково контекстно-переключення
хешування](http://dfrws.org/2006/proceedings/12-Kornblum.pdf) та
повертає його.

### Список параметрів

`to_hash`
Рядок для хешування.

### Значення, що повертаються

Повертає рядок у разі успішного виконання, **`false`** у протилежному
випадку.
