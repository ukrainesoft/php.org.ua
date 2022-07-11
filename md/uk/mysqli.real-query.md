- [« mysqli::real_escape_string](mysqli.real-escape-string.md)
- [mysqli::reap_async_query »](mysqli.reap-async-query.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Виконання SQL запиту

# mysqli::real_query

# mysqli_real_query

(PHP 5, PHP 7, PHP 8)

mysqli::real_query -- mysqli_real_query -- Виконання SQL запиту

### Опис

Об'єктно-орієнтований стиль

public **mysqli::real_query**(string `$query`): bool

Процедурний стиль

**mysqli_real_query**([mysqli](class.mysqli.md) `$mysql`, string
`$query`): bool

Виконує одиночний запит до бази даних, результати якого можна
отримати або використовувати функції
[mysqli_store_result()](mysqli.store-result.md) або
[mysqli_use_result()](mysqli.use-result.md).

Щоб визначити, чи повинен повертати запит результуючий набір,
дивіться [mysqli_field_count()](mysqli.field-count.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`query`
Текст запиту у вигляді рядка.

**Увага**
# Попередження безпеки: SQL-ін'єкція

Якщо запит містить будь-які вхідні змінні, натомість слід
використовувати [підготовлювані
запросы](mysqli.quickstart.prepared-statements.md). В якості
альтернативи дані повинні бути правильно відформатовані та всі рядки
повинні бути екрановані за допомогою функції
[mysqli_real_escape_string()](mysqli.real-escape-string.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
- [mysqli_store_result()](mysqli.store-result.md) - Передає на
клієнта результуючий набір останнього запиту
- [mysqli_use_result()](mysqli.use-result.md) - Готує
результуючий набір на сервері для використання
