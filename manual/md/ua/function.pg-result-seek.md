- [« pg_result_error](function.pg-result-error.md)
- [pg_result_status »](function.pg-result-status.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Зміщує покажчик на рядок вибірки в екземплярі результату запиту

#pg_result_seek

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_result_seek — Зміщує покажчик на рядок вибірки в екземплярі
результату запиту

### Опис

**pg_result_seek**([PgSql\Result](class.pgsql-result.md) `$result`,
int `$row`): bool

**pg_result_seek()** встановлює зміщення внутрішнього покажчика в
екземплярі `result`.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`row`
Кількість рядків, на які потрібно змістити внутрішній покажчик
ресурсу [PgSql\Result](class.pgsql-result.md). Рядки нумеруються з
нуля.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_result_seek()****

` <?php// Підключення к базі даних$conn u003d pg_pconnect("dbnameu003dpublisher"); рядок// (допускаємо, в в результаті є хоч би три рядки)pg_result_seek($result, 2);// Вибираємо третій рядок з результату$row u003d pg_fetch;

### Дивіться також

- [pg_fetch_row()](function.pg-fetch-row.md) - Вибирає рядок
результату запиту та поміщає дані в масив
- [pg_fetch_assoc()](function.pg-fetch-assoc.md) - Вибирає рядок
результату запиту та поміщає дані в асоціативний масив
- [pg_fetch_array()](function.pg-fetch-array.md) - Повертає рядок
результату у вигляді масиву
- [pg_fetch_object()](function.pg-fetch-object.md) - Вибирає рядок
результату запиту та повертає дані у вигляді об'єкта
- [pg_fetch_result()](function.pg-fetch-result.md) - Повертає
запис з результату запиту
