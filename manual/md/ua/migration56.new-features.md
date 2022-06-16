- [« Зміни, що ламають зворотну
сумісність](migration56.incompatible.md)
- [Функціонал, оголошений застарілим у PHP 5.6.x
»](migration56.deprecated.md)

- [PHP Manual](index.md)
- [Міграція з PHP 5.5.x на PHP 5.6.x](migration56.md)
-   Нові можливості

## Нові можливості

### Константні вирази

Тепер можна надати скалярний вираз, що включає числові та
строкові літерали та/або константи, коли раніше очікувалося статичне
значення, наприклад, в оголошеннях констант або значення аргументів
функцій за промовчанням.

`<?phpconst ONE u003d 1;const TWO u003d ONE * 2;class C {   const THREE u003d TWO + 1; const ONE_THIRD u003d ONE / self::THREE; const SENTENCE u003d 'Значення константи THREE - '.self::THREE; public function f($a u003d ONE + self::THREE) {        return $a; }}echo (new C)->f()."
";echo C::SENTENCE;?> `

Результат виконання цього прикладу:

4
Значення константи THREE - 3

Також можна визначити масив (array) із використанням ключового слова
`const`:

` <?phpconst ARR u003d ['a', 'b'];echo ARR[0];?> `

Результат виконання цього прикладу:

a

### Функції зі змінною кількістю аргументів, використовуючи синтаксис `...`

[Функції зі змінною кількістю
аргументів](functions.arguments.md#functions.variable-arg-list) тепер
можна реалізовувати з використанням оператора `...` замість того, щоб
покладатися на [func_get_args()](function.func-get-args.md).

`<?phpfunction f($req, $opt u003d null, ...$params) {     // $params - масив, містить всі решти аргументи. printf('$req: %d; $opt: %d; кількість параметрів: %d'."
",           $req, $opt, count($params));}f(1);f(1, 2);f(1, 2, 3);f(1, 2, 3, 4);f( 1, 2, 3, 4, 5);?> `

Результат виконання цього прикладу:

$req: 1; $opt: 0; кількість параметрів: 0
$req: 1; $opt: 2; кількість параметрів: 0
$req: 1; $opt: 2; кількість параметрів: 1
$req: 1; $opt: 2; кількість параметрів: 2
$req: 1; $opt: 2; кількість параметрів: 3

### Розпакування аргументів за допомогою `...`

[Массивы](language.types.array.md) та об'єкти, що реалізують інтерфейс
[Traversable](class.traversable.md), можуть бути розпаковані до списку
аргументів під час передачі у функцію з допомогою оператора `...`.

` <?phpfunction add($a, $b, $c) {   return $a + $b + $c;}$operators u003d [2, 3];echo add(1, ...$operators);?> `

Результат виконання цього прикладу:

6

### Зведення в ступінь за допомогою `**`

Доданий право-асоціативний оператор `**`, що позначає зведення в
ступінь. Також доступний короткий синтаксис `**u003d`.

` <?phpprintf("2 ** 3 u003du003d      %d
", 2 ** 3);printf("2 ** 3 ** 2 u003du003d %d
", 2 ** 3 ** 2);$a u003d 2;$a **u003d 3;printf("a u003du003d            %d
", $a);?> `

Результат виконання цього прикладу:

2 ** 3 u003du003d 8
2 ** 3 ** 2 u003du003d 512
a u003du003d 8

### `use function` та `use const`

Оператор [`use`](language.namespaces.importing.md) був розширений
підтримки імпорту функцій та констант на додаток до класів. Це
досягається за допомогою конструкцій `use function` та `use const`,
відповідно.

`<?phpnamespace Name\Space {    const FOO u003d 42; function f() { echo __FUNCTION__."
"; }}namespace {    use const Name\Space\FOO;    useuse function Name\Space ;    echo FOO."
";   f();}?> `

Результат виконання цього прикладу:

42
Name\Space

### phpdbg

Тепер PHP містить інтерактивний дебаггер, що називається "phpdbg" і
реалізований як модуль SAPI. Подробиці дивіться в [документації
phpdbg] (book.phpdbg.md).

### Кодування за замовчуванням

Доданий ini-параметр
[default_charset](ini.core.md#ini.default-charset), у якому можна
вказати кодування за замовчуванням для використання у функціях
[htmlentities()](function.mdentities.md),
[html_entity_decode()](function.md-entity-decode.md) та
[htmlspecialchars()](function.mdspecialchars.md). Зверніть увагу,
якщо (зараз вважається застарілим) задані параметри кодування iconv
і mbstring, вони будуть мати перевагу перед default_charset для iconv
та mbstring.

Значення цієї настройки за замовчуванням дорівнює UTF-8.

### Перевикористання [`php://input`](wrappers.php.md#wrappers.php.input)

[`php://input`](wrappers.php.md#wrappers.php.input) тепер можна
перевідкривати та зчитувати стільки разів, скільки потрібно. Це також спричинило
до значного зменшення обсягу пам'яті, необхідної для роботи з
даними POST.

### Завантаження великих файлів

Тепер можна завантажувати файли більше 2ГБ.

### [GMP](book.gmp.md) підтримує навантаження операторів

Об'єкти [GMP](book.gmp.md) тепер підтримують навантаження операторів та
приведення до скалярних типів. Це дозволяє використовувати GMP у вашому
коді більш виразно:

` <?php$a u003d gmp_init(42);$b u003d gmp_init(17);if (version_compare(PHP_VERSION, '5.6', '<')) {    echo gmp_intval(gmp_add$ ; echo gmp_intval(gmp_add($a, 17)), PHP_EOL; echo gmp_intval(gmp_add(42, $b)), PHP_EOL;} else {    echo $a + $b, PHP_EOL; echo $a + 17, PHP_EOL; echo 42 + $b, PHP_EOL;}?> `

Результат виконання цього прикладу:

59
59
59

### [hash_equals()](function.hash-equals.md) для запобігання атакам у часі при порівнянні рядків

Додано функцію [hash_equals()](function.hash-equals.md) для
порівняння двох рядків за постійний час. Це має допомогти уникнути
атак за часом; наприклад, під час тестування хешування паролів
функцією [crypt()](function.crypt.md) (за умови, що ви не можете
використовувати [password_hash()](function.password-hash.md) та
[password_verify()](function.password-verify.md), які не
схильні до атак).

` <?php$expected  u003d crypt('12345', '$2a$07$usesomesillystringforsalt$');$correct   u003d crypt('12345', '$2a$07$usesomesillystringforsalt$'' , '$2a$07$usesomesillystringforsalt$');var_dump(hash_equals($expected, $correct));var_dump(hash_equals($expected, $incorrect));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)

### `__debugInfo()`

Було додано магічний метод
[\_\_debugInfo()](language.oop5.magic.md#language.oop5.magic.debuginfo)
для того, щоб дозволити об'єкту змінювати значення властивостей, що виводяться
під час використання [var_dump()](function.var-dump.md).

` <?phpclass C {    private $prop; public function __construct($val) {         $this->prop u003d $val; }   publicfunction __debugInfo() {        return [            'propSquared' u003d> $this->prop **   }}var_dump(new C(42));?> `

Результат виконання цього прикладу:

object(C)#1 (1) {
["propSquared"]u003d>
int(1764)
}

### Алгоритм хешування gost-crypto

Доданий алгоритм хешування `gost-crypto`. Він реалізує функцію
хешування GOST, що використовується в таблицях CryptoPro S-box, визначених
[RFC 4357, секція 11.2](http://www.faqs.org/rfcs/rfc4357).

### Поліпшення SSL/TLS

Дуже багато було зроблено для покращення підтримки SSL/TLS у PHP 5.6.
Включно з [дозвіл перевірки бенкетів по
замовчуванням](migration56.incompatible.md#migration56.incompatible.peer-verification),
підтримка звірки відбитків сертифікатів, зниження впливу атаки
переєднання TLS і безлічі нових [опцій контексту
SSL](context.ssl.md) для більш точного контролю за параметрами
протоколу та перевірок при використанні зашифрованих потоків.

Докладніше всі ці зміни описані в розділі цього посібника
[Зміни OpenSSL у PHP 5.6.x](migration56.openssl.md)

### Підтримка асинхронності [pgsql](book.pgsql.md)

Модуль [pgsql](book.pgsql.md) тепер підтримує асинхронні
з'єднання та запити, тим самим дозволяючи неблокуючу взаємодію з
базами даних PostgreSQL. Асинхронні з'єднання можуть бути встановлені
за допомогою константи **`PGSQL_CONNECT_ASYNC`**, та нові функції
[pg_connect_poll()](function.pg-connect-poll.md),
[pg_socket()](function.pg-socket.md),
[pg_consume_input()](function.pg-consume-input.md) та
[pg_flush()](function.pg-flush.md) можуть бути використані для
обробки асинхронних з'єднань та запитів.
