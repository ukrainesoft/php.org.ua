- [«
XMLReader::moveToNextAttribute](xmlreader.movetonextattribute.md)
- [XMLReader::open »](xmlreader.open.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Перемістити курсор на наступний вузол, пропускаючи всі піддерев'я

# XMLReader::next

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::next — Перемістити курсор на наступний вузол, пропускаючи всі
піддерев'я

### Опис

public **XMLReader::next**(?string `$name` u003d **`null`**): bool

Позиціонує курсор на наступному вузлі, пропускаючи всі піддерев'я. Якщо
такий вузол немає, курсор переміщається на кінець документа.

### Список параметрів

`name`
Ім'я наступного вузла переходу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- |
| 8.0.0 | `name` тепер допускає значення null. |

### Дивіться також

- [XMLReader::moveToNextAttribute()](xmlreader.movetonextattribute.md) -
Перемістити позицію курсору на наступний атрибут
- [XMLReader::moveToElement()](xmlreader.movetoelement.md) -
Позиціонувати курсор на батьківському елементі поточного атрибуту
- [XMLReader::moveToAttribute()](xmlreader.movetoattribute.md) -
Перемістити курсор до атрибуту із заданим ім'ям
