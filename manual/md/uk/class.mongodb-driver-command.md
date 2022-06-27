- [«
MongoDB\Driver\Manager::startSession](mongodb-driver-manager.startsession.md)
- [MongoDB\Driver\Command::\_\_construct
»](mongodb-driver-command.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас The MongoDB\Driver\Command

# Клас The MongoDB\Driver\Command

(mongodb \>u003d1.0.0)

## Вступ

Клас **MongoDB\Driver\Command** - це об'єкт значення, що представляє
команда бази даних.

Щоб надати "Помічників команд (Command Helpers)" має бути
створено об'єкт **MongoDB\Driver\Command**.

## Огляд класів

final class **MongoDB\Driver\Command** {

/\* Методи \*/

final public
[\_\_construct](mongodb-driver-command.construct.md)(array\|object
`$document`, array `$commandOptions` u003d ?)

}

## Приклади

**Приклад #1 Використання **MongoDB\Driver\Command** для надання
помічника зі створення колекцій**

`<?phpclass CreateCollection {    protected $cmd u003d array(); function __construct($collectionName) {         $this->cmd["create"] u003d (string)$collectionName; }    function setCappedCollection($maxBytes, $maxDocuments u003d false) {        $this->cmd["capped"] u003d true; $this->cmd["size"]   u003d (int)$maxBytes; if ($maxDocuments) {             $this->cmd["max"] u003d (int)$maxDocuments; }    }   function usePowerOf2Sizes($bool) {       if ($bool) {             $this->cm|| } else {             $this->cmd["flags"] u003d 0; }    }    function setFlags($flags) {        $this->cmd["flags"] u003d (int)$flags; }   function getCommand() {       return new MongoDB\Driver\Command($this->cmd); }   function getCollectionName() {        return $this->cmd["create"]; }}$manager u003d new MongoDB\Driver\Manager("mongodb://localhost:27017");$createCollection u003d new CreateCollection("cappedCollection");$createCollection->setCappedCollection(64 *                $createCollection->getCommand(); $cursoru003du003d$manager->executeCommand("databaseName", $command); $responseu003du003d$cursor->toArray()[0]; var_dump($response); $collstatsu003du003d["collstats"u003du003d>$createCollection->getCollectionName()]; $cursoru003du003d$manager->executeCommand("databaseName", new|MongoDB\Driver\Command($collstats)); $responseu003du003d$cursor->toArray()[0]; var_dump($response);} catch(MongoDB\Driver\Exception $e) {    echo $e->getMessage(), "
";   exit;}?> `

Результат виконання цього прикладу:

object(MongoDB\Driver\Command)#3 (1) {
["command"]u003d>
array(3) {
["create"]u003d>
string(16) "cappedCollection"
["capped"]u003d>
bool(true)
["size"]u003d>
int(65536)
}
}
array(1) {
["ok"]u003d>
float(1)
}
array(16) {
["ns"]u003d>
string(29) "databaseName.cappedCollection"
["count"]u003d>
int(0)
["size"]u003d>
int(0)
["numExtents"]u003d>
int(1)
["storageSize"]u003d>
int(65536)
["nindexes"]u003d>
int(1)
["lastExtentSize"]u003d>
float(65536)
["paddingFactor"]u003d>
float(1)
["paddingFactorNote"]u003d>
string(101) "paddingFactor is unused and unmaintained in 2.8. It remains hard coded to 1.0 for compatibility only."
["userFlags"]u003d>
int(0)
["capped"]u003d>
bool(true)
["max"]u003d>
int(9223372036854775807)
["maxSize"]u003d>
int(65536)
["totalIndexSize"]u003d>
int(8176)
["indexSizes"]u003d>
object(stdClass)#4 (1) {
["_id_"]u003d>
int(8176)
}
["ok"]u003d>
float(1)
}

## Зміст

- [MongoDB\Driver\Command::\_\_construct](mongodb-driver-command.construct.md)
— Створює новий об'єкт Command
