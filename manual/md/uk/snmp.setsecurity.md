- [«SNMP::set](snmp.set.md)
- [SNMP::walk »](snmp.walk.md)

- [PHP Manual](index.md)
- [SNMP](class.snmp.md)
- Налаштовує пов'язані з безпекою параметри сесії SNMPv3

# SNMP::setSecurity

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SNMP::setSecurity — Налаштовує пов'язані з безпекою установки
сесії SNMPv3

### Опис

public **SNMP::setSecurity**(
string `$securityLevel`,
string `$authProtocol` u003d "",
string `$authPassphrase` u003d "",
string `$privacyProtocol` u003d "",
string `$privacyPassphrase` u003d "",
string `$contextName` u003d "",
string `$contextEngineId` u003d ""
): bool

setSecurity налаштовує пов'язані з безпекою параметри сесії,
використовувані у протоколі SNMP версії 3

### Список параметрів

`securityLevel`
рівень безпеки (noAuthNoPriv\|authNoPriv\|authPriv)

`authProtocol`
протокол аутентифікації (MD5 або SHA)

`authPassphrase`
пароль аутентифікації

`privacyProtocol`
протокол конфіденційності (DES або AES)

`privacyPassphrase`
пароль конфіденційності

`contextName`
ім'я контексту

`contextEngineId`
контекст EngineID

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SNMP::setSecurity()****

` <?php $sessionu003du003dnew SNMP(SNMP::VERSION_3, $hostname, $rwuser, $timeout, $retries); $session->setSecurity('authPriv', 'MD5', $auth_pass, 'AES', $priv_pass, '', 'aeeeff');?> `

### Дивіться також

- [SNMP::\_\_construct()](snmp.construct.md) - Створює екземпляр
SNMP, що представляє сесію віддаленого агента SNMP
