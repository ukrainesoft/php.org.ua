- [« mysqli::next_result](mysqli.next-result.md)
- [mysqli::ping »](mysqli.ping.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Встановлення налаштувань

# mysqli::options

# mysqli_options

(PHP 5, PHP 7, PHP 8)

mysqli::options -- mysqli_options — Встановлення налаштувань

### Опис

Об'єктно-орієнтований стиль

public **mysqli::options**(int `$option`, string\|int `$value`): bool

Процедурний стиль

**mysqli_options**([mysqli](class.mysqli.md) `$mysql`, int `$option`,
string\|int `$value`): bool

Використовується для встановлення додаткових налаштувань з'єднання та
поведінки підключення до бази даних

Цю функцію можна викликати неодноразово, щоб поставити кілька
налаштувань.

**mysqli_options()** потрібно викликати після
[mysqli_init()](mysqli.init.md) і перед
[mysqli_real_connect()](mysqli.real-connect.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`option`
Налаштування, яке потрібно встановити. Це може бути одне з
наступних значень:

| Ім'я Опис |
|-----------------------------------------|------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------------|
| **`MYSQLI_OPT_CONNECT_TIMEOUT`** | Час очікування з'єднання за секунди |
| **`MYSQLI_OPT_READ_TIMEOUT`** | Час очікування результату виконання команди за секунди. Доступно з PHP 7.2.0. |
| **`MYSQLI_OPT_LOCAL_INFILE`** | Включення/вимкнення `LOAD LOCAL INFILE` |
| **`MYSQLI_INIT_COMMAND`** | Команда, яку потрібно виконати одразу після підключення до сервера MySQL |
| **`MYSQLI_SET_CHARSET_NAME`** | Кодування, яке буде встановлено за замовчуванням. |
| **`MYSQLI_READ_DEFAULT_FILE`** | Читати налаштування з іменованого файлу замість `my.cnf` Не підтримується mysqlnd. |
| **`MYSQLI_READ_DEFAULT_GROUP`** | Читати налаштування з іменованої групи у файлі `my.cnf` або іншому файлі, заданим налаштуванням **`MYSQL_READ_DEFAULT_FILE`**. Не підтримується mysqlnd. |
| **`MYSQLI_SERVER_PUBLIC_KEY`** | Файл громадського ключа RSA для авторизації на основі SHA-256. |
| **`MYSQLI_OPT_NET_CMD_BUFFER_SIZE`** | Розмір внутрішнього командного/мережевого буфера. Працює лише з mysqlnd. |
| **`MYSQLI_OPT_NET_READ_BUFFER_SIZE`** | Максимальний розмір блоку читання в байтах під час читання командного пакета MySQL. Працює лише з mysqlnd. |
| **`MYSQLI_OPT_INT_AND_FLOAT_NATIVE`** | Перетворює стовпці типів integer та float до числа PHP, а не рядків. Працює лише з mysqlnd. |
| **`MYSQLI_OPT_SSL_VERIFY_SERVER_CERT`** | Перевірити сертифікат сервера чи ні. |

**Допустимі налаштування**

`value`
Значення параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

Дивіться [mysqli_real_connect()](mysqli.real-connect.md).

### Примітки

> **Примітка**:
>
> MySQLnd завжди має на увазі кодування, яке використовує по
> За замовчуванням сервер. Це кодування передається під час встановлення
> з'єднання/авторизації, які використовує mysqlnd.
>
> Libmysqlclient за замовчуванням використовує кодування, встановлене в
> `my.cnf` або спеціальним викликом **mysqli_options()** до використання
> [mysqli_real_connect()](mysqli.real-connect.md), але після
> [mysqli_init()](mysqli.init.md).

### Дивіться також

- [mysqli_init()](mysqli.init.md) - Ініціалізує MySQLi та
повертає об'єкт для використання у функції mysqli_real_connect()
- [mysqli_real_connect()](mysqli.real-connect.md) - Встановлює
з'єднання з сервером mysql
