- [«Повернення значень](functions.returning-values.md)
- [Вбудовані функції »](functions.internal.md)

- [PHP Manual](index.md)
- [Функції](language.functions.md)
- Звернення до функцій через змінні

## Звернення до функцій через змінні

PHP підтримує змінні функції. Це означає, що якщо до
імені змінної приєднані круглі дужки, PHP шукає функцію з тим же
ім'ям, як і результат обчислення змінної, і намагається її виконати.
Цю можливість можна використовувати для реалізації зворотних викликів,
таблиць функцій та безлічі інших речей.

Змінні функції не працюватимуть з такими мовними конструкціями
як [echo](function.echo.md), [print](function.print.md),
[unset()](function.unset.md), [isset()](function.isset.md),
[empty()](function.empty.md), [include](function.include.md),
[require](function.require.md) тощо. Вам необхідно реалізувати свою
функцію-обертку для того, щоб наведені вище конструкції могли
працювати зі змінними функціями.

**Приклад #1 Робота з функціями за допомогою змінних**

`<?phpfunction foo() {    echo "В foo()<br />
";}function bar($arg u003d ''){    echo "В bar(); аргумент був '$arg'.<br />
";}// Функція-обгортка для echofunction echoit($string){    echo $string;}$func u003d 'foo';$func();         // Викликає ''$| 'test');  // Викликає функцію bar()$func u003d 'echoit';$func('test');  // Викликає функцію echoit()?> `

Ви також можете викликати методи об'єкта, використовуючи можливості PHP для
роботи із змінними функціями.

**Приклад #2 Звернення до методів класу за допомогою змінних**

` <?phpclass Foo{   function Variable()    {       $name u003d 'Bar'; $this->$name(); // Викликаємо метод Bar()     }   function Bar()   {        echo "Це Bar"; }}$foo u003d new Foo();$funcname u003d "Variable";$foo->$funcname(); // Звертаємось до $foo->Variable()?> `

При виклик статичних методів виклик функції "сильніше", ніж оператор
доступу до статичної властивості:

**Приклад #3 Приклад виклику змінного методу зі статичною властивістю**

`<?phpclass Foo{    static $variable u003d 'статична властивість'; static function Variable()    {        echo 'Виклик методуVariable'; }}echo Foo::$variable; // Це виведе 'статичне властивість'. Змінна $variable буде дозволена в цієї області видимості.$variable u003d "Variable";Foo::$variable(); // Це викличе $foo->Variable(), прочитавши $variable з цієї області видимості.?> `

**Приклад #4 Складні callable-функції**

` <?phpclass Foo{    static function bar()    {       echo "bar
";    }    function baz()    {        echo "baz
";    }}$func u003d array("Foo", "bar");$func(); // виведе "bar"$func u003d array(new Foo, "baz");$func(); // від "baz"$func u003d "Foo::bar";$func(); // виведе "bar"?> `

### Дивіться також

- [is_callable()](function.is-callable.md)
- [call_user_func()](function.call-user-func.md)
- [function_exists()](function.function-exists.md)
- [Змінні змінних](language.variables.variable.md)
