- [« Yaf_View_Simple](class.yaf-view-simple.md)
- [Yaf_View_Simple::assignRef »](yaf-view-simple.assignref.md)

- [PHP Manual](index.md)
- [Yaf_View_Simple](class.yaf-view-simple.md)
- Призначити значення

# Yaf_View_Simple::assign

(Yaf \>u003d1.0.0)

Yaf_View_Simple::assign — Призначити значення

### Опис

public **Yaf_View_Simple::assign**(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value u003d ?): bool

Призначає змінну для двигуна відображення

### Список параметрів

`name`
Рядок або масив.

Якщо це рядок, наступний аргумент $value є обов'язковим.

`value`
Різне значення

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_View_Simple::assign()****

` <?phpclass IndexController extends Yaf_Controller_Abstract {    public function indexAction() {        $this->getView()->assign("foo", "bar"); $this->_view->assign( array( "key" u003d> "value", "name" u003d> "value")); }}?> `

**Приклад #2 Приклад використання **template()****

`<html> <head>  <title><?php echo $foo; ?></title> </head><body>  <?php  foreach ($this->_tpl_vars as $name u003d> $value) {   echo $$name; // або echo $this->_tpl_vars[$name]; }  ?></body></html>`

### Дивіться також

- [Yaf_View_Simple::assignRef()](yaf-view-simple.assignref.md) -
Призначення assignRef
- **Yaf_View_Interface::clear()**
- [Yaf_View_Simple::\_\_set()](yaf-view-simple.set.md) -
Встановлює значення для двигуна
