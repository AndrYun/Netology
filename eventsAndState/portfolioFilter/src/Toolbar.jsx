function Toolbar({ filters, selected, onSelectedFilter }) {
    return (
        <>
            {filters.map((filter) => (
                <button
                key={filter}
                className={`button btn-${filter.toLowerCase()}`}
                onClick={onSelectedFilter}
                >
                {filter}
                </button>
            ))}
        </>
    );
}

export default Toolbar