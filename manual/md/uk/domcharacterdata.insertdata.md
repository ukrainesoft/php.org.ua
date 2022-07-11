- [« DOMCharacterData::deleteData](domcharacterdata.deletedata.md)
- [DOMCharacterData::replaceData »](domcharacterdata.replacedata.md)

- [PHP Manual](index.md)
- [DOMCharacterData](class.domcharacterdata.md)
- Вставити рядок у вказану 16-бітну позицію

# DOMCharacterData::insertData

(PHP 5, PHP 7, PHP 8)

DOMCharacterData::insertData — Вставити рядок у вказаний 16-розрядний
позицію

### Опис

public **DOMCharacterData::insertData**(int `$offset`, string `$data`):
bool

Вставляє рядок `data` у позицію `offset`.

### Список параметрів

`offset`
Позиція символу, з якого буде вставлено рядок.

`data`
Рядок, що вставляється.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

**`DOM_INDEX_SIZE_ERR`**
Виникає, якщо `offset` менше нуля чи більше кількості 16-бітних
блоків даних.

### Дивіться також

- [DOMCharacterData::appendData()](domcharacterdata.appenddata.md) -
Додати рядок до кінця символьних даних вузла
- [DOMCharacterData::deleteData()](domcharacterdata.deletedata.md) -
Видалити діапазон символів із вузла
- [DOMCharacterData::replaceData()](domcharacterdata.replacedata.md) -
Замінити підрядок у вузлі типу DOMCharacterData
- [DOMCharacterData::substringData()](domcharacterdata.substringdata.md) -
Витягує певний діапазон даних із вузла
