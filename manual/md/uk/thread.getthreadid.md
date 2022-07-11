- [« Thread::getCurrentThreadId](thread.getcurrentthreadid.md)
- [Thread::isJoined »](thread.isjoined.md)

- [PHP Manual](index.md)
- [Thread](class.thread.md)
- Ідентифікація

# Thread::getThreadId

(PECL pthreads \>u003d 2.0.0)

Thread::getThreadId - Ідентифікація

### Опис

public **Thread::getThreadId**(): int

Повертає ідентифікатор вказаного потоку

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Числовий ідентифікатор.

### Приклади

**Приклад #1 Повертає ідентифікатор вказаного потоку**

` <?phpclass|
", __CLASS__, $this->getThreadId());    }}$my u003d new My();$my->start();?> `

Результат виконання цього прикладу:

My є потоком.
