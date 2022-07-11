- [«Синтаксис атрибутів](language.attributes.syntax.md)
- [Оголошення класів атрибутів »](language.attributes.classes.md)

- [PHP Manual](index.md)
- [Атрибути](language.attributes.md)
- Читання атрибутів за допомогою Reflection API

## Читання атрибутів за допомогою Reflection API

Для доступу до атрибутів класів, методів, функцій, параметрів, властивостей та
констант класу, в Reflection API присутній метод **getAttributes()**
для кожного з цих об'єктів рефлексії. Цей метод повертає
масив екземплярів
[ReflectionAttribute](class.reflectionattribute.md), у кожного з
яких можна запросити ім'я атрибуту та його аргументи, а також створити
об'єкт, що становить атрибут.

Таке відокремлення властивостей атрибута від створення об'єкта дає
програмісту повніший контроль над обробкою помилок, пов'язаних з
відсутнім класом атрибуту та некоректністю його аргументів. Об'єкт
атрибута буде створено та перевірено на коректність аргументів тільки після
виклику
[ReflectionAttribute::newInstance()](reflectionattribute.newinstance.md),
не раніше.

**Приклад #1 Читання атрибутів за допомогою Reflection API**

` <?php#[Attribute]class MyAttribute{    public $value; public function __construct($value)    {        $this->value u003d $value; }}#[MyAttribute(value: 1234)]class Thing{}function dumpAttributeData($reflection) {   $attributes u003d $reflection->getAttributes(); foreach ($attributes as $attribute) {      var_dump($attribute->getName()); var_dump($attribute->getArguments()); var_dump($attribute->newInstance()); }}dumpAttributeData(newReflectionClass(Thing::class));/*string(11) "MyAttribute"array(1) {  ["value"]u003d> int(1234)}object(MyAttribute)#3 (1) ["value"]u003d> int(1234)}*/ `

Замість послідовно перебирати всі атрибути об'єкта
рефлексії, можна вказати ім'я класу як аргумент і отримати
лише відповідні атрибути.

**Приклад #2 Читання конкретних атрибутів за допомогою Reflection API**

` <?phpfunction dumpMyAttributeData($reflection) {   $attributes u003d $reflection->getAttributes(MyAttribute::class); foreach ($attributes as $attribute) {      var_dump($attribute->getName()); var_dump($attribute->getArguments()); var_dump($attribute->newInstance()); }}dumpMyAttributeData(new ReflectionClass(Thing::class)); `
