- [« XMLDiff\Memory::diff](xmldiff-memory.diff.md)
- [XMLDiff\File »](class.xmldiff-file.md)

- [PHP Manual](index.md)
- [XMLDiff\Memory](class.xmldiff-memory.md)
- Застосувати зміни до документа XML

# XMLDiff\Memory::merge

(PECL xmldiff \>u003d 0.8.0)

XMLDiff\Memory::merge — Застосувати зміни до документа XML

### Опис

public **XMLDiff\Memory::merge**(string `$src`, string `$diff`): string

Створює новий документ XML на базі документа джерела та списку
змін.

### Список параметрів

`src`
XML-документ джерело.

`diff`
XML-документ, який містить інформацію про зміни.

### Значення, що повертаються

Рядок із новим XML-документом або **`null`**.
