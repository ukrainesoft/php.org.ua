- [«
Yaf_Application::getDispatcher](yaf-application.getdispatcher.md)
- [Yaf_Application::getLastErrorNo
»](yaf-application.getlasterrorno.md)

- [PHP Manual](index.md)
- [Yaf_Application](class.yaf-application.md)
- Отримати останнє повідомлення про помилку

# Yaf_Application::getLastErrorMsg

(Yaf \> u003d 2.1.2)

Yaf_Application::getLastErrorMsg — Отримати останнє повідомлення про
помилці

### Опис

public **Yaf_Application::getLastErrorMsg**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання
**Yaf_Application::getLastErrorMsg()****

` <?phpfunction error_handler($errno, $errstr, $errfile, $errline) {   var_dump(Yaf_Application::app()->getLastErrorMsg());}$config u003d array( "application"  | u003d> "/tmp/notexists",     "dispatcher" u003d> array(      "throwException" u003d> 0, //викликати помилку     ¦                                            язах| ()->setErrorHandler("error_handler", E_RECOVERABLE_ERROR);$app->run();?> `

Результатом виконання цього прикладу буде щось подібне:

string(69) "Не можна контролювати script /tmp/notexists/controllers/Index.php"
