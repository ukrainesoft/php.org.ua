- [«
OAuthProvider::removeRequiredParameter](oauthprovider.removerequiredparameter.md)
- [OAuthProvider::setParam »](oauthprovider.setparam.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Повідомити про проблему

# OAuthProvider::reportProblem

(PECL OAuth u003d> 1.0.0)

OAuthProvider::reportProblem — Повідомити про проблему

### Опис

final public static **OAuthProvider::reportProblem**(string
`$oauthexception`, bool `$send_headers` u003d **`true`**): string

Передати проблему як виняток
[OAuthException](class.oauthexception.md). Допустимі проблеми
перераховані в розділі [константи OAuth](oauth.constants.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`oauthexception`
Об'єкт виключення [OAuthException](class.oauthexception.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [OAuthProvider::checkOAuthRequest()](oauthprovider.checkoauthrequest.md) -
Перевірка запиту oauth
- [OAuthProvider::isRequestTokenEndpoint()](oauthprovider.isrequesttokenendpoint.md) -
Установка isRequestTokenEndpoint
