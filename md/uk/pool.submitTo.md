- [« Pool::submit](pool.submit.md)
- [Volatile »](class.volatile.md)

- [PHP Manual](index.md)
- [Pool](class.pool.md)
- Надсилає завдання конкретному воркеру для виконання

# Pool::submitTo

(PECL pthreads \>u003d 2.0.0)

Pool::submitTo — Відправляє завдання конкретному воркеру для виконання

### Опис

public **Pool::submitTo**(int `$worker`, [Threaded](class.threaded.md)
`$task`): int

Відправляє завдання вказаному воркеру в пулі. Воркери індексуються з 0 та
існуватимуть лише в тому випадку, якщо пулу необхідно їх створити
(оскільки потоки створюються ліниво).

### Список параметрів

`worker`
Воркер, який потрібно додати завдання, починаючи з `0`.

`task`
Завдання для виконання

### Значення, що повертаються

Ідентифікатор воркера, який прийняв завдання.

### Приклади

**Приклад #1 Надсилання завдань конкретному воркеру**

` <?phpclass Task extends Threaded {    public function run() {        var_dump(Thread::getCurrentThreadID()); }}$pool u003d new Pool(2);$pool->submit(new Task());for ($i u003d 0; $i < 5; ++$i) {   $$pool->submitTo(0, ne Task()); // додавання всіх задань першому воркеру}$pool->submitTo(1, new Task()); // не може додати завдання другому воркеру, тому що його ще не існує$pool->shutdown(); `

Результат виконання цього прикладу:

int(4475011072)
int(4475011072)
int(4475011072)
int(4475011072)
int(4475011072)
int(4475011072)

Випадковий error: Uncaught Exception: Selected worker (1) не існує в %s:%d
