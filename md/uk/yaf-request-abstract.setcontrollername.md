- [«
Yaf_Request_Abstract::setBaseUri](yaf-request-abstract.setbaseuri.md)
- [Yaf_Request_Abstract::setDispatched
»](yaf-request-abstract.setdispatched.md)

- [PHP Manual](index.md)
- [Yaf_Request_Abstract](class.yaf-request-abstract.md)
- Встановлює ім'я контролера

# Yaf_Request_Abstract::setControllerName

(Yaf \>u003d1.0.0)

Yaf_Request_Abstract::setControllerName — Встановлює ім'я контролера

### Опис

public **Yaf_Request_Abstract::setControllerName**(string `$controller`,
bool `$format_name` u003d true): void

Встановлює ім'я контролера для запиту, який зазвичай використовується
маршрутизатором, що настроюється, для встановлення імені контролера результату
маршруту.

### Список параметрів

`controller`
string, ім'я контролера, має бути в CamelCase, наприклад, "Index" або
"Foo_Bar"

`format_name`
Додано в Yaf 3.2.0, за замовчуванням Yaf відформатує ім'я у CamelCase,
якщо для нього встановлено значення **`false`**, Yaf встановить
оригінальне ім'я для запиту.

### Значення, що повертаються
