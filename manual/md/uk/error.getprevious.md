- [«Error::getMessage](error.getmessage.md)
- [Error::getCode »](error.getcode.md)

- [PHP Manual](index.md)
- [Error](class.error.md)
- Повертає попередній Throwable

# Error::getPrevious

(PHP 7, PHP 8)

Error::getPrevious — Повертає попередній Throwable

### Опис

final public **Error::getPrevious**():
?[Throwable](class.throwable.md)

Повертає попередній об'єкт Throwable (третій параметр конструктора
[Error::\_\_construct()](error.construct.md)).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає попередній об'єкт [Throwable](class.throwable.md), якщо він
є, і **`null`**, якщо його немає.

### Приклади

**Приклад #1 Приклад використання **Error::getPrevious()****

Прохід та друк ланцюга винятків.

` <?phpclass MyCustomError extends Error {}function doStuff() {    try {         throw new InvalidArgumentError("Ви робите це| неправильно!" } catch(Error $e) {         throw new MyCustomError("Щось відбулося", 911, $e); }}try {    doStuff();} catch(Error $e) {    do {         printf("%s:%d %s (%d) [%s]
", $e->getFile(), $e->getLine(), $e->getMessage(), $e->getCode(), get_class($e));    } while($e u003d $e- >getPrevious());}?> `

Результатом виконання цього прикладу буде щось подібне:

/home/bjori/ex.php:8 Щось трапилося (911) [MyCustomError]
/home/bjori/ex.php:6 Ви робите це неправильно! (112) [InvalidArgumentError]

### Дивіться також

- [Throwable::getPrevious()](throwable.getprevious.md) - Повертає
попередній Throwable
