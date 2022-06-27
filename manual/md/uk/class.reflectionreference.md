- [«
ReflectionIntersectionType::getTypes](reflectionintersectiontype.gettypes.md)
- [ReflectionReference::\_\_construct
»](reflectionreference.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionReference

# Клас ReflectionReference

(PHP 7 \>u003d 7.4.0, PHP 8)

## Вступ

Клас **ReflectionReference** надає інформацію про посилання.

## Огляд класів

final class **ReflectionReference** {

/\* Методи \*/

private [\_\_construct](reflectionreference.construct.md)()

public static
[fromArrayElement](reflectionreference.fromarrayelement.md)(array
`$array`, int\|string `$key`):
?[ReflectionReference](class.reflectionreference.md)

public [getId](reflectionreference.getid.md)(): string

}

## Зміст

- [ReflectionReference::\_\_construct](reflectionreference.construct.md)
— Закритий конструктор, який забороняє створення екземпляра безпосередньо
- [ReflectionReference::fromArrayElement](reflectionreference.fromarrayelement.md)
— Створює ReflectionReference із елементу масиву
- [ReflectionReference::getId](reflectionreference.getid.md) -
Отримати унікальний ідентифікатор посилання
