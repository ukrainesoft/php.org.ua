- [« OAuthProvider::reportProblem](oauthprovider.reportproblem.md)
- [OAuthProvider::setRequestTokenPath
»](oauthprovider.setrequesttokenpath.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Встановити параметр

# OAuthProvider::setParam

(PECL OAuth u003d> 1.0.0)

OAuthProvider::setParam — Встановити параметр

### Опис

final public **OAuthProvider::setParam**(string `$param_key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$param_val` u003d ?): bool

Встановлює параметр.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`param_key`
Ключ параметра.

`param_val`
Необов'язкове значення параметра.

Щоб виключити параметр із процесу перевірки підпису, встановіть його в
значення **`null`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [OAuthProvider::addRequiredParameter()](oauthprovider.addrequiredparameter.md) -
Додати необхідні параметри
