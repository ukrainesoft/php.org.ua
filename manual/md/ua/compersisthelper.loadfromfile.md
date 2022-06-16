- [« COMPersistHelper::InitNew](compersisthelper.initnew.md)
- [COMPersistHelper::LoadFromStream
»](compersisthelper.loadfromstream.md)

- [PHP Manual](index.md)
- [COMPersistHelper](class.compersisthelper.md)
- Завантажити об'єкт із файлу

# COMPersistHelper::LoadFromFile

(PHP 5, PHP 7, PHP 8)

COMPersistHelper::LoadFromFile — Завантажити об'єкт із файлу

### Опис

public **COMPersistHelper::LoadFromFile**(string `$filename`, int
$flags u003d 0): bool

Відкриває вказаний файл та ініціалізує об'єкт із вмісту.

### Список параметрів

`filename`
Ім'я файлу.

`flags`
Режим доступу для доступу до файлу. Допустимі значення вказані в
[» перерахуванні
STGM](https://docs.microsoft.com/en-us/windows/win32/stg/stgm-constants).
Цей режим вважається бажаним, але може бути, по необхідності, змінено
на більш строгий Якщо параметр `flags` заданий як `0`, то файл буде
відкритий з дозволами за замовчуванням, які б використовувалися, якби
Користувач відкривав цей файл.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток [com_exception](class.com-exception.md), якщо
пов'язаний об'єкт не реалізує COM інтерфейс **IPersistFile**, або якщо
виклик **IPersistFile::Load()** завершився помилкою.
