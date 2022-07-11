- [« GearmanWorker::wait](gearmanworker.wait.md)
- [GearmanException »](class.gearmanexception.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Очікування та виконання завдань

# GearmanWorker::work

(PECL gearman u003d 0.5.0)

GearmanWorker::work — Очікування та виконання завдань

### Опис

public **GearmanWorker::work**(): bool

Чекає від сервера завдання, а потім викликає відповідну
callback-функцію для його обробки. Викликає помилку рівня
**`E_WARNING`** з інформацією про останню помилку Gearman у випадках,
коли код повернення функції відрізняється від **`GEARMAN_SUCCESS`**,
**`GEARMAN_IO_WAIT`** або **`GEARMAN_WORK_FAIL`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **GearmanWorker::work()****

` <?php# створюємо обробник$worker u003d new GearmanWorker();# додаємо сервер задань за замовчуванням (localhost)$worker->addServer();# додаємо callback-функцію$ );# запускаємо обробник, очікує задань від сервераwhile ($worker->work());function my_reverse_function($job){ return strrev($job->workload());}?> `

### Дивіться також

- [GearmanWorker::addFunction()](gearmanworker.addfunction.md) -
Реєстрація та додавання callback-функції
