- [«db2_field_precision](function.db2-field-precision.md)
- [db2_field_type »](function.db2-field-type.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає масштаб зазначеного стовпця у наборі результатів

#db2_field_scale

(PECL ibm_db2 \>u003d 1.0.0)

db2_field_scale — Повертає масштаб вказаного стовпця у наборі
результатів

### Опис

**db2_field_scale**(resource `$stmt`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$column`): int

Повертає масштаб вказаного стовпця у наборі результатів.

### Список параметрів

`stmt`
Задає ресурс оператора, що містить набір результатів.

`column`
Задає стовпець у наборі результатів. Це може бути ціле число,
представляє індекс стовпця (починаючи з 0) або рядок, що містить ім'я
стовпця.

### Значення, що повертаються

Повертає ціле число, що містить масштаб вказаного стовпця. Якщо
зазначений стовпець не існує у наборі результатів,
**db2_field_scale()** повертає **`false`**.

### Дивіться також

- [db2_field_display_size()](function.db2-field-display-size.md) -
Повертає максимальну кількість байтів, необхідну для
відображення стовпця
- [db2_field_name()](function.db2-field-name.md) - Повертає ім'я
стовпця у наборі результатів
- [db2_field_num()](function.db2-field-num.md) - Повертає позицію
зазначеного стовпця у наборі результатів
- [db2_field_precision()](function.db2-field-precision.md) -
Повертає точність зазначеного стовпця у наборі результатів
- [db2_field_type()](function.db2-field-type.md) - Повертає тип
даних вказаного стовпця у наборі результатів
- [db2_field_width()](function.db2-field-width.md) - Повертає
ширину поточного значення зазначеного стовпця у наборі результатів
