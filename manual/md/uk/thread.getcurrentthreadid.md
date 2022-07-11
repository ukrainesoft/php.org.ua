- [« Thread::getCurrentThread](thread.getcurrentthread.md)
- [Thread::getThreadId »](thread.getthreadid.md)

- [PHP Manual](index.md)
- [Thread](class.thread.md)
- Ідентифікація

# Thread::getCurrentThreadId

(PECL pthreads \>u003d 2.0.0)

Thread::getCurrentThreadId — Ідентифікація

### Опис

public static **Thread::getCurrentThreadId**(): int

Повертає ідентифікатор поточного потоку, що виконується.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Числовий ідентифікатор.

### Приклади

**Приклад #1 Повертає ідентифікатор поточного потоку**

` <?phpclass|
", __CLASS__, Thread::getCurrentThreadId());   }}$my u003d new My();$my->start();?> `

Результат виконання цього прикладу:

My є потоком.
