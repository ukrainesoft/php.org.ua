- [« expression](function.mysql-xdevapi-expression.md)
- [mysql_xdevapi\BaseResult »](class.mysql-xdevapi-baseresult.md)

- [PHP Manual](index.md)
- [Функції Mysql_xdevapi](ref.mysql-xdevapi.md)
- Підключається до сервера MySQL

# getSession

(No version information available, might only be in Git)

getSession — Підключається до сервера MySQL

### Опис

**mysql_xdevapi\getSession**(string `$uri`):
[mysql_xdevapi\Session](class.mysql-xdevapi-session.md)

Підключається до сервера MySQL.

### Список параметрів

`uri`
URI до сервера MySQL, такий як `mysqlx://user:password@host`.

Формат URI:

`scheme://[user[:[password]]@]target[:port][?attribute1u003dvalue1&attribute2u003dvalue2...`

- `scheme`: обов'язковий протокол з'єднання

У mysql_xdevapi це завжди 'mysqlx' (для X Protocol)

- `user`: необов'язковий, обліковий запис користувача MySQL для
автентифікації

- `password`: необов'язковий, пароль користувача MySQL для
автентифікації

- `target`: обов'язковий, екземпляр сервера, до якого належить
з'єднання:

\* TCP-з'єднання (ім'я хоста, адреса IPv4 або адреса IPv6)

\* Шлях до сокету Unix (локальний шлях до файлу)

\* Іменований канал Windows (локальний шлях до файлу)

- `port`: необов'язковий мережевий порт сервера MySQL.

за замовчуванням порт для X Protocol дорівнює 33060

- `?attributeu003dvalue`: цей елемент є необов'язковим та
визначає словник даних, який містить різні параметри,
в тому числі:

- Атрибут `auth` (механізм аутентифікації), оскільки він відноситься
до зашифрованих з'єднань. Для отримання додаткової
інформації дивіться [» Параметри команди для зашифрованих
соединений](https://dev.mysql.com/doc/refman/8.0/en/encrypted-connection-options.md).
Підтримуються такі значення: `plain`, `mysql41`,
`external`, та `sha256_mem`.

- Атрибут `connect-timeout` впливає на з'єднання, а не на
наступні операції. Він встановлюється для кожного з'єднання
на одному або кількох хостах.

Введіть позитивне число, щоб визначити час
очікування з'єднання в секундах, або введіть 0 (нуль), щоб
вимкнути час очікування (нескінченно). Не визначаючи час
очікування підключення, використовується значення за замовчуванням 10.

Пов'язані, змінні середовища MYSQLX_CONNECTION_TIMEOUT (час
очікування в секундах) та MYSQLX_TEST_CONNECTION_TIMEOUT
(які використовуються під час виконання тестів) можуть бути встановлені
і використані замість connect-timeout з'єднання в URI. Параметр
URI підключення до connect-timeout має пріоритет над
змінними середовища.

- Необов'язковий атрибут `compression` приймає такі
значення: `preferred` (клієнт домовляється з сервером, щоб
знайти підтримуваний алгоритм; з'єднання не стисло, якщо взаємно
алгоритм, що підтримується, не знайдений), `required` (як "preferred",
але з'єднання розривається, якщо взаємно підтримуваний алгоритм
не знайдено), або `disabled` (з'єднання не стисло). За замовчуванням
використовується `preferred`.

Опцію було додано у версії 8.0.20.

- Необов'язковий атрибут `compression-algorithms` визначає
бажані алгоритми стиснення (та їх кращий порядок
використання): `zstd_stream` (псевдонім: zstd), `lz4_message`
(псевдонім: lz4) або `deflate_stream` (псевдоніми: deflate або
zlib). За замовчуванням використовується порядок (залежно від
доступності системи): lz4_message, zstd_stream, потім
deflate_stream. Наприклад, під час передачі
compression-algorithmsu003d\[lz4, zstd_stream\] використовується lz4,
якщо він доступний, інакше використовується zstd_stream.
Якщо обидва недоступні, поведінка залежить від значення стиснення,
наприклад, якщо compression u003d required, то відбудеться збій з
помилкою.

Опцію було додано у версії 8.0.22.

**Приклад #1 Приклади URI**

` mysqlx://foobarmysqlx://root@localhost?socketu003d%2Ftmp%2Fmysqld.sock%2Fmysqlx://foo:bar@localhost:33060mysqlx://foo:bar@localhost:33160?ssl-modeu003ddisabledmysqlx: //foo:bar@localhost:33260?ssl-modeu003drequiredmysqlx://foo:bar@localhost:33360?ssl-modeu003drequired&authu003dmysql41mysqlx://foo:bar@(/path/to/socket)mysqlx: //foo:bar@(/path/to/socket)?authu003dsha256_memmysqlx://foo:bar@[localhost:33060, 127.0.0.1:33061]mysqlx://foobar?ssl-cau003d(/path/ to/ca.pem)&ssl-crlu003d(/path/to/crl.pem)mysqlx://foo:bar@[localhost:33060, 127.0.0.1:33061]?ssl-modeu003ddisabledmysqlx://foo: bar@localhost:33160/?connect-timeoutu003d0mysqlx://foo:bar@localhost:33160/?connect-timeoutu003d10&compressionu003drequiredmysqlx://foo:bar@localhost:33160/?connect-timeoutu003d10&compressionu003drequired&compression -algorithmsu003d[lz4,zstd_stream]`

Для отримання додаткової інформації дивіться MySQL Shell
[» Підключення з використанням рядка
URI](https://dev.mysql.com/doc/refman/8.0/en/mysql-shell-connection-using-uri.md).

### Значення, що повертаються

Об'єкт **Session**.

### Помилки

Помилка підключення викликає [Exception](class.exception.md).

### Приклади

**Приклад #2 Приклад використання **mysql_xdevapi\getSession()****

` <?phptry { {   $session u003d mysql_xdevapi\getSession("mysqlx://user:password@host");} catch(Exception $e) {    die("Не удалося встановити з'єднання: $| );}$schemas u003d $session->getSchemas();print_r($schemas);$mysql_version u003d $session->getServerVersion();print_r($mysql_version);var_dump($collection->find("name u003d 'Alfred '")->execute()->fetchOne());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> mysql_xdevapi\Schema Object
(
[name] u003d> helloworld
)
[1] u003d> mysql_xdevapi\Schema Object
(
[name] u003d> information_schema
)
[2] u003d> mysql_xdevapi\Schema Object
(
[name] u003d> mysql
)
[3] u003d> mysql_xdevapi\Schema Object
(
[name] u003d> performance_schema
)
[4] u003d> mysql_xdevapi\Schema Object
(
[name] u003d> sys
)
)

80012

array(4) {
["_id"]u003d>
string(28) "00005ad66abf0001000400000003"
["age"]u003d>
int(42)
["job"]u003d>
string(7) "Butler"
["name"]u003d>
string(4) "Alfred"
}
