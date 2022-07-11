- [« mysqli::real_query](mysqli.real-query.md)
- [mysqli::refresh »](mysqli.refresh.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Отримання результату асинхронного запиту

# mysqli::reap_async_query

# mysqli_reap_async_query

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

mysqli::reap_async_query -- mysqli_reap_async_query -- Отримання
результату асинхронного запиту

### Опис

Об'єктно-орієнтований стиль

public **mysqli::reap_async_query**():
[mysqli_result](class.mysqli-result.md)\|bool

Процедурний стиль

**mysqli_reap_async_query**([mysqli](class.mysqli.md) `$mysql`):
[mysqli_result](class.mysqli-result.md)\|bool

Отримує результат асинхронного запиту.

> **Примітка**:
>
> Доступно лише з модулем [mysqlnd](book.mysqlnd.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає **`false`** у разі виникнення помилки. Для успішних
запитів, які виробляють набір результатів, таких як
`SELECT, SHOW, DESCRIBE` або `EXPLAIN`, **mysqli_reap_async_query()**
поверне об'єкт [mysqli_result](class.mysqli-result.md). Для інших
успішних запитів **mysqli_reap_async_query()** поверне **`true`**.

### Дивіться також

- [mysqli_poll()](mysqli.poll.md) - Опитування підключень
