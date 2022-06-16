- [« XSLTProcessor::setParameter](xsltprocessor.setparameter.md)
- [XSLTProcessor::setSecurityPrefs
»](xsltprocessor.setsecurityprefs.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Встановлює файл для профілювання

# XSLTProcessor::setProfiling

(PHP \>u003d 5.3.0, PHP 7, PHP 8)

XSLTProcessor::setProfiling — Встановлює файл для профілювання

### Опис

public **XSLTProcessor::setProfiling**(?string `$filename`): bool

Встановлює файл для запису профілюючої інформації під час
обробка таблиці стилів.

### Список параметрів

`filename`
Шлях до файлу, який записується профілююча інформація.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад виведення профілюючої інформації**

` <?php// Завантаження вихідного XML$xml u003d new DOMDocument;$xml->load('collection.xml');$xsl u003d new DOMDocument;$xsl->load('collection.xsl');// На перетворення $proc u003d new XSLTProcessor;$proc->setProfiling('profiling.txt');$proc->importStyleSheet($xsl); // додавання стилів xslecho trim($proc->transformToDoc($xml)->firstChild->wholeText);?> `

Вищенаведений код записує таку інформацію у файл
профільування:

номер match name mode Calls Tot 100us Avg

0 cd 2 3 1
1 collection 1 1 1

Total 3 4
