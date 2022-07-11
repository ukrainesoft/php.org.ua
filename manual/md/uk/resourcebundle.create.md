- [«ResourceBundle::count](resourcebundle.count.md)
- [ResourceBundle::getErrorCode »](resourcebundle.geterrorcode.md)

- [PHP Manual](index.md)
- [ResourceBundle](class.resourcebundle.md)
- Створити пакет ресурсів

# ResourceBundle::create

#resourcebundle_create

# ResourceBundle::\_\_construct

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8, PECL intl \>u003d 2.0.0)

ResourceBundle::create -- resourcebundle_create --
ResourceBundle::\_\_construct — Створити пакет ресурсів

### Опис

Об'єктно-орієнтований стиль (метод)

public static **ResourceBundle::create**(?string `$locale`, ?string
`$bundle`, bool `$fallback` u003d **`true`**):
?[ResourceBundle](class.resourcebundle.md)

Процедурний стиль

**resourcebundle_create**(?string`$locale`, ?string`$bundle`, bool
`$fallback` u003d **`true`**): ?[ResourceBundle](class.resourcebundle.md)

Об'єктно-орієнтований стиль (конструктор):

public **ResourceBundle::\_\_construct**(?string `$locale`, ?string
`$bundle`, bool `$fallback` u003d **`true`**)

Створює пакет ресурсів.

### Список параметрів

`locale`
Локаль для якої необхідно завантажувати ресурси (ім'я локалі, наприклад,
ru_RU).

`bundle`
Директорія, в якій лежать дані або ім'я .dat файлу.

`fallback`
Визначає, чи потрібно точно дотримуватися заданої локалі, чи можна
відкочуватися до батьківської, якщо це можливо.

### Значення, що повертаються

Повертає об'єкт [ResourceBundle](class.resourcebundle.md) або
**`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **resourcebundle_create()****

` <?php$r u003d resourcebundle_create( 'es', "/usr/share/data/myapp");echo $r['teststring'];?> `

**Приклад #2 Приклад використання **ResourceBundle::create()****

` <?php$r u003d ResourceBundle::create( 'es', "/usr/share/data/myapp");echo $r['teststring'];?> `

Результат виконання цього прикладу:

¡Hola, mundo!

### Дивіться також

- [resourcebundle_get()](resourcebundle.get.md) - Отримати дані з
пакету
