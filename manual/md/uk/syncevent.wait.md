- [«SyncEvent::reset](syncevent.reset.md)
- [SyncReaderWriter »](class.syncreaderwriter.md)

- [PHP Manual](index.md)
- [SyncEvent](class.syncevent.md)
- Очікує запуску/установки події

# SyncEvent::wait

(PECL sync \>u003d 1.0.0)

SyncEvent::wait — Очікує запуску/установки події

### Опис

public **SyncEvent::wait**(int `$wait` u003d -1): bool

Очікує запуску об'єкта [SyncEvent](class.syncevent.md).

### Список параметрів

`wait`
Кількість мілісекунд очікування запуску події. Значення -1 нескінченне.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncEvent::wait()****

` <?php// У веб-додатку:$event u003d new SyncEvent("GetAppReport");$event->fire();// В завдання cron:$event u003d new SyncEvent("GetAppReport");$event- >wait();?> `

### Дивіться також

- [SyncEvent::fire()](syncevent.fire.md) - Запускає/встановлює
подія
