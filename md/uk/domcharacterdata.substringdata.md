- [« DOMCharacterData::replaceData](domcharacterdata.replacedata.md)
- [DOMChildNode »](class.domchildnode.md)

- [PHP Manual](index.md)
- [DOMCharacterData](class.domcharacterdata.md)
- Виймає певний діапазон даних із вузла

# DOMCharacterData::substringData

(PHP 5, PHP 7, PHP 8)

DOMCharacterData::substringData — Виймає певний діапазон даних
з вузла

### Опис

public **DOMCharacterData::substringData**(int `$offset`, int `$count`):
string\|false

Повертає зазначений підрядок.

### Список параметрів

`offset`
Початок позиції підрядки.

`count`
Кількість видобутих символів.

### Значення, що повертаються

Вказаний підрядок. Якщо `offset` та `count` у сумі перевищують довжину
рядки даних вузла будуть вилучені всі символи до кінця рядка.

### Помилки

**`DOM_INDEX_SIZE_ERR`**
Виникає, якщо `offset` менше нуля чи більше кількості 16-бітних
блоків в області даних, або якщо ` count ` має негативне значення.

### Дивіться також

- [DOMCharacterData::appendData()](domcharacterdata.appenddata.md) -
Додати рядок до кінця символьних даних вузла
- [DOMCharacterData::deleteData()](domcharacterdata.deletedata.md) -
Видалити діапазон символів із вузла
- [DOMCharacterData::insertData()](domcharacterdata.insertdata.md) -
Вставити рядок у вказану 16-бітну позицію
- [DOMCharacterData::replaceData()](domcharacterdata.replacedata.md) -
Замінити підрядок у вузлі типу DOMCharacterData
