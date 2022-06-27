- [«
Componere\Abstract\Definition::getReflector](componere-abstract-definition.getreflector.md)
- [Componere\Definition::\_\_construct
»](componere-definition.construct.md)

- [PHP Manual](index.md)
- [Componere](book.componere.md)
- Клас Componere\Definition

# Клас Componere\Definition

(Componere 2 \>u003d 2.1.0)

## Вступ

Клас Definition дозволяє програмісту створювати та реєструвати тип
під час виконання.

Якщо Definition замінить існуючий клас, існуючий клас буде
відновлено після знищення Definition.

## Огляд класів

final class **Componere\Definition** extends
[Componere\Abstract\Definition](class.componere-abstract-definition.md)
{

/\* Конструктори класу \*/

public [\_\_construct](componere-definition.construct.md)(string
`$name`)

public [\_\_construct](componere-definition.construct.md)(string
`$name`, string `$parent`)

public [\_\_construct](componere-definition.construct.md)(string
`$name`, array `$interfaces`)

public [\_\_construct](componere-definition.construct.md)(string
`$name`, string `$parent`, array `$interfaces`)

/\* Методи \*/

public [addConstant](componere-definition.addconstant.md)(string
`$name`, [Componere\Value](class.componere-value.md) `$value`):
Definition

public [addProperty](componere-definition.addproperty.md)(string
`$name`, [Componere\Value](class.componere-value.md) `$value`):
Definition

public [register](componere-definition.register.md)(): void

public [isRegistered](componere-definition.isregistered.md)(): bool

public [getClosure](componere-definition.getclosure.md)(string
`$name`): [Closure](class.closure.md)

public [getClosures](componere-definition.getclosures.md)(): array

/\* Наслідувані методи \*/

public
[Componere\Abstract\Definition::addInterface](componere-abstract-definition.addinterface.md)(string
`$interface`): Definition

public
[Componere\Abstract\Definition::addMethod](componere-abstract-definition.addmethod.md)(string
`$name`, [Componere\Method](class.componere-method.md) `$method`):
Definition

public
[Componere\Abstract\Definition::addTrait](componere-abstract-definition.addtrait.md)(string
`$trait`): Definition

public
[Componere\Abstract\Definition::getReflector](componere-abstract-definition.getreflector.md)():
[ReflectionClass](class.reflectionclass.md)

}

## Зміст

- [Componere\Definition::\_\_construct](componere-definition.construct.md)
- Визначення конструктора
- [Componere\Definition::addConstant](componere-definition.addconstant.md)
- Додає константу
- [Componere\Definition::addProperty](componere-definition.addproperty.md)
- Додає властивість
- [Componere\Definition::register](componere-definition.register.md)
- Реєстрація
- [Componere\Definition::isRegistered](componere-definition.isregistered.md)
- Визначення стану
- [Componere\Definition::getClosure](componere-definition.getclosure.md)
— Отримує замикання
- [Componere\Definition::getClosures](componere-definition.getclosures.md)
— Отримує замикання
