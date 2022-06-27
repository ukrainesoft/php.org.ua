- [«
OAuthProvider::calltokenHandler](oauthprovider.calltokenhandler.md)
- [OAuthProvider::\_\_construct »](oauthprovider.construct.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Перевірка запиту oauth

# OAuthProvider::checkOAuthRequest

(PECL OAuth u003d> 1.0.0)

OAuthProvider::checkOAuthRequest — Перевірка запиту oauth

### Опис

public **OAuthProvider::checkOAuthRequest**(string `$uri` u003d ?, string
`$method` u003d ?): void

Перевіряє запит OAuth.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`uri`
Необов'язковий URI, або кінцева точка.

`method`
Необов'язковий параметр, який визначає метод HTTP. Одна з
**`OAUTH_HTTP_METHOD_*`** [констант OAuth](oauth.constants.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викликає помилку рівня **`E_ERROR`**, якщо HTTP-метод заданий некоректно.

### Дивіться також

- [OAuthProvider::reportProblem()](oauthprovider.reportproblem.md) -
Повідомити про проблему
