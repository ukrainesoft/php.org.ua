- [« Зміни, що ламають зворотну
сумісність](migration70.incompatible.md)
- [Функціональність, оголошена застарілою в PHP 7.0.x
»](migration70.deprecated.md)

- [PHP Manual](index.md)
- [Міграція з PHP 5.6.x на PHP 7.0.x](migration70.md)
- Нова функціональність

## Нова функціональність

### Оголошення скалярних типів

[Оголошення скалярних типів](language.types.declarations.md) введено в
двох варіантах: примусовий (за умовчанням) та строгий. наступні типи
можуть використовуватися для оголошення параметрів (в обох варіантах):
рядки (string), цілі (`int`), числа з плаваючою точкою (float) та
логічні значення (bool). Вони доповнюють аргументи інших типів,
введених у PHP 5: імена класів, інтерфейсів, array та
[callable](language.types.callable.md).

` <?php// Примусовий режимfunction sumOfInts(int ...$ints){    return array_sum($ints);}var_dump(sumOfInts(2, '3', 4.1)); `

Результат виконання цього прикладу:

int(9)

Для встановлення строгого режиму, на початку файлу необхідно помістити
одну директиву [`declare`](control-structures.declare.md). Це
означає, що строгість оголошення скалярних типів працює на рівні
файлу і не торкається решти коду. Ця директива зачіпає не
тільки оголошення параметрів, але й значення функцій, що повертаються
(дивіться [оголошення повертається
типу](language.types.declarations.md)), вбудовані функції PHP та
функції завантажених модулів.

Детальну документацію та приклади використання читайте у розділі
[декларація типів](language.types.declarations.md).

### Оголошення значень, що повертаються

У PHP 7 додано підтримку [оголошення повертається
типу](language.types.declarations.md). Аналогічно як і [оголошення
типів аргументів] (language.types.declarations.md), оголошення типу
значення, що повертається вказує, значення якого типу повинна повернути
функція. Для оголошення типу значення, що повертається доступні всі ті ж
[типи](language.types.declarations.md), що й для оголошення типів
аргументів.

`<?phpfunction arraysSum(array ...$arrays): array{  return array_map(function(array $array): int {         return array_sum($r) ,3], [4,5,6], [7,8,9])); `

Результат виконання цього прикладу:

Array
(
[0] u003d> 6
[1] u003d> 15
[2] u003d> 24
)

Повну документацію та приклади використання читайте у розділі про
[Оголошення типу, що повертається](language.types.declarations.md).

### Оператор об'єднання з null

Було додано оператор об'єднання з null (`??`), що є
синтаксичним цукром для досить поширеної дії, коли
спільно використовуються тернарний оператор та функція
[isset()](function.isset.md). Він повертає перший операнд, якщо він
заданий і не дорівнює **`null`**, а у протилежному випадку повертає другий
операнд.

` <?php// Вилучаємо значення $_GET['user'], а якщо воно не задано,// то повертаємо 'nobody'$username u003d $_GET['user'] ?? 'nobody';// Це ідентичному наступному коду:$username u003d isset($_GET['user']) ? $_GET['user'] : 'nobody';// Даний оператор можна використовувати в ланцюжку. 'user'], і якщо він також не заданий, то привласнюємо 'nobody'.$username u003d $_GET['user'] ?? $_POST['user'] ?? 'nobody';?> `

### Оператор spaceship (космічний корабель)

Цей оператор призначений для порівняння двох виразів. Він повертає
-1, 0 або 1 якщо `$a`, відповідно, менше, одно або більше ніж
`$b`. Порівняння проводиться відповідно до [правил порівняння
типів] (types.comparisons.md) PHP.

`<?php// Цілі числаecho 1 <u003d> 1; // 0echo 1 <u003d> 2; // -1echo 2 <u003d> 1; // 1// Числа з плаваючою точкоюecho 1.5 <u003d> 1.5; // 0echo 1.5 <u003d> 2.5; // -1echo 2.5 <u003d> 1.5; // 1//Рядокecho "a" <u003d> "a"; // 0echo "a" <u003d> "b"; // -1echo "b" <u003d> "a"; // 1?> `

### Визначення констант масивів за допомогою [define()](function.define.md)

Можна визначити константу типу array за допомогою функції
[define()](function.define.md). У PHP 5.6 такі константи можна було
задавати лише за допомогою [`const`](language.constants.syntax.md).

` <?phpdefine('ANIMALS', [   'dog',   ''cat',   ''bird']);echo ANIMALS[1]; // виводить "cat"?> `

### Анонімні класи

Було додано підтримку анонімних класів за допомогою `new class`. Їх
можна використовувати тоді, коли потрібен одноразовий клас та створювати
повноцінний клас, а потім його об'єкт не має сенсу:

`<?phpinterface Logger {    public function log(string $msg);}class Application {    private $logger; public function getLogger(): Logger {         return $this->logger; }    public function setLogger(Logger $logger) {         $this->logger u003d $logger; }}$app u003d new Application;$app->setLogger(new class implements Logger {    public function log(string $msg) {          echo $msg; |);

Результат виконання цього прикладу:

object(class@anonymous)#2 (0) {
}

Детальну документацію та приклади використання читайте у розділі про
[Анонімні класи](language.oop5.anonymous.md).

### Синтаксис кодування Unicode

Він приймає шістнадцятковий код Unicode і записуємо його у форматі
UTF-8 у подвійних лапках або форматі heredoc. Будь-який коректний код буде
прийнятий. Ведучі нулі за бажанням.

` echo "\u{aa}";echo "\u{0000aa}";echo "\u{9999}";`

Результат виконання цього прикладу:

ª
ª (Те саме, що й перший варіант, але з провідними нулями)
향

### [Closure::call()](closure.call.md)

[Closure::call()](closure.call.md) є більш продуктивним і
коротким способом тимчасового зв'язування області дії об'єкта з
замиканням та його викликом.

` <?phpclass A {private $x u003d 1;}// До PHP 7$getX u003d function() {return $this->x;};$getXCB u003d $getX->bindTo(new A, '' ; // проміжне замиканняecho $getXCB();// PHP 7+$getX u003d function() {return $this->x;};echo $getX->call(new A); `

Результат виконання цього прикладу:

1
1

### [unserialize()](function.unserialize.md) з фільтрацією

Ця функціональність забезпечує більш високий рівень безпеки при
десеріалізації об'єктів із неперевіреними даними. Це дозволяє
запобігти можливій ін'єкції коду, дозволяючи розробнику
використовувати білий список класів для десеріалізації.

` <?php// Преобразование всех объектов в __PHP_Incomplete_Class$data u003d unserialize($foo, ["allowed_classes" u003d> false]);// Преобразование всех объектов, кроме MyClass и MyClass2 в __PHP_Incomplete_Class$data u003d unserialize($foo, [ "allowed_classes" u003d> ["MyClass", "MyClass2"]]);// Поведінка за замовчуванням приймає всі класи (можна просто не задавати другий аргумент)$data u003d unseria ; `

### [IntlChar](class.intlchar.md)

Новий клас [IntlChar](class.intlchar.md) додає нову
функціональність у ICU. Клас визначає кілька статичних методів та
констант маніпулювання символами Unicode.

` <?phpprintf('%x', IntlChar::CODEPOINT_MAX);echo IntlChar::charName('@');var_dump(IntlChar::ispunct('!')); `

Результат виконання цього прикладу:

10ffff
COMMERCIAL AT
bool(true)

Для використання цього класу необхідно встановити модуль
[Intl](book.intl.md).

### Очікування

[Очікування](function.assert.md#function.assert.expectations)
покращеною, обернено сумісною версією старої функції
[assert()](function.assert.md). Вони дозволяють робити припущення з
нульовою вартістю у промисловому коді та надають можливість
викидати користувацькі винятки у разі провалу очікування.

Разом з тим, що старе API підтримується,
[assert()](function.assert.md) тепер є мовною конструкцією,
приймає першим аргументом висловлювання, а не тільки рядки (string) для
оцінки чи логічні значення (bool) для перевірки.

` <?phpini_set('assert.exception', 1);class CustomError extends AssertionError {}assert(false, new CustomError('Повідомлення про помилку'));?> `

Результат виконання цього прикладу:

Fatal error: Uncaught CustomError: Повідомлення про помилку

Детальний опис цього функціоналу, а також інструкції
конфігурування для тестових та промислових середовищ, читайте у секції
[Очікування](function.assert.md#function.assert.expectations) розділу,
присвяченому [assert()](function.assert.md).

### Групові оголошення `use`

Класи, функції та константи імпортовані з одного і того ж
[`namespace`](language.namespaces.definition.md), тепер можна
групувати в одному операторі
[`use`](language.namespaces.importing.md).

` <?php// До PHP 7use some
amespace\ClassA;use some
amespace\ClassB;use some
amespace\ClassC as C;use function some
amespace n_a;use function some
amespace n_b;use function some
amespace n_c;use const some
amespace\ConstA;use const some
amespace\ConstB;use const some
amespace\ConstC;// PHP 7+use some
amespace\{ClassA, ClassB, ClassC as C};use function some
amespace\{fn_a, fn_b, fn_c};use const some
amespace\{ConstA, ConstB, ConstC};?> `

### Вираз return в генераторах

Ця функціональність додана до генераторів, введених у PHP 5.5. Вона
дозволяє використовувати оператор `return` у генераторах як
остаточного значення, що повертається (повернення за посиланням неприпустимо).
Це значення можна отримати за допомогою нового методу
`Generator::getReturn()`, який можна використовувати тільки після того,
як генератор повернув усі згенеровані значення.

`<?php$gen u003d (function() {    yield 1;    yield 2;   return 3;})();foreach ($gen as $val) { P|$| , PHP_EOL; `

Результат виконання цього прикладу:

1
2
3

Можливість явно отримувати остаточне значення генератора є
дуже корисною, оскільки дозволяє клієнтському коду, що використовує
генератор, отримувати та обробити останнє значення генератора,
після якого точно нічого більше не буде. Це дуже простіше, ніж
змушувати розробника перевіряти, чи останнє значення повернулося і
якось особливого його обробляти.

### Делегація генератора

Тепер генератор може автоматично делегувати іншому генератору,
об'єкту класу, що реалізує [Traversable](class.traversable.md) або
масиву без необхідності писати в ньому додаткову обробку
отриманих значень. Досягається це за допомогою конструкції
[`yield from`](language.generators.syntax.md#control-structures.yield.from).

`<?phpfunction gen(){   yield 1; yield 2; yield from gen2();}function gen2(){   yield 3; yield 4;}foreach (gen() as $val){   echo $val, PHP_EOL;}?> `

Результат виконання цього прикладу:

1
2
3
4

### Функція цілісного поділу [intdiv()](function.intdiv.md)

Нова функція [intdiv()](function.intdiv.md) виробляє ціле чисельне
розподіл операндів і повертає його результат.

` <?phpvar_dump(intdiv(10, 3));?> `

Результат виконання цього прикладу:

int(3)

### Опції сесій

Тепер [session_start()](function.session-start.md) приймає масив
опцій, які перевизначать [конфігураційні директиви
сесії](session.configuration.md) встановлені у php.ini.

Також опції були розширені включеною за замовчуванням опцією
[session.lazy_write](session.configuration.md#ini.session.lazy-write),
яка говорить PHP про те, що файл сесії треба перезаписувати, тільки
якщо змінилися дані сесії, та опцією `read_and_close`, яку можна
встановити тільки через [session_start()](function.session-start.md) для
того, щоб PHP закривав сесію відразу як прочитає її дані і не
вносив до неї будь-яких змін.

Наприклад, для встановлення
[session.cache_limiter](session.configuration.md#ini.session.cache-limiter)
рівним `private` та негайному закриття сесії після читання її даних:

` <?phpsession_start([   'cache_limiter' u003d> 'private',   'read_and_close' u003d> true,]);?> `

### [preg_replace_callback_array()](function.preg-replace-callback-array.md)

Нова функція
[preg_replace_callback_array()](function.preg-replace-callback-array.md)
дозволяє писати чистіший код, коли потрібно використовувати функцію
[preg_replace_callback()](function.preg-replace-callback.md). До PHP 7
при необхідності обробити різні регулярні вирази різними
функціями доводилося для кожної такої обробки писати окремий виклик
функції.

Тепер можна використовувати одну функцію, передаючи до неї асоціативний
масив, ключами якого є регулярні вирази, а значеннями -
функції зворотного дзвінка.

### Функції [CSPRNG](book.csprng.md)

Було додано дві нові кросплатформні функції для генерації.
криптографічно безпечних рядків та цілих чисел:
[random_bytes()](function.random-bytes.md) та
[random_int()](function.random-int.md).

### Тепер функція [list()](function.list.md) завжди може розпаковувати об'єкти, що реалізують [ArrayAccess](class.arrayaccess.md)

Раніше функція [list()](function.list.md) не гарантувала коректну
обробку об'єктів, що реалізують [ArrayAccess](class.arrayaccess.md).
Тепер це виправлено.

### Інші зміни

- Додана можливість доступу до методів та властивостей класу при
клонування, тобто `(clone $ foo) -> bar () `.
