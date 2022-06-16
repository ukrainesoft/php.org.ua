- [« Yaf_Dispatcher::autoRender](yaf-dispatcher.autorender.md)
- [Yaf_Dispatcher::\_\_construct »](yaf-dispatcher.construct.md)

- [PHP Manual](index.md)
- [Yaf_Dispatcher](class.yaf-dispatcher.md)
- Включає/вимикає перехоплення виключень

# Yaf_Dispatcher::catchException

(Yaf \>u003d1.0.0)

Yaf_Dispatcher::catchException — Включає/вимикає перехоплення винятків

### Опис

public **Yaf_Dispatcher::catchException**(bool `$flag` u003d ?):
[Yaf_Dispatcher](class.yaf-dispatcher.md)

Поки application.dispatcher.throwException увімкнено (ви також можете
викликати **Yaf_Dispatcher::throwException(TRUE)()**, щоб увімкнути), Yaf
викидатиме виняток у разі виникнення помилки замість помилки
спрацьовування.

тоді, якщо ви увімкнете **Yaf_Dispatcher::catchException()** (також
можна ввімкнути, встановивши
[application.dispatcher.catchException](yaf.appconfig.md#configuration.yaf.dispatcher.catchexception)),
всі неперехоплені винятки будуть зловлені ErrorController::error,
якщо ви його визначили.

### Список параметрів

`flag`
Логічне значення

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Dispatcher::catchException()****

` /* если вы определили ErrorController следующим образом */<?phpclass ErrorController extends Yaf_Controller_Abstract {     /**      * вы также можете вызвать Yaf_Request_Abstract::getException, чтобы получить      * неперехваченное исключение. */     public function errorAction($exception) {        /* error occurs */        switch ($exception->getCode()) {            case YAF_ERR_NOTFOUND_MODULE:            case YAF_ERR_NOTFOUND_CONTROLLER:            case YAF_ERR_NOTFOUND_ACTION:            case YAF_ERR_NOTFOUND_VIEW:                echo 404, ":", $exception-> getMessage(); break; default :                 $message u003d $exception->getMessage(); echo 0, ":", $exception->getMessage(); break; }     }}?> `

Результатом виконання цього прикладу буде щось подібне:

/* now if some error occur, assuming access a non-exists controller(or you can throw a exception yourself): */
404:Could not find controller script **/application/controllers/No-exists-controller.php

### Дивіться також

- [Yaf_Dispatcher::throwException()](yaf-dispatcher.throwexception.md) -
Включає/вимикає викидання виключень
- [Yaf_Dispatcher::setErrorHandler()](yaf-dispatcher.seterrorhandler.md) -
Встановлює обробник помилок
