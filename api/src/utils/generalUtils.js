export default function getGenreViewData (gameGenre) {
    const genres = [
        {value: "Action", label: "Action"},
        {value: 'Adventure', label: "Adventure"},
        {value: 'RPG', label: "RPG"},
        {value: 'Fighting', label: "Fighting"},
        {value: 'FPS', label: "FPS"},
        {value: 'Simulation', label: "Simulation"},
        {value: 'Strategy', label: "Strategy"},
        {value: 'Horror', label: "Horror"},
        {value: 'Sports', label: "Sports"},
        {value: 'Racing', label: "Racing"},
        {value: 'Tactical', label: "Tactical"},
        {value: 'MMO', label: "MMO"}
    ]

    const viewData = genres.map(genre => ({...genre, selected: gameGenre === genre.value ? 'selected' : ""}))
    return viewData;
}