- [« Магічні методи](language.oop5.magic.md)
- [Клонування об'єктів »](language.oop5.cloning.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Ключове слово final

## Ключове слово final

PHP надає ключове слово `final`, розмістивши яке перед
оголошеннями методів або констант класу, можна запобігти їх
перевизначення у дочірніх класах. Якщо ж сам клас визначається з
цим ключовим словом, він не зможе бути успадкований.

**Приклад #1 Приклад остаточних (final) методів**

` <?phpclass BaseClass {   public function test() {       echo "Викликаний метод BaseClass::test()
";  }}   final public function moreTesting() {       echo "Викликаний метод BaseClass::moreTesting()
";   }}class ChildClass extends BaseClass {   public function moreTesting() {       echo "Викликаний метод ChildClass::moreTesting()
";   }}// Виконання закінчується фатальної помилкою: Cannot override final method BaseClass::moreTesting()// (Остаточний (final) метод BaseClass:: e

**Приклад #2 Приклад остаточного (final) класу**

` <?phpfinal classBaseClass {   public function test() {       echo "Викликаний метод BaseClass::test()
";   }   // Оскільки класс вже є final, ключове слово final є  надлишковим   final public function moreTesting() es|
";   }}class ChildClass extends BaseClass {}// Выполнение заканчивается фатальной ошибкой: Class ChildClass may not inherit from final class (BaseClass)// (Класс ChildClass не может быть унаследован от окончательного класса (BaseClass))?> `

**Приклад #3 Приклад остаточної (final) константи класу, починаючи з PHP
8.1.0**

`<?phpclass Foo{   final public const X u003d "foo";}class Bar extends Foo{    public const X u003d "bar";}//Помилка:Про:

> **Примітка**: Властивості не можуть бути оголошені остаточними: тільки
> класи, методи та константи (починаючи з PHP 8.1.0) можуть бути оголошені
> як остаточні (final). Починаючи з PHP 8.0.0, закриті методи не
> можуть бути оголошені остаточними, крім конструктора.
