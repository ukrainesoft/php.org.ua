- [« SeasLog::setRequestID](seaslog.setrequestid.md)
- [SeasLog::warning »](seaslog.warning.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Встановлює змінну запиту SeasLog вручну

# SeasLog::setRequestVariable

(PECL seaslog \>u003d1.9.0)

SeasLog::setRequestVariable — Встановлює змінну запиту SeasLog
вручну

### Опис

public static **SeasLog::setRequestVariable**(int `$key`, string
`$value`): bool

Встановлює змінну запиту SeasLog вручну.

### Список параметрів

`key`
Константа, ціле число.

- [SEASLOG_REQUEST_VARIABLE_DOMAIN_PORT](seaslog.constants.md#constant.seaslog-request-variable-domain-port)
- [SEASLOG_REQUEST_VARIABLE_REQUEST_URI](seaslog.constants.md#constant.seaslog-request-variable-request-uri)
- [SEASLOG_REQUEST_VARIABLE_REQUEST_METHOD](seaslog.constants.md#constant.seaslog-request-variable-request-method)
- [SEASLOG_REQUEST_VARIABLE_CLIENT_IP](seaslog.constants.md#constant.seaslog-request-variable-client-ip)

`value`
Значення змінної запиту.

### Значення, що повертаються

Повертає TRUE у разі успішного виконання, FALSE у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SeasLog::setRequestVariable()****

` <?php$sDomainPort u003d 'domain:port';$sRequestUri u003d 'uri';$sRequestMethod u003d 'method';$sClientIp u003d 'client_ip';$iErrorKey u003d 1000;$oSeasLog u003d oSeasLog->setRequestVariable(SEASLOG_REQUEST_VARIABLE_DOMAIN_PORT, $sDomainPort));var_dump($oSeasLog->setRequestVariable(SEASLOG_REQUEST_VARIABLE_REQUEST_URI, $sRequestUri));var_dump($oSeasLog->setRequestVariable(SEASLOG_REQUEST_VARIABLE_REQUEST_METHOD, $sRequestMethod));var_dump($oSeasLog->setRequestVariable( SEASLOG_REQUEST_VARIABLE_CLIENT_IP, $sClientIp));var_dump($oSeasLog->setRequestVariable($iErrorKey,NULL));var_dump($oSeasLog->getRequestVariable(SEASLOG_REQUEST_VARIABLE_DOMAIN_PORT) u003du003d $sDomainPort);var_dump($oSeasLog->getRequestVariable(SEASLOG_REQUEST_VARIABLE_REQUEST_URI) u003du003d $sRequestUri);var_dump($oSeasLog->getRequestVariable(SEASLOG_REQUEST_VARIABLE_REQUEST_METHOD) u003du003d$sRequestMethod);var_dump($oSeasLog->getRequestVariable(SEASLOG_REQUEST_VARIABLE_C$ rrorKey));?> `

Результатом виконання цього прикладу буде щось подібне:


bool(true)
bool(true)
bool(true)
bool(true)
bool(false)
bool(true)
bool(true)
bool(true)
bool(true)
bool(false)

### Дивіться також

- [SeasLog::getRequestVariable()](seaslog.getrequestvariable.md) -
Отримує змінну запиту SeasLog
