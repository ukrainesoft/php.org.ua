- [«
Yaf_Request_Abstract::setActionName](yaf-request-abstract.setactionname.md)
- [Yaf_Request_Abstract::setControllerName
»](yaf-request-abstract.setcontrollername.md)

- [PHP Manual](index.md)
- [Yaf_Request_Abstract](class.yaf-request-abstract.md)
- Встановлює базовий URI

# Yaf_Request_Abstract::setBaseUri

(Yaf \>u003d1.0.0)

Yaf_Request_Abstract::setBaseUri — Встановлює базовий URI

### Опис

public **Yaf_Request_Abstract::setBaseUri**(string `$uir`): bool

Встановлює базовий URI, базовий URI використовується під час виконання
маршрутизації, у фазі маршрутизації URI запиту використовується для
маршрутизації запиту, а базовий URI використовується для пропуску ведучої
частини (базового URI) URI запиту. Тобто, якщо надходить запит з URI
запиту a/b/c, якщо ви встановите базовий URI на "a/b", на етапі
маршрутизації використовуватиметься лише "/c".

> **Примітка**:
>
> Як правило, вам не потрібно встановлювати його, Yaf визначить
> автоматично.

### Список параметрів

`uir`
Базовий URI

### Значення, що повертаються

Повертає логічне значення (boolean)
