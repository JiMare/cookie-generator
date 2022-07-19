# Uuid a cookie generator 

vytvořeno pro účel výběrového řízení

# Zadání:

CIL
Generovat a ukladat na klientu (v prohlizeci) unikatni identifikator per zarizeni per domena. 
Unikatni identifikator identifikuje zarizeni, ktere pristoupilo na danou domenu.
Priklad
Pokud pristoupim na domenu A se zarizenim PC1 dostanu identifikator ID1. 
Pokud na tu samou domenu pristoupim se zarizenim PC2, dostanu identifikator ID2. A tak dale.
Pokud pristoupim na domenu B se zarizenim PC1 dostavam identifikator ID3, takto neustale dale.

TECHNICKE ZADANI
Napiste javascriptovou knihovnu, idealne jako ES6 class (singleton), ktera bude vystavovat verejnou metodu, 
pri jejimz zavolani dojde k vygenerovani a ulozeni identifikatoru (nejde o fingerprinting) do cookie.

Algoritmus generujici identifikator vymyslete, omezujici podminky jsou:
- muzete se inspirovat https://www.npmjs.com/package/uuid, nicmene datove by cela knihovna nemela prekrocit 10 - 15 kB
- nesmi to byt cislna rada
- algoritmus nesmi byt vykonove narocny
- mel by vyuzivat API ktere poskytuji browsery - myslete vsak na zpetnou kompatibilitu (od IE 11)

Uloziste
- do cookie
- cookie je ulozna pro konkretni domenu
- cesta nehraje roli
- expirace je jeden rok

# Test report

**testovací scénář 1:** krok 1) na zařízení A navštivte adresu s běžící aplikací
                    krk  2) ověřte v dev tool, že byla vytvořena cookie name uuid s vygenerovaným uuid
                    výsledek: **pass**

**testovací scénář 2:** krok 1) zapiště si hodnotu cookie z testovacího scénaře 1
                    krok 2) na zařízení A navštivte opětovně adresu s běžící aplikací
                    krk  3) ověřte v dev tool, že nebyla vytvořena nová cookie name uuid s vygenerovaným uuid, ale hodnota se nezměnila
                    výsledek: **pass**   

**testovací scénář 2:** krok 1) zapiště si hodnotu cookie z testovacího scénaře 1
                    krok 2) na zařízení B navštivte adresu s běžící aplikací
                    krk  3) ověřte v dev tool, že byla vytvořena nová cookie name uuid s vygenerovaným uuid, jajíž hodnota se neshoduje s hodnotou cookie zapsanoou v kroce 1
                    výsledek: **pass** 

