- [« Yaf_View_Simple::assignRef](yaf-view-simple.assignref.md)
- [Yaf_View_Simple::\_\_construct »](yaf-view-simple.construct.md)

- [PHP Manual](index.md)
- [Yaf_View_Simple](class.yaf-view-simple.md)
- скидає призначені значення

# Yaf_View_Simple::clear

(Yaf \> u003d 2.2.0)

Yaf_View_Simple::clear — Скидає призначені значення

### Опис

public **Yaf_View_Simple::clear**(string `$name` u003d ?): bool

Скидає призначені значення

### Список параметрів

`name`
Надане ім'я змінної

Якщо не вказано, очистить всі призначені змінні

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_View_Simple::clear()****

` <?phpclass IndexController extends Yaf_Controller_Abstract {    public function indexAction() {        $this->getView()->clear("foo")->clear("bar // очистити "foo" і "bar"        $this->_view->clear(); //очистити все призначені змінні    }}?> `

### Дивіться також

- [Yaf_View_Simple::assignRef()](yaf-view-simple.assignref.md) -
Призначення assignRef
- [Yaf_View_Interface::assign()](yaf-view-interface.assign.md) -
Призначає значення для движка відображення
- [Yaf_View_Simple::\_\_set()](yaf-view-simple.set.md) -
Встановлює значення для двигуна
