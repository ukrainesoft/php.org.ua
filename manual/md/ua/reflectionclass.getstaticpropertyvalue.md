- [«
ReflectionClass::getStaticProperties](reflectionclass.getstaticproperties.md)
- [ReflectionClass::getTraitAliases
»](reflectionclass.gettraitaliases.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає значення статичної властивості

# ReflectionClass::getStaticPropertyValue

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

ReflectionClass::getStaticPropertyValue — Повертає значення
статичної властивості

### Опис

public **ReflectionClass::getStaticPropertyValue**(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$def_value` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення статичної якості класу.

### Список параметрів

`name`
Ім'я статичної властивості, значення якої необхідно отримати

`def_value`
Значення за замовчуванням, яке повертається у випадку, якщо в класі не
визначено статичну властивість із заданим ім'ям `name`. Якщо властивість
не існує і цей аргумент не заданий, то викидається
[ReflectionException](class.reflectionexception.md).

### Значення, що повертаються

Значення статичної якості.

### Приклади

**Приклад #1 Приклад використання
**ReflectionClass::getStaticPropertyValue()****

` <?phpclass Apple {    public static $color u003d 'Red';}$class u003d new ReflectionClass('Apple');var_dump($class->getStaticPropertyValue('color'));?> `

Результат виконання цього прикладу:

string(3) "Red"

### Дивіться також

- [ReflectionClass::getStaticProperties()](reflectionclass.getstaticproperties.md) -
Повертає статичні властивості
- [ReflectionClass::setStaticPropertyValue()](reflectionclass.setstaticpropertyvalue.md) -
Встановлює значення статичної властивості
