- [« Вбудовані функції](functions.internal.md)
- [Стрілкові функції»] (functions.arrow.md)

- [PHP Manual](index.md)
- [Функції](language.functions.md)
- анонімні функції

## Анонімні функції

Анонімні функції, також відомі як замикання (closures), дозволяють
створювати функції, які мають певних імен. Вони найбільш корисні в
якості значень [callable](language.types.callable.md)-параметрів,
але також можуть мати безліч інших застосувань.

Анонімні функції реалізуються з використанням класу
[[Closure](class.closure.md)](class.closure.md).

**Приклад #1 Приклад анонімної функції**

`<?phpecho preg_replace_callback('~-([a-z])~', function ($match) {   return strtoupper($match[1]);}, 'hello-world');// виведе helloWorld?> `

Замикання також можуть бути використані як значення змінних;
PHP автоматично перетворює такі вирази в екземпляри внутрішнього
класу [Closure](class.closure.md). Присвоєння замикання змінної
використовує той же синтаксис, що і для будь-якого іншого присвоєння,
включаючи завершальну точку з комою:

**Приклад #2 Приклад присвоєння анонімної функції змінної**

` <?php$greet u003dfunction($name){    printf("Привіт,%s
", $name);};$greet('Світ');$greet('PHP');?> `

Замикання можуть успадковувати змінні з батьківської області
видимості. Будь-яка подібна змінна має бути оголошена в конструкції
`use`. Починаючи з PHP 7.1 ці змінні не повинні включати
[superglobals](language.variables.predefined.md), `$this` та змінні
з тими самими іменами, як і параметри функції. Оголошення типу
значення значення функції, що повертається, має бути поміщено *після* конструкції
`use`.

**Приклад #3 Спадкування змінних із батьківської області видимості**

` <?php$message u003d 'привіт';// Без "use"$example u003d function () {   var_dump($message);};$example();// Спадкуємо $message$example u003d $message) {    var_dump($message);};$example();// Значення успадкованої змінної задано там, де функція визначена,// но не там, де ''$; / Скинемо message$message u003d 'привіт';// Успадкування за посилання$example u003d function () use (&$message) {    var_dump($message);}іменне  / залишається тем ж внутрі виклику функції$message u003d 'мир';echo $example();// Замикання можуть приймати звичайніаргументи$example u003d function ($arg)                         $message);};$example("привіт");// Оголошення типу повертаного значення іде після конструкції use$example u003d function () use ($message): string {   $$ example());?> `

Результатом виконання цього прикладу буде щось подібне:

Notice: Undefined variable: message in /example.php on line 6
NULL
string(5) "привіт"
string(5) "привіт"
string(5) "привіт"
string(5) "світ"
string(11) "привіт світ"
string(11) "привіт світ"

Починаючи з PHP 8.0.0, список спадкових змін може завершуватися
комою, яка буде проігнорована.

Спадкування змінних з батьківської області видимості *не* те ж
Саме використання глобальних змінних. Глобальні змінні
існують у глобальній області видимості, яка не змінюється, поза
Залежно від того, яка функція виконується в даний момент.
Батьківська область видимості – це функція, в якій було оголошено
замикання (не обов'язково та сама, з якої воно було викликане).
Дивіться наступний приклад:

**Приклад #4 Замикання та область видимості**

`<?php// Базовий кошик покупок, містить список доданих// продуктів і кількість кожного продукту. Включає метод,// обчислює загальну ціну елементів кошини з допомогою// callback-замикання.class Cart{   const PRICE_BUTTER  u003d 1.00; const PRICE_MILK    u003d 3.00; const PRICE_EGGS u003d u003d 6.95; protected $products u003d array(); public function add($product, $quantity)    {        $this->products[$product] u003d $quantity; }    public function getQuantity($product)    {        return isset($this->products[$product]) ? $this->products[$product] :                FALSE; }    public function getTotal($tax)    {        $total u003d 0.00; $callback u003d            function ($quantity, $product) use ($tax, &$total)            {                $pricePerItem u003d constant(__CLASS__ . "::PRICE_" .                    strtoupper($product)); $total +u003d ($pricePerItem * $quantity) * ($tax + 1.0); }; array_walk($this->products, $callback); return round($total, 2); }}$my_cart u003d new Cart;// Добавляємо кілька елементів в кошок$my_cart->add('butter', 1);$my_cart->add('milk', 3);$my_cart->sd , 6);// Виводимо загальну суму з 5% податком на продаж.print $my_cart->getTotal(0.05) . "
";// Результатом буде 54.29?> `

**Приклад #5 Автоматичне зв'язування `$this`**

` <?phpclass Test{    public function testing()    {       return function() {             var_dump$ }; }}$object u003d new Test;$function u003d $object->testing();$function();?> `

Результат виконання цього прикладу:

object(Test)#1 (0) {
}

При оголошенні в контексті класу поточний клас буде автоматично
пов'язаний з ним, роблячи $this доступним всередині функцій класу. Якщо ви не
хочете автоматичного зв'язування з поточним класом, використовуйте
[статичні анонімні
функції](functions.anonymous.md#functions.anonymous-functions.static).

### Статичні анонімні функції

Анонімні функції можуть бути оголошені статично. Це запобіжить їх
автоматичне зв'язування із поточним класом. Об'єкти також не будуть з
ними пов'язані під час виконання.

**Приклад #6 Спроба використовувати `$this` у статичній анонімній
функції**

` <?phpclass Foo{    function __construct()   {        $func u003d static function() {             | }; $func(); }};new Foo();?> `

Результат виконання цього прикладу:

Notice: Undefined variable: this in %s on line %d
NULL

**Приклад #7 Спроба зв'язати об'єкт із статичною анонімною функцією**

` <?php$func u003d static function() {    // тіло функції};$func u003d $func->bindTo(new StdClass);$func();?> `

Результат виконання цього прикладу:

Warning: Cannot bind an instance to a static closure в %s on line %d

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------|
| 7.1.0 | Анонімні функції не можуть замикатися навколо [superglobals](language.variables.predefined.md), `$this` або будь-якої змінної з тим самим ім'ям, що й параметр. |

### Примітки

> **Примітка**: Спільно із замиканнями можна використовувати функції
> [func_num_args()](function.func-num-args.md),
> [func_get_arg()](function.func-get-arg.md) та
> [func_get_args()](function.func-get-args.md).
