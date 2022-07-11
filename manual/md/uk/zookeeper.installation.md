- [« Вимоги](zookeeper.requirements.md)
- [Налаштування під час виконання »](zookeeper.configuration.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](zookeeper.setup.md)
- Установка

## Установка

Цей модуль [»PECL](https://pecl.php.net/) не поставляється разом з
PHP.

Інформація щодо встановлення цього модуля PECL може бути знайдена у розділі
керівництва [Встановлення модулів PECL](install.pecl.md). Додаткова
інформація, така як нові версії, завантаження, вихідні файли,
інформація про розробника та CHANGELOG, може бути знайдена тут:
[»https://pecl.php.net/package/zookeeper](https://pecl.php.net/package/zookeeper).

Щоб увімкнути підтримку zookeeper, конфігуруйте PHP з опцією
**--with-libzookeeper-diru003dDIR**. DIR - директорія в якій встановлено
бібліотека ZooKeeper C Binding, всередині якої має бути
`include/zookeeper/zookeeper.h`

DLL для цього модуля PECL зараз недоступна. Дивіться також
розділ [складання на Windows](install.windows.building.md).
