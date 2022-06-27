- [«
Yaf_Loader::registerLocalNamespace](yaf-loader.registerlocalNamespace.md)
- [Yaf_Loader::setLibraryPath »](yaf-loader.setlibrarypath.md)

- [PHP Manual](index.md)
- [Yaf_Loader](class.yaf-loader.md)
- Реєструє простір імен шляхом пошуку

# Yaf_Loader::registerNamespace

(Yaf \>u003d3.2.0)

Yaf_Loader::registerNamespace — Реєструє простір імен за допомогою
пошуку

### Опис

public **Yaf_Loader::registerNamespace**(string\|array `$namespaces`,
string `$path` u003d ?): bool

Реєструє простір імен шляхом пошуку,
[Yaf_Loader](class.yaf-loader.md) шукає класи у цьому просторі імен
у дорозі, воно також може бути налаштоване за допомогою
[application.library.directory.namespace](yaf.appconfig.md#configuration.yaf.library.namespace)(в
application.ini);

> **Примітка**:
>
> Yaf все ще розглядає, підкреслення як роздільник папок.

### Список параметрів

`namespace`
рядок простору імен або масив просторів імен із шляхами.

`path`
рядок шляху, краще використати абсолютний шлях для продуктивності

### Значення, що повертаються

bool

### Приклади

**Приклад #1 Приклад використання **Yaf_Loader::registerNamespace()****

` <?php$loader u003dYaf_Loader::getInstance();$loader->registerNamespace("\Vendor\PHP", "/var/lib/php");$loader->registerNamespace(array(     "\Vendor\ASP " u003d> "/var/lib/asp",     "\Vendor\JSP" u003d> "/usr/lib/vendor/",));$loader->autoload("\Vendor\PHP\Dummy"); //load '/var/lib/php/Dummy.php'$loader->autoload("\Vendor\PHP\Foo_Bar"); //load '/var/lib/php/Foo/Bar.php'$loader->autoload("\Vendor\JSP\Dummy"); //load '/usr/lib/vendor/Dummy.php'?> `
