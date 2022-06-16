- [« Yaf_View_Simple::render](yaf-view-simple.render.md)
- [Yaf_View_Simple::setScriptPath
»](yaf-view-simple.setscriptpath.md)

- [PHP Manual](index.md)
- [Yaf_View_Simple](class.yaf-view-simple.md)
- Встановлює значення для двигуна

# Yaf_View_Simple::\_\_set

(Yaf \>u003d1.0.0)

Yaf_View_Simple::\_\_set - Встановлює значення для движка

### Опис

public **Yaf_View_Simple::\_\_set**(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

Альтернативний і простіший спосіб
[Yaf_View_Simple::assign()](yaf-view-simple.assign.md).

### Список параметрів

`name`
Ім'я рядкового значення.

`value`
Різне значення.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_View_Simple::\_\_set()**exampl**

` <?phpclass IndexController extends Yaf_Controller_Abstract {    public function indexAction() {        $this->getView()->foo u003d "bar"; // те ж, що і assign("foo", "bar"); }}?> `

### Дивіться також

- [Yaf_View_Simple::assignRef()](yaf-view-simple.assignref.md) -
Призначення assignRef
- [Yaf_View_Interface::assign()](yaf-view-interface.assign.md) -
Призначає значення для движка відображення
