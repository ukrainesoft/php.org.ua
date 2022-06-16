- [«Yar_Client](class.yar-client.md)
- [Yar_Client::\_\_construct »](yar-client.construct.md)

- [PHP Manual](index.md)
- [Yar_Client](class.yar-client.md)
- Виклик сервісу

# Yar_Client::\_\_call

(PECL yar \> u003d 1.0.0)

Yar_Client::\_\_call — Виклик сервісу

### Опис

public **Yar_Client::\_\_call**(string `$method`, array `$parameters`):
void

Здійснює виклик віддаленого RPC-метода.

### Список параметрів

`method`
Ім'я дистанційного методу.

`parameters`
Параметри.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yar_Client::\_\_call()****

` <?php$client u003d new Yar_Client("http://host/api/");/* виклик віддаленого сервісу */$result u003d $client->some_method("parameter");?> `

Результатом виконання цього прикладу буде щось подібне:

### Дивіться також

- [Yar_Client::setOpt()](yar-client.setopt.md) - Задати контекст
виклику
