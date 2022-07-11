- [« Нові глобальні константи](migration81.constants.md)
- [Застаріла функціональність »](migration81.deprecated.md)

- [PHP Manual](index.md)
- [Міграція з PHP 8.0.x на PHP 8.1.x](migration81.md)
- Зміни, що ламають зворотну сумісність

## Зміни, що ламають зворотну сумісність

### Ядро PHP

#### Обмеження доступу до $GLOBALS

Доступ до масиву $GLOBALS тепер має ряд обмежень. Читання та
запис окремих елементів масиву, як, наприклад, `$GLOBALS['var']`,
як і раніше працює. Читання всього масиву `$GLOBALS` також
підтримується. Однак операції, пов'язані зі зміною всього
`$GLOBALS`, заборонено. Наприклад, `array_pop($GLOBALS)` призведе до
помилки.

#### Використання static-змінних в успадкованих методах

Коли метод, який використовує статичні змінні, успадковується (але не
перевизначається), успадкований метод тепер використовуватиме
статичні змінні разом із батьківським способом.

` <?phpclass A {    public static function counter() {       static $counter u003d 0; $ counter++; return $counter; }}class B extends A {}var_dump(A::counter()); //int(1)var_dump(A::counter()); //int(2)var_dump(B::counter()); // int(3), раніше було int(1)var_dump(B::counter()); // int(4), раніше було int(2)?> `

Це означає, що статичні змінні в методах тепер поводяться так
ж як статичні властивості.

#### Необов'язкові параметри, вказані перед обов'язковими параметрами

[Необов'язковий
параметр](functions.arguments.md#functions.arguments.default),
вказаний перед обов'язковими параметрами, тепер завжди обробляється
як обов'язковий, навіть при виклику з використанням [іменованих
аргументів](functions.arguments.md#functions.named-arguments). Починаючи
з PHP 8.0.0, але до PHP 8.1.0, наведений нижче код видає попередження
про старіння визначення, але успішно виконується під час виклику. Починаючи з
PHP 8.1.0, видається помилка класу
[ArgumentCountError](class.argumentcounterror.md), як це було б при
виклик з позиційними аргументами.

`<?phpfunction makeyogurt($container u003d "миску", $flavour){    return "Готуємо $container з $flavour йогуртом.
";}try{    echo makeyogurt(flavour: "малиновим");}catch (Error$$e){   echo get_class($e), ' - ', $e->getMessage(), "
";}?> `

Результат виконання цього прикладу в PHP 8.0:

Deprecated: Required parameter $flavour follows optional parameter $container
in example.php on line 3
Готуємо миску з малиновим йогуртом.

Результат виконання цього прикладу в PHP 8.1:

Deprecated: Optional parameter $container declarated before required parameter
$flavour is implicitly treated as a required parameter in example.php on line 3
ArgumentCountError - makeyogurt(): Argument #1 ($container) не пройдено

Зверніть увагу, що значення за промовчанням **`null`** може
використовуватися перед обов'язковими параметрами для вказівки [типу,
що допускає значення
null](language.types.declarations.md#language.types.declarations.nullable),
але цей параметр все одно буде обов'язковим.

#### Сумісність типу повертається значення з внутрішніми класами

Більшість неостаточних внутрішніх методів тепер потребують
перевизначальних методів для оголошення сумісного типу, що повертається,
в іншому випадку під час перевірки наслідування видається повідомлення
про старіння можливості. У випадку, якщо тип значення, що повертається, не
може бути оголошений для методу перевизначення через проблеми
сумісності версій PHP, можна додати атрибут
`#[ReturnTypeWillChange]`, щоб заглушити повідомлення про старіння.

#### Нові ключові слова

`readonly` тепер є ключовим словом. Однак його можна
використовувати як ім'я функції.

`never` тепер є зарезервованим словом, тому його не можна
використовувати для назви класу, інтерфейсу або трейту, а також
заборонено використовувати у просторах імен.

### Перехід від ресурсів до об'єктів

Декілька ресурсів ([resource](language.types.resource.md)) тепер
представлені як об'єкти (object). Перевірки значення, що повертається з
використанням функції [is_resource()](function.is-resource.md)
слід замінити перевірками на **`false`**.

- Функції [FileInfo](book.fileinfo.md) тепер приймають та повертають
об'єкти [finfo](class.finfo.md) замість ресурсів
([resource](language.types.resource.md)) `fileinfo`.

- Функції [FTP](book.ftp.md) тепер приймають та повертають об'єкти
[FTP\Connection](class.ftp-connection.md) замість ресурсів
([resource](language.types.resource.md)) `ftp`.

- Функції [IMAP](book.imap.md) тепер приймають та повертають об'єкти
[IMAP\Connection](class.imap-connection.md) замість ресурсів
([resource](language.types.resource.md)) `imap`.

- The [LDAP](book.ldap.md) тепер приймають та повертають об'єкти
[LDAP\Connection](class.ldap-connection.md) замість ресурсів
([resource](language.types.resource.md)) `ldap link`.

- Функції [LDAP](book.ldap.md) тепер приймають та повертають об'єкти
[LDAP\Result](class.ldap-result.md) замість ресурсів
([resource](language.types.resource.md)) `ldap result`.

- Функції [LDAP](book.ldap.md) тепер приймають та повертають об'єкти
[LDAP\ResultEntry](class.ldap-result-entry.md) замість ресурсів
([resource](language.types.resource.md)) `ldap result entry`.

- Функції [PgSQL](book.pgsql.md) тепер приймають та повертають
об'єкти [PgSql\Connection](class.pgsql-connection.md) замість
ресурсів ([resource](language.types.resource.md)) `pgsql link`.

- Функції [PgSQL](book.pgsql.md) тепер приймають та повертають
об'єкти [PgSql\Result](class.pgsql-result.md) замість ресурсів
([resource](language.types.resource.md)) `pgsql result`.

- Функції [PgSQL](book.pgsql.md) тепер приймають та повертають
об'єкти [PgSql\Lob](class.pgsql-lob.md) замість ресурсів
([resource](language.types.resource.md)) `pgsql large object`.

- Функції [PSpell](book.pspell.md) тепер приймають та повертають
об'єкти [PSpell\Dictionary](class.pspell-dictionary.md) замість
ресурсів ([resource](language.types.resource.md)) `pspell`.

- Функції [PSpell](book.pspell.md) тепер приймають та повертають
об'єкти [PSpell\Config](class.pspell-config.md) замість ресурсів
([resource](language.types.resource.md)) `pspell config`.

### MySQLi

Функції [mysqli_fetch_fields()](mysqli-result.fetch-fields.md) та
[mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md)
тепер завжди повертають `0` у властивості max_length. Це значення можна
обчислити, перебираючи набір результатів та вибираючи максимальну довжину.
Такий алгоритм раніше використав PHP.

Опція **`MYSQLI_STMT_ATTR_UPDATE_MAX_LENGTH`** більше не має сенсу.

Опція **`MYSQLI_STORE_RESULT_COPY_DATA`** більше не має сенсу.
Передача будь-якого значення параметр "mode" методу
[mysqli::store_result()](mysqli.store-result.md) більше не має
сенсу.

[mysqli::connect()](function.mysqli-connect.md) тепер повертає
**`true`** замість **`null`** у разі успішного виконання.

Режим обробки помилок за умовчанням було змінено з "silent" на
"завдання". Дивіться сторінку [Режими обробки помилок
MySQLi](mysqli-driver.report-mode.md) для отримання додаткових
відомостей про те, що це тягне за собою та про те, як явно встановити
цей атрибут. Щоб відновити попередню поведінку, використовуйте:
`mysqli_report(MYSQLI_REPORT_OFF);`

Класи, що розширюють [mysqli_stmt::execute()](mysqli-stmt.execute.md),
тепер має вказувати додатковий необов'язковий параметр.

### MySQLnd

INI-директива
[mysqlnd.fetch_data_copy](mysqlnd.config.md#ini.mysqlnd.fetch_data_copy)
була вилучена. Це не повинно призводити до видимих для користувача
змін у поведінці.

### OpenSSL

Секретні ключі EC тепер експортуватимуться у форматі PKCS#8, а не
у традиційному форматі, як і всі інші ключі.

[openssl_pkcs7_encrypt()](function.openssl-pkcs7-encrypt.md) та
[openssl_cms_encrypt()](function.openssl-cms-encrypt.md) тепер по
замовчуванням використовують шифр AES-128-CBC, а не RC2-40. Шифр RC2-40
вважається небезпечним і не включений за промовчанням у OpenSSL 3.

### Об'єкти даних PHP

**`PDO::ATTR_STRINGIFY_FETCHES`** тепер перетворює логічні значення
(bool) в "0" або "1". Раніше логічні значення (bool) не були
рядковими.

Виклик [PDOStatement::bindColumn()](pdostatement.bindcolumn.md) з
**`PDO::PARAM_LOB`** тепер буде постійно пов'язувати результат потоку,
якщо **`PDO::ATTR_STRINGIFY_FETCHES`** не включено. Раніше результатом
був або потік, або рядок залежно від використовуваного драйвера бази
даних та часу виконання прив'язки.

#### Драйвер MySQL

Цілі числа та числа з плаваючою комою у наборах результатів тепер
повертатимуться з використанням власних типів PHP замість рядків
(string) під час використання емульованих підготовлених операторів. Це
відповідає поведінці своїх підготовлених операторів.
Попередню поведінку можна відновити, увімкнувши опцію
**`PDO::ATTR_STRINGIFY_FETCHES`**.

#### Драйвер SQLite

Цілі числа та числа з плаваючою комою у наборах результатів тепер
повертатимуться з використанням власних типів PHP. Попереднє
поведінку можна відновити, ввімкнувши опцію
**`PDO::ATTR_STRINGIFY_FETCHES`**.

### Phar

Щоб відповідати інтерфейсу [ArrayAccess](class.arrayaccess.md),
[Phar::offsetUnset()](phar.offsetunset.md) та
[PharData::offsetUnset()](phardata.offsetunset.md) більше не
повертають логічне значення (bool).

### Стандартні функції

[version_compare()](function.version-compare.md) більше не приймає
недокументовані скорочення операторів.

Функції [htmlspecialchars()](function.mdspecialchars.md),
[htmlentities()](function.mdentities.md),
[htmlspecialchars_decode()](function.mdspecialchars-decode.md),
[html_entity_decode()](function.md-entity-decode.md) та
[get_html_translation_table()](function.get-html-translation-table.md)
тепер за промовчанням використовують `ENT_QUOTES | ENT_SUBSTITUTE` замість
**`ENT_COMPAT`**. Це означає, що тепер `` екранується в ```.
Крім того, у разі неправильного UTF-8 замість порожнього рядка буде
повернено заміщувальний символ Unicode.

[debug_zval_dump()](function.debug-zval-dump.md) тепер виводить
refcount посилальних оболонок з їх refcount, замість того, щоб просто
додавати `&` до значення. Це більш точно моделює еталонне
уявлення, починаючи з PHP 7.0.

[debug_zval_dump()](function.debug-zval-dump.md) тепер виводить
`interned` замість фіктивного refcount для інтернованих рядків та
незмінних масивів.

### Стандартна бібліотека PHP (SPL)

[SplFixedArray](class.splfixedarray.md) тепер буде закодовано в
JSON, як масив (array).
