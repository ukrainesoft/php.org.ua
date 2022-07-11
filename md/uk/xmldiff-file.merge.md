- [« XMLDiff\File::diff](xmldiff-file.diff.md)
- [Розбір XML»] (book.xml.md)

- [PHP Manual](index.md)
- [XMLDiff\File](class.xmldiff-file.md)
- Застосувати зміни до документа XML

# XMLDiff\File::merge

(PECL xmldiff \>u003d 0.8.0)

XMLDiff\File::merge — Застосувати зміни до документа XML

### Опис

public **XMLDiff\File::merge**(string `$src`, string `$diff`): string

Створює новий документ XML на базі документа джерела та списку
змін.

### Список параметрів

`src`
Шлях до XML-документа джерела.

`diff`
Шлях до XML-документу, що містить інформацію про зміни.

### Значення, що повертаються

Рядок із новим XML-документом або **`null`**.
