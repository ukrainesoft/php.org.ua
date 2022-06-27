- [«Error::getTrace](error.gettrace.md)
- [Error::\_\_toString »](error.tostring.md)

- [PHP Manual](index.md)
- [Error](class.error.md)
- Отримує трасування стека у вигляді рядка

# Error::getTraceAsString

(PHP 7, PHP 8)

Error::getTraceAsString — Отримує трасування стека у вигляді рядка

### Опис

final public **Error::getTraceAsString**(): string

Повертає трасування стека у вигляді рядка.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає трасування стека у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання **Error::getTraceAsString()****

` <?phpfunction test() {    throw new Error;}try {    test();} catch(Error $e) {   echo $e->getTraceAsString();}?> `

Результатом виконання цього прикладу буде щось подібне:

#0 /home/bjori/tmp/ex.php(7): test()
#1 {main}

### Дивіться також

- [Throwable::getTraceAsString()](throwable.gettraceasstring.md) -
Отримує результати трасування стека у вигляді рядка
