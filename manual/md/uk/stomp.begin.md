- [«Stomp::ack](stomp.ack.md)
- [Stomp::commit »](stomp.commit.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Створює транзакцію

# Stomp::begin

#stomp_begin

(PECL stomp \>u003d 0.1.0)

Stomp::begin - stomp_begin - Створює транзакцію

### Опис

Об'єктно-орієнтований стиль (метод):

public **Stomp::begin**(string `$transaction_id`, array `$headers` u003d ?):
bool

Процедурний стиль:

**stomp_begin**(resource `$link`, string `$transaction_id`, array
`$headers` u003d ?): bool

Створює транзакцію.

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

`transaction_id`
Ідентифікатор транзакції.

`headers`
Асоціативний масив, що містить додаткові заголовки (приклад:
receipt).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

Дивіться [stomp_commit()](stomp.commit.md) або
[stomp_abort()](stomp.abort.md).

### Примітки

**Підказка**

Stomp асинхронний за своєю суттю. Синхронний зв'язок може бути реалізований
додаванням receipt-заголовка. Це змусить методи нічого не повертати,
доки сервер не підтвердить отримання повідомлення або не буде перевищено
час очікування повідомлення.
