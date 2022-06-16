- [«hash_pbkdf2](function.hash-pbkdf2.md)
- [hash_update_stream »](function.hash-update-stream.md)

- [PHP Manual](index.md)
- [Функції Hash](ref.hash.md)
- Додає дані з файлу до активного контексту хешування

# hash_update_file

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL hash u003d 1.1)

hash_update_file — Додає дані з файлу до активного контексту
хешування

### Опис

**hash_update_file**([HashContext](class.hashcontext.md) `$context`,
string `$filename`, ?resource `$stream_context` u003d **`null`**): bool

### Список параметрів

`context`
Контекст хешування, повернутий
[hash_init()](function.hash-init.md).

`filename`
Ім'я або URL-файл для хешування; Підтримуються обробники fopen.

`stream_context`
Контекст потоку, повернутий
[stream_context_create()](function.stream-context-create.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------------|
| 8.0.0 | stream_context тепер допускає значення null. |
| 7.2.0 | Приймає [HashContext](class.hashcontext.md), а чи не ресурс. |

### Дивіться також

- [hash_init()](function.hash-init.md) - Ініціалізація
інкрементального контексту хешування
- [hash_update()](function.hash-update.md) - Додає дані до
активний контекст хешування
- [hash_update_stream()](function.hash-update-stream.md) - Додає
дані з відкритого потоку в активний контекст хешування
- [hash_final()](function.hash-final.md) - Завершує інкрементальне
хешування та повертає результат у вигляді хеш-коду
- [hash()](function.hash.md) - Генерує хеш-код (підпис
повідомлення)
- [hash_file()](function.hash-file.md) - Генерація хеш-значення,
використовуючи вміст заданого файлу
