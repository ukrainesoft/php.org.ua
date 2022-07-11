- [« mqseries_conn](function.mqseries-conn.md)
- [mqseries_disc »](function.mqseries-disc.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQCONNX

# mqseries_connx

(PECL mqseries \>u003d 0.10.0)

mqseries_connx — MQSeries MQCONNX

### Опис

**mqseries_connx**(
string `$qManagerName`,
array `&$connOptions`,
resource `&$hconn`,
resource `&$compCode`,
resource `&$reason`
): void

Функція **mqseries_connx()** (MQCONNX) відкриває з'єднання з менеджером
черг. Вона повертає обробник з'єднання, що використовується всіма
рештою функцій модуля.

Виклик функції **mqseries_connx()** аналогічний виклику
[mqseries_conn()](function.mqseries-conn.md) (MQCONN), за винятком
того, що MQCONNX дозволяє задати опції, що визначають режим роботи з
менеджером.

### Список параметрів

`qManagerName`
Ім'я менеджера черг.

Ім'я менеджера черг, з яким встановлюється з'єднання.

`connOps`
Опції, що визначають роботу функцій

Дивіться структуру MQCNO.

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

**Приклад #1 Приклад використання **mqseries_connx()****

` <?php    $mqcno u003d array(        'Version' u003d> MQSERIES_MQCNO_VERSION_2,        'Options' u003d> MQSERIES_MQCNO_STANDARD_BINDING,        'MQCD' u003d> array('ChannelName' u003d> 'MQNX9420.CLIENT',        'ConnectionName' u003d> 'localhost', 'TransportType' u003du003d> MQSERIES_MQXPT_TCP)    ); mqseries_connx('MQNX9420', $mqcno, $conn, $comp_code,$reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         printf("Connx CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));        exit;    }?> `

**Приклад #2 Приклад використання **mqseries_connx()** з використанням
SSL та URL відповідача OCSP**

` <?php    $mqcno u003d array(        'Version' u003d> 4, //MQCNO_VERSION_4        'Options' u003d> MQSERIES_MQCNO_STANDARD_BINDING,        'MQCD' u003d> array(            'Version' u003d> 7, //MQCD_VERSION_7            'ConnectionName' u003d> 'localhost ',            'TransportType' u003d> MQSERIES_MQXPT_TCP,            'ChannelName' u003d> 'CONNECTIONCHANNEL',            'SSLCipherSpec' u003d> 'NULL_SHA'        ),        'MQSCO' u003d> array(            'KeyRepository' u003d> '/var/mqm/qmgrs/QUEUEMGR/ ssl/key', //Local path where the SSL key repository can be found            'MQAIR' u003d> array(                'Version' u003d> 2, //MQAIR_VERSION_2                'AuthInfoType' u003d> 2, //MQAIT_OCSP                'OCSPResponderURL' u003d> ' http://dummy.OCSP.responder'             )        )    )); mqseries_connx('QUEUEMGR', $mqcno, $conn, $comp_code,$reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         printf("Connx CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));        exit;    }?> `

### Дивіться також

- [mqseries_disc()](function.mqseries-disc.md) - MQSeries MQDISC
