- [«EvStat::prev](evstat.prev.md)
- [EvStat::stat »](evstat.stat.md)

- [PHP Manual](index.md)
- [EvStat](class.evstat.md)
- Налаштовує спостерігача

# EvStat::set

(PECL ev \>u003d 0.2.0)

EvStat::set — Налаштовує спостерігача

### Опис

public **EvStat::set**( string `$path` , float `$interval` ): void

Налаштовує спостерігача.

### Список параметрів

`path`
Шлях очікування зміни статусу.

`interval`
Підказує, як швидко очікується виявлення змін, та його зазвичай
вказується **`0.0`**, щоб дозволити *libev* вибрати відповідне
значення.

### Значення, що повертаються

Функція не повертає значення після виконання.
