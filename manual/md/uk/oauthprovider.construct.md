- [«
OAuthProvider::checkOAuthRequest](oauthprovider.checkoauthrequest.md)
- [OAuthProvider::consumerHandler
»](oauthprovider.consumerhandler.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Конструктор класу OAuthProvider

# OAuthProvider::\_\_construct

(PECL OAuth u003d> 1.0.0)

OAuthProvider::\_\_construct - Конструктор класу OAuthProvider

### Опис

public **OAuthProvider::\_\_construct**(array `$params_array` u003d ?)

Створює об'єкт класу [OAuthProvider](class.oauthprovider.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`params_array`
Установка цих необов'язкових параметрів обмежена [CLI
SAPI] (features.commandline.md).

### Значення, що повертаються

Об'єкт класу [OAuthProvider](class.oauthprovider.md).

### Приклади

**Приклад #1 Приклад використання **OAuthProvider::\_\_construct()****

` <?phptry {   $op u003d new OAuthProvider(); // Використовуємо користувацькі callback-функції    $op->consumerHandler(array($this, 'lookupConsumer')); $op->timestampNonceHandler(array($this, 'timestampNonceChecker')); $op->tokenHandler(array($this, 'myTokenHandler')); // Ігноруємо параметр foo_uri    $op->setParam('foo_uri', NULL); // Для даної кінцевої точки токен не потрібний    $op->setRequestTokenPath('/v1/oauth/request_token'); $op->checkOAuthRequest();} catch (OAuthException $e) {    echo OAuthProvider::reportProblem($e);}?> `

### Дивіться також

- [OAuthProvider::setParam()](oauthprovider.setparam.md) -
Встановити параметр
