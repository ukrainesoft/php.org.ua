- [« Threaded::isRunning](thread.isrunning.md)
- [Threaded::merge »](threaded.merge.md)

- [PHP Manual](index.md)
- [Threaded](class.threaded.md)
- Визначення стану

# Threaded::isTerminated

(PECL pthreads \>u003d 2.0.0)

Threaded::isTerminated — Визначення стану

### Опис

public **Threaded::isTerminated**(): bool

Повідомляє, чи об'єкт, на який вказує посилання, було припинено.
виконання; чи відбулися фатальні помилки або були викинуті
неперехоплені винятки.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Логічне значення стану об'єкта.

### Приклади

**Приклад #1 Визначення стану вказаного об'єкта**

` <?phpclass My extends Thread {    public function run() {       i_do_not_exist(); }}$my u003d new My();$my->start();$my->join();var_dump($my->isTerminated());?> `

Результат виконання цього прикладу:

bool(true)
