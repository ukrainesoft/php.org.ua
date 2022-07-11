- [« Вбудовані інтерфейси та класи](reserved.interfaces.md)
- [Iterator »](class.iterator.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Інтерфейс Traversable

# Інтерфейс [Traversable](class.traversable.md)

(PHP 5, PHP 7, PHP 8)

## Вступ

Інтерфейс, що визначає, чи є клас обхідним (traversable) з
використанням [foreach] (control-structures.foreach.md).

Абстрактний базовий інтерфейс, який не може бути реалізований сам
собі. Натомість повинен реалізовуватися
[IteratorAggregate](class.iteratoraggregate.md) або
[Iterator](class.iterator.md).

> **Примітка**:
>
> Внутрішні (вбудовані) класи, які реалізують цей інтерфейс,
> можуть бути використані в конструкції
> [foreach](control-structures.foreach.md) і зобов'язані реалізовувати
> [IteratorAggregate](class.iteratoraggregate.md) або
> [Iterator](class.iterator.md).

> **Примітка**:
>
> Це внутрішній інтерфейс, який не може бути реалізований у скрипті
> PHP. Замість нього потрібно використовувати або
> [IteratorAggregate](class.iteratoraggregate.md), або
> [Iterator](class.iterator.md). При реалізації інтерфейсу
> успадкованого від Traversable, переконайтеся, що в секції implements перед
> його ім'ям стоїть [IteratorAggregate](class.iteratoraggregate.md) або
> [Iterator](class.iterator.md).

## Огляд інтерфейсів

interface **Traversable** {

}

Цей інтерфейс не має методів, його єдина мета – бути базовим
інтерфейсом для всіх обхідних класів.
