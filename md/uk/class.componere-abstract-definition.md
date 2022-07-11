- [« Установка](componere.installation.md)
- [Componere\Abstract\Definition::addInterface
»](componere-abstract-definition.addinterface.md)

- [PHP Manual](index.md)
- [Componere](book.componere.md)
- Клас Componere\Abstract\Definition

# Клас Componere\Abstract\Definition

(Componere 2 \>u003d 2.1.0)

## Вступ

Остаточний абстрактний клас є структурою класу і не
повинен використовуватись програмістом.

## Огляд класів

final abstract class **Componere\Abstract\Definition** {

/\* Методи \*/

public
[addInterface](componere-abstract-definition.addinterface.md)(string
`$interface`): Definition

public [addMethod](componere-abstract-definition.addmethod.md)(string
`$name`, [Componere\Method](class.componere-method.md) `$method`):
Definition

public [addTrait](componere-abstract-definition.addtrait.md)(string
`$trait`): Definition

public
[getReflector](componere-abstract-definition.getreflector.md)():
[ReflectionClass](class.reflectionclass.md)

}

## Зміст

- [Componere\Abstract\Definition::addInterface](componere-abstract-definition.addinterface.md)
— Додає інтерфейс
- [Componere\Abstract\Definition::addMethod](componere-abstract-definition.addmethod.md)
- Додає метод
- [Componere\Abstract\Definition::addTrait](componere-abstract-definition.addtrait.md)
- Додає трейт
- [Componere\Abstract\Definition::getReflector](componere-abstract-definition.getreflector.md)
- Reflection
