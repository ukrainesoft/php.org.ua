- [« Threaded::shift](threaded.shift.md)
- [Threaded::wait »](threaded.wait.md)

- [PHP Manual](index.md)
- [Threaded](class.threaded.md)
- Синхронізація

# Threaded::synchronized

(PECL pthreads \>u003d 2.0.0)

Threaded::synchronized — Синхронізація

### Опис

public **Threaded::synchronized**([Closure](class.closure.md)
`$block`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Виконує блок, зберігаючи блокування синхронізації посилальних об'єктів для
викликає контексту.

### Список параметрів

`block`
Блок коду для виконання.

`args`
Список аргументів змінної довжини для використання як
аргументи функції блоку.

### Значення, що повертаються

Значення блоку, що повертається.

### Приклади

**Приклад #1 Синхронізація**

` <?phpclass My extends Thread {    public function run() {        $this->synchronized(function($thread){            if (!$thread->done)                $thread->wait();        }, $this); }}$my u003d new My();$my->start();$my->synchronized(function($thread){   $thread->done u003d true;    $thread->notify();}, $my );var_dump($my->join());?> `

Результат виконання цього прикладу:

bool(true)
