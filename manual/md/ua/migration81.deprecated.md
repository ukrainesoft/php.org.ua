- [« Зміни, що ламають зворотну
сумісність](migration81.incompatible.md)
- [Інші зміни »](migration81.other-changes.md)

- [PHP Manual](index.md)
- [Міграція з PHP 8.0.x на PHP 8.1.x](migration81.md)
- Застаріла функціональність

## Застаріла функціональність

### Ядро PHP

#### Реалізація [Serializable](class.serializable.md) без **\_\_serialize()** та **\_\_unserialize()**

Якщо не потрібна підтримка версій PHP менше 7.4, повинні бути
реалізовані лише ці два магічні методи, інакше потрібно реалізувати
як методи інтерфейсу, і магічні методи.

#### Передача **`null`** параметрам вбудованих функцій, що не допускають значення NULL

Не рекомендується передавати значення NULL скалярним параметрам
вбудованих функцій. В іншому випадку тепер буде викликане повідомлення.
Таке обмеження було запроваджено, щоб краще відповідати роботі
функцій користувача, де параметри, що допускають значення NULL,
повинні бути при цьому явно позначені.

`<?phpvar_dump(str_contains("foobar", null));// Deprecated: Passing null to parameter #2 ($needle) of type string//          

#### Неявна несумісність перетворення float до int

Тепер потрібно уникати неявного перетворення числа з плаваючою точкою
(float) до цілого числа (int), що призводить до втрати точності. Це
впливає на ключі масиву (array), оголошення цілісних (int) типів
примусовому режимі та операторів, що працюють з цілими числами (int).

` <?php$a u003d [];$a[15.5]; // застаріло, оскільки значення ключа втрачає компонент 0.5$a[15.0]; // працює, так як 15.0 u003du003d 15?> `

#### Виклик static-елемента в трейтах

Виклик static-методу або доступ до static-властивості безпосередньо в
Треть застарілий. До статичних методів та властивостей слід звертатися
лише у класі, який використовує трейт.

#### Повернення не масиву (array) з **\_\_sleep()**

Значення, що повертається
[\_\_sleep()](language.oop5.magic.md#object.sleep), що не є
масивом, тепер згенерує повідомлення.

#### Повернення значення за посиланням з функції void

` <?phpfunction &test(): void {}?> `

Така функція збиває з пантелику, тому тепер видасть наступний
**`E_NOTICE`**:
`Only variable references should be returned by reference` (За посиланням
повинні повертатися лише посилання на змінні).

#### Автовівіфікація з **`false`**

Автовівіфікація - це процес створення нового масиву (array) при
додавання нового значення. Автовівіфікація заборонена для скалярних
значень, проте **`false`** був винятком. Тепер така поведінка
застаріло.

` <?php$arr u003d false;$arr[] u003d 2; // застаріло?

> **Примітка**:
>
> Автовівіфікація з **`null`** та невизначеного значення як і раніше
> дозволено:
>
> ` <?php// З невизначеного значення$arr[] u003d 'якесь значення';$arr['doesNotExist'][] u003d 2;// З null$arr u003d null;$arr[] u003d ?> `

### ctype

#### Перевірка нерядкових аргументів

Передача нерядкового аргументу застаріла. У майбутньому аргумент буде
інтерпретуватись як рядок замість коду ASCII. Залежно від
передбачуваної поведінки аргумент має бути приведений до рядка
(string) явно або через виклик [chr()](function.chr.md). Це
зміна відноситься до всіх функцій `ctype_*()`.

### Date

Функції [date_sunrise()](function.date-sunrise.md) та
[date_sunset()](function.date-sunset.md) застаріли на користь
[date_sun_info()](function.date-sun-info.md).

Функція [strptime()](function.strptime.md) застаріла. Замість неї
використовуйте
[date_parse_from_format()](function.date-parse-from-format.md) (для
синтаксичного аналізу, що не залежить від мовного стандарту) або
[IntlDateFormatter::parse()](intldateformatter.parse.md) (для
синтаксичного аналізу, що залежить від мовного стандарту).

Функція [strftime()](function.strftime.md) та
[gmstrftime()](function.gmstrftime.md) застаріли. Використовуйте замість
їх функцію [date()](function.date.md) (для форматування, не
залежить від мовного стандарту) або метод
[IntlDateFormatter::format()](intldateformatter.format.md) (для
форматування, що залежить від мовного стандарту).

### Фільтр

Фільтри **`FILTER_SANITIZE_STRING`** та **`FILTER_SANITIZE_STRIPPED`**
застаріли.

INI-директива
[filter.default](filter.configuration.md#ini.filter.default) застаріла.

### GD

Параметр `num_points` функції
[imagepolygon()](function.imagepolygon.md),
[imageopenpolygon()](function.imageopenpolygon.md) та
[imagefilledpolygon()](function.imagefilledpolygon.md) застарів.

### Хешування

Функції [mhash()](function.mhash.md),
[mhash_keygen_s2k()](function.mhash-keygen-s2k.md),
[mhash_count()](function.mhash-count.md),
[mhash_get_block_size()](function.mhash-get-block-size.md) та
[mhash_get_hash_name()](function.mhash-get-hash-name.md) застаріли.
Замість них використовуйте функції `hash_*()`.

### IMAP

Константа **`NIL`** застаріла. Замість неї використовуйте `0`.

### Intl

Виклик [IntlCalendar::roll()](intlcalendar.roll.md) з логічним
значенням (bool) застарів. Використовуйте `1` та `-1` замість **`true`** та
**`false`** відповідно.

### Багатобайтові рядки

Виклик [mb_check_encoding()](function.mb-check-encoding.md) без
будь-яких аргументів застарів.

### MySQLi

Властивість mysqli_driver::$driver_version застаріла. Воно було неактуальним,
використовуйте натомість **`PHP_VERSION_ID`**.

Виклик методу [mysqli::get_client_info()](mysqli.get-client-info.md)
або [mysqli_get_client_info()](mysqli.get-client-info.md) з аргументом
`mysqli` застарів. Використовуйте
[mysqli_get_client_info()](mysqli.get-client-info.md) без будь-яких
аргументів, щоб отримати інформацію щодо версії клієнтської бібліотеки.

Метод [mysqli::init()](mysqli.init.md) застарів. Замініть дзвінки
**parent::init()** на **parent::\_\_construct()**.

### OCI8

INI-директива
[oci8.old_oci_close_semantics](oci8.configuration.md#ini.oci8.old-oci-close-semantics)
застаріла.

### ODBC

Функція [odbc_result_all()](function.odbc-result-all.md) застаріла.

### PDO

Режим вибірки **`PDO::FETCH_SERIALIZE`** застарів.

### PgSQL

Функціям `pgsql_*()` тепер потрібно передавати параметр connection.

### SOAP

Параметр `ssl_method` в
[SoapClient::\_\_construct()](soapclient.construct.md) застарів у
користь параметрів контексту потоку SSL.

### Стандартні функції

Виклик [key()](function.key.md), [current()](function.current.md),
[next()](function.next.md), [prev()](function.prev.md),
[reset()](function.reset.md) або [end()](function.end.md) з
об'єктами (object) застарів. Використовуйте ці функції на об'єкті через
[get_mangled_object_vars()](function.get-mangled-object-vars.md), або
через [ArrayIterator](class.arrayiterator.md).

INI-директива
[auto_detect_line_endings](filesystem.configuration.md#ini.auto-detect-line-endings)
застаріла. При необхідності обробіть розриви рядків.вручну.

Константи **`FILE_BINARY`** та **`FILE_TEXT`** застаріли. Вони ніколи не
мали сенсу.
