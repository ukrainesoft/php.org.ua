- [« Threaded::extend](threaded.extend.md)
- [Threaded::isTerminated »](threaded.isterminated.md)

- [PHP Manual](index.md)
- [Threaded](class.threaded.md)
- Визначення стану

# Threaded::isRunning

(PECL pthreads \>u003d 2.0.0)

Threaded::isRunning — Визначення стану

### Опис

public **Threaded::isRunning**(): bool

Повідомляє, чи вказаний об'єкт виконується.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Логічне значення стану об'єкта.

> **Примітка**:
>
> Об'єкт вважається запущеним під час виконання методу run.

### Приклади

**Приклад #1 Визначення стану вказаного об'єкта**

` <?phpclass My extends Thread {    public function run() {        $this->synchronized(function($thread){            if (!$thread->done)                $thread->wait();        }, $this); }}$my u003d new My();$my->start();var_dump($my->isRunning());$my->synchronized(function($thread){   $thread->done u003d true;    $ thread->notify();}, $my);?> `

Результат виконання цього прикладу:

bool(true)
