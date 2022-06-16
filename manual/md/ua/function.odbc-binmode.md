- [«odbc_autocommit](function.odbc-autocommit.md)
- [odbc_close_all »](function.odbc-close-all.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- керує обробкою двійкових даних стовпця

#odbc_binmode

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_binmode — Керує обробкою двійкових даних стовпця

### Опис

**odbc_binmode**(resource `$statement`, int `$mode`): bool

Керує обробкою двійкових даних стовпця. Типи, що зачіпаються ODBC
SQL: `BINARY`, `VARBINARY` та `LONGVARBINARY`. Режим за замовчуванням можна
встановити за допомогою директиви `php.ini`
[uodbc.defaultbinmode](odbc.configuration.md#ini.uodbc.defaultbinmode).

Коли двійкові дані SQL перетворюються на символьні дані C
(**`ODBC_BINMODE_CONVERT`**), кожен байт (8 біт) вихідних даних
представляється як двох символів ASCII. Ці символи представляють
собою символьне уявлення числа у форматі ASCII у його
шістнадцятковій формі. Наприклад, двійкове число `00000001`
перетворюється на ``01``, а `11111111` - у ``FF'`.

Хоча обробка стовпців `BINARY` та `VARBINARY` залежить тільки від
binmode, обробка стовпців `LONGVARBINARY` також залежить від
longreadlen:

| binmode | longreadlen | result |
|-----------------------------|-------------|----- ----------------|
| **`ODBC_BINMODE_PASSTHRU`** | 0 | passthru |
| **`ODBC_BINMODE_RETURN`** | 0 | passthru |
| **`ODBC_BINMODE_CONVERT`** | 0 | passthru |
| **`ODBC_BINMODE_PASSTHRU`** | \>0 | passthru |
| **`ODBC_BINMODE_RETURN`** | \>0 | повернути як є |
| **`ODBC_BINMODE_CONVERT`** | \>0 | повернути як char |

**Обробка LONGVARBINARY**

Якщо використовується [odbc_fetch_into()](function.odbc-fetch-into.md),
passthru означає, що для цих стовпців повертається порожній рядок.
Якщо використовується [odbc_result()](function.odbc-result.md), passthru
означає, що дані надсилаються клієнту безпосередньо (тобто друкуються).

### Список параметрів

`statement`
Ідентифікатор результату.

Якщо `statement` дорівнює `0`, налаштування застосовуються за умовчанням для нових
результатів.

`mode`
Можливі значення для `mode`:

- **`ODBC_BINMODE_PASSTHRU`**: Використовувати режим passthru для
двійкових даних
- **`ODBC_BINMODE_RETURN`**: Повернути як є
- **`ODBC_BINMODE_CONVERT`**: Перетворити на char і повернути

> **Примітка**: На обробку двійкових стовпців LONG також впливає
> функція [odbc_longreadlen()](function.odbc-longreadlen.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
