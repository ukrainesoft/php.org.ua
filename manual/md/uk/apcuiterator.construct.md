- [«APCUIterator](class.apcuiterator.md)
- [APCUIterator::current »](apcuiterator.current.md)

- [PHP Manual](index.md)
- [APCUIterator](class.apcuiterator.md)
- Створює об'єкт ітератор класу APCUIterator

# APCUIterator::\_\_construct

(PECL apcu \>u003d 5.0.0)

APCUIterator::\_\_construct — Створює об'єкт ітератора класу
APCUIterator

### Опис

public **APCUIterator::\_\_construct**(
array\|string\|null `$search` u003d **`null`**,
int `$format` u003d APC_ITER_ALL,
int `$chunk_size` u003d 100,
int `$list` u003d APC_LIST_ACTIVE
)

Створює об'єкт [APCUIterator](class.apcuiterator.md).

### Список параметрів

`search`
Або регулярне вираз [PCRE] (book.pcre.md), яке відповідає
імен ключів APCu, заданим як рядки (string). Або масив (array)
рядків (string) із іменами ключів APCu. Або, необов'язково, **`null`**
щоб пропустити пошук.

`format`
Формат, заданий однією із констант [APC_ITER\_\*](apcu.constants.md).

`chunk_size`
Розмір блоку даних. Має бути більше 0. За замовчуванням 100.

`list`
Тип списку. Задається константами **`APC_LIST_ACTIVE`** або
**`APC_LIST_DELETED`**.

### Приклади

**Приклад #1 Приклад використання **APCUIterator::\_\_construct()****

` <?phpforeach (new APCUIterator('/^counter\./') as $counter) {   echo "$counter[key]: $counter[value]
";   apc_dec($counter['key'], $counter['value']);}?> `

### Дивіться також

- [apcu_exists()](function.apcu-exists.md) - Перевіряє, чи існують
чи записи
- [apcu_cache_info()](function.apcu-cache-info.md) - Витягує
закешовану інформацію зі сховища APCu
