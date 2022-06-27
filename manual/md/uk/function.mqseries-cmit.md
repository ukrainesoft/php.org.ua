- [« mqseries_close](function.mqseries-close.md)
- [mqseries_conn »](function.mqseries-conn.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQCMIT

# mqseries_cmit

(PECL mqseries \>u003d 0.10.0)

mqseries_cmit — MQSeries MQCMIT

### Опис

**mqseries_cmit**(resource `$hconn`, resource `&$compCode`, resource
`&$reason`): void

Функція **mqseries_cmit()** (MQCMIT) фіксує транзакцію. Тобто. всі
повідомлення, розміщені в чергу з останньої точки синхронізації
стають незмінними. Всі повідомлення, прочитані з черги з
останньої точки синхронізації видаляються з неї.

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

**Приклад #1 Приклад використання **mqseries_cmit()****

`<?php   mqseries_cmit($conn, $comp_code, $reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         printf("cmit CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));    }?> `

### Примітки

> **Примітка**:
>
> [mqseries_back()](function.mqseries-back.md) не працює, якщо для
> підключення до менеджера черг використовується MQSeries Client.

### Дивіться також

- [mqseries_begin()](function.mqseries-begin.md) - MQseries MQBEGIN
- [mqseries_back()](function.mqseries-back.md) - MQSeries MQBACK
- [mqseries_conn()](function.mqseries-conn.md) - MQSeries MQCONN
- [mqseries_connx()](function.mqseries-connx.md) - MQSeries MQCONNX
