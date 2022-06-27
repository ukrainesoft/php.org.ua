- [« mqseries_put1](function.mqseries-put1.md)
- [mqseries_set »](function.mqseries-set.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQPUT

# mqseries_put

(PECL mqseries \>u003d 0.10.0)

mqseries_put — MQSeries MQPUT

### Опис

**mqseries_put**(
resource `$hConn`,
resource `$hObj`,
array `&$md`,
array `&$pmo`,
string `$message`,
resource `&$compCode`,
resource `&$reason`
): void

Функція **mqseries_put()** (MQPUT) поміщає повідомлення в чергу або
Перелік розподілу. Черга, або список розподілу, має бути
відкриті.

### Список параметрів

`hConn`
Обробник з'єднання.

Є відкрите з'єднання з менеджером черг.

`hObj`
Оброблювач об'єкта.

Представляє об'єкт, що використовується.

`md`
Дескриптор повідомлення (MQMD).

`pmo`
Опції повідомлення, що додається (MQPMO).

`message`
Саме повідомлення.

`compCode`
Код завершення.

`reason`
Код причини, що кваліфікує compCode.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **mqseries_put()****

` <?php// Открываем соединение с MQ    mqseries_conn('WMQ1', $conn, $comp_code, $reason);// Теперь $conn содержит ссылку на соединение// Открываем соединение с очередью testq    mqseries_open(                $conn,                array(' ObjectName' u003d> 'TESTQ'),                MQSERIES_MQOO_INPUT_AS_Q_DEF | MQSERIES_MQOO_FAIL_IF_QUIESCING | MQSERIES_MQOO_OUTPUT,                $obj,                $comp_code,                $reason);// Теперь $obj содержит ссылку на объект (TESTQ)// Настраиваем массив дескриптора сообщения. Читайте Керівництво MQSeries. $md u003d array(                'Version' u003d> MQSERIES_MQMD_VERSION_1,                'Expiry' u003d> MQSERIES_MQEI_UNLIMITED,                'Report' u003d> MQSERIES_MQRO_NONE,                'MsgType' u003d> MQSERIES_MQMT_DATAGRAM,                'Format' u003d> MQSERIES_MQFMT_STRING,                'Priority' u003d> 1,                'Persistence' u003d> MQSERIES_MQPER_PERSISTENT);// Настроюємо опції додавання повідомлення. $pmo u003d array('Options' u003d> MQSERIES_MQPMO_NEW_MSG_ID|MQSERIES_MQPMO_SYNCPOINT);// кладемо повідомлення 'Ping' в чергу. mqseries_put($conn, $obj, $md, $pmo, 'Ping', $comp_code, $reason); if ($comp_code !u003du003d MQSERIES_MQCC_OK) {         printf("put CompCode:%d Reason:%d Text:%s<br>
", $comp_code, $reason, mqseries_strerror($reason));    }// Закрываем обработчик объекта $obj    mqseries_close($conn, $obj, MQSERIES_MQCO_NONE, $comp_code, $reason);// Закрываем соединение с менеджером.    mqseries_disc($ conn, $comp_code, $reason);?> `

### Дивіться також

- [mqseries_conn()](function.mqseries-conn.md) - MQSeries MQCONN
- [mqseries_connx()](function.mqseries-connx.md) - MQSeries MQCONNX
- [mqseries_open()](function.mqseries-open.md) - MQSeries MQOPEN
- [mqseries_get()](function.mqseries-get.md) - MQSeries MQGET
