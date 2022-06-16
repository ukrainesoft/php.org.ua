- [« mysqli::$connect_error](mysqli.connect-error.md)
- [mysqli::debug »](mysqli.debug.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Встановлює нове з'єднання із сервером MySQL

# mysqli::\_\_construct

# mysqli::connect

# mysqli_connect

(PHP 5, PHP 7, PHP 8)

mysqli::\_\_construct -- mysqli::connect -- mysqli_connect --
Встановлює нове з'єднання із сервером MySQL

### Опис

Об'єктно-орієнтований стиль

public **mysqli::\_\_construct**(
string `$hostname` u003d ini_get("mysqli.default_host"),
string `$username` u003d ini_get("mysqli.default_user"),
string `$password` u003d ini_get("mysqli.default_pw"),
string `$database` u003d "",
int `$port` u003d ini_get("mysqli.default_port"),
string `$socket` u003d ini_get("mysqli.default_socket")
)

public [mysqli::connect](function.mysqli-connect.md)(
string `$hostname` u003d ini_get("mysqli.default_host"),
string `$username` u003d ini_get("mysqli.default_user"),
string `$password` u003d ini_get("mysqli.default_pw"),
string `$database` u003d "",
int `$port` u003d ini_get("mysqli.default_port"),
string `$socket` u003d ini_get("mysqli.default_socket")
): void

Процедурний стиль

[mysqli_connect](function.mysqli-connect.md)(
string `$hostname` u003d ini_get("mysqli.default_host"),
string `$username` u003d ini_get("mysqli.default_user"),
string `$password` u003d ini_get("mysqli.default_pw"),
string `$database` u003d "",
int `$port` u003d ini_get("mysqli.default_port"),
string `$socket` u003d ini_get("mysqli.default_socket")
): [mysqli](class.mysqli.md)\|false

Встановлює з'єднання з сервером MySQL.

### Список параметрів

`hostname`
Може бути або ім'ям хоста, або IP-адресою. Передбачається
використання локального хоста при вказівці цього параметра **`null`**
або рядка "localhost". По можливості замість протоколу TCP/IP будуть
використовувати канали. Протокол TCP/IP використовується, якщо вказано ім'я
хоста та номер порту, наприклад, `localhost:3308`.

Якщо перед ім'ям хоста встановити рядок `p:`, то буде відкрито постійне
з'єднання. Якщо з'єднання відкрито з пулу підключень, буде
автоматично викликана функція
[mysqli_change_user()](mysqli.change-user.md).

`username`
Ім'я користувача MySQL.

`password`
Якщо не заданий або дорівнює **`null`**, MySQL-сервер насамперед
спробує автентифікувати користувача в принципі того, хто має пароль, а
потім шукатиме серед користувачів, які не мають пароля. Такий
підхід дозволяє одному користувачеві призначати різні права (у
залежно від того, заданий пароль чи ні).

`database`
Якщо параметр заданий, його значення буде використовуватись як ім'я
бази даних за замовчуванням під час виконання запитів.

`port`
Визначає номер порту для підключення до сервера MySQL.

`socket`
Задає сокет або іменований пайп, який потрібно використовувати.

> **Примітка**:
>
> Передача параметра `socket` не явно задаватиме тип з'єднання при
> підключення до сервера MySQL. Як встановлюватиметься з'єднання
> з MySQL-сервером визначається параметром `hostname`.

### Значення, що повертаються

**mysqli::\_\_construct()** завжди повертає об'єкт, який
представляє з'єднання з сервером MySQL, незалежно від того, було воно
успішним чи ні.

[mysqli_connect()](function.mysqli-connect.md) повертає об'єкт,
який представляє з'єднання з сервером MySQL або **`false`**
у разі виникнення помилки.

[mysqli::connect()](function.mysqli-connect.md) повертає **`null`**
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Помилки

Якщо **`MYSQLI_REPORT_STRICT`** включено і під час підключення до бази
даних сталася помилка, викидається
[mysqli_sql_exception](class.mysqli-sql-exception.md).

### Приклади

**Приклад #1 Приклад використання **mysqli::\_\_construct()****

Об'єктно-орієнтований стиль

` <?php/* Вы должны включить отчёт об ошибках для mysqli, прежде чем пытаться установить соединение */mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli('localhost', 'my_user', 'my_password', 'my_db' );/* Встановіть бажане кодування після встановлення з'єднання*/$mysqli->set_charset('utf8mb4');printf("Успішно... %s
", $mysqli->host_info);?> `

Процедурний стиль

` <?php/* Вы должны включить отчёт об ошибках для mysqli, прежде чем пытаться установить соединение */mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect('localhost', 'my_user', 'my_password', 'my_db') ;/* Встановіть бажане кодування після встановлення з'єднання*/mysqli_set_charset($mysqli, 'utf8mb4');printf("Успішно... %s
", mysqli_get_host_info($mysqli)); `

Результатом виконання даних прикладів буде щось подібне:

Успішно... localhost via TCP/IP

**Приклад #2 Розширення класу mysqli**

`<?phpclass FooMysqli extends mysqli {    public function __construct($host, $user, $pass, $db, $port, $socket, $charset) { RE| parent::__construct($host, $user, $pass, $db, $port, $socket); $this->set_charset($charset); }}$db u003d new FooMysqli('localhost', 'my_user', 'my_password', 'my_db', 3306, null, 'utf8mb4'); `

**Приклад #3 Ручне оброблення помилок**

Якщо звіти про помилки вимкнуто, розробник відповідає за
перевірку та обробку помилок

Об'єктно-орієнтований стиль

` <?phperror_reporting(0);mysqli_report(MYSQLI_REPORT_OFF);$mysqli u003d new mysqli('localhost', 'my_user', 'my_password', 'my_db');if ($mysqli->connect_errno)   помилка з'єднання mysqli: ' . $mysqli->connect_error);}/* Встановіть бажане кодування після встановлення з'єднання */$mysqli->set_charset('utf8mb4');if про$mysqli- mysqli: ' . $mysqli->error);} `

Процедурний стиль

`<?phperror_reporting(0);mysqli_report(MYSQLI_REPORT_OFF);$mysqli u003d mysqli_connect('localhost', 'my_user', 'my_password', 'my_db');if (mysqli_connect_errno() : ' . mysqli_connect_error());}/* Установите желаемую кодировку после установления соединения */mysqli_set_charset($mysqli, 'utf8mb4');if (mysqli_errno($mysqli)) {    throw new RuntimeException('ошибка mysqli: ' . mysqli_error( $ mysqli));} `

### Примітки

> **Примітка**:
>
> MySQLnd завжди має на увазі кодування, яке використовує по
> За замовчуванням сервер. Це кодування передається під час встановлення
> з'єднання/авторизації, які використовує mysqlnd.
>
> Libmysqlclient за замовчуванням використовує кодування, встановлене в
> `my.cnf` або спеціальним викликом
> [mysqli_options()](mysqli.options.md) до використання
> [mysqli_real_connect()](mysqli.real-connect.md), але після
> [mysqli_init()](mysqli.init.md).

> **Примітка**:
>
> Якщо використовується Об'єктно-орієнтований стиль: Якщо підключення
> Встановити не вдалося, метод все одно поверне об'єкт. Перевірити
> успішність створення підключення можна або функцією
> [mysqli_connect_error()](mysqli.connect-error.md) або за допомогою
> властивості [mysqli-\>connect_error](mysqli.connect-error.md), як
> показано у прикладах.

> **Примітка**:
>
> Якщо потрібно встановити додаткові параметри підключення, начебто
> часу очікування тощо, тоді замість цього методу необхідно
> використовувати функцію
> [mysqli_real_connect()](mysqli.real-connect.md).

> **Примітка**:
>
> Виклик конструктора без параметрів ідентичний виклику функції
> [mysqli_init()](mysqli.init.md).

> **Примітка**:
>
> Помилка "Can't create TCP/IP socket (10106)" зазвичай означає, що
> Директива конфігурації
> [variables_order](ini.core.md#ini.variables-order) не містить
> Символ `E`. У Windows системах, якщо оточення не скопійоване,
> змінне середовище `SYSTEMROOT` буде недоступне, і у PHP виникнуть
> проблеми із завантаженням Winsock.

### Дивіться також

- [mysqli_real_connect()](mysqli.real-connect.md) - Встановлює
з'єднання з сервером mysql
- [mysqli_options()](mysqli.options.md) - Встановлення установок
- [mysqli_connect_errno()](mysqli.connect-errno.md) - Повертає код
помилки останньої спроби з'єднання
- [mysqli_connect_error()](mysqli.connect-error.md) - Повертає
опис останньої помилки підключення
- [mysqli_close()](mysqli.close.md) - Закриває раніше відкрите
з'єднання з базою даних
