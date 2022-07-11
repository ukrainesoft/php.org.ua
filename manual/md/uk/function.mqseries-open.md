- [« mqseries_inq](function.mqseries-inq.md)
- [mqseries_put1 »](function.mqseries-put1.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQOPEN

# mqseries_open

(PECL mqseries \>u003d 0.10.0)

mqseries_open — MQSeries MQOPEN

### Опис

**mqseries_open**(
resource `$hconn`,
array `&$objDesc`,
int `$option`,
resource `&$hobj`,
resource `&$compCode`,
resource `&$reason`
): void

Функція **mqseries_open()** (MQOPEN) встановлює з'єднання з
об'єктом.

### Список параметрів

`hConn`
Обробник з'єднання.

Є відкрите з'єднання з менеджером черг.

`objDesc`
Дескриптор об'єкту. (MQOD)

`options`
Опції, що визначають роботу функцій

`hObj`
Оброблювач об'єкта.

Представляє об'єкт, що використовується.

`compCode`
Код завершення.

`reason`
Код причини, що кваліфікує compCode.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **mqseries_open()****

` <?php   $mqods u003d array('ObjectName' u003d> 'TESTQ'); mqseries_open(                $conn,                $mqods,                MQSERIES_MQOO_INPUT_AS_Q_DEF | MQSERIES_MQOO_FAIL_IF_QUIESCING | MQSERIES_MQOO_OUTPUT,                $obj,                $comp_code,                $reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         printf("open CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));        exit;    }?> `

### Дивіться також

- [mqseries_close()](function.mqseries-close.md) - MQSeries MQCLOSE
