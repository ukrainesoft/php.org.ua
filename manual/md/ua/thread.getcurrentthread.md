- [« Thread::getCreatorId](thread.getcreatorid.md)
- [Thread::getCurrentThreadId »](thread.getcurrentthreadid.md)

- [PHP Manual](index.md)
- [Thread](class.thread.md)
- Ідентифікація

# Thread::getCurrentThread

(PECL pthreads \>u003d 2.0.0)

Thread::getCurrentThread — Ідентифікація

### Опис

public static **Thread::getCurrentThread**():
[Thread](class.thread.md)

Повертає посилання на поточний потік, що виконується.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт, що представляє поточний потік, що виконується.

### Приклади

**Приклад #1 Повертає посилання на поточний потік**

`<?phpclass My extends Thread {    public function run() {       var_dump(Thread::getCurrentThread()); }}$my u003d new My();$my->start();?> `

Результат виконання цього прикладу:

object(My)#2 (0) {
}
