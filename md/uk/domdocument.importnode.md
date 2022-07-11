- [«
DOMDocument::getElementsByTagNameNS](domdocument.getelementsbytagnamens.md)
- [DOMDocument::load »](domdocument.load.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Імпортувати вузол у поточний документ

# DOMDocument::importNode

(PHP 5, PHP 7, PHP 8)

DOMDocument::importNode — Імпортувати вузол у поточний документ

### Опис

public **DOMDocument::importNode**([DOMNode](class.domnode.md)
`$node`, bool `$deep` u003d **`false`**):
[DOMNode](class.domnode.md)\|false

Ця функція повертає копію імпортованого вузла та пов'язує її з
поточним документом.

### Список параметрів

`node`
Вузол для імпорту.

`deep`
Якщо встановлено значення **`true`**, цей метод буде рекурсивним
імпортувати піддерево вузла `node`.

> **Примітка**:
>
> Щоб скопіюватися атрибути вузла, `deep` має бути встановлений у
> **`true`**.

### Значення, що повертаються

Скопійований вузол або 'false', якщо він не може бути скопійований.

### Помилки

Якщо вузол не може бути імпортований, буде викинуто виняток
[DOMException](class.domexception.md).

### Приклади

**Приклад #1 Приклад використання **DOMDocument::importNode()****

Копіювання вузлів між документами.

` <?php$orgdoc u003d new DOMDocument;$orgdoc->loadXML("<root><element><child>text in child</child></element></root>");// Вузол, буде імпортований в новий документ$node u003d $orgdoc->getElementsByTagName("element")->item(0);// Створення нового документа$newdoc u003d new DOMDocument;$newdoc->formatOut >loadXML("<root><someelement>text in some element</someelement></root>");echo "Новий документ перед додаванням в ньому вузлів:
";echo $newdoc->saveXML();// Імпорт вузла і всіх його нащадків в документ$node u003d $newdoc->importNode($node, true);// І затем додаток| ->appendChild($node);echo "
Новий документ після додавання в него вузлів:
";echo $newdoc->saveXML();?> `

Результат виконання цього прикладу:

Новий документ перед додаванням до нього вузлів:
<?xml versionu003d"1.0"?>
<root>
<someelement>text in some element</someelement>
</root>

Новий документ після додавання до нього вузлів:
<?xml versionu003d"1.0"?>
<root>
<someelement>text in some element</someelement>
<element>
<child>text in child</child>
</element>
</root>
