- [« Exception::getTrace](exception.gettrace.md)
- [Exception::\_\_toString »](exception.tostring.md)

- [PHP Manual](index.md)
- [Exception](class.exception.md)
- Отримує трасування стека у вигляді рядка

# Exception::getTraceAsString

(PHP 5, PHP 7, PHP 8)

Exception::getTraceAsString — Отримує трасування стека у вигляді рядка

### Опис

final public **Exception::getTraceAsString**(): string

Повертає трасування стека виключення у вигляді рядка.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає трасування стека виключення у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання **Exception::getTraceAsString()****

` <?phpfunction test() {    throw new Exception;}try {    test();} catch(Exception $e) {    echo $e->getTraceAsString();}?

Результатом виконання цього прикладу буде щось подібне:

#0 /home/bjori/tmp/ex.php(7): test()
#1 {main}

### Дивіться також

- [Throwable::getTraceAsString()](throwable.gettraceasstring.md) -
Отримує результати трасування стека у вигляді рядка
