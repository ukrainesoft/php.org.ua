- [«ResourceBundle](class.resourcebundle.md)
- [ResourceBundle::create »](resourcebundle.create.md)

- [PHP Manual](index.md)
- [ResourceBundle](class.resourcebundle.md)
- Отримати кількість елементів у пакеті

# ResourceBundle::count

#resourcebundle_count

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8, PECL intl \>u003d 2.0.0)

ResourceBundle::count -- resourcebundle_count — Отримати кількість
елементів у пакеті

### Опис

Об'єктно-орієнтований стиль

public **ResourceBundle::count**(): int

Процедурний стиль

**resourcebundle_count**([ResourceBundle](class.resourcebundle.md)
`$bundle`): int

Отримує кількість елементів у пакеті.

### Список параметрів

`bundle`
Об'єкт [ResourceBundle](class.resourcebundle.md).

### Значення, що повертаються

Повертає кількість елементів у пакеті.

### Приклади

**Приклад #1 Приклад використання **resourcebundle_count()****

` <?php$r u003d resourcebundle_create( 'es', "/usr/share/data/myapp");echo resourcebundle_count($r);?> `

**Приклад #2 Приклад в об'єктно-орієнтованому стилі**

` <?php$r u003d new ResourceBundle( 'es', "/usr/share/data/myapp");echo $r->count();?> `

Результат виконання цього прикладу:

42

### Дивіться також

- [resourcebundle_get()](resourcebundle.get.md) - Отримати дані з
пакету
