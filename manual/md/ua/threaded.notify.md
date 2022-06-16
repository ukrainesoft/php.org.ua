- [« Threaded::merge](threaded.merge.md)
- [Threaded::notifyOne »](threaded.notifyone.md)

- [PHP Manual](index.md)
- [Threaded](class.threaded.md)
- Синхронізація

# Threaded::notify

(PECL pthreads \>u003d 2.0.0)

Threaded::notify — Синхронізація

### Опис

public **Threaded::notify**(): bool

Надсилає повідомлення вказаному об'єкту.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Сповіщення та очікування**

` <?phpclass My extends Thread {    public function run() {        /** заставить этот поток ждать **/        $this->synchronized(function($thread){            if (!$thread->done)                $thread->wait ();        }, $this); }}$my u003d new My();$my->start();/** надіслати повідомлення очікуючого потоку **/$my->synchronized(function($thread){    $thread->done u003d                 <br> ->notify();}, $my);var_dump($my->join());?> `

Результат виконання цього прикладу:

bool(true)
