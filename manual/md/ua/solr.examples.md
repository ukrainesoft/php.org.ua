- [«solr_get_version](function.solr-get-version.md)
- [SolrUtils »](class.solrutils.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Приклади

# Приклади

Приклади використання модуля Apache Solr у PHP

**Приклад #1 Вміст файлу BootStrap**

` <?php/* Доменне ім'я сервера Solr */define('SOLR_SERVER_HOSTNAME', 'solr.example.com');/* Слід запускати в безпечному режимі*/define('SO порт для підключення */define('SOLR_SERVER_PORT', ((SOLR_SECURE) ? 8443 : 8983));/* Ім'я користувача для базової аутентифікаціїHTTP */define('  /define('SOLR_SERVER_PASSWORD', 'changeit');/* Час очікування HTTP-з'єднання *//* Це максимальний час в секундах, дозволений для операції передачі даних http. Значение по умолчанию - 30 секунд */define('SOLR_SERVER_TIMEOUT', 10);/* Имя файла для закрытого ключа в формате PEM + закрытый сертификат (объединены в указанном порядке) */define('SOLR_SSL_CERT', 'certs/combo.pem ');/* Ім'я файла тільки для приватного сертифіката в форматі PEM */define('SOLR_SSL_CERT_ONLY', 'certs/solr.crt');/* Ім'яфайла certs/solr.key');/* Пароль для файла закрытого ключа в формате PEM */define('SOLR_SSL_KEYPASSWORD', 'StrongAndSecurePassword');/* Имя файла, содержащего один или несколько сертификатов CA для проверки однорангового узла */define( 'SOLR_SSL_CAINFO', 'certs/cacert.crt');/* Ім'я каталога, містить кілька сертифікатів CA для перевірки однорангового вузла */define('SOLR_SSL_CAPATH''''

**Приклад #2 Додавання документа до індексу**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient ($options);$doc u003d new SolrInputDocument();$doc->addField('id', 334455);$doc->addField('cat', 'Software');$doc->addField('cat' , 'Lucene');$updateResponse u003d $client->addDocument($doc);print_r($updateResponse->getResponse());?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[responseHeader] u003d> SolrObject Object
(
[status] u003d> 0
[QTime] u003d> 446
)

)

**Приклад #3 Злиття одного документа з іншим**

` <?phpinclude "bootstrap.php";$doc u003d new SolrDocument();$second_doc u003d new SolrDocument();$doc->addField('id', 1123);$doc->features u003d ;$doc->features u003d "Fast development cycles";$doc['cat'] u003d 'Software';$doc['cat'] u003d 'Custom Search';$doc->cat   u003d 'Information Technology';$ second_doc->addField('cat', 'Lucene Search');$second_doc->merge($doc, true);print_r($second_doc->toArray());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[document_boost] u003d> 0
[field_count] u003d> 3
[fields] u003d> Array
(
[0] u003d> SolrDocumentField Object
(
[name] u003d> cat
[boost] u003d> 0
[values] u003d> Array
(
[0] u003d> Software
[1] u003d> Custom Search
[2] u003d> Information Technology
)

)

[1] u003d> SolrDocumentField Object
(
[name] u003d> id
[boost] u003d> 0
[values] u003d> Array
(
[0] u003d> 1123
)

)

[2] u003d> SolrDocumentField Object
(
[name] u003d> features
[boost] u003d> 0
[values] u003d> Array
(
[0] u003d> PHP Client Side
[1] u003d> Fast development cycles
)

)

)

)

**Приклад #4 Пошук документів - відповіді SolrObject**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient ($options);$query u003d new SolrQuery();$query->setQuery('lucene');$query->setStart(0);$query->setRows(50);$query->addField('cat ')->addField('features')->addField('id')->addField('timestamp');$query_response u003d $client->query($query);$response u003d $query_response->getResponse() ;print_r($response);?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[responseHeader] u003d> SolrObject Object
(
[status] u003d> 0
[QTime] u003d> 1
[params] u003d> SolrObject Object
(
[wt] u003d> xml
[rows] u003d> 50
[start] u003d> 0
[indent] u003d> on
[q] u003d> lucene
[fl] u003d> cat,features,id,timestamp
[version] u003d> 2.2
)

)

[response] u003d> SolrObject Object
(
[numFound] u003d> 3
[start] u003d> 0
[docs] u003d> Array
(
[0] u003d> SolrObject Object
(
[cat] u003d> Array
(
[0] u003d> Software
[1] u003d> Lucene
)

[id] u003d> 334456
)

[1] u003d> SolrObject Object
(
[cat] u003d> Array
(
[0] u003d> Software
[1] u003d> Lucene
)

[id] u003d> 334455
)

[2] u003d> SolrObject Object
(
[cat] u003d> Array
(
[0] u003d> software
[1] u003d> search
)

[features] u003d> Array
(
[0] u003d> Advanced Full-Text Search Capabilities using Lucene
[1] u003d> Optimized for High Volume Web Traffic
[2] u003d> Standards Based Open Interfaces - XML and HTTP
[3] u003d> Comprehensive HTML Administration Interfaces
[4] u003d> Scalability - Efficient Replication to other Solr Search Servers
[5] u003d> Flexible and Adaptable with XML configuration and Schema
[6] u003d> Good unicode support: héllo (hello with an accent over the e)
)

[id] u003d> SOLR1000
[timestamp] u003d> 2009-09-04T20:38:55.906
)

)

)

)

**Приклад #5 Пошук документів - відповіді SolrDocument**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient ($options);$query u003d new SolrQuery();$query->setQuery('lucene');$query->setStart(0);$query->setRows(50);$query->addField('cat ')->addField('features')->addField('id')->addField('timestamp');$query_response u003d $client->query($query);$query_response->setParseMode(SolrQueryResponse::PARSE_ );$response u003d $query_response->getResponse();print_r($response);?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[responseHeader] u003d> SolrObject Object
(
[status] u003d> 0
[QTime] u003d> 1
[params] u003d> SolrObject Object
(
[wt] u003d> xml
[rows] u003d> 50
[start] u003d> 0
[indent] u003d> on
[q] u003d> lucene
[fl] u003d> cat,features,id,timestamp
[version] u003d> 2.2
)

)

[response] u003d> SolrObject Object
(
[numFound] u003d> 3
[start] u003d> 0
[docs] u003d> Array
(
[0] u003d> SolrDocument Object
(
[_hashtable_index:SolrDocument:private] u003d> 19740
)

[1] u003d> SolrDocument Object
(
[_hashtable_index:SolrDocument:private] u003d> 25485
)

[2] u003d> SolrDocument Object
(
[_hashtable_index:SolrDocument:private] u003d> 25052
)

)

)

)

**Приклад #6 Приклад використання Simple TermsComponent**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient ($options);$query u003d new SolrQuery();$query->setTerms(true);$query->setTermsField('cat');$updateResponse u003d $client->query($query);print_r($updateResponse ->getResponse());?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[responseHeader] u003d> SolrObject Object
(
[status] u003d> 0
[QTime] u003d> 2
)

[terms] u003d> SolrObject Object
(
[cat] u003d> SolrObject Object
(
[electronics] u003d> 14
[Lucene] u003d> 4
[Software] u003d> 4
[memory] u003d> 3
[Кард] u003d> 2
[connector] u003d> 2
[drive] u003d> 2
[graphics] u003d> 2
[hard] u003d> 2
[monitor] u003d> 2
)

)

)

**Приклад #7 Приклад використання Simple TermsComponent - використання
префікса**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient ($options);$query u003d new SolrQuery();$query->setTerms(true);/* Return only terms starting with $prefix */$prefix u003d 'c';$query->setTermsField(' ->setTermsPrefix($prefix);$updateResponse u003d $client->query($query);print_r($updateResponse->getResponse());?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[responseHeader] u003d> SolrObject Object
(
[status] u003d> 0
[QTime] u003d> 1
)

[terms] u003d> SolrObject Object
(
[cat] u003d> SolrObject Object
(
[Кард] u003d> 2
[connector] u003d> 2
[camera] u003d> 1
[copier] u003d> 1
)

)

)

**Приклад #8 Приклад використання Simple TermsComponent - вказівка
мінімальної частоти**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient ($options);$query u003d new SolrQuery();$query->setTerms(true);/* Повертати тільки терміни, починаються с $prefix */$prefix u003d 'c';/* повертати більше */$min_frequency u003d 2;$query->setTermsField('cat')->setTermsPrefix($prefix)->setTermsMinCount($min_frequency);$updateResponse u003d$client->query($query);print_r($ ->getResponse());?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[responseHeader] u003d> SolrObject Object
(
[status] u003d> 0
[QTime] u003d> 0
)

[terms] u003d> SolrObject Object
(
[cat] u003d> SolrObject Object
(
[Кард] u003d> 2
[connector] u003d> 2
)

)

)

**Приклад #9 Приклад використання Simple Facet**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient ($options);$query u003d new SolrQuery('*:*');$query->setFacet(true);$query->addFacetField('cat')->addFacetField('name')->setFacetMinCount(2 );$updateResponse u003d$client->query($query);$response_array u003d $updateResponse->getResponse();$facet_data u003d $response_array->facet_counts->facet_fields;_print_r($face)

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[cat] u003d> SolrObject Object
(
[electronics] u003d> 14
[memory] u003d> 3
[Lucene] u003d> 2
[Software] u003d> 2
[Кард] u003d> 2
[connector] u003d> 2
[drive] u003d> 2
[graphics] u003d> 2
[hard] u003d> 2
[monitor] u003d> 2
[search] u003d> 2
[software] u003d> 2
)

[name] u003d> SolrObject Object
(
[gb] u003d> 6
[1] u003d> 3
[184] u003d> 3
[2] u003d> 3
[3200] u003d> 3
[400] u003d> 3
[500] u003d> 3
[ddr] u003d> 3
[i] u003d> 3
[ipod] u003d> 3
[memori] u003d> 3
[pc] u003d> 3
[pin] u003d> 3
[Pod] u003d> 3
[sdram] u003d> 3
[system] u003d> 3
[unbuff] u003d> 3
[canon] u003d> 2
[corsair] u003d> 2
[drive] u003d> 2
[hard] u003d> 2
[mb] u003d> 2
[n] u003d> 2
[power] u003d> 2
[retail] u003d> 2
[video] u003d> 2
[x] u003d> 2
)

)

**Приклад #10 Приклад використання Simple Facet - з необов'язковим
перевизначенням поля для mincount**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient ($options);$query u003d new SolrQuery('*:*');$query->setFacet(true);$query->addFacetField('cat')->addFacetField('name')->setFacetMinCount(2 )->setFacetMinCount(4, 'name');$updateResponse u003d $client->query($query);$response_array u003d $updateResponse->getResponse();$facet_data u003d $response_array-print $facet_data);?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[cat] u003d> SolrObject Object
(
[electronics] u003d> 14
[memory] u003d> 3
[Lucene] u003d> 2
[Software] u003d> 2
[Кард] u003d> 2
[connector] u003d> 2
[drive] u003d> 2
[graphics] u003d> 2
[hard] u003d> 2
[monitor] u003d> 2
[search] u003d> 2
[software] u003d> 2
)

[name] u003d> SolrObject Object
(
[gb] u003d> 6
)

)

**Приклад #11 Приклад використання Facet Date**

` <?phpinclude "bootstrap.php";$options u003d array(        'hostname' u003d> SOLR_SERVER_HOSTNAME,        'login'    u003d> SOLR_SERVER_USERNAME,        'password' u003d> SOLR_SERVER_PASSWORD,        'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient ($options);$query u003d new SolrQuery('*:*');$query->setFacet(true);$query->addFacetDateField('manufacturedate_dt');$query->setFacetDateStart('2006-02-13 :00:00Z');$query->setFacetDateEnd('2012-02-13T00:00:00Z');$query->setFacetDateGap('+1YEAR');$query->setFacetDateHardEnd(1);$query- >addFacetDateOther('before');$updateResponse u003d$$client->query($query);$response_array u003d $updateResponse->getResponse();$facet_data u003d $response_array->face_cout ?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[manufacturedate_dt] u003d> SolrObject Object
(
[2006-02-13T00:00:00Z] u003d> 9
[2007-02-13T00:00:00Z] u003d> 0
[2008-02-13T00:00:00Z] u003d> 0
[2009-02-13T00:00:00Z] u003d> 0
[2010-02-13T00:00:00Z] u003d> 0
[2011-02-13T00:00:00Z] u003d> 0
[gap] u003d> +1YEAR
[start] u003d> 2006-02-13T00:00:00Z
[end] u003d> 2012-02-13T00:00:00Z
[before] u003d> 2
)

)

**Приклад #12 Підключення до сервера з підтримкою SSL**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,    'timeout'  u003d> SOLR_SERVER_TIMEOUT, 'secure'   u003d> SOLR_SECURE,    'ssl_cert' u003d> SOLR_SSL_CERT_ONLY,    'ssl_key'  u003d> SOLR_SSL_KEY,    'ssl_keypassword' u003d> SOLR_SSL_KEYPASSWORD,    'ssl_cainfo' u003d> SOLR_SSL_CAINFO,);$client u003d new SolrClient($options);$query u003d new SolrQuery('*:*');$query->setFacet(true);$query->addFacetField('cat')->addFacetField('name')->setFacetMinCount(2)->setFacetMinCount(4, ' name');$updateResponse u003d$client->query($query);$response_array u003d $updateResponse->getResponse();$facet_data u003d $response_array->facet_counts->facet_fields;_print_r

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[cat] u003d> SolrObject Object
(
[electronics] u003d> 14
[memory] u003d> 3
[Lucene] u003d> 2
[Software] u003d> 2
[Кард] u003d> 2
[connector] u003d> 2
[drive] u003d> 2
[graphics] u003d> 2
[hard] u003d> 2
[monitor] u003d> 2
[search] u003d> 2
[software] u003d> 2
)

[name] u003d> SolrObject Object
(
[gb] u003d> 6
)

)

**Приклад #13 Згортання [SolrQuery](class.solrquery.md)**

` <?phpinclude "bootstrap.php";$options u003d array(        'hostname' u003d> SOLR_SERVER_HOSTNAME,        'login'    u003d> SOLR_SERVER_USERNAME,        'password' u003d> SOLR_SERVER_PASSWORD,        'port'     u003d> SOLR_SERVER_PORT,        'path'     u003d> SOLR_SERVER_PATH) ;$client u003d new SolrClient($options);$query u003d new SolrQuery('*:*');$collapseFunction u003d new SolrCollapseFunction('manu_id_s');$collapseFunction-> NULLPOLICY_IGNORE);$query->collapse($collapseFunction)->setRows(4);$queryResponseu003du003d$client->query($query);$response u003d $queryResponse->getResponse();print_r($respon > `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[responseHeader] u003d> SolrObject Object
(
[status] u003d> 0
[QTime] u003d> 1
[params] u003d> SolrObject Object
(
[q] u003d> *: *
[indent] u003d> on
[fq] u003d> {!collapse fieldu003dmanu_id_s sizeu003d2 nullPolicyu003dignore}
[rows] u003d> 4
[version] u003d> 2.2
[wt] u003d> xml
)

)

[response] u003d> SolrObject Object
(
[numFound] u003d> 14
[start] u003d> 0
[docs] u003d> Array
(
[0] u003d> SolrObject Object
(
[id] u003d> SP2514N
[name] u003d> Array
(
[0] u003d> Samsung SpinPoint P120 SP2514N - hard drive - 250 GB - ATA-133
)

[manu] u003d> Array
(
[0] u003d> Samsung Electronics Co. Ltd.
)

[manu_id_s] u003d> samsung
[cat] u003d> Array
(
[0] u003d> electronics
[1] u003d> hard drive
)

[features] u003d> Array
(
[0] u003d> 7200RPM, 8MB cache, IDE Ultra ATA-133
[1] u003d> NoiseGuard, SilentSeek technology, Fluid Dynamic Bearing (FDB) motor
)

[price] u003d> Array
(
[0] u003d> 92
)

[popularity] u003d> Array
(
[0] u003d> 6
)

[inStock] u003d> Array
(
[0] u003d> 1
)

[manufacturedate_dt] u003d> 2006-02-13T15:26:37Z
[store] u003d> Array
(
[0] u003d> 35.0752,-97.032
)

[_version_] u003d> 1510294336412057600
)

[1] u003d> SolrObject Object
(
[id] u003d> 6H500F0
[name] u003d> Array
(
[0] u003d> Maxtor DiamondMax 11 - hard drive - 500 GB - SATA-300
)

[manu] u003d> Array
(
[0] u003d> Maxtor Corp.
)

[manu_id_s] u003d> maxtor
[cat] u003d> Array
(
[0] u003d> electronics
[1] u003d> hard drive
)

[features] u003d> Array
(
[0] u003d> SATA 3.0Gb/s, NCQ
[1] u003d> 8.5ms seek
[2] u003d> 16MB cache
)

[price] u003d> Array
(
[0] u003d> 350
)

[popularity] u003d> Array
(
[0] u003d> 6
)

[inStock] u003d> Array
(
[0] u003d> 1
)

[store] u003d> Array
(
[0] u003d> 45.17614,-93.87341
)

[manufacturedate_dt] u003d> 2006-02-13T15:26:37Z
[_version_] u003d> 1510294336449806336
)

[2] u003d> SolrObject Object
(
[id] u003d> F8V7067-APL-KIT
[name] u003d> Array
(
[0] u003d> Belkin Mobile Power Cord для iPod w/ Dock
)

[manu] u003d> Array
(
[0] u003d> Belkin
)

[manu_id_s] u003d> belkin
[cat] u003d> Array
(
[0] u003d> electronics
[1] u003d> connector
)

[features] u003d> Array
(
[0] u003d> car power adapter, white
)

[weight] u003d> Array
(
[0] u003d> 4
)

[price] u003d> Array
(
[0] u003d> 19.95
)

[popularity] u003d> Array
(
[0] u003d> 1
)

[inStock] u003d> Array
(
[0] u003d>
)

[store] u003d> Array
(
[0] u003d> 45.18014,-93.87741
)

[manufacturedate_dt] u003d> 2005-08-01T16:30:25Z
[_version_] u003d> 1510294336458194944
)

[3] u003d> SolrObject Object
(
[id] u003d> MA147LL/A
[name] u003d> Array
(
[0] u003d> Apple 60 GB iPod with Video Playback Black
)

[manu] u003d> Array
(
[0] u003d> Apple Computer Inc.
)

[manu_id_s] u003d> apple
[cat] u003d> Array
(
[0] u003d> electronics
[1] u003d> music
)

[features] u003d> Array
(
[0] u003d> iTunes, Podcasts, Audiobooks
[1] u003d> Stores up to 15,000 songs, 25,000 photos, or 150 hours of video
[2] u003d> 2.5-inch, 320x240 color TFT LCD display with LED backlight
[3] u003d> Up to 20 hours of battery life
[4] u003d> Plays AAC, MP3, WAV, AIFF, Audible, Apple Lossless, H.264
[5] u003d> Записи, Календар, Довідник, Знижка кнопки, Дата Display, Photo wallet, Built-in games, JPEG photo playback, Upgradeable firmware, USB 2.0 compatibility, Playback speed control, Rechargeable capability, Battery level indication
)

[includes] u003d> Array
(
[0] u003d> earbud headphones, USB cable
)

[weight] u003d> Array
(
[0] u003d> 5.5
)

[price] u003d> Array
(
[0] u003d> 399
)

[popularity] u003d> Array
(
[0] u003d> 10
)

[inStock] u003d> Array
(
[0] u003d> 1
)

[store] u003d> Array
(
[0] u003d> 37.7752,-100.0232
)

[manufacturedate_dt] u003d> 2005-10-12T08:00:00Z
[_version_] u003d> 1510294336562003968
)

)

)

)

**Приклад #14 Приклад використання Solr Real Time Get (RTG)
[SolrClient::getById()](solrclient.getbyid.md)**

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,    'path'     u003d> SOLR_SERVER_PATH) ;$client u003d new SolrClient($options);$response u003d $client->getById('GB18030TEST');print_r($response->getResponse());?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[doc] u003d> SolrObject Object
(
[id] u003d> GB18030TEST
[name] u003d> Array
(
[0] u003d> Test with some GB18030 encoded characters
)

[features] u003d> Array
(
[0] u003d> No accents here
[1] u003d> 这是一个功能
[2] u003d> This is a feature (перекладається)
[3] u003d> 这份文件是很有光泽
[4] u003d> Цей документ є дуже shiny (translated)
)

[price] u003d> Array
(
[0] u003d> 0
)

[inStock] u003d> Array
(
[0] u003d> 1
)

[_version_] u003d> 1510294336239042560
)

)
