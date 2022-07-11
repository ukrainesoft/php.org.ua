- [«
Componere\Definition::getClosures](componere-definition.getclosures.md)
- [Componere\Patch::\_\_construct »](componere-patch.construct.md)

- [PHP Manual](index.md)
- [Componere](book.componere.md)
- Клас Componere\Patch

# Клас Componere\Patch

(Componere 2 \>u003d 2.1.0)

## Вступ

Клас Patch дозволяє програмісту змінювати тип екземпляра під час
виконання без реєстрації нового Definition.

Коли Patch знищується, він повертається, тому екземпляри, які
були виправлені протягом терміну дії Patch, повертаються до їх
формального типу.

## Огляд класів

final class **Componere\Patch** extends
[Componere\Abstract\Definition](class.componere-abstract-definition.md)
{

/\* Конструктори класу \*/

public [\_\_construct](componere-patch.construct.md)(object
`$instance`)

public [\_\_construct](componere-patch.construct.md)(object
`$instance`, array `$interfaces`)

/\* Методи \*/

public [apply](componere-patch.apply.md)(): void

public [revert](componere-patch.revert.md)(): void

public [isApplied](componere-patch.isapplied.md)(): bool

public [derive](componere-patch.derive.md)(object `$instance`): Patch

public [getClosure](componere-patch.getclosure.md)(string `$name`):
[Closure](class.closure.md)

public [getClosures](componere-patch.getclosures.md)(): array

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

- [Componere\Patch::\_\_construct](componere-patch.construct.md) -
Конструктор класу Patch
- [Componere\Patch::apply](componere-patch.apply.md) — Програма
- [Componere\Patch::revert](componere-patch.revert.md) — Скасувати
- [Componere\Patch::isApplied](componere-patch.isapplied.md) -
Визначення стану
- [Componere\Patch::derive](componere-patch.derive.md) — Отримання
патча
- [Componere\Patch::getClosure](componere-patch.getclosure.md) -
Отримує замикання
- [Componere\Patch::getClosures](componere-patch.getclosures.md) -
Отримує замикання
