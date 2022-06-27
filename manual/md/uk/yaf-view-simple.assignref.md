- [« Yaf_View_Simple::assign](yaf-view-simple.assign.md)
- [Yaf_View_Simple::clear »](yaf-view-simple.clear.md)

- [PHP Manual](index.md)
- [Yaf_View_Simple](class.yaf-view-simple.md)
- Призначення assignRef

# Yaf_View_Simple::assignRef

(Yaf \>u003d1.0.0)

Yaf_View_Simple::assignRef — Призначення assignRef

### Опис

public **Yaf_View_Simple::assignRef**(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$value`): bool

На відміну від [Yaf_View_Simple::assign()](yaf-view-simple.assign.md),
цей спосіб надає значення ref движку.

### Список параметрів

`name`
Строкове ім'я, яке використовуватиметься для доступу до значення в
шаблон.

`value`
Різне значення

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_View_Simple::assignRef()****

`<?phpclass IndexController extends Yaf_Controller_Abstract {    public function indexAction() {        $value u003d "bar"; $this->getView()->assign("foo", $value); /* зверніть увагу, що до Yaf 2.1.4 була помилка,         ** яка робить наступний висновок "bar"; */        $dummy u003d $this->getView()->render("index/index.phtml"); echo $value; // запобігти авто-рендерінг        Yaf_Dispatcher::getInstance()->autoRender(FALSE); }}?> `

**Приклад #2 Приклад використання **template()****

`<html> <head>  <title><?php echo $foo; $foou003du003d"changed"; ?></title> </head><body></body></html>`

Результатом виконання цього прикладу буде щось подібне:

/* доступ до IndexController: */
changed

### Дивіться також

- [Yaf_View_Simple::assign()](yaf-view-simple.assign.md) - Призначити
значення
- [Yaf_View_Simple::\_\_set()](yaf-view-simple.set.md) -
Встановлює значення для двигуна
