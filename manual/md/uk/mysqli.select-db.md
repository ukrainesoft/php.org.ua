- [« mysqli::savepoint](mysqli.savepoint.md)
- [mysqli::set_charset »](mysqli.set-charset.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Встановлює базу даних для запитів

# mysqli::select_db

# mysqli_select_db

(PHP 5, PHP 7, PHP 8)

mysqli::select_db -- mysqli_select_db -- Встановлює базу даних для
виконуваних запитів

### Опис

Об'єктно-орієнтований стиль

public **mysqli::select_db**(string `$database`): bool

Процедурний стиль

**mysqli_select_db**([mysqli](class.mysqli.md) `$mysql`, string
`$database`): bool

Встановлює базу даних, яка використовуватиметься під час виконання
запитів до бази даних

> **Примітка**:
>
> Ця функція використовується тільки для зміни бази даних під час
> підключення. Ви можете вибрати базу даних, передавши її четвертою
> параметром функції [mysqli_connect()](function.mysqli-connect.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`database`
Назва бази даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::select_db()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "test");/* >query("SELECT DATABASE()");$row u003d $result->fetch_row();printf("База даних за замовчуванням: %s.
", $row[0]);/* змінюємо базу даних за мовчанням на "world" */$mysqli->select_db("world");/* отримуємо ім'я поточної бази даних замовчання$  >query("SELECT DATABASE()");$row u003d $result->fetch_row();printf("База даних за замовчуванням: %s.
", $row[0]); `

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR || MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "test");/* отримувати , "SELECT DATABASE()");$row u003d mysqli_fetch_row($result);printf("База даних за замовчуванням: %s.
", $row[0]);/* змінюємо базу даних за мовчанням на "world" */mysqli_select_db($link, "world");/* отримуємо ім'я поточної бази даних за у$ , "SELECT DATABASE()");$row u003d mysqli_fetch_row($result);printf("База даних за замовчуванням: %s.
", $row[0]); `

Результат виконання даних прикладів:

База даних за промовчанням: test.
База даних за промовчанням: world.

### Дивіться також

- [mysqli_connect()](function.mysqli-connect.md) - Псевдонім
mysqli::\_\_construct
- [mysqli_real_connect()](mysqli.real-connect.md) - Встановлює
з'єднання з сервером mysql
