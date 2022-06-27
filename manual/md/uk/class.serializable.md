- [« ArrayAccess::offsetUnset](arrayaccess.offsetunset.md)
- [Serializable::serialize »](serializable.serialize.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Інтерфейс Serializable

# Інтерфейс Serializable

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Інтерфейс для персональної серіалізації.

Класи, які реалізують цей інтерфейс, більше не підтримують
[\_\_sleep()](language.oop5.magic.md#object.sleep) та
[\_\_wakeup()](language.oop5.magic.md#object.wakeup). Метод serialize
викликається щоразу, коли необхідна серіалізація екземпляру класу.
Цей метод не викликає \_\_destruct() і не має жодних побічних
дій крім тих, що запрограмовані всередині нього. Коли дані
десеріалізуються, клас відомий і відповідний метод unserialize()
викликається як конструктор замість виклику \_\_construct(). якщо вам
необхідно викликати стандартний конструктор, ви можете це зробити у цьому
метод.

**Увага**

Починаючи з PHP 8.1.0, клас, який реалізує **Serializable** без
реалізації [\_\_serialize()](language.oop5.magic.md#object.serialize)
і [\_\_unserialize()](language.oop5.magic.md#object.unserialize)
видасть попередження про старіння

## Огляд інтерфейсів

interface **Serializable** {

/\* Методи \*/

public [serialize](serializable.serialize.md)(): ?string

public [unserialize](serializable.unserialize.md)(string `$data`):
void

}

**Приклад #1 Основи використання**

`<?phpclass obj implements Serializable {    private $data; public function __construct() {         $this->data u003d "Мої закриті дані"; }    public function serialize() {        return serialize($this->data); }    public function unserialize($data) {        $this->datau003du003dunserialize($data); }    public function getData() {        return $this->data; }}$obj u003d new obj;$ser u003d serialize($obj);var_dump($ser);$newobj u003d unserialize($ser);var_dump($newobj->getData());?> `

Результатом виконання цього прикладу буде щось подібне:

string(59) "C:3:"obj":44:{s:36:"Мої закриті дані";}"
string(36) "Мої закриті дані"

## Зміст

- [Serializable::serialize](serializable.serialize.md) -
Представляє об'єкт у вигляді рядка
- [Serializable::unserialize](serializable.unserialize.md) — Створює
об'єкт
