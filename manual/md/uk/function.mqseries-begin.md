- [« mqseries_back](function.mqseries-back.md)
- [mqseries_close »](function.mqseries-close.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQseries MQBEGIN

# mqseries_begin

(PECL mqseries \>u003d 0.10.0)

mqseries_begin — MQseries MQBEGIN

### Опис

**mqseries_begin**(
resource `$hconn`,
array `$beginOptions`,
resource `&$compCode`,
resource `&$reason`
): void

Функція **mqseries_begin()** (MQBEGIN) відкриває транзакцію,
координує роботу менеджера черг та може використовувати зовнішні
ресурси менеджера

**mqseries_begin()** стартує транзакцію.
[mqseries_back()](function.mqseries-back.md) або
[mqseries_cmit()](function.mqseries-cmit.md) – завершують.

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

**Приклад #1 Приклад використання **mqseries_begin()****

` <?php   $mqbo u003d array(); mqseries_begin( $conn,                    $mqbo,                    $comp_code,                    $reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         /* код причини 2121 - попереджувальний. Дивись документацію MQSeries.*/        if ($reason !u003du003d 2121) {            printf("CompCode:%d Reason:%d<br>
", $comp_code, $reason, mqseries_strerror($reason));        }    }?> `

### Примітки

> **Примітка**:
>
> **mqseries_begin()** не працює, якщо для з'єднання з менеджером
> черг використовується MQSeries Client.

### Дивіться також

- [mqseries_conn()](function.mqseries-conn.md) - MQSeries MQCONN
- [mqseries_connx()](function.mqseries-connx.md) - MQSeries MQCONNX
- [mqseries_back()](function.mqseries-back.md) - MQSeries MQBACK
- [mqseries_cmit()](function.mqseries-cmit.md) - MQSeries MQCMIT
