- [« DOMCharacterData::appendData](domcharacterdata.appenddata.md)
- [DOMCharacterData::insertData »](domcharacterdata.insertdata.md)

- [PHP Manual](index.md)
- [DOMCharacterData](class.domcharacterdata.md)
- Видалити діапазон символів із вузла

# DOMCharacterData::deleteData

(PHP 5, PHP 7, PHP 8)

DOMCharacterData::deleteData — Видалити діапазон символів із вузла

### Опис

public **DOMCharacterData::deleteData**(int `$offset`, int `$count`):
bool

Видаляє `count` символів, починаючи з позиції `offset`.

### Список параметрів

`offset`
Позиція, з якої видалятимуться символи.

`count`
Кількість символів, що видаляються. Якщо `offset` та `count` у сумі виявиться
більше значення довжини будуть видалені всі символи до кінця даних.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

**`DOM_INDEX_SIZE_ERR`**
Виникає, якщо `offset` менше нуля чи більше кількості 16-бітних
блоків даних, або якщо `count` має негативне значення.

### Дивіться також

- [DOMCharacterData::appendData()](domcharacterdata.appenddata.md) -
Додати рядок до кінця символьних даних вузла
- [DOMCharacterData::insertData()](domcharacterdata.insertdata.md) -
Вставити рядок у вказану 16-бітну позицію
- [DOMCharacterData::replaceData()](domcharacterdata.replacedata.md) -
Замінити підрядок у вузлі типу DOMCharacterData
- [DOMCharacterData::substringData()](domcharacterdata.substringdata.md) -
Витягує певний діапазон даних із вузла
