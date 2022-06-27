- [«Yar_Server_Exception](class.yar-server-exception.md)
- [Yar_Client_Exception »](class.yar-client-exception.md)

- [PHP Manual](index.md)
- [Yar_Server_Exception](class.yar-server-exception.md)
- Отримати тип виключення

# Yar_Server_Exception::getType

(PECL yar \> u003d 1.0.0)

Yar_Server_Exception::getType — Отримати тип виключення

### Опис

public **Yar_Server_Exception::getType**(): string

Отримати початковий тип виключення на сервері.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Рядок

### Приклади

**Приклад #1 Приклад використання **Yar_Server_Exception::getType()****

` //Server.php<?phpclass Custom_Exception extends Exception {};class API {    public function throw_exception($name) {         throw new Custom_Exion; }}$service u003d new Yar_Server(new API());$service->handle();?>//Client.php<?php$client u003d new Yar_Client("http://host/api.php") ;try {   $client->throw_exception("client");} catch (Yar_Server_Exception $e) {   var_dump($e->getType()); var_dump($e->getMessage());} `

Результатом виконання цього прикладу буде щось подібне:

string(16) "Custom_Exception"
string(6) "client"

### Дивіться також

-
