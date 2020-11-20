const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS ", 
        mood: "Got it"
    },
    {
        id: 2,
        date: "07/2/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS ", 
        mood: "Got it"
    },
    {
        id: 3,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS ", 
        mood: "Got it"
    }
]

export const useJournalEntries = () => {
    const cortedByDate = journal.sort(

        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}