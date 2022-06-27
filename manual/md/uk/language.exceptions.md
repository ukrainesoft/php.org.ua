- [« Помилки в PHP 7] (language.errors.php7.md)
- [Спадкування винятків »](language.exceptions.extending.md)

- [PHP Manual](index.md)
- [Довідник мови](langref.md)
- Винятки

# Винятки

## Зміст

- [Спадкування винятків](language.exceptions.extending.md)

Модель винятків (exceptions) в PHP схожа з іншими
мовами програмування. Виняток можна згенерувати (викинути) при
допомоги оператора [`throw`](language.exceptions.md), і можна
перехопити (зловити) оператором
[`catch`](language.exceptions.md#language.exceptions.catch). Код
генеруючий виняток, повинен бути оточений блоком
[`try`](language.exceptions.md), щоб можна було
перехопити виняток. Кожен блок [`try`](language.exceptions.md)
повинен мати щонайменше один відповідний йому блок
[`catch`](language.exceptions.md#language.exceptions.catch) або
[`finally`](language.exceptions.md#language.exceptions.finally).

Якщо викинуто виняток, для якого немає блоку
[`catch`](language.exceptions.md#language.exceptions.catch) у поточній
функції, це виняток буде "випливати" по стеку виклику, поки не буде
знайдено відповідний блок
[`catch`](language.exceptions.md#language.exceptions.catch). При цьому,
всі зустрінуті блоки
[`finally`](language.exceptions.md#language.exceptions.finally) будуть
виконані. Якщо стек викликів розкрутиться до глобальної області
видимості, не зустрівши відповідного блоку
[`catch`](language.exceptions.md#language.exceptions.catch), програма
завершить роботу з фатальною помилкою, якщо у вас не налаштований
глобальний обробник винятків.

Об'єкт, що генерується, повинен належати класу
[Exception](class.exception.md) або успадковуватися від
[Exception](class.exception.md). Спроба згенерувати виняток
іншого класу призведе до фатальної помилки PHP.

Починаючи з PHP 8.0.0, ключове слово [`throw`](language.exceptions.md)
є виразом і може використовуватись у контексті інших виразів.
У ранніх версіях воно було оператором і вимагало розміщення в
окремому рядку.

### `catch`

Блок [`catch`](language.exceptions.md#language.exceptions.catch)
визначає те, як слід реагувати на викинутий виняток. В
блоці [`catch`](language.exceptions.md#language.exceptions.catch)
вказується один або більше типів винятків або помилок (Error), які
він оброблятиме. Також вказується і змінна, якою буде
присвоєно спійманий виняток (починаючи з PHP 8.0.0 ставити цю
змінну необов'язково). Викинутий виняток чи помилка будуть
оброблені першим відповідним блоком
[`catch`](language.exceptions.md#language.exceptions.catch).

Можна використати кілька блоків
[`catch`](language.exceptions.md#language.exceptions.catch),
що перехоплюють різні класи винятків. Нормальне виконання
(коли не генеруються виключення у блоках
[`try`](language.exceptions.md)) буде продовжено за останнім блоком
[`catch`](language.exceptions.md#language.exceptions.catch).
Винятки можуть бути згенеровані (або викликані ще раз) оператором
[`throw`](language.exceptions.md) всередині блоку
[`catch`](language.exceptions.md#language.exceptions.catch). Якщо ні,
то виконання буде продовжено після відпрацювання блоку
[`catch`](language.exceptions.md#language.exceptions.catch).

При генерації виключення код, наступний після виразу, що описується, не
буде виконано, а PHP спробує знайти перший блок
[`catch`](language.exceptions.md#language.exceptions.catch),
перехоплюючий виняток цього класу. Якщо виняток не буде
перехоплено, PHP видасть фатальну помилку: "Uncaught Exception ..."
(Неперехоплений виняток), якщо не було визначено обробника помилок
за допомогою функції
[set_exception_handler()](function.set-exception-handler.md).

Починаючи з PHP 7.1.0 блок
[`catch`](language.exceptions.md#language.exceptions.catch) може
приймати кілька типів винятків за допомогою символу (`|`). Це
корисно, коли різні винятки із різних ієрархій класів
обробляються однаково.

Починаючи з PHP 8.0.0, завдання змінної для спійманого виключення
опціонально. Якщо вона не задана, блок
[`catch`](language.exceptions.md#language.exceptions.catch) буде
виконуватися, але не матиме доступу до об'єкта виключення.

### `finally`

Блок [`finally`](language.exceptions.md#language.exceptions.finally)
також можна використовувати після або замість блоку
[`catch`](language.exceptions.md#language.exceptions.catch). Код у
блоці [`finally`](language.exceptions.md#language.exceptions.finally)
завжди буде виконуватись після коду в блоках
[`try`](language.exceptions.md) та
[`catch`](language.exceptions.md#language.exceptions.catch),
незалежно від того, чи був викинутий виняток, перед тим як
продовжиться нормальне виконання коду.

Одна важлива взаємодія відбувається між блоком
[`finally`](language.exceptions.md#language.exceptions.finally) та
оператором [`return`] (function.return.md). Якщо оператор
[`return`](function.return.md) зустрічається всередині блоків
[`try`](language.exceptions.md) або
[`catch`](language.exceptions.md#language.exceptions.catch), блок
[`finally`](language.exceptions.md#language.exceptions.finally) все
і буде виконаний. Крім того, оператор
[`return`](function.return.md) виконується, коли зустрічається, але
результат буде повернено після виконання блоку
[`finally`](language.exceptions.md#language.exceptions.finally). Якщо
блок [`finally`](language.exceptions.md#language.exceptions.finally)
також містить оператор [`return`](function.return.md), повертається
значення, вказане у блоці
[`finally`](language.exceptions.md#language.exceptions.finally).

### `Глобальний обробник винятків`

Якщо виняток дійшов до стеку викликів до глобальної області видимості,
воно може бути оброблене глобальним обробником винятків, якщо він
заданий. За допомогою функції
[set_exception_handler()](function.set-exception-handler.md) можна
встановити функцію, яка буде виконана замість блоку
[`catch`](language.exceptions.md#language.exceptions.catch), якщо не
знайшлося відповідного. Ефект аналогічний тому, начебто ми всю нашу
програму обернули на блок
[`try`](language.exceptions.md)-[`catch`](language.exceptions.md#language.exceptions.catch),
де за реалізацію блоку
[`catch`](language.exceptions.md#language.exceptions.catch) відповідає
встановлена функція.

### Примітки

> **Примітка**:
>
> Внутрішні функції PHP в основному використовують [повідомлення про
> помилках](errorfunc.configuration.md#ini.error-reporting), і лише
> нові [об'єктно-орієнтовані](language.oop5.md) модулі використовують
> винятки. Однак, помилки можна легко перетворити у виключення з
> за допомогою класу [ErrorException](class.errorexception.md). Однак це
> не спрацює для фатальних помилок.
>
> **Приклад #3 Перетворення повідомлення про помилки на виключення**
>
> ` <?phpfunction exceptions_error_handler($severity, $message, $filename, $lineno) {   throw new ErrorException($message, 0,$severity, $filename, $lineno);}

**Підказка**

[Стандартна бібліотека PHP (SPL)](intro.spl.md) надає хороший
набір [вбудованих класів винятків](spl.exceptions.md).

### Приклади

**Приклад #4 Викидання винятків**

` <?phpfunction inverse($x) {    if (!$x) {        throw new Exception('Поділ на нуль'); }   return 1/$x;}try {   echo inverse(5) . "
";   echo inverse(0) . "
";} catch (Exception $e) {    echo 'Викинуто виняток: ',  $e->getMessage(), "
";}//Продовження виконанняecho "Привіт, світ
";?> `

Результат виконання цього прикладу:

0.2
Викинутий виняток: Поділ на нуль.
Привіт світ

**Приклад #5 Обробка виключень за допомогою блоку
[`finally`](language.exceptions.md#language.exceptions.finally)**

` <?phpfunction inverse($x) {    if (!$x) {        throw new Exception('Поділ на нуль'); }   return 1/$x;}try {   echo inverse(5) . "
";} catch (Exception $e) {    echo 'Впіймано виняток: ',  $e->getMessage(), "
";} finally {    echo "Перший блок finally.
";}try {    echo inverse(0) . "
";} catch (Exception $e) {    echo 'Впіймано виняток: ',  $e->getMessage(), "
";} finally {    echo "Другий блок finally.
";}//Продовження нормального виконанняecho "Привіт, світ
";?> `

Результат виконання цього прикладу:

0.2
Перший блок finally.
Спіймано виняток: Поділ на нуль.
Другий блок finally.
Привіт світ

**Приклад #6 Взаємодія між блоками
[`finally`](language.exceptions.md#language.exceptions.finally) та
[`return`](function.return.md)**

` <?phpfunction test() {    try {         throw new Exception('foo'); } catch (Exception $e) {        return 'catch'; } finally {        return 'finally'; }}echo test();?> `

Результат виконання цього прикладу:

finally

**Приклад #7 Вкладені винятки**

` <?phpclass MyException extends Exception { }class Test {    public function testing() {        try {            try {                throw new MyException('foo!'); } catch (MyException $e) {                 // повторний викид виключення                  | }        } catch (Exception $e) {           var_dump($e->getMessage()); }    }}$foo u003d new Test;$foo->testing();?> `

Результат виконання цього прикладу:

string(4) "foo!"

**Приклад #8 Обробка кількох винятків в одному блоці catch**

`<?phpclass MyException extends Exception { }class MyOtherException extends Exception { }class Test {    public function testing()                               } catch (MyException | MyOtherException $e) {           var_dump(get_class($e)); }    }}$foo u003d new Test;$foo->testing();?> `

Результат виконання цього прикладу:

string(11) "MyException"

**Приклад #9 Приклад блоку
[`catch`](language.exceptions.md#language.exceptions.catch) без
вказівки змінної**

Допустимо починаючи з PHP 8.0.0

` <?phpclass SpecificException extends Exception {}function test() {    throw new SpecificException('Ой!');}try {    test();} catch (SpecificException) {    print "Было поймано исключение SpecificException, но нам безразлично, что у нього всередині.";}?> `

**Приклад #10 Throw як вираз**

Допустимо починаючи з PHP 8.0.0

`<?phpclass SpecificException extends Exception {}function test()                        | );}?> `
