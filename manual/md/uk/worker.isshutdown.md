- [« Worker::getStacked](worker.getstacked.md)
- [Worker::shutdown »](worker.shutdown.md)

- [PHP Manual](index.md)
- [Worker](class.worker.md)
- Визначення стану

# Worker::isShutdown

(PECL pthreads \>u003d 2.0.0)

Worker::isShutdown — Визначення стану

### Опис

public **Worker::isShutdown**(): bool

Визначає, чи зупинено Worker чи ні.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`** якщо зупинено і **`false`**, якщо ні.

### Приклади

**Приклад #1 Визначення стану**

` <?php$worker u003d new Worker();$worker->start();var_dump($worker->isShutdown());$worker->shutdown();var_dump($worker->isShutdown()); `

Результат виконання цього прикладу:

bool(false)
bool(true)
