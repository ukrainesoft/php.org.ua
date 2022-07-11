- [«ldap_search](function.ldap-search.md)
- [ldap_set_rebind_proc »](function.ldap-set-rebind-proc.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Встановити значення цієї опції

#ldap_set_option

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

ldap_set_option — Встановити значення цієї опції

### Опис

**ldap_set_option**(?[LDAP\Connection](class.ldap-connection.md)
`$ldap`, int `$option`, array\|string\|int\|bool `$value`): bool

Встановлює значення зазначеної опції `value`.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`option`
Опція `option` може бути однією з:

| Опція | Тип | Доступна із |
|-------------------------------------|--------|-- ----------|
| **`LDAP_OPT_DEREF`** | int | |
| **`LDAP_OPT_SIZELIMIT`** | int | |
| **`LDAP_OPT_TIMELIMIT`** | int | |
| **`LDAP_OPT_NETWORK_TIMEOUT`** | int | |
| **`LDAP_OPT_PROTOCOL_VERSION`** | int | |
| **`LDAP_OPT_ERROR_NUMBER`** | int | |
| **`LDAP_OPT_REFERRALS`** | bool | |
| **`LDAP_OPT_RESTART`** | bool | |
| **`LDAP_OPT_HOST_NAME`** | string | |
| **`LDAP_OPT_ERROR_STRING`** | string | |
| **`LDAP_OPT_DIAGNOSTIC_MESSAGE`** | string | |
| **`LDAP_OPT_MATCHED_DN`** | string | |
| **`LDAP_OPT_SERVER_CONTROLS`** | array | |
| **`LDAP_OPT_CLIENT_CONTROLS`** | array | |
| **`LDAP_OPT_X_KEEPALIVE_IDLE`** | int | PHP 7.1.0
| **`LDAP_OPT_X_KEEPALIVE_PROBES`** | int | PHP 7.1.0
| **`LDAP_OPT_X_KEEPALIVE_INTERVAL`** | int | PHP 7.1.0
| **`LDAP_OPT_X_TLS_CACERTDIR`** | string | PHP 7.1.0
| **`LDAP_OPT_X_TLS_CACERTFILE`** | string | PHP 7.1.0
| **`LDAP_OPT_X_TLS_CERTFILE`** | string | PHP 7.1.0
| **`LDAP_OPT_X_TLS_CIPHER_SUITE`** | string | PHP 7.1.0
| **`LDAP_OPT_X_TLS_CRLCHECK`** | int | PHP 7.1.0
| **`LDAP_OPT_X_TLS_CRLFILE`** | string | PHP 7.1.0
| **`LDAP_OPT_X_TLS_DHFILE`** | string | PHP 7.1.0
| **`LDAP_OPT_X_TLS_KEYFILE`** | string | PHP 7.1.0
| **`LDAP_OPT_X_TLS_PROTOCOL_MIN`** | int | PHP 7.1.0
| **`LDAP_OPT_X_TLS_RANDOM_FILE`** | string | PHP 7.1.0
| **`LDAP_OPT_X_TLS_REQUIRE_CERT`** | int | PHP 7.0.5

**`LDAP_OPT_SERVER_CONTROLS`** та **`LDAP_OPT_CLIENT_CONTROLS`** вимагають
список елементів керування. Це означає, що значення має бути
масивом елементів керування. Елемент управління складається з *oid*,
визначального елемент управління, опціонального *значення*, та
додаткового прапора для *критичності*. У PHP елемент керування
задається масивом, що містить елемент з ключем *oid* і рядковим
значенням і двома необов'язковими елементами. Необов'язкові елементи
є ключем *value* з рядковим значенням та ключом *iscritical* з
логічним значенням. *iscritical* за замовчуванням встановлюється в
***`false`***, якщо не вказано. Для більш детальної інформації дивіться
[» draft-ietf-ldapext-ldap-c-api-xx.txt](http://www.openldap.org/devel/cvsweb.cgi/~checkout~/doc/drafts/draft-ietf-ldapext-ldap -c-api-xx.txt).
Дивіться також другий приклад, наведений нижче.

`value`
Нове значення для зазначеної `option` (опції).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Встановлює версію протоколу**

` <?php// $ds - действительный идентификатор связи с LDAP-серверомif (ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3)) {    echo "Используется LDAPv3";} else {    echo "Не удалось установить версию протокола в 3";}? > `

**Приклад #2 Встановлює керування сервером**

`<?php//$$ds - дійсний ідентифікатор зв'язку з LDAP-сервером// елемент управління з відсутнім значенням$ctrl1 u003d array("oid" u003d> "1.2.752. / iscritical за мовчанням FALSE$ctrl2 u003d array("oid" u003d> "1.2.752.58.1.10", "value" u003d> "magic");// проба встановлення оба ($ctrl1, $ctrl2))) {    echo "Не удалося встановити серверні елементи управління";}?> `

### Примітки

> **Примітка**:
>
> Ця функція доступна лише при використанні OpenLDAP 2.x.x або
> Netscape Directory SDK x.x.

### Дивіться також

- [ldap_get_option()](function.ldap-get-option.md) - Отримати
поточне значення цієї опції
