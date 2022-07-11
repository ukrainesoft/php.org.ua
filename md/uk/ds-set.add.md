- [« Набір](class.ds-set.md)
- [Ds\Set::allocate »](ds-set.allocate.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Додає значення до набору

# Ds\Set::add

(PECL ds \>u003d 1.0.0)

Ds\Set::add — Додає значення до набору

### Опис

public
**Ds\Set::add**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

Додає всі задані значення набір, якщо вони раніше не були
додані.

> **Примітка**:
>
> Підтримуються значення типу об'єкта. Якщо об'єкт реалізує інтерфейс
> **Ds\Hashable**, перевірка здійснюється шляхом виклику методу об'єкта
> `equals`. Якщо об'єкт не реалізує інтерфейс **Ds\Hashable**, об'єкти
> повинні посилатися на той самий екземпляр класу.

**Застереження**

Усі порівняння суворі (за типом та значенням).

### Список параметрів

`values`
Значення, що додаються.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::add()** зі скалярними
значеннями**

` <?php$set u003d new \Ds\Set();$set->add(1);$set->add(1);$set->add(2);$set->add(3) ;// Виробляється суворе порівняння, тому "1" не приведеться к int(1)$set->add("1");$set->add(true);var_dump($set);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Set)#1 (5) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
[3]u003d>
string(1) "1"
[4]u003d>
bool(true)
}

**Приклад #2 Приклад використання **Ds\Set::add()** з об'єктами**

` <?phpclass HashableObject implements \Ds\Hashable{    /**     * Довільне значення для використання як значення хешу. * Не визначає рівність. */    private $value; public function __construct($value)    {        $this->value u003d $value; }    public function hash()    {        return $this->value; }    public function equals($obj): bool    {       return$$is->value u003du003du003d$obj->value; }}$set u003d new \Ds\Set();$obj u003d new \ArrayIterator([]);// При додаванні одного і того ж примірника декілька раз, додаеться тільки$ob> $set->add($obj);// При додаванні кількох примірників одного і того об'єкта, вони все додадуться. );// При додаванні об'єктів з однаковим хешем кілька раз, додасться тільки перший.$set->add(new \HashableObject(1));$set->add(new \HashableObject(1)); (new \HashableObject(2));$set->add(new \HashableObject(2));var_dump($set);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Set)#1 (5) {
[0]u003d>
object(ArrayIterator)#2 (1) {
["storage":"ArrayIterator":private]u003d>
array(0) {
}
}
[1]u003d>
object(stdClass)#3 (0) {
}
[2]u003d>
object(stdClass)#4 (0) {
}
[3]u003d>
object(HashableObject)#5 (1) {
["value":"HashableObject":private]u003d>
int(1)
}
[4]u003d>
object(HashableObject)#6 (1) {
["value":"HashableObject":private]u003d>
int(2)
}
}
