- [« Yaf_Request_Http::\_\_construct](yaf-request-http.construct.md)
- [Yaf_Request_Http::getCookie »](yaf-request-http.getcookie.md)

- [PHP Manual](index.md)
- [Yaf_Request_Http](class.yaf-request-http.md)
- Отримує змінну від клієнта

# Yaf_Request_Http::get

(Yaf \>u003d1.0.0)

Yaf_Request_Http::get — Отримує змінну від клієнта

### Опис

public **Yaf_Request_Http::get**(string `$name`, string `$default` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримуючи змінну від клієнта, метод шукатиме `name` у параметрах
запиту, якщо ім'я не знайдено, буде шукати в POST, GET, Cookie,
Server

### Список параметрів

`name`
Ім'я змінної

`default`
Якщо параметр вказано, він буде повернутий, якщо змінна не
знайдено

### Значення, що повертаються

### Дивіться також

- [Yaf_Request_Http::getQuery()](yaf-request-http.getquery.md) -
Отримує параметр запиту
- [Yaf_Request_Http::getPost()](yaf-request-http.getpost.md) -
Отримує змінну POST
- [Yaf_Request_Http::getCookie()](yaf-request-http.getcookie.md) -
Отримує змінну Cookie
- [Yaf_Request_Http::getRaw()](yaf-request-http.getraw.md) -
Отримує необроблене тіло запиту
- [Yaf_Request_Abstract::getServer()](yaf-request-abstract.getserver.md) -
Отримує змінну SERVER
- [Yaf_Request_Abstract::getParam()](yaf-request-abstract.getparam.md) -
Отримує параметр дзвінка
