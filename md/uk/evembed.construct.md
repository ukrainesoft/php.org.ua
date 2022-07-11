- [«EvEmbed](class.evembed.md)
- [EvEmbed::createStopped »](evembed.createstopped.md)

- [PHP Manual](index.md)
- [EvEmbed](class.evembed.md)
- Конструктор об'єкту EvEmbed

# EvEmbed::\_\_construct

(PECL ev \>u003d 0.2.0)

EvEmbed::\_\_construct — Конструктор об'єкту EvEmbed

### Опис

public **EvEmbed::\_\_construct**(
object `$other` ,
[callable](language.types.callable.md) `$callback` u003d ?,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
int `$priority` u003d ?
)

Це досить просунутий тип спостерігача, який дозволяє вбудувати
один цикл подій в інший (нині підтримуються тільки
події введення-виводу у вбудованому циклі, інші типи спостерігачів можуть
оброблятися із затримкою або неправильно і не повинні використовуватись).

Докладніше читайте у [» документації
libev](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#code_ev_embed_code_when_one_backend_).

Цей спостерігач найбільш корисний у *BSD* системах без працюючого
`kqueue` для підтримки обробки великої кількості сокетів. Дивіться
приклад нижче.

### Список параметрів

`other`
Примірник класу [EvLoop](class.evloop.md). Подійний цикл для
вбудовування. Цей цикл повинен бути вбудованим (дивіться
[Ev::embeddableBackends()](ev.embeddablebackends.md) ).

`callback`
Дивіться [функції спостерігачів callback](ev.watcher-callbacks.md) .

`data`
Користувальницькі дані, асоційовані із спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Приклади

**Приклад #1 Вбудовування циклу, створеного за допомогою kqueue у подійний
цикл за замовчуванням**

` <?php/* * Перевірте, доступний або kqueue і створіть бекенд kqueue * для використання з сокетами (це звичайно працює з любою реалізацією kqueue). * Збережіть подійний цикл kqueue/socket-only в loop_socket. (Опціонально можна * використовувати прапор EVFLAG_NOENV) * * приклад взято із * http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#Examples_CONTENT-9 */        :defaultLoop();$socket_loopu003du003dNULL;$embed       u003d NULL;if (Ev::supportedBackends() & ~Ev::recommendedBackends() BACKEND_KQUEUE))) {        $embed u003d new EvEmbed($loop); }}if (!$socket_loop) {    $socket_loop u003d $loop;}// тепер використовуйте $socket_loop для всіх сокетів, а $loop для всього остального?> ``

### Дивіться також

- [Ev::embeddableBackends()](ev.embeddablebackends.md) - Повертає
набір бекендів, які можна вбудувати в інші цикли подій
