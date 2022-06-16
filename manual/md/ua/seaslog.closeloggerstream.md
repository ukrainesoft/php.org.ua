- [« SeasLog::analyzerDetail](seaslog.analyzerdetail.md)
- [SeasLog::\_\_construct »](seaslog.construct.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- вручну звільняє потік від реєстратора

# SeasLog::closeLoggerStream

(PECL seaslog \>u003d1.8.6)

SeasLog::closeLoggerStream - Вручну звільняє потік від реєстратора

### Опис

public static **SeasLog::closeLoggerStream**(int `$model`, string
`$logger`): bool

Вручну звільняє потік від реєстратора. SeasLog кешує дескриптор
потоку, відкритий реєстратором журналу, щоб заощадити накладні
Витрати створення потоку. Дескриптор буде автоматично звільнений у
наприкінці запиту. У режимі CLI процес також автоматично завершиться за
виході. Або ви можете використовувати такі функції для звільнення
вручну (функція ручного звільнення вимагає оновлення SeasLog до
(версії 1.8.6 або оновленої версії).

### Список параметрів

`model`
Ціла кількість, одна з констант:

- [SEASLOG_CLOSE_LOGGER_STREAM_MOD_ALL](seaslog.constants.md#constant.seaslog-close-logger-stream-mod-all)
- [SEASLOG_CLOSE_LOGGER_STREAM_MOD_ASSIGN](seaslog.constants.md#constant.seaslog-close-logger-stream-mod-assign)

`logger`
Ім'я реєстратора.

### Значення, що повертаються

Повертає TRUE у разі успішного звільнення потоку, FALSE у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SeasLog::closeLoggerStream()****

` ?

Результатом виконання цього прикладу буде щось подібне:


bool(true)
bool(true)
bool(true)

### Дивіться також

- [SeasLog::setLogger()](seaslog.setlogger.md) - Встановлює ім'я
реєстратора SeasLog
- [SeasLog::getLastLogger()](seaslog.getlastlogger.md) - Отримує
останній шлях реєстратора SeasLog
