- [« mysqli::commit](mysqli.commit.md)
- [mysqli::$connect_error »](mysqli.connect-error.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає код помилки останньої спроби з'єднання

# mysqli::$connect_errno

# mysqli_connect_errno

(PHP 5, PHP 7, PHP 8)

mysqli::$connect_errno -- mysqli_connect_errno — Повертає код помилки
останньої спроби з'єднання

### Опис

Об'єктно-орієнтований стиль

int `$mysqli->connect_errno`;

Процедурний стиль

**mysqli_connect_errno**(): int

Повернення коду помилки останньої спроби підключення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Код помилки останньої спроби підключення. За відсутності помилок виводить
0.

### Приклади

**Приклад #1 Приклад використання `$mysqli->connect_errno`**

Об'єктно-орієнтований стиль

`<?phpmysqli_report(MYSQLI_REPORT_OFF);/* @ використовується для придушення попереджень */$mysqli u003d @new mysqli('localhost', 'fake_user', 'wrong_password', /* Використовуйте переважний вами метод реєстрації помилок */    error_log('Помилка з'єднання: ' . $mysqli->connect_errno);}?> `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_OFF);/* @ is used to suppress warnings */$link u003d @mysqli_connect('localhost', 'fake_user', 'wrong_password', ' ' | Використовуйте вважаний вами метод реєстрації помилок */    error_log('Помилка з'єднання: ' . mysqli_connect_errno());}?> `

### Дивіться також

- [mysqli_connect()](function.mysqli-connect.md) - Псевдонім
mysqli::\_\_construct
- [mysqli_connect_error()](mysqli.connect-error.md) - Повертає
опис останньої помилки підключення
- [mysqli_errno()](mysqli.errno.md) - Повертає код помилки
останнього виклику функції
- [mysqli_error()](mysqli.error.md) - Повертає рядок з описом
останньої помилки
- [mysqli_sqlstate()](mysqli.sqlstate.md) - Повертає код стану
SQLSTATE останній MySQL операції
