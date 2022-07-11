- [«method_exists](function.method-exists.md)
- [trait_exists»](function.trait-exists.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Перевіряє, чи містить об'єкт або клас вказаний атрибут

# property_exists

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

property_exists — Перевіряє, чи міститься об'єкт чи клас вказаний
атрибут

### Опис

**property_exists**(object\|string `$object_or_class`, string
`$property`): bool

Функція перевіряє, чи існує атрибут `property` у вказаному класі.

> **Примітка**:
>
> На противагу [isset()](function.isset.md),
> **property_exists()** повертає **`true`**, навіть якщо властивість має
> значення **`null`**.

### Список параметрів

`object_or_class`
Ім'я класу або об'єкт класу для перевірки

`property`
Ім'я якості

### Значення, що повертаються

Повертає **`true`**, якщо властивість існує, **`false`**, якщо воно
не існує, або **`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **property_exists()****

`<?phpclass myClass {    public $mine; private $xpto; static protected $test; static function test() {         var_dump(property_exists('myClass', 'xpto')); //true   }}var_dump(property_exists('myClass', 'mine')); //truevar_dump(property_exists(new myClass, 'mine')); //truevar_dump(property_exists('myClass', 'xpto')); //truevar_dump(property_exists('myClass', 'bar')); //falsevar_dump(property_exists('myClass', 'test')); //truemyClass::test();?> `

### Примітки

> **Примітка**:
>
> Виклик цієї функції використовуватиме всі зареєстровані [функції
> автозавантаження](language.oop5.autoload.md), якщо клас ще не
> відомий.

> **Примітка**:
>
> Функція **property_exists()** не визначає магічно доступні
> властивості за допомогою методу
> [`__get`](language.oop5.overloading.md#language.oop5.overloading.members).

### Дивіться також

- [method_exists()](function.method-exists.md) - Перевіряє,
чи існує метод у даному класі
