- [«Властивості](language.oop5.properties.md)
- [Автоматичне завантаження класів »](language.oop5.autoload.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Константи класів

## Константи класів

[Константи](language.constants.md) також можуть бути оголошені в
межах одного класу. Область видимості констант за замовчуванням
`public`.

> **Примітка**:
>
> Константи класу може бути перевизначені дочірнім класом. Починаючи з
> PHP 8.1.0, константи класу не можуть бути перевизначені дочірнім
> класом, якщо він визначений як остаточний
> ([final](language.oop5.final.md)).

Інтерфейси також можуть містити константи. За прикладами звертайтесь до
розділ про [інтерфейси](language.oop5.interfaces.md).

До класу можна звернутись за допомогою змінної. Значення змінної не
може бути ключовим словом (наприклад, `self`, `parent` та `static`).

Зверніть увагу, що константи класу задаються один раз для всього
класу, а чи не окремо кожному за створеного об'єкта цього класу.

**Приклад #1 Оголошення та використання константи**

`<?phpclass MyClass{    const CONSTANT u003d 'значення константи'; function showConstant() {        echo self::CONSTANT . "
";    }}echo MyClass::CONSTANT . "
";$classname u003d "MyClass";echo $classname::CONSTANT . "
";$class u003d new MyClass();$class->showConstant();echo $class::CONSTANT."
";?> `

Спеціальна константа **`::class`**, якою на етапі компіляції
надається повне ім'я класу, корисна при використанні з класами,
що використовують простір імен.

**Приклад #2 Приклад використання ::class з простором імен**

` <?phpnamespace foo {    class bar {    }}   echo bar::class; // Foo ar}?> `

**Приклад #3 Приклад констант, заданих виразом**

`<?phpconst ONE u003d 1;class foo {    const TWO u003d ONE * 2; const THREEu003du003dONE++self::TWO; const SENTENCE u003d 'Значення константи THREE - ' . self::THREE;}?> `

**Приклад #4 Модифікатори видимості констант класу, починаючи з PHP
7.1.0**

`<?phpclass Foo {    public const BAR u003d 'bar'; private const BAZ u003d 'baz';}echo Foo::BAR, PHP_EOL;echo Foo::BAZ, PHP_EOL;?> `

Результат виконання цього прикладу в PHP 7.1:

bar

Fatal error: Uncaught Error: Cannot access private const Foo::BAZ in …

> **Примітка**:
>
> Починаючи з PHP 7.1.0, для констант класу можна використовувати
> Модифікатори області видимості.
