- [« Event::getSupportedMethods](event.getsupportedmethods.md)
- [Event::set »](event.set.md)

- [PHP Manual](index.md)
- [Event](class.event.md)
- Перевірити, що подія перебуває у стані очікування чи що вона
заплановано

# Event::pending

(PECL event \>u003d 1.2.6-beta)

Event::pending — Перевірити, чи подія перебуває в стані очікування
або що воно заплановане

### Опис

public **Event::pending**( int `$flags` ): bool

Перевіряє, що подія перебуває у стані очікування або що вона
заплановано.

### Список параметрів

`flags`
Одна, або кілька констант, об'єднаних логічним АБО:
**`Event::READ`** , **`Event::WRITE`** , **`Event::TIMEOUT`** ,
**`Event::SIGNAL`** .

### Значення, що повертаються

Повертає **`true`**, якщо подія запланована, або перебуває в
стан очікування і **`false`**, якщо ні.
