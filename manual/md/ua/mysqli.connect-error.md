- [« mysqli::$connect_errno](mysqli.connect-errno.md)
- [mysqli::\_\_construct »](mysqli.construct.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає опис останньої помилки підключення

# mysqli::$connect_error

# mysqli_connect_error

(PHP 5, PHP 7, PHP 8)

mysqli::$connect_error -- mysqli_connect_error -- Повертає опис
останньої помилки підключення

### Опис

Об'єктно-орієнтований стиль

?string `$mysqli->connect_error`;

Процедурний стиль

**mysqli_connect_error**(): ?string

Повертає повідомлення про помилку останньої спроби підключення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повідомлення про помилку. **`null`**, якщо помилка відсутня.

### Приклади

**Приклад #1 Приклад використання `$mysqli->connect_error`**

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_OFF);/* @ використовується для придушення попереджень */$mysqli u003d @new mysqli('localhost', 'fake_user', 'wrong_password', /* Використовуйте переважний вами метод реєстрації помилок */    error_log('Помилка при підключенні: ' . $mysqli->connect_error);}?> `

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_OFF);/* @ використовується для|придушення попереджень */$link u003d @mysqli_connect('localhost', 'fake_user', 'wrong_password', '  відданий перевагу вами метод реєстрації помилок */    error_log('Помилка при підключенні: ' . mysqli_connect_error());}?> `

### Дивіться також

- [mysqli_connect()](function.mysqli-connect.md) - Псевдонім
mysqli::\_\_construct
- [mysqli_connect_errno()](mysqli.connect-errno.md) - Повертає код
помилки останньої спроби з'єднання
- [mysqli_errno()](mysqli.errno.md) - Повертає код помилки
останнього виклику функції
- [mysqli_error()](mysqli.error.md) - Повертає рядок з описом
останньої помилки
- [mysqli_sqlstate()](mysqli.sqlstate.md) - Повертає код стану
SQLSTATE останній MySQL операції
