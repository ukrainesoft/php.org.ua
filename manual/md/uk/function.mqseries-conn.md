- [«mqseries_cmit](function.mqseries-cmit.md)
- [mqseries_connx »](function.mqseries-connx.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQCONN

# mqseries_conn

(PECL mqseries \>u003d 0.10.0)

mqseries_conn — MQSeries MQCONN

### Опис

**mqseries_conn**(
string `$qManagerName`,
resource `&$hconn`,
resource `&$compCode`,
resource `&$reason`
): void

Функція **mqseries_conn()** (MQCONN) відкриває з'єднання з менеджером
черг. Вона повертає обробник з'єднання, що використовується всіма
рештою функцій модуля.

### Список параметрів

`qManagerName`
Ім'я менеджера черг.

Ім'я менеджера черг, з яким встановлюється з'єднання.

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

**Приклад #1 Приклад використання **mqseries_conn()****

`<?php   mqseries_conn('WMQ1', $conn, $comp_code, $reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         printf("conn CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));        exit;    }?> `

### Дивіться також

- [mqseries_disc()](function.mqseries-disc.md) - MQSeries MQDISC
