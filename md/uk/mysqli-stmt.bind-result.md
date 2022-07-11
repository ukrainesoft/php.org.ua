- [« mysqli_stmt::bind_param](mysqli-stmt.bind-param.md)
- [mysqli_stmt::close »](mysqli-stmt.close.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Прив'язка змінних до підготовленого запиту для розміщення
результату

# mysqli_stmt::bind_result

# mysqli_stmt_bind_result

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::bind_result -- mysqli_stmt_bind_result -- Прив'язка
змінних до підготовленого запиту для розміщення результату

### Опис

Об'єктно-орієнтований стиль

public
**mysqli_stmt::bind_result**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`): bool

Процедурний стиль

**mysqli_stmt_bind_result**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`): bool

Прив'язує стовпці результуючого набору змінних.

Під час виклику [mysqli_stmt_fetch()](mysqli-stmt.fetch.md) для вибірки
даних, протокол клієнт-серверної взаємодії MySQL поміщає
вибрані дані в змінні `var`/`vars`, прив'язані до стовпців
результату вибірки.

Стовпці можна прив'язувати та перев'язувати багаторазово, навіть коли
результуючий набір вже частково вибрано. Нова прив'язка дасть ефект при
наступний виклик [mysqli_stmt_fetch()](mysqli-stmt.fetch.md).

> **Примітка**:
>
> Усі стовпці повинні бути прив'язані до змінних після виклику
> [mysqli_stmt_execute()](mysqli-stmt.execute.md) та до виклику
> [mysqli_stmt_fetch()](mysqli-stmt.fetch.md). Залежно від типів
> даних стовпців прив'язані змінні можуть неявно змінювати свій PHP
> тип.

> **Примітка**:
>
> Залежно від типів стовпців пов'язані змінні можуть непомітно
> Змінюватися на відповідний тип PHP.

**Підказка**

Функція корисна для найпростіших результатів. Щоб отримати повторюваний
набір результатів або кожний рядок як масив чи об'єкт, використовуйте
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

`var`
Змінна, що прив'язується.

`vars`
Інші прив'язувані змінні.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* підготовка s$ Code, Name FROM Country ORDER BY Name LIMIT 5"); $stmt->execute(); ($stmt->fetch()){{    printf("%s %s
", $col1, $col2);} `

**Приклад #2 Процедурний стиль**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* підготовка запросу *$ | Name FROM Country ORDER BY Name LIMIT 5"); mysqli_stmt_execute($stmt); )) {    printf("%s %s
", $col1, $col2);} `

Результат виконання даних прикладів:

AFG Afghanistan
ALB Albania
DZA Algeria
ASM American Samoa
AND Andorra

### Дивіться також

- [mysqli_stmt_get_result()](mysqli-stmt.get-result.md) - Отримує
результат із підготовленого запиту як об'єкт mysqli_result
- [mysqli_stmt_bind_param()](mysqli-stmt.bind-param.md) - Прив'язка
змінних до параметрів запиту, що готується
- [mysqli_stmt_execute()](mysqli-stmt.execute.md) - Виконує
підготовлене затвердження
- [mysqli_stmt_fetch()](mysqli-stmt.fetch.md) - Зв'язує результати
підготовленого виразу зі змінними
- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_stmt_prepare()](mysqli-stmt.prepare.md) - Підготовка
затвердження SQL до виконання
