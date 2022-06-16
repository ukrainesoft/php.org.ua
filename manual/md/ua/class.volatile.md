- [« Pool::submitTo](pool.submitTo.md)
- [Семафори »](book.sem.md)

- [PHP Manual](index.md)
- [pthreads](book.pthreads.md)
- Клас Volatile

# Клас Volatile

(PECL pthreads \>u003d 3.0.0)

## Вступ

Клас **Volatile** з'явився у pthreads v3. Його введення є
наслідком нової семантики незмінності
[Threaded](class.threaded.md)-властивостей класів
[Threaded](class.threaded.md). Клас **Volatile** включає
іммутабельність їх [Threaded](class.threaded.md)-властивостей і, також,
використовується для зберігання масивів PHP у контексті
[Threaded](class.threaded.md).

## Огляд класів

class **Volatile** extends [Threaded](class.threaded.md) implements
[Collectable](class.collectable.md),
[Traversable](class.traversable.md) {

/\* Наслідувані методи \*/

public [Threaded::chunk](threaded.chunk.md)(int `$size`, bool
`$preserve`): array

public [Threaded::count](threaded.count.md)(): int

public [Threaded::extend](threaded.extend.md)(string `$class`): bool

public [Threaded::isRunning](thread.isrunning.md)(): bool

public [Threaded::isTerminated](threaded.isterminated.md)(): bool

public
[Threaded::merge](threaded.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$from`, bool `$overwrite` u003d ?): bool

public [Threaded::notify](threaded.notify.md)(): bool

public [Threaded::notifyOne](threaded.notifyone.md)(): bool

public [Threaded::pop](threaded.pop.md)(): bool

public [Threaded::run](threaded.run.md)(): void

public [Threaded::shift](threaded.shift.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[Threaded::synchronized](threaded.synchronized.md)([Closure](class.closure.md)
`$block`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [Threaded::wait](threaded.wait.md)(int `$timeout` u003d ?): bool

}

## Приклади

**Приклад #1 Нова семантика іммутабельності Threaded**

` <?phpclass Task extends Threaded{    public function __construct()   {        $this->data u003d new Threaded(); // спроба перевизначити Threaded-властивість Threaded-класу (помилка)        $this->data u003d new StdClass(); }}var_dump((new Task())->data); `

Результатом виконання цього прикладу буде щось подібне:

RuntimeException: Threaded members previously set to Threaded objects are immutable, cannot overwrite data in %s:%d

**Приклад #2 Приклад використання Volatile**

` <?phpclass Task extends Volatile{    public function __construct()   {        $this->data u003d new Threaded(); // спроба перевизначити Threaded-властивість Volatile-класу (коректно)        $this->data u003d new StdClass(); }}var_dump((new Task())->data); `

Результатом виконання цього прикладу буде щось подібне:

object(stdClass)#3 (0) {
}
