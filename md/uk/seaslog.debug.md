- [« SeasLog::critical](seaslog.critical.md)
- [SeasLog::\_\_destruct »](seaslog.destruct.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Записує інформацію рівня "debug" у журнал

# SeasLog::debug

(PECL seaslog \>u003d1.0.0)

SeasLog::debug — Записує інформацію рівня "debug" у журнал

### Опис

public static **SeasLog::debug**(string `$message`, array `$content` u003d
?, string `$logger` u003d ?): bool

Записує інформацію рівня "debug" у журнал.

> **Примітка**:
>
> "DEBUG" - Докладна інформація про налагодження. Деталізовані
> інформаційні події.

### Список параметрів

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

**Приклад #1 **SeasLog::debug()** example**

` <?phpvar_dump(SeasLog::debug('log message'));//с contentvar_dump(SeasLog::debug('log message from {NAME}',array('NAME' u003d> 'neeke'))); //з часовим loggervar_dump(SeasLog::debug('log message from {NAME}',array('NAME' u003d> 'neeke'),'tmp_logger'));var_dump(SeasLog::getBuffer());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
bool(true)
array(2) {
["/var/log/www/default/20180707.log"]u003d>
array(2) {
[0]u003d>
string(81) "2018-07-07 11:45:49 | DEBUG | 73263 | 5b40376d1067c | 1530935149.68 | log message
"
[1]u003d>
string(92) "2018-07-07 11:45:49 | DEBUG | 73263 | 5b40376d1067c | 1530935149.68 | log message from neeke
"
}
["/var/log/www/tmp_logger/20180707.log"]u003d>
array(1) {
[0]u003d>
string(92) "2018-07-07 11:45:49 | DEBUG | 73263 | 5b40376d1067c | 1530935149.68 | log message from neeke
"
}
}

### Дивіться також

- [seaslog.default_template](seaslog.configuration.md#ini.seaslog.default-template)
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
- [SeasLog::log()](seaslog.log.md) - Загальна функція запису в журнал
