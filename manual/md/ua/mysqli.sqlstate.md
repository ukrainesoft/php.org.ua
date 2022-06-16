- [« mysqli::set_charset](mysqli.set-charset.md)
- [mysqli::ssl_set »](mysqli.ssl-set.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає код стану SQLSTATE останній MySQL операції

# mysqli::$sqlstate

# mysqli_sqlstate

(PHP 5, PHP 7, PHP 8)

mysqli::$sqlstate -- mysqli_sqlstate — Повертає код стану SQLSTATE
останньої MySQL операції

### Опис

Об'єктно-орієнтований стиль

string `$mysqli->sqlstate`;

Процедурний стиль

**mysqli_sqlstate**([mysqli](class.mysqli.md) `$mysql`): string

Повертає рядок із SQLSTATE кодом останньої помилки. Цей код складається з
п'ять символів. '00000' означає відсутність помилок. Ці коди визначено
у стандарті ANSI, а також у ODBC. Переглянути список можливих значень
можна на сторінці
[»http://dev.mysql.com/doc/mysql/en/error-handling.md](http://dev.mysql.com/doc/mysql/en/error-handling.md).

> **Примітка**:
>
> Слід зазначити, що ще не всі помилки MySQL мають відображення в
> SQLSTATE коди. Для подібних помилок використовується код `HY000` (загальна
> помилка).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає рядок із SQLSTATE кодом останньої помилки. Цей код складається з
п'ять символів. '00000' означає відсутність помилок.

### Приклади

**Приклад #1 Приклад використання `$mysqli->sqlstate`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {   ключ|
", Mysqli_connect_error()); ")) {    printf("Помилка - SQLSTATE %s.
", $mysqli->sqlstate);}$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("Не 
", Mysqli_connect_error()); )) {    printf("Помилка - SQLSTATE %s.
", mysqli_sqlstate($link));} mysqli_close($link);?> `

Результат виконання даних прикладів:

Помилка SQLSTATE 42S01.

### Дивіться також

- [mysqli_errno()](mysqli.errno.md) - Повертає код помилки
останнього виклику функції
- [mysqli_error()](mysqli.error.md) - Повертає рядок з описом
останньої помилки
