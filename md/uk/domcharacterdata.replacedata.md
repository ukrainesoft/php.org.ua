- [« DOMCharacterData::insertData](domcharacterdata.insertdata.md)
- [DOMCharacterData::substringData
»](domcharacterdata.substringdata.md)

- [PHP Manual](index.md)
- [DOMCharacterData](class.domcharacterdata.md)
- Замінити підстроку у вузлі типу DOMCharacterData

# DOMCharacterData::replaceData

(PHP 5, PHP 7, PHP 8)

DOMCharacterData::replaceData — Замінити підстроку у вузлі типу
DOMCharacterData

### Опис

public **DOMCharacterData::replaceData**(int `$offset`, int `$count`,
string `$data`): bool

Замінює `count` символів, починаючи з позиції `offset`, на рядок `data`.

### Список параметрів

`offset`
Позиція, з якої розпочинається заміна.

`count`
Кількість символів для заміни. Якщо `offset` та `count` у сумі
перевищують довжину рядка даних, замінять всі символи до кінця
даних.

`data`
Рядок, на який буде проводитись заміна.

### Значення, що повертаються

Функція не повертає значення після виконання.

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
- [DOMCharacterData::substringData()](domcharacterdata.substringdata.md) -
Витягує певний діапазон даних із вузла
