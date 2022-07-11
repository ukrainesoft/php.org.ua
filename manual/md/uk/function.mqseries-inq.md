- [« mqseries_get](function.mqseries-get.md)
- [mqseries_open »](function.mqseries-open.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQINQ

# mqseries_inq

(PECL mqseries \>u003d 0.10.0)

mqseries_inq — MQSeries MQINQ

### Опис

**mqseries_inq**(
resource `$hconn`,
resource `$hobj`,
int `$selectorCount`,
array `$selectors`,
int `$intAttrCount`,
resource `&$intAttr`,
int `$charAttrLength`,
resource `&$charAttr`,
resource `&$compCode`,
resource `&$reason`
): void

Функція **mqseries_inq()** (MQINQ) повертає масив цілих чисел та набір
рядків, які містять атрибути об'єкта.

### Список параметрів

`hConn`
Обробник з'єднання.

Є відкрите з'єднання з менеджером черг.

`hObj`
Оброблювач об'єкта.

Представляє об'єкт, що використовується.

`selectorCount`
Кількість селекторів.

`selectors`
Масив селекторів атрибутів.

`intAttrLength`
Кількість цілісних атрибутів.

`intAttr`
Масив цілісних атрибутів.

`charAttrLength`
Довжина буфера символьні атрибути.

`charAttr`
Символьні атрибути.

`compCode`
Код завершення.

`reason`
Код причини, що кваліфікує compCode.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **mqseries_inq()****

` <?php   $int_attr u003d array(); $char_attru003du003d"""; mqseries_inq($conn, $obj, 1, array(MQSERIES_MQCA_Q_MGR_NAME), 0,$int_attr, 48, $char_attr, $comp_code, $reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         printf("INQ CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));    }}else {        echo "INQ QManager name result ".$char_attr."<br>
";    }?> `

### Дивіться також

- [mqseries_conn()](function.mqseries-conn.md) - MQSeries MQCONN
- [mqseries_connx()](function.mqseries-connx.md) - MQSeries MQCONNX
- [mqseries_open()](function.mqseries-open.md) - MQSeries MQOPEN
