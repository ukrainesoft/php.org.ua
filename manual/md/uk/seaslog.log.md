- [« SeasLog::info](seaslog.info.md)
- [SeasLog::notice »](seaslog.notice.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Загальна функція запису до журналу

# SeasLog::log

(PECL seaslog \>u003d1.0.0)

SeasLog::log — Загальна функція запису до журналу

### Опис

public static **SeasLog::log**(
string `$level`,
string `$message` u003d ?,
array `$content` u003d ?,
string `$logger` u003d ?
): bool

Загальна функція запису журналу.

### Список параметрів

`level`
Можна використовувати рівень один із:

- [SEASLOG_DEBUG](seaslog.constants.md#constant.seaslog-debug)
- [SEASLOG_INFO](seaslog.constants.md#constant.seaslog-info)
- [SEASLOG_NOTICE](seaslog.constants.md#constant.seaslog-notice)
- [SEASLOG_WARNING](seaslog.constants.md#constant.seaslog-warning)
- [SEASLOG_ERROR](seaslog.constants.md#constant.seaslog-error)
- [SEASLOG_CRITICAL](seaslog.constants.md#constant.seaslog-critical)
- [SEASLOG_ALERT](seaslog.constants.md#constant.seaslog-alert)
- [SEASLOG_EMERGENCY](seaslog.constants.md#constant.seaslog-emergency)

Або ви можете створити власний рівень.

`message`
Повідомлення журналу.

`content`
Повідомлення містить наповнювачі, які розробники замінюють значеннями
із масиву вмісту. Якщо "message" - це інформація журналу від
{NAME}\`, а \`content\` - \`array('NAME' u003d\> 'Нікіти')\`, інформація
журналу буде "інформація журналу від Микити".

`logger`
\`logger\`, укладений у третій параметр, використовуватиметься прямо
зараз, як тимчасовий реєстратор, якщо функція SeasLog::setLogger()
викликається у попередньому вмісті. Якщо logger дорівнює NULL або
"" (порожній рядок), SeasLog буде використовувати останній реєстратор,
встановлений методом [SeasLog::setLogger()](seaslog.setlogger.md).

### Значення, що повертаються

Повертає TRUE у разі успішного виконання запису журналу, FALSE в
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SeasLog::log()****

`` <?phpvar_dump(SeasLog::log(SEASLOG_INFO,'info log'));var_dump(SeasLog::getBuffer());//створення нового власного рівняvar_dump(SeasLog::log('MySelfLevel','info ));var_dump(SeasLog::getBuffer());//с `content`var_dump(SeasLog::log('MySelfLevel','info log {NAME}',array('NAME' u003d> 'neeke')) );var_dump(SeasLog::getBuffer());//с `logger`var_dump(SeasLog::log('MySelfLevel','info log {NAME}',array('NAME' u003d> 'neeke'),' tmp_logger'));var_dump(SeasLog::getBuffer());?> ``

Результатом виконання цього прикладу буде щось подібне:

bool(true)
array(1) {
["/var/log/www/default/20180707.log"]u003d>
array(1) {
[0]u003d>
string(79) "2018-07-07 11:12:37 | INFO | 72427 | 5b402fa56a2ea | 1530933157.436 | info log
"
}
}

bool(true)
array(1) {
["/var/log/www/default/20180707.log"]u003d>
array(1) {
[0]u003d>
string(86) "2018-07-07 11:13:59 | MySelfLevel | 72470 | 5b402ff781c5e | 1530933239.532 | info log
"
}
}

bool(true)
array(1) {
["/var/log/www/tmp_logger/20180707.log"]u003d>
array(1) {
[0]u003d>
string(92) "2018-07-07 11:28:12 | MySelfLevel | 72833 | 5b40334ce6a2f | 1530934092.946 | info log neeke
"
}
}

bool(true)
array(1) {
["/var/log/www/default/20180707.log"]u003d>
array(1) {
[0]u003d>
string(86) "2018-07-07 11:20:12 | INFO | 72616 | 5b40316c3641e | 1530933612.222 | info log neeke
"
}
}

### Дивіться також

- [seaslog.default_template](seaslog.configuration.md#ini.seaslog.default-template)
- [SeasLog::debug()](seaslog.debug.md) - Записує інформацію
рівня "debug" до журналу
- [SeasLog::info()](seaslog.info.md) - Записує інформацію рівня
"info" у журнал
- [SeasLog::notice()](seaslog.notice.md) - Записує інформацію
рівня "notice" у журнал
- [SeasLog::warning()](seaslog.warning.md) - Записує інформацію
рівня "warning" до журналу
- [SeasLog::error()](seaslog.error.md) - Записує інформацію
рівня "error" у журнал
- [SeasLog::critical()](seaslog.critical.md) - Записує інформацію
рівня "critical" у журнал
- [SeasLog::alert()](seaslog.alert.md) - Записує інформацію
рівня "alert" у журнал
- [SeasLog::emergency()](seaslog.emergency.md) - Записує
інформацію рівня "emergency" до журналу
