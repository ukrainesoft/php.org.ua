- [« Yaf_Route_Interface::assemble](yaf-route-interface.assemble.md)
- [Yaf_Route_Map »](class.yaf-route-map.md)

- [PHP Manual](index.md)
- [Yaf_Route_Interface](class.yaf-route-interface.md)
- Направлення запиту

# Yaf_Route_Interface::route

(Yaf \>u003d1.0.0)

Yaf_Route_Interface::route — Напрямок запиту

### Опис

abstract public
**Yaf_Route_Interface::route**([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): bool

**Yaf_Route_Interface::route()** - це єдиний метод, який
повинен реалізовувати маршрут користувача.

> **Примітка**:
>
> починаючи з 2.3.0, має бути реалізований ще один метод, дивіться
> [Yaf_Route_Interface::assemble()](yaf-route-interface.assemble.md).

Якщо метод повертає **`true`**, тоді процес маршруту буде завершено.
В іншому випадку [Yaf_Router](class.yaf-router.md) викличе наступний
маршрут у стеку маршрутів для запиту маршруту.

Цей метод встановить результат маршруту для запиту параметра, викликавши
[Yaf_Request_Abstract::setControllerName()](yaf-request-abstract.setcontrollername.md),
[Yaf_Request_Abstract::setActionName()](yaf-request-abstract.setactionname.md)
і
[Yaf_Request_Abstract::setModuleName()](yaf-request-abstract.setmodulename.md).

Метод повинен також викликати
[Yaf_Request_Abstract::setRouted()](yaf-request-abstract.setrouted.md),
щоб запит нарешті був перенаправлений.

### Список параметрів

`request`
Примірник [Yaf_Request_Abstract](class.yaf-request-abstract.md).

### Значення, що повертаються
