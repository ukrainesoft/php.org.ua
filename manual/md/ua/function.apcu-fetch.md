- [«apcu_exists](function.apcu-exists.md)
- [apcu_inc »](function.apcu-inc.md)

- [PHP Manual](index.md)
- [Функції APCu](ref.apcu.md)
- Витягує з кеша збережену змінну

#apcu_fetch

(PECL apcu \>u003d 4.0.0)

apcu_fetch — Витягує з кеша змінну змінну

### Опис

**apcu_fetch**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`, bool `&$success` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Витягує з кеша збережену змінну.

### Список параметрів

`key`
Ключ `key`, під яким запис було збережено в кеш (за допомогою
[apcu_store()](function.apcu-store.md)). Якщо заданий масив, то буде
вилучено і повернено кожен елемент.

`success`
Встановлюється в **`true`** у разі успішного виконання та **`false`**
у разі виникнення помилки.

### Значення, що повертаються

Збережена змінна чи масив; **`false`** у разі виникнення
помилки

### Список змін

| Версія | Опис |
|------------------|------------------------------ |
| PECL apcu 3.0.17 Доданий параметр `success`. |

### Приклади

**Приклад #1 Приклад використання **apcu_fetch()****

` <?php$bar u003d 'BAR';apcu_store('foo', $bar);var_dump(apcu_fetch('foo'));?> `

Результат виконання цього прикладу:

string(3) "BAR"

### Дивіться також

- [apcu_store()](function.apcu-store.md) - Кешує змінну
- [apcu_delete()](function.apcu-delete.md) - Видаляє збережене
значення з кешу
- [APCUIterator](class.apcuiterator.md)
