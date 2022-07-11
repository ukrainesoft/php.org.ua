- [« mysqli::multi_query](mysqli.multi-query.md)
- [mysqli::options »](mysqli.options.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Підготовка наступного доступного результуючого набору з
multi_query

# mysqli::next_result

# mysqli_next_result

(PHP 5, PHP 7, PHP 8)

mysqli::next_result -- mysqli_next_result -- Підготовка наступного
доступного результуючого набору з multi_query

### Опис

Об'єктно-орієнтований стиль

public **mysqli::next_result**(): bool

Процедурний стиль

**mysqli_next_result**([mysqli](class.mysqli.md) `$mysql`): bool

Підготовляє наступний результуючий набір попереднього
виклику функції [mysqli_multi_query()](mysqli.multi-query.md), який
потім можна отримати функціями
[mysqli_store_result()](mysqli.store-result.md) або
[mysqli_use_result()](mysqli.use-result.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Також повертає **`false`**, якщо
наступний оператор привів до помилки, на відміну від
[mysqli_more_results()](mysqli.more-results.md).

### Приклади

Дивіться [mysqli_multi_query()](mysqli.multi-query.md).

### Дивіться також

- [mysqli_multi_query()](mysqli.multi-query.md) - Виконує один або
кілька запитів до бази даних
- [mysqli_more_results()](mysqli.more-results.md) - Перевірка, є
ще результати в мультизапиті
- [mysqli_store_result()](mysqli.store-result.md) - Передає на
клієнта результуючий набір останнього запиту
- [mysqli_use_result()](mysqli.use-result.md) - Готує
результуючий набір на сервері для використання
