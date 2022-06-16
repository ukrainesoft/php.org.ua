- [« OAuthProvider::\_\_construct](oauthprovider.construct.md)
- [OAuthProvider::generateToken »](oauthprovider.generatetoken.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Встановити обробник consumerHandler

# OAuthProvider::consumerHandler

(PECL OAuth u003d> 1.0.0)

OAuthProvider::consumerHandler — Встановити обробник consumerHandler

### Опис

public
**OAuthProvider::consumerHandler**([callable](language.types.callable.md)
`$callback_function`): void

Задає callback-функцію обробника, яка надалі буде
викликатися
[OAuthProvider::callConsumerHandler()](oauthprovider.callconsumerhandler.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`callback_function`
Функція типу [callable](language.types.callable.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **OAuthProvider::consumerHandler()****

` <?phpfunction lookupConsumer($provider) {    if ($provider->consumer_key u003du003du003d 'unknown') {        return OAUTH_CONSUMER_KEY_UN } else if($provider->consumer_key u003du003d 'blacklisted' || $provider->consumer_key u003du003du003d 'throttled') {        return OAUTH_CONSUMER_KEY; }   $provider->consumer_secret u003d "the_consumers_secret"; return OAUTH_OK;}?> `

### Дивіться також

- [OAuthProvider::callConsumerHandler()](oauthprovider.callconsumerhandler.md) -
Викликати callback-функцію consumerNonceHandler
