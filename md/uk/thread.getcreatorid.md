- [«Thread](class.thread.md)
- [Thread::getCurrentThread »](thread.getcurrentthread.md)

- [PHP Manual](index.md)
- [Thread](class.thread.md)
- Ідентифікація

# Thread::getCreatorId

(PECL pthreads \>u003d 2.0.0)

Thread::getCreatorId - Ідентифікація

### Опис

public **Thread::getCreatorId**(): int

Повертає ідентифікатор потоку, який створив цей потік.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Числовий ідентифікатор.

### Приклади

**Приклад #1 Повертає ідентифікатор потоку, який створив вказаний
потік**

` <?phpclass|
", __CLASS__, $this->getCreatorId());    }}$my u003d new My();$my->start();?> `

Результат виконання цього прикладу:

My створено потоком.
