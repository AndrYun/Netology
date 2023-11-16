function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <>
            {filters.map((filter) => (
                <button
                key={filter}
                className={`button btn-${filter.toLowerCase()}`}
                onClick={onSelectFilter}
                >
                {filter}
                </button>
            ))}
        </>
    );
}

export default Toolbar