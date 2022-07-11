- [«ldap_rename](function.ldap-rename.md)
- [ldap_search »](function.ldap-search.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Прив'язати до LDAP директорії за допомогою SASL

#ldap_sasl_bind

(PHP 5, PHP 7, PHP 8)

ldap_sasl_bind — Прив'язати до LDAP директорії за допомогою SASL

### Опис

**ldap_sasl_bind**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
?string `$dn` u003d **`null`**,
?string `$password` u003d **`null`**,
?string `$mech` u003d **`null`**,
?string `$realm` u003d **`null`**,
?string `$authc_id` u003d **`null`**,
?string `$authz_id` u003d **`null`**,
?string `$props` u003d **`null`**
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `dn`, `password`, `mech`, `realm`, `authc_id`, `authz_id` and `props` тепер допускають значення null. |

### Примітки

> **Примітка**: **Вимога**
> **ldap_sasl_bind()** вимагає SASL підтримки (`sasl.h`). Перевірте, що
> ви використовували `--with-ldap-sasl` при конфігуруванні PHP, в
> Інакше ця функція не буде визначена.
