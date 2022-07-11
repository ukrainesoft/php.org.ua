- [« DOMDocument::validate](domdocument.validate.md)
- [DOMDocumentFragment »](class.domdocumentfragment.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Проводить вставку XInclude в об'єкті DOMDocument

# DOMDocument::xinclude

(PHP 5, PHP 7, PHP 8)

DOMDocument::xinclude — Вставляє XInclude в об'єкті DOMDocument.

### Опис

public **DOMDocument::xinclude**(int `$options` u003d 0): int\|false

Цей метод вставляє [» блоки XInclude](http://www.w3.org/TR/xinclude/)
в об'єкті класу DOMDocument.

> **Примітка**:
>
> Через те, що libxml2 автоматично дозволяє сутності, виклик цього
> методу призведе до неочікуваних результатів у разі, коли XML-файл
> містить прикріплену схему DTD.

### Список параметрів

`options`
[Параметри libxml](libxml.constants.md). Доступно, починаючи з Libxml
2.6.7.

### Значення, що повертаються

Повертає кількість XInclude у документі, -1 якщо при обробці
сталася помилка, або **`false`**, якщо не було зроблено жодної
заміни.

### Приклади

**Приклад #1 Приклад використання DOMDocument::xinclude()**

` <?php$xml u003d <<<EOD<?xml versionu003d"1.0" ?><chapter xmlns:xiu003d"http://www.w3.org/2001/XInclude"> <title>Books of the other guy..</title> <para> <xi:include hrefu003d"book.xml">   <xi:fallback>   <error>xinclude: book.xml not found</error>   </xi:fallback>  </xi :include> </para></chapter>EOD;$dom u003d new DOMDocument;// оформимо висновок красиво$dom->preserveWhiteSpace u003d false;$dom->formatOutput u003d true;// завантаження$ dom->loadXML($xml);// вставка блоків xinclude$dom->xinclude();echo $dom->saveXML();?> `

Результатом виконання цього прикладу буде щось подібне:

<?xml versionu003d"1.0"?>
<chapter xmlns:xiu003d"http://www.w3.org/2001/XInclude">
<title>Books of the other guy..</title>
<para>
<row xml:baseu003d"/home/didou/book.xml">
<entry>The Grapes of Wrath</entry>
<entry>John Steinbeck</entry>
<entry>en</entry>
<entry>0140186409</entry>
</row>
<row xml:baseu003d"/home/didou/book.xml">
<entry>The Pearl</entry>
<entry>John Steinbeck</entry>
<entry>en</entry>
<entry>014017737X</entry>
</row>
<row xml:baseu003d"/home/didou/book.xml">
<entry>Samarcande</entry>
<entry>Amine Maalouf</entry>
<entry>fr</entry>
<entry>2253051209</entry>
</row>
</para>
</chapter>
