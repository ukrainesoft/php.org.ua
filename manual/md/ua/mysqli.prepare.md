- [« mysqli::poll](mysqli.poll.md)
- [mysqli::query »](mysqli.query.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Підготовляє SQL вираз до виконання

# mysqli::prepare

# mysqli_prepare

(PHP 5, PHP 7, PHP 8)

mysqli::prepare -- mysqli_prepare -- Підготовляє SQL вираз до
виконанню

### Опис

Об'єктно-орієнтований стиль

public **mysqli::prepare**(string `$query`):
[mysqli_stmt](class.mysqli-stmt.md)\|false

Процедурний стиль

**mysqli_prepare**([mysqli](class.mysqli.md) `$mysql`, string
`$query`): [mysqli_stmt](class.mysqli-stmt.md)\|false

Підготовляє SQL-запит і повертає покажчик цього виразу,
який може використовуватися для подальших операцій із цим виразом.
Запит повинен складатися з одного виразу SQL.

Шаблон оператора може містити нуль або кілька запитань
знаків (`?`), міток параметрівu2060, також званих заповнювачами. Мітки
параметрів повинні бути прив'язані до змінних програми за допомогою
[mysqli_stmt_bind_param()](mysqli-stmt.bind-param.md) перед
виконанням висловлювання.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`query`
Текст запиту у вигляді рядка. Має складатися з одного SQL-вираження.

Вираз SQL може містити нуль або більше позначок параметрів,
представлених знаками питання (`?`) у відповідних позиціях.

> **Примітка**:
>
> Ці мітки можна вбудовувати лише у певні місця у виразі.
> Наприклад, вони дозволені у списку `VALUES()` виразу `INSERT` (щоб
> встановити значення стовпців для рядка), або в операціях порівняння
> пропозиції `WHERE` для завдання порівнюваного значення.
>
> Однак вони не дозволені як ідентифікатори (наприклад, імена
> таблиць або стовпців) або для вказівки обох бінарних операндів
> оператора, як знак рівності `u003d`. Останнє обмеження
> необхідно, оскільки неможливо визначити тип параметра. В основному,
> параметри допустимі у виразах мови маніпулювання даними (DML),
> і неприпустимі у виразах мови визначення даних (DDL).

### Значення, що повертаються

**mysqli_prepare()** повертає об'єкт запиту або **`false`** у разі
помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::prepare()****

Об'єктно-орієнтований стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR || MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$city запропонувати| $mysqli->prepare("SELECT District FROM City WHERE Nameu003d?");/* зв'язування параметрів з мітками */$stmt->bind_param("s", $city);/* виконання запиту execute();/* зв'язування змінних з результатами запиту */$stmt->bind_result($district);/* отримання значення */$stmt->fetch();printf("%s перебуває в ок|
", $city, $district); `

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world"); ($link, "SELECT District FROM City WHERE Nameu003d?");/* зв'язування параметрів метками */mysqli_stmt_bind_param($stmt, "s", $city);/* m|t * зв'язування змінних з результатами запиту */mysqli_stmt_bind_result($stmt, $district);/* набуття значення */mysqli_stmt_fetch($stmt);printf("%s s
", $city, $district);?> `

Результат виконання даних прикладів:

Amersfoort знаходиться в окрузі Utrecht

### Дивіться також

- [mysqli_stmt_execute()](mysqli-stmt.execute.md) - Виконує
підготовлене затвердження
- [mysqli_stmt_fetch()](mysqli-stmt.fetch.md) - Зв'язує результати
підготовленого виразу зі змінними
- [mysqli_stmt_bind_param()](mysqli-stmt.bind-param.md) - Прив'язка
змінних до параметрів запиту, що готується
- [mysqli_stmt_bind_result()](mysqli-stmt.bind-result.md) - Прив'язка
змінних до підготовленого запиту для розміщення результату
- [mysqli_stmt_get_result()](mysqli-stmt.get-result.md) - Отримує
результат із підготовленого запиту як об'єкт mysqli_result
- [mysqli_stmt_close()](mysqli-stmt.close.md) - Закриває
підготовлений запит
