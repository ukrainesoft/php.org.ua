- [« Серіалізація об'єктів](language.oop5.serialization.md)
- [Журнал змін ООП »](language.oop5.changelog.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Коваріантність та контраваріантність

## Коваріантність та контраваріантність

У PHP 7.2.0 було додано часткову контраваріантність шляхом усунення
обмежень типу для параметрів у дочірньому методі. Починаючи з PHP 7.4.0,
додано повну підтримку коваріантності та контраваріантності.

Коваріантність дозволяє дочірньому методу повертати більш конкретний
тип, ніж тип значення його батьківського методу. В той час
як контраваріантність дозволяє типу параметра в дочірньому методі бути
менш специфічним, ніж у батьківському.

Оголошення типу вважається більш конкретним у наступному випадку:

- Видалено [об'єднання
типів](language.types.declarations.md#language.types.declarations.composite.union)
- Додано [перетин
типів](language.types.declarations.md#language.types.declarations.composite.intersection)
- Тип класу змінюється на тип дочірнього класу
- [iterable](language.types.iterable.md) змінено на масив (array)
або [Traversable](class.traversable.md)

В іншому випадку клас типу вважається менш конкретним.

### Коваріантність

Щоб проілюструвати, як працює підступність, створимо простий
абстрактний батьківський клас `Animal`. `Animal` буде розширено за рахунок
дочірніх класів `Cat` та `Dog`.

`<?phpabstract class Animal{    protected string $name; public function __construct(string $name)    {        $this->name u003d $name; }    abstract public function speak();}class Dog extends Animal{   public function speak()   {         echo $this-> name| "Рає"; }}class Cat extends Animal{    public function speak()    {        echo $this->name . "мяукає"; }} `

Зверніть увагу, що у прикладі немає методів, які повертають
значення. Буде додано кілька фабрик, які повертають новий
об'єкт типу класу `Animal`, `Cat` або `Dog`.

` <?phpinterface AnimalShelter{    public function adopt(string $name): Animal;}class CatShelter implements AnimalShelter{    public function adopt(string $name): Cat // Возвращаем класс Cat вместо Animal    {        return new Cat($name); }}class DogShelter implements AnimalShelter{    public function adopt(string $name): Dog // Повертаємо класс Dog замість Animal    {               }}$kitty u003d (new CatShelter)->adopt("Рижик");$kitty->speak();echo "
";$doggy u003d (new DogShelter)->adopt("Бобік");$doggy->speak();

Результат виконання цього прикладу:

Рижик нявкає
Бобик гавкає

### Контраваріантність

Продовжуючи попередній приклад, де ми використовували класи `Animal`,
`Cat` і `Dog`, ми введемо нові класи `Food` та `AnimalFood` і додамо в
абстрактний клас `Animal` - новий метод `eat(AnimalFood $food)`.

` <?phpclass Food {}class AnimalFood extends Food {}abstract class Animal{   protected string $name; public function __construct(string $name)    {        $this->name u003d $name; }    public function eat(AnimalFood $food)    {       echo $this->name . "Їсть". get_class($food); }} `

Щоб побачити суть контраваріантності, ми перевизначимо метод 'eat'
класу `Dog` таким чином, щоб він міг приймати будь-який об'єкт класу
`Food`. Клас `Cat` залишимо без змін.

`<?phpclass Dog extends Animal{    public function eat(Food $food) {        echo $this->name . "Їсть". get_class($food); }} `

Наступний приклад покаже поведінку контраваріантності.

` <?php$kitty u003d (new CatShelter)->adopt("Рижик");$catFood u003d new AnimalFood();$kitty->eat($catFood);echo "
";$doggy u003d (new DogShelter)->adopt("Бобік");$banana u003d new Food();$doggy->eat($banana); ``

Результат виконання цього прикладу:

Рижик їсть AnimalFood
Бобик їсть Food

Але що трапиться, якщо $kitty спробує з'їсти ('eat') банан
(`$ banana`)?

$kitty->eat($banana);

Результат виконання цього прикладу:

Error error: Uncaught TypeError: 1 passed to Animal::eat() must be an instance of AnimalFood, instance of Food given
