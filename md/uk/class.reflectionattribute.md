- [« ReflectionReference::getId](reflectionreference.getid.md)
- [ReflectionAttribute::\_\_construct
»](reflectionattribute.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionAttribute

# Клас ReflectionAttribute

(PHP 8)

## Вступ

Клас **ReflectionAttribute** надає інформацію про
[Атрибути](language.attributes.md).

## Огляд класів

class **ReflectionAttribute** implements
[Reflector](class.reflector.md) {

/\* Константи \*/

const int `IS_INSTANCEOF` u003d 2;

/\* Методи \*/

private [\_\_construct](reflectionattribute.construct.md)()

public [getArguments](reflectionattribute.getarguments.md)(): array

public [getName](reflectionattribute.getname.md)(): string

public [getTarget](reflectionattribute.gettarget.md)(): int

public [isRepeated](reflectionattribute.isrepeated.md)(): bool

public [newInstance](reflectionattribute.newinstance.md)(): object

}

## Зумовлені константи

## Прапори ReflectionAttribute

**`ReflectionAttribute::IS_INSTANCEOF`**
Отримання атрибутів за допомогою перевірки параметра `instanceof`.

> **Примітка**:
>
> Значення цих констант можуть змінюватись в залежності від версії PHP.
> Рекомендується завжди використовувати константи і не покладатися на них
> значення безпосередньо.

## Зміст

- [ReflectionAttribute::\_\_construct](reflectionattribute.construct.md)
— Закритий конструктор, який забороняє створення об'єкта безпосередньо
- [ReflectionAttribute::getArguments](reflectionattribute.getarguments.md)
— Повертає аргументи, передані атрибуту
- [ReflectionAttribute::getName](reflectionattribute.getname.md) -
Повертає ім'я атрибута
- [ReflectionAttribute::getTarget](reflectionattribute.gettarget.md)
— Повертає мету атрибуту у вигляді бітової маски
- [ReflectionAttribute::isRepeated](reflectionattribute.isrepeated.md)
— Перевіряє, чи атрибут може вказуватися багаторазово в елементі
коду
- [ReflectionAttribute::newInstance](reflectionattribute.newinstance.md)
- Створює екземпляр класу атрибута, представленого цим класом
ReflectionAttribute та аргументами
