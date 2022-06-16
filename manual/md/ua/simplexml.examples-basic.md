- [« Приклади](simplexml.examples.md)
- [Робота з помилками XML »](simplexml.examples-errors.md)

- [PHP Manual](index.md)
- [Приклади](simplexml.examples.md)
- Базове використання SimpleXML

## Базове використання SimpleXML

Деякі приклади цього посібника включають рядок XML. Замість того,
щоб повторювати її в кожному прикладі, покладіть цей рядок у файл, який
і включайте у кожному прикладі. Цей рядок наведено у наступному прикладі.
Крім цього, можна створити XML-документ і зчитувати його функцією
[simplexml_load_file()](function.simplexml-load-file.md).

**Приклад #1 Файл example.php з рядком XML**

`<?php$xmlstr u003d <<<<XML<?xml versionu003d'1.0' standaloneu003d'yes'?><movies> <movie>  <title>PHP: Поява Парсера</title>  <characters>  <character> name>Ms. Coder</name>    <actor>Onlivia Actora</actor>   </character>   <character>    <name>Mr. Coder</name>    <actor>El ActÓr</actor>   </character>  </characters>  <plot>   Таким образом, мова. Це все рівно мова програмування. Чи    це скриптова мова? Все розкривається в цьому документальному фільмі, схожому на фільм жахів. </plot>  <great-lines>   <line>PHP вирішує всі мої проблеми в вебе</line>  </great-lines>  <rating typeu003d"thumbs">7</rating>  <rating typeu003d 5</rating> </movie></movies>XML;?> `

SimpleXML користуватися дуже просто! Спробуйте отримати якусь
рядок або число базового XML-документа.

**Приклад #2 Отримання частини документа `<plot>`**

` <?phpinclude 'example.php';$movies u003d new SimpleXMLElement($xmlstr);echo $movies->movie[0]->plot;?> `

Результат виконання цього прикладу:


Отже, це мова. Це все одно мова програмування. Або
це скриптова мова? Все розкривається у цьому документальному фільмі,
схожим на фільм жахів.

У PHP отримати доступ до елемента в XML документі, що міститься в назві
неприпустимі символи (наприклад, дефіс), можна шляхом укладання даного
імені елемента у фігурні дужки та апострофи.

**Приклад #3 Отримання рядка `<line>`**

` <?phpinclude 'example.php';$movies u003d new SimpleXMLElement($xmlstr);echo $movies->movie->{'great-lines'}->line;?> `

Результат виконання цього прикладу:

PHP вирішує всі мої проблеми в Інтернеті

**Приклад #4 Доступ до неунікальних елементів у SimpleXML**

У тому випадку, якщо існує кілька екземплярів дочірніх елементів у
одному батьківському елементі, то потрібно застосовувати стандартні методи
ітерації.

`<?phpinclude 'example.php';$movies u003d new SimpleXMLElement($xmlstr);/* Для кожного вузла <character>, ми окремо виведемо ім'я<name>. */foreach ($movies->movie->characters->character as $character) {   echo $character->name, ' грає ', $character->actor, PHP_EOL;}?> `

Результат виконання цього прикладу:

Ms. Coder грає Onlivia Actora
Mr. Coder грає El ActÓr

> **Примітка**:
>
> Властивості (`$movies->movie` у попередньому прикладі) не є
> масивами. Це [об'єкт, що ітерується](class.iterator.md) об'єкт [у вигляді
> масиву](class.arrayaccess.md).

**Приклад #5 Використання атрибутів**

Досі ми лише отримували назви та значення елементів. SimpleXML
може також отримати доступ до атрибутів елемента. Отримати доступ до
атрибут елемента можна так само, як до елементів масиву (array).

` <?phpinclude 'example.php';$movies u003d new SimpleXMLElement($xmlstr);/* Доступ до вузла <rating> першого фільму. * Так же виведемо шкалу оцінок. */foreach ($movies->movie[0]->rating as $rating) {    switch((string) $rating['type']) { // Отримання атрибутів елементу по індексу                                      ' thumbs up'; break; case 'stars':        echo $rating, ' stars'; break; }}?> `

Результат виконання цього прикладу:

7 thumbs up5 stars

**Приклад #6 Порівняння елементів та атрибутів із текстом**

Для порівняння елемента або атрибута з рядком або для передачі
функцію як текст, необхідно привести його до рядка, використовуючи
`(string)`. В іншому випадку, PHP розглядатиме елемент як
об'єкт.

` <?phpinclude 'example.php';$movies u003d new SimpleXMLElement($xmlstr);if ((string) $movies->movie->title u003du003d 'PHP: Поява Парсера') { м           ;}echo htmlentities((string) $movies->movie->title);?> `

Результат виконання цього прикладу:

Мій улюблений фільм. PHP: Поява Парсера

**Приклад #7 Порівняння двох елементів**

Два елементи SimpleXMLElements вважаються різними, навіть якщо вони
вказують на той самий об'єкт.

` <?phpinclude 'example.php';$movies1 u003d new SimpleXMLElement($xmlstr);$movies2 u003d new SimpleXMLElement($xmlstr);var_dump($movies1 u003du003du003d$movies2); // false?> `

Результат виконання цього прикладу:

bool(false)

**Приклад #8 Використання XPath**

SimpleXML включає вбудовану підтримку XPath. Пошук усіх
елементів `<character>`:

` <?phpinclude 'example.php';$movies u003d new SimpleXMLElement($xmlstr);foreach ($movies->xpath('//character') as $character) {    echo $character->name| $character->actor, PHP_EOL;}?> `

'`//`' служить як шаблон. Для вказівки абсолютного шляху,
опустіть одну з косих рис.

Результат виконання цього прикладу:

Ms. Coder грає Onlivia Actora
Mr. Coder грає by El ActÓr

**Приклад #9 Встановлення значень**

Дані SimpleXML не обов'язково повинні бути незмінними. Об'єкт
дозволяє маніпулювати усіма елементами.

` <?phpinclude 'example.php';$movies u003d new SimpleXMLElement($xmlstr);$movies->movie[0]->characters->character[0]->name u003d 'Miss Coder';echo $movies- >asXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" standaloneu003d"yes"?>
<movies>
<movie>
<title>PHP: Поява Парсера</title>
<characters>
<character>
<name>Miss Coder</name>
<actor>Onlivia Actora</actor>
</character>
<character>
<name>Mr. Coder</name>
<actor>El ActÓr</actor>
</character>
</characters>
<plot>
Отже, це мова. Це все одно мова програмування. Або
це скриптова мова? Все розкривається у цьому документальному фільмі,
схожим на фільм жахів.
</plot>
<great-lines>
<line>PHP вирішує всі мої завдання на web</line>
</great-lines>
<rating typeu003d"thumbs">7</rating>
<rating typeu003d"stars">5</rating>
</movie>
</movies>

**Приклад #10 Додавання елементів та атрибутів**

SimpleXML має можливість легко додавати дочірні елементи та
атрибути.

` <?phpinclude 'example.php';$movies u003d new SimpleXMLElement($xmlstr);$character u003d $movies->movie[0]->characters->addChild('character');$character->addChild(' name', 'Mr. Parser');$character->addChild('actor', 'John Doe');$rating u003d $movies->movie[0]->addChild('rating', 'PG'); $rating->addAttribute('type', 'mpaa');echo $movies->asXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" standaloneu003d"yes"?>
<movies>
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
<character><name>Mr. Parser</name><actor>John Doe</actor></character></characters>
<plot>
Отже, це мова. Це все одно мова програмування. Або
це скриптова мова? Все розкривається у цьому документальному фільмі,
схожим на фільм жахів.
</plot>
<great-lines>
<line>PHP вирішує всі мої завдання на web</line>
</great-lines>
<rating typeu003d"thumbs">7</rating>
<rating typeu003d"stars">5</rating>
<rating typeu003d"mpaa">PG</rating></movie>
</movies>

**Приклад #11 Взаємодія з DOM**

PHP може перетворювати XML-вузли з SimpleXML у формат DOM та навпаки.
Цей приклад показує, як можна змінити DOM-елемент у SimpleXML.

` <?php$dom u003d new DOMDocument;$dom->loadXML('<books><book><title>дурниця</title></book></books>');if (!$dom) {    echo 'Помилка при розборі документа'; exit;}$books u003d simplexml_import_dom($dom);echo $books->book[0]->title;?> `

Результат виконання цього прикладу:

нісенітниця
