- [« Worker::isShutdown](worker.isshutdown.md)
- [Worker::stack »](worker.stack.md)

- [PHP Manual](index.md)
- [Worker](class.worker.md)
- Зупинити Worker

# Worker::shutdown

(PECL pthreads \>u003d 2.0.0)

Worker::shutdown — Зупинити Worker

### Опис

public **Worker::shutdown**(): bool

Зупинити Worker після запуску всіх завдань зі стека.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Зупинка Worker**

` <?php$my u003d new Worker();$my->start();/* stack/execute tasks */var_dump($my->shutdown()); `

Результат виконання цього прикладу:

bool(true)
