- [« Threaded::synchronized](threaded.synchronized.md)
- [Thread »](class.thread.md)

- [PHP Manual](index.md)
- [Threaded](class.threaded.md)
- Синхронізація

# Threaded::wait

(PECL pthreads \>u003d 2.0.0)

Threaded::wait — Синхронізація

### Опис

public **Threaded::wait**(int `$timeout` u003d ?): bool

Примушує викликаючий контекст чекати на повідомлення від зазначеного об'єкта.

### Список параметрів

`timeout`
Необов'язковий параметр часу очікування у мікросекундах.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Сповіщення та очікування**

` <?phpclass My extends Thread {    public function run() {        /** заставить этот поток ждать **/        $this->synchronized(function($thread){            if (!$thread->done)                $thread->wait ();        }, $this); }}$my u003d new My();$my->start();/** надіслати повідомлення очікуючого потоку **/$my->synchronized(function($thread){    $thread->done u003d                 <br> ->notify();}, $my);var_dump($my->join());?> `

Результат виконання цього прикладу:

bool(true)
