- [«Ключове слово static](language.oop5.static.md)
- [Інтерфейси об'єктів »](language.oop5.interfaces.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Абстрактні класи

## Абстрактні класи

PHP підтримує визначення абстрактних класів та методів. На основі
абстрактного класу не можна створювати об'єкти, і будь-який клас, що містить
хоча б абстрактний метод, може бути визначений як абстрактний.
Методи, оголошені абстрактними, несуть, сутнісно, лише описовий
сенс не можуть включати реалізацію.

При успадкування від абстрактного класу, всі методи, помічені
абстрактними в батьківському класі повинні бути визначені в дочірньому
класі та дотримуватися звичайних правил
[спадкування](language.oop5.inheritance.md) та [сумісності
сигнатури](language.oop5.basic.md#language.oop.lsp).

**Приклад #1 Приклад абстрактного класу**

`<?phpabstract class AbstractClass{     // Дані методи мусять визначені в дочірнім класі    abstract protected function getValue(); abstract protected function prefixValue($prefix); // Загальний метод    public function printOut() {         print $this->getValue() . "
";    }}class ConcreteClass1 extends AbstractClass{    protected function getValue() {        return "ConcreteClass1";    }    public function prefixValue($prefix) {        return "{$prefix}ConcreteClass1";    }}class ConcreteClass2 extends AbstractClass{    public function getValue() {        return "ConcreteClass2";    }    public function prefixValue($prefix) {        return "{$prefix}ConcreteClass2";    }}$class1 u003d new ConcreteClass1;$class1->printOut();echo $class1->prefixValue('FOO_' ) ."
";$class2 u003d new ConcreteClass2;$class2->printOut();echo $class2->prefixValue('FOO_') ."
";?> `

Результат виконання цього прикладу:

ConcreteClass1
FOO_ConcreteClass1
ConcreteClass2
FOO_ConcreteClass2

**Приклад #2 Приклад абстрактного класу**

` <?phpabstract class AbstractClass{    // Наш абстрактный метод требует только определить необходимые аргументы    abstract protected function prefixName($name);}class ConcreteClass extends AbstractClass{    // Наш дочерний класс может определить необязательные аргументы, не указанные в объявлении родительского метода    public function prefixName($name,$separatoru003du003d".")|{        if ($name u003du003d "Pacman") {            $prefix u003d "Mr" } elseif ($name u003du003du003d"Pacwoman") {            $prefix u003d "Mrs"; } else {             $prefix u003d ""; }    return "{$prefix}{$separator} {$name}"; }}$class u003d new ConcreteClass;echo $class->prefixName("Pacman"), "
";echo $class->prefixName("Pacwoman"), "
";?> `

Результат виконання цього прикладу:

Mr. Pacman
Mrs. Pacwoman
