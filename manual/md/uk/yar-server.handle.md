- [«Yar_Server::\_\_construct](yar-server.construct.md)
- [Yar_Client »](class.yar-client.md)

- [PHP Manual](index.md)
- [Yar_Server](class.yar-server.md)
- Запустити сервер RPC

# Yar_Server::handle

(PECL yar \> u003d 1.0.0)

Yar_Server::handle — Запустити сервер RPC

### Опис

public **Yar_Server::handle**(): bool

Запустити сервер RPC HTTP та приготуватися приймати запити.

> **Примітка**:
>
> Зазвичай RPC-запити здійснюються за допомогою HTTP POST. Якщо буде
> використано запит HTTP GET, то буде надрукована інформація про сервіс
> (закоментована секція вище).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

boolean

### Приклади

**Приклад #1 Приклад використання **Yar_Server::handle()****

` <?phpclass API {    /**    * the doc info will be generated automatically into service info page. * @params     * @return     */    public function some_method($parameter, $option u003d "foo") {    }    protected function client_can_not_see() {    }}$service u003d new Yar_Server(new API());$service->handle( );?> `

Результатом виконання цього прикладу буде щось подібне:

### Дивіться також

- [Yar_Server::\_\_construct()](yar-server.construct.md) -
Конструктор Yar_Server
