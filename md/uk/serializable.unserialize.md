- [« Serializable::serialize](serializable.serialize.md)
- [Closure »](class.closure.md)

- [PHP Manual](index.md)
- [Serializable](class.serializable.md)
- створює об'єкт

# Serializable::unserialize

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

Serializable::unserialize — Створює об'єкт

### Опис

public **Serializable::unserialize**(string `$data`): void

Викликається під час десеріалізації об'єкта.

> **Примітка**:
>
> Метод діє як
> [конструктор](language.oop5.decon.md#language.oop5.decon.constructor)
> об'єкта. Метод
> [\_\_construct()](language.oop5.decon.md#object.construct) *не*
> викликається після цього.

### Список параметрів

`data`
Строкове уявлення об'єкта.

### Значення, що повертаються

Значення методу, що повертається, ігнорується.

### Дивіться також

- [\_\_wakeup()](language.oop5.magic.md#object.wakeup)
- [\_\_unserialize()](language.oop5.magic.md#object.unserialize)
