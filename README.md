Consegna
 
Una delle due librerie che usiamo è “React con Material UI”, alcuni aspetti importanti:
•	Grid     
•     
•	Layout che permette di gestire agilmente il responsive
•	

•	Style
•        
•	Style del componente innestato al suo interno.
•	

•	I componenti in generale possono aiutarti a creare dei piccoli esempi.
•	Prendi confidenza con gli hooks (useState & useEffect) in particolare.
 
Il mio consiglio è di allenarti con i due concetti sopra, applicati alla divisione di un’applicazione tra: (crea due cartelle containers(Master) & components(Slave))
•	Containers -> Master    (vedi tu se fare una class o un functional component)
•        
•	Gestione dello stato e delle chiamate API (Json finto e lo leggi Attività con gli item) (fetch).           (oppure usa jsonplaceholder cerca su internet)      
    
•	Components -> Slave
•        
•	Gestione della parte rendering e stato locale per operazioni basilari. (e stile)
 
NB: Creati alcuni progetti di esempi e dividi il sorgente fin da subito nelle due cartelle sopra.
 
Come esempi di progetti fai qualcosa tipo:
•	Una lista di attività
•        
•	Ogni attività può essere completata oppure no. (checkbox)
•	Ogni attività può essere rimossa
•	Un bottone per aggiungere una nuova attività alla lista.
•	Un bottone per salvare tutta la lista.
•	Un Bottone per eliminare tutte le attività completate.
 
Se riesci (Opzionale) usa React con TypeScript (usa sempre type non interface, se non ti torna qualcosa metti pure any).
Es: typescript:
export type IAndrea ={
              name:string;
              age:number;
              test?:string; //può esserci come no indicazione del ?
              onSaveAll: Function
              onDelAll: any
}
Const [stateAndrea, setStateAndrea] = useState<IAndrea>({
              INITIAL STATE.
})
Ti chiedo di inviarmi questo progetto anche via mail file zip.
Nei prossimi 7 gg.
Grazie.
Ciao.
https://github.com/SimoneRicciardo/TodoList-React-MUI.git
