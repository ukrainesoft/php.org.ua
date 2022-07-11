- [« pg_flush](function.pg-flush.md)
- [pg_get_notify »](function.pg-get-notify.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Очищення результату запиту та звільнення пам'яті

#pg_free_result

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_free_result — Очищення результату запиту та звільнення пам'яті

### Опис

**pg_free_result**([PgSql\Result](class.pgsql-result.md) `$result`):
bool

**pg_free_result()** звільняє пам'ять, зайняту екземпляром
[PgSql\Result](class.pgsql-result.md).

Викликати цю функцію слід лише у разі нестачі пам'яті при
виконання скрипта. У будь-якому випадку пам'ять буде звільнено
автоматично після закінчення роботи скрипта.

> **Примітка**:
>
> Колишня назва функції: **pg_freeresult()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_free_result()****

` <?php$db u003d pg_connect("dbnameu003dusers useru003dme") || die();$res u003d pg_query($db, "SELECT 1 UNION ALL SELECT 2");$val u003d pg_fetch_result($res, 1, 0);echo "Перше поле во $$  
";pg_free_result($res);?> `

Результат виконання цього прикладу:

Перше поле у другому рядку: 2

### Дивіться також

- [pg_query()](function.pg-query.md) - Виконує запит
- [pg_query_params()](function.pg-query-params.md) - Посилає
параметризований запит на сервер, параметри передаються окремо від
тексту SQL запиту
- [pg_execute()](function.pg-execute.md) - Запускає виконання
раніше підготовленого параметризованого запиту та чекає результат
