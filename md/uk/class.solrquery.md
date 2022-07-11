- [«
SolrModifiableParams::\_\_destruct](solrmodifiableparams.destruct.md)
- [SolrQuery::addExpandFilterQuery
»](solrquery.addexpandfilterquery.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrQuery

# Клас SolrQuery

(PECL solr \> u003d 0.9.2)

## Вступ

Представляє колекцію пар ім'я-значення, відправлену на сервер Solr
час запиту.

## Огляд класів

class **SolrQuery** extends
[SolrModifiableParams](class.solrmodifiableparams.md) implements
[Serializable](class.serializable.md) {

/\* Константи \*/

const int `ORDER_ASC` u003d 0;

const int `ORDER_DESC` u003d 1;

const int `FACET_SORT_INDEX` u003d 0;

const int `FACET_SORT_COUNT` u003d 1;

const int `TERMS_SORT_INDEX` u003d 0;

const int `TERMS_SORT_COUNT` u003d 1;

/\* Властивості \*/

/\* Методи \*/

public [\_\_construct](solrquery.construct.md)(string `$q` u003d ?)

public
[addExpandFilterQuery](solrquery.addexpandfilterquery.md)(string
`$fq`): [SolrQuery](class.solrquery.md)

public [addExpandSortField](solrquery.addexpandsortfield.md)(string
`$field`, string `$order` u003d ?): [SolrQuery](class.solrquery.md)

public [addFacetDateField](solrquery.addfacetdatefield.md)(string
`$dateField`): [SolrQuery](class.solrquery.md)

public [addFacetDateOther](solrquery.addfacetdateother.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [addFacetField](solrquery.addfacetfield.md)(string `$field`):
[SolrQuery](class.solrquery.md)

public [addFacetQuery](solrquery.addfacetquery.md)(string
`$facetQuery`): [SolrQuery](class.solrquery.md)

public [addField](solrquery.addfield.md)(string `$field`):
[SolrQuery](class.solrquery.md)

public [addFilterQuery](solrquery.addfilterquery.md)(string `$fq`):
[SolrQuery](class.solrquery.md)

public [addGroupField](solrquery.addgroupfield.md)(string `$value`):
[SolrQuery](class.solrquery.md)

public [addGroupFunction](solrquery.addgroupfunction.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public [addGroupQuery](solrquery.addgroupquery.md)(string $value):
[SolrQuery](class.solrquery.md)

public [addGroupSortField](solrquery.addgroupsortfield.md)(string
`$field`, int `$order` u003d ?): [SolrQuery](class.solrquery.md)

public [addHighlightField](solrquery.addhighlightfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [addMltField](solrquery.addmltfield.md)(string `$field`):
[SolrQuery](class.solrquery.md)

public [addMltQueryField](solrquery.addmltqueryfield.md)(string
`$field`, float `$boost`): [SolrQuery](class.solrquery.md)

public [addSortField](solrquery.addsortfield.md)(string `$field`, int
`$order` u003d SolrQuery::ORDER_DESC): [SolrQuery](class.solrquery.md)

public [addStatsFacet](solrquery.addstatsfacet.md)(string `$field`):
[SolrQuery](class.solrquery.md)

public [addStatsField](solrquery.addstatsfield.md)(string `$field`):
[SolrQuery](class.solrquery.md)

public
[collapse](solrquery.collapse.md)([SolrCollapseFunction](class.solrcollapsefunction.md)
`$collapseFunction`): [SolrQuery](class.solrquery.md)

public [getExpand](solrquery.getexpand.md)(): bool

public
[getExpandFilterQueries](solrquery.getexpandfilterqueries.md)(): array

public [getExpandQuery](solrquery.getexpandquery.md)(): array

public [getExpandRows](solrquery.getexpandrows.md)(): int

public [getExpandSortFields](solrquery.getexpandsortfields.md)():
array

public [getFacet](solrquery.getfacet.md)(): bool

public [getFacetDateEnd](solrquery.getfacetdateend.md)(string
`$field_override` u003d ?): string

public [getFacetDateFields](solrquery.getfacetdatefields.md)(): array

public [getFacetDateGap](solrquery.getfacetdategap.md)(string
`$field_override` u003d ?): string

public [getFacetDateHardEnd](solrquery.getfacetdatehardend.md)(string
`$field_override` u003d ?): string

public [getFacetDateOther](solrquery.getfacetdateother.md)(string
`$field_override` u003d ?): array

public [getFacetDateStart](solrquery.getfacetdatestart.md)(string
`$field_override` u003d ?): string

public [getFacetFields](solrquery.getfacetfields.md)(): array

public [getFacetLimit](solrquery.getfacetlimit.md)(string
`$field_override` u003d ?): int

public [getFacetMethod](solrquery.getfacetmethod.md)(string
`$field_override` u003d ?): string

public [getFacetMinCount](solrquery.getfacetmincount.md)(string
`$field_override` u003d ?): int

public [getFacetMissing](solrquery.getfacetmissing.md)(string
`$field_override` u003d ?): bool

public [getFacetOffset](solrquery.getfacetoffset.md)(string
`$field_override` u003d ?): int

public [getFacetPrefix](solrquery.getfacetprefix.md)(string
`$field_override` u003d ?): string

public [getFacetQueries](solrquery.getfacetqueries.md)(): array

public [getFacetSort](solrquery.getfacetsort.md)(string
`$field_override` u003d ?): int

public [getFields](solrquery.getfields.md)(): array

public [getFilterQueries](solrquery.getfilterqueries.md)(): array

public [getGroup](solrquery.getgroup.md)(): bool

public [getGroupCachePercent](solrquery.getgroupcachepercent.md)():
int

public [getGroupFacet](solrquery.getgroupfacet.md)(): bool

public [getGroupFields](solrquery.getgroupfields.md)(): array

public [getGroupFormat](solrquery.getgroupformat.md)(): string

public [getGroupFunctions](solrquery.getgroupfunctions.md)(): array

public [getGroupLimit](solrquery.getgrouplimit.md)(): int

public [getGroupMain](solrquery.getgroupmain.md)(): bool

public [getGroupNGroups](solrquery.getgroupngroups.md)(): bool

public [getGroupOffset](solrquery.getgroupoffset.md)(): int

public [getGroupQueries](solrquery.getgroupqueries.md)(): array

public [getGroupSortFields](solrquery.getgroupsortfields.md)(): array

public [getGroupTruncate](solrquery.getgrouptruncate.md)(): bool

public [getHighlight](solrquery.gethighlight.md)(): bool

public
[getHighlightAlternateField](solrquery.gethighlightalternatefield.md)(string
`$field_override` u003d ?): string

public [getHighlightFields](solrquery.gethighlightfields.md)(): array

public
[getHighlightFormatter](solrquery.gethighlightformatter.md)(string
`$field_override` u003d ?): string

public
[getHighlightFragmenter](solrquery.gethighlightfragmenter.md)(string
`$field_override` u003d ?): string

public
[getHighlightFragsize](solrquery.gethighlightfragsize.md)(string
`$field_override` u003d ?): int

public
[getHighlightHighlightMultiTerm](solrquery.gethighlighthighlightmultiterm.md)():
bool

public
[getHighlightMaxAlternateFieldLength](solrquery.gethighlightmaxalternatefieldlength.md)(string
`$field_override` u003d ?): int

public
[getHighlightMaxAnalyzedChars](solrquery.gethighlightmaxanalyzedchars.md)():
int

public
[getHighlightMergeContiguous](solrquery.gethighlightmergecontiguous.md)(string
`$field_override` u003d ?): bool

public
[getHighlightRegexMaxAnalyzedChars](solrquery.gethighlightregexmaxanalyzedchars.md)():
int

public
[getHighlightRegexPattern](solrquery.gethighlightregexpattern.md)():
string

public [getHighlightRegexSlop](solrquery.gethighlightregexslop.md)():
float

public
[getHighlightRequireFieldMatch](solrquery.gethighlightrequirefieldmatch.md)():
bool

public
[getHighlightSimplePost](solrquery.gethighlightsimplepost.md)(string
`$field_override` u003d ?): string

public
[getHighlightSimplePre](solrquery.gethighlightsimplepre.md)(string
`$field_override` u003d ?): string

public
[getHighlightSnippets](solrquery.gethighlightsnippets.md)(string
`$field_override` u003d ?): int

public
[getHighlightUsePhraseHighlighter](solrquery.gethighlightusephrasehighlighter.md)():
bool

public [getMlt](solrquery.getmlt.md)(): bool

public [getMltBoost](solrquery.getmltboost.md)(): bool

public [getMltCount](solrquery.getmltcount.md)(): int

public [getMltFields](solrquery.getmltfields.md)(): array

public
[getMltMaxNumQueryTerms](solrquery.getmltmaxnumqueryterms.md)(): int

public [getMltMaxNumTokens](solrquery.getmltmaxnumtokens.md)(): int

public [getMltMaxWordLength](solrquery.getmltmaxwordlength.md)(): int

public [getMltMinDocFrequency](solrquery.getmltmindocfrequency.md)():
int

public
[getMltMinTermFrequency](solrquery.getmltmintermfrequency.md)(): int

public [getMltMinWordLength](solrquery.getmltminwordlength.md)(): int

public [getMltQueryFields](solrquery.getmltqueryfields.md)(): array

public [getQuery](solrquery.getquery.md)(): string

public [getRows](solrquery.getrows.md)(): int

public [getSortFields](solrquery.getsortfields.md)(): array

public [getStart](solrquery.getstart.md)(): int

public [getStats](solrquery.getstats.md)(): bool

public [getStatsFacets](solrquery.getstatsfacets.md)(): array

public [getStatsFields](solrquery.getstatsfields.md)(): array

public [getTerms](solrquery.getterms.md)(): bool

public [getTermsField](solrquery.gettermsfield.md)(): string

public
[getTermsIncludeLowerBound](solrquery.gettermsincludelowerbound.md)():
bool

public
[getTermsIncludeUpperBound](solrquery.gettermsincludeupperbound.md)():
bool

public [getTermsLimit](solrquery.gettermslimit.md)(): int

public [getTermsLowerBound](solrquery.gettermslowerbound.md)(): string

public [getTermsMaxCount](solrquery.gettermsmaxcount.md)(): int

public [getTermsMinCount](solrquery.gettermsmincount.md)(): int

public [getTermsPrefix](solrquery.gettermsprefix.md)(): string

public [getTermsReturnRaw](solrquery.gettermsreturnraw.md)(): bool

public [getTermsSort](solrquery.gettermssort.md)(): int

public [getTermsUpperBound](solrquery.gettermsupperbound.md)(): string

public [getTimeAllowed](solrquery.gettimeallowed.md)(): int

public
[removeExpandFilterQuery](solrquery.removeexpandfilterquery.md)(string
`$fq`): [SolrQuery](class.solrquery.md)

public
[removeExpandSortField](solrquery.removeexpandsortfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[removeFacetDateField](solrquery.removefacetdatefield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[removeFacetDateOther](solrquery.removefacetdateother.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [removeFacetField](solrquery.removefacetfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [removeFacetQuery](solrquery.removefacetquery.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public [removeField](solrquery.removefield.md)(string `$field`):
[SolrQuery](class.solrquery.md)

public [removeFilterQuery](solrquery.removefilterquery.md)(string
`$fq`): [SolrQuery](class.solrquery.md)

public
[removeHighlightField](solrquery.removehighlightfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [removeMltField](solrquery.removemltfield.md)(string `$field`):
[SolrQuery](class.solrquery.md)

public [removeMltQueryField](solrquery.removemltqueryfield.md)(string
`$queryField`): [SolrQuery](class.solrquery.md)

public [removeSortField](solrquery.removesortfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [removeStatsFacet](solrquery.removestatsfacet.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public [removeStatsField](solrquery.removestatsfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [setEchoHandler](solrquery.setechohandler.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [setEchoParams](solrquery.setechoparams.md)(string `$type`):
[SolrQuery](class.solrquery.md)

public [setExpand](solrquery.setexpand.md)(bool `$value`):
[SolrQuery](class.solrquery.md)

public [setExpandQuery](solrquery.setexpandquery.md)(string `$q`):
[SolrQuery](class.solrquery.md)

public [setExpandRows](solrquery.setexpandrows.md)(int `$value`):
[SolrQuery](class.solrquery.md)

public [setExplainOther](solrquery.setexplainother.md)(string
`$query`): [SolrQuery](class.solrquery.md)

public [setFacet](solrquery.setfacet.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [setFacetDateEnd](solrquery.setfacetdateend.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [setFacetDateGap](solrquery.setfacetdategap.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [setFacetDateHardEnd](solrquery.setfacetdatehardend.md)(bool
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [setFacetDateStart](solrquery.setfacetdatestart.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[setFacetEnumCacheMinDefaultFrequency](solrquery.setfacetenumcachemindefaultfrequency.md)(int
`$frequency`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [setFacetLimit](solrquery.setfacetlimit.md)(int `$limit`,
string `$field_override` u003d ?): [SolrQuery](class.solrquery.md)

public [setFacetMethod](solrquery.setfacetmethod.md)(string `$method`,
string `$field_override` u003d ?): [SolrQuery](class.solrquery.md)

public [setFacetMinCount](solrquery.setfacetmincount.md)(int
`$mincount`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [setFacetMissing](solrquery.setfacetmissing.md)(bool `$flag`,
string `$field_override` u003d ?): [SolrQuery](class.solrquery.md)

public [setFacetOffset](solrquery.setfacetoffset.md)(int `$offset`,
string `$field_override` u003d ?): [SolrQuery](class.solrquery.md)

public [setFacetPrefix](solrquery.setfacetprefix.md)(string `$prefix`,
string `$field_override` u003d ?): [SolrQuery](class.solrquery.md)

public [setFacetSort](solrquery.setfacetsort.md)(int `$facetSort`,
string `$field_override` u003d ?): [SolrQuery](class.solrquery.md)

public [setGroup](solrquery.setgroup.md)(bool `$value`):
[SolrQuery](class.solrquery.md)

public [setGroupCachePercent](solrquery.setgroupcachepercent.md)(int
`$percent`): [SolrQuery](class.solrquery.md)

public [setGroupFacet](solrquery.setgroupfacet.md)(bool `$value`):
[SolrQuery](class.solrquery.md)

public [setGroupFormat](solrquery.setgroupformat.md)(string `$value`):
[SolrQuery](class.solrquery.md)

public [setGroupLimit](solrquery.setgrouplimit.md)(int `$value`):
[SolrQuery](class.solrquery.md)

public [setGroupMain](solrquery.setgroupmain.md)(string `$value`):
[SolrQuery](class.solrquery.md)

public [setGroupNGroups](solrquery.setgroupngroups.md)(bool `$value`):
[SolrQuery](class.solrquery.md)

public [setGroupOffset](solrquery.setgroupoffset.md)(int `$value`):
[SolrQuery](class.solrquery.md)

public [setGroupTruncate](solrquery.setgrouptruncate.md)(bool
`$value`): [SolrQuery](class.solrquery.md)

public [setHighlight](solrquery.sethighlight.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public
[setHighlightAlternateField](solrquery.sethighlightalternatefield.md)(string
`$field`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[setHighlightFormatter](solrquery.sethighlightformatter.md)(string
`$formatter`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[setHighlightFragmenter](solrquery.sethighlightfragmenter.md)(string
`$fragmenter`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [setHighlightFragsize](solrquery.sethighlightfragsize.md)(int
`$size`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[setHighlightHighlightMultiTerm](solrquery.sethighlighthighlightmultiterm.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public
[setHighlightMaxAlternateFieldLength](solrquery.sethighlightmaxalternatefieldlength.md)(int
`$fieldLength`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[setHighlightMaxAnalyzedChars](solrquery.sethighlightmaxanalyzedchars.md)(int
`$value`): [SolrQuery](class.solrquery.md)

public
[setHighlightMergeContiguous](solrquery.sethighlightmergecontiguous.md)(bool
`$flag`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[setHighlightRegexMaxAnalyzedChars](solrquery.sethighlightregexmaxanalyzedchars.md)(int
`$maxAnalyzedChars`): [SolrQuery](class.solrquery.md)

public
[setHighlightRegexPattern](solrquery.sethighlightregexpattern.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public
[setHighlightRegexSlop](solrquery.sethighlightregexslop.md)(float
`$factor`): [SolrQuery](class.solrquery.md)

public
[setHighlightRequireFieldMatch](solrquery.sethighlightrequirefieldmatch.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public
[setHighlightSimplePost](solrquery.sethighlightsimplepost.md)(string
`$simplePost`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[setHighlightSimplePre](solrquery.sethighlightsimplepre.md)(string
`$simplePre`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [setHighlightSnippets](solrquery.sethighlightsnippets.md)(int
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[setHighlightUsePhraseHighlighter](solrquery.sethighlightusephrasehighlighter.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [setMlt](solrquery.setmlt.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [setMltBoost](solrquery.setmltboost.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [setMltCount](solrquery.setmltcount.md)(int `$count`):
[SolrQuery](class.solrquery.md)

public
[setMltMaxNumQueryTerms](solrquery.setmltmaxnumqueryterms.md)(int
`$value`): [SolrQuery](class.solrquery.md)

public [setMltMaxNumTokens](solrquery.setmltmaxnumtokens.md)(int
`$value`): [SolrQuery](class.solrquery.md)

public [setMltMaxWordLength](solrquery.setmltmaxwordlength.md)(int
`$maxWordLength`): [SolrQuery](class.solrquery.md)

public [setMltMinDocFrequency](solrquery.setmltmindocfrequency.md)(int
`$minDocFrequency`): [SolrQuery](class.solrquery.md)

public
[setMltMinTermFrequency](solrquery.setmltmintermfrequency.md)(int
`$minTermFrequency`): [SolrQuery](class.solrquery.md)

public [setMltMinWordLength](solrquery.setmltminwordlength.md)(int
`$minWordLength`): [SolrQuery](class.solrquery.md)

public [setOmitHeader](solrquery.setomitheader.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [setQuery](solrquery.setquery.md)(string `$query`):
[SolrQuery](class.solrquery.md)

public [setRows](solrquery.setrows.md)(int `$rows`):
[SolrQuery](class.solrquery.md)

public [setShowDebugInfo](solrquery.setshowdebuginfo.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [setStart](solrquery.setstart.md)(int `$start`):
[SolrQuery](class.solrquery.md)

public [setStats](solrquery.setstats.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [setTerms](solrquery.setterms.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [setTermsField](solrquery.settermsfield.md)(string
`$fieldname`): [SolrQuery](class.solrquery.md)

public
[setTermsIncludeLowerBound](solrquery.settermsincludelowerbound.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public
[setTermsIncludeUpperBound](solrquery.settermsincludeupperbound.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [setTermsLimit](solrquery.settermslimit.md)(int `$limit`):
[SolrQuery](class.solrquery.md)

public [setTermsLowerBound](solrquery.settermslowerbound.md)(string
`$lowerBound`): [SolrQuery](class.solrquery.md)

public [setTermsMaxCount](solrquery.settermsmaxcount.md)(int
`$frequency`): [SolrQuery](class.solrquery.md)

public [setTermsMinCount](solrquery.settermsmincount.md)(int
`$frequency`): [SolrQuery](class.solrquery.md)

public [setTermsPrefix](solrquery.settermsprefix.md)(string
`$prefix`): [SolrQuery](class.solrquery.md)

public [setTermsReturnRaw](solrquery.settermsreturnraw.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [setTermsSort](solrquery.settermssort.md)(int `$sortType`):
[SolrQuery](class.solrquery.md)

public [setTermsUpperBound](solrquery.settermsupperbound.md)(string
`$upperBound`): [SolrQuery](class.solrquery.md)

public [setTimeAllowed](solrquery.settimeallowed.md)(int
`$timeAllowed`): [SolrQuery](class.solrquery.md)

public [\_\_destruct](solrquery.destruct.md)()

/\* Наслідувані методи \*/

public
[SolrModifiableParams::\_\_construct](solrmodifiableparams.construct.md)()

public
[SolrModifiableParams::\_\_destruct](solrmodifiableparams.destruct.md)()

}

## Зумовлені константи

**`SolrQuery::ORDER_ASC`**
Використовується для вказівки того, що сортування має бути в порядку
зростання

**`SolrQuery::ORDER_DESC`**
Використовується для вказівки, що сортування має бути в порядку зменшення

**`SolrQuery::FACET_SORT_INDEX`**
Використовується для вказівки сортування фасету за індексом

**`SolrQuery::FACET_SORT_COUNT`**
Використовується для вказівки того, що фасет повинен сортувати за
кількості

**`SolrQuery::TERMS_SORT_INDEX`**
Використовується в TermsComponent

**`SolrQuery::TERMS_SORT_COUNT`**
Використовується в TermsComponent

## Зміст

- [SolrQuery::addExpandFilterQuery](solrquery.addexpandfilterquery.md)
— Перевизначає запит основного фільтра, визначає які
документи включити до основної групи
- [SolrQuery::addExpandSortField](solrquery.addexpandsortfield.md) -
Впорядковує документи у розширених групах (параметр expand.sort)
- [SolrQuery::addFacetDateField](solrquery.addfacetdatefield.md) -
Карти для facet.date
- [SolrQuery::addFacetDateOther](solrquery.addfacetdateother.md) -
Додає ще один параметр facet.date.other
- [SolrQuery::addFacetField](solrquery.addfacetfield.md) — Додає
інше поле до фасету
- [SolrQuery::addFacetQuery](solrquery.addfacetquery.md) — Додає
фасетний запит
- [SolrQuery::addField](solrquery.addfield.md) — Вказує, які
поля повертати в результаті
- [SolrQuery::addFilterQuery](solrquery.addfilterquery.md) -
Визначає запит фільтру
- [SolrQuery::addGroupField](solrquery.addgroupfield.md) — Додає
поле, яке використовуватиметься для групування результатів
- [SolrQuery::addGroupFunction](solrquery.addgroupfunction.md) -
Дозволяє групувати результати на основі унікальних значень
запиту функції (параметр group.func)
- [SolrQuery::addGroupQuery](solrquery.addgroupquery.md) — Дозволяє
групувати документи, що відповідають даному запиту
- [SolrQuery::addGroupSortField](solrquery.addgroupsortfield.md) -
Додає поле сортування групи (параметр group.sort)
- [SolrQuery::addHighlightField](solrquery.addhighlightfield.md) -
Відповідає hl.fl
- [SolrQuery::addMltField](solrquery.addmltfield.md) — Встановлює
поле для використання для подоби
- [SolrQuery::addMltQueryField](solrquery.addmltqueryfield.md) -
Відповідає mlt.qf
- [SolrQuery::addSortField](solrquery.addsortfield.md) -
Використовується для керування сортуванням результатів
- [SolrQuery::addStatsFacet](solrquery.addstatsfacet.md) -
Запитує повернення допоміжних результатів для значень у
даному фасеті
- [SolrQuery::addStatsField](solrquery.addstatsfield.md) -
Відповідає параметру stats.field
- [SolrQuery::collapse](solrquery.collapse.md) — Згортає набір
результатів до одного документа на групу
- [SolrQuery::\_\_construct](solrquery.construct.md) - Конструктор
- [SolrQuery::\_\_destruct](solrquery.destruct.md) - Деструктор
- [SolrQuery::getExpand](solrquery.getexpand.md) - Повертає true,
якщо увімкнено розширення групи
- [SolrQuery::getExpandFilterQueries](solrquery.getexpandfilterqueries.md)
— Повертає запити на розширений фільтр
- [SolrQuery::getExpandQuery](solrquery.getexpandquery.md) -
Повертає параметр розширеного запиту expand.q
- [SolrQuery::getExpandRows](solrquery.getexpandrows.md) -
Повертає кількість рядків, які відображаються в кожній групі
(expand.rows)
- [SolrQuery::getExpandSortFields](solrquery.getexpandsortfields.md)
- Повертає масив полів
- [SolrQuery::getFacet](solrquery.getfacet.md) — Повертає значення
параметра фасета
- [SolrQuery::getFacetDateEnd](solrquery.getfacetdateend.md) -
Повертає значення параметра facet.date.end
- [SolrQuery::getFacetDateFields](solrquery.getfacetdatefields.md) -
Повертає усі поля facet.date
- [SolrQuery::getFacetDateGap](solrquery.getfacetdategap.md) -
Повертає значення параметра facet.date.gap
- [SolrQuery::getFacetDateHardEnd](solrquery.getfacetdatehardend.md)
— Повертає значення параметра facet.date.hardend
- [SolrQuery::getFacetDateOther](solrquery.getfacetdateother.md) -
Повертає значення параметра facet.date.other
- [SolrQuery::getFacetDateStart](solrquery.getfacetdatestart.md) -
Повертає нижню межу першого діапазону дат для всіх аспектів
дати у цьому полі
- [SolrQuery::getFacetFields](solrquery.getfacetfields.md) -
Повертає всі поля фасетів
- [SolrQuery::getFacetLimit](solrquery.getfacetlimit.md) -
Повертає максимальну кількість лічильників обмежень, яка
має бути повернено для полів фасету
- [SolrQuery::getFacetMethod](solrquery.getfacetmethod.md) -
Повертає значення параметра facet.method
- [SolrQuery::getFacetMinCount](solrquery.getfacetmincount.md) -
Повертає мінімальну кількість полів аспектів, які мають
бути включені у відповідь
- [SolrQuery::getFacetMissing](solrquery.getfacetmissing.md) -
Повертає поточний стан facet.missing
- [SolrQuery::getFacetOffset](solrquery.getfacetoffset.md) -
Повертає зсув у списку обмежень, які будуть
використовуватися для посторінкової навігації
- [SolrQuery::getFacetPrefix](solrquery.getfacetprefix.md) -
Повертає префікс фасету
- [SolrQuery::getFacetQueries](solrquery.getfacetqueries.md) -
Повертає всі фасетні запити
- [SolrQuery::getFacetSort](solrquery.getfacetsort.md) — Повертає
тип сортування фасета
- [SolrQuery::getFields](solrquery.getfields.md) — Повертає список
полів, які будуть повернені у відповіді
- [SolrQuery::getFilterQueries](solrquery.getfilterqueries.md) -
Повертає масив запитів фільтра
- [SolrQuery::getGroup](solrquery.getgroup.md) - Повертає true,
якщо угруповання увімкнено
- [SolrQuery::getGroupCachePercent](solrquery.getgroupcachepercent.md)
— Повертає відсоткове значення групового кешу
- [SolrQuery::getGroupFacet](solrquery.getgroupfacet.md) -
Повертає значення параметра group.facet
- [SolrQuery::getGroupFields](solrquery.getgroupfields.md) -
Повертає групові поля (значення параметра group.field)
- [SolrQuery::getGroupFormat](solrquery.getgroupformat.md) -
Повертає значення group.format
- [SolrQuery::getGroupFunctions](solrquery.getgroupfunctions.md) -
Повертає групові функції (значення параметрів group.func)
- [SolrQuery::getGroupLimit](solrquery.getgrouplimit.md) -
Повертає значення group.limit
- [SolrQuery::getGroupMain](solrquery.getgroupmain.md) — Повертає
значення group.main
- [SolrQuery::getGroupNGroups](solrquery.getgroupngroups.md) -
Повертає значення group.ngroups
- [SolrQuery::getGroupOffset](solrquery.getgroupoffset.md) -
Повертає значення group.offset
- [SolrQuery::getGroupQueries](solrquery.getgroupqueries.md) -
Повертає всі параметри group.query
- [SolrQuery::getGroupSortFields](solrquery.getgroupsortfields.md) -
Повертає значення group.sort
- [SolrQuery::getGroupTruncate](solrquery.getgrouptruncate.md) -
Повертає значення group.truncate
- [SolrQuery::getHighlight](solrquery.gethighlight.md) — Повертає
стан параметра hl
- [SolrQuery::getHighlightAlternateField](solrquery.gethighlightalternatefield.md)
— Повертає виділене поле для використання як резервну
копії або за замовчуванням
- [SolrQuery::getHighlightFields](solrquery.gethighlightfields.md) -
Повертає всі поля, для яких Solr має генерувати виділені
фрагменти
- [SolrQuery::getHighlightFormatter](solrquery.gethighlightformatter.md)
— Повертає засіб форматування для виділеного висновку
- [SolrQuery::getHighlightFragmenter](solrquery.gethighlightfragmenter.md)
— Повертає генератор фрагментів тексту для виділеного тексту
- [SolrQuery::getHighlightFragsize](solrquery.gethighlightfragsize.md)
— Повертає кількість символів фрагментів для виділення
- [SolrQuery::getHighlightHighlightMultiTerm](solrquery.gethighlighthighlightmultiterm.md)
— Повертає, чи потрібно вмикати виділення для запитів
діапазону/підстановочних знаків/нечітких/префіксів
- [SolrQuery::getHighlightMaxAlternateFieldLength](solrquery.gethighlightmaxalternatefieldlength.md)
— Повертає максимальну кількість символів поля для повернення
- [SolrQuery::getHighlightMaxAnalyzedChars](solrquery.gethighlightmaxanalyzedchars.md)
— Повертає максимальну кількість символів у документі для пошуку
відповідних фрагментів
- [SolrQuery::getHighlightMergeContiguous](solrquery.gethighlightmergecontiguous.md)
— Повертає, чи повернути суміжні фрагменти в один фрагмент
- [SolrQuery::getHighlightRegexMaxAnalyzedChars](solrquery.gethighlightregexmaxanalyzedchars.md)
— Повертає максимальну кількість символів із поля при
використання фрагментатора регулярного вираження
- [SolrQuery::getHighlightRegexPattern](solrquery.gethighlightregexpattern.md)
— Повертає регулярний вираз для фрагментації
- [SolrQuery::getHighlightRegexSlop](solrquery.gethighlightregexslop.md)
— Повертає коефіцієнт відхилення від ідеального розміру фрагмента
- [SolrQuery::getHighlightRequireFieldMatch](solrquery.gethighlightrequirefieldmatch.md)
— Повертає, якщо поле буде виділено лише у тому випадку, якщо
запит відповідає цьому конкретному полю
- [SolrQuery::getHighlightSimplePost](solrquery.gethighlightsimplepost.md)
— Повертає текст, який з'являється після виділення.
- [SolrQuery::getHighlightSimplePre](solrquery.gethighlightsimplepre.md)
— Повертає текст, який з'являється перед виділеним виразом
- [SolrQuery::getHighlightSnippets](solrquery.gethighlightsnippets.md)
— Повертає максимальну кількість виділених фрагментів
створення для кожного поля
- [SolrQuery::getHighlightUsePhraseHighlighter](solrquery.gethighlightusephrasehighlighter.md)
— Повертає стан параметра hl.usePhraseHighlighter
- [SolrQuery::getMlt](solrquery.getmlt.md) — Повертає, чи повинні
бути включені результати MoreLikeThis
- [SolrQuery::getMltBoost](solrquery.getmltboost.md) — Повертає,
буде запит посилено релевантністю виразу, що цікавить
- [SolrQuery::getMltCount](solrquery.getmltcount.md) - Повертає
кількість схожих документів, що повертаються для кожного результату
- [SolrQuery::getMltFields](solrquery.getmltfields.md) — Повертає
всі поля, які потрібно використовувати для порівняння
- [SolrQuery::getMltMaxNumQueryTerms](solrquery.getmltmaxnumqueryterms.md)
— Повертає максимальну кількість умов запиту, які будуть
включені до будь-якого згенерованого запиту
- [SolrQuery::getMltMaxNumTokens](solrquery.getmltmaxnumtokens.md) -
Повертає максимальну кількість токенів для аналізу у кожному полі
документа, який не зберігається за допомогою TermVector
- [SolrQuery::getMltMaxWordLength](solrquery.getmltmaxwordlength.md)
— Повертає максимальну довжину слова, вище за яку будуть слова
ігноруватися
- [SolrQuery::getMltMinDocFrequency](solrquery.getmltmindocfrequency.md)
— Повертає граничну частоту, з якої ігноруватимуться
слова, яких немає, принаймні, у такій кількості документів
- [SolrQuery::getMltMinTermFrequency](solrquery.getmltmintermfrequency.md)
— Повертає частоту, нижче за яку вирази ігноруватимуться в
вихідному документі
- [SolrQuery::getMltMinWordLength](solrquery.getmltminwordlength.md)
— Повертає мінімальну довжину слова, нижче за яку слова будуть
ігноруватися
- [SolrQuery::getMltQueryFields](solrquery.getmltqueryfields.md) -
Повертає поля запиту та їх підвищення
- [SolrQuery::getQuery](solrquery.getquery.md) - Повертає основний
запит
- [SolrQuery::getRows](solrquery.getrows.md) - Повертає
максимальна кількість документів
- [SolrQuery::getSortFields](solrquery.getsortfields.md) -
Повертає всі поля сортування
- [SolrQuery::getStart](solrquery.getstart.md) — Повертає зсув
у повному наборі результатів
- [SolrQuery::getStats](solrquery.getstats.md) — Повертає,
чи включена статистика
- [SolrQuery::getStatsFacets](solrquery.getstatsfacets.md) -
Повертає всі фасети статистики, встановлені
- [SolrQuery::getStatsFields](solrquery.getstatsfields.md) -
Повертає усі поля статистики
- [SolrQuery::getTerms](solrquery.getterms.md) — Повертає, увімкнено
чи TermsComponent
- [SolrQuery::getTermsField](solrquery.gettermsfield.md) -
Повертає поле, з якого витягуються вирази
- [SolrQuery::getTermsIncludeLowerBound](solrquery.gettermsincludelowerbound.md)
— Повертає, чи потрібно включати вираз нижньої межі до набору
результатів
- [SolrQuery::getTermsIncludeUpperBound](solrquery.gettermsincludeupperbound.md)
— Повертає, чи потрібно включати вираз верхньої межі до набору
результатів
- [SolrQuery::getTermsLimit](solrquery.gettermslimit.md) -
Повертає максимальну кількість виразів, які має повернути
Solr
- [SolrQuery::getTermsLowerBound](solrquery.gettermslowerbound.md) -
Повертає вираз для початку
- [SolrQuery::getTermsMaxCount](solrquery.gettermsmaxcount.md) -
Повертає максимальну частоту документа
- [SolrQuery::getTermsMinCount](solrquery.gettermsmincount.md) -
Повертає мінімальну частоту повернення документів для включення
- [SolrQuery::getTermsPrefix](solrquery.gettermsprefix.md) -
Повертає префікс виразу
- [SolrQuery::getTermsReturnRaw](solrquery.gettermsreturnraw.md) -
Чи слід повертати необроблені символи
- [SolrQuery::getTermsSort](solrquery.gettermssort.md) — Повертає
ціле число, що вказує, як сортуються вирази
- [SolrQuery::getTermsUpperBound](solrquery.gettermsupperbound.md) -
Повертає вираз для зупинки
- [SolrQuery::getTimeAllowed](solrquery.gettimeallowed.md) -
Повертає час у мілісекундах, дозволений для завершення запиту
- [SolrQuery::removeExpandFilterQuery](solrquery.removeexpandfilterquery.md)
— Видаляє запит на розширений фільтр
- [SolrQuery::removeExpandSortField](solrquery.removeexpandsortfield.md)
— Видаляє розширене поле сортування за допомогою параметра expand.sort
- [SolrQuery::removeFacetDateField](solrquery.removefacetdatefield.md)
— Видаляє одне з полів дати фасету
- [SolrQuery::removeFacetDateOther](solrquery.removefacetdateother.md)
— Видалення одного з параметрів facet.date.other
- [SolrQuery::removeFacetField](solrquery.removefacetfield.md) -
Видаляє один із параметрів facet.date
- [SolrQuery::removeFacetQuery](solrquery.removefacetquery.md) -
Видаляє один із параметрів facet.query
- [SolrQuery::removeField](solrquery.removefield.md) — Видаляє поле
зі списку полів
- [SolrQuery::removeFilterQuery](solrquery.removefilterquery.md) -
Видаляє запит фільтру
- [SolrQuery::removeHighlightField](solrquery.removehighlightfield.md)
— Видаляє одне з полів, що використовуються для виділення
- [SolrQuery::removeMltField](solrquery.removemltfield.md) — Видаляє
одне з полів більшеLikeThis
- [SolrQuery::removeMltQueryField](solrquery.removemltqueryfield.md)
- Видаляє одне з полів запиту moreLikeThis
- [SolrQuery::removeSortField](solrquery.removesortfield.md) -
Видаляє одне з полів сортування
- [SolrQuery::removeStatsFacet](solrquery.removestatsfacet.md) -
Видаляє один із параметрів stats.facet
- [SolrQuery::removeStatsField](solrquery.removestatsfield.md) -
Видаляє один із параметрів stats.field
- [SolrQuery::setEchoHandler](solrquery.setechohandler.md) -
Перемикає параметр echoHandler
- [SolrQuery::setEchoParams](solrquery.setechoparams.md) -
Визначає, які параметри включати у відповідь
- [SolrQuery::setExpand](solrquery.setexpand.md) -
Вмикає/вимикає компонент Expand
- [SolrQuery::setExpandQuery](solrquery.setexpandquery.md) -
Встановлює параметр expand.q
- [SolrQuery::setExpandRows](solrquery.setexpandrows.md) -
Встановлює кількість рядків для відображення у кожній групі
(expand.rows). Типово 5
- [SolrQuery::setExplainOther](solrquery.setexplainother.md) -
Встановлює загальний параметр запиту explainOther
- [SolrQuery::setFacet](solrquery.setfacet.md) — Відповідає
параметр фасета. Включає або вимикає фасетування
- [SolrQuery::setFacetDateEnd](solrquery.setfacetdateend.md) -
Відповідає facet.date.end
- [SolrQuery::setFacetDateGap](solrquery.setfacetdategap.md) -
Відповідає facet.date.gap
- [SolrQuery::setFacetDateHardEnd](solrquery.setfacetdatehardend.md)
— Відповідає facet.date.hardend
- [SolrQuery::setFacetDateStart](solrquery.setfacetdatestart.md) -
Відповідає facet.date.start
- [SolrQuery::setFacetEnumCacheMinDefaultFrequency](solrquery.setfacetenumcachemindefaultfrequency.md)
— Встановлює мінімальну частоту документа, що використовується для
визначення кількості виразів
- [SolrQuery::setFacetLimit](solrquery.setfacetlimit.md) -
Відповідає facet.limit
- [SolrQuery::setFacetMethod](solrquery.setfacetmethod.md) — Задає
тип алгоритму, який слід використовувати під час фасетування поля
- [SolrQuery::setFacetMinCount](solrquery.setfacetmincount.md) -
Відповідає facet.mincount
- [SolrQuery::setFacetMissing](solrquery.setfacetmissing.md) -
Відповідає facet.missing
- [SolrQuery::setFacetOffset](solrquery.setfacetoffset.md) -
Встановлює переміщення до списку обмежень для розбивки на сторінки
- [SolrQuery::setFacetPrefix](solrquery.setfacetprefix.md) -
Визначає рядковий префікс, за допомогою якого обмежуються
вирази, на яких виконується фасет
- [SolrQuery::setFacetSort](solrquery.setfacetsort.md) — Визначає
порядок обмежень поля фасету
- [SolrQuery::setGroup](solrquery.setgroup.md) — Вмикає/вимикає
групування результатів (параметр group)
- [SolrQuery::setGroupCachePercent](solrquery.setgroupcachepercent.md)
— Включає кешування для угруповання результатів
- [SolrQuery::setGroupFacet](solrquery.setgroupfacet.md) -
Встановлює параметр group.facet
- [SolrQuery::setGroupFormat](solrquery.setgroupformat.md) -
Встановлює формат групи, структуру результату (параметр
group.format)
- [SolrQuery::setGroupLimit](solrquery.setgrouplimit.md) — Задає
кількість результатів, що повертаються для кожної групи. Значення
сервера за промовчанням - 1
- [SolrQuery::setGroupMain](solrquery.setgroupmain.md) — Якщо true,
результат першої команди угруповання полів використовується як
основного списку результатів у відповіді з використанням
group.formatu003dsimple
- [SolrQuery::setGroupNGroups](solrquery.setgroupngroups.md) — Якщо
true, Solr включає в результати кількість груп, які
відповідають запиту
- [SolrQuery::setGroupOffset](solrquery.setgroupoffset.md) -
Встановлює параметр group.offset
- [SolrQuery::setGroupTruncate](solrquery.setgrouptruncate.md) -
Якщо true, підрахунок фасетів базується на найбільш релевантному документі
кожної групи, що відповідає запиту
- [SolrQuery::setHighlight](solrquery.sethighlight.md) — Включає
або відключає виділення
- [SolrQuery::setHighlightAlternateField](solrquery.sethighlightalternatefield.md)
— Задає поле резервного копіювання для використання
- [SolrQuery::setHighlightFormatter](solrquery.sethighlightformatter.md)
— Задає засіб форматування для виведення виділення
- [SolrQuery::setHighlightFragmenter](solrquery.sethighlightfragmenter.md)
— Встановлює генератор текстових фрагментів для виділення
тексту
- [SolrQuery::setHighlightFragsize](solrquery.sethighlightfragsize.md)
— Розмір фрагментів, які слід враховувати під час виділення
- [SolrQuery::setHighlightHighlightMultiTerm](solrquery.sethighlighthighlightmultiterm.md)
— Використовувати SpanScorer для виділення виразів
- [SolrQuery::setHighlightMaxAlternateFieldLength](solrquery.sethighlightmaxalternatefieldlength.md)
— Встановлює максимальну кількість символів поля для повернення
- [SolrQuery::setHighlightMaxAnalyzedChars](solrquery.sethighlightmaxanalyzedchars.md)
— Задає кількість символів у документі для пошуку відповідних
фрагментів
- [SolrQuery::setHighlightMergeContiguous](solrquery.sethighlightmergecontiguous.md)
- Чи згортати суміжні фрагменти в один фрагмент
- [SolrQuery::setHighlightRegexMaxAnalyzedChars](solrquery.sethighlightregexmaxanalyzedchars.md)
— Задає максимальну кількість символів для аналізу
- [SolrQuery::setHighlightRegexPattern](solrquery.sethighlightregexpattern.md)
— Задає регулярний вираз фрагментації
- [SolrQuery::setHighlightRegexSlop](solrquery.sethighlightregexslop.md)
- Встановлює коефіцієнт, на який фрагментатор регулярно
вирази може відхилитися від ідеального розміру фрагмента
- [SolrQuery::setHighlightRequireFieldMatch](solrquery.sethighlightrequirefieldmatch.md)
- Вимагати зіставлення полів при виділенні
- [SolrQuery::setHighlightSimplePost](solrquery.sethighlightsimplepost.md)
— Встановлює текст, який з'являється після виділення
вирази
- [SolrQuery::setHighlightSimplePre](solrquery.sethighlightsimplepre.md)
— Встановлює текст, який з'являється перед виділенням
виразом
- [SolrQuery::setHighlightSnippets](solrquery.sethighlightsnippets.md)
— Встановлює максимальну кількість виділених фрагментів
створення для кожного поля
- [SolrQuery::setHighlightUsePhraseHighlighter](solrquery.sethighlightusephrasehighlighter.md)
— Чи слід виділяти вирази лише тоді, коли вони з'являються
у фразі запиту
- [SolrQuery::setMlt](solrquery.setmlt.md) — Вмикає або вимикає
moreLikeThis
- [SolrQuery::setMltBoost](solrquery.setmltboost.md) -
Встановлює, чи буде запит посилено релевантністю цікавого
вирази
- [SolrQuery::setMltCount](solrquery.setmltcount.md) - Встановлює
кількість схожих документів, що повертаються для кожного результату
- [SolrQuery::setMltMaxNumQueryTerms](solrquery.setmltmaxnumqueryterms.md)
— Встановлює максимальну кількість виразів запиту, що включаються.
- [SolrQuery::setMltMaxNumTokens](solrquery.setmltmaxnumtokens.md) -
Задає максимальну кількість токенів для аналізу
- [SolrQuery::setMltMaxWordLength](solrquery.setmltmaxwordlength.md)
- Встановлює максимальну довжину слова
- [SolrQuery::setMltMinDocFrequency](solrquery.setmltmindocfrequency.md)
- Встановлює частоту mltMinDoc
- [SolrQuery::setMltMinTermFrequency](solrquery.setmltmintermfrequency.md)
— Встановлює частоту, нижче за яку вирази ігноруватимуться
у вихідній документації
- [SolrQuery::setMltMinWordLength](solrquery.setmltminwordlength.md)
- Встановлює мінімальну довжину слова
- [SolrQuery::setOmitHeader](solrquery.setomitheader.md) - Виключає
заголовок з результатів, що повертаються
- [SolrQuery::setQuery](solrquery.setquery.md) - Встановлює
пошуковий запит
- [SolrQuery::setRows](solrquery.setrows.md) — Визначає максимальне
кількість рядків, що повертаються в результаті
- [SolrQuery::setShowDebugInfo](solrquery.setshowdebuginfo.md) -
Прапор для відображення налагоджувальної інформації
- [SolrQuery::setStart](solrquery.setstart.md) — Визначає
кількість рядків, що пропускаються
- [SolrQuery::setStats](solrquery.setstats.md) — Включає або
відключає компонент Stats
- [SolrQuery::setTerms](solrquery.setterms.md) — Включає або
відключає TermsComponent
- [SolrQuery::setTermsField](solrquery.settermsfield.md) -
Встановлює ім'я поля, з якого потрібно отримати вираз
- [SolrQuery::setTermsIncludeLowerBound](solrquery.settermsincludelowerbound.md)
— Включає нижню межу вираження у набір результатів
- [SolrQuery::setTermsIncludeUpperBound](solrquery.settermsincludeupperbound.md)
— Включає верхню межу вираження у набір результатів
- [SolrQuery::setTermsLimit](solrquery.settermslimit.md) -
Встановлює максимальну кількість виразів, що повертаються.
- [SolrQuery::setTermsLowerBound](solrquery.settermslowerbound.md) -
Визначає вираз, із якого треба починати
- [SolrQuery::setTermsMaxCount](solrquery.settermsmaxcount.md) -
Встановлює максимальну частоту документів
- [SolrQuery::setTermsMinCount](solrquery.settermsmincount.md) -
Встановлює мінімальну частоту документів
- [SolrQuery::setTermsPrefix](solrquery.settermsprefix.md) -
Обмежує збіги виразами, що починаються з префіксу
- [SolrQuery::setTermsReturnRaw](solrquery.settermsreturnraw.md) -
Повернути необроблені символи проіндексованого виразу
- [SolrQuery::setTermsSort](solrquery.settermssort.md) — Визначає,
як сортувати повернені умови
- [SolrQuery::setTermsUpperBound](solrquery.settermsupperbound.md) -
Встановлює умову для зупинки
- [SolrQuery::setTimeAllowed](solrquery.settimeallowed.md) — Час,
відведене на пошук
