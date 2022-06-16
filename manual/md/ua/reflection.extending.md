- [« Приклади](reflection.examples.md)
- [Reflection »](class.reflection.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Розширення

# Розширення

Якщо вам потрібна спеціалізована версія вбудованого класу (який,
наприклад, зможе генерувати кольоровий HTML під час експорту, матиме
легкодоступні властивості замість методів або які-небудь
допоміжні методи), то можете просто взяти та розширити його.

**Приклад #1 Розширення вбудованих класів**

` <?php/** * Мій клас Reflection_Method */class My_Reflection_Method extends ReflectionMethod{    public $visibility u003d array(); public function __construct($o, $m)    {        parent::__construct($o, $m); $this->visibility u003d Reflection::getModifierNames($this->getModifiers()); }}/** * Демо-класс #1 * */class T {    protected function x() {}}/** * Демо-класс #2 * */class U extends T { | / Виведемо інформацію про методеvar_dump(new My_Reflection_Method('U', 'x'));?> `

Результатом виконання цього прикладу буде щось подібне:

object(My_Reflection_Method)#1 (3) {
["visibility"]u003d>
array(1) {
[0]u003d>
string(6) "public"
}
["name"]u003d>
string(1) "x"
["class"]u003d>
string(1) "U"
}

**Застереження**

Коли ви перевизначаєте конструктор, не забудьте обов'язково викликати
батьківський конструктор до будь-якого доданого коду. Якщо так не
робити, то ви можете отримати повідомлення про помилку вигляду:
`Fatal error: Internal error: Потрібно від'єднати сповіщений об'єкт`
