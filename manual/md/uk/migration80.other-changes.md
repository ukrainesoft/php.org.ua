- [« Функціональність, оголошена застарілою в PHP
8.0.x](migration80.deprecated.md)
- [Міграція з PHP 7.3.x на PHP 7.4.x »](migration74.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.4.x на PHP 8.0.x](migration80.md)
- Інші зміни

## Інші зміни

### Зміни в модулях SAPI

#### Apache2Handler

Модуль PHP був перейменований з `php7_module` на `php_module`.

### Змінені функції

#### Reflection

Результати
[ReflectionClass::getConstants()](reflectionclass.getconstants.md) та
[ReflectionClass::getReflectionConstants()](reflectionclass.getreflectionconstants.md)
тепер можна фільтрувати за допомогою нового параметра `filter`. Додані
три нові константи для роботи з ним:

- **`ReflectionClassConstant::IS_PUBLIC`**
- **`ReflectionClassConstant::IS_PROTECTED`**
- **`ReflectionClassConstant::IS_PRIVATE`**

#### Стандартні функції

Математичні функції [abs()](function.abs.md),
[ceil()](function.ceil.md), [floor()](function.floor.md) та
[round()](function.round.md) тепер правильно враховують [оголошення
`strict_type`](language.types.declarations.md#language.types.declarations.strict).
Раніше вони наводили перший аргумент до числового значення навіть у режимі
Суворої типізації.

#### Zip

- Методи [ZipArchive::addGlob()](ziparchive.addglob.md) та
[ZipArchive::addPattern()](ziparchive.addpattern.md) приймають
нові значення в масиві параметрів `options`:

- `flags`
- `comp_method`
- `comp_flags`
- `env_method`
- `enc_password`

- У методів [ZipArchive::addEmptyDir()](ziparchive.addemptydir.md),
[ZipArchive::addFile()](ziparchive.addfile.md) та
[ZipArchive::addFromString()](ziparchive.addfromstring.md)
додано новий параметр `flags`. За допомогою нього можна керувати
кодуванням імені (**`ZipArchive::FL_ENC_*`**) та заміною запису
(**`ZipArchive::FL_OVERWRITE`**).

- [ZipArchive::extractTo()](ziparchive.extractto.md) тепер
відновлює час модифікації файлу.

### Інші зміни в модулях

#### CURL

- Для роботи модуля CURL тепер потрібно як мінімум libcurl 7.29.0.

- Застарілий параметр `version` функції
[curl_version()](function.curl-version.md) було видалено.

#### Дата і час

[DatePeriod](class.dateperiod.md) тепер реалізує
[IteratorAggregate](class.iteratoraggregate.md) (замість
[Traversable](class.traversable.md)).

#### DOM

[DOMNamedNodeMap](class.domnamednodemap.md) та
[DOMNodeList](class.domnodelist.md) тепер реалізують
[IteratorAggregate](class.iteratoraggregate.md) (замість
[Traversable](class.traversable.md)).

#### Intl

[IntlBreakIterator](class.intlbreakiterator.md) та
[ResourceBundle](class.resourcebundle.md) тепер реалізують
[IteratorAggregate](class.iteratoraggregate.md) (замість
[Traversable](class.traversable.md)).

#### Enchant

Модуль enchant тепер використовує libenchant-2 за замовчуванням, якщо
можливо. libenchant версії 1 все ще підтримується, але застарів і може
бути видалено у майбутньому.

#### GD

- Параметр `num_points` для
[imagepolygon()](function.imagepolygon.md),
[imageopenpolygon()](function.imageopenpolygon.md) та
[imagefilledpolygon()](function.imagefilledpolygon.md) тепер
є необов'язковим, тобто ці функції можуть бути викликані з
за допомогою трьох або чотирьох параметрів. Якщо параметр опущено, він
розраховується як `count($points)/2`.

- Додана функція
[imagegetinterpolation()](function.imagegetinterpolation.md) для
отримання поточного способу інтерполяції.

#### JSON

Модуль JSON більше не можна відключити, тепер він невід'ємний
частиною будь-якого складання PHP, як і модуль date.

#### MBString

Таблиці даних Unicode оновлено до версії 13.0.0.

#### PDO

[PDOStatement](class.pdostatement.md) тепер реалізує
[IteratorAggregate](class.iteratoraggregate.md) (замість
[Traversable](class.traversable.md)).

#### LibXML

Мінімальна необхідна версія libxml – 2.9.0. Це означає, що
завантаження зовнішніх об'єктів за замовчуванням відключено і тому не
потрібні додаткові кроки для захисту від XXE-атак.

#### MySQLi / PDO MySQL

- Якщо mysqlnd не використовується (це варіант за замовчуванням та
рекомендується), мінімальна підтримувана версія libmysqlclient
тепер 5.5.

- [mysqli_result](class.mysqli-result.md) тепер реалізує
[IteratorAggregate](class.iteratoraggregate.md) (замість
[Traversable](class.traversable.md)).

#### PGSQL / PDO PGSQL

Для модулів PGSQL та PDO PGSQL тепер потрібно як мінімум libpq 9.1.

#### Readline

Виклик
[readline_completion_function()](function.readline-completion-function.md)
перед запуском інтерактивної підказки (наприклад, в
[auto_prepend_file](ini.core.md#ini.auto-prepend-file)) тепер
скасовує функцію завершення інтерактивної підказки за промовчанням. Раніше
[readline_completion_function()](function.readline-completion-function.md)
працювала лише під час виклику після запуску інтерактивної підказки.

#### SimpleXML

[SimpleXMLElement](class.simplexmlelement.md) тепер реалізує
[RecursiveIterator](class.recursiveiterator.md) і включає в себе
функціонал [SimpleXMLIterator](class.simplexmliterator.md).
[SimpleXMLIterator](class.simplexmliterator.md) є порожнім
розширенням [SimpleXMLElement](class.simplexmlelement.md).

### Зміни в обробці INI-файлів

- com.dotnet_version – це нова INI-директива для вибору версії
платформи .NET, яка використовуватиметься для об'єктів
[Dotnet] (class.dotnet.md).

- zend.exception_string_param_max_len – це нова INI-директива для
встановлення максимальної довжини рядка в аргументі рядковий
трасування стека.

### EBCDIC

Цілі EBCDIC більше не підтримуються, хоча малоймовірно, що вони досі
пір працювали.

### Продуктивність

- Компілятор Just-In-Time (JIT) був доданий у модуль opcache.

- [array_slice()](function.array-slice.md) у масиві без відстані
між елементами більше не скануватиме весь масив, щоб
знайти початкове усунення. Це може значно скоротити час
виконання функції з великими зсувами та малою довжиною.

- [strtolower()](function.strtolower.md) тепер використовує
реалізацію SIMD в локалі ``C'`````LC_CTYPE`** (яка використовується
за замовчуванням).
