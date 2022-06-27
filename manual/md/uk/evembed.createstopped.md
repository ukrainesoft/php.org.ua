- [« EvEmbed::\_\_construct](evembed.construct.md)
- [EvEmbed::set »](evembed.set.md)

- [PHP Manual](index.md)
- [EvEmbed](class.evembed.md)
- Створює зупинений об'єкт спостерігач EvEmbed

# EvEmbed::createStopped

(PECL ev \>u003d 0.2.0)

EvEmbed::createStopped — Створює зупинений об'єкт спостерігач
EvEmbed

### Опис

final public static **EvEmbed::createStopped**(
object `$other` ,
[callable](language.types.callable.md) `$callback` u003d ?,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
int `$priority` u003d ?
): void

Те ж саме, що і [EvEmbed::\_\_construct()](evembed.construct.md) ,
але спостерігач не буде автоматично запущений.

### Список параметрів

`other`
Те саме, що й для [EvEmbed::\_\_construct()](evembed.construct.md)

`callback`
Дивіться [функції спостерігачів callback](ev.watcher-callbacks.md) .

`data`
Користувальницькі дані, асоційовані із спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

У разі успішного виконання повертає зупинений спостерігач
EvEmbed.

### Дивіться також

- [EvEmbed::\_\_construct()](evembed.construct.md) - Конструктор
об'єкту EvEmbed
- [Ev::embeddableBackends()](ev.embeddablebackends.md) - Повертає
набір бекендів, які можна вбудувати в інші цикли подій
