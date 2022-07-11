- [«
Yaf_Controller_Abstract::display](yaf-controller-abstract.display.md)
- [Yaf_Controller_Abstract::getInvokeArg
»](yaf-controller-abstract.getinvokearg.md)

- [PHP Manual](index.md)
- [Yaf_Controller_Abstract](class.yaf-controller-abstract.md)
- Переходить до іншої дії

# Yaf_Controller_Abstract::forward

(Yaf \>u003d1.0.0)

Yaf_Controller_Abstract::forward — Переходить до іншої дії

### Опис

public **Yaf_Controller_Abstract::forward**(string `$action`, array
`$paramters` u003d ?): bool

public **Yaf_Controller_Abstract::forward**(string `$controller`, string
`$action`, array `$paramters` u003d ?): bool

public **Yaf_Controller_Abstract::forward**(
string `$module`,
string `$controller`,
string `$action`,
array `$paramters` u003d ?
): bool

Перенаправляє поточний процес виконання на іншу дію.

> **Примітка**:
>
> Метод не перемикається на вказану дію негайно, перехід
> відбувається після завершення потоку.

### Список параметрів

`module`
Ім'я цільового модуля, якщо встановлено NULL, то мається на увазі ім'я модуля по
замовчуванням

`controller`
Ім'я цільового контролера

`action`
Ім'я цільової дії

`paramters`
Аргументи виклику

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання
**Yaf_Controller_Abstract::forward()****

` <?phpclass IndexController extends Yaf_Controller_Abstract{    public function indexAction(){         $logined u003d $_SESSION["login"]; if (!$logined) {              $this->forward("login", array("from" u003d> "Index")); // вперед до дії login              return FALSE; // это важно, это закончить текущий рабочий поток                            // и сказать Yaf не делать авторендеринг         }         // other processes    }    public function loginAction() {         echo "Вход, перенаправлено с действия ", $this->_request->getParam("from "); }}?> `

Результатом виконання цього прикладу буде щось подібне:

Вхід перенаправлено з дії Index

### Дивіться також

- **Yaf_Request_Abstrace::getParam()**
