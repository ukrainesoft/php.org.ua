- [« Нова функціональність](migration80.new-features.md)
- [Функціональність, оголошена застарілою в PHP 8.0.x
»](migration80.deprecated.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.4.x на PHP 8.0.x](migration80.md)
- Зміни, що ламають зворотну сумісність

## Зміни, що ламають зворотну сумісність

### Ядро PHP

#### Порівняння рядків з числами

Не суворі порівняння чисел і нечислових рядків тепер працюють як
перетворення числа на рядок з наступним порівнянням рядків. Порівняння
чисел та числових рядків працює, як і раніше. Зокрема, це
означає, що `0 u003du003d "not-a-number" тепер видасть false.

| Порівняння | До | Після |
|-----------------|------------|-------------|
| `0 u003du003d "0"` | **`true`** | **`true`** |
| `0 u003du003d "0.0"` | **`true`** | **`true`** |
| `0 u003du003d "foo"` | **`true`** | **`false`** |
| `0 u003du003d """ | **`true`** | **`false`** |
| `42 u003du003d "42"` | **`true`** | **`true`** |
| `42 u003du003d "42foo"` | **`true`** | **`false`** |

#### Інші зміни, що ламають зворотну сумісність

- `match` тепер зарезервоване ключове слово.

- `mixed` тепер зарезервоване слово, тому його не можна
використовувати для назви класу, інтерфейсу або риси, а також
заборонено використовувати у просторах імен.

- Помилки тверджень (assertions) тепер викидаються за замовчуванням.
Якщо краще стара поведінка, `assert.exceptionu003d0` можна
встановити в INI-налаштуваннях.

- Методи з тим самим ім'ям, як і клас, більше не інтерпретуються як
конструктори. Натомість слід використовувати метод
[\_\_construct()](language.oop5.decon.md#object.construct).

- Можливість статичного виклику нестатичних методів видалена. Таким
Таким чином, [is_callable()](function.is-callable.md) завершиться
помилкою під час перевірки нестатичного методу з ім'ям класу
(Необхідно перевіряти з екземпляром об'єкта).

- Приведення типів `(real)` та `(unset)` видалені.

- INI-директива
[track_errors](errorfunc.configuration.md#ini.track-errors)
видалено. Це означає, що php_errormsg більше не актуальний. Замість
нього можна використовувати функцію
[error_get_last()](function.error-get-last.md).

- Можливість визначати константи без урахування регістру було видалено.
Третій аргумент [define()](function.define.md) більше не може
бути **`true`**.

- Можливість вказувати автозавантажувач за допомогою функції
[\_\_autoload()](function.autoload.md) було видалено. Замість цього
слід використовувати
[spl_autoload_register()](function.spl-autoload-register.md).

- Аргумент `errcontext` більше не передається в користувацькі
обробники помилок, заданих за допомогою
[set_error_handler()](function.set-error-handler.md).

- [create_function()](function.create-function.md) було видалено.
Замість неї можна використовувати анонімні функції.

- [each()](function.each.md) було видалено. Замість неї можна
використовувати [foreach](control-structures.foreach.md) або
[ArrayIterator](class.arrayiterator.md).

- Можливість відв'язати `this` від замикань, які були створені з
методу з використанням
[Closure::fromCallable()](closure.fromcallable.md) або
[ReflectionMethod::getClosure()](reflectionmethod.getclosure.md),
була вилучена.

- Можливість відв'язати `this` від належних замикань, що містять
використання `this`, також було видалено.

-   Можливість використання
[array_key_exists()](function.array-key-exists.md) з об'єктами
була вилучена. Натомість можна використовувати
[isset()](function.isset.md) або
[property_exists()](function.property-exists.md).

- Робота параметра `key` у функції
[array_key_exists()](function.array-key-exists.md) тепер
наведена відповідно до [isset()](function.isset.md) та звичайним
доступом до масиву. Усі типи ключів тепер використовують звичайне
приведення типів, масив/об'єкт до ключа призведе до викидання
[TypeError](class.typeerror.md).

- Будь-який масив, у якого як перший числовий ключ вказано
число n, використовуватиме n+1 для свого наступного неявного
ключа, навіть якщо n негативно.

- рівень error_reporting за замовчуванням тепер **`E_ALL`**. Раніше він
виключав **`E_NOTICE`** та **`E_DEPRECATED`**.

- [display_startup_errors](errorfunc.configuration.md#ini.display-startup-errors)
тепер увімкнено за замовчуванням.

- Використання parent усередині класу, у якого немає батька, тепер
призведе до фатальної помилки під час компіляції.

- Оператор `@` більше не пригнічує фатальних помилок (**`E_ERROR`**,
**`E_CORE_ERROR`**, **`E_COMPILE_ERROR`**, **`E_USER_ERROR`**,
**`E_RECOVERABLE_ERROR`**, **`E_PARSE`**). Оброблювачі помилок,
які очікують, що error_reporting буде мати значення `0` при
використання оператора `@`, повинні робити такі перевірки через
бітову маску:

` <?php// Замініть цеfunction my_error_handler($err_no, $err_msg, $filename, $linenum) {    if (error_reporting() u003du003d 0) {    | }    // ...}// На цеfunction my_error_handler($err_no, $err_msg, $filename, $linenum) {    if (!(error_reporting())            }    // ...}?> `

Крім цього, обов'язково слід приховати відображення повідомлень про
помилки у виробничому середовищі, які можуть призвести до витоку
інформації. Перевірте, що 'display_errorsu003dOff' використовується разом
з увімкненим записом журналу помилок.

- `#[` більше не інтерпретується як початок коментаря, оскільки цей
синтаксис використовується для атрибутів.

- Помилки успадкування через несумісні сигнатури методів (порушення
LSP) завжди викликають фатальну помилку. Раніше в деяких
випадках видавалося попередження.

- Пріоритет оператора конкатенації змінився щодо зрушень
бітів та додавання, а також віднімання.

`<?phpecho "Сума: " . $a + $b;// раніше інтерпретувалося як:echo ("Сума: " . $a) + $b;// зараз інтерпретується як:echo "Сума:" . ($a + $b);?> `

- Аргументи зі значенням за замовчуванням, що перетворюється на
**`null`** під час виконання, більше не будуть неявно помічати тип
аргумент як nullable. Натомість має використовуватися або
явний тип, що припускає значення null, або явне значення **`null`**
за замовчуванням.

` <?php// Замініть цей код:function test(int $arg u003d CONST_RESOLVING_TO_NULL) {}// На цей:function test(?int $arg u003d CONST_RESOLVING_TO_NULL)  int $arg u003d null) {}?> `

- Ряд попереджень перетворено на виключення
[Error](class.error.md):

- Спроба запису як неіснуючого об'єкта. Раніше це
неявно створювало об'єкт stdClass у разі null, false та порожніх
рядків.
- Спроба додати елемент до масиву, для якого вже використовується
ключ PHP_INT_MAX.
- Спроба використовувати неприпустимий тип (масив або об'єкт)
як ключ масиву або зміщення рядка.
- Спроба записати в індекс масиву скалярне значення.
- Спроба розпакувати значення, яке не є масивом/Traversable.
- Спроба отримати доступ до некваліфікованих константів,
які не визначено. Раніше некваліфікований доступ до
константам приводив до попередження та інтерпретувався як
рядок.

Ряд повідомлень перетворено на попередження:

- Спроба прочитати невизначену змінну.
- Спроба прочитати невизначену властивість.
- Спроба прочитати невизначений ключ масиву.
- Спроба прочитати властивість необ'єкта.
- Спроба отримати доступ до індексу масиву не масиву.
- Спроба перетворити масив у рядок.
- Спроба використовувати ресурс як ключ масиву.
- Спроба використовувати null, логічне значення чи число з
плаваючою точкою як рядковий зсув.
- Спроба прочитати зсув рядка за межами допустимого
Межі.
- Спроба присвоїти зсуву рядка порожній рядок.

- При спробі призначити кілька байтів усунення рядка тепер буде
видано попередження.

- Несподівані символи у вихідних файлах (наприклад, байти NUL за
межами рядків) тепер призводитимуть до виключення
[ParseError](class.parseerror.md) замість попередження при
компіляції.

- Неперехоплені винятки тепер проходять процедуру чистого
завершення", це означає, що після неперехопленого виключення
викликатимуться деструктори.

- Фатальна помилка часу компіляції "Only variables can be passed by
reference" була відкладена до часу виконання та перетворена на
виняток [Error](class.error.md) "Argument cannot be passed by
reference".

- Деякі повідомлення "Only variables can be passed by reference"
були перетворені на виключення "Argument cannot be passed by
reference".

– Згенероване ім'я для анонімних класів змінилося. Тепер він
буде включати ім'я першого з батьків або інтерфейсу:

` <?phpnew class extends ParentClass {};// -> ParentClass@anonymousnew class implements FirstInterface, SecondInterface {};// -> FirstInterface@anonymousnew class {};

За новими іменами, як і раніше, слідуватиме NUL-байт і унікальний
суфікс.

- Посилання на неабсолютні трейти методів адаптації псевдонімів
трейтів тепер мають бути однозначними:

`<?phpclass X {    use T1, T2 {        func as otherFunc; }   function func() {}}?> `

Якщо існують і `T1::func()`, і `T2::func()`, цей код раніше
приймався без повідомлення, і передбачалося, що func посилається на
`T1::func`. Тепер замість цього буде викинуто фатальну помилку:
необхідно явно вказати `T1::func` або `T2::func`.

- Сигнатура абстрактних методів, визначених у трейтах, тепер
перевіряється за методом реалізуючого класу:

` <?phptrait MyTrait {    abstract private function neededByTrait(): string;}class MyClass {    use MyTrait; // Помилка через невідповідність типу повертається значення. private function neededByTrait(): int { return 42; }}?> `

- Відключені функції тепер обробляються так само, як
неіснуючі функції. Виклик вимкненої функції повідомить, що ні
такої функції, це дає можливість перевизначити відключену
функцію.

- Оболонки потоку `data://` більше не доступні для запису, що
відповідає документованій поведінці.

- Арифметичні та побітові оператори `+`, `-`, `*`, `/`, `**`, `%`,
`<<`, `>>`, `&`, `|`, `^`, `~`, `++`, `--` тепер будуть
послідовно видавати [TypeError](class.typeerror.md), коли
одним із операндів є масив (array), ресурс
([resource](language.types.resource.md)) або не перевантажений
об'єкт (об'єкт). Єдиним винятком із цього правила є
операція злиття масивів `+`, яка, як і раніше, підтримується.

- Приведення з плаваючою точкою в рядок тепер завжди вестиме
незалежно від локалі.

`<?phpsetlocale(LC_ALL, "de_DE");// Раніше:  3,14// Тепер: 3.14?> `

Дивіться [printf()](function.printf.md),
[number_format()](function.number-format.md) та
**NumberFormatter()** для отримання інформації про способи налаштування
форматування чисел.

- Видалено підтримку застарілих фігурних дужок для доступу до зсуву.

` <?php// Замість:$array{0};$array{"key"};// Використовуйте:$array[0];$array["key"];?> `

- Застосування модифікатора final до закритого методу тепер призведе до
попередження, якщо цей метод не є конструктором.

- Якщо у конструкторі об'єкта використовується
[exit()](function.exit.md), деструктор об'єкта більше не буде
викликатись. Це відповідає поведінці, коли конструктор
викидає виняток.

- Імена у просторі імен більше не можуть містити прогалини:
`Foo\Bar` розпізнаватиметься як ім'я в просторі імен,
`Foo\Bar` - ні. І навпаки, зарезервовані ключові слова
тепер дозволені як сегменти простору імен, що також
може змінити інтерпретацію коду: `new\x` тепер збігається з
`constant('new\x')`, але не з `new\x()`.

- Для вкладених тернарних операторів тепер потрібна явна вказівка
дужок.

- [debug_backtrace()](function.debug-backtrace.md) та
[Exception::getTrace()](exception.gettrace.md) більше не будуть
надавати посилання на аргументи. Неможливо змінити аргументи
функції через трасування.

- Обробка числових рядків була змінена, щоб зробити її більш
зрозумілою і менш схильною до помилок. Завершальні прогалини тепер
дозволені у числових рядках для узгодженості з тим, як
обробляються початкові прогалини. В основному це впливає на:

- Функцію [is_numeric()](function.is-numeric.md)
- Порівняння рядків з рядками
- Оголошення типів
- Операції збільшення та зменшення

Поняття "провідний числовий рядок" в основному було відкинуто; випадки,
коли це залишилося, існують для полегшення міграції. Рядки,
які видавали **`E_NOTICE`** "A non well-formed numeric value
encountered", тепер будуть видавати **`E_WARNING`** "A non-numeric
value encountered", а всі рядки, які видавали **`E_WARNING`**
"A non-numeric value encountered" тепер видаватиме
[TypeError](class.typeerror.md). В основному це впливає на:

- арифметичні операції
- Побітові операції

Ця зміна **`E_WARNING`** на [TypeError](class.typeerror.md)
також впливає на **`E_WARNING`** "Illegal string offset 'string'" для
неприпустимих зсувів рядка. Поведінка явного приведення до int/float
із рядків не змінилося.

- Тепер у магічних методів перевірятимуться аргументи та
типи, що повертаються, якщо вони оголошені. Сигнатура має
відповідати наступному списку:

- `__call(string $name, array $arguments): mixed`
- `__callStatic(string $name, array $arguments): mixed`
- `__clone(): void`
- `__debugInfo(): ?array`
- `__get(string $name): mixed`
- `__invoke(mixed $arguments): mixed`
- `__isset(string $name): bool`
- `__serialize(): array`
- `__set(string $name, mixed $value): void`
- `__set_state(array $properties): object`
- `__sleep(): array`
- `__unserialize(array $data): void`
- `__unset(string $name): void`
- `__wakeup(): void`

- Ключі масиву
[call_user_func_array()](function.call-user-func-array.md) тепер
будуть інтерпретуватися як імена параметрів, а чи не ігноруватися.

- Оголошення функції з ім'ям `assert()` всередині простору імен
більше не допускається та викликає **`E_COMPILE_ERROR`**. Функція
[assert()](function.assert.md) піддається спеціальної обробки
з боку двигуна, що може призвести до неузгодженої поведінки
при визначенні однойменної функції у просторі імен.

### Перетворення ресурсів на об'єкти

Декілька ресурсів ([resource](language.types.resource.md)) були
перетворені на об'єкти (object). Перевірки значення, що повертається з
використанням [is_resource()](function.is-resource.md) слід
замінити перевірками на **`false`**.

- [curl_init()](function.curl-init.md) тепер повертає об'єкт
[CurlHandle](class.curlhandle.md) замість ресурсу
([resource](language.types.resource.md)). Функція
[curl_close()](function.curl-close.md) більше не має сенсу,
натомість екземпляр [CurlHandle](class.curlhandle.md)
автоматично знищується, якщо на нього немає посилання.

- [curl_multi_init()](function.curl-multi-init.md) тепер повертає
об'єкт [CurlMultiHandle](class.curlmultihandle.md) замість ресурсу
([resource](language.types.resource.md)). Функція
[curl_multi_close()](function.curl-multi-close.md) більше не має
сенсу, натомість екземпляр
[CurlMultiHandle](class.curlmultihandle.md) автоматично
знищується, якщо його більше немає посилання.

- [curl_share_init()](function.curl-share-init.md) тепер повертає
об'єкт [CurlShareHandle](class.curlsharehandle.md) замість ресурсу
([resource](language.types.resource.md)). Функція
[curl_share_close()](function.curl-share-close.md) більше не має
сенсу, натомість екземпляр
[CurlShareHandle](class.curlsharehandle.md) автоматично
знищується, якщо його більше немає посилання.

- [enchant_broker_init()](function.enchant-broker-init.md) тепер
повертає об'єкт [EnchantBroker](class.enchantbroker.md) замість
ресурсу ([resource](language.types.resource.md)).

- [enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
і
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md)
тепер повертають [EnchantDictionary](class.enchantdictionary.md)
об'єкт замість ресурсу ([resource](language.types.resource.md)).

- Модуль GD тепер використовує об'єкти [GdImage](class.gdimage.md) в
як базова структура даних для зображень, а не ресурси
([resource](language.types.resource.md)). Функція
[imagedestroy()](function.imagedestroy.md) більше не має сенсу;
натомість екземпляр [GdImage](class.gdimage.md) автоматично
знищується, якщо його більше немає посилання.

- [openssl_x509_read()](function.openssl-x509-read.md) та
[openssl_csr_sign()](function.openssl-csr-sign.md) тепер
повертають об'єкт
[OpenSSLCertificate](class.opensslcertificate.md) замість ресурсу
([resource](language.types.resource.md)). Функція
[openssl_x509_free()](function.openssl-x509-free.md) оголошена
застарілої і більше не має сенсу, натомість екземпляр
[OpenSSLCertificate](class.opensslcertificate.md) автоматично
знищується, якщо на нього більше не посилаються.

- [openssl_csr_new()](function.openssl-csr-new.md) тепер повертає
об'єкт
[OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md)
замість ресурсу ([resource](language.types.resource.md)).

- [openssl_pkey_new()](function.openssl-pkey-new.md) тепер
повертає об'єкт
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) замість
ресурсу ([resource](language.types.resource.md)). Функція
[openssl_pkey_free()](function.openssl-pkey-free.md) оголошена
застарілої і більше не має сенсу, натомість екземпляр
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)
автоматично знищується, якщо на нього більше не посилаються.

- [shmop_open()](function.shmop-open.md) тепер повертає об'єкт
[Shmop](class.shmop.md) замість ресурсу
([resource](language.types.resource.md)). Функція
[shmop_close()](function.shmop-close.md) більше не має сенсу і
оголошено застарілою; натомість екземпляр
[Shmop](class.shmop.md) автоматично знищується, якщо на нього
більше не посилаються.

- [socket_create()](function.socket-create.md),
[socket_create_listen()](function.socket-create-listen.md),
[socket_accept()](function.socket-accept.md),
[socket_import_stream()](function.socket-import-stream.md),
[socket_addrinfo_connect()](function.socket-addrinfo-connect.md),
[socket_addrinfo_bind()](function.socket-addrinfo-bind.md) та
[socket_wsaprotocol_info_import()](function.socket-wsaprotocol-info-import.md)
тепер повертають об'єкт [Socket](class.socket.md) замість ресурсу
([resource](language.types.resource.md)).
[socket_addrinfo_lookup()](function.socket-addrinfo-lookup.md)
тепер повертає масив об'єктів
[AddressInfo](class.addressinfo.md) замість масиву ресурсів
([resource](language.types.resource.md)).

- [msg_get_queue()](function.msg-get-queue.md) тепер повертають
об'єкт [SysvMessageQueue](class.sysvmessagequeue.md) замість
ресурсу ([resource](language.types.resource.md)).

- [sem_get()](function.sem-get.md) тепер повертають об'єкт
[SysvSemaphore](class.sysvsemaphore.md) замість ресурсу
([resource](language.types.resource.md)).

- [shm_attach()](function.shm-attach.md) тепер повертають об'єкт
[SysvSharedMemory](class.sysvsharedmemory.md) замість ресурсу
([resource](language.types.resource.md)).

- [xml_parser_create()](function.xml-parser-create.md) та
[xml_parser_create_ns()](function.xml-parser-create-ns.md) тепер
повертають об'єкт [XMLParser](class.xmlparser.md) замість ресурсу
([resource](language.types.resource.md)). Функція
[xml_parser_free()](function.xml-parser-free.md) більше не має
сенсу, натомість екземпляр XMLParser автоматично знищується,
якщо на нього більше не посилаються.

- Функції [XMLWriter](book.xmlwriter.md) тепер приймають та
повертають, відповідно, об'єкти
[XMLWriter](class.xmlwriter.md) замість ресурсів
([resource](language.types.resource.md)).

- [inflate_init()](function.inflate-init.md) тепер повертає
об'єкт [InflateContext](class.inflatecontext.md) замість ресурсу
([resource](language.types.resource.md)).

- [deflate_init()](function.deflate-init.md) тепер повертає
об'єкт [DeflateContext](class.deflatecontext.md) замість ресурсу
([resource](language.types.resource.md)).

### COM і .Net (Windows)

Можливість імпорту констант без урахування регістру з бібліотек типів була
видалено. Другий аргумент
[com_load_typelib()](function.com-load-typelib.md) більше не може
бути false;
[com.autoregister_casesensitive](com.configuration.md#ini.com.autoregister-casesensitive)
більше не можна відключити; Маркери без урахування регістру в
[com.typelib_file](com.configuration.md#ini.com.typelib-file)
ігноруються.

### CURL

**`CURLOPT_POSTFIELDS`** більше не приймає об'єкти як масиви. Щоб
інтерпретувати об'єкт як масив, виконайте явне приведення
`(array)`. Те саме відноситься і до інших параметрів, що приймають
масиви.

### Дата і час

Для роботи функцій [mktime()](function.mktime.md) та
[gmmktime()](function.gmmktime.md) тепер потрібно хоча б один
аргумент. [time()](function.time.md) може використовуватися для
отримання поточної позначки часу.

### DOM

Були видалені нереалізовані класи з модуля DOM, які мали
обробника та містили тестові дані. Ці класи також були видалені в
останньої версії стандарту DOM:

- **DOMNameList**
- **DomImplementationList**
- **DOMConfiguration**
- **DomError**
- **DomErrorHandler**
- **DOMImplementationSource**
- **DOMLocator**
- **DOMUserDataHandler**
- **DOMTypeInfo**
- **DOMStringExtend**

Видалено нереалізовані методи модуля DOM, які не мали реалізації:

- **DOMNamedNodeMap::setNamedItem()**
- **DOMNamedNodeMap::removeNamedItem()**
- **DOMNamedNodeMap::setNamedItemNS()**
- **DOMNamedNodeMap::removeNamedItemNS()**
- **DOMText::replaceWholeText()**
- **DOMNode::compareDocumentPosition()**
- **DOMNode::isEqualNode()**
- **DOMNode::getFeature()**
- **DOMNode::setUserData()**
- **DOMNode::getUserData()**
- **DOMDocument::renameNode()**

### Enchant

- [enchant_broker_list_dicts()](function.enchant-broker-list-dicts.md),
[enchant_broker_describe()](function.enchant-broker-describe.md) та
[enchant_dict_suggest()](function.enchant-dict-suggest.md) тепер
повертають порожній масив замість **`null`**.

### Exif

[read_exif_data()](function.read-exif-data.md) була вилучена; Замість
її слід використовувати
[exif_read_data()](function.exif-read-data.md).

### Фільтрування даних

- Прапори **`FILTER_FLAG_SCHEME_REQUIRED`** та
**`FILTER_FLAG_HOST_REQUIRED`** для фільтра
**`FILTER_VALIDATE_URL`** було видалено. `scheme` та `host` необхідні
(І завжди були).

- Типи **`INPUT_REQUEST`** та **`INPUT_SESSION`** для
[filter_input()](function.filter-input.md) та її похідних були
видалено. Вони ніколи не були реалізовані, а спроба їх використання
завжди призводила до виклику попередження.

### GD

- Застарілі функції [image2wbmp()](function.image2wbmp.md) були
видалено.

- Застарілі функції [png2wbmp()](function.png2wbmp.md) та
[jpeg2wbmp()](function.jpeg2wbmp.md) було видалено.

- Параметр `mode` за замовчуванням для функції
[imagecropauto()](function.imagecropauto.md) більше не приймає
значення `-1`. Натомість слід використовувати
**`IMG_CROP_DEFAULT`**.

- У Windows, `php_gd2.dll` перейменований на `php_gd.dll`.

### GMP

[gmp_random()](function.gmp-random.md) було видалено. Замість неї
слід використовувати
[gmp_random_range()](function.gmp-random-range.md) або
[gmp_random_bits()](function.gmp-random-bits.md).

### Iconv

Реалізації iconv, які неправильно встановлюють `errno` у випадку
виникнення помилок, які більше не підтримуються.

### IMAP

- аргумент "default_host" функції, що не використовується
[imap_headerinfo()](function.imap-headerinfo.md) було видалено.

- Функція [imap_header()](function.imap-header.md), яка є
псевдонімом [imap_headerinfo()](function.imap-headerinfo.md), була
видалено.

### Функції інтернаціоналізації

- Застаріла константа **`INTL_IDNA_VARIANT_2003`** видалена.

- Застаріла константа **`Normalizer::NONE`** видалена.

### LDAP

- Застарілі функції [ldap_sort()](function.ldap-sort.md),
[ldap_control_paged_result()](function.ldap-control-paged-result.md)
і
[ldap_control_paged_result_response()](function.ldap-control-paged-result-response.md)
видалено.

- Змінився інтерфейс
[ldap_set_rebind_proc()](function.ldap-set-rebind-proc.md);
параметр `callback` більше не приймає порожні рядки; замість цього
слід вказувати **`null`**.

### MBString

- Директива
[mbstring.func_overload](mbstring.configuration.md#ini.mbstring.func-overload)
була вилучена. Пов'язані константи **`MB_OVERLOAD_MAIL`**,
**`MB_OVERLOAD_STRING`** та **`MB_OVERLOAD_REGEX`** також були
видалено. Нарешті, записи func_overload і func_overload_list
у [mb_get_info()](function.mb-get-info.md) було видалено.

- [mb_parse_str()](function.mb-parse-str.md) більше не можна
використовувати без передачі масиву результатів.

- Видалено ряд застарілих псевдонімів mbregex. У наступному списку
вказано, які функції слід використовувати замість них:

- **mbregex_encoding()** →
[mb_regex_encoding()](function.mb-regex-encoding.md)
- **mbereg()** → [mb_ereg()](function.mb-ereg.md)
- **mberegi()** → [mb_eregi()](function.mb-eregi.md)
- **mbereg_replace()** →
[mb_ereg_replace()](function.mb-ereg-replace.md)
- **mberegi_replace()** →
[mb_eregi_replace()](function.mb-eregi-replace.md)
- **mbsplit()** → [mb_split()](function.mb-split.md)
- **mbereg_match()** →
[mb_ereg_match()](function.mb-ereg-match.md)
- **mbereg_search()** →
[mb_ereg_search()](function.mb-ereg-search.md)
- **mbereg_search_pos()** →
[mb_ereg_search_pos()](function.mb-ereg-search-pos.md)
- **mbereg_search_regs()** →
[mb_ereg_search_regs()](function.mb-ereg-search-regs.md)
- **mbereg_search_init()** →
[mb_ereg_search_init()](function.mb-ereg-search-init.md)
- **mbereg_search_getregs()** →
[mb_ereg_search_getregs()](function.mb-ereg-search-getregs.md)
- **mbereg_search_getpos()** →
[mb_ereg_search_getpos()](function.mb-ereg-search-getpos.md)
- **mbereg_search_setpos()** →
[mb_ereg_search_setpos()](function.mb-ereg-search-setpos.md)

- Модифікатор `e` для
[mb_ereg_replace()](function.mb-ereg-replace.md) було видалено.
Замість нього слід
використовувати [mb_ereg_replace_callback()](function.mb-ereg-replace-callback.md).

- Аргумент нерядкового шаблону для
[mb_ereg_replace()](function.mb-ereg-replace.md) тепер буде
інтерпретуватись як рядок замість кодової точки ASCII. Попереднє
поведінку можна відновити явним викликом
[chr()](function.chr.md).

- Аргумент `needle` для функцій
[mb_strpos()](function.mb-strpos.md),
[mb_strrpos()](function.mb-strrpos.md),
[mb_stripos()](function.mb-stripos.md),
[mb_strripos()](function.mb-strripos.md),
[mb_strstr()](function.mb-strstr.md),
[mb_stristr()](function.mb-stristr.md),
[mb_strrchr()](function.mb-strrchr.md) та
[mb_strrichr()](function.mb-strrichr.md) тепер може бути порожнім.

- Параметр `is_hex`, який не використовувався для внутрішніх цілей,
був вилучений з
[mb_decode_numericentity()](function.mb-decode-numericentity.md).

- Застаріла поведінка передачі кодування як третій
аргументу замість зміщення для функції
[mb_strrpos()](function.mb-strrpos.md) було видалено; замість цього
як четвертий аргумент слід вказати явне зміщення `0` з
кодуванням.

- Псевдоніми кодування символів ISO_8859-* були замінені на
псевдоніми `ISO8859-*` для кращої сумісності із модулем iconv.
Псевдоніми mbregex ISO 8859 з підкресленням (`ISO_8859_*` та
`ISO8859_*`) також були видалені.

- [mb_ereg()](function.mb-ereg.md) та
[mb_eregi()](function.mb-eregi.md) тепер повертатимуть
логічне значення **`true`**, у разі знайденого збігу.
Раніше вони повертали ціле число `1`, якщо аргумент `matches` не був
переданий, або `max(1, strlen($matches[0]))`, якщо `matches` був не
порожній.

### OCI8

- Клас **OCI-Lob** перейменований на [OCILob](class.ocilob.md), а
клас **OCI-Collection** - в
[OCICollection](class.ocicollection.md) для імені сумісність
забезпечується засобами інструкції типу arginfo PHP 8.

– Деякі функції псевдонімів оголошені застарілим.

- [oci_internal_debug()](function.oci-internal-debug.md) та її
псевдонім [ociinternaldebug()](function.ociinternaldebug.md) були
видалено.

### ODBC

- [odbc_connect()](function.odbc-connect.md) більше не використовує
з'єднання повторно.

- параметр "flags" функції, що не використовується
[odbc_exec()](function.odbc-exec.md) було видалено.

### OpenSSL

- [openssl_seal()](function.openssl-seal.md) та
[openssl_open()](function.openssl-open.md) тепер потребують передачі
`method`, тому що попереднє значення за умовчанням ``RC4'` вважається
небезпечним.

### Регулярні вирази (сумісні з Perl)

При передачі неприпустимих керуючих послідовностей вони не
інтерпретуються як літерали. Така поведінка раніше вимагала
модифікатора `X`, що тепер ігнорується.

### Об'єкти даних PHP

- Режим обробки помилок за умовчанням було змінено з "тихого" (silent)
на "виключення" (exceptions). Докладніше дивіться [Помилки та обробка
помилок](pdo.error-handling.md).

- Змінилися сигнатури деяких методів PDO:

- `PDO::query(string $query, ?int $fetchMode u003d null, mixed ...$fetchModeArgs)`
- `PDOStatement::setFetchMode(int $mode, mixed ...$args)`

### PDO ODBC

Директива `php.ini`
[pdo_odbc.db2_instance_name](ref.pdo-odbc.md#ini.pdo-odbc.db2-instance-name)
була вилучена.

### PDO MySQL

[PDO::inTransaction()](pdo.intransaction.md) тепер повідомляє про
фактичний стан транзакції підключення, а не про приблизний від
PDO. Якщо запит, за умови "неявної фіксації", виконується, то
[PDO::inTransaction()](pdo.intransaction.md) згодом поверне
**`false`**, оскільки транзакція буде неактивною.

### PostgreSQL

- Застарілий синтаксис [pg_connect()](function.pg-connect.md) з
використанням декількох параметрів замість рядка підключення
більше не підтримується.

- Застарілі сигнатури [pg_lo_import()](function.pg-lo-import.md) та
[pg_lo_export()](function.pg-lo-export.md), що передають з'єднання
як останній аргумент, більше не підтримуються. Замість
це з'єднання має бути передане першим аргументом.

- [pg_fetch_all()](function.pg-fetch-all.md) тепер буде повертати
порожній масив замість **`false`** для наборів результатів з
відсутніми рядками.

### Phar

Метадані, пов'язані з phar, більше не будуть автоматично
десеріалізуватися, щоб виправити потенційні вразливості безпеки
через створення екземплярів об'єкта, автозавантаження тощо.

### Reflection

- Сигнатури методів

- `ReflectionClass::newInstance($args)`
- `ReflectionFunction::invoke($args)`
- `ReflectionMethod::invoke($object, $args)`

були змінені на:

- `ReflectionClass::newInstance(...$args)`
- `ReflectionFunction::invoke(...$args)`
- `ReflectionMethod::invoke($object, ...$args)`

Код, який повинен бути сумісний як з PHP 7, так і з PHP 8 може
використовувати наступні сигнатури:

- `ReflectionClass::newInstance($arg u003d null, ...$args)`
- `ReflectionFunction::invoke($arg u003d null, ...$args)`
- `ReflectionMethod::invoke($object, $arg u003d null, ...$args)`

- Метод [ReflectionType::\_\_toString()](reflectiontype.tostring.md)
тепер повертатиме повне налагоджувальне уявлення типу і
більше не є застарілим. Зокрема, результат включатиме
індикатор допустимості значень NULL для типів, що допускають значення
NULL. Формат значення, що повертається, нестабільний і може змінюватися в
Залежно від версії PHP.

- Методи Reflection export() було видалено. Натомість об'єкти
reflection можуть бути перетворені на рядок.

- [ReflectionMethod::isConstructor()](reflectionmethod.isconstructor.md)
і
[ReflectionMethod::isDestructor()](reflectionmethod.isdestructor.md)
тепер також повертають **`true`** для методів інтерфейсів
[\_\_construct()](language.oop5.decon.md#object.construct) та
[\_\_destruct()](language.oop5.decon.md#object.destruct). Раніше
це було вірно лише для методів класів та трейтів.

- Метод **ReflectionType::isBuiltin()** переміщений у
[ReflectionNamedType](class.reflectionnamedtype.md). У
[ReflectionUnionType](class.reflectionuniontype.md) цього методу
ні.

### Сокети

- Застарілі `flags` **`AI_IDN_ALLOW_UNASSIGNED`** та
**`AI_IDN_USE_STD3_ASCII_RULES`** для
[socket_addrinfo_lookup()](function.socket-addrinfo-lookup.md)
були вилучені.

### Стандартна бібліотека PHP (SPL)

- [SplFileObject::fgetss()](splfileobject.fgetss.md) було видалено.

- [SplFileObject::seek()](splfileobject.seek.md) тепер завжди
переміщається початку рядка. Раніше, позиція `>u003d1` переміщала до
початку наступних рядків.

- [SplHeap::compare()](splheap.compare.md) тепер вказує
сигнатуру методу. Наслідуючі класи, що реалізують цей метод, тепер
повинні використовувати сумісну сигнатуру методу.

- [SplDoublyLinkedList::push()](spldoublylinkedlist.push.md),
[SplDoublyLinkedList::unshift()](spldoublylinkedlist.unshift.md) та
[SplQueue::enqueue()](splqueue.enqueue.md) тепер повертають void
замість **`true`**.

- [spl_autoload_register()](function.spl-autoload-register.md)
тепер завжди буде викидати [TypeError](class.typeerror.md)
для неприпустимих аргументів, тому другий аргумент `do_throw`
ігнорується, якщо для нього встановлено значення **false**.

- [SplFixedArray](class.splfixedarray.md) тепер є
[IteratorAggregate](class.iteratoraggregate.md), а не
[Iterator](class.iterator.md).
[SplFixedArray::rewind()](splfixedarray.rewind.md),
[SplFixedArray::current()](splfixedarray.current.md),
[SplFixedArray::key()](splfixedarray.key.md),
[SplFixedArray::next()](splfixedarray.next.md) та
[SplFixedArray::valid()](splfixedarray.valid.md) було видалено.
Замість них було додано **SplFixedArray::getIterator()**. Будь-який код,
який використовує явну ітерацію над SplFixedArray, тепер повинен
отримати [Iterator](class.iterator.md) за допомогою
**SplFixedArray::getIterator()**. Це означає, що
[SplFixedArray](class.splfixedarray.md) тепер безпечно
використовувати у вкладених циклах.

### Бібліотека стандартних функцій

- [assert()](function.assert.md) більше не буде виконувати рядкові
аргументи, натомість вони будуть оброблятися як будь-які звичайні
аргументи. Таким чином, замість `assert('$a u003du003d $b')` слідує
використовувати `assert($a u003du003d $b)`. INI-директива
[assert.quiet_eval](info.configuration.md#ini.assert.quiet-eval) та
константа **`ASSERT_QUIET_EVAL`** були видалені, тому що вони більші
немає сенсу.

- [parse_str()](function.parse-str.md) більше не можна використовувати
без зазначення масиву результатів.

- Фільтр
[string.strip_tags](filters.string.md#filters.string.strip_tags)
віддалений.

- Аргумент `needle` функцій [strpos()](function.strpos.md),
[strrpos()](function.strrpos.md),
[stripos()](function.stripos.md),
[strripos()](function.strripos.md),
[strstr()](function.strstr.md), [strchr()](function.strchr.md),
[strrchr()](function.strrchr.md) та
[stristr()](function.stristr.md) тепер завжди буде
інтерпретуватися як рядок. Раніше нерядкові needles
інтерпретувалися як кодова точка ASCII. Явний виклик
[chr()](function.chr.md) може використовуватись для відновлення
попередньої поведінки.

- Аргумент `needle` функцій [strpos()](function.strpos.md),
[strrpos()](function.strrpos.md),
[stripos()](function.stripos.md),
[strripos()](function.strripos.md),
[strstr()](function.strstr.md), [stristr()](function.stristr.md)
і [strrchr()](function.strrchr.md) може бути порожнім.

- Аргумент `length` функцій [substr()](function.substr.md),
[substr_count()](function.substr-count.md),
[substr_compare()](function.substr-compare.md) та
[iconv_substr()](function.iconv-substr.md) тепер може бути
**`null`**. Значення **`null`** означає відсутність аргументу довжини,
і тому функції повернуть залишок рядка замість порожнього рядка.

- Аргумент `length` функції
[array_splice()](function.array-splice.md) тепер може бути
**`null`**. Передача значення **`null`** означає відсутність
аргументу, тому функція видалити все, починаючи від `offset` до кінця
масиву.

- Аргумент `args` функцій [vsprintf()](function.vsprintf.md),
[vfprintf()](function.vfprintf.md) та
[vprintf()](function.vprintf.md) тепер має бути масивом.
Раніше приймався будь-який тип.

- Параметр "salt" функції
[password_hash()](function.password-hash.md) більше не
підтримується. Якщо використовується опція ``salt'`, генерується
попередження, передана сіль ігнорується, а замість неї
використовується згенерована сіль.

- Функція [quotemeta()](function.quotemeta.md) тепер буде
повертати порожній рядок, якщо було передано порожній рядок. Раніше
поверталося **`false`**.

- Видалені такі функції:

- [hebrevc()](function.hebrevc.md)
- [convert_cyr_string()](function.convert-cyr-string.md)
- [money_format()](function.money-format.md)
- [ezmlm_hash()](function.ezmlm-hash.md)
- [restore_include_path()](function.restore-include-path.md)
- [get_magic_quotes_gpc()](function.get-magic-quotes-gpc.md)
- [get_magic_quotes_runtime()](function.get-magic-quotes-runtime.md)
- [fgetss()](function.fgetss.md)

- **`FILTER_SANITIZE_MAGIC_QUOTES`** видалено.

- Виклик [implode()](function.implode.md) з параметрами у зворотному
порядку `($pieces, $glue)` більше не підтримується.

- [parse_url()](function.parse-url.md) тепер буде розрізняти
відсутні та порожні запити та фрагменти:

- `http://example.com/foo → queryu003dnull, fragmentu003dnull`
- `http://example.com/foo? → query u003d "", fragment u003d null`
- `http://example.com/foo# → query u003d null, fragment u003d """
- `http://example.com/foo?# → queryu003d"", fragmentu003d""`

Раніше у всіх випадках query та fragment були **`null`**.

- [var_dump()](function.var-dump.md) та
[debug_zval_dump()](function.debug-zval-dump.md) тепер будуть
друкувати числа з плаваючою точкою, використовуючи
[serialize_precision](ini.core.md#ini.serialize-precision), а не
[Precision](ini.core.md#ini.precision). У конфігурації по
замовчуванням це означає, що числа з плаваючою точкою тепер
друкуються з повною точністю цими функціями налагодження.

- Якщо масив, що повертається
[\_\_sleep()](language.oop5.magic.md#object.sleep), містить
неіснуючі властивості, вони автоматично проігноруються.
Раніше такі властивості були б серіалізовані, якби вони мали
значення **`null`**.

- Локаль за замовчуванням під час запуску тепер завжди буде визначено як
``C'`. За замовчуванням локалі не успадковуються з оточення. Раніше для
**`LC_ALL`** було встановлено значення ``C'`, тоді як
**`LC_CTYPE`** успадковувався від оточення. Однак деякі функції
не враховували успадковану локаль без явного виклику
[setlocale()](function.setlocale.md). Явний виклик
[setlocale()](function.setlocale.md) тепер потрібно завжди, якщо
компонент локалі має бути змінено зі значенням за замовчуванням.

- Застарілий резервний варіант DES в [crypt()](function.crypt.md)
був видалений. Якщо [crypt()](function.crypt.md) передається
невідомий формат солі, функція завершиться помилкою з `*0` замість
повернення до слабкого хеша DES.

- При вказанні значень поза допустимим діапазоном для SHA256/SHA512
[crypt()](function.crypt.md) тепер буде видана помилка `*0`
замість обмеження до найближчої межі. Це відповідає
поведінці glibc.

- Результат функцій сортування міг змінитися, якщо у масиві є
однакові елементи.

- Будь-які функції, що приймають callback-функції, які явно не вказані
для прийому параметрів за посиланням, тепер попереджатимуть, якщо
використовується callback-функція з посиланнями. Наприклад,
[array_filter()](function.array-filter.md) та
[array_reduce()](function.array-reduce.md). Раніше так було у
більшості функцій, але не всі.

- Обгортка HTTP-потоку, використовувана такими функціями, як
[file_get_contents()](function.file-get-contents.md), тепер по
за промовчанням оголошує HTTP/1.1, а не HTTP/1.0. Це не змінює поведінки
клієнта, але може змусити сервери реагувати інакше. Щоб
зберегти стару поведінку, встановіть параметр контексту потоку
``protocol_version'', наприклад:

` <?php$ctx u003d stream_context_create(['http' u003d> ['protocol_version' u003d> '1.0']]);echo file_get_contents('http://example.org', false, $ctx);?> `

- виклик [crypt()](function.crypt.md) без явної передачі солі більше
не підтримується. Якщо ви хочете створити надійний хеш з
автоматично згенерованою сіллю, використовуйте натомість
[password_hash()](function.password-hash.md).

- [substr()](function.substr.md),
[mb_substr()](function.mb-substr.md),
[iconv_substr()](function.iconv-substr.md) та
[grapheme_substr()](function.grapheme-substr.md) тепер
послідовно фіксують усунення межі рядка. Раніше,
у деяких випадках, замість порожнього рядка повертався **`false`**.

- У Windows функції виконання програм
([proc_open()](function.proc-open.md),
[exec()](function.exec.md), [popen()](function.popen.md) і т.д.)
з використанням оболонки тепер послідовно виконують
**%comspec% /s /c "$commandline"**, яка робить те саме, що
та виконання **$commandline** (без додаткових лапок).

### Sysvsem

- Параметр `auto_release` у [sem_get()](function.sem-get.md) був
змінено, щоб набувати логічних значень (bool), а не цілі
числа (int).

### Tidy

- Параметр use_include_path, який не використовувався внутрішньо, був
видалено з [tidy_repair_string()](tidy.repairstring.md).

- [tidy::repairString()](tidy.repairstring.md) та
[tidy::repairFile()](tidy.repairfile.md) стали статичними
методами.

### PHP-лексер (Tokenizer)

- У лексемах `T_COMMENT` більше не буде символу нового рядка наприкінці.
Натомість новий рядок буде частиною наступної лексеми
`T_WHITESPACE`. Слід зазначити, що за `T_COMMENT` не завжди
слідує пробіл, за ним також може бути `T_CLOSE_TAG` або кінець
файлу.

- Імена у просторах імен тепер представлені за допомогою
`T_NAME_QUALIFIED` (`Foo\Bar`), `T_NAME_FULLY_QUALIFIED`
(`\Foo\Bar`) та лексеми `T_NAME_RELATIVE` (`namespace\Foo\Bar`)).
`T_NS_SEPARATOR` використовується лише для автономних роздільників
простору імен і тільки синтаксично дійсний у поєднанні з
оголошення групового використання.

### XMLReader

[XMLReader::open()](xmlreader.open.md) та
[XMLReader::xml()](xmlreader.xml.md) тепер статичні
методами. Їх, як і раніше, можна викликати як методи екземпляра, але
наступні класи повинні оголошувати їх як статичні, якщо вони
перевизначають ці способи.

### XML-RPC

Модуль XML-RPC був переміщений до PECL і більше не є частиною
дистрибутива PHP.

### Zip

**`ZipArchive::OPSYS_Z_CPM`** була видалена (в цьому імені була помилка).
Використовуйте замість неї **`ZipArchive::OPSYS_CPM`**.

### Zlib

- [gzgetss()](function.gzgetss.md) видалено.

- [zlib.output_compression](zlib.configuration.md#ini.zlib.output-compression)
більше не відключається автоматично для `Content-Type: image/*`.

### Пакети тестів PHP для Windows

Скрипт виконання тестів був перейменований з `run-test.php` в
`run-tests.php`, щоб відповідати його імені у php-src.
