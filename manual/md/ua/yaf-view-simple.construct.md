- [« Yaf_View_Simple::clear](yaf-view-simple.clear.md)
- [Yaf_View_Simple::display »](yaf-view-simple.display.md)

- [PHP Manual](index.md)
- [Yaf_View_Simple](class.yaf-view-simple.md)
- Конструктор класу Yaf_View_Simple

# Yaf_View_Simple::\_\_construct

(Yaf \>u003d1.0.0)

Yaf_View_Simple::\_\_construct - Конструктор класу Yaf_View_Simple

### Опис

final public **Yaf_View_Simple::\_\_construct**(string `$template_dir`,
array `$options` u003d ?)

### Список параметрів

`template_dir`
Базовий каталог шаблонів, за замовчуванням, це APPLICATOIN . "/views" для
Yaf.

`options`
``` parameterscode
Опції для движка, починаючи з Yaf 2.1.13, можна використовувати short_tag
"<?u003d$var?>" у своєму шаблоні (незалежно від "short_open_tag"),
щоб запобігти використанню short_tag у шаблоні,
є опція з ім'ям "short_tag", яку ви можете вимкнути.
````

### Приклади

**Приклад #1 Приклад використання
**Yaf_View_Simple::\_\_constructor()****

` <?php   define ("TEMPLATE_DIRECTORY", APPLICATOIN_PATH . '/views'); $view u003d new Yaf_View_Simple(TEMPLATE_DIRECTORY, array(                            ...)
