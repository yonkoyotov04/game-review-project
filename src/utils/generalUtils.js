export default function getGenreViewData (gameGenre) {
    const genres = [
        {value: "action", label: "Action"},
        {value: 'adventure', label: "Adventure"},
        {value: 'rpg', label: "RPG"},
        {value: 'simulation', label: "Simulation"},
        {value: 'strategy', label: "Strategy"},
        {value: 'horror', label: "Horror"},
        {value: 'sports', label: "Sports"},
        {value: 'racing', label: "Racing"},
        {value: 'tactical', label: "Tactical"}
    ]

    const viewData = genres.map(genre => ({...genre, selected: gameGenre === genre.value ? 'selected' : ""}))
    return viewData;
}