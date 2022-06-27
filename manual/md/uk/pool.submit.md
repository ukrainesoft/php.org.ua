- [« Pool::shutdown](pool.shutdown.md)
- [Pool::submitTo »](pool.submitTo.md)

- [PHP Manual](index.md)
- [Pool](class.pool.md)
- Відправляє об'єкт на виконання

# Pool::submit

(PECL pthreads \>u003d 2.0.0)

Pool::submit — Відправляє об'єкт на виконання

### Опис

public **Pool::submit**([Threaded](class.threaded.md) `$task`): int

Відправляє завдання наступному воркеру в пулі

### Список параметрів

`task`
Завдання для виконання

### Значення, що повертаються

Ідентифікатор воркера, що виконує об'єкт

### Приклади

**Приклад #1 Надсилання завдань**

` <?phpclass MyWork extends Threaded {    public function run() {        /* ... */    }}class MyWorker extends Worker {    public function __construct(Something $something) {        $this->something u003d $something; }    public function run() {        /** ... **/    }}$pool u003d new Pool(8, \MyWorker::class, [new Some| );var_dump($pool);?> `

Результат виконання цього прикладу:

object(Pool)#1 (6) {
["size":protected]u003d>
int(8)
["class":protected]u003d>
string(8) "MyWorker"
["workers":protected]u003d>
array(1) {
[0]u003d>
object(MyWorker)#4 (1) {
["something"]u003d>
object(Something)#5 (0) {
}
}
}
["work":protected]u003d>
array(1) {
[0]u003d>
object(MyWork)#3 (1) {
["worker"]u003d>
object(MyWorker)#5 (1) {
["something"]u003d>
object(Something)#6 (0) {
}
}
}
}
["ctor":protected]u003d>
array(1) {
[0]u003d>
object(Something)#2 (0) {
}
}
["last":protected]u003d>
int(1)
}
