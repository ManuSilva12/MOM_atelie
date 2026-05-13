export function FilterButton ({ children, active, onClick }) {
    return (
        <button
            className={`
                border
                border-[#213131]
                px-5
                py-2
                uppercase
                tracking-[2px]
                text-[0.7rem]
                text-[#213131]
                ${active ? 'bg-[#213131] text-[#efede1]' : 'hover:bg-[#213131] hover:text-[#efede1]'}
                transition-all
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}