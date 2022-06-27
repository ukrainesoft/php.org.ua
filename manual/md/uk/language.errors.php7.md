- [« Основи](language.errors.basics.md)
- [Винятки »](language.exceptions.md)

- [PHP Manual](index.md)
- [Помилки](language.errors.md)
- Помилки у PHP 7

## Помилки в PHP 7

У PHP 7 механізм повідомлення про помилки було сильно змінено. Традиційне
оповіщення про помилку в PHP 5 було замінено на новий механізм, в якому
більшість помилок викликаються за допомогою винятків класу
[Error](class.error.md).

Як і звичайні винятки, винятки [Error](class.error.md)
викликаються до появи першого відповідного блоку
[`catch`](language.exceptions.md#language.exceptions.catch). Якщо
відповідні блоки не передбачені, то буде викликано будь-якого обробника
винятків, встановлений за допомогою
[set_exception_handler()](function.set-exception-handler.md). В разі
відсутності обробника за замовчуванням, виняток буде конвертовано в
фатальну помилку та буде оброблено як традиційна помилка.

Оскільки клас [Error](class.error.md) не успадковується від класу
[Exception](class.exception.md), блок `catch (Exception $e) { ... }`
для обробки неперехоплених винятків PHP 5 не може перехопити
виняток [Error](class.error.md). Для їх перехоплення використовуйте блок
`catch (Error $e) { ... }` або встановіть обробник виключень з
за допомогою [set_exception_handler()](function.set-exception-handler.md).

### Ієрархія [Error](class.error.md)

- [Throwable](class.throwable.md)
- [Error](class.error.md)
- [ArithmeticError](class.arithmeticerror.md)
- [DivisionByZeroError](class.divisionbyzeroerror.md)
- [AssertionError](class.assertionerror.md)
- [CompileError](class.compileerror.md)
- [ParseError](class.parseerror.md)
- [TypeError](class.typeerror.md)
- [ArgumentCountError](class.argumentcounterror.md)
- [ValueError](class.valueerror.md)
- [UnhandledMatchError](class.unhandledmatcherror.md)
- [FiberError](class.fibererror.md)
- [Exception](class.exception.md)
- ...
