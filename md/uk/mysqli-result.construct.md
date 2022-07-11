- [« mysqli_result](class.mysqli-result.md)
- [mysqli_result::$current_field »](mysqli-result.current-field.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Конструктор об'єкта mysqli_result

# mysqli_result::\_\_construct

(PHP 5, PHP 7, PHP 8)

mysqli_result::\_\_construct — Конструктор об'єкту
[mysqli_result](class.mysqli-result.md)

### Опис

public **mysqli_result::\_\_construct**([mysqli](class.mysqli.md)
`$mysql`, int `$result_mode` u003d **`MYSQLI_STORE_RESULT`**)

Метод створює новий об'єкт [mysqli_result](class.mysqli-result.md).

Метод можна використовувати для створення об'єкту
[mysqli_result](class.mysqli-result.md) після виклику функції
[mysqli_real_query()](mysqli.real-query.md) або
[mysqli_multi_query()](mysqli.multi-query.md). Створення об'єкту
вручну еквівалентно виклику функції
[mysqli_store_result()](mysqli.store-result.md) або
[mysqli_use_result()](mysqli.use-result.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`result_mode`
Режим результату може бути однією з двох констант, що вказують, як
результат буде повернуто сервером MySQL:

**`MYSQLI_STORE_RESULT`** (за замовчуванням) - створює об'єкт
[mysqli_result](class.mysqli-result.md) з буферизованим набором
результатів.

**`MYSQLI_USE_RESULT`** - створює об'єкт
[mysqli_result](class.mysqli-result.md) з небуферизованим набором
результатів. Поки є очікування вибірки запису, лінія з'єднання буде
зайнята і всі наступні виклики повертатимуть помилку
`Commands out of sync` (Команда не синхронізована). Щоб уникнути
помилки, всі записи повинні бути отримані з сервера або набір результатів
має бути відкинуто шляхом виклику функції
[mysqli_free_result()](mysqli-result.free.md). Для вилучення рядків
з'єднання має залишатися відкритим.

### Приклади

**Приклад #1 Приклад створення об'єкта
[mysqli_result](class.mysqli-result.md)**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* SELECT-запроси SELECT Name FROM City LIMIT 10");$result u003d new mysqli_result($mysqli);printf("Запит вернув %d записів.
", $result->num_rows); `

Результатом виконання даних прикладів буде щось подібне:

Запит повернув 10 записів.

### Дивіться також

- [mysqli_multi_query()](mysqli.multi-query.md) - Виконує один або
кілька запитів до бази даних
- [mysqli_real_query()](mysqli.real-query.md) - Виконання SQL
запиту
- [mysqli_store_result()](mysqli.store-result.md) - Передає на
клієнта результуючий набір останнього запиту
- [mysqli_use_result()](mysqli.use-result.md) - Готує
результуючий набір на сервері для використання
