- [«
OAuthProvider::setRequestTokenPath](oauthprovider.setrequesttokenpath.md)
- [OAuthProvider::tokenHandler »](oauthprovider.tokenhandler.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Встановити обробник timestampNonceHandler

# OAuthProvider::timestampNonceHandler

(PECL OAuth u003d> 1.0.0)

OAuthProvider::timestampNonceHandler — Встановити обробник
timestampNonceHandler

### Опис

public
**OAuthProvider::timestampNonceHandler**([callable](language.types.callable.md)
`$callback_function`): void

Встановлює callback-функцію, що використовується в
[OAuthProvider::callTimestampNonceHandler()](oauthprovider.calltimestampnoncehandler.md).
У цьому обробнику будуть передані помилки, що стосуються timestamp/nonce.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`callback_function`
Функція типу [callable](language.types.callable.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання
**OAuthProvider::timestampNonceHandler()****

` <?phpfunction timestampNonceChecker($provider) {    if ($provider->nonce u003du003du003d 'bad') {        return OAUTH_BAD_NONCE; } elseif ($provider->timestamp u003du003d '0') {        return OAUTH_BAD_TIMESTAMP; }   return OAUTH_OK;}?> `

### Дивіться також

- [OAuthProvider::callTimestampNonceHandler()](oauthprovider.calltimestampnoncehandler.md) -
Викликати callback-функцію timestampNonceHandler
