- [« ibase_fetch_object](function.ibase-fetch-object.md)
- [ibase_field_info »](function.ibase-field-info.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Витягує рядок із бази даних InterBase

# ibase_fetch_row

(PHP 5, PHP 7 \< 7.4.0)

ibase_fetch_row — Витягує рядок із бази даних InterBase

### Опис

**ibase_fetch_row**(resource `$result_identifier`, int `$fetch_flag` u003d
0): array

**ibase_fetch_row()** витягує один рядок даних із даного набору
результатів.

Наступні дзвінки **ibase_fetch_row()** повернуть наступний рядок у
набір результатів або **`false`**, якщо рядків більше немає.

### Список параметрів

`result_identifier`
Ідентифікатор результату InterBase.

`fetch_flag`
`fetch_flag` являє собою комбінацію констант **`IBASE_TEXT`** та
**`IBASE_UNIXTIME`** ORed. Передача **`IBASE_TEXT`** змусить функцію
повертати вміст BLOB-об'єктів замість ідентифікаторів
BLOB-об'єктів. Передача **`IBASE_UNIXTIME`** змусить функцію повертати
значення дати/часу як позначки часу Unix, а не як відформатовані
рядки.

### Значення, що повертаються

Повертає масив, що відповідає обраному рядку, або **`false`**,
якщо рядків більше немає. Кожен стовпець результату зберігається у зміщенні
масиву, починаючи з усунення 0.

### Дивіться також

- [ibase_fetch_assoc()](function.ibase-fetch-assoc.md) - Витягує
рядок результату із запиту у вигляді асоціативного масиву
- [ibase_fetch_object()](function.ibase-fetch-object.md) - Отримує
об'єкт із бази даних InterBase
