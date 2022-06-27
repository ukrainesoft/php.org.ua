- [«
OAuthProvider::timestampNonceHandler](oauthprovider.timestampnoncehandler.md)
- [OAuthException »](class.oauthexception.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Встановити обробник tokenHandler

# OAuthProvider::tokenHandler

(PECL OAuth u003d> 1.0.0)

OAuthProvider::tokenHandler — Встановити обробник tokenHandler

### Опис

public
**OAuthProvider::tokenHandler**([callable](language.types.callable.md)
`$callback_function`): void

Встановлює callback-функцію обробника токена, яка буде
використовуватися
[OAuthProvider::callTokenHandler()](oauthprovider.calltokenhandler.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`callback_function`
Функція типу [callable](language.types.callable.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **OAuthProvider::tokenHandler()****

` <?phpfunction tokenHandler($provider) {    if ($provider->token u003du003du003d 'rejected') {       return OAUTH_TOKEN_REJECTED; } elseif ($provider->token u003du003du003d 'revoked') {        return OAUTH_TOKEN_REVOKED; }   $provider->token_secret u003d "the_tokens_secret"; return OAUTH_OK;}?> `

### Дивіться також

- [OAuthProvider::callTokenHandler()](oauthprovider.calltokenhandler.md) -
Викликати callback-функцію tokenNonceHandler
