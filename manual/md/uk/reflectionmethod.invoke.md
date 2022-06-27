- [«
ReflectionMethod::getPrototype](reflectionmethod.getprototype.md)
- [ReflectionMethod::invokeArgs »](reflectionmethod.invokeargs.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- Виклик

# ReflectionMethod::invoke

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::invoke — Виклик

### Опис

public **ReflectionMethod::invoke**(?object `$object`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викликає відбитий метод.

### Список параметрів

`object`
Об'єкт, спосіб якого потрібно викликати. Для статичних методів
передається null.

`args`
Нуль або більше аргументів, що передаються методом. Допускається передавати
перемінна кількість аргументів.

### Значення, що повертаються

Повертає результат виконання методу.

### Помилки

Викидає виняток
[ReflectionException](class.reflectionexception.md), якщо в об'єкті
`object` немає визначення методу.

Викидає виняток
[ReflectionException](class.reflectionexception.md), якщо викликати
метод виконання не вдалося.

### Приклади

**Приклад #1 Приклад використання **ReflectionMethod::invoke()****

`<?phpclass HelloWorld {    public function sayHelloTo($name) {       return 'Привіт, ' . $name; }}$reflectionMethod u003d new ReflectionMethod('HelloWorld', 'sayHelloTo');echo $reflectionMethod->invoke(new HelloWorld(), 'Майк');?> `

Результат виконання цього прикладу:

Привіт Майк

### Примітки

> **Примітка**:
>
> **ReflectionMethod::invoke()** не може використовуватися, якщо очікуються
> Посилання. Замість нього слід використовувати
> [ReflectionMethod::invokeArgs()](reflectionmethod.invokeargs.md)
> (Передача посилань у списку аргументів).

### Дивіться також

- [ReflectionMethod::invokeArgs()](reflectionmethod.invokeargs.md) -
Виклик методу з передачею аргументів масивом
- [\_\_invoke()](language.oop5.magic.md#object.invoke)
- [call_user_func()](function.call-user-func.md) - Викликає
callback-функцію, задану у першому параметрі
