# Adnominal Person in the Morphological System of Erzya

<style>
 pgNo {
  color: #b30000;
}
</style>

<pgNo>II</pgNo>
<pgNo>III</pgNo>
SUOMALAIS-UGRILAISEN SEURAN TOIMITUKSIA
MÉMOIRES DE LA SOCIÉTÉ FINNO-OUGRIENNE
❋

261 ❋

Jack Rueter

Adnominal Person in the Morphological System of Erzya

SOCIÉTÉ FINNO-OUGRIENNE
HELSINKI 2010

<pgNo>IV</pgNo>
Jack Rueter: Adnominal Person in the Morphological System of Erzya
Suomalais-Ugrilaisen Seuran Toimituksia
261
Mémoires de la Société Finno-Ougrienne
Layout Jack Rueter
Copyright © 2010 Suomalais-Ugrilainen Seura —
Société Finno-Ougrienne — Finno-Ugrian Society
& Jack Rueter

Orders — Tilaukset
Tiedekirja
Kirkkokatu 14
FI-00170 Helsinki
www.tiedekirja.fi
tiedekirja@tsv.fi
FAX +358 9 635 017
ISBN Print 978-952-5667-23-3
ISBN Online 978-952-5667-24-0
ISSN 0355-0230

Vammalan Kirjapaino Oy
Sastamala 2010

<pgNo>V</pgNo>
Abstract
This dissertation is a synchronic description of adnominal person in the highly synthetic
morphological system of Erzya as attested in extensive Erzya-language written-text corpora consisting of nearly 140 publications with over 4.5 million words and over 285,000
unique lexical items.
Insight for this description have been obtained from several source grammars in
German, Russian, Erzya, Finnish, Estonian and Hungarian, as well as bounteous discussions in the understanding of the language with native speakers and grammarians
1993–2010.
Introductory information includes the discussion of the status of Erzya as a language, the enumeration of phonemes generally used in the transliteration of texts and
an in-depth description of adnominal morphology. The reader is then made aware of
typological and Erzya-specific work in the study of adnominal-type person.
Methods of description draw upon the prerequisite information required in the development of a two-level morphological analyzer, as can be obtained in the typological
description of allomorphic variation in the target language. Indication of original author
or dialect background is considered important in the attestation of linguistic phenomena,
such that variation might be plotted for a synchronic description of the language.
The phonological description includes the establishment of a 6-vowel, 29-consonant phoneme system for use in the transliteration of annotated texts, i.e. two phonemes
more than are generally recognized, and numerous rules governing allophonic variation
in the language.
Erzya adnominal morphology is demonstrated to have a three-way split in stem
types and a three-layer system of non-derivative affixation. The adnominal-affixation
layers are broken into (a) declension (the categories of case, number and deictic marking); (b) nominal conjugation (non-verb grammatical and oblique-case items can be
conjugated), and (c) clitic marking. Each layer is given statistical detail with regard to
concatenability.
Finally, individual subsections are dedicated to the matters of: possessive declension compatibility in the distinction of sublexica; genitive and dative-case paradigmatic
defectivity in the possessive declension, where it is demonstrated to be parametrically
diverse, and secondary declension, a proposed typology “modifiers without nouns”, as
compatible with adnominal person.

<pgNo>VI</pgNo>
Acknowledgements
Research and documentation of a language has many requirements, which are best met
with the help of others. In addition to the previous work done by grammarians, teachers,
speakers, writers and lexicographers in the language of study, there are the individuals: mentors, teachers, acquaintances, etc. who have all had an undeniable impact on
the formulation and articulation of the various stages in the process, as well as the end
result. I wish to express my warm thanks to the people who helped me achieve my goal:
Pirkko Suihkonen who originally got me involve in work with text corpora, and has seen
to it that I continue and improve my skills by keeping involved; Kimmo Koskenniemi,
Miikka Silfverberg, Trond Trosterud and Tommi Pirinen for our discussions and work
with finite-state technology; Dmitry Cygankin, Aleksandr Feoktistov, Alho Alhoniemi,
Nina Aduškina, Nina Agafonova, Mikhail Mosin and Mikhail Bryzhinski for the endless hours consumed in contemplation of Erzya morphology, possession and the language in general; Seppo Kittilä for discussions over early morning coffee, lent books and
thoughts on possession; The external examiners, Niina Nujanzina-Aasmäe and Daniel
M. Abondolo who helped me improve the quality of this dissertation by offering wellmerited suggestions, and Anna Kurvinen for ideas on how to improve the layout of this
book. And I would like to express a special thanks to my professor, Fred Karlsson, for
his support in all phases of the writing.
I am deeply indebted to the Finno-Ugrian Society, in Helsinki, for their support in
my studies and work with the language, as well as the publication of this treatise in one
of their series.
I would like to thank the Finnish Academy of Sciences, who through the Eino
Jutikkala Fund, made my work possible for the entire year of 2009.
I would also like to express my gratitude to the Rector of the University of Helsinki for the Dissertation Completion Grant, which made my work possible March—May
2010.
Finally, I would like to thank my family, especially my wife, Olga, whose nativelanguage and linguistics background in combination with unlimited support and understanding have allowed me the freedom to complete this treatise of the Erzya language.

<pgNo>VII</pgNo>
Contents
Abstract
Acknowledgements
List of Hierarchies and Tables
Abbreviations

V
VI
IX
XV

0. Purpose
0.1. General outline

1
2

1. Introduction
1.1. Introduction to Erzya
1.2. Introduction to person
1.3. Research in the Erzya category of adnominal person
1.3.1. Background
1.3.2. The category of adnominal person in contemporary grammars of Erzya

3
3
27
35
35

Methodology and Corpora
2.1. Corpora
2.2. Phonological phenomena of modern Erzya
2.3. Morpho-semantic evaluation of stems and affixes
2.4. Compatibility of case and
adnominal-person morphology
2.5. The semi-automatic parser
2.6. Sublexicon-case alignments and variation
in adnominal person
2.7. Defectivity in the genitive slot of the possessive declension
2.8. Secondary declension

45
46
48
49

Phonology
3.1. Phonemes in Erzya transliteration
3.2. Phonetic phenomena behind allomorphic variation
3.2.1. Vowel harmony
3.2.2. Palatal harmony
3.2.3. Devoicing
3.2.4. Voicing
3.2.5. Loss of affix-initial V
3.2.6. Stem-final vowel loss

57
57
62
62
64
66
67
67
68

2.

3.

38

49
51
54
54
55

<pgNo>VIII</pgNo>

4. Morphology
69
4.1. Nominal-type word-stem morphology
69
4.2. Affixes
74
4.2.1. Case
74
4.2.1.1. Core cases
75
4.2.1.2. Local cases
84
4.2.1.3. Attributive Cases
94
4.2.2. Number
104
4.2.3. Deictic markers
108
4.2.3.1. Possessor-index markers
109
4.2.3.1.1. First person
112
4.2.3.1.2. Second person
116
4.2.3.1.3. Third person
118
4.2.3.2. Definite markers
127
4.2.4. Nominal conjugation markers
129
4.2.5. The clitic -Gak
132
4.3. Adnominal-type person in parts of speech
134
4.3.1. Possessive declension compatibility
for distinguishing parts of speech
136
4.3.2. Attested parts of speech and sublexica
149
4.3.3. Drawing conclusions
157
4.4. Paradigm defectivity in Erzya possessor indexing
164
4.4.1. Background
164
4.4.2. A dialect attesting [±NUMBER] and [±KIN] parameters
166
4.4.3. Distinct common-noun referents
indefinite genitive forms in literature
168
4.4.4. Orkino
169
4.4.5. Recent grammatical presentation of the possessive declension 171
4.5. Adnominal syntax and secondary declension
174
4.5.1. Background
174
4.5.2. Compatibility of ZERO marking and adnominal-person
188
4.5.3. Compatibility of possessive-declension modifiers
with ZERO marking strategy
191
4.5.4. Personal and reflexive/intensive pronouns
and secondary declension
193

5. Conclusions

Erzya Source Literature (Corpora)
Reference Bibliography

207
213
225

<pgNo>IX</pgNo>
List of Hierarchies and Tables
Hierarchies

Hierarchy 1.1

The inalienability hierarchy

33

Hierarchy 1.2

Saliency hierarchies of accessibility

34

Hierarchy 1.3

The accessibility marking scale

34

Table 1.1

Statistics on headword entries in
Mordwinisches Wörterbuch I–IV

7

Table 1.2

Major consonant allophones in the Erzya language

15

Table 1.3

Major vowel allophones in the Erzya language

16

Table 1.4

Indefinite declension table for complex NP heads
kudo ‘house; home’

17

Tables

Table 1.5

Nominative-case forms for the Erzya kudo ‘home;
house; room’ and t́ev ‘task; thing’ as a possessum

18

Table 1.6

Varied parts of speech with adnominal
cross-referential person marking

18

Table 1.7

Indefinite declension cases attested in modifier
vs. complement position

22

Table 1.8

Indicative present paradigm of the Erzya verb palams ‘to kiss’ 23

Table 1.9

Single-word elliptic question with object pronoun
in subject function

28

Table 1.10

Single-word elliptic answer with object pronoun
in subject function

29

Table 1.11

Dependent vs. independent possessive pronoun

29

Table 1.12

The indicative present conjugation of the verb to be
as attested in some languages of Europe

30

Table 1.13

Adnominal possessive constructions as attested in
some languages of Europe ‘my house, our house, etc.’

31

Table 1.14

Possessor indices in Erzya as can be derived
from Gabelentz (1839: 253–257)

36

Table 1.15

Possessor indices in Erzya deriving
from Paasonen (1953: 04-05)

37

<pgNo>X</pgNo>

Table 1.16

Neutral personal pronoun paradigm
in the five most frequent cases

Table 1.17

Cross-referential adnominal person markers in the nominative 39

Table 1.18

Kin terms as possessa of singular possessors
in the nominative, genitive and dative cases
according to Aduškina (2000: 97)

40

Possessa other than kin terms in the first person
singular possessive declension according to
Aduškina (2000: 97)

40

Table 1.20

Possessa other than kin terms in the first person
singular possessive

41

Table 1.21

Personal pronouns in genitive case used as modifiers

41

Table 1.22

Genitive-case reﬂexive/intensive personal pronouns
singular with varied concatenation strategies

42

Table 2.1

The MINORITY CORPUS

48

Table 2.2

Ten most frequent word forms in the Erzya
majority corpus of 4.5 million words

49

Table 2.3

Derivation of nominative-case predicate-person patterns

50

Table 2.4

Example of an analyzed text fragment

52

Table 2.5

Examples of items requiring manual disambiguation
in this treatise

54

Table 3.1

Vowel phonemes attested in the first syllable

57

Table 3.2

Consonants: 29 consonant phonemes

58

Table 3.3

Attestation of phonetic alveolar nasal
before velar plosive in Erzya

58

Table 3.4

Pronunciation of Russian ы by Erzya speakers
unfamiliar with Russian

59

Table 3.5

Attestation of unrounded high central and
front vowels in Erzya

60

Table 3.6

Word-initial single alveolars followed by vowels
in unique word forms of the Erzya corpora

60

Table 3.7

Vowel phonemes attested in Erzya word stems (6)

61

Table 3.8

Consonant phonemes attested in Erzya (29)

61

Table 3.9

Sets used in the description of Erzya vowel harmony

62

Table 3.10

Range of vowel harmony in Erzya affixes

63

Table 1.19

39

<pgNo>XI</pgNo>
LIST OF TABLES AND HIERARCHIES


Table 3.11

Sets used in the description of Erzya palatal harmony

64

Table 3.12

Range of palatal harmony in Erzya affixes

65

Table 3.13

Devoicing of affixal onset plosives following
voiceless consonants and plosives

67

Table 4.1

Nominal stem types in Erzya

72

Table 4.2

Stem variation in NOUNS2 nominal stem type

73

Table 4.3

Nominative forms from the definite and indefinite declensions 76

Table 4.4

Nominative forms from the possessive declensions

77

Table 4.5

Genitive forms from the definite and indefinite declensions

78

Table 4.6

Possessor indexing for the genitive parse
of non-kin and kin terms in Erzya

78

Table 4.7

Dative forms from the definite and indefinite declensions

81

Table 4.8

Dative forms for the defective possessive declension

82

Table 4.9

Ablative forms from the definite and indefinite declensions

84

Table 4.10

Inessive forms from the definite and indefinite declensions

85

Table 4.11

Elative forms from the definite and indefinite declensions

86

Table 4.12

Illative forms from the definite and indefinite declensions

88

Table 4.13

Possessor indexing for the illative case

88

Table 4.14

Lative forms from the definite and indefinite declensions

89

Table 4.15

Prolative forms from the definite and indefinite declensions

90

Table 4.16

Locative forms from the definite and indefinite declensions

92

Table 4.17

Temporalis forms from the indefinite declension

93

Table 4.18

Translative forms from the definite and indefinite declensions

94

Table 4.19

Comparative forms from the definite and indefinite declensions 95

Table 4.20

Ablative forms from the definite and indefinite declensions

96

Table 4.21

Comitative forms from the definite and indefinite declensions

97

Table 4.22

Indefinite declension table

98

Table 4.23

Definite plural declension table

99

Table 4.24

Definite singular declension table

100

Table 4.25a

Possessive declension for nominative, genitive,
dative and illative possessa

101

Table 4.25b

Possessive declension for genitive possessa

102

<pgNo>XII</pgNo>

Table 4.25c

Possessive declension for dative possessa
with no distinction in number of possessa

103

Table 4.25d

Possessive declension for illative possessa
with no distinction in number for possessa

103

Table 4.26

Cases attested with 1SG adnominal marking
with the word kudo ‘house; home’

109

Table 4.27

Cases attested with 3SG adnominal marking
with the word kudo ‘house; home’

110

Table 4.28

Cases attested with 3SG adnominal marking
with the word śeĺme ‘eye’

111

Table 4.29

Possessor indexing for a 1SG parse

113

Table 4.30

Possessor indexing for a 1PL parse

114

Table 4.31

Possessor indexing for a 1SG parse

116

Table 4.32

Possessor indexing for a 2PL parse

117

Table 4.33

Possessor indexing for a 3SG parse

119

Table 4.34

Possessor indexing for a 3PL parse

119

Table 4.35

Possessive suffixes used in all cases except for the dative

123

Table 4.36

Possessive indices on dative-case possessa-targets

125

Table 4.37

Possessive suffixes genitive in kin terms

126

Table 4.38

Variation between linking-vowel strategies in modern
and presently dialect (old literary) declension of nouns

127

Table 4.39

Definite declension markers

128

Table 4.40

Attestation of case in four declension arrays

129

Table 4.41

Nominal conjugation markers with attestation
for various targets

130

Table 4.42

Attestation of nominal conjugation in four declension arrays

131

Table 4.43

-Gak clitic

132

Table 4.44

Morphematic representation of the *-Gak* enclitic

133

Table 4.45

Reﬂexive stem declension with independent case
forms whereas the nominative-case form is suppletive
and the *eś* form is a dependent absolutive form

139

Table 4.46

Minimalizing quantifier *śkamo-* and the comitative case in possessive declension

147

<pgNo>XIII</pgNo>
LIST OF TABLES AND HIERARCHIES

XIII

Table 4.47

Universal pronoun veśeme ‘all’ in attested case slots
of the possessive paradigms

154

Table 4.48

Selective interrogative/relative pronoun with partitive
reference associated with plural person indexing

154

Table 4.49a

Dative-case personal pronouns, reﬂexive/intensive
pronouns and reﬂexive/intensive stems (Majority corpus)

155

Table 4.49b

Dative-case personal pronouns, reﬂexive/intensive
pronouns and reﬂexive/intensive stems (Minority corpus )

156

Table 4.50

Personal pronouns attested for abessive case
in possessive declension

156

Table 4.51

Reﬂexive personal pronouns attested for abessive
case in possessive declension

157

Table 4.52

Noun-focus interrogative pronouns
in the possessive declension

157

Table 4.53a

Possessive declension illative laŋgs ‘onto’ Pop+Poss

158

Table 4.53b

Possessive declension illative laŋgs ‘onto’ Genitive
Pronoun + Pop+Poss

158

Table 4.54a

Possessive declension illative ejs ‘into; up to’ Pop+Poss

159

Table 4.54b

Possessive declension illative ejs ‘into; up to’
Genitive Pronoun + Pop+Poss

159

Table 4.55a

Possessive declension illative tarka ‘place’ Noun+Poss

159

Table 4.55b

Possessive declension illative tarka ‘place’
Genitive Pronoun + Noun+Poss

159

Table 4.56a

Possessive declension illative sams ‘to arrive’ Noun+Poss

160

Table 4.56b

Possessive declension illative sams ‘to arrive’
Genitive Pronoun + Noun+Poss

160

Table 4.57a

Possessive declension illative či͔ ‘day; sun’ Noun+Poss

161

Table 4.58a

Possessive declension illative źepe ‘pocket’ Noun+Poss

161

Table 4.58b

Possessive declension illative źepe ‘pocket’
Genitive Pronoun + Noun+Poss

161

Table 4.59

Possessive declension attestation of discernible sublexica

162

Table 4.60

Nizhnep’yanski dialect forms for kudo ‘house’, skal
‘cow’ and t́ejt́eŕ ‘daughter’ possessa
in the nominative and genitive of the possessive
declension (preliminary)

166

<pgNo>XIV</pgNo>

Table 4.61

The 2SG possessor and kin terms in Orkino
according to Šaxmatovʺ

169

Table 4.62

The 1SG possessor and kin terms in Orkino
according to Šaxmatovʺ

170

Table 4.63a

Possessor indexing on the possessum (possessor =
moń ‘1SG’, and possessa in vaĺma ‘window’, veĺe ‘village’)

171

Table 4.63b

Possessor indexing on the possessum (possessor = toń
‘2sg’, and possessa in vakan ‘bowl’, paŕ ‘barrel’)

171

Table 4.63c

Possessor indexing on the possessum (possessor =
sonze ‘3sg’, and possessa in ĺom ‘meadow’, ĺem ‘name’)

172

Table 4.64

Distinction for grammatical number of possessed
possessa apparent only in 1SG marking

172

Table 4.65

Genitive-case personal pronouns with SOD secondary
nominative forms or according to Evsevʹev the
possessive pronouns in the definite declension

183

Table 4.66

Secondary declension

185

Table 4.67

Personal pronouns in genitive used as modifiers

193

Table 4.68

Genitive-form (neutral) personal pronouns
with definite declensions

194

Table 4.69

Genitive-form reﬂexive/intensive personal pronouns
with definite declensions

196

Table 4.70

Genitive-case personal pronouns with distal
demonstrative pronoun marking

198

Table 4.71

Singular genitive-case reﬂexive/intensive pronouns
with zero-marking strategy in all persons

199

Table 4.72

Genitive-form reﬂexive/intensive pronouns
with SOD marking strategy

200

Table 4.73

Genitive-case reﬂexive/intensive stems with zero-marking

202

Table 4.74

Genitive-case reﬂexive/intensive stems with SOD marking

203

Table 4.75

Genitive-form personal pronouns in fused head
constructions “STEM-REFL+POSS.GEN+DEM-DIST+CX(+DEF)”

204

Table 4.76

Attestation of two modifier-without-noun marking
strategies for three sets of pronouns

204

Table 4.77

Genitive forms of personal pronouns, reﬂexive/
intensive pronouns and reﬂexive/intensive stems

205

Table 4.78

Mordva 3SG pronouns á la Zaicz (2006: 197)

206

<pgNo>XV</pgNo>
## Abbreviations

1P
1PL
1SG
2P
2PL
2SG
3P
3PL
3SG
A
ABE
ABL
ABS
ADV
APPROX
ARG1
ARG2
ASSOC
ATTR
AUX
CARD

CDX
CLT
COLL
COM
COMP
CONJ
CONTR
CONNEG

Cx
DAT
DECL
DEF
DEM
DES
DIM
DIST
DISTR

DX

First Person
First Person Plural
First Person Singular
Second Person
Second Person Plural
Second Person Singular
Third Person
Third Person Plural
Third Person Singular
Adjective
Abessive
Ablative
Absolutive
Adverb
Approximative
Primary Argument
Secondary Argument
Associative
Attribute
Auxiliary
Cardinal
Non-concatenable case
and deictic marker
Clitic
Collective
Comitative
Comparative
Conjunction
Contrastive
Connegative
Case Marker
Dative
Declension
Definite
Demonstrative
Desiderative
Diminutive
Distal
Distributive
Definiteness Marker

ELA
GEN
ILL
IMP
IND
INDEF
INE
INF
INTER
INTERJ
IRR
LAT
LOC
LV
MWN
N
NA
NEG
NOM
NB
NP
N-STAND
NUM

Nx
O
OBL
OVS
P
PERS
PL
POP
POR
POS
POSS
PRED
PRES
PRETI
PRETII
PRO-ADV

Elative
Genitive
Illative
Imperative
Indicative
Indefinite
Inessive
Non-finite in *-Om*
Interrogative
Interjection
Irrelevant
Lative
Locative
Linking Vowel
Modifier without noun
Noun
Not attested, Not applicable
Negation
Nominative
Number
Noun Phrase
Non-Standard language
Numeral
Number Marker
Object
Oblique
Object verb subject
word order
Person
Personal
Plural
Adposition
Possessor
Part of speech
Possessor Index
Predication Marker
Present
Preterit I
Preterit II
Pro-adverb

<pgNo>XVI</pgNo>

PRO-DET	Pro-determiner
Prohibitive
Prolative
Pronoun
Pro-noun
Pro-quantifier
Proximal
Proper noun
Particle
Past participle, Gerund
in *-Oź*
Possessum/possessa
Quantifier
Reﬂexive/Intensive
Relative
Subject
Singular

PROH
PROL
PRON
PRO-N
PRO-Q
PROX
PRP
PRT
PTC-OZ
PUM
Q
REFL
REL
S
SG

SOD
SOV
STAND
SVO
TEMP
TRNSL

Tx
V
VI
VT

wo
X

Speaker-oriented
demonstrative
Subject object verb word
order
Standard language
Subject verb object word
order
Temporalis
Translative
Tense Marker
Verb
Intransitive verb
Transitive verb
Word Order
Unspecified agent argument
in object conjugation

<pgNo>1</pgNo>
## 0. Purpose

This study is dedicated to morphological adnominal person in Erzya with an outline of
language-internal understanding of the phenomenon cluster as attested in present-day
grammars and native writings, all presented, where possible, to the broadest readership
– the English-reading world – who even today know little of the Erzya people and their
language.
The Author sets the following goals:
– Provide an ample introduction to the Erzya language with consistently annotated,
contextually sufficient examples from the literary or spoken language.
– Provide an adjusted and attested phonological account of the Erzya language compatible
with the range and manifestation of adnominal-person marking. (See specifics in (3.)
Phonology)
– Provide a morphological presentation of adnominal person within the scope of cooccurring inﬂexional phenomena, i.e. adnominal-person morphology as described in
Erzya grammars. (See specifics in 4. MORPHOLOGY)
– Provide attestation and statistics for adnominal and adnominal-type person, both
morphological and lexical, in the Erzya noun phrase, quantifiers, adpositional phrase
and non-finite constructions in *-Om*.
– Investigate controversy in grammatical descriptions and phenomena attested in the
research corpora, for example, the bearing of kin-term (high-animacy two-argument)
semantics on the defectivity of the genitive paradigm in the possessive declension. (See
specifics in (4.4.) PARADIGM DEFECTIVITY IN ERZYA POSSESSOR INDEXING.)
– Provide an attested account of contextual secondary declension with which to resolve
controversies in the distinction between reﬂexive/intensive and genitive-form personal
pronouns with secondary declension. (See specifics in (4.5.) ADNOMINAL SYNTAX AND
DISTINGUISHING PERSONAL PRONOUN PARADIGMS.)
– Provide data for an Erzya contribution to the typology of non-predication function
person: The role of adnominal and adnominal-type person in Erzya adnominal,
adpositional and non-finite syntax.

<pgNo>2</pgNo>

### 0.1. General outline
This treatise of adnominal person in the morphological system of Erzya approaches
the problem from a morphological, compositional point of departure. Chapter 2 will
establish a database to serve as the empirical basis of the study and source of word
forms. It will provide a detailed outline of matters, such as morphological analysis,
declension types, clause-constituent phrase syntax, as well as motivations and means
of attestation for person. Chapter 3 will provide a qualification of phonemes used in
transcription and phonological phenomena pertinent to the construction of an automatic
two-level morphological parser, such as the one used in the analysis of a portion of the
corpora. Sections (4.1.–4.2.) will give a description of the morphological composition
of declinable words, and a description of the semantic notions involved in the division
of Erzya stems for establishing declension classes pertinent to the study of adnominaltype person. Section (4.3.) will establish sublexica within the Erzya-language range
of adnominal-person marking and provide data on compatibility of adnominal-person
marking with case and part of speech. Section (4.4.) will deal with paradigm defectivity
in Erzya possessor indexing (the genitive and dative slots of the possessive declension).
And Section (4.5.) will address adnominal syntax and contextual secondary declension.
Chapter 5 will then provide conclusions pertinent to the role of adnominal-person
marking in the morphology of Erzya.

On transcription
The transcription used in this treatise of Erzya adheres to a relatively phonematic rendering
of the Uralic Phonetic Alphabet. The liminal consonants phonetically represented as ḱ,
ḿ, ṕ... are rendered here as k, m, p... Although a high percentage of voice and palatal
harmony can be predicted in the native Erzya vocabulary, it must be stressed that we are
mainly dealing with the written registers of a living language, i.e. by dropping all word
forms beginning with b, d, z, ž and g, typically non-native, we would lose one seventh
of the entire text. Hence alveolars are mechanically rendered with palatal marking even
where palatalization is predictable from context; voiced consonants are given as such
even when voicing is contextually conditioned as in the Erzya word tovźuro <= tov
‘ﬂour; dough’ + śuro ‘grain, cereal’. Likewise, the unrounded high central vowel i͔ and
the velar nasal ŋ are are mechanically rendered in all positions while the unrounded mid
central vowel e͔, which lacks attestation as a phoneme, is not (see Chapter 3).

<pgNo>3</pgNo>
## 1. Introduction

### 1.1. Introduction to Erzya
Location
The Erzya [eŕźa] are one of the two prominent “Mordvin” nations settled in what today is
known as the Volga Region. The exonym and rather pejorative term “Mordvin” is used
in the majority Russian language and by Russian authorities when making reference to
representatives of the Erzya, Moksha [mokšə], Shoksha [šokšə], Teryukhan [t́eŕuxan]
and Qaratay [mukšə] peoples. Due to this ambiguity in the language of documentation,
the individual groups have seldom been consistently distinguished in statistics and census questionnaires. For most practical purposes, the Qaratay, as we know them today,
are a relatively integrated portion of the Tatar-speaking community and the Teryukhan,
likewise, a relatively integrated portion of the Russian-speaking community, whereas
the Erzya, Shoksha and Moksha all boast native speakers of their respective indigenous
languages. According to historic documentation, the conglomerate term “Mordvin” has
been used in reference to populations in Russia over the past few centuries that are scattered from near Nizhny Novgorod (Erzya: Obran oš) 56˚20' N, in the north; to Novy
Uzensk 50˚27' N, in the south; Spassk, Penza Oblast 43˚11' E, in the west, and Zlatoust'
59˚40' E, in the east (see Sarv 2002). Somewhat extended western boundaries indicated
by Kuussaari (1935: Kartta VII, XII) identify settlement activities in the vicinity of Tula
(37˚37' E), and probable traditional hunting range as far west as Bryansk (34˚22' E).
Thus indigenous settlements of the Erzya, Shoksha and Moksha speakers can be found
on the territories of the Republic of Mordovia and the adjacent oblasts and republics
of Nizhny-Novgorod, Chuvashia, Ulyanovsk, Tatarstan, Bashkortostan, Samara, Orenburg, Penza, Saratov and Tambov with newer, scattered settlements and populations in
regions of the former Russian Empire and Soviet Union, as far east as Kamchatka, and
beyond the borders of today's Russia in Armenia, Azerbaijan, Belarus, Estonia, Kazakhstan, Kyrgyzstan, Latvia, Lithuania, Turkmenistan, the Ukraine and Uzbekistan (see
<http://www.ethnologue.com/show_country.asp?name=RUE>).
Statistically, there has been a marked fall in the Erzya population. Based on data
from the latest All-Russian census (2002) the “Mordvin” population is recorded as 0.84
million. If we adhere to the commonly held belief that the Erzya comprise two-thirds
of that total, or a generous half a million people, we will arrive at the equivalent of
a native-speakers’ figure estimated on the basis of the “Mordvin” population count of
1,153,516 in the 1989 census (cf. Lallukka 1992; Bartens 1999: 10; Estill 2004: 21). A
slightly higher figure is provided by the Ethnologue report online with a world-wide
Erzya population of 696,630. On the basis of these figures, we can hypothesize drastic
mortality rates, language change, or change in social climate, which would be cause for <pgNo>4</pgNo> non-disclosure of ethnic background. The Erzya population is scattered, such that, while
the Republic of Mordovia attests to a relative density of Erzya settlements, they only
comprise about one sixth of the Republic population; the Republic is the home of less
than thirty percent of the population subsumed by the term “Mordvin”, and that population makes up only one third of the Republic population. In the Mordovian Republic, the
Moksha population makes up approximately one half of the so-called Mordvin population while the Erzya and Shoksha make up the other half – the Shoksha are generally
dealt with as speakers of a Western (in the western part of the Republic, cf. Ethnologue)
Erzya dialect that has been exposed to extensive Moksha inﬂuence, although there are
certain aspects of the Shoksha idiom and culture that might be used to distinguish them
as equals with the Erzya and Moksha (D. Cygankin, p.c., n.d.).
As a minority in a republic in close proximity to the nation's capital, the Erzya
have continually been faced with assimilative pressure. With the end of the 1980s a
strengthening of cultural and linguistic awareness in the Baltic States was observed,
which might be seen as symptomatic of what was happening in the Soviet Union as
a whole, especially in the non-central regions of what is now the Russian Federation.
Thus it comes as no surprise that ethnic awareness from the Erzya aspect was a grassroots affair stemming from outside the center-oriented Republic of Mordovia, in fact, it
came from places such as Buguruslan, where cultural and lingual plurality are accepted,
everyday elements of life (V. Tingayev, p.c., 2002). From the beginning of the new millennium, however, centralization and a call for unity have become ever more prominent;
where before (1989 census) people were proud to disclose their ethnic origins, now
(2002 census) only people actively aware of an ethnic background other than that of
the default Russian tend to be counted as non-Russians. In the Republic of Mordovia
indication of ethnic background is no longer given in the internal registration document
“passport”, which contains information on employment, marital status, domicile, etc.;
Tatarstan, for example, still provides information on ethnic background.
When my first son was born in the year 2000, in Saransk, Mordovia, there were
two doctors present – one a Russian and the other an Erzya. The Russian asked me what
nationality I intended to write down for my new-born son, to which, I replied that I understood the policy was to get away from making specific mention of ethnic background.
The Russian doctor persisted, however, that indeed you can have ethnic background
registered, and after a pause he added: Write “Russian”. I calmly responded by stating
that I did not understand his logic; to me the child from an Erzya mother on one side
and a father of U.S.A. citizenship from a multi-ethnic background on the other could
only be registered as “Tatar” (The Russian Federation is the home of approximately
5.35 million Tatars). This response, naturally, took the one doctor like a bucket of cold
water, whereas the other was humored by both the twist of the story and his colleague's
reaction. But, perhaps, there was some logic to the choice of Tatar or the closely related
Bashkir, namely, they embody a formidable presence opposing a monolithic, centraloriented Russian Federation and, where there are two self-aware cultural-lingual groups,
e.g. Bashkortostan, third-tier ethnic groups are more tolerated. Erzya-speaking settlements <pgNo>5</pgNo> can be located throughout the Volga Region, but officially they might be difficult
to locate or enumerate; in the majority Russian language and most census statistics there
have nearly always been figures for the pejorative, cumulative Mordvin while the autonyms Erzya, Moksha, Shoksha, Teryukhan and Qaratay receive little mention.
Traditionally, the “Mordvins” have gained their wealth in the forests and fertile
fields of the southerly forest zone. They are known for their honey production, furs and
falconry, but economic growth has been achieved through conversion to agriculture,
which, unfortunately for them, made them desirable targets for taxation and conquest.
In the year 1221, their western neighbor Yuri Vsevolodovich, prince of Vladimir-Suzdal,
decided to erect a fortress on their territory at what is now known as Nizhny-Novgorod
(Erzya: Obran oš). Eight years later, in 1229, the Erzyans under prince Purgas attempted
to retake this land, but to no avail; in 1236 the “Mordvin” homelands along with the
Volga-Bulgar State all fell to the Mongol-Tatars and remained a dependency until 1552
(further literature: Bryzhinski, M. 1983: Porovt; Abramov 1988: Purgaz). While the
Bulgars and Tatars both regarded the “Mordvins” as a source of taxes and therefore left
them to maintain their own social structures and settlements in the deep forests, the same
cannot be said of their Russian neighbors (cf. Sarv 2002). Thus the Erzya can be plotted in the mutual periphery of Slavic and Turkic cultures, Islamic, Christian and perhaps
Hindu religions; and their traditional settlements span parts of the traditional Russian
dialect break-down of the easternmost central and southern variants.
The ethnonym Erzya [eŕźa ~ æŕźæ] has been aligned by some with the people “Arisa” mentioned in the Khazar King Joseph's letter, dated 961 (cf. Klima
1995; Cygankin 2000: 15; Official site of the Chuvash Republic: <http://gov.cap.ru/
hierarhy_cap.asp?page=./86/3743/1046/1050>). This was one of the many people who
paid tribute to the Khazar King, but, as Cygankin notes, no etymology has been given
for the word. The exonym Mordvin, however, can be traced back to Mordens, one of
the people defeated by Ermanaricus ([Jordanes' Getica 551: XXIII, 116]). This word,
however, only has a mutual cognate candidate in the Erzya and Moksha languages in
the form miŕd́e ‘husband, male spouse’ (cf. Zaicz 1998, 2006), whereas dialects of the
Moksha language also attest to compound word forms where the final element is mor,
e.g. ćora mor ‘man (lit. singular of man-folk)’, ava mor ‘woman (lit. singular of womanfolk)’ (cf. Bryzhinski 1991: Эрямодо надобия 134).

The Erzya language
The Erzya language is a Volga-Finnic language of the Uralic language family, with
closely related kindred in Moksha and the geographically closely situated but more distantly related Hill and Meadow Mari languages. Due to the sparse distribution of Erzya
and Moksha settlements, there are few settlements where the two languages are used as
a means of mutual communication, and such places are invariably beyond the reaches
of the Republic of Mordovia (D. Cygankin, p.c., 1997). According to popular belief,
the Moksha language attests a high percentage of Turkic loanwords not found in the <pgNo>6</pgNo> Erzya language, and the Erzya language has a higher percentage of Russian loanwords.
While the former claim might readily be observed in texts, e.g. Paasonen (SUSA XV,2
1897: 1–64) indicates 193 glosses of Turkic origin from which nearly 60% are attested
in Erzya and over 85% in Moksha, the question of Slavic versus Russian-language inﬂuence and interaction with first-nation languages from a diachronic perspective has yet to
be posed in the study of Erzya lexica, e.g. kravat ‘bed (Russian dialect variation in the
palatalization of final “t”)’ (cf. Râbov 1931); kopjor ‘dill (Russian ukrop, Bulgarian
kopur, Czech kopr)’, and koridor ~ kalidor ‘corridor (variation in the representation
of the liquids l and r also attested in the majority Russian language and other minority
languages such as Komi (cf. Kalima1910: 59))’.
Since contact between the Erzya and Moksha languages is relatively limited, and
their native speakers might resort to using a third, standardized language (Russian) for
mutual communication with speakers of the other language, the concept of people speaking in “Mordvin” is close to that of a Dane and a Swede speaking at each other in their
own respective languages, and having someone claim that they are speaking Skandinaviska. But there actually are at least two schools of thought on the question of how
many “Mordvin” languages there are, and the development of a mutually comprehensible Erzya-Moksha literary language is an interesting concept that has appeared and reappeared. Although the portions of the Bible have been translated into Erzya and Moksha,
a tradition commenced at the beginning of the nineteenth century, plans were made in
the 1920s (Bartens 1999: 22) to establish a mutual literary language for Erzya and Moksha alike. By 1928 two subcommittees had been established, one Erzya and the other
Moksha, who inadvertently retained two literary languages, the Moksha language based
on the Krasnoslobodsk dialect, and the Erzya language based on the dialect spoken in
Kozlovka, i.e. the Kozlovka of today's Atyashevo raion in the Republic of Mordovia.
Initial documentation of this Erzya dialect was provided by the Russian linguist Bubrix,
a student of Šaxmatovʺ, in 1930, and an extensive grammar including reference to this
language variant was contributed by the ethnographer, historian, enlightener, Evsevʹev,
a native Erzya and Chuvash speaker, originally from Malye Karmaly, Chuvashia, in
1928–29. In the 1930s, however, the Kozlovka-Mokshalei (Central-dialect) base of the
language was broadened to include more features from the Insar or Western dialect,
which meant development away from the Alatyr' or Northwestern dialect, familiar in
the Erzya literature of the nineteenth century (see more on dialects below). In the late
1980s, when, at the end of the Soviet Era, new efforts were made to translate the Bible,
an attempt was made to develop a mutual vocabulary for the two languages to be used in
translations of Biblical texts, but once again, the languages were seen to be too distantly
related for such an undertaking, a mutual vocabulary would only estrange the readership
(N. Aduškina, p.c., 1995).
Presently there are measures being taken in Saransk, the capital of Mordovia, to
manufacture an artificial “Mordvin” language. This initiative is not one made by the
Writers' Union, nor is it tailored by native school teachers, rather it is one of people
who do not themselves actively contribute to the literatures of either language, but do <pgNo>7</pgNo> have a strong sway in the inﬂuence of publication finances. They profess an attitude
aligned with the thinkings of a young Feoktistov (1960: 63–82), who alluded to an extremely high percentage of mutual comprehensible language material in the Erzya novel
“Lavginov” by Kolomasov, and the sympathies of some linguistic thinking in Hungary.
Keresztes (e.g. 1990, 1995: 47–55) outlines a closeness between the languages of Erzya
and Moksha, but he offers little concrete data to verify this closeness. Gheno (1995:
57–61) makes reference to Keresztes and indicates a 54.04% of mutual vocabulary in
a quantity of 1062 glosses. This percentage, might be promising for planned language
development over 200 years (the Norwegian policy for a mutual “samnorsk” was abandoned December 13, 2002), but a glance at the mutual vocabularies of Erzya and Moksha indicated by larger dictionaries of the languages appear to show much less cohesion
between them, see table 1.1.

<table>
<caption><b>Table 1.1</b> Statistics on headword entries in Mordwinisches Wörterbuch I–IV</caption>
<tr>
<td rowspan="2">
Entries
</td>
<td align="center" colspan="2">
Erzya
</td>
<td align="center" colspan="2">
Moksha
</td>
<td align="center" colspan="3">
Mutual
</td>
</tr>
<tr>
<td>
Figures
</td>
<td>
%
</td>
<td>
Figures
</td>
<td>
%
</td>
<td>
Gross total
</td>
<td>
Figures
</td>
<td>
%
</td>
</tr>
<tr>
<td>
Headwords
</td>
<td>
22,620
</td>
<td>
61.6%
</td>
<td>
18,271
</td>
<td>
49.8%
</td>
<td>
36,689
</td>
<td>
4,202
</td>
<td>
11.5%
</td>
</tr>
<tr>
<td>
First headwords of root articles
</td>
<td>
4,470
</td>
<td>
64.3%
</td>
<td>
2,911
</td>
<td>
41.9%
</td>
<td>
6,955
</td>
<td>
456
</td>
<td>
6.5%
</td>
</tr>
<tr>
<td>
Mutual roots
</td>
<td>
5,100
</td>
<td>
73.3%
</td>
<td>
4,592
</td>
<td>
66%
</td>
<td>
6,955
</td>
<td>
2916
</td>
<td>
41.9%
</td>
</tr>
<tr>
<td>
Mutual roots less Russian cognates
</td>
<td>
3,011
</td>
<td>
69.4%
</td>
<td>
3,108
</td>
<td>
71.6%
</td>
<td>
4,338
</td>
<td>
1,781
</td>
<td>
41%
</td>
</tr>
<tr>
<td>
Mutual roots less Tatar cognates
</td>
<td>
5,021
</td>
<td>
75.4%
</td>
<td>
4,485
</td>
<td>
67.3%
</td>
<td>
6,659
</td>
<td>
2,847
</td>
<td>
42.8%
</td>
</tr>
<tr>
<td>
Mutual roots without Russian or Tatar cognates
</td>
<td>
2,934
</td>
<td>
69.5%
</td>
<td>
3,003
</td>
<td>
71.1%
</td>
<td>
4,223
</td>
<td>
1,714
</td>
<td>
40.6%
</td>
</tr>
<tr>
<td>
Minimal mutual
roots ratio to root
total
</td>
<td>
2,934
</td>
<td>
42.2%
</td>
<td>
3,003
</td>
<td>
43.2%
</td>
<td>
4,223
</td>
<td>
1,714
</td>
<td>
24.6%
</td>
</tr>
</table>


The Mordwinisches Wörterbuch (a dialect dictionary of the Erzya and Moksha languages (1990–1996), based on the extensive collections of Heikki Paasonen; henceforth
“MW”) contains over 2700 pages of dialect representations from the two languages in
approximately 36,689 articles of which about 61.6% exhibit Erzya attestations of word
forms and 49.8% exhibit Moksha attestations. Since the word articles are written with
etymological cohesion between the two languages, we should expect a high percentage
of mutual intelligibility, but only about 11.5% of the word articles contain attestation
from both languages. Inspection for alignment of first headwords in stem entries indicates only 6.5% of mutual vocabulary, but if we assume mutually comprehensible morphology for the two languages and count root articles attesting headword articles from
both languages, we will arrive at a mutual vocabulary of only 41.9%. In reducing the <pgNo>8</pgNo> number of roots by the number of Russian cognates we find a nearly one percent drop
in mutual vocabulary, whereas an analogous removal of Tatar cognates renders a one
percent rise. Finally, if we remove all roots with either Russian or Tatar cognates the
mutual vocabulary drops to 40.6%, which, in fact, only represents 24.6% of the 6,955
roots attested in the dictionary.
More recently both maximalist and minimalist approaches have been offered for
attestation of mutual vocabulary. Luutonen, Mosin and Shchankina (Reverse Dictionary
of Mordvin, 2004) have produced a list of over 75,000 words from the two languages,
but partially due to the rigid reverse-alphabetizing a mutual lexicon of only about 9%
is attested, and this is only on the morphological and part-of-speech levels, i.e. no specific semantics are involved. Polâkov & Rueter (2004) published a brief morphology
and three-language dictionary Erzya-Moksha-Russian Moksha-Erzya-Russian, but the
dictionary has only about 3500 entries with a focus on maximalizing the representation
of mutually comprehensible vocabulary. Needless to say, the cohesion of the two languages is difficult to attest on the basis of lexical research conducted thus far.

Erzya dialects
According to Cygankin (2000b: 20–21) research in Erzya dialectology is extremely
disproportionate. At present it may be stated that extensive work has been conducted in
the research of Erzya-language forms spoken in the Republic of Mordovia. Outside of
the Republic, however, the language and its variants have not received that same attention. In fact, at present there are no publications on the dialects spoken in the Ulyanovsk,
Kuibyshevsk or Orenburg Oblasts, where a considerable portion of the Erzya-speaking
population is settled. Hence, comparative linguistics dealing with the development of
a literary language and its representation of phenomena attestable in the greater Erzya
language is profoundly limited.
The division of Erzya dialects according to Bubrix distinguishes five basic dialect types. The dialects can be presented as: (1) the Central or Kozlovka-Mokshalei
dialects; (2) the Western or Insar dialects; (3) the Northwestern or Alatyr' dialects; (4) the
Southeastern or Sura dialects, and (5) the mixed or Drakino-Shoksha dialects (see Feoktistov 1990: XXXIV-XLII; Cygankin 2000b: 19–40; Ermuškin 2004: 5–10, as well as
individual treatises: Davydov 1963: 118–233 (Bol'she-Ignatovski dialect – Alatyr'); Markov 1961: 7–99 (Prialatyrski dialect – Alatyr'); Nadʹkin 1968: 3–198 (Nizhnep'yanski –
Alatyr') ; Obʺedkin 1961: 100–196 (Staro-Turdakovski dialect – Insar); Cygankin 1961:
294–395 (Shugurova dialect – Sura); Âkuškin 1961: 197–293 (Drakinski dialect –
Drakino-Shoksha)). The problem is that this set of dialect types is little more than a
depiction of the phonetic characteristics of the various Erzya dialects on the territory of
the Republic of Mordovia, where, as stated above, only about one third of the Erzya are
settled, and it has little to offer for the task of differentiating between the local dialects of
the Erzya language on the basis of morphology (cf. Cygankin 2000: 21).

<pgNo>9</pgNo>

Erzya-language in publications and its development
as a literary language
Over a period of about 300 years, the Erzya language has developed from its debut in
glosses, appearance in translated texts, and first-nation folk literature to original fiction and non-fiction of the twentieth and twenty-first centuries. The “Mordvin” word
lists of Nicolaes Witsen ([1692] 1705), which, from a modern perspective, might be
recognized as representing mainly dialects of the Moksha language (see Feoktistov &
Saarinen 2005: 13), mark the beginning of an era for recognizable words in print. The
1700s see additional publications with more vocabularies: Strahlenberg (1730), Damaskin (1785) and Pallas (1787-89), to mention a few. The first publication with long
connected texts in the Erzya language, however, does not appear until the Erzya translation of the Gospel comes out in 1821, and the remainder of the New Testament is
published in 1827. Original Erzya-language texts date from the publication of Образцы
мордовской народной словесности I and II (‘Samples from Mordvin Folk Literature’)
in Kazan (1882–1883), but the publication of original Erzya-language literature does not
actually gain momentum until the 1920s when it suddenly sees a large-scale inﬂux in the
media and the schools, in fact, most treaties of the history of the written language regard
the post-revolutionary years as the birth time of a widely published Erzya literary language, whereas, actually speaking, the orthographic norms, adhered to even today, can
be observed to correlate directly to those used in the texts of 1882–1883, and subsequent
mainly ecclesiastical publications. The Erzya media begins growing in the 1920s and
has built itself a reputation by the early 1930s (cf. Dëmin 2001); therefore it would be
pertinent to speak of first-language orthography standards dating back to the 1880s, but
first-language popular media to the 1920s.
In the 1920s, the Erzya language appears across the Soviet Union in Simbirsk, Samara, Moscow and other centers. Growth can be observed in the late twenties and early
thirties with a wealth of new writers coming from outside of what is today known as
the Republic of Mordovia. The development of the literary language, based on a dialect
from within the Autonomous Region at Kozlovka, as declared by a group of teachers and
enthusiasts in Moscow in the mid-1920s, sets a normative framework for Evsevʹev's extensive grammar “Основы мордовской грамматики, Эрзянь грамматика” (‘The rudiments of Mordvin grammar (in Russian)’, ‘Erzya Grammar (in Erzya)’), it also provides
Bubrix with a purpose for field work resulting in a description of the phonetics and
morphology of the Erzya dialect at Kozlovka (1930). Despite the fact that the Central
Kozlovka dialect had been declared the basis of the literary standard in the mid 1920s,
publications in Saransk showed almost indifference to that form of the language in the
1930s. Efforts appear to have been made to reduce variation in the word stems, and when
the language standard materials of 1955 are published, no mention at all is made of the
Central dialect. Although, students of the language today (information from own teaching experience in Saransk 1998–2004) are often aware of the existence of a Kozlovka
standard, they seldom have any actual knowledge of the variety of language spoken
there.

<pgNo>10</pgNo>

From the late 1930s with the purges of 1937–38 to the end of the Stalin Era a reorientation towards a centralized, Russian majority-oriented society is established. This
can be observed in orthographic and lexical developments, on the one hand, and the
translation of Russian literature into Erzya, on the other, whereas the development of the
Erzya language comes to a virtual standstill. The late 1950' sees the re-emergence of
a regular Erzya-language literary-social journal “Suran' tolt” ‘Lights/fires on the Sura’,
the rehabilitation of cultural figures, and literature illustrating Erzya life as an active peripheral part of development leading to achievements in the U.S.S.R. The “Suran' tolt”
journal can be seen as a symptom of the re-emergence of literary regularity, the addressing of themes other than the omnipresent Patriotic War, and this development is complemented by the presence of semiweekly newspapers. Thus the Erzya language continues
to evolve with writers from various dialect backgrounds, each adding his or her own bit
of variation to the literary language. The quarterly eventually began to appear 11–12
times a year, and in time changed its name back to the original Syatko ‘Spark’ of the
1920s and 1930s.
From the late 1960s and early 1970s, native-language orientation in the schools
begins to lose its favorability (oral information from the Mordovia and Komi Republics)
– apparently this was a tendency in different parts of the U.S.S.R. Needless to say, this
time period saw the decline of subjects taught in Erzya in the schools, with only the native language itself retained as a relatively standard subject in the upper grades of the village schools, whereas the first four grades were generally the ones where the first-nation
Erzya children were afforded instruction in their native language in the village setting.
In the 1980s we see a new emergence of Erzya awareness. The children's supplement piońereń vajgeĺ ‘The voice of the pioneers’ in the Syatko journal begins appearing
as an independent publication and changes its name to či͔ĺiśema ‘Dawn’. Grass-roots
awareness brings a rebirth of interest in the language; many closed regions are opened to
foreigners, and scholars are encouraged to involve themselves in international projects,
e.g. “Ersäläis-suomalainen sanakirja” by Jaana Niemi and Mikhail Mosin (1995), and
the subsequent “Suomalais-ersäläinen sanakirja” by Alho Alhoniemi, Nina Agafonova
and Mikhail Mosin (1999).
In the 1990s and beginning of the new millennium, first-language instruction for
subjects other than the native language became an issue. What started out in village primary schools brought about a new trend in publication practices, and now use of other
new media is spreading, i.e. the scattered population of Erzya speakers actively utilize
services offered by mobile phones and the Internet in Erzya. The publication of readers
in environmental studies and mathematics has been announced for the lower grades, as
well as a complete curriculum for Erzya language in the primary and secondary schools.
Two encyclopedic works of over 1000 pages each have been translated and printed in
the Erzya language. Although very few of these books were actually printed – perhaps
2000–3000 each, their mere existence provides the language with esteem that is necessary for establishing its value as a medium of cultural cohesion.

<pgNo>11</pgNo>

Only recently (2009), a four-year project has received support from the Republic
of Mordovia to concoct a mutual Mordvin language for the internationally recognized
two separate languages of Erzya and Moksha (cf. ISO 639; <http://mariuver.wordpress.
com/2009/02/06/mordovskii-jazyk/>). The outcome of such a project might simply be
that the two standards lose all funding and the position of the majority language, Russian, would be further instilled while Erzya and Moksha would lose all credibility as
official languages, compare Ahlqvist's understanding of Erzya and Moksha mutual comprehension, below.
“Om dessa tvänne dialekters olikhet sinsemellan är här icke stället att tala; som ett kriterium deröfver må gälla den omständighet, att en Ersän ej förstår sin mokschanska
broders tal annorlunda än såsom ett slags karrikatur öfver sitt eget tungomål och att de
sinsemellan vanligen nyttja Ryskan såsom medel att göra sig begripliga för hvarandra; I
allmänhet sagdt är denna olikhet dock knappt store än den emellan Finskan och Estniskan.” (Ahlqvist 1859: 3)
‘There is no room here to discuss the differences between these two dialects; one criterion for that might be the state of affairs that an Erzya understands the speech of his
Moksha friend's as nothing other than some kind of jest making of his own language, and
that ordinarily they use Russian as a mutual means of making themselves understood;
generally speaking, this difference is scarcely more than that between Finnish and Estonian.’ (The free translation from Swedish is my own).

The Erzya language is threatened as an entity on the official front: Only time will tell,
whether this language will be allowed to contribute to our understanding of the world
around us through its own independent maintenance and development as a medium and
repository of cultural wealth and knowledge. As a written medium, this independent
role has developed for nearly 200 years, so, perhaps, it is unlikely to fall over night.

Research in the Erzya language
Over the years of its development as a literary language – 1821 to the present – the Erzya
language has attracted the attention of scholars near and far. The first grammar of the
Erzya language (written by C. von der Gabelentz 1838–39) was based on the language
used in the first Erzya translation of the Gospel, published in 1821 and compared with
what was available (see Mithridates 1, 549. IV, 236 ff. in Gabelentz 1839: 238). Even
though Gabelentz found much fault with the language of the translation, his grammatical
observations, based on what today would be termed parallel-corpus findings, are remarkable, and definitely indicative of not only a seasoned linguist's interpretation of the Erzya
language in the Biblical texts, but also a description of phonetic, morphological and
lexical phenomena still of interest in the language today. As an attempt to overcome the
burden of information disseminated to the contrary, let's take a look at what Gabelentz
actually wrote (cf. Evsevʹev 1963: 316 citing [Ahlqvist 1861]).

<pgNo>12</pgNo>

“Noch muss ich der Quelle erwähnen, aus welcher ich geschöpft habe: es ist dies die
mordwinische Uebersetzung der vier Evangelien, welche im J. 1821 in St. Petersburg auf
Kosten der russischen Bibelgesellschaft gedruckt worden ist. Leider ist davon nicht viel
Löbliches zu sagen. Der Uebersetzer mag wohl die Sprache praktisch, erlernt haben und
derselben nach Dolmetscherart vollkommen mächtig gewesen seyn; allein er hat sie auf
unwissenschaftliche und unkritische Weise gehandhabt. Nicht allein, dass von einer Orthographie bei ihm eigentlich gar nicht die Rede seyn kann, er hat auch bei dem Gebrauch
der grammatischen Formen sich Ungenauigkeiten erlaubt, die vielleicht im gemeinen
Leben vorkommen mögen, die aber in der Schrift, und noch dazu in einer Bibelübersetzung, nicht gestattet werden sollten. Dabei ist er um die Reinheit der Sprache wenig besorgt gewesen; auch wo ihm ein oder mehrere gute mordwinische Ausdrücke zu Gebote
standen, hat er unbekümmert russische Wörter eingemischt, die ebenfalls theils wohl
durch täglichen Verkehr sich in die Umgangssprache eingeschlichen haben mögen, theils
vielleicht, als rein biblisch, sich nur mit einiger Mühe durch ein entsprechendes heimisches Wort ersetzen liessen. Könnte man dies aber auch noch allenfalls hingehn lassen, so
ist es doch in der That unerträglich, dass sogar eine Menge Partikeln aus dem Russischen
entlehnt worden sind. For those who only have a slight conception of the peculiarities
presented by the use or rather non-use of particles. Wer nur einigermassen weiss, welche
Eigentümlichkeiten gerade der Gebrauch oder vielmehr Nichtgebrauch der Partikeln in
den finnisch-tatarischen Sprachen darbietet, wird sich eine Vorstellung davon machen
können, wie diese russischen Fremdlinge sich hier ausnehmen, und welchen Einﬂuss ihr
Gebrauch selbst auf die Construction und den Styl ausüben muss. Sollten auch — was
merkwürdig genug wäre — jene russischen Partikeln wirklich in die Umgangssprache
aufgenommen worden seyn, so hatte ein richtiger Takt den Uebersetzer bewegen müssen,
sie aus der Schrift zu entfernen. Da sie aber nun einmal gebraucht worden sind, so habe
ich freilich nicht umhin gekonnt, sie auch in dieser Grammatik anzuführen; allein sie
sind, ein Luxus, dessen die Sprache entrathen kann.” (Gabelentz 1839: 237–38)
‘Still, I must mention the source which I have drawn upon: it is the Mordvinian translation of the Gospel, which was printed in 1821 in St. Petersburg at the expense of the
Russian Bible Society. Unfortunately, there is not much praiseworthy to be said of it.
The translator may well have learned the language in practice, and he may have attained
an interpreter-like ﬂuency in it, but he has wielded the language in an unscientific and
uncritical manner. Not only is there a lack of orthographic consistency, but the translator
has taken liberties with grammatical forms, which might, in deed, occur in ordinary life,
but which in writing and especially in the translation of the Holy Scriptures should not
be allowed. He has shown little concern for the purity of the language, and even where
he has had several good Mordvinian phrases to choose from, he has carelessly mixed in
Russian words, which may well have slipped into the text from everyday vernacular usage, or, perhaps, he has just found it difficult to replace a purely biblical word with the
corresponding native words. And even if one were to allow for these shortcomings, it is
still untolerable that such an amount of particles have been directly borrowed from the <pgNo>13</pgNo> Russian. Anyone who even has the slightest knowledge of what peculiarities are presented by the use, or rather non-use of particles in the Finno-Tatar languages can imagine
how to do away with these Russian strangers here, and can comprehend what effect their
use might have on the construction and style. And even if it were the case – strange as
it may seem – that these Russian particles have actually been incorporated into the vernacular, the proper stance of the translator would be to remove them from the Scriptures.
Since they have only been used once, I cannot help but admit that they have been cited
in this grammar; they are, however, a luxury which the language can do without. (This
rough translation is my own.)’

Since the translation of the Gospel was prepared in Kazan (present-day Tatarstan), it
comes as no surprise that the language in the first Erzya Gospel might deviate from the
language variants spoken in the Mordovian Republic of today. Certain orthographic
renditions in the text, however, would indicate that several forms of the language are
represented, and therefore one might assume the participation of several people in this
first translation of the Gospel, see examples below.
(1)

саземсъ saźems ‘to take’ (Mark 3: 20) ~ MW: Kad, Kal, Kažl, Šir (Shoksha)
саймексъ sajmeks ‘to take’ (John 5: 10) ~ MW: VVr (Alatyr' dialect)
саемсъ
sajems ‘to take’ (John 11: 57) ~ MW: Ba, Bugur, Hl, Jeg, Mar, NSurk,
SŠant, Večk (Elsewhere)

(2)

нейсы ńej+si͔ see_V+IND.PRES.PRED-2SG>3PL ‘you see them’ (Mark 13: 2) ~ Keresztes
1999: 214 (NW and NE dialects)
нейсамискь ńej+samiśk see_V+IND.PRES.PRED-2>1P ‘you see me/us (at least one of the
arguments is not in the singular)’ (John 14: 19) ~ Keresztes 1999: 245 (S dialect)

(3)

тятямокъ t́ät́a+mok father_N+POSS-3SG>NOM.SG ‘our father’ (Luke 3: 8, 11: 2) ~ Kozlovka (Bubrix 1930); Alatyr' (cf. Davydov 1963; Nadʹkin 1968)
Тятянокъ t́ät́a+nok father_N+POSS-3SG>NOM.PL ‘our fathers’ (John 4: 20) ~ dialects
with no distinction for number in 1PL indexing.

Infinitive forms of the three renditions of the infinitive ‘to take’ in (1) demonstrate
word forms that, according to MW, would encompass most dialect variation of today,
from the Shoksha areas of the west where the verb has a *-ź-* in its stem, to the *-mks*
translative infinitive of certain Alatyr' subdialects, and finally to the form familiar from
the literary standard sajems ‘to take’. The conjugation forms in (2), according to dialect
variation shown by Keresztes (1999: 214) would appear to represent language variant
from opposite ends of the dialect continuum. And finally the differentiation of singular
and plural possessa of the first person plural possessor as demonstrated in (3) would
correlate to Alatyr'-dialect paradigms and the tendencies in some parts of the KozlovkaMokshalei dialect.

<pgNo>14</pgNo>

Subsequent descriptions of the Erzya language demonstrate higher proficiency
of the writers in the language. F. J. Wiedemann published a second grammar of the Erzya language in 1865, where he was able to extrapolate upon the findings of Gabelentz
(1839), the Moksha grammar of Ornatovʺ (1838) and Ahlquist (1861), as well as to utilize
native-language informants living in Estonia. This Erzya grammar and short vocabulary
(approx. 3,650 Erzya headwords and 6300 German) along with that of Ahlqvist's Moksha grammar were then the basis of a grammar of the Mordvin languages by Budenz
(1869). In 1903 came the study of Mordvin phonetics by Paasonen, a second edition to
his dissertation of 1983, followed by a chrestomathy (1909). The following year saw the
appearance of a very extensive collection of folklore with a grammar section dedicated
to a small dialect area by Šaxmatovʺ (1910). The first grammar written by a native
speaker was completed for print in 1928 by M. E. Evsevʹev.
After the death of Evsevʹev in 1931, work in grammar has continued to this very
day. Important native authors include: A. P. Râbov; M. N. Kolâdënkov; A. P. Feoktistov; D. V. Cygankin; G. I. Ermushkin; N. S. Alyamkin; L. P. Vodyasova, N. Aasmäe
and M. D. Imajkina, to name a few, and non-natives: D. V. Bubrix, V. A. Serebrennikov;
A. Alhoniemi, R. Bartens, K. Heikkilä, E. Itkonen, M. Kahla, P. Ravila, P. Saukkonen,
G. Stipa; L. Keresztes, E. Mészáros, K. Rédei, G. Zaicz; V. Hallap, V. Pall; E. Lewy.
Each generation has produced a variety of grammar writers: some who have underlined
the language usage of particular authors with a tendency toward prescriptive grammar
writing, and others who have painstakingly described very specific areas of the language.

The Erzya literary language of today
Erzya is known for its virtually free word stress, phonetic features, such as, vowel
and palatal harmony, voicing, etc., ample regular inﬂection and postpositions, and
relatively free word order with variation between SOV and SVO. Sentence stress is
the predominant cause of stress variation in Erzya words, whereas Erzya words can
take main stress on all feet (cf. also Râbov 1935; Estill 2004). The phonology of the
language, most recently described by Imajkina (2008), suggests certain shortcomings
in the use of an unmodified Cyrillic alphabet. The morphology displays extensive
declensional and conjugational possibilities, as well as combinations of the two. This
is a feature which, in some instances, can be set in contrast with syntactic expressions
of the same semantics; genitive-form personal pronouns can, to some extent, be used
alternately or in tandem with possessor indexing, and nominal conjugation is sometimes
subject to variation in independent versus dependent person marking. Word order in
Erzya has always presented a problem due to its variation, this problem seems to be
rooted in strategies involving inﬂectional marking, NP presence and discourse function.

<pgNo>15</pgNo>

Phonology
The standard Erzya language is written with an unmodified Cyrillic alphabet, and this
leads scholars to enumerate twenty-seven consonant phonemes instead of twenty-eight
and five vowels instead of six (cf. Zaicz 1998: 185; Bartens 1999: 27; Imajkina 2008).
These figures include the phonemes f, x and i͔ (attested in the dialects to various extents
are typical of loanwords), and ŋ, which is indigenous and forms some minimal pairs with
n and ń before velar plosives (see major consonant and vowel allophones below, and also
section 3.1.)
<table>
<caption><b>Table 1.2</b> Major consonant allophones in the Erzya language</caption> 
<tr>
<td colspan="3" rowspan="2"></td>
<td colspan="2">Labial</td>
<td colspan="2">Coronal</td>
<td colspan="2">Dorsal</td>
</tr>
<tr>
<td>Bilabial</td>
<td>Labio- dental</td>
<td>Alveolar</td>
<td>Post- Alveolar</td>
<td>Palatal</td>
<td>Velar</td>
</tr>
<tr>
<td rowspan="3">
Stops
</td>
<td colspan="2">
Nasals
</td>
<td>
m
</td>
<td>
</td>
<td>
n
</td>
<td>
</td>
<td>
ń
</td>
<td>
ŋ
</td>
</tr>
<tr>
<td rowspan="2">
Plosives
</td>
<td>
Voiceless
</td>
<td>
p
</td>
<td>
</td>
<td>
t
</td>
<td>
</td>
<td>
t́
</td>
<td>
k
</td>
</tr>
<tr>
<td>
Voiced
</td>
<td>
b
</td>
<td>
</td>
<td>
d
</td>
<td>
</td>
<td>
d́
</td>
<td>
g
</td>
</tr>
<tr>
<td colspan="2" rowspan="2">
Affricates
</td>
<td>
Voiceless
</td>
<td>
</td>
<td>
</td>
<td>
c
</td>
<td>
č
</td>
<td>
ć
</td>
<td>
</td>
</tr>
<tr>
<td>
Voiced
</td>
<td>
</td>
<td>
</td>
<td>
dz
</td>
<td>
dž
</td>
<td>
d́ź
</td>
<td>
</td>
</tr>
<tr>
<td colspan="2" rowspan="2">
Fricatives
</td>
<td>
Voiceless
</td>
<td>
</td>
<td>
f
</td>
<td>
s
</td>
<td>
š
</td>
<td>
ś
</td>
<td>
x
</td>
</tr>
<tr>
<td>
Voiced
</td>
<td>
</td>
<td>
v
</td>
<td>
z
</td>
<td>
ž
</td>
<td>
ź
</td>
<td>
ɣ
</td>
</tr>
<tr>
<td colspan="3">
Approximants
</td>
<td>
w
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
j
</td>
<td>
</td>
</tr>
<tr>
<td colspan="2" rowspan="2">
Liquids
</td>
<td>
Laterals
</td>
<td>
</td>
<td>
</td>
<td>
l
</td>
<td>
</td>
<td>
ĺ
</td>
<td>
</td>
</tr>
<tr>
<td>
Trills
</td>
<td>
ʙ
</td>
<td>
</td>
<td>
r
</td>
<td>
</td>
<td>
ŕ
</td>
<td>
</td>
</tr>
</table>

In the discussion of allophonic variation in the framework of this thesis the uppercase letters *O*, *A*; *N*, *T* and *D* are used to indicate archiphonemes whose reﬂexes on
the surface level are determined by their phonetic contexts. In affix-initial position the
archiphoneme *O* has a reﬂex in *0* when the preceding stem ends in a vowel, whereas it
appears as a mid vowel with front/back harmony qualities determined by the preceding
phonetic context if the stem ends in a consonant. (This archiphonic choice is in contrast
with the encoding used by some Western scholars, who would include the linking vowel
as a part of the stem – perhaps an etymological solution –, and the Saransk scholars, who
have determined that the linking vowel, a phonetically dependent segment, should be
separated from both the stem and the affixes. (Cf. Keresztes 1990: 75, and Hamari 2007:
54: *ŕiveźe-ńt́* ‘fox_N+GEN.DEF.SG, whereas this author would attach the linking vowel to
the affix *ŕiveź+eńt́*, and the Saransk School would advocate a rendition in *ŕiveź-e-ńt́*).)
The archiphoneme A has reﬂexes in *a* and *o* according to a progressive dissimilatory mid/low <pgNo>16</pgNo> harmony. Finally, the *N*, *T* and *D* archiphonemes all have reﬂexes in palatalized/nonpalatalized forms determined by vowel and palatal-harmony context, whereas it will be
noted that there exist surface-level palatalized *ń* and *t́* phonemes without non-palatalized
counterparts. (There are no archiphonemes *R*, *L* and *S* in this treatise, whereas liquids tend
to retain a distinction palatalized/non-palatalized in inﬂection (cf. Imajkina 2008: 185)
and the alveolar fricative alone appears to have retained its proto-language palatalized/
non-palatalized distinction. (See table 3.6 and preceding discussion, cf. Abondolo 1987:
219-233.)
Allophonic variation can be attributed to several features. These include: palatal
harmony and progressive voicing. Although the phonematic distinction *n* versus *ń* is
attested in word-initial position, e.g. *naka* ‘here you go!’ *ńaka* ‘doll’, it is quite marginal.
There appears to be a greater presence of back/front allomorphs, such as those found
in the 1SG possessor index *-ON*, e.g. *skalon* ‘my cows’ and *ĺišmeń* ‘my horses’. The
indefinite genitive in *-Oń*, having no allomorphic variation, renders forms, such as
*skaloń* ‘of a cow; of cows’ and *ĺišmeń* ‘of a horse; of horses’. Thus we are provided
with attestation for separate nasal phonemes: *n/ń* <= *N* and *ń*. This attestation of
allophonic variation, generally limited to stops (*N*, *T*, *D*), leaves a phonetic gap, namely,
non-palatalized alveolar stops in front-vowel contexts, where the presence of a nonpalatalized stop would indicate a recent Russian loan word, e.g. *fen* ‘fan’, *kit* ‘whale’,
and *šved* ‘Swede’. The notion of progressive voicing affects onset consonants both
word-initially and internally, such that, at the beginning of a word voicing of plosives,
affricates and fricative is either indicative of loanword origin, as in, *d́źudo* ‘judo’ or
the presence of a preceding voiced consonant, not necessarily in the same phrase, e.g.
[*kudow zi͔t́*] home_N.LAT arrive_V.IND.PRETI.PRED-2SG ‘are you back home’. Here the
voiced [*z*] is the result of progressive voicing. Finally the polemics of [*w*] versus [*v*] can
be observed in the fact that the pronunciation of labiodentals in native words is limited
to onset position, before non-labial vowels, in the rime the tendency is to use [*w*].

Table 1.3
High
Mid
Low

Major vowel allophones in the Erzya language
Front
Central
i
i͔
e
e͔
a

Back
u
o

Consideration of the Erzya vowel allophones involves the two separate questions of the
high central vowel and the mid central vowel. While the mid central vowel e͔ might be
attested after the alveolar fricative and post-alveolars in sequences, such as, s + e͔ or with
intermittent consonant s + [t | k] + e͔ it is only attested as forming near minimal pairs, e.g.
[śeske͔] ‘right then’ versus [śeśkje] ‘mosquito’. The high central vowel i͔, on the contrary,
can be attested without preceding alveolars, e.g. pi͔xad́ems ‘to puff’, see attestations in
chapter 3.

<pgNo>17</pgNo>

Morphology
Declension
A set of at least fifteen different morphemes can be attested as co-occurring with complex
NPs in grammatical (subject, direct object, indirect object and complement), local and
modifier functions, see table 1.4.
Table 1.4
Indefinite declension table for complex NP heads kudo ‘house; home’
Label Example
Gram. Local
NOM
kudo
‘home/house’
+
GEN
kudo+ń
‘of [home| a/the house]’
+
DAT
kudo+ńeń
‘for the home’
+
+
ABL
kudo+do
‘about [home|a house]’
+
+
INE
kudo+so
‘[at home|in a/the house]’
+
+
ELA
kudo+sto
‘from [home| a/the house]’
+
+
ILL
kudo+s
‘into a/the house’
+
+
LAT
kudo+v
‘home (GOAL)’
+
PROL
kudo+va
‘[in around the house|in homes] [+DISTR]’
+
TRNSL
kudo+ks
‘home/house (complement position)’
+
COMP
kudo+ška
‘the size of a house’
+
ABE
kudo+vtomo ‘without a home/house’
+
COM
kudo+ńek
‘with the whole house’
LOC
mastor+o
‘on the ground’
+
TEMP
varma+ńe
‘when it's windy’
+

Modifier
+

+
+
+
+
+
+
+
+
+

Erzya has three different declension types. All three types can be used in the marking
of definite referents to different degrees. There are (i) the indefinite declension, used
mainly with proper and personified nouns, as well as, indefinite nouns (see table 1.4),
the morphological deictic marking types of (ii) the possessive declension, used mainly
with inferential and singleton-set definiteness, and (iii) the definite declension, used to
mark a large number definiteness types including neutral deictic and topicality.
The possessive declension, central to this thesis, refers to the set of affixes used
in the head marking of the Erzya possessive construction. Typologically speaking, the
Erzya possessive construction attests head marking in contexts where the controller is
definite. If the controller of the possessor-indexed head appears in the same NP as a
dependent, then it will be marked in the genitive, hence the language is seen as a manifestation of double-marked possessive constructions, which means that the type value
given ignores the presence of NON-DEFINITE CONTROLLERS, on the one hand, and the possessive constructions with DEFINITE-MARKED HEADS, on the other. The cross-referential
adnominal-person markers can be polyexponential. While they indicate three persons
and two numbers of the controller/possessor in the marking of possessa, quantifiers, <pgNo>18</pgNo> adverbial/adpositions and non-finites, some of the cross-referential markers can also indicate grammatical number of the nominative-case possessum, see table (1.5).
Table 1.5

POR

1

SG
PL

2

SG
PL

3

SG
PL

Nominative-case forms for the Erzya kudo ‘home; house; room’
and t́ev ‘task; thing’ as a possessum
Possessa
kudo+m
kudo+nok
kudo+t
kudo+ŋk
kudo+zo
kudo+st

SG

t́ev+em
t́ev+eńek
t́ev+et́
t́ev+eŋk
t́ev+eze
t́ev+est

kudo+n ~ kudo+m
kudo+nok
kudo+t
kudo+ŋk
kudo+nzo
kudo+st

PL

t́ev+eń ~ t́ev+em
t́ev+eńek
t́ev+et́
t́ev+eŋk
t́ev+enze
t́ev+est

These same adnominal cross-referential markers can be attested word forms with
case affixes, see table (1.6). In the non-core cases, the adnominal-person affixes are
monoexponential, i.e. in these cases the literary language makes no distinction for the
grammatical number of the possessum, and the adnominal-person markers are readily
distinguished from both stem and other concatenative affixes.
Table 1.6

Varied parts of speech with adnominal cross-referential person marking
NOM.PL
INE
NUM-COLLPOP
INF+ILL

POR

NOM.SG

1

‘home; house; room’
kudo+m
kudo+n ~
kudo+m

ASSOC

SG

PL

2

SG
PL

3

SG
PL

kudo+nok
kudo+t
kudo+ŋk
kudo+zo
kudo+st

kudo+nok
kudo+t
kudo+ŋk
kudo+nzo
kudo+st

kudo+so+n ~
kudo+so+m
kudo+so+nok
kudo+so+t
kudo+so+ŋk
kudo+so+nzo
kudo+so+st

‘three’
kolmo+ńe+ń ~
kolmo+ńe+m
kolmo+ńe+ńek
kolmo+ńe+t́
kolmo+ńe+ŋk
kolmo+ńe+nze
kolmo+ńe+st

‘with’
marto+n ~
marto+m
marto+nok
marto+t
marto+ŋk
marto+nzo
marto+st

‘to arrive’
sa+m+oz+on ~
sa+m+oz+om
sa+m+oz+onok
sa+m+oz+ot
sa+m+oz+oŋk
sa+m+oz+onzo
sa+m+oz+ost

Of the parts of speech mentioned above, certain ones of them appear in contexts where
instead of dependent marking of the possessor, it is also possible to use independent
personal markers, i.e. personal pronouns. In certain circumstances it is possible or even
obligatory that both the possessor and the possessum be marked, see below.
The definite declension consists of morphemes for two numbers marking nouns
and non-finites. All items marked plural bear double marking for number, i.e. the word
skal ‘cow’, when rendered in the indefinite nominative plural skal+t ‘cows’, receives
one marker, the *-T*, and when it is rendered with the definite plural as in the nominative
skal+t+ne ‘the/those/these cows’, an additional *-Ne* marker +DEF.PL.NOM is present.

<pgNo>19</pgNo>

(4)

19

a. skal
cow_N.NOM.SG(INDEF)
‘cow’
b. skal+t
cow_N.NOM.PL(INDEF)
‘cow’
c. skal+ozo
skal_N+POSS-3SG>NOM.SG
‘his/her cow’
d. skal+onzo
cow_N+POSS-3SG>[NOM.PL|GEN]
‘his/her cow's (genitive)’, ‘his/her houses/homes’
e. skal+oś
cow_N+NOM.DEF.SG
‘this/that/the cow’
f. skal+t+ne
cow_N+PL+DEF.PL.NOM
‘these/those/the cows’

The definite markers in Erzya and Moksha are purported to be counter-examples to the
notion that definiteness marking only occurs as an areal feature (cf. Lyons 1999: 49).
Curiously, however, Lyons mentions the term North Russian dialects, on the same page,
having the same kind of phenomenon. Erzya and Moksha differ from Mari and the Permic languages, most often indicated when making reference to “North Russian dialects”,
in that Erzya and Moksha not only have possessor indexing familiar from the Uralic
languages but inﬂectional definite marking, as well. Treatises comparing North Russian
dialects with the Permic languages and Mari are generally interested in the definite function of the possessor indices in these Uralic languages, and since Erzya and Moksha are
not examples of what happens in other languages, they tend to be ignored (cf. Tixonova
1966).
In Erzya declension there are few instances of agreement inside the NP, usually
it is only the head of the NP that declines in the various cases. In grammatical number,
however, a determiner can also be marked (see Rueter ON QUANTIFICATION IN THE ERZYA
LANGUAGE, forthcoming). Once the head of the NP has been declined, which may involve
case, number and definite or cross-referential person marking, it is still possible for a
given word form to be augmented through further affixation, e.g. secondary declension, <pgNo>20</pgNo> nominal conjugation with or without subsequent enclitic marking. A noun declined in
the inessive case, for example, can appear in the position of spatial modifier in a NP or in
the position of predication target at the clausal level, e.g. pŕa+so+nzo head_N+INE+POSS3SG ‘on his/her head’, pŕa+so+nzo+ĺt́ head_N+INE+POSS-3SG+PRETII.PRED-3PL ‘they were
on his/her mind’ (Bargova 1997: Вечкемань усият 30). Another alternative that presents itself stems from the tendency to drop predictable head nouns, which results in the
modifier (nearest final position in the NP) becoming the NP main item (cf. Gil WALS: 61
ADJECTIVES WITHOUT NOUNS). Since most modifiers can stand alone when a predictable
head noun is dropped, and word forms correlating to several of the cases can function as
modifiers – we might choose to decline the modifiers (cf. Evsevʹev 1963: 101–103; Collinder 1969: 231; Egorova 1976; Keresztes 2005; Rueter On Modifiers without Nouns in
Erzya, forthcoming). (See also section 4.5.)
(5)

a. ašo
kudo+ś
white_A.ABS house/home_N+NOM.DEF.SG
‘the white house’
b. ašo
Ø+ś
white_A.ABS Ø_N+NOM.DEF.SG
white_A+NOM.DEF.SG
‘the white [one]’

(6)

a. kiĺej+eń
kudo+ś
birch_N+GEN house/home_N+NOM.DEF.SG
‘the house of birch’
b. kiĺej+eń+śe
Ø+ś
birch_N+GEN+PRON-DEM-DIST Ø_N+NOM.DEF.SG
birch_N+GEN+PRON-DEM-DIST:N+NOM.DEF.SG
‘that [one] of birch’

(7)

a. pakśa+so
kudo+ś
field_N+INE house/home_N+NOM.DEF.SG
‘the house in the field’
b. pakśa+so
Ø+ś
field_N+INE Ø_N+NOM.DEF.SG
field_N+INE+NOM.DEF.SG
‘the [one] in the field’

<pgNo>21</pgNo>

(8)

21

a. kurg+so+nzo
čuvar+ońt́
mouth_N+INE+POSS-3SG sand_N+GEN.DEF.SG
‘the sand in his mouth’
b. kurg+so+nzo
Ø+ńt́
mouth_N+INE+POSS-3SG Ø_N+GEN.DEF.SG
mouth_N+INE:N+GEN.DEF.SG
(Abramov 1971: 297) ‘that in his [Id́emevś (lit. wild spirit)] mouth’

In (5–8) we will observe three different instances of modifiers becoming the main items
of their respective NPs, and thus undergoing secondary declension. In (5) we witness
a qualifying, color modifier, and in (6) an indefinite genitive plus distal-demonstrative
combination. In (7–8) there are two instances of inessive declensions used in modifying
position: the indefinite inessive, and the possessive 3SG inessive. In Erzya, there are
several cases in the indefinite declension that can be used as NP modifiers and are therefore
possible candidates for secondary-declension main items. Table (1.7) provides a list of
indefinite case forms which can be attested in both NP-modifier and predicate position.

<pgNo>22</pgNo>

Table 1.7
Indefinite declension cases attested in modifier vs. complement position
Case Premodifier
Predicate
ABE
kudo+vtomo
psaka
psakaś
kudo+vtomo
house/home_N+ABE cat_N.ABS
cat_N.NOM.SG.DEF house/home_N+ABE
‘homeless cat’
‘the cat [is] homeless’
kiskaś
vaz+oška
CMP
vaz+oška
kiska
dog_N.NOM.SG.DEF calf_N+CMP
calf_N+CMP dog_N.ABS
‘dog the size of a calf’
‘the dog [is] as big as a calf’
ELA
Turku+sto
professoroś
professoroś
Turku+sto
Turku_N+ELA professor_N.NOM.
professor_N.NOM.SG.DEF Turku_N+ELA
SG.DEF
‘the professor [is] from Turku’
‘the professor from Turku’
GEN
Purgaz+oń
t́e
Purgaz_N-PROP+GEN
this_PRON-DEM-PROX
kudoś
kudoś
Purgaz+oń
house/home_N.NOM.SG.DEF
house/home_N.NOM.SG.DEF Purgaz_PRP+GEN
‘Purgaz's house’
‘this house [is] Purgaz's’
ILL
jarsa+m+s
kšim
kši+m
kad+i͔ja
eat_V+INF+ILL bread_N.POSS-1SG
bread_N+POSS-1SG leave_V+IND.PRETI.
PRED-1SG>3SG
araś
non-existent_PTC.IND.PRES.PRED-3SG
‘I don’t have bread to eat’

INE

NOMABS

LOC

PROL

TRNSL

pakśa+so
lomań
field_N+INE human_N.ABS
‘a/the person in the field’
kiska
ĺevks
dog_N.ABS offspring_N.NOM.SG
‘puppy’
ikeĺ+e
pe+ś
ahead_ADV+LOC end_N.NOM.SG.DEF
‘the front end’
pakśa+va
moĺ+ema+ńt́
field_N+PROL go_V+N+GEN.SG.DEF
końd́amo
like_PP.ABS
‘like going through a field’
kudo+ks
čočko
house/home_N+TRNSL log_N.NOM.SG
‘a/the log for [building] a house’

čokšne+s
jarsa+m+s
evening_N+ILL eat_V+INF+ILL
‘I left my bread for evening to eat’
lomań+eś
pakśa+so
human_N+NOM.DEF.SG field_N+INE
‘the person [is] in a/the field’
t́e
kiska
this_PRON-DEM-PROX dog_N.NOM.SG
‘this [is] a dog’
pe+ś
ikeĺ+e
end_N+NOM.SG.DEF ahead_ADV+LOC
‘the/this/that end is ahead’
ki+ś
road_N+NOM.DEF.SG
moĺ+ś
pakśa+va
go_V+IND.PRETI.PRED-3SG field_N+PROL
‘the road went throught a/the field’
rama+ś
čočk+t
buy_V+IND.PRETI.PRED-3SG log_N.NOM.PL
od
kudo+ks
new_A.ABS house/home_N+TRNSL
‘he/she/it bought logs for [b.] a new house’

<pgNo>23</pgNo>

Conjugation
Erzya features two conjugation paradigms for its finite verbs: a subject conjugation and
a definite/perfect-aspect object conjugation. Hence the indicative present paradigm of
the verb palams ‘to kiss’, preferred initially in the Moksha verb paradigms of Ahlqvist
(1859: 24–43) to the macabre frequentative forms of the verb kalmams ‘to bury’ utilized
by Ornatovʺ (1838: 32–51), comprises 21 separate word forms: six from the subject
conjugation, nine from the third person object category, and three each from the first
and second person object categories (cf. Keresztes 1999; Trosterud 2006: 253–258).
As might be observed below (example (21) of the introduction) in the presentation of
the sentence inžeńt́ śimd́iź vinado ‘The guest was given liquor to drink’ the verb forms
associated with third person plural śimd́iź, palasamiź, palatadi͔ź and palasi͔ź might
all be used in constructions with non-referential subjects (personal observation from
translation of texts with students of Finnish in Saransk 1998–2004). Hence these first
and second person object forms might be considered default in contrast to the specifically
individuated argument-semantics of the singulative forms: 1SG>2SG, 2SG>1SG, 3SG>1SG
and 3SG>2SG. Hence the notations PRED-X>1P and PRED-X>2P will be used to indicate
default first and second person object conjugation where ARG1, ARG2 or both ARG1 and
ARG2 have plural referents.
Table 1.8
ARG1

Indicative present paradigm of the Erzya verb palams ‘to kiss’
ARG2 (agent person)

Subject
conjugation
1SG

pal+an

1PL
2SG

pala+tano
pal+at

2PL

pala+tado

3SG

pal+i͔

3PL

pal+i͔+t́

Object conjugation

1SG

1PL

NA

NA

NA

NA

pala
+tan

pala+tadi͔ź

pala
+sa

pala
+si͔ń

pala+si͔ńek

2SG
pala
+samak

2PL

NA

NA

pala +tanzat

NA

NA

pala+tadi͔ź

pala+samiź

pala+sak
pala+si͔t́

pala+si͔ŋk

3SG
pala+samam

pala+si͔
pala+si͔ńźe

3PL

pala+si͔ź

For those who like intransitive clauses with marking on elements other than a finite
verb, Erzya provides a number of opportunities. Nominal-conjugation marking can be
attested with any number of targets including the nominative of nouns (all three declensions) (9–11), modifier adjectives and pronouns (12–13), some local and modifier cases

<pgNo>24</pgNo>

(14–15), the same predication marking can be attested for some non-finites (16) and
quantifiers (17) (cf. Evsevʹev 1963: 115–125, 137–138, 148–149, 156, 190, 292, 294,
303; Bartens 1999: 169).
(9)

a. ton
komand ir+at.
́
you_PRON-PERS-2SG commander_N.NOM.SG+IND.PRES.PRED-2SG
‘you’re a commander (class member)’
b. ton
komand́ir.
you_PRON-PERS-2SG commander_N.NOM.SG
‘you’re commander (capacity in inferential setting)’

(10)

fjodor
ivanovič+eń
Fyodor_PRP.NOM.SG Ivanovich_PRP+GEN
tejt
́ eŕ+ez+at?
́
–
d́ivaźev+ś
daughter_N+POSS-3SG>NOM+IND.PRES.PRED-2SG? be-taken-aback_V+IND.PRETI.PRED-3SG
komzolov.
vaj,
eź+it́iń
Komzolov_PRP.NOM.SG. oh_INTERJ, not_V-NEG-IND.PRETI+PRETI.PRED-1SG>2SG
soda,
ton
kona+ś
recognize/know_V.CONNEG, you_PRON-PERS-2SG.NOM.SG which_PRON-INTER+NOM.DEF.SG
– pokš+oś
eĺi
viškińe+ś?
– big_A+NOM.DEF.SG or_CONJ little_A+NOM.DEF.SG?
(Doronin 1993: 18) ‘Are you Fyodor Ivanovich's daughter? asked Komzolov in astonishment. My, I didn’t recognize you, which one are you, the big one or the little one?’

(11)

ĺiś+i
mon
veĺe+se
vaśeńśe
come out_V+IND.PRES.PRED-3SG I_PRON-PERS-1SG.NOM village_N+INE first_NUM.ABS
lomań+ś+an
person_N+NOM.DEF.SG+IND.PRED-1SG
‘It turns out, I’m number one in the village (on the ﬂy Atyashevo, 2002)’

(12)

maz+at,
maz+at,
beautiful_A+IND.PRES-PRED-2SG, beautiful_A+IND.PRES-PRED-2SG,
t́eke
nolśe+ź
vaz+at
like_CONJ lick_V+PTC-OZ calf_N+IND+IND.PRES.PRED-2SG
(children's heckle) ‘you’re cute, you’re cute, you’re like a licked calf (new-born calf,
wobbly legs and all)’

(13)

ńej+at
kodamo
rudazov+an,
see_V+IND.PRES-PRED-2SG how_PRON-INTER-A.ABS filthy_A.NOM.SG+IND.PRES.PRED-1SG,
ton+gak
nej
iśtam+at.
́
you_PRON-PERS-2SG.NOM+CLT now_ADV like-that_PRON-A.NOM.SG+IND.PRES.PRED-2SG
(Motorkin 1997: 151) ‘Do you see how dirty I am, now you are like that too.’

<pgNo>25</pgNo>

(14)

ko+s+at?
wh-spatial_PRON-INTER+INE+IND.PRES.PRED-2SG
‘where are you’

(15)

koda
a
koda
how_PRON-INTER-ADV-MANNER not_PRT-NEG how_PRON-INTER-ADV-MANNER
vańo
ĺeĺa+m
mińek
Vanyo_PRP+ABS elder-brother/cousin_N+POSS-1SG>NOM.SG we_PRON-PERS.GEN.POSS-1PL
raśke+ste+ĺ.
family_N+ELA+IND.PRETII.PRED-3SG
(Bargova 1997: 108) ‘No matter how you looked at it, my cousin Vanyo was from our
family’

(16)

and+om+s+at?
feed_V+INF-OM+ILL+IND.PRES.PRED-2SG
‘Shall I get you something to eat? (deliberative)’

(17)

gŕebńev
marto
pikśe+t́ano
Grebnev_PRP.ABS with_POP go-through-thick-and-thin_V+IND.PRES.PRED-1PL
ve
tarka+so
vet́e+ška
ije+t́,
one_NUM-CARD.ABS place_N+INE five_NUM-CARD+APPROX.ABS year_N+PL.NOM,
śe+ks
vajgeĺ+enze
koŕa+s
that_PRON-DEM+TRNSL voice_N+POSS-3SG>GEN according-to_POP+ILL
tonad+i͔ń
čaŕkod́+em+e,
get-used-to_V+IND.PRETI.PRED-1SG understand_V+INF+LOC
kodamo
jožo+zo,
ńej
what-kind-of_PRON-INTER-A.ABS feeling_N+POSS-3SG>NOM.SG, now_ADV-TEMP
son
avoĺ
it_PRON-PERS.NOM not_PRT-NEG-CONTRAST
par+t+ne+d e+ĺ
́
good_A.N+PL+DEF.PL+ABL+IND.PRETII.PRED-3SG
(Tikshaikin 2010: 38) ‘Now, we’ve been working together, Grebnev and I, for about
five years, so I have come to understand what kind of mood he's in by [the sound of]
his voice, and this time it wasn’t one of his better ones.’

Aware of these salient features of the language as a background, Erzya could
be said to feature a relatively productive inﬂectional system with ample allomorphic
variation and regular affix-meaning cumulation, which might promote discussions in the
definition of derivation versus declension and conjugation.

<pgNo>26</pgNo>

Word order
Syntactically, Erzya appears to use grammatical and oblique case marking to indicate
core functions, and not word order. Person cross-referential marking on the finite verb,
or other points of predication, appear to supersede Subject and Object arguments. In a
given context bound person agreement markers allow for three positions on the Subject/
Object reference cline, i.e. (a) NP, (b) Pronoun and (c) ZERO. Because of this it is often
difficult to ascertain whether Erzya is SOV or SVO, i.e. Ermuškin (2004: 155) states that
in the Srednetyoshski dialect an object with definite of possessive marking will, due to its
definiteness, precede the verb, whereas an indefinite object with no marking will follow
the verb. Finally, definiteness appears to have an effect on word order such that the ZERO
marked indefinite subject and object with indefinite nominative marking (ZERO) appear
right of a concurrent definite argument. This, in presentational type clauses on the one
hand, may also result in VS and OVS word orders. Use of anaphoric person agreement,
it would seem, renders the presence of more than one grammatical case form infrequent
in some genres. Furthermore prosodic and word order variation renders Erzya an even
more desirable object of research – something that can be approached through corpora
both written and spoken.
In his discussion of the Srednetyoshski dialect, Ermuškin (2004: 155–156) points
out variation in word order on the basis of the definiteness of a given NP. While the
definite topical subject precedes the verb so does the definite object, and in the absence
of a subject the definite topical object also precedes the finite verb. This account of Erzya word order can readily be applied to other spoken variants of the language as well,
although definiteness is not the only grounds for a noun or pronoun to be placed left of
the finite verb.
(18)

veŕgiz+eś
sala+ś
ŕeve
wolf_N+NOM.DEF.SG steal_V+IND.PRETI.PRED-3SG sheep_N.NOM.SG
(Ermuškin 2004: 155) ‘The wolf stole a sheep.’

(19)

ćora+ś
ĺišme+nze
kiĺd́+iźe
man_N+NOM.DEF.SG horse_N+POSS-3SG harness_V+IND.PRETI.PRED-3SG>3SG
(Ermuškin 2004: 155) ‘The man harnessed his horse.’

(20)

son
śeja+ńt́
śimd+iźe
he/she_PRON-PERS-3SG.NOM goat_N+GEN.DEF.SG water_V+IND.PRETI.PRED-3SG>3SG
(Ermuškin 2004: 155) ‘She watered the goat.’

(21)

inže+ńt́
śimd́+iź
vina+do
guest_N+GEN.DEF.SG provide-with-drink_V+IND.PRETI.PRED-3PL>3P liqour_N+ABL
(Ermuškin 2004: 155) ‘The guest was given liquor to drink.’

<pgNo>27</pgNo>

Erzya is very context-oriented, i.e. the statement about the wolf stealing a sheep in the
SVO order would serve as an answer to the question: “What happened while I was away?”
If we were to invert this order to SOV, however, veŕgiześ ŕeve salaś might qualify as an
answer to the question: “Why are you building a fence?” But what happens when a
setting is given and both the subject and object are included in the new information?
Here, where there is no marking to differentiate the subject and object, it appears that
word order takes over and S is required to precede O while the finite verb is still allowed
freedom of movement, see (22).
(22) a. viŕ
udal+o
pakśa+so+ńt́
ćora+t
woods_N+GEN.DEF.SG behind_POP+LOC field_N+INE+DEF.SG man/boy_N+PL.NOM
van+śt́
alaša+t
watch_V+IND.PRETI.PRED-3PL horse_N+PL.NOM
(Raptanov 1985: 121) ‘In the field beyond the woods boys were herding/tending
horses.’
b. viŕ
udal+o
pakśa+ńt́
keĺe+s
woods_N+GEN.DEF.SG behind_POP+LOC field_N+GEN.DEF.SG width_N+ILL
kolxoz+t
modamaŕ+t́
put+i͔t́
collective-farm_N+PL.NOM potato_N+PL.NOM put_V+IND.PRES.PRED-3PL
(UPTMNE 5: 172) ‘In the field beyond the woods collective farm workers are planting
potatoes.’

In summary, the Erzya language has rich inﬂectional systems for both declension and
conjugation. It also has dependent versus independent adnominal-person marking
variation, inﬂectional deictic marking varying between neutral/definite and personal, as
well as, a relatively free word order. All of these serve to indicate the feasibility of the
Erzya language as an object of cross-referential person studies, among many others.

### 1.2. Introduction to person
The notion of person in linguistics is generally perceived as a grammatical category, and
as such, it might be given equal attention as are given the grammatical categories and notions of gender, number, case, tense, definiteness, etc. Person distinguishes between the
speaker, the addressee and the one spoken of. This is, of course, an oversimplification,
because we can perceive, if not identify, a difference between whether reference is being
made to the speaker by means of a noun or an adnominal-person marker (personal pronoun, cross-referential adnominal-person marker). When using nouns, and especially
proper nouns, to indicate the SPEAKER, ADDRESSEE or OBJECT OF DISCOURSE, a superficial
familiarity with the context will reveal the identity of each. Use of personal pronouns
or cross-referential markers, however, requires a deeper contextual awareness, which allows <pgNo>28</pgNo> the listener to identify the actual referents indicated by the shifting discourse roles
of these person markers. Depending on the language in question, this might entail two
active participants, the speaker and the addressee, or these same active participants plus
the NON-PARTICIPANT ROLE, who is neither speaker nor addressee, of whom the participants
speak. Thus the roles of person can be defined as: (i) the active participant SPEAKER, or
FIRST PERSON, the originator of an utterance or source of information ﬂow; (ii) the active
participant ADDRESSEE, or SECOND PERSON, the one to whom the ﬂow of information is
directed (listener, reader, intended audience), and (iii) a third party, the THIRD PERSON, i.e.
the one spoken of.
These three roles are often associated with the category of grammatical number,
which allows for differentiation in number of speakers, addressees and objects of discussion, on the one hand, and deictic shifters, such as, the spatial this, that, these, those,
here and there, and the temporal now and then, on the other. Hence one might see the
deictic centers in I, here and now shifting from: one referent to another as the role of
speaker is transferred from one person to another (such as is observed in dialogue); one
spatial setting to another (with relative transfer of discourse location), or one temporal
setting to another (in the ﬂow of time).

The person morpheme
Person can be observed in many manifestations. According to Siewierska (2004: 16)
the basic division of person markers with regard to morphological form is that between
independent and dependent person markers, whereas the terms free, full, self/standing,
cardinal, focal, strong, long and disjunctive are also used in reference to the independent
markers, and the terms reduced, bound, defective, deficient and conjunctive are used in
reference to the dependent markers. Criteria commonly used for facilitating a split in
this terminology consist of (i) the morphological characteristic [±SEPARATE WORD]; (ii) the
prosodic characteristic [±PRIMARY STRESS], and (iii) the syntactic ability to constitute an
entire or elliptical utterance [±WHOLE UTTERANCE]. Siewierska notes a dichotomy in the
possibility to use English personal pronouns in single-word utterances such that object
forms are readily used as syntactically independent constituents, whereas subject forms
are not. Hence the question “Who(m) are they going to ask?” can readily be answered
using a simple, object pronoun, for instance “Me”, “Her” or “Us”, in a single-word reply.
It should also be noted, however, that it is the object and not subject personal pronoun
in English that can be used in this fashion, thus a single-word elliptic question with
a personal pronoun coreferencing the subject, see tables (1.9) and (1.10), would, in a
descriptive grammar of the English language, actually employ an object pronoun.
Table 1.9
Single-word elliptic question with object pronoun in subject function
a.
He said that he would do it?
b.
(Who) him?
(Siewierska 2004: 17 [(2)])

<pgNo>29</pgNo>

While Siewierska has not explicitly indicated that the object and subject functions are
attributed to the same single-word forms, the adjacency of her two tables illustrating
subject-function compatibility, as seen in (1.9, line b), and subject-form incompatibility,
as seen in (1.10, line b), draws an implicit connection.
Table 1.10 Single-word elliptic answer with object pronoun in subject function
a.
Who wrote that?
b.
*I. / *He. / *We.
c.
I did. / He did. / We did.
d.
Me. / ? Him. / ? Us.
(cf. Siewierska 2004: 17 (4))

Siewierska notes that an isolated subject pronoun, such as those found in (table 1.10, line
b), would not suffice for an answer, but instead if the subject pronoun were to be used,
an alignment with an auxiliary verb would be required, hence we have the acceptable
answers in (table 1.10, line c). In (1.10, line d) I have taken the liberty to provide objectpronoun equivalents for elliptic answers paralleling the object-form strategy found in
(Table 1.9, line b); whereas the first answer, Me, seems relatively acceptable in my own
native knowledge of English, the second two, Him and Us, strike me as less so. Hence
questions may also arise regarding the acceptability of person-marker forms in relation
to the specific person and number of an individual marker/pronoun, where person strategies obtaining in the singular, for instance, do not reﬂect those of the plural, and vice
versa.
In addition to the verbal argument personal pronouns, Siewierska also indicates
the existence of two varieties of the so called POSSESSIVE PRONOUNS in English, one set
consisting of the syntactically dependent determiners, such as, my, your, our, their, and
the other the syntactically independent possessive pronouns, such as, mine, yours, ours,
theirs. This pair indicates that English has a semi-regular dichotomy with regard to the
feature [±SYNTACTICALLY INDEPENDENT], and that therefore (table 1.11, line c) provides a
felicitous answer to (table 1.11a) but (table 1.11, line b) does not.
Table 1.11 Dependent vs. independent possessive pronoun
a.
Who are we going to invite, your mother or my mother?
b.
*My.
c.
Mine.
(Siewierska 2004: 17 (3))

In her typology of person, Siewierska adheres to the importance of how pronouns are
normally viewed as independent words. Following from this adherence to consistency
with “normal view” Siewierska therefore opts to make the dependent versus independent split at the morphophonological level. This is a well-merited choice, but even the
relatively simple personal system of English attests certain discrepancies with regard to <pgNo>30</pgNo> the concept of independent forms, let us observe the reﬂexive pronouns, for instance,
myself, yourself, himself, herself, itself, ourselves, yourselves and themselves. While
most educated native speakers might be familiar with additional forms, such as, his-self and theirselves, these forms are most likely to be rejected as non-standard forms.
There are, however, situations in the English grammar where these very “non-standard”
forms are the only ones eligible for grammatically acceptable constructions, see (23–24),
where the former is a quotation from Agatha Christie, and the latter an excerpt from a
letter my mother recently wrote me with a subsequent indirect quotation.
“one choked his little self”
(Agatha Christie, AND THEN THERE WERE NONE)

(23)

(24) a. We’re being our usual busy selves.
(Mom's letter March, 2010)
b. They’re being their usual busy selves.
(Indirect quotation of 24a)

It appears that once the third person reﬂexive pronouns are rendered as noun phrases,
they are forced to behave as such with morpho-syntactically acceptable forms.

Personal pronouns and cross-referential markers
Person, although, frequently associated with conjugation in verbs, at the clause level, is
well represented at the phrasal level, as well, where it might cross-reference a possessor,
the object of a non-finite construction, an adpositional complement, etc. Thus, in addition
to the cross-referencing of syntactic subject in a nominative-case personal pronoun or on
a finite-verb form, as one might encounter in the conjugations of various languages in
Europe, see table (1.12), below, there are also cross-referencing strategies for expressing
the person of the possessor, see table (1.13). (It should be noted that the Hungarian 3P
forms van and vannak are used in locative predication, but not equative.)
Table 1.12

The indicative present conjugation of the verb to be as attested
in some languages of Europe
Swedish
German
French
Hungarian
Finnish

1

(jag) är
(vi) är
(du) är
(ni) är
(han/hon/
den/det) är

SG
PL

2

SG
PL
SG

3
PL

(de) är

(ich) bin
(wir) sind
(du) bist
(ihr) seid
(er/sie/es) ist

(je) suis
(nous) sommes
(tu) es
(vous) êtes
(il/elle) est

(én) vagyok
(mi) vagyunk
(te) vagy
(ti) vagytok
(ő) van

(minä) olen
(me) olemme
(sinä) olet
(te) olette
(hän/se) on

(sie) sind

(ils/elles) sont

(ők) vannak

(he/ne) ovat

<pgNo>31</pgNo>

Within the confines of the European continent alone, variations exist between strategies of
person marking at the clause level, whereas some languages allow for cross-referencing
of the person roles both on the predication target, e.g. affixal marking of syntactic-subject
person on the finite verb, and in the independent personal pronouns, there are others
which have dropped their affixal marking altogether. Among the languages where both
lexical and affixal marking are manifest, there is variation of different sorts governing
the distribution of these two marking strategies. In a similar vein, the possessive phrase
may also attest to variation in adnominal-person marking strategies from language to
language. Where one language may allow for the simultaneous use of lexical and affixal
marking of person, others lack the affixal marking. Some languages employ pronouns
reﬂecting the morphological structuring of their NP counterparts while others attest to
possessive-pronoun strategies, divorced of their NP counterparts.
Table 1.13

Adnominal possessive constructions as attested in some languages of Europe
‘my house, our house, etc.’
Swedish
German
French
Hungarian
Finnish

1

SG
PL

2

SG
PL

SG

3
PL

(mitt) hus
(vårt) hus

(mein) Haus
(unser) Haus

(ditt) hus
(ert) hus

(dein) Haus
(euer) Haus

(hans/hennes/dess)
hus

(sein/ihr)
Haus

(deras) hus

(ihr) Haus

(ma) maison
(notre)
maison

(én) házam
(mi)
házunk

(minun) taloni
(meidän) talomme

(te) házad
(ti) házatok

(sinun) talosi
(teidän) talonne

(sa) maison

(ő) háza

(hänen) talonsa

(leur) maison

(ő) házuk

(heidän) talonsa

(ta) maison
(votre)
maison

Typologies relevant to this treatise
In the World Atlas of Language Structure (henceforth WALS), Bickel and Nichols define
a typology for LOCUS OF MARKING IN POSSESSIVE NOUN PHRASES (WALS feature/chapter
24), wherein four strategies are presented: (i) head marking; (ii) dependent marking;
(iii) double marking, and (iv) no marking, see (25–28).
(25)

Head marking
s’adyúm’ə gâam’a
1SG.brother 3SG.house
‘my brother's house’ (lit. ‘my-brother his-house’)
[Acoma (Keresan; New Mexico; Miller 1965: 177)]

<pgNo>32</pgNo>

(26)

Dependent marking
loem-an k’orni
lion-GEN baby.animal
‘lion cub’, ‘lion's cub’ (lit. ‘of-lion cub’)
[Chechen (Nichols, own data)]

(27)

Double marking
cuku-ŋ hu:ki-ʔ-hy:
dog-GEN tail-3SG
‘dog's tail’ (lit. ‘of-dog its-tail’)
[Southern Sierra Miwok (Miwok-Costanoan; California; Broadbent 1964: 133) ]

(28)

No marking
jərəkəpai tuwaɹa
crocodile tail
‘(a/the) crocodile's tail’ (lit. ‘crocodile tail’)
[Tiwi (isolate; northern Australia; Osborne 1974: 74)]

In a further typology, obligatory possessive inﬂection (WALS feature/chapter 58), Bickel
and Nichols discuss the phenomenon of bound nouns obtaining in some languages of the
world which cannot be used in the language without special marking. They note that
nouns of certain semantic reference entail an inherent argument structure, i.e. English
words for body parts or kinship relations attest to obligatory possessors, and in languages where head-marking strategies are observed for possessive phrases there are those
languages with nouns attesting obligatory possessive inﬂection.
Cross-referential adnominal-person marking, however, can be attested on adpositions (Bakker WALS feature/chapter 48). In this typology Bakker places great importance on the delimitation of what actually qualify as adpositions. Among the phenomena
he chooses to disregard are nominal strategies used to express locality, see (29). Thus the
resulting definition of adposition appears to indicate lexemes without noun correlates.
(29)

ya nai-sa
1SG rib-LOC
‘beside me’ [Tauya (MacDonald 1990: 283) ]

Gil provides a typology ADJECTIVES WITHOUT NOUNS (WALS feature/chapter 61), in which
he analyzes the behavior of adjectives within the noun phrase, where they typically
function as attributes to nouns, see (30a). He mentions that under certain conditions
where the modified noun is absent either due to its unimportance or its contextual
reconstructibility, the adjective remains as the main lexical item within the noun phrase,
denoting the understood object, see (30b).

<pgNo>33</pgNo>

(30) a. I want the red apple. (Gil WALS feature/chapter 61)
b. I want the red one. (Gil WALS feature/chapter 61)

Gil's typology enumerates three central encoding possibilities: (i) adjectives do not occur
without nouns; (ii) adjectives may occur without marking, and (iii) adjectives occurring
without the nouns they modify may not occur in bare forms. Central to this treatise will
be the contemplation and illustration of MODIFIERS WITHOUT NOUNS (MWN), see section 4.5.
ADNOMINAL SYNTAX AND SECONDARY DECLENSION, whereas adnominal person markers like
many other modifiers may become the main lexical item within an NP.

Hierarchies
In her treatment of person agreement, Siewierska (2004: 138–172) exhibits the
possessed noun hierarchy: inalienable > alienable, which states that if a language has
person agreement marking on alienable nouns, there is also person agreement marking
attested on the inalienable nouns, whereas the converse does not necessarily hold. An
inalienability hierarchy (Siewierska 2004: 143 [Nichols (1988: 572; 1992: 160)]) is
also presented that provides an indication of which referent types supersede others in
interpretation as inalienable, see hierarchy (1.1)
Hierarchy 1.1
The inalienability hierarchy
body parts and/or kinship terms > part-whole > spatial relations > culturally basic possessed
items > other
(see Siewierska 2004: 143 [Nichols (1988: 572; 1992: 160)])

Under the function of person forms, Siewierska (2004: 173–213) outlines the general
approach to referential expressions adopted within cognitive discourse analysis with
particular focus on the assumed relationship between the cognitive status of discourse
referents in the memory store of the addressee and morpho-syntactic encoding. Notions
of ACCESSIBILITY levels are presented, wherein person forms are seen as representative
of mid-high or high accessibility, and where the distinction between types of person
forms in distribution follows from parameters determining levels of cognitive accessibility. Person forms like other deixis markers are utilized by the discourse participants
to maintain activation or saliency levels of referents in the unfolding development of a
given discourse. Here deictic markers, and in this instance person forms, afford the participants clarity in minimal morpho-syntactic encoding of discourse referents, whereas
minimal encoding implies the forefrontedness of a given referent. (See discussion of
special 1sg>gen forms with kin terms in sections (2.7.) and (4.4).)
In some interpretations accessibility is shown to depend upon a range of hierarchies addressing notions of entity saliency – inherent and discourse-related. Inherent
saliency is affected by the knowledge of the discourse participants or interlocutors –

<pgNo>34</pgNo>

their personal experiences, affections, etc., and discourse saliency is sensitive to levels
of importance, frequency, newness, etc. of the referential constituent, see hierarchies in
hierarchy (1.2).
Hierarchy 1.2
Saliency hierarchies of accessibility
a. Speaker > addressee > non-participant (3rd person)
b. High physical salience > low physical salience
c. Topic > non-topic
d. Grammatical subject > non-subject
e. Human > animate > inanimate
f. Repeated reference > few previous references > first mention
g. No intervening/competing referents > many intervening/competing referents
(see Siewierska 2004: 175)

These accessibility hierarchies can be examined for their relationship to morphosyntactic encoding demonstrated in the accessibility marking scale, hierarchy (1.3),
where the level of morpho-syntactic marking increases in correlation to the decrease
in accessibility of the target referent. (See section 4.4 PARADIGM DEFECTIVITY IN ERZYA
POSSESSOR INDEXING, where high position of the possessor in the SALIENCE HIERARCHIES OF
ACCESSIBILITY when associated with the high inalienability of the possessum may correlate
with the accessibility marking scale. For more on defectivity see Karlsson 2000.)
Hierarchy 1.3
The accessibility marking scale
zero < reﬂexives < person affixes < person clitics, unstressed pronouns < stressed pronouns <
stressed pronouns plus gesture < proximal demonstrative (+NP) < distal demonstrative (+NP) <
proximal demonstrative + (NP) + modifier < distal demonstrative + (NP) + modifier < first name
< last name < short definite description < long definite description < full name <full name +
modifier
(see Siewierska 2004: 176 [Ariel 1990])

Interim summary
In linguistics, person can be divided into three roles: speaker (first person); addressee
(second person), and non-participant (third person). These roles can, in turn, be
associated with the grammatical category of number, and as deictic shifters they can be
associated with transfer in both spatial and temporal settings.
There are typologies that can readily be applied to this treatise: (i) Different crossreferential person forms can be distinguished for different syntactic positions, and these
may also be subject to variation with regard to structure complexity. They may also vary
in distribution strategies in accordance with whether they are predicate-function with
clausal-argument cross-reference, or they have a possessive-construction orientation.

<pgNo>35</pgNo>

(ii) There are many interpretations of what an adposition is, and therefore certain
delimitations might be observed in the inspection of person-marking compatibility with
adpositions. (iii) Notions of modifiers without nouns (henceforth MWN) might be dealt
with in the inspection of adnominal person marking.
There are hierarchies applicable to marking strategies with regard to alienability of
a possessum, salience of a discourse referent and scale of accessibility prominence
correlating to minimal marking strategies.

### 1.3. Research in the Erzya category of adnominal person
Research in the Erzya category of adnominal person is based on descriptive grammars
of the language, as well as, various treatises of possession, non-finites, argument agreement, and secondary declension, spanning the time from the publication of the first
grammar of Erzya (Gabelentz 1839) to the present. This tradition has long established
two means for the indication of adnominal person, which are AFFIXES and INDEPENDENT
PERSONAL PRONOUNS, the former of which is the focus of this treatise.
Within the range of morphological adnominal-person marking there are five major
clusters that may be identified as targets: (i) NOUN PHRASES; (ii) QUANTIFIERS; (iii) PERSONAL
PRONOUNS; (iv) ADPOSITIONAL PHRASES, and (v) NON-FINITE PHRASES in *-Om*. Noun and nonfinite phrases exhibit variation in adnominal person marking with strategies allowing for
lexical, affixal or both types simultaneously. Quantifiers attest to an obligatory affixal
marking of the controller/possessor and disallow lexical marking of cross-referential adnominal person. Personal pronouns disallow affixal marking in the nominative, whereas in
the oblique cases the standard language attests obligatory adnominal-person affixes. And
adpositions observe a strategy of complementary distribution, whereby they have a strong
tendency towards either affixal marking or lexical indication of a complement, be that a
genitive-case personal pronoun or a complement NP – in either the absolutive (nominative
singular equivalent form) or the genitive (indefinite, definite singular or definite plural).

#### 1.3.1. Background
Affixal marking of adnominal person, elsewhere referred to as controller/possessor
indexing or adnominal-type cross-referential marking (due to a range that cannot be
delimited with simple parts-of-speech categorization), is held by this author to be one of
the three declension types permeating the clause-constituent noun, quantifier, adpositional
and non-finite phrases of the Erzya language. This declension type is generally referred
to as the POSSESSIVE DECLENSION, a term contrived from its representation in the noun
phrase, the traditionally perceived range of case marking. As early as the first grammar
of the Erzya language Versuch einer Mordwinischen Grammatik ‘Attempt at a Mordvin

<pgNo>36</pgNo>

Grammar’ (Gabelentz 1839) controller/possessor indices for three persons and two
numbers of the possessor with occasional distinction nominative singular vs. nominative
plural and oblique-case forms, see table (1.14), here and henceforth the notation NA will
indicate either NOT ATTESTED or NOT APPLICABLE.
Table 1.14
P

NB

1

SG
PL

2

SG
PL

3

SG
PL

Possessor indices in Erzya as can be derived from Gabelentz (1839: 253–257)
NOM

OBL

*-Om*
*-NOk* ~ *-mOk*
*-OT*
*-Oŋk*
*-OzO* ~ *-OnzO*
*-Ost*

*-ON*
*-NOk*
*-OT*
*-Oŋk*
*-OnzO*
*-Ost*

Case forms specifically attested by Gabelentz
NOM

GEN

DAT

+
+
+
+
+
+

+

NA

NA

NA

ABL

INE

ELA

ILL

+
+

+
+
+
+
+
+

+

+
+
+
+
+
+

+

NA

NA

NA

NA

NA

+
+

+

+

NA

NA

NA

+
+
+
+

PROL
NA
NA
NA
NA
NA

+

According to Gabelentz there is a distinction between nominative and oblique cases in
the first and third persons, whereas other persons have not been specified, and therefore
the nominative/oblique orientation in the table has been assumed by this author on the
basis of tables and examples provided in Gabelentz (1839). The dative, naturally, must
not be overlooked, as Gabelentz has also discerned a dative form of the 3SG possessor
index, which directly correlates to *-Onsteń* of the modern literary language.
While Gabelentz limited his studies specifically to the linguistic phenomena found
in the Gospel, Wiedemann had no qualms of producing full-ﬂedged, hypothetical paradigms where modern knowledge of the language would call for at least some restraint
(see also Keresztes 1999: 128, where Keresztes remarks on the seemingly artificial optative paradigm according to Wiedemann (1865: 75).) Wiedemann claims (1865: 52–53)
what appear to be regularly formulated dative forms in the possessive declension for
all six persons, respectively, *-nen*, *-nent*, *-nenze*, *-nenek*, *-nenk*, *-nenst*. In addition,
in parentheses, the 2SG *-ten* and 3SG *-nsten* forms are given, which actually correspond
to dative forms attested in the possessive paradigms of the modern Erzya language. In
fact if we augment these two parenthetical forms to the 1SG of Wiedemann's six-member
paradigm forms *-nen*, we will arrive at the three singular person dative forms provided in
the most recent Erzya grammar (2000: 6, 95–100) for nouns; these can be represented in
the morphophonemic notations 1SG *-Neń*, 2SG *-Teń*, and 3SG *-Onsteń*. (See section 4.4.
PARADIGM DEFECTIVITY IN ERZYA POSSESSOR INDEXING.) The six-member paradigm, however, should not be entirely overlooked; it appears to derive from the personal-pronoun
paradigm, although it fails to appear elsewhere in the language. (See table (1.16), below)
The next grammar of descriptive import is the Mordwinische Chrestomathie
‘Mordvin Chrestomathy’ by Paasonen (1909). Here Paasonen gives explicit dialect
readings for some forms with implicit standard forms. In table (1.15) we will observe:
(i) an N element that does not appear in all slots of the paradigm; (ii) absence of dative
forms for the plural persons, and (iii) an absence of genitive forms for the possessa of
the 1PL and 2PL.

<pgNo>37</pgNo>

Table 1.15
P

Possessor indices in Erzya deriving from Paasonen (1953: 04-05)

Case and number of the possessum

POR
NB

NOM
SG

1

SG
PL
SG

2
PL
SG

3
PL

[Stand]

Dial

[Stand]

Dial

*-Om*
*-NOk*
*-Ot*

*-mOk*

*-On*
*-NOk*

*-Om*
*-mOk*
*-Ont*,
*-Ot*

*-Oŋk*
*-OzO*
*-Ost*

GEN

DAT

INE

*-On* [*-Oń*]

*-Ońe(ń)*

*-sO-m[-n]*

NA

NA

NA

PL

NA

*-Oŋk*
*-OnzO*
[*-OnzOk*]
*-Ost*

*-Ot́* [*-Ońt́*, *-Ot*,
*-Ont*]

*-Ot́e(ń)*, *-Ot́et́*

*-so-t*

NA

NA

NA

*-OnzO*

*-On(t)ste(ń)*

*-so-nzo*

*-Ost* [*-Onst*]

NA

*-so-st*

The scholar of Erzya and even Finno-Ugrian languages will note the dearth of N in the
nominative singular forms and its abundance in nominative plural and genitive forms
attested. In this N lies material evidence for plural marking hypotheses, which draw
on other Finno-Ugrian languages, as well (see section 4.2.2. NUMBER). The absence of
dative and genitive forms, it would seem, indicates that Paasonen is a descriptive grammarian, and that some variety of defectivity is being detected in the paradigms, although
it must not be assumed that “Not Attested” indicates absence of form or function. Paasonen, it can be observed, has unwittingly provided no standard form for plural possessa
with the 2SG reading, nor has he given genitive and inessive forms for the first and second persons plural. No attestation of dative forms for plural possessor indices draws our
attention to the fact that Paasonen has recognized dative forms for the singular possessor
indices very much aligned with those set off in parentheses by Wiedemann and held as
standard forms in modern grammars of the language today.
It is interesting to note that Paasonen employs the word ćora glossing it ‘son’,
namely, this might be construed as a kin term, and, in fact, kin terms were recognized as having a bearing on genitive and dative forms in Šaxmatovʺ's Мордовскій
этнографическій сборникъ ‘Mordvin ethnographic collection’, based on the Erzya
sub-dialect spoken in Orkino (1910: 797–798). The notion KIN TERM is first forwarded to
explain variation in the choice of genitive and dative forms of the possessa marked with
1SG and 2SG cross-referential morphemes, such that, Šaxmatovʺ provides a minimal
pair cross-referential marking strategy for the word ava ‘lady; mother’, by which the
object-marked possessum with 2SG cross-referential marking varies in form according to
the parametric feature [±KIN] of the referent, see (31).
(31) a. mon
večk+sa
ava+t
I_PRON-PERS-1SG.NOM love_V+IND.PRES.PRED-1SG>3SG lady_N+POSS-2SG
(Šaxmatovʺ 1910: 798) ‘I love your old lady.’

<pgNo>38</pgNo>

b. mon
večk+sa
ava+t́
I_PRON-PERS-1SG.NOM love_V+IND.PRES.PRED-1SG>3SG mother_N+POSS-2SG>[KIN]GEN
(Šaxmatovʺ 1910: 798) ‘I love your mother.’

Upon establishing the parametric distinction [±KIN], Šaxmatovʺ then exhibits a set
of kin terms featuring special genitive and dative forms in the cross-referential person
markers of the 1SG and 2SG. This parametric distinction has been retained in subsequent
descriptions of the language, although there is some variation in its attestation. Evsevʹev
(1963: 111–112), for example, gives a slightly slacker notion of kin or someone closely
associated/related to the speaker in conjunction with the genitive-case possessa of the
1SG possessor, but leaves the 2SG marking open to all nouns. In the most recent grammar
of Erzya, Aduškina illustrates the genitive and dative-case word forms of kin possessa
as symmetric, but this appears only as a tendency in modern Erzya literature.
Evsevʹev identifies several declension types which can be directly associated with
NP head dropping and the contextual secondary declension of modifiers, these include the
definite declension of adjectives, cardinal numerals, indefinite genitive, translative, inessive and comparative, as well as, genitive-case personal pronouns, (cf. Evsevʹev 1963:
51, 101–103, 126, 129–132, 134–135, 162). Morphologically, the indefinite-genitive
forms require a distal-demonstrative element *-śe* before subsequent declension, and
this appears to the same strategy Evsevʹev applies to his definite “possessive pronouns”,
which are best described as a concatenation GENITIVE-CASE PERSONAL PRONOUN + DISTAL
DEMONSTRATIVE PRONOUN + SECONDARY DECLENSION.

#### 1.3.2. The category of adnominal person in contemporary grammars of Erzya

The category of adnominal person in the most recent grammar of Erzya, Eŕźań keĺ,
morfologija ‘The Erzya language, morphology’, henceforth (EKM 2000), is addressed
in association with five different parts of speech. This is due to the scope of adnominaltype person, namely, noun phrases, non-finite phrases and adpositional phrases. Hence
adnominal-type person is dealt with in nouns under the grammatical category of possession (Aduškina 2000: 89–102), in numerals (Xaritonova 2000: 115–123), in pronouns
(Agafonova 2000: 124–145), in verbs under infinitive and gerunds (Cypkajkina 2000:
154–155, 225–227), and in postpositions (Buzakova 2000: 249–254). In addition to
its extensive range, adnominal person can be attested morphologically in two manifestations, i.e. adnominal person is expressed lexically in the form of the genitive-case
personal pronouns, which in a majority of clause-constituent phrases will appear as a
genitive-form modifier, and morphologically in cross-referential person marking, where
it manifests itself in a head-marking strategy postposed on that head. The category of
adnominal person in Erzya attests to three persons in two numbers, with no indication of
inclusive-exclusive semantics.

<pgNo>39</pgNo>

Personal pronouns
The extension of personal pronouns distinguishes a class of six stems adhering to mutually
applicable declension schemes for the various inﬂections. In practice this involves
a two-way split in the pronoun stems, namely, there is the grammatical stem of the
nominative case, on the one hand, and the oblique stem of the genitive case, on the other.
In a paradigmatic presentation of personal pronouns, shown below, the oblique cases
can be schematicized in the following: GENITIVE STEM + CX FORM + CROSS-REFERENTIAL
ADNOMINAL-TYPE MARKER, whereas the cross-referential marker is in agreement for person
and number with the semantics of the pronominal stem.
Table 1.16

Neutral personal pronoun paradigm in the five most frequent cases
NOM

1

SG
PL

2

SG
PL
SG

3

PL

mon
miń
ton
ti͔ń
son
si͔ń

GEN
PRON + POSS

moń
mińek
toń ~ tońt́
ti͔ŋk
sonze
si͔nst

DAT

mońeń
mińeńek
tońet́
ti͔ńeŋk
sońenze
si͔ńenst ~
si͔ńest

ABL
PRON.GEN

mońd́eń
mińd́eńek
tońd́et́
ti͔ńd́eŋk
sońd́enze
si͔ńd́est

ABE

+ CX + POSS
mońt́emeń
mińt́emeńek
tońt́emet́
ti͔ńt́emeŋk
sońt́emenze
si͔ńt́emest

Cross-referential adnominal person
Cross-referential adnominal-type person markers can readily be attested for the same
distribution found in the grammatical categories of person and number in the personal
pronouns, i.e. there are six distinguishable morpheme sets. By morpheme sets it is meant
that there are, in fact, more notions to be morphologically distinguished in the workings
of the cross-referential markers. One such matter is the distinguishing of a singular
possessum in the nominative case when dealing with first and third person singular
cross-referential markers, see table (1.17).
Table 1.17

POR

1

SG
PL

2

SG
PL

3

SG
PL

Cross-referential adnominal person markers in the nominative
POSSESSUM

POSSESSA

NOM.SG

NOM.PL

%Om
%ONOk
%OT
%Oŋk
%OzO
%Ost

%ON
%ONOk
%OT
%Oŋk
%OnzO
%Ost

<pgNo>40</pgNo>

The genitive and dative cases of the possessa introduce further peculiarities into the
possessive declension. Aduškina (2000: 96–98) implies that there are, in fact, no
genitive or dative forms for the cross-referential markers in possessive constructions
involving plural possessors, and a majority of the possessive constructions involving
singular possessors. Special genitive and dative forms for marking the possessa of first
or second person singular possessors are given for kin terms, and it is noted that the third
person singular cross-referential markers allow other nouns as well, see table (1.18).
(According to the Saransk School, the linking vowel, found between the word stem
and the first consonant of a given affix, is not actually part of the affix, and therefore
Aduškina has separated her linking vowels (see discussion of allophones following
table 1.2).)
Table 1.18

NOM
GEN
DAT

Kin terms as possessa of singular possessors in the nominative, genitive
and dative cases according to Aduškina (2000: 97)
Possessors
1SG
2SG
3SG
Possessum
Possessa
Possessum
Possessa
sazor%o%m
sazor%o%n
sazor%o%t
sazor%o%zo
sazor%o%nzo
sazor%o%ń
sazor%o%t́
sazor%o%nzo
sazor%o%ńeń
sazor%o%t́eń
sazor%o%nsteń

In table (1.19) it will be noted that marking differentiation in the grammatical category
of number only exists in the nominative, whereas both the genitive and the dative
morphemes are common to both singular and plural.
Table 1.19

NOM
GEN
DAT
ABL
INE
ELA
ILL
PROL
COMP
ABE

Possessa other than kin terms in the first person singular possessive declension
according to Aduškina (2000: 97)
Possessum
Possessa
vaĺma%m
veĺe%m
vaĺma%n
veĺe%ń
–
–
–
–
–
–
–
–
vaĺma%do%n
veĺe%d́e%ń
vaĺma%so%n
veĺe%se%ń
vaĺma%sto%n
veĺe%ste%ń
vaĺma%zo%n
veĺe%ze%ń
vaĺma%va%n
veĺe%va%n
vaĺma%ška%n
veĺe%ška%n
vaĺma%vtomo%n
veĺe%vt́eme%ń

In table (1.19), featuring common nouns, there is a structural ﬂaw apparent in the
treatment of the two common nouns vaĺma ‘window’ and veĺe ‘village’, namely, there
is no attested differentiation for number of possessa given beyond the nominative, and
therefore one might reformulate this table in the following paradigm (see table 1.20).
The implicit absence of genitive forms in Aduškina's presentation of the possessive

<pgNo>41</pgNo>

declension is echoed in Pall's brief discussion of the possessive declension, as well (Pall
1996: 13-14). With the exception of the 3SG and possibly 1SG forms there is no formal
distinction between word forms with functions generally attributed to the nominative
and genitive cases. (See section 4.2.1.1. Core Cases, below for further discussion.)
Table 1.20
vaĺma
‘window’

Possessa other than kin terms in the first person singular possessive
NOM.SG
NOM.PL
GEN
DAT
ABL
vaĺma+m
vaĺma+n
–
–
vaĺma+do+n

veĺe ‘village’

veĺe+m

veĺe+ń

–

–

veĺe+d́e+ń

INE

ELA

ILL

PROL

COMP

ABE

vaĺma+so+n
veĺe+se+ń

vaĺma+sto+n
veĺe+ste+ń

vaĺma+z+on
veĺe+z+eń

vaĺma+va+n
veĺe+van

vaĺma+ška+n
veĺe+ška+n

vaĺma+vtomo+n
veĺe+vt́eme+ń

Agafonova (2000: 136–141) indicates a number of definite and indefinite pronouns
which are feasibly declined in the possessive declension. Thus she indicates not only the
presence of definite pronoun forms, such as, ĺija+m other_PRON-DET+POSS-1SG, eŕva+m
each_PRON-DET+POSS-1SG and iśt́amo+m like-this_PRON-DET+POSS-1SG, but also indefinite
pronouns, such as, koj%meźe+m something_PRON-INDEF+POSS-1SG and kańa%kodamo+m
some-kind-of_PRON-INDEF+POSS-1SG. Agafonova (143–145) also provides genitive forms
of the personal and reﬂexive/intensive pronouns, which can be inﬂected in the definite
declension, see tables (1.21–1.22).
Table 1.21

Personal pronouns in genitive case used as modifiers

Neutral
moń
I_PRON-PERS-1SG.GEN
toń
you_PRON-PERS-2SG.GEN
sonze he/she/it_PRON-PERS-3SG.POSS3SG.GEN

Reﬂexive/intensive
mon+ś+eń
I_PRON-PERS-1SG.REFL+POSS-1SG>GEN
ton+ś+et́
you_PRON-PERS-2SG.REFL+POSS-2SG>GEN
son+ś+enze he/she/it_PRON-PERS-3SG.
REFL+POSS-3SG>GEN

mińek

miń+ś+eńek

we_PRON-PERS-1PL.REFL+POSS-1PL>GEN

ti͔ń+ś+eŋk

you_PRON-PERS-2PL.REFL+POSS-2PL>GEN

si͔ń+ś+est

they_PRON-PERS-3PL.REFL+POSS-3PL>GEN

ti͔ŋk
si͔nst

we_PRON-PERS-1PL.POSS-3SG.
GEN

you_PRON-PERS-2PL.POSS-2PL.
GEN

they_PRON-PERS-3PL.POSS-3PL.
GEN

In the transition from genitive-form reﬂexive/intensive pronouns, however, the first
and second person singular forms lose their possessive markers and therefore the 1SG
and 2SG concatenation scheme would indicate GENITIVE-CASE PERSONAL PRONOUN + DISTAL
DEMONSTRATIVE PRONOUN + SECONDARY DECLENSION, instead of the expected GENITIVE-FORM
REFLEXIVE/INTENSIVE PERSONAL PRONOUN + SECONDARY DECLENSION, cf. Evsevʹev (1963:
162–163). (In this author's transcription of the Cyrillic script the genitive-form stems in
the 1SG and 2SG personal pronouns are marked palatalized ń.)

<pgNo>42</pgNo>

Table 1.22

Genitive-case reﬂexive/intensive personal pronouns singular
with varied concatenation strategies
Singular NP head
1SG
2SG
3SG

SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

moń+śe+ś
moń+śe+ńt́
moń+śe+ńt́eń
moń+śe+d́e+ńt́
moń+śe+se+ńt́
moń+śe+ste+ńt́
moń+śe+va+ńt́
moń+śe+ks
moń+śe+ška+ńt́
moń+śe+vt́eme+ńt́

toń+śe+ś
toń+śe+ńt́
toń+śe+ńt́eń
toń+śe+d́e+ńt́
toń+śe+se+ńt́
toń+śe+ste+ńt́
toń+śe+va+ńt́
toń+śe+ks
toń+śe+ška+ńt́
toń+śe+vt́eme+ńt́

son+ś+enze+ś
son+ś+enze+eńt́
son+ś+enze+eńt́eń
son+ś+enze+d́e+ńt́
son+ś+enze+se+ńt́
son+ś+enze+ste+ńt́
son+ś+enze+va+ńt́
son+ś+enze+ks
son+ś+enze+ška+ńt́
son+ś+enze+vt́eme+ńt́
(cf. Agafonova 2000: 143–144)

Possession
Possessor indexing is used with a variety of possessa including: (i) kinship terms
indicating close relatives (32); (ii) nouns designating body parts (33); (iii) nouns
designating apparel (34); (iv) nouns designating physical, psychological states and
various phenomena ascribed to activities of the human organism (35), and (v) nouns
designating measurements and other qualities of objects (36) (cf. Tixonova 1980: 183–
187). (For other reading in Erzya possession, see Feoktistov 1963, Tixonova 1974,
Cygankin 1978 and Kudašova 2002.)
(32)

ava+zo+jak,
kat́a
baba,
mother_N+POSS-3SG>NOM.SG+CLT Katya_N-PRP.ABS old-lady_N.NOM.SG,
sa+ś
ćora+nsteń
ĺezda+m+o,
arrive_V+IND.PRETI.PRED-3SG son_N+POSS-3SG>DAT help_V+INF-LOC,
son+gak
uĺńe+ś
pek
he/she_PRON-PERS-3SG.NOM+CLT be_V+IND.PRETI.PRED-3SG very_ADV
kol
mekš+t́+ńe+ń
meĺga
jaka+mo+ńt́
skilled_A.NOM.SG bee_N+PL+DEF.PL+GEN after_POP walk_V+N-OM+GEN.DEF.SG
kuvalt,
ata+nsteń
́
ešt́o
according_POP, old-man_N+POSS-3SG>DAT already_ADV-TEMP
ĺezdakšno+ś
help_V+IND.PRETI.PRED-3SG
(Tixonova 1980: 183: [Èrkai]) ‘Even his mother, Gramma Katya, came to help her
son, she too was very good at working with bees, she had helped her old man [when he
was around].’

<pgNo>43</pgNo>


(33)

ked +eń
́
čama+m
hand/arm_N+POSS-1SG>NOM.PL face_N+POSS-1SG>NOM.SG
šĺakšnokšn+i͔ń
to+so
eŕekśija+ń
wash_V+IND.PRETI.PRED-1SG>3PL there_PRON-DEM+INE quicksilver_N+GEN
ved́+se
water_N+INE
(Tixonova 1980: 184: [Pyatayev, È.]) ‘I’ve washed my hands and face there in the
crystal-clear waters’

(34)

pet́a
di͔
miša
kajśe+śt́
Petya_N-PRP.NOM.SG and_CONJ Misha_N-PRP.NOM.SG take-off_V+IND.PRETI.PRED-3PL
poŋks+ost
-panar+ost
śulm+iź
pants_N+POSS-3PL-shirt_N+POSS-3PL tie_V+IND.PRETI.PRED-3PL>3P
pŕa+z+ost
di͔
valg+śt́
head_N+ILL+POSS-3PL and_CONJ go-down_V+IND.PRETI.PRED-3PL
ved́+eńt́eń
water_N+DEF.SG.DAT
(Tixonova 1980: 184: [Abramov, K.]) ‘Petya and Misha took off their clothes, tied
them on their heads and went down to the water.’

(35)

paŕak,
t́e
t́ej+eź+gak
ańśak
perhaps_ADV, this_PRON-DEM.NOM.SG do_V+PTC-OZ+CLT only_ADV
śe+ń
kis,
štobu
mixal
di͔
that_PRON-DEM+GEN for_POP.ILL, so-that_CONJ Mikhal_N-PRP.NOM.SG and_CONJ
anka
keńarks+ost
kijak
marto
Anka_N-PRP.NOM.SG joy_N+POSS-3PL anybody_PRON-INDEF.NOM.SG with_POP
avoĺ+t́
javo
not_V-AUX-NEG-CONJ+PL share_V.CONNEG
(Tixonova 1980: 184: [Èrkai, N.]) ‘Maybe, this had actually been done so that Mikhal
and Anka would not share their jubilation with anyone.’

(36)

ton,
jefim
ivanovič,
davaj
you_PRON-PERS-2SG.NOM, Yefim_N-PRP.NOM.SG Ivanovich_N-PRP.NOM.SG, give_PRT-IMP
uźeŕe+ńt́
moń+eń,
t́e
ax_N+GEN.DEF.SG I_PRON-PERS-1SG.DAT.POSS-1SG, this_PRON-DEM.ABS
t́ev+eś
moń.
ańśak
jovt+i͔k,
thing_N+NOM.DEF.SG I_PRON-PERS-1SG.NOM. only_ADV tell_V+IMP.PRED-2SG>3SG,
kodamo
[stoĺ+eńt́]
keĺe+ze
what-kind-of_PRON-INTER-A.NOM.SG [table_N+GEN.DEF.SG] width_N+POSS-3SG>NOM.SG
di͔
kuvalmo+zo
karm+i
uĺ+em+e
and_CONJ length_N+POSS-3SG>NOM.SG begin_V+IND.PRES.PRED-3SG be_V+INF+LOC
(Tixonova 1980: 185: [Èrkai 1969: 40]) ‘[Okay] Yefim Ivanovich, hand me that ax,
this is my job. Just tell [me] how wide and long it is going to be.’

<pgNo>44</pgNo>

Controller/possessor indexing is not limited to the semantics of possession rather this
indexing strategy is used with contextually unique target referents, as well, which have
been addressed as items unique to a given situation or the universe. This uniqueness
or high physical salience, is perhaps parallel to the very same deictic marking strategy
found in the indication of book prices, see (37), when the price of a book is given in Erzya on the cover of the book, we find the word followed subsequently by the price value,
‘price’ is an integral attribute or dimension of the referent ‘book’.
(37)

pit́ńe+ze
price_N+POSS-3SG>NOM.SG
‘its price’

In a parallel to the high physical salience attested in (37), we will note that an integral
part of a stream, may well be the temperature of the water in it – where high physical
salience is especially well perceived if the water is exceptionally cold, see (38). (See
discussion in section 4.2.3.1.3. THIRD PERSON.)
(38)

koda
poŋg+it́
si͔zrań+ev?
how_PRON-INTER end-up_V+IND.PRETI.PRED-2SG Syzran_N-PRP+LAT?
miŕd́e+m
to+sto+ń,
– vera
husband_N+POSS-1SG>NOM.SG there_PRON-DEM+ELA+GEN, – Vera_N-PRP.NOM.SG
kaj+ińźe
tufĺa+t́+ńe+ń
di͔
take-off_V+IND.PRETI.PRED-3SG>3PL slipper_N+PL+DEF.PL+GEN and_CONJ
eskeĺd́a+ś
čud́ikeŕks+eńt́eń.
– vaj,
stride_V+IND.PRETI.PRED-3SG stream_N+DEF.SG.DAT. – oh_INTERJ,
kodamo
keĺme
ved +eze!
́
what-kind-of_PRON-INTER-A cold_A.NOM.SG water_N+POSS-3SG>NOM.SG
(Altyshkin 1986: 28) ‘How did you end up in Syzran? / My husband [is] from there, –
Vera took off her slippers and stepped into the stream. My, this water is cold!’

Cross-referential adnominal-person marking in Erzya is manifest in the range of noun
phrases, personal pronouns and quantifiers, as well as, adpositional and non-finite
phrases. Although certain parallels can be drawn between these five subranges with
regard to concatenation ordering, there are other parameters, too. These might include
the optionality of morphological marking, the variation between morphological and
lexical marking of adnominal person, the defectivity of the genitive and dative slots of
the possessive declension, and the disparity of concatenation in secondary declension
strategies.

<pgNo>45</pgNo>
## 2. Methodology and Corpora

Outline of methodology
This chapter will describe the methodology followed in the study of adnominal person
in the morphological system of Erzya and address various theoretical issues encountered
therein.
The steps in such a study can be enumerated in the following:
I
A database has been established to serve as the empirical basis of study. This consists of compiling materials representative of work in Erzya grammar and two text corpora of the Erzya written language. The sources of grammars, descriptions and treatises
of the language span the era 1839 to 2010, and they comprise works by authors both native and non-native. The written sources, consisting of mainly original Erzya literature
from the 1880s to the present, have been subdivided into a so called MAJORITY CORPUS,
comprising a total of 142 documents, and a subset thereof consisting of 9 documents, the
MINORITY CORPUS, which has been semi-automatically parsed with a two-level analyzer
constructed according to the descriptions afforded in steps (II-III) and subsequently disambiguated manually.
II
A description will be given of the phonological phenomena attested in the orthography of the literary language which will include an attestable enumeration of phonemes in the language and ones utilized in the treatise. Additionally, regular-expression
notations illustrating relevant sound variation applicable to two-level allomorphic description will also be given.
III
A description of stem types associated with the range of adnominal-person marking will be given with a subsequent morpho-semantic inspection of all affixes associated
with these stem types, i.e. case, deictic marking (possessive and definite declension),
nominal conjugation and enclitic marking, such as would provide necessary information
for the construction of a two-level semi-automatic parser for use in the disambiguation
of the MINORITY CORPUS.
IV
The 13 case forms compatible with adnominal-person marking, as outlined in the
morpho-semantic inspection, will be used in combination with frequency data to establish sublexica pertinent to the study of adnominal-person marking.
V
A two-level semi-automatic parser has been constructed, utilizing the descriptions
afforded in II-III, for rendering a parsed version of the MINORITY CORPUS, which was then
manually disambiguated so that comparative data could be obtained for the inspection of
some, otherwise, ambiguous paradigm cells obtaining in the MAJORITY CORPUS.
VI
Statistics will be given for variations in the compatibility of sublexicon-case alignments extracted in step IV with morphological versus lexical adnominal person based on
data from both corpora.

<pgNo>46</pgNo>

VII An inspection will be made of defectivity focusing on the genitive slot of the possessive declension.
VIII An inspection will be made of adnominal-person marking and its compatibility
with two strategies of contextual secondary declension, MWN.
In practice, these steps are not disjoint, but are necessarily overlapping to some degree.
In the following sections I will discuss the choices made in this methodology in greater
detail.

### 2.1. Corpora
In order to facilitate a representative illustration of the Erzya language, there are certain
facets of the language that can be best attested on the basis of a majority corpus. This
means that morphological and orthographical practices of the language should be documented on the basis of positive evidence, i.e. the presence of morphological forms, as
well as the compiling of attested morphological paradigms and syntax data. To this end
a majority corpus, consisting of 140 publications in Erzya rendered in XML format, has
been established along with a semi-automatically parsed and manually disambiguated
minority corpus representing the writings of six Erzya authors. Since the establishment
of the majority corpus involves the scanning and proof-reading of all 140 texts (see
<http://www.ling.helsinki.fi/~rueter/rsc/rueter-ErzyaSource.xml>), it can be characterized as time-consuming, the criteria for selection of a representative minority corpus,
however, are best outlined below.
In an endeavor to delimit literary corpora illustrative of the grammar and usage
pool sources available in a recently established literary medium (Erzya 1821 to present),
it is necessary that specific parameters be set. Such delimiters entail: (1) the language
of origin; (2) the point on the revision-editing cline represented by the text, and (3) the
availability of additional materials for author inspection in the complete text corpora.
By means of the language of origin parameter we are able to discriminate in favor
of original native texts, which might help to avoid the frequency of translation ﬂaws,
i.e. translingual interference, resulting in statistical skewing of usage strategies involving what would otherwise be considered native-language phenomena. This delimitation
does not, however, rule out the establishment of translation corpora, since these are useful in parallel corpora research, whose results can aid in the advancement of translation
strategy and stylistic instruction. Furthermore, translated literature might be the only
domain attesting genres depictive of user targeted (dogmatic), user oriented (access)
literature in the original language.
In an effort to establish variants of the written language similar or adjacent to those
represented in interactional communication, i.e. dialogue as conceived by an individual <pgNo>47</pgNo> native speaker, we will give a preference to manuscripts, as representative of original
but possibly revised renditions of an individual language user's conception of language
in context. The language found in this first phase of the writing process would presumably differ from that found in edited versions, where the written product is subject to the
coordinated efforts of at least two individuals, whereas revised versions of published
materials often witness the incursion of evaluating peers, ideologists, etc. It should be
noted, however, no matter how many times a piece is rewritten, proof-read and edited, it
must to some extent retain something original from its author, and therefore, regardless
of whether the publisher was a typography, journal, publishing company or other, the
name of the author should be included whenever it is available. (There is a tendency in
modern research of the Erzya and Moksha language to leave the authors unmentioned
if they happen to be published in a journal. This, of course, is like indicating the name
of a prominent journal when it has published an excerpt from Shakespeare's works, instead of Shakespeare himself.) The indication of authors helps in the identification of
synchronic-geographical parameters that might readily correlate with treatises on Erzya
dialect research. Awares of the relatively short history of written Erzya, it would appear
that a dialect-synchronic framework of Erzya studies might be more feasible than a
hypothetical-diachronic framework (cf. Aasmäe 2007: 269-270).
Original publications undergo the scrutiny of possible proof-readers and editors,
who subject the writing to the standardization efforts of their own, persons conceivably
representing a different language background to that of the author. Since any amount of
scrutiny from a second party may bring about alterations, so called enhancements and
embellishments, in the individual's integrational efforts, we must assume that we are no
longer dealing with a language form entirely within the individual's competence of integrational language. Original publications are, however, the written form to be presumed
closest to the original manuscript, and any subsequent publications or editions will be
assumed to depart even further from that origin.
When writings are subjected to further self-introspection, scrutiny and editing as
is likely in the case of second printings and editions, they have often undergone adjustments involving alterations in word usage, syntactic structure, and, perhaps, even
thematical development. This type of alteration may enhance the artistic value of the
literary work, but it divorces it from the original individual effort at integrational communication on an individual level. Refined literary works might then make their own
category of text corpora. Hence it might be argued that there is always a difference between an original writing by a refined author and the refined text of an original author.
By delimiting the Erzya literary corpora of manuscripts and first printings of native writings further with a quantity factor of 100,000 words, we limit ourselves to a set
of mature writers, who over time have published at least two large pieces of literature.
Here Kirillov, whose available materials consist of collected works and a translation
from the majority Russian language, will serve as a conceivably skewed sub-subset:

<pgNo>48</pgNo>
48

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

▪

Abramov, Kuz'ma G. (1914–2008)

▪

Bryzhinski, Mikhail I. (1951)

▪

Doronin, Aleksandr M. (1947)

▪

Kutorkin, Andrei D. (1906–1991)

▪

Shcheglov, Aleksandr S. (1916–1989)

▪

Kirillov, Pyotr S. (1910–1955)

Table 2.1
Erzya
writer

The MINORITY CORPUS comprises the following publications:
Original Publication
Year of
Title – genre
language status
acquisition

Words
total

Abramov
Bryzhinski
Bryzhinski

Erzya
Erzya
Erzya

First printing
Manuscript
First printing

1988
2006
1991

Purgaz – novel
Kirdažt – ethnofantastics
Eŕamodo nadobija –
short stories, essays

131,162
50,666
46,903

Bryzhinski
Doronin
Kutorkin
Shcheglov
Kirillov

Erzya
Erzya
Erzya
Erzya
Erzya

First printing
First printing
First printing
First printing
Second
printings

1983
2001
1987
1980
1997

Polovt – short story
Kuźma Aĺekśej – novel
Lažni͔ ća Sura, III – novel
Kavkśt́ čačoź, I – novel
(Selected writings)

36,993
102,819
94,665
94,450
78,620

Kirillov

Russian

First printing

1951

(Bubennov: “Belaya beryoza”) Ašo kiĺej
– novel

179,256

Total words

815,534

### 2.2. Phonological phenomena of modern Erzya
This portion will include the establishment of a set of phonemes in the Erzya language,
and a description of their interaction in the phonetic processes. First, attestations of
phoneme status will be made for one additional vowel and consonant in the modern
Erzya language. The former attestation will require a scrutiny of majority-corpus word
forms for minimal-pair attestation in WORD STEMS, whereas the latter will involve the
scrutiny of WORD STEMs versus WORD STEM + [ DECLENSION | ENCLITIC MARKING ] schemes.
Second, outlines will be provided for phenomena central to the orthographic workings
of the written language, e.g. vowel harmony, palatal harmony, devoicing, voicing, loss
of affix-initial v, stem-final vowel loss.

<pgNo>49</pgNo>
METHODOLOGY AND CORPORA

49

### 2.3. Morpho-semantic evaluation of stems and affixes
The morpho-semantic description of stems and affixes comprises the establishment of
three noun-stem types and the inspection of affixes used in the three layers of noun
inﬂection. Three noun-stem types can be derived from declension notations provided
in the latest Erzya-Russian dictionary ЭРЗЯНЬ-РУЗОНЬ ВАЛКС (henceforth ERV 1993).
Case forms, definitions and attestation involve work with several grammars of the
Erzya language, and majority-corpus attestation of data is provided, where possible, for
morphemes with refuted or dubious attestation in grammars.

### 2.4. Compatibility of case and
adnominal-person morphology
The majority corpus will be searched for co-occurrences of case and adnominal-person
marking. This is achieved by counting unique word forms in the corpus, and then
filtering for those forms with morphological case and person marking. A list of unique
word forms with their correlating frequency counts will be derived from the majority
corpus using the following commands:
$ cat corpus.txt | tr '\ ' '\n' |egrep -f cyrillics.regex | sort | uniq -c| sort -nr >

This will produce a read-out of word forms, written in Cyrillics, with a number
corresponding to the number of hits for each pattern. Thus the ten most frequent
word forms in the majority corpus of about four and a half million words, of which
there are about 286,876 unique word forms, can be exhibited in table (2.2), whereas
the transcription and parse columns have been added by this author to facilitate better
comprehension by the reader.
Table 2.2
Ten most frequent word forms in the Erzya majority corpus of 4.5 million words
Order Frequencies
Word forms
Transcription Parse
1
94,620
ды
di͔
and/but_CONJ
2
70,586
а
a
not_PRT-NEG
but_CONJ
3
30,881
сон
son
he/she/it_PRON-PERS-3SG.NOM
4
21,242
марто
marto
with_POP
5
20,923
эзь
eź
not_V-AUX.PRETI.PRED-3SG
6
18,507
те
t́e
this_PRON-DEM.NOM.SG
7
18,125
кода
koda
how_PRON-INTER
when_PRON-REL
8
17,457
лангс
laŋg+s
on/at_POP+ILL
9
16,803
мерсь
meŕ+ś
say_V+IND.PRETI.PRED-3SG
10
16,386
Сон
son
he/she/it_PRON-PERS-3SG.NOM

<pgNo>50</pgNo>
50

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

In table (2.2) it will be noted that the 3SG personal pronoun appears in both line 3 and
line 10. The upper-case form of this personal pronoun in line (10) indicates that the word
form was located in sentence-initial position; this provides an insight into sentencestructure that is especially utilized in the attestation of adposition and adnominal-person
form variation.
Once the word forms and frequencies have been extracted, a filter consisting of
word-final inﬂections equivalent to cross-referential person markers followed by optional nominal predication markers and finally an optional clitic will be used in combination
with an immediately preceding case marker. The REGEX below provides an example of
how co-occurrence for the nominative and person patterns, the most ambiguous, will be
derived.
Table 2.3

Derivation of nominative-case predicate-person patterns

1SG = (а|я|о|ё|е|э|и|ы|у|ю)м(|гак|ан(|гак)|ат(|как)|та(н|д)о(|як)|(о|е)линь(|гак)|(о|е)
лит(ь|як|ькак)|(о|е)ль(|гак)|(о|е)линек(|ак|как)|(о|е)лиде(|як)|(о|е)льт(ь|як|ькак))(<|$| )
##
1SG = (а|я|о|ё|у|ю)н(|гак|ан(|гак)|ат(|как)|та(н|д)о(|як)|(о)линь(|гак)|(о)
лит(ь|як|ькак)|(о)ль(|гак)|(о)линек(|ак|как)|(о)лиде(|як)|(о)льт(ь|як|ькак))(<|$| )
##
1SG = (е|э|и|ы)н(ь|гак|ян(|гак)|ят(|как)|тя(н|д)о(|як)|(е)линь(|гак)|(е)лит(ь|як|ькак)|(е)
ль(|гак)|(е)линек(|ак|как)|(е)лиде(|як)|(е)льт(ь|як|ькак))(<|$| )
##
2SG = (а|я|о|ё|у|ю)т(|как|ан(|гак)|ат(|как)|та(н|д)о(|як)|(о)линь(|гак)|(о)
лит(ь|як|ькак)|(о)ль(|гак)|(о)линек(|ак|как)|(о)лиде(|як)|(о)льт(ь|як|ькак))(<|$| )
##
2SG = (е|э|и|ы)т(ь|как|ян(|гак)|ят(|как)|тя(н|д)о(|як)|(е)линь(|гак)|(е)лит(ь|як|ькак)|(е)
ль(|гак)|(е)линек(|ак|как)|(е)лиде(|як)|(е)льт(ь|як|ькак))(<|$| )
##
3SG.NOM.SG = (а|я|о|ё|е|э|и|ы|у|ю)з((о|э)(|як)|ан(|гак)|ат(|ак|как)|(о|э)линь(|гак)|(о|э)
лит(ь|як|ькак)|(о|э)ль(|гак))(<|$| )
##
3SG = (а|я|о|ё|е|э|и|ы|у|ю)нз((о|э)(|як)|от(|ак|как)|эт(ь|як|ькак)|ан(|гак)|ат(|ак|ка
к)|ота(н|д)о|этя(н|д)о(|як)|(о|э)линь(|гак)|(о|э)лит(ь|як|ькак)|(о|э)ль(|гак)|(о|э)
ли(нек(|ак|как)|де(|як))|(о|е)льт(ь|як|ькак))(<|$| )
##
1PL = (а|я|о|ё|у|ю)нок(|ак|как|ан(|гак)|ат(|ак|как)|та(н|д)о(|як)|олинь(|гак)|олит(ь|як|ьк
ак)|оль(|гак)|олинек(|ак|как)|олиде(|як)|ольт(ь|як|ькак))(<|$| )
##
1PL = (е|э|и|ы)(нек|[^<аяёоюу]*нэк)(|ак|как|ан(|гак)|ат(|ак|как)|та(н|д)о(|як)|елинь(|га
к)|елит(ь|як|ькак)|ель(|гак)|елинек(|ак|как)|елиде(|як)|ельт(ь|як|ькак))(<|$| )
##

<pgNo>51</pgNo>
METHODOLOGY AND CORPORA

51

2PL = (а|я|о|ё|е|э|и|ы|у|ю)нк(|ак|как|ан(|гак)|ат(|ак|как)|та(н|д)о(|як)|(о|е)
линь(|гак)|(о|е)лит(ь|як|ькак)|(о|е)ль(|гак)|(о|е)линек(|ак|как)|(о|е)лиде(|як)|(о|е)
льт(ь|як|ькак))(<|$| )
##
3PL = (а|я|о|ё|е|э|и|ы|у|ю)(ст)(|как|ан(|гак)|ат(|как)|та(н|д)о(|як)|(о|э)линь(|гак)|(о|э)
лит(ь|як|ькак)|(о|э)ль(|гак)|(о|э)линек(|ак|как)|(о|э)лиде(|як)|(о|э)льт(ь|як|ькак))(<|$| )

Data extracted with this set of regular expressions will be used for establishing sublexica
typically associated with adnominal person. Sublexicon distinctions will show close adherence to the parts of speech established by Mariya Imajkina (2000: 56–59), where she
enumerates ten different parts of speech: NOUNS, ADJECTIVES, NUMERALS, PRONOUNS, VERBS,
ADVERBS, POSTPOSITIONS, CONJUNCTIONS, PARTICLES, and INTERJECTIONS. Additional semantic
characteristics will be taken into consideration to provide a more concise description of
adnominal-person morphology.
The data may tend to provide ambiguous readings for the first and second persons
singular of the nominative and genitive case candidates, due to the readings indefinite
genitive for -нь -Oń and indefinite nominative plural for -ть/-т -T. The reading INDEF.
GEN for -нь <= -Oń can be contrasted with the reading POSS-1SG>PL/OBL -нь <= -ON; and
the reading PL for -ть/-т <= -T can be contrasted with the readings POSS-2SG -ть/-т <=
-OT and POSS-2SG>[+KIN]GEN -ть <= -t. .́ (This is a counter to the assumption that -ть/-т
can be reduced to T representation (cf. Abondolo 1987: 219-233).) These two ambiguous sets also illustrate limitations in “egrep” strategy attestation and provide an indication as to why certain strategies of avoiding 1SG and 2SG morphemes might be merited,
for example, automatic parsing strategies involving other persons.

### 2.5. The semi-automatic parser
In a morphological analysis of the Erzya language one must bear in mind the extent of
synchronic inﬂectional mechanisms utilized by the collective of speakers and writers of
the language. By defining DECLINABLE WORDS as words that can take case marking in the
same manner as nouns, with semantic limitations, we will arrive at subsets of the Erzya
lexicon enumerated in nouns, adjectives, numerals, pronouns, non-finites, spatial adverbials and adpositions. These subsets of the Erzya lexicon attest to varied implementations of the three declension types, i.e. the INDEFINITE, the DEFINITE and the POSSESSIVE
DECLENSIONS.
The methodological principles required for the description of the possessive declension in Erzya parallel work in the MORPHO-SEMANTIC ANALYSIS OF THE HUNGARIAN
NOUN PHRASE by Moravcsik (2003). Her work is quite compatible with the preparatory morpho-semantic evaluation required in the construction of a finite-state two-level
morphological parser, such as implemented in the Open Morphology of the Helsinki
Finite-State Transducer (<http://www.ling.helsinki.fi/kieliteknologia/tutkimus/hfst/>),

<pgNo>52</pgNo>
52

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

henceforth HFST. (See also Krister Lindén, Miikka Silfverberg and Tommi Pirinen
2009.) The two descriptions, it should be noted, have different scopes, and although a
semi-automated analysis of Erzya, the language of study, might attest to a finer granularity in subdivisions of the lexicon made possible by co-occurrence constraints inherent in the morphological concatenation strategies of the language, disambiguation for
homonymous forms would be the target of a clausal syntactic description and/or manual
disambiguation of a given analyzed text.
The construction of an HFST-based morphological analyzer involves establishing morpho-syntactic building blocks and structural rules that will insure the wellformedness of a non-contextual word form through the delimitation of co-occurrence
in phonemes, morphemes and sememes, and the delimitation of linear ordering. An
implementation of such delimitation strategies can be outlined in the following sets
and formulations, which correspond to the description of Erzya rendered in sections
(3.–4.3.): (i) an alphabet of the Erzya language, i.e. phonological and graphical representations thereof (alphabet); (ii) sets of letters representing various phonetic/graphic
feature groups inherent to phonetic contexts (sets); (iii) phonetic/graphic contexts intrinsic to allomorphic variation in the working of rules (contexts); (iv) rules which allow or
disallow co-occurring phonetic/graphic contexts (rules); (v) part-of-speech groups with
morpho-semantic granularity inherent in the derivation of well-formed lexemes (rootlexicon), and (vi) continuation lexicon strategies providing for proper linear ordering of
the morphemes in a given word (continuation lexicon). Thus the extensible structural information and sets utilized in the construction of the two-level parser allow for addressing matters of cumulative expression, extended exponence, morpheme co-occurrence
and linear ordering simultaneously, and therefore provides implementational force, to
the otherwise parallel description afforded in the information extracted from Hungarian
by Moravcsik, see sample parse table (2.4).
Table 2.4
Example of an analyzed text fragment
Ton ramik ašo eĺi seń paćańt́? – Ašońt́. (Cf. Egorova 1976)
‘Did you buy the white or the blue kerchief? – The white [one].’
XML input file for erzya.fst:
<p>
<sent><txt>Тон рамик ашо эли сэнь пацянть?</txt></sent>
<sent><txt>Ашонть.</txt></sent>
</p>
Output:
<?xml version=”1.0” encoding=”utf-8”?>
<p>
<sent>
<txt><const type=”text” wordForm=”Тон”>
<parse id=”тон”>+Pron+Pers+2Sg+Nom+NoPredx+NoClitic</parse>
</const>

<pgNo>53</pgNo>
METHODOLOGY AND CORPORA

53

<const isa=”ws” type=”wb”/>
<const type=”text” wordForm=”рамик”>
<parse id=”рамамс”>+Verb+Orth_morph+Imp+23+NoClitic</parse>
<parse id=”рамамс”>+Verb+Orth_morph+Ind+PretI+23+NoClitic</parse>
</const>
<const isa=”ws” type=”wb”/>
<const type=”text” wordForm=”ашо”>
<parse id=”ашо”>+NCom+Inanim+Cnt+Cx+Indet+Sg+Nom+0Suf+NoPredx+NoClit
ic</parse>
<parse id=”ашо”>+Adj+Cx+Indet+Sg+Nom+0Suf+NoPredx+NoClitic</parse>
</const>
<const isa=”ws” type=”wb”/>
<const type=”text” wordForm=”эли”>
<parse id=”эли”>+Conjunction</parse>
</const>
<const isa=”ws” type=”wb”/>
<const type=”text” wordForm=”сэнь”>
<parse id=”сэнь”>+Adj+Cx+Indet+Sg+Nom+0Suf+NoPredx+NoClitic</parse>
<parse id=”сэнь”>+NCom+Inanim+Cnt+Cx+Indet+Sg+Nom+0Suf+NoPredx+NoClit
ic</parse>
</const>
<const isa=”ws” type=”wb”/>
<const type=”text” wordForm=”пацянть”>
<parse id=”паця”>+NCom+Inanim+Cnt+NoLVStem+Cx+Det+Sg+Gen+NoClitic</
parse>
</const>
<const isa=”?” type=”punct”/></txt>
<txt><const type=”text” wordForm=”Ашонть”>
<parse id=”ашо”>+NCom+Inanim+Cnt+NoLVStem+Cx+Det+Sg+Gen+NoClitic</
parse>
<parse id=”ашо”>+Adj+NoLVStem+Cx+Det+Sg+Gen+NoClitic</parse>
</const>
<const isa=”.” type=”punct”/></txt></sent>
</p>

<pgNo>54</pgNo>
54

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Manual disambiguation
Once the corpora have been automatically parsed there are a number of disambiguation
problems to be dealt with. Whereas most personal pronoun forms have singleton parses,
the ambiguous form si͔ń has two alternative readings: one is the third person plural ‘they’
and the other a finite verb form ‘I arrived’, see table below. Further ambiguity can
be detected in the pronouns/adpositions, such as that found in t́eń with the readings
genitive-form proximal demonstrative pronoun ‘of this; this (object)’, and dative of the
first person singular ‘to me’, see tables (2.5) and (4.49a-b).
Table 2.5
Examples of items requiring manual disambiguation in this treatise
Homonyms
Ambiguous parses
si͔ń
they_PRON-PERS.NOM
arrive_V.PRETI.PRED-1SG
t́eń
to/for_ PRON-DAT.POSS-1SG
this_PRON-DEM-SG.GEN

### 2.6. Sublexicon-case alignments and variation
in adnominal person
The sublexica distinguished in section 2.4. will be used in the inspection of case and adnominal person compatibility in the majority and minority corpora. Here the words attested for high statistic frequency with POSSESSIVE DECLENSION, that is, case and adnominal
person compatibility, will be inspected for compatibility with lexical adnominal person.
Thus claims made of free variation in adnominal-person form might be afforded statistical data for more extensive understanding of the phenomena involved, and parallels may
be drawn between same-case inﬂections of word forms in different parts of speech.

### 2.7. Defectivity in the genitive slot of the possessive
declension
Defectivity as discussed in Karlsson (2000) is a phenomenon that is not specific to the
Finnish language. In fact, defectivity in Erzya is not unknown; Keresztes (1999: 128-130)
comments on the apparently artificial optative paradigms of Wiedemann and Budenz,
perhaps he means that both grammar writers have analogically formed paradigms.
In this treatise of Erzya, defectivity is seen in the genitive and dative slots of the
possessive declension charts, where the two instances can be distinguished as separate
phenomena. There are differences in morphological representation, on the one hand,
and disparity in the definition of what a kin term is in the 1SG and 2SG contexts. The
genitive case of the possessive declension can be conﬂated with that of the nominative
in plural persons and 2SG in the modern literary language, and there is variation in the
1SG possessive declension; as such the addition of two more markers, 1SG and 2SG for

<pgNo>55</pgNo>
METHODOLOGY AND CORPORA

55

special kin terms, constitutes a surplus of genitive marking. The dative case of the possessive declension, on the contrary, is only attested in the two special kin-term forms of
the 1SG and 2SG possessive declension and the 3P (see DATIVE in subsection 4.2.1.1. CORE
CASES.) When we address the matter of functions attributed to the genitive, see GENITIVE
in section 4.2.1.1. CORE CASES, we will note that it can be associated with the functions
of POSSESSOR, ADPOSITION COMPLEMENT and FINITE-VERB ARGUMENT form with person agreement in the object conjugation, and therefore we can attest a presence of genitive forms
for the grammatical categories of person and number, albeit only the 3SG marker offers
indisputable proof for this, and then only with singular possessa. Thus the special markers for the 1SG and 2SG genitive slots of kin terms are additions to the six or seven genitive forms already present, i.e. some variants of the language, especially Alatyr'-dialect
types, distinguish number in the 1SG genitive, as well as 2SG, 1PL and even 3PL. The
dative, however, does not attest to an underlying set of six adnominal-person markers,
instead there are only three markers that are frequently quoted in the grammars of the
language. Hence the dative case of the possessive declension attests to a dearth of markers, as opposed to the surplus attested for the genitive case. Upon closer inspection of
the Šaxmatovʺ's attestation of 1SG and 2SG kin terms, it becomes apparent that 1SG kin
terms indicate distinct, singular referents – usually elder than ego – and 2SG kin terms indicate shared-information referents that could be interpreted with little ambiguity by the
merits of 2SG possessive declension or definite declension. Finally, whereas 1SG special
genitive marking appears wide-spread, the 2SG kin-term strategies are less so. Hence, it
has been hypothesized that use of special forms for the two persons 1SG and 2SG will not
be equally attestable in the written corpora.
This section will place special emphasis on the description of defectivity in the
genitive case of the possessive declension, utilizing dialect attestations and treatises to
enhance the picture provided in grammars of the language and the majority corpus. It
will, where possible, attempt to illuminate the workings of dative paradigm defectivity,
as well.


### 2.8. Secondary declension
Secondary declension is a phenomenon of the noun phrase, and may best be described
as the contextual dropping of a predictable head noun, such that, one of its modifiers
becomes the main item of the NP, and thus we can speak of MWN (modifiers without
nouns), cf. Gil (WALS feature/chapter 61 [Adjectives without nouns]). Here, modifiers
will be scrutinized for compatibility with two different strategies of MODIFIER-WITHOUTNOUN marking (henceforth MWN), ZERO marking versus SPEAKER-ORIENTED DEMONSTRATIVE
marking (henceforth SOD). Subsequently, a description will be given of adnominalperson-marking compatibility with the two strategies of MWN, whereas word items will
be examined for compatibility with secondary declension in possessive-declension
forms, on the one hand, and possessive-declension word forms will be examined for
compatibility with secondary declension of any form, on the other.

<pgNo>56</pgNo>
<pgNo>57</pgNo>
## 3. Phonology

Our understanding of form is readily developed by considering: (1) phonemes in Erzya
transliteration, and (2) phonetic phenomena behind allomorphic variation.

### 3.1. Phonemes in Erzya transliteration
The discussion of Erzya phonetics will be limited to the phenomena attested in the written corpora, a subset of all Erzya language publications since 1821 (see corpora, 2.1.),
that have a bearing on allophonic and allomorphic variation in word forms where adnominal-type cross-referential person marking can occur. For this reason special attention may be afforded items which, otherwise, are foregone in grammars of the language.
According to the most recent treatise of Erzya phonetics “Неень шкань эрзянь
келесь, фонетика” (‘The modern Erzya language, phonetics’ / ‘The Erzya language is
a modern one, phonetics’) by Maria D. Imajkina, the language can be phonematically
represented with 5 vowels and 28 consonants: <а, э, и, о, у>, <б, в, г, д, д', ж, з, з', й,
к, л, л', м, н, н', п, р, р', с, с', т, т', ф, х, ц, ц', ч, ш> (Imajkina 2008: 91, 294). This, in
fact, represents the same school of thought as what is found in a fairly recent non-native
grammar of the Erzya and Moksha language by Raija Bartens Mordvalaiskielten rak%
enne ja kehitys (‘The Structure and Development of the Mordvin Languages’), henceforth (Bartens 1999), see the tables, which are borrowed from Bartens, below. (If we
count the consonants, however, we will notice there are actually 29 and not the 28 mentioned in the text.)
Table 3.1
High
Mid
Low

Vowel phonemes attested in the first syllable
Front
Central
Back
i
u
e
o
a
(cf. Bartens 1999: 27)

<pgNo>58</pgNo>
58

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 3.2

Consonants: 29 consonant phonemes
Labial
Alveolar
Post-alveolar
Plosives
p
t
b
d
Affricates
c
č
S(h)ibilants
s
š
z
ž
Fricatives
(f)
v
Nasals
m
n
Laterals
l
r

Palatal
t́
d́
ć
ś
ź
j
ń
ĺ
ŕ

Velar
k
g

(χ)
(ŋ)

(cf. Bartens 1999: 27)

The only conﬂict between these two enumerations of phonemes is found in the twentyninth consonant of Bartens's table, the velar nasal ŋ. This disparity might be due to
the fact that the written standard of modern Erzya is based on a non-extended Cyrillic
alphabet, which has no marking for a velar nasal. Imajkina appears to totally ignore the
existence of a velar nasal phoneme, and Bartens provides the explanation that ŋ appears
in a very small area in the Northwestern (Alatyr') dialect type (see Bartens 1999: 27).
Virtually all velar nasals in the Erzya literary language occur in the coda followed by a
velar plosive. Elsewhere the velar nasal of the Northwest dialect type has assimilated
to the velar-labial and palatal glides. Hence the contention is that the phonetic velar
nasal found before velar plosives is allophonic, and therefore it can be represented by
the alveolar nasal n phoneme. This, in fact, should be the conclusion – provided there
are no instances of phonetic alveolar nasals n and ń directly preceding the velar plosives
k and g. In the spoken language, there is actually a particle with an onset rounded velar
nasal ŋot ‘so [you see]’ (Niina Nujanzina-Aasmäe, p.c., 2009; cf. Nadʹkin 1968: 177).
There are minimal pairs to demonstrate the presence of non-velar nasals preceding velar
plosives, see table (3.3).
Table 3.3
Attestation of phonetic alveolar nasal before velar plosive in Erzya
Cyrillics
Phonetic representation
Headword
Word form
Gloss
Headword
Word form
ян
ян+га
path_N+PROL
jan
janga
jaŋgams
jaŋga
янгамс
янга+Ø
break_V+CONNEG
ён
ён+кс ~ ён+окс good_A+TRNSL,
jon
jonks ~ jonoks
side_ N+TRNSL
ёнкс
ёнкс
side/direction_N.NOM.SG
joŋks
joŋks

The number of minimal pairs of this type are extremely limited since this appears to
be a phenomenon on the grammaticalization cline, where the word joŋks ‘side; direc-

<pgNo>59</pgNo>
PHONOLOGY

59

tion; region’ is a derived form from jon ‘side’ and the derivation morpheme %ks, which
appears to be graphically identical to on variant of the translative, thus we can observe
phonetic disambiguation that does not show at the orthographic level. This is an instance
of stem retention where a stem consonant observes paradigmatic consistency throughout
declension, conjugation and, ultimately, clitic marking. Therefore the attestation of a
velar phoneme hinges on the merits of the minimal pair not ‘note’ versus ŋot ‘so’, and
the junctures with the sequence: adjacent stem alveolar nasal and affixal velar stop, as
well as nasal-stop + velar-plosive sequences attested in recent Russian loanwords in [nk]
versus Erzyafied loans and native stems in [ŋk].
If we go back to the treatment of Erzya phonetics in the 1920s and 1930s, we will
note that Evsevʹev (1929) and Bubrix (1930) focus some attention on the phonetically
attested unrounded high and mid central vowels. Evsevʹev contemplates the unrounded
high central vowel in Russian loan words and the fact that Mordvins less familiar with
Russian tend to replace this vowel with an unrounded high front vowel, see table below.
Bubrix notes that there are no minimal pairs for unrounded high and mid vowels following alveolars and post-alveolars. His arguments are that in Erzya-type pronunciation
post-alveolars are never followed by front variants of the high and mid vowels, and that
with alveolar consonants the palatalized ones co-occur with front variants of the unrounded high and mid vowels while non-palatalized ones co-occur with central variants
(cf. Bubrix 1930: 5, 10).
Table 3.4
Russian
мы
мыло
мышь
вы
вышивка
рыба
был

Pronunciation of Russian ы by Erzya speakers unfamiliar with Russian
Erzya pronunciation
Gloss
ми
we_PRON-PERS-1PL
мило
soap_N
мишь
mouse_N
ви
you_ PRON-PERS-2PL
вишивка
embroidery_N
риба
fish_N
бил
was_V.PAST.MASCULINE
(Evsevʹev 1963: 26)

In short Bubrix claimed that the allophones front i and central i͔ could be represented
by an unrounded, high front phoneme i, and likewise the allophones front e and central
e͔ could be represented by an unrounded, mid front phoneme e. Evsevʹev, on his part,
contended that Erzyas unfamiliar with the Russian language would pronounce an
unrounded front high vowel instead of the Russian central vowel after labials and even
the alveolar trill. This argumentation has been seized at by Western scholars, as well,
and might go uncontested if it were not for the fact that the Soviet and Post-Soviet Eras
have brought Russian, majority language literacy to virtually all speakers of Erzya, and
that there is minimal pair evidence for unrounded high front and central vowels in Erzya
word roots, but not derivation, see table (3.5), below.

<pgNo>60</pgNo>
60

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 3.5
Word
i͔rnems
vi͔ška
vi͔j
bi͔znems
mi͔r
ki͔rgama

Attestation of unrounded high central and front vowels in Erzya
Gloss
Word
Gloss
‘to howl menacingly’
irnems
‘to howl, to yowl’
‘antenna’
viška
‘little’
‘ugh, yuck’
vij
‘might, strength’
‘to buzz (of a bumble bee)’
biźńems
‘to whine (of a mosquito)’
‘ideophonic (purring sound)’
mir
‘peace’
‘curry comb, brush’
kirgams
‘clean of (twigs, knots)’

Since unrounded high front and central vowels can be attested for at least affected and
loan vocabulary, the question remains, whether there is also evidence for two nonback central vowel phonemes. A quick check of the corpora showed that there were
326,948 unique word forms in the corpora, and that a total of 284,293 unique word forms
contain non-alveolar consonants. Of these 1,424 unique word forms contain instances
of non-alveolar consonants followed by the high central vowel ы and 191 unique word
forms attest instances of non-alveolar consonants followed by the mid central vowel
э. Instances with a mid central vowel э included the pronunciation of acronyms and
interjections otherwise the majority of instances were due to typographical errors; no
minimal pairs were attested, and the pronunciation of acronyms can also be illustrated
using the unrounded high central ы. Assuming that numbers of fifteen or less might
be indicative of a single headword representation or merely typographical errors, the
grapheme э will be observed to occur regularly only after alveolar fricatives in wordinitial position. These fricatives – it will be noted – appear to be the only consonants with
robust minimal pairs to attest phonematic palatal/non-palatal alveolar distributions that
can, through comparative linguistics be traced back to the Pre-Mordvinic proto-languages
(Cygankin, p.c.). The nasal stop, it will be noted, has a very low attestation as non-palatal
before non-back vowels and palatal before back vowel, a fact which is reﬂected in some
free morph and inﬂectional combinations, e.g. Иваннызэ ‘Ivan's wife’ from Иван ‘Ivan’
+ низэ ‘wife; his wife’; эйкакш+т+нэ child_N+PL+DEF.PL, see palatal harmony below.
Table 3.6

Word-initial single alveolars followed by vowels in unique word forms
of the Erzya corpora

Alveolar

а

т
д
н
ц
с
з
р
л
Total

4082
478
3965
110
4403
1618
3316
4451
22423

ы

у

э

о

я

и

ю

е

ё

Total

318
110
14
68
1619
133
112
473
2847

1985
787
1975
8
2326
68
1129
768
9046

11
5
15
0
1375
236
13
7
1662

4093
1122
1840
82
3978
267
1847
2653
15882

218
71
82
542
1087
218
180
88
2486

650
878
1116
986
2092
80
947
2665
9414

772
25
48
253
1544
12
62
254
2970

5023
807
3066
808
4171
409
1324
4219
19827

219
137
15
809
1515
72
0
183
2950

17371
4420
12136
3666
24110
3113
8930
15761
89507

<pgNo>61</pgNo>
61

PHONOLOGY

For purposes of phonetic transcription in this dissertation we will use a set of 29
consonants and 6 vowels in the presentation of both word stems and inﬂections, see
tables (3.7, 3.8).
Table 3.7
High
Mid
Low
Table 3.8

Vowel phonemes attested in Erzya word stems (6)
Front
Central
i
i͔
e
a
Consonant phonemes attested in Erzya (29)
Alveolars
Labials

Plosives
Nasals
Affricates
Fricatives
Tremulants
Laterals
Approximate

Back
u
o

Labiodentals

p
b
m
f
v

Non-palatalized

Palatalized

t
d
n
c
s
z
r

t́
d́
ń
ć
ś
ź
ŕ

l

ĺ

Post-Alveolars

Palatal

Velars
k
g
ŋ

č
š
ž

χ

j

The labio-dental phoneme v has two basic allophones: in the coda position it is realized
as a labial approximant, when followed by a non-labial vowel in onset position the phonetic realization is that of a labio-dental fricative.
The bilabial tremulant, indicated with tpr in the literature, appears to be limited
to three word stems, ʙu ‘halt! (to a horse)’; ʙuga ‘(cow call)’ (MW III: 1902b); and the
motherese ʙuav ‘outside (LAT)’. This phoneme is extremely limited lexically and has
therefore been left out of the treatise.
The two phonemes advocated in this treatise of Erzya, the unrounded central high
vowel i͔ and the velar nasal ŋ, are marginal. The vowel i͔ is phonematic in word stems
only, and the attestation of alveolar non-palatal nasal n before velar stops is manifest
only at the juncture of stems and case or clitic marking, on the one hand, and new Russian loanwords, on the other. The identification of these two additions, however, is
analogous to the identification of both palatal and non-palatal alveolar stops, while the
presence of a non-palatal alveolar stop in a front-vowel context virtually always indicates the relative newness of a Russian loanword, e.g. stud́ent ‘student’, kit ‘whale’ and
čĺen ‘member’; their coda-position stops are non-palatal, and can readily be identified as
non-Erzya on the basis of this criterion (cf. also Abondolo 1987).

<pgNo>62</pgNo>

### 3.2. Phonetic phenomena behind allomorphic variation
Allomorphic variation in Erzya can readily be attributed to vowel harmony, palatal
harmony, devoicing, voicing, loss of affix-initial V of the abessive, and stem-final vowel
loss.

#### 3.2.1. Vowel harmony
Vowel harmony in Erzya is front/back harmony affecting the mid vowels, represented
orthographically in Erzya by э, е and о. In the standard language this harmony is basically triggered by the preceding vowel or consonant qualities, such that, palatalized
alveolars, the palatal glide and front vowels co-occur with subsequent front vowels э
and е, while back vowels followed by non-palatalized consonants trigger back vowel
harmony in о. Not all instances of front mid vowels have back-vowel counterparts, so it
can be assumed that vowel harmony in the mid vowels is the reﬂex of a phoneme different from those found in the dative %нень/%нэнь, comitative %нек/%нэк and definite plural
%не/%нэ, to name a few.
The target of vowel harmony can be located in four positions. It can be in (1)
the affix-initial position when the affix requires a vowel and the preceding stem has
no overt vowel to provide, e.g. genitive -Oń, second person singular possessive suffix
%OT; (2) affix-internal position, e.g. the first vowel in the abessive %VTOmO; (3) affixfinal position, e.g. inessive %sO, and (4) as a stand-alone affix in the locative -O. Since
vowel harmony is a progressive phenomenon, we just have to look to the preceding, left
context, which is always the trigger, and close assimilation appears to provide the best
characterization of this phenomenon in the literary language.
To describe the left context we will declare relevant sets of vowels and consonants:
Table 3.9
Short

Sets used in the description of Erzya vowel harmony
Abbre- Specifics
Sets
viation

Back Trigger
Vowels

BTV

Vowels triggering subsequent
back vowel harmony =

[а|я|о|ё|у|ю]

Front Trigger
Vowels

FTV

Vowels triggering subsequent
front vowel harmony =

[е|э|и|ы]

Front Trigger
Consonants
less ль

FTC

Consonants and digraphs other than ль triggering subsequent front vowel harmony =

[й|дь|зь|нь|рь|сь|ть|ць]

Nonpalatal
Consonants

NPC

Consonants that do not cause
front vowel hamony, i.e. all
consonants but й =

[б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ш
|щ]

All
Consonants

AC

All consonants and digraphs,
i.e. FTC, NPC plus ль =

[й|дь|зь|ль|нь|рь|сь|ть|ць| б|в|г|д|ж
|з|к|л|м|н|п|р|с|т|ф|х|ц|ш|щ]

<pgNo>63</pgNo>
63

PHONOLOGY

The front orthographic variants э and е of the unrounded mid front vowel phoneme will
always be chosen if the left context can be described by:
(a) FTV [ FTC | NPC | ль ] AC*
(b) BTV FTC AC*
(c) BTV ль [derivational consonant cluster] AC*

The back orthographic variant о will be chosen after all other left contexts:
(d) BTV NPC+
(e) BTV ль [non-derivational consonant cluster] AC*

The range of vowel harmony is illustrated in the table below, where a majuscule archiphoneme O indicates the target vowel.
Table 3.10 Range of vowel harmony in Erzya affixes
Morpheme
Gloss
Position in affix
Affix-initial Affix-internal
%Онь
GEN
+
%Ов
LAT
+
%Ом, %ОН, %Онь POSS-1SG
+
%ОНень
POSS-1SG>DAT
+
%Онк
POSS-2PL
+
%ОТ, %Оть
POSS-2SG
+
POSS-2SG>DAT
+
%ОТень
%Онстэнь
POSS-3.DAT
+
%Ост
POSS-3PL
+
%Оль
PRETII.PRED.3SG
+
%Окс
TRNSL
+
%ОНОк, %НОк
POSS-1PL
±
+
%Ос
ILL
±
%ВТОмО
ABE
+
%ДО
ABL
%стО
ELA
%сО
INE
%ОзО, %ОнзО
POSS-3SG
+
%О
LOC
-

Affix-final
+
+
+
+
+
-

Stand-alone
+

<pgNo>64</pgNo>

#### 3.2.2. Palatal harmony
Palatal harmony in Erzya affects the alveolar stops in affix onset, i.e. orthographically
the neutral plosives T and D, as well as the nasal N are realized with subsequent palatal
marking in ь, е and я. Since there are other affixes ending in %Онь ‘GEN; POSS-1SG>GEN
(with kin and relation terms)’, and %Оть ‘POSS-2SG>GEN (with kin and relation terms)’ but
these are never realized as non-palatal variants in the standard language, we might assume that the neutral stops, phonematically represented with majuscule archiphonemes
in %ON and %OT, are non-palatalized phonemes with allophonic variation in t / t́; d / d́,
and n / ń respectively. Hence the Erzya literary language provides marginal evidence in
rebutal to the experimental minimalization of consonant phonemes (cf. Abondolo 1987).
Palatal harmony is triggered by the left context, and the sets applicable to vowel
harmony can be extended by more specific articulation point sets, see table (3.11), below.
Table 3.11
Short

Sets used in the description of Erzya palatal harmony
Abbre- Specifics
Sets
viation

Non-Palatalized Alveolar
Consonants

AlvC

Alveolar consonants with no subsequent marking for palatalization =

[д|з|л|н|р|с|т|ц]

Labial
Consonants

LabC

Labial consonants =

[п|б|ф|в|м]

Velar
Consonants

VelC

Velar Consonants =

[к|г|х]

Post-Alveolar
Consonants

P-AlvC

Post-Alveolar Consonants =

[ч|ш|ж|щ]

Non-Alveolar
Consonants

N-AlvC

LabC, P-AlvC and VelC =

[п|б|ф|в|м|ч|ш|ж|щ|к|г|х]

The neutral alveolar stops affected by palatal harmony are followed by palatal marking
when the left context can be described by:
(a) FTV
(b) BTV
(c) FTV AC* N-AlvC

Palatalization does not occur in the alveolar stops when the left context is:
(d) AlvC

<pgNo>65</pgNo>
65

PHONOLOGY

Synchronic variation can be observed in the palatalization of alveolar stops when the left
context is the following:
(e) BTV NPC* N-AlvC

The range of palatal harmony is illustrated in the table below, where the majuscule
archiphonemes Tand N indicate the target alveolar stops.
Table 3.12 Range of palatal harmony in Erzya affixes
Morpheme
Gloss
Harmony trigger
Preceding vowel
%T
PL
+
%Tano
PRES.PRED-1PL
+
%Tado
PRES.PRED-2PL
+
%Tan
PRES.PRED-1SG>2SG
+
%Tanzat
PRES.PRED-3SG>2SG
+
%Tadi͔ź
PRES.PRED-X>2P
+
%OT
POSS-2SG
+
%ON
POSS-1SG
+
%Ne
DEF.PL
±

Preceding consonant
+
+
+
+
+
+
+

The fact that the %Ne ‘DEF.PL’ marker, in affix-onset position, is conditioned by the preceding vowel, is related to the position this affix holds on the grammaticalization cline.
As discussed above, the mid non-back vowel has two allophones in front e and central
e͔. Since there is an extremely low attestation of a hypothetical mid central phoneme,
on the basis of corpus material, it might be surprising to note that the mere back-vowel
in the left context is sufficient to prevent the phonetic palatalization of N after a nonalveolar consonant even though it is followed by a front vowel. Double is the surprise,
however, when the non-alveolar consonant has been dropped both in speech and in the
orthography, e.g. the NOUNS2 declension type [iśt́atne] истя+т+нэ like-this/that_PRONDEF+PL+DEF.PL, which is the regular declension of [iśt́amo] истямо like-this/that_PRONDEF.ABS such that the stem-final mid vowel has been dropped and the labial nasal, as well,
see section (4.1.) NOMINAL-TYPE WORD-STEM MORPHOLOGY.
Palatal harmony contributes to ambiguity in front-vowel contexts in the interpretation of surface coda %ń and %t́. Adnominal 1SG %ON marking is realized in coda %ń and
thus is a homonym of the realization of the indefinite declension genitive %Oń, which is
also used in marking the genitive case on distinct, singular referents, especially proper
nouns and possessa of the 1SG possessor, see (1–2). (See also sections 4.2.3.1.1. FIRST
PERSON, 4.2.3.1.2 SECOND PERSON and 4.4. PARADIGM DEFECTIVITY IN ERZYA POSSESSOR INDEXING.) Adnominal 2SG %OT marking is realized in coda %t́ and thus is a homonym of
the realization of the 2SG possessive declension kin-term genitive %Ot́ and sometimes the
nominative plural in %T, see (3–4).

<pgNo>66</pgNo>
66
(1)

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
a. ćora+ON
=> ćoran
son_N+POSS-1SG>NOM.PL ~ son_N+POSS-1SG>GEN.PL
b. ćora+Oń
=> ćorań
son_N+GEN ~ son_N+POSS-1SG>[KIN]GEN

(2)

a. ńi+ON
=> ńiń
wife_N+ POSS-1SG>NOM.PL ~ wife_N+ POSS-1SG>GEN
b. ńi+Oń
=> ńiń
wife_N+GEN ~ wife_N+POSS-1SG>[KIN]GEN

(3)

a. ćora+T
son_N+PL.NOM

=> ćorat

b. ćora+Ot́
=> ćorat́
son_N+POSS-2SG>[KIN]GEN
c. ćora+OT
=> ćorat
son_N+POSS-2SG>NOM ~ son_N+POSS-2SG>GEN
(4)

a. miŕd́e+T
=> miŕd́t́ ~ miŕd́et́
husband_N+PL.NOM
b. miŕd́e+Ot́
=> miŕd́et́
husband_N+POSS-2SG>[KIN]GEN
c. miŕd́e+OT
=> miŕd́et́
husband_N+POSS-2SG>NOM ~ husband_N+POSS-2SG>GEN

#### 3.2.3. Devoicing
In the modern Erzya standard, synchronic devoicing affects the voiced alveolar plosive d
and the voiced velar plosive g in affix onset position. The term “synchronic devoicing”
is used to illustrate the fact that in intervocalic position the reﬂex of these plosives is
voiced. Hence, when the reﬂex is not voiced following a non-voiced consonant, the
phenomenon can be regarded as synchronic devoicing, although “diachronic voicing”
might also be forwarded (cf. Bartens 1999: 37–41; Abondolo 1987), see examples below.

<pgNo>67</pgNo>
PHONOLOGY

67

Table 3.13

Devoicing of affixal onset plosives following voiceless consonants and plosives
(cf. Imajkina 2008: 134)
Ablative -DO
Prolative -Ga
kudo ‘house; home’
kudo+do
kudo+va
klass ‘classroom; class’
klass+to
klass+ka
zal ‘hall; living-room’
zal+do
zal+ga
ked́ ‘hand; arm’
ked́+t́e [ket́:e]
ked́+ga
krug ‘circle’
krug+do
krug+ka [kruk:a]

In practice it is sufficient to characterize the left-context trigger of this phenomenon by
the following two statements:
(a) Voiceless consonant
(b) Voiced plosive of same articulation point

The range of the devoicing phenomenon is also minimal, whereas it involves the
morphemes: ablative %DO and prolative %Ga.

#### 3.2.4. Voicing
In colloquial speech and especially in older texts, there is also a voicing phenomenon
affecting the T of the predicate markers -Tano ‘PRES.PRED-1PL’, %Tado ‘PRES.PRED-2PL’,
%Tan ‘PRES.PRED-1SG>2SG’, %Tanzat ‘PRES.PRED-3SG>2SG’ and %Tadi͔ź ‘PRES.PRED-X>2P’.
This phenomenon is triggered by the [+VOICED] feature of the adjacent consonant in
the left context. Hence, the literary moĺ+t́ano go_V+IND.PRES.PRED-1PL is pronounced
[moĺd́ano], by some. The phenomenon of progressive voicing in Erzya permeates the
oral and literary language, as it is attested at the boundary of stem and conjugational
inﬂections, free morph + free morph lexemes, as well as syntactic collocations.

#### 3.2.5. Loss of affix-initial V
The loss of affix-initial V affects the abessive morpheme %VTOmO, such that V is lost
when the preceding stem ends in a consonant.

<pgNo>68</pgNo>

#### 3.2.6. Stem-final vowel loss
Stem-final vowel loss affects affix-final and root-final vowels alike. It can be observed
in two different ranges:
(a) Stem and affix-final vowels are dropped in contemporary Erzya when followed by the
present predicate cross-reference markers for the first and second persons singular, e.g.
vadŕa+at vadŕat ‘you are nice’, which is the rendering of vadŕa ‘fine/nice’ and -at
‘PRES.PRED-2SG’. (See folklore, old literary, and Alatyr' subdialects vadŕajat)
(b) There are three nominal stem types in Erzya, of which one can be recognized by
synonymous variation in the presence or absence of a stem-final mid vowel before the
voiceless-onset affixes plural -T, inessive -sO, elative -stO and illative -s, see nominal
stem types below.

Above we have provided a phonetic characterization of the most salient phonetic features in the Erzya language. These are features with a bearing on allomorphic variation
in the inﬂection of the language, and they should be sufficient although not exhaustive
for the description of adnominal person in Erzya. A set of (6) six vowel and (29) twentynine consonant phonemes has been enumerated for Erzya, which is two more than the
assessment provided by Imajkina (2008), such that unrounded high central i͔ and velar
nasal ŋ have been attested with the help of minimal pairs. Sound rules have been given
in the form of left-context descriptions, compatible with the automatic two-level parser
rules used in the treatment of the minimal corpus. The vowels and consonants of the
Erzya language have been broken down into sets compatible with the workings of (1)
vowel harmony, (2) palatal harmony, (3) devoicing, (4) voicing, (5) loss of affix-initial
V and (6) stem-final vowel loss.

<pgNo>69</pgNo>
## 4. Morphology

Our understanding of form is readily developed by considering: (i) allomorphic variation in nominal-type word stems and declensions; (ii) linear ordering of inﬂectional
markers, and (iii) co-occurrence.

Morphemes
Allomorphic variation
Allomorphic variation in Erzya affects subgroups of nearly all ten parts of speech established in EKM 2000. The phonological workings of this variation have been demonstrated above in section 3.1. PHONOLOGICAL PHENOMENA BEHIND ALLOMORPHIC VARIATION. In
this section we will describe the previously established targets of this variation in separate subsections. (4.1.) NOMINAL-TYPE WORD-STEM MORPHOLOGY will provide an outline to
define Erzya word-stem types which are applicable to inﬂections for the range: nouns,
numerals, pronouns, adverb/adpositions and non-finites in %OmA. Section (4.2.) AFFIXES
will then be divided into the subsections: (4.2.1.) CASE; (4.2.2.) NUMBER; (4.2.3.) DEICTIC
MARKERS; (4.2.4.) NOMINAL CONJUGATION MARKERS, and (4.2.5.) THE CLITIC %Gak. Section
(4.3.) ADNOMINAL-TYPE PERSON IN PARTS OF SPEECH will receive further specification in
subsections: (4.3.1.) POSSESSIVE DECLENSION COMPATIBILITY FOR DISTINGUISHING PARTS OF
SPEECH, where case form attestation plays a major role; (4.3.2.) ATTESTED PARTS OF SPEECH
AND SUBLEXICA; (4.3.3.) DRAWING CONCLUSIONS. Section (4.4.) PARADIGM DEFECTIVITY IN
ERZYA POSSESSOR INDEXING inspects the status of 1SG and 2SG genitive marking with regard
to the KIN TERM parameter. And section (4.5.) ADNOMINAL SYNTAX AND SECONDARY DECLENSION describes the compatibility of adnominal person with secondary declension.

### 4.1. Nominal-type word-stem morphology
When establishing nominal-type word stems, it might occur to one to follow the threevowel split system observed for verbs in the Finnish and apparently the Estonian Schools
of Mordvin studies (cf. Ravila 1929: 104-105; Pall 1996: 22; Bartens 1999: 122; Hamari
2007: 66). The verbs, it is maintained, can be divided into three groups on the basis of
which vowel precedes the ms segment in the infinitive: a (pala%ms ‘to kiss’), o (vano%ms
‘to watch’) or e (ńiĺe%ms ‘to swallow’). The problem with this three-way split is that,
while a%stem verbs always retain their vowel in IND.PRETI.PRED-3SG marking, the two
mid-vowel-stem verbs given lose theirs, hence pala+ś kiss_V+IND.PRETI.PRED-3SG shows
vowel retention, whereas van+ś watch_v+IND.PRETI.PRED-3SG and ńiĺ+ś swallow_v+IND.
PRETI.PRED-3SG do not. What makes this awkward from a point of concatenation is that
there are also mid-vowel verb stems that retain their vowels, e.g. pid́ems ‘to cook’: pid́e+ś
cook_v+IND.PRETI.PRED-3SG and udoms ‘to sleep’: udo+ś sleep_v+IND.PRETI.PRED-3SG.

<pgNo>70</pgNo>
70

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

In the most recent Erzya-Russian dictionary (Эрзянь-рузонь валкс, 1993), henceforth (ERV 1993) a vertical separator “|” is implemented to indicate a breaking point in
the headword where inﬂexion of the various word types can readily be conjugated or
declined. In the instance of verb headwords, this means that an additional indication of
the indicative preterit I third person singular will be given, and in the case of noun headwords the indefinite nominative plural; for some reason, however, adjectives and other
modifiers are not systematically marked.
The role of the vertical separator in verb headwords is to indicate whether the
vowel occurring before the ms infinitive marker is, in fact, a stem vowel or a linking
vowel; the IND.PRETI.PRED-3SG marker %ś has no affix-initial vowel (see also Cypkajkina
2000: 156).
On the basis of the above, we can hypothesize two verb-stem types, i.e. verbs that
retain their stem vowels in the IND.PRETI.PRED-3SG slot, and those that do not. Thus the
verbs palams ‘to kiss’, pid́ems ‘to cook’ and udoms ‘to sleep’ belong to one group, and
vanoms ‘to watch’ and ńiĺems ‘to swallow’ to the other. A second hypothesis we can
make is that the infinitive marker is, in fact, -Oms with an archiphoneme O to indicate
that a vowel must always be present; in the literary language that is (cf. Evsevʹev 1963:
286). Evsevʹev indicates that there are certain verb stems that lose their mid-vowel in
dialect representation of the infinitive, e.g. moĺems ~ moĺmeks ‘to go’ and kadoms ~
kadmoks ‘to leave (VT)’, while others do not: udoms ~ udomks ‘to sleep’. (Trosterud
(2006: 250) offers a phonetic solution to stem-vowel deletion before consonant-initial
suffixes. He recognizes an important role played by consonant clusters but does not see
the correlation to the stem-vowel versus linking-vowel dichotomy.)
The dichotomy “stem vowel versus linking vowel” can be further developed upon
perusal of the Erzya-Russian dictionary. There are, in fact, three types of verbs to be
attested, i.e. sod|oms: %ś ‘to tie’ (verbs with linking vowels), soda|ms: %ś ‘to know; to recognize’ (verbs with stem vowels), and kundato|ms: %tś ‘to become tied (of the tongue)’
(verbs with stem vowels and additional T morphology). The third verb type, originally
brought to my attention by Salo (cf. Salo, forthcoming), takes an additional T before the
IND.PRETI.PRED-3SG marker. A parallel to this morphological variation between m and T
can be observed in the attestation of two noun forms in Kozlovka dialect: utom ‘storehouse’: utotso ‘in the storehouse’ and kaštom ‘oven’: kaštotso ‘in the oven’ (cf. Bubrix
1930: 33).
The third verb type is not adhered to by all speakers of the language, such that
Imajkina (originally from an Insar or Western dialect background, but with a lifetime
in university-level Mordvin studies) indicates two separate reﬂexes for the verb satoms
‘to be enough’: satotś (2008: 96) and satś (ibid. 282) ‘suffice_V.IND.PRETI.PRED-3SG’,
whereas the Russian-language treatise of Erzya verbs published by Mészáros ignores it
altogether (cf. 1999: 116-120).
The Erzya literary language attests to a system of three verb types as depicted in
ERV (1993). Therefore, the three verb types described by the Finnish School, especially
the o and e verb-type descriptions of the Erzya, have little to do with the synchronic state
of the language, although they may offer partial insight into language history.

<pgNo>71</pgNo>
MORPHOLOGY

71

In nouns the vertical separator “|” serves to mark the removal of the Cyrillic soft
sign before the plural marker T, on the one hand, and some instances of mid vowels, on
the other, whereas low stem vowels are never elided in conjugation or declension, and
therefore a correlation between verb and nominal-type stems might be posited (cf. Zaicz
1998: 188–189).
Let us then address the nominal stem type, if we can, according to the same criteria as were used with verb stems. Nominals can also be divided into three types. The
stem types do not directly parallel those of the verbs, though. The nominal stem types
are based almost entirely upon the phonetic qualities of the indefinite nominative singular form. The first split is made on the basis of whether the headword ends in a vowel or
a consonant. The merits of such a split will be seen in the number of affixes, described
below, that require the presence of a vowel between the consonants of an immediately
preceding stem and the first consonant of the affix. Let us observe the variation in the
nominative definite singular marker allomorphs -oś, %eś and -ś <= -Oś: oš+oś ‘town_
N+NOM.DEF.SG’ and keĺ+eś ‘tongue_ N+NOM.DEF.SG’ versus kudo+ś ‘house_ N+NOM.DEF.SG’
and veĺe+ś ‘village_ N+NOM.DEF.SG’. The vowel-final versus consonant-final division of
stems is then followed by two more, one concerning the consonant-final and the other
the vowel-final headwords.
In consonant-final nominal-type headwords the presence of a word final s(h)ibilant can bring about synonymous variation in the declension tables. If the headwordfinal consonant is a s(h)ibilant, then there is a tendency for a linking vowel to occur
between the stem-final s(h)ibilant and an affix-initial s(h)ibilant, e.g. in the illative, the
word karks ‘belt’ gains what here will be termed an optional stem vowel in o before the
illative marker %s is added, thus karks+(o)s belt_N+ILL. This, it must be stressed, is a
tendency that affects all stem-final s(h)ibilants c, s, z, ć, ś, ź, č, š, ž in combination with
the affix-initial s of the illative, inessive and elative, as well as the š of the comparative.
Therefore synonymous variation can be observed, such as that found in the indefinite illative declension for potmaks ‘bottom’ with evidence in favor of the linking-vowel strategy potmaksos 184 occurrences and potmakss 28, but also the adposition veĺkses 255
and veĺkss 211 both interpreted as ‘over/above_POP.ILL’. Hence phonological variation
in the presence versus absence of a stem vowel, because of its seemingly non-semantic
character, can automatically be ascribed to all stems ending in s(h)ibilants. This nonsemantic variation might be dealt with in two manners: it might be simply described as
morphophonemic variation, or if we choose to inspect its discourse-level variation, we
might plot it in the continuation lexicon of concatenation, so that it can be automatically
parsed. Similar synonymous variation can also be observed in the combination of other
consonant-final stems followed by translative case marker ks. Both subtypes are open to
native and loanword stems.
In the vowel-final set of all nominal-type headwords special attention must be
given to a subset with headword-final mid vowels. The subset affected comprises those
which alternately exhibit a loss of that stem-final mid vowel before certain affixes beginning with voiceless alveolar consonants, especially the plural marker in %T and the
spatial cases %s illative, -sO inessive and -stO elative. In the table below we will observe

<pgNo>72</pgNo>
72

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

the three different stem types NOUNS1 in (a, b) (consonant-final stems), NOUNS1S in (c, d,
whereas this subset of NOUNS1 is entirely predictable), NOUNS2 in (e, f) (nominal stem
type with synonymous stem-vowel variation) and NOUNS3 in (g, h, i) (nominal stem type
with stem vowel retention).
The table illustrates possible homonymy that occurs between plural marking T
and possessive cross-referential 2SG marker OT in the three stem types. No homonymy
occurs in NOUNS1 stems; possessor index markers in the modern literary language always
require linking vowels (see section 4.2.3.1. POSSESSOR-INDEX MARKING). Optional homonymy is observed in NOUNS2 stems, and total homonymy in NOUNS3 stems. In the most
recent grammar (EKM 2000), NOUNS2 stems are treated as invariable NOUNS3 stems. This
reﬂects one of the prescriptive norms proposed in the most recently printed orthographic
norms “Эрзянь кельсэ сёрмадомань, кортамонь, пунктуациянь лувтне” ‘Orthography, Speech and Punctuation Norms in the Erzya Language’, henceforth (EKS 1995:
34). For an extensive presentation of nominal stem variation in declension (cf. Evsevʹev
1963: 56–101; Abondolo 1987).
Table 4.1

NOUNS1

Nominal stem types in Erzya
HeadGloss
word

INDEF.ILL

a
b

мар
умар|ь

mound
apple;
strawberry

марс
марьс

март
умарть

марот
умареть

c

потмакс

bottom

потмаксос ~
потмаксс

потмакст

потмаксот

d

велькс

above; cover;
cream

вельксэс ~
вельксс

велькст

вельксэть

e
f
g

кург|о
пенг|е
кудо

mouth
fire wood
home; house;
room

кургс ~ кургос
пенгс ~ пенгес
кудос

кургт ~ кургот
пенгть ~ пенгеть
кудот

кургот
пенгеть
кудот

h
i

пизэ
паця

nest
handkerchief

пизэс
пацяс

пизэть
пацят

пизэть
пацят

NOUNS1S

NOUNS2

NOUNS3

INDEF.NOM.PL

POSS-2SG>
NOM-GEN

The NOUNS2 stem type, it will be noted, attests synonymic variation in its indefinite
nominative plural forms. This stem type has received attention in various grammars
beginning with Evsevʹev ([1929] 1963: 82–83). As noted above at least some prescriptive
grammar writers have decided to remove the NOUNS2 stem type from the agenda of Erzya
morphology, even though it is extensively attested in the written language. See table
below for disambiguated statistics on vowel versus consonant-stem in the expression of
plural in the NOUNS2 stem type, where nine of the most frequently attested headwords
are given with possessive second person singular versus indefinite nominative plural
readings.

<pgNo>73</pgNo>
73

MORPHOLOGY
Table 4.2

Stem variation in NOUNS2 nominal stem type
Vowel retention
Headword
Form
+POSS-2SG +PL
сельме
сельметь
291
10
eye_N
паро

парот
favor/wealth/steam_N
пенгеть

104

6

4

пильге leg/
foot_N

пильгеть

чувто tree_N
ойме soul_N
курго
mouth_N
пандо hill_N
пеке
stomach_N

пенге
firewood_N

Total

Vowel loss
Form
сельмть

Total
+PL*
238

539

396

506

7

парт
good_A/steam
пенгть

269

280

151

7

пильгть

97

255

чувтот
ойметь
кургот

NA

15
45
5

чувтт
оймть
кургт

236
11
51

251
249
187

пандот
пекеть

NA

120

11
8

пандт
пекть

175
39

186
167

994

114

1512

2620

193
131

The nominal stems demonstrated above will be rendered in three separate types on the
basis of two parameters: (i) presence of stem-final vowel in headword, and (ii) retention
of stem-final vowel before plural marker in -T. Although there are tendencies in the
written language towards possessive second person singular versus nominative plural
differentiation in some of the NOUNS2 stems, it appears that not all people in typesetting
adhere to the same norms (something indicative of dialect variation). Vowel retention in
some of the stems may be found in bahuvrihi type constructions, such as vaŕga kurgot
‘blabber-mouths (glove_N.NOM.SG mouth_N.NOM.PL)’, or, perhaps, emphatic and dialect
variation. Vowel loss occurs with the plural marker %T, but this same form or possibly
a homonym is also used in the formation of adverbs, e.g. veŕev pandt ‘up-hill (up_ADV.
LAT hill_N.PL/DISTR: GOAL and LOC)’. For accuracy the NOUNS2 stems could be regarded as
a closed set, which for all practical purposes it is, but the following regular-expression
descriptions of stem type will be helpful in the locating of plausible yet unidentified
members.
[FTV] [ [п|т|к|ц|ч] | м б | [в|с|ш] т | [р|ль|н] д | [сь|ш] к | [в|р|ль|н] г | [ть|дь|рь|ль] м | в
ш] е
[BTV] [ [п|т|к|ц|ч] | м б | [в|с|ш] т | [р|л|н] д | [с|ш] к | [в|р|л|н] г | [т|д|р|л] м | в ш] о

With retrospect to the consonant-cluster delimitations suggested by Trosterud (2006:
250), it should be noted that certain stems, e.g. keĺm|e ‘cold; frost’ and keĺme|ms ‘to get
cold; to freeze’ do not necessarily follow identical patterns. And thus it is the nominal
type stem NOUNS2 that consonant-cluster delimitations might be concentrated on.

<pgNo>74</pgNo>

### 4.2. Affixes
Affixes here are a subset of all morphemes attested in the word forms set as the range
of adnominal-type cross-referential person, i.e. affixes might be contrasted with stems.
Stems, it must be remembered, comprise not only the stereo-typical headword stems,
but, in the highly synthetic Erzya language, previously inﬂected forms, as well. Hence
nominal inﬂection can, roughly speaking, be broken into three linear-ordered groups of
affixes expressing: (i) the categories and notions of case, number and definiteness with
occasional looping (secondary declension); (ii) nominal conjugation, and (iii) the clitic.
While the first group, consisting of three subgroups, has specific ordering for various
combinations of its categories and notions, the second and third group are simple in
nature, and as single-set groups do not allow secondary affixation. Specifics on ordering
of elements in group (i) can be given according to the following rule of thumb:
An ordering distinction: Definite plural versus other:
If there is a definite plural marker, it will precede case marking, i.e. plural marker %T
(Number marker, Nx) is followed by definite plural marker %Ne, which is then followed
by any overt case marking (Cx).
In the absence of definite-plural marking, a distinction will be made between cumulativeexpression (non-concatenable case and deictic marker, CDx) and case marking. Cumulative expression, characteristic of the core cases nominative, genitive and dative, consists
of simple affixation strategies by definition, while concatenation of case marker (Cx)
followed by ZERO or deictic marker (Dx) is the strategy of the remaining cases.
[ Nx + Cx | CDx | Cx + Dx ]

#### 4.2.1. Case
The term case is often associated with noun phrases and the marking of syntactic
arguments, e.g. subject, direct object and indirect objects. In Finno-Ugrian languages,
however, there is an extension for including local cases, and some others as well. In the
Erzya grammar tradition, the term “case” is generally used when speaking of dependent
morpho-syntactic constituents, even ones with ZERO-markers, that correlate with
syntactic-semantic relations, such as those of arguments or adjuncts. The term “case”
has been used sparingly of only some of the morphologically dependent markers, whereas
the term “case-like adverbial markers” has been applied to other markers with little if
any argumentation. Evsevʹev, apparently unable to deal with inﬂectional homonymy,
interprets the lative case -Ov of Ahlquist (1861), Paasonen (1909) and Šaxmatovʺ
(1910) as synonymous with the denominal derivation morpheme for adjectives %Ov,

<pgNo>75</pgNo>
MORPHOLOGY

75

and therefore speaks of adverbial markers (see Evsevʹev 1963: 55). Since the modern
tradition (cf. Bartens 1999; Grebneva 2000) makes a division between core cases, local
cases and attributive cases, but sets no guidelines regarding accurate definition of case,
this author has opted to define case according to the following morpho-syntactic criteria:
(i) morphological marking (inclusive ZERO-marking); (ii) element complexity, and (iii)
clausal or phrasal syntactic function (arguments and adjuncts).
Morphological marking
Element complexity
Syntactic function

Including the ZERO-morpheme of the nominative case, there are fifteen morphemes
attested with modified phrasal constituents in the Erzya language (cf. Rueter 2009a).
The use of syntactic function as a criterion has allowed us to cope with a range comprising parts of speech, such as nouns, numerals, pronouns and adverbs/adpositions, on the
one hand, and the sub-class of non-finites in %Om%, on the other. Thus this definition
provides us with a maximal access to morphemes that might be associated with possessive declension, and therefore be of interest in a treatise of adnominal-type person. The
most recent grammar of the Erzya language, it will be noted, limits itself to twelve cases
in the discussion of nouns and six when treating reﬂexive/intensive personal pronouns
(cf. Agafonova 2000: 125–145; Grebneva 2000: 73–88). Cases of disputed status, but
included by this author, are the LOCATIVE %O, COMITATIVE %Nek, and TEMPORALIS %Ne. (See
also Danilov 1969; Bartens 1999: 99-100, 164)
In this subsection we will brieﬂy define the three case divisions: core cases, local cases, and attributive cases while each individual case morpheme will be described
with the following elements: (i) name; (ii) morpheme; (iii) statement of range where
the case is attested, and (iv) notes on declension type limitations. When ambiguities of
form versus function present themselves, separate treatment will be offered at the end
of the section, i.e. the direct-object function is attested for both the nominative and the
genitive. In other instances, grammars have neglected or questioned the pertinence of
a given inﬂectional item, i.e. the translative can indeed appear in the definite singular
declension (EKM 2000).

##### 4.2.1.1. Core cases
In the Erzya grammar tradition, four case names are mentioned in association with the
core cases: nominative, genitive, dative and ablative. Thus the inessive, in %sO, is
foregone here despite the fact that in the adpositional form ejse ‘in’ it is, without doubt,
frequently used as a marker of the imperfect direct object, see inessive in subsection
(4.2.1.2.) LOCAL CASES.

<pgNo>76</pgNo>
76

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Nominative
The NOMINATIVE case in Erzya, which in the indefinite declension is marked with the socalled ZERO morpheme, can be detected through the presence of other morphemes as well.
Hence, while the same word form can be homonymous for both an indefinite nominative
singular headword and an absolutive form, which would be associated with the modifier
position of an NP or the adpositional complement, the indefinite nominative plural will
be recognized by its plural %T marker (see 4.2.2. Number); the definite singular by its
portmanteau or polyexponential allomorphs -ś, -oś, -eś => -Oś, and the definite plural by
its lack of marking after the definite plural allomorph -ńe, -ne => -Ne.
Table 4.3
Nominative forms from the definite and indefinite declensions
Gloss
STEM TYPE
NOM.SG
NOM.DEF.SG
PL.NOM
PL+DEF.PL
kal ‘fish’
NOUNS1
kal
kal+oś
kal+t
kal+t+ne
keĺ ‘tongue;
NOUNS1
keĺ
keĺ+eś
keĺ+t́
keĺ+t́+ńe
language’
karks ‘belt’
piks ‘rope’
śokś ‘autumn’
kurgo
‘mouth’

NOUNS1S

karks
piks
śokś
kurgo

karks+oś
piks+eś
śokś+eś
kurgo+ś

karks+t
piks+t
śokś+t́
kurg+t ~ kurgo+t

t́iŋge ‘garden
plot; threshing ﬂoor’

NOUNS2

t́iŋge

t́iŋge+ś

t́iŋg+t́ ~ t́iŋge+t́

kudo ‘house;
home; room;
container’

NOUNS3

kudo

kudo+ś

kudo+t

kudo+t́+ńe

pize ‘nest’

NOUNS3

pize

pize+ś

pize+t́

pize+t́+ńe

NOUNS1S
NOUNS1S
NOUNS2

karks+t+ne
piks+t+ne
śokś+t́+ńe
kurg+t+ne ~
kurgo+t́+ńe
t́iŋg+t́+ńe ~
t́iŋge+t́+ńe

In the possessive declension there is only one place where an explicit distinction can
be made for case of the possessum, and that is %OzO the 3SG with a singular possessum
reading. The form of the plural %OnzO with 3SG possessor-index marking has an
ambiguous reading with the genitive common to non-kin terms.

<pgNo>77</pgNo>
77

MORPHOLOGY
Table 4.4

Nominative forms from the possessive declensions
kal ‘fish’
keĺ ‘tongue;
ĺeĺa ‘big
language’
brother’

POR

PUM

1SG

SG

1PL
2SG
2PL
3SG

SG = PL

PL
SG = PL
SG = PL
SG
PL

3PL

SG = PL

kal+om
kal+on ~ kal+om
kal+onok
kal+ot
kal+oŋk
kal+ozo
kal+onzo
kal+ost

keĺ+em
keĺ+eń ~ keĺ+em
keĺ+eńek
keĺ+et́
keĺ+eŋk
keĺ+eze
keĺ+enze
keĺ+est

ĺeĺa+m
ĺeĺa+n ~ ĺeĺa+m
ĺeĺa+nok
ĺeĺa+t
ĺeĺa+ŋk
ĺeĺa+zo
ĺeĺa+nzo
ĺeĺa+st

piĺe ‘ear’
piĺe+m
piĺe+ń ~ piĺe+m
piĺe+ńek
piĺe+t́
piĺe+ŋk
piĺe+ze
piĺe+nze
piĺe+st

The main functions of the nominative are the marking of: (i) the subject (in all three
declensions); (ii) The subject complement; (iii) The direct object (indefinite declension
only), referred to by Bubrix (1947: 13) as the accusative, which can also be used in the
expression of measure, see (1).
(1)

moĺ+em+s
kavto
vajgeĺbe+t́
go_V+INF+ILL two_NUM.ABS verst_N+PL.NOM.
(Bubrix 1947: 13) ‘to go two versts’

The indefinite nominative singular has a homonym in the absolutive form (cf. Bubrix
1947). This absolutive, which functions as indefinite adpositional complement, and
the analogous NP modifier, does not appear in the plural. It therefore it lends itself to
contextual disambiguation as a separate element type, despite the fact that in the function
of adpositional complement it is in complementary distribution with the definite singular
and plural, as well as, the genitive of the possessive declension.

Genitive
The GENITIVE case in Erzya does not have consistent marking. It is marked with %ń, %oń,
%eń => %Oń in the indefinite and definite plural declensions, whereas the definite singular
attests it as a ZERO marker with the definite marker used for the oblique cases in %ńt́, %ońt́,
%eńt́ => %Ońt́ (cf. EKM 2000; Pall 1996; Imajkina 1996a: 52, 62-64).

<pgNo>78</pgNo>
78

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.5

Genitive forms from the definite and indefinite declensions
GEN
GEN.DEF.SG
PL+DEF.PL+GEN
kal ‘fish’
kal+oń
kal+ońt́
kal+t+ne+ń
keĺ ‘tongue;
keĺ+eń
keĺ+eńt́
keĺ+t́+ńe+ń
language’
karks ‘belt’
piks ‘rope’
śokś ‘autumn’
kurgo ‘mouth’
t́iŋge ‘garden plot;
threshing ﬂoor’

karks+oń
piks+eń
śokś+eń
kurgo+ń
t́iŋge+ń

karks+ońt́
piks+eńt́
śokś+eńt́
kurgo+ńt́
t́iŋge+ńt́

karks+t+ne+ń
piks+t+ne+ń
śokś+t́+ńe+ń
kurg+t+ne+ń ~ kurgo+t́+ńe+ń
t́iŋg+t́+ńe+ń ~ t́iŋge+t́+ńe+ń

kudo ‘house; home;
room; container’

kudo+ń

kudo+ńt́

kudo+t́+ńe+ń

pize ‘nest’

pize

pize+ńt́

pize+t́+ńe+ń

The possessive declension sees the use of oblique-case possessive markers for all three
persons in singular and plural with a small group of kin terms taking special markers for
1SG and 2SG, see table (4.6) (see also Rueter 2005).
Table 4.6
POR

PUM

1SG

SG
PL

1PL
2SG
2PL
3SG
3PL

Possessor indexing for the genitive parse of non-kin and kin terms in Erzya
NON-KIN
KIN
skal ‘cow’
ked́ ‘hand; arm’
t́et́a ‘father’ t́ejt́eŕ ‘daughter; girl’
skal+om ~ skal+on ked́+em
tet́ a+ń
́
t́ejt́eŕ +eń ~ t́ejt́eŕ +em
skal+on ~ skal+om ked́+eń ~ ked́+em
t́ejt́eŕ +eń ~ t́ejt́eŕ +em
skal+onok
ked́+eńek
t́et́a+nok
t́ejt́eŕ +eńek
skal+ot
ked́+et́
tet́ a+t
́ ́
t́ejt́eŕ +et́
skal+oŋk
ked́+eŋk
t́et́a+ŋk
t́ejt́eŕ +eŋk
skal+onzo
ked́+enze
t́et́a+nzo
t́ejt́eŕ +enze
skal+ost
ked́+est
t́et́a+st
t́ejt́eŕ +est

While the back-vowel context of the kin term t́et́a ‘father’ provides evidence for a
palatal stop morpheme in the 1SG and 2SG cells, front-vowel contexts are ambiguous.
The genitive form of the 1SG index used with kin terms is identical to that of the indefinite
declension, and, as seen in the gloss t́ejt́eŕ ‘daughter’, might be treated as other nonkin terms, see (2) where the indefinite genitive is also used in implicitly 3SG readings.
Aduškina (2000: 94) provides for a difference between singular and plural possessa,
e.g. t́ejt́eŕ+em vajgeĺ+eze daughter_N+POSS-1SG>GEN.SG voice_N+POSS-3SG>NOM.SG
‘my daughter's voice’ contrasted with t́ejt́eŕ+eń oršamo+st daughter_N+POSS-1SG>GEN.
PL clothes_N+POSS-3PL ‘my daughters’ clothes’. This might be taken as disagreement
with what she writes three pages later (2000: 97) about the word sazor+oń ‘my little
sister's/sisters'’. (For specifics, see section 4.4. PARADIGM DEFECTIVITY IN ERZYA POSSESSOR
INDEXING.)

<pgNo>79</pgNo>
MORPHOLOGY

(2)

79

a. kolmo
tejt
́ eŕ+eń
́
peĺ+d́e
nućka+nzo
three_NUM-CARD.ABS daughter_N+GEN from_POP+ABL grandchild_N+POSS-3SG>PL/OBL
t́eĺe+ń
peŕt́
jakś+it́
winter_N+GEN through_POP walk-around_V+IND.PRES.PRED-3PL
sonze
koda+ź
ćulka+so.
he/she/it_PRON-PERS.GEN.POSS-3SG knit_V+PTC-OZ.ABS stocking_N+INE
(Abramov 1967:) ‘Grandchildren on by [her] three daughters have been walking
around all winter in stockings she had knitted.’
b. moń
sazor+oś
čevt́e
śed́ej,
I_PRON-PERS-1SG.GEN little-sister_N+NOM.DEF.SG soft_A.ABS heart_N.NOM.SG,
karm+i
kiŕd́+em+e+t́
eś
start_V+IND.PRES.PRED-3SG hold_V+INF+LOC+POSS-2SG own_PRON-REFL.ABS
tejt
́ eŕ+eń
́
tarka+s…
daughter_N+GEN instead/place_POP+ILL
(Abramov 1988:) ‘My little sister is tender-hearted, she will keep you as [though you
were her] own daughter.’
c. ńe+t́
veĺe+t́+ńe+se
eś
these_PRON-DEM+PL.NOM village_N+PL+DEF.PL+INE own_PRON-REFL.ABS
lomań+est
marto
eŕa+śt́
obran+oń
person_N+POSS-3PL with_POP live_V+IND.PRETI.PRED-3PL Obran_PRP+GEN
ćora+nzo,
nućka+nzo,
son_N+POSS-3SG>PL/OBL, grandchild_N+POSS-3SG>PL/OBL,
nućkińe+nze,
sodamo+nzo
di͔
great-grandchild_N+POSS-3SG>PL/OBL, son-in-law_N+POSS-3SG>PL/OBL and_CONJ
sodamo+ń
t́et́a+t,
ava+t.
son-in-law_N+GEN father_N+PL.NOM, mother_N+PL.NOM
(Abramov 1988:) ‘In those villages with their own people, dwelt Obran's sons, grandchildren, great-grandchildren, sons-in-law and mothers and fathers of sons-in-law.’

The special genitive form of the 2SG, as was noted, is only unambiguously attested in
back-vowel contexts. Some dialects, i.e. Shoksha-Drakino, as well as, Shugurova (Sura
subdialect) (Cygankin 1961: 347) attest a definite singular genitive form in %t́. This 2SG
reading might, at least, be ambiguous. (See more specifics section 4.4. PARADIGM DEFECTIVITY IN ERZYA POSSESSOR INDEXING.
The main function of the genitive case is the marking of: (i) the possessor (in all
three declensions for both attributive and predicative position); (ii) the direct object; (iii)
the adpositional complement, and (iv) the NP non-anchor modifier. It should be noted
that the definiteness/topicality of a given referent may be grounds for indefinite marking, i.e. proper names and pronouns appear more frequently in the indefinite declension,
whereas common nouns might in main-clause argument function require definite or pos-

<pgNo>80</pgNo>
80

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

sessive marking. The functions of possessor (i) and NP modifier (iv) overlap in ways
similar to the possessive of in English. Dictionaries from the Russian grammar tradition tend to hypothesize an adjective form homonymous to the indefinite genitive. The
referents of these genitive-form modifiers are non-anchoring (cf. Koptjevskaja-Tamm
2008) and indicate: material (3a), place (3b), time (3c), purpose (3d), meronymy (part
to whole) (3e), and holonymy (whole to part) (2f), which in Erzya are used in syntactic
constructions analytic to those used with possessor referents (3g). Compare examples
(3a-g), where the indefinite genitive is used as a modifier, more pertinent discussion will
be found in section 4.5.
(3)

a. večkića+ń
vanovt+to+ńt́
ej+eń
ojme+ś –
lover_N+GEN look_N+ABL+DEF.SG ice_N+GEN soul_N+NOM.DEF.SG
sol+i͔,
čuvto+ń+śe+ś –
melt_V+IND.PRES.PRED-3SG wood/tree_ N+GEN+PRON-DEF+NOM.DEF.SG
pal+i͔,
kšńi+ń+śe+ś –
burn_ V+IND.PRES.PRED-3SG, iron_N+GEN+PRON-DEF+NOM.DEF.SG
čevt́em+i
soften_ V+IND.PRES.PRED-3SG
(Zhuravlov 1999: 119) ‘A lover's look will melt the soul of ice, ignite the one of wood,
and soften the one of iron.’
b. t́e+ń+se+jak
oš+oń
lomań+eś
źar+s
this_PRON-DEM+GEN+INE+CLT town_N+GEN person_N+NOM.DEF.SG much_PRON-Q+ILL
javov+i
veĺe+ń+śe+ste+ńt́.
differ-from_V+IND.PRES.PRED-3SG village_N+GEN+PRON-DEF+ELA+DEF.SG
(Platonov 1975: 51) ‘In this way too, a city person still differs from one from a village.’
c. iśe+ń
kandst+oś
ĺija+ĺ,
yesterday_N/ADV+GEN burden_N+NOM.DEF.SG different_A.NOM.SG+IND.PRETII.PRED-3SG,
t́eči͔+ń+śe+ś
ĺija
today_N/ADV+GEN+PRON-DEF+PL+DEF.PL.NOM different_A.NOM.SG
(Abramov 1964: 252) ‘Yesterday's burden was different, the one of today's is different.’
d. oj+eń
paŕ+eś
med +eń+śe+ńt
́
́
butter_N+GEN barrel_N+NOM.DEF.SG honey_N+GEN+PRON-DEF+GEN.DEF.SG
koŕa+s
śe+d́e
od.
in-relation-to_POP+ILL more_PRON-DEF+ABL new_A.NOM.SG
‘The butter tub is newer than the honey [tub].’
e. ŕeve+ń
stada+ś
skal+oń+śe+ńt́
sheep_N+GEN herd_N+NOM.DEF.SG cow_N+GEN+PRON-DEF+GEN.DEF.SG
koŕa+s
viškińe.
in-relation-to_POP+ILL little_A.NOM.SG
‘The sheep herd is smaller than the cow [herd].’

<pgNo>81</pgNo>
81

MORPHOLOGY
f. bŕigada+ń
pŕavt+oś
vastov+ś
brigade_N+GEN leader_N+NOM.DEF.SG meet_V+IND.PRETI.PRED-3SG
marto
oš+oń+śe+ńt ́
town_N+GEN+PRON-DEM+GEN.DEF.SG with_POP
‘The head of the brigade met with the mayor (lit. the one that is [head] of the town).’
g. ki+ń
šapka+ńt́
jomavt+i͔ŋk `
who_PRON-INTER+GEN cap_N+GEN.DEF.SG lose_V+IND.PRETI.PRED-2PL>3P
ivan+oń+śe+ńt ́
iĺi
Ivan_N-PRP+GEN+PRON-DEM-DISTAL+GEN.DEF.SG or_CONJ
peta+ń+śe+ńt
́
?́
Petya_N-PRP+GEN+PRON-DEM-DISTAL+GEN.DEF.SG
(Evsevʹev 1963: 126) ‘Whose cap did you lose: Ivan's or Petya's?’

At the NP level this case lends itself to the implementation of secondary declension as
addressed in section 4.5. ADNOMINAL SYNTAX AND SECONDARY DECLENSION.

Dative
The DATIVE case in Erzya does not have consistent marking. While the allomorphs
%ńeń, %neń => -Neń are used in both the indefinite and definite plural declensions, the
polyexponential allomorphs %ńt́eń, %ońt́eń, %eńt́eń => %Ońt́eń are used in the definite
singular – some derive the latter form from definite singular oblique marker -Ońt́ and the
dative stem -Teń (cf. Evsevʹev 1963: 77), see table 4.7.
Table 4.7
Dative forms from the definite and indefinite declensions
Gloss
DAT
DEF.SG.DAT
PL+DEF.PL+DAT
kal ‘fish’
kal+neń
kal+ońt́eń
kal+t+ne+ńeń
keĺ ‘tongue; language’
keĺ+ńeń
keĺ+eńt́eń
keĺ+t́+ńe+ńeń
karks ‘belt’
karks+neń
karks+ońt́eń karks+t+ne+ńeń
piks ‘rope’
piks+neń
piks+eńt́eń
piks+t+ne+ńeń
śokś ‘autumn’
śokś+ńeń
śokś+eńt́eń
śokś+t́+ńe+ńeń
kurgo ‘mouth’
kurgo+ńeń
kurgo+ńt́eń
kurg+t+ne+ńeń ~kurgo+t́+ńe+ńeń
t́iŋge ‘garden plot; thresht́iŋge+ńeń
t́iŋge+ńt́eń
t́iŋg+t́+ńe+ńeń ~ t́iŋge+t́+ńe+ńeń
ing ﬂoor’
kudo ‘house; home; room;
container’

kudo+ńeń

kudo+ńt́eń

kudo+t́+ńe+ńeń

pize ‘nest’

pize+ńeń

pize+ńt́eń

pize+t́+ńe+ńeń

When addressing the issue of possessive declension, however, grammars of Erzya only
give forms for the singular persons, and therefore the dative declension is considered
defective. The forms generally given for the dative are %ńeń, %neń, %ońeń, %eńeń =>
%ONeń POSS-1SG>DAT, %t́eń, %teń, %ot́eń, %et́eń => %OTeń POSS-2SG>DAT and %nsteń, %onsteń,
%ensteń => %Onsteń POSS-3SG>DAT, with a limitation to the range the first and second

<pgNo>82</pgNo>
82

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

persons, i.e. POSS-1SG>DAT and POSS-2SG>DAT are, according to modern grammarians,
limited to kindred-term stems, whereas the POSS-3SG>DAT is open to common nouns as
well. Evsevʹev (1963: 111) only set a kindred-term limitation for the POSS-1SG>DAT,
hence (table 4.8) the word ĺišme ‘horse’ with a preceding question mark has been given
in the 2SG>DAT cell (for a more in-depth discussion of kindred terms, see section 4.4.)
Table 4.8
Dative forms for the defective possessive declension
Gloss
DAT
1SG>DAT
2SG>DAT
t́et́a ‘father’
t́et́a+ńeń
t́et́a+ńeń
t́et́a+t́eń
sazor ‘younger sister’
sazor+neń
sazor+neń
sazor+ot́eń
ĺišme ‘horse’
ĺišme+ńeń
NA
[?] ĺišme+t́eń
kudo ‘house; home;
kudo+ńeń
NA
NA
room; container’

3SG>DAT
t́et́a+nsteń
sazor+onsteń
ĺišme+nsteń
kudo+nsteń

Upon closer inspection of text corpora, it will be noted that the POSS-3SG>DAT affix
%Onsteń is subject to variation in the literature. This variation is attested at two separate
levels, i.e. at the semantic level this affix is used to index both singular and plural
possessors, and morphologically, some writers use forms that explicitly indicate singular
and plural possessors, %Onstenze and %Onstest, respectively, see examples (4–5), below,
from Glukhov (Malye Karmaly, Chuvashia, Erzya: ćarmun) and Kutorkin (Studenets,
Chuvashia). Although these forms will certainly be considered by some to be dialect
forms with secondary possessor marking, see examples below.
(4)

paĺko
koma+ś,
varšta+ś
Palko_N bend-over_V+IND.PRETI.PRED-3SG, take-a-look_V+IND.PRETI.PRED-3SG
potmar
al+ov
di͔
salava
bench_N.ABS under_POP+LAT and_CONJ with-stealth_ADV
́
ud+i͔t́.
tet́ a+nste+nze:
father_N+POSS-3.DAT+POSS-3SG: sleep_V+IND.PRES.PRED-3PL
(Glukhov 1929: 131) ‘Palko bent over, took a look under the bench and stealthfully
[said] to his father: they’re sleeping.’

(5)

kudi͔keĺks+eńt́
keŋkš+eś
apak
entrence-hall_N+GEN.DEF.SG door_N+NOM.DEF.SG not_PTC-PRT-NEG
peksta+ĺ.
udal+će
close_V-CONNEG+IND.PRETII.PRED-3SG back_ADV-SPAT+PRON-DEF.ABS
kudo+ńt́eń
sova+śt́
vet́e+ńe+st
room_N+DAT.DEF.SG enter_V+IND.PRETI.PRED-3PL five_NUM+COLL-ASSOC+POSS-3PL
milićiońer+t+ne,
prok
uč+i͔ ća+nste+st.
militia_N+PL+DEF.PL.NOM, as-thought_CONJ await_V+PTC-PRES+POSS-3.DAT+POSS-3PL
(Kutorkin 1987: 108) ‘The door to the enterance hall was not closed, [so/and] the five
militia came into the back room, as though they were expected.’

<pgNo>83</pgNo>
MORPHOLOGY

(6)

83

maŕa
kuźma
marto
śe+d́e+jak
pek
Marya_PRP.NOM.SG Kuz'ma_PRP.ABS with_POP more_PRON-DEM+ABL+CLT very_ADV
čara+m+o
karma+śt́
ava+st
peŕka.
spin_V+N-OM+LOC begin_V+IND.PRETI.PRED-3PL mother_N+POSS-3PL around_POP.
korta+śt́
si͔ń
ava+nsteń
speak_V+IND.PRETI.PRED-3PL they_PRON-PERS-3PL.NOM mother_N+POSS-3.DAT
druk –
kapša+śt́.
suddenly_ADV hurry_V+IND.PRETI.PRED-3PL
(Chesnokov 1974: 88) ‘Marya and Kuz'ma started spinning around their mother even
more. Suddenly, they spoke to their mother; they were in a hurry.’

In a recent translation by the seasoned journalist and translator Vasili Dëmin (Kuźka
eŕźań paz ‘Kuz'ka the Erzyan God’ 2008) we can attest a second person plural form
%Onsteŋk. This form can readily be analyzed as an analogous construction that might
be parsed +Onste+ŋk +POSS-3.DAT+POSS-2PL. Dëmin's use of this form would clearly
indicate the feasibility of the construction in the spoken language of Ses'kina, perhaps
not too far removed from the Alatyr' sub-dialects of Glukhov and Kutorkin.
(7)

meŕ+ed́e
eś
koźajka+nsteŋk,
tell_V+IMP.PRED-2PL own_PRON-REFL.ABS wife_N+POSS-2PL>DAT,
ćora+nsteŋk,
tejt
́ eŕ+ensteŋk,
́
nućka+nsteŋk,
son_N+POSS-2PL>DAT, daughter_N+POSS-2PL>DAT grandchild_N+POSS-2PL>DAT,
tŕa+m+s
saj+eź
taka+nsteŋk
́
– veśe
buj+eń
raise_V+N-OM+ILL take_V+PTC-OZ tyke_N+POSS-2PL>DAT – all_Q-UNIV clan_N+GEN
lomań+ensteŋk
ki+ńeń+gak
a
panž+om+s
person_N+POSS-2PL>DAT who_PRON-REL+DAT+CLT not_PRT-NEG open_V+N-OM+ILL
ozno+ma
tarka+nok –
ŕepešt́a+nok
pray_V+N-MA.ABS place_N+POSS-1PL – grove_N+POSS-1PL.
(Dëmin 2008: Kuźka eŕźań paz) ‘Tell your own wives, your sons, your daughters,
your grandchildren, your foster children – all the people of your clan not to show our
places of worship – our sacred groves.’

On the basis of the literary corpora we might be able to hypothesize the indexing of five
possessor persons; the only one missing is the first person plural.
The primary functions expressed by the dative case are: (i) addressee; (ii) recipient;
(iii) goal (potential controller); (iv) actors A and S of non-finite verbs; (v) temporal
termination point, and (vi) spatial goal.

<pgNo>84</pgNo>
84

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Ablative
The ABLATIVE case in Erzya can be represented by the allomorphs %do, %d́e, %de, %to, %t́e,
%te => %DO in all declension types.
Table 4.9
Gloss

Ablative forms from the definite and indefinite declensions
ABL
ABL.DEF.SG
PL+DEF.PL+ABL

kal ‘fish’
keĺ ‘tongue;
language’

kal+do
keĺ+d́e

kal+do+ńt́
keĺ+d́e+ńt́

kal+t+ne+d́e
keĺ+t́+ńe+d́e

karks ‘belt’
piks ‘rope’
śokś ‘autumn’
kurgo ‘mouth’
t́iŋge ‘garden plot;
threshing ﬂoor’

karks+to
piks+te
śokś+t́e
kurgo+do
t́iŋge+d́e

karks+to+ńt́
piks+te+ńt́
śokś+t́e+ńt́
kurgo+do+ńt́
t́iŋge+d́e+ńt́

karks+t+ne+d́e
piks+t+ne+d́e
śokś+t́+ńe+d́e
kurg+t+ne+d́e ~kurgo+t́+ńe+ d́e
t́iŋg+t́+ńe+d́e ~ t́iŋge+t́+ńe+ d́e

kudo ‘house; home;
room; container’

kudo+do

kudo+do+ńt́

kudo+t́+ńe+ d́e

pize ‘nest’

pize+d́e

pize+d́e+ńt́

pize+t́+ńe+ d́e

The main functions of the ablative are the marking of: (i) the object of discussion; (ii)
spatial source in delimitation constructions; (iii) cause; (iv) standard for comparison of
inequalities; (v) separation; (vi) the partial object in various verbs indicating “intake”,
i.e. eating, drinking, breathing, seeing, and (vii) the subject of quantification – although
the nominative is used as well. (See Rueter “On Quantification in the Erzya language”,
forthcoming);

##### 4.2.1.2. Local cases
Local cases in Erzya comprise a selection of eight spatio-temporal affixes with targets
in the range noun-phrase head, quantifiers, adverb/adposition and non-finite in %Om.
Nuances commonly conveyed by these cases include orientation, i.e. source, location
and goal. Whereas the inessive, elative, illative and prolative are well attested in the
entire range, the lative, locative and temporalis have very low attestation, for example,
the temporalis is only found in the indefinite declension, and the locative is limited in
range to the adverbs/adpositions and non-finites.

<pgNo>85</pgNo>
85

MORPHOLOGY

Inessive
The INESSIVE case in Erzya can be represented by the allomorphs %so, %se, %oso, %ese =>
%(O)sO in all declension types; the linking vowel is not obligatory, rather it appears to be
associated with stem-affix alignment.
Table 4.10
Gloss

Inessive forms from the definite and indefinite declensions
INE
INE.DEF.SG
PL+DEF.PL+INE
kal ‘fish’
kal+so
kal+so+ńt́
kal+t+ne+se
keĺ ‘tongue;
keĺ+se
keĺ+se+ńt́
keĺ+t́+ńe+se
language’
karks ‘belt’
piks ‘rope’
śokś ‘autumn’
kurgo ‘mouth’

karks+so
piks+se
śokś+se
kurg+so ~
kurgo+so

karks+so+ńt́
piks+se+ńt́
śokś+se+ńt́
kurg+so+ńt́ ~
kurgo+so+ńt́

karks+t+ne+se
piks+t+ne+se
śokś+t́+ńe+se
kurg+t+ne+se ~ kurgo+t́+ńe+se

kudo ‘house; home;
room; container’

kudo+so

pize ‘nest’

pize+se

t́iŋge ‘garden plot;
threshing ﬂoor’

t́iŋg+se ~ t́iŋge+se

t́iŋg+se+ńt́ ~
t́iŋge+se+ńt́

t́iŋg+t́+ńe+se ~ t́iŋge+t́+ńe+se

kudo+so+ńt́

kudo+t́+ńe+se

pize+se+ńt́

pize+t́+ńe+se

The main functions of the inessive are the marking of: (i) location of an action of event;
(ii) instrument; (iii) spatio-temporal location, and (iv) direct object imperfect aspect. This
case is attested in both nominal and clausal syntax. At the NP level this case lends itself
to the implementation of secondary declension as addressed in section 4.5. ADNOMINAL
SYNTAX AND SECONDARY DECLENSION. (See also Danilov 1973; Bubrix 1947: 15.)

Elative
The ELATIVE case in Erzya can be represented by the allomorphs %sto, %ste, %osto, %este =>
%(O)stO in all declension types; the linking vowel is not obligatory, rather is appears to
be associated with stem-affix alignment.

<pgNo>86</pgNo>
86

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.11

Elative forms from the definite and indefinite declensions
ELA
ELA.DEF.SG
PL+DEF.PL+ELA
kal ‘fish’
kal+sto
kal+sto+ńt́
kal+t+ne+ste
keĺ ‘tongue;
keĺ+ste
keĺ+ste+ńt́
keĺ+t́+ńe+ste
language’
karks ‘belt’
piks ‘rope’
śokś ‘autumn’
kurgo ‘mouth’

karks+sto
piks+ste
śokś+ste
kurg+sto ~
kurgo+sto

karks+sto+ńt́
piks+ste+ńt́
śokś+ste+ńt́
kurg+sto+ńt́ ~
kurgo+sto+ńt́

karks+t+ne+ste
piks+t+ne+ste
śokś+t́+ńe+ste
kurg+t+ne+ste ~
kurgo+t́+ńe+ste

kudo ‘house;
home; room;
container’

kudo+sto

kudo+sto+ńt́

kudo+t́+ńe+ste

pize ‘nest’

pize+ste

pize+ste+ńt́

pize+t́+ńe+ste

t́iŋge ‘garden
plot; threshing
ﬂoor’

t́iŋg+ste ~
t́iŋge+ste

t́iŋg+ste+ńt́ ~
t́iŋge+ste+ńt́

t́iŋg+t́+ńe+ste ~
t́iŋge+t́+ńe+ste

The ELATIVE case with the morpheme %(O)stO has the semantic functions of source and
location. Semantic source can be attested for the spatio-temporal notions of (i) spatial
source (8), (ii) abstract space, capacity (10), (iii) material (11), (iv) spatio-temporal
source in origin-point strategy for indicating span/duration – used in conjunction with
illative form (12), and (v) semantic location is attested for temporal notions (13).
(8)

a. kudo+sto+ńt́
house_N+ELA+DEF.SG
‘out of the house’
b. kudo+ńt́
ej+ste
house_N+DEF.SG away-from_POP+ELA
‘away from the house’

(9)

ava+sto+nzo
mother_N+ELA+POSS-3SG
‘from its/his/her mother’

(10)

pŕavt+sto
boss_N+ELA
‘from/in the position of boss’

(11)

śija+sto
silver_N+ELA
‘out of silver’

<pgNo>87</pgNo>
MORPHOLOGY

87

(12) a. veĺe+ste
veĺe+s
village_N+ELA village_N+ILL
‘from village to village’
b. śokśe+ste
tundo+s
autumn_N+ELA spring_N+ILL
‘from autumn to spring’
(13) a. eŕva
či͔+ste
every_Q.ABS day_N+ELA
‘every day’
b. eŕva
sa+m+sto+nzo
every_Q.ABS arrive_V-INF+ELA+POSS-3SG
‘every time he/she arrived’

Variation in meaning above can best be associated with the semantics of the word stem.
When the referent is a space that can serve as a location the notion of spatial source as
in kudostońt́ ‘out of the house’ comes without any implications. When speaking of a
capacity, the excessive interpretation pŕavtsto ‘from the capacity of boss’ is also readily
accepted. Materials, too, can serve as sources, thus śijasto ‘out of silver’. When nouns
are not the location of activities or event, rather reference points, source and reference
point provide the notion of separation, on the one hand, and the point of origin in the
establishment of spans through time or space, i.e. veĺeste veĺes ‘from village to village’
and śokśeste tundos ‘from autumn to spring’. Temporal reference point and location
can also be attested in deverbal morphemes, whereas the deverbal nouns in %OmA have
a high tendency of indicating temporal reference point, while non-finite elative forms
in %OmstO are highly attested for indicating an ongoing process (see Bubrix 1947:
16; Alëškina 2000: 222–228; Rueter: power-point presentation “Non-finite elative
‘-mstO’ in Erzya”, Tallinn: Finiteness and non-finiteness 11/25/2009, 2009b). Finally,
the elative is attested in both nominal and clausal syntax. At the NP level this case
lends itself to the implementation of secondary declension as addressed in section 4.5.
ADNOMINAL SYNTAX AND SECONDARY DECLENSION.

Illative
The ILLATIVE case in Erzya can be represented by the morpheme %s, %os, %es => %(O)s in
the indefinite and definite plural declensions, and the voiced allomorph %z, %oz, %ez =>
%(O)z variants are regularly used in the possessive declension; the linking vowel is not
obligatory, rather it appears to be associated with stem-affix alignment. The definite
singular, however, is problematic, i.e. despite erroneous attestation (Râbov 1935: 23§),
the morpheme has not been attested elsewhere.

<pgNo>88</pgNo>
88

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.12

Illative forms from the definite and indefinite declensions
ILL.DEF.SG > DEF.

ILL

PL+DEF.PL+ILL

SG.DAT

kal+t+ne+s
keĺ+t́+ńe+s

kal ‘fish’
keĺ ‘tongue;
language’

kal+s
keĺ+s

karks ‘belt’
piks ‘rope’
śokś ‘autumn’
kurgo ‘mouth’
t́iŋge ‘garden plot;
threshing ﬂoor’

karks+s ~ karks+os
piks+s ~ piks+es
śokś+s ~ śokśe+s
kurg+s ~ kurgo+s
t́iŋg+s ~ t́iŋge+s

kudo ‘house; home;
room; container’

kudo+s

kudo+t́+ńe+s

pize ‘nest’

pize+s

pize+t́+ńe+s

The analogical functions of the *ILL.DEF.
SG are usually taken
by the DEF.SG.DAT.

karks+t+ne+s
piks+t+ne+s
śokś+t́+ńe+s
kurg+t+ne+s ~kurgo+t́+ńe+s
t́iŋg+t́+ńe+s ~ t́iŋge+t́+ńe+s

The illative is not compatible with the definite singular declension. Information to the
contrary is provided by Râbov (1935) kudo+zońt́ house_N+ILL.DEF.SG ‘into the house’,
but perhaps this is merely a hypercorrect form of the Alatyr'-dialect 2SG possessor index,
which would be kudo+z+ont house_N+ILL+POSS- 2SG ‘into your house’ (note the absence
of palatalization on the 2SG marker).
Table 4.13
POR
SG

1
PL

2

SG
PL

3

SG
PL

Possessor indexing for the illative case
skal ‘cow’
ked́ ‘hand; arm’ t́et́a ‘father’
skal+oz+on ~ ked́+ez+eń ~
t́et́a+z+on ~
skal+oz+om
ked́+ez+em
t́et́a+z+om
skal+oz+onok
skal+oz+ot
skal+oz+oŋk
skal+oz+onzo
skal+oz+ost

ked́+ez+eńek
ked́+ez+et́
ked́+ez+eŋk
ked́+ez+enze
ked́+ez+est

t́et́a+z+onok
t́et́a+z+ot
t́et́a+z+oŋk
t́et́a+z+onzo
t́et́a+z+ost

t́ejt́eŕ ‘daughter; girl’
t́ejt́eŕ+ez+eń ~
t́ejt́eŕ+ez+em
t́ejt́eŕ +ez+eńek
t́ejt́eŕ +ez+et́
t́ejt́eŕ +ez+eŋk
t́ejt́eŕ +ez+enze
t́ejt́eŕ +ez+est

The main functions of the illative are the marking of: (i) spatial goal (into); (ii) spatiotemporal termination point (also used in strategies indicating span/duration – used in
conjunction with ablative and elative forms), and (iii) purpose, object to be acquired.
This case is attested in both nominal and clausal syntax.

Lative
The LATIVE case in Erzya can be represented by the allomorphs %v, %ov, %ev, %ej => %Ov
in the indefinite and definite plural declension types, it has no definite singular form, and
where a possessive declension would be expected it is homonymous with the locative
(see Bartens 1970; 1979: 25–26).

<pgNo>89</pgNo>
89

MORPHOLOGY
Table 4.14
NOM

Lative forms from the definite and indefinite declensions
LAT
LAT.DEF.SG > DEF.
PL+DEF.PL+LAT
SG.DAT

mastor ‘land’
viŕ ‘forest’
oš ‘town’
laŋgo ‘upper
surface’

mastor+ov
viŕ+ev
oš+ov
laŋgo+v

t́iŋge ‘garden plot;
threshing ﬂoor’

t́iŋge+v

t́iŋg+t́+ńe+v ~ t́iŋge+t́+ńe+v

kudo ‘house; home;
room; container’

kudo+v

kudo+t́+ńe+v

The analogical functions of the *lat.def.
sg are usually taken
by the DEF.SG.DAT.

mastor+t+ne+v
viŕ+t́+ńe+v
oš+t+ne+v
laŋg+t+ne+v ~ laŋgo+t́+ńe+v

The main function of the lative case is the marking of: (i) spatial or abstract goal (general direction).
The Erzya language has an adnominal derivational morpheme for deriving adjectives in %Ov, which makes it a homonym of this case. This homonym can be observed in
the discussion of the lative, although there seems little semantics to support the unification of a general-directional marker kudo+v home_N+LAT ‘home(ward)’ and a denominal
lopa+v leaf_N+DENOMINAL-ADJ ‘[covered with | full of] leaves’ (cf. Evsevʹev 1963: 55;
Ermuškin 2004:79–80).
(14)

di͔
si͔ń
śt́a+voĺt́
bu,
and_CONJ they_PRON-PERS-3PL.NOM stand-up_V+CONJ.PRED-3PL 0_PRT-CONJUNCTIVE,
si͔rga+voĺt́
pokš
oš+t+ne+v,
to+so
set-off_V+CONJ-PRED-3PL big_A.ABS town_N+PL+DEF.PL+LAT, that_PRON-SPAT+INE
vejseńd́a+voĺt́
bu
robočej+t́+ńe+ń
marto
unite_V+CONJ.PRED-3PL 0_PRT-CONJUNCTIVE worker_N+PL+DEF.PL+GEN with_POP
di͔
vijev
čadi͔ved́+eks
kaja+voĺt́
and_CONJ strong_A.ABS deluge_N+TRNSL fall-upon_V+CONJ.PRED-3PL
eś+est
ĺepšt́+ića+st
laŋg+s.
own_PRON-REFL+POSS-3PL>GEN oppress_V+PTC-PRES-DEF+POSS-3PL upon_POP+ILL
(Shcheglov 1980: 227) ‘..., and the would have risen up and moved on to the big cities,
there they would have united with the workers and as a strong torrent they would have
fallen upon their own oppressors.’

In addition to incompatibility with definite singular marking, this case is not attested for
non-finites. Synonymous constructions are attested from various writers for the deverbalnoun versus non-finite forms of the verb ĺed́ems ‘to mow’. Compare the two examples
in (15), where Kutorkin, on the one hand, uses a typically Alatyr'-dialect deverbal-noun
form in ĺed́ma (lit. ĺed́ema) and declines it in the indefinite lative, whereas Abramov
employs the non-finite locative form in ĺed́eme. (For disambiguation and discussion see
4.3.5.)

<pgNo>90</pgNo>
90

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

(15) a. ` moń+gak
ĺed́+ma+v
marto+ŋk
I_PRON-PERS-1SG.GEN+CLT mow_V+N+LAT with_POP+POSS-2PL
saj+samiź?
take_V+IND.PRES.PRED-X>1P ?
(Kutorkin 1976: 80) ‘Will [you] take me with you haying?’
b. mikaj
t́et́a+nzo
marto
Mikai_PRP.NOM.SG father_N+POSS-3SG>OBL with_POP
purna+śt́
rator
ĺej
čire+v
get-ready-to-go_V+IND.PRETI.PRED-3PL Alatyr'_PRP.ABS river_N.ABS edge_POP+LAT
bojar+neń
t́ikše
ĺed́+em+e.
boyar_N+DAT hay_N.NOM.SG mow_V+INF+LOC.
(Abramov 1973: 174) ‘Mikai and his father were getting ready to got to the banks of
the Alatyr' to make hay for the Boyar.’

Lative-case phrases are attested at both the NP and clausal levels.

Prolative
The PROLATIVE case in Erzya can be represented by the allomorphs %ga, %ka, %va => %Ga
in all declension types.
Table 4.15

Prolative forms from the definite and indefinite declensions
PROL
PROL.DEF.SG
PL+DEF.PL+PROL
san ‘vein; sinew’
san+ga
san+ga+ńt́
san+t+ne+va+ńeń
ińeved́ ‘sea’
ińeved́+ga
ińeveĺ+ga+ńt́
ińeved́+t́+ńe+va
potmaks ‘bottom’
potmaks+ka
potmaks+ka+ńt́
potmaks+t+ne+va
čud́ikeŕks ‘stream’
čud́ikeŕks+ka čud́ikeŕks+ka+ńt́ čud́ikeŕks+t+ne+va
kurgo ‘mouth’
kurgo+va
kurgo+va+ńt́
kurg+t+ne+va ~ kurgo+t́+ńe+va
t́iŋge ‘garden plot;
t́iŋge+va
t́iŋge+va+ńt́
t́iŋg+t́+ńe+va ~ t́iŋge+t́+ńe+va
threshing ﬂoor’
kudo ‘house; home;
room; container’

kudo+va

kudo+va+ńt́

kudo+t́+ńe+va

pize ‘nest’

pize+va

pize+va+ńt́

pize+t́+ńe+va

<pgNo>91</pgNo>
MORPHOLOGY

91

The main functions of the prolative are the marking of:
(i) Distributional spatial locative for use with themes in motion and stationary:
(16) a. t́eĺ+ńa+t
veŕgiz+t
či͔jń+it́
viŕ+ga,
winter_N+TEMP+PL wolf_N+PL.NOM run-around_V+IND.PRES.PRED-3PL forest_N+PROL,
pakśa+va
field_N+PROL
(cf. Ermuškin 2004: 76) ‘In the winter time, there are wolves running aound in the
forests and fields.’
b. ńej
jut+an
t́et́a+ń
kudo+va
now_ADV-TEMP go/move_V+IND.PRES.PRED-1SG father_N+GEN house_N+PROL
(cf. Ermuškin 2004: 76–77) ‘Now I’m walking around in [my] father's house.’

(ii) Transitional point in space:
(17)

t́et́a+ń
keŋkš+ka
ĺiś+em+ste
moń
kerš
father_N+GEN door_N+PROL exit_V+INF+ELA I_PRON-PERS-1SG.GEN left_A.ABS
piĺgińe+m
śiv+eze
foot/leg_N.DIM+POSS-1SG>NOM.SG break_V+OPT.PRED-3SG
(cf. Ermuškin 2004: 79) ‘When I go out through my father's door, may my left leg
break.’

(iii) Distributional spatial goal:
(18)

lovco+ńt́
šakš+ka
pešt́ĺ+ik
milk_N+GEN.DEF.SG crock_N+PROL fill_V+IMP.PRED-2SG>3SG
(Evsevʹev 1963: 66) ‘Pour the milk in crocks.’

(iv) Approximate spatial termination point:
(19)

meź+d́e
peĺ+em+s
t́e
what_PRON-INTER+ABL be-afraid-of_V+INF+ILL this_PRON-DEM.ABS
ĺej+se+ńt́ –
ved́+eś
kumanža vid+ga.
́
river_N+INE+DEF.SG water_N+NOM.DEF.SG knee_N.ABS adjacency_POP+PROL
(Abramov 1971: 192) ‘What is there to be afraid of in this river: the water [comes] up
to the knees’

<pgNo>92</pgNo>
92

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
(v) Approximate temporal locative:

(20)

čopoda+va
tu+ś
viŕ+ev
dark_N+PROL set-out-for_V+IND.PRETI.PRED-3SG forest_N+LAT
(cf. Evsevʹev 1963: 66) ‘In the darkness [before sun-up], he/she set out for the forest.’

(vi) Causative, purpose:
(21)

miń
vačkod́+ińek
eŕa+m+ga,
we_PRON-PERS-1PL.NOM beat_V+IND.PRETI.PRED-1PL live_V+INF+PROL,
śisém
ćora+ń
šač+om+ga
seven_NUM-CARD.ABS son_N+GEN be-born_V+INF-PROL
(Evsevʹev 1963: 66) ‘We rang (the bell) for living, for the birth of seven sons.’

(vii) Material measured:
(22)

avoĺ
śupav
śuro+va,
śupav
ćora
not_PRT-NEG-CONTR rich_A.NOM.SG grain_N+PROL, rich_A.NOM.SG man_N.ABS
kaka+va
child_N+PROL
(Evsevʹev 1963: 65) ‘[He is] not rich due to grain, [but] rich due to sons.’

The prolative is attested in both nominal and clausal syntax. At the NP level this case
lends itself to the implementation of secondary declension as addressed in section 4.5.
ADNOMINAL SYNTAX AND SECONDARY DECLENSION.

Locative
The LOCATIVE case in Erzya can be represented by the allomorphs %o, %e => %O in the
indefinite and possessive declension types. This form is only attested in adverbials,
postpositions and non-finites, some grammars refer to it as the nominative. The case
appears to have phonological restrictions. It can appear after the nasals n and m, and
the liquids l and r; this and the fact that sibling cases of the locative are all based on a
consonant stem would indicate that, diachronically speaking, the vowel is secondary (cf.
Bartens 1979: 25–26).
Table 4.16

Locative forms from the definite and indefinite declensions
LOC
DEF.SG.DAT
PL+DEF.PL+DAT
al% ‘beneath, below’ al+o
NA
NA
ikeĺ% ‘front’
ikeĺ+e
NA
NA
jon ‘direction’
jon+o
NA
NA
veŕ% ‘up above’
veŕ+e
NA
NA
moĺem% ‘to go’
moĺem+e
NA
NA

<pgNo>93</pgNo>
MORPHOLOGY

93

The main function of this form is the expression of relative spatial location in adverbs
and adpositions. The %Om+O non-finite might be added to this group on the grounds of
inﬂectional and semantic relations, see also (Bartens 1979: 25–26). Inﬂectional parallels
can be observed between word forms such as al+o ‘under; below’ and al+ks ‘space located
under or below’, on the one hand, and jarsa+m+o ‘to eat (of)’ and jarsa+m+s ‘to eat (of)’
with a dialect variant jarsa+m+ks, which might also be used in the meaning ‘something
to be eaten’ (N. Bryzhinskaya, p.c., 2007). At the NP level this case lends itself to the
implementation of secondary declension as addressed in section 4.5. ADNOMINAL SYNTAX
AND SECONDARY DECLENSION.

Temporalis
The TEMPORALIS case in Erzya can be represented by the allomorphs %ńe, %ne => %Ne in
the indefinite declension only, a limitation noted by Gabelentz (1839: 247).
Table 4.17

Temporalis forms from the indefinite declension
PL+DEF.PL+DAT
POSS
TEMP
DEF.SG.DAT
davol ‘storm’
davol+ne
In the deictic declensions the elative case is used to express virtually the same nuance.
śokś ‘autumn’
śokś+ńe
valdo ‘light’
valdo+ńe
piŋge ‘life time;
piŋge+ńe
century’
Maśt́a ‘Shrove tide’
piźeme ‘rain’

Maśt́a+ńe
piźeme+ńe

Its main function is the marking of temporal location.
(23)

umok
uš
piĺge+nze
long-ago_ADV-TEMP already_ADV leg/foot_N+POSS-3SG>NOM.SG
karma+śt́
keĺme+m+e,
di͔
paro,
begin_V+IND.PRETI.PRED-3PL get-cold_V+INF+LOC, and_CONJ good_A.NOM.SG,
iśtamo
́
pukštord+i͔
jakšam+ne,
like-this/that_PRON-DEF.ABS crackle_V+PTC-PRES-SHORT.ABS freeze_N+TEMP,
ašt́e+m+s
ĺembe
tulup
pot+so,
be-in-one-place_V+INF+ILL warm_A.ABS sheepskin-coat_N.ABS inside_POP+INE,
źardo
eĺe+se+t́
oza+do
nuža+ń
when_PRON-REL lap_N+INE+POSS-2SG sit-down_V+ABL Nuzha_PRP+GEN
palaga.
Palaga_PRP.NOM.SG
(Kutorkin 1997: 91) ‘His legs had already begun to get cold long ago, so what, in
crackling freezing weather like this, you should be wrapped up in a sheepskin coat
when you have Nuzha's Palaga sitting in your lap.’

<pgNo>94</pgNo>

##### 4.2.1.3. Attributive Cases
The attributive cases comprise the “mixed-bag” set of cases that are neither spatiotemporal nor used in core-case functions: the translative, comparative, abessive and
comitative. The first three enumerated can be used as subject complements while the
last is, in fact, a peripheral modifier.

Translative
The TRANSLATIVE case in Erzya can be represented by the allomorphs %ks, %oks, -eks =>
%(O)ks in all declension types; the linking vowel is not obligatory, rather it appears to
be associated with stem-affix alignment. In the most recent Erzya grammar (2000) the
translative definite singular has been left out of the declension tables, but this apparently
has to do with the mere infrequency of this case usage, see (24).
(24)

ĺiś+ś
ot́ec
ivan
go-out_V+IND.PRETI.PRED-3SG father/priest_N.NOM.SG Ivan_N-PRP.NOM.SG
ušo+v,
a
či͔+ś
karma+ś
outside_N+LAT, but_CONJ sun_N+NOM.DEF.SG begin_V+IND.PRETI.PRED-3SG
kaźńe+nze
marto
sonze
gift_N+POSS-3SG with_POP he/she/it_PRON-PERS-3SG.GEN.POSS-3SG
viška
rita+ks+ońt ́
nalkśe+m+e
little_A.ABS Rita_N-PRP+TRNSL+DEF.SG play_V+INF+LOC
(Kutorkin 1969: 405) ‘[Then] Father Ivan went outside, but the sun began to play with
his gift [silver cross] like his little Rita.’

Table 4.18
kal ‘fish’
keĺ ‘tongue;
language’

Translative forms from the definite and indefinite declensions
TRNSL
TRNSL.DEF.SG
PL+DEF.PL+TRNSL
kal+oks ~
kal+ks+ońt́
kal+t+ne+ks
kal+ks

at́akš ‘rooster’
piks ‘rope’
śokś ‘autumn’
kurgo ‘mouth’
t́iŋge ‘garden plot;
threshing ﬂoor’
tumo ‘oak’

keĺ+eks ~
keĺ+ks

keĺ+ks+eńt́

keĺ+t́+ńe+ks

at́akš+oks
piks+eks
śokś+eks
kurgo+ks
t́iŋge+ks

at́akš+oks+ońt́
piks+eks+eńt́
śokś+eks+eńt́
kurgo+ks+ońt́
t́iŋge+ks+eńt́

at́akš+t+ne+ks
piks+t+ne+ks
śokś+t́+ńe+ks
kurg+t+ne+ks ~kurgo+t́+ńe+ks
t́iŋg+t́+ńe+ks ~ t́iŋge+t́+ńe+ks

tumo+ks

tumo+ks+ońt́

tumo+t́+ńe+ks

<pgNo>95</pgNo>
MORPHOLOGY

95

(Translative definite and possessive declension forms are extremely low-frequency; they
have been included in older grammars of Erzya, but some modern speakers do not acknowledge their existence. Low frequency could be due to the fact that the translative is
generally a case of the complement, such that topic marking is not expected.)

The main functions of the translative case are the marking of: (i) object complement
(cf. Bartens 1999: 98–99); (ii) similative; (iii) goal (change of state), and (iv) terminal
point in change of state plotting, in conjunction with elative source case. This case is
attested in both nominal and clausal syntax. At the NP level this case lends itself to the
implementation of secondary declension as addressed in section 4.5. ADNOMINAL SYNTAX
AND SECONDARY DECLENSION.

Comparative
The COMPARATIVE case in Erzya can be represented by the morpheme %ška, %oška, %eška
=> %(O)ška in all declension types; the linking vowel is not obligatory, rather it appears to
be associated with stem-affix alignment. This case is given in the latest Erzya Grammar
(2000) with a definite plural declension (Grebneva 2000: 106), unfortunately it is not
attested in the majority corpus.
Table 4.19

Comparative forms from the definite and indefinite declensions
COMP
COMP.DEF.SG
PL+DEF.PL+COMP
ksnav ‘pea’
ksnav+ ška
ksnav+ška+ńt́
ksnav+t+ne+ška
kodgemeń ‘sixty’
kodgemeń+ška kodgemeń+ška+ńt́ kodgemeń+t́+ńe+ška
vaz ‘calf
vaz+oška
vaz+oška+ńt́
vaz+t+ne+ška
(young cow)’
saldi͔ŕks ‘salt bowl’
saldi͔ŕks+eška saldi͔ŕks+eška+ńt́ saldi͔ŕks+t+ne+ ška
pando ‘hill’
pando+ška
pando+ška+ńt́
pand+t+ne+ška ~ pando+t́+ńe+ška
t́iŋge ‘garden plot;
t́iŋge+ ška
t́iŋge+ška+ńt́
t́iŋg+t́+ńe+ń eń~ t́iŋge+t́+ńe+ ška
threshing ﬂoor’
kudo ‘house; home; kudo+ška
kudo+ška+ńt́
kudo+t́+ńe+ ška
room; container’
pińeme ‘oat’
pińeme+ška
pińeme+ška+ńt́
pińeme+t́+ńe+ ška

The main functions of the comparative case are the marking of: (i) the standard of equal
comparison, and (ii) spatio-temporal approximation. This case is attested in both nominal and clausal syntax.
Bartens (1999: 80) considers the comparative to be a mere derivational suffix
used for producing adjectives to designate the standard of comparison in equals, e.g.
vazo+ška kiska calf_N+COMP dog_N.NOM.SG ‘a dog the size of a calf’, and ažija+ška
kal thill_N+COMP fish_N.NOM.SG ‘a fish as thick as a thill (the Erzya are familiar with
draught animals)’. The counter-examples to this come from subject complement usage

<pgNo>96</pgNo>
96

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

where the standard of equal comparison can, in fact, appear in the definite singular declension when no generic interpretation is intended, see (25) and (26) with a possessive
declension.
(25)

mordovija+ń
rator
ĺejńe+ška+ńt, ́
avoĺ
Mordovia_PRP+GEN Alatyr'_N.ABS little-river_N+COMP+DEF.SG, not_PRT-NEG-CONTR
śe+d́e
pokš.
that_PRON-DEF+ABL big_A.NOM. SG
(Doronin 1994: 106) ‘The size of the little Alatyr' River in Mordovia, not any bigger.’

(26)

seŕ+eze
tet́ a+ška+nzo,
́
no
śe+d́e
height_N+POSS-3SG>NOM father_N+COMP+POSS-3SG, but_CONJ that_PRON-DEM+ABL
šumbra
di͔,
keveŕ+ića
šar
healthy/stout_A.NOM.SG and_CONJ, roll_V+PTC-PRES-LONG.ABS ball_N.NOM.SG
buto,
bojka.
as-though_PRT, quick_A.NOM.SG
(Kutorkin 1969: 28) ‘He is tall like his father, but stouter and quick like a rolling ball.’

One peculiarity might be attributed to the possessive declension found in (24), namely,
a parallel is drawn between his height [the boy's] and his father as opposed to his
father’s, which would indicate height as a possessum for both the boy and his father.
At the NP level this case lends itself to the implementation of secondary declension as
addressed in section 4.5. ADNOMINAL SYNTAX AND SECONDARY DECLENSION.

Abessive
The ABESSIVE case in Erzya can be represented by the allomorphs %vtomo, %vt́eme, %tomo,
%t́eme, %teme => %VTOmO in all declension types.
Table 4.20

Ablative forms from the definite and indefinite declensions
ABE
ABE.DEF.SG
PL+DEF.PL+ABE
kal ‘fish’
kal+tomo
kal+tomo+ńt́
kal+t+ne+ vt́eme
keĺ ‘tongue;
keĺ+t́eme
keĺ+t́eme+ńt́
keĺ+t́+ńe+ vt́eme
language’

karks ‘belt’
piks ‘rope’
śokś ‘autumn’
kurgo ‘mouth’

karks+tomo
piks+teme
śokś+t́eme
kurgo+vtomo

karks+tomo+ńt́
piks+teme+ńt́
śokś+t́eme+ńt́
kurgo+vtomo+ńt́

t́iŋge ‘garden plot;
threshing ﬂoor’

t́iŋge+vt́eme

t́iŋge+vt́eme+ńt́

kudo ‘house; home;
room; container’

kudo+vtomo

kudo+vtomo+ńt́

pize ‘nest’

pize+vt́eme

pize+vt́eme+ńt́

karks+t+ne+ vt́eme
piks+t+ne+ vt́eme
śokś+t́+ńe+ vt́eme
kurg+t+ne+vt́eme ~
kurgo+t́+ńe+vt́eme

t́iŋg+t́+ńe+vt́eme ~
t́iŋge+t́+ńe+vt́eme
kudo+t́+ńe+ vt́eme

pize+t́+ńe+ vt́eme

<pgNo>97</pgNo>
97

MORPHOLOGY

The main function of the abessive case is the marking of lack/absence of something,
whereby it is given with an interpretation of MANNER or STATE OF ONE OF THE ARGUMENT
COMPLEMENTS. This case is attested in both nominal and clausal syntax. At the NP level
this case lends itself to the implementation of secondary declension as addressed in
section 4.5. ADNOMINAL SYNTAX AND SECONDARY DECLENSION.

Comitative
The COMITATIVE case in Erzya can be represented by the allomorphs %ńek, %nek => %Nek
in the indefinite and definite plural declension types, reference is also made to its reﬂex
in collective numerals of the possessive declension (cf. Cygankin 1961:346; Nadʹkin
1968: 51, 57; Danilov 1969: 171–174).
Table 4.21
kal ‘fish’
keĺ ‘tongue;
language’

Comitative forms from the definite and indefinite declensions
COM
COM.DEF.SG >
PL+DEF.PL+COM
marto
kal+nek
keĺ+ńek

Only attested
in dialects with
DET+COM

ordering (cf.
Nadʹkin 1968: 51,
57)

kal+t+ne+ńek
keĺ+t́+ńe+ńek

karks ‘belt’
piks ‘rope’
śokś ‘autumn’
pando ‘hill’
t́iŋge ‘garden plot;
threshing ﬂoor’

karks+nek
piks+nek
śokś+ńek
pando+ńek
t́iŋge+ńek

karks+t+ne+ńek
piks+t+ne+ńek
śokś+t́+ńe+ńek
pand+t+ne+ńek ~ pando+t́+ńe+ńek
t́iŋg+t́+ńe+ń eń ~ t́iŋge+t́+ńe+ńek

kudo ‘house; home;
room; container’

kudo+do

kudo+t́+ńe+ńek

pize ‘nest’

pize+d́e

pize+t́+ńe+ńek

The main function of the comitative is the marking of universal quantification + with.
This case is subject or object oriented. Nadʹkin (1968: 51, 57) also attests this case in the
definite plural declension of some of the Alatyr' subdialects.
Ambiguity is attested with the adnominal cross-referential person marker %ONOk,
for more specifics, see (4.2.3.1.1.) FIRST PERSON.

Interim summary
On the basis of the discussion of cases, above, we can render the following declension
tables with allomorphs and examples in the indefinite, definite and possessor-index
forms.

<pgNo>98</pgNo>
98
Table 4.22
Label
NOM
GEN

DAT

ABL

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Indefinite declension table
Form(s)
Standard
phonetic
Ø
+ń, +oń, +eń
+ńeń,
+neń,
+ońeń, +eńeń
+do, +d́e, +de,
+to, +t́e, +te

Cyrillics

Example

Ø
+нь, +онь, +ень,
+энь

+Ø
+Oń

kudo
kudo+ń

‘home/house’
‘of [home| a/the
house]’

+ONeń

kudo+ńeń

‘for the home’

+DO

kudo+do

‘about [home|a house]’

+со, +сэ

+sO

kudo+so

‘[at home|in a/the
house]’

+нень,
+онень,
+энень

+нэнь,
+енень,

+до, +де, +дэ,
+то, +те, +тэ

INE

+so, +se

ELA

+sto, +ste

+сто, +стэ

+stO

kudo+sto

‘from [home| a/the
house]’

+s
+v, +ov, +ev, +j

+с
+в, +ов, +ев, +эв,
+й

+s
+Ov

kudo+s
kudo+v

‘into a/the house’
‘home (GOAL)’

+га, +ка, +ва

+Ga

kudo+va

‘[in around the house|in
homes] [+DISTR]’

+о, +е
+не, +нэ
+кс, +окс, +екс,
+экс

+O
+Ne
+Oks

mastor+o
varma+ńe
kudo+ks

‘on the ground’
‘when it's windy’
‘home/house (complement position)’

+ška
+VTOmO

kudo+ška
kudo+vtomo

‘the size of a house’
‘without a home/house’

+Nek

kudo+ńek

‘with the whole house’

ILL
LAT

PROL

LOC
TEMP
TRNSL

COMP
ABE

COM

Total
allomorphs

+ga, +ka, +va
+o, +e
+ńe, +ne
+ks, +oks, +eks
+ška
+vtomo,
+vt́eme,+tomo,
+t́eme, +teme
+ńek, +nek
41

+шка
+втомо, +втеме,
+томо, +теме,
+тэме
+нек, +нэк
45

The allomorphs occurring in the cases are attributed to the following qualities of the
preceding constituent: (i) front-back vowel harmony; (ii) palatal harmony; (iii) vowel
versus consonant stem; (iv) voiced versus voiceless in consonant stem; (v) avoidance of
velar adjacency, optional vowel loss in stem type NOUNS2, see Nominal-type word stems,
above. All told there are 41 phonetic, and 45 Cyrillic allomorphs associated with the 15
subcategories of case.

<pgNo>99</pgNo>
99

MORPHOLOGY
Table 4.23
Label
NOM
GEN
DAT
ABL
INE
ELA
ILL
LAT
PROL
LOC
TEMP
TRNSL

COMP
ABE
COM

Total
allomorphs

Definite plural declension table
Form(s)
Standard Cyrillics Example
phonetic
Ø
+Oń
+ńeń
+d́e
+se
+ste
+s
+v
+va

Ø
+нь
+нень
+де
+сэ
+стэ
+с
+в
+ва

kudot́ńe
kudot́ńe+ń
kudot́ńe+ńeń
kudot́ńe+d́e
kudot́ńe+se
kudot́ńe+ste
kudot́ńe+s
oštne+v
kudot́ńe+va

‘the/these/those houses’
‘of the houses’
‘for the homes’
‘about the [homes| houses]’
‘in the [homes| houses]’
‘from the [homes| houses]’
‘into the houses’
‘to/toward the cities’
‘[in around the houses|in the homes]’

NA

NA

NA

NA

+кс

kudot́ńe+ks

‘homes/houses (complement
position)’

+ška
+vt́eme
+ńek

+шка
+втеме
+нек

kudot́ńe+ška
kudot́ńe+vt́eme
kudot́ńe+ńek

‘the size of those houses’
‘without the homes/houses’
‘with [all] the houses (dialect, see
Nadʹkin 1968)’

13

13

+ks

In the definite plural declension only one allomorph is available for each case. Thus with
no attestation for the translative, locative and temporal cases there is a total of 13 forms
including ZERO for the 13 attested cases.

<pgNo>100</pgNo>
100

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.24
Label
NOM
GEN

DAT

ABL

INE
ELA

Definite singular declension table
Form(s)
Standard
phonetic
+ś, +oś, +eś
+ńt́, +ońt́, +eńt́
+ńt́eń, +nt́eń,
+ońt́eń, +eńt́eń

+do+ńt́, +d́e+ńt́,
+de+ńt́, +to+ńt́,
+t́e+ńt́, +te+ńt́

+so+ńt́, +se+ńt́
+sto+ńt́, +ste+ńt́

Cyrillics

Example

+сь, +ось, +эсь, +есь
+нть, +онть, +енть,
+энть

kudo+ś
kudo+ńt́

‘home/house’
‘of the house’

kudo+ńt́eń

‘for the home’

kudo+do+ńt́

‘about the house’

kudo+so+ńt́
kudo+sto+ńt́

‘[at home|in a/the house]’
‘from [home| a/the house]’
(use dative case or POP)

kudo+va+ńt́

‘[in around the house|in
homes] [+DISTR]’

+нтень, +онтень,
+ентень, +энтень

+до+нть, +де+нть,
+дэ+нть, +то+нть,
+те+нть, +тэ+нть

+со+нть, +сэ+нть
+сто+нть, +стэ+нть

ILL

NA

NA

LAT

NA

NA

PROL

+ga+ńt́, +ka+ńt́,
+va+ńt́

+га+нть, +ка+нть,
+ва+нть

LOC

NA

NA

TEMP

NA

NA

+ks+ońt́,
+ks+eńt́,
+oks+ońt́,
+eks+eńt́

+кс+онть, +окс+онть,
+екс+энть,
+экс+энть

ŕita+ks+ońt́

+ška+ńt́
+vtomo+ńt́,
+vt́eme+ńt́,
+tomo+ńt́,
+t́eme+ńt́,
+teme+ńt́

+шка+нть
+втомо+нть,
+втеме+нть,
+томо+нть,
+теме+нть,
+тэме+нть

kudo+ška+ńt́
kudo+vtomo+ńt́

TRNSL

COMP

ABE

COM

NA

NA

Total
allomorphs

28

31

(use dative or elative
cases)
‘like Rita’

‘the size of the/this/that
house’
‘without the home/house’

The allomorphs occurring in the cases are attributed to the following qualities of the
preceding constituent: (i) front-back vowel harmony; (ii) palatal harmony; (iii) vowel
versus consonant stem; (iv) voiced versus voiceless in consonant stem; (v) avoidance
of velar adjacency, optional vowel loss in stem type NOUNS2, just as in the indefinite
declension, above. Since there is a deviation in definite singular marking for nominative
and oblique cases, the variation in the nominative singular has been noted here. A great

<pgNo>101</pgNo>
101

MORPHOLOGY

reduction in attested cases is apparent, with most functions of the illative being taken
over by the dative morphology or adpositional usage. All told there are 32 phonetic, and
35 Cyrillic allomorphs associated with the 10 attested subcategories of case.
Table 4.25a Possessive declension for nominative, genitive, dative and illative possessa
PUM NB

POR

Form(s)
Standard
phonetic

1SG.

+m, +om, +em

+м, +ом, +эм,
+ем

+Om

kudo+m

‘my
home/
house’

3SG

+zo, +ze, +ozo,
+eze

+зо, +зэ, +озо,
+езэ, +эзэ

+OzO

kudo+zo

‘his/her/
its home/
house’

1SG

+n, +ń, +on,
+eń, +m, +om,
+em

+н, %нь, +он,
+ень, +энь,
+ом, +эм, +ем

+ON, +Om

kudo+n

‘my
homes/
houses’

+OnzO

kudo+nzo

‘his/her/
its homes/
houses’

+т, +ть, +от,
+еть, +эть

+OT

kudo+t

‘your
home/
house’

+нок, +нек,
+онок, +енек,
+энек

+ONOk

kudo+nok

‘our
home/
house’

+нк, +онк,
+енк, +энк

+Oŋk

kudo+ŋk

‘your
home/
house’

+ст, +ост,
+ест, +эст

+Ost

kudo+st

‘their
home/
house’

Cyrillics

Example

SG

PL

3SG

+nzo, +nze,
+onzo, +enze

2SG

+t, +t́, +ot, +et́

1PL

+nok, +ńek,
+onok, +eńek

2PL

+ŋk, +oŋk,
+eŋk

3PL

+st, +ost, +est

SG/PL

+нзо, +нзэ,
+онзо, +ензэ,
+энзэ

<pgNo>102</pgNo>
102

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.25b Possessive declension for genitive possessa
PUM NB

POR

Form(s)
Standard
phonetic

SG/

1SG

+ń, +oń, +eń

2SG

+t́, +ot́, +et́

1SG

+m, +om, +em,
+n, +ń, +on,
+eń

+ом, +эм, +ем,
+н, +нь, +он,
+ень, +энь

+Om, +ON

1SG

kudo+n

‘my
homes/
houses’

SG/

2SG

+t, +t́, +ot, +et́

+н, %нь, +он,
+ень, +энь,
+ом, +эм, +ем

+ON, +Om

PL

+n, +ń, +on,
+eń, +m, +om,
+em

+т, +ть, +от,
+еть, +эть

+OT

kudo+t

‘your
home/
house’

3SG

+nzo, +nze,
+onzo, +enze

+OnzO

kudo+nzo

‘his/her/
its homes/
houses’

1PL

+nok, +ńek,
+onok, +eńek

+нзо, +нзэ,
+онзо, +ензэ,
+энзэ

+ONOk

kudo+nok

‘our home/
house’

2PL

+ŋk, +oŋk,
+eŋk

+нк, +онк,
+енк, +энк

+Oŋk

kudo+ŋk

‘your
home/
house’

3PL

+st, +ost, +est

+ст, +ост,
+ест, +эст

+Ost

kudo+st

‘their
home/
house’

PL KIN

SG

PL

Cyrillics

+нь, +онь,
+ень, +энь

+ть, +оть,
+еть, +эть

+нок, +нек,
+онок, +енек,
+энек

Example

+Oń

ava+ń

‘my
mother's’

+Ot́

ava+t́

‘your
mother's’

kudo+m

‘my home/
house’

<pgNo>103</pgNo>
103

MORPHOLOGY
Table 4.25c Possessive declension for dative possessa with no distinction
in number of possessa
Form(s)
Standard phonetic
+neń, +ńeń, +ońeń,
+eńeń

POR

1SG

Cyrillics
+нэнь, %нень,
+онень, +енень,
+энень

+teń, +t́eń, +ot́eń,
+et́eń

2SG

+тэнь, +тень,
+отень, +етень,
+энеть

+nsteń, +onsteń,
+ensteń

+ONeń

Example
ava+ńeń

+OTeń

ava+t́eń

‘to my
mother’
‘to your
home/
house’
‘to his/
her/its/
their
mother’

1PL

+нстэнь,
+Onsteń
ava+nsteń
+онстэнь,
+енстэнь,
+энстэнь
suppleted by other declensions or adpositional constructions

2PL

+nsteŋk, +onsteŋk,
+ensteŋk

‘to your
mother’

3

+нстэнк,
+онстэнк,
+енстэнк,
+энстэнк

(Only one
attestation)

+Onsteŋk

ava+nsteŋk

Table 4.25d Possessive declension for illative possessa with no distinction
in number for possessa
Form(s)
Standard phonetic

POR

SG

1
PL

SG

2
PL

SG

3
PL

Total
allomorphs

Cyrillics

Example

+z+on, +z+eń,
+oz+on, +ez+eń,
+z+om, +z+em,
+oz+om, +ez+em

+з+он, +з+энь, +оз+он,
+ез+энь, +эз+энь, +з+ом,
+з+эм, +оз+ом, +ез+эм,
+эз+эм

kudo+z
+on

‘in my
house’

+z+onok, +z+eńek,
+oz+onok, +ez+eńek

+з+онок, +з+энек, +оз+онок,
+ез+энек, +эз+энек

kudo+z
+onok

‘our home/
house’

+z+ot, +z+et́, +oz+ot,
+ez+et́

‘your home/
house’

+з+онзо, +з+энзэ, +оз+онзо,
+ез+энзэ, +эз+энзэ

kudo+z
+ot
kudo+z
+oŋk
kudo+z
+onzo

+z+ost, +z+est,
+oz+ost, +ez+est

+з+ост, +з+эст, +оз+ост,
+ез+эст, +эз+эст

‘their home/
house’

103

129

kudo+z
+ost

+z+oŋk, +z+eŋk,
+oz+oŋk, +ez+eŋk

+z+onzo, +z+enze,
+oz+onzo, +ez+enze

+з+от, +з+эть, +оз+от,
+ез+эть, +эз+эть

+з+онк, +з+энк, +оз+онк,
+ез+энк, +эз+энк

+Oz+

‘your home/
house’
‘his/her/
its homes/
houses’

<pgNo>104</pgNo>
104

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

The allomorphs occurring in the cases are attributed to the following qualities of the
preceding constituent: (i) front/back vowel harmony; (ii) palatal harmony; (iii) vowel
versus consonant stem, and (iv) voiced versus voiceless in consonant stem. Although
this table provides explicit information for only four sets of case allomorphs, it can be
used for predicting the forms present in the remainder of the cases in the possessive
declension (the ablative, inessive, elative, prolative, locative, translative, comparative,
abessive and comitative); the lative and temporalis are not attested in this declension.
Nearly all nominative cells have equivalents in the genitive-slot cells. Instead
of minimalizing the number of slots on morphological grounds (1SG–2SG and 1PL–3PL
homonymy in nominative and genitive case), this author has chosen to utilize 3SG analogy, which morphologically distinguishes the functions of the genitive from those of the
nominative; at least in the singular form of the possessum. The possessor-index used
with non-core cases, and therefore present in the 9 cases enumerated above, is equivalent
in form to that of the nominative plural reading, i.e. the 3SG %OnzO is the morpheme attested in non-core cases, whereas both 1SG %ON and %Om are attested in non-core cases
of modern literature. (It will be noted that the 1SG %ON marker is never attested for functions associated with the nominative singular.) Dative-case marking in the third person
is applicable to both singular and plural, so no differentiation has been made; only the
1PL cell has no dative attestation of any sort. (Genitive and dative paradigm defectivity
will be dealt with in chapter 5.) No separate marker is available for the lative, but if one
wanted to attest it, all of its forms would be ambiguous with locative-case forms, that
is, there would be 12 phonetic and 12 Cyrillic allomorphs to add the sum of core-case
and illative allomorphs, where there are 103 phonetic, and 129 Cyrillic allomorphs, and
the non-core-case allomorphs, where there would be 26 phonetic, and 27 Cyrillic allomorphs for a total of 141 phonetic and 168 Cyrillic allomorphs in a total of 13 attested
subcategories of case.

#### 4.2.2. Number
The grammatical category of number in Erzya is represented both morphologically and
lexically. While verbal conjugations feature morphological agreement strategies for
cross-referenced entities, it is the NPs that feature both morphological and lexical means
for differentiating grammatical number. Thus, grammatical number will be seen in the
three declension types of NPs, and certain pronouns (personal and demonstrative).
The morphological expression of grammatical number in the declension of noun
heads is subject to a semantic notion of [+COUNT] and the declension type. Hence, assuming the referent can be individuated, there are limitations to which cells of the three
declension types make a distinction for number. While the definite declension features
a composite expression of plural in +T+Ne +PL+DEF.PL for all attested cases, and an unambiguous expression of singular in +Oś for the nominative and +Ońt́ for the oblique
cases, the indefinite declension only attests plural marking in the nominative +T +PL. (cf.

<pgNo>105</pgNo>
MORPHOLOGY

105

also Lyons1999: 70–71 [Feoktistov 1966:177–98; Spenser 1992:313–41]) The possessive declension provides for two separate expressions of grammatical number, i.e. there
is the grammatical number associated with the referent of the possessor, on one hand,
and the referent of the possessum, on the other. Whereas all three persons distinguish for
number of the possessor, there are only two persons which distinguish for number of the
possessum, which is evident in the nominative alone. The only unambiguous singular
marking attested is that of the third person singular, +OzO +POSS-3SG>NOM.SG; the 1SG
possessor-index can only partially be disambiguated. While the plural possessa reading
of 1SG possessor-index can be matched with the literary variants %ON and %Om, which are
illustrative of dialect variation; the %ON cross-referential marker is not compatible with
singular nominative possessa, where only marking in %Om would be acceptable. Thus
adnominal number marking in Erzya is declension and case dependent (cf. Feoktistov
1966: 108, 204, 1975: 289–93; Aikhenvald and Dixon 1998: 68); only the nominative
allows for a choice of number in all three declensions.
The plural marker %T of the indefinite nominative and the entire definite declension has attested ambiguity. While the indefinite nominative singular is homonymous
with the absolutive used in compound words and as the adpositional complement (cf.
Buzakova 2000: 83, 87–89), the indefinite nominative plural is limited to the syntactic
core roles of subject and object. There is, however, one ambiguous construction that can
be described; t́ešt́+t́ potso ‘star_N+PL inside_POP.INE’ or t́ešt́Ø potso ‘star_N.(stem-vowel
loss between voiceless stops) inside_POP.INE’ (M. Imajkina, p.c., 2002). In the instance
of the indefinite nominative, the plural marker can also be homonymous with the 2SG
possessor index, whereas, in the definite declension, the PL %T marker always co-occurs
with the definite plural marker in %Ne in the 13 cases it can be attested with; there is no
attestation for the locative and temporalis in combination with definite plural marking
(see more detail in 4.2.1 and 4.2.3.).
The Erzya grammar tradition posits %N% as a plural marker in the possessive declension, a fact that is more readily attested in some dialects than in others (cf. Gabelentz
1839:253–254; Paasonen 1953: 04-05; Bubrix 1930: 27, 29; Feoktistov 1963: 100–
103; Nadʹkin 1968: 58–59, 60; also Korhonen 1986: 147; Bartens 1999: 102–103). The
modern literary language only has two persons where grammatical number can be distinguished: the 1SG and the 3SG, but this distinction is not unproblematic. The 3SG marker
has two forms, of which the nominative singular is distinctive, with no %N%, while all
other case attestations of it are %OnzO, which is also the form used with the nominative
plural. Thus it is the nominative singular form of the possessum, the one without the
%N%, that is marked, and not the other way around. In the 1SG an analogical situation can
be observed, namely, only the nominative singular cell cannot contain the %N% element,
i.e. the nominative singular possessum is always marked %Om. Hence, when the dialect
of a given writer differentiates between singular and plural possessa with 1SG possessor
indexing, i.e. %Om POSS-1SG>NOM.SG is in opposition with %ON of the POSS-1SG>NOM.PL,
then the marker used in the NOM.PL reading is always the same as that used in the oblique
cases. Despite the various prescriptive grammars advocating a distinction for number

<pgNo>106</pgNo>
106

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

in the marking of possessa with 1SG possessor indexing, most recently EKM (2000: 55),
there are numerous publications where %Om marking is used throughout the first person
singular paradigm of the possessive declension regardless of grammatical number of
the possessum. Hence, only the NOM.SG reading of the 3SG possessor index in %OzO is
unambiguous in its marking for grammatical number. (For treatment of the possessive
declension, see section 4.3.2.1.)
In the Dative-case form of the possessive indices no distinction is necessarily
made for number of possessor. Although, native speakers might generally maintain that
the morpheme %Onsteń should be glossed as POSS-3SG>DAT, there is evidence in the majority corpus that the gloss might be generalized to POSS-3.DAT, refer back to examples
(3–5) in subsection (4.2.1.1.) CORE CX, DATIVE.
The lexical expression of grammatical number is limited to the plural personal
and definite pronouns, e.g. miń ‘we’, ti͔ń ‘you (PL)’, si͔ń ‘they’, ńe ‘these, those’ and
nona% ‘the others’. The personal pronouns with first and second person plural readings
are generally used for singular speakers and addressees when they are acting on behalf
of one or more explicitly identifiable referents (see also ASSOCIATIVE ELDER NOUNS and ASSOCIATIVE COLLECTIVE QUANTIFIERS in section (4.3.)).
It will also be noted that the plural morpheme %T familiar from the indefinite and
definite declensions appears in the 3PL of both the verbal and nominal conjugations and
the readings adnominal versus verbal plural are difficult to distinguish, see examples.
(27)

sońenze
uĺńe+ś
jalat́eke,
he_PRON-PERS-3SG.DAT.POSS-3SG be_V.IND.PRETI.PRED-3SG indifferent_A,
kona
čuvto%ńt́
al+o
jutavt+om+s
which_PRON-REL.ABS tree_N+GEN.DEF.SG under_POP.LOC spend_V+INF+ILL
ve+ńt́ –
veśe
čuvt+t+ne
night_N+GEN.DEF.SG – all_Q.ABS tree_N+PL+DEF.PL
vejket́ste.
rodńa+t+oĺt ́
kinsman_N+PL+IND.PRETII.PRED-3PL equally_ADV.ELA
(Bryzhinski M.: Kirdazht) ‘He [Kechai] could care less, what tree he spent the night
under; all the trees were equally kinsmen [to him].’

Possessor-index strategies involving singular versus plural marking can be associated
with the explicit discourse roles, on the one hand, and semantic group-membership
alignment, on the other. Hence associative collective numerals appear with singular
adnominal person marking, e.g. kolmo+ńe+nze three_NUM+ASSOC-COLL+POSS-3SG ‘the
three of them (lit. the three of him/her)’, which makes reference to a definite third person
and two previously unknown referents associated with that person. In an analogous
manner, two siblings, when speaking amongst themselves – each speaking in the first
person singular – will regularly make reference to otherwise mutual fathers, mothers,
brothers, etc. by means of 1SG possessor indexing. Semantic group-membership
alignment comes into play when dealing with kin terms; while dictionaries of the Erzya
language might attest to single lexical items, such as balduz ‘wife's sister’ and baĺźa

<pgNo>107</pgNo>
MORPHOLOGY

107

‘wife's brother’, these are not used by all speakers, nor are they generalized to indicate
other referent types. Thus the referents for ‘brother's wife’ and ‘sister's husband’ are
not necessarily indicated by use of separate lexical items, instead a possessor-index
variation between singular and plural number of the possessor is sufficient to distinguish
between ‘daughter-in-law, son's wife’ and ‘son-in-law, daughter's husband’. Hence,
while sodamo+m son-in-law_N+POSS-1SG ‘my son-in-law’ is what a parent would use to
indicate the husband of his or her daughter, a sibling would use the term sodamo+nok
son-in-law_N+POSS-1PL ‘my brother-in-law (lit. our son-in-law)’ to indicate that very
same male referent. In contrast, it should be noted that this household-reference strategy
used in target-possessum marking of same-generation and younger-generation human
referents, has different pragmatic usages when the target-possessum referent is of an
older generation. Hence, while the 1SG possessor indexing of the human referent t́et́a
‘father’ in t́et́am ‘my father’ can only be understood as referring to the father of the
singular speaker/controller, regardless of the listener (sibling, mother, stranger alike), the
1PL possessor index might be utilized by the mother to indicate the father of the household
or the speaker(s) imparting information with regard to the plural-value entity/controller.
Naturally, this latter plural-value entity/controller interpretation, or proprietorship as it
were, is also utilized in addresses made on behalf of a congregation.

Interim summary of number
The grammatical category of number can be described at both a morphological and a
lexical level.
At the morphological level, the parameter involved is a dichotomy: (i) case division nominative versus oblique, and (ii) the selection of declension types: indefinite,
definite and possessive. In the nominative case, number is explicitly indicated in both
the indefinite and definite declensions, whereas the possessive declension, already burdened by expression of the grammatical number and person of the possessor, only exhibits minimal indication of number for the target possessum. The 3SG possessor index
of the nominative singular deviates in morphophonemic structure from the correlating
morpheme, compatible with the nominative plural and oblique cases, while the 1SG possessor index, prescribed in modern grammars for use with oblique cases (not dative) and
the nominative and genitive plural in %N, can never be used for marking the nominative
singular target. Other persons of the possessive declension make no distinction between
the dichotomies (case) nominative versus genitive and (number) singular versus plural
on the target of possessor-index marking. In the oblique cases, the indefinite declension
makes no distinction for the grammatical category of number. Hence, only the definite
declension regularly distinguishes for number in the oblique case. The dative-case of the
3SG possessive declension cell has been observed to exhibit indifference to number in the
arguments of the possessive relation, i.e. the %Onsteń form is, in fact, third person form
used for expression of the dative case functions attributed to it, but without a distinction
for grammatical number, be it that of the possessor or the possessum.

<pgNo>108</pgNo>
108

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

At the lexical level, the six personal pronouns are represented by two rhyming sets
of three pronouns. The distinction for number is indicated by an otherwise irregular dichotomy o versus i/i͔, such that, mon, ton and son indicate first, second and third persons
singular respectively, and miń, ti͔ń, si͔ń first, second and third persons plural.
There is evidence of possible extended exponence in the concatenation of a declension segment with plural marking and a subsequent conjugational segment. This
phenomenon, however, shows variation from author to author and context to context,
such that, it is still a topic of discussion among professional users of the language.
Finally, it is maintained that the grammatical number of the possessor/controller
may be utilized to distinguish between generations in household contexts, proprietorship, and mutual plural versus singulative possessor/controller reference.

#### 4.2.3. Deictic markers
In this treatment of the Erzya language the possessive and definite declensions will be
grouped under the hyponym deictic markers. The term “deictic markers” is a cover
term for the inﬂectional morphemes contrasted with the ZERO of the indefinite declension. Thus the possessive declension comprises manifestations of personal deixis, which
might be definite, indefinite or adjectival, and the demonstrative deixis, which might be
definite, demonstrative, topicalizing or generic. The possessive declension, due to certain
morphologically and semantically motivated variation, has been assessed separately for
(a) nominative, (b) genitive, (c) dative and (d) other cases above in subsection (4.2.1.)
CASE as have the definite singular and plural declensions, which have no ambiguity for
case differences, or the grammatical category of number. Therefore this subsection will
concentrate on the usage of adnominal-person indexing versus definite marking.
As has become apparent in Erzya case morphology, above, there are three declension types – the indefinite, the definite and the possessive. While the indefinite
declension might readily be associated with indefinite referents and intrinsically definite
referents, e.g. qualified nouns, proper nouns and pronouns, the definite and possessive
declensions lend themselves to the marking of other definite referents. Definite declension marking, when used with intrinsically definite referents, is seen to imply notions
of demonstrative usage or topicality; with common-noun referents, however, this declension generally indicates definiteness or generic topicality. Possessive declension
marking, or possessor indexing generally indicates association with anchored discourse
referents, hence it allows for notions of inferentiality and can be applied to referents both
definite and indefinite. Notions associated with individual person and number combinations will be dealt with in the appropriate subsections.

<pgNo>109</pgNo>
MORPHOLOGY

109

##### 4.2.3.1. Possessor-index markers
Adnominal cross-referential person marking
The possessor-index markers, or the cross-referential adnominal-person markers of the
possessive declension, are attested in a large range of the parts of speech with varied
functions. For this reason I have occasionally used the longer term ADNOMINAL-TYPE
to insure the interpretation of an extension beyond the part of speech most commonly
known as nouns. Adnominal-type cross-referential person marking can be broken into
2 varieties of manifestation in a given clausal constituent, it can be marked with: (i) an
affixal or possessive declension, and (ii) a lexical or genitive-form personal pronoun, or
a combination of the two. While affixal marking of adnominal person, as demonstrated
in the tables below, appears to have a relatively even distribution across case and
declension, lexical marking seems to prefer a nearly complementary-distribution strategy
in the declension forms of the possessa. The expression of core cases shows an affinity
with the deictic declensions while the local cases are frequently associated with the
indefinite declension. (The notation NA, below, has two readings: “not applicable” and
“not attested”. The reader will note that the “not applicable” reading is associated with
the cells rendered incompatible through discrepancies in number values for the definite
declension.)
Table 4.26

NOM.SG
NOM.PL
GEN.SG
GEN.PL
DAT
ABL
INE
ELA
ILL
LAT
PROL

Cases attested with 1SG adnominal marking with the word kudo ‘house; home’
Possessive
Genitive-form personal pronoun indicates adnominal person
Decl
Indef Decl
Possessive Decl Definite SG
Definite PL
kudo+m
NA
moń kudo+m
moń kudo+ś
NA
kudo+n
NA
moń kudo+n
NA
moń kudo+t́+ńe
kudo+m
NA
moń kudo+m
moń kudo+ńt́
NA
kudo+n
NA
moń kudo+n
NA
NA
NA
NA
NA
moń kudo+ńt́eń NA
kudo+do+n
NA
NA
NA
NA
kudo+so+n
moń kudo+so
NA
NA
NA
kudo+sto+n moń kudosto
NA
NA
NA
kudo+z+on
moń kudo+s
NA
NA
NA
NA
moń kudo+v
NA
NA
NA
kudo+va+m NA
NA
NA
NA

Table (4.26) provides us with what might be considered further along as skewed. No
evidence is given NP complexity, nor, would it seem, is there paradigmatic representation
of the forms most commonly exhibited for the Erzya word kudo ‘house; home’ and the
thirteen cases attested with at least some targets of the possessive declension. I therefore
provide a second set of tables (4.27–28) to illustrate the paradigm of the 3SG possessa
as well. The contents of (4.27–28) differ from those of (4.26) in that there are definite

<pgNo>110</pgNo>
110

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

declension forms of the inessive and elative cases. This might help us to perceive
definite marking as compatible with more of the cases. The presence of genitive-form
3SG personal pronoun sonze is attested at 17,887 hits, and its sibling the genitive-form
1SG personal pronoun moń is attested at 12,196 hits, which indicates the number of
unique contexts might be higher. The absence of indefinite declension compatibility in
the core-case cells of both the first and third persons singular would seem to imply that
core-case constituents modified with adnominal person take obligatory deictic marking.
Hence the absence of obligatory adnominal-person affixes in non-finites would speak on
behalf of a non-core-case interpretation of the non-finite locative in %Om+O. (For more
discussion on the non-finites, see section 4.3.5.)
Table 4.27

NOM.SG
NOM.PL
GEN.SG
GEN.PL
DAT
ABL
INE
ELA

Cases attested with 3SG adnominal marking with the word kudo ‘house; home’
Possessive
Genitive-form personal pronoun indicates adnominal person
Decl
Indef Decl
Possessive Decl Definite SG
Definite PL
kudo+zo
NA
sonze kudo+zo
sonze kudo+ś
NA
kudo+nzo
NA
sonze kudo+nzo NA
sonze
kudo+t́+ńe
kudo+nzo
kudo+nzo
NA

kudo+do+nzo
kudo+so+nzo
kudo+sto+nzo

ILL

kudo+z+onzo

LAT

NA

PROL

kudo+va+nzo

NA
NA

sonze kudo+nzo
sonze kudo+nzo

sonze kudo+ńt́

NA

NA

NA

NA

NA

sonze kudo+ńt́eń

NA

NA

NA

sonze kudo+so
sonze kudo+sto

sonze kudo+s
sonze kudo+v
NA

NA
NA

NA

sonze kudo+so+ńt́
sonze
kudo+sto+ńt́

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA
NA

NA

The word kudo ‘house; home’, which has its most prominent form in kudov ‘home
(lative)’ appearing 5475 times in the Erzya majority corpus, might most readily be
associated with the notions of single-member sets and spatial settings. In contrast, the
word śeĺme ‘eye’, with its most prominent form śeĺmenze ‘his/her/its eye(s) (core but
not NOM.SG)’ appearing 2946 times, is inherently plural and, what's more, a body part,
which might increase the probability of double marking for adnominal person, a strategy
for contrastive marking. (See more details in section 4.3.2. NOUNS and ADPOSITIONS.)

<pgNo>111</pgNo>
111

MORPHOLOGY
Table 4.28

Cases attested with 3SG adnominal marking with the word śeĺme ‘eye’

Possessive
Decl

Genitive-form personal pronoun indicates adnominal person
Definite PL
Indef Decl
Possessive
Definite SG
Decl

NOM.SG

śeĺme+ze

NA

NOM.PL

śeĺme+nze

NA

GEN.SG

śeĺme+nze

NA

GEN.PL

śeĺme+nze

NA

DAT

NA

NA

NA

ABL

śeĺme+d́e+nze

NA

NA

NA

INE

śeĺm+se+nze

sonze śeĺm+se
sonze śeĺm+ste

sonze
śeĺm+se+ńt́

ELA

śeĺm+ste+nze

sonze
śeĺm+se+nze

ILL

śeĺme+z+enze

sonze śeĺm+s

LAT

NA

PROL

NA

TRNSL

NA

NA

sonze śeĺme+va
sonze śeĺme+ks

sonze
śeĺme+ze

sonze
śeĺme+nze
sonze
śeĺme+nze
sonze
śeĺme+nze

sonze
śeĺm+ste+nze

sonze
śeĺme+z+enze

sonze śeĺme+ś

NA

NA

sonze śeĺm+t́+ńe

sonze śeĺme+ńt́

NA

NA

sonze
śeĺme+ńt́eń

sonze
śeĺm+ste+ńt́
NA

sonze
śeĺm+t́+ńe+ń

sonze
śeĺm+t́+ńe+ńeń

sonze
śeĺm+t́+ńe+d́e
sonze
śeĺm+t́+ńe+se

sonze
śeĺm+t́+ńe+ste
sonze
śeĺm+t́+ńe+s

NA

NA

NA

NA

NA

NA

NA

NA

NA

On the basis of tables (4.26–28) and the morphological information afforded in section
4.2.1. CX, above, we can draw preliminary conclusions about the nature of affixal and
lexical adnominal-person marking. Expression of adnominal person can be indicated by
the following means:
Affixal means (possessive declension)
Lexical means (genitive form personal pronouns)
A combination of the two

Affixal indication of adnominal person is subject to morphological and semantic/
discourse incompatibility observed in case endings with consonants in the coda, on the
one hand, and the notions of indefinite/generic, on the other.
Morphological limitations: (lative)
Semantic limitations: (translative, temporalis)

<pgNo>112</pgNo>
112

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Lexical indication of adnominal person implies a three-way split in declension
compatibility whereby certain cases show affinities for specific declension types:
Nominative and genitive: (possessive and definite declension)
Dative: (definite declension)
Remaining cases:
Indefinite declension {all};
Possessive declension {all but: lative, temporalis};
Definite declension singular {all but: illative, lative, locative, temporalis, comitative},
and
Definite declension plural {all but: locative, temporalis}

These preliminaries do not, however, answer the question of low attestation for the dative
case, nor do they answer those of mutual compatibility of lexical and affixal marking
strategies, matters dealt with more rigorously in sections 4.3. ADNOMINAL PERSON IN PARTS
OF SPEECH, and 4.4. PARADIGM DEFECTIVITY IN ERZYA POSSESSOR INDEXING. Let it suffice here,
that we illustrate the forms and basic uses of the adnominal-person affixes in the order
of person 1–3.

###### 4.2.3.1.1. First person
In the first translation of the Gospel and subsequently the first grammar of the Erzya
language there is evidence for at least a partial distinction for number in the possessor/
controller and target-possessum. In the modern literary language, however, only the
distinction for number of the possessor/controller is disambiguously maintained. While
the distinction for number of the target-possessum of a plural possessor/controller has
never been a predominant feature of literary texts, even when that target is a nominative
singular, the same distinction for number in the target-possessum is still forwarded
by modern prescriptive grammars despite the fact that there appears to be a dearth of
consistency in modern publications.

First person singular
The first person singular distinguishes for number in the nominative singular targetpossessum, such that, only the %Om form can be used for marking it. This distinction
for number in the possessum is minimal; most publications are inconsistent in usage
due to dialect-background discrepancies between writers, subsequent proof-readers and
editors. The maximal indexing associated with the core-case 1SG possessor include %Om,
%ON in the nominative and genitive, as well as the marginal %Oń of the genitive for some
kin terms, with %ONeń of the dative with those same kin terms. The remainder of the
cases are marked with either %Om or %ON, the latter of which, a prescriptive form, is
forwarded in most modern grammars (see table 4.29).

<pgNo>113</pgNo>
113

MORPHOLOGY
Table 4.29

Possessor indexing for a 1SG parse
NON-KIN

KIN

NOM

GEN

DAT

NA

NA

NA

NA

NA

NA

‘cow’

skal+om

skal+on ~
skal+om

‘hand;
arm’

ked́+em

‘house;
home;
room;
container’

kudo+m

ked́+eń
~
ked́+em

‘father’

t́et́a+m

t́et́a+n

‘elder sister; aunt’

pat́a+m

pat́a+n ~
pat́a+m

‘daughter;
girl’

t́ejt́eŕ
+em

‘son; boy;
man’

ćora+m

‘mother’

ava+m

‘woman’

ava+m

kudo+n ~
kudo+m

GEN

skal+om
~
skal+on
ked́+em

kudo+m

skal+on
~
skal+om
ked́+eń
~
ked́+em

kudo+n
~
kudo+m

NA

NA

t́et́a+ń

t́et́a+ńeń

NA

NA

pat́a+ń

pat́a
+ńeń

t́ejt́eŕ+eń
~
t́ejt́eŕ+em

t́ejt́eŕ
+em

t́ejt́eŕ
+eń ~
t́ejt́eŕ
+em

t́ejt́eŕ
+eń

t́ejt́eŕ
+ńeń

ćora+n ~
ćora+m

ćora+m

ćora+n ~
ćora+m

?ćora+ń

ćora
+ńeń

NA

NA

ava+m

ava+n ~
ava+m

ava+n ~
ava+m
ava+n ~
ava+m

ava+ń
NA

ava+ńeń

NA

ABL

skal+do+n ~
skal+do+m
ked́+d́e+ń
~
ked́+d́e+m

kudo+do+n
~
kudo+do+m
t́et́a+do+n
~t́et́a+do+m
pat́a+do+n
~
pat́a+do+m

t́ejt́eŕ+d́e+ń
~
t́ejt́eŕ
+d́e+m

ćora+do+n ~
ćora+do+m
ava+do+n ~
ava+do+m
ava+do+n ~
ava+do+m

The 1SG parse exhibits the greatest diversity of all adnominal-person paradigms. It
involves the categories of number and case, as well as the distinction of a specific noun
subclass. Here number of the possessa might be distinguished in the nominative and
genitive cases, and in an extreme description of the grammar all but the dative case
differentiates number of the 1SG possessum/possessa (cf. Грамматика мордовского
языка 1962: 94). A specifically singular, singulative form, might be attested in the
nominative, where, regardless of dialect, only the POSS-1SG>NOM.SG affix %Om is attested.
Elsewhere (other cases and number), there is dialect variation between the use of the
affixes %ON versus %Om. Some dialects consistently mark all possessa with the %Om affix
regardless of number or case of the possessum concerned, and hence there are writers
who make no distinction at all for number in the possessa (especially speakers of the Sura
and Insar dialects). Other dialects (especially the Alatyr' dialects) differentiate number
in the nominative and genitive where the %Om specifically indicates singular while %ON
is retained for default, i.e. nominative and genitive plural as well as other cases. A third

<pgNo>114</pgNo>
114

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

strategy involves the marking of singular possessa with %Om in all but the dative case
and using %ON to mark plural possessa (a subdialect of the Alatyr' type, cf. GMYa 1962 I:
94; Bartens 1999: 104–105). The dative and genitive cases can be distinguished from all
the others in that they introduce the use of affixes homonymous to those of the indefinite
declension, such that certain kin terms are compatible with indefinite-identical genitive
and dative forms. Thus, in the genitive, a diversity is attested involving ambiguous
nominative-genitive forms, on the one hand, and indefinite-identical genitive marking,
on the other. In the dative, however, the only referents that might be attested for 1SG
marking are purportedly kin terms. (For more specifics and an in-depth discussion see
sections (4.3.2.) NOUNS, and (4.4.) PARADIGM DEFECTIVITY IN ERZYA POSSESSOR INDEXING.)

First person plural
The 1PL possessor index is %ONOk in the nominative and genitive; no special genitive or
dative forms are attested. Hence there is syncretism in the possessor-index marking of the
nominative and genitive cases. Elsewhere in the possessive declension the adnominalperson affix is consistent with that in the nominative/genitive forms (see table 4.30).
Table 4.30

Possessor indexing for a 1PL parse

skal ‘cow’
ked́ ‘hand; arm’
kudo ‘house; home;
room; container’
t́et́a ‘father’
pat́a ‘elder sister; aunt’
t́ejt́eŕ ‘daughter; girl’
ava ‘mother; woman’

NOM

GEN

ABL

INE

t́et́a+nok
pat́a+nok
t́ejt́eŕ+eńek
ava+nok

t́et́a+nok
pat́a+nok
t́ejt́eŕ+eńek
ava+nok

t́et́a+do+nok
pat́a+do+nok
t́ejt́eŕ+d́e+ńek
ava+do+nok

t́et́a+so+nok
pat́a+so+nok
t́ejt́eŕ+se+ńek
ava+so+nok

skal+onok
ked́+eńek
kudo+nok

skal+onok
ked́+eńek
kudo+nok

skal+do+nok
ked́+t́e+ńek
kudo+do+nok

skal+so+nok
ked́+se+ńek
kudo+so+nok

The 1PL parse of the literary standard consists of the simple %ONOk affix, regardless of
number, case or semantic notions entailed in the target-possessum. The %OmOk markers of the singular target-possessum, nominative, first attested by Gabelentz (1839: 253)
are no longer of consequence in the standard language, although they are characteristic
of the Kozlovka dialect, which in the mid 1920s had been forwarded as the basis of the
literary norm (see contradictory information: contra Evsevʹev 1963 [1929]: 109; pro
Bubrix 1930: 27. Personal information from 2004 indicates that Bubrix was probably
right; in present day Kozlovka, Atyashevo, a %OmOk marker strategy is attestable for
nominative possessa kudo+mok house_N+POSS-1PL>NOM.SG ‘our one house’). The dative
slot of the 1PL morphological paradigm is empty, but the functions generally attributed to
the dative might be realized through lexical expression of adnominal person in combination with the definite dative, or ambiguous nominative/genitive morphological marking
of the target-possessum in combination with the postposition turtov ‘for’.

<pgNo>115</pgNo>
MORPHOLOGY

115

Special usage
In addition to the indication of prominent discourse anchor/controller, the 1SG and 1PL
markers are frequently used to enhance feelings of intimacy, manifest forms of address.
Hence the vocative function of what most generally would be construed as nominative
forms are attested with possessor indexing (cf. Wiedemann 1865: 45; Tixonova 1980:
186; Ermuškin 2004: 81). Although Tixonova wrote of use with kin terms, her own
examples indicate no such limitations, see (28). Empathy is simultaneously indicated by
the presence of a diminutive morpheme, as well.
(28) a. ton,
nud́ejne+m,
śed́a+k
you_PRON-PERS-2SG.NOM little-reed_N+POSS-1SG>NOM.SG, play_V+IMP.PRED-2SG
veśela+sto
śe+d́e
merry_A+ADV-MANNER that_PRON-DEF+ABL
(Tixonova 1980: 186: [Gaini, P.]) ‘You, my little reed whistle, sing / more merrily!’
b. ćori͔ńge+m
t́e+j
sa+k
son_N-DIM+POSS-1SG this_ADV-SPAT+LAT come_V+IMP.PRED-2SG
(Ermuškin 2004: 81) ‘come here, my son’

Ambiguity
Ambiguity is attested with the adnominal-type cross-referential person marker %ONOk in
front-vowel contexts, see ambiguities found in Danilov's treatise of the Erzya comitative
(1969).
(29)

vejke+ńek
%vejke+ńek
eź+ińek
one_NUM+POSS-1PL -one_NUM+POSS-1PL not_V-NEG-PRETI+IND.PRETI.PRED-1PL
soda
know_V.CONNEG
(Danilov 1969: 172) ‘we did not know one another’

(30)

vejke+ńek
tu+i
viŕ+ev,
one_NUM+POSS-1PL depart_V+IND.PRES.PRED-3SG forest_N+LAT,
omboće+ńek
pakśa+v,
a
ejkakš+t́+ńe
second_NUM-ORD+POSS-1PL field_N+LAT, but_CONJ child_N+PL+DEF.PL.NOM
čavo
kudo+so
śkamo+st
empty_A.ABS house_N+INE alone_PRON-PERS-Q+POSS-3PL
(Danilov 1969: 172) ‘one of us will go to the woods, the other of us [will go] to the
field, but the children [will be] in the empty house alone.’

<pgNo>116</pgNo>

###### 4.2.3.1.2. Second person
In the second person a distinction is made for number in the possessor/controller of
the possessive construction. Thus the partial distinction for number in the nominativecase target-possessum apparent in the first and second persons of the literary language
only has relevance in the Alatyr' dialect type (Nadʹkin 1968; Feoktistow 1990: XXXVIXXXVIII; Ermuškin 2004).

Second person singular
Although some treatises of the Erzya language make reference to an %n% constituent
preceding the final %T of the singular possessor/controller index slots of the paradigm
other than the nominative singular, this is not a characteristic of the modern literary
language (cf. Paasonen 1953). The %ONT allomorph of the literary %OT marker is
characteristic of the Alatyr' dialect type, and there it is manifest in all but the nominative
singular slot of the 2SG possessive paradigm, where the n%less form %OT is used. In
addition to the %OT form used in all slots of the paradigm for 2SG possessor/controller
indexing, special %Ot́ genitive and %Ot́en dative forms are forwarded in most modern
grammars for use with kin terms (see table 4.31). (For a more in-depth treatment of kin
terms, see also section 4.4. PARADIGM DEFECTIVITY IN ERZYA POSSESSOR INDEXING.)
Table 4.31

Possessor indexing for a 1SG parse
NON-KIN
KIN
NOM

GEN

DAT

NA

NA

NA

NA

NA

NA

t́et́a+t́ ~
t́et́a+t

‘cow’
‘hand; arm’
‘house; home;
room; container’

skal+ot
ked́+et́
kudo+t

‘father’

t́et́a+t

NA

‘elder sister;
aunt’

pat́a+t

NA

pat́a+t́

‘daughter; girl’

t́ejt́eŕ
+et́

t́ejt́eŕ
+et́

t́ejt́eŕ
+et́

‘son’
‘boy; man’
‘mother’
‘woman’

ćora+t
ćora+t
ava+t
ava+t

skal+ot
ked́+et́
kudo+t

GEN

NA

ćora+t
na
ava+t

ćora+t́

ABL

INE

t́et́a+t́eń ~
t́et́a+t́et́ ~
t́et́a+t́e

t́et́a+do+t

t́et́a+so+t

pat́a+t́eń ~
pat́a+t́e

pat́a+do+t

pat́a+so+t

t́ejt́eŕ+et́eń ~
t́ejt́eŕ+et́et́

t́ejt́eŕ+d́e+t́

t́ejt́eŕ+se+t́

ćora+t́eń

ćora+do+t
ćora+do+t
ava+do+t
ava+do+t

ćora+so+t
ćora+so+t
ava+so+t
ava+so+t

NA

NA

NA

NA

ava+t́

ava+t́eń

skal+do+t
ked́+d́e+t́
kudo+do+t

skal+so+t
ked́+se+ t́
kudo+so+t

<pgNo>117</pgNo>
117

MORPHOLOGY

The dative slot of the 2SG possessive paradigm attests to at least a three-way variation
in today's Erzya literature. While written literature bears witness to the variants %Ot́eń,
%Ot́et́ and %Ot́e, there are now new Erzya-language media existing on the world-wide
web, and with them has come an Erzya version of Skype, which attests to an interesting
2SG dative form in %Onste+t́, see (31). This form, it would appear, is analogically based
on the third person dative form in %Onsteń, %Onste+nze, and %Onste+st, see below.
(31)

jovĺe+k
Skype+d́e+ńt́
jalga+nstet́
tell_V.IMP.PRED-2SG Skype_PRP+ABL+DEF.SG friend_N+POSS-2SG>DAT
<http://wap.erzianj.borda.ru/?1-18-40-00000022-000-0-0>
‘Tell a friend of yours about Skype’

Second person plural
The possessor/controller index found in the 2PL possessive paradigm is simply %Oŋk, see
table (4.32). There are no special genitive forms attested for kin terms, nor do any of the
grammars make mention of dative forms. Instead, all genitive and nominative functions
are attributed to the ambiguous %Oŋk form, and dative functions are dealt with in the
same fashion as in the first person plural (above), and the third person plural (below), i.e.
definite dative or turtov ‘for’ adposition strategies.
Table 4.32

Possessor indexing for a 2PL parse
NOM

ABL

INE

‘cow’
‘hand; arm’
‘house; home; room;
container’

skal+oŋk
ked́+eŋk
kudo+ŋk

GEN

‘father’
‘elder sister; aunt’
‘daughter; girl’
‘mother; woman’

t́et́a+ŋk
pat́a+ŋk
t́ejt́eŕ+eŋk
ava+ŋk

t́et́a+ŋk
pat́a+ŋk
t́ejt́eŕ+eŋk
ava+ŋk

t́et́a+do+ŋk
pat́a+do+ŋk
t́ejt́eŕ+d́e+ŋk
ava+do+ŋk

t́et́a+so+ŋk
pat́a+so+ŋk
t́ejt́eŕ+se+ŋk
ava+so+ŋk

skal+oŋk
ked́+eŋk
kudo+ŋk

skal+do+ŋk
ked́+t́e+ŋk
kudo+do+ŋk

skal+so+ŋk
ked́+se+ŋk
kudo+so+ŋk

Although the prescriptive grammars and most literature provide no indication of dative
forms for the 2PL possessive paradigm, it must be assumed that the spoken language
does provide strong analogies for its formulation. Thus the morpheme %Onste+ŋk -POSS3.DAT+POSS-2PL employed by Vasili Dëmin in a recent translation (2008) might come
as no surprise to us when used with kin terms. The question whether this is an actual
spoken form is, perhaps, not as relevant as whether it can be readily understood by the
readership. Hence the underlying morpheme %Onste with the reading -POSS-3SG>DAT has
been reinterpreted to a possessive-declension dative affix, which can regularly be inﬂect
for person, and in this context the 2PL possessor-index. (See the dative in 4.2.1.1. CORE
CASES, above.)

<pgNo>118</pgNo>
118

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Special usage
In addition to possessor/controller indexing strategies associated with the second person singular and plural, the second person singular can be used in Erzya to indicate an
entity whose identity is extractible from shared knowledge of a more general situation
(N. Agafonova, p.c., n.d.). Along this same vein we will observe the use of 2SG in generalizations, for example (32).
(32)

lomań+eń
paro
laŋg+s
kurgo+t
person_N+GEN property_N.ABS on_POP+ILL mouth_N+POSS-2SG
iĺa+k
avt́ńe.
no_V-PROH+2SG>3SG open_V+CONNEG
(Tixonova 1980: 186) ‘Don't covet another's property. (lit. don't open your mouth for
other's property.)’

###### 4.2.3.1.3. Third person
In the third person a distinction is made for number in the possessor/controller of the
possessive construction. Although there is evidence of a distinction in the category of
number for the nominative-case target-possessum for both singular and plural possessor/
controller indices in the Alatyr' dialect type, only the 3SG possessor/controller index
maintains this difference in the literary language (cf. Paasonen 1953; Nadʹkin 1968;
Feoktistow 1990: XXXVI-XXXVIII; Aduškina 2000; Ermuškin 2004).

Third person singular
The third person singular distinguishes for number in the nominative singular targetpossessum, such that only the %OzO form can be used for marking it. The nominative
plural target-possessum marked, on the contrary, is %OnzO in the modern literary language,
and therefore identical in form to that of the genitive case, regardless of grammatical
number. Thus the distinction for number of the possessum is morphologically limited
to the explicitly singulative nominative form %OzO, whereas only syntactic context can
disambiguate the case and number values of the %OnzO morpheme, which is used to index
the 3SG possessor/controller in all other cases except the dative. In the dative case the
literary standard prescribes the morpheme %Onsteń but in actual publication this form is
paralleled with colloquial forms in %OnstO and %Onstenze. The latter of these colloquial
forms is specifically 3SG and as such it is possible to discover that the %Onsteń form of
the literary standard is, in fact, a third-person marker with no transparent indication of
number for either the possessor/controller or the target-possessum. Unlike the 1SG and
2SG, the 3SG of the literary language appears to have no limitations with regard to noun
subclass and the usage of genitive of dative case forms, see table (4.33), and also section
(4.4.) PARADIGM DEFECTIVITY IN ERZYA POSSESSOR INDEXING.

<pgNo>119</pgNo>
119

MORPHOLOGY
Table 4.33

Possessor indexing for a 3SG parse
NOM

‘cow’
‘hand; arm’
‘village’
‘father’
‘elder sister; aunt’
‘daughter; girl’
‘son; boy; man’
‘mother; woman’

SG

PL

ćora+zo
ava+zo

ćora+nzo
ava+nzo

skal+ozo
piĺge+ze
veĺe+ze
t́et́a+zo
pat́a+zo
t́ejt́eŕ
+eze

skal+onzo
piĺge+nze
veĺe+nze
t́et́a+nzo
pat́a+nzo
t́ejt́eŕ
+enze

GEN

DAT

ABL

skal+onzo
piĺge+nze
veĺe+nze
t́et́a+nzo
pat́a+nzo
t́ejt́eŕ
+enze

skal+onsteń
piĺge+nsteń
veĺe+nsteń
t́et́a+nsteń
pat́a +nsteń
t́ejt́eŕ
+ensteń

skal+do+nzo
piĺge+d́e+nze
veĺe+d́e+nze
t́et́a+do+nzo
pat́a+do+nzo
t́ejt́eŕ+d́e +nze

ćora+nzo
ava+nzo

ćora+ nsteń
ava+ nsteń

ćora+do+nzo
ava+do+nzo

Infrequent literary variants of the 3SG dative as indicated in section (4.2.1.1.) CORE CASES,
above, lead us to the realization that the dative morpheme %Onsteń is, in fact, a third
person dative marker, whereas it can be used in indexing strategies for both singular and
plural possessor/controller marking.

Third person plural
The possessor/controller index found in the 3PL possessive paradigm is simply %Ost,
see table (4.34). As in the 3SG there are no special genitive or dative forms attested
for kin terms, in fact, no modern grammars make mention of a dative form. Instead,
all genitive and nominative functions are attributed to the ambiguous %Ost form, and
dative functions are dealt with in the same fashion as in the first and second person
plural above, i.e. definite dative or turtov ‘for’ adposition strategies, as well as the affixal
means, ambiguous for the third person in general.
Table 4.34

Possessor indexing for a 3PL parse
NOM

‘cow’
‘foot; leg’
‘village’
‘father’
‘elder sister; aunt’
‘daughter; girl’
‘mother; woman’

skal+ost
ked́+est
veĺe+st
t́et́a+st
pat́a+st
t́ejt́eŕ+est
ava+st

GEN

skal+ost
ked́+est
veĺe+st
t́et́a+st
pat́a+st
t́ejt́eŕ+est
ava+st

ABL

skal+do+st
ked́+t́e+st
veĺe+d́e+st
t́et́a+do+st
pat́a+do+st
t́ejt́eŕ+d́e+st
ava+do+st

INE

skal+so+st
ked́+se+st
veĺe+se+st
t́et́a+so+st
pat́a+so+st
t́ejt́eŕ+se+st
ava+so+st

<pgNo>120</pgNo>
120

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Special usage
The possessor/controller indexing strategies readily associated with the third person singular and plural can be further augmented by notions of vocative function and contextual definiteness. The vocative function attributed to the third-person form parallels
the first person vocative in such a way that the addressee is not abruptly confronted by
“HEY YOU” moment of the %Kaj vocative, rather he or she is woven into the fabric of
the conversation as a rhematic component. For a concrete illustration of such a usage, I
can draw upon personal experience in which my wife was busy doing something in one
room while the baby and I were in the other. I was writing something when the baby
suddenly cried out and my wife, seizing the moment of deixis, addressed me as t́et́a+zo
father_N+POSS-3SG>NOM.SG (lit. ‘his/her/its father’), see (33).
(33)

t́et́a+zo,
meźe
t́ejev+ś?
father_N+POSS-3SG>NOM.SG, what_PRON-INTER.NOM.SG happen_V+IND.PRETI.PRED-3SG
‘Hey dad, what's happened?’

This usage of the third-person-singular marker %OzO in forms of address, as mentioned
by Markov (1961: 42–43) is considered by some to be non-standard (Markov, ibid.). In
discussions with modern speakers and professional writers of the language (L. Sedoikin,
p.c., 2002) this form of address is considered to be less abrupt, i.e. an alternate form of
address might involve the vocative %aj rendered in babaj ‘hey, granny!’ and pat́aj ‘hey,
big sister!’. Hence, should one encounter an elderly woman while walking down the lane
in an Erzyan village (Kabayevo, Erzya: Kobaĺe), the unabrupt form of address baba+zo
‘his/her grandmother’ involving the 3SG possessor index would indicate familiarity of
the speaker with a grandchild of the addressee and therefore impart a soft rhematic introduction ‘It's so and so's grandma’, see (34–35) from Markov, as well.
(34)

baba+zo,
[j]ort+sa
gandmother_N+POSS-3SG>NOM.SG, thow_V+IND.PRES.PRED-1SG>3SG
(cf. Markov 1961: 43) ‘Grandma, shall I throw it away?’

(35)

pat́a+zo,
[ź]ńardo
ram+at
elder-sister_N+POSS-3SG>NOM.SG, when_PRON-INTER buy_V+IND.PRES.PRED-2SG
t́e+nze
kańt́vetka+t
to_POP+POSS-3SG candy_N+PL.NOM
(cf. Markov 1961: 43) ‘Auntie, when are you going to buy him/her candy?’

The use in vocative function appears compatible with discourse deixis. Both (34) and
(35) apply the third person singular possessor index in a way that indicates the prominence of the possessor/controller. This prominence is perhaps parallel to the very same
deictic marking strategy found in the indication of book prices, for example, when the
price of a book is given in Erzya on the cover of the book, we find the word pit́ńe+ze

<pgNo>121</pgNo>
MORPHOLOGY

121

price_N+POSS-3SG>NOM.SG ‘its price’ followed subsequently by the price value, a parallel
of the cognate Hungarian ára XXX with the same gloss (personal information).
As we progress toward contextual definiteness, i.e. the definiteness construed by
some in reference to universally unique items or phenomena, we will encounter what
superficially would be treated as the definite function of the possessor index. In this
function the affix is attested with nouns indicating natural phenomena and divisions in
time, such as ‘the sun’, ‘time’, ‘the moon’, see (36–38).
(36)

či͔ +ze
mańej+ste
van+ś
sun_N+POSS-3SG>NOM.SG clear_A+ADV-MANNER look_V+IND.PRETI.PRED-3SG
meńeĺ+ste+ńt́
viŕ+eś
čat́moń+eź
sky_N+ELA+DEF.SG. forest_N+NOM.DEF.SG be-quiet_V+PTC-OZ
iĺt́a+ś
oboz+ońt́.
accompany_V+IND.PRETI.PRED-3SG convoy_N+GEN.DEF.SG.
(Tixonova 1980: 185, Èrkai, N. 1969: 20) ‘The sun looked brightly [down] from the
sky. The forest quietly saw the convoy along.’

(37)

ška+zo
pek
kurok+sto
time_N+POSS-3SG>NOM.SG very_ADV quick_A+ADV-MANNER
tu+ś
kiŕakst+om+o,
buto
tundo+ń
leave_V+IND.PRETI.PRED-3SG slide_V+INF+LOC, as-if_CONJ spring_N+GEN
ĺembe
di͔
valdo
či+ś
warm_A.ABS and_CONJ light_A.ABS sun_N+NOM.DEF.SG
sonze
panś…
it/he/she_PRON-PERS-3SG.POSS-3SG drive_V+IND.PRETI.PRED-3SG
(Tixonova 1980: 185: [Èrkai, N.]) ‘Time began to ﬂy quickly, just as though the warm
and bright spring spring sun were driving it.’

(38)

kov+ozo
salava
van+ś
moon_N+POSS-3SG>NOM.SG secretly_ADV-MANNER look_V+IND.PRETI.PRED-3SG
veĺe+ńt́
laŋg+s
village_N+GEN.DEF.SG at_POP+ILL
(Tixonova 1980: 185: [Èrkai, N.]) ‘The moon looked upon the village in secret.’

It will be noted that in all three instances (36–38) there are elements prominent to the
discourse that might be seen to supersede the universally unique elements. In (36) I have
accessed a larger context, not offered by Tixonova, which illustrates the contextually
definite referent meńeĺ+ste+ńt́ ‘from the sky’ in contrast with the subject of the following sentence viŕ+eś ‘the forest’. In this context the referent či͔+ze ‘the sun (lit. his/her/
its sun)’ appears to be given less discourse prominence, it is not set in contrast with the
other elements, i.e. the universal uniqueness of the referent či͔+ze ‘the sun’ requires that it
be lowered to a less conspicuous position to avoid topic interpretation. Similarly, ška+zo
‘time’ in (37) and kov+ozo ‘the moon’ in (38) might be construed as universally unique

<pgNo>122</pgNo>
122

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

elements that are presented with the unabrupt non-topicalizing form of the 3SG marker,
an anti-prominence marker, of sorts, in narrative writing.
Ermuškin (2004: 81) defines the definite use of the third-person-singular marker
as indicative of the state of an object at a given moment. Thus instead of reading a narrative, we are presented with circumstances in which speaker and listener, alike, are
simultaneously observing the same phenomenon, the prominent deictic circumstances
involved in the price printed on the a book cover, see (39–43).
(39)

či͔+ze
ĺiś+ś
sun/day_N+POSS-3SG>NOM.SG come-out_V+IND.PRETI.PRED-3SG
(Ermuškin 2004: 81) ‘the sun came out’

(40)

kov+zo
valdo
moon_N+POSS-3SG>NOM.SG light/bright_A.NOM.SG
(Ermuškin 2004: 81) ‘the moon is bright’

(41)

varma+zo
ĺembe
wind_N+POSS-3SG>NOM.SG warm_A.NOM.SG
(Ermuškin 2004: 81) ‘the wind is warm’

(42)

ška+zo
lamo
time_N+POSS-3SG>NOM.SG a-lot_Q.ABS
(Ermuškin 2004: 81) ‘it is late’

(43)

…a
či͔+ze
ej
čopot́+i…
but_CONJ sun/day_N+POSS-3SG>NOM.SG just_PRT grow-dark_V+IND.PRES.PRED-3SG
paz+oń
či͔+ze
čopot́+ś…
God_N+GEN sun/day_N+POSS-3SG>NOM.SG grow-dark_V+IND.PRETI.PRED-3SG
(Ermuškin 2004: 200 [Korino Shatkovski Raion, Nizhegorodski Oblast, Makarova
Anna Mikhailovna, 55 years old, September 1964]) ‘...but the day was just growing
dark… God's day had darkened…’

The second line of (43) indicates that the referent paz ‘God’ might actually be the possessor/controller of universally unique referents like či͔+ze ‘his/her sun’, an interpretation found in Erzya literature, as well (Evsevʹev 1931: 48, 55, 265; UPTMN 7.1: 149;
Shcheglov 1980: 64).

Summary of adnominal-person markers
The possessor indices are best illustrated in three sets, of which one deals with the
nominative singular possessum reading, the second the nominative plural reading and the
bulk of all cases, and the third limits itself entirely to the dative case. The merits of this
division can be seen in the illustrated distinctions varying between person and number
of the possessor in relation to number and case of the possessum, i.e. while number may

<pgNo>123</pgNo>
123

MORPHOLOGY

appear to condone a nominative/genitive syncretism for first person possessor based on a
mutual literary and dialect/non-standard background, this would not be the same reading
as arrived at in the second and third person possessors. Here the first two groups are
joined to better facilitate a visual attestation of divergencies.
Table 4.35

Possessive suffixes used in all cases except for the dative
Forms
Phonetic

POR

1SG

PUM

STAND

NOM /

+m, +om, +em

GEN.SG

N-STAND

+n, +on, +ń,
+eń

+m, +om,
+em

GEN.SG

+nok, +onok,
+ńek, +eńek,
+nek

+mok,
+omok,
+mek,
+emek

OTHER

+nok, +onok,
+ńek, +eńek,
+nek

OTHER

NOM /

1PL

NOM.SG

+t, +ot, +t́, +et́
+t, +ot, +t́, +et́

2SG
OTHER

+ŋk, +oŋk,
+eŋk

2PL
NOM.SG

3SG
OTHER

+zo, +ozo, +ze,
+eze

+nt,
+ont,
+ńt́,
+eńt́

+so, +se

+nzo, +onzo,
+nze, +enze

Cyrillics
+м, +ом, +ем, +эм

Example
kudo+m

‘my home/house’

+нок, +нек, нэк,
+онок, +енек, +энек;
+мок,+мек, +омок,
+емек, +эмек

kudo
+nok

‘(of) our home/
house’

+нок, +нек, нэк,
+онок, +енек, +энек

kudo
+nok

+т, +ть, +от, +еть,
+эть

kudo+t

‘your home/
house’

+т, +ть, +от, +еть,
+эть; +нт, +нть,
+онт, +енть, +энть

kudo+t

‘your homes/
houses’, ‘of
your home(s)/
house(s)’

+нк, онк, +енк, +энк

kudo+ŋk

‘your home/
house’

+зо, +озо, +зэ, +езэ,
+эзэ; +со, +сэ

kudo+zo

‘his/her/its
home/house’

+нзо, +онзо, +нзэ,
+ензэ, +энзэ

kudo
+nzo

‘his/her/its
homes/houses’,
‘of his/her/its
home(s)/house(s)’

kudo+st

‘their home/
house’

+м, +ом, +ем, +эм,
+н, +он, +нь, +ень,
+энь

3PL

+st, +ost, +est

+nst,
+onst,
+enst

+ст, +ост, +ест,
+эст; +нст, +онст,
+енст, +энст

Subtotals
Total
allomorphs

39
55

16

58
69

Unique
allomorphs

43

54

11

‘our homes/
houses’

<pgNo>124</pgNo>
124

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Concatenation of case and person can be seen to follow a two-way split for constituent
ordering, i.e. synchronically, the core cases adhere to a STEM + POSSESSOR-INDEX scheme,
where the possessor index is attested for cumulative exponence in the expression of both
number and person of the possessor and perhaps number and case of the possessum,
whereas other cases generally follow a concatenation scheme STEM + CX + POSSESSOR
INDEX. While concatenation strategies of the nominative and genitive are rendered as
ambiguous, due to the absence of any discernible case morpheme, the dative lends itself
to a diachronic interpretation of STEM + POSSESSOR INDEX + CX, a fact which would lend to
a diachronic three-way split in constituent ordering (STEM + POSSESSOR INDEX (nominative
and genitive), STEM + POSSESSOR INDEX + CX (dative), STEM + CX + POSSESSOR INDEX (others)) (cf. Comrie 1981: 120). The remainder of the cases attested with adnominal-person
marking comprise 13 cases: the ABLATIVE, INESSIVE, ELATIVE, ILLATIVE, PROLATIVE, TRANSLATIVE, COMPARATIVE, ABESSIVE, LOCATIVE and COMITATIVE, i.e. the sum total enumeration
lacks only the LATIVE and TEMPORALIS of the 15 cases attested in the indefinite declension,
see section 4.2.1. CASE.
In treatises of possessive endings, grammars of Erzya often show a dichotomy for
the category of number. In the most recent grammar, Aduškina (2000: 89–102) speaks
of a differentiation between singular and plural possessa associated with the possessive
suffixes for 1SG and 3SG, but what the grammarians write and publishers print deviate
from one another. In fact the N of the 3SG +ONzO occurs in all positions except the
nominative singular, i.e. it occurs in the singular genitive as well as the plural nominative and genitive functions. The N of the 1SG is indeed attested on all targets except the
nominative singular possessum, whereas the so-called singular %Om can occur in all
positions, for some speakers or writers of the language, regardless of what grammarians
say to the contrary (see 4.2.2. NUMBER). Thus it is not the presence but the absence of
the -N% which is of morphological importance, namely, the N forms do not occur in the
nominative singular of the possessum. The %N% forms of the 3PL can also be attributed
this same interpretation, whereas the 2PL form appears to have no dialect or old-literary
parallels, this may be due to its relative infrequency, as it is the least frequent of the six
person indices.

<pgNo>125</pgNo>
125

MORPHOLOGY
Table 4.36

Possessive indices on dative-case possessa-targets
Phonetic

POR

STAND

SG

+ńeń,
+neń,
+ońeń,
+eńeń

PL

NA

1

SG

+t́eń,
+teń,
+ot́eń,
+et́eń

2

PL

STAND

+t́e, +te,
+ot́, +et́e,
+t́et́, +tet́,
+ot́et́,
+et́et́,
+nstet́,
+onstet́,
+enstet́

+тень,
+тэнь, +от%
ень, +етень,
+этень

+nsteŋk,
+onsteŋk,
+ensteŋk

+нень, +нэнь,
+онень,
+енень,
+энень
NA

N-STAND

Example
ava+ńeń

Gloss
‘to my
mother’

+те, +тэ, +оте,
+ете, +эте, +теть,
+тэть, +отеть,
+ететь, +этеть,
+нстэть, +он%
стэть, +энстэть,
+енстэть

ava+t́et́

‘to your
mother’

+нстэнк, +онстэнк,
+енстэнк, +энстэнк

ćora
+nsteŋk

‘to your
son/sons’

kudo
+nsteń

‘for his/
her/its
home/
house’

t́et́a
+nsteń

‘to their
father’

+нстэнь,
+онстэнь,
+енстэнь,
+энстэнь

+nsteń,
+onsteń,
+ensteń

+nste,
+onste, +en%
ste, +nsto,
+onsto,
+nstenze,
+onstenze,
+enstenze
+nstenst,
+onstenst,
+enstenst

+нстэнь,
+онстэнь,
+енстэнь,
+энстэнь

+нстэ, +онстэ,
+енстэ, +энстэ,
+нсто, +онсто,
+нстэнзэ,
+онстэнзэ,
+енстэнзэ,
+энстэнзэ
+нстэнст,
+онстэнст,
+енстэнст,
+энстэнст

Subtotals

14

25

21

29

Total
allomorphs

39

50

Unique
allomorphs

36

42

SG

+nsteń,
+onsteń,
+ensteń

Cyrillics
N-STAND

3

PL

Grammars of Erzya entertain forms for singular person such that the first and second
person singular with genitive case readings are limited in usage to kin terms, see Aduškina (2000: 97), whereas the third person singular is generally recognized as open with
regard to stem semantic constraints. The plural is generally ignored, save for the fact
that analytic equivalents might be indicated for functions of the dative. While the third

<pgNo>126</pgNo>
126

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

person plural cross-reference marker -Onsteń with a dative case reading can readily be
attested in written literature, it is only recently that evidence has been found for a second
person plural morpheme -Onsteŋk, as well. Diachronically, however, it should be noted
that the stem of the POSS-3SG>DAT -Onste%, consisting of a possessor-index marker -OnzO
and that the dative morpheme in %Te, is used in the derivation of the two specifically plural person forms %Onsteŋk POSS-2PL>DAT and %Onstenst POSS-3PL>DAT, to name but two.
Some of the dialects and supposedly the literary norm distinguish kin terms with
first and second person singular possessive markers in combination with the genitive
(see Šaxmatovʺ 1910: 798; Aduškina 2000: 97 and 94). The peculiarity of this affix is
that both alveolars are palatal regardless of the preceding back vowel, i.e. in back vowel
context this ending forms a minimal pair with a non-palatal form sazor+on ‘my younger
sisters’.
Table 4.37
Person

Possessive suffixes genitive in kin terms
Forms
Phonetic
Cyrillics
STAND

1SG

+ń, +oń,
+eń

2SG

+t́, +ot́,
+et́

Subtotals
Total
allomorphs

6
13

N-STAND

+m, +om,
+em, +n,
+on

STAND

+нь, +онь,
+ень, +энь;

+t, +ot

+ть, +оть,
+еть,
+эть;

7

8
16

N-STAND

+м, +ом,
+ем, +эм,
+н, +он
+т, +от

Example

t́et́a+ń

‘of my father's’

ĺeĺa+t́

‘of your big
brother's’, ‘of your
big brothers'’

8

In front vowel contexts no minimal pair is attested, and even Aduškina's own example
(44), reproduced below, deviates from her prescriptive stance. The prescribed genitive
form is homonymous for the singular and plural of kin terms, such that t́ejt́eŕe+ń would
gloss as both ‘my daughter's’ and ‘my daughters'’, but as evidenced from Aduškina's
own example, adherence to this norm falters.
(44)

t́ejt́eŕe+m
vajgeĺe+ze
maŕavi
daughter_N-KIN+POSS-1SG voice_N+POSS-3SG>NOM.SG be-heard_V.IND.PRES.PRED-3SG
(Aduškina 2000: 94) ‘My daughter's voice [is audible | can be heard]’

<pgNo>127</pgNo>
127

MORPHOLOGY

The allomorphs attested in published literature for non-dative case tally at 43 phonetic
allomorphs and 54 Cyrillic allomorphs, which can then be added to the unique 36 phonetic and 42 Cyrillic allomorphs of the dative case tables for a total of 79 phonetic and
96 Cyrillic allomorphs total.
All told there are ninety-two phonetic, and one hundred and twelve Cyrillic allomorphs associated with the seventeen subcategories of possessive person.

##### 4.2.3.2. Definite markers
The definite markers of the standard Erzya literary language can be divided into sets by
number and case. In the definite singular declension there are two separate markers: one
for the nominative in %Oś and the other for the oblique cases in %Ońt́. In the plural, the
definite plural marker in %Ne is always preceded by a separate %T plural marker familiar
from both the indefinite nominative plural and the 3PL of the verbal an adnominal conjugations (see also 4.2.2.).
In the older literary language and especially the Northwestern or Alatyr' dialects
the nominative singular marker can be represented by the shorter %ś, lacking a linking vowel in combination with consonant-final stems, and the oblique singular cases
are represented by the marker %śt́. Hence one might immediately observe morpheme
ambiguity with the indicative preterit I 3SG and 3PL forms of the verbal conjugation, i.e.
in consonant-final stems of noun declension the Alatyr'-type dialects attest to a linkingvowel strategy whose contextual motivation lies in the varied incompatibility of adjacent
voiceless s(h)ibilants at the stem-affix juncture, see table (4.38).
Table 4.38

NOM
NOM.DEF.SG
GEN.DEF.SG

Variation between linking-vowel strategies in modern and
presently dialect (old literary) declension of nouns
Literary
Dialect Literary
Dialect
Literary
tol ‘fire’
tol
oš ‘town’ oš
san ‘sinew; vein’
tol+oś
tol+ś
oš+oś
oš+oś
san+oś
tol+ońt́
tol+śt́
oš+ońt́
oš+ośt́
san+ońt́

Dialect
san
san+ś
san+śt́

The definite declension is best broken down into singular and plural subsets. The
plural marker T + definite plural Ne combination provides — for almost all practical
purposes — a parallel stem to that of the indefinite declension. With the exception of
the TEMPORALIS and LOCATIVE case forms, twelve cases can be attested in literary sources
and a thirteenth in dialect material (see section 4.2.1.3. ATTRIBUTIVE CASES). The singular
definite declension is limited to eleven case forms, i.e. there is no attestation in the present
or older literary language for the case forms LATIVE, LOCATIVE, COMITATIVE, TEMPORALIS.

<pgNo>128</pgNo>
128

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.39

Definite declension markers
Allomorphs
Phonetic
Cyrillics
STAND

NOM.DEF.SG

+ś, +oś,
+eś

N-STAND

STAND

+сь, +ось,
+есь, +эсь

OBL.DEF.SG

+ńt́,
+ońt́,
+eńt́

+śt́,
+ośt́,
+eśt́; +t́

DEF.SG.DAT

+ńt́eń,
+ońt́eń,
+eńt́eń

+śt́eń,
+ośt́eń,
+eśt́eń;
+t́eń

+нтень,
+онтень,
+ентень,
+энтень

DEF.PL

+ńe,
+ne

NA

+не, +нэ

Subtotals
Total
Allomorphs

11
18

8

+нть,
+онть,
+енть,
+энть

12
20

N-STAND

+сть,
+ость,
+есть,
+эсть;
+ть
+стень,
+остень,
+естень,
+эстень
NA

kudo+ś

‘the/this/that
home/house’

kudo+ńt́

‘the/this/that
home/house
(GEN)’

kudo+ńt́eń

‘to the home/
house’

kudo+t́ńe

‘the/these/those
homes/houses’

9

In Erzya literature there are usually only four morphemes for the four different paradigmatic positions although a fifth and sixth one can be attested in earlier literature, i.e. the
genitive and dative singular forms.
All told there are eighteen phonetic, and twenty Cyrillic allomorphs associated
with the four subcategories of definite markers.
Let us now inspect the declension types, INDEF, POSSESSIVE and DEFINITE, the last of
which might, for concatenational reasons, be split into SINGULAR and PLURAL, attest inﬂection in 15, 13, 10 and 13 cases, respectively (see table 4.40).

<pgNo>129</pgNo>
129

MORPHOLOGY
Table 4.40
NOM
GEN
DAT
ABL
INE
ELA
ILL
LAT
PROL
LOC
TEMP
TRNSL
COMP
ABE
COM

Attestation of case in four declension arrays
Indefinite
Possessive
Definite Singular
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
NA
+
NA
NA
+
+
+
+
+
NA
+
NA
NA
+
+
+
+
+
+
+
+
+
+
+
NA

Definite Plural
+
+
+
+
+
+
+
+
+
NA
NA

+
?
+
Dialect

#### 4.2.4. Nominal conjugation markers
The next position in the concatenation of affixes involves the predicate-person paradigm.
The predicate-person paradigm or NOMINAL CONJUGATION MARKERS are morphologically
representative of the same elements attested in the indicative present and preterit II
persons of subject-conjugation paradigms. These markers are attested for an extensive
range of parts of speech including nouns, demonstratives, adjectives, quantifiers, nonfinites, spatial adverbs and postpositions, on the one hand, and for co-occurrence with
grammatical markers of NUMBER and CX, as well as the POSSESSIVE and DEFINITE DECLENSIONS,
on the other (cf. Agafonova 2000: 145; Buzakova 2000: 251; Imajkina 2000: 64, 232;
Xaritonova 2000: 116; Mosin 2000: 109–110; Bartens 1999: 148; Kolâdënkov 1959:
18, 26–27, 35–37, 44–45, 190; Evsevʹev 1963: 52, 62, 115–125, 137, 148, 156, 161,
190, 287, 290, 292, 294, 303). The following table (4.41) will provide a rudimentary
presentation of the nominal conjugation with attestation for grammatical markers
indicating two tenses, three persons and two numbers.

<pgNo>130</pgNo>
130

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.41

Nominal conjugation markers with attestation for various targets
Allomorphs
Phonetic

PRES

PRED

STAND

1SG

+an

1PL

+tano,
+t́ano

2SG

+at

2PL

+tado,
+t́ado

Cyrillics

N-STAND

+tam,
+t́am,
+tanok,
+t́anok,
+tank,
+t́ank

N-STAND

STAND

+ан, +ян
+тано, +тяноa

+ат, +ят

+там,
+тям,
+танок,
+тянок,
+танк,
+тянк

+тадо, +тядо

t́et́az+an

‘I’m his/her
father’

eŕźa+tano

‘We are
Erzyas’

Kobaĺeń+at

‘Are you from
Kobale’

andoms
+tado

‘Do you need
to be fed’

3SG

Ø

Ø

lomań+Ø

‘He/she is a
person’

3PL

Ø

Ø

kosot+Ø

‘Where are
they’

1SG

+ĺiń,
+oĺiń,
+eĺiń,

+линь, +олинь,
+елинь, +элинь

od+oĺiń

‘I was young’

kudo+so
+ĺid́e

‘Were you at
home’

iśt́amo
ćora+ś+eĺit́

‘you were that
kind of a man’

iśt́aška+ĺit́

‘you were this
big’

avoĺ
par+t+ne
+d́e+ĺ

‘he/she/it was
not [one] of
the good ones’

1PL

+ĺińek,
+eĺińek,
+oĺińek

2SG

+ĺit́,
+oĺit́,
+eĺit́,

PRETII

+ĺńek,
+eĺńek,
+oĺńek

+льнек,
+ольнек,
+ельнек,
+эльнек

+лить, +олить,
+елить,
+элить

2PL

+ĺid́e,
+oĺid́e,
+eĺid́e

3SG

+ĺ, +oĺ,
+eĺ,

+ль, +оль, +ель,
+эль

3PL

+ĺt́,
+oĺt́,
+eĺt́

+льть, +ольть,
+ельть, +эльть

Subtotal
Total
allomorphs

26

Unique
allomorphs

+ĺd́e,
+oĺd́e,
+eĺd́e

+линек,
+олинек,
+елинек,
+элинекa

12

+лиде, +олиде,
+елиде, +элидеa

33

+льде,
+ольде,
+ельде,
+эльде

śkamo+st
+oĺt́

15

38

48

37

47

‘they were on
their own’

<pgNo>131</pgNo>
131

MORPHOLOGY

The target types illustrated here include: a nominative singular possessum t́et́azan
‘I’m his/her father’; an indefinite nominative, which might be rendered both singular
and plural eŕźatano ~ eŕźattano ‘we are Erzyas’; an indefinite genitive form of a place
name Kobaĺeńat? ‘Are you from Kobale?’; an illative infinite andomstado? ‘Do you
need to be fed?’; an inessive form kosat? Where are you?’; an adjective odoĺiń ‘I was
young’; a nominative definite singular iśt́amo ćoraśeĺit́ ‘you were that kind of a man’;
an indefinite comparative iśt́aškaĺit́ ‘you were this big’; a definite plural ablative target
avoĺ partned́eĺ ‘it was not of the better ones’, and a minimalizing quantifier śkamostoĺt́
‘[they] were by themselves’.
All told there are thirty-seven phonetic, and forty-seven Cyrillic allomorphs associated with the twelve subcategories of adnominal predicate person.
Adnominal conjugation, which otherwise is the focus of a doctoral dissertation
(Turunen: 2010 “Nonverbal predication in Erzya: Studies on morpho-syntactic variation
and part of speech distinctions”), has been outlined according to source grammars and
attestation from corpus and field work. It can be plotted in table (4.42), case slots not
attested in table (4.40) are marked IRR for irrelevant to attestation. There is only one case
attesting nominal conjugation in all four arrays (the nominative), only one with three attestations, five with two arrays, and four with one array. The indefinite declension shows
attestation for nominal conjugation in eleven cases, the possessive declension in five
cases, definite singular in one case, and the definite plural in four cases. That means a
total of 21 attestations out of a hypothetical 31.
Table 4.42

ABE

Attestation of nominal conjugation in four declension arrays
Indefinite Possessive
Definite Singular Definite Plural
+
+
+
+
+
+
NA
+
+
+
NA
NA
+
+
NA
NA
+
+
IRR
IRR
+
NA
NA
+
+
NA
NA
+
+
NA
IRR
NA
+
NA
NA
NA
+
NA
NA
NA
+
NA
NA
NA

DAT

NA

NA

NA

NA

LAT

NA

IRR

IRR

NA

NOM
INE
GEN
PROL
LOC
ABL
ELA
ILL
TRNSL
COMP

TEMP

NA

IRR

IRR

NA

COM

NA

NA

IRR

NA

Total

11

5

1

4

Total
4
3
2
2
2
2
2
1
1
1
1
0
0
0
0
21

<pgNo>132</pgNo>

#### 4.2.5. The clitic *-Gak*

The clitic -Gak in Erzya is represented by the allomorphs %gak, %kak, %jak, and %ak. The
last being not only an allegro form following a word-final velar plosive, i.e. some writers
and proof-readers prefer single to double consonants, but the initial stop of the clitic is
also lost after other consonants in speech, and this is reﬂected in print.
Table 4.43 -Gak clitic
Following consonant
VOICED

%gak
kal+gak
‘a fish too’

DEVOICED

%kak
karks+kak
‘a belt too’

Following vowel
VARIATION

%kak ~ %ak
park+kak ~ park+ak
‘a park too’

%jak
pando+jak
‘a hill too’

In the concatenation of noun-type morphology, the clitic %Gak represents the final
constituent that can be added to any given stem, although this statement can be proven
false in the declension practices of some dialects and the citation strategies of the literary
language, as well, see (45). A concession is in order here, namely, the this counter
example exhibits an indefinite pronoun derived from an interrogative pronoun with the
clitic %Gak, and although the affix ordering is the same, one might contend that this
citation form does not, in fact, have a clitic (for clitics in Erzya and Moksha, see Erina
1997).
(45)

di͔
ton
iĺa
rizne.
now/but_PRT you_PRON-PERS-2SG.NOM don’t_V-PROH.IMP.PRED-2SG worry_V.CONNEG.
kuč+i͔t́,
meźe+jak
di͔
send_V+IND.PRES.PRED-3PL, something_PRON-INDEF.NOM.SG+CLT and_PRT
kuč+i͔t́, …
meźe+jak+oś
send_V+IND.PRES.PRED-3PL something_PRON-INDEF.NOM.SG+CLT+NOM.DEF.SG
mońeń
aj
eŕav+i.
I_PRON-PERS-1SG.DAT.POSS-1SG not_PRT be-needed_V+IND.PRES.PRED-3SG.
(Abramov 1964: 532) ‘Now, don’t you worry. They will send you something… [But] I
don’t need that “something”.’

The clitic %Gak as illustrated above can be provided with a table in an analogous form to
the other affixes addressed above.

<pgNo>133</pgNo>
133

MORPHOLOGY
Table 4.44

Morphematic representation of the %Gak enclitic
Phonetic
STAND

No clitic
Clitic

Ø
+gak,
+kak, +jak

Subtotal
Total allomorphs

4
5

Cyrillics
N-STAND

+ak
1

Ø
+гак, +как,
+як
4
5

+ак

kudo
kudo+jak

‘home/house’
‘home/house too’

1

All told there are five phonetic, and five Cyrillic allomorphs associated with the two
subcategories of clitic, i.e. [±PRESENCE].

Interim summary of affixes
Adnominal-type affixation can be broken down into three phases of concatenation, i.e.
declension, conjugation and clitic marking:
Declension, the segment of greatest variety, is attested for the presence of morphological
markers indicating the grammatical categories of case (maximal fifteen), number (two)
and deixis – possessive (seventeen) and definite (four). While the category of number is
apparent in the nominative case of all three declension types with certain limitations in
the possessive declension, only the definite declension tables show a regular rendering
of number in all attested cases of the declension charts. Due to predictable noun-head
deletion strategies attested in Erzya, eight of the case forms, which occur as modifiers in
the NP, may be further subjected to the phenomenon of secondary declension as addressed
in section 4.5. ADNOMINAL SYNTAX AND SECONDARY DECLENSION.
Conjugations comprise twelve morphological markers for the indication of the
grammatical categories of predicate person (three), number (two) and tense (two). Here
the ZERO-marker is used to cross-reference indicative present 3SG, which is simultaneously
the same marking used with non-predicative-position elements, by the same token the %T
plural marker of the 3PL might syntactically cross-reference either the indicative present
3PL in predicate position or certain non-topic arguments of the finite verb.
Enclitic marking comprises a simple dichotomy, in which either the enclitic is present
or is not.

<pgNo>134</pgNo>

### 4.3. Adnominal-type person in parts of speech
ADNOMINAL-TYPE PERSON here is the cover-term used to represent what elsewhere might
be referred to as possessor/controller indexing, cross-referential adnominal-person
marking, possessive declension, etc. Thus it is implied that the phenomenon might be
manifest in parts of speech other than what are found in noun phrases. This is, in fact, the
situation. The affixes used for possessor indexing in nouns can be attested in other parts
of speech that are not found in NPs. We will assume that the stem types demonstrated
in section 4.1. NOMINAL-TYPE WORD-STEM MORPHOLOGY can be applied not only to nouns,
but equally to all other parts of speech, where the possessive declension obtains. Thus,
in this section, we will make an inspection of the various parts of speech and their
co-occurrence with the three layers of Erzya adnominal concatenation: POSSESSIVE
DECLENSION, NOMINAL CONJUGATION and CLITIC MARKING. In the first subsection we will
inspect the compatibility of the morphologically explicit possessive declension with the
various parts of speech, at which time small subsets of these parts of speech, sublexica,
will be forwarded to provide a more specific illustration of the word forms encountered.
The inspection for possessive declension compatibility will be facilitated through a
subdivisioning according to case, whereas frequency will then help in distinguishing the
prominent sublexica in the parts of speech.
Cases = nominative, genitive, dative, ablative, inessive, elative, illative, prolative, locative, translative, comparative, abessive, comitative
Parts of speech = nouns, quantifiers, pronouns, adpositions and non-finites in %Om%

The resulting information on the compatibility of adnominal-person marking will then
establish a base for further inspection of the Erzya lexicon. It will provide us with data
concerning concatenational dimensions of the various word types as well as inﬂections.
These concatenational dimensions will give us an insight into the workings of obligatory
possessive marking, the morpho-syntactic compatibility of declension and conjugation
or clitic marking, or both, and the phenomena of PARADIGM DEFECTIVITY and SECONDARY
DECLENSION, dealt with in sections (4.4.) and (4.5.) respectively.
The manifestation of cross-referential adnominal-person marking in the Erzya
language can be given a slight delimitation through the introduction of the notion OBLIGATORY POSSESSIVE MARKING. This notion, however, must first be broken down into more
primitive features, i.e. we can speak of adnominal-person affixation that is present or
absent, in a word [±EXPLICIT], and this parameter can further be coordinated according to
the notion of [±OBLIGATORY].
±Explicit adnominal-person marking
±Obligatory

<pgNo>135</pgNo>
MORPHOLOGY

135

These parameters according to which the first allows for the presence/absence of
adnominal-person marking, e.g. in Erzya the kin term t́et́a ‘father’ can appear both with
and without cross-referential marking: t́et́a father_N.NOM.SG and t́et́a+zo father_N+POSS3SG>NOM.SG, and the latter, which ascribes the ±obligatoriness of the first parameter.
Thus where the word for “father” t́et́a may, according to context and semantics, occur
with or without cross-referential marking, there are words that are obligatorily targets of
adnominal-person marking, on the one end of the spectrum, and others that may never be
targets of adnominal-person marking, at the other extreme, see (46–50).
(46) a. t́et́+id́e+nze
father_N-KIN-ELDER+ASSOC+POSS-3SG
(cf. Bartens 1999: 107; Cygankin 1961: 357; Evsevʹev 1963: 40) ‘his/her/its father and
others with him’
*b. t́et́+id́e
father_N-KIN-ELDER+ASSOC
‘father and others with him’
(47) a. ejste+de+nze
from_POP.ELA+ABL+POSS-3SG
‘from him/her/it’
*b. sonze
ejste+de
he/she/it_PRON-PERS-3SG.GEN.POSS-3SG from_POP.ELA+ABL
‘from him/her/it’
(48) a. ńiĺe+ńe+st
four_NUM+ASSOC-COLL+POSS-3PL
‘the four of them’
*b. si͔nst
ńiĺe+ńe
they_PRON-PERS-3PL.GEN.POSS-3PL four_NUM+ASSOC-COLL
‘the four of them’
*(49) a. pačk+onzo
through_POP+POSS-3SG
‘through it/him/her’
b. sonze
pačk
he/she/it_PRON-PERS-3SG.GEN.POSS-3SG through_POP
‘through it/him/her’

<pgNo>136</pgNo>
136

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

(50) a. t́e+nze
to_POP.DAT+POSS-3SG
‘to it/him/her’
b. sońenze (<= soń+d́e+nze) (Feoktistov, p.c.)
he/she/it_PRON-PERS-3SG.DAT.POSS-3SG
‘to it/him/her’

The notion, here, of obligatory possessive marking is the morphological offshoot of
the treatise of OBLIGATORILY POSSESSED NOUNS or BOUND NOUNS as provided by Bickel and
Nichols (WALS chapter 58), where it is noted that many languages with head-marked
possession have some nouns that obligatorily require possessive marking and cannot be
used without it, whereas these BOUND NOUNS or OBLIGATORILY POSSESSED NOUNS are contrasted with OPTIONALLY POSSESSED NOUNS. As demonstrated in (46–48), some word forms
are only valid with morphological concatenations of person, while (49) indicates that
only lexical person is possible, and (50) demonstrates the grammaticalization of extended exponence in the personal pronouns. Thus a further inspection will be made of
the distribution of adnominal person lexical versus morphological.
The parts of speech attested as compatible with adnominal-person marking will
then be further inspected for compatibility with nominal conjugation and clitic marking
(with or without nominal conjugation).

#### 4.3.1. Possessive declension compatibility for distinguishing
parts of speech
In this section possessive declension case will be utilized to identify various sublexica.
(See 1.1 THE INALIENABILITY HIERARCHY, above.) The names of these subgroups of the
Erzya lexicon will be given in order of highest frequency for first attested member in
each individual sublexicon. For each mentioned sublexicon, examples of representative
word forms will be provided with translations in order of occurrence.

Nominative case compatibility with parts of speech
In the initial inspection of the nominative I have resolved to utilize the specifically singular (singulative) form of the 3SG adnominal marker. This choice has eliminated problems with ambiguous readings requiring context to distinguish between case or number
of a given possessum. It has, however, required that I consider certain word types with
obligatory adnominal-person marking separately, namely, there are associative nouns
with variant interpretations, e.g. t́et́id́eń ~ t́et́id́em ‘my father and those with him’ may
receive two glosses (see NOUNS in section 4.3.2. ATTESTED PARTS OF SPEECH AND SUBLEXI-

<pgNo>137</pgNo>
MORPHOLOGY

137

CA). (For further reading see Klementʹeva 2004: 12, 36, 37; Bartens 1999: 107; Davydov

1963: 166; Cygankin 1961: 357; Bubrix 1953: 78; Evsevʹev 1963: 40)
While the nominative case attests to no personal pronouns, adpositions (which
by definition lack a nominative form (see ADPOSITIONS in section 4.3.2. ATTESTED PARTS
OF SPEECH AND SUBLEXICA), there is prominent evidence for a variety of nouns, including
quality nouns, such as color, ﬂavor, warmth, etc. In order of frequency of the first sublexicon member, we can establish:
PHYSICAL or MENTAL STATE (meĺ ‘mind’, jožo ‘feeling, contact point’, vij ‘strength’, ojme
‘soul’, obuća ‘character’),
KIN TERMS and other high-animacy 2-argument referents (ava ‘mother’, t́et́a ‘father’, ńi

‘wife’, ćora ‘son’, miŕd́e ‘husband’, jalga ‘comrade’, t́ejt́eŕ ‘daughter’, ĺeĺa ‘elder brother, uncle’, baba ‘grandmother’, pat́a ‘elder sister, aunt’),

BODY PARTS (čama ‘face’, śedej ‘heart’, pŕa ‘head’, rungo ‘body’, kurgo ‘mouth’, peke
‘stomach’, ked́ ‘hand, arm’, piĺge ‘foot, leg’, mešt́e ‘chest’, sudo ‘nose’),
RELATIONAL SPATIAL nouns (potmo ‘inside’, laŋgo ‘upper surface’, alks ‘base’, potmaks

‘bottom’, boka ‘side’, či͔ŕe ‘edge’, ikeĺks ‘front’, udalks ‘back’, veĺks ‘covering’),

PRODUCT or EMISSION

reﬂection’),

(vajgeĺ ‘voice’, t́ev ‘work’, val ‘word’, či͔ńe ‘smell’, suĺej ‘shadow,

TEMPORAL SETTINGS (ška ‘time’, či͔ ‘day’, eŕamo ‘life’),
SPATIAL SETTINGS (tarka ‘place’, kudo ‘house, home’, veĺe ‘village’, piŕe ‘garden, orchard’),
UNIVERSAL QUANTIFIER (veśemeze ‘all told’),
DOMESTIC ANIMALS (ĺišme ‘horse’, kiska ‘dog’, skal ‘cow’, alaša ‘horse’, ajgor ‘stallion’,
vašo ‘foal’, at́akš ‘rooster’, psaka ‘cat’)
INTRANSITIVE DEVERBAL NOUNS [activity] (udoma ‘to sleep’, kortamo ‘to speak’, śimema

‘to drink’, bažamo ‘to intend to’, jovtńema ‘to tell’, ĺekśema ‘to breathe’, kemema ‘to
believe’, samo ‘to arrive’, pejd́ema ‘to laugh’, tujema ‘to depart’),

TRANSITIVE DEVERBAL NOUNS [activity] (učoma ‘to wait’, t́ejema ‘to make’, śt́avtoma ‘to
raise’, tonavtoma ‘to teach’, čaŕkodema ‘to comprehend’, mujema ‘to find’, pańema ‘to
drive; to bake’, vet́amo ‘to lead’), [actor] (vansti͔ća ‘to guard’, id́ića ‘to protect’, kiŕd́ića
‘to hold’, večkića ‘to love’, tonavti͔ća ‘to teach’, polavti͔ća ‘to replace’, uči͔ća ‘to wait’,
ńejića ‘to see’, t́eji ‘to make’, kuči͔ća ‘to send’).

<pgNo>138</pgNo>
138

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
(seŕ ‘height’, keĺe ‘width’, kuvalmo ‘length’, stalmo ‘weight’, ečke
‘thickness’, ije ‘age’, pit́ńe ‘value’, paro ‘virtue’, śupavči͔ ‘wealth’, ĺembe ‘warmth’,
tańśt́ ‘ﬂavor’, ašo ‘white’),

MEASUREMENTS

(panar ‘shirt’, śive ‘collar’, šapka ‘hat’, oršamo ‘clothing’, paća ‘kerchief’,
kartuz ‘cap with visor’, pĺatija ‘dress’, pidžak ‘coat’, karks ‘belt’),

APPAREL

TOOLS (lokšo ‘whip’, penč ‘spoon’, śalgo ‘pike’, peĺuma ‘scythe’, piks ‘rope’, uźeŕe ‘ax’
kajga ‘violin’,, krandaz ‘wagon’)
INTERROGATIVE PRONOUN (meźe ‘what’)
ASSOCIATIVE ELDER NOUNS (avid́eń ‘my mother and those with her’)
PROPER NAMES

(ĺuda ‘Lyuda’, vad́im ‘Vadim’)

PROPER-NAME TOPIC DERIVATIONS [in ńize] (listarńize ‘Listar's wife’).

As noted below nominative and genitive marking in all persons other than 3SG are
literally ambigous to automated morphological parsing, so the sublexicon data are
applicable to the combined nominative-genitive group. The sequence of sublexica
begins in accordance with the inalienability hierarchy with kin terms and body parts
highest on the agenda. These are followed by spacial relations and settings with product
or emissions. The highest of the obligatorily marked sublexica is that of the universal
quantifier, which is followed by a domestic animals sublexicon. The two sublexica of
deverbal nouns, it will be noted, favor intransitive over transitive verbs. Deverbals
derived from intransitive stems reference activities and the possessor index markers are
unambiguously S-oriented. Those derived from transitive stems are ambibuous; stems
referencing activities might have P or A orientation in their possessor indexes, whereas
possessor indexing on actor-reference nouns inadvertently specify patient-orientation
of the possessor. Subsequent possessa fall into the sublexica measurements, apparel
and tools, with only minimal attestation for interroative pronouns, obligatorily marked
associative elder nouns and proper names. Obligatory adnominal-person marking is
seen in the personal pronouns and quantifiers.

Genitive case compatibility with parts of speech
The subset of lexical elements attested with the non-ambiguous reading of nominative
singular 3SG adnominal-person morpheme can be utilized in the distinction of sublexica
common to both the nominative and the genitive. By the same token word items not
encountered in the 3SG>NOM.SG parse might be considered either plural in nature or
particular to the genitive/oblique range of case. Most lexical items which are typically

<pgNo>139</pgNo>
139

MORPHOLOGY

plural belong to the sublexica body parts or physical and mental states. Hence the only
new words to be attested from the ambiguous plural include the words čeŕ ‘hair’, kež
‘fury’, pej ‘tooth’, sakal ‘beard’.
Typically plural (śeĺme ‘eye’, ked́ ‘hand, arm’, piĺge ‘foot, leg’, turva ‘lip’, čeŕ ‘hair’,
lavtov ‘shoulder’, kež ‘fury’, pej ‘tooth’, sakal ‘beard’).

The sublexica with NO NOMINATIVE FORM READINGs are most prominently represented by
the personal and reﬂexive-stem pronouns. Whereas personal pronouns are generally
accepted to show obligatory possessive marking after their case marking, this marking
strategy is shared by the genitive, as well, which might be characterized as either oblique
marking on the word stem, or diachronically an indefinite genitive with subsequent
possessive marking. The reﬂexive-stem pronouns, however, have been presented
in declension charts with an erroneous eś nominative form, common to all, whereas
this paradigm lacks a sibling in the nominative; eś might be dealt with as a dependent
absolutive form (cf. Agafonova 2000: 142–143; Bartens 1999: 113; GMYa 1980: 191;
Zaicz 2006: 197), see table (4.45). Here are adjustments for dependent and independent
reﬂexive reading as well as an attestation for 2SG translative case, see (51).
Table 4.45
PERS

Reﬂexive stem declension with independent case forms whereas the nominativecase form is suppletive and the eś form is a dependent absolutive form

INDEPENDENT FORMS

Suppletive

GEN/

DAT

ABL

PROL

TRNSL

COMP

ABE

eśeškan ~
eśškan

eśt́emeń

eśeškat ~
eśškat

eśt́emet́

OBL

NOM

1SG

monś

eśeń

eśt́eń

eśt́ed́eń

eśkan

1PL

mińś

eśeńek

eśt́eńek

eśt́ed́eńek

eśkanok

2SG

tonś

eśet́

eśt́et́

eśt́ed́et́

eśkat

2PL

ti͔ńś

eśeŋk

eśt́eŋk

eśt́ed́eŋk

eśkaŋk

3SG

sonś

eśenze

eśt́enze

eśt́ed́enze

eśkanzo

3PL

si͔ńś

eśest

eśt́est

eśt́ed́est

eśkast

eśkset́

eśeškanok
~ eśškanok

eśt́emeńek

eśeškaŋk
~ eśškaŋk

eśt́emeŋk

eśeškast ~
eśškast

eśt́emest

eśeškanzo
~ eśškanzo

eśt́emenze

<pgNo>140</pgNo>
140
(51)

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
azd+an,
ki+ks
not-know_V+IND.PRES.PRED-1SG, who_PRON-REL+TRNSL
tu+ś
toń
t́e
depart_V+IND.PRETI.PRED-3SG you_PRON-PERS-2SG.GEN this_PRON-DEM-PROX.ABS
ćora+ś,
buĺčom,
eś+ks+et́,
son_N+NOM.DEF.SG, as-though_PRT, self_REFL-STEM+TRANS+POSS-2SG,
ińe+ń
astaj.
great_ADJ:N+GEN Astai_PRP.NOM.SG
(Radayev 1991: 19) ‘I don’t know who this son of your resembles, it seems as though,
you yourself, revered Astai.’

Obligatory adnominal-person marking is explicitly attested in the genitive forms of the
3SG, 1PL, 2PL and 3PL personal pronouns. (See also INDISCERNIBLE CX below.)

Dative case compatibility with parts of speech
In the initial inspection of the dative I have resolved to utilize the 3SG adnominal marker
as it is purported to be compatible with both kin terms and other targets, as well. This
choice has eliminated problems with ambiguous reading requiring context to distinguish
between indefinite dative reading and 1SG readings.
KIN TERMS and other high-animacy 2-argument referents (ava ‘mother’, t́et́a ‘father’,

ńi ‘wife’, jalga ‘comrade’, ćora ‘son’, t́ejt́eŕ ‘daughter’, miŕd́e ‘husband’, pat́a ‘elder
sister, aunt’, baba ‘grandmother’, ĺeĺa ‘elder brother, uncle’),

BODY PARTS (piĺe ‘ear’, pŕa ‘head’, śedej ‘heart’, śeĺme ‘eye’),
TRANSITIVE DEVERBAL NOUNS [actor] (vet́ića ‘to lead’, uskića ‘to haul’, iĺt́ića ‘to escort’,
id́ića ‘to protect’, tonavti͔ća ‘to teach’, uči͔ća ‘to wait’, ńejića ‘to see’, t́eji ‘to make’,
kuči͔ća ‘to send’).
INTRANSITIVE DEVERBAL NOUNS [activity] (ĺiśema ‘to come out’, sovamo ‘to enter’, eŕamo

‘to live’),

PRODUCT or EMISSION

(val ‘word’, poem ‘poem’, vajgeĺ ‘voice’, či͔ńe ‘smell’),

GROUP of MEMBERSHIP (śemija ‘family’, raśke ‘nation’, brigada ‘brigade’, ušmo ‘army’),
PROPER NAMES (matŕa ‘Matrya’, kat́a ‘Katya’, vera ‘Vera’, doškeńize ‘Doshke's wife’,

śima ‘Sima’)

<pgNo>141</pgNo>
MORPHOLOGY

141

PROPER-NAME TOPIC DERIVATIONS [in ńize] (murzańize ‘Murza's wife’, śomańize ‘Syoma's

wife’, listarńize ‘Listar's wife’, doškeńize ‘Doshke's wife’),
MINIMALIZING QUANTIFIER (śkamonsteń ‘by his/her/its self’).

A subsequent inspection was made of dative-case possessa with 2SG readings:
KIN TERMS and other high-animacy 2-argument referents (t́et́a ‘father’, ava ‘mother’,

ĺeĺa ‘elder brother, uncle’, pat́a ‘elder sister, aunt’, pokšt́a ‘grandfather’, pola ‘spouse’,
t́et́at%avat ‘father-n-mother’, baba ‘grandmother’, miŕd́e ‘husband’, ćora ‘son’, avavt
‘mother-in-law (husband's mother)’).

There was also evidence for another group, the TRANSITIVE DEVERBAL NOUNS [actor]
(kuči͔ća ‘to send’). This might in its own right pose the question of the role of argument
structures involved in dative marking.
The Dative adposition in t́eń 1SG, t́et́ ~ t́eńt́ 2SG, t́enze 3SG, t́eńek 1PL, t́eŋk 2PL and
t́est ~ t́enst 3PL, has a very high frequency, but unlike other adpositions this paradigm,
featuring obligatory adnominal-person marking, has a counterpart in the personalpronoun declension chart, namely, mońeń 1SG, tońet́ 2SG, sońenze 3SG, mińeńek 1PL,
ti͔ńeŋk 2PL and si͔ńest ~ si͔ńenst 3PL.
The use of dative-case possessor indexing is typical of kin terms and body parts, as
might be predicted from their robustness in nominative and genitive marking and their
correlation with 1.1 THE INALIENABILITY HIERARCHY. Unexpected, perhaps, is the presence
of the sublexicon deverbal transitive-stem actors, which might also be regarded as a
sublexicon of inalienable secondary arguments. The possessor/patient is also extremely
high on the SALIENCE HIERARCHIES OF ACCESSIBILITY (1.2). Obligatory adnominal-person
marking is seen in the personal pronouns.

Ablative case compatibility with parts of speech
The ablative case attests:
PERSONAL PRONOUNS (sońd́enze 3SG, mońd́eń 1SG, tońd́et́ 2SG, mińd́eńek 1PL, si͔ńd́est 3PL,

ti͔ńd́eŋk 2PL),

REFLEXIVE-STEM PRONOUNS (eśt́ed́enze 3SG, eśt́ed́et́ 2SG, eśt́ed́eń 1SG),
REFLEXIVE PERSONAL PRONOUNS (monśt́ed́eń 1SG, sonśt́ed́enze 3SG),

<pgNo>142</pgNo>
142

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
ADPOSITIONS (ejs ‘into’, vakss ‘next to’, malas ‘into the vicinity of’, karšos ‘against’,

koŕas ‘according to’),

INTRANSITIVE DEVERBAL NOUNS (tujemado ‘to depart’, eŕamodo ‘to live’, samodo ‘to ar-

rive’, kulomado ‘to die’, ĺiśemado ‘to come out’, jakamodo ‘to walk, to visit’),

BODY PARTS (pŕa ‘head’, keĺ ‘tongue’, śeĺme ‘eye’, piĺge ‘foot, leg’, sur ‘finger’),
PRODUCT or EMISSION (t́ev ‘work’, vajgeĺ ‘voice’, šum ‘noise’, či͔ńe ‘smell’, struja ‘ray’),
KIN TERMS and other high-animacy 2-argument referents (t́et́a ‘father’, ćora ‘son’, ava

‘mother’, jalga ‘comrade’, ńi ‘wife’, miŕd́e ‘husband’, t́ejt́eŕ ‘daughter’, aluž ‘dear,
fellow’),

SPATIAL SETTINGS (tarka ‘place’, veĺe ‘village’, eŕamo ‘life’, kudo ‘house, home’),
TRANSITIVE NON-FINITES (noldamodo ‘to release’, iĺt́amodo ‘to escort’, sajemado ‘to take’,

pŕadomado ‘to finish’, lovnomado ‘to read’, t́ejemado ‘to make’).

Obligatory adnominal-person marking is seen in the personal pronouns.

Inessive case compatibility with parts of speech
The inessive case attests:
ADPOSITIONS (ejse ‘in’, vaksso ‘next to’, kise ‘for’, malaso ‘near’),
RELATIONAL SPATIAL nouns (laŋgo ‘upper surface’, potmo ‘inside’, pe ‘end’, jutko ‘space

between’, veĺks ‘cover’, koj ‘custom’, lad ‘manner’, jožo ‘contact point’, kunška ‘center’, boka ‘side’),

BODY PARTS (ked́ ‘hand, arm’, pŕa ‘head’, śeĺme ‘eye’, piĺge ‘foot, leg’, sur ‘finger’, śedej

‘heart’, mešt́e ‘chest’, meĺ ‘mind’, turva ‘lip’, pulo ‘tail’),

MEASUREMENTS (seŕ ‘height’, kuvalmo ‘length’, keĺe ‘width’),
SPATIAL SETTINGS (tarka ‘place’, veĺe ‘village’, kudo ‘house, home’, pakśa ‘field’, eŕamo

‘life’, škola ‘school’, šabra neighbor),

APPAREL

(źepe ‘pocket’, oža ‘sleeve’, palka ‘stick’),

<pgNo>143</pgNo>
MORPHOLOGY

PRODUCT or EMISSION

‘poem’, t́ev ‘work’),

143

(val ‘word’, śorma ‘letter’, moro ‘song’, aŕśema ‘thought’, śt́ix

there is minimal use of KIN TERMS (ćora ‘son’, t́et́a ‘father’).

Obligatory adnominal-person marking is seen in presentations of the personal pronouns
in grammars, but not here.

Elative case compatibility with parts of speech
The elative case attests:
ADPOSITIONS (ejste ‘out of’, vakssto ‘away from’, malasto ‘from near by’),
RELATIONAL SPATIAL nouns (laŋgo ‘upper surface’, jutko ‘space between’, potmo ‘inside’,

pe ‘end’, či͔re ‘edge’, ekše ‘shelter of’, jožo ‘point of contact’, veĺks ‘covering’),

BODY PARTS (ked́ ‘hand, arm’, pŕa ‘head’, kurgo ‘mouth’, śeĺme ‘eye’, čama ‘face’, końa

‘forehead’, śedej ‘heart’, piĺge ‘foot, leg’, mešt́e ‘chest’, kiŕga ‘throat’),

KIN TERMS and other high-animacy 2-argument referents (jalga ‘comrade’, kaka ‘child’,
ava ‘mother’, oja ‘close friend’, ćora ‘son’, t́et́a ‘father’, sazor ‘little sister’, pakša
‘child’, aluž ‘dear, fellow’),
SPATIAL SETTINGS (tarka ‘place’, kudo ‘house, home’, pize ‘nest’, mastor ‘land, country,

earth’, veĺe ‘village’, joŋks ‘area, region’, piŕe ‘garden, orchard’),

TEMPORAL SETTINGS (ška ‘time’, či͔ ‘day’, on ‘dream’, piŋge ‘life time’),
APPAREL [containers] (źepe ‘pocket’, sumka ‘purse’, karks ‘belt’, portfeĺ ‘suitcase’,

mešok ‘bag’, kotom ‘haversack’, ćiĺim ‘pipe’, poŋgo ‘bosom’, šapka ‘hat’),

INTRANSITIVE NON-FINITES (tujemste ‘to depart’, moĺemste ‘to go along’, jutamsto ‘to pass’,
uĺemste ‘to be’, ĺiśemste ‘to come out’, samsto ‘to arrive’, eŕamsto ‘to live’, sovamsto ‘to
enter’, čačomsto ‘to be born’, udomsto ‘to sleep’),
TRANSITIVE NON-FINITES (iĺt́amsto ‘to escort’, vanomsto ‘to watch’, kunsolomsto ‘to listen’,

panžomsto ‘to open’, lovnomsto ‘to read’, ńejemste ‘to see’, t́ejemste ‘to make’, sajemste
‘to take’, noldamsto ‘to release’, vastomsto ‘to meet’),

PERSONAL PRONOUNS (moństeń ‘[beginning] with me’),

<pgNo>144</pgNo>
144

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

INTERROGATIVE PRO-N (meźeste ‘from what’),
UNIVERSAL QUANTIFIER (veśemste ‘of all’).

Obligatory adnominal-person marking is seen in the personal pronouns.

Illative case compatibility with parts of speech
The illative case is attested with NOUNS, QUANTIFIERS, PERSONAL PRONOUNS, ADPOSITIONS,
and NON-FINITES in %m+Oz+. It is most prominent in RELATIONAL SPATIAL nouns, adpositions
(with no paradigmatic nominative forms), body parts, spatial setting, temporal settings,
apparel but only slightly attested in personal pronouns.
RELATIONAL SPATIAL nouns (laŋgo ‘upper surface’, jutko ‘space between’, veĺks ‘cover-

ing’, pe ‘end’, potmo ‘inside’, ekše ‘shelter of’, boka ‘side’, či͔ŕe ‘edge’, jon ‘direction’,
potmaks ‘bottom’),
ADPOSITIONS (ejs ‘up to’, vakss ‘next to’, malas ‘to the vicinity of’),
BODY PARTS (meĺ ‘mind’, pŕa ‘head’, ked́ ‘hand, arm’, čama ‘face’, piĺe ‘ear’, śeĺme

‘eye’, kurgo ‘mouth’, kiŕga ‘throat’, piĺge ‘foot, leg’),

SPATIAL SETTINGS (tarka ‘place’, kudo ‘house, home’, pize ‘nest’, veĺe ‘village’),
APPAREL

(źepe ‘pocket’, kartuz ‘cap with visor’, karks ‘belt’, poŋgo ‘bosom’),

INTRANSITIVE DEVERBAL NOUNS [activity] (vastoma ‘to meet’, samo ‘to arrive’, kuloma ‘to

die’, kortamo ‘to speak’, tujema ‘to depart’, pramo ‘to fall’, eŕamo ‘to live’),

TRANSITIVE DEVERBAL NOUNS [activity] (putoma ‘to place’),
TEMPORAL SETTINGS (či͔ ‘day’, ije ‘year’, piŋge ‘life time’, ńedĺa ‘week’, kov ‘month’

eŕamo ‘life’),

PRODUCT or EMISSION (t́ev ‘work’, val ‘word’, vajgeĺ ‘voice’, či͔ńe ‘smell’, suĺej ‘shadow,

reﬂection’),

PERSONAL PRONOUNS (mońzeń 1SG, tońzet́ 2SG, mińzeńek 1PL),
CARDINAL NUMERAL (kolmozonok ‘the three of us’),
MINIMALIZING QUANTIFIER (śkamozot ‘for you [SG] alone’).

Obligatory adnominal-person marking is seen in the personal pronouns.

<pgNo>145</pgNo>
MORPHOLOGY

145

Prolative case compatibility with parts of speech
The prolative case is attested with NOUNS, REFLEXIVE-STEM PRONOUNS, ADPOSITIONS, and
NON-FINITES in %mga. The most prominent of the nouns are RELATIONAL SPATIAL nouns,
usually classified in Erzya grammars as postpositions, BODY-PARTS nouns and SPATIAL SETTINGS . The relational spatial nouns can be distinguished from other words used as adpositions by means of a parameter [±HAS NOMINATIVE FORM].
ADPOSITIONS (pačka ‘through’, ezga ‘along’, vakska ‘past’, trokska ‘across’, alga ‘un-

der’, peŕkava ‘around’, malava ‘in the vicinity of’, vaĺmalga ‘at the window’),

RELATIONAL SPATIAL nouns (jutko ‘space between’, laŋgo ‘upper surface’, potmo ‘inside’,

veĺks ‘covering’, či͔re ‘edge’, jon ‘direction’, pŕava ‘top’, jožo ‘point of contact’),

REFLEXIVE-STEM PRONOUNS (eśkanzo 3SG, eśkast 3PL, eśkan 1SG, eśkat 2SG, eśkanok 1P),
BODY PARTS (čama ‘face’, pŕa ‘head’, rungo ‘body’, lavtov ‘shoulder’, kiŕga ‘throat’,

mešt́e ‘chest’, końa ‘forehead’, št́oka ‘cheek’, śeĺme ‘eye’, kurgo ‘mouth’, piĺe ‘ear’),

SPATIAL SETTINGS (tarka ‘place’, kudo ‘house, home’, ki ‘road’, śĺed ‘path’, kardaz ‘yard’,

vaŕa ‘burrow’, ugol ‘corner’),

TRANSITIVE DEVERBAL NOUNS [activity] (šnamga ‘to praise’, ojmavtomga ‘to placate’,

ĺed́śt́amga ‘to remember’, id́emga ‘to protect’, vastomga ‘to meet’),

INTRANSITIVE DEVERBAL NOUNS [activity] (eŕamga ‘to live’, lovomga ‘to consider’, jaka%

mga ‘to visit’).

Obligatory adnominal-person marking is seen in the reﬂexive-stem pronouns.

Locative case compatibility with parts of speech
The locative case is attested only for some adpositions, relational-spatial nouns and
%Om+O declensions of transitive verbs. Assuming a division of adpositions from
relational spatial nouns, where adpositions do not have nominative-case forms, a further
division can be made on the basis of whether the spatial cases are indicated by a locativeablative-lative-prolative or an inessive-elative-illative-prolative paradigm. It is this
former set consisting of stems ending in %r%, %ŕ%, %l%, %ĺ%, %n% that takes the locative-case
marker in %O.

<pgNo>146</pgNo>
146

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Translative case compatibility with parts of speech
All instances of the translative case in the possessive declension are minimal. It is
represented by individual instances in three types of personal pronouns:
PERSONAL PRONOUNS (tońkset́ 2SG),
REFLEXIVE-STEM PRONOUNS (eśkset́ 2SG),
REFLEXIVE PERSONAL PRONOUNS (monśekseń 1SG).

Obligatory adnominal-person marking is seen in the REFLEXIVE-STEM, REFLEXIVE-PERSONAL
and PERSONAL PRONOUNS.

Comparative case compatibility with parts of speech
The comparative case has a very low attestation in the possessive declension. As a
marker for the standard of equal comparison it may come as no surprise that the only
sublexicon attested with more than two hits was the quantifying expression peĺeškanzo
‘about half of it’ 10 hits, with its sibling adnominal-person cells. By searching for word
forms without ambiguous 1sg -N and 2sg %T readings, indefinite genitive and indefinite
nominative plural, respectively, I was further able to discern traces of the REFLEXIVE-STEM
and PERSONAL PRONOUN paradigm, as well as the KIN-TERM, BODY-PART and SPATIAL-SETTING
sublexica, each with only one hit per word form.

Abessive case compatibility with parts of speech
In examining the word forms attested with morphological marking for both abessive
case and adnominal person, it became apparent that the two sublexica with most frequent
attestation for this compatibility are representative of the same part of speech, namely,
personal pronouns.
(tońt́emet́ 2SG, sońt́emenze 3SG, mońt́emeń 1SG, si͔ńt́emest 3PL,
ti͔ńt́emeŋk 2PL, mińt́emeńek 1PL),

PERSONAL PRONOUNS

REFLEXIVE-STEM PRONOUNS (eśt́emeń 1SG, eśt́emenze 3SG),

(sońśt́emenze 3SG, mońśt́emeń 1SG, tońśt́emet́ 2SG,
si͔ńśt́emest 3PL, mińśt́emeńek 1PL, ti͔ńśt́emeŋk 2PL),

REFLEXIVE PERSONAL PRONOUNS

KIN TERMS and other high-animacy 2-argument referents (miŕd́e ‘husband’, t́et́a ‘father’,

ńi ‘wife’, ava ‘mother’, azor ‘master’).

<pgNo>147</pgNo>
147

MORPHOLOGY

The abessive case of the possessive declension attests to compatibility with REFLEXIVE
PERSONAL PRONOUNS (both simple reﬂexive-stem and pronoun + reﬂexive-stem strategies), PERSONAL PRONOUNS and KIN TERMS.

Comitative case compatibility with parts of speech
In the possessive declension the comitative case is compatible with quantifiers alone.
These quantifiers can be broken into two subgroups of what is known elsewhere as
associative-collective numerals (see Rueter, On quantification in Erzya, forthcoming),
i.e. the more common kolmo+ńe+nze three_NUM-CARD+COM+POSS-3SG ‘the three of them
(discourse anchor + two others)’, and the approximative śado+ška+ńe+st hundred_NUMCARD+COM+POSS-3PL ‘about one hundred of them (discourse anchor + associated others
in sum of approximately 100)’. This two-way split is also applicable to the interrogative
question word źaro ‘how many’, which is rendered in variations of źarońenze ‘how
many of them’ and źaroškańenze ‘about how many of them’. Additional quantifying
pronouns are attested, including lamo+ńe+st ‘a lot of them’, alamo+ńe+st ‘few of them’
and źari͔ja+ńe+st ‘a few of them’, and the minimalizing śkam+ńe+nze ‘all by him/her/
itself’. The last pronoun, it will be noted, has counter parts without the ńe element, see
table (4.46), and therefore its attestation for comitative-case compatibility may be due
to stem semantics.
Table 4.46

Minimalizing quantifier śkamo% and the comitative case in possessive declension
Simple reﬂexive
personal pronoun + reﬂexive stem + case
stem
+ adnominal person

Controller

Neutral

Hits

?Comitative

Hits

Diminutive
Comitative

1

śkamo+n
śkamo+nok
śkamo+t
śkamo+ŋk
śkamo+nzo
śkamo+st

461
62
486
37
1620
148
2814

śkam+ńe+ń
śkam+ńe+ńek
śkam+ńe+t́
śkam+ńe +ŋk
śkam+ńe +nze
śkam+ńe +st

7
0
1
1
113
12
134

śkam+ńi+ńe+m
śkam+i[ńe+]ńek
śkam+ńi+ńe+t́

SG
PL

2

SG
PL

3

SG
PL

Total

śkam+ińe+nze
śkam+ińe+st

+

Hits

Total

1
0
1
0
0
0
2

469
62
488
38
1733
160
2950

The comitative case of the possessive declension has direct parallels in ASSOCIATIVECOLLECTIVE NUMERALS and QUANTIFIER PRONOUNS (both interrogative and indefinite, as well
as the śkamo% minimalizing quantifier ‘[person] alone’) This juncture of case and adnominal-person marking requires obligatory possessive marking.

<pgNo>148</pgNo>
148

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Indiscernible case
This subsection is reserved for treatment of adnominal-person targets whose morphological case is synchronically indiscernible.
The adposition marto ‘with’ is comitative in meaning, whereas its morphological
composition is obscure.
ADPOSITIONS (marto ‘with’)

The minimalizing quantifier śkamonzo ‘by his/her/its self’ like the associative-collective
numbers with the notion of universal quantifiers seem to function as quantifying
appositions (see Rueter, On quantification in Erzya, forthcoming), and although they
do demonstrate some rudimentary case forms in the literary corpora (illative, dative,
ablative), the 3SG form for what ought to be a nominative equivalent appears in obliquecase form. This oblique-case form, it will be noted, allows for both contextual secondary
declension (see section 4.5. ADNOMINAL SYNTAX AND SECONDARY DECLENSION), and nominal
conjugation.
MINIMALIZING QUANTIFIER (śkamonzo 3SG)

Partitive-function is attested in some pronouns with plural-person marking, here too
there is evidence of rudimentary declension in the literary corpora.
RECIPROCAL PRONOUNS (vejkest%vejkest 3PL ‘each other’, vejkeńek%vejkeńek 1PL ‘each

other’, vejkeŋk%vejkeŋk 2PL ‘each other’),

SELECTIVE INTERROGATIVE PRONOUNS (konast 3PL ‘which of them’, konaŋk 2PL ‘which of

you’, konanok 1PL ‘which of us’),

BINARY PRONOUNS (vejkest … omboćest 3PL ‘one of them … the other’, vejkeŋk …

omboćeŋk 2PL ‘one of you … the other’, vejkeńek … omboćeńek 1PL ‘one of us … the
other’),
UNIVERSAL QUANTIFIERS (veśemest 3PL ‘all of them’, veśemeŋk 2PL ‘all of you’, veśemeńek

1PL ‘all of us’,),

CARDINAL NUMERALS (kolmost 3PL ‘the three of them’).

Obligatory adnominal-person marking is observed in the quantifiers.

<pgNo>149</pgNo>
MORPHOLOGY

149

Interim summary of sublexicon prominence
The inalienability hierarchy appears to correlate most strongly with possessa bearing
core-syntax roles. While kinship terms and human body part are most robustly attested
with possessor indexing and nominative, genitive or dative case marking, These sublexica are less robust in other case forms. Adpositions and spatial relations gain prominence
in the local cases with a representation of body parts, as well. This latter sublexicon is
favored over kin terms, which would appear to indicate a reversal of the inalienability
hierarchy (cf. 1.1 THE INALIENABILITY HIERARCHY). Pronouns are most apparent in the
ablative and abessive, whereas the translative, comparative and comitative/associative
collective are minimally attested for any target.
The absence of personal pronouns from the core-case groups is best explained
by the fact that the genitive-case personal pronouns are genitive modifiers. As genitive
modifiers they might appear with zero marking as subject complements in the focus, i.e.
when they are used in belong-to possessive constructions (cf. Heine 1997: 25-26, 29-33;
Hamari 2007: 53). In the topic, however, these genitive modifiers are generally subject
to speaker-oriented demonstrative derivation, and therefore cannot be dealt with here
(see section 4.5. ADNOMINAL SYNTAX AND SECONDARY DECLENSION).

#### 4.3.2. Attested parts of speech and sublexica
In the previous section (4.3.1. POSSESSIVE DECLENSION COMPATIBILITY FOR DISTINGUISHING
PARTS OF SPEECH), we have introduced various sublexica displaying compatibility with
possessive declension in the thirteen cases attested for possessive declension in section
4.2. AFFIXES. This subsection will consist of the cumulative enumeration of all sublexica
indicated with a focus on the attestation of easily delimited pronouns. Then, we will
continue with the inspection of prominent representatives of the various sublexica (by
merit of frequency), for variation patterns in attestation with lexical versus morphological
adnominal-person marking in the illative case.

Nouns
Noun sublexica were attested for nine non-ambiguous case forms. Although non-ambiguous nominative singular reading is attested for the 3SG %OzO morpheme, nominative
plural as well as genitive singular and plural readings of its %OnzO counterpart dictated
a conﬂation of nominative and genitive-case attestation in this treatise. The locative case
attested in the relational-spatial noun jon ‘direction’ rendered in jon+o ‘in [X's] direction’
also requires manual disambiguation when a controller/possessor index is present. No
comitative case forms were attested for nouns in the possessive declension.

<pgNo>150</pgNo>
150

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Below is a list of sublexica associated with possessive declension, in which two
sets, proper-name topic derivations and associative elder nouns, both require obligatory
adnominal-person marking. The list is given in conformity with the accessibility hierarchy, whereas the sublexicon ARGUMENT ACTORS FROM TRANSITIVE VERBS has been set off
as a prominent set of non-kin two-argument nouns, which will serve, in future treatises
of the language, as distinct referents available for so-called kin-term interpretations (see
also section 4.4.).
(ĺuda ‘Lyuda’, matŕa ‘Matrya’, kat́a ‘Katya’, śima ‘Sima’, vad́im ‘Vadim’, vera ‘Vera’)

PROPER NAMES

PROPER-NAME TOPIC DERIVATIONS [in ńize] (doškeńize ‘Doshke's wife’, listarńize ‘Listar's

wife’, murzańize ‘Murza's wife’, śomańize ‘Syoma's wife’) – This set requires obligatory possessor indexing

ASSOCIATIVE ELDER NOUNS (avid́eń ‘my mother and those with her’) – This set requires
obligatory possessor indexing
KIN TERMS and other high-animacy 2-argument referents (aluž ‘dear, fellow’, ava ‘moth-

er’, azor ‘master’, baba ‘grandmother’, ćora ‘son’, jalga ‘comrade’, kaka ‘child’, ĺeĺa
‘elder brother, uncle’, miŕd́e ‘husband’, ńi ‘wife’, oja ‘close friend’, pakša ‘child’, pat́a
‘elder sister, aunt’, sazor ‘little sister’, t́ejt́eŕ ‘daughter’, t́et́a ‘father’)
ARGUMENT ACTORS FROM TRANSITIVE VERBS (id́ića ‘to protect’, iĺt́ića ‘to escort’, kiŕd́ića ‘to

hold’, kuči͔ća ‘to send’, ńejića ‘to see’, polavti͔ća ‘to replace’, t́eji ‘to make’, tonavti͔ća
‘to teach’, uči͔ća ‘to wait’, uskića ‘to haul’, vansti͔ća ‘to guard’, večkića ‘to love’, vet́ića
‘to lead’)

BODY PARTS (čama ‘face’, čeŕ ‘hair’, ked́ ‘hand, arm’, keĺ ‘tongue’, kiŕga ‘throat’, końa

‘forehead’, kurgo ‘mouth’, lavtov ‘shoulder’, mešt́e ‘chest’, pej ‘tooth’, peke ‘stomach’,
piĺe ‘ear’, piĺge ‘foot, leg’, pŕa ‘head; top’, pulo ‘tail’, rungo ‘body’, sakal ‘beard’, sudo
‘nose’, sur ‘finger’, śedej ‘heart’, śeĺme ‘eye’, št́oka ‘cheek’, turva ‘lip’)

MEASUREMENTS (ašo ‘white’, ečke ‘thickness’, keĺe ‘width’, kuvalmo ‘length’, ĺembe

‘warmth’, pit́ńe ‘value’, paro ‘virtue’, sal ‘salt’, seŕ ‘height’, stalmo ‘weight’, śupavči͔
‘wealth’, tańśt́ ‘ﬂavor’)

PHYSICAL or MENTAL STATE (jožo ‘feeling, contact point’, kež ‘fury’, koj ‘custom’, meĺ

‘mind’, obuća ‘character’, ojme ‘soul’, vij ‘strength’)

<pgNo>151</pgNo>
MORPHOLOGY

151

(aŕśema ‘thought’, či͔ńe ‘smell’, moro ‘song’, poem ‘poem’, t́ev
‘work’, struja ‘ray’, suĺej ‘shadow, reﬂection’, śorma ‘letter’, śt́ix ‘poem’, šum ‘noise’,
vajgeĺ ‘voice’, val ‘word’)

PRODUCT or EMISSION

(ćiĺim ‘pipe’, karks ‘belt’, kartuz ‘cap with visor’, kotom ‘haversack’, mešok
‘bag’, oršamo ‘clothing’, paća ‘kerchief’, oža ‘sleeve’, palka ‘stick’, panar ‘shirt’,
pidžak ‘coat’, pĺatija ‘dress’, poŋgo ‘bosom’, portfeĺ ‘suitcase’, sumka ‘purse’, śive
‘collar’, šapka ‘hat’, źepe ‘pocket’)

APPAREL

TOOLS (kajga ‘violin’, krandaz ‘wagon’, lokšo ‘whip’, peĺuma ‘scythe’, penč ‘spoon’,
piks ‘rope’, śalgo ‘pike’, uźeŕe ‘ax’)
DOMESTIC ANIMALS (ajgor ‘stallion’, alaša ‘horse’, at́akš ‘rooster’, kiska ‘dog’, ĺišme
‘horse’, psaka ‘cat’, skal ‘cow’, vašo ‘foal’)
RELATIONAL SPATIAL nouns (alks ‘base’, boka ‘side’, či͔ŕe ‘edge’, ekše ‘shelter of’, ikeĺks

‘front’, jožo ‘contact point’, jon ‘direction’, jutko ‘space between’, kunška ‘center’,
laŋgo ‘upper surface’, pe ‘end’, potmaks ‘bottom’, potmo ‘inside’, udalks ‘back’, veĺks
‘covering’)

SPATIAL SETTINGS (eŕamo ‘life’, joŋks ‘area, region’, kardaz ‘yard’, kudo ‘house, home’,

mastor ‘land, country, earth’, pakśa ‘field’, piŕe ‘garden, orchard’, pize ‘nest’, śĺed
‘path’, škola ‘school’, šabra ‘neighbor’, tarka ‘place’, ugol ‘corner’, vaŕa ‘burrow’,
veĺe ‘village’)
TEMPORAL SETTINGS (či͔ ‘day’, eŕamo ‘life’, ije ‘year’, kov ‘month’, ńedĺa ‘week’, on

‘dream’, piŋge ‘life time’, ška ‘time’)

GROUP of MEMBERSHIP (brigada ‘brigade’, raśke ‘nation’, śemija ‘family’, ušmo ‘army’)

Adnominal person marking in the nominative and genitive cases follows three out of
four possible patterns. The patterns of adnominal-person marking include: (i) simple
possessive declension (by far the commonest pattern); (ii) genitive-case personal pronoun + possessum in possessive declension, and (iii) genitive-case personal pronoun +
possessum in definite declension. It appears that any instances of the hypothetical pattern (iv) genitive-case personal pronoun + possessum in indefinite declension, is indicative of an incomplete (compound) word.

<pgNo>152</pgNo>
152

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Adpositions
Adpositions are attested for six cases: ablative, inessive, elative, illative, prolative and
locative with the comitative-function adposition marto ‘with’ in an indiscernible case.
Certain adpositions require obligatory possessor indexing, e.g. ejsted́enze ‘of him/
her/it’ (note extended exponence in the case marking), t́enze ‘to him/her/it’ (counter
part of dative form personal pronouns). Several spatial adpositions are also attested as
spatial adverbs, e.g. words such as vakska ‘past’ can be used with implicit complements.
Hence this is an example of a two-argument word which does not require an explicit
complement, and in this way might be compared with transitive verbs that can also
appear with implicit object readings, “to read”, for example (cf. Rueter 2007).
ADPOSITIONS (alo ‘under’, aldo ‘from under’, alga ‘under’; ejs ‘into’, ejse ‘in’, ejste ‘out
of’, ezga ‘along’; ikeĺd́e ‘from in front of’, karšos ‘against’; koŕas ‘according to’; kise
‘for’; malas ‘into the vicinity of’, malaso ‘near’, malasto ‘from near by’, malava ‘in the
vicinity of’; marto ‘with’; pačka ‘through’, peĺd́e ‘from’, peŕkava ‘around’, piĺgaldo
‘from under foot’), t́e% ‘to’, vakss ‘next to’, vaksso ‘next to’, vakssto ‘away from’, vak%
ska ‘past’; udaldo ‘from behind’, trokska ‘across’, vaĺmalga ‘at the window’)

Non-finites
The non-finite morpheme is subject to limited declension, as indicated by the attestation
of a 7-slot paradigm represented in (52).
(52)

+Om+s, +Om+O, +Om+dO, +Om+sO, +Om+stO, +Om+ga,
+Om+ks
+INF+ILL, +INF+LOC, +INF+ABL, +INF+INE, +INF+ELA, +INF+PROL, +INF+TRNSL

Due to the defectivity of the inﬂectional paradigm of this derivation type and its
conformity with relative-space adverb/adposition paradigm patterns, i.e. the dearth
of core-case slots versus abundance of local-case slots, see (53–54), and the syntactic
functions these two word types share, a parallel might be drawn between them.
(53)

al+ov,
al+o,
al+do,
al+ga,
under_POP+LAT, under_POP+LOC, under_POP+ABL, under_POP+PROL,
al+ks
under-side_POP+TRNSL-N

(54)

vaks+s,
vaks+so,
vaks+sto,
vaks+ka
next-to_POP+ILL, next-to_POP+INE, next-to_POP+ELA, next-to_POP+PROL

<pgNo>153</pgNo>
MORPHOLOGY

153

INTRANSITIVE DEVERBAL (bažam% ‘to intend to’, čačom% ‘to be born’, eŕam% ‘to live’,
jakam% ‘to walk, to visit’ jovtńem% ‘to tell’, jutam% ‘to pass’, kemem% ‘to believe’, kor%
tam% ‘to speak’, kulom% ‘to die’, ĺekśem% ‘to breathe’, ĺiśem% ‘to come out’, moĺem% ‘to
move, to go’, pejd́em% ‘to laugh’, pramo ‘to fall’, putom% ‘to place’, sam% ‘to arrive’,
śimem% ‘to drink’, tujem% ‘to depart’, udom% ‘to sleep’, sovam% ‘to enter’, uĺem% ‘to be’)
TRANSITIVE DEVERBAL (čaŕkodem% ‘to comprehend’, id́em% ‘to protect’, iĺt́am% ‘to escort’,

kunsolom% ‘to listen’, lovom% ‘to consider’, lovnom% ‘to read’, ĺed́śt́am% ‘to remember’, mujem% ‘to find’, ńejem% ‘to see’, noldam% ‘to release’, ojmavtom% ‘to placate’,
panžom% ‘to open’, pańem% ‘to drive; to bake’, pŕadom% ‘to finish’, sajem% ‘to take’,
šnam% ‘to praise’, śt́avtom% ‘to raise’, t́ejem% ‘to make’, tonavtom% ‘to teach’, učom% ‘to
wait’, vastom% ‘to meet’, vanom% ‘to watch’, vet́am% ‘to lead’)

The non-finite morpheme in Erzya might readily be seen as an abstract noun with little
if any parameters with which to set it apart from other nouns. The %Oms formative,
most commonly referred to as the illative infinitive or first infinitive, has parallels in two
different forms: the illative and the translative. All semantic uses of the seven cases can
be paralleled with the cases of other common nouns.

Quantifiers
In the definition of case, the 3SG forms %OzO and %OnzO have been rigorously used to
establish paradigms of certain words. Thus there are cardinal numerals and universal
quantifiers which attest case variations, such as nominative, illative, elative, etc. The
partitive function of these quantifiers is shared by the selective interrogative pronouns
in kona ‘which’, the reciprocal-function recursive numeral “one” vejke with possessive
declension, and the binary-function selectors ‘one of X … and … the other of X’. At the
same time there are associative-collective numerals and their corresponding pronouns
(interrogative and indefinite) (see Rueter On quantification in Erzya, forthcoming),
which have been analyzed as possessive-declension comitative forms. Finally, the
minimalizing quantifiers, which, like the associative-collectives, exhibit the presence of
separate cases, an indication of grammaticalization. Unlike the cardinal numerals and
universal quantifiers, the associative-collectives and minimalizing quantifiers require
obligatory controller indexing.
CARDINAL NUMERALS (kolmost 3PL ‘the three of them’, kolmozonok ‘the three of us’),
UNIVERSAL QUANTIFIER (veśemeze ‘all told’, veśemest 3PL ‘all of them’, veśemeŋk 2PL ‘all

of you’, veśemeńek 1PL ‘all of us’),

<pgNo>154</pgNo>
154

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.47

Universal pronoun veśeme ‘all’ in attested case slots of the possessive paradigms
NOM

1SG
1PL
2SG
2PL
3SG

NOM.SG
OTHERS

3PL

Form
veśemem
veśemeńek
veśemet́
veśemeŋk
veśemeze
veśemenze
veśemest

ABL

Form

ILL

NA
NA

NA

NA

NA

NA

NA

NA

1
335
5
34

NA

veśemezeŋk

NA

NA

NA

NA

veśemed́est

Hits

Form

ELA

Hits
1
3

Hits

NA

3

veśemezest

Form

Hits

NA

2

NA
NA
NA

1

veśemstest

1

SELECTIVE INTERROGATIVE PRONOUNS (konast 3PL ‘which of them’, konaŋk 2PL ‘which of

you’, konanok 1PL ‘which of us’),

Table 4.48

1
2
3

PL
PL
PL

Selective interrogative/relative pronoun with partitive reference
associated with plural person indexing
NOM/GEN
ILL
Form
Hits
Form
Hits
konanok
9
konaŋk
22
konast
16
konazost
1

RECIPROCAL PRONOUNS (vejkest%vejkest 3PL ‘each other’, vejkeńek%vejkeńek 1PL ‘each

other’, vejkeŋk%vejkeŋk 2PL ‘each other’),

BINARY PRONOUNS (vejkest … omboćest 3PL ‘one of them … the other’, vejkeŋk …
omboćeŋk 2PL ‘one of you … the other’, vejkeńek … omboćeńek 1PL ‘one of us … the
other’),
ASSOCIATIVE-COLLECTIVE NUMERALS (kolmońest 3PL ‘the three of them’, kolmońenze ‘the

three of them (lit. the three of him/her/it)’),

MINIMALIZING QUANTIFIER (śkamonzo 3SG, śkamozot ‘for you [SG] alone’, śkamodonzo ‘3SG.
ABL.’).

<pgNo>155</pgNo>
MORPHOLOGY

155

Pronouns
Pronouns attesting possessive declension can be divided into 3 groups. There are the
personal pronouns with 11 cases, and their reﬂexive/intensive pronoun counterparts
with only seven (nominative, genitive, dative, ablative, translative, comparative and
abessive). Next come the interrogative pronoun meźe ‘what’, which can be possessed.
Finally, come the definite and indefinite pronouns, such as iśt́amo ‘like this/that’, eŕva
‘each’, ĺija ‘other’, etc., which according to Agafonova (2000: 136–141) can take all
forms of the possessive declension, but this is, in fact, a matter of secondary declension.
Data on personal and reﬂexive/intensive pronouns is of importance in that it allows us
to observe correlations we will want to look back on in section 4.5. ADNOMINAL SYNTAX
AND SECONDARY DECLENSION.
PERSONAL PRONOUNS, OBLIQUE CASES (e.g. ABL: sońd́enze 3SG, mońd́eń 1SG, tońd́et́ 2SG,

mińd́eńek 1PL, si͔ńd́est 3PL, ti͔ńd́eŋk 2PL),

Table 4.49a Dative-case personal pronouns, reﬂexive/intensive pronouns
and reﬂexive/intensive stems (Majority corpus)
P
PRON
Adposition, e.g.
REFL/intensive REFL/intensive
t́enze ‘to him/her/it’ PRON
stem
Plain
Clitic Plain
Clitic
Plain Clitic Plain
Clitic Total
6993 (17,044)
346 (9915
136)
62
NA
300
37
1 SG 6248
2017 (4153)
PL
1798
90
(2136
NA)
7
7
102
13
4067 (10,310)
196 (6243
NA)
43
16
264
35
2 SG 3513
873 (2618)
PL
764
50
(1745
NA)
5
2
47
5
4883 (16,508)
156 (11,625 NA)
72
23
1141
94
3 SG 3397
1293 (4046)
PL
986
57
(2753
NA)
17
NA
213
20
206
48
2067
204 20,126 (54,679)
Total 16,706 895 (34,417 136)

It is necessary that we compare tables (4.49a) and (4.49b). The former contains data
derived from the majority corpus of over 4.5 million words, but it has one pair of cells
which cannot be taken into consideration (ambiguous cells darkened), namely, the 1SG
cells of the adposition t́eń ‘to me’. This cell has a homonym in the genitive form of
the singular proximal demonstrative pronoun, which is also realized as t́eń. Therefore
we must utilize the data available from the minority corpus of approximately 745,000
words, which has been semi-automatically parsed and manually disambiguated. Most
salient is the fact that the corpora attest no instances of the adposition t́enze ‘to him/
her/it’ with an enclitic. The figures in table (4.49a) have additional sums in parentheses,
which indicate extremely high occurrence of unstressed-pronoun usage in 3P, whereas
contrastive stressed pronouns are preferred for “us” with 1P.

<pgNo>156</pgNo>
156

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.49b Dative-case personal pronouns, reﬂexive/intensive pronouns
and reﬂexive/intensive stems (Minority corpus )
P
PRON, e.g.
Adposition, REFL/intensive
REFL/intensive stem,
e.g.
sońenze ‘to e.g. t́enze ‘to PRON, e.g.
him/her/it’
him/her/it’
sońśt́enze ‘to his / eśt́enze ‘to his / her
her / its self

1

Plain
1015
331
610
99
570
13
2638

SG
PL

2

SG
PL

3

SG
PL

Total

Clitic
56
29
24
11
30
NA

150

Plain Clitic Plain
520
NA
13
264
NA
1
908
NA
14
254
NA
NA
1997 NA
10
538
NA
2
4481 0
40

Clitic
NA

4
3
NA

2
NA

9

/ its self

Plain
35
14
45
4
228
40
366

Clitic
5
5
9
NA

24
4
47

Total
1644
648
1613
368
2861
597
7731

In comparing tables (4.49a-b) with (4.50–51) we notice the absence of an unstressed
pronoun space altogether for the abessive slot which is 3P and 2P oriented in the dative
slot. The dative indeed provides an interesting variation, namely, the “giving case”, as
it were, proves to be more of a “receiving” 1SG-oriented case in the contrastive, stressed
pronoun, whereas the unstressed, non-contrastive pronouns show 3SG orientation, cf.
statistics on the genitive-case pronouns in table (4.76).
Table 4.50
Controller
1
SG
PL

2

SG
PL

3

SG
PL

Total

Personal pronouns attested for abessive case in possessive declension
personal pronoun + case + adnominal person
Hits Enclitic attestation Hits Total
mon+t́eme+ń
35
0
35
miń+t́eme+ńek 6
miń+t́eme+ńek+kak 2
8
toń+t́eme+t́
62
0
62
ti͔ń+t́eme+ŋk
11
ti͔ń+t́eme+ŋk+kak
3
14
soń+t́eme+nze 50
soń+t́eme+nze+jak
5
55
si͔n+t́eme+st
31
si͔n+t́eme+st+kak
3
34
195
13
208

REFLEXIVE-STEM PRONOUNS (e.g. PROL: eśkanzo 3SG, eśkast 3PL, eśkan 1SG, eśkat 2SG,

eśkanok 1P),

REFLEXIVE PERSONAL PRONOUNS (e.g. ABE: sońśt́emenze 3SG, mońśt́emeń 1SG, tońśt́emet́ 2SG,

si͔ńśt́emest 3PL, mińśt́emeńek 1PL, ti͔ńśt́emeŋk 2PL),

<pgNo>157</pgNo>
157

MORPHOLOGY
Table 4.51

Reﬂexive personal pronouns attested for abessive case in possessive declension
Simple
stem

Controller
SG

1

reﬂexive

eś+t́eme+ń ~
eśe+vt́eme+ń

PL

2

SG
PL

3

SG
PL

Total

eś+t́eme+nze

Hits
2
0
0
0
1
0
3

personal pronoun + reﬂexive stem + case + adnominal
person
mon+ś+t́eme+ń ~
mon+ś+t́eme+m
miń+ś+t́eme+ńek
ton+ś+t́eme+t́
ti͔ń+ś+t́eme+ŋk
son+ś+t́eme+nze
si͔n+ś+t́eme+st

Hits
95

Enclitic attestation

Hits
0

Total
97

26
93
12
172
58
456

miń+ś+t́eme+ńek+kak

3
0
0
17
4
24

29
93
12
190
62
483

son+ś+t́eme+nze+jak
si͔n+ś+t́eme+st+kak

INTERROGATIVE PRONOUN (meźeze ‘what of his/hers/its’)
Table 4.52

1

SG
PL

2

SG
PL
SG

3
PL

Noun-focus interrogative pronouns in the possessive declension
NOM/GEN
ELA
Form
Hits
Form
Hits
meźem
22
NA
meźeńek
22
NA
meźet́
50
NA
meźeŋk
15
NA
NOM.SG
meźeze
53
NA
OTHER
meźenze
22
meźestenze 1
meźest
38
NA

#### 4.3.3. Drawing conclusions
The parts of speech associated with the possessive declension can be broken into groups
on the basis of case compatibility. Some cases appear to have nearly exclusive association with various parts of speech, i.e. the nominative coding and noun, comparative,
translative and abessive with personal pronouns and reﬂexive pronouns, comitative and
quantifiers, locative with adpositions and relational spatial nouns. But it appears the
inessive, elative, illative and prolative cases are open to the greater part of these word
groups. Therefore it is interesting to see how different parts of speech behave in a spatial
case, such as the illative.
Tables (4.53–58) have been set up to indicate varieties of adnominal-person marking, namely, in tables with sub-letter “a” we will have a word with possessive declension
marking immediately following the illative-case morpheme, and in tables with sub-letter
“b” there will be a personal pronoun in the genitive preceding a head with indefinite il-

<pgNo>158</pgNo>
158

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

lative marking. As we move from high frequency to low, we will note that the tendency
is for the sub-letter “a” type STEM + CX + POSS to surpass the occurrence levels of the
sub-letter “b” type PRON-PERS.GEN + STEM+ CX. Each table has four columns indicating
position of either the individual word form or the genitive-case pronoun and word form.
The first column indicates how many times the item appears as the singular element of
a sentence, whereas the subsequent three columns assume that there are at least two elements in the sentence. The second column indicates how many times the item appears
sentence initially; the third column indicates how many times it appears medially (there
are at least 3 elements in this type of sentence), and the fourth column indicates how
many times the item occurs sentence-finally. At the end and below there is an additional
column and row for providing tallies in bold-face.
Table 4.53a Possessive declension illative laŋgs ‘onto’ Pop+Poss
POR
Single-word Initial Medial Final Total
SG
0
8
245
93
346
1
PL
1
9
93
30
133
2
SG
0
5
212
72
289
PL
0
0
35
13
48
3
SG
0
53
1085
406 1544
PL
0
17
419
116
552
Total
1
92
2089
730 2912
Table 4.53b Possessive declension illative laŋgs ‘onto’ Genitive Pronoun + Pop+Poss
POR
Single-phrase Initial Medial Final Total
1
SG
2
32
131
56
221
PL
1
4
55
17
77
2
SG
1
25
58
20
104
PL
0
5
21
4
30
3
SG
0
74
129
69
272
PL
0
33
75
18
126
Total
4
173
469
184
830

In tables (4.53a) we can see that the adposition laŋgs ‘onto, at’ has a pronounced difference
between 1SG and 3SG attestation in medial position, whereas table (4.53b) actually
indicates a higher instance of 1SG in the same medial position. If we compare this ratio
with the adposition ejs ‘into, up to’ illustrated in tables (4.54a-b) we will notice that the
contrast even in the medial position alone illustrates a difference in person orientation,
i.e. in table (4.53a) a 1 to 5 ratio correlates to a 1 to 10 ratio in table (4.54a). Both (4.53a)
and (4.54a) have relatively low attestation for sentence-initial or final position, whereas
their counterparts in (4.53b) and (4.54b) show higher ratio in initial and final position.

<pgNo>159</pgNo>
MORPHOLOGY

159

Table 4.54a Possessive declension illative ejs ‘into; up to’ Pop+Poss
POR
Single-word Initial Medial Final Total
SG
0
1
55
16
72
1
PL
0
0
11
5
16
2
SG
0
1
52
18
71
PL
0
0
4
3
7
3
SG
0
60
552
190
802
PL
0
16
187
44
247
Total
0
78
861
276
1215
Table 4.54b Possessive declension illative ejs ‘into; up to’ Genitive Pronoun + Pop+Poss
POR
Single-phrase Initial Medial Final Total
1
SG
0
2
14
2
18
PL
0
0
2
3
5
2
SG
0
1
8
2
11
PL
0
0
1
0
1
3
SG
0
13
27
15
55
PL
0
9
16
5
30
Total
0
25
68
27
120

As in the preceding relational spatial derivation laŋgs ‘onto’, and adposition ejs ‘into;
up to’, the word tarka ‘place’ illustrates the same kind of behavior: 3SG prominence in
the morphological expression of person, but unlike them this noun exhibits less contrast
between sentence position.
Table 4.55a Possessive declension illative tarka ‘place’ Noun+Poss
POR
Single-word Initial Medial Final Total
1
SG
0
4
31
15
50
PL
0
0
6
2
8
2
SG
1
3
35
18
57
PL
0
0
5
1
6
SG
0
50
303
190
543
3
PL
0
11
90
31
132
Total
1
68
470
257
796
Table 4.55b Possessive declension illative tarka ‘place’ Genitive Pronoun + Noun+Poss
POR
Single-phrase Initial Medial Final Total
1
SG
0
3
13
6
22
PL
0
0
1
0
1
2
SG
0
3
6
5
14
PL
0
0
1
0
1
3
SG
0
15
20
5
40
PL
0
5
13
5
23
Total
0
26
54
21
101

<pgNo>160</pgNo>
160

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

The deverbal form sams ‘to arrive’ in tables (4.56a-b) provides us with a point in time
expression, something different from the spatial dimensions offered heretofore. While
the total frequency is much lower than the spatial expression, we suddenly notice a lower
contrast between person and position. We can see that the ratios for person and position
in table (4.56a) are reminiscent of the ratios illustrated in the sub-letter “b” tables (4.53–
55), whereas table (4.56b) seems already too low for pertinent reading.
Table 4.56a Possessive declension illative sams ‘to arrive’ Noun+Poss
POR
Single-word Initial Medial Final Total
1
SG
0
11
18
3
32
PL
0
4
10
1
15
2
SG
0
9
16
4
29
PL
0
2
4
0
6
3
SG
0
33
38
16
87
PL
0
11
22
3
36
Total
0
70
108
27
205
Table 4.56b Possessive declension illative sams ‘to arrive’ Genitive Pronoun + Noun+Poss
POR
Single-phrase
Initial Medial Final Total
1
SG
0
0
4
2
6
PL
0
1
0
0
1
2
SG
0
1
0
0
1
PL
0
0
0
0
0
3
SG
0
1
8
0
9
PL
0
2
1
0
3
Total
0
5
13
2
20

Unlike other charts, table (4.57a) has no lexical counterpart for marking person, and
nearly all attestations are for 3SG. This is symptomatic of the fact that the word form
či͔+ze+nze day_N+ILL+POSS-3SG ‘per day’ is actually an expression of duration. This
usage deviates, however, from what was seen in table (4.56a-b) where the deverbal is
also an expression of time, namely, sams ‘to arrive’ is not usually conceived as a process
but as a completed event. Also the absence of a 3PL reading contrasted with the nearly
monolithic 3SG tells us that we might be dealing with an element unique to all kinds of
contexts predictable in literature – an item or phenomenon unique to the universe (see
4.2.3.1.3. THIRD PERSON).

<pgNo>161</pgNo>
MORPHOLOGY

161

Table 4.57a Possessive declension illative či͔ ‘day; sun’ Noun+Poss
POR
Single-word Initial Medial Final Total
SG
0
0
2
0
2
1
PL
0
0
0
1
1
2
SG
0
0
0
0
0
PL
0
0
0
0
0
3
SG
0
8
50
4
62
PL
0
0
0
0
0
Total
0
8
52
5
65

The word źepe ‘pocket’, in tables (4.58a-b), is grouped in the sublexicon for apparel,
but we might choose to reanalyze it as a container, which would correlate better with the
illative usage. For the first time the 3PL reading surpasses that of the 3SG. The correlation
between 1SG and 2SG in medial position is close to that found in all the other tables. The
word źepe ‘pocket’ is also shown to correlate in its ratios with other expressions of nontemporal space.
Table 4.58a Possessive declension illative źepe ‘pocket’ Noun+Poss
POR
Single-word Initial Medial Final Total
12
0
0
10
2
1
SG
1
0
0
1
0
PL
14
0
0
10
4
2
SG
1
0
0
0
1
PL
11
0
0
9
2
3
SG
97
0
2
61
34
PL
0
2
91
43
136
Total
Table 4.58b Possessive declension illative źepe ‘pocket’ Genitive Pronoun + Noun+Poss
POR
Single-phrase
Initial Medial Final Total
1
SG
0
0
1
1
2
PL
0
0
0
0
0
2
SG
0
1
2
0
3
PL
0
0
0
0
0
3
SG
0
0
0
0
0
PL
0
1
0
0
1
Total
0
2
3
1
6

The compatibility of noun, adposition and non-finite stems with illative-case possessive
declension indicates variation in ratios for person, position and morphological versus
lexical marking of adnominal person, all of which point to a high preference for morphological marking of person. The complete absence of a lexical marking strategy for
the item či͔ ‘day’ would appear to indicate the necessity of more work in the matter

<pgNo>162</pgNo>
162

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

of required obligatory person marking. As we may note, however, there were 1SG attestations, as well. This indicates that categorical results should not be sought in this
treatise, instead the treatise can only afford a tentative indication of direction. Person,
for instance, might be illustrated in the auspices of the abessive case, which is almost
entirely devoted to personal and reﬂexive pronouns or the dative, which soars high in
frequency, see tables (4.49–51). Since personal pronouns and reﬂexive pronouns as a
rule observe obligatory adnominal person marking in the oblique cases, these tables have
taken an added feature into consideration – they indicate attestation for enclitic marking,
as well. It is not this feature that is of greatest interest; it is the fact that there is a marked
attestation for 2sg in personal pronouns, whereas the ratio in the reﬂexive pronouns is
reminiscent of what was observed in the illative tables above (4.53–58).
The unique word forms of the majority corpus were filtered for possessive declension compatibility and 27 sublexica were discerned in a manual scan of the hits, which
appeared on a highest-frequency-first-basis. Attestation was partially intuitional, but
comparison of the sublexica was also applied. These results are rendered here with the
sublexica attesting largest distribution appearing in the highest row and the case attesting
the largest distribution in the column furthest left. Of the hypothetical 351 cells representing possible declensions 130 were attested (see table 4.59).
Table 4.59
GEN/

Possessive declension attestation of discernible sublexica
NOM

DAT

ABL

ELA

+
+
+

+
+
+
+

+
+
+
+

+
+
+
+

NA

NA

NA

+
+
+

ILL

INE

PROL

COMP

ABE

TRNSL

LOC

COM

Total

+

+
+

+

NA

NA

NA

NA

NA

NA

+

+

NA

NA

NA

8
8
8
8

OBL

Body
Kin
VT
PronPers

+
+
+
+

Rel
Spat
VI
Reﬂstem

+
+
+
+

+
+
+
NA

+
+

PronReﬂ

+

NA

+

Em
App
Assoc
elder

+
+
+

+
+
+

+
+
+

NA

NA

+
+

NA

+

NA

NA

NA

+

NA

NA

NA

+

+

+

NA

NA

+
+
+

+
+
+

+
+

NA

NA

NA

+

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

+
+
+
+

+

+

+

NA

NA

7
7
7
7

+

NA

NA

NA

NA

+

+

+

NA

NA

6

+

NA

+
+

NA

NA

NA

NA

NA

+
+

+
+

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

6
6
5

+

NA

<pgNo>163</pgNo>
163

MORPHOLOGY

GEN/

NOM

DAT

ABL

ELA

ILL

INE

PROL

COMP

ABE

TRNSL

+

+
+

+

+

NA

NA

NA

NA

NA

NA

NA

NA

COM

Total

NA

NA

NA

NA

5
4

LOC

OBL

POP
min
Q

NA

NA

NA

+

NA

+

+
+

NA

Q
Grp
Tmp
Inter
Pron

+
+
+
+

NA

NA

NA

NA

+

NA

NA

+

NA

NA

NA

+

+
+
+

+

+

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

+
+

+

+

NA

NA

NA

NA

NA

NA

NA

NA

UQ
Dom
Meas
PRP
Top
deriv

+
+
+
+
+

+
+
+
+
+

NA

NA

+

NA

NA

NA

NA

NA

NA

NA

NA

+

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

+

NA

NA

NA

NA

NA

NA

+
+

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

3
3
3
3
3

Actors

+

+

+

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

3

Tools
Phys
Total

+
+
25

+
+
20

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

17

13

13

12

8

7

6

3

3

2

1

2
2
130

4
4
4
4

(Short notation used in table (4.59): App = apparel; Assoc elder = associative elder term;
Body = body parts; Meas = measurements; Dom = domestic animals; Em = product or
emission; Grp = group of membership; Inter Pron = Interrogative pronoun; min Q =
minimalizing quantifier; Phys = physical and mental states; Rel = relational spatial; Spat
= spatial setting; Tmp = temporal setting; Top derive = proper-name Topic derivation;
UQ = universal quantifier)

Obligatory adnominal-person marking was attested in four parts of speech, nouns,
quantifiers, pronouns and adpositions. In the grammars items with obligatory adnominalperson marking are usually shown to have smaller morphological case inventories,
for variation (consult table 4.59), otherwise refer to listing of sublexica with simple
examples.

<pgNo>164</pgNo>

### 4.4. Paradigm defectivity in Erzya possessor indexing 4.4.1. Background
Erzya grammarians of the past century have used the notion KIN TERM to help explain the
special marking used on genitive and dative-case possessa in contexts where 1SG and 2SG
cross-referential morphemes would be expected, see special forms below. Typologically
speaking, kin terms as possessa could conceivably be the targets of special forms, as they
appear extremely high (cf. 1.1 THE INALIENABILITY HIERACHY), forwarded in Siewierska
(2004: 143) and provided in the hierarchies of section 1. (See also Rijkhof, inalienables,
2002: 86–92.) This in combination with the saliency of the 1st and 2nd person pronouns
(cf. 1.2 SALIENCE HIERARCHIES OF ACCESSIBILITY) might be reﬂected in morphological
marking (cf. 1.3 THE ACCESSIBILITY MARKING SCALE).
Genitive
%Oń +POSS-1SG>[KIN]GEN
%Ot́ +POSS-2SG>[KIN]GEN
Dative
%Neń +POSS-1SG>[KIN]DAT
%Teń +POSS-2SG>[KIN]DAT

Morphologically speaking, we can immediately observe that the morphemes used in 1SG
contexts are identical to the forms of their corresponding cases in the indefinite declension. A little knowledge of Erzya language variation in the marking of the oblique cases
of the definite declension, e.g. the Shoksha-Drakino dialect groups, as well as some of
the Sura subdialects, specifically Shugurova (see Cygankin 1961: 347), will show a
definite singular genitive form in %t́ and even definite singular dative forms in %t́i(j). The
question then presents itself as to why these forms should be treated as anything other
than what they appear to be. Is there any reason that a possessum representing a referent
from the top of the animacy hierarchy (kin term) might be allowed to go unmarked when
its controller/possessor is from even higher on the same hierarchy, i.e. the pronouns are
higher up on the hierarchy than nouns, and it is the 1SG and 2SG we are talking of here.
In the Erzya sub-dialect spoken in Orkino, originally documented in Šaxmatovʺ's
collection of folklore and grammatical description, the notion of KIN TERM (Šaxmatovʺ
1910: 797–798) is first forwarded to explain variation in the choice of genitive and
dative forms of the possessa marked with 1SG and 2SG cross-referential morphemes.
Šaxmatovʺ provides a minimal pair cross-referential marking strategy for the word ava
‘lady; mother’, by which the object-marked possessum with 2SG cross-referential marking varies in form according to the parametric feature [±KIN] of the referent, see (55a-b).

<pgNo>165</pgNo>
MORPHOLOGY

165

(55) a. mon
večk+sa
ava+t
I_PRON-PERS-1SG.NOM love_V+IND.PRES.PRED-1SG>3SG lady_N+POSS-2SG
(Šaxmatovʺ 1910: 798) ‘I love your old lady.’
b. mon
večk+sa
ava+t ́
I_PRON-PERS-1SG.NOM love_V+IND.PRES.PRED-1SG>3SG mother_N+POSS-2SG>[KIN]GEN
(Šaxmatovʺ 1910: 798) ‘I love your mother.’

Upon establishing the parametric distinction [±KIN], Šaxmatovʺ then exhibits a set
of kin terms featuring special genitive and dative forms in the cross-referential person
markers of the 1SG and 2SG. This parametric distinction has been retained in subsequent
descriptions of the language, although there is some variation in its attestation. Evsevʹev
(1963: 111–112), for example, gives a slightly slacker notion of kin or someone closely
associated/related to the speaker in conjunction with the genitive-case possessa of the
1SG possessor, but leaves the 2SG marking open to all nouns. This would imply that
the well-travelled Evsevʹev, originally from a Chuvash-Erzya home in Malye Karmaly
in present Chuvashia (Erzya: ćarmun) where an Alatyr'-type dialect is spoken, cf.
Keresztes 1999: 23, would have been familiar with both forms to some extent and that he
would have recognized the alleged 2SG forms as consistent with definite markers. Thus
Evsevʹev includes the form ĺišme+t́eń with the contextual gloss horse_N+POSS-2SG>DAT,
even though a second gloss horse_N+ DAT.DEF.SG would have well suited it in sentenceinitial topic position.
(56)

ĺišme+t́eń
maks+i͔ń
pińeme+t́
horse_N+POSS-2SG>DAT give_V+IND.PRETI.PRED-1SG oats_N+NOM.PL
horse_N+DAT.DET.SG
(Evsevʹev 1963: 112) ‘The/your horse, I gave [him] oats.’

The contention is that Evsevʹev did not recognize the 2SG forms for anything other than
a definite form, something belonging to the shared knowledge of the speaker and the
addressee. Varieties of the Erzya language where the special 2SG forms of the genitive
and dative possessive declensions of the literary language might be homonymous with
corresponding forms of the definite declension can be attested in the Shugurova dialect (a
Sura-dialect, cf. Cygankin 1961: 294–395) and the Drakinski dialect (Drakino-Shoksha,
cf. Âkuškin 1961: 197–293). At this time, it will serve us well to familiarize ourselves
with a well documented variant of an Alatyr' dialect spoken in Nizhnep’yanski.

<pgNo>166</pgNo>

#### 4.4.2. A dialect attesting [±NUMBER] and [±KIN] parameters
The Nizhnep’yanski dialect attests parametric features in its possessive declension
including [±NB] and [±KIN] (cf. Nadʹkin 1968: 3–198). Nadʹkin describes a dialect in
which all singular persons share a possessive declension distinction observed in 3SG of
the literary language, i.e. they distinguish NOM.SG from NOM.PL, GEN.SG, GEN.PL, see table
(4.60).
Table 4.60

POR

1

2

3

SG

SG

SG

Nizhnep’yanski dialect forms for kudo ‘house’, skal ‘cow’
and t́ejt́eŕ ‘daughter’ possessa in the nominative and genitive
of the possessive declension (preliminary)
Possessa
NOM.SG
NOM.PL
GEN.SG
GEN.PL
kudo+m
kudo+n
kudo+n
kudo+n
skal+om

skal+un

skal+un

skal+un

t́ejt́eŕ+em
kudo+t

t́ejt́eŕ+iń
kudo+nt

t́ejt́eŕ+iń
kudo+nt

t́ejt́eŕ+iń
kudo+nt

skal+ot

skal+unt

skal+unt

skal+unt

t́ejt́eŕ+et́
kudo+zo

t́ejt́eŕ+ińt́
kudo+nzo

t́ejt́eŕ+ińt́
kudo+nzo

t́ejt́eŕ+ińt́
kudo+nzo

skal+zo

skal+unzo

skal+unzo

skal+unzo

t́ejt́eŕ+ze

t́ejt́eŕ+inze

t́ejt́eŕ+inze

t́ejt́eŕ+inze
(cf. Nadʹkin 1968: 60–61)

According to Nadʹkin, these genitive singular forms are homonymous with the genitive
and nominative plural forms. Hence, although we will have to take Nadʹkin's word for
this interpretation in the example for the 1SG kudo+n house/home_N+POSS-1SG, it becomes obvious in the second and third persons that the forms skal+unt cow_N+POSS-2SG
and t́ejt́eŕ+inze daughter/girl_N+POSS-3SG, which without context might be glossed as
plural possessa, are used here to indicate singular possessa. The interpretation skal+unt
cow_N+POSS-2SG>GEN.SG emanates from the fact that it is used in a possessive construction to mark the possessor and the possessum of said construction is in turn marked
with a 3SG cross-referential marker in %OzO rendering odar+zo udder_N+POSS-3SG>NOM.
SG. The interpretation t́ejt́eŕ+inze daughter/girl_N+POSS-3SG>GEN.SG is licensed by object
marking on the finite verb, indicative of a singular object.

<pgNo>167</pgNo>
MORPHOLOGY

(57)

kudo+n
vaks+ne
house_N+POSS-1SG>GEN next-to_POP+INE
(Nadʹkin 1968: 60) ‘next to my house’

(58)

skal+unt
odar+zo
house_N+POSS-2SG>GEN udder _N+POSS-3SG>NOM.SG
(Nadʹkin 1968: 60) ‘your cow's udder’

(59)

jomavt+i͔źe
t́ejt́eŕ+inze
lose_V+IND.PRETI.PRED-3SG>3SG daughter_N+POSS-3SG>GEN
(Nadʹkin 1968: 60) ‘he lost his daughter’

167

With regard to kin terms, Nadʹkin (1968: 61) specifies that the term pat́a ‘older sister’
has two different forms as an object when there is cross-referential marking for a 1SG
possessor. Whereas the explicit marking of the forms pat́a+ń older-sister_N+POSS1SG>[KIN]GEN.SG and pat́a+n older-sister_N+POSS-1SG>KIN.GEN.PL are accompanied by
object cross-referencing on the verbs, grammatical number in the possessa of the 2SG
and 3SG is implicit and disambiguation is dependent upon the object cross-referencing
strategy on the finite verbs, see (60–62).
(60) a. večk+sak
pat́a+ń
love_V+IND.PRES.PRED-2SG>3SG older-sister_N+POSS-1SG>[KIN]GEN.SG
(Nadʹkin 1968: 61) ‘you love my older sister’
b. večk+si͔
pat́a+n
love_V+IND.PRES.PRED-2SG>3PL older-sister_N+POSS-1SG>GEN.PL
(Nadʹkin 1968: 61) ‘you love my older sister’
(61) a. večk+sazo
pat́a+nt
love_V+IND.PRES.PRED-3SG>3SG older-sister_N+POSS-2SG>GEN
(Nadʹkin 1968: 61) ‘he loves your older sister’
b. večk+si͔ńźe
pat́a+ nt
love_V+IND.PRES.PRED-3SG>3PL older-sister_N+POSS-2SG>GEN
(Nadʹkin 1968: 61) ‘he loves your older sisters’
(62) a. večk+sak
pat́a+nzo
love_V+IND.PRES.PRED-2SG>3SG older-sister_N+POSS-3SG>GEN
(Nadʹkin 1968: 61) ‘you love his/her older sister’
b. večk+si͔
pat́a+nzo
love_V+IND.PRES.PRED-2SG>3PL older-sister_N+POSS-3SG>GEN
(Nadʹkin 1968: 61) ‘you love his/her older sisters’

<pgNo>168</pgNo>
168

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

It can therefore be assumed that in the Nizhnep’yanski sub-dialect, and perhaps other
variants of the language, kin-term parameters of the genitive case apply only to the 1SG
marking strategy, and then only when the referent is distinct – singular. In a language
variant where special 1SG marking strategies become apparent only at the juncture of two
high points of the animacy hierarchy, i.e. a 1SG possessor, on the one hand, and a distinct/
singular kin-term referent, on the other, such that KIN TERM might best be regarded as a
two-argument noun, such as those found in deverbal ACTOR NAMES, one might readily
conclude that genitive forms, which are identical to those in the indefinite declension,
actually are indefinite declension forms.

#### 4.4.3. Distinct common-noun referents indefinite genitive forms
in literature
Hypothetically, one would need to find contexts in which the possessum referent is high
on the animacy hierarchy and distinct. One would, preferably, also hope to find contexts
which were not1SG-oriented. In the language of Erzya literature such contexts can be
attested, see (63–64).
(63)

vit́ste
meŕ+em+s,
ĺubaša
a
pek
direct_A.ELA say_V+INF+ILL Lyubasha_PRP.NOM.SG not_PRT-NEG much_ADV
večk+eĺiźe
si͔ŕe
pat́a+ńt́,
love_V.IND.PRETII.PRED-3SG>3SG old_A.ABS elder-sister_N+GEN.DEF.SG
śe+ks
a
pek
that_PRON-DEM-DIST+TRNSL not_PRT-NEG much_ADV
kunsolo+ś+kak
ejse+nze.
viška
listen-to_V+IND.PRETI.PRED-3SG+CLT in_POP.INE+POSS-3SG. litte_A.ABS
piŋg+ste
t́et́a+zo
ĺija+sto
age_N+ELA father_N+POSS-3SG>NOM.SG other_PRON-DEF+ELA
́
kadn+i͔ĺiźe
ašt́e+m+e
si͔ŕe
pata+ń
leave_V+IND.PRETII.PRED-3SG>3SG sit_V+INF+LOC old_A.ABS elder-sister_N+GEN
ejkakš+t+ne+ń
marto.
child_N+PL+DEF.PL+GEN with_POP.
(Abramov 1974: 54) ‘Frankly speaking, Lyubasha didn’t like the [her] much, [and]
therefore she didn’t listen to her much. In [Lyuba's] childhood her[Lyuba's] father
would leave her[Lyuba's] to sit with [Lyuba's] aunt's children on occasion.’

<pgNo>169</pgNo>
MORPHOLOGY

(64)

169

markin+t+ne+ńeń
ašt́e+m+e
šabra+ń
veĺe+ste
Markin_PRP+PL+DEF.PL+DAT sit_V+INF+LOC neighbor_N.GEN village_N+ELA
tago
sa+ś
śeŕoga+ń
ava+nzo
again_ADV come_V.IND.PRETI.PRED-3SG Seryoga_PRP+GEN mother_N+POSS-3SG
sazor+oń
t́ejt́eŕ+eś
frośa.
little-sister_N+GEN daughter_N+NOM.DEF.SG Frosya_PRP.NOM.SG.
(Martynov 1984:) ‘Once again, Frosya, the daughter of Seryoga's mother's little sister
came from the neighboring village to stay with the Markins.’

In both examples indefinite genitive forms are used on nouns indicating kin[+DISTINCT]
referents, which contextually would have been possessa eliciting 3SG controller/possessor indexing. So what were the bases for Šaxmatovʺ's hypothesis?

#### 4.4.4. Orkino
Šaxmatovʺ (1910) introduced a [±KIN] parameter for distinguishing the semantics
involved in morphological variation attested for kin-term possessa. In the subdialect
spoken in Orkino, definite genitive singular marking in the oblique cases involves the
morpheme %Ońt́ and, in addition to that, there are also %Ot́ markers attested for the
2SG possessor-index genitive form of kin terms. Šaxmatovʺ was able to enumerate
several genitive-form possessa of 2SG possessors, e.g. avat́ ‘your mother's’, t́at́at́ ‘your
father's’, pat́at́ ‘your elder sister's’, suvaxat́ ‘your match-maker's’, sazyryt́ ‘your little
sister's’, sazyrnyt́ ‘your little sister's’, ĺaĺat́ ‘your elder bother's’, mačkat́ ‘your motherin-law's’, bat́kat́ ‘your father-in-law's’, but the ones actually indicated in context are
of specific interest. They are given in tables (4.61), below, with reference to the three
syntactic functions of the genitive as discussed in section (4.1. CORE CASES), i.e. object of
the finite verb, adposition complement and marker of the possessor.
Table 4.61
Gloss

The 2SG possessor and kin terms in Orkino according to Šaxmatovʺ
NOM.SG
GEN.SG (object)
GEN.SG (adposition
GEN.SG (possessor)
complement)
mother
avat
avat́
avat́
NA
lady [-KIN]
avat
avat
NA
NA
father
t́at́at
t́at́at́
t́at́at́
NA
son-in-law
sodamyt
sodamyt́
sodamyt́
NA
husband's younger NA
NA
aĺńit́
NA
brother or
brother-in-law
younger brother
NA
NA
bratyt́
NA
son
NA
ćorat́
NA
NA
elder brother
NA
NA
NA
ĺaĺat́
(cf Šaxmatovʺ 1910: 797–798)

<pgNo>170</pgNo>
170

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

The two tables provide deviant illustrations of the [±KIN] parameter. The illustration
of the 2SG table (4.61) gives one the impression that there actually might be evidence
in support of Šaxmatovʺ's proposal for a [±KIN] parameter. The enumeration for kin
terms with 2SG marking seems to provide a maximal variety, but the same cannot be
said of the 1SG enumeration. The 1SG enumeration as seen in table (4.62) may be further
delimited with a parameter indicating either [+ELDER-THAN-1SG] or [+DISTINCT], which
would parallel the findings of Nadʹkin in the Nizhnep’yanski dialect. Thus the question
to be answered is do so-called kin-term distinctions attested by Šaxmatovʺ for 2SG
genitive marking strategies correlate to those of 1SG. Contexts provided by Šaxmatovʺ
do exemplify patterns for the three functions of the genitive, but there is no reference
made to possessa, i.e. all instances given are inadvertently singular.
Table 4.62
Gloss

The 1SG possessor and kin terms in Orkino according to Šaxmatovʺ
NOM.SG
GEN.SG
GEN.SG
GEN.SG
GEN
(object)
(adposition
(possessor) (indefinite)
complement)

mother
father
elder sister
grandmother
elder brother
grandfather
elder brother (diminutive)
mother (diminutive)
younger sister
younger brother
wife
child
son-in-law

avam
t́at́am
NA
NA
NA

pokščam

avań
t́at́ań
pat́ań
babań
ĺaĺań

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA
NA
NA
NA
NA

sazyrym
bratym
koźajkam
äjd́im
sodamym

avań ~ avam
t́at́ań

pat́kam
afkam

NA
NA

NA

avań
t́at́ań
ĺaĺań
pokščań

NA

NA

afkań

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

NA

na

Šaxmatovʺ indicates that the genitive forms of some kin-term possessa with 1SG crossreference marking are homonymous with that of the indefinite genitive forms of the same
words. In the table it will be observed that such a statement only applies to referents
with an [+ELDER-THAN-1SG/DISTINCT] feature in the role of object, whereas the syntactic
role of adpositional complement appears to be volatile with regard to this parameter, and
the role of possessor is fully unattested.
Inspection of the dative forms indicates that they can be given parallel treatment,
i.e. 2SG forms in %t́ij, as indicated by Šaxmatovʺ, have no [±ELDER-THAN-POSSESSOR] parameter. Thus we observe t́at́a+t́ij father_N-KIN+POSS-2SG>DAT ‘to your father’, ava+t́ij
mother_N-KIN+POSS-2SG>DAT, suvaxa+t́ij match-maker/mother-in-law_N-KIN+POSS2SG>DAT, and sazyr+yt́ij little-sister_N-KIN+POSS-2SG>DAT. In the presentation of 1SG
possessa, it will be noted, the word forms quoted are taken from the kin terms adhering
to the [+ELDER-THAN-POSSESSOR] /[+SINGULAR/DISTINCT] parameter, e.g. ava+ńiń mother_NKIN-ELDER+POSS-1SG>DAT, pat́a+ńiń elder-sister_N-KIN-ELDER+POSS-1SG>DAT, afka+ńiń

<pgNo>171</pgNo>
MORPHOLOGY

171

mother_N-KIN-ELDER.DIM+POSS-1SG>DAT, and t́at́ka+ńiń father_N-KIN-ELDER.DIM+POSS1SG>DAT. Hence, in Orkino the 1SG markers for kin terms with the feature [+ELDER-THANPOSSESSOR] in both genitive and dative are attested as being the homonymous with those
of the indefinite genitive and dative respectively, see discussion in section 4.2.1.1. CORE
CASES.

#### 4.4.5. Recent grammatical presentation
of the possessive declension
In the most recent morphology of the Erzya language, Aduškina (2000: 89–102)
provides a description of the possessive declension. She provides possessive declension
charts for all persons (here I will cite only three), which indicate an absence of genitive
and dative forms in all but the 3SG declension, see tables (4.63a-c).
Table 4.63a Possessor indexing on the possessum (possessor = moń ‘1SG’,
and possessa in vaĺma ‘window’, veĺe ‘village’)
Singular
Plural
NOM
vaĺma+m
veĺe+m
vaĺma+n
veĺe+ń
GEN
–
–
–
–
DAT
–
–
–
–
ABL
vaĺma+do+n
veĺe+d́e+ń
INE
vaĺma+so+n
veĺe+se+ń
ELA
vaĺma+sto+n
veĺe+ste+ń
ILL
vaĺma+zo+n
veĺe+ze+ń
PROL
vaĺma+va+n
veĺe+va+ń
COMP
vaĺma+ška+n
veĺe+ška+ń
ABE
vaĺma+vtomo+n
veĺe+vt́eme+ń
(Aduškina 2000: 97)
Table 4.63b Possessor indexing on the possessum (possessor = toń ‘2sg’,
and possessa in vakan ‘bowl’, paŕ ‘barrel’)
NOM
vakan+ot
paŕ+et́
GEN
–
–
DAT
–
–
ABL
vakan+do+t
paŕ+d́e+t́
INE
vakan+so+t
paŕ+se+ t́
ELA
vakan+sto+t
paŕ+ste+ t́
ILL
vakan+oz+ot
paŕ+ez+et́
PROL
vakan+ga+t
paŕ+ga+t́
COMP
vakan+ška+t
paŕ+ška+t́
ABE
vakan+tomo+t
paŕ+t́eme+t́
(Aduškina 2000: 97–98)

<pgNo>172</pgNo>
172

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

While the dash in the 1SG and 2SG genitive and dative cannot be understood as ditto
marking – that would mean that the genitive and dative are construed as homonyms of
the nominative – we can assume that there is a conﬂation of nominative and genitive case
forms in all but the 3SG.
Table 4.63c Possessor indexing on the possessum (possessor = sonze ‘3sg’,
and possessa in ĺom ‘meadow’, ĺem ‘name’)
NOM
ĺom+ozo
ĺem+eze
ĺom+onzo
ĺem+enze
GEN
ĺom+onzo
ĺem+enze
DAT
ĺom+onsteń
ĺem+ensteń
ABL
ĺom+do+nzo
ĺem+d́e+nze
INE
ĺom+so+nzo
ĺem+se+ nze
ELA
ĺom+sto+nzo
ĺem+ste+nze
ILL
ĺom+oz+onzo
ĺem+ez+enze
PROL
ĺom+ga+nzo
ĺem+ga+nzo
COMP
ĺom+ška+nzo
ĺem+ška+nzo
ABE
ĺom+tomo+nzo
ĺem+t́eme+nze
(Aduškina 2000: 98)

This conﬂation of nominative and genitive is best observed in table (4.64), where
Aduškina, illustrates the ability of Erzya to indicate possessor function in words with
possessor indexing. Here she also indicates a distinction for grammatical number in the
1SG marking of the possessor, i.e. %Om indicates singular and %ON plural possessa.
Table 4.64
POR

1

SG

2

SG

PL

PL

3

SG
PL

Distinction for grammatical number of possessed possessa
apparent only in 1SG marking
PossessorPossessum of
PossessorPossessum of possessa
function
possessum
function
possessum
possessa
t́ejt́eŕ+em
t́ejt́eŕ+eńek
t́ejt́eŕ+et́
t́ejt́eŕ+eŋk
t́ejt́eŕ+enze
t́ejt́eŕ+est
‘daughter’

vajgeĺ+eze

voice_N+POSS3SG>NOM.SG

t́ejt́eŕ+eń
t́ejt́eŕ+eńek
t́ejt́eŕ+et́
t́ejt́eŕ+eŋk
t́ejt́eŕ+enze
t́ejt́eŕ+est
‘daughter’

oršamo+st

clothing_N+POSS-3PL
(cf. Aduškina 2000: 94)

<pgNo>173</pgNo>
MORPHOLOGY

173

Since the word t́ejt́eŕ ‘daughter; girl’ might readily be construed as depicting a twoargument referent, a kin term, Aduškina's demonstration of grammatical number
appears to be in conﬂict with the special genitive forms of the 1SG and 2SG possessor
indices, see restatement of these.
Genitive
%Oń +POSS-1SG>[KIN]GEN
%Ot́ +POSS-2SG>[KIN]GEN

Attestation of one disambiguous gloss (tet́ á ‘father’)
Treatment of kin-term phenomena is extremely limited in the grammars of the language,
which is probably due to the disparity of the referent sets indicated by the 1SG and 2SG
persons. Hence, where proper nouns are sufficiently distinct to allow for indefinitemarking strategies (see section 4.2.1.1.), kin terms, especially distinct ones, can also
allow for indefinite marking, even when the contextual controller/possessor is lower on
the animacy hierarchy than 1SG.
The majority corpus attests to a high frequency of indefinite genitive forms of the
two distinct two-argument kin terms ava ‘mother’ 1222 hits and t́et́a ‘father’ 932 hits,
the former of which can also be glossed as a one-argument noun ‘woman’. Whereas
the word form t́et́a+ń father_N+GEN has high-frequency attestation with postpositions
and possessa, e.g. t́et́a+ń marto ‘with [my] father’ 51 hits, t́et́a+ń či͔ńenze ‘the smell
of [my] father’ 20 hits, there are only 3 hits for the sequence t́et́a+m marto ‘with my
father’, which is the highest attestation of a nominative-equivalent form with a function
attributed to the genitive. Interestingly enough these three hits come in publications
written by speakers of Alatyr'-type dialects (Doronin 1993; Bargova 1997). Could these
be instances of over-zealous proof-readers with different dialect backgrounds, or should
they be considered hypercorrect forms attributed to the authors themselves? The special
2SG genitive form in t́et́a+t́ has a slightly lower attestation, e.g. t́et́a+t́ marto ‘with your/
the father’ 20 hits, t́et́a+t́ či͔ńeze ‘the smell of your/the father’ 14 hits, and there are only
2 hits for the sequence t́et́a+t marto ‘with your father’, both from Doronin (1996, 2001),
who, in this instance, would be using the forms of his own dialect, which do not feature
a special 2SG form.

In conclusion
The [±KIN] parameter, hypothesized by Šaxmatovʺ in 1910 in his treatise of the
Orkino dialect, is still attested in grammar writing of today. Whereas both 1SG and 2SG
marking can be readily associated with indefinite and dialect-form definite declensions,
respectively, there are still matters to be researched. To what extent can nouns indicating
distinct, high-animacy referents yet not proper nouns or specifically kinship terms
be declined in indefinite word forms? What are the actual dialects and sub-dialects

<pgNo>174</pgNo>
174

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

where genitive and dative marking receive special declensional forms? Are the same
distributions applicable to 1SG genitive marking applicable to the dative as well? How
can these differences/similarities in distribution be compared to those of 2SG, which, as
we have noted, is not attested in all the same language variants as those where special
1SG marking obtains.

### 4.5. Adnominal syntax and secondary declension
This section describes the morphological phenomena involved in Erzya secondary declension. The discussion developed sets out to illustrate that, whereas various modifiers can become main items in an NP when the contextually predictable head noun is
dropped, there are two basic strategies for marking MWN (modifiers without nouns): (i)
ZERO marking, and (ii) SOD (Speaker-Oriented Demonstrative) marking. Grammars of
Erzya present both of these strategies to different degrees, but usually their treatment of
MWN is delivered in several separate sections with no connections drawn. The treatment
of genitive-case personal pronouns has been associated with SOD strategies in Evsevʹev's
grammar of Erzya (1963[1928/29]), whereas Agafonova (2000) presents personal pronouns and reﬂexive/intensive pronouns with ZERO marking. Upon closer scrutiny it becomes apparent that Agafonova's reﬂexive/intensive pronoun charts include members
from two different paradigms; the reﬂexive/intensive paradigms are intermingled with
genitive + SOD strategies. (Cf. GMYa 1962 I: 232; GMYa 1980: 267; Mosin & Bajushkin
1983: 116; Pall 1996: 18-19; Zaicz 2006) Thus after presenting background information
on secondary declension, and demonstrating that both marking strategies are attested
with locative modifiers, I provide an overview on the compatibility of various modifier
types with secondary declension. And this I follow up with a morphological inspection
of the genitive-form personal and reﬂexive/intensive pronouns as rendered in MWN or
secondary-declension forms.

#### 4.5.1. Background
In my article ON QUANTIFICATION IN THE ERZYA LANGUAGE (Rueter, forthcoming), I have
noted that Erzya nominal-syntax structure entails symmetric marking of case. Case
marking in turn requires the choice of one declension type from a selection of three,
whereupon it is rendered with postposed orientation on the phrase-final head, or in the
absence of this constituent, on the final constituent of the phrase. Thus, in addition to the
simple noun phrase consisting of only a head noun, the Erzya NP can also be represented
by numerous combinations of premodifiers with and without an NP head. First let us
examine the simple head-noun NPs and NPs with single modifier, see (65).

<pgNo>175</pgNo>
MORPHOLOGY

(65)

175

kudo+ś
house/home_N+NOM.DEF.SG
‘the/that/this house/home’

Head nouns can be preceded by single modifiers representing adjectives, quantifiers,
spatial modifiers and determiners.
Adjective + Noun + Cx
(66)

pokš
kudo+ś
big_A.ABS house/home_N+NOM.DEF.SG
‘the/that/this big house’

(67)

jakśt́eŕe kudo+ś
red_A.ABS house/home_N+NOM.DEF.SG
‘the/that/this red house’
Quantifying modifier + Noun + Cx

(68)

źaro
vina+ś
that-much_Q.ABS liquor_N+NOM.DEF.SG
‘the much liquor’
Spatial modifier + Noun + Cx

(69)

oš+so
kudo+ś
town_N+INE house/home_N+NOM.DEF.SG
‘the/that/this house in town’
Determiner + Noun + Cx

(70)

iśt́amo
kudo+ś
such_PRO-DEF.ABS house/home_N+NOM.DEF.SG
‘such a house’

(71)

t́e
kudo+ś
this_PRO-DEM-PROX.ABS house/home_N+NOM.DEF.SG
‘this house’

<pgNo>176</pgNo>
176
(72)

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
ńe
kudo+t́+ńe
this_PRO-DEM-PROX.ABS house/home_N+PL+DEF.PL.NOM
‘these houses’
Genitive modifier + Noun + Cx

(73) a. vańa+ń
kudo+ś
Vanya_PRP+GEN house/home_N+NOM.DEF.SG
‘Vanya's house’
b. čuvto+ń
kudo+ś
wood_N+GEN house/home_N+NOM.DEF.SG
‘the/that/this wooden house’
c. sonze
kudo+ś
he/she/it_PRON-PERS-3SG.GEN.POSS-3SG house/home_N+NOM.DEF.SG
‘the/that/this wooden house’

In examples (66–73) we can observe simple modifier structures in:
NP = N, A + N, Q + N, SPATIAL + N, DET + N and GEN-ATTR + N

Alternate ordering of head and modifier(s) will induce the addressee to perceive a complete sentence, although in context NP looking sequences can also be interpreted as complete sentences. Hence the upper-case letters in (76–77) indicate non-neutral, perhaps
focus, predicate position.
(74)

kudo+ś
pokš
house/home_N+NOM.DEF.SG big_A.NOM.SG
‘the/that/this house [is] big.’

(75)

kudo+ś
oš+so
house/home_N+NOM.DEF.SG town_N+INE
‘the/that/this house [is] in town.’

(76)

POKŠ
kudo+ś
big_A.NOM.SG house/home_N+NOM.DEF.SG
‘[now] this house is BIG’

(77)

OŠ+SO
kudo+ś
town_N+INE house/home_N+NOM.DEF.SG
‘[now] this house in IN TOWN’

<pgNo>177</pgNo>
MORPHOLOGY

177

Let us now observe a combination including both spatial and adjectival modifiers. Here
it will be observed that the adjective directly precedes the NP head, and that the spatial
modifier is also preposed in Erzya, preceding the adjective. The inessive marking in the
locative modifier is indicative of an inessive NP ošso ‘in town’ that premodifies the noun
phrase pokš kudoś ‘the big house’.
(78)

oš+so
pokš
kudo+ś
town_N+INE big_A.ABS house/home_N+NOM.DEF.SG
‘the/that/this big house in town’

Noun Phrase Constituent Ordering
The basic constituent ordering in the noun phrase can be outlined as determiner +
quantifier + adjective + noun. This outline may appear oversimplified, but it seems
to address a large portion of noun phrases in the Erzya corpora. Thus symmetry in NP
expansion strategies goes generally uncompromised, i.e. the modified NPs can be further
modified with quantifiers, determiners and even NPs or adpositional phrases in modifiercase forms (e.g. GEN, INE, ELA, PROL, COMP, ABE, TRNSL, LOC). Adjectives can co-occur with
quantifiers or determiners or both, see (79–81).
(79) a. kavto
pokš
kudo+so
two_NUM-CARD.ABS big_A.ABS house/home_N+INE
‘in two big houses’
b. kavto
pokš
kudo+t́+ńe+se
two_NUM-CARD.ABS big_A.ABS house/home_N+PL+DEF.PL+INE
‘in the/those/these two big houses’
(80) a. t́e
pokš
kudo+so+ńt́
this_PRON-DET.ABS big_A.ABS house/home_N+INE+DEF.SG
‘in this big house’
b. ńe
pokš
kudo+t́+ńe+se
these_PRON-DET-PL.ABS big_A.ABS house/home_N+PL+DEF.PL+INE
‘in these big houses’
*(81) a. t́e
kavto
pokš
kudo+so+ńt́
this_PRON-DET-SG.ABS two_NUM-CARD.ABS big_A.ABS house/home_N+INE+DEF.SG
‘in the/that/this two big house’

<pgNo>178</pgNo>
178

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
b. ńe
kavto
pokš
kudo+t́+ńe+se
these_PRON-DET-PL.ABS two_NUM-CARD.ABS big_A.ABS house/home_N+PL+DEF.PL+INE
‘in the/those/these two big houses’

In the examples above the grammatical category of number has an inﬂuence on the distribution of determiners, quantifiers and the remainder of the NP. A numeral (two and
above) can co-occur with a head in an indefinite declension form, or it can appear with a
head in a definite declension form, i.e. the NP kavto kudoso ‘in two houses’ differs from
the NP kavto kudot́ńese ‘in the two houses’ in matters of definiteness. Since definiteness
is an entailment of demonstrative pronouns, it will be noted that quantifiers indicating
numbers larger than one can only co-occur with the plural demonstrative pronoun ńe
‘these (anaphoric)’ and not its singular counterpart t́e ‘this’, see (81).
Another qualification of constituent order addresses the genitive attributes, usually indicating material and spatio-temporal source, purpose, and meronymy. Both adjectives and genitive attributes can be used separately as modifiers, but when they co-occur,
the symmetric strategy assists greatly in disambiguation, see (82–85), i.e. the ordering
kośke tumoń ‘dry oak’ sets off a premodifying genitive attribute NP to peŋgt́ ‘fire-wood’
while the reverse ordering tumoń kośke ‘of oak, dry’ indicates that the head has two
modifiers – an adjective kośke ‘dry’ and a preceding genitive attribute tumoń ‘of oak’
NP. Let it suffice that we observe the following examples, derived from (Kolâdënkov
1940: 24, 52; Bartens 1999: 111).
(82)

tumo+ń
peŋg+t́
oak_N+GEN fire-wood_N+ PL.NOM
‘oak(en) fire-wood’

(83)

kośke
peŋg+t́
dry_A.ABS fire-wood_N+ PL.NOM
‘dry fire-wood’

(84)

kośke
tumo+ń
peŋg+t́
dry_A.ABS oak_N+GEN fire-wood_N+PL.NOM
‘fire-wood cut from dry oak’

(85)

tumo+ń
kośke
peŋg+t́
oak_N+GEN dry_A.ABS fire-wood_N+ PL.NOM
‘dry oak fire-wood’

In a similar vein we can attest other NP modifiers and their placement before the head
noun in examples from Mikhail Bryzhinski, see (86–87).

<pgNo>179</pgNo>
MORPHOLOGY

179

(86)

kečaj
son+ś+kak
eź
Kechai_N-PRP.NOM.SG himself_PRON-PERS-3SG+REFL+CLT not_V-NEG-PRETI.PRED-3SG
soda,
ko+v
eskeĺ+i
know_V.CONNEG where_PRON-INTER-SPATIAL+LAT stride_V+IND.PRES.PRED-3SG
viŕ+ga+ńt́,
seŕej
di͔
vete ́
-koto
forest_N+PROL+DEF.SG, tall_A.ABS and_CONJ five_NUM-CARD.ABS -six_NUM-CARD.ABS
seĺ+eń
ečkelma+so
śado
ije+ń
fathom_N+GEN thickness_N+INE hundred_NUM-CARD.ABS year_N+GEN
čuvt+t+ne+ń
jutko+va
tree_N+PL+DET.PL+GEN among/between_POP+PROL
(Bryzhinski, M. Kirdazht manuscript) ‘Even Kechai himself didn’t know where he
was walking through the forest, among the tall trees five [or] six fathoms around and
hundreds of years old.’

(87)

kolmo
či͔+t́
ti͔ńeŋk
three_NUM-CARD.ABS day_N+PL.NOM you_PRON-PERS-2PL.DAT.POSS-2PL
eź
pečt́avo
alaša+ń
pulo+ń
not_V-NEG-PRETI.PRED-3SG cross_V.CONNEG horse_N+GEN tail_N+GEN
keĺe+se
te ́
ĺej+eś!
width_N+INE this_PRON-DEM.ABS river_N+NOM.DET.SG
(Bryzhinski, M. 1983: 90) ‘For three days you have not managed to cross this river that
is the breadth of a horse's tail!’

Hence we can assume that in addition to the following ordering for NPs, there might
also be room for double or triple embedding. Thus the simplex NP consists of possible
determiners, quantifiers and adjectives, and a complex NP might consist of an NP
embedded in either an NP or adpositional phrase in one of the modifier cases. Evidence
from Bryzhinski's texts indicates even more complexity, see below.
Simple NP = (DETERMINER) (QUANTIFIER) (ADJECTIVE) NOUN
NP with single embedding
= NP [GEN | INE | ELA | PROL | COMP | ABE | TRNSL] + NP
= Adpositional phrase[INE | ELA | PROL | COMP | LOC] + NP
NP with double embedding
vet́e%koto seĺ+eń
ečkelma+so čuvto
= NP[NP[NP[Q
N [GEN]] + N[INE]]
+ N]
alaša+ń
pulo+ń
keĺe+se
t́e ĺej
= NP[NP[NP[NP[N [GEN]]
+ N[GEN]]
+ N[INE]]
+ DET N]

<pgNo>180</pgNo>
180

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Symmetric case marking and head noun deletion
Case marking symmetry in Erzya, it must be stressed, is so persistent that the markers
might also be viewed as enclitics. If, for example, the NP head is contextually predictable,
it may also be deleted, whereupon the modifier closest to the NP-final position becomes
the new locus for case marking, see (88), and compare with (66–73), above. Other
attestations of this phenomenon, known here as SECONDARY DECLENSION, can be found
in (Evsevʹev 1963: 51, 101–103, 126, 129–132, 134–135, 162; Collinder 1969: 231;
Imajkina 1996: 27–32; Grebneva 2000: 107–108; Agafonova 2000: 139–141, 143–145;
Ermuškin 2004: 54; Keresztes 2005: 369–379; Zaicz 2006: 194–197 (who even mentions,
without example, tertiary declension); Gil WALS feature/chapter 61 ADJECTIVES WITHOUT
NOUNS.)
Adjective + Ø + Cx
(88) a. pokš+oś
big_A.ABS+N.NOM.DEF.SG
(Bargova 1996: 68) ‘the/that/this big one’
b. jakśt́eŕe+ś
red_A.ABS+N.NOM.DEF.SG
(Lukyanov 1955: 9) ‘the/that/this red one’
Quantifying modifier + Ø + Cx
c. źaro+ś
that-much_Q.ABS liquor_N+NOM.DEF.SG
(Abramov 1980: 18) ‘that much’
Spatial modifier + Ø + Cx
d. oš+so+t́+ńe
town_N+INE+N.PL+ DEF.PL.NOM
(Abramov 1988: 359) ‘the/those/these ones in town’
Determiner + Ø + Cx
e. iśt́amo+ś
such_PRO-DEF.ABS+N.NOM.DEF.SG
(Bryzhinski I. 1955: 74) ‘one such …’

<pgNo>181</pgNo>
MORPHOLOGY

181

*f. t́e+ś
this_PRO-DEM-PROX.ABS+N.NOM.DEF.SG
‘this one’
Genitive modifier + Ø + Cx
*g. vańa+ń+eś
Vanya_PRP+GEN+N.NOM.DEF.SG
‘Vanya's one’
*h. čuvto+ń+eś
wood_N+GEN+N.NOM.DEF.SG
‘the/that/this wooden one’
i. sonze+ś
he/she/it_PRON-PERS-3SG.GEN.POSS-3SG+N.NOM.DEF.SG
(Kirillov 1987: 74) ‘his/hers/its’

As can be observed in (88) predictable, definite head-noun deletion is not an option
attested for all NP types. While head deletion affords iśt́amo ‘such’ the role of definite
pronoun, an analogous solution is not available for the demonstrative pronoun t́e ‘this’.
The indefinite genitive modifiers, although unable to accommodate for this specific variety of predictable head-noun deletion, have means to compensate, e.g. the genitiveform modifier fuses orthographically with the equivalent of the speaker-oriented (distal)
demonstrative pronoun śe ‘that’ before undergoing declension, which is not always demonstrative in type (cf. Ermuškin 2004: 57; Evsevʹev 1963: 126). (See also 89–92 and
section 4.2.1.1. GENITIVE.)
Genitive modifier + Pron-dem-dist + Ø + Cx
(89)

t́išaj+eń+śe+ś
Tishai_PRP+GEN+PRON-DEM-DIST+N.NOM.DEF.SG
(Abramov 1989: 78) ‘the/that/this one of Tishai's’

(90)

čuvto+ń+śe+ś
wood_N+GEN+PRON-DEM-DIST +N.NOM.DEF.SG
(Zhuravlov 1999: 119) ‘the/that/this [wooden one | one of wood]’

(91)

ked́+eze
ćora+ń+śe+d́e
staka
hand_N+POSS-3SG>NOM.SG man_N+GEN+PRON-DEM-DIST+N.ABL heavy_A.NOM.SG
(Abramov 1987: 41) ‘her [Maryusha's] hand was heavier than that of a man's (Maryusha hit Vasya unexpectedly hard)’

<pgNo>182</pgNo>
182
(92)

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
paŕak,
ńe+t́
ĺed́śt́+ema+t́+ńe+d́e
maybe_PRT, these_PRON-DEM-PROX+PL remember_V+N+PL+DEF.PL+ABL
maŕav+i
t́e+ń
śokś+eń
feel_V+IND.PRES.PRED-3SG to_POP+POSS-1SG autumn_N+GEN
pizeme+ś
tundo+ń+śe+ks
rain_N+NOM.DEF.SG spring_N+GEN+PRON-DEM-DIST+N.TRNSL
(Chetvergov 1992: 91) ‘Maybe, it's these memories that make the autumn rain feel like
spring [rain] to me’

Rueter (2003: 165–166) provides an extensive enumeration of semantic properties associated with the target of genitive marking including: material, place, time, purpose, individual-to-group and group-to-inferable-capacity. This collection of semantic properties
attributed to the target of genitive marking can be augmented with that of the animate
possessor, as noted by Evsevʹev (1963: 126), see (93).
(93)

ki+ń
šapka+ńt́
jomavt+i͔ŋk `
who_PRON-INTER+GEN cap_N+GEN.DEF.SG lose_V+IND.PRETI.PRED-2PL>3
ivan+oń+śe+ńt́
iĺi
Ivan_N-PRP+GEN+PRON-DEM-DISTAL+GEN.DEF.SG or_CONJ
pet́a+ń+śe+ńt́?
Petya_N-PRP+GEN+PRON-DEM-DISTAL+GEN.DEF.SG
(Evsevʹev 1963: 126) ‘Whose cap did you lose: Ivan's or Petya's?’

With the addition of the possessor function, on the one hand, and the possibility of
indefinite declension, on the other, we can establish the morphological indefinite genitive
as a modifier phrase followed by a SOD PRONOUN, which has a syntax-motivated parameter
for overriding the demonstrative-declension requirement. Since the indefinite genitive
modifier can be used with both referential and non-referential nouns, our next question
is whether the genitive construction can be attested for personal pronouns, as well. In
fact, Evsevʹev (1963: 162) describes possessive pronouns in the definite declension with
regular morphology that correlates directly to the SOD pronoun strategy attested in (93),
compare table (4.65).

<pgNo>183</pgNo>
183

MORPHOLOGY
Table 4.65
P

1

SG
PL

2

SG
PL

3

SG
PL

Genitive-case personal pronouns with SOD secondary nominative forms or
according to Evsevʹev the possessive pronouns in the definite declension
Semi
Morphologic Gloss
phonetic
Orthographic
моньдзесь
минек-сесь
тоньть-цесь
тыҥк-сесь
сонзэ-цесь
сынст-сесь

moń+śe+ś
mińek+śe+ś
tońt́+śe+ś
ti͔ŋk+śe+ś
sonze+śe+ś
si͔nst+śe+ś

PRON-PERS-1SG.GEN+DEM-DIST+N.NOM.DEF.SG
PRON-PERS-1PL.GEN.POSS-1PL+DEM-DIST+N.NOM.DEF.SG
PRON-PERS-2SG.GEN.POSS-2SG+DEM-DIST+N.NOM.DEF.SG
PRON-PERS-2PL.GEN.POSS-2PL+DEM-DIST+N.NOM.DEF.SG
PRON-PERS-2SG.GEN.POSS-2SG+DEM-DIST+N.NOM.DEF.SG
PRON-PERS-2PL.GEN.POSS-2PL+DEM-DIST+N.NOM.DEF.SG

(Adapted from Evsevʹev 1963: 162)

One peculiarity here, however, is that Evsevʹev does not provide a 3SG pronoun form
corresponding to that of sonze+ś ‘his/hers/its’ as shown above in (88i).
Evsevʹev (1963: 101–103, 126, 129–132, 134–135, 162) deals with the phenomenon of noun-head deletion in three separate instances. His first mention of it addresses
the variety in which words declined in the indefinite inessive, translative and comparative cases can be inﬂected a second time in the demonstrative declension, see Склонение
определенных имен… ‘Declension of definite nouns…’; this variety is observed in the
inessive word form oš+so+ś town_N+INE+N.NOM.DEF.SG ‘the one in town’. The second
mention introduces both the adjective-modifier ašo+ś white_A+N.NOM.DEF.SG ‘the white
one’ and the indefinite-genitive modifier form čuvto+ń+śe+ś wood/tree_N+GEN+PRONDEM-DIST+N.NOM.DEF.SG ‘the wooden one, the one of wood’. In dealing with the latter
Evsevʹev considers the segments +śe+ś to be a reduplicated ś element, a view held by
some scholars even today. This interpretation might be countered. In regular declension
of the ablative no linking vowel is present, whereas this derivation is regularly represented in +śe+d́e+. The third mention of the phenomenon deals with genitive-form personal pronouns ti͔ŋk+śe+ś you_PRON-PERS-2PL.GEN.POSS-2PL+PRON-DEM-DIST+N.NOM.DEF.SG
‘the/that/this one of yours’. Instead of repeating the idea of a reduplicated ś segment,
Evsevʹev volunteers a vernacular Russian-language parallel in vaš%to where the Russian
possessive pronoun vaš ‘your (2PL)’ is combined with the demonstrative particle to ‘that’
or et ‘this’ (cf. Lyons 1999: 48–49). This clarification by Evsevʹev speaks in favor of the
distal-demonstrative interpretation and can be supported with evidence in Erzya of other
demonstratives used in post-genitive-modifier position, see t́e ‘this’ in (94) and śet́e
‘and/now this’ in (95). (The editors of MW have considered the 1SG form mońćit́ińt́ to be
an analogy of the 2SG tońćit́ińt́. It is, but then it is not a genitive form of the reﬂexive/
intensive 2SG pronoun with secondary genitive definite singular declension, rather the
genitive form of the 2SG personal pronoun followed by a speaker-oriented contextual
demonstrative in śet́e, followed by the secondary genitive definite singular declension.)

<pgNo>184</pgNo>
184

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

(94)

ruz+oń
koj%kona
govor+t+ne+s+kak
Russian_N+GEN some_PRON-INDEF.ABS dialect_N+PL+DEF.PL+ILL+CLT
sova+ś
finno%ugra+ń
t́e
enter_V+IND.PRETI.PRED-3SG Finno-Ugrian_N+GEN this_PRON-DEM-PROX.ABS
val+oś
“mečka”
forma+so –
word_N+NOM.DEF.SG “mechka_N.ABS” form_N+INE –
“ĺevks
marto
avaka
ovto”
smuśt́+se.
“off-spring_N.ABS with_POP female_N.ABS bear_N.ABS” meaning_N+INE
(Bryzhinski M 1991: 157) ‘This Finno-Ugrian word, in the form “mechka”, has even become part of the lexicon in some Russian dialects in the sense “sow bear with cub(s)”.’

(95)

[mońćit́ińt́ ]
a
moń+śe+t́e+ńt́
but_CONJ I_PRON-PERS-1SG.GEN+PRON-SOD+PRON-DEM-PROX+GEN.DEF.SG
viŕ
ava+ńeń
usk+ik
forest_N.ABS mother_N+DAT haul_V+IND.PRETI.PRED-2SG>3SG
(MW 1992: 1282) ‘but mine, you’ve taken to the Mother of the Woods.’

Interim conclusions
In Erzya there are two modifier-without-noun marking strategies, and in Evsevʹev's
grammar these have not been joined in one section, nor have they in grammars since
then. On the basis of what has been demonstrated above with regard to declension in
NPs where the head noun has been deleted in contextual circumstances allowing for
predictable identification, we can draw the following interim conclusions on what
modifiers are attested in SECONDARY DECLENSION and their types:
ZERO = Simple shift of declension locus to main item of NP:
Adjectives: ašo skal+oś ‘the white cow’ => ašo+ś ‘the white one’
Quantifiers: źaro vina+ś ‘so much liqour’ => źaro+ś ‘so much’
Spatial modifiers: ošso lomań+t́+ńe ‘the people in the town’ => ošso+t́+ńe ‘the ones in
town’
Determiners: iśt́amo boćka+ś ‘a barrel like that’ => iśt́amo+ś ‘one like that’
Genitive-form personal pronouns: sonze kŕepośt́+eś ‘his/her/its stronghold’ => sonze+ś
‘his/hers/its’
SOD PRONOUN -śe = Speaker-oriented (distal) demonstrative pronoun following main item

of NP and subsequent shift of declension locus to that pronoun:
Nouns in indefinite genitive: kšńi+ń kojme+ś ‘the shovel of iron’ => kšńi+ń+śe+ś ‘the
iron one’
Genitive-form personal pronoun: moń kudo+ś ‘my house; that house of mine’ =>
moń+śe+ś ‘mine; that one of mine’

<pgNo>185</pgNo>
MORPHOLOGY

185

By aligning the two types of secondary declension with the union of all modifier types
demonstrated here, adjectives, quantifiers, spatial modifiers, determiners and genitive
forms, we can arrive at the description in table (4.66). In discussions with speakers
of some Sura dialects and the Alatyr'-Kozlovka-Mokshalei vernacular of Batushevo, I
have attested both strategies of secondary declension marking in adjectives and spatial
modifiers alike (personal information, 1997–2009.)
Table 4.66

Secondary declension

POS

ZERO

Adjectives
Quantifiers
Spatial modifiers
Determiners
Genitive-form personal
pronouns

+
+
+
+
+

Genitive-form nouns

NA

Combining śe ‘that’
NA
NA
NA
NA

+
+

The numerous cells with no attestation oblige us to search the Erzya majority corpus
for clues. By searching for the 3SG adnominal cross-referential marker %OnzO with
subsequent declension marking, we immediately become aware of at least genitive
and inessive forms of possessed nouns that allow for the simple-locus-shift variety of
secondary declension, see (96–97).
(96)

čakš+oń
t́ej+em+ste
rožodomkšno+ś,
crock_N+GEN make_V+INF+ELA become-engrossed_V+IND.PRETI.PRED-3SG,
aŕśe+ś,
sonze+jak
think_V+IND.PRETI.PRED-3SG, he_PRON-PERS-3SG.GEN.POSS-3SG+CLT
ĺiś+i
ava+nzo+t+ńe+ń
́
come-out_V+IND.PRES.PRED-3SG mother_N+POSS-3SG>GEN+N.PL+DET.PL+GEN
końd́amo,
di͔
ańśak źardo
like_POP-A.NOM.SG, and_CONJ only_PRT when_PRON-ADV-TEMP
kaštazne+ś+kak
meńd́a+ź+eĺ,
wreath_N-DIM+NOM.DEF.SG+CLT bend_V+PTC-OZ+IND.PRETII.PRED-3SG,
ńej+iźe:
ked́ge+ze ...
see_V+IND.PRETI.PRED-3SG>3SG: containter_N+POSS-3SG>NOM.SG
(Bryzhinski M. Kirdazht) ‘He became so engrossed in making the crock, he thought he
would make one like the ones his mother [made], and only when the rim was bent over
did he see his container…’

<pgNo>186</pgNo>
186
(97)

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
śt́opa
pškad́+ś
alamo+s
ašt́e+ź,
Styopa_PRP.NOM.SG say_V+IND.PRETI.PRED-3SG a-little_Q+ILL sit_V+PTC-OZ,
źardo
poŕev+śt́
di͔
when_PRON-ADV-TEMP finish-chewing_V+IND.PRETI.PRED-3PL and_CONJ
ńiĺev+śt́
kurg+so+nzo+t+ńe.
́
get-swallowed_V+IND.PRETI.PRED-3PL mouth_N+INE+POSS-3SG+N.PL+DET.PL.NOM
(Abramov 1971: 70) ‘Styopa responded after sitting for a little while when the ones in
his mouth had been chewed and swallowed.’

Subsequent searches for distal-demonstrative secondary-declension derivations
are perhaps less fruitful in the written corpora, see (98), but there are indications in
descriptions of the language, and personal information on variants of the spoken language
that would indicate a tangible presence of the demonstrative derivation type in Erzya.
(98)

– aźo
ved́
meĺga!
di͔
avoĺ
go!_PRT-IMP.2SG water_N.ABS after_POP! but/and_CONJ not_PRT-NEG-CONTR
mala+so
ĺiśmapŕa+ńt́eń,
vasol+o+ńteń.
́
near_ADV-SPAT+INE spring_N+DAT.DEF.SG, far-away_ADV-SPAT+LOC+N.DAT.DET.SG
– meks
vasol+o+ńteń?
́
why_PRON-INTER.TRNSL far-away_ADV-SPAT+LOC+N.DAT.DET.SG?
mala+so+će+se+ńt ́
ved́+eś
śed́e
near-by_ADV+INE+PRON-DEM-DIST+N.INE+DET.SG water_N+NOM.DEF.SG more_PRON-DEMDIST.ABL
paro!
good_A.NOM.SG
(Kirillov 1987: 154) ‘– Go get [some] water! But not [don’t go] to the spring near by,
the one far away.
– Why the one far away? The water in the one near by is better.’

In addition to the spatial adverb demonstrated in (98), we will observe that Collinder
(1969: 231) speaks of hypostatization with certain case forms (inessive, prolative,
abessive, comparative). Collinder shows hypostatization, another term to indicate the
phenomenon of secondary declension, to be manifest in more elaborate word forms. The
forms in context provide hypothetical formulations for scrutiny, see (99).
(99) a. peĺ+an
kudo+so+n+ʒ́e+de+ńt́
peĺ+an
kudo+so+n+śe+d́e+ńt́ (Rueter)
fear_V+IND.PRES.PRED-1SG house_N+POSS-1SG+PRON-DEM-DIST+N.ABL+DEF.SG
‘I am afraid of the person who is in my house’ (Collinder 1969: 231)

<pgNo>187</pgNo>
MORPHOLOGY

187

b. peĺ+an
kudo+so+nzo+se+de+ńt́
peĺ+an
kudo+so+nzo+śe+d́e+ńt́(Rueter)
fear_V+IND.PRES.PRED-1SG house_N+POSS-1SG+PRON-DEM-DIST+N.ABL+DEF.SG
‘I am afraid of the person who is in his house’ (Collinder 1969: 231)

In (99a) we have a possessum kudo ‘house’ in the inessive case with 1SG possessor indexing
followed by a hypostatizing demonstrative construction, and the same formulation is
repeated again in (99b). Even if these formulations might be limited in the written
corpora, the mere fact that they have been attested and/or hypothesized encourages
us to delve deeper. We must formulate the following questions for compatibility with
adnominal person marking:
Are both varieties of secondary declension compatible with adnominal person marking?
What modifiers are compatible with adnominal person and simple locus shift?
What modifiers are compatible with adnominal person and demonstrative derivation?
Are there any instances of ambiguity with other constructions?

Hypothesis
In response to the first question, the answer has already been given; the genitive-form
personal pronouns beginning with the third person singular attest to that. Regarding
the -śe% segment as representative of the distal demonstrative pronoun, which is a
speaker-oriented pronoun, it will be hypothesized that the demonstrative derivation will
be used less frequently with modifiers that exhibit compatibility with both varieties of
secondary declension or hypostatization. Finally, disparity in concatenation strategies of
personal pronoun paradigms as provided by Agafonova (2000: 143–145) and Evsevʹev
(1963: 153–154, 162) in contrast with Zaicz (2006: 196–197) are indicative of possible
ambiguity between reﬂexive/intensive and demonstrative derivation forms.

#### 4.5.2. Compatibility of ZERO marking and adnominal-person
In this section we will focus our attention on the question: which modifier types can
be subjected to contextual secondary declension with adnominal-person marking. This
means we will be asking ourselves what variety of adjective, quantifier, determiner, spatial
and genitive modifiers show an indication of both adnominal person and hypostatization.
MODIFIER (PRON-DEM-DIST) + POSS

<pgNo>188</pgNo>
188

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Adjectives
Adjectives in Erzya as stated by Mosin (2000: 108–111) can be divided into modifiers
(i) characterizing qualities, and (ii) indicating relations. While modifiers characterizing
qualities (expressions of color, measure, age, ﬂavor, etc.) can be compared, those indicating relations cannot. Examples are also forwarded of adjectives undergoing hypostatization involving the demonstrative declension, e.g. od ‘new’, od+oś ‘the new one’,
but no reference is made to the possibility of secondary declension in combination with
adnominal person.
Initial searches in the Erzya majority corpus bore no indication of compatibility
between quality-characterizing adjectives and adnominal-person marking in instances
of contextual secondary declension. For this reason, two loose filters were constructed:
one which allowed word forms ending in feasible possessive declension endings with
allowance for possible nominal conjugation and clitic marking, and the second filter
screened the result of this feed allowing only word forms with adjective roots. In this
manner the nearly 300,000 unique word forms of the corpora were filtered down to 4379
hits, which were then manually scrutinized by the researcher.
It soon became apparent, however, that many Erzya words double as adjectives
and nouns. Occasional ZERO-derivation relations between adjectives and nouns can be
divided into two groups. First, there are the words of quality, e.g. valdo ‘(a.) light’
<=> ‘(n.) light’, ĺembe ‘warm’ <=> ‘warmth’, mazi͔ ‘beautiful’ <=> ‘beauty (measurable quality)’, which demonstrate, or so it would seem, that qualities are integral notions
attributed to individuals, and therefore possessor/controller indexing of such qualities
would inadvertently bring us back to the head noun of the NP. Hence, relative qualities
as indicated by measurement, color and ﬂavor receive treatment in section 4.3.1 NOUNS.
Second, there are pairs in which the adjective characterizes a quality or relation, whereas
the noun indicates a referent that can be characterized by that adjective, e.g. pokš ‘big’
<=> ‘leader’, piže ‘green’ <=> ‘copper’, gńedoj ‘bay’ <=> ‘bay (horse)’, trodovoj ‘labor, work’ <=> ‘employment history book’. These two groups contribute to a majority
of the ambiguous adjective + adnominal-person affixation readings; no instances of contextual secondary declension were discerned.

Quantifiers
Quantifiers with adnominal-person marking, such as numerals, might readily be detected
in a superficial scan of the unique word forms in the corpora. The most frequent forms
are those of the associative-collective numerals dealt with in QUANTIFIERS section 4.3.2.
ATTESTED PARTS OF SPEECH AND SUBLEXICA. Two other groups can be discerned, one consists
of ordinal numerals, which will be dealt with below in the section on determiners, and the
other, only attested by singular instances, cardinal numerals (also dealt with in section
4.3.2.).

<pgNo>189</pgNo>
MORPHOLOGY

189

Determiners
Determiners are attested in the language with contextual secondary declension. The
most prominent of these are the pronouns ĺija ‘another, the remainder’, eŕva ‘each’,
iśt́amo ‘this/that kind of’ described by Agafonova (2000: 136–141). While Agafonova
provides paradigms for these three determiners in eight morphological forms, the instances of these forms available in the Erzya majority corpus indicate that they are, in
fact, manifestations of contextual secondary declension, see (100–101).
(100)

` śe+jak
eŕav+i
meŕ+em+s:
that_PRON-DEM-DIST.NOM.SG+CLT have-to_V+IND.PRES.PRED-3SG say_V+INF+ILL:
a
klub+onok,
a
meźe+ńek
not_PRT-NEG club_N+POSS-1PL, not_PRT-NEG what_PRO-N-INTER+POSS-1PL
ĺija+nok.
other_PRON-DET+N.POSS-1PL.
(Abramov 1961: 400) ‘And it should also be said: not our club, not anything else we
have.’

(101)

“t́e
ńej
kije
this_PRON-DEM-PROX.NOM.SG now_ADV-TEMP who_PRON-INTER.NOM.SG
sa+ś?
raśke+ńek
jutk+sto
arrive_V+IND.PRETI.PRED-1SG family_N+POSS-1PL among_POP+ELA
kińgak
iśtamo+zo
́
anyone_PRON-INDEF.GEN.CLT this/that-kind-of_PRON-DET-A.N+POSS-3SG>NOM.SG
araś…”
– puĺkav+it́
not-exist_A.IND.PRES.PRED-3SG…” – bubble_V+IND.PRES.PRED-3PL
aŕśema+t́+ńe
pŕa
pot+so
thought_N+PL+DEF.PL.NOM head_N.ABS within_POP+INE
(Ganchin 2009: 8: 38) ‘Now, who has come [to visit]? Nobody in our family has that
kind of [thing/car] – the thoughts in her head bubbled.’

Additional determiners can be discerned in word forms derived with the morpheme -śe
~ %će, i.e. ordinal numerals and a limited number of other related words.
(102)

koda
kort+i͔t́,
mejeĺće+nze
as_PRO-ADV-MANNER speak_V+IND.PRES.PRED-3PL, the-last_DET+N.POSS-3SG.GEN
maks+i͔
give_V+IND.PRES.PRED-3SG
(syatko 2003–9: ) ‘As they say, he [Kamil’] will give his last.’

<pgNo>190</pgNo>
190
(103)

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA
ćori͔ńe+ś
śe
či͔+ste+ńt́
boy_N+NOM.DEF.SG that_PRON-DEM-DIST.ABS day_N+ELA+DEF.SG
vačo+do+ĺ.
kuvat́
hungry_V-PRT+ABL+IND.PRETII.PRED-3SG. long-time_ADV-TEMP
oźa+ś %
nosk+ś
keep-busy_V+IND.PRETI.PRED-3SG puff_V+IND.PRETI.PRED-3SG
krandazke+se+ńt́,
eĺ
targav+ś
little-wagon_N+INE+DEF.SG, just_PRT manage-to-pull_V+IND.PRETI.PRED-3SG
vaśeńće
piĺge+ze,
mejĺe
first_DET.ABS leg_N+POSS-3SG>NOM.SG, later_ADV-TEMP
omboće+ze.
second_DET.ABS+N.POSS-3SG>NOM.SG
([Chilisema 1999 №4 Latvian fairytale]) ‘The little boy was hungry that day. For a
long time he kept himself busy and puttered around with the little wagon, he just managed to pull out his first leg and then his second.’

Determiners in the form of adjective-equivalent pronouns and ordinal numerals can be
discerned in the corpora.

Spatial modifiers
Spatial modifiers, containing the morpheme -śe ~ %će, a distal demonstrative pronoun
equivalent, have been targeted for attestation with adnominal-person marking. This
word type includes correlating pairs, such as al+o ‘below’ <=> al+će ‘the lower’, veŕ+e
‘up high’ <=> veŕ+će ‘the upper …’, vasol+o ‘far away’ <=> vasol+će ‘the … far away’,
which would parallel the morphology observed above with the word forms mejeĺ+e
‘then, later’ <=> mejeĺ+će ‘the last’. No instances were attested in the corpora.

Genitive modifiers
Hypothetically, this group would comprise noun or pronoun forms in the genitive, which
might optionally have a distal demonstrative pronoun element worked into the morphology. This formulation is not attested for the indefinite and definite genitive declensions,
but it is evidenced in Agafonova's declension charts of genitive-case personal and reﬂexive/intensive pronouns (seeAgafonova 2000: 143–145).

Interim summary
Only determiners of the adjective or ordinal-numeral-equivalent variety attest to
contextual secondary declension of modifiers with a ZERO marking strategy and
adnominal-person marking.

<pgNo>191</pgNo>
MORPHOLOGY

191

#### 4.5.3. Compatibility of possessive-declension modifiers
with ZERO marking strategy
In this section our attention will be focused on the question: which modifier types can
be marked for adnominal person and subsequently subjected to contextual secondary
declension. This means we will be asking ourselves what variety of adjective, quantifier,
determiner, spatial and genitive modifiers show affixal adnominal person followed by an
indication of hypostatization.
MODIFIER + POSS + DECLENSION

Adjectives, Quantifiers and Determiners
Possessor/controller indexing of adjectives, quantifiers and non-spatial/genitive
determiners do not appear in modifier position. (See discussion in SYMMETRIC CX MARKING
AND HEAD NOUN DELETION (88–95) and subsequent INTERIM CONCLUSIONS.)

Spatial modifiers
The inessive case provides a source for demonstrating the two marking strategies, i.e.
(97) provides zero marking in kurg+so+nzo+t́+ńe mouth_N+INE+POSS-3SG:N+PL+DEF.
PL.NOM and (99b) SOP marking in kudo+so+nzo+śe+d́e+ńt́ house_N+POSS-1SG+PRON-DEMDIST+N.ABL+DEF.SG.

Genitive modifiers
Genitive modifiers with adnominal-person marking are manifest in two parts of speech,
possessed nouns, e.g. ava+nzo+t́+ńe+ń mother_N+POSS-3SG.GEN+N.PL+DEF.PL+GEN, and the
personal pronouns, which exhibit extended exponence in the marking of person and
number in oblique case forms, see (104–105).
(104) a. mińek+t́+ńe
we_PRON-PERS-1PL.GEN.POSS-1PL:N+NOM.DEF.PL
b. miń+śe+ńek+t́+ńe
we_PRON-PERS-1PL+REFL+GEN.POSS-1PL:N+ NOM.DEF.PL
c. eśe+ńek+t́+ńe
we_PRON-PERS-1PL+REFL+GEN.POSS-1PL:N+ NOM.DEF.PL

<pgNo>192</pgNo>
192

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

(105) a. mińek+śe+t́+ńe
we_PRON-PERS-1PL.GEN.POSS-1PL+PRON-DEM-DISTAL:N +NOM.DEF.PL
b. miń+śe+ńek+śe+t́+ńe
we_PRON-PERS-1PL+REFL+GEN.POSS-1PL+PRON-DEM-DISTAL:N + NOM.DEF.PL
c. eśe+ńek+śe+t́+ńe
we_PRON-PERS-1PL+REFL+GEN.POSS-1PL+PRON-DEM-DISTAL:N+ NOM.DEF.PL

In (104) we see the implementation of the zero-marking strategy with the genitive forms
of the personal pronoun (104a), the reﬂexive/intensive pronoun (104b) and the reﬂexive/
intensive-stem pronoun (104c). All three genitive forms are then rendered in (105) with
the SOD marking strategy. Hypothetically, yet a third set might be rendered using the
complex śet́e SOD pronoun, cf. (95). Curious enough, another form is also attested in
the corpora with what appears to be a grammaticalization from the two separate %Oń+śe%
morphemes to a single %Ońśe% morpheme head marker.
(106)

mińek+eń+śe+t́+ńe
we_PRON-PERS-1PL.GEN.POSS-1PL:N+HEAD-MARKER+NOM.DEF.PL
(out of context theoretical) we_PRON-PERS-1PL.GEN.POSS-1PL:N+GEN+PRON-DEMDISTAL:N+NOM.DEF.PL

Minimalizing quantifier śkamonzo ‘by his/her/its self’
Finally, there is the minimalizing quantifier whose case we have been unable to discern.
This quantifier, like the associative-collective quantifiers with possible comitative-case
attestation, appears as a quantifier in apposition. As such it can also appear alone in
context, and as a modifier of sorts. The corpora attest to one instance of secondary
declension, see (107).
(107)

di͔
śejed́ste
ĺiśń+i,
t́e
and_CONJ often_ADV.ELA come-out_V+IND.PRES.PRED-3SG, this_PRON-DEM-PROX.ABS
śkamo+nzo+ś
kadov+i
vid́e+ks.
alone_Q-MIN+POSS-3SG:N+NOM.DEF.SG be-left_V+IND.PRES.PRED-3SG right_A+TRNSL
(Bryzhinski 1991: 38) ‘And frequently, it turns out, this loner comes out right.’

<pgNo>193</pgNo>
193

MORPHOLOGY

#### 4.5.4. Personal and reflexive/intensive pronouns
and secondary declension
According to Agafonova (2000: 143–145) the genitive forms of the personal pronouns
and reﬂexive/intensive personal pronouns are used in the role of possessive pronouns.
This statement can be augmented to contain both reﬂexive/intensive stem and reﬂexive/
intensive pronouns, see table (4.67).
Table 4.67

Personal pronouns in genitive used as modifiers

Neutral pronouns
PRON-PERS

Reﬂexive/intensive pronouns

Reﬂexive/intensive stems

moń
mińek
toń
ti͔ŋk
sonze
si͔nst

mon+ś+eń
miń+ś+eńek
ton+ś+et́
ti͔ń+ś+eŋk
son+ś+enze
si͔ń+ś+est

eś+eń
eś+eńek
eś+et́
eś+eŋk
eś+enze
eś+est

1SG.GEN
1PL.POSS-1PL.GEN
2SG.GEN
2PL.POSS-2PL.GEN
3SG.POSS-3SG.GEN
3PL.POSS-3PL.GEN

1SG.REFL+POSS-1SG>GEN
1PL.REFL+POSS-1PL>GEN
2SG.REFL+POSS-2SG>GEN
2PL.REFL+POSS-2PL>GEN
3SG.REFL+POSS-3SG>GEN
3PL.REFL+POSS-3PL>GEN

REFL+POSS-1SG>GEN
REFL+POSS-1PL>GEN
REFL+POSS-2SG>GEN
REFL+POSS-2PL>GEN
REFL+POSS-3SG>GEN
REFL+POSS-3PL>GEN

All of these genitive-form pronouns can function as modifiers, and therefore they are
candidates to secondary declension. As Agafonova states it the genitive-form personal
pronouns can take definite morphemes, and be declined like nouns. Thus Agafonova
presents noun-declension tables of the genitive-form pronouns, both of which appear to
forward a zero-marking strategy not attested with Evsevʹev, see table (4.68).

<pgNo>194</pgNo>
194

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.68

Genitive-form (neutral) personal pronouns with definite declensions
Singular NP head
1SG
2SG
3SG
moń+eś
toń+eś
sonze+ś
moń+eńt́
toń+eńt́
sonze +eńt́
moń+eńt́eń
toń+eńt́eń
sonze +eńt́eń
moń+d́e+ńt́
toń+d́e+ńt́
sonze +d́e+ńt́
moń+se+ńt́
toń+se+ńt́
sonze +se+ńt́
moń+ste+ńt́
toń+ste+ńt́
sonze +ste+ńt́
moń+ga+ńt́
toń+ga+ńt́
sonze +ga+ńt́
moń+ks+eńt́
toń+ks+eńt́
sonze +ks+eńt́
moń+ška+ńt́
toń+ška+ńt́
sonze +ška+ńt́
moń+t́eme+ńt́
toń+t́eme+ńt́
sonze +vt́eme+ńt́

NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

1PL

2PL

3PL

mińek+eś
mińek+eńt́
mińek+eńt́eń
mińek+t́e+ńt́
mińek+se+ńt́
mińek+ste+ńt́
mińek+ka+ńt́
mińek+eks
mińek+ška+ńt́
mińek+t́eme+ńt́

ti͔ŋk+eś
ti͔ŋk+eńt́
ti͔ŋk+eńt́eń
ti͔ŋk+t́e+ńt́
ti͔ŋk+se+ńt́
ti͔ŋk+ste+ńt́
ti͔ŋk+ka+ńt́
ti͔ŋk+eks
ti͔ŋk+ška+ńt́
ti͔ŋk+t́eme+ńt́

si͔nst+eś
si͔nst+eńt́
si͔nst+eńt́eń
si͔nst+te+ńt́
si͔nst+se+ńt́
si͔nst+ste+ńt́
si͔nst+ka+ńt́
si͔nst+eks
si͔nst+ška+ńt́
si͔nst+teme+ńt́

moń+e+t́ńe
moń+e+t́+ńe+ń
moń+e+t́+ńe+ńeń
moń+e+t́+ńe+d́e
moń+e+t́+ńe+se
moń+e+t́+ńe+ste
moń+e+t́+ńe+va
moń+e+t́+ńe+ks
moń+e+t́+ńe+ška
moń+e+t́+ńe +vt́eme

Plural NP head
toń+e+t́+ńe
toń+e+t́+ńe+ń
toń+e+t́+ńe+ńeń
toń+e+t́+ńe+d́e
toń+e+t́+ńe+se
toń+e+t́+ńe+ste
toń+e+t́+ńe+va
toń+e+t́+ńe+ks
toń+e+t́+ńe+ška
toń+e+t́+ńe+vt́eme

sonze+t́+ńe
sonze+t́+ńe+ń
sonze+t́+ńe+ńeń
sonze+t́+ńe+d́e
sonze+t́+ńe+se
sonze+t́+ńe+ste
sonze+t́+ńe+va
sonze+t́+ńe+ks
sonze+t́+ńe+ška
sonze+t́+ńe+vt́eme

<pgNo>195</pgNo>
MORPHOLOGY

NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

mińek+t́+ńe
mińek+t́+ńe+ń
mińek+t́+ńe+ńeń
mińek+t́+ńe+d́e
mińek+t́+ńe+se
mińek+t́+ńe+ste
mińek+t́+ńe+va
mińek+t́+ńe+ks
mińek+t́+ńe+ška
mińek+t́+ńe+vt́eme

195

Plural NP head
ti͔ŋk+t́+ńe
si͔nst+t+ne
ti͔ŋk+t́+ńe+ń
si͔nst+t+ne+ń
ti͔ŋk+t́+ńe+ńeń
si͔nst+t+ne+ńeń
ti͔ŋk+t́+ńe+d́e
si͔nst+t+ne+d́e
ti͔ŋk+t́+ńe+se
si͔nst+t+ne+se
ti͔ŋk+t́+ńe+ste
si͔nst+t+ne+ste
ti͔ŋk+t́+ńe+va
si͔nst+t+ne+va
ti͔ŋk+t́+ńe+ks
si͔nst+t+ne+ks
ti͔ŋk+t́+ńe+ška
si͔nst+t+ne+ška
ti͔ŋk+t́+ńe+vt́eme
si͔nst+t+ne+vt́eme
(see Agafonova 2000: 143–145) this author's annotation

The genitive-form neutral personal pronouns with definite declensions can be formulated
as follows with the variable Y:
1SG and 2SG:
Singular head = PRON-PERS-Y.GEN+CX+DEF
Plural head = PRON-PERS-Y.GEN+PL+DEF+CX

3SG, 1PL, 2PL and 3PL:
Singular head = PRON-PERS-Y+POSS-Y.GEN+CX+DEF
Plural head = PRON-PERS-Y+POSS-Y.GEN+PL+DEF+CX

In earlier forms of the literary language and, naturally, some of the Erzya dialects, the
2SG pronoun also had possessive marking in the formulation of the genitive form tońt́.
Assuming the first and second persons singular are both lacking possessive marking,
whereas it could be argued that the 1SG form actually contains the same genitive marking
as that reserved for distinct kin terms, that is indefinite genitive marking, we can render
a mutual formulation for all persons with parentheses.
Singular head = PRON-PERS(+POSS-Y).GEN+CX+DEF
Plural head = PRON-PERS(+POSS-Y).GEN+PL+DEF+CX

Next Agafonova presents the reﬂexive/intensive pronoun paradigm which actually
indicates suppletion in the 1sg and 2sg forms, where instead of a genitive-case reﬂexive/
intensive pronoun we encounter a genitive-case neutral personal pronoun with SOD
marking, see table (4.69) where the suppletive cells have been darkened. (In this author's
transcription of the Cyrillic script the genitive-form stems in the 1SG and 2SG personal
pronouns are marked palatalized ń.)

<pgNo>196</pgNo>
196

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.69

Genitive-form reﬂexive/intensive personal pronouns with definite declensions
Singular NP head
1SG
2SG
3SG

SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

moń+śe+ś
moń+śe+ńt́
moń+śe+ńt́eń
moń+śe+d́e+ńt́
moń+śe+se+ńt́
moń+śe+ste+ńt́
moń+śe+va+ńt́
moń+śe+ks
moń+śe+ška+ńt́
moń+śe+vt́eme+ńt́

toń+śe+ś
toń+śe+ńt́
toń+śe+ńt́eń
toń+śe+d́e+ńt́
toń+śe+se+ńt́
toń+śe+ste+ńt́
toń+śe+va+ńt́
toń+śe+ks
toń+śe+ška+ńt́
toń+śe+vt́eme+ńt́

son+ś+enze+ś
son+ś+enze+eńt́
son+ś+enze+eńt́eń
son+ś+enze+d́e+ńt́
son+ś+enze+se+ńt́
son+ś+enze+ste+ńt́
son+ś+enze+va+ńt́
son+ś+enze+ks
son+ś+enze+ška+ńt́
son+ś+enze+vt́eme+ńt́

1PL

2PL

3PL

miń+ś+eńek+eś
miń+ś+eńek+eńt́
miń+ś+eńek+eńt́eń
miń+ś+eńek+t́e+ńt́
miń+ś+eńek+se+ńt́
miń+ś+eńek+ste+ńt́
miń+ś+eńek+ka+ńt́
miń+ś+eńek+eks
miń+ś+eńek+ška+ńt́
miń+ś+eńek+t́eme+ńt́

ti͔ń+ś+eŋk+eś
ti͔ń+ś+eŋk+eńt́
ti͔ń+ś+eŋk+eńt́eń
ti͔ń+ś+eŋk+t́e+ńt́
ti͔ń+ś+eŋk+se+ńt́
ti͔ń+ś+eŋk+ste+ńt́
ti͔ń+ś+eŋk+ka+ńt́
ti͔ń+ś+eŋk+eks
ti͔ń+ś+eŋk+ška+ńt́
ti͔ń+ś+eŋk+t́eme+ńt́

si͔ń+ś+est+eś
si͔ń+ś+est+eńt́
si͔ń+ś+est+eńt́eń
si͔ń+ś+est+te+ńt́
si͔ń+ś+est+se+ńt́
si͔ń+ś+est+ste+ńt́
si͔ń+ś+est+ka+ńt́
si͔ń+ś+est+eks
si͔ń+ś+est+ška+ńt́
si͔ń+ś+est+teme+ńt́

Plural NP head
SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

moń+śe+t́+ńe
moń+śe+t́+ńe+ń
moń+śe+t́+ńe+ńeń
moń+śe+t́+ńe+d́e
moń+śe+t́+ńe+se
moń+śe+t́+ńe+ste
moń+śe+t́+ńe+va
moń+śe+t́+ńe+ks
moń+śe+t́+ńe+ška
moń+śe+t́+ńe+vt́eme

toń+śe+t́+ńe
toń+śe+t́+ńe+ń
toń+śe+t́+ńe+ńeń
toń+śe+t́+ńe+d́e
toń+śe+t́+ńe+se
toń+śe+t́+ńe+ste
toń+śe+t́+ńe+va
toń+śe+t́+ńe+ks
toń+śe+t́+ńe+ška
toń+śe+t́+ńe+vt́eme

son+ś+enze+t́+ńe
son+ś+enze+t́+ńe+ń
son+ś+enze+t́+ńe+ńeń
son+ś+enze+t́+ńe+d́e
son+ś+enze+t́+ńe+se
son+ś+enze+t́+ńe+ste
son+ś+enze+t́+ńe+va
son+ś+enze+t́+ńe+ks
son+ś+enze+t́+ńe+ška
son+ś+enze+t́+ńe+vt́eme

<pgNo>197</pgNo>
MORPHOLOGY

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

197

miń+ś+eńek+t́+ńe
ti͔ń+ś+eŋk+t́+ńe
si͔ń+ś+est+t+ne
miń+ś+eńek+t́+ńe+ń
ti͔ń+ś+eŋk+t́+ńe+ń
si͔ń+ś+est+t+ne+ń
miń+ś+eńek+t́+ńe+ńeń
ti͔ń+ś+eŋk+t́+ńe+ńeń
si͔ń+ś+est+t+ne+ńeń
miń+ś+eńek+t́+ńe+d́e
ti͔ń+ś+eŋk+t́+ńe+d́e
si͔ń+ś+est+t+ne+d́e
miń+ś+eńek+t́+ńe+se
ti͔ń+ś+eŋk+t́+ńe+se
si͔ń+ś+est+t+ne+se
miń+ś+eńek+t́+ńe+ste
ti͔ń+ś+eŋk+t́+ńe+ste
si͔ń+ś+est+t+ne+ste
miń+ś+eńek+t́+ńe+va
ti͔ń+ś+eŋk+t́+ńe+va
si͔ń+ś+est+t+ne+va
miń+ś+eńek+t́+ńe+ks
ti͔ń+ś+eŋk+t́+ńe+ks
si͔ń+ś+est+t+ne+ks
miń+ś+eńek+t́+ńe+ška
ti͔ń+ś+eŋk+t́+ńe+ška
si͔ń+ś+est+t+ne+ška
miń+ś+eńek+t́+ńe+vt́eme ti͔ń+ś+eŋk+t́+ńe+vt́eme
si͔ń+ś+est+t+ne+vt́eme
(see Agafonova 2000: 143–145) with this author's annotation

An initial formulation of Agafonova's forms in the reﬂexive/intensive table (4.69) reveals a similar break in the distribution of person, i.e. 1SG and 2SG versus 3SG, 1PL, 2PL
and 3PL.
1SG and 2SG:
Singular head = PRON-PERS-Y.GEN+PRON-DEM-DISTAL+CX+DEF
Plural head = PRON-PERS-Y.GEN+PRON-DEM-DISTAL +PL+DEF+CX

3SG, 1PL, 2PL and 3PL:
Singular head = PRON-PERS-Y+REFL+POSS-Y.GEN+CX+DEF
Plural head = PRON-PERS-Y+REFL+POSS-Y.GEN+PL+DEF+CX

This break, as noted above, appears to involve morphological confusion or suppletion. Where the 3SG and 3PL persons attest to a genitive-form reﬂexive/intensive
personal pronoun base for their definite forms, the 1SG and 2SG attest to a totally different
structure, namely, a genitive-case neutral personal pronoun with a distal demonstrative
pronoun as its base, i.e. the SOD strategy for marking MWN.
If we apply the SOD strategy of the 1SG and 2SG to the other persons, we will arrive at a paradigm parallel to what is attested above for indefinite genitive nouns, see
(89–92), with the morphological difference arising in the presence of adnominal-type
cross-referential marking before the demonstrative pronoun reﬂex -śe%. In fact, it seems
that this is precisely the paradigm that Evsevʹev indicates (see 1963: 162) when he refers
to the Определенная форма притяжательных местоимений ‘definite form[s] of the
possessive pronouns’, see table (4.70).

<pgNo>198</pgNo>
198

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.70

Genitive-case personal pronouns with distal demonstrative pronoun marking
Singular NP head
1SG
2SG
3SG

SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

moń+śe+ś
moń+śe+ńt́
moń+śe+ńt́eń
moń+śe+d́e+ńt́
moń+śe+se+ńt́
moń+śe+ste+ńt́
moń+śe+va+ńt́
moń+śe+ks+eńt́
moń+śe+ška+ńt́
moń+śe+vt́eme+ńt́

toń+śe+ś
toń+śe+ńt́
toń+śe+ńt́eń
toń+śe+d́e+ńt́
toń+śe+se+ńt́
toń+śe+ste+ńt́
toń+śe+va+ńt́
toń+śe+ks+eńt́
toń+śe+ška+ńt́
toń+śe+vt́eme+ńt́

sonze+śe+ś
sonze+śe+ńt́
sonze+śe+ńt́eń
sonze+śe+d́e+ńt́
sonze+śe+se+ńt́
sonze+śe+ste+ńt́
sonze+śe+va+ńt́
sonze+śe+ks+eńt́
sonze+śe+ška+ńt́
sonze+śe+vt́eme+ńt́

1PL

2PL

3PL

mińek+śe+ś
mińek+śe+ńt́
mińek+śe+ńt́eń
mińek+śe+d́e+ńt́
mińek+śe+se+ńt́
mińek+śe+ste+ńt́
mińek+śe+va+ńt́
mińek+śeks
mińek+śe+ška+ńt́
mińek+śe+vt́eme+ńt́

ti͔ŋk+śe+ś
ti͔ŋk+śe+ńt́
ti͔ŋk+śe+ńt́eń
ti͔ŋk+śe+d́e+ńt́
ti͔ŋk+śe+se+ńt́
ti͔ŋk+śe+ste+ńt́
ti͔ŋk+śe+va+ńt́
ti͔ŋk+śeks
ti͔ŋk+śe+ška+ńt́
ti͔ŋk+śe+vt́eme+ńt́

si͔nst+śe+ś
si͔nst+śe+ńt́
si͔nst+śe+ńt́eń
si͔nst+śe+d́e+ńt́
si͔nst+śe+se+ńt́
si͔nst+śe+ste+ńt́
si͔nst+śe+va+ńt́
si͔nst+śeks
si͔nst+śe+ška+ńt́
si͔nst+śe+vt́eme+ńt́

Plural NP head
SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

moń+śe+t́+ńe
moń+śe+t́+ńe+ń
moń+śe+t́+ńe+ńeń
moń+śe+t́+ńe+d́e
moń+śe+t́+ńe+se
moń+śe+t́+ńe+ste
moń+śe+t́+ńe+va
moń+śe+t́+ńe+ks
moń+śe+t́+ńe+ška
moń+śe+t́+ńe+vt́eme

toń+śe+t́+ńe
toń+śe+t́+ńe+ń
toń+śe+t́+ńe+ńeń
toń+śe+t́+ńe+de
toń+śe+t́+ńe+se
toń+śe+t́+ńe+ste
toń+śe+t́+ńe+va
toń+śe+t́+ńe+ks
toń+śe+t́+ńe+ška
toń+śe+t́+ńe+vt́eme

sonze+śe+t́+ńe
sonze+śe+t́+ńe+ń
sonze+śe+t́+ńe+ńeń
sonze+śe+t́+ńe+d́e
sonze+śe+t́+ńe+se
sonze+śe+t́+ńe+ste
sonze+śe+t́+ńe+va
sonze+śe+t́+ńe+ks
sonze+śe+t́+ńe+ška
sonze+śe+t́+ńe+vt́eme

<pgNo>199</pgNo>
199

MORPHOLOGY

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

mińek+śe+t́+ńe
mińek+śe+t́+ńe+ń
mińek+śe+t́+ńe+ńeń
mińek+śe+t́+ńe+d́e
mińek+śe+t́+ńe+se
mińek+śe+t́+ńe+ste
mińek+śe+t́+ńe+va
mińek+śe+t́+ńe+ks
mińek+śe+t́+ńe+ška
mińek+śe+t́+ńe+vt́eme

ti͔ŋk+śe+t́+ńe
ti͔ŋk+śe+t́+ńe+ń
ti͔ŋk+śe+t́+ńe+ńeń
ti͔ŋk+śe+t́+ńe+de
ti͔ŋk+śe+t́+ńe+se
ti͔ŋk+śe+t́+ńe+ste
ti͔ŋk+śe+t́+ńe+va
ti͔ŋk+śe+t́+ńe+ks
ti͔ŋk+śe+t́+ńe+ška
ti͔ŋk+śe+t́+ńe+vt́eme

si͔nst+śe+t́+ńe
si͔nst+śe+t́+ńe+ń
si͔nst+śe+t́+ńe+ńeń
si͔nst+śe+t́+ńe+d́e
si͔nst+śe+t́+ńe+se
si͔nst+śe+t́+ńe+ste
si͔nst+śe+t́+ńe+va
si͔nst+śe+t́+ńe+ks
si͔nst+śe+t́+ńe+ška
si͔nst+śe+t́+ńe+vt́eme

Now, if we reconsider the 1SG and 2SG in table (4.69) on the basis of the 3SG, 1PL, 2PL and
3PL reﬂexive/intensive zero-marking strategy exhibited in PRON-PERS +REFL+POSS-Y.GEN+,
we will arrive at forms such as tońćit́ńt́ rendered by this author as ton+ś+et́+eńt́ (cf. MW
IV: 2315b) see also (95), above.
Table 4.71

SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

Singular genitive-case reﬂexive/intensive pronouns with zero-marking strategy
in all persons
1SG
2SG
3SG
mon+ś+eń+eś
mon+ś+eń+eńt́
mon+ś+eń+eńt́eń
mon+ś+eń+d́e+ńt́
mon+ś+eń+se+ńt́
mon+ś+eń+ste+ńt́
mon+ś+eń+ga+ńt́
mon+ś+eń+eks
mon+ś+eń+ška+ńt́
mon+ś+eń+t́eme+ńt́

ton+ś+et́+eś
ton+ś+et́+eńt́
ton+ś+et́+eńt́eń
ton+ś+et́+d́e+ńt́
ton+ś+et́+se+ńt́
ton+ś+et́+ste+ńt́
ton+ś+et́+ka+ńt́
ton+ś+et́+eks
ton+ś+et́+ška+ńt́
ton+ś+et́+t́eme+ńt́

son+ś+enze+ś
son+ś+enze+eńt́
son+ś+enze+eńt́eń
son+ś+enze+d́e+ńt́
son+ś+enze+se+ńt́
son+ś+enze+ste+ńt́
son+ś+enze+va+ńt́
son+ś+enze+ks
son+ś+enze+ška+ńt́
son+ś+enze+vt́eme+ńt́

mon+ś+eń+e+t́ńe
mon+ś+eń+e+t́+ńe+ń
mon+ś+eń+e+t́+ńe+ńeń
mon+ś+eń+e+t́+ńe+d́e
mon+ś+eń+e+t́+ńe+se
mon+ś+eń+e+t́+ńe+ste
mon+ś+eń+e+t́+ńe+va
mon+ś+eń+e+t́+ńe+ks
mon+ś+eń+e+t́+ńe+ška
mon+ś+eń+e+t́+ńe+vt́eme

ton+ś+et́+t́+ńe
ton+ś+et́+e+t́+ńe+ń
ton+ś+et́+e+t́+ńe+ńeń
ton+ś+et́+e+t́+ńe+d́e
ton+ś+et́+e+t́+ńe+se
ton+ś+et́+e+t́+ńe+ste
ton+ś+et́+e+t́+ńe+va
ton+ś+et́+e+t́+ńe+ks
ton+ś+et́+e+t́+ńe+ška
ton+ś+et́+e+t́+ńe+vt́eme

son+ś+enze+t́+ńe
son+ś+enze+t́+ńe+ń
son+ś+enze+t́+ńe+ńeń
son+ś+enze+t́+ńe+d́e
son+ś+enze+t́+ńe+se
son+ś+enze+t́+ńe+ste
son+ś+enze+t́+ńe+va
son+ś+enze+t́+ńe+ks
son+ś+enze+t́+ńe+ška
son+ś+enze+t́+ńe+vt́eme

<pgNo>200</pgNo>
200

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Thus we have arrived at three formulations for genitive-case personal and reﬂexive/
intensive pronouns with definite declension. There is a zero-marker strategy for both
the genitive-case personal pronoun and reﬂexive/intensive pronoun, and a SOD marker
strategy for genitive-case personal pronouns. This means that another table, table (4.72)
must be rendered for reﬂexive/intensive pronouns with a SOD marking strategy.
Table 4.72

SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

Genitive-form reﬂexive/intensive pronouns with SOD marking strategy
Singular NP head
1SG
2SG
3SG
mon+ś+eń+śe+ś
mon+ś+eń+śe+ńt́
mon+ś+eń+śe+ńt́eń
mon+ś+eń+śe+d́e+ńt́
mon+ś+eń+śe+se+ńt́
mon+ś+eń+śe+ste+ńt́
mon+ś+eń+śe+va+ńt́
mon+ś+eń+śe+ks
mon+ś+eń+śe+ška+ńt́
mon+ś+eń+śe+vt́eme+ńt́

ton+ś+et́+śe+ś
ton+ś+et́+śe+ńt́
ton+ś+et́+śe+ńt́eń
ton+ś+et́+śe+d́e+ńt́
ton+ś+et́+śe+se+ńt́
ton+ś+et́+śe+ste+ńt́
ton+ś+et́+śe+va+ńt́
ton+ś+et́+śe+ks
ton+ś+et́+śe+ška+ńt́
ton+ś+et́+śe+vt́eme+ńt́

son+ś+enze+śe+ś
son+ś+enze+śe+ńt́
son+ś+enze+śe+ńt́eń
son+ś+enze+śe+d́e+ńt́
son+ś+enze+śe+se+ńt́
son+ś+enze+śe+ste+ńt́
son+ś+enze+śe+va+ńt́
son+ś+enze+śe+ks
son+ś+enze+śe+ška+ńt́
son+ś+enze+śe+vt́eme+ńt́

1PL

2PL

3PL

miń+ś+eńek+śe+ś
miń+ś+eńek+śe+ńt́
miń+ś+eńek+śe+ńt́eń
miń+ś+eńek+śe+d́e+ńt́
miń+ś+eńek+śe+se+ńt́
miń+ś+eńek+śe+ste+ńt́
miń+ś+eńek+śe+va+ńt́
miń+ś+eńek+śe+ks
miń+ś+eńek+śe+ška+ńt́
miń+ś+eńek+śe+vt́eme+ńt́

ti͔ń+ś+eŋk+śe+ś
ti͔ń+ś+eŋk+śe+ńt́
ti͔ń+ś+eŋk+śe+ńt́eń
ti͔ń+ś+eŋk+śe+d́e+ńt́
ti͔ń+ś+eŋk+śe+se+ńt́
ti͔ń+ś+eŋk+śe+ste+ńt́
ti͔ń+ś+eŋk+śe+va+ńt́
ti͔ń+ś+eŋk+śe+ks
ti͔ń+ś+eŋk+śe+ška+ńt́
ti͔ń+ś+eŋk+śe+vt́eme+ńt́

si͔ń+ś+est+śe+ś
si͔ń+ś+est+śe+ńt́
si͔ń+ś+est+śe+ńt́eń
si͔ń+ś+est+śe+d́e+ńt́
si͔ń+ś+est+śe+se+ńt́
si͔ń+ś+est+śe+ste+ńt́
si͔ń+ś+est+śe+va+ńt́
si͔ń+ś+est+śe+ks
si͔ń+ś+est+śe+ška+ńt́
si͔ń+ś+est+śe+vt́eme+ńt́

<pgNo>201</pgNo>
MORPHOLOGY

201

Plural NP head
SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

mon+ś+eń+e+t́ńe
mon+ś+eń+e+t́+ńe+ń
mon+ś+eń+e+t́+ńe+ńeń
mon+ś+eń+e+t́+ńe+d́e
mon+ś+eń+e+t́+ńe+se
mon+ś+eń+e+t́+ńe+ste
mon+ś+eń+e+t́+ńe+va
mon+ś+eń+e+t́+ńe+ks
mon+ś+eń+e+t́+ńe+ška
mon+ś+eń+e+t́+ńe+vt́eme

ton+ś+et́+śe+t́+ńe
ton+ś+et́+śe+t́+ńe+ń
ton+ś+et́+śe+t́+ńe+ńeń
ton+ś+et́+śe+t́+ńe+d́e
ton+ś+et́+śe+t́+ńe+se
ton+ś+et́+śe+t́+ńe+ste
ton+ś+et́+śe+t́+ńe+va
ton+ś+et́+śe+t́+ńe+ks
ton+ś+et́+śe+t́+ńe+ška
ton+ś+et́+śe+t́+ńe+vt́eme

son+ś+enze+śe+t́+ńe
son+ś+enze+śe+t́+ńe+ń
son+ś+enze+śe+t́+ńe+ńeń
son+ś+enze+śe+t́+ńe+d́e
son+ś+enze+śe+t́+ńe+se
son+ś+enze+śe+t́+ńe+ste
son+ś+enze+śe+t́+ńe+va
son+ś+enze+śe+t́+ńe+ks
son+ś+enze+śe+t́+ńe+ška
son+ś+enze+śe+t́+ńe+vt́eme

miń+ś+eńek+śe+t́+ńe
miń+ś+eńek+śe+t́+ńe+ń
miń+ś+eńek+śe+t́+ńe+ńeń
miń+ś+eńek+śe+t́+ńe+d́e
miń+ś+eńek+śe+t́+ńe+se
miń+ś+eńek+śe+t́+ńe+ste
miń+ś+eńek+śe+t́+ńe+va
miń+ś+eńek+śe+t́+ńe+ks
miń+ś+eńek+śe+t́+ńe+ška
miń+ś+eńek+śe+t́+ńe+vt́eme

ti͔ń+ś+eŋk+śe+t́+ńe
ti͔ń+ś+eŋk+śe+t́+ńe+ń
ti͔ń+ś+eŋk+śe+t́+ńe+ńeń
ti͔ń+ś+eŋk+śe+t́+ńe+de
ti͔ń+ś+eŋk+śe+t́+ńe+se
ti͔ń+ś+eŋk+śe+t́+ńe+ste
ti͔ń+ś+eŋk+śe+t́+ńe+va
ti͔ń+ś+eŋk+śe+t́+ńe+ks
ti͔ń+ś+eŋk+śe+t́+ńe+ška
ti͔ń+ś+eŋk+śe+t́+ńe+vt́eme

si͔ń+ś+est+śe+t́+ńe
si͔ń+ś+est+śe+t́+ńe+ń
si͔ń+ś+est+śe+t́+ńe+ńeń
si͔ń+ś+est+śe+t́+ńe+d́e
si͔ń+ś+est+śe+t́+ńe+se
si͔ń+ś+est+śe+t́+ńe+ste
si͔ń+ś+est+śe+t́+ńe+va
si͔ń+ś+est+śe+t́+ńe+ks
si͔ń+ś+est+śe+t́+ńe+ška
si͔ń+ś+est+śe+t́+ńe+vt́eme

We now have four specific declension tables drafted (4.68, 4.70–72) demonstrating
the hypothetical combinations of genitive-case personal pronouns and reﬂexive/
intensive pronouns with two marking strategies for MWN. We will now apply these same
combinations with reﬂexive/intensive stems in tables (4.73–75), and address the matter
of corpora attestation.

<pgNo>202</pgNo>
202

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.73

Genitive-case reﬂexive/intensive stems with zero-marking
1SG
2SG
3SG

SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

eś+eń+eś
eś+eń+eńt́
eś+eń+eńt́eń
eś+eń+d́e+ńt́
eś+eń+se+ńt́
eś+eń+ste+ńt́
eś+eń+ga+ńt́
eś+eń+ks+eńt́
eś+eń+ška+ńt́
eś+eń+t́eme+ńt́

eś+et́+eś
eś+et́+eńt́
eś+et́+eńt́eń
eś+et́+d́e+ńt́
eś+et́+se+ńt́
eś+et́+ste+ńt́
eś+et́+ka+ńt́
eś+et́+eks+eńt́
eś+et́+ška+ńt́
eś+et́+t́eme+ńt́

eś+enze+ś
eś+enze+eńt́
eś+enze+eńt́eń
eś+enze+d́e+ńt́
eś+enze+se+ńt́
eś+enze+ste+ńt́
eś+enze+va+ńt́
eś+enze+ks+eńt́
eś+enze+ška+ńt́
eś+enze+vt́eme+ńt́

PL

eś+eń+e+t́ńe
eś+et́+t́+ńe
eś+enze+t́+ńe
eś+eń+e+t́+ńe+ń
eś+et́+e+t́+ńe+ń
eś+enze+t́+ńe+ń
DAT
eś+eń+e+t́+ńe+ńeń
eś+et́+e+t́+ńe+ńeń
eś+enze+t́+ńe+ńeń
ABL
eś+eń+e+t́+ńe+d́e
eś+et́+e+t́+ńe+d́e
eś+enze+t́+ńe+d́e
INE
eś+eń+e+t́+ńe+se
eś+et́+e+t́+ńe+se
eś+enze+t́+ńe+se
ELA
eś+eń+e+t́+ńe+ste
eś+et́+e+t́+ńe+ste
eś+enze+t́+ńe+ste
PROL
eś+eń+e+t́+ńe+va
eś+et́+e+t́+ńe+va
eś+enze+t́+ńe+va
TRNSL
eś+eń+e+t́+ńe+ks
eś+et́+e+t́+ńe+ks
eś+enze+t́+ńe+ks
COMP
eś+eń+e+t́+ńe+ška
eś+et́+e+t́+ńe+ška
eś+enze+t́+ńe+ška
ABE
eś+eń+e+t́+ńe+vt́eme
eś+et́+e+t́+ńe+vt́eme eś+enze+t́+ńe+vt́eme
Genitive-form personal pronouns in fused head constructions
“STEM-REFL-GEN+POSS+CX(+DEF)”
NOM
GEN

SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

1PL

2PL

3PL

eś+eńek+eś
eś+eńek+eńt́
eś+eńek+eńt́eń
eś+eńek+t́e+ńt́
eś+eńek+se+ńt́
eś+eńek+ste+ńt́
eś+eńek+ka+ńt́
eś+eńek+eks
eś+eńek+ška+ńt́
eś+eńek+t́eme+ńt́

eś+eŋk+eś
eś+eŋk+eńt́
eś+eŋk+eńt́eń
eś+eŋk+t́e+ńt́
eś+eŋk+se+ńt́
eś+eŋk+ste+ńt́
eś+eŋk+ka+ńt́
eś+eŋk+eks
eś+eŋk+ška+ńt́
eś+eŋk+t́eme+ńt́

eś+est+eś
eś+est+eńt́
eś+est+eńt́eń
eś+est+te+ńt́
eś+est+se+ńt́
eś+est+ste+ńt́
eś+est+ka+ńt́
eś+est+eks
eś+est+ška+ńt́
eś+est+teme+ńt́

<pgNo>203</pgNo>
203

MORPHOLOGY

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

Table 4.74
SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

eś+eńek+t́+ńe
eś+eńek+t́+ńe+ń
eś+eńek+t́+ńe+ńeń
eś+eńek+t́+ńe+d́e
eś+eńek+t́+ńe+se
eś+eńek+t́+ńe+ste
eś+eńek+t́+ńe+va
eś+eńek+t́+ńe+ks
eś+eńek+t́+ńe+ška
eś+eńek+t́+ńe+vt́eme

eś+eŋk+t́+ńe
eś+eŋk+t́+ńe+ń
eś+eŋk+t́+ńe+ńeń
eś+eŋk+t́+ńe+de
eś+eŋk+t́+ńe+se
eś+eŋk+t́+ńe+ste
eś+eŋk+t́+ńe+va
eś+eŋk+t́+ńe+ks
eś+eŋk+t́+ńe+ška
eś+eŋk+t́+ńe+vt́eme

eś+est+t+ne
eś+est+t+ne+ń
eś+est+t+ne+ńeń
eś+est+t+ne+d́e
eś+est+t+ne+se
eś+est+t+ne+ste
eś+est+t+ne+va
eś+est+t+ne+ks
eś+est+t+ne+ška
eś+est+t+ne+vt́eme

Genitive-case reﬂexive/intensive stems with SOD marking
1SG
2SG
3SG
eś+eń+śe+ś
eś+eń+śe+ńt́
eś+eń+śe+ńt́eń
eś+eń+śe+d́e+ńt́
eś+eń+śe+se+ńt́
eś+eń+śe+ste+ńt́
eś+eń+śe+va+ńt́
eś+eń+śe+ks+eńt́
eś+eń+śe+ška+ńt́
eś+eń+śe+vt́eme+ńt́

eś+et́+śe+ś
eś+et́+śe+ńt́
eś+et́+śe+ńt́eń
eś+et́+śe+d́e+ńt́
eś+et́+śe+se+ńt́
eś+et́+śe+ste+ńt́
eś+et́+śe+va+ńt́
eś+et́+śe+ks+eńt́
eś+et́+śe+ška+ńt́
eś+et́+śe+vt́eme+ńt́

eś+enze+śe+ś
eś+enze+śe+ńt́
eś+enze+śe+ńt́eń
eś+enze+śe+d́e+ńt́
eś+enze+śe+se+ńt́
eś+enze+śe+ste+ńt́
eś+enze+śe+va+ńt́
eś+enze+śe+ks+eńt́
eś+enze+śe+ška+ńt́
eś+enze+śe+vt́eme+ńt́

eś+eń+śe+t́+ńe
eś+eń+śe+t́+ńe+ń
eś+eń+śe+t́+ńe+ńeń
eś+eń+śe+t́+ńe+d́e
eś+eń+śe+t́+ńe+se
eś+eń+śe+t́+ńe+ste
eś+eń+śe+t́+ńe+va
eś+eń+śe+t́+ńe+ks
eś+eń+śe+t́+ńe+ška
eś+eń+śe+t́+ńe+vt́eme

eś+et́+śe+t́+ńe
eś+et́+śe+t́+ńe+ń
eś+et́+śe+t́+ńe+ńeń
eś+et́+śe+t́+ńe+d́e
eś+et́+śe+t́+ńe+se
eś+et́+śe+t́+ńe+ste
eś+et́+śe+t́+ńe+va
eś+et́+śe+t́+ńe+ks
eś+et́+śe+t́+ńe+ška
eś+et́+śe+t́+ńe+vt́eme

eś+enze+śe+t́+ńe
eś+enze+śe+t́+ńe+ń
eś+enze+śe+t́+ńe+ńeń
eś+enze+śe+t́+ńe+d́e
eś+enze+śe+t́+ńe+se
eś+enze+śe+t́+ńe+ste
eś+enze+śe+t́+ńe+va
eś+enze+śe+t́+ńe+ks
eś+enze+śe+t́+ńe+ška
eś+enze+śe+t́+ńe+vt́eme

<pgNo>204</pgNo>
204

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.75

Genitive-form personal pronouns in fused head constructions
“STEM-REFL+POSS.GEN+DEM-DIST+CX(+DEF)”
1PL
2PL
3PL

SG
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

PL
NOM
GEN
DAT
ABL
INE
ELA
PROL
TRNSL
COMP
ABE

eś+eńek+śe+ś
eś+eńek+śe+ńt́
eś+eńek+śe+ńt́eń
eś+eńek+śe+d́e+ńt́
eś+eńek+śe+se+ńt́
eś+eńek+śe+ste+ńt́
eś+eńek+śe+va+ńt́
eś+eńek+śe+ks
eś+eńek+śe+ška+ńt́
eś+eńek+śe+vt́eme+ńt́

eś+eŋk+śe+ś
eś+eŋk+śe+ńt́
eś+eŋk+śe+ńt́eń
eś+eŋk+śe+d́e+ńt́
eś+eŋk+śe+se+ńt́
eś+eŋk+śe+ste+ńt́
eś+eŋk+śe+va+ńt́
eś+eŋk+śe+ks
eś+eŋk+śe+ška+ńt́
eś+eŋk+śe+vt́eme+ńt́

eś+est+śe+ś
eś+est+śe+ńt́
eś+est+śe+ńt́eń
eś+est+śe+d́e+ńt́
eś+est+śe+se+ńt́
eś+est+śe+ste+ńt́
eś+est+śe+va+ńt́
eś+est+śe+ks
eś+est+śe+ška+ńt́
eś+est+śe+vt́eme+ńt́

eś+eńek+śe+t́+ńe
eś+eńek+śe+t́+ńe+ń
eś+eńek+śe+t́+ńe+ńeń
eś+eńek+śe+t́+ńe+d́e
eś+eńek+śe+t́+ńe+se
eś+eńek+śe+t́+ńe+ste
eś+eńek+śe+t́+ńe+va
eś+eńek+śe+t́+ńe+ks
eś+eńek+śe+t́+ńe+ška
eś+eńek+śe+t́+ńe+vt́eme

eś+eŋk+śe+t́+ńe
eś+eŋk+śe+t́+ńe+ń
eś+eŋk+śe+t́+ńe+ńeń
eś+eŋk+śe+t́+ńe+de
eś+eŋk+śe+t́+ńe+se
eś+eŋk+śe+t́+ńe+ste
eś+eŋk+śe+t́+ńe+va
eś+eŋk+śe+t́+ńe+ks
eś+eŋk+śe+t́+ńe+ška
eś+eŋk+śe+t́+ńe+vt́eme

eś+est+śe+t́+ńe
eś+est+śe+t́+ńe+ń
eś+est+śe+t́+ńe+ńeń
eś+est+śe+t́+ńe+d́e
eś+est+śe+t́+ńe+se
eś+est+śe+t́+ńe+ste
eś+est+śe+t́+ńe+va
eś+est+śe+t́+ńe+ks
eś+est+śe+t́+ńe+ška
eś+est+śe+t́+ńe+vt́eme

Attestation of two marking strategies for three genitive pronouns was conducted
according to a simple question of whether any case form other than the nominative
singular indefinite declension occurred in the corpora. Table (4.76) illustrates the
findings.
Table 4.76

1

SG
PL

2

SG
PL

3

SG
PL

Attestation of two modifier-without-noun marking strategies
for three sets of pronouns
Personal pronoun Reﬂexive/intensive pronoun Reﬂexive/intensive stem
Zero DEM
Zero
DEM
Zero
DEM
NA
+
NA
+
NA
+
+
+
+
NA
+
+
+
+
+
NA
+
+
+
+
+
NA
+
NA
+
NA
+
NA
+
NA
+
+
NA
NA
+
NA

<pgNo>205</pgNo>
205

MORPHOLOGY

The only paradigm of minimal attestation was that for the combination reﬂexive/
intensive pronoun with SOD marking. This, however, is not surprising, as the genitivecase reﬂexive/intensive pronouns are low frequency, see table (4.77), where, for purposes
of comparison, I have provided statistics for plain genitive forms and genitive forms
with clitics.
Table 4.77

1

SG
PL

2

SG
PL

3

SG
PL

Total

Genitive forms of personal pronouns, reﬂexive/intensive pronouns
and reﬂexive/intensive stems
Personal pronoun Reﬂexive/intensive
Reﬂexive/intensive stem
pronoun
Plain
12,196
8723
7578
2233
17,887
7528
56,145

Clitic
521
120
157
39
265
92
1194

Plain
145
77
160
27
338
71
818

Clitic
37
5
39
5
28
1
115

Plain
929
707
931
180
4238
1453
8438

Clitic
44
19
32
3
74
12
184

Total
13,872
9651
8897
2487
22,830
9157
66,894

With an attested system of genitive-case personal pronouns, reﬂexive/intensive pronouns
and reﬂexive/intensive stems in combination with two strategies for modifier-withoutnoun marking, we arrive at the six tables (4.68, 4.70–75) with attestation in table
(4.76). But what is there to say of the 3SG concatenation demonstrated by Zaicz (2006:
197), where he has apparently made an analogical paradigm according to a different
interpretation of the genitive-case pronouns 1SG and 2SG plus SOD strategy seen in table
(4.69), mońśeś ‘mine (in subject function)’ and tońśeś ‘yours (in subject function)’?
According to what can be seen in his table – reproduced below in (4.78) (with darkening
in the cells of inconsistent concatenation, whereas the columns have been assigned Latin
numerals for ease of location, by this author) – Zaicz has apparently interpreted the
forms in column II as definite declensions of the reﬂexive/intensive pronouns. Can such
forms be attested in the Erzya corpora?

<pgNo>206</pgNo>
206

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Table 4.78

Mordva 3SG pronouns á la Zaicz (2006: 197)
PRO.s3
Possessive.PRO.s3
‘(s)he’
‘his/hers’
I
II
III
N
son
son%sʲesʲ
~ son%zesʲ
G/A
son%ze
son%sʲenʲtʲ
~ son%zenʲtʲ
Dat/All
sonʲ%enze
son%sʲenʲtʲenʲ
~ son%zenʲtʲenʲ
Ine
sonʲ%senze
son%sesenʲtʲ
~ son%zesenʲtʲ

NOM
GEN
DAT
INE

ELA
ILL
PROL
ABL
TRNSL
ABE
COMP

Ela
Ill
Prol
Abl
(Trans
Abe
Cfv

sonʲ%stenze
sonʲ%zenze
sonʲ%ganzo
sonʲ%dʲenze
sonʲ%ksenze
sonʲ%tʲemenze
sonʲ%škanzo

son%stesenʲtʲ
sonʲ%zesenʲtʲ
sonʲ%ganʲtʲ
sonʲ%dʲenʲtʲ
sonʲ%ksenʲtʲ
sonʲ%tʲemenʲtʲ
sonʲ%škanʲtʲ

~ son%stesenʲtʲ
~ sonʲ%zesenʲtʲ
~ son%ganʲtʲ
~ sonʲdʲenʲtʲ
~ son%ksenʲtʲ
~ sonʲtʲemenʲtʲ
~ son%škańtʲ

REFLEX.PRO.s3
‘him/herself’
IV
esʲ
esʲ%enze
esʲ%tʲenze
esʲ%senze
esʲ%stenze
esʲ%senze
esʲ%kanzo
esʲ%tʲedʲenze
esʲ%ksenze)
esʲ%tʲemenze
esʲ%eškanzo

First of all, it cannot be over-stressed that the Erzya language attests to genitive-case
pronouns, which correlate in modifier function with genitive-case nouns, and that there
are no pronoun forms which correlate in marking to the head noun they modify, i.e. this
system does not parallel that of the German deine Mutter ‘your mother’ versus dein
Vater ‘your father’ where the shape of the pronoun is dictated by its head, and therefore I
do not speak of possessive pronouns. Second, the genitive form in column one is realized
phonetically without palatalization due to the following alveolar fricative, but the quality
of the following front mid vowel e indicates that there was a fronting trigger, probably a
palatalized ń as is the case in the closely related Moksha language. Third, the only 3SG
forms in the majority corpus beginning in sonśe% and therefore addressing all members
construed for column II, are the reﬂexive/intensive pronouns illustrated in table (4.71),
which are readily spotted due to the obligatory adnominal-person marking. Fourth,
only the first four rows of column III adhere to the concatenation scheme genitive-case
pronoun plus definite declension. Of course, this conception of the Erzya system is
not original with Zaicz, the Grammar of Mordvin Languages (1980: 267) implies that
there exist definite-declension forms of the Erzya reﬂexive/intensive pronouns, and an
earlier version (GMYa 1962 I: 232) even provides a single 3SG form *sonśeś, but then
the authors only explicitly show the paradigms of the 1SG and 2SG persons, whereas the
3SG paradigm provided in parallel to those of the other singular genitive pronouns is
realized in sonześ the zero-marking strategy for MWN (see GMYa 1962 I: 232). If they
had attempted to attest such forms from any of the other persons, their search would have
proven fruitless, and I would be denied the opportunity to correct these misconstruals of
the Erzya language used in literature.

<pgNo>207</pgNo>
## 5. Conclusions

In the introduction I have discussed the prominent issues of Erzyan languagehood, where
it is spoken and its use as a medium of literary communication. I have provided examples
of phenomena obtaining in the language striving toward consistent and contextually
sufficient renditions of the literary and, on occasion, the spoken language. Great stress
has been placed on the attestability of phenomena in a majority corpus, where authors
and specific pages in publications are afforded their own place in the description of
the language. The identification of individual writers is seen as a necessary building
block in the analysis of variation in morphological phenomena attested in the language.
Writers of this relatively new written medium hale from various dialect backgrounds,
as do their editors and proof-readers. The identification of synchronic-geographical
parameters that can be attested might, in fact, prove more relevant than hypotheticaldiachronic parameters that cannot.

Phonology
An adjusted and attested phonological account of the modern Erzya language was
made on the basis of the majority corpus with the consultation of native speakers of the
language. As is the case with most languages there are phonemes whose prominence
varies from native to loanwords. Assuming that native speakers and writers do not
automatically register their usage of etymologically native versus loan vocabulary, and
natural language also entails use of affected words, this treatise of Erzya has adhered to a
system of six vowel phonemes (see table 3.7) and twenty-nine consonant phonemes (see
table 3.8) partially represented in the unmodified Cyrillic script of thirty-three characters.
The additional vowel phoneme unrounded high central i͔ is marginal but can be attested
in minimal pairs in native and loan word stems, but not in affixes or at the stem-affix
juncture (see table 3.5). The additional consonant phoneme velar nasal ŋ is attested
in minimal pairs where the alveolar nasal occurs before velar plosives (in loan words
and in stem-affix junctures) and word initially (see table 3.3). The unrounded mid
central vowel e͔, however, was determined to be an allophone of two separate phonemes:
the unrounded mid front vowel e and the unrounded high central vowel i͔ (in Russianlanguage achronyms). Finally, the bilabial trill ʙ, which appears only word-initially in
three word roots, has not appeared in the examples of this dissertation.
Six prominent phenomena contributing to allomorphic variation in the morphological
system of Erzya were outlined, of which three are especially important to this treatise of
morphology in that they are ubiquitous or contribute to ambiguity in the system:

<pgNo>208</pgNo>
208

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

(a)Vowel harmony affects allomorphic variation in nineteen morphemes of adnominal declension with target vowels attested in four affix positions: affix-initial, affixinternal, affix-final and stand-alone.
(b) Palatal harmony contributes to ambiguity in front-vowel contexts in the interpretation of surface coda %ń and %t́. Adnominal 1SG %ON marking is realized in coda
%ń and thus is a homonym of the realization of the indefinite declension genitive %Oń,
which is also used in marking the genitive case on distinct, singular referents, especially
proper nouns and possessa of the 1SG possessor. Adnominal 2SG %OT marking is realized in coda %t́ and thus is a homonym of the realization of the 2SG possessive declension
kin-term genitive %Ot́ and sometimes the nominative plural in %T. (See section 3.2.2.
PALATAL HARMONY (1–4).)
(c) Stem-final vowel loss causes ambiguity in a%final stems at two junctures. (Cf.
sections 3.2.6 STEM-FINAL VOWEL LOSS, 4.2.3.1.1. FIRST PERSON, 4.2.3.1.2. SECOND PERSON
4.2.4. NOMINAL CONJUGATION MARKERS and 4.4. PARADIGM DEFECTIVITY IN ERZYA POSSESSOR
INDEXING.) Inﬂection involving the indefinite nominative plural morpheme in %T is realized in a word form homonymous to the nominal conjugation form of that same stem
in the indicative present 2SG, see (1). Likewise, inﬂection involving the 1SG possessive
declension nominative-plural or oblique morpheme in %ON is realized in a word form
homonymous to a nominal conjugation form of that same stem in the indicative present
1SG, see (2).
(1)

a. ava+T
=> avat
mother_N+PL.NOM
b. ava+at
=> avat (folklore, old literary, and Alatyr' subdialects avajat)
mother_N+IND.PRES.PRED-2SG

(2)

a. ćora+ON => ćoran
son_N+POSS-1SG>PL.NOM
b. ćora+an => ćoran (folklore, old literary, and Alatyr' subdialects ćorajan)
son_N+IND.PRES.PRED-1SG

<pgNo>209</pgNo>
CONCLUSIONS

209

Morphology
Morphology saw the establishment of four separate inﬂectional levels: the word stem,
declension, conjugation and clitic marking. Each was inspected and provided with morphological, semantic and statistic data relevant to subsequent inspection. Morphological
criteria were then used in the investigation of sublexica prominent in various case slots.
Inconsistencies in the possessive declension slots 1SG and 2SG were investigated. And
finally, a phenomena called secondary declension, a phenomena involving the dropping
of a contextually retrievable head noun in an NP and the raising of one of the retained
modifiers to main-item status.
Nominal-type inﬂectional STEM TYPES were established as three: stems ending in
consonants (N1) – with a subgroup discerned in s(h)ibilant-final stems (N1S); stems
ending in mid vowels that attest to optional stem-final vowel loss in specific declension
cells (N2), and stems ending in vowels that are not optionally dropped before affix-initial
onset consonants (N3).
N1

= kev ‘stone’; kal ‘fish’; sod ‘soot’

N1S = piks ‘rope’; kijaks ‘ﬂoor’; oš ‘town, city’
N2

= paŋgo ‘mushroom; bonnet’; eĺd́e ‘mare’; valdo ‘light (a.; n.)’

N3

= kudo ‘home; house; room; container’; vele ‘village’; ava ‘woman; mother’

The concatenation of Erzya adnominal morphology can be broken down into three layers: declensions (4.2.1. CASE, 4.2.2. NUMBER and 4.2.3. DEICTIC MARKERS), adnominal
conjugation (4.2.4 NOMINAL CONJUGATION MARKERS) and clitic marking (4.2.5 THE CLITIC
%GAK). Due to ZERO-marking strategies in many slots of inﬂection, adnominal morphology also requires an understanding of nominal-type word-stem morphology, which can
be utilized in all layers of adnominal inﬂection. The declension types, INDEF, POSSESSIVE
and DEFINITE, the last of which might, for concatenational reasons be split into SINGULAR
and PLURAL, attest inﬂection in 15, 13, 10 and 13 cases, respectively (see table 4.40).
Adnominal conjugation, which otherwise is the focus of a doctoral dissertation
(Turunen: 2010 “Nonverbal predication in Erzya: Studies on morpho-syntactic variation
and part of speech distinctions”), has been outlined according to source grammars and
attestation from corpus and field work. The compatibility of possessor index marking
with case has been plotted in table (4.42). There are only five cases attesting possessive
declension compatibility with nominal conjugation: the nominative, inessive, genitive,
prolative and locative.
Clitic marking was observed as a dichotomy, either it is or it isn’t. It was observed
that the dative adposition t́e%, with obligatory adnominal-person marking, does not cooccur with clitic marking, a matter which may be correlate with grammaticalization.
(See more specifics in section 4.3 ADNOMINAL-TYPE PERSON IN PARTS OF SPEECH and table
4.49b.)

<pgNo>210</pgNo>

Possessive declension compatibility
The unique word forms of the majority corpus were filtered for possessive declension
compatibility and 27 sublexica were discerned in a manual scan of the hits, which appeared on a highest-frequency-first-basis. Attestation was partially intuitional, but comparison of the sublexica was also applied. The results were rendered for the 351 hypothetical cells; there were 130 possible declensions attested (see table 4.59).
Inspection of possessive-declension attestation reveals variation in the association
of sublexica, case and possessor index marking in Erzya. While there is a relatively high
frequency of kin terms and body parts with possessvie declension marking in the core
cases, spatial entities and abstract referents are more typically the targets of local-case +
possessor-index marking. The obligatory adnominal-marking requirement affects only
certain sublexica, and these sublexica attest to limited case inventory in the majority
corpus. Statistics on adnominal-person marking strategies morphological versus lexical
provide evidence for word groups with distinctive patterns, which can be delimited by
part-of-speech affiliation and/or semantic alignment (noun phrase, quantifiers, adpositional phrase and noun-like non-finite constructions in %Om). The adpositional phrase
differs from other syntactic elements in that adnominal-person marking is subject to
complementary distribution, namely, adpositions take either a preceding complement or
they are marked with a possessive index. In noun phrases (also non-finites) person can
be expressed with both lexical and morphological means (see tables 4.53–4.58).
Obligatory adnominal-person marking was attested in four parts of speech, nouns,
quantifiers, pronouns, adpositions and noun-like non-finite constructions in %Om. In the
grammars items with obligatory adnominal-person marking are usually shown to have
smaller morphological case inventories, and their appearance in the tables is largely justified by their paradigmatic attestability.
In concatenation of the language two specific phenomena were subjected to inspection:
Paradigm defectivity attested in the genitive and dative slots of the 1SG and 2SG possessive
declension tables with regard to so-called KIN-TERM affiliation and secondary declension,
a cover term for declension strategies in MODIFIERS-WITHOUT-NOUNS target NPs.

Paradigm defectivity
The investigation of paradigm defectivity attempted to ascertain the phenomena involved
in the paradigm defectivity observable in the genitive slot of the possessive declension.
(See specifics in (4.4.) PARADIGM DEFECTIVITY IN ERZYA POSSESSOR INDEXING.) It became
apparent that the notion KIN-TERM is used inconsistently with regard to the two persons,
1SG and 2SG, involved in this defectivity. On the one hand, the indefinite-declension homonymic 1SG-genitive form in %Oń was observed in Šaxmatovʺ's materials to appear with
a smaller group of referents than that of the 2SG-genitive form %Ot́, namely, 1SG-genitive
seemed to occur only with blood-kin term indicating distinct referent elder than the 1SG.

<pgNo>211</pgNo>
CONCLUSIONS

211

Comparison with dialect information from Alatyr' dialect (one with parameters for
kin and number), provided insight into the importance of the feature “distinct”, whereas
subsequently evidence from the majority corpus provided examples of distinct kin terms
used in contexts where a 3SG interpretation would be expected. Hence it was assumed
that the alleged 1SG kin-term genitive was, in fact, an indefinite genitive marker, such as
would be compatible with other high-inalienable possessa/targets of high-saliency/possessor marking, for example, proper nouns, the 1SG and 2SG person pronouns, as well as,
in this case, distinct singular kin terms.
The weight of the 2SG adnominal marking was allowed to fall on less extensive
dialect distribution. The 2SG-genitive form might be attested as an ambiguous marker
affording both a 2SG genitive interpretation and one of a dialect genitive definite singular.

Modifiers without nouns (secondary declension)
The source grammars and corpora were inspected for secondary-declension attestation.
(See specifics in (4.5.) ADNOMINAL SYNTAX AND DISTINGUISHING PERSONAL PRONOUN PARADIGMS.) It was found that Erzya attests to two strategies of MWN (modifiers-without-nouns
marking): a zero marking strategy involving a simple symmetric shift of declension
locus to the NP-final main item, and a speaker-oriented demonstrative pronoun strategy,
generally involving the distal demonstrative pronoun śe ‘that’, but probably also other
speaker-oriented demonstrative pronouns, such as śet́e ‘now this (a speaker-oriented
demonstrative pronoun introducing a newly mentioned item in a dialogue context)’. It
was then noted that certain modifier types, in written literature, attest to both strategies
of MWN marking. An inspection was made of the sublexica with regard to what modifier
types appeared with which MWN marking strategies.
The resulting hypothesis of two MWN marking strategies was then applied to the
inspection of a disparity in the description of genitive-case pronouns, personal and reﬂexive/intensive, found in various treatises of the language. It was noted that three sets
of genitive-case pronouns can be attested in the majority corpus for both strategies of
MWN marking, and that the speaker-oriented demonstrative marking strategy has erroneously been presented as a definite-declension variant of the reﬂexive/intensive pronouns.

Morphological adnominal person in Erzya
Adnominal person in the morphological system of Erzya can be attested as one of the
three declension types on a par with indefinite and definite declension. This declension
type has a range in five different parts of speech nouns, quantifiers, pronouns, adpositions and the problematic non-finites in %Om%, whereas obligatory adnominal person
marking is only attested in a minimal set of nouns, quantifiers, pronouns and adpositions.
Adnominal-person in Erzya morphology is indicated by a suffix attesting to three separate ordering strategies. The non-core cases attest to a rigid CASE MARKER + POSSESSOR
INDEX ordering; the core cases (nominative and genitive) make no distinction for case vs.

<pgNo>212</pgNo>
212

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

possessor index components, and the dative, which synchronically can be aligned with
the strategy of the other core cases, but might diachronically speaking illustrate a POSSESSOR INDEX + CASE MARKER ORDERING strategy.
Possessor index marking is used to indicate the possessor in the grammatical categories of person and number. The possessor indices also offer a minimal distinction
for the grammatical category of number for the possessa. The distinction can be seen in
the absence of an N marker (traditionally viewed as a plural marker, but also an oblique
marker). The 3SG marker in %OzO is only used with the nominative singular, syntactic
subject/subject complement reading, in the literary language (dialect evidence exists for
object marking of inanimates), whereas the 3SG marker in %OnzO appears in all other
slots. The 1SG marker in %Om is limited to the nominative and genitive singular readings
in normative grammars, while its counterpart in %ON appears in all other slots. In the
majority corpus, however, the 1SG marker in %Om can appear in all slots, whereas it is
the counterpart in %ON, which is never attested in the nominative singular slot (%ON can
be attested in the genitive, object-function slot). The remaining four persons make no
distinction for number of possessa.
Possessive declension can vary in compatibility with different sublexica from the
five parts of speech where it is attested. Compounded parameters involving: (a) possessa
and their correlation with the inalienability hierarchy, and (b) possessors with their salience in the hierarchies of accessibility might be used as argumentation for high-ranking
on the accessibility marking scale, i.e. ZERO marking. Paradigmatic defectivity can and
should be dealt with separately utilizing parameters, such as, case and person.
Possessor indexing is also attested in the secondary declension of NPs, such that it
follows a ZERO-marker strategy, and can be found in texts of the majority corpus. Most
person marking found in secondary-declension strategies involves genitive-case personal pronouns (neutral pronouns, reﬂexive/intensive stems, reﬂexive/intensive pronouns)
and the parameter [±SPEAKER-ORIENTED DEMONSTRATIVE MARKING].
Text corpora research of adnominal-person marking in the morphological system
of Erzya has helped to establish new points of departure in research of the language.

<pgNo>213</pgNo>
Erzya Source Literature (Corpora)
UPTMN 3.2 1967 = УПТМН 3.2 1967:
Эрзянские сказки
Published in: Устно-поэтическое творчество мордовского народа, в восьми томах
Саранск ― Мордовское книжное издательство.
Word count: 53,753; Character count: 674,216
Abramov, Kuz’ma 1961 = Абрамов, Кузьма 1961:
Novel: Ломантне теевсть малацекс.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 105,272; Character count: 1,417,706
Abramov, Kuz’ma 1962 = Абрамов, Кузьма 1962:
Short story: Комолявка.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 27,527; Character count: 355,391
Abramov, Kuz’ma 1964 = Абрамов, Кузьма 1964:
Novel: Качамонь пачк.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 140,482; Character count: 1,904,375
Abramov, Kuz’ma 1967 = Абрамов, Кузьма 1967:
Novel: Эсеть канстось а маряви.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 86,654; Character count: 1,162,213
Abramov, Kuz’ma 1971 = Абрамов, Кузьма 1971:
Novel: Эрзянь цёра I.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 88,851; Character count: 1,193,094
Abramov, Kuz’ma 1973 = Абрамов, Кузьма 1973:
Novel: Эрзянь цёра II.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 110,126; Character count: 1,484,740
Abramov, Kuz’ma 1974 = Абрамов, Кузьма 1974:
Short story: Нурька морот.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 69,814; Character count: 926,847
Abramov, Kuz’ma 1980 = Абрамов, Кузьма 1980:
Novel: Велень тейтерь.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 114,914; Character count: 1,542,649

<pgNo>214</pgNo>
214

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Abramov, Kuz’ma 1987 = Абрамов, Кузьма 1987:
Novel: Исяк якинь Найманов.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 82,955; Character count: 1,143,607
Abramov, Kuz’ma 1988 = Абрамов, Кузьма 1988:
Novel: Пургаз.
Саранск ― Мордовской книжной издательствась.
Format: minorityCorpus
Word count: 131,155; Character count: 1,774,090
Abramov, Kuz’ma 1989 = Абрамов, Кузьма 1989:
Novel: Олячинть кисэ.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 110,103; Character count: 1,540,338
Abramov, Kuz’ma 1994 = Абрамов, Кузьма 1994:
Short story: Сараклыч.
In Kezèren’ pingede. Èrzyan’ ras’kede, 1994. Саранск
Format: majorityCorpus
Word count: 1,855; Character count: 10,452
Abramov, Kuz’ma 1996 = Абрамов, Кузьма 1996:
Drama: Эрьванть эсензэ ормазо.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 10,819; Character count: 62,890
Ageikin, G. 1996 = Агейкин, Г. 1996:
Drama: Нумолнэть.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 1,894; Character count: 25,708
Altyshkin, Viktor 1986 = Алтышкин, Виктор 1986:
Short story: Эрямонь пинкст.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 10,442; Character count: 143,373
Anoshkin, V. 1936/2 = Аношкин, В. 1936/2:
Short story: Валскень гудок.
In Syatko, 1936/2. Саранск
Format: majorityCorpus
Word count: 7,458; Character count: 106,947
Anoshkin, V. 1938/11–12 = Аношкин, В. 1938/11–12:
Short story: Геройства.
In Syatko, 1938/11–12. Саранск
Format: majorityCorpus
Word count: 7,132; Character count: 103,012

<pgNo>215</pgNo>
ERZYA SOURCE LITERATURE

Antonov, Ivan 1956 = Антонов, Иван 1956:
Novel: Вейсэнь семиясо.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 63,063; Character count: 861,482
Arapov, Vasili = Арапов, Василий :
Short story: Лутазь теште.
Manuscript
Format: majorityCorpus
Word count: 21,304; Character count: 298,317
Arapov, Aleksandr 1987 = Арапов, Александр 1987:
Poetry: Сырнесэ моданть пой кази.
In Maney vasolkst, 1987. Саранск
Format: majorityCorpus
Word count: 1,177; Character count: 17,513
Arapov, Aleksandr 1990 = Арапов, Александр 1990:
Poetry: Вайгель.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 4,454; Character count: 59,450
Arapov, Vasili 1995 = Арапов, Василий 1995:
Short story: Аштема ков.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 23,820; Character count: 336,942
Bardin, Pyotr 1979 = Бардин, Пётр 1979:
Poetry: Тештень пиземе.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 3,302; Character count: 46,836
Bargova, Tamara 1996 = Баргова, Тамара 1996:
Drama: Чаволкайть ды превейть.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 3,650; Character count: 46,785
Bargova, Tamara 1997 = Баргова, Тамара 1997:
Short story: Вечкемань усият.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 32,945; Character count: 447,743
Batyaikin, Il’ya 1986 = Батяйкин, Илья 1986:
Poetry: Валдаське.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 2,609; Character count: 39,306

215

<pgNo>216</pgNo>
216

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Biushkina, Mariya 1996 = Биушкина, Мария 1996:
Drama: Сыргозема.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 8,089; Character count: 101,594
Bryzhinski, Andrei 1994 = Брыжинский, Андрей 1994:
Short story: Оймень валдо.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 59,280; Character count: 833,631
Bryzhinski, Mikhail 1983 = Брыжинский, Михаил 1983:
Short story: Половт.
Саранск ― Мордовской книжной издательствась.
Format: minorityCorpus
Word count: 36,994; Character count: 498,156
Bryzhinski, Mikhail 1991 = Брыжинский, Михаил 1991:
Short story: Эрямодо надобия.
Саранск ― Мордовской книжной издательствась.
Format: minorityCorpus
Word count: 47,248; Character count: 638,165
Bryzhinski, Mikhail manus = Брыжинский, Михаил manus:
Ethnofantastic: Кирдажт.
Manuscript
Format: minorityCorpus
Word count: 50,774; Character count: 676,782
Chakin, Aleksandr 1995 = Чакин, Александр 1995:
Poetry: Вечкемадо.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 200; Character count: 2,850
Chesnokov, Fyodor 1974 = Чесноков, Фёдор 1974:
Short story: Од эрямонь увт.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 30,700; Character count: 411,105
Chesnokov, Fyodor 1996 = Чесноков, Фёдор 1996:
Drama: Кавто киява.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 3,905; Character count: 49,504
Chetvergov, Evgeni 1992 = Четвергов, Евгений 1992:
Short story: Велень вайгельть.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 33015; Character count: 455,453

<pgNo>217</pgNo>
ERZYA SOURCE LITERATURE

Chetvergov, Evgeni 2003 = Четвергов, Евгений 2003:
Short story: Иень тюст.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 40,235; Character count: 537,826
Dergachyova, Lyubov' 1995 = Дергачева, Любовь 1995:
Poetry: Вечкемадо.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 2,208; Character count: 31,642
Doronin, Aleksandr 1979 = Доронин, Александр 1979:
Poetry: Тештень пиземе.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 2,149; Character count: 31,960
Doronin, Aleksandr 1993 = Доронин, Александр 1993:
Novel: Кочкодыкесь – паксянь нармунь.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 103,323; Character count: 1,387,372
Doronin, Aleksandr 1994 = Доронин, Александр 1994:
Кинь ютасы молицясь.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 43,283; Character count: 618,643
Doronin, Aleksandr 1996 = Доронин, Александр 1996:
Novel: Баягань сулейть.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 127,926; Character count: 1,859,037
Doronin, Aleksandr 2001 = Доронин, Александр 2001:
Novel: Кузьма Алексеев.
Саранск ― Мордовской книжной издательствась.
Format: minorityCorpus
Word count: 102,821; Character count: 1,429,596
Dëmin, Vasili 2008 = Дёмин, Василий 2008:
Fiction: Кузька эрзянь паз.
Manuscript
Format: majorityCorpus
Word count: 30,600; Character count: 422,782
Èryushev, Boris 1997 = Эрюшев, Борис 1997:
Short story: Тиринь масторсто кучовкс.
In Otsyor, 1997. Саранск
Format: majorityCorpus
Word count: 2,384; Character count: 34,058

217

<pgNo>218</pgNo>
218

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Evsevʹev, Makar 1931 = Евсевьев, Макар 1931:
Folklore: Мордовская свадьба.
Moskov ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 17,885; Character count: 251,263
Evsevʹev, Makar 1965 = Евсевьев, Макар 1965:
Folklore: Избранные труды 3. том.
Саранск ― Мордовской книжной издательствась.
Word count: 35,190; Character count: 461,626
Gorbunov, Genrikh 1993 = Горбунов, Генрих 1993:
Вастомат.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 46,414; Character count: 677,666
Grigoshin, Yakov 1996 = Григошин, Яков 1996:
Drama: Ёлкань перька.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 1106; Character count: 15475
Irkayev, Nikolai 1994 = Иркаев, Николяй 1994:
Poetry: Моро Ратордо.
In Kezèren’ pingede. Èrzyan’ ras’kede, 1994. Саранск
Ishutkin, Nikolai 1987 = Ишуткин, Николяй 1987:
Poetry: Маней васолкст.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 2,205; Character count: 33,697
Ishutkin, Nikolai 1994 = Ишуткин, Николяй 1994:
Poetry: Тештень мастор.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 6,421; Character count: 98,194
Kalinkin, Ivan 1995 = Калинкин, Иван 1995:
Ава ды лей.
Саранск ― Мордовской книжной издательствась.
Word count: 51,812; Character count: 764,547
Kalinkin, Ivan 2000 = Калинкин, Иван 2000:
Short story: Кискань эрямо.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Kalinkin, Ivan 2000 = Калинкин, Иван 2000:
Poetry: Сюконямо.
In Kiskan’ èryamo, 2000. Саранск
Kemaikina, Raisa 1987 = Кемайкина, Раиса 1987:
Poetry: Маней васолкст.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 2,199; Character count: 32,749

<pgNo>219</pgNo>
ERZYA SOURCE LITERATURE

Kemaikina, Raisa 1996 = Кемайкина, Раиса 1996:
Drama: Шумбрат, од ие.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 1,253; Character count: 17,534
Kirillov, Pyotr 1986 = Кириллов, Пётр 1986:
Short story: Кочказь сочиненият 3 томсо. 1-це томось.
Саранск ― Мордовской книжной издательствась.
Format: minorityCorpus
Word count: 38,686; Character count: 491,344
Kirillov, Pyotr 1987 = Кириллов, Пётр 1987:
Short story: Васенце урок.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 78,701; Character count: 1,033,975
Kirillov, Pyotr 1996 = Кириллов, Пётр 1996:
Drama: Литова.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 5,203; Character count: 69,710
Klyuchagin, Pyotr 1979 = Ключагин, Пётр 1979:
Short story: Пирявкс.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 6,050; Character count: 84,109
Klyuchagin, Pyotr 1990 = Ключагин, Пётр 1990:
Short story: Меельце кулят.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 3,407; Character count: 48,912
Klyuchagin, Pyotr 1997 = Ключагин, Пётр 1997:
Short story: Цёканка.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 26,666; Character count: 377,349
Kolomasov, Vasili 1996 = Коломасов, Василий 1996:
Novel: Лавгинов.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 60,737; Character count: 768,660
Kolomasov, Vasili 1996 = Коломасов, Василий 1996:
Short story: Тумо Петя.
In Mon’ vechkeviks knigam, 1996. Саранск
Word count: 2,645; Character count: 34,228
Krivosheyev, Il’ya 1946 = Кривошеев, Илья 1946:
Poetry: Монь ким.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 4,604; Character count: 71,204

219

<pgNo>220</pgNo>
220

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Krivosheyev, Il’ya 1996 = Кривошеев, Илья 1996:
Drama: Мезе теят – секень неят.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 3,381; Character count: 44,523
Krivosheyev, Il’ya 1999 = Кривошеев, Илья 1999:
Poetry: Кочказь произведеният.
Саранск ― Мордовской книжной издательствась.
Kuldurkayev, Yakov 1994 = Кулдуркаев, Яков 1994:
Poetry: Эрьмезь.
In Kezèren’ pingede. Èrzyan’ ras’kede, 1994. Саранск
Format: majorityCorpus
Word count: 10,466; Character count: 152,572
Kutorkin, Andrei 1969 = Куторкин, Андрей 1969:
Novel: Лажниця Сура. Васенце книга. Валдаевть.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Kutorkin, Andrei 1976 = Куторкин, Андрей 1976:
Novel: Лажниця Сура. Омбоце книга. Кавто киява.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Kutorkin, Andrei 1987 = Куторкин, Андрей 1987:
Novel: Лажниця Сура. Колмоце книга. Ашолгадома ланга.
Саранск ― Мордовской книжной издательствась.
Format: minorityCorpus
Word count: 94,692; Character count: 1,319,982
Kutorkin, Andrei 1997 = Куторкин, Андрей 1997:
Novel: Раужо Палмань.
In Rauzho Palman’, 1997. Саранск
Format: majorityCorpus
Word count: 74,540; Character count: 1,028,488
Kutorkin, Andrei 1997 = Куторкин, Андрей 1997:
Poetry: Ламзурь.
In Rauzho Palman’, 1997. Саранск
Format: majorityCorpus
Luk’yanov, Aleksei 1955 = Люкьянов, Алексей 1955:
Novel: Валдо ки.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 47,537; Character count: 633,678
Lyubayev, Pavel 1958 = Любаев, Павел 1958:
Poetry: Ялгань вал.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 3,616; Character count: 51,370

<pgNo>221</pgNo>
ERZYA SOURCE LITERATURE

Lyulyakina, Serafima 1996 = Люлякина, Серафима 1996:
Drama: Авань седей.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 3,763; Character count: 47,616
Martynov, Aleksandr 1984 = Мартынов, Александр 1984:
Novel: Толонь сёлмот.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 60,494; Character count: 823,353
Motorkin, Mikhail 1996 = Моторкин, Михаил 1996:
Drama: Чачома чи.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 5,470; Character count: 73,927
Motorkin, Mikhail 1997 = Моторкин, Михаил 1997:
Short story: Варма ковол.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 39,517; Character count: 554,726
Petaikin, Aleksandr 1995 = Петайкин, Александр 1995:
Poetry: .
In Vechkemado, Саранск.
Format: majorityCorpus
Word count: 138; Character count: 1,869
Petaikin, Aleksandr 1996 = Петайкин, Александр 1996:
Drama: Тантей Штюрьба.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 5,414; Character count: 71,431
Petrushkin, Nikolai 1997 = Петрушкин, Николай 1997:
Short story: Айгор Петя.
In Otsyor, 1997. Саранск
Format: majorityCorpus
Word count: 1,535; Character count: 21,148
Platonov, Sergei 1970 = Платонов, Сергей 1970:
Poetry: Жойниця зорят.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 4,851; Character count: 70,455
Platonov, Sergei 1975 = Платонов, Сергей 1975:
Short story: Валдо васолкст.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 35,380; Character count: 486,334

221

<pgNo>222</pgNo>
222

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Pronchatov, Ivan 1996 = Прончатов, Иван 1996:
Poetry: Сэняжа.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 2,964; Character count: 43,016
Radayev, Vasili & Anoshkin, V.1938/8 = Радаев, Василий & Аношкин, В.1938/8:
Short story: Депутат.
In Syatko, 1938/8. Саранск
Format: majorityCorpus
Word count: 5,914; Character count: 86,229
Radayev, Vasili 1964 = Радаев, Василий 1964:
Short story: Вечкевикс содавиксэнь.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 11,239; Character count: 153,655
Radayev, Vasili 1967 = Радаев, Василий 1967:
Short story: Шошма леенть чиресэ.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 11,239; Character count: 153,655
Radayev, Vasili 1969 = Радаев, Василий 1969:
Short story: Истяяк сакшны часиясь.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 11,239; Character count: 153,655
Radayev, Vasili 1973 = Радаев, Василий 1973:
Poetry: Сияжар.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 46,512; Character count: 676,843
Radayev, Vasili 1991 = Радаев, Василий 1991:
Short story: Тюштя.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 32,132; Character count: 471,653
Radayev, Mikhail 1996 = Радаев, Михаил 1996:
Drama: Тюштянь койть.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 1,285; Character count: 18,440
Raptanov, Timofei 1985 = Раптанов, Тимофей 1985:
Novel: Чихан пандо ало.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 51,732; Character count: 710,941

<pgNo>223</pgNo>
ERZYA SOURCE LITERATURE

223

Razgulyayeva, Tat’yana 1997 = Разгуляева, Татьяна 1997:
Short story: Он, Вирень азор, Чуваронь кудынеть,....
In Otsyor, 1997. Саранск
Format: majorityCorpus
Word count: 6,195; Character count: 87,440
Ruzavina, Valentina 1997 = Рузавина, Валентина 1997:
Short story: Седейстэ лисиця валт.
In Otsyor, 1997. Саранск
Format: majorityCorpus
Word count: 1,451; Character count: 20,230
- Râbov, Anatoliy 1935 = Рябов, Анатолий 1935:
Linguistics: Эрьзянь келень грамматика. Морфология.
Саранск ― .
Word count: 15,655; Character count: 237,364
- Râbov, Anatoliy 1935 = Рябов, Анатолий 1935:
Linguistics: Эрзянь келень грамматика. Средней школасо 6 классо тонавтнема книга.
Омбоце пелькс, синтаксис.
Саранск ― .
Word count: 15,643; Character count: 228,820
Sedoikin, Leonid 1991 = Седойкин, Леонид 1991:
Short story: Авань морозо.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 18,983; Character count: 256,050
Sharonov, Aleksandr 1994 = Шаронов, Александр 1994:
Folklore: Масторава.
Саранск ― Мордовской книжной издательствась.
Shcheglov, Aleksandr 1968 = Щеглов, Александр 1968:
Short story: Уцяска.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 45633; Character count: 603740
Shcheglov, Aleksandr 1974 = Щеглов, Александр 1974:
Short story: Свадьбадо икеле.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 20927; Character count: 277987
Shcheglov, Aleksandr 1980 = Щеглов, Александр 1980:
Novel: Кавксть чачозь.
Саранск ― Мордовской книжной издательствась.
Format: minorityCorpus
Word count: 94,460; Character count: 1,231,207
Shcheglov, Aleksandr 1996 = Щеглов, Александр 1996:
Poetry: Гайкстак, бандура.
In Mon’ vechkeviks knigam, 1996. Саранск
Format: majorityCorpus
Word count: 962; Character count: 13,609

<pgNo>224</pgNo>
224

ADNOMINAL PERSON IN THE MORPHOLOGICAL SYSTEM OF ERZYA

Sidorov, Viktor 1996 = Сидоров, Виктор 1996:
Short story: Сулейть.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 20,881; Character count: 287,287
Sul’dina, Anna 1979 = Сульдина, Анна 1979:
Poetry: Тештень пиземе.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 3,077; Character count: 46,360
Tarasova, Marina 1996 = Тарасова, Марина 1996:
Short story: Псакань ёвкст.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Vtulkin, Mikhail 1986 = Втулкин, Михаил 1986:
Poetry: Валдаське.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 3,004; Character count: 40,359
Vtulkin, Mikhail 1996/10–11 = Втулкин, Михаил 1996/10–11:
Short story: Равонь томбале.
In Сятко, 1996/10–11. Саранск
Format: majorityCorpus
Word count: 13,890; Character count: 196,989
Zhuravlyov, Vyachislav 1987 = Журавлёв, Вячислав 1987:
Poetry: Эрьва морось монь чачи седейсэнь.
In Maney vasolkst, 1987. Саранск
Format: majorityCorpus
Word count: 1,444; Character count: 21,265
Zhuravlyov, Vyachislav 1993 = Журавлёв, Вячислав 1993:
Short story: Овто латко ёвтнемат.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 22,028; Character count: 298,382
Zhuravlyov, Vyachislav 1996 = Журавлёв, Вячислав 1996:
Poetry: Валдо ойме.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 7,038; Character count: 101,534
Zhuravlyov, Vyachislav 1999 = Журавлёв, Вячислав 1999:
Poetry: Арсемат ды ёжот.
Саранск ― Мордовской книжной издательствась.
Format: majorityCorpus
Word count: 22,827; Character count: 315,603
Erzya corpora more extensively:
<http://www.ling.helsinki.fi/~rueter/rsc/rueter-ErzyaSource.xml>
IMDI-data files
<http://www.ling.helsinki.fi/uhlcs/metadata/corpus-metadata/uralic-lgs/mordvin>

<pgNo>225</pgNo>
## Reference Bibliography

- Aasmäe, Niina 2007: Rhythm Related Effects in Erzya. In: LINGUISTICA URALICA XLIII: 4, 268–282.

- Abondolo, D. 1987: Segments and prosodies in Erzya Mordvinian. In: K. Rédei (ed.), Studia Uralica, 219–233. Vienna: Verband d. Wiss. Ges. Österreichs.

- Aduškina 2000 = Адушкина, Н. С. 2000: Азорксчинь категориясь, Азорксчинь невтиця суффикстнэнь тевс нолдамост, Азорксчинь категориянть невтемань китне-янтнэ, Азорксчинь полавтнемасонть падеженть лувось. EKM, 89—102.

- Agafonova 2000 = Агафонова, Н. А. 2000: Местоимениясь. EKM, 124—145.

- Ahlquist, August. 1861: Versuch einer mokscha%mordwinischen Grammatik nebst Texten und Wörterverzeichniss. St. Petersburg: Eggers et Comp.

- Ahlqvist, August Engelbrekt 1859:
Läran om Verbet i Mordvinskans Mokscha%dialekt.
Akademisk Afhandling, som med den vidtberömda Historisk-Filologiska Fakultetens vid
Kejserliga Alexanders-Universitetet i Finland samtycke till offentlig granskning framställes
af August Engelbrekt Ahlqvist, Hist.-Fil. Magister. Uti hist.-filol. lärosalen den 28 Maj 1859
p. v. t. f. m.
Helsingfors: J. C. Frenckell & Son.

- Alexandra Y. Aikhenvald and R. M. W. Dixon 1998:
Dependencies between Grammatical Systems.
Language, 74, (1), 56–80.

- Alho Alhoniemi, Nina Agafonova & Mihail Mosin 1999:
Suomalais%ersäläinen sanakirja.
Turun yliopiston suomalaisen ja yleisen kielitieteen laitoksen julkaisuja 64.
Turku: Turun yliopiston suomalaisen ja yleisen kielitieteen laitos.

- Alëškina, R. A. 2000 = Алёшкина 2000: Деепричастиясь. EKM, 222–227.

- Bakker, Dik WALS Online:
Person Marking on Adpositions.
WALS Online, chap 48.
<http://wals.info/feature/48> (2010)

- Bartens, Raija 1970: On the Temporal Forms in Mordvin. FUF XXXVIII, 247–256.

- Bartens, Raija 1979: Mordvan, tšeremissin ja votjakin konjugaation infiniittisten muotojen syntaksi. Suomalais-Ugrilaisen Seuran Toimituksia 170. Helsinki: Suomalais-Ugrilainen Seura.

<pgNo>226</pgNo>

- Bartens, Raija 1999: Mordvalaiskielten rakenne ja kehitys. Suomalais-Ugrilaisen Seuran Toimituksia 232. Helsinki: Suomalais-Ugrilainen Seura.

- Bickel, Balthasar & Johanna Nichols WALS Online: Locus of Marking in Possessive Noun Phrases. Obligatory Possessive Inﬂection. In: WALS Online, chaps 24, 58. <http://wals.info/feature/24> (2010) <http://wals.info/feature/58> (2010)

- Bubrix 1930 = Бубрих, Д. В. 1930: Звуки и формы эрзянской речи по говору с. Козловки. Москва: Центральное издательство народов СССР.

- Bubrix 1947 = Бубрих, Д. В. 1947: Эрзя%мордовская грамматика % минимум (Пособие для вузов). Саранск.

- Bubrix 1953 = Бубрих, Д. В. 1953: Историческая грамматика эрзянского языка. Саранск.

- Budenz, Józhef 1869: Moksa- és erza-mordvin nyelvtan. Budapest: A M. T. Akadémia könyvkiadó-hivatalában.

- Buzakova 2000 = Бузакова, Р. Н. 2000: Падежтнень смустест, Аволь падежень формась, Валмельгаксось. EKM, 82–87, 87–89, 249–254.

- Collinder, Björn 1969 [1957]: *Survey of the Uralic languages* / compiled by Björn Collinder in collaboration with other scholars. 2nd rev. (ed.) Stockholm : Almqvist &amp; Wiksell.

- Comrie, Bernard 1981: *The languages of the Soviet Union.* Cambridge: Cambridge University Press.

- Damaskin, Rudnev 1785 = Дамаскин, Руднев 1785: *Словарь IAзыковъ разныхъ народовъ, въ Нижегородской Епархіи обитающихъ, имянно: Россіянъ, Татаръ, Чювашей, Мордвы, и Черемисъ: по высочайшему соизволенію и повелѣнію Ея Імператорскаго величества премудрой Государыни, Екатерины Алексѣевны, императрицы и Самодержицы всероссійской, По алфавиту Россійскихъ словъ Расположенной; и въ нижегородской Семінаріи отъ знающихъ онъія языки священниковъ и Семінаристовъ, подъ присмотрамъ Преізсвященнаго Дамаскина Епископа нижегородскаго и Алаторскаго*, сочиненнои 1785 года.

- Danilov, Viktor 1969 = Данилов, Виктор 1969:
К вопросу о комитативе в эрзянском языке.
Советское финно%угроведение (3), 171–174.

- Danilov, Viktor 1973 = Данилов, Виктор 1973:
Общие функции инесива в мордовских и прибалтийско-финских языках.
Советское финно%угроведение (3), 185–194.

<pgNo>227</pgNo>
- Davydov, M. M. 1963 = Давыдов, М. М. 1963: Больше-Игнатовский диалект эрзя-мордовского языка. OMD II, 118–233.

- Dëmin, V. 2001 = Дёмин, В. 2001: *Комическое в мордовской литературе (этапы эволюции)*. Тип. «Рузаевский печатник». — 260 с.

- Egorova, A. S. 1976 = Егорова, А.С. 1976: О принципах выделения категории определения в эрзянском языке. *Советское финно-угроведение* (2), 81–89.

- EKM 2000 = Эрзянь кель, морфология 2000: *Эрзянь кель, морфемика, валонь теевема ды морфология.* Вузонь эрзянь ды финнэнь отделениянь тонавтницятнень туртов
Редколлегиясь: Д.В. Цыганкин (отв. ред., Н. А. Агафонова, М. Д. Имайкина ды лият. ― Саранск: Тип. «Крас. Окт.». ― 280 с. ― Мордов.-эрзя яз.

- ERV 1993 = ЭРВ 1993:
Эрзянь%рузонь валкс = рзянско%русский словарь. Ок. 27 000 слов/ НИИ языка,
литературы, истории и экономики при Правительстве Мордовской АССР,
под ред. Серебренникова Б. А., Бузаковой Р. Н., Мосина М. В.
― М.: Рус. яз., Дигора. 803 с.

- Erina, Olʹga 1997 = Ерина, Ольга 1997:
Частицы в мордовских языках.
Dissertationes philologiae uralicae universitatis Tartuensis, 1.
Tartu: Tartu ülikooli kirjastus.

- Ermuškin, Grigorij I. 2004 = Ермушкин, Григорий И. 2004:
IX. Srednetëšskij dialekt èrzja%mordovskogo jazyka.
Mitteilungen der Societas Uralo-Altaica. Heft 24.
Moskva ― Groningen.

- Estill, Denis 2004:
Diachronic change in Erzya word stress.
Suomalais-Ugrilaisen Seuran Toimituksia 246.
Helsinki: Suomalais-Ugrilainen Seura.

- Ethnologue Online:
<http://www.ethnologue.com/show_country.asp?name=RUE>

- Evsevʹev 1963 = Евсевьев, М. Е. [1928–29]/1963
Мордовская грамматика.
(Избранные труды 4. Москва.)

- Feoktistov, A. P. 1960 = Феоктистов А.П. 1960:
Мордовские языки и их диалекты.
In: Вопросы этнической истории мордовского народа, 63–82.
Москва.

- Feoktistov, A. P. 1963 = Феоктистов А.П. 1963:
Категория притяжательности в мордовских языках.
Саранск: Мордов. кн. изд-во. — 184 с.

- Feoktistov, A. P. 1966 = Феоктистов А.П. 1966:
Мордовские языки.
In: Языки народов СССР, Том. III: Финно-угорские и самодийские языки, 172–220.
Москва: Наука.

<pgNo>228</pgNo>

- Feoktistov, A. P. 1975 = Феоктистов А.П. 1975:
Мордовские языки.
In: Основы финно-угорского языкознания: Прибалтийско-финские, саамские и
мордовские языки, 248—345.
Москва: Наука.

- Feoktistow, A.P. 1990 = Феоктистов А.П. 1990:
Die Dialekte der mordwinischen Sprachen.
In: MW Band I, XXXI–LVII.

- Feoktistov, Aleksandr & Sirkka Saarinen 2005:
Mokšamordvan murteet.
Suomalais-Ugrilaisen Seuran Toimituksia 249.
Helsinki: Suomalais-Ugrilainen Seura.

- Gabelentz, Herr Conon von der 1839:
Versuch einer Mordwinischen Grammatik.
Zeitschrift für die Kunde des Morgenlandes. II. 2–3, 235–284, 383–419.
Göttingen.

- Gheno, Danilo 1995:
„‘Mordwinisch’ oder ‘Mokschanisch und Erzanisch’?“.
In: Gábor Zaicz (red.), Zur Frage der uralischen Schriftsprachen. 57–61.
Linguistica. Series A. Studia et dissertationes 17.
Budapest: A MTA Nyelvtudományi Intézete.

- Gil, David [2005]WALS Online:
Adjectives without Nouns.
In: WALS Online, chap 61.
<http://wals.info/feature/61> (2010)

- GMYa 1962 I = ГМЯ 1962 I:
Грамматика мордовских (мокшанского и эрзянского) языков. I. Фонетика и
морфология.
Ред. М.Н. Колядёнков, Р.А. Заводова.
Саранск.

- GMYa 1980 = ГМЯ 1980:
Грамматика мордовских языков.
Под.ред. проф. Д.В.Цыганкина.
Саранск.

- Grebneva 2000 = Гребнева, А. М. 2000:
Существительноесь, Падежень лувось, Аволь невтемачинь полавтнемась, Невтемачинь
категориясь.- EKM, 73–75, 76–77, 78–82, 102–105.

- Hamari, Arja 2007:
The negation of stative relation clauses in the Mordvin languages.
Suomalais-Ugrilaisen Seuran Toimituksia 254.
Helsinki: Suomalais-Ugrilainen Seura.

- Heine, Bernd 1997:
Possession. Cognitive sources, forces, and grammaticalization.
Cambridge University Press.
HFST = Helsinki Finite-State Transducer Online:
<http://www.ling.helsinki.fi/kieliteknologia/tutkimus/hfst>

<pgNo>229</pgNo>

- Imajkina, M. D. = Имайкина, М. Д. 1996:
Эрзянский язык. Учеб. пособие для русскоязычных студентов: В 2 ч. Ч. 2.
Саранск: Изд-во Мордов. ун-та. – 180 с.

- Imajkina, M. D. = Имайкина, М. Д. 2008:
Неень шкань эрзянь келесь. Фонетика. Учебник.
Саранск: Изд-во Мордов. ун-та. – 316 с. – На мордов.-эрзя яз.

- Kalima, Jalo 1910:
Die russischen Lehnwörter im Syrjänischen.
Suomalais-Ugrilaisen Seuran Toimituksia XXIX.
Helsinki: Suomalais-Ugrilainen Seura.

- Karlsson, Fred 2000:
Defectivity.
In: Geert Booij, Christian Lehmann, Joachim Mugdan,
unter Mitarbeit von Wolfgang Kesselheim und Stavros
Skopeteas (eds.), Morphology. An International
Handbook on Inflection and Word Formation. Vol. 17.1. 647–654.
Berlin & New York: Mouton de Gruyter.

- Keresztes, László 1990:
Chrestomathia Morduinica.
Budapest: Tankönyvkiadó.

- Keresztes, László 1995:
On the Question of the Mordvinian Literary Language.
In: Gábor Zaicz (Red.), Zur Frage der uralischen Schriftsprachen. 47–55.
Linguistica. Series A: Studia et dissertationes 17.
Az MTA Nyelvtudományi Intézete.
Budapest: Kiefer Ferenc.

- Keresztes, László 1999:
Development of Mordvin definite conjugation.
Suomalais-Ugrilaisen Seuran Toimituksia 233.
Helsinki: Suomalais-Ugrilainen Seura.

- Keresztes, László 2005:
Finno-Ugric cross-language analysis: Hungarian compared with Mordvin.
In: Les langues ouraliennes aujourd’hui, Approche linguistique et cognitive. The Uralic
languages today, A linguistic and cognitive approach, 369–379.
Sous la direction de M.M.Joсelyne Fernandez-Vest.
Paris.

- Xaritonova 2000 = Харитонова, А. М. 2000:
Числительноесь. EKM, 115–123.

- Klementʹeva, E.F. 2004 = Клементьева, Е.Ф. 2004:
Категория собирательности в эрзянском языке: Учеб. пособие.
Саранск: Тип. «Крас. Окт.». — 80 с.

- Klima, László 1995:
The linguistic affinity of the Volgaic Finno%Ugrians and their ethnogenesis
(early 4th millennium BC – late 1st millennium AD). Manuscript.
Budapest.

<pgNo>230</pgNo>

- Kolâdënkov, M. N. 1940 = Колядёнков, М.Н. 1940:
Синтаксис и пунктуация, мордовских (эрзянского и мокшанского) языков.
(Приняты научной сессией Мордовского Научно-Исслудовательского Института
Социалистической Культуры при СНК МАССР 25 июля 1940 г. и утверждены СНК
МАССР 20 июля 1940 г.
Саранск: Издательство МНИИСК.

- Kolâdënkov, M. N. 1959 = Колядёнков, М.Н. 1959:
Структура простого предложения в мордовских языках.
Предложение и его главные члены.
Саранск.

- Koptjevskaja-Tamm, Maria 2008:
Adnominal possession
Uralic Typology Database Project.
Wien.
<http://uralictypology.pbworks.com/f/MKT_Wien_080924.doc>

- Krister Lindén, Miikka Silfverberg and Tommi Pirinen 2009:
HFST Tools for Morphology - An Efficient Open-Source Package for Construction of
Morphological Analyzers.
In: Cerstin Mahlow and Michael Piotrowski (eds.), State of the Art in Computational
Morphology.
Workshop on Systems and Frameworks for Computational Morphology, SFCM 2009,
Zurich, Switzerland, September 4, 2009, Proceedings.

- Kudašova 2002 = Кудашова, Любовь Александровна 2002:
Посессивность в эрзянском и венгерском языках.
Специальность 10.02.02. – языки народов Российской Федерации
(финно-угорские и самодийские).
Диссертация на соискание ученой степени кандидата филологических наук. Научный
руководитель доктор филологических наук, профессор М.В. Мосин.
Мордовский государственный университет имени Н.П. Огарёва.
Саранск.

- Kuussaari, Eero 1935:
Suomen suvun tiet.
Kuvaus Suomen sukukansojen kehityksestä sekä tuhatvuotisista vaelluksista ja
valtataisteluista.
Helsinki: Suomen heimosoturien liitto.

- Lallukka, Seppo 1992:
Venäjän uralilaisten kansojen tilastoa.
Venäjän ja Itä-Euroopan instituutti, Julkaisusarja A 16.
Helsinki.

- Luutonen, Jorma, Mikhail Mosin, Valentina Shchankina 2004:
Reverse dictionary of Mordvin = Обратный словарь мордовских языковo.
Lexica Societatis Fenno-Ugricae XXIX.
Helsinki: Suomalais-Ugrilainen Seura.

- Lyons, Christopher 1999:
Definiteness.
Cambridge University Press.

- Markov, F. P. 1961 = Марков, Ф. П. 1961:
Приалатырский диалект эрзя-мордовского языка.
OMD, 7–99.

<pgNo>231</pgNo>

- Mészáros, Edit 1999 = Месарош, Эдит 1999: *Словообразовательные суффиксы глагола в эрзянском языке.* Studia Uralo-Altaica 42.

- Mosin 2000 = Мосин, М. В. 2000:
Прилагательноесь. EKM, 108–115.

- Mosin, M. V. – N. S. Bajuškin 1983:
Ersämordvan oppikirja.
Apuneuvoja suomalais-ugrilaisten kielten opintoja varten VIII.
Helsinki: Suomalais-Ugrilainen Seura.

- Moravcsik, Edith 2003:
Inﬂectional morphology in the Hungarian noun phrase:
A typological assessment.
In: Frans Plank (ed.), Noun Phrase Structure in the Languages of Europe, 113–252.
Mouton de Gruyter.

- MW 1990:
H. Paasonens Mordwinisches Wörterbuch. Band I (A–J).
Zusammengestellt von Kaino Heikkilä.
Unter Mitarbeit von Hans-Hermann Bartens, Aleksandr Feoktistow und Grigori Jermuschkin
bearbeitet und herausgegeben von Martti Kahla.
Lexica Societatis Fenno-Ugricae XXIII, 1.
Kotimaisten kielten tutkimuskeskuksen julkaisuja 59.
Helsinki: Suomalais-Ugrilainen Seura & Kotimaisten kielten tutkimuskeskus.

- MW 1992:
H. Paasonens Mordwinisches Wörterbuch. Band II (K–M).
Zusammengestellt von Kaino Heikkilä.
Unter Mitarbeit von Hans-Hermann Bartens, Aleksandr Feoktistow und Grigori Jermuschkin
bearbeitet und herausgegeben von Martti Kahla.
Lexica Societatis Fenno-Ugricae XXIII, 2
Kotimaisten kielten tutkimuskeskuksen julkaisuja 59.
Helsinki: Suomalais-Ugrilainen Seura & Kotimaisten kielten tutkimuskeskus.

- MW 1994:
H. Paasonens Mordwinisches Wörterbuch. Band III (N–Ŕ).
Zusammengestellt von Kaino Heikkilä.
Unter Mitarbeit von Hans-Hermann Bartens, Aleksandr Feoktistow und Grigori Jermuschkin
bearbeitet und herausgegeben von Martti Kahla.
Lexica Societatis Fenno-Ugricae XXIII, 3
Kotimaisten kielten tutkimuskeskuksen julkaisuja 59.
Helsinki: Suomalais-Ugrilainen Seura & Kotimaisten kielten tutkimuskeskus.

- MW 1996:
H. Paasonens Mordwinisches Wörterbuch. Band IV (S–Ž).
Zusammengestellt von Kaino Heikkilä.
Unter Mitarbeit von Hans-Hermann Bartens, Aleksandr Feoktistow und Grigori Jermuschkin
bearbeitet und herausgegeben von Martti Kahla.
Lexica Societatis Fenno-Ugricae XXIII, 4
Kotimaisten kielten tutkimuskeskuksen julkaisuja 59.
Helsinki: Suomalais-Ugrilainen Seura & Kotimaisten kielten tutkimuskeskus.

<pgNo>232</pgNo>

- Nadʹkin, D. T. 1968 = Надькин, Д. Т. 1968:
Морфология нижнепьянского диалекта эрзя-мордовского языка.
OMD, 3–198.

- Niemi, Jaana & Mihail Mosin 1995:
Ersäläis-suomalainen sanakirja
Turun yliopiston suomalaisen ja yleisen kielitieteen laitoksen julkaisuja 48.
Turku: Turun yliopiston suomalaisen ja yleisen kielitieteen laitos.

- Nichols, Johanna 1988:
On alienable and inalienable possession.
In: W. Shipley (ed.), In Honor of Mary Haas: From the Haas Festival Conference on Native
American Linguistics, 557–609.
Berlin: Mouton de Gruyter.

- Nichols, Johanna 1992:
Linguistic Diversity in Space and Time.
Chicago: University of Chicago Press.

- Obʺedkin, V. D. 1961 = Объедкин, В. Д. 1961:
Старо-Турдаковский диалект эрзя-мордовского языка.
OMD, 100–196.

- OMD 1961 = ОМД 1961:
Очерки мордовских диалектов. Том 1.
Редакторы: доктор филологических наук. профессор М. Н. Колядёнков, Кандидат
филологических наук О. И. Чудаева.
Научно-Исследовательский Институт Языка, Литературы, Истории и Экономики при
Совете Министров Мордовской АССР.
Саранск: Мордовское Книжное Издательство.

- OMD 1963-II = ОМД 1963-II:
Очерки мордовских диалектов. Том II.
Ответственный редактор: проф. М. Н. Колядёнков.
Научно-Исследовательский Институт Языка, Литературы, Истории и Экономики при
Совете Министров Мордовской АССР.
Саранск: Мордовское Книжное Издательство.

- OMD 1968 = ОМД 1968:
Очерки мордовских диалектов. Том V.
Редакционная коллегия: И. С. Бузаков, Р. В. Бабушкина, Д. Т. Надькин.
Научно-Исследовательский Институт Языка, Литературы, Истории И Экономики При
Совете Министров Мордовской АССР.
Саранск: Мордовское книжное издательство.

- Ornatovʺ, Pavelʺ 1838 = Ортановъ, Павелъ 1838:
Мордовская грамматика.
Составленная на наречий мордвы мокши Павломъ Орнатовымъ.
Москва: Въ Синодальной тип.

- Paasonen, Heikki 1897: Die türkischen Lehnwörter im Mordwinischen. Suomalais%Ugrilaisen Seuran Aikakauskirja XV, 2, 1–64

- Paasonen, Heikki 1903: Mordvinische Lautlehre. Suomalais-Ugrilaisen Seuran Toimituksia XX. Helsinki: Suomalais-Ugrilainen Seura.

<pgNo>233</pgNo>

- Paasonen, Heikki 1953 [1909]:
Mordwinische Chrestomathie mit Glossar und grammatikalischem Abriss.
Hilfmittel für das studium der finnisch-ugrischen sprachen IV.
Helsinki: Suomalais-Ugrilainen Seura.

- Pall, Valdek 1996:
Ersa keel.
Õpiku konspekt ja sõnaloend. — 119 lk.
Tallinn.

- Pallas, P. S. = Паллас, П. С. 1789:
Сравнительные словари всҍх языковъ и нарҍчій.
Linguarum totius orbis vocabularia comparativa.
Въ Санктпетербургҍ.

- PLN 1995 = Prescriptive Literary Norms 1995:
Мокшень кяльс сёрмадомань, корхтамань, пунктуациянь норматне
Эрзянь кельсэ сёрмадомань, кортамонь, пунктуациянь лувтне. – 264 с.
Саранск: «Красный Октябрь» типографиясь.

- Polâkov, O. E. & J. Rueter 2004 = Поляков, О. Е. & J. Rueter 2004:
Мокшень и эрзянь кяльхнень фкякс% и аф фкяксшисна. Синь валлувкссна.
Эрзянь ды мокшонь кельтнень вейкекс% ды аволь вейкексчист. Сынст валлувост. / О. Е. Поляков, J. Rueter; Н.П. Огаревонь лемса Мордовскяй государственнай
университетсь.
Саранск: «Красный Октябрь» типографиясь.

- Rijkhoff, J. 2004:
The Noun Phrase.
Oxford University Press.

- Rueter, Jack 2003:
Etymological Determinate Particles in Erzya Word Derivation.
In: International Symposium of Deictic Systems and Quantification in Languages Spoken
in Europe and North and Central Asia.
Udmurt State University, Iževsk, Udmurtia, Russia, May 22–25, 2001.
Collection of Papers, 164–172. Compiled and edited by Pirkko Suihkonen and Bernard
Comrie with assistance of Sergej Anatol'evič Maksimov.
Udmurt State University, Iževsk, Udmurtia, Russia & Max Planck Institute for Evolutionary
Anthropology, Department of Linguistics, Leipzig, Germany.

- Rueter, Jack 2005:
Conﬂicting Evidence for the Erzian Genitive.
In: Hasselblatt, Cornelius, Eino Koponen und Anna Widmer (Hrsg.), Lihkkun lehkos!
Beiträge zur Finnougristik aus Anlaß des sechzigsten Geburtstages von Hans-Herman
Bartens.
Veröffentlichungen der Societas Uralo-Altaica, Bd 65.
Harrassowitz Verlag.

- Rueter, Jack 2007:
Asymmetries in Word Class Divisions with Examples pertaining to Person in Erzya.
In: 40th Annual Meeting of the Societas Linguistica Europaea 29 August – 1 September
2007.
University of Joensuu.

<pgNo>234</pgNo>

- Rueter, Jack 2009a:
Case in Erzya: A synthesis of morphology, semantics, syntactic function, and compatibility
with number person and definiteness (Disputed cases in Erzya.)
Section paper at SKY 2009: Case in and across languages.
Helsinki.

- Rueter, Jack 2009b:
Is the “-msto/-mste” formant in Erzya anything more than a deverbal noun in the elative?
Abstract for “Finiteness and Non%Finiteness” Conference in Tallinn, November 25, 2009.

- Rueter, Jack (Forthcoming):
On quantification in Erzya.
In: Typology of Quantification: On quantification in Finnish and languages spoken in the
Volga–Kama Region.

- Râbov, A. = Рябов, А. 1931: *Русско-эрзянский словарь.* Москва: Центриздат.

- Râbov, Anatoli P. = Рябов, Анатолий П. 1935: *Эрзянь морфологиянь грамматика.* Саранск.

- Salo, Merja (Forthcoming): Mordvin *t* derivates – semantic equivalent for impersonal. In: Dybo, A. V. & Yu. V. Normanskaya (eds.), *Ural-Altaic Studies*, Scientific Journal, 2: Moscow.

- Sarv, Heno 2002:
Indigenous Europeans East of Moscow.
Population and Migration Patterns of the Largest Finno-Ugrian Peoples in Russia from the
18th to the 19th Centuries.
Dissertation Geographicae Universitatis Tartuensis, 17.
Tartu.

- Siewierska, Anna 2004:
Person.
Cambridge University Press.

- Spencer, Andrew 1992:
Nominal inﬂection and the nature of functional categories.
Journal of Linguistics 28, 313–41.

- Šaxmatovʺ, A. A. 1910 = Шахматовъ, А. А. 1910:
Мордовскій этнографическій сборникъ.
С.-Петербургъ.

- Philip Johan von Strahlenberg 1730:
Das Nord- und Östliche Theil von Europa und Asia, in so weit solches das gantze
Russische Reich mit Sibirien und der grossen Tatarey in sich begriffet.
In Verlegung des Autoris.
Stockholm.

- Tixonova, T. M. 1966 = Tichonova, T. M. 1966:
Expression of definiteness and indefiniteness of the direct object in the Mordvin languages.
Советское финно-угроведение (4), 241–245.

<pgNo>235</pgNo>

- Tixonova, T. M. 1974 = Тихонова Т.М. 1974:
Суффиксы притяжательности в непритяжательном значении в волжских языках финноугорской группы.
In: Вопросы советского финно%угроведения, 119–121.
Петрозаводск.

- Tixonova, T. M. 1980 = Тихонова Т.М. 1980:
Категория лично-принадлежности; Притяжательное склонение; Указательное
склонение; Категория определенности неопределонности.
In: GMYa 1980, 182–228.

- Trosterud, Trond 2006:
Homonymy in the Uralic Two%Argument Agreement Paradigms.
Suomalais-Ugrilaisen Seuran Toimituksia 251.
Helsinki: Suomalais-Ugrilainen Seura.

- Cygankin, D. 1961 = Цыганкин, Д. 1961:
Шугуровский диалект эрзя-мордовского языка.
OMD, 294–395.

- Cygankin, D. V. 1978 = Цыганкин, Д. В. 1978:
Грамматические категории имени существительного в диалектах эрзя%мордовского
языка (определенности%неопределенности и притяжательности). — 70 с.
Саранск: Мордов. кн. изд-во.

- Cygankin 2000a = Цыганкин, Д. В. 2000a:
Валонь теевемась.
EKM, 34–37.

- Cygankin 2000b = Цыганкин, Д. В. 2000b:
Мордовские языки глазами ученого%лингвиста.
Саранск: Типография «Красный Октябрь».

- Cypkajkina 2000 = Цыпкайкина, В. П. 2000:
Глаголось.
EKM, 146–216.

- Turunen, Rigina 2010:
Nonverbal Predication in Erzya: Studies on morphosyntactic variation and part of speech
distinctions.
University of Helsinki, Faculty of Arts, Department of Finnish, Finno-Ugrian and
Scandinavian Studies.
<http://urn.fi/URN:ISBN:978-952-10-6277-3>

- WALS Online:
The World Atlas of Language Structures Online.
<http://wals.info/>

- Wiedemann, F. J. 1865:
Grammatik der ersa%mordwinischen Sprache
nebst einem kleinen mordwinisch%deutschen und deutsch%mordwinischen Wörterbuch.
Mémoires de l’académie impériale des sciences de St.-Pétersbourg, VIIE Série. Tome
IX, № 5.

<pgNo>236</pgNo>

- Witsen, Nicolaes 1705:
Noord en Oost Tartarye, Ofte Bondig Ontwerp Van eenig dier Landen en Volken Welke
voormaels bekent zijn geweest. Beneffens verscheide tot noch toe onbekende, en meest
nooit voorheen beschreve Tartersche en Nabuurige Gewesten, Landstreeken, Steden,
Rivieren, en Plaetzen, in de Noorder en Oosterlykste Gedeelten Van Asia En Europa
Verdeelt in twee Stukken, Met der zelviger Land%kaerten: mitsgaders, onderscheide
Afbeeldingen van Steden, Drachten, enz. Zedert naeuwkeurig onderzoek van veele Jaren,
door eigen ondervondinge ontworpen, beschreven, geteekent, en in ‘t licht gegeven, Door Nicolaes Witsen.
(First print: Amsterdam, 1692; Second print: Amsterdam, 1705. Reprint in 1785.)
‘t Amsterdam By François Halma, Boekverkooper op de Nieuwendyk.

- Âkuškin, A. D. 1961 = Якушкин, А. В. 1961:
Дракинский диалект эрзя-мордовского языка.
OMD, 197–293.

- Zaicz, Gábor 1998:
Mordva.
In: D. Abondolo (ed.), The Uralic Languages, 184–218.
London: Routledge.

- Zaicz, Gábor 2006:
Mordva.
In: D. Abondolo (ed.), The Uralic Languages, 184–218.
London: Routledge.

<pgNo>237</pgNo>
