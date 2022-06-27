- [« OAuthProvider::generateToken](oauthprovider.generatetoken.md)
- [OAuthProvider::isRequestTokenEndpoint
»](oauthprovider.isrequesttokenendpoint.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- is2LeggedEndpoint

# OAuthProvider::is2LeggedEndpoint

(PECL OAuth u003d> 1.0.0)

OAuthProvider::is2LeggedEndpoint — is2LeggedEndpoint

### Опис

public
**OAuthProvider::is2LeggedEndpoint**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$params_array`): void

Двосторонній потік або запит на підпис. Не потребує токена.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`params_array`

### Значення, що повертаються

Об'єкт [OAuthProvider](class.oauthprovider.md).

### Приклади

**Приклад #1 Приклад використання
**OAuthProvider::is2LeggedEndpoint()****

` <?php$provider u003d new OAuthProvider();$provider->is2LeggedEndpoint(true);?> `

### Дивіться також

- [OAuthProvider::\_\_construct()](oauthprovider.construct.md) -
Конструктор класу OAuthProvider
