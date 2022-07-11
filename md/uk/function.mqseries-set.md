- [« mqseries_put](function.mqseries-put.md)
- [mqseries_strerror »](function.mqseries-strerror.md)

- [PHP Manual](index.md)
- [Функції mqseries](ref.mqseries.md)
- MQSeries MQSET

# mqseries_set

(PECL mqseries \>u003d 0.10.0)

mqseries_set — MQSeries MQSET

### Опис

**mqseries_set**(
resource `$hConn`,
resource `$hObj`,
int `$selectorCount`,
array `$selectors`,
int `$intAttrCount`,
array `$intAttrs`,
int `$charAttrLength`,
array `$charAttrs`,
resource `&$compCode`,
resource `&$reason`
): void

Функція **mqseries_set()** (MQSET) використовується для зміни атрибутів
черги.

### Список параметрів

`hConn`
Обробник з'єднання.

Є відкрите з'єднання з менеджером черг.

`hObj`
Object handle.

Об'єкт, що використовується.

`selectorCount`
Кількість селекторів.

`selectors`
Масив селекторів атрибутів.

`intAttrCount`
Кількість цілісних атрибутів.

`intAttrs`
Масив цілісних атрибутів.

`charAttrLength`
Розмір буфера рядкових атрибутів.

`charAttrs`
Строкові атрибути.

`compCode`
Код завершення.

`reason`
Код причини, що кваліфікує compCode.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [mqseries_inq()](function.mqseries-inq.md) - MQSeries MQINQ
