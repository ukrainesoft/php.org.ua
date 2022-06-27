- [« Встановлення та налаштування](xml.setup.md)
- [Встановлення »](xml.installation.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](xml.setup.md)
- Вимоги

## Вимоги

Для коректної роботи цього модуля потрібний PHP-модуль
[libxml](book.libxml.md). Це означає, що також потрібна передача
опції **--with-libxml**, або до PHP 7.4 **--enable-libxml**, хоча неявно
це вже зроблено, тому що підтримка libxml за замовчуванням увімкнена.

Модуль використовує expat-сумісний шар за промовчанням. Також може бути
використаний expat, який може бути знайдений тут:
[»http://www.jclark.com/xml/expat.md](http://www.jclark.com/xml/expat.md).
Makefile, що поставляється з expat не створює бібліотеку за замовчуванням, ви
Ви можете використовувати наступне правило для цього:

``` makefilecode
libexpat.a: $(OBJS)
ar -rc $@$(OBJS)
ranlib $@
````

Вихідний пакет RPM expat може бути знайдений
тут:[»http://sourceforge.net/projects/expat/](http://sourceforge.net/projects/expat/).
