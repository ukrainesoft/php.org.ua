- [«SyncEvent::fire](syncevent.fire.md)
- [SyncEvent::wait »](syncevent.wait.md)

- [PHP Manual](index.md)
- [SyncEvent](class.syncevent.md)
- скидає ручну подію

# SyncEvent::reset

(PECL sync \>u003d 1.0.0)

SyncEvent::reset — Скидає ручну подію

### Опис

public **SyncEvent::reset**(): bool

Скидає об'єкт [SyncEvent](class.syncevent.md), який був
запущений/встановлений. Дійсно лише для об'єктів подій із скиданням
вручну.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 **SyncEvent::reset()** example**

` <?php// У веб-додатку:$event u003d new SyncEvent("DemoApplication", true);$event->wait();// В завдання cron:$event u003d new SyncEvent("DemoApplication", true) ;$event->reset();/* ... Виконання деяких задач по обслуговування ... */$event->fire();?> `

### Дивіться також

- [SyncEvent::fire()](syncevent.fire.md) - Запускає/встановлює
подія
- **SyncEvent::reset()**
- [SyncEvent::wait()](syncevent.wait.md) - Очікує запуску/установки
події
