- [« Зміни OpenSSL у PHP 5.6.x](migration56.openssl.md)
- [Нові глобальні константи »](migration56.constants.md)

- [PHP Manual](index.md)
- [Міграція з PHP 5.5.x на PHP 5.6.x](migration56.md)
- Інші зміни у модулях

## Інші зміни в модулях

### [cURL](book.curl.md)

Низка констант, помічені як застарілі в бібліотеці cURL, тепер будуть
видалені:

- **`CURLOPT_CLOSEPOLICY`**
- **`CURLCLOSEPOLICY_CALLBACK`**
- **`CURLCLOSEPOLICY_LEAST_RECENTLY_USED`**
- **`CURLCLOSEPOLICY_LEAST_TRAFFIC`**
- **`CURLCLOSEPOLICY_OLDEST`**
- **`CURLCLOSEPOLICY_SLOWEST`**

### [OCI8](book.oci8.md)

- Підтримка неявних наборів результатів для Oracle Database 12c була
додано за допомогою нової функції
[oci_get_implicit_resultset()](function.oci-get-implicit-resultset.md).
- За допомогою `oci_execute($s, OCI_NO_AUTO_COMMIT)`, для SELECT більше
необов'язково ініціювати внутрішній ROLLBACK під час закриття
з'єднання.
- Додані зонди DTrace, контрольовані за допомогою опції конфігурації
`--enable-dtrace`.
- [oci_internal_debug()](function.oci-internal-debug.md) тепер
нічого не робить.
- Формат виведення функції [phpinfo()](function.phpinfo.md) для OCI8
змінився.

### [Zip](book.zip.md)

Додано опцію конфігурації `--with-libzip`, для використання
системної бібліотеки libzip. Потрібно щонайменше libzip версії 0.11,
рекомендується 0.11.2 або пізніша.

### [MySQLi](book.mysqli.md)

Додано опцію
[mysqli.rollback_on_cached_plink](mysqli.configuration.md#ini.mysqli.rollback-on-cached-plink),
яка керує поведінкою відкату постійних з'єднань.
