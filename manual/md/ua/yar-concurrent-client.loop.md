- [«Yar_Concurrent_Client::call](yar-concurrent-client.call.md)
- [Yar_Concurrent_Client::reset »](yar-concurrent-client.reset.md)

- [PHP Manual](index.md)
- [Yar_Concurrent_Client](class.yar-concurrent-client.md)
- Запуск усіх зареєстрованих викликів

# Yar_Concurrent_Client::loop

(PECL yar \> u003d 1.0.0)

Yar_Concurrent_Client::loop — Запуск усіх зареєстрованих викликів

### Опис

public static
**Yar_Concurrent_Client::loop**([callable](language.types.callable.md)
`$callback` u003d ?, [callable](language.types.callable.md)
`$error_callback` u003d ?): bool

Запускає всі зареєстровані дзвінки.

### Список параметрів

`callback`
Якщо задана функція зворотного дзвінка, вона буде запущена після
запуску всіх запитів, але до отримання відповідей від них з параметром
$callinfo дорівнює NULL.

Далі, якщо функція зворотного дзвінка не була задана під час реєстрації
виклику, то для обробки результату буде викликано цю функцію.

`error_callback`
Якщо цей параметр заданий, Yar запустить цю функцію у випадку
виникнення помилки.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yar_Concurrent_Client::loop()****

` <?phpfunction callback($retval, $callinfo) {     if ($callinfo u003du003d NULL) {       echo "Так, всі запити запущені, |
";     }}else {        echo "Це відповідь від віддаленого запиту. Ім'я методу",$callinfo["method"],             ". Був зареєстрований " , $callinfo["sequence"] , "
";     var_dump($retval);     }}function error_callback($type, $error, $callinfo) {    error_log($error);}Yar_Concurrent_Client::call(" array("parameters"), "callback");//якщо функція зворотного дзвінка не задана, буде використовується певна в циклі дзвінківYar_Concurrent_Client::call("http://host/api parameters"));//цей сервер приймає упаковку JSONYar_Concurrent_Client::call("http://host/api/", "some_method", array("parameters"), "callback", NULL, array(YAR_OP json"));//окремо заданий час очікуванняYar_Concurrent_Client::call("http://host/api/", "some_method", array("parameters"), "callback", NULL, array(YAR_OPT_TIOUT );Yar_Concurrent_Client::loop("callback", "error_callback"); //запускаем запросы,                                                           //параметр error_callback не обязателен?> `

Результатом виконання цього прикладу буде щось подібне:

Так, всі запити запущені, але поки що жодної відповіді
Це відповідь від віддаленого запиту. Назва методу issome_method. Було зареєстровано 4
string(11) "some_method"
Це відповідь від віддаленого запиту. Назва методу issome_method. Був зареєстрований 1
string(11) "some_method"
Це відповідь від віддаленого запиту. Назва методу issome_method. Було зареєстровано 2
string(11) "some_method"
Це відповідь від віддаленого запиту. Назва методу issome_method. Було зареєстровано 3
string(11) "some_method"

### Дивіться також

- [Yar_Concurrent_Client::call()](yar-concurrent-client.call.md) -
Зареєструвати конкурентний виклик
- [Yar_Concurrent_Client::reset()](yar-concurrent-client.reset.md) -
Очистити всі зареєстровані дзвінки
- [Yar_Server::\_\_construct()](yar-server.construct.md) -
Конструктор Yar_Server
- [Yar_Server::handle()](yar-server.handle.md) - Запустити сервер
RPC
