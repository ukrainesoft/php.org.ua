- [«SimpleXMLElement](class.simplexmlelement.md)
- [SimpleXMLElement::addChild »](simplexmlelement.addchild.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Додає атрибут до SimpleXML-елементу

# SimpleXMLElement::addAttribute

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

SimpleXMLElement::addAttribute — Додає атрибут до SimpleXML-елементу

### Опис

public **SimpleXMLElement::addAttribute**(string `$qualifiedName`,
string `$value`, ?string `$namespace` u003d **`null`**): void

Додає атрибут до SimpleXML-елементу.

### Список параметрів

`qualifiedName`
Назва атрибута, що додається.

`value`
Значення атрибуту.

`namespace`
Необов'язковий параметр вказує на простір імен, до якого
належить атрибут.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

> **Примітка**:
>
> Перелічені приклади можуть містити "example.php", в якому
> визначається XML-рядок, розташована в першому прикладі посібника з
> [базове використання](simplexml.examples-basic.md).

**Приклад #1 Додавання атрибутів та нащадків до SimpleXML-елементу**

` <?phpinclude 'example.php';$sxe u003d new SimpleXMLElement($xmlstr);$sxe->addAttribute('type', 'documentary');$movie u003d $sxe->addChild('movie');$ movie->addChild('title', 'PHP2: Історії парсера');$movie->addChild('plot', 'Всі про людей, створювали його.');$characters u003d $movie->addChild(' );$character u003d $characters->addChild('character');$character->addChild('name', 'Mr. Parser');$character->addChild('actor', 'John Doe');$ rating u003d$movie->addChild('rating', '5');$rating->addAttribute('type', 'stars');echo $sxe->asXML();?> `

Результатом виконання цього прикладу буде щось подібне:

<?xml versionu003d"1.0" standaloneu003d"yes"?>
<movies typeu003d"documentary">
<movie>
<title>PHP: Поява Парсера</title>
<characters>
<character>
<name>Ms. Coder</name>
<actor>Onlivia Actora</actor>
</character>
<character>
<name>Mr. Coder</name>
<actor>El ActÓr</actor>
</character>
</characters>
<plot>
Отже, ця мова. Типу, мова програмування. Або
це скриптова мова? Все розкривається у цьому документальному фільмі,
схожим на фільм жахів.
</plot>
<great-lines>
<line>PHP вирішує всі мої завдання на web</line>
</great-lines>
<rating typeu003d"thumbs">7</rating>
<rating typeu003d"stars">5</rating>
</movie>
<movie>
<title>PHP2: Історії парсера</title>
<plot>Все про людей, які його створювали.</plot>
<characters>
<character>
<name>Mr. Parser</name>
<actor>John Doe</actor>
</character>
</characters>
<rating typeu003d"stars">5</rating>
</movie>
</movies>

### Дивіться також

- [SimpleXMLElement::addChild()](simplexmlelement.addchild.md) -
Додає дочірній елемент до сайту XML
- [Базове використання SimpleXML](simplexml.examples-basic.md)
