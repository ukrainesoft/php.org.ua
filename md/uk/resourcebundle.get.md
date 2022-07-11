- [«
ResourceBundle::getErrorMessage](resourcebundle.geterrormessage.md)
- [ResourceBundle::getLocales »](resourcebundle.locales.md)

- [PHP Manual](index.md)
- [ResourceBundle](class.resourcebundle.md)
- Отримати дані з пакета

# ResourceBundle::get

# resourcebundle_get

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8, PECL intl \>u003d 2.0.0)

ResourceBundle::get -- resourcebundle_get — Отримати дані з пакета

### Опис

Об'єктно-орієнтований стиль

public **ResourceBundle::get**(string\|int `$index`, bool `$fallback` u003d
**`true`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Процедурний стиль

**resourcebundle_get**([ResourceBundle](class.resourcebundle.md)
`$bundle`, string\|int `$index`, bool `$fallback` u003d **`true`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає дані з пакета за індексом або рядковим ключем.

### Список параметрів

`bundle`
Об'єкт [ResourceBundle](class.resourcebundle.md).

`index`
Індекс даних повинен бути рядком або цілим числом.

`fallback`
Чи повинна локаль збігатися точно, чи можна відкотитися до батьківської
локалі.

### Значення, що повертаються

Повертає дані з пакета за індексом або рядковим ключем або
**`null`** у разі виникнення помилки. Рядки, цілі числа та бінарні
рядки повертаються у відповідному типі PHP, масиви цілих чисел
повертаються як масиви PHP. Складні типи повертаються як об'єкти
[ResourceBundle](class.resourcebundle.md).

### Приклади

**Приклад #1 Приклад використання **resourcebundle_get()****

` <?php$r u003d resourcebundle_create( 'es', "/usr/share/data/myapp");echo resourcebundle_get($r, 'somestring');?> `

**Приклад #2 Приклад в об'єктно-орієнтованому стилі**

` <?php$r u003d new ResourceBundle( 'es', "/usr/share/data/myapp");echo $r->get('somestring');?> `

Результат виконання цього прикладу:

?Hola, mundo!

### Дивіться також

- [resourcebundle_count()](resourcebundle.count.md) - Отримати
кількість елементів у пакеті
