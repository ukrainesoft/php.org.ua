- [« Yaf_Route_Supervar::assemble](yaf-route-supervar.assemble.md)
- [Yaf_Route_Supervar::route »](yaf-route-supervar.route.md)

- [PHP Manual](index.md)
- [Yaf_Route_Supervar](class.yaf-route-supervar.md)
- Призначення \_\_construct

# Yaf_Route_Supervar::\_\_construct

(Yaf \>u003d1.0.0)

Yaf_Route_Supervar::\_\_construct - Призначення \_\_construct

### Опис

public **Yaf_Route_Supervar::\_\_construct**(string `$supervar_name`)

[Yaf_Route_Supervar](class.yaf-route-supervar.md) схожий
[Yaf_Route_Static](class.yaf-route-static.md), різниця в тому, що
[Yaf_Route_Supervar](class.yaf-route-supervar.md) шукатиме
інформацію про шлях у рядку запиту, а параметр `supervar_name` є
ключем.

### Список параметрів

`supervar_name`
Назва ключа.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Route_Supervar()****

` <?php   /**    * Добавление маршрута supervar в стек маршрутов Yaf_Router    */    Yaf_Dispatcher::getInstance()->getRouter()->addRoute(        "name",        new Yaf_Route_Supervar("r")    );?> `

Результатом виконання цього прикладу буде щось подібне:

/** для запиту: http://yourdomain.com/xx/oo/?ru003d/ctr/act/var/value
* буде наступний результат:
*/
array (
"module" u003d> index(default),
"controller" u003d> ctr,
"action" u003d> act,
"params" u003d> array(
"var" u003d> value,
)
)

### Дивіться також

- [Yaf_Router::addRoute()](yaf-router.addroute.md) - Додає новий
маршрут у маршрутизатор
- [Yaf_Router::addConfig()](yaf-router.addconfig.md) - Додає
налаштовані маршрути на маршрутизатор
- [Yaf_Route_Static](class.yaf-route-static.md)
- [Yaf_Route_Regex](class.yaf-route-regex.md)
- [Yaf_Route_Simple](class.yaf-route-simple.md)
- [Yaf_Route_Rewrite](class.yaf-route-rewrite.md)
- [Yaf_Route_Map](class.yaf-route-map.md)
