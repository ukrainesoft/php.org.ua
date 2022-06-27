- [« Типи ресурсів](seaslog.resources.md)
- [Приклади »](seaslog.examples.md)

- [PHP Manual](index.md)
- [Seaslog](book.seaslog.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`SEASLOG_VERSION`** (string)

**`SEASLOG_AUTHOR`** (string)

**`SEASLOG_ALL`** (string)
"ALL"

**`SEASLOG_DEBUG`** (string)
"DEBUG" - Детальна інформація про налагодження. Детальні інформаційні
події.

**`SEASLOG_INFO`** (string)
"INFO" - інформаційні події. Підкреслює запущений процес
програми.

**`SEASLOG_NOTICE`** (string)
NOTICE - Нормальні, але важливі події. Інформація, яка важливіша
рівня INFO під час виконання.

**`SEASLOG_WARNING`** (string)
"WARNING" - Виняткові випадки, які є помилками.
Потенційно помилкова інформація, яка вимагає уваги та вимагає
виправлення.

**`SEASLOG_ERROR`** (string)
"ERROR" - Помилки під час виконання, які не вимагають негайних
дій, але зазвичай мають бути виправлені.

**`SEASLOG_CRITICAL`** (string)
"CRITICAL" – Критичні умови. Потрібне негайне виправлення,
програмний компонент недоступний.

**`SEASLOG_ALERT`** (string)
"ALERT" - Дії повинні бути вжиті негайно. Негайне
увага має бути приділена відповідному персоналу для аварійного
ремонту.

**`SEASLOG_EMERGENCY`** (string)
"EMERGENCY" – Система непридатна для використання.

**`SEASLOG_DETAIL_ORDER_ASC`** (int)
1

**`SEASLOG_DETAIL_ORDER_DESC`** (int)
2

**`SEASLOG_APPENDER_FILE`** (int)
1

**`SEASLOG_APPENDER_TCP`** (int)
2

**`SEASLOG_APPENDER_UDP`** (int)
3

**`SEASLOG_CLOSE_LOGGER_STREAM_MOD_ALL`** (int)
1

**`SEASLOG_CLOSE_LOGGER_STREAM_MOD_ASSIGN`** (int)
2

**`SEASLOG_REQUEST_VARIABLE_DOMAIN_PORT`** (int)
1

**`SEASLOG_REQUEST_VARIABLE_REQUEST_URI`** (int)
2

**`SEASLOG_REQUEST_VARIABLE_REQUEST_METHOD`** (int)
3

**`SEASLOG_REQUEST_VARIABLE_CLIENT_IP`** (int)
4
