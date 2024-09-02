# myv-bidix, Erzya to X

These are the Apertium-style XML files for shallow-transfer, rule-based machine translation of Erzya to X. They represent but one of the download possibilities Erzya-language dictionary materials annotated on Veʹrdd.
The dictionary editing platform is located [here](https://akusanat.com/verdd).
# Cite

If you use this data set in an academic publication, we would be ever so grateful if you cited it as follows:

Hämäläinen, M., Alnajjar, K., Rueter, J., Lehtinen, M. & Partanen, N., 2021, An Online Tool Developed for Post-Editing the New Skolt Sami Dictionary. In Kosem, I., Cukr, M., Jakubíček, M., Kallas, J., Krek, S. & Tiberius, C. (eds.), Electronic lexicography in the 21st century (eLex 2021). Proceedings of the eLex 2021 conference. Brno: Lexical Computing CZ s.r.o., p. 653-664 12 p. (Electronic lexicography in the 21st century (eLex 2021). Proceedings of the eLex 2021 conference).


# Introduction

This is a collection of Apertium XML files for Erzya to X for use in Apertium shallow-transfer rule-based machine translation.

The content has been edited on the dictionary editing platform Veʹrdd.

Each line contains two entries with indication of translation orientation as an attribute in the <e> element. If r=LR, translation is limited to left-to-right, if r=RL, translation is limited to right-to-left, If no r attribute is present, both orientations are acceptible.

For each language pair there are two .dix files. The one in -approved.dix indicates that the translation pairs have been manually approved. The one in -not_approved.dix indicates they have not been manually approved and therefore may contain translation pairs that are not valid.
