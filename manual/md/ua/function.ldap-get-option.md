- [«ldap_get_entries](function.ldap-get-entries.md)
- [ldap_get_values_len »](function.ldap-get-values-len.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Отримати поточне значення цієї опції

#ldap_get_option

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

ldap_get_option — Отримати поточне значення цієї опції

### Опис

**ldap_get_option**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, int `$option`, array\|string\|int `&$value` u003d **`null`**): bool

Встановлює `value` на значення зазначеної опції.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`option`
Опція `option` може бути однією з:

| Опція | Тип | Починаючи з версії
|-------------------------------------|--------|-- ----------------|
| **`LDAP_OPT_DEREF`** | int | |
| **`LDAP_OPT_SIZELIMIT`** | int | |
| **`LDAP_OPT_TIMELIMIT`** | int | |
| **`LDAP_OPT_NETWORK_TIMEOUT`** | int | |
| **`LDAP_OPT_PROTOCOL_VERSION`** | int | |
| **`LDAP_OPT_ERROR_NUMBER`** | int | |
| **`LDAP_OPT_DIAGNOSTIC_MESSAGE`** | int | |
| **`LDAP_OPT_REFERRALS`** | int | |
| **`LDAP_OPT_RESTART`** | int | |
| **`LDAP_OPT_HOST_NAME`** | string | |
| **`LDAP_OPT_ERROR_STRING`** | string | |
| **`LDAP_OPT_MATCHED_DN`** | string | |
| **`LDAP_OPT_SERVER_CONTROLS`** | array | |
| **`LDAP_OPT_CLIENT_CONTROLS`** | array | |
| **`LDAP_OPT_X_KEEPALIVE_IDLE`** | int | 7.1 |
| **`LDAP_OPT_X_KEEPALIVE_PROBES`** | int | 7.1 |
| **`LDAP_OPT_X_KEEPALIVE_INTERVAL`** | int | 7.1 |
| **`LDAP_OPT_X_TLS_CACERTDIR`** | string | 7.1 |
| **`LDAP_OPT_X_TLS_CACERTFILE`** | string | 7.1 |
| **`LDAP_OPT_X_TLS_CERTFILE`** | string | 7.1 |
| **`LDAP_OPT_X_TLS_CIPHER_SUITE`** | string | 7.1 |
| **`LDAP_OPT_X_TLS_CRLCHECK`** | int | 7.1 |
| **`LDAP_OPT_X_TLS_CRL_NONE`** | int | 7.1 |
| **`LDAP_OPT_X_TLS_CRL_PEER`** | int | 7.1 |
| **`LDAP_OPT_X_TLS_CRL_ALL`** | int | 7.1 |
| **`LDAP_OPT_X_TLS_CRLFILE`** | string | 7.1 |
| **`LDAP_OPT_X_TLS_DHFILE`** | string | 7.1 |
| **`LDAP_OPT_X_TLS_KEYFILE`** | string | 7.1 |
| **`LDAP_OPT_X_TLS_PACKAGE`** | string | 7.1 |
| **`LDAP_OPT_X_TLS_PROTOCOL_MIN`** | int | 7.1 |
| **`LDAP_OPT_X_TLS_RANDOM_FILE`** | string | 7.1 |
| **`LDAP_OPT_X_TLS_REQUIRE_CERT`** | int | |

`value`
Буде встановлено значення опції.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Перевірка версії протоколу**

` <?php//$$ds - дійсний ідентифікатор зв'язку з LDAP-серверомif (ldap_get_option($ds, LDAP_OPT_PROTOCOL_VERSION, $version)) {    echo "Використання$|
";} else {    echo "Неможливо визначити версію протоколу
";}?> `

### Примітки

> **Примітка**:
>
> Ця функція доступна лише при використанні OpenLDAP 2.x.x або
> Netscape Directory SDK x.x.

### Дивіться також

- [ldap_set_option()](function.ldap-set-option.md) - Встановити
значення даної опції
