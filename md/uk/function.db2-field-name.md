- [«db2_field_display_size](function.db2-field-display-size.md)
- [db2_field_num »](function.db2-field-num.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає ім'я стовпця у наборі результатів

#db2_field_name

(PECL ibm_db2 \>u003d 1.0.0)

db2_field_name — Повертає ім'я стовпця у наборі результатів

### Опис

**db2_field_name**(resource `$stmt`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$column`): string

Повертає ім'я зазначеного стовпця у наборі результатів.

### Список параметрів

`stmt`
Задає ресурс оператора, що містить набір результатів.

`column`
Задає стовпець у наборі результатів. Це може бути ціле число,
представляє індекс стовпця (починаючи з 0) або рядок, що містить ім'я
стовпця.

### Значення, що повертаються

Повертає рядок, який містить ім'я зазначеного стовпця. Якщо вказаний
стовпець не існує в наборі результатів, **db2_field_name()**
повертає **`false`**.

### Дивіться також

- [db2_field_display_size()](function.db2-field-display-size.md) -
Повертає максимальну кількість байтів, необхідну для
відображення стовпця
- [db2_field_num()](function.db2-field-num.md) - Повертає позицію
зазначеного стовпця у наборі результатів
- [db2_field_precision()](function.db2-field-precision.md) -
Повертає точність зазначеного стовпця у наборі результатів
- [db2_field_scale()](function.db2-field-scale.md) - Повертає
масштаб вказаного стовпця у наборі результатів
- [db2_field_type()](function.db2-field-type.md) - Повертає тип
даних вказаного стовпця у наборі результатів
- [db2_field_width()](function.db2-field-width.md) - Повертає
ширину поточного значення зазначеного стовпця у наборі результатів
