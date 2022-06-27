- [«
Yaf_Application::setAppDirectory](yaf-application.setappdirectory.md)
- [Yaf_Dispatcher »](class.yaf-dispatcher.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Bootstrap_Abstract

# Клас Yaf_Bootstrap_Abstract

(No version information available, might only be in Git)

## Вступ

Bootstrap є механізмом, який використовується для початкового
конфігурування чогось до запуску програми.

Користувач може визначити свій власний Bootstrap клас,
успадкувавши **Yaf_Bootstrap_Abstract**

Будь-який метод, оголошений у класі Bootstrap, що починається на "\_init",
буде викликаний
[Yaf_Application::bootstrap()](yaf-application.bootstrap.md) один за
іншим відповідно до заданої послідовності.

## Приклади

**Приклад #1 Приклад використання Bootstrap**

` <?php   /* класс bootstrap должен быть задан в ./application/Bootstrap.php */   class Bootstrap extends Yaf_Bootstrap_Abstract {        public function _initConfig(Yaf_Dispatcher $dispatcher) {            var_dump(__METHOD__); }     |initPlugin(Yaf_Dispatcher $dispatcher) {            var_dump(__METHOD__); }  }}  $config u003d array(                                 $app u003d new Yaf_Application($config); $app->bootstrap();?> `

Результатом виконання цього прикладу буде щось подібне:

string(22) "Bootstrap::_initConfig"
string(22) "Bootstrap::_initPlugin"

## Огляд класів

abstract class **Yaf_Bootstrap_Abstract** {

/\* Властивості \*/

/\* Методи \*/

}
