- [« mysqli::kill](mysqli.kill.md)
- [mysqli::multi_query »](mysqli.multi-query.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Перевірка, чи є ще результати у мультизапиті

# mysqli::more_results

# mysqli_more_results

(PHP 5, PHP 7, PHP 8)

mysqli::more_results -- mysqli_more_results — Перевірка, чи є ще
результати у мультизапиті

### Опис

Об'єктно-орієнтований стиль

public **mysqli::more_results**(): bool

Процедурний стиль

**mysqli_more_results**([mysqli](class.mysqli.md) `$mysql`): bool

Вказує, чи є ще доступні результати від попереднього
виклик функції [mysqli_multi_query()](mysqli.multi-query.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертається **`true`** у випадку, якщо один або більше результатів
набори (включаючи помилки) доступні після попереднього виклику функції
[mysqli_multi_query()](mysqli.multi-query.md), інакше **`false`**.

### Приклади

Дивіться [mysqli_multi_query()](mysqli.multi-query.md).

### Дивіться також

- [mysqli_multi_query()](mysqli.multi-query.md) - Виконує один або
кілька запитів до бази даних
- [mysqli_next_result()](mysqli.next-result.md) - Підготовка
наступного доступного результуючого набору з multi_query
- [mysqli_store_result()](mysqli.store-result.md) - Передає на
клієнта результуючий набір останнього запиту
- [mysqli_use_result()](mysqli.use-result.md) - Готує
результуючий набір на сервері для використання
