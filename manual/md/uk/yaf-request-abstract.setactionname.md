- [«
Yaf_Request_Abstract::isXmlHttpRequest](yaf-request-abstract.isxmlhttprequest.md)
- [Yaf_Request_Abstract::setBaseUri
»](yaf-request-abstract.setbaseuri.md)

- [PHP Manual](index.md)
- [Yaf_Request_Abstract](class.yaf-request-abstract.md)
- Встановлює ім'я дії

# Yaf_Request_Abstract::setActionName

(Yaf \>u003d1.0.0)

Yaf_Request_Abstract::setActionName — Встановлює ім'я дії

### Опис

public **Yaf_Request_Abstract::setActionName**(string `$action`, bool
`$format_name` u003d true): void

Встановлює ім'я дії для запиту, зазвичай використовується
маршрутизатором, що настроюється, для встановлення імені контролера результату
маршруту.

### Список параметрів

`action`
string, ім'я дії, має бути вказано у нижньому регістрі, наприклад,
"index" або "foo_bar"

`format_name`
Додано до Yaf 3.2.0, за замовчуванням Yaf відформатує ім'я в нижньому
регістрі, якщо для цього параметра встановлено значення **`false`**, Yaf
встановить оригінальне ім'я на запит.

### Значення, що повертаються
