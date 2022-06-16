- [« Pool::resize](pool.resize.md)
- [Pool::submit »](pool.submit.md)

- [PHP Manual](index.md)
- [Pool](class.pool.md)
- Вимикає всі воркери

# Pool::shutdown

(PECL pthreads \>u003d 2.0.0)

Pool::shutdown - Вимикає всі воркери

### Опис

public **Pool::shutdown**(): void

Вимикає всіх воркерів у пулі. Буде заблоковано доти, доки все
надіслані завдання не будуть виконані.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Вимкнення пулу**

` <?phpclass Task? }}$poolu003du003dnew Pool(4);for ($i u003d 0; $i < 10; ++$i) {   $$pool->submit(new Task());}$pool->shutdown(); // поки все відправлені завдання не завершать виконання
