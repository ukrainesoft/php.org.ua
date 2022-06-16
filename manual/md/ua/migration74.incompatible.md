- [« Нові глобальні константи](migration74.constants.md)
- [Застаріла функціональність »](migration74.deprecated.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.3.x на PHP 7.4.x](migration74.md)
- Зміни, що ламають зворотну сумісність

## Зміни, що ламають зворотну сумісність

### Ядро PHP

#### Масивоподібне звернення до не масивів

Спроба використати значення типу null, bool, int, float або resource
як масив (наприклад, $null["key"]`) тепер створить повідомлення.

#### Функція [get_declared_classes()](function.get-declared-classes.md)

Функція [get_declared_classes()](function.get-declared-classes.md)
більше не повертає анонімні класи, які ще були створені.

#### Ключове слово `fn`

`fn` тепер зарезервоване ключове слово. Зокрема, воно не може
більше використовувати як ім'я функції або класу. Але при цьому, цим
ключовим словом можна назвати ім'я методу чи константи у класі.

#### Тег `<?php` в кінці файлу

Використання `<?php` в кінці файлу (без завершального нового рядка)
тепер буде інтерпретуватися як тег PHP, що відкриває. Раніше він
оброблявся або як короткий тег з наступним літералом
`php` і приводив до синтаксичної помилки (при `short_open_tagu003d1`), або
сприймався як рядковий літерал `<?php` (у разі
`short_open_tagu003d0`).

#### Поточні обгортки

При використанні include/require з потоком,
[streamWrapper::stream_set_option()](streamwrapper.stream-set-option.md)
буде викликатись із параметром **`STREAM_OPTION_READ_BUFFER`**. Для
користувацьких потокових обгорток, можливо, знадобиться реалізація
методу
[streamWrapper::stream_set_option()](streamwrapper.stream-set-option.md),
щоб прибрати попередження (як правило, вистачає лише повернення
**`false`**).

#### Серіалізація

Видалено формат серіалізації `o`. Оскільки він ніколи не використовується
самим PHP, він тільки міг порушити десеріалізацію рядків, створених
вручну.

#### Константи алгоритму пароля

Ідентифікатори алгоритму хешування паролів тепер рядки, що обнулюються, а
не цілі числа.

- **`PASSWORD_DEFAULT`** раніше було цілим 1; тепер рядок
'2y' (у PHP 7.4.0, 7.4.1 та 7.4.2 було **`null`**)
- **`PASSWORD_BCRYPT`** раніше було цілим 1; тепер рядок
'2y'
- **`PASSWORD_ARGON2I`** раніше було цілим 2; тепер рядок
'argon2i'
- **`PASSWORD_ARGON2ID`** раніше було цілим 3; тепер рядок
'argon2id'

Програми, які правильно використовують константи PASSWORD_DEFAULT,
PASSWORD_BCRYPT, PASSWORD_ARGON2I та PASSWORD_ARGON2ID, будуть працювати
як і раніше.

#### Функція [htmlentities()](function.mdentities.md)

Функція [htmlentities()](function.mdentities.md) тепер буде
видавати повідомлення (замість попередження рівня E_STRICT), якщо вона
використовується з кодуванням, для якого підтримується тільки
Перетворення основних символів. У цьому випадку вона еквівалентна
використання [htmlspecialchars()](function.mdspecialchars.md).

#### Функції [fread()](function.fread.md) та [fwrite()](function.fwrite.md)

Функції [fread()](function.fread.md) та
[fwrite()](function.fwrite.md) тепер повертатимуть **`false`**,
якщо операція не вдалася. Раніше повертався порожній рядок або 0.
помилок EAGAIN/EWOULDBLOCK це не стосується.

Ці функції тепер також викликають повідомлення у разі невдалого виконання,
наприклад, при записі у файловий ресурс, призначений тільки для
читання.

### Обчислення над числами з довільною точністю BCMath

Тепер функції BCMath видаватимуть попередження, якщо передано число
з помилкою, наприклад, "32foo". Подібний аргумент, як і раніше, буде
інтерпретований як нуль.

### CURL

Спроба серіалізації класу [CURLFile](class.curlfile.md) тепер
створить виняток. Раніше виняток викидався тільки за
десеріалізації.

Використання **`CURLPIPE_HTTP1`** оголошено застарілим і не буде
підтримуватись з версії cURL 7.62.0.

Параметр `$version` функції [curl_version()](function.curl-version.md)
оголошено застарілим. Якщо передається значення, не рівне
**`CURLVERSION_NOW`** за умовчанням, буде викликано попередження, а
параметр проігноровано.

### Дата і час

Виклик [var_dump()](function.var-dump.md) або схожої налагоджувальної
функції з екземпляром [DateTime](class.datetime.md) або
[DateTimeImmutable](class.datetimeimmutable.md) більше не залишає
після виконання доступних властивостей.

Порівняння об'єктів [DateInterval](class.dateinterval.md) (с
використанням `u003du003d`, `<` і т.д.) тепер створює попередження і завжди
повертає **`false`**. Раніше всі об'єкти
[DateInterval](class.dateinterval.md) вважалися однаковими, якщо у
них був властивостей.

### Intl

Значення параметрів за замовчуванням у функціях
[idn_to_ascii()](function.idn-to-ascii.md) та
[idn_to_utf8()](function.idn-to-utf8.md) тепер
**`INTL_IDNA_VARIANT_UTS46`** замість застарілого
**`INTL_IDNA_VARIANT_2003`**.

### MySQLi

Функціональність вбудованого сервера видалено. Вона була зламана як
мінімум із PHP 7.0.

Недокументована властивість `mysqli::$stat` була видалена на користь
використання [mysqli::stat()](mysqli.stat.md).

### OpenSSL

Функція
[openssl_random_pseudo_bytes()](function.openssl-random-pseudo-bytes.md)
тепер викидатиме виняток у ситуаціях, що й функція
[random_bytes()](function.random-bytes.md). Зокрема, викидається
[Error](class.error.md), якщо кількість запрошених байтів менша або
одно нулю. Виняток [Exception](class.exception.md) викидається,
якщо не отримано достатньої випадковості. Аргумент `$crypto_strong`
гарантовано завжди дорівнюватиме **`true`**, якщо функція нічого не
викидає, тому явно перевіряти його не потрібно.

### Регулярні вирази (сумісні Perl)

При використанні прапора **`PREG_UNMATCHED_AS_NULL`**, завершальні
несупадні підмаски тепер матимуть значення **`null`** (або
`[null, -1]`, якщо увімкнено збереження позиції підмаски). Це означає,
що розмір $matches завжди буде однаковим.

### Об'єкти даних PHP (PDO)

Спроба серіалізувати екземпляр [PDO](class.pdo.md) або
[PDOStatement](class.pdostatement.md) тепер створить
[Exception](class.exception.md), а не
[PDOException](class.pdoexception.md), за аналогією з іншими
внутрішніми класами, що не підтримують серіалізацію.

### Reflection

Об'єкти Reflection тепер створюють виняток, якщо спробувати їх
серіалізувати. Серіалізація об'єктів Reflection ніколи не
підтримувалася та призводила до пошкодження об'єктів Reflection. Зараз це
було явно заборонено.

Змінилися значення констант класів
[ReflectionClassConstant](class.reflectionclassconstant.md),
[ReflectionMethod](class.reflectionmethod.md) та
[ReflectionProperty](class.reflectionproperty.md).

### Стандартна бібліотека PHP (SPL)

Виклик [get_object_vars()](function.get-object-vars.md) з екземпляром
[ArrayObject](class.arrayobject.md) тепер завжди буде повертати
властивості самого [ArrayObject](class.arrayobject.md) (або підкласу).
Раніше він повертав значення упакованого масиву/об'єкта, якщо не був
вказаний прапор **`ArrayObject::STD_PROP_LIST`**.

Інші порушені операції:

- **ReflectionObject::getProperties()**
- [reset()](function.reset.md), [current()](function.current.md)
і т.д. Використовуйте натомість методи
[Iterator](class.iterator.md).
- Ймовірно, решта працює з властивостями об'єкта при доступі
у вигляді списку, наприклад [array_walk()](function.array-walk.md).

На приведення типу `(array)` ці зміни не вплинуть. Вони, як і раніше
повертають або запакований масив, або властивості
[ArrayObject](class.arrayobject.md), залежно від того,
чи використовується прапор **`ArrayObject::STD_PROP_LIST`**.

Метод
[SplPriorityQueue::setExtractFlags()](splpriorityqueue.setextractflags.md)
викине виняток, якщо передано нуль. Раніше це призводило до
відловлюваної фатальної помилки при наступній операції вилучення.

[ArrayObject](class.arrayobject.md),
[ArrayIterator](class.arrayiterator.md),
[SplDoublyLinkedList](class.spldoublylinkedlist.md) та
[SplObjectStorage](class.splobjectstorage.md) тепер підтримують
`__serialize()` та `__unserialize()` на додаток до інтерфейсу
[Serializable](class.serializable.md). Тому тепер створені в
старіших версіях PHP серіалізовані дані, все ще можуть бути
неправильно оброблені. Проте нові створені серіалізовані дані у PHP
7.4, не сприйматимуться у старіших версіях.

### Лексер (Tokenizer)

Функція [token_get_all()](function.token-get-all.md) тепер відобразить
позначку **`T_BAD_CHARACTER`** у разі виявлення непередбачених символів
у потоці міток.

### Вхідні Cookies

Починаючи з PHP 7.4.11 *імена* вхідних cookie більше не декодуються з
URL-закодованого рядка з міркувань безпеки.
