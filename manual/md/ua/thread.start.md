- [« Thread::join](thread.join.md)
- [Worker »](class.worker.md)

- [PHP Manual](index.md)
- [Thread](class.thread.md)
- Виконання

# Thread::start

(PECL pthreads \>u003d 2.0.0)

Thread::start — Виконання

### Опис

public **Thread::start**(int `$options` u003d ?): bool

Запуск нового потоку для виконання реалізованого методу запуску.

### Список параметрів

`options`
Необов'язкова маска констант успадкування, за замовчуванням
PTHREADS_INHERIT_ALL.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Запуск потоку**

` <?phpclass My extends Thread {    public function run() {        /** ... **/   }}$my u003d new My()>_my;

Результат виконання цього прикладу:

bool(true)
