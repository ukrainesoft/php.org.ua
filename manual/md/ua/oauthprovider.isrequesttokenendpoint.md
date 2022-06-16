- [«
OAuthProvider::is2LeggedEndpoint](oauthprovider.is2leggedendpoint.md)
- [OAuthProvider::removeRequiredParameter
»](oauthprovider.removerequiredparameter.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Установка isRequestTokenEndpoint

# OAuthProvider::isRequestTokenEndpoint

(PECL OAuth u003d> 1.0.0)

OAuthProvider::isRequestTokenEndpoint — Установка isRequestTokenEndpoint

### Опис

public **OAuthProvider::isRequestTokenEndpoint**(bool
`$will_issue_request_token`): void

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`will_issue_request_token`
Встановлює, чи видаватиме токен запиту, тим самим визначаючи,
чи потрібно викликати
[OAuthProvider::tokenHandler()](oauthprovider.tokenhandler.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [OAuthProvider::setRequestTokenPath()](oauthprovider.setrequesttokenpath.md) -
Встановити шлях запиту токена
- [OAuthProvider::reportProblem()](oauthprovider.reportproblem.md) -
Повідомити про проблему
