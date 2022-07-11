- [«hash_update_file](function.hash-update-file.md)
- [hash_update »](function.hash-update.md)

- [PHP Manual](index.md)
- [Функції Hash](ref.hash.md)
- Додає дані з відкритого потоку до активного контексту хешування

#hash_update_stream

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL hash u003d 1.1)

hash_update_stream — Додає дані з відкритого потоку до активного
контекст хешування

### Опис

**hash_update_stream**([HashContext](class.hashcontext.md) `$context`,
resource `$stream`, int `$length` u003d -1): int

### Список параметрів

`context`
Контекст хешування, що повертається
[hash_init()](function.hash-init.md).

`stream`
Дескриптор відкритого файлу, який повертається будь-якою функцією створення потоку.

`length`
Максимальна кількість символів для копіювання з `stream` у контекст
хешування.

### Значення, що повертаються

Фактична кількість байт, додана в контекст хешування з
`stream`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------------|
| 7.2.0 | Приймає [HashContext](class.hashcontext.md), а чи не ресурс. |

### Приклади

**Приклад #1 Приклад використання **hash_update_stream()****

` <?php$fp u003d tmpfile();fwrite($fp, 'Нахабний коричневий лисенок стрибає навколо ледачої собаки.');rewind($fp);$ctx u003d hash_init('md5$'); fp);echo hash_final($ctx);?> `

Результат виконання цього прикладу:

bff8b4bc8b5c1c1d5b3211dfb21d1e76

### Дивіться також

- [hash_init()](function.hash-init.md) - Ініціалізація
інкрементального контексту хешування
- [hash_update()](function.hash-update.md) - Додає дані до
активний контекст хешування
- [hash_final()](function.hash-final.md) - Завершує інкрементальне
хешування та повертає результат у вигляді хеш-коду
- [hash()](function.hash.md) - Генерує хеш-код (підпис
повідомлення)
- [hash_file()](function.hash-file.md) - Генерація хеш-значення,
використовуючи вміст заданого файлу
