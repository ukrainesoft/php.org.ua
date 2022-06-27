- [«ResourceBundle::get](resourcebundle.get.md)
- [Spoofchecker»](class.spoofchecker.md)

- [PHP Manual](index.md)
- [ResourceBundle](class.resourcebundle.md)
- Отримати підтримувані локалі

# ResourceBundle::getLocales

# resourcebundle_locales

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8, PECL intl \>u003d 2.0.0)

ResourceBundle::getLocales -- resourcebundle_locales — Отримати
підтримувані локалі

### Опис

Об'єктно-орієнтований стиль

public static **ResourceBundle::getLocales**(string `$bundle`):
array\|false

Процедурний стиль

**resourcebundle_locales**(string `$bundle`): array\|false

Повертає доступні в ResourceBundle локалі.

### Список параметрів

`bundle`
Шлях до ResourceBundle або порожній рядок для отримання списку по
замовчуванням або **`false`** у разі виникнення помилки.

### Значення, що повертаються

Повертає доступні в ResourceBundle локалі.

### Приклади

**Приклад #1 Приклад використання **resourcebundle_locales()****

` <?php$bundle u003d "/user/share/data/myapp";echo join(PHP_EOL, resourcebundle_locales($bundle));?> `

Результатом виконання цього прикладу буде щось подібне:

es
root

**Приклад #2 Приклад в об'єктно-орієнтованому стилі**

` <?php$bundle u003d "/usr/share/data/myapp";$r u003d new ResourceBundle( 'es', $bundle);echo join("
", $r->getLocales($bundle));?> `

Результатом виконання цього прикладу буде щось подібне:

es
root

### Дивіться також

- [resourcebundle_get()](resourcebundle.get.md) - Отримати дані з
пакету
