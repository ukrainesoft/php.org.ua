- [« Exception::getMessage](exception.getmessage.md)
- [Exception::getCode »](exception.getcode.md)

- [PHP Manual](index.md)
- [Exception](class.exception.md)
- Повертає попередній об'єкт, що реалізує Throwable

# Exception::getPrevious

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

Exception::getPrevious — Повертає попередній об'єкт, що реалізує
Throwable

### Опис

final public **Exception::getPrevious**():
?[Throwable](class.throwable.md)

Повертає попередній об'єкт, що реалізує
[Throwable](class.throwable.md) (переданий третім параметром
[Exception::\_\_construct()](exception.construct.md)).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає попередній об'єкт, що реалізує
[Throwable](class.throwable.md) або **`null`**, якщо такого немає.

### Приклади

**Приклад #1 Приклад використання **Exception::getPrevious()****

Прохід та друк ланцюга винятків.

` <?phpclass MyCustomException extends Exception {}function doStuff() {    try {        throw new InvalidArgumentException("Ти не!"1| } catch(Exception $e) {        throw new MyCustomException("Щось відбулося", 911, $e); }}try {    doStuff();} catch(Exception $e) {    do {         printf("%s:%d %s (%d) [%s]
", $e->getFile(), $e->getLine(), $e->getMessage(), $e->getCode(), get_class($e));    } while($e u003d $e- >getPrevious());}?> `

Результатом виконання цього прикладу буде щось подібне:

/home/bjori/ex.php:8 Щось трапилося (911) [MyCustomException]
/home/bjori/ex.php:6 Ти робиш це неправильно! (112) [InvalidArgumentException]

### Дивіться також

- [Throwable::getPrevious()](throwable.getprevious.md) - Повертає
попередній Throwable
