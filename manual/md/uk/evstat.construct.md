- [«EvStat::attr](evstat.attr.md)
- [EvStat::createStopped »](evstat.createstopped.md)

- [PHP Manual](index.md)
- [EvStat](class.evstat.md)
- створює об'єкт спостерігача EvStat

# EvStat::\_\_construct

(PECL ev \>u003d 0.2.0)

EvStat::\_\_construct — Створює об'єкт спостерігача EvStat

### Опис

public **EvStat::\_\_construct**(
string `$path`,
float `$interval`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
)

Створює об'єкт спостерігача EvStat та автоматично запускає спостерігача.

### Список параметрів

`path`
Шлях очікування зміни статусу.

`interval`
Підказує, як швидко очікується виявлення змін, та його зазвичай
вказується **`0.0`**, щоб дозволити *libev* вибрати відповідне
значення.

`callback`
Дивіться [Спостерігачі зворотного дзвінка](ev.watcher-callbacks.md) .

`data`
Користувальницькі дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Приклади

**Приклад #1 Дивимося зміни в /var/log/messages**

`` <?php// Використовуємо 10-секундний інтервал оновлення.$w u003d new EvStat("/var/log/messages", 8, function ($w) { echo "/var/log/messages змін
"; $attr u003d $w->attr(); if ($attr['nlink']) {  printf("Розмір: %ld
", $attr['size']);  printf("Переглянуто: %ld
", $attr['atime']);  printf("Змінено: %ld
", $attr['mtime']); } else { fprintf(STDERR, "`messages` файл не найден!"); $w->stop(); }});Ev::run();?> ``
