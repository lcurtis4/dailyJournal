import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLog = document.querySelector("main")

export const EntryListComponent = () => {
    const entries = useJournalEntries ()

    for (const entry of entries) { 
        const entryHTML = JournalEntryComponent(entry)
        entryLog.innerHTML += entryHTML
    }
}