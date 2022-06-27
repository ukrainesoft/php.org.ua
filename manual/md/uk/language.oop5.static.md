- [« Оператор дозволу області видимості
(::)](language.oop5.paamayim-nekudotayim.md)
- [Абстрактні класи »](language.oop5.abstract.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Ключове слово static

## Ключове слово static

**Підказка**

Ця сторінка описує використання ключового слова `static` для
визначення статичних методів та властивостей. `static` також може
використовуватися для визначення статичних
змінних](language.variables.scope.md#language.variables.scope.static)
і [пізнього статичного
зв'язування](language.oop5.late-static-bindings.md). Для отримання
інформації про таке застосування ключового слова `static` зверніться за
вищезгаданим сторінкам.

Оголошення властивостей та методів класу статичними дозволяє звертатися до
ним без створення екземпляра класу. До них також можна отримати доступ
статично у створеному екземплярі об'єкта класу.

### Статичні методи

Оскільки статичні методи викликаються без створення екземпляра класу, то
псевдозмінна `$this` недоступна всередині статичних методів.

**Увага**

Виклик нестатичних методів статично викликає помилку
[Error](class.error.md).

До PHP 8.0.0 виклик нестатичних методів статично було оголошено
застарілим та викликав помилку рівня **`E_DEPRECATED`**.

**Приклад #1 Приклад статичного методу**

` <?phpclass Foo { {   public static function aStaticMethod() {         // ...   }}Foo::aStaticMethod();$classname u003d';

### Статичні властивості

Доступ до статичних властивостей здійснюється за допомогою [оператора
дозволу області видимості](language.oop5.paamayim-nekudotayim.md)
(`::`), і до них не можна отримати доступ через оператор об'єкта (`->`).

На клас можна посилатися за допомогою змінної. Значення змінної в
такому разі не може бути ключовим словом (наприклад, `self`, `parent` та
`static`).

**Приклад #2 Приклад статичної властивості**

`<?phpclass Foo{    public static $my_static u003d 'foo'; public function staticValue() {        return self::$my_static; }}class Bar extends Foo{    public function fooStatic() {        return parent::$my_static; }}print Foo::$my_static . "
";$foo u003d new Foo();print $foo->staticValue() . "
";print $foo->my_static . "
";      // Не визначено властивість my_staticprint $foo::$my_static . "
";$classname u003d 'Foo';print $classname::$my_static . "
";print Bar::$my_static . "
";$bar u003d new Bar();print $bar->fooStatic() . "
";?> `

Результат виконання цього прикладу в PHP 8 аналогічний:

foo
foo

Notice: Accessing static property Foo::$my_static as non static in /in/V0Rvv on line 23

Warning: Undefined property: Foo::$my_static in /in/V0Rvv on line 23

foo
foo
foo
foo
