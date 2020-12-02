export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <div class="entry_date">${entry.date}</div>
        <div class="entry_date">${entry.entry}</div>
        </section>
    `
}
