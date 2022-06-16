- [«Зумовлені константи](seaslog.constants.md)
- [Функції Seaslog »](ref.seaslog.md)

- [PHP Manual](index.md)
- [Seaslog](book.seaslog.md)
- Приклади

# Приклади

**Приклад #1 Отримує та встановлює базовий шлях**

` <?php $basePath1 u003dSeasLog::getBasePath(); SeasLog::setBasePath('/log/base_test'); $basePath2 u003d SeasLog::getBasePath(); var_dump($basePath1,$basePath2); ?> `

Результатом виконання цього прикладу буде щось подібне:

string(12) "/var/log/www"
string(14) "/log/base_test"

**Приклад #2 Отримує та встановлює логування**

` <?php$lastLogger1 u003dSeasLog::getLastLogger();SeasLog::setLogger('testModule/app1');$lastLogger2 u003d SeasLog::getLastLogger();var_dump($lastLogger1,$las?

Результатом виконання цього прикладу буде щось подібне:

string(7) "default"
string(15) "testModule/app1"

**Приклад #3 Журнал швидкого запису**

` <?phpSeasLog::log(SEASLOG_ERROR,'тестова помилка, зроблена ::log');SeasLog::debug('налагодження {userName}',array('{userName}' u003d> 'neeke'));SeasLog: :info('запис інформаційного повідомлення в журнал');SeasLog::notice('запис попередження в журнал');SeasLog::warning('сайт {website} не працює, будь ласка, можна!  array('{website}' u003d> 'github.com','{action}' u003d> 'rboot'));SeasLog::error('запис помилки в журнал');SeasLog::critical('відбулося що- те критичне');SeasLog::alert('так, це повідомлення {messageName}',array('{messageName}' u003d> 'alertMSG'));SeasLog::emergency('Тільки що повністю вигорів | }',array('{note}' u003d> 'Це жарт'));?> `

Шаблон за замовчуванням: *seaslog.default_template u003d "%T\|%L\|%P\|%Q
\| %t \| %M"*. Це означає, що за замовчуванням стиль запису журналу：
\`{dateTime}\| {level} \| {pid}\| {uniqid}\| {timeStamp} \|
{logInfo}\`.

Результатом виконання цього прикладу буде щось подібне:

*seaslog.appender u003d 1*

2014-07-27 08:53:52 | ERROR | 23625 | 599159975a9ff | 1406422432.786 | тестова помилка, зроблена log
2014-07-27 08:53:52 | DEBUG | 23625 | 599159975a9ff | 1406422432.786 | налагодження neeke
2014-07-27 08:53:52 | INFO | 23625 | 599159975a9ff | 1406422432.787 | запис інформаційного повідомлення до журналу
2014-07-27 08:53:52 | NOTICE | 23625 | 599159975a9ff | 1406422432.787 | запис попередження до журналу
2014-07-27 08:53:52 | WARNING | 23625 | 599159975a9ff | 1406422432.787 | сайт github.com не працює, будь ласка, виконайте rboot якнайшвидше!
2014-07-27 08:53:52 | ERROR | 23625 | 599159975a9ff | 1406422432.787 | запис помилки в журнал
2014-07-27 08:53:52 | CRITICAL | 23625 | 599159975a9ff | 1406422432.787 | сталося щось критичне
2014-07-27 08:53:52 | EMERGENCY | 23625 | 599159975a9ff | 1406422432.787 | Щойно повністю вигорів сусідній будинок! Це жарт

Результатом виконання цього прикладу буде щось подібне:

*seaslog.appender u003d 2* або *seaslog.appender u003d 3*

The log style final formatted such as:
<15>1 2017-08-27T01:24:59+08:00 vagrant-ubuntu-trusty test/logger[27171]: 2016-06-25 00:59:43 | DEBUG | 21423 | 599157af4e937 | 1466787583.322 | налагодження neeke
<14>1 2017-08-27T01:24:59+08:00 vagrant-ubuntu-trusty test/logger[27171]: 2016-06-25 00:59:43 | INFO | 21423 | 599157af4e937 | 1466787583.323 | запис інформаційного повідомлення до журналу
<13>1 2017-08-27T01:24:59+08:00 vagrant-ubuntu-trusty test/logger[27171]: 2016-06-25 00:59:43 | NOTICE | 21423 | 599157af4e937 | 1466787583.324 | запис попередження до журналу

**Приклад #4 Швидкий підрахунок певного типу значення підрахунку журналу**

*SeasLog* отримує значення лічильника "grep -wc", використовує системний
канал і повертає до PHP (масив чи ціле число).

` <?php$countResult1 u003dSeasLog::analyzerCount();$countResult2 u003dSeasLog::analyzerCount(SEASLOG_WARNING);$countResult3 u003dSeasLog::analyzerCount(SEASLOG_ERROR,date('$ countResult1,$countResult2,$countResult3);?> `

Результатом виконання цього прикладу буде щось подібне:

array(8) {
["DEBUG"]u003d>
int(3)
["INFO"]u003d>
int(3)
["NOTICE"]u003d>
int(3)
["WARNING"]u003d>
int(3)
["ERROR"]u003d>
int(6)
["CRITICAL"]u003d>
int(3)
["ALERT"]u003d>
int(3)
["EMERGENCY"]u003d>
int(3)
}
int(7)
int(1)

**Приклад #5 Отримує певний тип списку журналів**

*SeasLog* отримує значення лічильника grep -w, використовує системний
канал і повертає масив у PHP.

` <?php$detailErrorArray u003d SeasLog::analyzerDetail(SEASLOG_ERROR);var_dump($detailErrorArray);var_dump(SeasLog::analyzerDetail(SEASLOG_ERROR,date('Ymd',time())));?> `

Результатом виконання цього прикладу буде щось подібне:

array(6) {
[0] u003d>
string(83) "2014-02-24 00:14:02 | ERROR | 8568 | 599157af4e937 | 1393172042.717 | test error 3 "
[1] u003d>
string(83) "2014-02-24 00:14:04 | ERROR | 8594 | 5991576584446 | 1393172044.104 | test error 3 "
[2] u003d>
string(83) "2014-02-24 00:14:04 | ERROR | 8620 | 1502697015147 | 1393172044.862 | test error 3 "
[3] u003d>
string(83) "2014-02-24 00:14:05 | ERROR | 8646 | 599159975a9ff | 1393172045.989 | test error 3 "
[4] u003d>
string(83) "2014-02-24 00:14:07 | ERROR | 8672 | 599159986ec28 | 1393172047.882 | test error 3 "
[5] u003d>
string(83) "2014-02-24 00:14:08 | ERROR | 8698 | 5991599981cec | 1393172048.736 | test error 3 "
}

array(2) {
[0] u003d>
string(83) "2014-02-24 00:14:02 | ERROR | 8568 | 599157af4e937 | 1393172042.717 | test error 3 "
[1] u003d>
string(83) "2014-02-24 00:14:04 | ERROR | 8594 | 5991576584446 | 1393172044.104 | test error 3 "
}
