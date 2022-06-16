- [«Worker](class.worker.md)
- [Worker::getStacked »](worker.getstacked.md)

- [PHP Manual](index.md)
- [Worker](class.worker.md)
- Зібрати посилання на завершені завдання

# Worker::collect

(PECL pthreads \>u003d 3.0.0)

Worker::collect — Зібрати посилання на завершені завдання

### Опис

public **Worker::collect**([Callable](language.types.callable.md)
`$collector` u003d ?): int

Дозволяє Worker зібрати "сміттєві" посилання на завдання. Опціонально можна
задати користувальницький збирач.

### Список параметрів

`collector`
Складальник типу Callable, який повинен повертати **`true`** або
**`false`** залежно від того, чи можна зібрати завдання. Випадки,
коли вам може знадобитися власний збирач, дуже рідкісні.

### Значення, що повертаються

Кількість завдань, що залишилися в стеку Worker, які будуть зібрані.

### Приклади

**Приклад #1 Приклад використання **Worker::collect()****

` <?php$worker u003d new Worker();echo "Зараз на стеку {$worker->collect()} завдань, потрібно зібрати
";for ($i u003d 0; $i < 15; ++$i) {    $worker->stack(new class extends Threaded {});}echo "На стеку {$worker->collect() які потрібно зібрати
$worker->start();while($worker->collect()); зберуть
";$worker->shutdown(); `

Результат виконання цього прикладу:

Зараз на стеку 0 завдань, які потрібно зібрати
На стеку 15 завдань, які потрібно зібрати
Тепер на стеку 0 завдань, які чекають, коли їх зберуть
