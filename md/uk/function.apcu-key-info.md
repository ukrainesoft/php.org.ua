- [«apcu_inc](function.apcu-inc.md)
- [apcu_sma_info »](function.apcu-sma-info.md)

- [PHP Manual](index.md)
- [Функції APCu](ref.apcu.md)
- Отримати детальну інформацію про ключ у кеші

#apcu_key_info

(No version information available, might only be in Git)

apcu_key_info — Отримати детальну інформацію про ключ у кеші

### Опис

**apcu_key_info**(string `$key`): ?array

Отримати детальну інформацію про ключ у кеші

### Список параметрів

`key`
Отримати детальну інформацію про ключ у кеші

### Значення, що повертаються

Масив, що містить докладну інформацію про ключ кеша або **`null`**,
якщо ключ не існує.

### Приклади

**Приклад #1 Приклад використання **apcu_key_info()****

` <?phpapcu_add('a','b');var_dump(apcu_key_info('a'));?> `

Результат виконання цього прикладу:

array(7) {
["hits"]u003d>
int(0)
["access_time"]u003d>
int(1606701783)
["mtime"]u003d>
int(1606701783)
["creation_time"]u003d>
int(1606701783)
["deletion_time"]u003d>
int(0)
["ttl"]u003d>
int(0)
["refs"]u003d>
int(0)
}

### Дивіться також

- [apcu_store()](function.apcu-store.md) - Кешує змінну
- [apcu_fetch()](function.apcu-fetch.md) - Витягує з кеша
збережену змінну
- [apcu_delete()](function.apcu-delete.md) - Видаляє збережене
значення з кешу
