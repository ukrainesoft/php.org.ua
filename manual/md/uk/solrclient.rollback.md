- [«SolrClient::request](solrclient.request.md)
- [SolrClient::setResponseWriter »](solrclient.setresponsewriter.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Відкочує всі додавання/видалення, зроблені в індекс з моменту
останньої фіксації

# SolrClient::rollback

(PECL solr \> u003d 0.9.2)

SolrClient::rollback — Відкочує всі додавання/видалення, зроблені в
індекс з моменту останньої фіксації

### Опис

public **SolrClient::rollback**():
[SolrUpdateResponse](class.solrupdateresponse.md)

Відкочує всі додавання/видалення, зроблені в індекс з моменту
останньої фіксації. Він не викликає жодних прослуховувачів подій і не
створює нового пошукача.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає SolrUpdateResponse у разі успішного виконання або
викидає виняток SolrClientException у разі виникнення
помилки.

### Дивіться також

- [SolrClient::commit()](solrclient.commit.md) - Завершує все
додавання/видалення, зроблені в індексі
- [SolrClient::optimize()](solrclient.optimize.md) - Дефрагментує
індекс
