# Erzya consonant statistics

Эрзянь келень зярыя статистикат. 


## Erzya Cyrillic word-initial 1 consonant + 1 vowel
Валонь ушодомань комбинация вейке аморавикс-согласной путомс вейке моравикс-гласной

Нолдазь тевс Джаконь теевть эрзянь келень анализаторонь валксонь форматне, малав сядо ведьгемень тёжа валт.

The Cyrillic system utilizes combinatory digraphs
Булгаронь буквасо - кирилликасо

*$ cat src/fst/lexicon.tmp.lexc |egrep '^[^ \n:]*:[а-яёА-ЯЁ]'|egrep -v '^(!|\+|\@|:|L| )'|perl -wpne 's/^(..)[^\n]*/$1/g;'|egrep -v '(\+|\-)$'|sort -f|uniq -ci |l*

*$ cat src/fst/lexicon.tmp.lexc |egrep '^[^ \n:]*:[а-яёА-ЯЁ]'|egrep -v '^(!|\+|\@|:|L| )'|perl -wpne 's/^(.)[^\n]*/$1/g;'|egrep -v '(\+|\-)$'|sort -f|uniq -ci |l*

|Initial consonant|а|ы|у|э|о|я|и|ю|е|ё|
|---------|---------|--------|-------|--------|--------|--------|--------|--------|--------|--------|
|м|3123|113|750|15|1399|104|1223|13|1472|10|
|б|3032|204|1860|21|1941|14|595|24|2405|16|
|п|2482|99|985|9|3973|146|1268|1|2367|10|
|в|2523|499|65|0|1485|115|1241|1|2148|10|
|ф|475|1|121|9|376|0|524|2|569|14|
|н|1659|27|436|6|690|14|619|42|2298|6|
|д|682|166|795|14|1257|75|617|92|1290|80|
|т|1282|150|874|4|1345|150|598|329|1082|71|
|з|2052|94|183|61|278|76|295|55|369|7|
|с|2044|378|1277|275|1416|211|1165|258|1797|201|
|р|1612|235|574|10|958|146|282|28|990|4|
|л|1525|239|601|4|876|148|892|254|1310|89|
|ж|313|1|249|1|158|0|436|4|438|13|
|ш|1143|10|519|1|192|3|560|1|687|14|
|ч|833|0|704|7|372|2|605|1|1433|20|
|ц|112|172|40|3|30|208|553|94|333|125|
|щ|40|0|47|4|8|0|48|1|233|23|
|г|1939|25|1026|7|1893|3|519|18|748|10|
|к|4149|83|2666|9|4925|19|1436|18|1222|13|
|х|602|0|174|14|542|1|165|1|72|4|
|й|0|2|0|0|25|0|0|0|1|1|
|0|9668|3|2446|1877|4133|1657|3121|730|1837|367|
|---------|---------|--------|-------|--------|--------|--------|--------|--------|--------|--------|

## Erzya phonematic word-initial 1 consonant + 1 vowel
IPA-нь коряс

This may be misleading
Тесэ кармить улеме кона-кона манявкст.

|Initial consonant|a|ɪ|u|ɛ|o|ʲa|i|ʲu|e|ʲo|
|---------|---------|--------|-------|--------|--------|--------|--------|--------|--------|--------|
|m|3123|113|750|15|1399|104|1223|13|1472|10|
|b|3032|204|1860|21|1941|14|595|24|2405|16|
|p|2482|99|985|9|3973|146|1268|1|2367|10|
|v|2523|499|65|0|1485|115|1241|1|2148|10|
|f|475|1|121|9|376|0|524|2|569|14|
|n|1659|27|436|6|690|0|0|0|0|0|
|ń|14|0|42|0|6|0|619|0|2298|0|
|d|682|166|795|14|1257|0|0|0|0|0|
|d́|75|0|92|0|80|0|617|0|1290|0|
|t|1282|150|874|4|1345|0|0|0|0|0|
|t́|150|0|329|0|71|0|598|0|1082|0|
|z|2052|94|183|61|278|0|0|0|0|0|
|ź|76|0|55|0|7|0|295|0|369|0|
|s|2044|378|1277|275|1416|0|0|0|0|0|
|ś|211|0|258|0|201|0|1165|0|1797|0|
|c|112|172|40|3|30|0|0|0|0|0|
|ć|208|0|94|0|125|0|553|0|333|0|
|r|1612|235|574|10|958|0|0|0|0|0|
|ŕ|146|0|28|0|4|0|282|0|990|0|
|l|1525|239|601|4|876|0|0|0|0|0|
|ĺ|148|0|254|0|89|0|892|0|1310|0|
|ž|313|437|249|439|158|0|0|4|0|13|
|š|1143|570|519|688|192|3|0|1|0|14|
|č|833|605|704|1440|372|2|0|1|0|20|
|g|1939|25|1026|7|1893|3|519|18|748|10|
|k|4149|83|2666|9|4925|19|1436|18|1222|13|
|x|602|0|174|14|542|1|165|1|72|4|
|j|1657|2|730|0|392|0|0|0|1838|1|
|0|9668|3|2446|0|4133|1657|3121|730|1877|367|
|---------|---------|--------|-------|--------|--------|--------|--------|--------|--------|--------|
|щ|40|0|48|0|0|0|48|0|237|31|
|---------|---------|--------|-------|--------|--------|--------|--------|--------|--------|--------|


Кона-кона таркатнесэ эряволь полавтомс ловома валтнэсэ. Тевенть эряви поладомс. Эрзянь кельсэ улить валт, конат
ушодовить вейкеде ламо аморавикс тешткесэ-буквасо: псака, кшы, кстый, кшни...