- [« mqseries_connx](function.mqseries-connx.md)
- [mqseries_get »](function.mqseries-get.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQDISC

# mqseries_disc

(PECL mqseries \>u003d 0.10.0)

mqseries_disc — MQSeries MQDISC

### Опис

**mqseries_disc**(resource `$hconn`, resource `&$compCode`, resource
`&$reason`): void

Функція **mqseries_disc()** (MQDISC) розриває з'єднання з менеджером
черг. Вона є протилежною функцій
[mqseries_conn()](function.mqseries-conn.md) (MQCONN) та
[mqseries_connx()](function.mqseries-connx.md) (MQCONNX).

### Список параметрів

`hConn`
Обробник з'єднання.

Є відкрите з'єднання з менеджером черг.

`compCode`
Код завершення.

`reason`
Код причини, що кваліфікує compCode.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **mqseries_disc()****

`<?php   mqseries_disc($conn, $comp_code, $reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {        printf("disc CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));    }?> `

### Дивіться також

- [mqseries_conn()](function.mqseries-conn.md) - MQSeries MQCONN
- [mqseries_connx()](function.mqseries-connx.md) - MQSeries MQCONNX
