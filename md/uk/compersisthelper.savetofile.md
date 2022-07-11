- [«
COMPersistHelper::LoadFromStream](compersisthelper.loadfromstream.md)
- [COMPersistHelper::SaveToStream
»](compersisthelper.savetostream.md)

- [PHP Manual](index.md)
- [COMPersistHelper](class.compersisthelper.md)
- Зберегти об'єкт у файл

# COMPersistHelper::SaveToFile

(PHP 5, PHP 7, PHP 8)

COMPersistHelper::SaveToFile — Зберегти об'єкт у файл

### Опис

public **COMPersistHelper::SaveToFile**(?string `$filename`, bool
`$remember` u003d **`true`**): bool

Зберігає копію об'єкта у вказаний файл.

### Список параметрів

`filename`
Ім'я файлу.

`remember`
Визначає, чи буде 'filename' використовуватись для поточного робітника
файлу. Якщо **`true`**, то `filename` стає поточним файлом, та
об'єкт повинен очистити свій прапор dirty після збереження. Якщо
**`false`**, то ця операція запису буде вважатися як "Save A Copy As
...". У цьому випадку поточний файл залишиться без змін і об'єкт не
зніматиме прапор dirty.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток [com_exception](class.com-exception.md), якщо
пов'язаний об'єкт не реалізує COM інтерфейс **IPersistFile**, або якщо
виклик **IPersistFile::Save()** завершився помилкою.

### Приклади

**Приклад #1 Використання **COMPersistHelper::saveToFile()****

` <?php$word u003d new COM('Word.Application');$doc u003d $word->Documents->Add();$ph u003d new COMPersistHelper($doc);$ph->SaveToFile('C: \Users\cmb\Documents\my.docx');$word->Quit();?> `
