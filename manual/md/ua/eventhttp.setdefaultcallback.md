- [«EventHttp::setCallback](eventhttp.setcallback.md)
- [EventHttp::setMaxBodySize »](eventhttp.setmaxbodysize.md)

- [PHP Manual](index.md)
- [EventHttp](class.eventhttp.md)
- Встановлює callback-функцію за замовчуванням для обробки запитів,
які не перехоплюються конкретними callback-функціями

# EventHttp::setDefaultCallback

(PECL event \>u003d 1.4.0-beta)

EventHttp::setDefaultCallback — Встановлює callback-функцію за
замовчуванням для обробки запитів, які не перехоплюються конкретними
callback-функціями

### Опис

public **EventHttp::setDefaultCallback**( string `$cb` , string `$arg` u003d
?): void

Встановлює callback-функцію за замовчуванням для обробки запитів,
які не перехоплюються конкретними callback-функціями

### Список параметрів

`cb`
Callback-функція [callable](language.types.callable.md). Повинна
відповідати наступному прототипу:

**callback**( [EventHttpRequest](class.eventhttprequest.md) `$req` u003d
NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d NULL ): void

`req`
Об'єкт [EventHttpRequest](class.eventhttprequest.md).

`arg`
Дані користувача.

`arg`
Користувальницькі дані, що передаються в callback-функцію.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **EventHttp::setDefaultCallback()****

` <?php$base u003d new EventBase();$http u003d neu EventHttp($base);$socket u003d socket_create(AF_INET, SOCK_STREAM, SOL_TCP);if (!$http->bind("128.8)" )) {   exit("bind(1) failed
");};$http->setDefaultCallback(function($req) {   echo "URI: ", $req->getUri(), PHP_EOL;    $req->sendReply(200, "OK"); base->dispatch();?> `

### Дивіться також

- [EventHttp::setCallback()](eventhttp.setcallback.md) -
Встановлює callback-функцію для зазначеного URI
