- [«EventHttp::accept](eventhttp.accept.md)
- [EventHttp::bind »](eventhttp.bind.md)

- [PHP Manual](index.md)
- [EventHttp](class.eventhttp.md)
- Додає псевдонім сервера до об'єкта HTTP-сервера

# EventHttp::addServerAlias

(PECL event \>u003d 1.4.0-beta)

EventHttp::addServerAlias — Додає псевдонім сервера до об'єкта
HTTP-сервера

### Опис

public **EventHttp::addServerAlias**( string `$alias` ): bool

Додає псевдонім сервера до об'єкта сервера HTTP.

### Список параметрів

`alias`
Псевдонім для додавання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **EventHttp::addServerAlias()****

` <?php$base u003d new EventBase();$http u003d neu EventHttp($base);$socket u003d socket_create(AF_INET, SOCK_STREAM, SOL_TCP);if (!$http->bind("128.8)" )) {   exit("bind(1) помилка
");};if (!$http->addServerAlias("local.net")) {   exit("Не удалося додати псевдонім сервера
");}$http->setCallback("/about", function($req) {   echo "URI: ", $req->getUri(), PHP_EOL;    $req->sendReply(200, ) });$base->dispatch();?> `

### Дивіться також

- [EventHttp::removeServerAlias()](eventhttp.removeserveralias.md) -
Видаляє псевдонім сервера
