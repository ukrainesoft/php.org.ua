- [« mqseries_disc](function.mqseries-disc.md)
- [mqseries_inq »](function.mqseries-inq.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQGET

# mqseries_get

(PECL mqseries \>u003d 0.10.0)

mqseries_get — MQSeries MQGET

### Опис

**mqseries_get**(
resource `$hConn`,
resource `$hObj`,
array `&$md`,
array `&$gmo`,
int `&$bufferLength`,
string `&$msg`,
int `&$data_length`,
resource `&$compCode`,
resource `&$reason`
): void

The **mqseries_get()** (MQGET) call retrieves a message from a local
queue that has been opened using the
[mqseries_open()](function.mqseries-open.md) (MQOPEN) call

### Список параметрів

`hConn`
Обробник з'єднання.

Є відкрите з'єднання з менеджером черг.

`hObj`
Оброблювач об'єкта.

Представляє об'єкт, що використовується.

`md`
Дескриптор повідомлення (MQMD).

`gmo`
Опції отримання повідомлення (MQGMO).

`bufferLength`
Очікуваний розмір буфера результату

`msg`
Буфер, до якого буде поміщено вилучене повідомлення.

`data_length`
Актуальний розмір буфера

`compCode`
Код завершення.

`reason`
Код причини, що кваліфікує compCode.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **mqseries_get()****

` <?php// Открываем соединение с MQ    mqseries_conn('WMQ1', $conn, $comp_code, $reason);// Теперь $conn содержит ссылку на соединение// Открываем соединение с очередью testq    mqseries_open(                $conn,                array(' ObjectName' u003d> 'TESTQ'),                MQSERIES_MQOO_INPUT_AS_Q_DEF | MQSERIES_MQOO_FAIL_IF_QUIESCING | MQSERIES_MQOO_OUTPUT,                $obj,                $comp_code,                $reason);// Теперь $obj содержит ссылку на объект (TESTQ)// Устанавливаем пустой дескриптор сообщения. $mdg u003d array();// Устанавливаем опции извлечения сообщения    $gmo u003d array('Options' u003d> MQSERIES_MQGMO_FAIL_IF_QUIESCING | MQSERIES_MQGMO_WAIT, 'WaitInterval' u003d> 3000);// Получаем сообщение    mqseries_get($conn, $obj, $mdg, $gmo, 255, $msg, $data_length, $comp_code, $reason); if($comp_code !u003du003d MQSERIES_MQCC_OK) {        printf("GET CompCode:%d Reason:%d Text:%s<br>", $comp_code, $reason, $; }// закриваємо $obj   mqseries_close($conn, $obj, MQSERIES_MQCO_NONE,$comp_code,$reason);// закриваємо з'єднання|

### Дивіться також

- [mqseries_conn()](function.mqseries-conn.md) - MQSeries MQCONN
- [mqseries_connx()](function.mqseries-connx.md) - MQSeries MQCONNX
- [mqseries_open()](function.mqseries-open.md) - MQSeries MQOPEN
- [mqseries_put()](function.mqseries-put.md) - MQSeries MQPUT
