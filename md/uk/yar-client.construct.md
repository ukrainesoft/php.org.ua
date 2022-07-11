- [«Yar_Client::\_\_call](yar-client.call.md)
- [Yar_Client::setOpt »](yar-client.setopt.md)

- [PHP Manual](index.md)
- [Yar_Client](class.yar-client.md)
- Конструктор Yar_Client

# Yar_Client::\_\_construct

(PECL yar \> u003d 1.0.0)

Yar_Client::\_\_construct - Конструктор Yar_Client

### Опис

final public **Yar_Client::\_\_construct**(string `$url`, array
`$options` u003d ?)

Створює [Yar_Client](class.yar-client.md) для
[Yar_Server](class.yar-server.md).

### Список параметрів

`url`
URL сервера Yar.

### Значення, що повертаються

Об'єкт класу [Yar_Client](class.yar-client.md).

### Приклади

**Приклад #1 Приклад використання **Yar_Client::\_\_construct()****

` <?php$client u003d new Yar_Client("http://host/api/");?> `

Результатом виконання цього прикладу буде щось подібне:

### Дивіться також

- [Yar_Client::\_\_call()](yar-client.call.md) - Виклик сервісу
- [Yar_Client::setOpt()](yar-client.setopt.md) - Задати контекст
виклику
