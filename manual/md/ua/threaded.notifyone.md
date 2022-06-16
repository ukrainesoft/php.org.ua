- [« Threaded::notify](threaded.notify.md)
- [Threaded::pop »](threaded.pop.md)

- [PHP Manual](index.md)
- [Threaded](class.threaded.md)
- Синхронізація

# Threaded::notifyOne

(PECL pthreads \>u003d 3.0.0)

Threaded::notifyOne — Синхронізація

### Опис

public **Threaded::notifyOne**(): bool

Надсилає повідомлення вказаному об'єкту. Це розблокує принаймні
мері один із заблокованих потоків (на відміну від
[Threaded::notify()](threaded.notify.md) з розблокуванням всіх
потоків).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Сповіщення та очікування**

` <?phpclass My extends Thread {    public function run() {        /** заставить этот поток ждать **/        $this->synchronized(function($thread){            if (!$thread->done)                $thread->wait ();        }, $this); }}$my u003d new My();$my->start();/** надіслати повідомлення очікуючого потоку **/$my->synchronized(function($thread){    $thread->done u003d                  <br> ->notifyOne();}, $my);var_dump($my->join());?> `

Результат виконання цього прикладу:

bool(true)
