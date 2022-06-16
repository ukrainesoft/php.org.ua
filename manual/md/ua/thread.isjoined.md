- [« Thread::getThreadId](thread.getthreadid.md)
- [Thread::isStarted »](thread.isstarted.md)

- [PHP Manual](index.md)
- [Thread](class.thread.md)
- Визначення стану

# Thread::isJoined

(PECL pthreads \>u003d 2.0.0)

Thread::isJoined — Визначення стану

### Опис

public **Thread::isJoined**(): bool

Повідомляє, чи приєднано вказаний потік.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Повідомляє, чи був приєднаний вказаний потік**

` <?phpclass My extends Thread {    public function run() {        $this->synchronized(function($thread){            if (!$thread->done)                $thread->wait();        }, $this); }}$my u003d new My();$my->start();var_dump($my->isJoined());$my->synchronized(function($thread){   $thread->done u003d true;     $ thread->notify();}, $my);?> `

Результат виконання цього прикладу:

bool(false)
