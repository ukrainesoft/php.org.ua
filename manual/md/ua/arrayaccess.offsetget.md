- [« ArrayAccess::offsetExists](arrayaccess.offsetexists.md)
- [ArrayAccess::offsetSet »](arrayaccess.offsetset.md)

- [PHP Manual](index.md)
- [ArrayAccess](class.arrayaccess.md)
- Повертає задане усунення (ключ)

# ArrayAccess::offsetGet

(PHP 5, PHP 7, PHP 8)

ArrayAccess::offsetGet — Повертає задане усунення (ключ)

### Опис

public
**ArrayAccess::offsetGet**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$offset`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає задане усунення (ключ).

Даний метод виконується, коли перевіряється зміщення (ключ) на порожнечу
за допомогою функції [empty()](function.empty.md).

### Список параметрів

`offset`
Зміщення (ключ) для повернення.

### Значення, що повертаються

Може повертати значення будь-якого типу.

### Примітки

> **Примітка**:
>
> Можлива реалізація даного методу із поверненням за посиланням. Це
> уможливлює непряму модифікацію для величин масиву
> перевантаженого об'єкта [ArrayAccess](class.arrayaccess.md).
>
> Явна модифікація - це така модифікація, за якої повністю
> замінюється значення величини масиву, як у разі `$obj[6] u003d 7`. З
> з іншого боку, при непрямої модифікації замінюється лише частина
> величини або відбувається спроба присвоєння величини за посиланням іншої
> змінною, як у випадку `$obj[6][7] u003d 7` або `$var u003d& $obj[6]`.
> Збільшення з використанням оператора `++` та зменшення з
> використанням оператора `--` також реалізуються за допомогою способу,
> який потребує непрямої модифікації.
>
> У той час як явна модифікація запускає виклик методу
> [ArrayAccess::offsetSet()](arrayaccess.offsetset.md), непряма
> модифікація запускає виклик **ArrayAccess::offsetGet()**. В
> такому разі, реалізація методу **ArrayAccess::offsetGet()** повинна
> бути в змозі повертати результат за посиланням, інакше
> буде викликано повідомлення про помилку рівня **`E_NOTICE`**.

### Дивіться також

- [ArrayAccess::offsetExists()](arrayaccess.offsetexists.md) -
Визначає, чи існує задане усунення (ключ)
