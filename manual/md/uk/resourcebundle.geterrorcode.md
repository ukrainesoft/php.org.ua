- [«ResourceBundle::create](resourcebundle.create.md)
- [ResourceBundle::getErrorMessage
»](resourcebundle.geterrormessage.md)

- [PHP Manual](index.md)
- [ResourceBundle](class.resourcebundle.md)
- Отримати останній код помилки пакета

# ResourceBundle::getErrorCode

# resourcebundle_get_error_code

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8, PECL intl \>u003d 2.0.0)

ResourceBundle::getErrorCode -- resourcebundle_get_error_code — Отримати
останній код помилки пакета

### Опис

Об'єктно-орієнтований стиль

public **ResourceBundle::getErrorCode**(): int

Процедурний стиль

**resourcebundle_get_error_code**([ResourceBundle](class.resourcebundle.md)
`$bundle`): int

Повертає код останньої помилки, що виникла при виклику функцій пакета.

### Список параметрів

`bundle`
Об'єкт [ResourceBundle](class.resourcebundle.md).

### Значення, що повертаються

Повертає код останньої помилки, що виникла при виклику функцій пакета.

### Приклади

**Приклад #1 Приклад використання **resourcebundle_get_error_code()****

` <?php$r u003d resourcebundle_create( 'es', "/usr/share/data/myapp");echo$r['somestring'];if(intl_is_failure(resourcebundle_get_error_code($r))) {     пакета");}?> `

**Приклад #2 Приклад в об'єктно-орієнтованому стилі**

` <?php$r u003d new ResourceBundle( 'es', "/usr/share/data/myapp");echo $r['somestring'];if(intl_is_failure(ResourceBundle::getErrorCode($r)))) { report_error("Помилка пакета");}?> `

### Дивіться також

- [resourcebundle_get_error_message()](resourcebundle.geterrormessage.md) -
Отримати останнє повідомлення про помилку пакета
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
