- [« Стрілкові функції](functions.arrow.md)
- [Класи та об'єкти »](language.oop5.md)

- [PHP Manual](index.md)
- [Функції](language.functions.md)
- Callback-функції як об'єкти першого класу

Callback-функції як об'єкти першого класу

Callback-функції як об'єкти першого класу представлені в PHP 8.1.0 як
спосіб створення [анонімних функцій](functions.anonymous.md) з
[callback-функцій](language.types.callable.md). Синтаксис замінює
існуючий синтаксис виклику з використанням рядків та масивів.
Перевага синтаксису полягає в тому, що він доступний для
статичного аналізу та використовує область видимості у точці, де
отримана callback-функція.

Синтаксис `CallableExpr(...)` використовується для створення об'єкта
[Closure](class.closure.md) з callback-функції. `CallableExpr`
приймає будь-який вираз, який може бути викликаний безпосередньо в
граматиці PHP:

**Приклад #1 Простий приклад callback-функції як об'єкти першого класу**

` <?phpclass Foo {   public function method() {}   public static function staticmethod() {}   public function __invoke() f|metu003du003d'$'; ;$staticmethodStr u003d 'staticmethod';$f1 u003d strlen(...);$f2 u003d $obj(...); // об'єкт, що викликається$f3 u003d $obj->method(...);$f4 u003d $obj->$methodStr(...);$f5 u003d Foo::staticmethod(...);$f6 u003d $ classStr::$staticmethodStr(...);// традиційна callback-функція з використанням рядки, масиву$f7 u003d 'strlen'(...);$f8 u003d [$obj, 'method'](...) ;$f9 u003d [Foo::class, 'staticmethod'](...);?> `

> **Примітка**:
>
> `...` є частиною синтаксису, а чи не перепусткою.

У `CallableExpr(...)` та сама семантика, що й у
[Closure::fromCallable()](closure.fromcallable.md). Тобто, на відміну
від callback-функції з використанням рядків та масивів,
`CallableExpr(...)` враховує область видимості у точці, де вона
створюється:

**Приклад #2 Порівняння області дії `CallableExpr(...)` та
традиційної callback-функції**

` <?phpclass Foo {    public function getPrivateMethod() {       return [$this, 'privateMethod']; }   private function privateMethod() {        echo __METHOD__, "
";    }}$foo u003d new Foo;$privateMethod u003d $foo->getPrivateMethod();$privateMethod();// Fatal error: Call to private method Foo  вызов выполняется вне Foo, и с этого момента будет проверяться видимость.class Foo1 {    public function getPrivateMethod() {        // Использует область, в которой получена callback-функция.        return $this->privateMethod(...); // идентично Closure ::fromCallable([$this, 'privateMethod']);   }    private function privateMethod() {       echo __METHOD__, "
";    }}$foo1 u003d new Foo1;$privateMethod u003d $foo1->getPrivateMethod();$privateMethod();  // Foo1::privateMethod?> `

> **Примітка**:
>
> Створення об'єкта за допомогою синтаксису (наприклад, `new Foo(...)`)
> не підтримується, оскільки синтаксис `new Foo()` не вважається
> callback-функцією.

> **Примітка**:
>
> Callback-функції як об'єкти першого класу не можна комбінувати з
> [оператором
> Nullsafe](language.oop5.basic.md#language.oop5.basic.nullsafe). Обидва
> наступні результати призводять до помилки часу компіляції:
>
> ` <?php$obj?->method(...);$obj?->prop->method(...);?> `
