- [« ReflectionGenerator::getTrace](reflectiongenerator.gettrace.md)
- [ReflectionFiber::\_\_construct »](reflectionfiber.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionFiber

# Клас ReflectionFiber

(PHP 8 \>u003d 8.1.0)

## Вступ

## Огляд класів

final class **ReflectionFiber** {

/\* Методи \*/

public
[\_\_construct](reflectionfiber.construct.md)([Fiber](class.fiber.md)
`$fiber`)

public [getCallable](reflectionfiber.getcallable.md)():
[callable](language.types.callable.md)

public [getExecutingFile](reflectionfiber.getexecutingfile.md)():
string

public [getExecutingLine](reflectionfiber.getexecutingline.md)(): int

public [getFiber](reflectionfiber.getfiber.md)():
[Fiber](class.fiber.md)

public [getTrace](reflectionfiber.gettrace.md)(int `$options` u003d
**`DEBUG_BACKTRACE_PROVIDE_OBJECT`**): array

}

## Зміст

- [ReflectionFiber::\_\_construct](reflectionfiber.construct.md) -
Створює об'єкт ReflectionFiber
- [ReflectionFiber::getCallable](reflectionfiber.getcallable.md) -
Отримує об'єкт, що викликається, який використовується для створення файбера
- [ReflectionFiber::getExecutingFile](reflectionfiber.getexecutingfile.md)
— Отримує ім'я файлу поточної точки виконання
- [ReflectionFiber::getExecutingLine](reflectionfiber.getexecutingline.md)
— Отримує номер рядка поточної точки виконання
- [ReflectionFiber::getFiber](reflectionfiber.getfiber.md) -
Отримує відображений екземпляр файбера
- [ReflectionFiber::getTrace](reflectionfiber.gettrace.md) -
Отримує зворотне трасування поточної точки виконання
