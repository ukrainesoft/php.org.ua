- [« XMLDiff\File](class.xmldiff-file.md)
- [XMLDiff\File::merge »](xmldiff-file.merge.md)

- [PHP Manual](index.md)
- [XMLDiff\File](class.xmldiff-file.md)
- Порівняння двох файлів XML

# XMLDiff\File::diff

(PECL xmldiff \>u003d 0.8.0)

XMLDiff\File::diff — Порівняння двох файлів XML

### Опис

public **XMLDiff\File::diff**(string `$from`, string `$to`): string

Порівнює два локальні файли XML і повертає рядок з інформацією про
розходження.

### Список параметрів

`from`
Шлях до джерела документа.

`to`
Шлях до цільового документа.

### Значення, що повертаються

Рядок з XML-документом, що містить інформацію про відмінності, або
**`null`**.
