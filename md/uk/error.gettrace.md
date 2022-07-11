- [«Error::getLine](error.getline.md)
- [Error::getTraceAsString »](error.gettraceasstring.md)

- [PHP Manual](index.md)
- [Error](class.error.md)
- Отримує трасування стека

# Error::getTrace

(PHP 7, PHP 8)

Error::getTrace — Отримує трасування стека

### Опис

final public **Error::getTrace**(): array

Повертає трасування стека.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає трасування стека як масиву (array).

### Приклади

**Приклад #1 Приклад використання **Error::getTrace()****

` <?phpfunction test() { throw new Error;}try { test();} catch(Error $e) { var_dump($e->getTrace());}?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
[0]u003d>
array(4) {
["file"]u003d>
string(22) "/home/bjori/tmp/ex.php"
["line"]u003d>
int(7)
["function"]u003d>
string(4) "test"
["args"]u003d>
array(0) {
}
}
}

### Дивіться також

- [Throwable::getTrace()](throwable.gettrace.md) - Повертає
трасування стеку
