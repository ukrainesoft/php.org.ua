- [«Ev::stop](ev.stop.md)
- [Ev::suspend »](ev.suspend.md)

- [PHP Manual](index.md)
- [Ev](class.ev.md)
- Повертає набір бекендів, що підтримуються поточною конфігурацією
libev

# Ev::supportedBackends

(PECL ev \>u003d 0.2.0)

Ev::supportedBackends — Повертає набір підтримуваних бекендів
поточною конфігурацією libev

### Опис

final public static **Ev::supportedBackends**(): int

Повертає набір бекендів, які підтримуються поточною конфігурацією libev.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає бітову маску, що містить [прапори]
бекенда](class.ev.md#ev.constants.watcher-backends), об'єднані з
допомогою побітового *АБО*.

### Приклади

**Приклад #1 Цикл створюється за допомогою kqueue і вбудовується в цикл
за замовчуванням**

`<?php/** Перевіряємо, що kqueue доступний, не рекомендований і створюємо kqueue бэкенд* з використанням сокетів (які зазвичай працюють с будь у (Можемо, опціонально* використовувати прапор EVFLAG_NOENV)** Приклад взято з сайту* http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#Examples_CONTENT-9*/$loop            EvLoop::defaultLoop();$socket_loop u003d NULL;$embed       u003d NULL;if (Ev::supportedBackends() & ~Ev::recommendedBackends()_Ev:Ev:E ::BACKEND_KQUEUE))) { $embed u003d new EvEmbed($loop); }}if (!$socket_loop) { $socket_loop u003d $loop;}//Тепер застосовуємо $socket_loop для всіх сокетів і $loop всього остального?> `

### Дивіться також

- [EvEmbed](class.evembed.md)
- [Ev::recommendedBackends()](ev.recommendedbackends.md) - Отримати
бітову маску рекомендованих бекендів для даної платформи
- [Ev::embeddableBackends()](ev.embeddablebackends.md) - Повертає
набір бекендів, які можна вбудувати в інші цикли подій
- [Backend flags](class.ev.md#ev.constants.watcher-backends)
- [Examples](ev.examples.md)
