- [«apcu_dec](function.apcu-dec.md)
- [apcu_enabled »](function.apcu-enabled.md)

- [PHP Manual](index.md)
- [Функції APCu](ref.apcu.md)
- Видаляє збережене значення з кешу

#apcu_delete

(PECL apcu \>u003d 4.0.0)

apcu_delete — Видалення збереженого значення з кешу

### Опис

**apcu_delete**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє збережене значення з кеша.

### Список параметрів

`key`
`key` можна задати як рядок, для видалення одного значення, або як
масив рядків, для видалення кількох значень, або як об'єкт
[APCUIterator](class.apcuiterator.md).

### Значення, що повертаються

Якщо `key` є масивом (array), повертається індексований
масив (array) ключів. В іншому випадку повертається **`true`** в
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **apcu_delete()****

` <?php$bar u003d 'BAR';apcu_store('foo', $bar);//Вилучаємо одну запис.apcu_delete('foo');// Видаляємо кілька записів.apcu_delete(['foo', 'bar' , 'baz']);// Використовуємо ітератор з регулярним виразом.apcu_delete(new APCUIterator('#^myprefix_#'));?> `

### Дивіться також

- [apcu_store()](function.apcu-store.md) - Кешує змінну
- [apcu_fetch()](function.apcu-fetch.md) - Витягує з кеша
збережену змінну
- [apcu_clear_cache()](function.apcu-clear-cache.md) - Очистити кеш
APCu
- [APCUIterator](class.apcuiterator.md)
