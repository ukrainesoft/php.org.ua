- [« Конструктори та деструктори](language.oop5.decon.md)
- [Спадкування »](language.oop5.inheritance.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
-   Область видимості

## Область видимості

Область видимості властивості, методу чи константи (починаючи з PHP 7.1.0)
може бути визначена шляхом використання наступних ключових слів у
оголошенні: `public`, `protected` або `private`. Доступ до властивостей та
методам класу, оголошеним як public (загальнодоступний), дозволено
звідусіль. Модифікатор protected (захищений) дозволяє доступ самому
класу, що успадковує його класи та батьківські класи. Модифікатор
private (закритий) обмежує область видимості так, що тільки клас,
де оголошено сам елемент, має щодо нього доступ.

### Область видимості якості

Властивості класу можуть бути визначені як public, private або protected.
Властивості, оголошені без явного ключового слова області видимості,
визначаються як загальнодоступні.

**Приклад #1 Оголошення якості класу**

` <?php/** * Визначення MyClass */class MyClass{    public $public u003d 'Public'; protected $protected u003d 'Protected'; private $private u003d 'Private'; function printHello()   {        echo $this->public; echo $this->protected; echo $this->private; }}$obj u003d new MyClass();echo $obj->public; //Працюєecho$obj->protected; // Непоправна помилкаecho $obj->private; // Непоправна помилка$obj->printHello(); // Виводить Public, Protected і Private/** * Визначення MyClass2 */class MyClass2 extends MyClass{    // Ми можемо перевизначити за          protected $protected u003d 'Protected2'; function printHello()   {        echo $this->public; echo $this->protected; echo $this->private; }}$obj2 u003d new MyClass2();echo $obj2->public; //Працюєecho$obj2->private; // Невизначених $obj2->protected; // Непоправна помилка$obj2->printHello(); // Виводить Public2, Protected2, Undefined?> `

### Область видимості методу

Методи класу можуть бути визначені як public, private або protected.
Методи, оголошені без зазначення області видимості, визначаються як
public.

**Приклад #2 Оголошення методу**

` <?php/** * Определение MyClass */class MyClass{    // Объявление общедоступного конструктора    public function __construct() { }    // Объявление общедоступного метода    public function MyPublic() { }    // Объявление защищённого метода    protected function MyProtected() { }    // Оголошення закритого методу    private function MyPrivate() { }    // Це загальнодоступний метод   function F    $this->MyProtected(); $this->MyPrivate(); }}$myclass u003d new MyClass;$myclass->MyPublic(); //Работает$myclass->MyProtected(); // Непоправна помилка$myclass->MyPrivate(); // Непоправна помилка$myclass->Foo(); // Працює загальнодоступний, захищений і закритий/** * Визначення MyClass2 */class MyClass2 extends MyClass{    // Це загальнодоступний метод                                     $this->MyProtected(); $this->MyPrivate(); // Непоправна помилка    }}$myclass2 u003d new MyClass2;$myclass2->MyPublic(); //Работает$myclass2->Foo2(); // Працює загальнодоступний і захищений, закритий не працюєclass Bar{    public function test() {        $this->testPrivate(); $this->testPublic(); }    public function testPublic() {       echo "Bar::testPublic
";    }    private function testPrivate() {        echo "Bar::testPrivate
";    }}class Foo extends Bar{    public function testPublic() {        echo ""Foo::testPublic
";    }    private function testPrivate() {        echo "Foo::testPrivate
";    }}$myFoo u003d new Foo();$myFoo->test(); // Bar::testPrivate                 // Fo>>

### Область видимості констант

Починаючи з PHP 7.1.0, константи класу можуть бути визначені як public,
private або protected. Константи, оголошені без зазначення області
мабуть, визначаються як public.

**Приклад #3 Оголошення констант, починаючи з PHP 7.1.0**

`<?php/** * Оголошення класу MyClass */class MyClass{    // Оголошення загальнодоступної константи    public const MY_PUBLIC u003d 'public'; // Оголошення захищеної константи    protected const MY_PROTECTED u003d 'protected'; // Оголошення закритої константи     private const MY_PRIVATE u003d 'private'; public function foo()    {       echo self::MY_PUBLIC; echo self::MY_PROTECTED; echo self::MY_PRIVATE; }}$myclass u003d new MyClass();MyClass::MY_PUBLIC; //РаботаетMyClass::MY_PROTECTED; // Непоправна помилкаMyClass::MY_PRIVATE; // Непоправна помилка$myclass->foo(); // Виводяться константи public, protected і private/** * Оголошення класу MyClass2 */class MyClass2 extends MyClass{     // Публічне метод       echo self::MY_PROTECTED; echo self::MY_PRIVATE; // Непоправна помилка    }}$myclass2 u003d new MyClass2;echo MyClass2::MY_PUBLIC; //Работает$myclass2->foo2(); // Виводяться константи public і protected, але не private?> `

### Видимість з інших об'єктів

Об'єкти, які мають загальний тип (успадковуються від одного класу), мають
доступ до елементів з модифікаторами private та protected один одного, навіть
якщо не є одним і тим самим екземпляром. Це пояснюється тим, що
реалізація видимості елементів відома усередині цих об'єктів.

**Приклад #4 Доступ до елементів з модифікатором private з об'єктів
одного типу**

` <?phpclass Test{    private $foo; public function __construct($foo)    {        $this->foo u003d $foo; }    private function bar()    {        echo 'Доступ к закритому методу.'; }    public function baz(Test $other)   {        // Ми можемо змінити закрите властивість:     | var_dump($other->foo); // Ми також можемо викликати закритий метод:        $other->bar(); }}$test u003d new Test('test');$test->baz(new Test('other'));?> `

Результат виконання цього прикладу:

string(6) "привіт"
Доступ до закритого способу.
