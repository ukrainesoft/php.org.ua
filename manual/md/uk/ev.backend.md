- [«Ev](class.ev.md)
- [Ev::depth »](ev.depth.md)

- [PHP Manual](index.md)
- [Ev](class.ev.md)
- Повертає ціле число, що описує бекенд, використовуваний libev

# Ev::backend

(PECL ev \>u003d 0.2.0)

Ev::backend - Повертає ціле число, що описує бекенд, що використовується
libev

### Опис

final public static **Ev::backend**(): int

Повертає ціле число, що описує бекенд, який використовується *libev*.
Дивіться [Прапори бекенда](class.ev.md#ev.constants.watcher-backends)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ціле число (бітова маска), що описує бекенд, що використовується
* libev *.

### Дивіться також

- [EvEmbed](class.evembed.md)
- [Ev::embeddableBackends()](ev.embeddablebackends.md) - Повертає
набір бекендів, які можна вбудувати в інші цикли подій
- [Ev::recommendedBackends()](ev.recommendedbackends.md) - Отримати
бітову маску рекомендованих бекендів для даної платформи
- [Ev::supportedBackends()](ev.supportedbackends.md) - Повертає
набір бекендів, що підтримуються поточною конфігурацією libev
- [Прапори бекенда](class.ev.md#ev.constants.watcher-backends)
