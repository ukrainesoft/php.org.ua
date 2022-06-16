- [« Yaf_Loader::getLocalNamespace](yaf-loader.getlocalnamespace.md)
- [Yaf_Loader::getLocalNamespace »](yaf-loader.getnamespaces.md)

- [PHP Manual](index.md)
- [Yaf_Loader](class.yaf-loader.md)
- Отримує шлях зареєстрованого простору імен

# Yaf_Loader::getNamespacePath

(Yaf \>u003d3.2.0)

Yaf_Loader::getNamespacePath — Отримує шлях зареєстрованого
простору імен

### Опис

public **Yaf_Loader::getNamespacePath**(string `$namespaces`): string

Отримує шлях зареєстрованого простору імен

### Список параметрів

`namespace`
Рядок простору імен.

### Значення, що повертаються

string шлях, якщо простір імен не зареєстрований, то поверне
**`null`**. Буде повернено бібліотеку за промовчанням.

### Приклади

**Приклад #1 Приклад використання
[Yaf_Loader::registerNamespace()](yaf-loader.registernamespace.md)**

` <?php$loader u003d Yaf_Loader::getInstance("/var/application/lib");$loader->registerNamespace("\Vendor\PHP", "/var/lib/php");$loader->getNamespacePath ("Vendor \ PHP"); // '/var/lib/php'$loader->getNamespacePath("Vendor\JSP"); // '/var/application/lib'?> `
