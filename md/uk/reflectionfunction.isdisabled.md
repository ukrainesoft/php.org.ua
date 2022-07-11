- [«
ReflectionFunction::invokeArgs](reflectionfunction.invokeargs.md)
- [ReflectionFunction::\_\_toString
»](reflectionfunction.tostring.md)

- [PHP Manual](index.md)
- [ReflectionFunction](class.reflectionfunction.md)
- Перевіряє, що функцію вимкнено

# ReflectionFunction::isDisabled

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ReflectionFunction::isDisabled — Перевіряє, що функція вимкнена

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

public **ReflectionFunction::isDisabled**(): bool

Перевіряє, чи функція вимкнена, за допомогою директиви
[disable_functions](ini.core.md#ini.disable-functions).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо функція відключена, **`false`** в іншому випадку.

### Дивіться також

- [ReflectionFunctionAbstract::isUserDefined()](reflectionfunctionabstract.isuserdefined.md) -
Перевіряє, чи функція є певною користувачем
- [Директива disable_functions](ini.core.md#ini.disable-functions)
