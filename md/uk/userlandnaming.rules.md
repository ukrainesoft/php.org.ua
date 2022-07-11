- [« Глобальний простір
імен](userlandnaming.globalnamespace.md)
- [Поради »](userlandnaming.tips.md)

- [PHP Manual](index.md)
- [Інструкція з іменування](userlandnaming.md)
- Правила

## Правила

Наступний перелік правил дає огляд прав назви, які проект PHP
залишає собі під час виборів нових ідентифікаторів. Повним керівництвом
є офіційний "[» Стандарт написання
коду](https://github.com/php/php-src/raw/master/CODING_STANDARDS.md)":

- PHP володіє глобальним простором імен, але намагається шукати
хороші описові імена та уникати будь-яких очевидних колізій.

- Імена функцій використовують підкреслення між словами, а імена
класів використовують як `camelCase`, так і `PascalCase`.

- PHP додає префікс до глобальних імен, що належать модулю з
іменем цього модуля. У минулому було безліч винятків із цього
правила, наприклад:

- [curl_close()](function.curl-close.md)

- [mysql_query()](function.mysql-query.md)

- PREG_SPLIT_DELIM_CAPTURE

- new DOMDocument()

- [strpos()](function.strpos.md) (приклад виключення, допущеного
в минулому)

- new SplFileObject()

- Тим не менш, ітератори та винятки просто отримують постфікси
"Iterator" і "Exception". Приклади:

- [ArrayIterator](class.arrayiterator.md)

- [LogicException](class.logicexception.md)

- PHP резервує всі ідентифікатори, що починаються з `__` як
магічні. Рекомендується не створювати ідентифікатори, що починаються
з `__`, крім як з метою використовувати документовану магічну
функціональність. Приклади:

- [\_\_get()](language.oop5.overloading.md#object.get)

- [\_\_autoload()](function.autoload.md)
