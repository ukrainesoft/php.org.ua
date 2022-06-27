- [« mysqli::\_\_construct](mysqli.construct.md)
- [mysqli::dump_debug_info »](mysqli.dump-debug-info.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Виконує процедури налагодження

# mysqli::debug

# mysqli_debug

(PHP 5, PHP 7, PHP 8)

mysqli::debug -- mysqli_debug -- Виконує процедури налагодження

### Опис

Об'єктно-орієнтований стиль

public **mysqli::debug**(string `$options`): bool

Процедурний стиль

**mysqli_debug**(string `$options`): bool

Виконує процедури налагодження за допомогою бібліотеки Fred Fish.

### Список параметрів

`options`
Рядок, що містить процедуру налагодження, що виконується.

Рядок управління налагодженням являє собою послідовність полів,
розділених двокрапками, як показано нижче: ``

<field_1>:<field_2>:<field_N>

. Кожне поле складається з обов'язкового символу прапора, за яким слідує
необов'язковий символ `,` і список модифікаторів, розділений комами:
`flag[,modifier,modifier,...,modifier]`

| Символ `option` | Опис |
|-----------------|------------------------------- ---------|
| O | **`MYSQLND_DEBUG_FLUSH`** |
| A/a | **`MYSQLND_DEBUG_APPEND`** |
| F | **`MYSQLND_DEBUG_DUMP_FILE`** |
| i | **`MYSQLND_DEBUG_DUMP_PID`** |
| L | **`MYSQLND_DEBUG_DUMP_LINE`** |
| м | **`MYSQLND_DEBUG_TRACE_MEMORY_CALLS`** |
| n | **`MYSQLND_DEBUG_DUMP_LEVEL`** |
| o | виведення у файл |
| T | **`MYSQLND_DEBUG_DUMP_TIME`** |
| t | **`MYSQLND_DEBUG_DUMP_TRACE`** |
| x | **`MYSQLND_DEBUG_PROFILE_CALLS`** |

**Допустимі символи прапорів**

### Значення, що повертаються

Повертає **`true`**.

### Приклади

**Приклад #1 Генерація файлу трасування**

`<?php/* Створити файл трасування в '/tmp/client.trace' на локальній машині (клієнті): */mysqli_debug("d:t:o,/tmp/client.trace");?> `

### Примітки

> **Примітка**:
>
> Щоб використовувати функцію **mysqli_debug()**, вам потрібно скомпілювати
> клієнтську бібліотеку MySQL за допомогою налагодження.

### Дивіться також

- [mysqli_dump_debug_info()](mysqli.dump-debug-info.md) -
Журналування налагоджувальної інформації
- [mysqli_report()](function.mysqli-report.md) - Псевдонім
mysqli_driver-\>report_mode
