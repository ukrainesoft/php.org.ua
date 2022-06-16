- [«mqseries_open](function.mqseries-open.md)
- [mqseries_put »](function.mqseries-put.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQPUT1

# mqseries_put1

(PECL mqseries \>u003d 0.10.0)

mqseries_put1 - MQSeries MQPUT1

### Опис

**mqseries_put1**(
resource `$hconn`,
resource `&$objDesc`,
resource `&$msgDesc`,
resource `&$pmo`,
string `$buffer`,
resource `&$compCode`,
resource `&$reason`
): void

Функція **mqseries_put1()** (MQPUT1) містить повідомлення в чергу.
Черга має бути не відкрита.

Для надсилання повідомлення в чергу ви можете використовувати як
[mqseries_put()](function.mqseries-put.md), так і **mqseries_put1()**.
[mqseries_put()](function.mqseries-put.md) (MQPUT) використовується коли
необхідно помістити в чергу кілька повідомлень, тоді як
**mqseries_put1()** (MQPUT1) зручно використовувати для одного повідомлення.
По суті, ця функція включає послідовність викликів MQOPEN,
MQPUT і MQCLOSE, що дозволяє не викликати окремо.

### Список параметрів

`hConn`
Обробник з'єднання.

Є відкрите з'єднання з менеджером черг.

`objDesc`
Object descriptor. (MQOD)

Дескриптор об'єкта (черги), куди необхідно помістити повідомлення.

`msgDesc`
Дескриптор повідомлення (MQMD).

`pmo`
Опції повідомлення, що додається (MQPMO).

`compCode`
Код завершення.

`reason`
Код причини, що кваліфікує compCode.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [mqseries_conn()](function.mqseries-conn.md) - MQSeries MQCONN
- [mqseries_connx()](function.mqseries-connx.md) - MQSeries MQCONNX
- [mqseries_open()](function.mqseries-open.md) - MQSeries MQOPEN
- [mqseries_get()](function.mqseries-get.md) - MQSeries MQGET
