- [« mysqli_stmt::$param_count](mysqli-stmt.param-count.md)
- [mysqli_stmt::reset »](mysqli-stmt.reset.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- готує затвердження SQL до виконання

# mysqli_stmt::prepare

# mysqli_stmt_prepare

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::prepare -- mysqli_stmt_prepare -- Готує затвердження
SQL до виконання

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::prepare**(string `$query`): bool

Процедурний стиль

**mysqli_stmt_prepare**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`, string `$query`): bool

Підготовляє твердження до виконання. Запит повинен складатися з
одного оператора SQL.

Шаблон затвердження може містити нуль або кілька запитань
знаків (`?`), міток параметрівu2060, також званих заповнювачами. Мітки
параметрів повинні бути прив'язані до змінних програми за допомогою
[mysqli_stmt_bind_param()](mysqli-stmt.bind-param.md) перед
виконанням затвердження. рядків.

> **Примітка**:
>
> У випадку, якщо довжина виразу, який ви передаєте в
> **mysqli_stmt_prepare()**, більше, ніж `max_allowed_packet` сервера,
> коди помилки, що повертаються, можуть різнитися в залежності від
> використовуваного драйвера. А це може бути рідний MySQL-драйвер
> (`mysqlnd`), або клієнтська бібліотека MySQL (`libmysqlclient`).
> Поведінка функції буде такою:
>
> - `mysqlnd` на платформі Linux повертає код помилки 1153. Повідомлення
> про помилку означає “розмір пакета перевищує `max_allowed_packet`
> байт”.
>
> - `mysqlnd` на платформі Windows повертає код помилки 2006. Це
> повідомлення про помилку означає “сервер недоступний”.
>
> - `libmysqlclient` на всіх платформах повертає код помилки 2006 року.
> Це повідомлення про помилку означає “сервер недоступний”.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

`query`
Текст запиту у вигляді рядка. Запит повинен складатися з одного
SQL-вирази.

Затвердження SQL може містити нуль або більше позначок параметрів,
представлених знаками питання (`?`) у відповідних позиціях.

> **Примітка**:
>
> Мітки параметрів запиту можна вбудовувати лише у певні місця.
> у виразі. Наприклад, вони допустимі у списку `VALUES()` виразу
> `INSERT` (щоб встановити значення стовпців для рядка), чи операціях
> порівняння пропозиції `WHERE` для завдання порівнюваного значення.
>
> Однак ці позначки неприпустимі як ідентифікатори (такі як
> імена стовпців або таблиць) або для завдання обох операндів бінарного
> оператора, як знак рівності `u003d`. Останнє обмеження
> необхідно, оскільки інакше неможливо буде визначити тип
> операнда. В основному параметри допустимі у виразах мови
> маніпулювання даними (DML), і неприпустимі у виразах мови
> Визначення даних (DDL).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli_stmt::prepare()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR || MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$city u003d      $mysqli->stmt_init();$stmt->prepare("SELECT District FROM City WHERE Nameu003d?");/* Зв'язуємо змінні змітками */$stmt->bind_param("s"; Виконуємо запит */$stmt->execute();/* Зв'язуємо змінні результату */$stmt->bind_result($district);/* Отримуємо значення */$stmt->fetch()находиться районі%s
", $city, $district); `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR || MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");$city u003d| ($link);mysqli_stmt_prepare($stmt, "SELECT District FROM City WHERE Nameu003d?");/* Зв'язуємо змінні з| ($stmt);/* Зв'язуємо змінні результату */mysqli_stmt_bind_result($stmt, $district);/* Отримуємо значення */mysqli_stmt_fetch($stmt);printf("%s не
", $city, $district); `

Результат виконання даних прикладів:

Amersfoort знаходиться в районі Utrecht

### Дивіться також

- [mysqli_stmt_init()](mysqli.stmt-init.md) - Ініціалізує запит
та повертає об'єкт для використання в mysqli_stmt_prepare
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
