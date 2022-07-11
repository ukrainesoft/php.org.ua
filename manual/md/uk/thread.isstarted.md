- [« Thread::isJoined](thread.isjoined.md)
- [Thread::join »](thread.join.md)

- [PHP Manual](index.md)
- [Thread](class.thread.md)
- Визначення стану

# Thread::isStarted

(PECL pthreads \>u003d 2.0.0)

Thread::isStarted — Визначення стану

### Опис

public **Thread::isStarted**(): bool

Повідомляє, чи запущено вказаний потік.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Повідомляє, чи було запущено зазначений потік**

` <?php$worker u003d new Worker();$worker->start();var_dump($worker->isStarted());?> `

Результат виконання цього прикладу:

bool(true)
