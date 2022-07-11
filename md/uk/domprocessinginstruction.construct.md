- [«DOMProcessingInstruction](class.domprocessinginstruction.md)
- [DOMText »](class.domtext.md)

- [PHP Manual](index.md)
- [DOMProcessingInstruction](class.domprocessinginstruction.md)
- Створює новий об'єкт класу DOMProcessingInstruction

# DOMProcessingInstruction::\_\_construct

(PHP 5, PHP 7, PHP 8)

DOMProcessingInstruction::\_\_construct — Створює новий об'єкт класу
[DOMProcessingInstruction](class.domprocessinginstruction.md)

### Опис

public **DOMProcessingInstruction::\_\_construct**(string `$name`,
string `$value` u003d "")

Створює новий об'єкт класу
[DOMProcessingInstruction](class.domprocessinginstruction.md). Цей
об'єкт буде доступний лише читання. Він може бути доданий у
документ. Додаткові вузли не можна прикріпити до цього об'єкта, доки він
приєднаний до будь-якого документа. Для створення вузла, що модифікується
використовуйте
[DOMDocument::createProcessingInstruction](domdocument.createprocessinginstruction.md).

### Список параметрів

`name`
Ім'я інструкції для обробника.

`value`
Значення вказівки для обробника.

### Приклади

**Приклад #1 Створення об'єкта класу
[DOMProcessingInstruction](class.domprocessinginstruction.md)**

` <?php$dom u003d new DOMDocument('1.0', 'UTF-8');$html u003d $dom->appendChild(new DOMElement('html'));$body u003d $html->appendChild(new DOMElement ('body'));$pinode u003d new DOMProcessingInstruction('php', 'echo "Hello World"; ');$body->appendChild($pinode);echo $dom->saveXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" encodingu003d"UTF-8"?>
<html><body><?php echo "Hello World"; ?></body></html>

### Дивіться також

- [DOMDocument::createProcessingInstruction()](domdocument.createprocessinginstruction.md) -
Створити новий PI-вузол
