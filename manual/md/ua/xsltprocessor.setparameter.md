- [«
XSLTProcessor::removeParameter](xsltprocessor.removeparameter.md)
- [XSLTProcessor::setProfiling »](xsltprocessor.setprofiling.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Встановлює значення параметра

# XSLTProcessor::setParameter

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::setParameter — Встановлює значення параметра

### Опис

public **XSLTProcessor::setParameter**(string `$namespace`, string
`$name`, string `$value`): bool

public **XSLTProcessor::setParameter**(string `$namespace`, array
`$options`): bool

Встановлює значення для одного або декількох параметрів, щоб
використовувати надалі у перетвореннях
[XSLTProcessor](class.xsltprocessor.md). Якщо параметра немає в таблиці
стилів, він буде проігнорований.

### Список параметрів

`namespace`
Простір імен URI для параметра XSLT.

`name`
Назва локальної назви XSLT.

`value`
Нове значення параметра XSLT.

`options`
Масив пар `nameu003d>value`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Зміна власника перед перетворенням**

` <?php$collections u003d array(    'Marc Rutkowski' u003d> 'marc',   'Olivier Parmentier' u003d> 'olivier');$xsl u003d new DOMDocument;'x''''; / Налаштування перетворення$proc u003d new XSLTProcessor;$proc->importStyleSheet($xsl); // додавання стилів xslforeach ($collections as $name u003d> $file) {    // Load the XML source    $xml u003d new DOMDocument; $xml->load('collection_' . $file . '.xml'); $proc->setParameter('', 'owner', $name); $proc->transformToURI($xml, 'file:///tmp/' . $file . '.md');}?> `

### Дивіться також

- [XSLTProcessor::getParameter()](xsltprocessor.getparameter.md) -
Повертає значення параметра
- [XSLTProcessor::removeParameter()](xsltprocessor.removeparameter.md) -
Видаляє параметр
