- [« mysqli::begin_transaction](mysqli.begin-transaction.md)
- [mysqli::character_set_name »](mysqli.character-set-name.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Дозволяє змінити користувача підключеного до бази даних

# mysqli::change_user

# mysqli_change_user

(PHP 5, PHP 7, PHP 8)

mysqli::change_user -- mysqli_change_user — Дозволяє змінити
користувача підключеного до бази даних

### Опис

Об'єктно-орієнтований стиль

public **mysqli::change_user**(string `$username`, string `$password`,
?string `$database`): bool

Процедурний стиль

**mysqli_change_user**(
[mysqli](class.mysqli.md) `$mysql`,
string `$username`,
string `$password`,
?string `$database`
): bool

Змінює користувача, від імені якого виконано підключення до бази
даних, та встановлює поточну базу даних

Для успішної зміни користувача необхідні коректні `username` та
`password`, а також наявність достатніх прав для роботи з базою. Якщо
зміна користувача закінчиться помилкою, збережеться поточна авторизація
користувача, до виклику функції.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`username`
Ім'я користувача для доступу до MySQL

`password`
Пароль для доступу до MySQL

`database`
Ім'я бази даних

Якщо потрібно змінити користувача без вибору бази даних, слід
вказувати **`null`**. Для вибору бази даних необхідно використовувати
функцію [mysqli_select_db()](mysqli.select-db.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::change_user()****

Об'єктно-орієнтований стиль

` <?php/* створюємо підключення до базі даних test */$mysqli u003d new mysqli("localhost", "my_user", "my_password", "test");/* перевіряємо з'єднання *| printf("Підключення не удалося: %s
", mysqli_connect_error());   exit();}/* встановлюємо змінну a */$mysqli->query("SET @a:u003d1");/* все скидаємо і вибираємо нову базу change_user("my_user", "my_password", "world");if ($result u003d $mysqli->query("SELECT DATABASE()")) {   $row u003d $result->fetch_row();    даних за замовчуванням: %s
", $row[0]);   $result->close();}if($result u003d $mysqli->query("SELECT @a")) {   $row u003d $result->fetch_row();     $row[0] u003du003du003d NULL) {         printf("Значення змінної - NULL
");    }   $result->close();}/* закриваємо з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php/* створюємо підключення до базі даних test */$link u003d mysqli_connect("localhost", "my_user", "my_password", "test");/* перевіряємо з'єднання**/if ("Підключення не удалося: %s
", mysqli_connect_error());   exit();}/* встановлюємо змінну a */mysqli_query($link, "SET @a:u003d1"); "my_user", "my_password", "world");if ($result u003d mysqli_query($link, "SELECT DATABASE()")) {   $row u003d mysqli_fetch_row($result);    s
", $row[0]);   mysqli_free_result($result);}if ($result u003d mysqli_query($link, "SELECT @a")) {    $row u003d mysqli_fetch_row($$) u003du003du003d NULL) {        printf("Значення змінної - NULL
");    }    mysqli_free_result($result);}/* закриваємо з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

База даних за замовчуванням: world
Значення змінної – NULL

### Примітки

> **Примітка**:
>
> В результаті виклику функції поточне з'єднання з базою даних починається
> поводитися так, начебто було створено нове з'єднання. Незалежно від
> результат операції, виклик функції призводить до відкату всіх активних
> транзакцій, закриття тимчасових таблиць та розблокування всіх
> заблокованих таблиць.

### Дивіться також

- [mysqli_connect()](function.mysqli-connect.md) - Псевдонім
mysqli::\_\_construct
- [mysqli_select_db()](mysqli.select-db.md) - Встановлює базу
даних для виконуваних запитів
