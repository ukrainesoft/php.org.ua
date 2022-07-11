- [«Yar_Client::\_\_construct](yar-client.construct.md)
- [Yar_Concurrent_Client »](class.yar-concurrent-client.md)

- [PHP Manual](index.md)
- [Yar_Client](class.yar-client.md)
- Задати контекст виклику

# Yar_Client::setOpt

(PECL yar \> u003d 1.0.0)

Yar_Client::setOpt — Задати контекст дзвінка

### Опис

public **Yar_Client::setOpt**(int `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [Yar_Client](class.yar-client.md)\|false

### Список параметрів

`name`
Може приймати значення: YAR_OPT_PACKAGER, YAR_OPT_PERSISTENT
(необхідна підтримка на сервері), YAR_OPT_TIMEOUT,
YAR_OPT_CONNECT_TIMEOUT, YAR_OPT_HEADER (Доступно з версії 2.0.4)

`value`

### Значення, що повертаються

Повертає `$this` у разі успішного завершення або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Yar_Client::setOpt()****

` <?php$cient u003d new Yar_Client("http://host/api/");//Встановимо час очікування на 1 секунду$client->SetOpt(YAR_OPT_CONNECT_TIMEOUT, 1000);//Установимо > SetOpt(YAR_OPT_PACKAGER, "json");//Встановимо власний заголовок$client->SetOpt(YAR_OPT_HEADER, array("hr1: val1", hd2: val2");/* викликаємо$ ->some_method("parameter");?> `

Результатом виконання цього прикладу буде щось подібне:

### Дивіться також

- [Yar_Client::\_\_call()](yar-client.call.md) - Виклик сервісу
