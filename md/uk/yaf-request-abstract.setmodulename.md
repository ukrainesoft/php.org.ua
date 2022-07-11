- [«
Yaf_Request_Abstract::setDispatched](yaf-request-abstract.setdispatched.md)
- [Yaf_Request_Abstract::setParam
»](yaf-request-abstract.setparam.md)

- [PHP Manual](index.md)
- [Yaf_Request_Abstract](class.yaf-request-abstract.md)
- Встановлює ім'я модуля

# Yaf_Request_Abstract::setModuleName

(Yaf \>u003d1.0.0)

Yaf_Request_Abstract::setModuleName — Встановлює ім'я модуля

### Опис

public **Yaf_Request_Abstract::setModuleName**(string `$module`, bool
`$format_name` u003d true): void

Встановлює ім'я модуля для запиту, зазвичай використовується для настроювання
маршрутизатор для встановлення імені модуля результату маршруту.

### Список параметрів

`module`
string ім'я модуля, має бути в CamelCase, наприклад, "Index" або
"Foo_Bar"

`format_name`
Додано в Yaf 3.2.0, за замовчуванням Yaf відформатує ім'я у CamelCase,
якщо для нього встановлено значення **`false`**, Yaf встановить
оригінальне ім'я для запиту.

### Значення, що повертаються
