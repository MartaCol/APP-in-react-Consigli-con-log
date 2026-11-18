applicazione che consenta all’utente di:
-inserire una lista di consigli utili (es. “Fai una passeggiata”, “Bevi acqua”);
se
l’utente prova a inserire un consiglio già presente, deve essere mostrato in
console un avviso
che segnali il duplicato e il consiglio non deve essere re-
inserito
-estrarre casualmente un consiglio dalla lista e visualizzarlo
-tenere traccia di quante visualizzazioni dei consigli ci sono state
-rimuovere un consiglio visualizzato dalla vista
-visualizzare in console la lista aggiornata dei consigli quando un nuovo consiglio
viene aggiunto o un consiglio viene eliminato
-osservare il ciclo di vita del componente che mostra il consiglio; i log relativi al
ciclo di vita devono essere mostrati in console

Il progetto dovrà quindi:
-usare la Context API per condividere lo stato dei consigli
-utilizzare la prop
children
per rendere i componenti contenitori flessibili
-applicare un HOC per aggiungere una funzionalità concreta (es. limitare il
numero di consigli mostrati)
Gestire lo stato tramite useState per:
-la lista dei consigli
-il consiglio selezionato
-il contatore di visualizzazioni totali
Utilizzare inoltre useEffect per:
-loggare quando il consiglio viene mostrato
-loggare quando il consiglio viene rimosso
-rilevare se il consiglio è stato mostrato di nuovo
