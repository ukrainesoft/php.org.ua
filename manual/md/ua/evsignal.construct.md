- [«EvSignal](class.evsignal.md)
- [EvSignal::createStopped »](evsignal.createstopped.md)

- [PHP Manual](index.md)
- [EvSignal](class.evsignal.md)
- Конструктор об'єкта спостерігача EvSignal

# EvSignal::\_\_construct

(PECL ev \>u003d 0.2.0)

EvSignal::\_\_construct — Конструктор об'єкта спостерігача EvSignal

### Опис

public **EvSignal::\_\_construct**(
int `$signum` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
)

Створює об'єкт спостерігач EvSignal та автоматично його запускає. Для
створення зупиненого об'єкта спостерігача використовуйте метод
[EvSignal::createStopped()](evsignal.createstopped.md).

### Список параметрів

`signum`
Номер сигналу. Дивіться константи модуля *pcntl* та документацію по
`signal(7)`.

`callback`
Дивіться [Функції зворотного дзвінка
спостерігачів](ev.watcher-callbacks.md).

`data`
Користувальницькі дані, асоційовані із спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Приклади

**Приклад #1 Обробка сигналу SIGTERM**

` <?php$w u003d new EvSignal(SIGTERM, function ($watcher) {   echo "SIGTERM received
";   $watcher->stop();});Ev::run();?> `

### Дивіться також

- [EvSignal::createStopped()](evsignal.createstopped.md) - Create
stopped EvSignal watcher object
