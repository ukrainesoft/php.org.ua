- [« Функції mqseries](ref.mqseries.md)
- [mqseries_begin »](function.mqseries-begin.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQBACK

# mqseries_back

(PECL mqseries \>u003d 0.10.0)

mqseries_back — MQSeries MQBACK

### Опис

**mqseries_back**(resource `$hconn`, resource `&$compCode`, resource
`&$reason`): void

Функція **mqseries_back()** (MQBACK) здійснює відкат транзакції. Тобто.
всі повідомлення, розміщені в чергу з останньої точки синхронізації,
видаляються із неї. Всі повідомлення, прочитані з черги з останньої
точки синхронізації, відновлюються у ній (стають доступними).

Using **mqseries_back()** працює тільки спільно з
[mqseries_begin()](function.mqseries-begin.md) і тільки якщо
використовується пряме з'єднання з менеджером черг, а не через
інтерфейс mqclient.

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

**Приклад #1 Приклад використання **mqseries_back()****

`<?php   mqseries_back($conn, $comp_code, $reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         printf("CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));    }?> `

### Примітки

> **Примітка**:
>
> **mqseries_back()** не працює, якщо для з'єднання з менеджером
> черг використовується MQSeries Client.

### Дивіться також

- [mqseries_conn()](function.mqseries-conn.md) - MQSeries MQCONN
- [mqseries_connx()](function.mqseries-connx.md) - MQSeries MQCONNX
- [mqseries_begin()](function.mqseries-begin.md) - MQseries MQBEGIN
