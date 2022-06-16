- [« Міграція з PHP 7.4.x на PHP 8.0.x](migration80.md)
- [Зміни, що ламають зворотну сумісність
»](migration80.incompatible.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.4.x на PHP 8.0.x](migration80.md)
- Нова функціональність

## Нова функціональність

### Ядро PHP

#### Іменовані аргументи

Додана підтримка [іменованих
аргументів](functions.arguments.md#functions.named-arguments).

#### Атрибути

Додано підтримку [атрибутів](language.attributes.md).

#### Оголошення властивостей у конструкторі

Додано підтримку [визначення властивостей у
конструктори](language.oop5.decon.md#language.oop5.decon.constructor.promotion)
(Оголошення властивостей у сигнатурі конструктора).

#### Тип Union

Додано підтримку [об'єднаних
типів](language.types.declarations.md#language.types.declarations.composite.union).

#### Вираз Match

Додано підтримку [вирази `match`] (control-structures.match.md).

#### Оператор Nullsafe

Додано підтримку [оператора
Nullsafe](language.oop5.basic.md#language.oop5.basic.nullsafe)
(`?->`).

#### Інші нові функції

- Доданий клас [WeakMap](class.weakmap.md).

- Доданий клас [ValueError](class.valueerror.md).

- Будь-яка кількість параметрів функції тепер може бути замінена
варіативним аргументом при сумісності типів. Наприклад, тепер
наступний код є допустимим:

`<?phpclass A {     public function method(int $many, string $parameters, $here) {}}class B extends A {     public function method(...$|

- static (як у "пізнім статичному зв'язуванні") тепер можна
використовувати як тип, що повертається:

`<?phpclass Test {     public function create(): static {          return new static(); }}?> `

- Тепер можна отримати ім'я класу об'єкта за допомогою $object::class.
Результат такий самий, що і `get_class($object)`.

- [`new`](language.oop5.basic.md#language.oop5.basic.new) та
['instanceof`](language.operators.type.md) тепер можна
використовувати з довільними виразами, використовуючи
`new (expression)(...$args)` і `$obj instanceof (expression)`.

- Було внесено деякі виправлення узгодженості до синтаксису.
змінних, наприклад, тепер дозволено запис `Foo::BAR::$baz`.

- Доданий інтерфейс [Stringable](class.stringable.md), який
автоматично реалізується, якщо у класі визначено метод
[\_\_toString()](language.oop5.magic.md#object.tostring).

– Тепер трейти можуть визначати абстрактні закриті методи. Такі
методи мають бути реалізовані класом за допомогою трейту.

- `throw` тепер можна використовувати як вираз. Це означає, що
тепер можливе таке:

` <?php$fn u003d fn() u003d> throw new Exception('Виключення в стрілочної функції');$user u003d $session->user ?? throw new Exception('Повинен бути користувач'); `

- У списках параметрів тепер дозволено необов'язкову завершальну
кома.

` <?phpfunction functionWithLongSignature(    Type1 $parameter1,    Type2 $parameter2, // <-- Ця кома тепер дозволена.) {} `

- Тепер можна написати `catch (Exception)` для перехоплення виключення,
не зберігаючи їх у змінній.

- Додана підтримка типу
[mixed](language.types.declarations.md#language.types.declarations.mixed).

- Закриті методи, оголошені у батьківському класі, більше не
застосовують будь-які правила успадкування для методів дочірнього
класу (крім остаточних закритих конструкторів). В
на наступному прикладі показано, які обмеження були зняті:

` <?phpclass ParentClass {    private function method1() {}    private function method2() {}    private static function method3() {}    // Выдаёт предупреждение, так как "final" больше не имеет значения:    private final function method4() { }}class ChildClass extends ParentClass {    // Тепер все наступне дозволено, хоч модифікатори не такі ж,    // як для закритих  | public abstract function method1() {}    public static function method2() {}    public function method3() {}    public function method4() {

- Додана функція
[get_resource_id()](function.get-resource-id.md), яка
повертає те саме значення, що і `(int) $resource`. Принцип роботи
такий же, але з більш зрозумілим API.

### Дата і час

-   Були додані
[DateTime::createFromInterface()](datetime.createfrominterface.md)
і
[DateTimeImmutable::createFromInterface()](datetimeimmutable.createfrominterface.md).

- Доданий специфікатор формату DateTime `p`, який аналогічний `P`,
але повертає `Z`, а не `+00:00` для UTC.

### DOM

Додані [DOMParentNode](class.domparentnode.md) та
[DOMChildNode](class.domchildnode.md) з новими API-інтерфейсами обходу
та управління.

### Фільтрування даних

**`FILTER_VALIDATE_BOOL`** був доданий як псевдонім для
**`FILTER_VALIDATE_BOOLEAN`**. Нове ім'я є кращим, так
як вона використовує ім'я канонічного типу.

### Enchant

Додані [enchant_dict_add()](function.enchant-dict-add.md),
[enchant_dict_is_added()](function.enchant-dict-is-added.md) та
**`LIBENCHANT_VERSION`**.

### FPM

Додана нова опція `pm.status_listen`, що дозволяє набувати статусу з
іншої кінцевої точки (наприклад, порту або файлу UDS). Це може
стане в нагоді для отримання статусу, коли всі дочірні елементи зайняті
обробкою довготривалих запитів.

### Hash

Тепер об'єкти [HashContext](class.hashcontext.md) можна
серіалізувати.

### Функції інтернаціоналізації

Додані константи **`IntlDateFormatter::RELATIVE_FULL`**,
**`IntlDateFormatter::RELATIVE_LONG`**,
**`IntlDateFormatter::RELATIVE_MEDIUM`** та
**`IntlDateFormatter::RELATIVE_SHORT`**.

### LDAP

Додана функція
[ldap_count_references()](function.ldap-count-references.md), яка
повертає кількість посилань у результатах пошуку.

### OPcache

Якщо ini-параметр opcache.record_warnings увімкнено, OPcache буде
записувати попередження під час компіляції та відтворювати їх при
наступному включенні, навіть якщо вони обслуговуються з кеша.

### OpenSSL

Додано підтримку синтаксису криптографічних повідомлень (CMS) ([» RFC
5652](http://www.faqs.org/rfcs/rfc5652)), що складається з функцій для
шифрування, дешифрування, підписи, перевірки та читання. API схожий на API
для функцій PKCS #7 з додаванням нових констант кодування:
**`OPENSSL_ENCODING_DER`**, **`OPENSSL_ENCODING_SMIME`** та
**`OPENSSL_ENCODING_PEM`**:

- [openssl_cms_encrypt()](function.openssl-cms-encrypt.md) шифрує
повідомлення у файлі з сертифікатами та виводить результат у
наданий файл.
- [openssl_cms_decrypt()](function.openssl-cms-decrypt.md)
розшифровує повідомлення S/MIME у файлі та виводить результати в
наданий файл.
- [openssl_cms_read()](function.openssl-cms-read.md) експортує
файл CMS у масив сертифікатів PEM.
- [openssl_cms_sign()](function.openssl-cms-sign.md) підписує
повідомлення MIME у файлі сертифікатом та ключем і виводить результат у
наданий файл.
- [openssl_cms_verify()](function.openssl-cms-verify.md) перевіряє,
що блок даних не пошкоджений, сторона, що підписує, є тим,
ким вона є і повертає сертифікати сторін, що підписують.

### Регулярні вирази (сумісні з Perl)

Додана функція
[preg_last_error_msg()](function.preg-last-error-msg.md), яка
повертає людяне повідомлення про останню помилку PCRE. Вона
доповнює [preg_last_error()](function.preg-last-error.md), яка
повертає ціле значення перерахування.

### Reflection

- Наступні методи тепер можуть повертати інформацію про значення
параметрів внутрішніх функцій за замовчуванням:

- [ReflectionParameter::isDefaultValueAvailable()](reflectionparameter.isdefaultvalueavailable.md)
- [ReflectionParameter::getDefaultValue()](reflectionparameter.getdefaultvalue.md)
- [ReflectionParameter::isDefaultValueConstant()](reflectionparameter.isdefaultvalueconstant.md)
- [ReflectionParameter::getDefaultValueConstantName()](reflectionparameter.getdefaultvalueconstantname.md)

### SQLite3

[SQLite3::setAuthorizer()](sqlite3.setauthorizer.md) та відповідні
константи класів були додані, за допомогою яких можна поставити
власну callback-функцію для авторизації чи заборони дії у базі
даних.

### Бібліотека стандартних функцій

- Додані функції [str_contains()](function.str-contains.md),
[str_starts_with()](function.str-starts-with.md) та
[str_ends_with()](function.str-ends-with.md), які перевіряють,
чи містить `haystack`, починається або закінчується `needle`
відповідно.

- Додано функцію [fdiv()](function.fdiv.md), яка виконує
розподіл з плаваючою точкою відповідно до IEEE 754.
нуль суворо визначено і повертає одне із значень: `Inf`, `-Inf`
або `NaN`.

- Додана функція [get_debug_type()](function.get-debug-type.md),
яка повертає тип, який може використовуватись для генерацій
повідомлень про помилки. На відміну від
[gettype()](function.gettype.md), вона використовує канонічні
імена типів, повертає імена класів об'єктів та повідомляє про тип
ресурсів.

- [printf()](function.printf.md) та її похідні тепер
підтримують специфікатори формату '%h' та '%H'. Вони працюють як
`%g` та `%G`, але завжди використовують `"."` як десятковий
розділювача, а не визначають його за допомогою локалі **`LC_NUMERIC`**.

- [printf()](function.printf.md) та її похідні тепер
підтримують використання ``*'' як ширини або точності, і в
у цьому випадку ширина/точність передається як аргумент printf.
Це також дозволяє використовувати точність `-1` з `%g`, `%G`, `%h` і
`%H`. Наприклад, наступний код можна використовувати для відтворення
форматування з плаваючою точкою за промовчанням PHP:

` <?phpprintf("%.*H", (int) ini_get("precision"), $float);printf("%.*H", (int) ini_get("serialize_precision"), $float);? > `

- [proc_open()](function.proc-open.md) тепер підтримує
дескриптори псевдотерміналу (PTY) Наступний код приєднує
`stdin`, `stdout` і `stderr` до одного і того ж PTY:

` <?php$proc u003d proc_open($command, [['pty'], ['pty'], ['pty']], $pipes);?> `

- [proc_open()](function.proc-open.md) тепер підтримує
дескриптори пари сокетів. Наступний код приєднує окрему пару
сокетів до `stdin`, `stdout` та `stderr`:

` <?php$proc u003d proc_open($command, [['socket'], ['socket'], ['socket']], $pipes);?> `

На відміну від каналів, у сокетів немає проблем із блокуванням
введення-виводу у Windows. Проте чи всі програми можуть коректно
працювати з сокетами stdio.

- Функції сортування тепер використовують стійке сортування, це
означає, що елементи, що порівнюються, збережуть вихідний порядок.

- [array_diff()](function.array-diff.md),
[array_intersect()](function.array-intersect.md) та їх похідні
тепер можуть використовуватися з одним масивом як аргумент.
Це означає, що тепер можливе таке:

` <?php// Працює, навіть якщо $excludes порожній:array_diff($array, ...$excludes);// Працює, навіть якщо$array містить тільки один масив:array_intersect;?$ `

- Параметр `flag` у функції
[ob_implicit_flush()](function.ob-implicit-flush.md) було змінено,
і тепер набуває логічного значення (bool), а не ціле число
(int).

### Лексер (Tokenizer)

[PhpToken](class.phptoken.md) додає об'єктно-орієнтований
інтерфейс до PHP-лексера (tokenizer). Він забезпечує більш одноманітне
і ергономічне уявлення, водночас ефективніше та швидше.

### Zip

- Модуль Zip оновлено до версії 1.19.1.

- Нові методи
[ZipArchive::setMtimeName()](ziparchive.setmtimename.md) та
[ZipArchive::setMtimeIndex()](ziparchive.setmtimeindex.md) для
встановлення часу зміни запису.

- Новий метод
[ZipArchive::registerProgressCallback()](ziparchive.registerprogresscallback.md)
для надання оновлень під час закриття архіву.

- Новий метод
[ZipArchive::registerCancelCallback()](ziparchive.registercancelcallback.md),
щоб дозволити скасування під час закриття архіву.

- Новий метод [ZipArchive::replaceFile()](ziparchive.replacefile.md)
замінити вміст запису.

- Новий метод
[ZipArchive::isCompressionMethodSupported()](ziparchive.iscompressionmethoddupported.md),
щоб перевірити додаткові можливості стиснення.

- Новий метод
[ZipArchive::isEncryptionMethodSupported()](ziparchive.isencryptionmethoddupported.md),
щоб перевірити додаткові функції шифрування.

- Додано властивість `ZipArchive::lastId` для отримання значення
індексу останнього доданого запису.

- Тепер помилки можна перевірити після закриття та за допомогою властивостей
`ZipArchive::status` та `ZipArchive::statusSys` або методу
[ZipArchive::getStatusString()](ziparchive.getstatusstring.md).

- Параметр ``remove_path'` в
[ZipArchive::addGlob()](ziparchive.addglob.md) та
[ZipArchive::addPattern()](ziparchive.addpattern.md) тепер
обробляється як довільний рядковий префікс (для
узгодженості з ``add_path'`), тоді як раніше він
інтерпретувався як ім'я каталогу.

- Додаткові функції стиснення/шифрування тепер перераховані в
phpinfo.
