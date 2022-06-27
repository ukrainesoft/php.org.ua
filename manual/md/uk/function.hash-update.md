- [«hash_update_stream](function.hash-update-stream.md)
- [hash »] (function.hash.md)

- [PHP Manual](index.md)
- [Функції Hash](ref.hash.md)
- Додає дані до активного контексту хешування

#hash_update

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL hash u003d 1.1)

hash_update — Додає дані до активного контексту хешування

### Опис

**hash_update**([HashContext](class.hashcontext.md) `$context`, string
`$data`): bool

### Список параметрів

`context`
Контекст хешування, що повертається
[hash_init()](function.hash-init.md).

`data`
Повідомлення, яке має бути включене до хеша.

### Значення, що повертаються

Повертає **`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------------|
| 7.2.0 | Приймає [HashContext](class.hashcontext.md), а чи не ресурс. |

### Дивіться також

- [hash_init()](function.hash-init.md) - Ініціалізація
інкрементального контексту хешування
- [hash_update_file()](function.hash-update-file.md) - Додає
дані з файлу в активний контекст хешування
- [hash_update_stream()](function.hash-update-stream.md) - Додає
дані з відкритого потоку в активний контекст хешування
- [hash_final()](function.hash-final.md) - Завершує інкрементальне
хешування та повертає результат у вигляді хеш-коду
