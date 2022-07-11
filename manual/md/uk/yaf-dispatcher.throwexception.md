- [« Yaf_Dispatcher::setView](yaf-dispatcher.setview.md)
- [Yaf_Config_Abstract »](class.yaf-config-abstract.md)

- [PHP Manual](index.md)
- [Yaf_Dispatcher](class.yaf-dispatcher.md)
- Вмикає/вимикає викидання виключень

# Yaf_Dispatcher::throwException

(Yaf \>u003d1.0.0)

Yaf_Dispatcher::throwException — Вмикає/вимикає викидання
винятків

### Опис

public **Yaf_Dispatcher::throwException**(bool `$flag` u003d ?):
[Yaf_Dispatcher](class.yaf-dispatcher.md)

Включає/вимикає викидання винятків у разі виникнення
непередбачуваної помилки. Коли включено, Yaf викидатиме винятки
замість того, щоб викликати помилки, які можна відловити.

Ви також можете використати
[application.dispatcher.throwException](yaf.appconfig.md#configuration.yaf.dispatcher.throwexception),
щоб досягти тієї ж мети.

### Список параметрів

`flag`
bool

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Dispatcher::throwexception()****

` <?php$config u003d array(    'application' u003d> array(       'directory' u003d> dirname(__FILE__),     ),);$app u003d new >> (true);try { {   $app->run();} catch (Yaf_Exception $e) {   var_dump($e->getMessage());}?> `

Результатом виконання цього прикладу буде щось подібне:

string(59) "Не можна контролювати script /tmp/controllers/Index.php"

**Приклад #2 Приклад використання **Yaf_Dispatcher::throwexception()****

` <?php$config u003d array(    'application' u003d> array(       'directory' u003d> dirname(__FILE__),     ),);$app u003d new >> (false);$app->run();?> `

Результатом виконання цього прикладу буде щось подібне:

PHP Catchable fatal error: Yaf_Application::run(): Досить не контролер script /tmp/controllers/Index.php in /tmp/1.php on line 12

### Дивіться також

- [Yaf_Dispatcher::catchException()](yaf-dispatcher.catchexception.md) -
Включає/вимикає перехоплення винятків
- [Yaf_Exception](class.yaf-exception.md)
