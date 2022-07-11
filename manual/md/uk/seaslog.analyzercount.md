- [« SeasLog::alert](seaslog.alert.md)
- [SeasLog::analyzerDetail »](seaslog.analyzerdetail.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Отримує кількість журналів за рівнем, log_path та key_word

# SeasLog::analyzerCount

(PECL seaslog \>u003d1.1.6)

SeasLog::analyzerCount — Отримує кількість журналів за рівнем,
log_path та key_word

### Опис

public static **SeasLog::analyzerCount**(string `$level`, string
`$log_path` u003d ?, string `$key_word` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

\`SeasLog\` набуває значення лічильника \`grep -ai '{level}' \| grep -aic
'{key_word}'\`, використовуючи системний канал і повертає до PHP (масив або
ціле число).

### Список параметрів

`level`
Рядок. Рівень журналу.

`log_path`
Рядок. Дорога до журналу.

`key_word`
Рядок. Ключове слово для пошуку журналу.

### Значення, що повертаються

Якщо "level" дорівнює SEASLOG_ALL або не заданий, повертаються всі рівні
як масив. Якщо \'level\' дорівнює SEASLOG_INFO або інший рівень,
повертається кількість як ціле число.

### Приклади

**Приклад #1 Приклад використання **SeasLog::analyzerCount()****

`` <?php$countResult1 u003d SeasLog::analyzerCount();//с `level`$countResult2 u003d SeasLog::analyzerCount(SEASLOG_DEBUG);//с `level` і `log_path`$countResul SEASLOG_ERROR,date('Ymd',time())); countResult3,$countResult4);?> ``

Результатом виконання цього прикладу буде щось подібне:

array(8) {
["DEBUG"]u003d>
int(180)
["INFO"]u003d>
int(214)
["NOTICE"]u003d>
int(0)
["WARNING"]u003d>
int(0)
["ERROR"]u003d>
int(228)
["CRITICAL"]u003d>
int(244)
["ALERT"]u003d>
int(1)
["EMERGENCY"]u003d>
int(0)
}

int(180)

int(228)

int(29)

### Дивіться також

- [SeasLog::analyzerDetail()](seaslog.analyzerdetail.md) - Отримує
деталізацію журналу за рівнем, log_path, key_word, start, limit,
order
