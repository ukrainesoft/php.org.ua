- [«SyncEvent::\_\_construct](syncevent.construct.md)
- [SyncEvent::reset »](syncevent.reset.md)

- [PHP Manual](index.md)
- [SyncEvent](class.syncevent.md)
- Запускає/встановлює подію

# SyncEvent::fire

(PECL sync \>u003d 1.0.0)

SyncEvent::fire — Запускає/встановлює подію

### Опис

public **SyncEvent::fire**(): bool

Запускає/встановлює об'єкт [SyncEvent](class.syncevent.md).
Дозволяє проходити кільком потокам, які очікують, якщо об'єкт
події було створено з параметром manual рівним **`true`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncEvent::fire()****

` <?php// У веб-додатку:$event u003d new SyncEvent("GetAppReport");$event->fire();// В завдання cron:$event u003d new SyncEvent("GetAppReport");$event- >wait();?> `

### Дивіться також

- [SyncEvent::reset()](syncevent.reset.md) - Скидає ручне
подія
- [SyncEvent::wait()](syncevent.wait.md) - Очікує запуску/установки
події
