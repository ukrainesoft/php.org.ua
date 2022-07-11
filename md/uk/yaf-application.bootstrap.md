- [« Yaf_Application::app](yaf-application.app.md)
- [Yaf_Application::clearLastError
»](yaf-application.clearlasterror.md)

- [PHP Manual](index.md)
- [Yaf_Application](class.yaf-application.md)
- Викликати bootstrap

# Yaf_Application::bootstrap

(Yaf \>u003d1.0.0)

Yaf_Application::bootstrap — Викликати bootstrap

### Опис

public
**Yaf_Application::bootstrap**([Yaf_Bootstrap_Abstract](class.yaf-bootstrap-abstract.md)
$bootstrap u003d ?): void

Запускає Bootstrap, всі методи, визначені в Bootstrap і іменовані з
префіксом \init будуть викликані в порядку їх визначення. Якщо параметр
bootstrap не заданий, Yaf буде шукати його по шляху, вказаному в
application.directory.

### Список параметрів

`bootstrap`
Екземпляр класу
[Yaf_Bootstrap_Abstract](class.yaf-bootstrap-abstract.md)

### Значення, що повертаються

Примірник класу [Yaf_Application](class.yaf-application.md)

### Приклади

**Приклад #1 Приклад використання **Bootstrap()****

` <?php/** * Цей файл повинен перебувати по шляху APPLICATION_PATH . "/application/" * (котрий визначений в конфігураційному файлі додатки Yaf_Application). * і називатися Bootstrap.php, щоб Yaf_Application зміг його найти */class Bootstrap extends Yaf_Bootstrap_Abstract {                                     ¦    
";    }    function _initPlugin($dispatcher) {        echo "другий метод викликаний
";    }}?> `

**Приклад #2 Приклад використання **Yaf_Application::bootstrap()****

` <?phpdefined('APPLICATION_PATH') // Буде використаний APPLICATION_PATH    || define('APPLICATION_PATH', __DIR__);$application u003d new Yaf_Application(APPLICATION_PATH.'/conf/application.ini');$application->bootstrap();?> `

Результатом виконання цього прикладу буде щось подібне:

перший метод викликаний
другий метод викликаний

### Дивіться також

- [Yaf_Bootstrap_Abstract](class.yaf-bootstrap-abstract.md)
