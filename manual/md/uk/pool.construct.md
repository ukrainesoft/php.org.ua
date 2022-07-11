- [« Pool::collect](pool.collect.md)
- [Pool::resize »](pool.resize.md)

- [PHP Manual](index.md)
- [Pool](class.pool.md)
- Створює новий пул воркерів

# Pool::\_\_construct

(PECL pthreads \>u003d 2.0.0)

Pool::\_\_construct - Створює новий пул воркерів

### Опис

public **Pool::\_\_construct**(int `$size`, string `$class` u003d ?, array
`$ctor` u003d ?)

Створює новий пул робітників. Пули ліниво створюють свої потоки, що
означає, що нові потоки будуть створюватися лише тоді, коли вони
необхідні виконання завдань.

### Список параметрів

`size`
Максимальна кількість воркерів, яка може створити цей пул

`class`
Клас для нових воркерів. Якщо клас не вказано, то за замовчуванням
використовується клас [Worker](class.worker.md).

`ctor`
Масив аргументів передачі конструкторам нових воркерам.

### Приклади

**Приклад #1 Створення пулів**

`<?phpclass MyWorker extends Worker {    public function __construct(Something $something) {       $this->something u003d $something; }    public function run() {         /** ... **/    }}$pool u003d new Pool(8, \MyWorker::class, [new Som|

Результат виконання цього прикладу:

object(Pool)#1 (6) {
["size":protected]u003d>
int(8)
["class":protected]u003d>
string(8) "MyWorker"
["workers":protected]u003d>
NULL
["work":protected]u003d>
NULL
["ctor":protected]u003d>
array(1) {
[0]u003d>
object(Something)#2 (0) {
}
}
["last":protected]u003d>
int(0)
}
