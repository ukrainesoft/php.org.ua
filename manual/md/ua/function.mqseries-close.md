- [« mqseries_begin](function.mqseries-begin.md)
- [mqseries_cmit »](function.mqseries-cmit.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQCLOSE

# mqseries_close

(PECL mqseries \>u003d 0.10.0)

mqseries_close — MQSeries MQCLOSE

### Опис

**mqseries_close**(
resource `$hconn`,
resource `$hobj`,
int `$options`,
resource `&$compCode`,
resource `&$reason`
): void

Функція **mqseries_close()** (MQCLOSE) припиняє доступ до об'єкта та
є функцією зворотної
[mqseries_open()](function.mqseries-open.md) (MQOPEN).

### Список параметрів

`hConn`
Обробник з'єднання.

Є відкрите з'єднання з менеджером черг.

`hObj`
Оброблювач об'єкта.

Представляє об'єкт, що використовується.

`options`

`compCode`
Completion code.

`reason`
Код причини, що кваліфікує compCode.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **mqseries_close()****

`<?php   mqseries_close($conn, $obj, MQSERIES_MQCO_NONE, $comp_code, $reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         printf("close CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));    }?> `

### Дивіться також

- [mqseries_open()](function.mqseries-open.md) - MQSeries MQOPEN
- [mqseries_conn()](function.mqseries-conn.md) - MQSeries MQCONN
- [mqseries_connx()](function.mqseries-connx.md) - MQSeries MQCONNX
