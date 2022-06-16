- [« Міграція з PHP 7.1.x на PHP 7.2.x](migration72.md)
- [Нові функції »](migration72.new-functions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.1.x на PHP 7.2.x](migration72.md)
-   Нові можливості

## Нові можливості

### Новий тип object

Було введено новий тип, object, який можна використовувати в
переданих параметрах (контраваріантність) і значеннях, що повертаються
(Ковариантність) для будь-яких об'єктів.

`<?phpfunction test(object $obj) : object{   return new SplQueue();}test(new StdClass()); `

### Завантаження модуля на ім'я

Для модулів, що підвантажуються, більше не потрібно вказувати розширення файлу
(`.so` для Unix або `.dll` для Windows). Це допускається у файлі
php.ini, а також функції [dl()](function.dl.md).

### Дозволено перевизначення абстрактних методів

Абстрактні методи тепер можна перевизначити, у випадках коли
абстрактний клас успадковується з іншого абстрактного класу.

` <?phpabstract class A{    abstract function test(string $s);}abstract class B extends A{    // переопределён - всё ещё сохраняя контравариантность для параметров и ковариантность для возвращаемых значений    abstract function test($s) : int;} `

### [Sodium](book.sodium.md) тепер є основним модулем

Сучасна криптографічна бібліотека Sodium тепер стала основною
модулем PHP (як модуль sodium).

Дивіться розділ [Sodium](book.sodium.md) для отримання повної
інформації.

### Додано хешування пароля за допомогою Argon2

Було додано алгоритм Argon2 в [API хешування
пароля](book.password.md), де доступні такі константи:

- **`PASSWORD_ARGON2I`**
- **`PASSWORD_ARGON2_DEFAULT_MEMORY_COST`**
- **`PASSWORD_ARGON2_DEFAULT_TIME_COST`**
- **`PASSWORD_ARGON2_DEFAULT_THREADS`**

### Розширені типи рядків для [PDO](book.pdo.md)

Тип рядка PDO було розширено для підтримки національних наборів символів
при емуляції запитів, що готуються. Додані нові константи:

- **`PDO::PARAM_STR_NATL`**
- **`PDO::PARAM_STR_CHAR`**
- **`PDO::ATTR_DEFAULT_STR_PARAM`**

Ці константи використовують у побітовому `OR` з константою
**`PDO::PARAM_STR`**:

` <?php$db->quote('über', PDO::PARAM_STR | PDO::PARAM_STR_NATL); `

### Додаткова налагоджувальна інформація при емуляції запитів, що готуються в [PDO](book.pdo.md)

Метод
[PDOStatement::debugDumpParams()](pdostatement.debugdumpparams.md) був
оновлено, щоб увімкнути SQL до відправки в БД, де буде показаний повний
необроблений запит (включаючи замінені параметри з їх пов'язаними
значеннями). Це було додано для допомоги у налагодженні емуляції
підготовлюваних запитів (і тому це буде доступно лише за
включеної емуляції підготовлюваних запитів).

### Підтримка розширених операцій на [LDAP](book.ldap.md)

Була додана підтримка EXOP модуль LDAP. Стали доступні такі
функції та константи:

- [ldap_parse_exop()](function.ldap-parse-exop.md)
- [ldap_exop()](function.ldap-exop.md)
- [ldap_exop_passwd()](function.ldap-exop-passwd.md)
- [ldap_exop_whoami()](function.ldap-exop-whoami.md)
- **`LDAP_EXOP_START_TLS`**
- **`LDAP_EXOP_MODIFY_PASSWD`**
- **`LDAP_EXOP_REFRESH`**
- **`LDAP_EXOP_WHO_AM_I`**
- **`LDAP_EXOP_TURN`**

### Інформація про адресу в модулі [сокетів](book.sockets.md)

Модуль сокетів тепер має можливість шукати адресну інформацію, а
також підключатися до неї, зв'язуватися з нею та пояснювати її. Для цього
були додані такі чотири функції:

- [socket_addrinfo_lookup()](function.socket-addrinfo-lookup.md)
- [socket_addrinfo_connect()](function.socket-addrinfo-connect.md)
- [socket_addrinfo_bind()](function.socket-addrinfo-bind.md)
- [socket_addrinfo_explain()](function.socket-addrinfo-explain.md)

### Розширення типу параметра

Типи параметрів із перевизначених методів та реалізацій інтерфейсів
тепер можуть бути опущені. Це все ще відповідає LSP, оскільки
параметри типів контраваріантні.

`<?phpinterface A{    public function Test(array $input);}class B implements A{    public function Test($input){} // тип параметра не вказаний 

### Дозволена завершальна кома для згрупованих просторів імен

Завершальна кома тепер може бути додана до синтаксису угруповання
use, що з'явився у PHP 7.0.

`<?phpuse Foo\Bar\{    Foo,    Bar,   Baz,}; `

### Підтримка [proc_nice()](function.proc-nice.md) для Windows

Функція [proc_nice()](function.proc-nice.md) тепер підтримується в
Windows.

### Підтримка порядку байт у [pack()](function.pack.md) та [unpack()](function.unpack.md)

Функції [pack()](function.pack.md) та [unpack()](function.unpack.md)
тепер підтримують типи float та double як у прямому, так і у зворотному
порядку байт.

### Поліпшення в модулі [EXIF] (book.exif.md)

Модуль EXIF оновлено для підтримки більшої кількості форматів. Це
означає, що специфічні теги правильно обробляються при розборі
зображень функцією [exif_read_data()](function.exif-read-data.md).
Нові підтримувані формати:

- Samsung
- DJI
- Panasonic
- Sony
- Pentax
- Minolta
- Sigma/Foveon
- AGFA
- Kyocera
- Ricoh
- Epson

Функції [exif_read_data()](function.exif-read-data.md) та
[exif_thumbnail()](function.exif-thumbnail.md) тепер приймають потоки
як свої перші аргументи.

### Нова функціональність у [PCRE](book.pcre.md)

- Доданий модифікатор `J` для встановлення PCRE_DUPNAMES.

### [SQLite3](book.sqlite3.md) дозволяє записувати BLOB

Тепер [SQLite3::openBlob()](sqlite3.openblob.md) вміє відкривати поля
типу BLOB для запису. Раніше для таких полів було доступно лише
читання.

### Зворотні дзвінки [Oracle OCI8](book.oci8.md) Transparent Application Failover

Додано підтримку [зворотних викликів Oracle Database Transparent
Application Failover (TAF)] (oci8.taf.md). TAF дозволяє програмам
PHP OCI8 автоматично перепідключається до попередньо
конфігурованій базі даних у разі порушення з'єднання. Нова підтримка
зворотного виклику TAF дозволяє програмам відстежувати та контролювати
перепідключення під час відновлення.

### Поліпшення в модулі [ZIP](book.zip.md)

Додана підтримка читання та запису зашифрованих архівів (потрібна
libzip 1.2.0).

Клас [ZipArchive](class.ziparchive.md) тепер реалізує інтерфейс
[Countable](class.countable.md).

Потік `zip://` тепер приймає контекстну опцію `password`.
