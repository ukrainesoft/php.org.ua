- [«Yar_Concurrent_Client](class.yar-concurrent-client.md)
- [Yar_Concurrent_Client::loop »](yar-concurrent-client.loop.md)

- [PHP Manual](index.md)
- [Yar_Concurrent_Client](class.yar-concurrent-client.md)
- Зареєструвати конкурентний виклик

# Yar_Concurrent_Client::call

(PECL yar \> u003d 1.0.0)

Yar_Concurrent_Client::call — Зареєструвати конкурентний виклик

### Опис

public static **Yar_Concurrent_Client::call**(
string `$uri`,
string `$method`,
array `$parameters` u003d ?,
[callable](language.types.callable.md) `$callback` u003d ?,
[callable](language.types.callable.md) `$error_callback` u003d ?,
array `$options` u003d ?
): int

Реєструє RPC-дзвінок, але не надсилає його негайно, а відкладає до
моменти виклику
[Yar_Concurrent_Client::loop()](yar-concurrent-client.loop.md)

### Список параметрів

`uri`
URI (http, tcp) сервера RPC

`method`
Ім'я сервісу (ім'я методу)

`parameters`
Параметри

`callback`
Callback-функція, яка буде викликана після відпрацювання віддаленого
запиту.

### Значення, що повертаються

Унікальний ідентифікатор.

### Приклади

**Приклад #1 Приклад використання **Yar_Concurrent_Client::call()****

`<?phpfunction callback($retval, $callinfo) {    var_dump($retval);}function error_callback($type, $error, $callinfo) {    error_log($error);}Yar_Concurrent host/api/", "some_method", array("parameters"), "callback");//якщо функція зворотного дзвінка не задана, буде використана визначена в_циклі викликівY /", "some_method", array("parameters"));//цей сервер приймає упаковку JSONYar_Concurrent_Client::call("http://host/api/", "some_method", array("parameters"), " ", NULL, array(YAR_OPT_PACKAGER u003d> "json"));//окремо заданий час очікуванняYar_Concurrent_Client::call("http://host/api/", "some_method", array("parameters" , NULL, array(YAR_OPT_TIMEOUTu003d>1));//запити все ще не запущені?> `

Результатом виконання цього прикладу буде щось подібне:

### Дивіться також

- [Yar_Concurrent_Client::loop()](yar-concurrent-client.loop.md) -
Запуск усіх зареєстрованих викликів
- [Yar_Concurrent_Client::reset()](yar-concurrent-client.reset.md) -
Очистити всі зареєстровані дзвінки
- [Yar_Server::\_\_construct()](yar-server.construct.md) -
Конструктор Yar_Server
- [Yar_Server::handle()](yar-server.handle.md) - Запустити сервер
RPC
