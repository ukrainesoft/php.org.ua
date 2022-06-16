- [« ssdeep_fuzzy_compare](function.ssdeep-fuzzy-compare.md)
- [ssdeep_fuzzy_hash »](function.ssdeep-fuzzy-hash.md)

- [PHP Manual](index.md)
- [Функції ssdeep](ref.ssdeep.md)
- Створення нечіткого хешу з файлу

# ssdeep_fuzzy_hash_filename

(PECL ssdeep \>u003d 1.0.0)

ssdeep_fuzzy_hash_filename — Створення нечіткого хеша з файлу

### Опис

**ssdeep_fuzzy_hash_filename**(string `$file_name`): string

**ssdeep_fuzzy_hash_filename()** обчислює хеш вказаного файлу
`file_name`, використовуючи [» контекстно-переключається часткове
хешування](http://dfrws.org/2006/proceedings/12-Kornblum.pdf) та
повертає його значення.

### Список параметрів

`file_name`
Ім'я файлу для хешування.

### Значення, що повертаються

Повертає рядок у разі успішного виконання, **`false`** у протилежному
випадку.
