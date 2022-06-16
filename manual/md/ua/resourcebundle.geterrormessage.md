- [«ResourceBundle::getErrorCode](resourcebundle.geterrorcode.md)
- [ResourceBundle::get »](resourcebundle.get.md)

- [PHP Manual](index.md)
- [ResourceBundle](class.resourcebundle.md)
- Отримати останнє повідомлення про помилку пакета

# ResourceBundle::getErrorMessage

# resourcebundle_get_error_message

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8, PECL intl \>u003d 2.0.0)

ResourceBundle::getErrorMessage -- resourcebundle_get_error_message --
Отримати останнє повідомлення про помилку пакета

### Опис

Об'єктно-орієнтований стиль

public **ResourceBundle::getErrorMessage**(): string

Процедурний стиль

**resourcebundle_get_error_message**([ResourceBundle](class.resourcebundle.md)
`$bundle`): string

Повертає останнє повідомлення про помилку під час виклику функцій пакета.

### Список параметрів

`bundle`
Об'єкт [ResourceBundle](class.resourcebundle.md).

### Значення, що повертаються

Повертає останнє повідомлення про помилку під час виклику функцій пакета.

### Приклади

**Приклад #1 Приклад використання
**resourcebundle_get_error_message()****

` <?php$r u003d resourcebundle_create( 'es', "/usr/share/data/myapp");echo $r['somestring'];if(intl_is_failure(resourcebundle_get_error_code($r))) {     пакету: ".resourcebundle_get_error_message($r));}?> `

**Приклад #2 Приклад в об'єктно-орієнтованому стилі**

` <?php$r u003d new ResourceBundle( 'es', "/usr/share/data/myapp");echo $r['somestring'];if(intl_is_failure(ResourceBundle::getErrorCode($r)))) { report_error("Помилка пакета: ".ResourceBundle::getErrorMessage($r));}?> `

### Дивіться також

- [resourcebundle_get_error_code()](resourcebundle.geterrorcode.md) -
Отримати останній код помилки пакета
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
