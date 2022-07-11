- [« SeasLog::analyzerCount](seaslog.analyzercount.md)
- [SeasLog::closeLoggerStream »](seaslog.closeloggerstream.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Отримує деталізацію журналу за рівнем, log_path, key_word, start,
limit, order

# SeasLog::analyzerDetail

(PECL seaslog \>u003d1.1.6)

SeasLog::analyzerDetail — Отримує деталізацію журналу за рівнем,
log_path, key_word, start, limit, order

### Опис

public static **SeasLog::analyzerDetail**(
string `$level`,
string `$log_path` u003d ?,
string `$key_word` u003d ?,
int `$start` u003d ?,
int `$limit` u003d ?,
int `$order` u003d ?
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

SeasLog отримує результат виконання команди grep -ai '{level}'
\| grep -ai '{key_word}' \| sed -n '{start},{limit}'p\`, використовує
системний канал і повертає масив до PHP.

### Список параметрів

`level`
Рядок. Рівень інформації в журналі.

`log_path`
Рядок. Шлях інформації журналу.

`key_word`
Рядок. Ключове слово для пошуку журналу.

`start`
Ціле число. За замовчуванням '1'.

`limit`
Ціле число. За замовчуванням '20'.

`order`
Ціле число. За замовчуванням
[SEASLOG_DETAIL_ORDER_ASC](seaslog.constants.md#constant.seaslog-detail-order-asc).
Дивіться також:

- [SEASLOG_DETAIL_ORDER_ASC](seaslog.constants.md#constant.seaslog-detail-order-asc)
- [SEASLOG_DETAIL_ORDER_DESC](seaslog.constants.md#constant.seaslog-detail-order-desc)

### Значення, що повертаються

Повертає результати як масиву.

> **Примітка**:
>
> Якщо start, limit не дорівнює NULL, у Windows SeasLog викине виняток
> з повідомленням: "Param start and limit don't support Windows" (Параметри
> start і limit не підтримуються Windows).

### Приклади

**Приклад #1 Приклад використання **SeasLog::analyzerDetail()****

`` <?php$result1u003du003dSeasLog::analyzerDetail(SEASLOG_ERROR);//с `logger` і `key_word`$result2 u003d SeasLog::analyzerDetail(SEASLOG_ERROR,'test/logger/','neeke'); с `start` і `limit`$result3 u003d SeasLog::analyzerDetail(SEASLOG_ERROR,'test/logger/','neeke',1,2);var_dump($result1,$result2,$result3);?> ``

Результатом виконання цього прикладу буде щось подібне:

array(20) {
[0]u003d>
string(93) "2018-07-09 12:52:53 | ERROR | 12247 | 5b42ea2580e51 | 1531111973.528 | log message from neeke"
[1]u003d>
string(93) "2018-07-09 12:52:54 | ERROR | 12256 | 5b42ea26d6657 | 1531111974.878 | log message from neeke"
[2]u003d>
string(93) "2018-07-09 12:52:55 | ERROR | 12265 | 5b42ea277b8d4 | 1531111975.506 | log message from neeke"
[3]u003d>
string(104) "2018-07-09 12:52:55 | ERROR | 12274 | 5b42ea27db5dc | 1531111975.898 | log message from the other people"
...
}

array(3) {
[0]u003d>
string(93) "2018-07-09 12:52:53 | ERROR | 12247 | 5b42ea2580e51 | 1531111973.528 | log message from neeke"
[1]u003d>
string(93) "2018-07-09 12:52:54 | ERROR | 12256 | 5b42ea26d6657 | 1531111974.878 | log message from neeke"
[2]u003d>
string(93) "2018-07-09 12:52:55 | ERROR | 12265 | 5b42ea277b8d4 | 1531111975.506 | log message from neeke"
}

array(2) {
[0]u003d>
string(93) "2018-07-09 12:52:53 | ERROR | 12247 | 5b42ea2580e51 | 1531111973.528 | log message from neeke"
[1]u003d>
string(93) "2018-07-09 12:52:54 | ERROR | 12256 | 5b42ea26d6657 | 1531111974.878 | log message from neeke"
}

### Дивіться також

- [SeasLog::analyzerCount()](seaslog.analyzercount.md) - Отримує
кількість журналів за рівнем, log_path та key_word
