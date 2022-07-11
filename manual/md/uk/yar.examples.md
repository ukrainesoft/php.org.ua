- [«Зумовлені константи](yar.constants.md)
- [Yar_Server »](class.yar-server.md)

- [PHP Manual](index.md)
- [Yar](book.yar.md)
- Приклади

# Приклади

**Приклад #1 Приклад сервера Yar**

` <?php/* Предположим, что это страница может быть доступна по http://example.com/operator.php */class Operator {    /**     * Складываем два операнда     * @param interge     * @return interge     */    public function add($a, $b) {         return $this->_add($a, $b); }    /**     * Віднімаємо     */    public function sub($a, $b) {         return $a -| }    /**     * Умножуємо     */    public function mul($a, $b) {         return $a *| }    /**     * Защищённый метод     * @param interge     * @return interge     */    protected function _add($a, $b) {        return $a + $b; }}$server u003d new Yar_Server(new Operator());$server->handle();?> `

**Приклад #2 Звертаємось до сервера з браузера (запит GET)**

Результатом виконання цього прикладу буде щось подібне:

![Інформація про сервер
Yar](images/4fd86c7f1b197d1d954ad0f4b033dc93-yar.png)

**Приклад #3 Приклад клієнта Yar**

` <?php$client u003d new yar_client("http://example.com/operator.php");/* викликаємо прямо */var_dump($client->add(1, 2));/* викликаємо через метод call */var_dump($client->call("add", array(3, 2)));/* неможливо викликати __add */var_dump($client->_add(1, 2));?> `

Результатом виконання цього прикладу буде щось подібне:

int(3)
int(5)
PHP Fatal error: Безглуздий вираз 'Yar_Server_Exception' with message 'call to api Operator::_add() failed' in *

**Приклад #4 Приклад конкуруючих клієнтів Yar**

` <?phpfunction callback($ret, $callinfo) {   echo $callinfo['method'] , " result: ", $ret , "
";}/* реєструємо асинхронні дзвінки до віддалених сервісів */Yar_Concurrent_Client::call("http://example.com/operator.php", "add", array(1, 2), "callback");Yar_Concurrent :call("http://example.com/operator.php", "sub", array(2, 1), callback");Yar_Concurrent_Client::call("http://example.com/operator.php ", "mul", array(2, 2), "callback");/* посилаємо всі запити і чекаємо відповіді */Yar_Concurrent_Client::loop();?> `

Результатом виконання цього прикладу буде щось подібне:

mul result: 4
sub result: 1
add result: 3
