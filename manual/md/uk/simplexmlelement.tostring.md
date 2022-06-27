- [« SimpleXMLElement::saveXML](simplexmlelement.savexml.md)
- [SimpleXMLElement::xpath »](simplexmlelement.xpath.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Повертає вміст рядка

# SimpleXMLElement::\_\_toString

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SimpleXMLElement::\_\_toString — Повертає вміст рядка

### Опис

public **SimpleXMLElement::\_\_toString**(): string

Повертає вміст рядка безпосередньо в елементі. Не
повертає текстовий контент дочірніх елементів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає вміст рядка у разі успішного виконання та порожню
рядок інакше.

### Приклади

**Приклад #1 Отримати вміст рядка**

` <?php$xml u003d new SimpleXMLElement('<a>1 <b>2 </b>3</a>');echo $xml;?> `

Результат виконання цього прикладу:

1 3

### Дивіться також

- [SimpleXMLElement::asXML()](simplexmlelement.asxml.md) -
Повертає сформований XML-документ у вигляді рядка на основі
елемента SimpleXML
