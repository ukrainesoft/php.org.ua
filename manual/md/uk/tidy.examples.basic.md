- [« Приклади](tidy.examples.md)
- [tidy »](class.tidy.md)

- [PHP Manual](index.md)
- [Приклади](tidy.examples.md)
- Приклад використання Tidy

## Приклад використання Tidy

Простий приклад демонструє базові можливості використання Tidy.

**Приклад #1 Базові можливості використання Tidy**

` <?phpob_start();?><html>a html document</html><?php$html u003d ob_get_clean();// Установка конфигурации$config u003d array(           'indent'         u003d> true,           'output-xhtml' u003d> true,           'wrap'            u003d> 200);// Tidy$tidy u003d new tidy;$tidy->parseString($>| tidy;?> `
