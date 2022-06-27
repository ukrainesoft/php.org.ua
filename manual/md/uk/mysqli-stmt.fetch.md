- [« mysqli_stmt::execute](mysqli-stmt.execute.md)
- [mysqli_stmt::$field_count »](mysqli-stmt.field-count.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- пов'язує результати підготовленого виразу зі змінними

# mysqli_stmt::fetch

# mysqli_stmt_fetch

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::fetch -- mysqli_stmt_fetch — Зв'язує результати
підготовленого виразу зі змінними

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::fetch**(): ?bool

Процедурний стиль

**mysqli_stmt_fetch**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): ?bool

Зв'язує результати підготовленого виразу зі змінними,
певними за допомогою
[mysqli_stmt_bind_result()](mysqli-stmt.bind-result.md).

> **Примітка**:
>
> Необхідно зазначити, що всі стовпці повинні бути пов'язані перед викликом
> **mysqli_stmt_fetch()**.

> **Примітка**:
>
> Дані не буферизуються під час передачі, коли викликається
> [mysqli_stmt_store_result()](mysqli-stmt.store-result.md), що
> знижує продуктивність (але знижує витрати пам'яті).

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

| Значення | Опис |
|-------------|--------------------------------------- --------------------|
| **`true`** | Успіх. Дані вибрали |
| **`false`** | Помилка |
| **`null`** | Більше немає рядків/даних або зникнення даних |

**Повертані значення**

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання*/if (mysqli_connect_errno()) { випробування|
", mysqli_connect_error());  exit();}$query u003d "SELECT Name, CountryCode FROM City ORDER by ID DESC LIMIT 150,5 par| Запустити вираз */   $stmt->execute();    /                      printf ("%s (%s)
", $name, $code);    }    /* Завершити запрос */    $stmt->close();}/* Закрити з'єднання */$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання */if (mysqli_connect_errno()) {     printf("Спроба |
", mysqli_connect_error());   exit();}$query u003d "SELECT Name, CountryCode FROM City ORDER by ID DESC LIMIT 150,5 par| запрос */    mysqli_stmt_execute($stmt);    /* Определить переменные для результата */    mysqli_stmt_bind_result($stmt, $name, $code);    /* Выбрать значения */    while (mysqli_stmt_fetch($stmt)) {        printf ("%s ( %s)
", $name, $code);    }    /* Завершити запит */   mysqli_stmt_close($stmt);}/* Закрити з'єднання**/mysqli_close($link);

Результат виконання даних прикладів:

Rockford (USA)
Tallahassee (USA)
Salinas (USA)
Santa Clarita (США)
Springfield (USA)

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_stmt_errno()](mysqli-stmt.errno.md) - Повертає код
помилки виконання останнього запиту
- [mysqli_stmt_error()](mysqli-stmt.error.md) - Повертає рядок з
поясненням останньої помилки під час виконання запиту
- [mysqli_stmt_bind_result()](mysqli-stmt.bind-result.md) - Прив'язка
змінних до підготовленого запиту для розміщення результату
