- [« SplFileObject::getChildren](splfileobject.getchildren.md)
- [SplFileObject::getCurrentLine »](splfileobject.getcurrentline.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Отримує символи роздільника, обгортання та екранування для CSV

# SplFileObject::getCsvControl

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

SplFileObject::getCsvControl — Отримує символи роздільника, обгортання
та екранування для CSV

### Опис

public **SplFileObject::getCsvControl**(): array

Отримує символи роздільника, обгортання та екранування для CSV.
Символ обгортання використовується для розміщення значень полів.
Наприклад, рядок 'рядок' обгорнутий в одиночні лапки (').

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає індексний масив, що містить символи роздільника та
обмежувача.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------------------------|
| 7.4.0 | Як символ екранування можна використовувати порожній рядок. |
| 7.0.10 | Доданий символ екранування до результуючого масиву. |

### Приклади

**Приклад #1 Приклад використання **SplFileObject::getCsvControl()****

` <?php$file u003d new SplFileObject("data.txt");print_r($file->getCsvControl());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> ,
[1] u003d> "
[2] u003d> \
)

### Дивіться також

- [SplFileObject::setCsvControl()](splfileobject.setcsvcontrol.md) -
Встановлює символи роздільника, обгортання та екранування для
CSV
- [SplFileObject::fgetcsv()](splfileobject.fgetcsv.md) - Отримати
рядок з файлу та його розбір як поля CSV
