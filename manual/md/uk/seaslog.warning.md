- [« SeasLog::setRequestVariable](seaslog.setrequestvariable.md)
- [SPL »](book.spl.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Записує інформацію рівня "warning" у журнал

# SeasLog::warning

(PECL seaslog \>u003d1.0.0)

SeasLog::warning — Записує інформацію рівня "warning" у журнал

### Опис

public static **SeasLog::warning**(string `$message`, array `$content` u003d
?, string `$logger` u003d ?): bool

Записує інформацію рівня "warning" у журнал.

> **Примітка**:
>
> "WARNING" - Виняткові випадки, які є помилками.
> Потенційно помилкова інформація, яка потребує уваги та вимагає
> Виправлення.

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

**Приклад #1 Приклад використання **SeasLog::warning()****

` <?phpvar_dump(SeasLog::warning('log message'));//с contentvar_dump(SeasLog::warning('log message from {NAME}',array('NAME' u003d> 'neeke'))); //з часовим loggervar_dump(SeasLog::warning('log message from {NAME}',array('NAME' u003d> 'neeke'),'tmp_logger'));var_dump(SeasLog::getBuffer());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
bool(true)
array(2) {
["/var/log/www/default/20180707.log"]u003d>
array(2) {
[0]u003d>
string(81) "2018-07-07 11:45:49 | WARNING | 73263 | 5b40376d1067c | 1530935149.68 | log message
"
[1]u003d>
string(92) "2018-07-07 11:45:49 | WARNING | 73263 | 5b40376d1067c | 1530935149.68 | log message from neeke
"
}
["/var/log/www/tmp_logger/20180707.log"]u003d>
array(1) {
[0]u003d>
string(92) "2018-07-07 11:45:49 | WARNING | 73263 | 5b40376d1067c | 1530935149.68 | log message from neeke
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
- [SeasLog::error()](seaslog.error.md) - Записує інформацію
рівня "error" у журнал
- [SeasLog::critical()](seaslog.critical.md) - Записує інформацію
рівня "critical" у журнал
- [SeasLog::alert()](seaslog.alert.md) - Записує інформацію
рівня "alert" у журнал
- [SeasLog::emergency()](seaslog.emergency.md) - Записує
інформацію рівня "emergency" до журналу
- [SeasLog::log()](seaslog.log.md) - Загальна функція запису в журнал
