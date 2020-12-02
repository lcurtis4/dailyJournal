const journal = [
    {
        id: 1,
        date: "07/9/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS ", 
        mood: "Got it"
    },
    {
        id: 2,
        date: "07/11/2020",
        concept: "terminal",
        entry: "we walked through how to do alot of stuff in the terminal",  
        mood: "Got it"
    },
    {
        id: 3,
        date: "07/10/2020",
        concept: "git",
        entry: "we did git stuff today and worked to push and pull things down  ", 
        mood: "kinda"
    }
]

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)    
    )
    return sortedByDate
}