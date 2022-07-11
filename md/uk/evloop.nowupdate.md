- [«EvLoop::now](evloop.now.md)
- [EvLoop::periodic »](evloop.periodic.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Встановлює поточний час, запитуючи ядро, оновлюючи час,
повертається EvLoop::now у процесі

# EvLoop::nowUpdate

(PECL ev \>u003d 0.2.0)

EvLoop::nowUpdate — Встановлює поточний час, запитуючи ядро,
оновлюючи час, що повертається EvLoop::now у процесі

### Опис

public **EvLoop::nowUpdate**(): void

Встановлює поточний час, запитуючи ядро, оновлюючи час,
повертається [EvLoop::now()](evloop.now.md) у процесі. Це
дорога операція, яка зазвичай виконується автоматично в
[EvLoop::run()](evloop.run.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [EvLoop::now()](evloop.now.md) - Повертає поточний "event loop"
time"
- [Ev::nowUpdate()](ev.nowupdate.md) - Встановлює поточний час
шляхом запиту до ядра в процесі оновлюючи час, що повертається Ev::now
