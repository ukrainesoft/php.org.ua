- [« Thread::isStarted](thread.isstarted.md)
- [Thread::start »](thread.start.md)

- [PHP Manual](index.md)
- [Thread](class.thread.md)
- Синхронізація

# Thread::join

(PECL pthreads \>u003d 2.0.0)

Thread::join — Синхронізація

### Опис

public **Thread::join**(): bool

Примушує викликаючий контекст чекати, доки вказаний потік завершить
Виконання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приєднання до зазначеного процесу**

` <?phpclass My extends Thread {    public function run() {         /* ... */    }}$my u003d new My()|my; ->join());/* ... */?> `

Результат виконання цього прикладу:

bool(true)
