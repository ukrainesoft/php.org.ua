- [« ReflectionMethod::invoke](reflectionmethod.invoke.md)
- [ReflectionMethod::isAbstract »](reflectionmethod.isabstract.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- виклик методу з передачею аргументів масивом

# ReflectionMethod::invokeArgs

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

ReflectionMethod::invokeArgs — Виклик методу передачі аргументів
масивом

### Опис

public **ReflectionMethod::invokeArgs**(?object `$object`, array
`$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викликає відбитий спосіб і передає йому аргументи як масиву.

### Список параметрів

`object`
Об'єкт, спосіб якого викликається. Якщо метод статичний, можна
передати null.

`args`
Масив (array), що містить аргументи функції.

### Значення, що повертаються

Повертає результат виконання методу.

### Помилки

Викидає виняток
[ReflectionException](class.reflectionexception.md), якщо в об'єкті
object немає визначення цього методу.

Викидає виняток
[ReflectionException](class.reflectionexception.md), якщо викликати
метод виконання не вдалося.

### Приклади

**Приклад #1 Приклад використання **ReflectionMethod::invokeArgs()****

`<?phpclass HelloWorld {    public function sayHelloTo($name) {       return 'Привіт, ' . $name; }}$reflectionMethod u003d new ReflectionMethod('HelloWorld', 'sayHelloTo');echo $reflectionMethod->invokeArgs(new HelloWorld(), array('Майк'));?> `

Результат виконання цього прикладу:

Привіт Майк

### Примітки

> **Примітка**:
>
> Якщо функція має аргументи, які мають бути посиланнями, вони
> повинні бути посиланнями і на переданому спиці аргументів.

### Дивіться також

- [ReflectionMethod::invoke()](reflectionmethod.invoke.md) - Виклик
- [\_\_invoke()](language.oop5.magic.md#object.invoke)
- [call_user_func_array()](function.call-user-func-array.md) -
Викликає callback-функцію з масивом параметрів
